"use client";

import React, { useMemo } from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import {
  Layers3,
  HeartPulse,
  GraduationCap,
  ClipboardList,
  ShieldCheck,
  Hospital,
  Users,
  Building2,
  BadgeCheck,
  BookOpen,
  Leaf,
  Sparkles,
  Activity,
} from "lucide-react";

/* -------------------------------------------------------------
   UI Helpers (match your portal patterns)
------------------------------------------------------------- */

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
          <dd className={`col-7 ${idx === items.length - 1 ? "mb-0" : "mb-2"}`}>{it.v}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

/* -------------------------------------------------------------
   PAGE
------------------------------------------------------------- */

export default function NaturopathyYogaPage({ courseContent }) {
  // Debug log
  console.log('=== NaturopathyYogaPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const pathways = courseContent?.pathways || [];
  const whatYouDo = courseContent?.what_you_do || [];
  const eligibilityNotes = courseContent?.eligibility_notes || [];
  const whereYouWork = courseContent?.where_you_work || [];
  const admissionNotes = courseContent?.admission_notes || [];
  const commonDocs = courseContent?.common_docs || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About Naturopathy & Yoga";
  const introDescription = courseContent?.intro_description || "Naturopathy and Yoga focus on wellness, preventive health, lifestyle improvement and mind-body practices. Many students choose this path to work in wellness centres, teach yoga, support rehabilitation routines, or build a long-term wellness practice.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "The field has multiple routes — short certifications for yoga instruction and wellness support, and longer degree routes (like BNYS in some institutions) for more structured clinical and system-level training.";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Focus", v: "Wellness • Lifestyle • Yoga training • Preventive health" },
        { k: "Entry routes", v: "Certificate/Diploma → UG degree (where offered) → PG" },
        { k: "Work settings", v: "Wellness centres • Institutions • Rehab support" },
        { k: "Best strategy", v: "Build real teaching skills + safe practice methods" },
        { k: "Reality check", v: "Credibility comes from consistency + practical skill" },
      ];

  // If no data found, show message
  if (pathways.length === 0 && whatYouDo.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner
          title="Naturopathy & Yoga"
          breadcrumb="Medical & Paramedical → Naturopathy & Yoga"
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
        title="Naturopathy & Yoga"
        breadcrumb="Medical & Paramedical → Naturopathy & Yoga"
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
                <MiniDL items={snapshotItems} />
              </div>

              <div className="sectionCard bg-light border mt-3">
                <h3 className="h6 mb-2 d-flex align-items-center gap-2">
                  <BadgeCheck size={18} className="text-primary" />
                  <span>Important note</span>
                </h3>
                <p className="small text-muted mb-0">
                  Course titles and permissions vary widely. Always verify recognition, syllabus and the real career scope
                  before joining.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) PATHWAYS / LADDER */}
      {pathways.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="Course pathways"
              subtitle="Start from a route that fits your goal: teaching wellness/yoga, or structured degree pathways where offered."
            />

            <div className="row g-3">
              {pathways.map((step, index) => (
                <div key={index} className="col-12 col-md-6">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">{step.title}</h3>
                    {step.duration && (
                      <p className="small text-muted mb-1">{step.duration}</p>
                    )}
                    {step.focus && (
                      <p className="small text-muted mb-0">{step.focus}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
              Tip: If your goal is teaching, focus on safe instruction skills. If your goal is clinical practice, prefer recognised degree routes with internship.
            </div>
          </div>
        </section>
      )}

      {/* 3) WHAT YOU DO */}
      {whatYouDo.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={Leaf}
              title="What you do in this career"
              subtitle="The role depends on your qualification and the workplace setting."
            />

            <div className="row g-3">
              {whatYouDo.map((item, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-3">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">{item.title}</h3>
                    <p className="small text-muted mb-0">{item.desc || item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4) ELIGIBILITY */}
      {eligibilityNotes.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Eligibility & admission (common patterns)"
              subtitle="Always verify criteria from the institute you apply to."
            />

            <div className="row g-4 align-items-stretch">
              <div className="col-12 col-lg-7 d-flex">
                <div className="nitDarkGlassBox w-100">
                  <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                    <BookOpen size={16} />
                    <span>Eligibility notes</span>
                  </span>

                  <ul className="nitDarkList mb-0">
                    {eligibilityNotes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-12 col-lg-5 d-flex">
                <div className="sectionCard bg-light border w-100">
                  <h3 className="h6 mb-2 d-flex align-items-center gap-2">
                    <Sparkles size={18} className="text-primary" />
                    <span>Best suited for</span>
                  </h3>
                  <p className="small text-muted mb-0">
                    Students who enjoy wellness and teaching, have patience for guiding people, and can maintain
                    consistency in personal practice and discipline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5) WHERE YOU WORK */}
      {whereYouWork.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={Hospital}
              title="Where you can work"
              subtitle="Work settings depend on your qualification and experience."
            />

            <div className="row g-3">
              {whereYouWork.map((work, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-3">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">{work.title}</h3>
                    <p className="small text-muted mb-0">{work.desc || work.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6) DOCUMENTS + PROFILE */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Admission & profile building"
            subtitle="Practical checklist before admission and during the course."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-6 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Building2 size={16} />
                  <span>Admission basics</span>
                </span>

                <ul className="nitDarkList mb-0">
                  {(admissionNotes.length > 0 ? admissionNotes : [
                    "Choose an institute with strong practical training and safe teaching methods.",
                    "Avoid courses that promise unrealistic medical claims; focus on wellness, fitness and evidence-based practice.",
                    "If your goal is clinical practice, prefer recognised degree routes with internship/clinical exposure."
                  ]).map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>

                <div className="mt-3 small text-muted">
                  <span className="fw-semibold text-white">Common documents:</span>{" "}
                  {(commonDocs.length > 0 ? commonDocs : [
                    "Class 10/12 marksheets (as required)",
                    "ID proof (Aadhaar etc.)",
                    "Photo + signature",
                    "Category/EWS/Income certificate (if applicable)"
                  ]).slice(0, 4).join(" • ")} • ...
                </div>
              </div>
            </div>

            {buildProfile.length > 0 && (
              <div className="col-12 col-lg-6 d-flex">
                <div className="sectionCard bg-light border w-100">
                  <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                    <Users size={18} className="text-primary" />
                    <span>Build your profile</span>
                  </h3>

                  <ul className="list-unstyled small mb-0">
                    {buildProfile.map((item, index) => (
                      <li key={index} className="mb-2 d-flex">
                        <span className="me-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Sensible shortcut: build credibility by mastering safe instruction, strong communication, and consistent practice — that is what creates long-term career growth.
          </div>
        </div>
      </section>
    </FrontendLayout>
  );
}