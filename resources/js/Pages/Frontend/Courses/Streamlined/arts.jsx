"use client";

import React from "react";
import {
  Layers3,
  BookOpen,
  GraduationCap,
  Landmark,
  Scale,
  Users,
  ClipboardList,
  Sparkles,
} from "lucide-react";

import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CoursesTabsBar from "../CoursesTabsBar";

// ------------------------------------------------------------------
// Streamlined Degree sub-tabs
// ------------------------------------------------------------------
const TABS = [
  { id: "ba", label: "BA & Allied", href: '/courses/arts-graduation-courses-ba-allied' },
  { id: "bcom", label: "B.Com & Allied", href: '/courses/commerce-graduation-courses-bcom-allied' },
  { id: "bsc", label: "B.Sc & Allied", href: '/courses/science-graduation-courses-bsc-allied' },
  { id: "ma", label: "MA, MSW & Allied", href: '/courses/arts-pg-courses-ma-msw-allied' },
  { id: "msc", label: "M.Sc & Allied", href: '/courses/science-pg-courses-msc-allied' },
  { id: "mcom", label: "M.Com & Allied", href: '/courses/commerce-pg-courses-mcom-allied' },
];

// ------------------------------------------------------------------
// Small helpers
// ------------------------------------------------------------------
function SectionHeader({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-4 text-center text-lg-start">
      <h2 className="sectionHeading mb-2 d-flex align-items-center gap-2 justify-content-center justify-content-lg-start">
        {Icon ? <Icon size={18} className="text-primary" /> : null}
        <span>{title}</span>
      </h2>
      {subtitle ? (
        <p className="sectionSub mb-0" style={{ maxWidth: "90ch" }}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function MiniDL({ items }) {
  return (
    <dl className="row small mb-0">
      {items.map((it, idx) => (
        <React.Fragment key={idx}>
          <dt className="col-5">{it.k}</dt>
          <dd className={`col-7 ${idx === items.length - 1 ? "mb-0" : "mb-2"}`}>
            {it.v}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

// ------------------------------------------------------------------
// Main Page
// ------------------------------------------------------------------
export default function ArtsDegree({ courseContent }) {
  // Debug log
  console.log('=== ArtsDegree Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const subjectFamilies = courseContent?.subject_families || [];
  const degreeOptions = courseContent?.degree_options || [];
  const afterDegree = courseContent?.after_degree || [];
  const admissionPoints = courseContent?.admission_points || [];
  const documents = courseContent?.documents || [];
  const careersSnapshot = courseContent?.careers_snapshot || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About Arts Graduation Courses";
  const introDescription = courseContent?.intro_description || "Arts graduation is one of the most flexible degree routes after Class 12. It can be built around a major subject (Honours) or a broader combination (General), and it works well for higher studies, competitive exams, teaching pathways, and diverse entry-level careers.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "In streamlined Arts-aligned choices, you'll commonly see B.A, B.A Public Administration, Integrated B.A LL.B (Law), and BSW (Social Work). The right choice depends on your long-term goal—so decide early and build skills + experience alongside your degree.";

  // Convert snapshot array to object for easy access
  const snapshotData = {};
  if (Array.isArray(snapshot)) {
    snapshot.forEach(item => {
      if (item && typeof item === 'object' && 'key' in item && 'value' in item) {
        snapshotData[item.key] = item.value;
      }
    });
  }

  // If no data found, show message
  if (subjectFamilies.length === 0 && degreeOptions.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner title="Arts Graduation Courses (BA & Allied)" breadcrumb="BA & Allied" />
        <CoursesTabsBar tabs={TABS} activeId="ba" />
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
      <HeroInner title="Arts Graduation Courses (BA & Allied)" breadcrumb="BA & Allied" />
      <CoursesTabsBar tabs={TABS} activeId="ba" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <BookOpen size={18} className="text-primary" />
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

                <MiniDL
                  items={snapshot && snapshot.length > 0 ? 
                    snapshot.map(item => ({ k: item.key, v: item.value })) :
                    [
                      { k: "Options covered", v: "BA • Public Admin • BA LL.B • BSW" },
                      { k: "Typical duration", v: "3 years (most UG) • 5 years (Integrated Law)" },
                      { k: "Entry", v: "After Class 12" },
                      { k: "Admission", v: "Merit / Entrance (varies by institute)" },
                      { k: "Good for", v: "PG • Exams • Teaching track • Careers" },
                    ]
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) BA (General/Honours) – Subject Families */}
      {subjectFamilies.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="B.A (General / Honours)"
              subtitle="The most flexible Arts UG route. Choose General for breadth or Honours for depth in one subject."
            />

            <div className="row g-4 align-items-stretch">
              <div className="col-12 col-lg-7 d-flex">
                <div className="nitDarkGlassBox w-100">
                  <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                    <BookOpen size={16} />
                    <span>What you study (common families)</span>
                  </span>

                  <div className="d-flex flex-column gap-2 mb-4">
                    {subjectFamilies.map((sf, index) => (
                      <div key={index}>
                        <span>
                          <strong>{sf.title}:</strong>{" "}
                          <span className="text-light small">{sf.items ? sf.items.join(" • ") : ''}</span>
                        </span>
                      </div>
                    ))}
                  </div>

                  <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                    <Sparkles size={16} />
                    <span>How to choose smartly</span>
                  </span>

                  <ul className="nitDarkList mb-0">
                    <li>
                      Pick <strong>Honours</strong> if you want depth for <strong>PG / teaching / research</strong>.
                    </li>
                    <li>
                      Pick <strong>General</strong> if you want flexibility and broader combinations.
                    </li>
                    <li>
                      For exams, choose a subject that supports <strong>answer-writing + GS overlap</strong>
                      (e.g., History/Pol Science/Public Admin).
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-lg-5 d-flex">
                <div className="sectionCard bg-light border w-100">
                  <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                    <Layers3 size={18} className="text-primary" />
                    <span>Quick facts</span>
                  </h3>

                  <MiniDL
                    items={[
                      { k: "Duration", v: "3 years" },
                      { k: "Eligibility", v: "Class 12 pass" },
                      { k: "Admission", v: "Merit / Entrance (varies)" },
                      { k: "Best for", v: "PG • Exams • Flexible careers" },
                    ]}
                  />

                  <div className="mt-4">
                    <div className="fw-semibold mb-2">Typical outcomes</div>

                    <div className="d-flex flex-column gap-2">
                      {[
                        "Higher studies (MA / MSW / other PG options)",
                        "Teaching track planning (as per requirements)",
                        "Competitive exam preparation (WBCS/UPSC/SSC etc.)",
                        "Entry roles + skills (content/admin/operations/support roles)",
                      ].map((x, idx) => (
                        <div key={idx}>
                          <span>{x}</span>
                          <span className="small text-muted">Outcome</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-muted small mt-3">
                      Sensible approach: decide one primary goal (PG/exams/job) by end of 1st year and build your profile accordingly.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Degree options cards */}
            {degreeOptions.length > 0 && (
              <div className="row g-3 mt-3">
                {degreeOptions.map((option, index) => (
                  <div key={index} className="col-12 col-lg-4">
                    <div className="nitDarkGlassCard h-100">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="nitExamTag">{option.tag || 'Course'}</span>
                        <span className="nitExamLevel">{option.level || 'UG'}</span>
                      </div>
                      <p className="nitExamTitle mb-1">{option.title}</p>
                      <p className="nitExamText mb-0">{option.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 3) After Degree */}
      {afterDegree.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={ClipboardList}
              title="After BA: sensible next steps"
              subtitle="Pick a direction early and build skills + experience alongside your degree."
            />

            <div className="row g-3 g-md-4">
              {afterDegree.map((item, index) => (
                <div key={index} className="col-12 col-md-6">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">{item.title}</h3>
                    <p className="small text-muted mb-3">{item.desc}</p>

                    <ul className="list-unstyled small mb-0">
                      {item.points && item.points.map((point, idx) => (
                        <li key={idx} className="d-flex mb-2">
                          <span className="me-2">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
              Sensible shortcut: choose one primary goal (PG / exams / job) by end of 1st year and build your profile in that direction.
            </div>
          </div>
        </section>
      )}

      {/* 4) Admission & Documents */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Admission & Documents"
            subtitle="Admission rules vary by institute. Keep these practical points in mind before applying."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <ClipboardList size={16} />
                  <span>Admission pattern (simple)</span>
                </span>

                <ul className="nitDarkList mb-0">
                  {(admissionPoints.length > 0 ? admissionPoints : [
                    "Many UG admissions are based on Class 12 marks (merit list).",
                    "Some colleges may have subject cut-offs or entrance routes for selected courses.",
                    "Always verify from official institute/university notices before applying."
                  ]).map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-5 d-flex">
              <div className="sectionCard bg-light border w-100">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Common documents checklist</span>
                </h3>

                <ul className="list-unstyled small mb-0">
                  {(documents.length > 0 ? documents : [
                    "Class 10 & 12 marksheets",
                    "ID proof (Aadhaar etc.)",
                    "Photo + signature",
                    "Category/EWS/Income certificate (if applicable)",
                    "Domicile (if required)"
                  ]).map((doc, index) => (
                    <li key={index} className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-muted small mt-3">
                  Keep scanned copies ready (PDF/JPG) and check size limits during application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) Careers snapshot */}
      {careersSnapshot.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="Careers snapshot"
              subtitle="Arts degrees open multiple tracks. Choose one and build a strong profile around it."
            />

            <div className="row g-3">
              {careersSnapshot.map((career, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">{career.title}</h3>
                    <p className="small text-muted mb-0">{career.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
              Tip: Your degree becomes powerful when you combine it with skill-building, internships, and a clear goal by the end of first year.
            </div>
          </div>
        </section>
      )}
    </FrontendLayout>
  );
}