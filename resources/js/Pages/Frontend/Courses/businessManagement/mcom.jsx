"use client";

import React, { useMemo } from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CoursesTabsBar from "../CoursesTabsBar";
import {
  Layers3,
  GraduationCap,
  ClipboardList,
  ShieldCheck,
  Building2,
  Users,
  BookOpen,
  Briefcase,
  Calculator,
  BadgeCheck,
  Landmark,
} from "lucide-react";

/* -------------------------------------------------------------
   Tabs (Business & Management) – same as B.Com page
------------------------------------------------------------- */

const TABS = [
  { id: "bcom", label: "B.Com", href: '/courses/bcom-allied-programs' },
  { id: "mcom", label: "M.Com", href: '/courses/mcom' },
  { id: "bba", label: "BBA", href: '/courses/bba' },
  { id: "mba", label: "MBA / PGDM", href: '/courses/mba-pgdm' },
  { id: "finance", label: "Finance / Taxation / Accounting", href: '/courses/finance' },
  { id: "pro", label: "CA / CS / CMA", href: '/courses/finance-taxation-accounting' },
];

/* -------------------------------------------------------------
   UI Helpers
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
          <dd className={`col-7 ${idx === items.length - 1 ? "mb-0" : "mb-2"}`}>
            {it.v}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

/* -------------------------------------------------------------
   PAGE
------------------------------------------------------------- */

export default function MComPage({ courseContent }) {
  // Debug log
  console.log('=== MComPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const mcomLadder = courseContent?.mcom_ladder || [];
  const whoShouldDo = courseContent?.who_should_do || [];
  const coreAreas = courseContent?.core_areas || [];
  const workSettings = courseContent?.work_settings || [];
  const nextStepOptions = courseContent?.next_step_options || [];
  const eligibilityNotes = courseContent?.eligibility_notes || [];
  const commonDocs = courseContent?.common_docs || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About M.Com";
  const introDescription = courseContent?.intro_description || "M.Com (Master of Commerce) is a postgraduate degree that strengthens your knowledge in accounting, finance, economics, taxation and commerce-related research areas (as per university syllabus).";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "M.Com is a strong choice for students who want deeper commerce understanding, plan for teaching/research tracks (with required eligibility), or want stronger grounding for finance/account roles.";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Degree type", v: "PG Commerce Degree" },
        { k: "Duration", v: "2 Years (varies)" },
        { k: "Eligibility", v: "B.Com / equivalent (criteria varies)" },
        { k: "Best for", v: "Advanced commerce • teaching/research • finance roles" },
        { k: "Reality check", v: "Skills + exposure decide jobs" },
      ];

  // If no data found, show message
  if (mcomLadder.length === 0 && coreAreas.length === 0 && whoShouldDo.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner title="M.Com (Master of Commerce)" breadcrumb="Business & Management → M.Com" />
        <CoursesTabsBar tabs={TABS} activeId="mcom" />
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
      <HeroInner title="M.Com (Master of Commerce)" breadcrumb="Business & Management → M.Com" />
      <CoursesTabsBar tabs={TABS} activeId="mcom" />

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
                <MiniDL items={snapshotItems} />
              </div>

              <div className="sectionCard bg-light border mt-3">
                <h3 className="h6 mb-2 d-flex align-items-center gap-2">
                  <BadgeCheck size={18} className="text-primary" />
                  <span>Reality check</span>
                </h3>
                <p className="small text-muted mb-0">
                  M.Com builds depth, but job outcomes still improve mainly through practical skills + internships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) M.COM LADDER */}
      {mcomLadder.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="M.Com career ladder"
              subtitle="M.Com supports both industry and academic pathways depending on your plan."
            />

            <div className="row g-3">
              {mcomLadder.map((step, index) => (
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
              Tip: Decide early — are you aiming for teaching/research or corporate roles? Build your profile accordingly.
            </div>
          </div>
        </section>
      )}

      {/* 3) WHO SHOULD DO M.COM */}
      {whoShouldDo.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Who should do M.Com"
              subtitle="M.Com is best when you want deeper commerce knowledge or academic direction."
            />

            <div className="row g-3">
              {whoShouldDo.map((item, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("deeper") || title.includes("knowledge") || title.includes("advanced")) return BookOpen;
                  if (title.includes("teaching") || title.includes("research") || title.includes("academic")) return GraduationCap;
                  if (title.includes("finance") || title.includes("account")) return Calculator;
                  if (title.includes("competitive") || title.includes("exam") || title.includes("banking")) return ShieldCheck;
                  return BookOpen;
                };
                const Icon = item.icon || getIcon(item.title);

                return (
                  <div key={index} className="col-12 col-md-6">
                    <div className="sectionCard h-100">
                      <h3 className="h6 mb-1 d-flex align-items-center gap-2">
                        <Icon size={16} className="text-primary" />
                        <span>{item.title}</span>
                      </h3>
                      <p className="small text-muted mb-0">{item.desc || item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4) CORE AREAS */}
      {coreAreas.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={ClipboardList}
              title="Core subjects (common)"
              subtitle="Exact syllabus varies by university, but these are commonly seen in M.Com."
            />

            <div className="row g-3">
              {coreAreas.map((area, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">{area}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5) WHERE YOU WORK */}
      {workSettings.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={Briefcase}
              title="Where M.Com graduates work"
              subtitle="Work depends on your skills, tools knowledge and experience."
            />

            <div className="row g-3">
              {workSettings.map((work, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("Accounts") || title.includes("Finance") || title.includes("Corporate")) return Calculator;
                  if (title.includes("Bank") || title.includes("Financial Services")) return Landmark;
                  if (title.includes("Compliance") || title.includes("Tax")) return ShieldCheck;
                  if (title.includes("Teaching") || title.includes("Research")) return GraduationCap;
                  return Briefcase;
                };
                const Icon = work.icon || getIcon(work.title);

                return (
                  <div key={index} className="col-12 col-md-6 col-lg-3">
                    <div className="sectionCard h-100">
                      <h3 className="h6 mb-1 d-flex align-items-center gap-2">
                        <Icon size={16} className="text-primary" />
                        <span>{work.title}</span>
                      </h3>
                      <p className="small text-muted mb-0">{work.desc || work.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6) BEST NEXT STEPS */}
      {nextStepOptions.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="Best next steps after M.Com"
              subtitle="Choose based on your target career: industry, teaching, research, or professional commerce."
            />

            <div className="row g-3">
              {nextStepOptions.map((step, index) => (
                <div key={index} className="col-12 col-md-6">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">{step.title}</h3>
                    <p className="small text-muted mb-0">{step.desc || step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
              Shortcut: for corporate roles, add advanced Excel + tools + internship. For teaching, follow NET/SET pathway rules.
            </div>
          </div>
        </section>
      )}

      {/* 7) ADMISSION & DOCUMENTS + BUILD PROFILE */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Admission checklist & profile building"
            subtitle="Keep basics ready and build practical skill value alongside PG."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <ClipboardList size={16} />
                  <span>Eligibility & admission notes</span>
                </span>

                <ul className="nitDarkList mb-0">
                  {(eligibilityNotes.length > 0 ? eligibilityNotes : [
                    "Usually after B.Com or equivalent UG commerce degree (criteria varies by university).",
                    "Some universities accept allied degrees with conditions—verify official notifications.",
                    "Admission can be merit-based or entrance-based depending on institute/state/university.",
                    "Specialisation/electives vary by college and university."
                  ]).map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>

                <div className="small text-muted mt-3">
                  <span className="fw-semibold text-white">Reminder:</span> course structure and electives vary by university.
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5 d-flex">
              <div className="sectionCard bg-light border w-100">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Building2 size={18} className="text-primary" />
                  <span>Common documents</span>
                </h3>

                <ul className="list-unstyled small mb-0">
                  {(commonDocs.length > 0 ? commonDocs : [
                    "UG marksheets + degree/provisional certificate",
                    "Class 10 & 12 marksheets (sometimes required)",
                    "Entrance scorecard (if applicable)",
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
              </div>
            </div>

            {buildProfile.length > 0 && (
              <div className="col-12">
                <div className="sectionCard">
                  <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                    <Users size={18} className="text-primary" />
                    <span>Build your profile during M.Com</span>
                  </h3>

                  <div className="row g-3">
                    {buildProfile.map((item, index) => (
                      <div key={index} className="col-12 col-md-6 col-lg-4">
                        <div className="sectionCard bg-light border h-100">
                          <h4 className="h6 mb-1">Key focus</h4>
                          <p className="small text-muted mb-0">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-muted small mt-3" style={{ maxWidth: "95ch" }}>
                    Sensible shortcut: M.Com + advanced Excel + internship = stronger roles in accounts/finance.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </FrontendLayout>
  );
}