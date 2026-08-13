<?php

namespace App\Http\Controllers;

use App\Models\Reply;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Question;
use App\Models\ForumCategory;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\Answer;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Log;
use App\Models\Report;
use App\Models\User;


class ForumController extends Controller
{

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
            // Hide questions that are bookmarked by the CURRENT logged-in user
            $query->where(function($q) {
                $q->where('isBookmarked', false) // Show all non-bookmarked questions
                ->orWhere('by_bookmarked', '!=', Auth::id()); // Also show questions bookmarked by OTHER users
            });
        })
        ->when($categorySlug, function ($query) use ($categorySlug) {
            // For JSON array containing exact match
            // $query->whereJsonContains('category_id', $categorySlug);
            
            // OR if you want case-insensitive search in JSON array
            $query->whereRaw("LOWER(category_id::text)::jsonb @> ?", 
                [json_encode([strtolower($categorySlug)])]);
        })
        ->latest()
        ->get();

        $counsellors = User::with('counselorDetail')
            ->where('role', 'counselor')
            ->get()
            ->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'qualification' => $user->counselorDetail->qualification ?? '',
                    'subject' => $user->counselorDetail->subject ?? ''
                ];
        });
      

        //echo "<pre>"; print_r($counsellors); exit;
       // echo "<pre>"; print_r($questions->toArray()); exit;

        $forumCategory = ForumCategory::where('status',true)->orderBy('name', 'asc')->get();
        //print("<pre>"); print_r($forumCategory->toArray()); exit;
        return Inertia::render('Frontend/Forum/index', [
            'forumCategory' => $forumCategory,
            'questions' => $questions,
            'counsellorsData' => $counsellors,
        ]);
    }

    // public function storeQuestionReply(Request $request, $threadId)
    // {
    //     try {
    //         // 1. VALIDATION
    //         $request->validate([
    //             'content' => 'required|string|max:5000|min:3',
    //         ]);

    //         // 2. AUTH CHECK
    //         if (!auth()->check()) {
    //             return response()->json([
    //                 'success' => false,
    //                 'error' => 'Authentication required',
    //                 'message' => 'Please log in to post a reply.',
    //             ], 401);
    //         }

    //         $user = auth()->user();

    //         // 3. FIND THREAD
    //         $thread = Question::find($threadId);
    //         if (!$thread) {
    //             return response()->json([
    //                 'success' => false,
    //                 'error' => 'Thread not found',
    //                 'message' => 'The question you are replying to does not exist.',
    //             ], 404);
    //         }

    //          // 4. CHECK IF USER ALREADY REPLIED TO THIS QUESTION
    //         $existingAnswer = Answer::where('question_id', $threadId)
    //         ->where('user_id', $user->id)
    //         ->first();

    //         if ($existingAnswer) {
    //             return response()->json([
    //                 'success' => false,
    //                 'error' => 'Already replied',
    //                 'message' => 'You have already posted a reply to this question.',
    //                 'existing_answer_id' => $existingAnswer->id, // Optional: return existing answer ID
    //             ], 409); // 409 Conflict status code
    //         }

    //         // 5. CREATE ANSWER
    //         $answer = Answer::create([
    //             'content' => $request->input('content'),
    //             'question_id' => $threadId,
    //             'user_id' => $user->id,
    //             'is_verified_by_counselor' => $user->role === 'counselor' ? 1 : 0,
    //         ]);

    //         // 6. RESPONSE - MATCHING YOUR FRONTEND STRUCTURE
    //         return response()->json([
    //             'success' => true,
    //             'message' => 'Reply posted successfully!',
    //             'answer' => [
    //                 'id' => $answer->id,
    //                 'content' => $answer->content,
    //                 // Match your frontend structure
    //                 'user' => [
    //                     'name' => $user->name,
    //                     'role' => $user->role === 'counselor' ? 'counselor' : $user->role,
    //                 ],
    //                 // Also include old format for compatibility
    //                 'author_name' => $user->name,
    //                 'author_type' => $user->role === 'counselor' ? 'counselor' : $user->role,
    //                 'avatar_url' => $user->avatar,
    //                 'is_counselor_verified' => (bool) $answer->is_verified_by_counselor,
    //                 'upvotes' => 0,
    //                 'is_helpful' => false,
    //                 'is_reported' => false,
    //                 'replies' => [],
    //                 'relativeTime' => 'Just now',
    //                 'showAllReplies' => false,
    //                 'isMine' => true,
    //                 'canDelete' => true
    //             ]
    //         ], 201);

    //     } catch (ValidationException $e) {
    //         return response()->json([
    //             'success' => false,
    //             'error' => 'Validation failed',
    //             'message' => 'Please check your input.',
    //             'errors' => $e->errors(),
    //         ], 422);

    //     } catch (\Exception $e) {
    //         Log::error('Forum reply error', [
    //             'thread_id' => $threadId,
    //             'user_id' => auth()->id(),
    //             'error' => $e->getMessage(),
    //         ]);

    //         return response()->json([
    //             'success' => false,
    //             'error' => 'Server error',
    //             'message' => 'Something went wrong. Please try again.',
    //         ], 500);
    //     }
    // }

    public function storeQuestionReply(Request $request, $threadId)
    {
        try {
            // 1. VALIDATION
            $request->validate([
                'content' => 'required|string|min:3|max:5000',
            ]);

            // 2. AUTH CHECK
            if (!auth()->check()) {
                return response()->json([
                    'success' => false,
                    'error' => 'Authentication required',
                    'message' => 'Please log in to post a reply.',
                ], 401);
            }

            $user = auth()->user();

            // 3. FIND THREAD
            $thread = Question::find($threadId);

            if (!$thread) {
                return response()->json([
                    'success' => false,
                    'error' => 'Thread not found',
                    'message' => 'The question you are replying to does not exist.',
                ], 404);
            }

            // 4. CREATE REPLY (User can reply multiple times)
            $answer = Answer::create([
                'content' => $request->content,
                'question_id' => $threadId,
                'user_id' => $user->id,
                'is_verified_by_counselor' => $user->role === 'counselor',
            ]);

            // 5. SUCCESS RESPONSE
            return response()->json([
                'success' => true,
                'message' => 'Reply posted successfully!',
                'answer' => [
                    'id' => $answer->id,
                    'content' => $answer->content,
                    'user' => [
                        'id' => $user->id,
                        'name' => $user->name,
                        'role' => $user->role,
                    ],
                    'author_name' => $user->name,
                    'author_type' => $user->role,
                    'avatar_url' => $user->avatar,
                    'is_counselor_verified' => (bool) $answer->is_verified_by_counselor,
                    'upvotes' => 0,
                    'is_helpful' => false,
                    'is_reported' => false,
                    'replies' => [],
                    'relativeTime' => 'Just now',
                    'showAllReplies' => false,
                    'isMine' => true,
                    'canDelete' => true,
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
                'user_id' => auth()->id(),
                'error' => $e->getMessage(),
            ]);

            return response()->json([
                'success' => false,
                'error' => 'Server error',
                'message' => 'Something went wrong. Please try again.',
            ], 500);
        }
    }


// Add this method to fetch answers for a thread
    public function destroyAnswer(Request $request, $answerId)
    {
        try {
            if (!auth()->check()) {
                return response()->json([
                    'success' => false,
                    'error' => 'Authentication required',
                    'message' => 'Please log in to delete your answer.',
                ], 401);
            }

            $answer = Answer::find($answerId);
            
            if (!$answer) {
                return response()->json([
                    'success' => false,
                    'error' => 'Answer not found',
                    'message' => 'The answer you are trying to delete does not exist.',
                ], 404);
            }
            
            // Check if user owns the answer
            if ($answer->user_id !== auth()->id()) {
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
                'deleted_id' => $answerId
            ]);

        } catch (\Exception $e) {
            \Log::error('Delete answer error', [
                'answer_id' => $answerId,
                'user_id' => auth()->id(),
                'error' => $e->getMessage(),
            ]);

            return response()->json([
                'success' => false,
                'error' => 'Server error',
                'message' => 'Failed to delete answer. Please try again.',
            ], 500);
        }
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'thread_id' => 'required|exists:threads,id',
            'reason'    => 'required|string|max:255',
            'details'   => 'nullable|string|max:2000',
        ]);

        Report::create([
            'thread_id' => $validated['thread_id'],
            'user_id'   => $request->user()->id,
            'reason'    => $validated['reason'],
            'details'   => $validated['details'] ?? null,
        ]);

        return back();
    }
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
        ])->when($categorySlug, function ($query) use ($categorySlug) {
            // For JSON array containing exact match
            // $query->whereJsonContains('category_id', $categorySlug);
            
            // OR if you want case-insensitive search in JSON array
            $query->whereRaw("LOWER(category_id::text)::jsonb @> ?", 
                [json_encode([strtolower($categorySlug)])]);
        })->where('user_id', auth()->id())->latest()->get();

        $forumCategory = ForumCategory::orderBy('name', 'asc')->get();

        $counsellors = User::with('counselorDetail')
            ->where('role', 'counselor')
            ->get()
            ->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'qualification' => $user->counselorDetail->qualification ?? '',
                    'subject' => $user->counselorDetail->subject ?? ''
                ];
        });

        return Inertia::render('Frontend/Forum/my-questions', [
            'title' => 'My Questions',
            'questions' => $questions,
            'forumCategory' => $forumCategory,
            'counsellorsData'=> $counsellors
        ]);
    }   

    public function replies(Request $request)
    {
        $counselorId = $request->query('counsellor_id'); 
        $counselorName = null;

        if($counselorId) {
            // Log the counselor ID for debugging
            $user_id = $counselorId;
            
            // Fetch the counselor's name
            $counselor = User::find($counselorId);
            if ($counselor) {
                $counselorName = $counselor->name;
            }
        } else {
            $user_id = auth()->id();
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
        ])->whereHas('answers', function ($query) use ($user_id) {
            $query->where('user_id', $user_id);
        })->latest()->get();

     
        //print("<pre>"); print_r($questions->toArray()); exit;
        $forumCategory = ForumCategory::orderBy('name', 'asc')->get();

         $counsellors = User::with('counselorDetail')
            ->where('role', 'counselor')
            ->get()
            ->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'qualification' => $user->counselorDetail->qualification ?? '',
                    'subject' => $user->counselorDetail->subject ?? ''
                ];
        });

        return Inertia::render('Frontend/Forum/replies', [
            'title' => $counselorName ? $counselorName . '\'s Replies' : 'My Replies',
            'questions' => $questions,
            'forumCategory' => $forumCategory,
            'counselorName' => $counselorName, 
            'counsellor_id' => $counselorId,
            'counsellorsData'=> $counsellors
            // Pass counselor name to frontend
        ]);
    }
    
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
        ])->when($categorySlug, function ($query) use ($categorySlug) {
            // For JSON array containing exact match
            // $query->whereJsonContains('category_id', $categorySlug);
            
            // OR if you want case-insensitive search in JSON array
            $query->whereRaw("LOWER(category_id::text)::jsonb @> ?", 
                [json_encode([strtolower($categorySlug)])]);
        })->where('isBookmarked', true)->where('by_bookmarked', '=', auth()->id())->latest()->get();

        $forumCategory = ForumCategory::orderBy('name', 'asc')->get();

         $counsellors = User::with('counselorDetail')
            ->where('role', 'counselor')
            ->get()
            ->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'qualification' => $user->counselorDetail->qualification ?? '',
                    'subject' => $user->counselorDetail->subject ?? ''
                ];
        });


        return Inertia::render('Frontend/Forum/bookmarked', [
            'title' => 'Bookmarked Threads',
            'questions' => $questions,
            'forumCategory' => $forumCategory,
            'counsellorsData'=> $counsellors
        ]);
    }

    public function profile()
    {
        $user = Auth::user();

        $forumCategory = ForumCategory::orderBy('name', 'asc')->get();

        $counsellors = User::with('counselorDetail')
            ->where('role', 'counselor')
            ->get()
            ->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'qualification' => $user->counselorDetail->qualification ?? '',
                    'subject' => $user->counselorDetail->subject ?? ''
                ];
        });



        return Inertia::render('Frontend/Forum/profile', [
            'forumCategory' => $forumCategory,
            'user' =>$user,
            'description' => 'View and edit your forum profile information.',
            'counsellorsData'=> $counsellors
        ]);
    }

    public function saveReport(Request $request){
        \Log::debug('Report request data:', $request->all());
        
        $validated = $request->validate([
            'reason' => 'required|string|max:255',
            'details' => 'nullable|string|max:1000',
            'target_type' => 'required|string',
            'target_id' => 'required|integer',
        ]);

         $user = Auth::user();
        
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'You must be logged in to report content.'
            ], 401);
        }

        $content = $this->getContent($validated['target_type'], $validated['target_id']);

        $contentUserId = $content->user_id ?? $content->created_by ?? null;
        
        if ($contentUserId && $contentUserId === $user->id) {
            return response()->json([
                'success' => false,
                'message' => 'You cannot report your own content.'
            ], 400);
        }

        // Check if user has already reported this content
        $existingReport = Report::where([
            'user_id' => $user->id,
            'reportable_type' => $this->getModelClass($validated['target_type']),
            'reportable_id' => $validated['target_id']
        ])->first();

        if ($existingReport) {
            return response()->json([
                'success' => false,
                'message' => 'You have already reported this content.'
            ], 400);
        }

        // Create the report
        $report = Report::create([
            'user_id' => $user->id,
            'reportable_type' => $this->getModelClass($validated['target_type']),
            'reportable_id' => $validated['target_id'],
            'reason' => $validated['reason'],
            'details' => $validated['details'] ?? null,
        ]);

        // Return success response
        return response()->json([
            'success' => true,
            'message' => 'Report submitted successfully.',
            'report' => $report
        ], 201);
    }

    public function reportQuestion(Request $request)
    {
        // Validate the request
        \Log::debug('Report request data:', $request->all());
        
        $validated = $request->validate([
            'reason' => 'required|string|max:255',
            'details' => 'nullable|string|max:1000',
            'target_type' => 'required|string',
            'target_id' => 'required|integer',
        ]);

        // Get the authenticated user
        $user = Auth::user();
        
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'You must be logged in to report content.'
            ], 401);
        }

        // Get the content
        $content = $this->getContent($validated['target_type'], $validated['target_id']);
        
        if (!$content) {
            return response()->json([
                'success' => false,
                'message' => 'The content you are trying to report does not exist.'
            ], 404);
        }

        // Check if user is reporting their own content
        // Use the correct property name (could be 'user_id', 'created_by', etc.)
        $contentUserId = $content->user_id ?? $content->created_by ?? null;
        
        if ($contentUserId && $contentUserId === $user->id) {
            return response()->json([
                'success' => false,
                'message' => 'You cannot report your own content.'
            ], 400);
        }

        // Check if user has already reported this content
        $existingReport = Report::where([
            'user_id' => $user->id,
            'reportable_type' => $this->getModelClass($validated['target_type']),
            'reportable_id' => $validated['target_id']
        ])->first();

        if ($existingReport) {
            return response()->json([
                'success' => false,
                'message' => 'You have already reported this content.'
            ], 400);
        }

        // Create the report
        $report = Report::create([
            'user_id' => $user->id,
            'reportable_type' => $this->getModelClass($validated['target_type']),
            'reportable_id' => $validated['target_id'],
            'reason' => $validated['reason'],
            'details' => $validated['details'] ?? null,
        ]);

        // Return success response
        return response()->json([
            'success' => true,
            'message' => 'Report submitted successfully.',
            'report' => $report
        ], 201);
    }

    /**
     * Get the content based on type
     */
    private function getContent($type, $id)
    {
        // REMOVE THIS DEBUG BLOCK from getContent method
        // if (app()->environment('local')) {
        //     return response()->json([
        //         'debug' => true,
        //         'target_type' => $type,
        //         'target_id' => $id,
        //         'message' => 'Debugging getContent'
        //     ], 200);
        // }
        
        // Instead, log for debugging
        if (app()->environment('local')) {
            \Log::debug('getContent called:', ['type' => $type, 'id' => $id]);
        }
        
        //echo $type; exit;

        switch ($type) {
            case 'question':
                return Question::find($id);
            case 'answer':
                return Answer::find($id);
            case 'reply':
                // For replies in answers table with parent_id
                return Reply::find($id);
            case 'content':
                // For replies in answers table with parent_id
                return Question::find($id);
            default:
                return null;
        }
    }

    /**
     * Get the model class name for polymorphic relationship
     */
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

    public function toggleBookmark(Request $request, Question $question)
    {
        $user = Auth::user();
        
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Please log in using the "Ask a Question" button to bookmark questions.',
                'requires_login' => true
            ], 401);
        }
        
        try {
            $response = [];
            
            // Check if this user already bookmarked this question
            if ($question->by_bookmarked == $user->id) {
                // This user already bookmarked it, so remove the bookmark
                $question->isBookmarked = false;
                $question->by_bookmarked = 0; // Or null if allowed
                $message = 'Bookmark removed successfully';
                $isBookmarked = false;
            } else {
                // Either no bookmark or bookmarked by someone else
                // For your current schema, we'll "steal" the bookmark for this user
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
                'message' => 'Error updating bookmark: ' . $e->getMessage()
            ], 500);
        }
    }

    public function storeNestedReply(Request $request, $threadId)
    {
        //echo "<pre>"; print_r($request->all()); exit;
        $validated = $request->validate([
            'content' => 'required|string|max:1000',
            'answer_id' => 'required|integer|exists:answers,id',
            //'parent_id' => 'nullable|exists:answers,id'
        ]);

 
        $user = Auth::user();

        // Create the nested reply
        $reply = Reply::create([
            'content' => $validated['content'],
            'user_id' => $user->id,
            'answer_id' => $validated['answer_id']
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Nested reply created successfully.',
            'reply' => $reply
        ], 201);
    }

    public function destroyNestedReplies(Request $request, $id)
    {
        try {
            if (!auth()->check()) {
                return response()->json([
                    'success' => false,
                    'error' => 'Authentication required',
                    'message' => 'Please log in to delete your answer.',
                ], 401);
            }

            $reply = Reply::find($id);
            
            if (!$reply) {
                return response()->json([
                    'success' => false,
                    'error' => 'Reply not found',
                    'message' => 'The reply you are trying to delete does not exist.',
                ], 404);
            }

            // Check if user owns the reply
            if ($reply->user_id !== auth()->id()) {
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
                'deleted_id' => $id 
            ]);

        } catch (\Exception $e) {
            \Log::error('Delete answer error', [
                'answer_id' => $id,
                'user_id' => auth()->id(),
                'error' => $e->getMessage(),
            ]);

            return response()->json([
                'success' => false,
                'error' => 'Server error',
                'message' => 'Failed to delete answer. Please try again.',
            ], 500);
        }
    }

    public function toggleAnswerHelpful(Request $request, Answer $answer)
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json([
                'success' => false,
                'error' => 'Authentication required',
                'message' => 'Please log in to vote.',
            ], 401);
        }

        // ✅ FLEXIBLE: Try both parameter names
        $helpful = $request->input('helpful');
        if ($helpful === null) {
            $helpful = $request->input('is_helpful'); // Fallback to second name
        }
        
        // ✅ Convert to boolean safely
        $helpful = filter_var($helpful, FILTER_VALIDATE_BOOLEAN);
        
        // ✅ DEBUG (remove after testing)
        \Log::info("Request data: ", $request->all());
        \Log::info("Final helpful value: " . ($helpful ? 'true' : 'false'));

        if ($helpful) {
            $answer->increment('upvotes');
        } else {

            if ($answer->upvotes > 0) {
                $answer->decrement('upvotes');
            }
        }


        $answer->refresh();

        return response()->json([
            'success' => true,
            'helpful' => $helpful,
            'upvotes' => $answer->upvotes
        ]);
    }
    
    public function toggleReplyHelpful(Request $request, Reply $reply)
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json([
                'success' => false,
                'error' => 'Authentication required',
                'message' => 'Please log in to vote.',
            ], 401);
        }
        
        // ✅ FIXED: Get parameter FIRST, then convert to boolean
        $helpfulValue = $request->input('helpful');
        if ($helpfulValue === null) {
            $helpfulValue = $request->input('is_helpful'); // Fallback
        }
        
        // ✅ FIXED: Convert the VALUE (not the variable name)
        $helpful = filter_var($helpfulValue, FILTER_VALIDATE_BOOLEAN);

        // If helpful = true, increment upvotes
        if ($helpful) {
            $reply->increment('upvotes');
        } else {
            // Prevent negative values
            if ($reply->upvotes > 0) {
                $reply->decrement('upvotes');
            }
        }

        // Refresh the reply to get updated count
        $reply->refresh();

        return response()->json([
            'success' => true,
            'helpful' => $helpful,
            'upvotes' => $reply->upvotes,
            'reply_id' => $reply->id  // Extra info for frontend
        ]);
    }

    // ReplyController.php
    public function replyDestroy(Reply $reply)
    {
        // Authorization check
        $this->authorize('delete', $reply);
        
        $reply->delete();
        
        return redirect()->back()
            ->with('message', 'Reply deleted successfully!')
            ->with('type', 'success');
    }



}
