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
  Calculator,
  Landmark,
  FileText,
  LineChart,
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
   DATA – Finance / Taxation / Accounting (Career Book aligned)
------------------------------------------------------------- */

const FINANCE_PATHS = [
  {
    title: "Accounting Path",
    focus:
      "Core accounting, bookkeeping, compliance support, financial statements and reporting.",
    examples: "Accountant, Accounts Executive, Audit Assistant",
    icon: Calculator,
  },
  {
    title: "Taxation Path",
    focus:
      "Income Tax, GST basics, filings, documentation, compliance and advisory support.",
    examples: "Tax Assistant, GST Executive, Compliance Executive",
    icon: FileText,
  },
  {
    title: "Finance Path",
    focus:
      "Corporate finance basics, banking operations, analysis support, MIS and reporting.",
    examples: "Finance Executive, Banking Ops, MIS Analyst (entry level)",
    icon: LineChart,
  },
];

const COURSE_OPTIONS = [
  {
    title: "Academic Degrees",
    desc: "B.Com / M.Com / MBA (Finance) provide theoretical and structural base.",
  },
  {
    title: "Professional Courses",
    desc: "CA / CMA / CS for high-value professional commerce roles.",
  },
  {
    title: "Skill-Based Certifications",
    desc: "Tally/ERP, GST basics, Income Tax, Excel, Power BI, basic analytics.",
  },
  {
    title: "Short-term Diplomas",
    desc: "Accounting & taxation diplomas for job-oriented entry roles.",
  },
];

const TYPICAL_ROLES = [
  "Accounts Executive / Junior Accountant",
  "Billing & MIS Executive",
  "GST / Tax Filing Assistant",
  "Audit Support / Article Assistant",
  "Banking Operations Executive",
  "Finance / Accounts Analyst (entry level)",
];

const WORK_SETTINGS = [
  {
    title: "Corporate Accounts & Finance",
    desc: "Accounting, billing, reconciliation, reporting, MIS roles.",
    icon: Calculator,
  },
  {
    title: "CA / Tax Consultant Offices",
    desc: "Tax filings, audits, compliance and documentation work.",
    icon: FileText,
  },
  {
    title: "Banks & Financial Institutions",
    desc: "Operations, documentation, relationship and finance support roles.",
    icon: Landmark,
  },
  {
    title: "SMEs & Startups",
    desc: "Multi-role exposure: accounts + compliance + operations.",
    icon: Briefcase,
  },
];

const ELIGIBILITY_NOTES = [
  "Open to commerce graduates and management graduates; some roles accept other streams with skills.",
  "Accounting/tax roles strongly prefer commerce background or relevant certifications.",
  "Professional courses have separate eligibility and exam structures.",
];

const COMMON_DOCS = [
  "Academic marksheets & degree certificates",
  "ID proof (Aadhaar etc.)",
  "Resume with skills/certifications",
  "Internship / experience certificates (if any)",
];

const BUILD_PROFILE = [
  "Excel (advanced): formulas, pivot tables, reporting",
  "Practical accounting entries & real statements understanding",
  "Basic GST + Income Tax filing exposure",
  "Tally / ERP hands-on practice",
  "Accuracy, compliance mindset & documentation discipline",
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
   Route: /courses/finance
------------------------------------------------------------- */

export default function FinanceAccountingPage() {
  const snapshot = useMemo(
    () => [
      { k: "Career domain", v: "Finance • Taxation • Accounting" },
      { k: "Entry routes", v: "B.Com / M.Com / BBA / MBA + skills" },
      { k: "Best for", v: "Accounts • Tax • Banking • Finance roles" },
      { k: "Growth drivers", v: "Skills + accuracy + certifications" },
      { k: "Reality check", v: "Practical exposure > degree name" },
    ],
    []
  );

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Finance / Taxation / Accounting"
        breadcrumb="Business & Management → Finance / Taxation / Accounting"
      />
      <CoursesTabsBar tabs={TABS} activeId="finance" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Calculator size={18} className="text-primary" />
                <span>About this career domain</span>
              </h2>

              <p className="sectionSub">
                Finance, Taxation and Accounting form the backbone of every business. These roles focus on managing
                money, compliance, reporting, analysis and statutory responsibilities.
              </p>

              <p className="sectionSub mb-0">
                Career growth in this domain depends more on practical skills, accuracy and certifications than just
                academic degrees.
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
                  Companies hire for skills, accuracy and exposure — not just degree titles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) CAREER PATHS */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="Major career paths"
            subtitle="Most roles fall into one of these three practical tracks."
          />

          <div className="row g-3">
            {FINANCE_PATHS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="col-12 col-md-4">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1 d-flex align-items-center gap-2">
                      <Icon size={16} className="text-primary" />
                      <span>{p.title}</span>
                    </h3>
                    <p className="small text-muted mb-1">{p.focus}</p>
                    <p className="small text-muted mb-0">
                      <strong>Examples:</strong> {p.examples}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3) COURSES & ROUTES */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="Courses & entry routes"
            subtitle="Different learning routes lead to finance/accounting roles."
          />

          <div className="row g-3">
            {COURSE_OPTIONS.map((c) => (
              <div key={c.title} className="col-12 col-md-6">
                <div className="sectionCard h-100">
                  <h3 className="h6 mb-1">{c.title}</h3>
                  <p className="small text-muted mb-0">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) ROLES & WORK SETTINGS */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={Briefcase}
            title="Roles & work environments"
            subtitle="Work settings vary by organisation size and role type."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-6 d-flex">
              <div className="sectionCard h-100">
                <h3 className="h6 mb-3">Typical roles</h3>
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

            <div className="col-12 col-lg-6 d-flex">
              <div className="sectionCard h-100">
                <h3 className="h6 mb-3">Where you work</h3>
                <div className="row g-3">
                  {WORK_SETTINGS.map((w) => {
                    const Icon = w.icon;
                    return (
                      <div key={w.title} className="col-12">
                        <div className="sectionCard bg-light border">
                          <h4 className="h6 mb-1 d-flex align-items-center gap-2">
                            <Icon size={16} className="text-primary" />
                            <span>{w.title}</span>
                          </h4>
                          <p className="small text-muted mb-0">{w.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) ADMISSION & PROFILE */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Eligibility & profile building"
            subtitle="Focus on skills that directly improve employability."
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

            <div className="col-12">
              <div className="sectionCard">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Users size={18} className="text-primary" />
                  <span>Build your profile</span>
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
                  Sensible shortcut: Excel + Tally + GST basics + internship = fastest entry into accounts/tax roles.
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
