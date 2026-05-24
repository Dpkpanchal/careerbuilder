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
  { id: "finance", label: "Finance / Taxation / Accounting", href: '/courses/finance-taxation-accounting' },
  { id: "pro", label: "CA / CS / CMA", href: '#' },
];



/* -------------------------------------------------------------
   DATA – BBA (Career Book aligned)
------------------------------------------------------------- */

const BBA_LADDER = [
  {
    title: "BBA (Bachelor of Business Administration)",
    duration: "3 Years",
    focus:
      "UG management programme focused on business basics: management, marketing, finance, HR, operations and communication.",
  },
  {
    title: "Entry-level Business Jobs",
    duration: "After BBA",
    focus:
      "Sales/marketing roles, operations support, HR support, customer success, business development (skills matter).",
  },
  {
    title: "MBA / PGDM (Common Next Step)",
    duration: "2 Years (varies)",
    focus:
      "Higher management study for specialization and stronger leadership/business roles.",
  },
  {
    title: "Specialisation + Growth",
    duration: "Continuous",
    focus:
      "Choose one track (marketing/finance/HR/ops/analytics) and build experience + skills for growth.",
  },
];

const WHO_SHOULD_DO = [
  {
    title: "Students interested in business & management",
    desc: "If you want business roles (marketing/HR/ops), BBA is a strong UG base.",
    icon: Briefcase,
  },
  {
    title: "Students who prefer practical learning + presentations",
    desc: "BBA often involves projects, presentations, group work and communication skills.",
    icon: Users,
  },
  {
    title: "Students planning MBA later",
    desc: "BBA + MBA is a common ladder for long-term growth in management roles.",
    icon: GraduationCap,
  },
  {
    title: "Students who want strong soft skills",
    desc: "BBA helps build communication, teamwork and business thinking (needs active effort).",
    icon: ShieldCheck,
  },
];

const CORE_SUBJECTS = [
  "Principles of Management",
  "Business Communication",
  "Marketing Management",
  "Financial Management (basics)",
  "Human Resource Management (HRM)",
  "Operations / Production Management (basics)",
  "Business Law / Business Environment (varies)",
  "Business Statistics / Research basics (varies)",
];

const SPECIALISATION_AREAS = [
  { title: "Marketing", desc: "Sales, branding, digital marketing, customer growth roles.", icon: Megaphone },
  { title: "Finance", desc: "Basics of finance, banking roles, corporate finance support.", icon: LineChart },
  { title: "HR", desc: "Recruitment support, HR operations, people management foundation.", icon: UserRound },
  { title: "Operations", desc: "Process, supply chain basics, operations coordination.", icon: Settings },
];

const TYPICAL_ROLES = [
  "Business Development Executive (entry level)",
  "Sales Executive / Marketing Executive",
  "Operations Coordinator / Executive (support roles)",
  "HR Executive (junior/support)",
  "Customer Success / Support roles",
  "Marketing assistant / digital marketing trainee (with skills)",
];

const WORK_SETTINGS = [
  {
    title: "Sales & Marketing Teams",
    desc: "Business development, sales operations, marketing support roles.",
    icon: Megaphone,
  },
  {
    title: "Corporate Operations",
    desc: "Operations coordination, admin/ops support, process work.",
    icon: Settings,
  },
  {
    title: "HR & People Ops",
    desc: "Recruitment support, HR operations, documentation, onboarding support.",
    icon: UserRound,
  },
  {
    title: "Startups & SMEs",
    desc: "Multi-role exposure: sales + ops + coordination (fast learning).",
    icon: Briefcase,
  },
];

const NEXT_STEP_OPTIONS = [
  { title: "MBA / PGDM", desc: "Most common ladder for higher roles and specialisation." },
  { title: "Specialised PG (Finance/HR/Marketing)", desc: "PG courses/certifications aligned to your target domain." },
  { title: "Skill Certifications", desc: "Digital marketing, Excel/Power BI, sales tools, HR tools, analytics basics." },
  { title: "Start working + grow", desc: "Build experience early and upskill for promotions or switch." },
];

const ELIGIBILITY_NOTES = [
  "Usually after Class 12 (any stream) — criteria varies by institute.",
  "Admission is mostly merit-based; some institutes may have entrance/interview rounds.",
  "Course structure and specialisations vary by college/university.",
];

const COMMON_DOCS = [
  "Class 10 & 12 marksheets",
  "ID proof (Aadhaar etc.)",
  "Photo + signature",
  "Category/EWS/Income certificate (if applicable)",
  "Domicile (if required)",
];

const BUILD_PROFILE = [
  "Communication + presentation skills (very important in BBA)",
  "Excel + basic reporting (must-have for business roles)",
  "Internships in sales/marketing/ops (even small)",
  "Basic business writing: emails, reports, proposals",
  "Learn one practical skill: digital marketing / HR tools / analytics basics",
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
   Route: /courses/bba
------------------------------------------------------------- */

export default function BBAPage() {
  const snapshot = useMemo(
    () => [
      { k: "Course type", v: "UG Management Degree" },
      { k: "Duration", v: "3 Years" },
      { k: "Eligibility", v: "Class 12 (criteria varies)" },
      { k: "Best for", v: "Business roles • management foundation • MBA ladder" },
      { k: "Strong ladder", v: "BBA → MBA/PGDM → specialization" },
    ],
    []
  );

  return (
    <>
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
                <span>About BBA</span>
              </h2>

              <p className="sectionSub">
                BBA (Bachelor of Business Administration) is an undergraduate programme that builds business and
                management foundations: marketing, finance basics, HR, operations and communication.
              </p>

              <p className="sectionSub mb-0">
                BBA outcomes depend a lot on internships, communication skills and practical exposure. Students who do
                internships and build real work skills get better roles early.
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
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="BBA career ladder"
            subtitle="BBA is a foundation degree. Your next step depends on your target track."
          />

          <div className="row g-3">
            {BBA_LADDER.map((c) => (
              <div key={c.title} className="col-12 col-md-6">
                <div className="sectionCard h-100">
                  <h3 className="h6 mb-1">{c.title}</h3>
                  <p className="small text-muted mb-1">{c.duration}</p>
                  <p className="small text-muted mb-0">{c.focus}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Tip: If you want strong outcomes, do internships from 1st/2nd year (sales/marketing/ops/HR).
          </div>
        </div>
      </section>

      {/* 3) WHO SHOULD DO BBA */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="Who should do BBA"
            subtitle="BBA is best for students who enjoy business thinking and practical learning."
          />

          <div className="row g-3">
            {WHO_SHOULD_DO.map((x) => {
              const Icon = x.icon;
              return (
                <div key={x.title} className="col-12 col-md-6">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1 d-flex align-items-center gap-2">
                      <Icon size={16} className="text-primary" />
                      <span>{x.title}</span>
                    </h3>
                    <p className="small text-muted mb-0">{x.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4) SPECIALISATION AREAS */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={Briefcase}
            title="Popular specialisation areas"
            subtitle="Exact specialisations vary by institute, but these are common directions."
          />

          <div className="row g-3">
            {SPECIALISATION_AREAS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="col-12 col-md-6 col-lg-3">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1 d-flex align-items-center gap-2">
                      <Icon size={16} className="text-primary" />
                      <span>{s.title}</span>
                    </h3>
                    <p className="small text-muted mb-0">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5) CORE SUBJECTS + ROLES */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Core subjects & typical roles"
            subtitle="Syllabus varies, but these subjects and entry roles are common."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-6 d-flex">
              <div className="sectionCard h-100">
                <h3 className="h6 mb-3">Core subjects (common)</h3>
                <ul className="list-unstyled small mb-0">
                  {CORE_SUBJECTS.map((s) => (
                    <li key={s} className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-6 d-flex">
              <div className="sectionCard h-100">
                <h3 className="h6 mb-3">Typical entry roles</h3>
                <ul className="list-unstyled small mb-0">
                  {TYPICAL_ROLES.map((r) => (
                    <li key={r} className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6) WHERE YOU WORK */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={Briefcase}
            title="Where BBA graduates work"
            subtitle="Your work setting depends on your skills, internships and interest area."
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
                  {NEXT_STEP_OPTIONS.map((x) => (
                    <li key={x.title}>
                      <strong>{x.title}:</strong> {x.desc}
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
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Class 12 pass (criteria varies by institute)</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Merit-based or entrance/interview (depends on institute)</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Keep documents: marksheets, ID proof, photo/signature, category/domicile (if needed)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12">
              <div className="sectionCard">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Users size={18} className="text-primary" />
                  <span>Build your profile during BBA</span>
                </h3>

                <div className="row g-3">
                  {BUILD_PROFILE.map((t) => (
                    <div key={t} className="col-12 col-md-6 col-lg-4">
                      <div className="sectionCard bg-light border h-100">
                        <h4 className="h6 mb-1">Key focus</h4>
                        <p className="small text-muted mb-0">{t}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-muted small mt-3" style={{ maxWidth: "95ch" }}>
                  Sensible shortcut: do 2 internships + learn Excel/reporting + build communication — you’ll get better first jobs after BBA.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
