"use client";

import React, { useMemo } from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CoursesTabsBar from "../CoursesTabsBar";
import {
  Layers3,
  Cpu,
  GraduationCap,
  ClipboardList,
  ShieldCheck,
  Users,
  Building2,
  Briefcase,
  Code2,
  Database,
  Cloud,
  BadgeCheck,
  FlaskConical,
} from "lucide-react";

/* -------------------------------------------------------------
   Tabs (shared across Engineering, Technology & IT)
------------------------------------------------------------- */

const TABS = [
  { id: "btech", label: "B.Tech / B.E", href: '/courses/btech-be-programs' },
  { id: "barch", label: "B.Arch", href: '/courses/barch' },
  { id: "mtech", label: "M.Tech", href: '/courses/mtech' },
  { id: "bca", label: "BCA", href: '/courses/bca' },
  { id: "bscc", label: "B.Sc Computer Science / IT", href: '/courses/bsc-computer-science-it' },
  { id: "mca", label: "MCA", href: '/courses/mca' },
  { id: "msc", label: "M.Sc Computer Science / IT", href: '/courses/msc' },
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

export default function MCAPage({ courseContent }) {
  // Debug log
  console.log('=== MCAPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const mcaLadder = courseContent?.mca_ladder || [];
  const whoShouldDo = courseContent?.who_should_do || [];
  const coreAreas = courseContent?.core_areas || [];
  const specialisationTracks = courseContent?.specialisation_tracks || [];
  const workSettings = courseContent?.work_settings || [];
  const eligibilityNotes = courseContent?.eligibility_notes || [];
  const admissionNotes = courseContent?.admission_notes || [];
  const commonDocs = courseContent?.common_docs || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About MCA";
  const introDescription = courseContent?.intro_description || "MCA (Master of Computer Applications) is a postgraduate programme that prepares graduates for software and IT careers through deeper computer science fundamentals, development skills and project work.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "MCA becomes powerful when you use it to build a strong portfolio: projects, internships and coding practice are the biggest factors for placements and role quality.";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Degree type", v: "PG Computer Applications Degree" },
        { k: "Duration", v: "2 Years (varies by rules)" },
        { k: "Eligibility", v: "Bachelor degree (criteria varies)" },
        { k: "Best for", v: "Software careers + stronger roles" },
        { k: "Reality check", v: "Projects + DSA decide placement" },
      ];

  // If no data found, show message
  if (mcaLadder.length === 0 && coreAreas.length === 0 && whoShouldDo.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner title="MCA (Master of Computer Applications)" breadcrumb="Engineering, Technology & IT → MCA" />
        <CoursesTabsBar tabs={TABS} activeId="mca" />
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
      <HeroInner title="MCA (Master of Computer Applications)" breadcrumb="Engineering, Technology & IT → MCA" />

      {/* Tabs bar */}
      <CoursesTabsBar tabs={TABS} activeId="mca" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Cpu size={18} className="text-primary" />
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
                  MCA helps most when your projects and problem-solving level are strong — not just by completing semesters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) MCA LADDER */}
      {mcaLadder.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="MCA career ladder"
              subtitle="MCA strengthens your pathway into software roles if you build skills seriously."
            />

            <div className="row g-3">
              {mcaLadder.map((step, index) => (
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
              Tip: Choose a track early (full-stack/data/cloud) and align your major project to it.
            </div>
          </div>
        </section>
      )}

      {/* 3) WHO SHOULD DO MCA */}
      {whoShouldDo.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Who should do MCA"
              subtitle="MCA is a strong PG route when you have a clear IT career goal."
            />

            <div className="row g-3">
              {whoShouldDo.map((item, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("BCA")) return GraduationCap;
                  if (title.includes("Non-engineering")) return ShieldCheck;
                  if (title.includes("coding") || title.includes("programming")) return Code2;
                  if (title.includes("product") || title.includes("higher") || title.includes("companies")) return Briefcase;
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

      {/* 4) CORE AREAS + SPECIALISATION TRACKS */}
      {(coreAreas.length > 0 || specialisationTracks.length > 0) && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Code2}
              title="Core areas & specialisation tracks"
              subtitle="Your job role depends on the track you choose and the projects you build."
            />

            <div className="row g-4 align-items-stretch">
              {coreAreas.length > 0 && (
                <div className="col-12 col-lg-6 d-flex">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-3">Core areas (common)</h3>
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

              {specialisationTracks.length > 0 && (
                <div className="col-12 col-lg-6 d-flex">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-3">Popular tracks</h3>
                    <ul className="list-unstyled small mb-0">
                      {specialisationTracks.map((track, index) => (
                        <li key={index} className="mb-2 d-flex">
                          <span className="me-2">•</span>
                          <span>{track}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
              Shortcut: build one strong end-to-end project (idea → code → deployment) and one internship to unlock better roles.
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
              title="Where MCA graduates work"
              subtitle="Work depends on your skill track and portfolio strength."
            />

            <div className="row g-3">
              {workSettings.map((work, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("IT") || title.includes("Software") || title.includes("Services")) return Cpu;
                  if (title.includes("Product") || title.includes("Startups")) return Briefcase;
                  if (title.includes("Data") || title.includes("Database")) return Database;
                  if (title.includes("Cloud") || title.includes("Platform")) return Cloud;
                  return Cpu;
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

      {/* 6) ADMISSION & DOCUMENTS */}
      <section className="py-4 py-md-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Admission & documents"
            subtitle="A practical checklist before you apply."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <ul className="nitDarkList mb-0">
                  {(eligibilityNotes.length > 0 ? eligibilityNotes : [
                    "Generally after a bachelor's degree (BCA/B.Sc CS/IT or other graduates as per rules).",
                    "Many universities require Mathematics at 10+2 or graduation level (varies).",
                    "Admissions may be merit-based or entrance-based depending on institute/state/university.",
                    "Always verify current eligibility rules and duration as per official notification."
                  ]).map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>

                <div className="small text-muted mt-3">
                  <span className="fw-semibold text-white">Reminder:</span> MCA rules can change — verify official notification.
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
                    "Class 10 & 12 marksheets (for maths eligibility if required)",
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
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Tip: Ask about internships, placements, and industry projects — those decide real career value.
          </div>
        </div>
      </section>

      {/* 7) BUILD YOUR PROFILE */}
      {buildProfile.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={Users}
              title="Build your profile during MCA"
              subtitle="MCA outcomes depend on depth, projects and interview readiness."
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
              Sensible shortcut: master DSA + build 2 strong projects + do 1 internship — this unlocks strong software roles.
            </div>
          </div>
        </section>
      )}
    </FrontendLayout>
  );
}