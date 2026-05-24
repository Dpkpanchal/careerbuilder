"use client";

import React, { useMemo } from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CoursesTabsBar from "../CoursesTabsBar";
import {
  Layers3,
  Briefcase,
  GraduationCap,
  ClipboardList,
  ShieldCheck,
  Building2,
  Users,
  Calculator,
  Landmark,
  BadgeCheck,
  Banknote,
} from "lucide-react";

/* -------------------------------------------------------------
   Tabs (Business & Management)
   (Use same pattern like Engineering tabs)
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
   DATA – B.Com (Career Book aligned)
------------------------------------------------------------- */

const BCOM_LADDER = [
  {
    title: "B.Com (General / Honours)",
    duration: "3 Years",
    focus:
      "Commerce foundation: accounting, finance, business laws, economics, taxation basics (varies by university).",
  },
  {
    title: "Job after Graduation",
    duration: "After B.Com",
    focus:
      "Entry roles in accounts, banking support, business operations, admin, sales operations (skills matter).",
  },
  {
    title: "Higher Studies / Professional Routes",
    duration: "After UG",
    focus:
      "M.Com / MBA / professional courses (CA/CS/CMA) / certifications aligned to your target career.",
  },
  {
    title: "Specialisation + Growth",
    duration: "Continuous",
    focus:
      "Choose one direction (accounts/tax/finance/banking/analytics) and build job-ready skills + experience.",
  },
];

const BCOM_TYPES = [
  {
    title: "B.Com (General)",
    desc: "Broad commerce base; good for flexibility, jobs + higher studies.",
    icon: Layers3,
  },
  {
    title: "B.Com (Honours)",
    desc: "Deeper focus in a core area (Accountancy/Finance etc.) depending on university.",
    icon: ShieldCheck,
  },
  {
    title: "B.Com with Specialisation (where offered)",
    desc: "Some colleges offer Banking/Tax/Finance tracks; exact structure varies.",
    icon: Banknote,
  },
];

const CORE_SUBJECTS = [
  "Financial Accounting / Corporate Accounting",
  "Business Economics",
  "Business Law",
  "Cost Accounting / Management Accounting (varies)",
  "Income Tax / GST basics (varies)",
  "Business Mathematics / Statistics (varies)",
  "Auditing fundamentals (varies)",
];

const TYPICAL_ROLES = [
  "Accounts Assistant / Junior Accountant",
  "Billing Executive / Accounts Support",
  "Banking operations / customer support roles",
  "Office / Admin / Back-office executive",
  "Sales operations / MIS support (with Excel skills)",
  "Tax/Compliance support roles (entry level)",
];

const WORK_SETTINGS = [
  {
    title: "Accounts & Finance Teams",
    desc: "Accounting support, billing, payments, reconciliation, MIS.",
    icon: Calculator,
  },
  {
    title: "Banks & Financial Services",
    desc: "Operations, customer roles, documentation, support functions.",
    icon: Landmark,
  },
  {
    title: "Corporate / SMEs",
    desc: "Back-office, admin, operations, documentation and reporting.",
    icon: Briefcase,
  },
  {
    title: "Tax / Compliance Offices",
    desc: "Entry support roles in tax filing, documentation, compliance work.",
    icon: ShieldCheck,
  },
];

const NEXT_STEP_OPTIONS = [
  {
    title: "M.Com",
    desc: "Stronger academics + eligibility for teaching/research path (as per norms).",
  },
  {
    title: "MBA / PGDM",
    desc: "Management route for business roles: marketing, finance, HR, operations.",
  },
  {
    title: "CA / CS / CMA",
    desc: "Professional commerce route (high value; requires disciplined preparation).",
  },
  {
    title: "Skill Certifications",
    desc: "Tally/Accounting software, GST basics, Excel/Power BI, banking certifications, etc.",
  },
];

const ELIGIBILITY_NOTES = [
  "Usually after Class 12 (any stream) — commerce background is helpful but not always mandatory.",
  "Admission is mostly merit-based; some universities may have their own criteria.",
  "Subject combinations, syllabus and honours options vary by university/college.",
];

const COMMON_DOCS = [
  "Class 10 & 12 marksheets",
  "ID proof (Aadhaar etc.)",
  "Photo + signature",
  "Category/EWS/Income certificate (if applicable)",
  "Domicile (if required)",
];

const BUILD_PROFILE = [
  "Excel (must-have): formulas, pivot, basic charts",
  "Accounting basics + practice with real entries",
  "Clear communication + professional email/office etiquette",
  "Basic computer skills + documentation discipline",
  "Internship/part-time exposure in accounts/admin (even small)",
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
          <dd className={`col-7 ${idx === items.length - 1 ? "mb-0" : "mb-2"}`}>{it.v}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

/* -------------------------------------------------------------
   PAGE
   Route: /courses/bcom
------------------------------------------------------------- */

export default function BComPage() {
  const snapshot = useMemo(
    () => [
      { k: "Course type", v: "UG Commerce Degree (General/Honours)" },
      { k: "Duration", v: "3 Years" },
      { k: "Eligibility", v: "Class 12 (criteria varies)" },
      { k: "Best for", v: "Accounts • Banking • Business roles • Higher studies" },
      { k: "Strong ladders", v: "B.Com → M.Com / MBA / CA-CS-CMA" },
    ],
    []
  );

  return (
    <>
    <FrontendLayout>
      <HeroInner title="B.Com & Allied Programs" breadcrumb="Business & Management → B.Com" />
      <CoursesTabsBar tabs={TABS} activeId="bcom" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Calculator size={18} className="text-primary" />
                <span>About B.Com</span>
              </h2>

              <p className="sectionSub">
                B.Com (Bachelor of Commerce) is a popular undergraduate degree that builds a foundation in accounting,
                finance, business laws, economics and taxation basics (as per university syllabus).
              </p>

              <p className="sectionSub mb-0">
                B.Com works best when you combine the degree with practical skills like Excel, basic accounting tools and
                real work exposure (internships/office experience).
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
                  The degree gives base knowledge, but job outcomes improve mainly through skills + experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) COURSE LADDER */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="B.Com career ladder"
            subtitle="B.Com gives a flexible base. Your next step depends on your goal."
          />

          <div className="row g-3">
            {BCOM_LADDER.map((c) => (
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
            Tip: If you want faster job readiness, build Excel + accounting practice early and do at least 1 internship.
          </div>
        </div>
      </section>

      {/* 3) B.Com TYPES */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="Types of B.Com"
            subtitle="Different colleges offer different versions. Choose based on your goal."
          />

          <div className="row g-3">
            {BCOM_TYPES.map((x) => {
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
        </div>
      </section>

      {/* 4) CORE SUBJECTS + ROLES */}
      <section className="py-5 nitLightGradient">
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

      {/* 5) WHERE YOU WORK */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={Briefcase}
            title="Where B.Com graduates work"
            subtitle="Work settings depend on your skills, internship exposure and interest area."
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

      {/* 6) NEXT STEPS (M.Com / MBA / CA-CS-CMA / Skills) */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="Best next steps after B.Com"
            subtitle="Pick the next step based on your career target."
          />

          <div className="row g-3">
            {NEXT_STEP_OPTIONS.map((x) => (
              <div key={x.title} className="col-12 col-md-6">
                <div className="sectionCard h-100">
                  <h3 className="h6 mb-1">{x.title}</h3>
                  <p className="small text-muted mb-0">{x.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Shortcut: if your goal is corporate job, combine B.Com with Excel + accounting tools + internship.
            If your goal is professional commerce, start CA/CS/CMA preparation early.
          </div>
        </div>
      </section>

      {/* 7) ADMISSION & DOCUMENTS + BUILD PROFILE */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Admission checklist & profile building"
            subtitle="Keep basics ready and focus on practical skills from day one."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <ClipboardList size={16} />
                  <span>Eligibility & admission notes</span>
                </span>

                <ul className="nitDarkList mb-0">
                  {ELIGIBILITY_NOTES.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>

                <div className="small text-muted mt-3">
                  <span className="fw-semibold text-white">Reminder:</span> honours options, subjects and rules vary by university.
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
              </div>
            </div>

            <div className="col-12">
              <div className="sectionCard">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Users size={18} className="text-primary" />
                  <span>Build your profile during B.Com</span>
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
                  Sensible shortcut: Excel + internship + basic accounting tools = faster job readiness after B.Com.
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
