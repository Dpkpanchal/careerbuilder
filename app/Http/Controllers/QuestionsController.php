<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;
use App\Models\ForumCategory;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class QuestionsController extends Controller
{
   public function store(Request $request)
    {
        // Validate request
       // echo "<pre>"; print_r($request->all()); exit;
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:80',
            'description' => 'required|string|max:300',
            'category_ids' => 'required|array|min:1|max:3',
            'category_ids.*' => 'exists:forum_categories,name'
        ]);

        if ($validator->fails()) {
            // For Inertia.js, throw ValidationException
            throw ValidationException::withMessages($validator->errors()->toArray());
        }

        try {
            // Store category_ids as JSON string
            $category_ids = json_encode($request->category_ids);
            
            // Create the question
            $question = Question::create([
                'user_id' => Auth::id(),
                'title' => $request->title,
                'content' => $request->description,
                'category_id' => $category_ids,
            ]);

            // IMPORTANT: Return a redirect response for Inertia
            // This will trigger the onSuccess callback in your React component
            return redirect()->back()->with([
                'success' => 'Question posted successfully!',
                'question' => $question->toArray()
            ]);
            
        } catch (\Exception $e) {
            \Log::error('Error creating question: ' . $e->getMessage());
            
            // Return redirect with error for Inertia
            return redirect()->back()->withErrors([
                'submit' => 'Failed to post question. Please try again.'
            ]);
        }
    }

    public function destroy(Question $question)
    {
        // Validate authorization (owner or super_admin)
        if (auth()->id() !== $question->user_id && auth()->user()->role !== 'super_admin') {
            return back()->withErrors(['error' => 'Unauthorized to delete this question.']);
        }

        try {
            // Delete the question and all its replies
            $question->answers()->delete(); // Delete related answers first
            $question->delete();

            // Return success response for Inertia.js
            return redirect()->back()->with([
                'success' => 'Question deleted successfully!'
            ]);
            
        } catch (\Exception $e) {
            \Log::error('Error deleting question: ' . $e->getMessage());
            
            // Return error response for Inertia.js
            return back()->withErrors([
                'error' => 'Failed to delete question. Please try again.'
            ]);
        }
    }

}
