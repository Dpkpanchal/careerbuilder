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
   DATA – Career Book aligned (Architecture)
------------------------------------------------------------- */

const ARCH_LADDER = [
  {
    title: "B.Arch (Bachelor of Architecture)",
    duration: "5 Years",
    focus:
      "Design fundamentals, architectural theory, building technology, structures, urban design and studio-based learning.",
  },
  {
    title: "Professional Training / Internship",
    duration: "Integrated during course",
    focus:
      "Practical exposure in architectural firms, design studios and construction projects.",
  },
  {
    title: "Professional Practice / Job",
    duration: "After graduation",
    focus:
      "Architectural design, drafting, site coordination, planning and project execution.",
  },
  {
    title: "M.Arch / Higher Studies",
    duration: "2 Years",
    focus:
      "Advanced specialisation (urban planning, landscape, housing, sustainable architecture, etc.).",
  },
];

const CORE_AREAS = [
  "Architectural Design & Studio Work",
  "Building Construction & Materials",
  "Structures & Building Services",
  "History of Architecture",
  "Urban Planning & Housing",
  "Computer-Aided Design (CAD/BIM basics)",
];

const ELIGIBILITY_NOTES = [
  "Class 12 passed with Mathematics as a compulsory subject.",
  "Admission through architecture entrance exams (e.g., NATA/JEE-based as applicable).",
  "Aptitude for design, drawing and spatial thinking is essential.",
  "Eligibility rules may vary by council/university — verify official notifications.",
];

const WORK_SETTINGS = [
  {
    title: "Architectural Firms",
    desc: "Design studios, drafting, project coordination and client-facing roles.",
    icon: Landmark,
  },
  {
    title: "Construction & Infrastructure",
    desc: "Site supervision, execution coordination, quality and planning.",
    icon: Ruler,
  },
  {
    title: "Urban Planning / Govt Projects",
    desc: "Town planning bodies, development authorities, public projects.",
    icon: Building2,
  },
  {
    title: "Independent Practice / Consultancy",
    desc: "Private practice after registration and experience.",
    icon: Briefcase,
  },
];

const COMMON_DOCS = [
  "Class 10 & 12 marksheets",
  "Mathematics proof in Class 12",
  "Entrance exam scorecard (NATA/JEE-based as applicable)",
  "ID proof (Aadhaar etc.)",
  "Photo + signature",
  "Category/Domicile certificate (if applicable)",
];

const BUILD_PROFILE = [
  "Strong drawing, sketching and visualisation skills",
  "Design thinking and creativity",
  "Software skills (AutoCAD, SketchUp, BIM tools over time)",
  "Site exposure and material understanding",
  "Communication skills for client and team interaction",
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

export default function BArchPage() {
  const snapshot = useMemo(
    () => [
      { k: "Degree type", v: "Professional Architecture Degree" },
      { k: "Duration", v: "5 Years" },
      { k: "Eligibility", v: "Class 12 with Mathematics" },
      { k: "Entry exams", v: "NATA / JEE-based (as applicable)" },
      { k: "Career scope", v: "Design • Construction • Planning • Practice" },
    ],
    []
  );

  return (
    <>
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
                <span>About B.Arch</span>
              </h2>

              <p className="sectionSub">
                B.Arch (Bachelor of Architecture) is a professional degree focused on
                building design, spatial planning, construction techniques and
                architectural creativity.
              </p>

              <p className="sectionSub mb-0">
                The course is studio-intensive and requires a balance of creativity,
                technical knowledge and practical site understanding.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>
                <MiniDL items={snapshot} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) CAREER LADDER */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="Architecture career ladder"
            subtitle="Architecture rewards long-term skill building and design maturity."
          />

          <div className="row g-3">
            {ARCH_LADDER.map((c) => (
              <div key={c.title} className="col-12 col-md-6">
                <div className="sectionCard h-100">
                  <h3 className="h6 mb-1">{c.title}</h3>
                  <p className="small text-muted mb-1">{c.duration}</p>
                  <p className="small text-muted mb-0">{c.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3) CORE STUDY AREAS */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="Core study areas"
            subtitle="Design and technical subjects studied during B.Arch."
          />

          <div className="row g-3">
            {CORE_AREAS.map((b) => (
              <div key={b} className="col-12 col-md-6 col-lg-4">
                <div className="sectionCard h-100">
                  <h3 className="h6 mb-1">{b}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) WHERE ARCHITECTS WORK */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={Landmark}
            title="Where architects work"
            subtitle="Work environment depends on skills, portfolio and experience."
          />

          <div className="row g-3">
            {WORK_SETTINGS.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="col-12 col-md-6 col-lg-3">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1 d-flex align-items-center gap-2">
                      <Icon size={16} className="text-primary" />
                      <span>{w.title}</span>
                    </h3>
                    <p className="small text-muted mb-0">{w.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
                  {ELIGIBILITY_NOTES.map((x) => (
                    <li key={x}>{x}</li>
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
                  {COMMON_DOCS.map((d) => (
                    <li key={d} className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6) BUILD YOUR PROFILE */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Build your profile during B.Arch"
            subtitle="Architecture success depends on portfolio quality and patience."
          />

          <div className="row g-3">
            {BUILD_PROFILE.map((t) => (
              <div key={t} className="col-12 col-md-6 col-lg-4">
                <div className="sectionCard h-100">
                  <h3 className="h6 mb-1">Key focus</h3>
                  <p className="small text-muted mb-0">{t}</p>
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
      </FrontendLayout>
    </>
  );
}
