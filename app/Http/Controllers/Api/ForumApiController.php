<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Reply;
use Illuminate\Http\Request;
use App\Models\Question;
use App\Models\ForumCategory;
use Illuminate\Support\Facades\Auth;
use App\Models\Answer;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Log;
use App\Models\Report;
use App\Models\User;

class ForumApiController extends Controller
{
    /**
     * GET /api/forum
     * List all questions (optionally filtered by category), plus categories and counsellors.
     */
    public function forum(Request $request)
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
                'counsellorsData' => $this->counsellorsList(),
            ],
        ]);
    }

    /**
     * GET /api/forum/my-questions
     */
    public function myQuestions(Request $request)
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
            ->when($categorySlug, function ($query) use ($categorySlug) {
                $query->whereRaw(
                    "LOWER(category_id::text)::jsonb @> ?",
                    [json_encode([strtolower($categorySlug)])]
                );
            })
            ->where('user_id', auth()->id())
            ->get();

        return response()->json([
            'status'  => true,
            'message' => 'My questions fetched successfully.',
            'data'    => [
                'title'           => 'My Questions',
                'questions'       => $questions,
                'forumCategory'   => ForumCategory::orderBy('name', 'asc')->get(),
                'counsellorsData' => $this->counsellorsList(),
            ],
        ]);
    }

    /**
     * GET /api/forum/replies
     */
    public function replies(Request $request)
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
            $userId = auth()->id();
        }

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
            ->whereHas('answers', function ($query) use ($userId) {
                $query->where('user_id', $userId);
            })
            ->get();

        return response()->json([
            'status'  => true,
            'message' => 'Replies fetched successfully.',
            'data'    => [
                'title'           => $counselorName ? $counselorName . "'s Replies" : 'My Replies',
                'questions'       => $questions,
                'forumCategory'   => ForumCategory::orderBy('name', 'asc')->get(),
                'counselorName'   => $counselorName,
                'counsellor_id'   => $counselorId,
                'counsellorsData' => $this->counsellorsList(),
            ],
        ]);
    }

    /**
     * GET /api/forum/bookmarked
     */
    public function bookmarked(Request $request)
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
            ->when($categorySlug, function ($query) use ($categorySlug) {
                $query->whereRaw(
                    "LOWER(category_id::text)::jsonb @> ?",
                    [json_encode([strtolower($categorySlug)])]
                );
            })
            ->where('isBookmarked', true)
            ->where('by_bookmarked', '=', auth()->id())
            ->get();

        return response()->json([
            'status'  => true,
            'message' => 'Bookmarked threads fetched successfully.',
            'data'    => [
                'title'           => 'Bookmarked Threads',
                'questions'       => $questions,
                'forumCategory'   => ForumCategory::orderBy('name', 'asc')->get(),
                'counsellorsData' => $this->counsellorsList(),
            ],
        ]);
    }

    /**
     * GET /api/forum/profile
     */
    public function profile()
    {
        $user = Auth::user();

        return response()->json([
            'status'  => true,
            'message' => 'Profile fetched successfully.',
            'data'    => [
                'forumCategory'   => ForumCategory::orderBy('name', 'asc')->get(),
                'user'            => $user,
                'description'     => 'View and edit your forum profile information.',
                'counsellorsData' => $this->counsellorsList(),
            ],
        ]);
    }

    /**
     * POST /api/forum/{threadId}/reply
     */
    public function storeQuestionReply(Request $request, $threadId)
    {
        try {
            $request->validate([
                'content' => 'required|string|max:5000|min:3',
            ]);

            if (!auth()->check()) {
                return response()->json([
                    'success' => false,
                    'error'   => 'Authentication required',
                    'message' => 'Please log in to post a reply.',
                ], 401);
            }

            $user = auth()->user();

            $thread = Question::find($threadId);
            if (!$thread) {
                return response()->json([
                    'success' => false,
                    'error'   => 'Thread not found',
                    'message' => 'The question you are replying to does not exist.',
                ], 404);
            }

            $existingAnswer = Answer::where('question_id', $threadId)
                ->where('user_id', $user->id)
                ->first();

            if ($existingAnswer) {
                return response()->json([
                    'success'             => false,
                    'error'               => 'Already replied',
                    'message'             => 'You have already posted a reply to this question.',
                    'existing_answer_id'  => $existingAnswer->id,
                ], 409);
            }

            $answer = Answer::create([
                'content'                  => $request->input('content'),
                'question_id'              => $threadId,
                'user_id'                  => $user->id,
                'is_verified_by_counselor' => $user->role === 'counselor' ? 1 : 0,
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Reply posted successfully!',
                'answer'  => [
                    'id'                    => $answer->id,
                    'content'               => $answer->content,
                    'user' => [
                        'name' => $user->name,
                        'role' => $user->role === 'counselor' ? 'counselor' : $user->role,
                    ],
                    'author_name'           => $user->name,
                    'author_type'           => $user->role === 'counselor' ? 'counselor' : $user->role,
                    'avatar_url'            => $user->avatar,
                    'is_counselor_verified' => (bool) $answer->is_verified_by_counselor,
                    'upvotes'               => 0,
                    'is_helpful'            => false,
                    'is_reported'           => false,
                    'replies'               => [],
                    'relativeTime'          => 'Just now',
                    'showAllReplies'        => false,
                    'isMine'                => true,
                    'canDelete'             => true,
                ],
            ], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'error'   => 'Validation failed',
                'message' => 'Please check your input.',
                'errors'  => $e->errors(),
            ], 422);

        } catch (\Exception $e) {
            Log::error('Forum reply error', [
                'thread_id' => $threadId,
                'user_id'   => auth()->id(),
                'error'     => $e->getMessage(),
            ]);

            return response()->json([
                'success' => false,
                'error'   => 'Server error',
                'message' => 'Something went wrong. Please try again.',
            ], 500);
        }
    }

    /**
     * DELETE /api/forum/answers/{answerId}
     */
    public function destroyAnswer(Request $request, $answerId)
    {
        try {
            if (!auth()->check()) {
                return response()->json([
                    'success' => false,
                    'error'   => 'Authentication required',
                    'message' => 'Please log in to delete your answer.',
                ], 401);
            }

            $answer = Answer::find($answerId);

            if (!$answer) {
                return response()->json([
                    'success' => false,
                    'error'   => 'Answer not found',
                    'message' => 'The answer you are trying to delete does not exist.',
                ], 404);
            }

            if ($answer->user_id !== auth()->id()) {
                return response()->json([
                    'success' => false,
                    'error'   => 'Permission denied',
                    'message' => 'You can only delete your own answers.',
                ], 403);
            }

            $answer->delete();

            return response()->json([
                'success'    => true,
                'message'    => 'Answer deleted successfully.',
                'deleted_id' => $answerId,
            ]);

        } catch (\Exception $e) {
            Log::error('Delete answer error', [
                'answer_id' => $answerId,
                'user_id'   => auth()->id(),
                'error'     => $e->getMessage(),
            ]);

            return response()->json([
                'success' => false,
                'error'   => 'Server error',
                'message' => 'Failed to delete answer. Please try again.',
            ], 500);
        }
    }

    /**
     * POST /api/forum/report-thread
     * (kept for backward compatibility with the old "store" name)
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'thread_id' => 'required|exists:threads,id',
            'reason'    => 'required|string|max:255',
            'details'   => 'nullable|string|max:2000',
        ]);

        $report = Report::create([
            'thread_id' => $validated['thread_id'],
            'user_id'   => $request->user()->id,
            'reason'    => $validated['reason'],
            'details'   => $validated['details'] ?? null,
        ]);

        return response()->json([
            'status'  => true,
            'message' => 'Report submitted successfully.',
            'data'    => $report,
        ], 201);
    }

    /**
     * POST /api/forum/report
     */
    public function saveReport(Request $request)
    {
        Log::debug('Report request data:', $request->all());

        $validated = $request->validate([
            'reason'      => 'required|string|max:255',
            'details'     => 'nullable|string|max:1000',
            'target_type' => 'required|string',
            'target_id'   => 'required|integer',
        ]);

        $user = Auth::user();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'You must be logged in to report content.',
            ], 401);
        }

        $content = $this->getContent($validated['target_type'], $validated['target_id']);

        $contentUserId = $content->user_id ?? $content->created_by ?? null;

        if ($contentUserId && $contentUserId === $user->id) {
            return response()->json([
                'success' => false,
                'message' => 'You cannot report your own content.',
            ], 400);
        }

        $existingReport = Report::where([
            'user_id'         => $user->id,
            'reportable_type' => $this->getModelClass($validated['target_type']),
            'reportable_id'   => $validated['target_id'],
        ])->first();

        if ($existingReport) {
            return response()->json([
                'success' => false,
                'message' => 'You have already reported this content.',
            ], 400);
        }

        $report = Report::create([
            'user_id'         => $user->id,
            'reportable_type' => $this->getModelClass($validated['target_type']),
            'reportable_id'   => $validated['target_id'],
            'reason'          => $validated['reason'],
            'details'         => $validated['details'] ?? null,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Report submitted successfully.',
            'report'  => $report,
        ], 201);
    }

    /**
     * POST /api/forum/report-question
     * (near-duplicate of saveReport, kept for compatibility with existing frontend calls)
     */
    public function reportQuestion(Request $request)
    {
        Log::debug('Report request data:', $request->all());

        $validated = $request->validate([
            'reason'      => 'required|string|max:255',
            'details'     => 'nullable|string|max:1000',
            'target_type' => 'required|string',
            'target_id'   => 'required|integer',
        ]);

        $user = Auth::user();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'You must be logged in to report content.',
            ], 401);
        }

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
            'user_id'         => $user->id,
            'reportable_type' => $this->getModelClass($validated['target_type']),
            'reportable_id'   => $validated['target_id'],
        ])->first();

        if ($existingReport) {
            return response()->json([
                'success' => false,
                'message' => 'You have already reported this content.',
            ], 400);
        }

        $report = Report::create([
            'user_id'         => $user->id,
            'reportable_type' => $this->getModelClass($validated['target_type']),
            'reportable_id'   => $validated['target_id'],
            'reason'          => $validated['reason'],
            'details'         => $validated['details'] ?? null,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Report submitted successfully.',
            'report'  => $report,
        ], 201);
    }

    /**
     * PATCH /api/forum/questions/{question}/bookmark
     */
    public function toggleBookmark(Request $request, Question $question)
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json([
                'success'         => false,
                'message'         => 'Please log in to bookmark questions.',
                'requires_login'  => true,
            ], 401);
        }

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
                'success'      => true,
                'message'      => $message,
                'isBookmarked' => $isBookmarked,
                'status_text'  => $isBookmarked ? 'Bookmarked' : 'Not Bookmarked',
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
     */
    public function storeNestedReply(Request $request, $threadId)
    {
        $validated = $request->validate([
            'content'   => 'required|string|max:1000',
            'answer_id' => 'required|integer|exists:answers,id',
        ]);

        $user = Auth::user();

        $reply = Reply::create([
            'content'   => $validated['content'],
            'user_id'   => $user->id,
            'answer_id' => $validated['answer_id'],
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Nested reply created successfully.',
            'reply'   => $reply,
        ], 201);
    }

    /**
     * DELETE /api/forum/nested-replies/{id}
     */
    public function destroyNestedReplies(Request $request, $id)
    {
        try {
            if (!auth()->check()) {
                return response()->json([
                    'success' => false,
                    'error'   => 'Authentication required',
                    'message' => 'Please log in to delete your answer.',
                ], 401);
            }

            $reply = Reply::find($id);

            if (!$reply) {
                return response()->json([
                    'success' => false,
                    'error'   => 'Reply not found',
                    'message' => 'The reply you are trying to delete does not exist.',
                ], 404);
            }

            if ($reply->user_id !== auth()->id()) {
                return response()->json([
                    'success' => false,
                    'error'   => 'Permission denied',
                    'message' => 'You can only delete your own replies.',
                ], 403);
            }

            $reply->delete();

            return response()->json([
                'success'    => true,
                'message'    => 'Reply deleted successfully.',
                'deleted_id' => $id,
            ]);

        } catch (\Exception $e) {
            Log::error('Delete reply error', [
                'reply_id' => $id,
                'user_id'  => auth()->id(),
                'error'    => $e->getMessage(),
            ]);

            return response()->json([
                'success' => false,
                'error'   => 'Server error',
                'message' => 'Failed to delete reply. Please try again.',
            ], 500);
        }
    }

    /**
     * PATCH /api/forum/answers/{answer}/helpful
     */
    public function toggleAnswerHelpful(Request $request, Answer $answer)
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json([
                'success' => false,
                'error'   => 'Authentication required',
                'message' => 'Please log in to vote.',
            ], 401);
        }

        $helpful = $request->input('helpful');
        if ($helpful === null) {
            $helpful = $request->input('is_helpful');
        }
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
     * PATCH /api/forum/replies/{reply}/helpful
     */
    public function toggleReplyHelpful(Request $request, Reply $reply)
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json([
                'success' => false,
                'error'   => 'Authentication required',
                'message' => 'Please log in to vote.',
            ], 401);
        }

        $helpfulValue = $request->input('helpful');
        if ($helpfulValue === null) {
            $helpfulValue = $request->input('is_helpful');
        }
        $helpful = filter_var($helpfulValue, FILTER_VALIDATE_BOOLEAN);

        if ($helpful) {
            $reply->increment('upvotes');
        } elseif ($reply->upvotes > 0) {
            $reply->decrement('upvotes');
        }

        $reply->refresh();

        return response()->json([
            'success'  => true,
            'helpful'  => $helpful,
            'upvotes'  => $reply->upvotes,
            'reply_id' => $reply->id,
        ]);
    }

    /**
     * DELETE /api/forum/replies/{reply}
     */
    public function replyDestroy(Reply $reply)
    {
        $this->authorize('delete', $reply);

        $reply->delete();

        return response()->json([
            'success' => true,
            'message' => 'Reply deleted successfully.',
        ]);
    }

    /**
     * Shared helper: fetch counsellors list in the shape used across multiple endpoints.
     */
    private function counsellorsList()
    {
        return User::with('counselorDetail')
            ->where('role', 'counselor')
            ->get()
            ->map(function ($user) {
                return [
                    'id'            => $user->id,
                    'name'          => $user->name,
                    'email'         => $user->email,
                    'qualification' => $user->counselorDetail->qualification ?? '',
                    'subject'       => $user->counselorDetail->subject ?? '',
                ];
            });
    }

    private function getContent($type, $id)
    {
        if (app()->environment('local')) {
            Log::debug('getContent called:', ['type' => $type, 'id' => $id]);
        }

        switch ($type) {
            case 'question':
                return Question::find($id);
            case 'answer':
                return Answer::find($id);
            case 'reply':
                return Reply::find($id);
            case 'content':
                return Question::find($id);
            default:
                return null;
        }
    }

    private function getModelClass($type)
    {
        switch ($type) {
            case 'question':
                return 'App\Models\Question';
            case 'answer':
                return 'App\Models\Answer';
            case 'reply':
                return 'App\Models\Reply';
            case 'content':
                return 'App\Models\Question';
            default:
                return null;
        }
    }
}