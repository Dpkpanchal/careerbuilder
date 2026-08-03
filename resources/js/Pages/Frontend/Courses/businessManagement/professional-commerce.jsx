"use client";

import React, { useMemo } from "react";
import HeroInner from '@/Components/Frontend/Hero/HeroInner';
import FrontendLayout from '@/Layouts/FrontendLayout';
import CoursesTabsBar from "../CoursesTabsBar";
import {
  Layers3,
  GraduationCap,
  ClipboardList,
  ShieldCheck,
  Building2,
  Users,
  Briefcase,
  BadgeCheck,
  Calculator,
  Scale,
  Landmark,
  FileText,
} from "lucide-react";

/* -------------------------------------------------------------
   Tabs (Business & Management) – SAME set (do not change)
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

export default function ProfessionalCommercePage({ courseContent }) {
  // Debug log
  console.log('=== ProfessionalCommercePage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const professionals = courseContent?.professional_commerce_ladder || [];
  const whoShouldDo = courseContent?.who_should_do || [];
  const chooseRight = courseContent?.choose_right || [];
  const commonPrep = courseContent?.common_prep || [];
  const commonDocs = courseContent?.common_docs || [];
  const importantNotes = courseContent?.important_notes || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About CA / CS / CMA";
  const introDescription = courseContent?.intro_description || "CA, CS and CMA are respected professional commerce qualifications that lead to high-responsibility roles in audit, taxation, corporate compliance, costing and finance. These programmes are exam-based and typically include practical training/experience components as per official rules.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "These routes are best for students who can commit to consistent preparation over time. Your discipline, concept clarity and practice decide results.";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Category", v: "Professional Commerce Qualifications" },
        { k: "Main options", v: "CA • CS • CMA" },
        { k: "Nature", v: "Exam-based + training/experience (as per rules)" },
        { k: "Best for", v: "Audit • Tax • Compliance • Costing • Finance" },
        { k: "Reality check", v: "Needs discipline + time + consistency" },
      ];

  // If no data found, show message
  if (professionals.length === 0 && chooseRight.length === 0 && whoShouldDo.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner title="CA / CS / CMA" breadcrumb="Business & Management → CA / CS / CMA" />
        <CoursesTabsBar tabs={TABS} activeId="pro" />
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
      <HeroInner title="CA / CS / CMA" breadcrumb="Business & Management → CA / CS / CMA" />
      <CoursesTabsBar tabs={TABS} activeId="pro" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <BadgeCheck size={18} className="text-primary" />
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
                  <ShieldCheck size={18} className="text-primary" />
                  <span>Reality check</span>
                </h3>
                <p className="small text-muted mb-0">
                  These courses reward consistency. Plan for a long-term journey and strong fundamentals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) CHOOSE THE RIGHT ONE */}
      {chooseRight.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={ClipboardList}
              title="How to choose between CA, CS and CMA"
              subtitle="Pick based on your interest: accounting & audit vs company law & compliance vs costing & performance."
            />

            <div className="row g-3">
              {chooseRight.map((item, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("CA") || title.includes("accounting") || title.includes("Accounts")) return Calculator;
                  if (title.includes("CS") || title.includes("company law") || title.includes("Compliance")) return Scale;
                  if (title.includes("CMA") || title.includes("costing") || title.includes("Costing")) return FileText;
                  return ShieldCheck;
                };
                const Icon = item.icon || getIcon(item.title);

                return (
                  <div key={index} className="col-12 col-md-4">
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

            <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
              Tip: If you're confused, start with your strongest interest area: Accounts (CA), Company Law (CS), or Costing (CMA).
            </div>
          </div>
        </section>
      )}

      {/* 3) OVERVIEW CARDS (CA/CS/CMA) */}
      {professionals.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="CA vs CS vs CMA (overview)"
              subtitle="Each has a similar 'levels + training' structure, but different focus and roles."
            />

            <div className="row g-3">
              {professionals.map((prof, index) => {
                // Get icon based on key or title
                const getIcon = (key, title) => {
                  if (key === 'ca' || (title && title.includes('CA'))) return Calculator;
                  if (key === 'cs' || (title && title.includes('CS'))) return Scale;
                  if (key === 'cma' || (title && title.includes('CMA'))) return FileText;
                  return BadgeCheck;
                };
                const Icon = prof.icon || getIcon(prof.key, prof.title);

                return (
                  <div key={index} className="col-12 col-lg-4">
                    <div className="sectionCard h-100">
                      <h3 className="h6 mb-2 d-flex align-items-center gap-2">
                        <Icon size={16} className="text-primary" />
                        <span>{prof.title}</span>
                      </h3>

                      <p className="small text-muted mb-3">{prof.focus}</p>

                      {prof.ladder && prof.ladder.length > 0 && (
                        <>
                          <div className="small fw-semibold text-dark mb-2">Typical ladder</div>
                          <ul className="list-unstyled small mb-3">
                            {prof.ladder.map((step, idx) => (
                              <li key={idx} className="d-flex mb-2">
                                <span className="me-2">•</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {prof.roles && prof.roles.length > 0 && (
                        <>
                          <div className="small fw-semibold text-dark mb-2">Common role areas</div>
                          <ul className="list-unstyled small mb-0">
                            {prof.roles.map((role, idx) => (
                              <li key={idx} className="d-flex mb-2">
                                <span className="me-2">•</span>
                                <span>{role}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4) WHO SHOULD DO */}
      {whoShouldDo.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Who should pursue these professional courses"
              subtitle="These routes are high-value, but they demand commitment and long-term planning."
            />

            <div className="row g-3">
              {whoShouldDo.map((item, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("commit") || title.includes("discipline") || title.includes("long-term")) return ShieldCheck;
                  if (title.includes("accounting") || title.includes("compliance") || title.includes("law")) return ClipboardList;
                  if (title.includes("high-responsibility") || title.includes("corporate")) return Briefcase;
                  if (title.includes("training") || title.includes("exams")) return Users;
                  return ShieldCheck;
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

      {/* 5) PREP + NOTES + DOCS */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Preparation, documents & important notes"
            subtitle="Keep it practical: plan the journey, build fundamentals and verify official rules."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <ShieldCheck size={16} />
                  <span>Preparation basics</span>
                </span>

                <ul className="nitDarkList mb-0">
                  {(commonPrep.length > 0 ? commonPrep : [
                    "Strong basics in Accounts / Business Studies / Economics (helpful)",
                    "Consistency: daily study schedule + revision habit",
                    "Solve past papers / mock tests regularly",
                    "Good notes + concept clarity (avoid only rote)",
                    "If possible, join internships/office exposure for real-world learning"
                  ]).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <div className="small text-muted mt-3">
                  <span className="fw-semibold text-white">Reminder:</span> always follow the latest official syllabus and rules.
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
                    "Graduation marksheets (if applicable)",
                    "ID proof (Aadhaar etc.)",
                    "Photo + signature",
                    "Category/EWS/Income certificate (if applicable)"
                  ]).map((doc, index) => (
                    <li key={index} className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 small text-muted">
                  Many students pursue <strong>B.Com/BBA</strong> alongside professional courses for academic backup and broader options.
                </div>
              </div>
            </div>

            {importantNotes.length > 0 && (
              <div className="col-12">
                <div className="sectionCard">
                  <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                    <ClipboardList size={18} className="text-primary" />
                    <span>Important notes</span>
                  </h3>

                  <ul className="list-unstyled small mb-0">
                    {importantNotes.map((note, index) => (
                      <li key={index} className="mb-2 d-flex">
                        <span className="me-2">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Sensible shortcut: choose one course (CA/CS/CMA), build a daily routine, and don't switch repeatedly—consistency wins.
          </div>
        </div>
      </section>
    </FrontendLayout>
  );
}