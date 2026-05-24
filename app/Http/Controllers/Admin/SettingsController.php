<?php
// app/Http/Controllers/Admin/SettingsController.php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingsController extends Controller
{
    public function index()
    {
        $settings = Setting::orderBy('group')
            ->orderBy('order')
            ->get()
            ->groupBy('group');

        $groups = $settings->keys();

        return $this->adminRender('Admin/Settings/Index', [
            'settings' => $settings,
            'groups' => $groups,
        ]);
    }

    public function create()
    {
        $types = ['text', 'textarea', 'boolean', 'select', 'number', 'email', 'url'];
        $groups = ['general', 'appearance', 'email', 'security', 'social', 'payment', 'other'];

        return $this->adminRender('Admin/Settings/Create', [
            'types' => $types,
            'groups' => $groups,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'key' => 'required|string|unique:settings,key|max:255',
            'label' => 'required|string|max:255',
            'type' => 'required|string|in:text,textarea,boolean,select,number,email,url',
            'group' => 'required|string|max:255',
            'value' => 'nullable',
            'description' => 'nullable|string',
            'options' => 'nullable|string',
            'order' => 'nullable|integer',
            'is_public' => 'boolean',
        ]);

        // Convert options string to array if provided
        if ($request->has('options') && $request->options) {
            $options = array_map('trim', explode(',', $request->options));
            $validated['options'] = $options;
        }

        Setting::create($validated);

        return redirect()->route('admin.settings.index')->with('success', 'Setting created successfully.');
    }

    public function edit(Setting $setting)
    {
        $types = ['text', 'textarea', 'boolean', 'select', 'number', 'email', 'url'];
        $groups = ['general', 'appearance', 'email', 'security', 'social', 'payment', 'other'];

        return $this->adminRender('Admin/Settings/Edit', [
            'setting' => $setting,
            'types' => $types,
            'groups' => $groups,
        ]);
    }

    public function update(Request $request, Setting $setting)
    {
        $validated = $request->validate([
            'key' => 'required|string|max:255|unique:settings,key,' . $setting->id,
            'label' => 'required|string|max:255',
            'type' => 'required|string|in:text,textarea,boolean,select,number,email,url',
            'group' => 'required|string|max:255',
            'value' => 'nullable',
            'description' => 'nullable|string',
            'options' => 'nullable|string',
            'order' => 'nullable|integer',
            'is_public' => 'boolean',
        ]);

        // Convert options string to array if provided
        if ($request->has('options') && $request->options) {
            $options = array_map('trim', explode(',', $request->options));
            $validated['options'] = $options;
        }

        $setting->update($validated);

        return redirect()->route('admin.settings.index')->with('success', 'Setting updated successfully.');
    }

    public function destroy(Setting $setting)
    {
        $setting->delete();

        return redirect()->route('admin.settings.index')->with('success', 'Setting deleted successfully.');
    }

    // Bulk update settings from the main settings page
    public function bulkUpdate(Request $request)
    {
        $settings = $request->input('settings', []);

        foreach ($settings as $key => $value) {
            $setting = Setting::where('key', $key)->first();
            
            if ($setting) {
                $setting->update(['value' => $value]);
            }
        }

        return redirect()->route('admin.settings.index')->with('success', 'Settings updated successfully.');
    }
}