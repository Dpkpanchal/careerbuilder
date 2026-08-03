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
  Stethoscope,
  Sparkles,
} from "lucide-react";

/* -------------------------------------------------------------
   UI helpers (match your portal patterns)
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

export default function AYUSHCoursesPage({ courseContent }) {
  // Debug log
  console.log('=== AYUSHCoursesPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const ayushSystems = courseContent?.ayush_systems || [];
  const ayushLadder = courseContent?.ayush_ladder || [];
  const eligibilityNotes = courseContent?.eligibility_notes || [];
  const workSettings = courseContent?.work_settings || [];
  const admissionNotes = courseContent?.admission_notes || [];
  const commonDocs = courseContent?.common_docs || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About AYUSH";
  const introDescription = courseContent?.intro_description || "AYUSH represents India's recognized traditional and alternative medical systems — Ayurveda, Homoeopathy, Unani and Siddha. These are doctor-level clinical pathways within their own systems, with UG degrees and internships followed by PG specialisation options.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "Success in AYUSH depends on clinical discipline, ethics, patient communication and consistent practice building — similar to other medical careers, but within the philosophy and methods of the chosen system.";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Systems covered", v: "Ayurveda • Homoeopathy • Unani • Siddha" },
        { k: "Main UG degrees", v: "BAMS • BHMS • BUMS • BSMS" },
        { k: "Typical UG duration", v: "≈ 5.5 Years (incl. internship) • varies" },
        { k: "Where you work", v: "AYUSH hospitals • Clinics • Wellness centres" },
        { k: "Reality check", v: "Clinical maturity + patient trust decide success" },
      ];

  // If no data found, show message
  if (ayushSystems.length === 0 && ayushLadder.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner
          title="AYUSH (Ayurveda, Homoeopathy, Unani, Siddha)"
          breadcrumb="Medical & Paramedical → AYUSH"
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
        title="AYUSH (Ayurveda, Homoeopathy, Unani, Siddha)"
        breadcrumb="Medical & Paramedical → AYUSH"
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
                  Admission rules can change. Always verify current eligibility, counselling process and course recognition
                  before joining.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) AYUSH LADDER */}
      {ayushLadder.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="AYUSH career ladder"
              subtitle="UG degree + internship builds clinical base. PG (MD) strengthens specialisation and teaching/research routes."
            />

            <div className="row g-3">
              {ayushLadder.map((step, index) => (
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
              Tip: Choose the system that matches your beliefs and working style, because you'll study and practice it deeply for years.
            </div>
          </div>
        </section>
      )}

      {/* 3) SYSTEMS GRID */}
      {ayushSystems.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={Stethoscope}
              title="AYUSH systems & common routes"
              subtitle="Each system has its own UG degree and PG route. Choose one system and go deep."
            />

            <div className="row g-3">
              {ayushSystems.map((system, index) => (
                <div key={index} className="col-12 col-md-6">
                  <div className="sectionCard h-100">
                    <div className="d-flex justify-content-between align-items-start gap-3">
                      <div>
                        {system.badge && (
                          <span className="badge badge-sm text-bg-primary">{system.badge}</span>
                        )}
                        <h3 className="h6 mb-1 mt-2">{system.title}</h3>
                        {system.whatYouStudy && (
                          <p className="small text-muted mb-0">{system.whatYouStudy}</p>
                        )}
                      </div>
                      <Leaf size={18} className="text-primary flex-shrink-0 mt-1" />
                    </div>

                    {system.commonRoute && system.commonRoute.length > 0 && (
                      <div className="mt-3">
                        <div className="small fw-semibold text-dark mb-2">Common route</div>
                        <ul className="list-unstyled small mb-0">
                          {system.commonRoute.map((route, idx) => (
                            <li key={idx} className="d-flex mb-2">
                              <span className="me-2">•</span>
                              <span>{route}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {system.whereYouWork && system.whereYouWork.length > 0 && (
                      <div className="mt-3">
                        <div className="small fw-semibold text-dark mb-2">Where you work</div>
                        <ul className="list-unstyled small mb-0">
                          {system.whereYouWork.slice(0, 4).map((place, idx) => (
                            <li key={idx} className="d-flex mb-2">
                              <span className="me-2">•</span>
                              <span>{place}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {system.bestFor && (
                      <div className="mt-3">
                        <div className="small fw-semibold text-dark mb-1">Best for</div>
                        <p className="small text-muted mb-0">{system.bestFor}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
              Note: The role scope and practice permissions depend on regulations and registration norms. Always follow official rules.
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
              subtitle="Confirm current rules from official notifications before applying."
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
                    <span>How to choose a system</span>
                  </h3>
                  <p className="small text-muted mb-0">
                    Choose the system you genuinely respect and can practice long-term. AYUSH is not "easy medical"—it requires
                    serious study, internship learning and ethical practice building.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5) WHERE YOU WORK */}
      {workSettings.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={Hospital}
              title="Where AYUSH professionals work"
              subtitle="Your practice setting depends on experience, location, and the network you build."
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

      {/* 6) ADMISSION & PROFILE */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Admission & profile building"
            subtitle="Practical reminders before you join and while you study."
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
                    "Choose a recognised college with strong clinical exposure and hospital tie-up.",
                    "Understand the system's philosophy and treatment approach before committing.",
                    "Long-term success depends on clinical maturity, ethics and patient trust building."
                  ]).map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>

                <div className="mt-3 small text-muted">
                  <span className="fw-semibold text-white">Common documents:</span>{" "}
                  {(commonDocs.length > 0 ? commonDocs : [
                    "Class 10 & 12 marksheets",
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
            Sensible shortcut: Choose one AYUSH system, build strong internship learning, and plan PG (MD) if you want teaching/research or advanced practice.
          </div>
        </div>
      </section>
    </FrontendLayout>
  );
}