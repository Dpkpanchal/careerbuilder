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
  BadgeCheck,
  BookOpen,
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

export default function BScComputerPage({ courseContent }) {
  // Debug log
  console.log('=== BScComputerPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const bscLadder = courseContent?.bsc_it_ladder || [];
  const bscVariants = courseContent?.bsc_variants || [];
  const coreSubjects = courseContent?.core_areas || [];
  const careerRoles = courseContent?.typical_roles || [];
  const workSettings = courseContent?.work_settings || [];
  const eligibilityNotes = courseContent?.eligibility_notes || [];
  const admissionNotes = courseContent?.admission_notes || [];
  const commonDocs = courseContent?.common_docs || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About B.Sc Computer Science / IT";
  const introDescription = courseContent?.intro_description || "B.Sc Computer Science and B.Sc IT are undergraduate science degrees that build strong foundations in programming, computing fundamentals and IT systems. Many universities keep a stronger maths/logic base in B.Sc compared to purely application-focused programmes.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "Like all tech careers, your outcome depends on skills: projects, internships and interview readiness matter more than marks alone.";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Degree type", v: "UG Science Degree (CS/IT)" },
        { k: "Duration", v: "3 Years" },
        { k: "Eligibility", v: "Class 12 (criteria varies)" },
        { k: "Best for", v: "CS fundamentals + tech careers" },
        { k: "Strong ladder", v: "B.Sc → M.Sc / MCA → specialisation" },
      ];

  // If no data found, show message
  if (bscLadder.length === 0 && coreSubjects.length === 0 && bscVariants.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner
          title="B.Sc Computer Science / IT"
          breadcrumb="Engineering, Technology & IT → B.Sc Computer Science / IT"
        />
        <CoursesTabsBar tabs={TABS} activeId="bscc" />
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
        title="B.Sc Computer Science / IT"
        breadcrumb="Engineering, Technology & IT → B.Sc Computer Science / IT"
      />

      {/* Tabs bar */}
      <CoursesTabsBar tabs={TABS} activeId="bscc" />

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
                  Degree gives foundation, but portfolio + practice decides jobs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) LADDER */}
      {bscLadder.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="Career ladder (B.Sc CS/IT)"
              subtitle="B.Sc builds fundamentals. After that, specialisation creates growth."
            />

            <div className="row g-3">
              {bscLadder.map((step, index) => (
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
              Tip: If you want long-term growth, plan for M.Sc/MCA or a strong specialization (data/cloud/security) with projects.
            </div>
          </div>
        </section>
      )}

      {/* 3) B.Sc CS vs B.Sc IT */}
      {bscVariants.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="B.Sc Computer Science vs B.Sc IT"
              subtitle="Difference is often in focus; exact syllabus varies by university."
            />

            <div className="row g-3">
              {bscVariants.map((variant, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("Computer Science")) return Cpu;
                  if (title.includes("Information Technology") || title.includes("IT")) return Network;
                  if (title.includes("Specialisation")) return FlaskConical;
                  return Cpu;
                };
                const Icon = variant.icon || getIcon(variant.title);

                return (
                  <div key={index} className="col-12 col-md-4">
                    <div className="sectionCard h-100">
                      <h3 className="h6 mb-1 d-flex align-items-center gap-2">
                        <Icon size={16} className="text-primary" />
                        <span>{variant.title}</span>
                      </h3>
                      <p className="small text-muted mb-0">{variant.desc || variant.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4) CORE SUBJECTS + ROLES */}
      {(coreSubjects.length > 0 || careerRoles.length > 0) && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Code2}
              title="Core subjects & typical roles"
              subtitle="These are common foundation topics and entry-level roles."
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

              {careerRoles.length > 0 && (
                <div className="col-12 col-lg-6 d-flex">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-3">Typical entry roles</h3>
                    <ul className="list-unstyled small mb-0">
                      {careerRoles.map((role, index) => (
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
              title="Where B.Sc CS/IT graduates work"
              subtitle="Work depends on your skill track: development, data, ops or support."
            />

            <div className="row g-3">
              {workSettings.map((work, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("IT") || title.includes("Software") || title.includes("Services")) return Cpu;
                  if (title.includes("Product") || title.includes("Startups")) return Briefcase;
                  if (title.includes("Data") || title.includes("Database")) return Database;
                  if (title.includes("Network") || title.includes("Networking") || title.includes("Ops")) return Network;
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
                    "Usually after Class 12 — eligibility may vary by university (science preference in some colleges).",
                    "Some colleges may prefer Mathematics/Computer at Class 12 level; many accept other streams too.",
                    "Admission may be merit-based or entrance-based depending on institute.",
                    "For jobs, you must build real projects and practical skills beyond the syllabus."
                  ]).map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>

                <div className="small text-muted mt-3">
                  <span className="fw-semibold text-white">Reminder:</span> eligibility differs by university — verify official notification.
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
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Tip: Ask about labs, internships, and placement outcomes — those decide real value.
          </div>
        </div>
      </section>

      {/* 7) BUILD YOUR PROFILE */}
      {buildProfile.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={Users}
              title="Build your profile during B.Sc CS/IT"
              subtitle="Skills + projects decide your job, not only the degree title."
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
              Sensible shortcut: build projects every semester + learn SQL + do one internship — this unlocks strong CS/IT roles.
            </div>
          </div>
        </section>
      )}
    </FrontendLayout>
  );
}