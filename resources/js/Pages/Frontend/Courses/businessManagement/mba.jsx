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
  Briefcase,
  BadgeCheck,
  LineChart,
  Megaphone,
  Settings,
  UserRound,
  Handshake,
} from "lucide-react";

/* -------------------------------------------------------------
   Tabs (Business & Management) – same set used in B.Com / M.Com / BBA
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

export default function MBAPage({ courseContent }) {
  // Debug log
  console.log('=== MBAPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const mbaLadder = courseContent?.mba_ladder || [];
  const whoShouldDo = courseContent?.who_should_do || [];
  const specialisations = courseContent?.specialisation_tracks || [];
  const typicalRoles = courseContent?.typical_roles || [];
  const workSettings = courseContent?.work_settings || [];
  const eligibilityNotes = courseContent?.eligibility_notes || [];
  const commonDocs = courseContent?.common_docs || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About MBA / PGDM";
  const introDescription = courseContent?.intro_description || "MBA/PGDM are postgraduate management programmes designed to build business leadership, strategy and professional readiness for management roles. You typically choose a specialisation such as marketing, finance, HR or operations.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "MBA outcomes depend heavily on your institute quality, internships, projects, communication skills and placement preparation.";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Course type", v: "PG Management Programme (MBA/PGDM)" },
        { k: "Duration", v: "Typically 2 Years" },
        { k: "Eligibility", v: "Graduation (criteria varies)" },
        { k: "Best for", v: "Management roles • leadership • career switch" },
        { k: "Reality check", v: "College + profile + internships decide outcome" },
      ];

  // If no data found, show message
  if (mbaLadder.length === 0 && specialisations.length === 0 && whoShouldDo.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner title="MBA / PGDM" breadcrumb="Business & Management → MBA / PGDM" />
        <CoursesTabsBar tabs={TABS} activeId="mba" />
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
      <HeroInner title="MBA / PGDM" breadcrumb="Business & Management → MBA / PGDM" />
      <CoursesTabsBar tabs={TABS} activeId="mba" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Briefcase size={18} className="text-primary" />
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
                  Your first job role depends on institute + internship + communication. MBA is not a magic guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) MBA LADDER */}
      {mbaLadder.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="MBA / PGDM career ladder"
              subtitle="MBA builds a management base. Internships and projects shape your placement role."
            />

            <div className="row g-3">
              {mbaLadder.map((step, index) => (
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
              Tip: Choose your target role early (marketing/finance/HR/ops) and align internship + projects to it.
            </div>
          </div>
        </section>
      )}

      {/* 3) WHO SHOULD DO MBA */}
      {whoShouldDo.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Who should do MBA"
              subtitle="MBA is best when you have clear goals and are ready for intensive placement preparation."
            />

            <div className="row g-3">
              {whoShouldDo.map((item, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("management") || title.includes("leadership")) return Briefcase;
                  if (title.includes("internships") || title.includes("networking")) return Handshake;
                  if (title.includes("specialisation") || title.includes("domain")) return ShieldCheck;
                  if (title.includes("working") || title.includes("switch") || title.includes("professionals")) return Users;
                  return Briefcase;
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

      {/* 4) SPECIALISATIONS */}
      {specialisations.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Briefcase}
              title="Popular specialisations"
              subtitle="Specialisation options vary by institute, but these are common tracks."
            />

            <div className="row g-3">
              {specialisations.map((spec, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("Marketing")) return Megaphone;
                  if (title.includes("Finance")) return LineChart;
                  if (title.includes("HR")) return UserRound;
                  if (title.includes("Operations")) return Settings;
                  return Briefcase;
                };
                const Icon = spec.icon || getIcon(spec.title);

                return (
                  <div key={index} className="col-12 col-md-6 col-lg-3">
                    <div className="sectionCard h-100">
                      <h3 className="h6 mb-1 d-flex align-items-center gap-2">
                        <Icon size={16} className="text-primary" />
                        <span>{spec.title}</span>
                      </h3>
                      <p className="small text-muted mb-0">{spec.desc || spec.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 5) ROLES + WORK SETTINGS */}
      {(typicalRoles.length > 0 || workSettings.length > 0) && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={ClipboardList}
              title="Typical roles & work settings"
              subtitle="Your role depends on specialisation + internship + placement performance."
            />

            <div className="row g-4 align-items-stretch">
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

              {workSettings.length > 0 && (
                <div className="col-12 col-lg-6 d-flex">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-3">Work settings</h3>
                    <div className="row g-3">
                      {workSettings.map((work, index) => {
                        // Get icon based on title
                        const getIcon = (title) => {
                          if (title.includes("Corporate")) return Briefcase;
                          if (title.includes("Bank") || title.includes("Financial")) return LineChart;
                          if (title.includes("Startups")) return Megaphone;
                          if (title.includes("Consulting") || title.includes("Services")) return Handshake;
                          return Briefcase;
                        };
                        const Icon = work.icon || getIcon(work.title);

                        return (
                          <div key={index} className="col-12">
                            <div className="sectionCard bg-light border">
                              <h4 className="h6 mb-1 d-flex align-items-center gap-2">
                                <Icon size={16} className="text-primary" />
                                <span>{work.title}</span>
                              </h4>
                              <p className="small text-muted mb-0">{work.desc || work.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 6) ADMISSION + DOCUMENTS */}
      <section className="py-4 py-md-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Admissions & documents"
            subtitle="Admissions are usually exam + interview based. Keep this checklist ready."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <ul className="nitDarkList mb-0">
                  {(eligibilityNotes.length > 0 ? eligibilityNotes : [
                    "Typically after graduation (any stream) — eligibility rules vary by institute and exam.",
                    "Admissions are usually entrance-based (national/state/university exams) followed by GD/PI rounds (varies).",
                    "MBA and PGDM are both management programmes; structures and approval bodies can differ by institute.",
                    "Always verify official exam/institute notifications before applying."
                  ]).map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>

                <div className="small text-muted mt-3">
                  <span className="fw-semibold text-white">Reminder:</span> entrance processes differ across MBA exams and institutes.
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
                    "Graduation marksheets + degree/provisional certificate",
                    "Entrance scorecard (if applicable)",
                    "Class 10 & 12 marksheets (often required for admission records)",
                    "ID proof (Aadhaar etc.)",
                    "Photo + signature",
                    "Category/EWS/Income certificate (if applicable)",
                    "Work experience proof (if applicable)"
                  ]).map((doc, index) => (
                    <li key={index} className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Tip: Shortlist colleges based on placements, specialisation strength, alumni outcomes and internship support.
          </div>
        </div>
      </section>

      {/* 7) BUILD YOUR PROFILE */}
      {buildProfile.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={Users}
              title="Build your profile during MBA"
              subtitle="MBA is a placement-driven programme. Your profile-building must be intentional."
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
              Sensible shortcut: choose a specialisation early + build projects/internships in that domain + practice interviews weekly.
            </div>
          </div>
        </section>
      )}
    </FrontendLayout>
  );
}