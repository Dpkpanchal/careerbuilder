<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class QuestionsController extends Controller
{
    /**
     * POST /api/forum/questions
     * Body: { title, description, category_ids[] }
     * Auth required.
     */
    public function store(Request $request): JsonResponse
    {
       // dd($request->all());
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:80',
            'description' => 'required|string|max:300',
            'category_ids' => 'required|array|min:1|max:3',
            'category_ids.*' => 'exists:forum_categories,name',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed.',
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
            $categoryIds = json_encode($request->category_ids);

            $question = Question::create([
                'user_id' => $request->user()->id,
                'title' => $request->title,
                'content' => $request->description,
                'category_id' => $categoryIds,
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Question posted successfully!',
                'question' => $question,
            ], 201);
        } catch (\Exception $e) {
            Log::error('Error creating question: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to post question. Please try again.',
            ], 500);
        }
    }

    /**
     * DELETE /api/forum/questions/{question}
     * Auth required, owner or super_admin.
     */
    public function destroy(Request $request, Question $question): JsonResponse
    {
        if ($request->user()->id !== $question->user_id && $request->user()->role !== 'super_admin') {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized to delete this question.',
            ], 403);
        }

        try {
            $question->answers()->delete();
            $question->delete();

            return response()->json([
                'success' => true,
                'message' => 'Question deleted successfully!',
                'deleted_id' => $question->id,
            ]);
        } catch (\Exception $e) {
            Log::error('Error deleting question: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to delete question. Please try again.',
            ], 500);
        }
    }
}
