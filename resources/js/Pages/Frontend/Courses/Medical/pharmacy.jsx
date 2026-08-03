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
  Pill,
  FlaskConical,
  Factory,
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

export default function PharmacyCoursesPage({ courseContent }) {
  // Debug log
  console.log('=== PharmacyCoursesPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const pharmacyLadder = courseContent?.pharmacy_ladder || [];
  const eligibilityNotes = courseContent?.eligibility_notes || [];
  const coreAreas = courseContent?.core_areas || [];
  const workSettings = courseContent?.work_settings || [];
  const specialisations = courseContent?.specialisations || [];
  const admissionNotes = courseContent?.admission_notes || [];
  const commonDocs = courseContent?.common_docs || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About Pharmacy Courses";
  const introDescription = courseContent?.intro_description || "Pharmacy is a healthcare and life-science career focused on medicines—how they are prepared, tested, manufactured, regulated and used safely for patients. Pharmacy professionals work across retail and hospital settings as well as pharmaceutical industry and research.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "The field offers multiple ladders: D.Pharm for quick entry, B.Pharm as the main degree route, M.Pharm for specialisation and Pharm.D for stronger clinical/hospital exposure.";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Main routes", v: "D.Pharm • B.Pharm • M.Pharm • Pharm.D" },
        { k: "Entry point", v: "After Class 12 (commonly Science)" },
        { k: "Core sectors", v: "Retail • Hospital • Industry • Research" },
        { k: "Best strategy", v: "Choose a direction early (clinical vs industry)" },
        { k: "Reality check", v: "Practical skills + exposure decide growth" },
      ];

  // If no data found, show message
  if (pharmacyLadder.length === 0 && coreAreas.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner
          title="Pharmacy (D.Pharm / B.Pharm / M.Pharm / Pharm.D)"
          breadcrumb="Medical & Paramedical → Pharmacy"
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
        title="Pharmacy (D.Pharm / B.Pharm / M.Pharm / Pharm.D)"
        breadcrumb="Medical & Paramedical → Pharmacy"
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
                  Eligibility and admissions vary by institute/state/university. Always check official notifications and
                  recognition before admission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) PHARMACY LADDER */}
      {pharmacyLadder.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="Pharmacy course ladder"
              subtitle="Start from the level you are eligible for, then move upward for better roles and specialisation."
            />

            <div className="row g-3">
              {pharmacyLadder.map((course, index) => (
                <div key={index} className="col-12 col-md-6">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">{course.title}</h3>
                    {course.duration && (
                      <p className="small text-muted mb-1">{course.duration}</p>
                    )}
                    {course.focus && (
                      <p className="small text-muted mb-2">{course.focus}</p>
                    )}
                    {course.next && (
                      <p className="small text-muted mb-0">
                        <span className="fw-semibold text-dark">Next:</span> {course.next}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
              Tip: If you want hospital/clinical roles, explore Pharm.D or clinical-focused PG options. If you want industry,
              build strong lab + QC/QA fundamentals.
            </div>
          </div>
        </section>
      )}

      {/* 3) ELIGIBILITY + CORE AREAS */}
      {(eligibilityNotes.length > 0 || coreAreas.length > 0) && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Eligibility & core study areas"
              subtitle="Course rules vary by institute. Use this as a practical guide."
            />

            <div className="row g-4 align-items-stretch">
              {eligibilityNotes.length > 0 && (
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
              )}

              {coreAreas.length > 0 && (
                <div className="col-12 col-lg-5 d-flex">
                  <div className="sectionCard bg-light border w-100">
                    <h3 className="h6 mb-3">Core areas you study</h3>
                    <ul className="list-unstyled small mb-0">
                      {coreAreas.map((area, index) => (
                        <li key={index} className="mb-2 d-flex">
                          <span className="me-2">•</span>
                          <span>{area}</span>
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

      {/* 4) WORK SETTINGS */}
      {workSettings.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Hospital}
              title="Where pharmacy professionals work"
              subtitle="Your pathway (retail vs hospital vs industry) defines your skills and growth."
            />

            <div className="row g-3">
              {workSettings.map((work, index) => {
                // Get icon based on title or use a default
                const getIcon = (title) => {
                  if (title.includes("Retail") || title.includes("Community")) return Pill;
                  if (title.includes("Hospital") || title.includes("Clinical")) return Hospital;
                  if (title.includes("Industry") || title.includes("Manufacturing")) return Factory;
                  if (title.includes("Research") || title.includes("Academics")) return FlaskConical;
                  return Activity;
                };
                const Icon = work.icon ? work.icon : getIcon(work.title);

                return (
                  <div key={index} className="col-12 col-md-6 col-lg-3">
                    <div className="sectionCard h-100">
                      <h3 className="h6 mb-1 d-flex align-items-start gap-2">
                        <Icon size={20} className="text-primary flex-shrink-0" />
                        <span>{work.title}</span>
                      </h3>
                      <p className="small text-muted mb-0 mt-2">{work.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
              Reality check: Industry roles usually prefer strong practical lab skills. Hospital/clinical roles prefer clinical exposure.
            </div>
          </div>
        </section>
      )}

      {/* 5) SPECIALISATIONS */}
      {specialisations.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={Activity}
              title="Specialisations (mainly at PG level)"
              subtitle="Specialisation availability depends on university and institute options."
            />

            <div className="row g-3">
              {specialisations.map((spec, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">M.Pharm / PG focus</h3>
                    <p className="small text-muted mb-0">{spec}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6) ADMISSION & DOCUMENTS */}
      {(admissionNotes.length > 0 || commonDocs.length > 0) && (
        <section className="py-4 py-md-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={ClipboardList}
              title="Admission & Documents"
              subtitle="Keep this checklist ready and choose institutes carefully."
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
              Tip: Ask about labs, internships, industry/hospital tie-ups, and real placement outcomes before paying fees.
            </div>
          </div>
        </section>
      )}

      {/* 7) BUILD YOUR PROFILE */}
      {buildProfile.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={Users}
              title="Build your profile in pharmacy"
              subtitle="Your direction decides what you should focus on: retail, hospital or industry."
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
              Sensible shortcut: Decide your track early — Industry (QC/QA/R&D) or Clinical (hospital) — then build deep proof through projects/internships.
            </div>
          </div>
        </section>
      )}
    </FrontendLayout>
  );
}