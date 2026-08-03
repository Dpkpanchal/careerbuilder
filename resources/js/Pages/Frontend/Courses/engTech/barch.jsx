"use client";

import React, { useMemo } from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CoursesTabsBar from "../CoursesTabsBar";
import {
  Layers3,
  Building2,
  GraduationCap,
  ClipboardList,
  ShieldCheck,
  Users,
  Ruler,
  Briefcase,
  Landmark,
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
      {subtitle && (
        <p className="sectionSub mb-0" style={{ maxWidth: "90ch" }}>
          {subtitle}
        </p>
      )}
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

export default function BArchPage({ courseContent }) {
  // Debug log
  console.log('=== BArchPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const archLadder = courseContent?.barch_ladder || [];
  const coreAreas = courseContent?.core_areas || [];
  const workSettings = courseContent?.work_settings || [];
  const eligibilityNotes = courseContent?.eligibility_notes || [];
  const commonDocs = courseContent?.common_docs || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About B.Arch";
  const introDescription = courseContent?.intro_description || "B.Arch (Bachelor of Architecture) is a professional degree focused on building design, spatial planning, construction techniques and architectural creativity.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "The course is studio-intensive and requires a balance of creativity, technical knowledge and practical site understanding.";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Degree type", v: "Professional Architecture Degree" },
        { k: "Duration", v: "5 Years" },
        { k: "Eligibility", v: "Class 12 with Mathematics" },
        { k: "Entry exams", v: "NATA / JEE-based (as applicable)" },
        { k: "Career scope", v: "Design • Construction • Planning • Practice" },
      ];

  // If no data found, show message
  if (archLadder.length === 0 && coreAreas.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner
          title="B.Arch (Bachelor of Architecture)"
          breadcrumb="Engineering, Technology & IT → B.Arch"
        />
        <CoursesTabsBar tabs={TABS} activeId="barch" />
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
        title="B.Arch (Bachelor of Architecture)"
        breadcrumb="Engineering, Technology & IT → B.Arch"
      />

      {/* Tabs bar */}
      <CoursesTabsBar tabs={TABS} activeId="barch" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Building2 size={18} className="text-primary" />
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
            </div>
          </div>
        </div>
      </section>

      {/* 2) CAREER LADDER */}
      {archLadder.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="Architecture career ladder"
              subtitle="Architecture rewards long-term skill building and design maturity."
            />

            <div className="row g-3">
              {archLadder.map((step, index) => (
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
          </div>
        </section>
      )}

      {/* 3) CORE STUDY AREAS */}
      {coreAreas.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Core study areas"
              subtitle="Design and technical subjects studied during B.Arch."
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

      {/* 4) WHERE ARCHITECTS WORK */}
      {workSettings.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Landmark}
              title="Where architects work"
              subtitle="Work environment depends on skills, portfolio and experience."
            />

            <div className="row g-3">
              {workSettings.map((work, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("Architectural") || title.includes("Design")) return Landmark;
                  if (title.includes("Construction") || title.includes("Infrastructure")) return Ruler;
                  if (title.includes("Urban") || title.includes("Planning") || title.includes("Govt")) return Building2;
                  if (title.includes("Independent") || title.includes("Consultancy") || title.includes("Practice")) return Briefcase;
                  return Landmark;
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

      {/* 5) ADMISSION & DOCUMENTS */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Admission & documents"
            subtitle="Keep this checklist ready while applying."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <ul className="nitDarkList mb-0">
                  {(eligibilityNotes.length > 0 ? eligibilityNotes : [
                    "Class 12 passed with Mathematics as a compulsory subject.",
                    "Admission through architecture entrance exams (e.g., NATA/JEE-based as applicable).",
                    "Aptitude for design, drawing and spatial thinking is essential.",
                    "Eligibility rules may vary by council/university — verify official notifications."
                  ]).map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
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
                    "Mathematics proof in Class 12",
                    "Entrance exam scorecard (NATA/JEE-based as applicable)",
                    "ID proof (Aadhaar etc.)",
                    "Photo + signature",
                    "Category/Domicile certificate (if applicable)"
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
        </div>
      </section>

      {/* 6) BUILD YOUR PROFILE */}
      {buildProfile.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Users}
              title="Build your profile during B.Arch"
              subtitle="Architecture success depends on portfolio quality and patience."
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
              Sensible shortcut: focus on studio work, build a strong design portfolio,
              and gain site exposure early.
            </div>
          </div>
        </section>
      )}
    </FrontendLayout>
  );
}