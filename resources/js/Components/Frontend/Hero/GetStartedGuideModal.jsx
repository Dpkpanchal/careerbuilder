// src/components/help/GetStartedGuideModal.jsx
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScreenshotLightbox from "./ScreenshotLightbox";


import {
  X,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  PanelLeftOpen,
  PanelLeftClose,
  HelpCircle,
} from "lucide-react";

const GUIDE_ITEMS = [
 {
  "id": "preface",
  "title": "Preface",
  "short": "Why the Career Builder Portal was created and how it supports students across West Bengal.",
  "steps": [
    "The progress of underprivileged communities is deeply connected with the expansion of education and enhancement of skills. Understanding this, the Government of West Bengal has made extensive efforts to build schools, colleges, hostels, and skill development centres across the state, many of which benefit minority communities.",
    "Government initiatives like the Mid Day Meal Programme, Sabuj Sathi, free textbooks and uniforms, various scholarship schemes, and Kanyashree Prakalpa have played a pivotal role in encouraging education and improving the socio-economic conditions of marginalized students.",
    "Scholarship programmes, in particular, have inspired thousands of minority students to pursue technical, higher, and professional education—opening doors to better career opportunities.",
    "For years, the West Bengal Minorities’ Development and Finance Corporation (WBMDFC) has implemented several scholarship and support schemes to uplift students from minority communities. These programmes have significantly contributed to the overall development of the community.",
    "At this stage, students require easy access to accurate information about courses, colleges, exams, and scholarships, as well as credible career guidance to make informed choices. Private counselling services often exist, but they are expensive and inaccessible for many.",
    "To ensure that every student receives equal access to authentic guidance, WBMDFC has introduced the Career Builder Portal — a free, statewide digital platform designed to democratize educational and career information for all students.",
    "The Career Builder Portal aims to become a powerful tool for thousands of students, helping them explore opportunities in higher education, vocational training, skill development, and scholarships through verified, reliable information and structured guidance."
  ],
  "screenshots": []
},

  {
  "id": "about-portal",
  "title": "About the Portal",
  "short": "An overview of the Career Builder Portal and how it helps students make informed decisions.",
  "steps": [
    "Career guidance is a continuous process that helps a student understand his or her own aptitudes, strengths, and interests. With the right guidance, students can make informed decisions about suitable courses, career paths, and future goals.",
    "Access to proper and timely information is one of the most important parts of effective career guidance. However, despite the abundance of information available today, it often does not reach many students — especially those who are socially or economically disadvantaged.",
    "The Career Builder Portal has been created to bridge this gap by providing students with authentic, structured, and easy-to-understand information about a wide range of courses, colleges, scholarships, entrance exams, vocational programmes, and job-oriented skill pathways.",
    "One of the key features of the Portal is the Pathfinder — an intelligent guidance system that analyzes a student's class, stream, interests, and strengths to generate personalized career pathways. It helps students discover opportunities they may not even be aware of.",
    "The Portal also includes a Community Forum where students can ask questions, share experiences, and get responses from peers and verified counselors. This makes career exploration more interactive, transparent, and accessible.",
    "Overall, the Career Builder Portal aims to centralize and simplify career-related information so that students of all age groups — from Class 8 to graduates — can explore courses, institutions, and opportunities with confidence and clarity."
  ],
  "screenshots": []
},
{
  "id": "navigate-portal",
  "title": "How to Navigate the Career Builder Portal",
  "short": "A simple guide to help you explore the main menus — Careers, Courses, Colleges, and Exams — using the top navigation bar.",
  "steps": [
    "The top navigation bar of the Career Builder Portal gives you quick access to Careers, Courses, Colleges, Exams, and other important sections.  Clicking any top menu will open a clean mega-panel showing all categories inside that section.",
    "Under the Careers menu, you will find three clear categories: By Stage, By Profession, and Future & Alternative Paths. These help you explore careers based on your current class, your preferred profession, or modern long-term pathways.",
    "In the By Stage section, you can easily choose career options based on your academic level such as After Class 8, After Class 10, After Class 12 (Arts, Commerce, Science), or After Graduation.",
    "In the By Profession section, you can browse popular professional groups including Engineering, Medical, Nursing, Pharmacy, CA, Law, Design, Hospitality, Media, Civil Services, and Defence Forces.",
    "In the Future & Alternative Paths section, you can explore unique and emerging paths such as Research & PhD, Entrepreneurship & Startups, and Social Work / NGOs.",
    "The Courses menu groups all course-related options into categories like Vocational & Skill, Diploma & Polytechnic, Degree Programs, Medical, Engineering, Business, IT, and more. Selecting any category reveals specific course types on the right.",
    "The Colleges menu helps you explore institutions by type. You can browse National Institutes (like IITs, NITs, IIITs, IIMs, AIIMS, NIFT/NID), Universities, Field-wise Colleges, and Vocational or Technical Institutes.",
    "The Exams menu groups entrance exams into categories such as Engineering, Medical, Management & Law, and Other Competitive Exams. Each category shows National Level, State Level, and University Level exams where applicable.",
    "Use these navigation sections anytime to discover careers, courses, institutions, and exams related to your interests—all organized in one place for easy browsing."
  ],
  "screenshots": [
    {
      "id": "careers-by-stage",
      "label": "Careers Menu – By Stage",
      "description": "Shows class-wise career categories such as After Class 8, After Class 10, and After Class 12 streams.",
      "imageSrc": "/images/user-manual/career1.png"
    },
    {
      "id": "careers-by-profession",
      "label": "Careers Menu – By Profession",
      "description": "Displays popular professional fields like Engineering, Medical, Nursing, Pharmacy, CA, Law, and more.",
      "imageSrc": "/images/user-manual/career2.png"
    },
    {
      "id": "careers-future-paths",
      "label": "Careers Menu – Future & Alternative Paths",
      "description": "Shows long-term and modern career options such as Research, Entrepreneurship, and Social Work.",
      "imageSrc": "/images/user-manual/career3.png"
    },
    {
      "id": "courses-menu",
      "label": "Courses Menu Overview",
      "description": "Shows categories for Vocational & Skill, Diploma & Polytechnic, Degree Programs, Medical, Engineering, IT, and more.",
      "imageSrc": "/images/user-manual/courses.png"
    },
    {
      "id": "colleges-menu",
      "label": "Colleges Menu Overview",
      "description": "Shows groups of institutes including IITs, NITs, IIITs, IIMs, AIIMS, NIFT/NID, and NLUs.",
      "imageSrc": "/images/user-manual/colleges.png"
    },
    {
      "id": "exams-menu",
      "label": "Exams Menu Overview",
      "description": "Displays exam categories for Engineering, Medical, Management & Law, and Competitive Exams.",
      "imageSrc": "/images/user-manual/exames.png"
    }
  ]
},

  {
  "id": "what-is-forum",
  "title": "What is the Forum?",
  "short": "A place where students can ask questions, share experiences, and get guidance from peers and verified counselors.",
  "steps": [
    "The Forum is a community space inside the Career Builder Portal where students and parents can freely ask questions related to careers, courses, colleges, exams, scholarships, and other academic doubts.",
    "Any registered user can post a question in the forum. Others, including students, teachers, and verified counselors, can reply to your question.",
    "Each discussion is organized as a thread. You can read replies, respond to others, and follow conversations you find helpful.",
    "Verified counselors are marked with a special badge, helping you identify trusted expert answers easily.",
    "You can also mark replies as 'Helpful', report inappropriate comments, and receive notifications when someone responds to your question.",
    "The Forum is designed to be safe, supportive, and accessible to everyone—especially students seeking genuine guidance without cost.",
    "Use the Forum whenever you feel confused, need clarity, or want real experiences from other learners across West Bengal."
  ],
  "screenshots": [
    {
      "id": "forum",
      "label": "What is the Forum",
      "description": "The Forum is a community space inside the Career Builder Portal where students and parents can freely ask questions related to careers, courses, colleges, exams, scholarships, and other academic doubts.",
      "imageSrc": "/images/user-manual/forum.png"
    },
  ]
},
  {
  "id": "forum-how-to-use",
  "title": "How to Use the Forum?",
  "short": "Learn how to browse topics, join discussions, and find helpful answers from students and counselors.",
  "steps": [
    "Open the Forum from the top navigation bar. You will see recent and trending questions posted by other students.",
    "Select the category from left column related to your topic of interest, such as 'NEET preparation', 'Polytechnic courses', or 'Best courses after Class 10'.",
    "Click on any question to open the full thread and read all replies.",
    "If you want to contribute, type your reply in the response box at the bottom of the thread.",
    "You can also filter threads by category, such as Careers, Courses, Exams, Scholarships, or General Doubts."
  ],
  "screenshots": []
},
{
  "id": "forum-how-to-join",
  "title": "How to Join the Forum?",
  "short": "Learn how to become a part of the Forum so you can ask questions, reply, and interact with other students and counselors.",
  "steps": [
    "Open the Forum section from the top navigation menu of the Career Builder Portal.",
    "To participate in the Forum, you must first Login or Register your account. Click on the 'Login / Register' button shown on the Forum page.",
    "If you are a new user, complete a quick registration using your email. Existing users can simply sign in.",
    "Once you are logged in, the Forum becomes fully accessible — you can  post your own questions, reply to others, and follow threads.",
    "After joining, your name and profile will appear on your posts, helping others know who asked or answered each question.",
    "You can manage your forum activity, bakkmarked, and replies from your Dashboard anytime."
  ],
  "screenshots": [
     {
      "id": "join1",
      "label": "Forum Login/register",
      "description": "By clicking this btn, a login or register form will open as popup",
      "imageSrc": "/images/user-manual/forum-login.jpg"
    },
     {
      "id": "join2",
      "label": "Login Popup",
      "description": "If you are a already login here",
      "imageSrc": "/images/user-manual/login-popup.png"
    },
     {
      "id": "join3",
      "label": "Register",
      "description": "If you are a new user you have to register by filling this form",
      "imageSrc": "/images/user-manual/register.png"
    },
     {
      "id": "join4",
      "label": "Reset Password",
      "description": "You can reset password here",
      "imageSrc": "/images/user-manual/reset-password.png"
    },
  ]
},
{
  "id": "forum-ask-question",
  "title": "How to Ask a Question in the Forum?",
  "short": "Post your academic or career-related doubts so others and counselors can help you.",
  "steps": [
  "To ask a question in the Forum, you must first Login or Register by clicking the 'Login / Register' button on the Forum page.",
  "Once you are logged in, you will be able to post a question",
  "Write a clear title that describes your doubt, for example: 'Which stream should I choose after Class 10?'.",
  "Add a short description explaining your situation or confusion. This helps others give accurate guidance.",
  "Select the correct category such as Careers, Courses, Exams, Scholarships, or General Guidance.",
  "Submit your question. It will instantly appear in the Forum for others to answer.",
],
  "screenshots": [
    {
      "id": "question-box",
      "label": "Ask Question",
      "description": "You can ask question here",
      "imageSrc": "/images/user-manual/question-box.jpg"
    },
     {
      "id": "select-category",
      "label": "Select categories",
      "description": "You have to select categories min 1 and max 3",
      "imageSrc": "/images/user-manual/select-category.jpg"
    },
    {
      "id": "posted-question",
      "label": "Your Question",
      "description": "Your Question will appear instantly in your timeline and in My Questios tab also",
      "imageSrc": "/images/user-manual/posted-question.jpg"
    },
  ]
},
{
  "id": "forum-who-can-reply",
  "title": "Who Can Reply in the Forum and how?",
  "short": "Know who participates in discussions and how their replies help you.",
  "steps": [
    "Any registered student or parent can reply to questions posted in the Forum.",
    "Verified counselors, teachers, and domain experts also reply in the Forum and provide trusted guidance.",
    "Counselor replies appear with a special badge, making them easy to identify as expert responses.",
    "You can receive answers from multiple people, helping you get different perspectives.",
    "You may also reply to others' doubts to share your experience and help the community."
  ],
  "screenshots": [
     {
      "id": "reply",
      "label": "How to Reply a question",
      "description": "Click the reply or view reply button. it will show you a replies popup",
      "imageSrc": "/images/user-manual/reply-btn.jpg"
    },
    {
      "id": "reply-popup",
      "label": "Reply Popup",
      "description": "You can see replies and can reply here",
      "imageSrc": "/images/user-manual/reply-popup.jpg"
    },
  ]
},
{
  "id": "forum-verified-counselor",
  "title": "What is a Verified Counselor?",
  "short": "A certified expert who provides accurate and trustworthy guidance inside the Forum.",
  "steps": [
    "A verified counselor is an official, approved academic or career expert registered with the Career Builder Portal.",
    "Their profiles are verified by WBMDFC to ensure authenticity, qualifications, and expertise.",
    "In the Forum, their replies display a 'Verified Counselor' badge so students can easily recognize trustworthy guidance.",
    "Counselors specialize in areas like engineering careers, medical pathways, scholarships, or exam preparation.",
    "You can also visit the 'Counselor' section of the portal to view their full profile and areas of expertise."
  ],
  "screenshots": []
},


  {
    id: "contact-counselor",
    title: "How to Contact a Counselor",
    short: "Find verified counselors and send your queries.",
    steps: [
      "Go to the Counselor & Coaching section.",
      "Filter by specialization, language, or location if available.",
      "Open a counselor profile to see experience and details.",
      "Use the 'Contact' or 'Ask a Question' button if enabled.",
    ],
    screenshots: [],
  },
  {
    id: "update-profile",
    title: "How to Update Profile",
    short: "Keep your class, stream and interests up to date.",
    steps: [
      "Click on your profile avatar in the top-right corner.",
      "Open 'My Profile' from the dropdown.",
      "Update your personal details, class, stream and interests.",
      "Save changes so your recommendations become more accurate.",
    ],
    screenshots: [
      {
        id: "profile-page",
        label: "Profile Page",
        description: "Shows editable profile fields like name, class and stream.",
      },
    ],
  },
];


export default function GetStartedGuideModal({

  isOpen,
  onClose,
  initialStepId,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [lightboxOpen, setLightboxOpen] = useState(false);
const [lightboxIndex, setLightboxIndex] = useState(0);
const handleLightboxClose = (action) => {
  if (action === "next") {
    setLightboxIndex((prev) =>
      prev === activeItem.screenshots.length - 1 ? 0 : prev + 1
    );
  } else if (action === "prev") {
    setLightboxIndex((prev) =>
      prev === 0 ? activeItem.screenshots.length - 1 : prev - 1
    );
  } else {
    setLightboxOpen(false);
  }
};

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  // Set initial step if provided
  useEffect(() => {
    if (!isOpen) return;
    if (!initialStepId) {
      // Responsive default for sidebar
      if (typeof window !== "undefined") {
        setSidebarOpen(window.innerWidth >= 992); // open on lg+
      }
      return;
    }

    const index = GUIDE_ITEMS.findIndex((item) => item.id === initialStepId);
    if (index !== -1) setActiveIndex(index);
  }, [isOpen, initialStepId]);

  const activeItem = GUIDE_ITEMS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === GUIDE_ITEMS.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? GUIDE_ITEMS.length - 1 : prev - 1
    );
  };

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  const handleBackdropClick = (e) => {
    if (e.target.dataset.backdrop === "guide-modal") {
      onClose?.();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          data-backdrop="guide-modal"
          className="guide-modal-backdrop"
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="guide-modal-container"
            role="dialog"
            aria-modal="true"
            aria-labelledby="get-started-guide-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {/* HEADER */}
            <header className="guide-modal-header">
              <div className="d-flex align-items-center gap-2">
                <div className="guide-badge-icon">
                  <BookOpen size={18} />
                </div>
                <div>
                  <h2
                    id="get-started-guide-title"
                    className="guide-modal-title"
                  >
                    Quick Start Guide
                  </h2>
                  <p className="guide-modal-subtitle mb-0">
                    Learn how to use the portal in a few simple steps.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="guide-icon-btn"
                onClick={onClose}
                aria-label="Close guide"
              >
                <X size={18} />
              </button>
            </header>

            {/* TOGGLE SIDEBAR BUTTON (top, visible on mobile/tablet) */}
            <div className="guide-sidebar-toggle-wrapper">
              <button
                type="button"
                className="guide-toggle-btn"
                onClick={() => setSidebarOpen((prev) => !prev)}
              >
                {sidebarOpen ? (
                  <PanelLeftClose size={16} className="me-1" />
                ) : (
                  <PanelLeftOpen size={16} className="me-1" />
                )}
                Guide topics
              </button>
            </div>

            {/* BODY */}
            <div className="guide-modal-body">
              {/* LEFT SIDEBAR (QUESTION LIST) */}
              <AnimatePresence initial={false}>
                {sidebarOpen && (
                  <motion.aside
                    className="guide-sidebar"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <ul className="guide-question-list">
                      {GUIDE_ITEMS.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                          <li key={item.id}>
                            <button
                              type="button"
                              onClick={() => handleSelect(index)}
                              className={`guide-question-btn ${
                                isActive ? "is-active" : ""
                              }`}
                            >
                              <span className="guide-question-index">
                                {index + 1}
                              </span>
                              <span className="guide-question-text">
                                {item.title}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.aside>
                )}
              </AnimatePresence>

              {/* RIGHT CONTENT (ANSWER AREA) */}
              <section className="guide-content">
                <div className="guide-content-header">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <HelpCircle size={18} className="text-primary" />
                    <span className="guide-step-pill">
                      Step {activeIndex + 1} of {GUIDE_ITEMS.length}
                    </span>
                  </div>
                  <h3 className="guide-question-heading">
                    {activeItem.title}
                  </h3>
                  <p className="guide-question-short">
                    {activeItem.short}
                  </p>
                </div>

                <div className="guide-content-body">
                  {activeItem.steps && activeItem.steps.length > 0 && (
                    <ol className="guide-instruction-list">
                      {activeItem.steps.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ol>
                  )}

                  {/* Dynamic screenshots */}
                  {activeItem.screenshots?.length > 0 && (
                    <div className="guide-screenshots-grid">
                      {activeItem.screenshots.map((shot, i) => (
                        <div
                          key={shot.id}
                          className="guide-screenshot-placeholder"
                          onClick={() => {
                            setLightboxIndex(i);
                            setLightboxOpen(true);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <span className="guide-screenshot-label">{shot.label}</span>
                          <p className="mb-0">{shot.description}</p>

                          {shot.imageSrc && (
                            <img
                              src={shot.imageSrc}
                              alt={shot.label}
                              className="img-fluid mt-2 rounded-3"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}


                  {/* Fallback if no steps & no screenshots */}
                  {!activeItem.steps?.length && !activeItem.screenshots?.length && (
                    <p className="text-muted small mb-0">
                      Detailed help for this step will be added soon.
                    </p>
                  )}
                </div>

              </section>
            </div>

            {/* FOOTER – fixed inside modal */}
            <footer className="guide-modal-footer">
              <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between w-100 gap-2">
                <div className="guide-footer-status">
                  <span className="guide-footer-step">
                    {activeIndex + 1} / {GUIDE_ITEMS.length}
                  </span>
                  <span className="guide-footer-title">
                    {activeItem.title}
                  </span>
                </div>

                <div className="d-flex gap-2 ms-md-auto">
                  <button
                    type="button"
                    className="guide-nav-btn"
                    onClick={handlePrev}
                  >
                    <ChevronLeft size={16} className="me-1" />
                    Previous
                  </button>
                  <button
                    type="button"
                    className="guide-nav-btn guide-nav-btn-primary"
                    onClick={handleNext}
                  >
                    Next
                    <ChevronRight size={16} className="ms-1" />
                  </button>
                </div>
              </div>
            </footer>
          </motion.div>
        </motion.div>
      )}
      <ScreenshotLightbox
      isOpen={lightboxOpen}
      index={lightboxIndex}
      shots={activeItem.screenshots}
      onClose={handleLightboxClose}
    />

    </AnimatePresence>
  );
}
