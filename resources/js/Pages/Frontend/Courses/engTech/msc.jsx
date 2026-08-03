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
  Network,
  FlaskConical,
  BadgeCheck,
  BookOpen,
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

export default function MScComputerPage({ courseContent }) {
  // Debug log
  console.log('=== MScComputerPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const mscLadder = courseContent?.msc_it_ladder || [];
  const whoShouldDo = courseContent?.who_should_do || [];
  const coreAreas = courseContent?.core_areas || [];
  const specialisationTracks = courseContent?.specialisation_tracks || [];
  const workSettings = courseContent?.work_settings || [];
  const eligibilityNotes = courseContent?.eligibility_notes || [];
  const admissionNotes = courseContent?.admission_notes || [];
  const commonDocs = courseContent?.common_docs || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About M.Sc Computer Science / IT";
  const introDescription = courseContent?.intro_description || "M.Sc Computer Science / IT is a postgraduate science degree that deepens your understanding of computer science fundamentals and advanced topics. It often has stronger theory + research orientation compared to many UG routes.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "Your project/dissertation is a key output in M.Sc — it can support both industry roles and research/PhD readiness depending on how you plan it.";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Degree type", v: "PG Science Degree (CS/IT)" },
        { k: "Duration", v: "2 Years (varies)" },
        { k: "Eligibility", v: "Relevant UG degree (criteria varies)" },
        { k: "Best for", v: "Deeper CS • research • stronger specialization" },
        { k: "Reality check", v: "Project + skills decide outcomes" },
      ];

  // If no data found, show message
  if (mscLadder.length === 0 && coreAreas.length === 0 && whoShouldDo.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner
          title="M.Sc Computer Science / IT"
          breadcrumb="Engineering, Technology & IT → M.Sc Computer Science / IT"
        />
        <CoursesTabsBar tabs={TABS} activeId="msc" />
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
        title="M.Sc Computer Science / IT"
        breadcrumb="Engineering, Technology & IT → M.Sc Computer Science / IT"
      />

      {/* Tabs bar */}
      <CoursesTabsBar tabs={TABS} activeId="msc" />

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
                  M.Sc helps most when you build a strong project + skills — not only by passing theory papers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) MSC LADDER */}
      {mscLadder.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="M.Sc (CS/IT) career ladder"
              subtitle="M.Sc builds depth. Your dissertation + skills decide the direction: industry or research."
            />

            <div className="row g-3">
              {mscLadder.map((step, index) => (
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
              Tip: If your goal is industry, build job-ready projects + internship. If your goal is research, make your dissertation publication-ready.
            </div>
          </div>
        </section>
      )}

      {/* 3) WHO SHOULD DO */}
      {whoShouldDo.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Who should do M.Sc CS/IT"
              subtitle="M.Sc is ideal for students who want deeper fundamentals and research/project orientation."
            />

            <div className="row g-3">
              {whoShouldDo.map((item, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("theory") || title.includes("fundamentals")) return BookOpen;
                  if (title.includes("research") || title.includes("PhD")) return FlaskConical;
                  if (title.includes("B.Sc") || title.includes("graduates")) return ShieldCheck;
                  if (title.includes("PG") || title.includes("not MCA")) return GraduationCap;
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

      {/* 4) CORE AREAS + SPECIALISATION */}
      {(coreAreas.length > 0 || specialisationTracks.length > 0) && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Code2}
              title="Core areas & specialisation options"
              subtitle="Exact syllabus varies, but these are common foundations and tracks."
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
                    <h3 className="h6 mb-3">Popular tracks (electives)</h3>
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
              Shortcut: build one "deep" project aligned with your elective track + one "practical" project aligned with jobs.
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
              title="Where M.Sc CS/IT graduates work"
              subtitle="Work depends on your specialization and project strength."
            />

            <div className="row g-3">
              {workSettings.map((work, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("IT") || title.includes("Software")) return Cpu;
                  if (title.includes("Data") || title.includes("Database")) return Database;
                  if (title.includes("Systems") || title.includes("Network") || title.includes("Infrastructure")) return Network;
                  if (title.includes("Research") || title.includes("Academia")) return FlaskConical;
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
                    "Generally after a UG degree like B.Sc CS/IT, BCA, or related (criteria varies).",
                    "Some universities require Mathematics/Computer background; others accept broader UG degrees.",
                    "Admission may be merit-based or entrance-based depending on university/state.",
                    "Always verify current eligibility rules and programme structure from official notifications."
                  ]).map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>

                <div className="small text-muted mt-3">
                  <span className="fw-semibold text-white">Reminder:</span> eligibility and syllabus differ by university — verify official notification.
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
            Tip: If you want placements, treat M.Sc like a "portfolio program": projects + internship + DSA.
          </div>
        </div>
      </section>

      {/* 7) BUILD YOUR PROFILE */}
      {buildProfile.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={Users}
              title="Build your profile during M.Sc"
              subtitle="Your dissertation + projects decide whether you go industry or research."
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
              Sensible shortcut: one strong dissertation + one internship + interview practice = strong outcomes after M.Sc.
            </div>
          </div>
        </section>
      )}
    </FrontendLayout>
  );
}