<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CollegeContent;
use App\Models\Menu; // Import your Menu model
use Illuminate\Http\Request;

class CollegeController extends Controller
{
    public function collegeContent(Request $request)
    {
        $request->validate([
            'slug' => 'required|string',
        ]);

        $slug = $request->slug;

        $menuItem = Menu::where('slug', $slug)
            ->where('is_active', true)
            ->firstOrFail();

           // dd($menuItem);

        $fields = config("content_fields.{$menuItem->key}", []);
        $columns = config('content_columns');

        $data = CollegeContent::where('url', $slug)
            ->where('is_active', true)
            ->orderBy('id')
            ->get()
            ->map(function ($exam) use ($fields, $columns) {

                $item = [];

                foreach ($fields as $field) {
                    $column = $columns[$field] ?? $field;
                    $item[$field] = $exam->{$column};
                }

                return $item;
            });

        return response()->json([
            'status' => true,
            'message' => 'College contents fetched successfully.',
            'data' => $data,
        ]);
    }
}