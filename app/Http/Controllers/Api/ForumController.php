<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Reply;
use App\Models\Answer;
use App\Models\Question;
use App\Models\ForumCategory;
use App\Models\Report;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class ForumController extends Controller
{
    /**
     * Common eager-load closure so every listing endpoint returns the
     * same shape (answers -> user + replies.user, plus reports).
     */
    private function withAnswers($query)
    {
        return $query->with([
            'user',
            'answers' => function ($q) {
                $q->with(['user', 'replies.user'])
                    ->orderBy('is_verified_by_counselor', 'desc')
                    ->orderBy('created_at', 'asc');
            },
            'answers.reports',
            'reports',
        ]);
    }

    private function counsellors()
    {
        return User::with('counselorDetail')
            ->where('role', 'counselor')
            ->where('is_active', true)
            ->get()
            ->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'qualification' => $user->counselorDetail->qualification ?? '',
                    'subject' => $user->counselorDetail->subject ?? '',
                ];
            });
    }

    /**
     * GET /api/forum?category=slug
     * Public forum listing.
     */
    // public function index(Request $request): JsonResponse
    // {
    //     $categorySlug = $request->query('category');

    //     $query = $this->withAnswers(Question::query())
    //         ->when(Auth::guard('sanctum')->check(), function ($q) {
    //             // Hide questions bookmarked by the CURRENT logged-in user
    //             $q->where(function ($sub) {
    //                 $sub->where('isBookmarked', false)
    //                     ->orWhere('by_bookmarked', '!=', Auth::guard('sanctum')->id());
    //             });
    //         })
    //         ->when($categorySlug, function ($q) use ($categorySlug) {
    //             $q->whereRaw(
    //                 "LOWER(category_id::text)::jsonb @> ?",
    //                 [json_encode([strtolower($categorySlug)])]
    //             );
    //         });

    //     $questions = $query->latest()->paginate($request->integer('per_page', 15));

    //     return response()->json([
    //         'success' => true,
    //         'forumCategory' => ForumCategory::orderBy('name', 'asc')->get(),
    //         'questions' => $questions,
    //         'counsellorsData' => $this->counsellors(),
    //     ]);
    // }

    public function index(Request $request)
    {
        $categorySlug = $request->query('category');

        $questions = Question::with([
                'user',
                'answers' => function ($query) {
                    $query->with(['user', 'replies.user'])
                        ->orderBy('is_verified_by_counselor', 'desc')
                        ->orderBy('created_at', 'asc');
                },
                'answers.reports',
                'reports'
            ])
            ->when(Auth::check(), function ($query) {
                $query->where(function ($q) {
                    $q->where('isBookmarked', false)
                      ->orWhere('by_bookmarked', '!=', Auth::id());
                });
            })
            ->when($categorySlug, function ($query) use ($categorySlug) {
                $query->whereRaw(
                    "LOWER(category_id::text)::jsonb @> ?",
                    [json_encode([strtolower($categorySlug)])]
                );
            })
            ->get();

        return response()->json([
            'status'  => true,
            'message' => 'Forum data fetched successfully.',
            'data'    => [
                'forumCategory'   => ForumCategory::orderBy('name', 'asc')->get(),
                'questions'       => $questions,
                'counsellorsData' => $this->counsellors(),
            ],
        ]);
    }


    /**
     * GET /api/forum/my-questions?category=slug
     * Auth required.
     */
    public function myQuestions(Request $request): JsonResponse
    {
        $categorySlug = $request->query('category');

        $questions = $this->withAnswers(Question::query())
            ->when($categorySlug, function ($q) use ($categorySlug) {
                $q->whereRaw(
                    "LOWER(category_id::text)::jsonb @> ?",
                    [json_encode([strtolower($categorySlug)])]
                );
            })
            ->where('user_id', $request->user()->id)
            ->latest()
            ->paginate($request->integer('per_page', 15));

        return response()->json([
            'success' => true,
            'title' => 'My Questions',
            'questions' => $questions,
           // 'forumCategory' => ForumCategory::orderBy('name', 'asc')->get(),
           // 'counsellorsData' => $this->counsellors(),
        ]);
    }

    /**
     * GET /api/forum/replies?counsellor_id=optional
     * Auth required.
     */
    public function replies(Request $request): JsonResponse
    {

        $counselorId = $request->query('counsellor_id');
        $counselorName = null;

        if ($counselorId) {
            $userId = $counselorId;
            $counselor = User::find($counselorId);
            if ($counselor) {
                $counselorName = $counselor->name;
            }
        } else {
            $userId = $request->user()->id;
        }

        // $questions = $this->withAnswers(Question::query())
        //     ->whereHas('answers', function ($q) use ($userId) {
        //         $q->where('user_id', $userId);
        //     })
        //     ->latest()
        //     ->paginate($request->integer('per_page', 15));

        $questions = $this->withAnswers(Question::query())
            ->whereHas('answers', function ($q) use ($userId) {
                $q->where('user_id', $userId)
                ->orWhereHas('replies', function ($q) use ($userId) {
                    $q->where('user_id', $userId);
                });
            })
            ->latest()
            ->paginate($request->integer('per_page', 15));

    

        return response()->json([
            'success' => true,
            'title' => $counselorName ? $counselorName . "'s Replies" : 'My Replies',
            'questions' => $questions,
           // 'forumCategory' => ForumCategory::orderBy('name', 'asc')->get(),
            'counselorName' => $counselorName,
            'counsellor_id' => $counselorId,
            //'counsellorsData' => $this->counsellors(),
        ]);
    }

    /**
     * GET /api/forum/bookmarked?category=slug
     * Auth required.
     */
    public function bookmarked(Request $request): JsonResponse
    {
        $categorySlug = $request->query('category');

        $questions = $this->withAnswers(Question::query())
            ->when($categorySlug, function ($q) use ($categorySlug) {
                $q->whereRaw(
                    "LOWER(category_id::text)::jsonb @> ?",
                    [json_encode([strtolower($categorySlug)])]
                );
            })
            ->where('isBookmarked', true)
            ->where('by_bookmarked', $request->user()->id)
            ->latest()
            ->paginate($request->integer('per_page', 15));

        return response()->json([
            'success' => true,
            'title' => 'Bookmarked Threads',
            'questions' => $questions,
            //'forumCategory' => ForumCategory::orderBy('name', 'asc')->get(),
            //'counsellorsData' => $this->counsellors(),
        ]);
    }

    /**
     * GET /api/forum/profile
     * Auth required.
     */
    public function profile(Request $request): JsonResponse
    {
        return response()->json([
            'success' => true,
            'user' => $request->user(),
            'description' => 'View and edit your forum profile information.',
          //  'forumCategory' => ForumCategory::orderBy('name', 'asc')->get(),
           // 'counsellorsData' => $this->counsellors(),
        ]);
    }

    /**
     * POST /api/forum/{threadId}/reply
     * Body: { content }
     * Auth required.
     */
    public function storeQuestionReply(Request $request, $threadId): JsonResponse
    {
        try {
            $request->validate([
                'content' => 'required|string|max:5000|min:3',
            ]);

            $user = $request->user();

            $thread = Question::find($threadId);
            if (!$thread) {
                return response()->json([
                    'success' => false,
                    'error' => 'Thread not found',
                    'message' => 'The question you are replying to does not exist.',
                ], 404);
            }

            $existingAnswer = Answer::where('question_id', $threadId)
                ->where('user_id', $user->id)
                ->first();

            if ($existingAnswer) {
                return response()->json([
                    'success' => false,
                    'error' => 'Already replied',
                    'message' => 'You have already posted a reply to this question.',
                    'existing_answer_id' => $existingAnswer->id,
                ], 409);
            }

            $answer = Answer::create([
                'content' => $request->input('content'),
                'question_id' => $threadId,
                'user_id' => $user->id,
                'is_verified_by_counselor' => $user->role === 'counselor' ? 1 : 0,
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Reply posted successfully!',
                'answer' => [
                    'id' => $answer->id,
                    'content' => $answer->content,
                    'user' => [
                        'name' => $user->name,
                        'role' => $user->role === 'counselor' ? 'counselor' : $user->role,
                    ],
                    'author_name' => $user->name,
                    'author_type' => $user->role === 'counselor' ? 'counselor' : $user->role,
                    'avatar_url' => $user->avatar,
                    'is_counselor_verified' => (bool) $answer->is_verified_by_counselor,
                    'upvotes' => 0,
                    'is_helpful' => false,
                    'is_reported' => false,
                    'replies' => [],
                    'relativeTime' => 'Just now',
                    'showAllReplies' => false,
                    // 'isMine' => true,
                    // 'canDelete' => true,
                ],
            ], 201);
        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'error' => 'Validation failed',
                'message' => 'Please check your input.',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            Log::error('Forum reply error', [
                'thread_id' => $threadId,
                'user_id' => $request->user()?->id,
                'error' => $e->getMessage(),
            ]);

            return response()->json([
                'success' => false,
                'error' => 'Server error',
                'message' => 'Something went wrong. Please try again.',
            ], 500);
        }
    }

    /**
     * DELETE /api/forum/answers/{answerId}
     * Auth required, owner only.
     */
    public function destroyAnswer(Request $request, $answerId): JsonResponse
    {
        try {
            $answer = Answer::find($answerId);

            if (!$answer) {
                return response()->json([
                    'success' => false,
                    'error' => 'Answer not found',
                    'message' => 'The answer you are trying to delete does not exist.',
                ], 404);
            }

            if ($answer->user_id !== $request->user()->id) {
                return response()->json([
                    'success' => false,
                    'error' => 'Permission denied',
                    'message' => 'You can only delete your own answers.',
                ], 403);
            }

            $answer->delete();

            return response()->json([
                'success' => true,
                'message' => 'Answer deleted successfully.',
                'deleted_id' => $answerId,
            ]);
        } catch (\Exception $e) {
            Log::error('Delete answer error', [
                'answer_id' => $answerId,
                'user_id' => $request->user()?->id,
                'error' => $e->getMessage(),
            ]);

            return response()->json([
                'success' => false,
                'error' => 'Server error',
                'message' => 'Failed to delete answer. Please try again.',
            ], 500);
        }
    }

    /**
     * POST /api/forum/report
     * Body: { reason, details?, target_type, target_id }
     * Auth required.
     */
    public function saveReport(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'reason' => 'required|string|max:255',
            'details' => 'nullable|string|max:1000',
            'target_type' => 'required|string|in:question,answer,reply,content',
            'target_id' => 'required|integer',
        ]);

        $user = $request->user();

        $content = $this->getContent($validated['target_type'], $validated['target_id']);

        if (!$content) {
            return response()->json([
                'success' => false,
                'message' => 'The content you are trying to report does not exist.',
            ], 404);
        }

        $contentUserId = $content->user_id ?? $content->created_by ?? null;

        if ($contentUserId && $contentUserId === $user->id) {
            return response()->json([
                'success' => false,
                'message' => 'You cannot report your own content.',
            ], 400);
        }

        $existingReport = Report::where([
            'user_id' => $user->id,
            'reportable_type' => $this->getModelClass($validated['target_type']),
            'reportable_id' => $validated['target_id'],
        ])->first();

        if ($existingReport) {
            return response()->json([
                'success' => false,
                'message' => 'You have already reported this content.',
            ], 400);
        }

        $report = Report::create([
            'user_id' => $user->id,
            'reportable_type' => $this->getModelClass($validated['target_type']),
            'reportable_id' => $validated['target_id'],
            'reason' => $validated['reason'],
            'details' => $validated['details'] ?? null,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Report submitted successfully.',
            'report' => $report,
        ], 201);
    }

    /**
     * Resolve the model instance being reported.
     */
    private function getContent($type, $id)
    {
        return match ($type) {
            'question' => Question::find($id),
            'answer' => Answer::find($id),
            'reply' => Reply::find($id),
            'content' => Question::find($id),
            default => null,
        };
    }

    /**
     * Resolve the polymorphic model class for a report target type.
     */
    private function getModelClass($type)
    {
        return match ($type) {
            'question' => Question::class,
            'answer' => Answer::class,
            'reply' => Reply::class,
            'content' => Question::class,
            default => null,
        };
    }

    /**
     * POST /api/forum/questions/{question}/bookmark
     * Auth required.
     */
    public function toggleBookmark(Request $request, Question $question): JsonResponse
    {
        $user = $request->user();

        try {
            if ($question->by_bookmarked == $user->id) {
                $question->isBookmarked = false;
                $question->by_bookmarked = 0;
                $message = 'Bookmark removed successfully';
                $isBookmarked = false;
            } else {
                $question->isBookmarked = true;
                $question->by_bookmarked = $user->id;
                $message = 'Question bookmarked successfully';
                $isBookmarked = true;
            }

            $question->save();

            return response()->json([
                'success' => true,
                'message' => $message,
                'isBookmarked' => $isBookmarked,
                'status_text' => $isBookmarked ? 'Bookmarked' : 'Not Bookmarked',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error updating bookmark: ' . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * POST /api/forum/{threadId}/nested-reply
     * Body: { content, answer_id }
     * Auth required.
     */
    public function storeNestedReply(Request $request, $threadId): JsonResponse
    {
        $validated = $request->validate([
            'content' => 'required|string|max:1000',
            'answer_id' => 'required|integer|exists:answers,id',
        ]);

        $user = $request->user();

        $reply = Reply::create([
            'content' => $validated['content'],
            'user_id' => $user->id,
            'answer_id' => $validated['answer_id'],
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Nested reply created successfully.',
            'reply' => $reply->load('user'),
        ], 201);
    }

    /**
     * DELETE /api/forum/replies/{id}
     * Auth required, owner only.
     */
    public function destroyNestedReplies(Request $request, $id): JsonResponse
    {
        try {
            $reply = Reply::find($id);

            if (!$reply) {
                return response()->json([
                    'success' => false,
                    'error' => 'Reply not found',
                    'message' => 'The reply you are trying to delete does not exist.',
                ], 404);
            }

            if ($reply->user_id !== $request->user()->id) {
                return response()->json([
                    'success' => false,
                    'error' => 'Permission denied',
                    'message' => 'You can only delete your own replies.',
                ], 403);
            }

            $reply->delete();

            return response()->json([
                'success' => true,
                'message' => 'Reply deleted successfully.',
                'deleted_id' => $id,
            ]);
        } catch (\Exception $e) {
            Log::error('Delete reply error', [
                'reply_id' => $id,
                'user_id' => $request->user()?->id,
                'error' => $e->getMessage(),
            ]);

            return response()->json([
                'success' => false,
                'error' => 'Server error',
                'message' => 'Failed to delete reply. Please try again.',
            ], 500);
        }
    }

    /**
     * POST /api/forum/answers/{answer}/helpful
     * Body: { helpful } (boolean)
     * Auth required.
     */
    public function toggleAnswerHelpful(Request $request, Answer $answer): JsonResponse
    {
        $helpful = $request->input('helpful', $request->input('is_helpful'));
        $helpful = filter_var($helpful, FILTER_VALIDATE_BOOLEAN);

        if ($helpful) {
            $answer->increment('upvotes');
        } elseif ($answer->upvotes > 0) {
            $answer->decrement('upvotes');
        }

        $answer->refresh();

        return response()->json([
            'success' => true,
            'helpful' => $helpful,
            'upvotes' => $answer->upvotes,
        ]);
    }

    /**
     * POST /api/forum/replies/{reply}/helpful
     * Body: { helpful } (boolean)
     * Auth required.
     */
    public function toggleReplyHelpful(Request $request, Reply $reply): JsonResponse
    {
        $helpful = $request->input('helpful', $request->input('is_helpful'));
        $helpful = filter_var($helpful, FILTER_VALIDATE_BOOLEAN);

        if ($helpful) {
            $reply->increment('upvotes');
        } elseif ($reply->upvotes > 0) {
            $reply->decrement('upvotes');
        }

        $reply->refresh();

        return response()->json([
            'success' => true,
            'helpful' => $helpful,
            'upvotes' => $reply->upvotes,
            'reply_id' => $reply->id,
        ]);
    }
}
