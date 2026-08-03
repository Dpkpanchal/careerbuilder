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
} from "lucide-react";

/* -------------------------------------------------------------
   UI Helpers (same style as Nursing/MBBS pages)
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

export default function ParamedicalDiplomaPage({ courseContent }) {
  // Debug log
  console.log('=== ParamedicalDiplomaPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const diplomaLadder = courseContent?.diploma_ladder || [];
  const eligibilityNotes = courseContent?.eligibility_notes || [];
  const commonDiplomaOptions = courseContent?.common_diploma_options || [];
  const workSettings = courseContent?.work_settings || [];
  const admissionNotes = courseContent?.admission_notes || [];
  const commonDocs = courseContent?.common_docs || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About Paramedical Diplomas (After 10)";
  const introDescription = courseContent?.intro_description || "Paramedical diploma and certificate courses allow students to enter the healthcare ecosystem early—usually in support roles that assist doctors, nurses and hospital departments like laboratories, imaging, operation theatre and patient care services.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "These are practical, job-oriented routes. The best outcomes come when you choose a recognised institute, take hands-on training seriously, and plan your next upgrades (Class 12 → UG degree) for long-term growth.";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Who it's for", v: "Students after Class 10 who want early healthcare entry" },
        { k: "Typical duration", v: "6 Months – 2 Years (varies)" },
        { k: "Common areas", v: "Lab • OT • Radiology • Patient care support" },
        { k: "Work settings", v: "Hospitals • Labs • Imaging centres" },
        { k: "Reality check", v: "Practical training decides employability" },
      ];

  // If no data found, show message
  if (diplomaLadder.length === 0 && commonDiplomaOptions.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner
          title="Diploma Paramedical Courses (After 10)"
          breadcrumb="Medical & Paramedical → Diploma Paramedical"
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
        title="Diploma Paramedical Courses (After 10)"
        breadcrumb="Medical & Paramedical → Diploma Paramedical"
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

              {/* Small note box (no links) */}
              <div className="sectionCard bg-light border mt-3">
                <h3 className="h6 mb-2 d-flex align-items-center gap-2">
                  <BadgeCheck size={18} className="text-primary" />
                  <span>Important note</span>
                </h3>
                <p className="small text-muted mb-0">
                  Course names and eligibility can vary widely across institutes. Always verify recognition, curriculum,
                  practical training and placement support before admission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) LADDER */}
      {diplomaLadder.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="Paramedical ladder (from Class 10 onwards)"
              subtitle="Start with a diploma/certificate, gain experience, then upgrade to higher qualifications for better roles."
            />

            <div className="row g-3">
              {diplomaLadder.map((course, index) => (
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
              Tip: If you want higher growth, complete Class 12 and plan for an UG paramedical degree later.
            </div>
          </div>
        </section>
      )}

      {/* 3) COMMON DIPLOMA OPTIONS */}
      {commonDiplomaOptions.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Popular diploma/entry-level paramedical options"
              subtitle="Exact course availability depends on your district/state and the institute. Use this as a career map."
            />

            <div className="row g-3">
              {commonDiplomaOptions.map((option, index) => (
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
              Note: Some specialisations are offered after 10+2 in many institutes. Always confirm eligibility before applying.
            </div>
          </div>
        </section>
      )}

      {/* 4) WORK SETTINGS */}
      {workSettings.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Hospital}
              title="Where you can work"
              subtitle="Work environment and role scope depend on your course quality, practical training and employer policy."
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

      {/* 5) ADMISSION & DOCUMENTS */}
      {(admissionNotes.length > 0 || commonDocs.length > 0) && (
        <section className="py-4 py-md-5">
          <div className="container">
            <SectionHeader
              icon={ClipboardList}
              title="Admission & Documents"
              subtitle="A practical checklist to reduce last-minute confusion."
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
              Warning: Avoid institutes that promise "guaranteed job" without real hospital tie-up and practical training.
            </div>
          </div>
        </section>
      )}

      {/* 6) BUILD YOUR PROFILE */}
      {buildProfile.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Users}
              title="Build your profile during a diploma"
              subtitle="In paramedical roles, your attitude + practical skill makes you employable."
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
              Sensible shortcut: pick one core skill area (Lab/OT/Imaging), build strong basics, then upgrade to a UG degree for better growth.
            </div>
          </div>
        </section>
      )}
    </FrontendLayout>
  );
}