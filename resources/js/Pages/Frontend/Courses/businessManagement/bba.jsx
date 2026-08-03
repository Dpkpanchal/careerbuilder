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
} from "lucide-react";

/* -------------------------------------------------------------
   Tabs (Business & Management) – same set used in B.Com / M.Com
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

export default function BBAPage({ courseContent }) {
  // Debug log
  console.log('=== BBAPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const bbaLadder = courseContent?.bba_ladder || [];
  const whoShouldDo = courseContent?.who_should_do || [];
  const coreSubjects = courseContent?.core_areas || [];
  const specialisationAreas = courseContent?.specialisation_areas || [];
  const typicalRoles = courseContent?.typical_roles || [];
  const workSettings = courseContent?.work_settings || [];
  const nextStepOptions = courseContent?.next_step_options || [];
  const eligibilityNotes = courseContent?.eligibility_notes || [];
  const commonDocs = courseContent?.common_docs || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About BBA";
  const introDescription = courseContent?.intro_description || "BBA (Bachelor of Business Administration) is an undergraduate programme that builds business and management foundations: marketing, finance basics, HR, operations and communication.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "BBA outcomes depend a lot on internships, communication skills and practical exposure. Students who do internships and build real work skills get better roles early.";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Course type", v: "UG Management Degree" },
        { k: "Duration", v: "3 Years" },
        { k: "Eligibility", v: "Class 12 (criteria varies)" },
        { k: "Best for", v: "Business roles • management foundation • MBA ladder" },
        { k: "Strong ladder", v: "BBA → MBA/PGDM → specialization" },
      ];

  // If no data found, show message
  if (bbaLadder.length === 0 && coreSubjects.length === 0 && whoShouldDo.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner title="BBA & UG Management" breadcrumb="Business & Management → BBA" />
        <CoursesTabsBar tabs={TABS} activeId="bba" />
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
      <HeroInner title="BBA & UG Management" breadcrumb="Business & Management → BBA" />
      <CoursesTabsBar tabs={TABS} activeId="bba" />

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
                  BBA gives knowledge, but your internships + communication decide your first job quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) BBA LADDER */}
      {bbaLadder.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="BBA career ladder"
              subtitle="BBA is a foundation degree. Your next step depends on your target track."
            />

            <div className="row g-3">
              {bbaLadder.map((step, index) => (
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
              Tip: If you want strong outcomes, do internships from 1st/2nd year (sales/marketing/ops/HR).
            </div>
          </div>
        </section>
      )}

      {/* 3) WHO SHOULD DO BBA */}
      {whoShouldDo.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Who should do BBA"
              subtitle="BBA is best for students who enjoy business thinking and practical learning."
            />

            <div className="row g-3">
              {whoShouldDo.map((item, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("business") || title.includes("management")) return Briefcase;
                  if (title.includes("practical") || title.includes("presentations") || title.includes("learning")) return Users;
                  if (title.includes("MBA")) return GraduationCap;
                  if (title.includes("soft skills") || title.includes("communication")) return ShieldCheck;
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

      {/* 4) SPECIALISATION AREAS */}
      {specialisationAreas.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Briefcase}
              title="Popular specialisation areas"
              subtitle="Exact specialisations vary by institute, but these are common directions."
            />

            <div className="row g-3">
              {specialisationAreas.map((area, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("Marketing")) return Megaphone;
                  if (title.includes("Finance")) return LineChart;
                  if (title.includes("HR")) return UserRound;
                  if (title.includes("Operations")) return Settings;
                  return Briefcase;
                };
                const Icon = area.icon || getIcon(area.title);

                return (
                  <div key={index} className="col-12 col-md-6 col-lg-3">
                    <div className="sectionCard h-100">
                      <h3 className="h6 mb-1 d-flex align-items-center gap-2">
                        <Icon size={16} className="text-primary" />
                        <span>{area.title}</span>
                      </h3>
                      <p className="small text-muted mb-0">{area.desc || area.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 5) CORE SUBJECTS + ROLES */}
      {(coreSubjects.length > 0 || typicalRoles.length > 0) && (
        <section className="py-5">
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

      {/* 6) WHERE YOU WORK */}
      {workSettings.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Briefcase}
              title="Where BBA graduates work"
              subtitle="Your work setting depends on your skills, internships and interest area."
            />

            <div className="row g-3">
              {workSettings.map((work, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("Sales") || title.includes("Marketing")) return Megaphone;
                  if (title.includes("Operations") || title.includes("Corporate")) return Settings;
                  if (title.includes("HR") || title.includes("People Ops")) return UserRound;
                  if (title.includes("Startups") || title.includes("SME")) return Briefcase;
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

      {/* 7) NEXT STEPS + ADMISSION */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Next steps & profile building"
            subtitle="Choose your direction early and build practical value."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <GraduationCap size={16} />
                  <span>Best next steps after BBA</span>
                </span>

                <ul className="nitDarkList mb-0">
                  {(nextStepOptions.length > 0 ? nextStepOptions : [
                    { title: "MBA / PGDM", desc: "Most common ladder for higher roles and specialisation." },
                    { title: "Specialised PG (Finance/HR/Marketing)", desc: "PG courses/certifications aligned to your target domain." },
                    { title: "Skill Certifications", desc: "Digital marketing, Excel/Power BI, sales tools, HR tools, analytics basics." },
                    { title: "Start working + grow", desc: "Build experience early and upskill for promotions or switch." }
                  ]).map((step, index) => (
                    <li key={index}>
                      <strong>{step.title}:</strong> {step.desc || step.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-5 d-flex">
              <div className="sectionCard bg-light border w-100">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Building2 size={18} className="text-primary" />
                  <span>Admission checklist</span>
                </h3>

                <ul className="list-unstyled small mb-0">
                  {(eligibilityNotes.length > 0 ? eligibilityNotes : [
                    "Class 12 pass (criteria varies by institute)",
                    "Merit-based or entrance/interview (depends on institute)",
                    "Keep documents: marksheets, ID proof, photo/signature, category/domicile (if needed)"
                  ]).map((note, index) => (
                    <li key={index} className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>{note}</span>
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
                    <span>Build your profile during BBA</span>
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
                    Sensible shortcut: do 2 internships + learn Excel/reporting + build communication — you'll get better first jobs after BBA.
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