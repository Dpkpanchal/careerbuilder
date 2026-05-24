"use client";

import { useState } from "react";
import { Link, usePage ,router} from '@inertiajs/react';
import { Home, PencilLine } from "lucide-react";
import AuthModal from "@/Components/Frontend/Forum/AuthModal";


export default function ForumTopBar() {
   const [authOpen, setAuthOpen] = useState(false);

    const { auth } = usePage().props;
    const user = auth?.user;

    const formatName = (name = '') => {
      return name
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };



    //console.log('checkauth',auth);
  return (
    <section className="forum-hero-section">
      <div className="forum-hero-bg" />

      <div className="container">
        <div className="forum-hero-inner">
          {/* Breadcrumb */}
         {/* <nav
            aria-label="breadcrumb"
            className="forum-hero-breadcrumb d-flex align-items-center mb-2"
          >
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/">
                  <span className="d-inline-flex align-items-center gap-1">
                    <Home size={14} />
                    <span>Home</span>
                  </span>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Community Forum
              </li>
            </ol>
          </nav>*

          {/* Main content */}
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="forum-hero-eyebrow">
                QUESTIONS • DISCUSSIONS • GUIDANCE
              </div>
       

          {/* <div className="d-flex align-items-center gap-2">
          <h1 className="forum-hero-title gradient-text">
            Welcome back, {formatName(user?.name)}
          </h1>
          </div> */}


          <div className="d-flex align-items-center gap-2">
          {user ? (
            <h1 className="forum-hero-title gradient-text">
              Welcome back, {formatName(user?.name)}
            </h1>
          ) : (
            <h1 className="forum-hero-title gradient-text">
              Ask. Learn. Get Expert Guidance.
            </h1>
          )}
        </div>





             
            </div>
            

             

            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0 d-none d-lg-block">
             
               {/* <button
                className="btn btn-primary forum-hero-cta"
                onClick={() => setAuthOpen(true)}
              >
              
                <span>Login/Register</span>
              </button> */}

           {!user && (
              <button
                className="btn btn-primary forum-hero-cta"
                onClick={() => setAuthOpen(true)}
              >
                Login / Register
              </button>
            )}



            {!user && (
              <div className="forum-hero-meta small mt-2">
                No login required to browse. Sign in to post & reply.
              </div>

             )}

            </div>

          

          </div>
        </div>
      </div>
       <AuthModal
                isOpen={authOpen}
                onClose={() => setAuthOpen(false)}
                initialMode="login" // or "register"
              />
    </section>
  );
}
