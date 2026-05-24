<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LandingPageController extends Controller
{
    //
    public function medicalLandingPage()
    {
        return inertia('Frontend/LandingPage/medical');
    }

    public function civilServicesPage()
    {
        return inertia('Frontend/LandingPage/civil-services');
    }

    public function commercePage()
    {
        return inertia('Frontend/LandingPage/commerce');
    }

    public function defencePage()
    {
        return inertia('Frontend/LandingPage/defence');
    }

    public function engineeringPage()
    {
        return inertia('Frontend/LandingPage/engineering');
    }

    public function lawPage()
    {
        return inertia('Frontend/LandingPage/law');
    }

    public function mediaPage()
    {
        return inertia('Frontend/LandingPage/media');
    }
}
