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
  Activity,
  BadgeCheck,
  BookOpen,
  Award,
} from "lucide-react";

/* -------------------------------------------------------------
   UI Helpers (match your Nursing/MBBS/UG pages)
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

export default function PGParamedicalPage({ courseContent }) {
  // Debug log
  console.log('=== PGParamedicalPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const pgLadder = courseContent?.pg_ladder || [];
  const eligibilityNotes = courseContent?.eligibility_notes || [];
  const commonPgOptions = courseContent?.common_pg_options || [];
  const specialisationDirections = courseContent?.specialisation_directions || [];
  const workSettings = courseContent?.work_settings || [];
  const admissionNotes = courseContent?.admission_notes || [];
  const commonDocs = courseContent?.common_docs || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About PG Paramedical";
  const introDescription = courseContent?.intro_description || "PG paramedical programmes help allied health graduates build deeper expertise in a focused domain like advanced lab diagnostics, imaging technology, OT systems, dialysis care, physiotherapy specialities and more. This is where you move from 'support roles' into specialised and senior departmental work.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "The strongest outcomes come from choosing a domain-aligned PG, joining institutes with real clinical exposure, and developing leadership + quality discipline for long-term growth.";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Who it's for", v: "Students after UG paramedical degree" },
        { k: "Duration", v: "Typically 1–2 Years (varies)" },
        { k: "Goal", v: "Specialisation + senior responsibility" },
        { k: "Work settings", v: "Hospitals • Diagnostic chains • Teaching" },
        { k: "Reality check", v: "Depth + practical exposure decide senior growth" },
      ];

  // If no data found, show message
  if (pgLadder.length === 0 && commonPgOptions.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner
          title="PG Paramedical Courses"
          breadcrumb="Medical & Paramedical → PG Paramedical"
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
        title="PG Paramedical Courses"
        breadcrumb="Medical & Paramedical → PG Paramedical"
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
                  PG titles differ across universities. Always check curriculum, department exposure, eligibility, and
                  the real job scope for your target role.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) PG LADDER */}
      {pgLadder.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="PG ladder (for senior growth)"
              subtitle="PG is where you specialise. Depth + real department exposure builds senior-level capability."
            />

            <div className="row g-3">
              {pgLadder.map((course, index) => (
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

            <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
              Tip: Choose a PG aligned to your UG domain — and make your clinical exposure your competitive advantage.
            </div>
          </div>
        </section>
      )}

      {/* 3) ELIGIBILITY */}
      {eligibilityNotes.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Eligibility (common patterns)"
              subtitle="Eligibility varies by course and university. Confirm before applying."
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
                  <h3 className="h6 mb-3">Best suited for</h3>
                  <p className="small text-muted mb-0">
                    Allied health graduates who want specialised roles, better responsibility, stronger hospital
                    departments exposure, and long-term growth into supervisory/teaching tracks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4) COMMON PG OPTIONS */}
      {commonPgOptions.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Award}
              title="Common PG paramedical options"
              subtitle="Exact names differ. Use this to understand direction and career fit."
            />

            <div className="row g-3">
              {commonPgOptions.map((option, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <div className="sectionCard h-100">
                    <div className="d-flex align-items-start gap-2">
                      <Activity size={18} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="h6 mb-1">{option.name}</h3>
                        <p className="small text-muted mb-0">{option.notes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
              Note: PG selection should match your UG degree and your target department role.
            </div>
          </div>
        </section>
      )}

      {/* 5) SPECIALISATION DIRECTIONS */}
      {specialisationDirections.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Specialisation directions (career growth)"
              subtitle="Focus areas that commonly lead to senior responsibilities."
            />

            <div className="row g-3">
              {specialisationDirections.map((direction, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">Growth focus</h3>
                    <p className="small text-muted mb-0">{direction}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6) WORK SETTINGS */}
      {workSettings.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Hospital}
              title="Where you can work after PG"
              subtitle="PG opens senior/lead roles depending on employer policy and your department experience."
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

      {/* 7) ADMISSION & DOCUMENTS */}
      {(admissionNotes.length > 0 || commonDocs.length > 0) && (
        <section className="py-4 py-md-5">
          <div className="container">
            <SectionHeader
              icon={ClipboardList}
              title="Admission & Documents"
              subtitle="A practical checklist to avoid last-minute confusion."
            />

            <div className="row g-4 align-items-stretch">
              {admissionNotes.length > 0 && (
                <div className="col-12 col-lg-7 d-flex">
                  <div className="nitDarkGlassBox w-100">
                    <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                      <Building2 size={16} />
                      <span>Admission basics</span>
                    </span>

                    <ul className="nitDarkList mb-0">
                      {admissionNotes.map((note, index) => (
                        <li key={index}>{note}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {commonDocs.length > 0 && (
                <div className="col-12 col-lg-5 d-flex">
                  <div className="sectionCard bg-light border w-100">
                    <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                      <Layers3 size={18} className="text-primary" />
                      <span>Common documents checklist</span>
                    </h3>

                    <ul className="list-unstyled small mb-0">
                      {commonDocs.map((doc, index) => (
                        <li key={index} className="mb-2 d-flex">
                          <span className="me-2">•</span>
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
              Tip: Ask about department postings, equipment access, and who mentors PG students in practical work.
            </div>
          </div>
        </section>
      )}

      {/* 8) BUILD YOUR PROFILE */}
      {buildProfile.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Users}
              title="Build your profile during PG"
              subtitle="PG success is about depth, discipline and clinical maturity."
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
              Sensible shortcut: become a specialist in one domain, build real departmental proof (projects/quality work), then grow into senior/teaching roles.
            </div>
          </div>
        </section>
      )}
    </FrontendLayout>
  );
}