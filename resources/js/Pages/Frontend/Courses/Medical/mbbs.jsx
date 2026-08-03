"use client";

import React, { useMemo } from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import {
  Stethoscope,
  HeartPulse,
  Layers3,
  GraduationCap,
  ClipboardList,
  ShieldCheck,
  Hospital,
  Users,
} from "lucide-react";

/* -------------------------------------------------------------
   UI Helpers
------------------------------------------------------------- */

function SectionHeader({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-4 text-center text-lg-start">
      <h2 className="sectionHeading mb-2 d-flex align-items-center gap-2 justify-content-center justify-content-lg-start">
        {Icon && <Icon size={18} className="text-primary" />}
        <span>{title}</span>
      </h2>
      {subtitle && (
        <p className="sectionSub mb-0" style={{ maxWidth: "90ch" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------
   PAGE
------------------------------------------------------------- */

export default function MBBSCoursesPage({ courseContent }) {
  // Debug log
  console.log('=== MBBSCoursesPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const courseLadder = courseContent?.course_ladder || [];
  const eligibilityNotes = courseContent?.eligibility_notes || [];
  const coreSubjects = courseContent?.core_subjects || [];
  const workSettings = courseContent?.work_settings || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About MBBS";
  const introDescription = courseContent?.intro_description || "MBBS is the primary medical degree required to become a doctor in India. It focuses on diagnosis, treatment, patient care and clinical decision-making across all major medical disciplines.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "It is a long and demanding journey, where real career growth comes after postgraduate specialisation and sustained clinical experience.";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Degree type", v: "Core Medical (Doctor) Degree" },
        { k: "Duration", v: "4.5 Years + 1 Year Internship" },
        { k: "Entrance exam", v: "NEET (UG)" },
        { k: "Next levels", v: "MD / MS → DM / MCh" },
        { k: "Reality check", v: "PG specialisation decides growth" },
      ];

  // If no data found, show message
  if (courseLadder.length === 0 && coreSubjects.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner
          title="MBBS & Core Medical Degrees"
          breadcrumb="Medical & Paramedical → MBBS"
        />
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
        title="MBBS & Core Medical Degrees"
        breadcrumb="Medical & Paramedical → MBBS"
      />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <HeartPulse size={18} className="text-primary" />
                <span>{introHeading}</span>
              </h2>

              <p className="sectionSub">{introDescription}</p>

              {introDescriptionSecondary && (
                <p className="sectionSub mb-0">{introDescriptionSecondary}</p>
              )}
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <dl className="row small mb-0">
                  {snapshotItems.map((s, i) => (
                    <React.Fragment key={i}>
                      <dt className="col-5">{s.k}</dt>
                      <dd className="col-7 mb-2">{s.v}</dd>
                    </React.Fragment>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) COURSE LADDER */}
      {courseLadder.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="Doctor career ladder"
              subtitle="MBBS is the foundation. Senior authority comes after postgraduate and super-specialisation."
            />

            <div className="row g-3">
              {courseLadder.map((course, index) => (
                <div key={index} className="col-12 col-md-6">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">{course.title}</h3>
                    {course.duration && (
                      <p className="small text-muted mb-1">{course.duration}</p>
                    )}
                    {course.focus && (
                      <p className="small text-muted mb-0">{course.focus}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3) ELIGIBILITY & STUDY */}
      {(eligibilityNotes.length > 0 || coreSubjects.length > 0) && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Eligibility & core subjects"
              subtitle="Rules may change; always verify official notifications."
            />

            <div className="row g-4">
              {eligibilityNotes.length > 0 && (
                <div className="col-12 col-lg-6">
                  <div className="nitDarkGlassBox">
                    <ul className="nitDarkList mb-0">
                      {eligibilityNotes.map((note, index) => (
                        <li key={index}>{note}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {coreSubjects.length > 0 && (
                <div className="col-12 col-lg-6">
                  <div className="sectionCard bg-light border">
                    <h3 className="h6 mb-3">Major subjects covered</h3>
                    <ul className="list-unstyled small mb-0">
                      {coreSubjects.map((subject, index) => (
                        <li key={index} className="mb-2 d-flex">
                          <span className="me-2">•</span>
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 4) WHERE DOCTORS WORK */}
      {workSettings.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Hospital}
              title="Where doctors work"
              subtitle="Your role depends on qualification, PG specialisation and experience."
            />

            <div className="row g-3">
              {workSettings.map((work, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-3">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">{work.title}</h3>
                    <p className="small text-muted mb-0">{work.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5) BUILD YOUR PROFILE */}
      {buildProfile.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={Users}
              title="Build your profile during MBBS"
              subtitle="Marks matter, but discipline, ethics and clinical seriousness matter more."
            />

            <div className="row g-3">
              {buildProfile.map((item, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">Key focus</h3>
                    <p className="small text-muted mb-0">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
              MBBS is not a shortcut career. Commitment, patience and postgraduate
              planning decide long-term success.
            </div>
          </div>
        </section>
      )}
    </FrontendLayout>
  );
}