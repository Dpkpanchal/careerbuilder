"use client";

import React, { useMemo } from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CoursesTabsBar from "../CoursesTabsBar";
import {
  Layers3,
  Briefcase,
  GraduationCap,
  ClipboardList,
  ShieldCheck,
  Building2,
  Users,
  Calculator,
  Landmark,
  BadgeCheck,
  Banknote,
} from "lucide-react";

/* -------------------------------------------------------------
   Tabs (Business & Management)
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
          <dd className={`col-7 ${idx === items.length - 1 ? "mb-0" : "mb-2"}`}>{it.v}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

/* -------------------------------------------------------------
   PAGE
------------------------------------------------------------- */

export default function BComPage({ courseContent }) {
  // Debug log
  console.log('=== BComPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const bcomLadder = courseContent?.bcom_ladder || [];
  const bcomTypes = courseContent?.business_types || [];
  const coreSubjects = courseContent?.core_areas || [];
  const typicalRoles = courseContent?.typical_roles || [];
  const workSettings = courseContent?.work_settings || [];
  const nextStepOptions = courseContent?.next_step_options || [];
  const eligibilityNotes = courseContent?.eligibility_notes || [];
  const commonDocs = courseContent?.common_docs || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About B.Com";
  const introDescription = courseContent?.intro_description || "B.Com (Bachelor of Commerce) is a popular undergraduate degree that builds a foundation in accounting, finance, business laws, economics and taxation basics (as per university syllabus).";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "B.Com works best when you combine the degree with practical skills like Excel, basic accounting tools and real work exposure (internships/office experience).";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Course type", v: "UG Commerce Degree (General/Honours)" },
        { k: "Duration", v: "3 Years" },
        { k: "Eligibility", v: "Class 12 (criteria varies)" },
        { k: "Best for", v: "Accounts • Banking • Business roles • Higher studies" },
        { k: "Strong ladders", v: "B.Com → M.Com / MBA / CA-CS-CMA" },
      ];

  // If no data found, show message
  if (bcomLadder.length === 0 && coreSubjects.length === 0 && bcomTypes.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner title="B.Com & Allied Programs" breadcrumb="Business & Management → B.Com" />
        <CoursesTabsBar tabs={TABS} activeId="bcom" />
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
      <HeroInner title="B.Com & Allied Programs" breadcrumb="Business & Management → B.Com" />
      <CoursesTabsBar tabs={TABS} activeId="bcom" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Calculator size={18} className="text-primary" />
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
                  The degree gives base knowledge, but job outcomes improve mainly through skills + experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) COURSE LADDER */}
      {bcomLadder.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="B.Com career ladder"
              subtitle="B.Com gives a flexible base. Your next step depends on your goal."
            />

            <div className="row g-3">
              {bcomLadder.map((step, index) => (
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
              Tip: If you want faster job readiness, build Excel + accounting practice early and do at least 1 internship.
            </div>
          </div>
        </section>
      )}

      {/* 3) B.COM TYPES */}
      {bcomTypes.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Types of B.Com"
              subtitle="Different colleges offer different versions. Choose based on your goal."
            />

            <div className="row g-3">
              {bcomTypes.map((type, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("General")) return Layers3;
                  if (title.includes("Honours")) return ShieldCheck;
                  if (title.includes("Specialisation")) return Banknote;
                  return Layers3;
                };
                const Icon = type.icon || getIcon(type.title);

                return (
                  <div key={index} className="col-12 col-md-4">
                    <div className="sectionCard h-100">
                      <h3 className="h6 mb-1 d-flex align-items-center gap-2">
                        <Icon size={16} className="text-primary" />
                        <span>{type.title}</span>
                      </h3>
                      <p className="small text-muted mb-0">{type.desc || type.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4) CORE SUBJECTS + ROLES */}
      {(coreSubjects.length > 0 || typicalRoles.length > 0) && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={ClipboardList}
              title="Core subjects & typical roles"
              subtitle="Syllabus varies, but these subjects and entry roles are common."
            />

            <div className="row g-4 align-items-stretch">
              {coreSubjects.length > 0 && (
                <div className="col-12 col-lg-6 d-flex">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-3">Core subjects (common)</h3>
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

              {typicalRoles.length > 0 && (
                <div className="col-12 col-lg-6 d-flex">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-3">Typical entry roles</h3>
                    <ul className="list-unstyled small mb-0">
                      {typicalRoles.map((role, index) => (
                        <li key={index} className="mb-2 d-flex">
                          <span className="me-2">•</span>
                          <span>{role}</span>
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

      {/* 5) WHERE YOU WORK */}
      {workSettings.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={Briefcase}
              title="Where B.Com graduates work"
              subtitle="Work settings depend on your skills, internship exposure and interest area."
            />

            <div className="row g-3">
              {workSettings.map((work, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("Accounts") || title.includes("Finance")) return Calculator;
                  if (title.includes("Bank") || title.includes("Financial")) return Landmark;
                  if (title.includes("Corporate") || title.includes("SME")) return Briefcase;
                  if (title.includes("Tax") || title.includes("Compliance")) return ShieldCheck;
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

      {/* 6) NEXT STEPS */}
      {nextStepOptions.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="Best next steps after B.Com"
              subtitle="Pick the next step based on your career target."
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
              Shortcut: if your goal is corporate job, combine B.Com with Excel + accounting tools + internship.
              If your goal is professional commerce, start CA/CS/CMA preparation early.
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
            subtitle="Keep basics ready and focus on practical skills from day one."
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
                    "Usually after Class 12 (any stream) — commerce background is helpful but not always mandatory.",
                    "Admission is mostly merit-based; some universities may have their own criteria.",
                    "Subject combinations, syllabus and honours options vary by university/college."
                  ]).map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>

                <div className="small text-muted mt-3">
                  <span className="fw-semibold text-white">Reminder:</span> honours options, subjects and rules vary by university.
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
              </div>
            </div>

            {buildProfile.length > 0 && (
              <div className="col-12">
                <div className="sectionCard">
                  <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                    <Users size={18} className="text-primary" />
                    <span>Build your profile during B.Com</span>
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
                    Sensible shortcut: Excel + internship + basic accounting tools = faster job readiness after B.Com.
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