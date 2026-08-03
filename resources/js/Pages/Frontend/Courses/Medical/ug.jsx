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
} from "lucide-react";

/* -------------------------------------------------------------
   UI Helpers (match Nursing/MBBS pages)
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

export default function UGParamedicalPage({ courseContent }) {
  // Debug log
  console.log('=== UGParamedicalPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const ugLadder = courseContent?.ug_ladder || [];
  const eligibilityNotes = courseContent?.eligibility_notes || [];
  const ugCourseOptions = courseContent?.ug_course_options || [];
  const specialisationAreas = courseContent?.specialisation_areas || [];
  const workSettings = courseContent?.work_settings || [];
  const admissionNotes = courseContent?.admission_notes || [];
  const commonDocs = courseContent?.common_docs || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About UG Paramedical Degrees";
  const introDescription = courseContent?.intro_description || "UG paramedical degrees (after Class 12) prepare students for professional allied health roles that support diagnosis, treatment, rehabilitation and clinical services. These careers work closely with doctors, nurses, laboratories, imaging departments, OT and therapy units.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "Compared to short diplomas, UG degrees offer broader training and stronger long-term growth—especially if you build practical skills and plan a PG/specialisation later.";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Who it's for", v: "Students after Class 12 (10+2)" },
        { k: "Degree duration", v: "Typically 3–4 Years (varies)" },
        { k: "Core areas", v: "Lab • Imaging • OT • Physio • Dialysis" },
        { k: "Work settings", v: "Hospitals • Labs • Rehab • Imaging centres" },
        { k: "Reality check", v: "Internship + skills decide placement quality" },
      ];

  // If no data found, show message
  if (ugLadder.length === 0 && ugCourseOptions.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner
          title="UG Paramedical Degrees (After 10+2)"
          breadcrumb="Medical & Paramedical → UG Paramedical"
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
        title="UG Paramedical Degrees (After 10+2)"
        breadcrumb="Medical & Paramedical → UG Paramedical"
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
                  Eligibility and course names can differ across universities. Always verify exact subject requirement,
                  internship structure and recognition before applying.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) UG LADDER */}
      {ugLadder.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="UG paramedical ladder"
              subtitle="Start with a degree route, take internships seriously, then specialise for senior roles."
            />

            <div className="row g-3">
              {ugLadder.map((course, index) => (
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
              Tip: Choose a domain (Lab/Imaging/Physio/OT/Dialysis) early and build deep practical skill in it.
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
              subtitle="Confirm exact criteria from your target institution before you apply."
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
                    Students who like practical healthcare work, can handle instruments/protocols, and want a stable allied
                    health career with scope to grow through specialisation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4) COMMON UG OPTIONS */}
      {ugCourseOptions.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Activity}
              title="Popular UG paramedical degree options"
              subtitle="These are commonly found across universities. Availability differs by state and institution."
            />

            <div className="row g-3">
              {ugCourseOptions.map((option, index) => (
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
              Note: Course titles differ (B.Sc / Bachelor). Focus on curriculum + internship + practical exposure.
            </div>
          </div>
        </section>
      )}

      {/* 5) SPECIALISATION AREAS */}
      {specialisationAreas.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Specialisation directions (for growth)"
              subtitle="These are growth directions you can aim for with experience + certifications/PG."
            />

            <div className="row g-3">
              {specialisationAreas.map((area, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">Growth focus</h3>
                    <p className="small text-muted mb-0">{area}</p>
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
              title="Where you can work"
              subtitle="Your role scope depends on your degree, internship quality and employer policy."
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
              subtitle="Keep this practical checklist ready."
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
              Tip: Before paying fees, check labs/equipment, internship tie-ups, and real student outcomes.
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
              title="Build your profile during UG"
              subtitle="Degree-level skills + discipline make you employable and growth-ready."
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
              Sensible shortcut: pick a domain early, become excellent at practical work, then plan PG/specialisation for senior roles.
            </div>
          </div>
        </section>
      )}
    </FrontendLayout>
  );
}