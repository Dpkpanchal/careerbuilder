"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import {
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Clock,
  BadgeCheck,
  Target,
  Briefcase,
  X,
  School,
  BookOpen,
  FileText,
} from "lucide-react";

const COURSES = [
  {
    id: "ug",
    code: "UG",
    group: "Degree Courses (UG)",
    description:
      "Core undergraduate options after Class 12 (Arts). Strong base for higher studies, government exams and career entry roles.",
    items: [
      {
        key: "ba",
        title: "B.A (General / Honours)",
        duration: "3 Years",
        eligibility: "Class 12 pass (Arts preferred; as per institution norms)",
        bestFor:
          "Students who want broad options (teaching, admin, research, exams).",
        outcomes: [
          "Higher studies (M.A)",
          "Govt exams (WBCS/UPSC)",
          "Entry roles in various sectors",
        ],
      },
      {
        key: "publicadmin",
        title: "B.A Public Administration",
        duration: "3 Years",
        eligibility: "Class 12 pass",
        bestFor: "Those interested in governance, administration and policy.",
        outcomes: [
          "M.A Public Administration",
          "Public sector roles",
          "WBCS/UPSC preparation",
        ],
      },
      {
        key: "socialwork",
        title: "BSW (Bachelor of Social Work)",
        duration: "3 Years",
        eligibility: "Class 12 pass",
        bestFor: "Students who want NGO/social sector/community careers.",
        outcomes: ["MSW", "Social sector roles", "Project/field work careers"],
      },
      {
        key: "business",
        title: "BBA",
        duration: "3 Years",
        eligibility: "Class 12 pass",
        bestFor: "Students targeting management/corporate roles.",
        outcomes: ["MBA", "Business/operations roles", "Entrepreneurship foundation"],
      },
    ],
  },
  {
    id: "pro",
    code: "PRO",
    group: "Professional / Specialized",
    description:
      "Skill-focused degree/diploma routes that lead into specific careers and industries.",
    items: [
      {
        key: "journalism",
        title: "Journalism / Mass Communication",
        duration: "UG (varies) / PG options available",
        eligibility: "Class 12 pass (institution criteria)",
        bestFor: "Writing, reporting, digital media, content creation.",
        outcomes: ["Media & communication jobs", "Content/PR roles", "PG specialization"],
      },
      {
        key: "library",
        title: "B.Lib (Library Science)",
        duration: "UG/1 Year (varies by university)",
        eligibility: "Class 12 pass (or graduation, depending on university)",
        bestFor: "Library/information management careers.",
        outcomes: ["M.Lib", "Library roles", "Academic institutions jobs"],
      },
    ],
  },
  {
    id: "law",
    code: "LAW",
    group: "Law Track",
    description:
      "Legal education options for advocacy, judiciary, public policy and governance roles.",
    items: [
      {
        key: "law",
        title: "B.A LLB (Integrated)",
        duration: "5 Years",
        eligibility: "Class 12 pass + entrance (as per institute)",
        bestFor: "Students committed to legal career early.",
        outcomes: ["Advocacy", "LLM", "Judicial Exam path"],
      },
      {
        key: "law-llb",
        title: "LLB",
        duration: "3 Years",
        eligibility: "Graduation required (varies)",
        bestFor: "Students who complete graduation then move to law.",
        outcomes: ["Advocacy", "LLM", "Judicial Exam path"],
      },
    ],
  },
  {
    id: "teach",
    code: "TEACH",
    group: "Teaching Track",
    description:
      "Teacher education pathways for school teaching and inclusive/special education roles.",
    items: [
      {
        key: "teaching",
        title: "B.Ed",
        duration: "2 Years (varies by norms)",
        eligibility: "Graduation + minimum % (as per institute)",
        bestFor: "School teaching and education careers.",
        outcomes: ["Secondary Teacher", "M.Ed", "Education-related roles"],
      },
      {
        key: "teaching-special",
        title: "B.Ed (Special Education)",
        duration: "2 Years (varies by norms)",
        eligibility: "Graduation (as per institute)",
        bestFor: "Special needs education careers.",
        outcomes: ["Special educator roles", "M.Ed (Special)", "Inclusive education track"],
      },
    ],
  },
  {
    id: "higher",
    code: "PG",
    group: "Higher Studies & Research",
    description:
      "Postgraduate study and research pathways for teaching, academia and specialised careers.",
    items: [
      {
        key: "ma",
        title: "M.A",
        duration: "2 Years",
        eligibility: "Relevant graduation",
        bestFor: "Subject depth + teaching/research/government prep.",
        outcomes: ["NET/SET", "M.Phil/PhD", "Assistant Professor track"],
      },
      {
        key: "phd",
        title: "PhD / Research",
        duration: "Varies",
        eligibility: "PG + entrance/interview (as per university)",
        bestFor: "Academic/research careers.",
        outcomes: ["Teaching in higher education", "Research roles", "Post-doc opportunities"],
      },
    ],
  },
];

export default function ArtsCourseExplorerTab({ focusKey, onClearFocus }) {
  const [expanded, setExpanded] = useState({});
  const [activeCourseKey, setActiveCourseKey] = useState(null);

  const courseByKey = useMemo(() => {
    const obj = {};
    COURSES.forEach((g) => g.items.forEach((i) => (obj[i.key] = { ...i, group: g.group })));
    return obj;
  }, []);

  useEffect(() => {
    if (focusKey && courseByKey[focusKey]) {
      setActiveCourseKey(focusKey);
    }
  }, [focusKey, courseByKey]);

  const toggleGroup = (id) => setExpanded((p) => ({ ...p, [id]: !p[id] }));

  const activeCourse = activeCourseKey ? courseByKey[activeCourseKey] : null;

  return (
    <div className="cbAfter12ArtsCourses">
      {/* Parent hook for override */}
      <section className="py-4 py-md-5 bg-light cbAfter12ArtsCourses__section">
        <div className="container">
          {/* Header (same pattern as your design system) */}
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center mb-4 mb-md-5">
              <h2 className="sectionHeading mb-2">Explore Courses After Class 12 (Arts)</h2>
              <p className="sectionSub mb-0">
                Courses are grouped by track. Tap any course to view duration, eligibility and outcomes.
              </p>

              {focusKey ? (
                <div className="mt-3">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    onClick={onClearFocus}
                  >
                    Clear focus
                  </button>
                </div>
              ) : null}
            </div>
          </div>

          {/* Group Cards (sectionCard / expandCard) */}
          <div className="row g-3 g-md-4">
            {COURSES.map((group) => {
              const isExpanded = !!expanded[group.id];
              const hasMore = group.items.length > 4;
              const visibleItems = isExpanded ? group.items : group.items.slice(0, 4);

              return (
                <div key={group.id} className="col-12 col-md-6 col-lg-4">
                  <div className="sectionCard expandCard h-100 cbAfter12ArtsCourses__groupCard">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge badge-sm text-bg-primary d-inline-flex align-items-center gap-1">
                        <GraduationCap size={14} aria-hidden="true" />
                        {group.code}
                      </span>
                    </div>

                    <h3 className="h6 mb-2">{group.group}</h3>
                    <p className="small text-muted mb-3">{group.description}</p>

                    <ul className="list-unstyled small mb-2">
                      {visibleItems.map((course) => (
                        <li key={course.key} className="d-flex align-items-start gap-2 mb-2">
                          <span className="mt-1" aria-hidden="true">•</span>

                          <button
                            type="button"
                            className="btn btn-link p-0 text-start text-decoration-none cbAfter12ArtsCourses__courseLink"
                            onClick={() => setActiveCourseKey(course.key)}
                          >
                            <span className="fw-semibold">{course.title}</span>
                            <span className="d-block text-muted small">
                              <Clock size={14} className="me-1" aria-hidden="true" />
                              {course.duration}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>

                    {hasMore && (
                      <button
                        type="button"
                        className="expandTrigger btn btn-sm btn-link px-0 d-inline-flex align-items-center gap-1"
                        onClick={() => toggleGroup(group.id)}
                      >
                        {isExpanded ? "Hide full list" : "View full list"}
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Course Details Modal (React-only) */}
          <AnimatePresence>
            {activeCourse && (
              <motion.div
                className="position-fixed top-0 start-0 w-100 h-100 cbAfter12ArtsCourses__modalOverlay"
                style={{ background: "rgba(0,0,0,.65)", zIndex: 2000 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onMouseDown={(e) => {
                  if (e.target === e.currentTarget) setActiveCourseKey(null);
                }}
              >
                <motion.div
                  className="position-absolute top-50 start-50 translate-middle bg-white rounded-4 border shadow cbAfter12ArtsCourses__modal"
                  style={{ width: "95%", maxWidth: 980, height: "90%", overflow: "hidden" }}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 14 }}
                  transition={{ duration: 0.2 }}
                  onMouseDown={(e) => e.stopPropagation()}
                  role="dialog"
                  aria-modal="true"
                  aria-label="Course details"
                >
                  {/* Modal header */}
                  <div className="p-3 border-bottom d-flex justify-content-between align-items-start gap-2">
                    <div>
                      <div className="fw-semibold">{activeCourse.title}</div>
                      <div className="small text-muted">{activeCourse.group}</div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-sm btn-primary d-inline-flex align-items-center gap-2"
                      onClick={() => setActiveCourseKey(null)}
                    >
                      <X size={16} aria-hidden="true" />
                      Close
                    </button>
                  </div>

                  {/* Modal body */}
                  <div className="p-3" style={{ height: "calc(100% - 58px)", overflow: "auto" }}>
                    <div className="row g-3">
                      <div className="col-12 col-md-4">
                        <div className="rounded-3 border p-3 h-100">
                          <div className="small text-muted d-flex align-items-center gap-2">
                            <Clock size={16} className="text-primary" aria-hidden="true" />
                            Duration
                          </div>
                          <div className="fw-semibold mt-1">{activeCourse.duration}</div>
                        </div>
                      </div>

                      <div className="col-12 col-md-8">
                        <div className="rounded-3 border p-3 h-100">
                          <div className="small text-muted d-flex align-items-center gap-2">
                            <BadgeCheck size={16} className="text-primary" aria-hidden="true" />
                            Eligibility
                          </div>
                          <div className="fw-semibold mt-1">{activeCourse.eligibility}</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="rounded-3 border p-3">
                          <div className="small text-muted d-flex align-items-center gap-2 mb-1">
                            <Target size={16} className="text-primary" aria-hidden="true" />
                            Best for
                          </div>
                          <div className="fw-semibold">{activeCourse.bestFor}</div>

                          <div className="mt-3">
                            <div className="small text-muted d-flex align-items-center gap-2 mb-2">
                              <Briefcase size={16} className="text-primary" aria-hidden="true" />
                              Outcomes
                            </div>
                            <ul className="mb-0">
                              {activeCourse.outcomes.map((o) => (
                                <li key={o} className="small">
                                  {o}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Context actions */}
                    <div className="d-flex flex-wrap gap-2 mt-3">
                      <a className="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-2" href="/colleges">
                        <School size={16} aria-hidden="true" />
                        Find Colleges
                      </a>
                      <a className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-2" href="/exams">
                        <FileText size={16} aria-hidden="true" />
                        Related Exams
                      </a>
                      <a className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-2" href="/scholarships">
                        <BookOpen size={16} aria-hidden="true" />
                        Scholarships
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
