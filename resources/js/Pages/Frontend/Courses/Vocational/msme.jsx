"use client";

import React, { useState } from "react";
import { Link } from '@inertiajs/react';
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import VocationalTabsBar from "./VocationalTabsBar";

// ------------------------------------------------------------------
// Tabs (same across vocational pages)
// ------------------------------------------------------------------
const TABS = [
  {
    id: "class-8-plus",
    label: "Class 8+ Vocational Trades",
    href: '/courses/class-8-vocational-trades',
  },
  {
    id: "class-10-plus",
    label: "Class 10+ Vocational Trades",
    href: '/courses/class-10-vocational-trades',
  },
  {
    id: "iti",
    label: "ITI & ITC Trades",
    href: '/courses/iti-itc-trades',
  },
  {
    id: "msme",
    label: "MSME Tool Room Courses",
    href: '/courses/msme-tool-room-courses',
  },
];

// ------------------------------------------------------------------
// Helper: group courses by group label
// ------------------------------------------------------------------
function groupCourses(courses) {
  if (!courses || !Array.isArray(courses) || courses.length === 0) {
    return [];
  }

  const map = {};
  for (const c of courses) {
    const group = c.group || c.category || 'Other Courses';
    if (!map[group]) map[group] = [];
    map[group].push(c);
  }
  
  return Object.keys(map).map((name) => ({
    name: name,
    courses: map[name] || [],
  }));
}

// ------------------------------------------------------------------
// Course Card Component
// ------------------------------------------------------------------
function CourseCard({ course }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sectionCard h-100 courseCard">
      <div className="d-flex flex-column gap-1 mb-1">
        <div className="small fw-semibold">{course.name || 'Untitled Course'}</div>
        <div className="d-flex flex-wrap gap-2 small text-muted">
          {course.duration && (
            <span className="badge badge-sm bg-light text-muted border-0">
              {course.duration}
            </span>
          )}
          {course.fee && (
            <span className="badge badge-sm bg-light text-muted border-0">
              Fee: {course.fee}
            </span>
          )}
          {course.start && (
            <span className="badge badge-sm bg-light text-muted border-0">
              Start: {course.start}
            </span>
          )}
        </div>
      </div>

      <button
        type="button"
        className="expandTrigger btn btn-sm btn-link px-0 d-inline-flex align-items-center gap-1 small"
        onClick={() => setOpen((p) => !p)}
      >
        {open ? "Hide details" : "View details"}
        {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {open && (
        <div className="mt-2 small">
          {course.eligibility && (
            <p className="mb-1">
              <span className="text-muted">Eligibility: </span>
              {course.eligibility}
            </p>
          )}
          {course.selection && (
            <p className="mb-1">
              <span className="text-muted">Selection: </span>
              {course.selection}
            </p>
          )}
          {course.intake && (
            <p className="mb-1">
              <span className="text-muted">Intake: </span>
              {course.intake}
            </p>
          )}
          {course.contents && <p className="mb-1">{course.contents}</p>}
          {course.note && (
            <p className="mb-0 text-warning fst-italic">{course.note}</p>
          )}
        </div>
      )}
    </div>
  );
}

// ------------------------------------------------------------------
// Page Component
// ------------------------------------------------------------------

export default function MSMEToolRoomPage({ courseContent }) {
  // Debug log to see what we're getting
  console.log('=== MSMEToolRoomPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const longTermPrograms = courseContent?.long_term_programs || [];
  const shortTermCourses = courseContent?.short_term_courses || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "High-End Skill Training at MSME Tool Room, Kolkata";
  const introDescription = courseContent?.intro_description || "MSME Tool Room – Kolkata (Central Tool Room & Training Centre) is a Government of India society under the Ministry of MSME. It focuses on specialised training in tool & die making, CAD/CAM, automation, mechatronics, hardware and networking.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "The programs below range from a 4-year diploma to focused certificate and advanced diploma courses of 2–6 months, meant for students after Class 10, ITI pass-outs, diploma holders and engineering graduates.";
  const admissionHeading = courseContent?.admission_heading || "How to Choose the Right MSME Course";
  const admissionDescription = courseContent?.admission_description || "";
  const admissionInfo = courseContent?.admission_info || [];
  const nextSteps = courseContent?.next_steps || [];
  const skillAgencies = courseContent?.skill_agencies || [];
  const ctaButton = courseContent?.cta_button || {
    label: "Visit MSME Tool Room Website",
    url: "http://www.msmetoolroomkolkata.com/"
  };

  // Convert snapshot array to object for easy access
  const snapshotData = {};
  if (Array.isArray(snapshot)) {
    snapshot.forEach(item => {
      if (item && typeof item === 'object' && 'key' in item && 'value' in item) {
        snapshotData[item.key] = item.value;
      }
    });
  }

  // Group short-term courses
  const groupedCourses = groupCourses(shortTermCourses);

  // If no data found, show message
  if (longTermPrograms.length === 0 && shortTermCourses.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner
          title="MSME Tool Room – Kolkata Courses"
          breadcrumb="MSME Tool Room Kolkata"
        />
        <VocationalTabsBar tabs={TABS} activeId="msme" />
        <div className="container py-5">
          <div className="alert alert-warning">
            <h4>No courses available</h4>
            <p>We're currently updating our course listings. Please check back later.</p>
          </div>
        </div>
      </FrontendLayout>
    );
  }

  return (
    <FrontendLayout>
      <HeroInner
        title="MSME Tool Room – Kolkata Courses"
        breadcrumb="MSME Tool Room Kolkata"
      />

      <VocationalTabsBar tabs={TABS} activeId="msme" />

      {/* Overview */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">{introHeading}</h2>
              <p className="sectionSub">{introDescription}</p>
              {introDescriptionSecondary && (
                <p className="sectionSub mb-0">{introDescriptionSecondary}</p>
              )}
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3">Institute Snapshot</h3>
                <dl className="row small mb-0">
                  {snapshot && snapshot.length > 0 ? (
                    snapshot.map((item, index) => (
                      <React.Fragment key={index}>
                        <dt className="col-5">{item.key}</dt>
                        <dd className="col-7 mb-2">{item.value}</dd>
                      </React.Fragment>
                    ))
                  ) : (
                    // Fallback content if no snapshot data
                    <>
                      <dt className="col-5">Institute</dt>
                      <dd className="col-7 mb-2">
                        MSME Tool Room – Kolkata
                        <br />
                        (Central Tool Room &amp; Training Centre)
                      </dd>

                      <dt className="col-5">Authority</dt>
                      <dd className="col-7 mb-2">
                        Govt. of India Society, Ministry of MSME
                      </dd>

                      <dt className="col-5">Location</dt>
                      <dd className="col-7 mb-2">
                        Bon Hooghly Industrial Area,
                        <br />
                        Kolkata – 700108
                      </dd>

                      <dt className="col-5">Website</dt>
                      <dd className="col-7 mb-0">
                        <a
                          href={ctaButton.url || "http://www.msmetoolroomkolkata.com/"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="infoLink d-inline-flex align-items-center gap-1"
                        >
                          <ExternalLink size={14} />
                          {ctaButton.label || "msmetoolroomkolkata.com"}
                        </a>
                      </dd>
                    </>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long-term Diploma */}
      {longTermPrograms.length > 0 && (
        <section className="py-4 py-md-5 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center mb-5">
                <h2 className="sectionHeading mb-2">
                  Long-Term Diploma (After Class 10)
                </h2>
                <p className="sectionSub mb-0">
                  A full 4-year program that builds deep technical expertise in tool
                  and die making and allied engineering areas.
                </p>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                {longTermPrograms.map((course, index) => (
                  <div key={index} className="sectionCard">
                    <div className="row g-3">
                      <div className="col-12 col-md-8">
                        <h3 className="h6 mb-2">{course.name || 'Course'}</h3>
                        {course.summary && (
                          <p className="small text-muted mb-2">{course.summary}</p>
                        )}
                        {course.contentsBrief && (
                          <p className="small mb-0">
                            <span className="text-muted">Key topics: </span>
                            {course.contentsBrief}
                          </p>
                        )}
                      </div>
                      <div className="col-12 col-md-4 small text-muted">
                        {course.duration && (
                          <div><strong>Duration:</strong> {course.duration}</div>
                        )}
                        {course.intake && (
                          <div><strong>Intake:</strong> {course.intake}</div>
                        )}
                        {course.fee && (
                          <div><strong>Fee:</strong> {course.fee}</div>
                        )}
                        {course.start && (
                          <div><strong>Start:</strong> {course.start}</div>
                        )}
                        {course.selection && (
                          <div><strong>Selection:</strong> {course.selection}</div>
                        )}
                        {course.eligibility && (
                          <div className="mt-1">
                            <strong>Eligibility:</strong> {course.eligibility}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Medium & Short-Term Programs */}
      {groupedCourses.length > 0 && (
        <section className="py-4 py-md-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center mb-5">
                <h2 className="sectionHeading mb-2">
                  Medium & Short-Term Programs
                </h2>
                <p className="sectionSub mb-0">
                  Choose a group that matches your interest – design, machining,
                  automation or networking – and then open the cards to see full
                  details.
                </p>
              </div>
            </div>

            {groupedCourses.map((group) => (
              <div key={group.name} className="mb-4 mb-md-5">
                <div className="d-flex justify-content-between align-items-end mb-2">
                  <h3 className="h6 mb-0">{group.name}</h3>
                </div>
                <div className="row g-3 g-md-4">
                  {group.courses.map((course, index) => (
                    <div
                      key={index}
                      className="col-12 col-md-6 col-lg-4 d-flex"
                    >
                      <CourseCard course={course} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* How to choose / Admission Section */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">
                {admissionHeading || "How to Choose the Right MSME Course"}
              </h2>
              {admissionDescription && (
                <p className="sectionSub">{admissionDescription}</p>
              )}
              <ul className="list-unstyled small mb-0">
                {(admissionInfo || []).map((item, index) => (
                  <li key={index} className="d-flex mb-2">
                    <span className="me-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
                {admissionInfo.length === 0 && (
                  <>
                    <li className="d-flex mb-2">
                      <span className="me-2 mt-1">•</span>
                      <span>
                        If you have just passed <strong>Class 10</strong> and want a
                        full technical profession, consider the{" "}
                        <strong>Diploma in Tool &amp; Die Making</strong>.
                      </span>
                    </li>
                    <li className="d-flex mb-2">
                      <span className="me-2 mt-1">•</span>
                      <span>
                        If you are already in <strong>Diploma or B.Tech</strong> and
                        want to specialise, look at{" "}
                        <strong>CAD/CAM/CAE, Structural Design, VLSI &amp; Embedded</strong>{" "}
                        or <strong>Automation &amp; Process Control</strong>.
                      </span>
                    </li>
                    <li className="d-flex mb-2">
                      <span className="me-2 mt-1">•</span>
                      <span>
                        If you enjoy <strong>machine shop and production work</strong>,
                        consider <strong>CNC Machining</strong> and conventional
                        machining programs.
                      </span>
                    </li>
                    <li className="d-flex mb-2">
                      <span className="me-2 mt-1">•</span>
                      <span>
                        If you are drawn towards{" "}
                        <strong>computers, networks and servers</strong>, choose{" "}
                        <strong>Hardware &amp; Networking</strong> or{" "}
                        <strong>CCNA-focused</strong> courses.
                      </span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3">Next Steps</h3>
                <ol className="small ps-3 mb-3">
                  {(nextSteps || []).map((step, index) => (
                    <li key={index} className="mb-1">{step}</li>
                  ))}
                  {nextSteps.length === 0 && (
                    <>
                      <li>Match your interest with one of the groups above.</li>
                      <li>Check your eligibility (Class 10 / ITI / Diploma / Degree).</li>
                      <li>Note down duration, fee and start months.</li>
                      <li>
                        Visit the official MSME Tool Room website to confirm the
                        latest schedule and apply.
                      </li>
                    </>
                  )}
                </ol>
                <a
                  href={ctaButton.url || "http://www.msmetoolroomkolkata.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary rounded-pill px-3 d-inline-flex align-items-center gap-1"
                >
                  <ExternalLink size={14} />
                  {ctaButton.label || "Visit MSME Tool Room Website"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FrontendLayout>
  );
}