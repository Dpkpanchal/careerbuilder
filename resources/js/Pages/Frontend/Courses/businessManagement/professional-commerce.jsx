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
  { id: "finance", label: "Finance / Taxation / Accounting", href: '/courses/finance-taxation-accounting' },
  { id: "pro", label: "CA / CS / CMA", href: '#' },
];


/* -------------------------------------------------------------
   DATA – CA / CS / CMA (Career Book aligned, safe/general)
------------------------------------------------------------- */

const PROFESSIONALS = [
  {
    key: "ca",
    title: "CA (Chartered Accountant)",
    focus:
      "Accounting, auditing, taxation, financial reporting and advisory roles. Strong corporate + practice scope.",
    icon: Calculator,
    ladder: ["Foundation", "Intermediate", "Final", "Practical training/articleship (as per rules)"],
    roles: ["Audit & Assurance", "Taxation", "Corporate Finance", "Financial Reporting", "Consulting (with experience)"],
  },
  {
    key: "cs",
    title: "CS (Company Secretary)",
    focus:
      "Corporate law, company compliance, governance, secretarial practice and regulatory filings.",
    icon: Scale,
    ladder: ["Foundation", "Executive", "Professional", "Training/experience (as per rules)"],
    roles: ["Corporate Compliance", "Secretarial Practice", "Legal & Regulatory Support", "Governance & Board Support"],
  },
  {
    key: "cma",
    title: "CMA (Cost & Management Accountant)",
    focus:
      "Costing, management accounting, budgeting, performance management and financial strategy support.",
    icon: FileText,
    ladder: ["Foundation", "Intermediate", "Final", "Practical training (as per rules)"],
    roles: ["Costing & Budgeting", "FP&A support", "Management Accounting", "Internal Audit / Controls"],
  },
];

const WHO_SHOULD_DO = [
  {
    title: "Students who can commit to long-term disciplined study",
    desc: "These are professional qualifications. Consistency matters more than shortcuts.",
    icon: ShieldCheck,
  },
  {
    title: "Students interested in accounting/compliance/business law",
    desc: "Pick CA for accounts/audit/tax, CS for company law/compliance, CMA for costing/management accounting.",
    icon: ClipboardList,
  },
  {
    title: "Students aiming for high-responsibility corporate roles",
    desc: "With time and experience, these qualifications unlock strong positions and growth.",
    icon: Briefcase,
  },
  {
    title: "Students who can handle exams + training together",
    desc: "Training/practical exposure is part of the journey (as per official rules).",
    icon: Users,
  },
];

const CHOOSE_RIGHT = [
  {
    title: "Choose CA if you like…",
    desc: "Accounting, auditing, taxation, financial statements, finance advisory.",
    icon: Calculator,
  },
  {
    title: "Choose CS if you like…",
    desc: "Company law, compliance, governance, filings, regulatory work.",
    icon: Scale,
  },
  {
    title: "Choose CMA if you like…",
    desc: "Costing, budgeting, performance reporting, internal finance planning.",
    icon: FileText,
  },
];

const COMMON_PREP = [
  "Strong basics in Accounts / Business Studies / Economics (helpful)",
  "Consistency: daily study schedule + revision habit",
  "Solve past papers / mock tests regularly",
  "Good notes + concept clarity (avoid only rote)",
  "If possible, join internships/office exposure for real-world learning",
];

const COMMON_DOCS = [
  "Class 10 & 12 marksheets",
  "Graduation marksheets (if applicable)",
  "ID proof (Aadhaar etc.)",
  "Photo + signature",
  "Category/EWS/Income certificate (if applicable)",
];

const IMPORTANT_NOTES = [
  "Exact eligibility, attempts, syllabus and training rules are governed by the official institutes—check latest notifications before applying.",
  "Many students pursue B.Com/BBA alongside professional courses for academic backup and broader options.",
  "Choose the professional course based on interest and long-term career fit, not only on trend.",
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
   Route: /courses/professional-commerce
------------------------------------------------------------- */

export default function ProfessionalCommercePage() {
  const snapshot = useMemo(
    () => [
      { k: "Category", v: "Professional Commerce Qualifications" },
      { k: "Main options", v: "CA • CS • CMA" },
      { k: "Nature", v: "Exam-based + training/experience (as per rules)" },
      { k: "Best for", v: "Audit • Tax • Compliance • Costing • Finance" },
      { k: "Reality check", v: "Needs discipline + time + consistency" },
    ],
    []
  );

  return (
    <>
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
                <span>About CA / CS / CMA</span>
              </h2>

              <p className="sectionSub">
                CA, CS and CMA are respected professional commerce qualifications that lead to high-responsibility roles
                in audit, taxation, corporate compliance, costing and finance. These programmes are exam-based and
                typically include practical training/experience components as per official rules.
              </p>

              <p className="sectionSub mb-0">
                These routes are best for students who can commit to consistent preparation over time. Your discipline,
                concept clarity and practice decide results.
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
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="How to choose between CA, CS and CMA"
            subtitle="Pick based on your interest: accounting & audit vs company law & compliance vs costing & performance."
          />

          <div className="row g-3">
            {CHOOSE_RIGHT.map((x) => {
              const Icon = x.icon;
              return (
                <div key={x.title} className="col-12 col-md-4">
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

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Tip: If you’re confused, start with your strongest interest area: Accounts (CA), Company Law (CS), or Costing (CMA).
          </div>
        </div>
      </section>

      {/* 3) OVERVIEW CARDS (CA/CS/CMA) */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="CA vs CS vs CMA (overview)"
            subtitle="Each has a similar “levels + training” structure, but different focus and roles."
          />

          <div className="row g-3">
            {PROFESSIONALS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.key} className="col-12 col-lg-4">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-2 d-flex align-items-center gap-2">
                      <Icon size={16} className="text-primary" />
                      <span>{p.title}</span>
                    </h3>

                    <p className="small text-muted mb-3">{p.focus}</p>

                    <div className="small fw-semibold text-dark mb-2">Typical ladder</div>
                    <ul className="list-unstyled small mb-3">
                      {p.ladder.map((x) => (
                        <li key={x} className="d-flex mb-2">
                          <span className="me-2">•</span>
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="small fw-semibold text-dark mb-2">Common role areas</div>
                    <ul className="list-unstyled small mb-0">
                      {p.roles.map((r) => (
                        <li key={r} className="d-flex mb-2">
                          <span className="me-2">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4) WHO SHOULD DO */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="Who should pursue these professional courses"
            subtitle="These routes are high-value, but they demand commitment and long-term planning."
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
                  {COMMON_PREP.map((x) => (
                    <li key={x}>{x}</li>
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
                  {COMMON_DOCS.map((d) => (
                    <li key={d} className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 small text-muted">
                  Many students pursue <strong>B.Com/BBA</strong> alongside professional courses for academic backup and broader options.
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="sectionCard">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <ClipboardList size={18} className="text-primary" />
                  <span>Important notes</span>
                </h3>

                <ul className="list-unstyled small mb-0">
                  {IMPORTANT_NOTES.map((x) => (
                    <li key={x} className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Sensible shortcut: choose one course (CA/CS/CMA), build a daily routine, and don’t switch repeatedly—consistency wins.
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
