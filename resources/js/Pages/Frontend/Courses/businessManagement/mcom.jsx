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
  BookOpen,
  Briefcase,
  Calculator,
  BadgeCheck,
  Landmark,
} from "lucide-react";

/* -------------------------------------------------------------
   Tabs (Business & Management) – same as B.Com page
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
   DATA – M.Com (Career Book aligned)
------------------------------------------------------------- */

const MCOM_LADDER = [
  {
    title: "M.Com (Master of Commerce)",
    duration: "2 Years (varies by university)",
    focus:
      "Postgraduate commerce degree focused on advanced accounting, finance, economics, taxation and research orientation.",
  },
  {
    title: "Teaching / Academia (as per norms)",
    duration: "After PG + eligibility",
    focus:
      "Teaching track typically requires additional eligibility (e.g., NET/SET) as per rules.",
  },
  {
    title: "Corporate / Finance Roles",
    duration: "After M.Com",
    focus:
      "Accounts, finance operations, compliance support, banking, analysis support roles (skills matter).",
  },
  {
    title: "Research / PhD (optional)",
    duration: "Long-term",
    focus:
      "Research track for academic careers and higher-level specialisation.",
  },
];

const WHO_SHOULD_DO = [
  {
    title: "Students who want deeper commerce knowledge",
    desc: "M.Com is ideal if you like accounting/finance/economics and want advanced concepts.",
    icon: BookOpen,
  },
  {
    title: "Students planning teaching/research path",
    desc: "M.Com supports academic direction; eligibility rules apply (NET/SET etc.).",
    icon: GraduationCap,
  },
  {
    title: "Students aiming for better finance/account roles",
    desc: "M.Com can strengthen profile when paired with Excel + tools + practical exposure.",
    icon: Calculator,
  },
  {
    title: "Students preparing for competitive exams",
    desc: "Many students combine M.Com with govt exams/banking exams preparation.",
    icon: ShieldCheck,
  },
];

const CORE_AREAS = [
  "Advanced Financial Accounting / Corporate Accounting",
  "Financial Management & Corporate Finance",
  "Business Economics / Managerial Economics",
  "Taxation & GST concepts (varies)",
  "Auditing & Assurance (varies)",
  "Research methodology (common in many universities)",
  "Statistics / Quantitative techniques (varies)",
];

const WORK_SETTINGS = [
  {
    title: "Corporate Accounts & Finance",
    desc: "Accounting, finance ops, reporting, documentation and MIS roles.",
    icon: Calculator,
  },
  {
    title: "Banks & Financial Services",
    desc: "Banking operations, finance support, documentation roles.",
    icon: Landmark,
  },
  {
    title: "Compliance / Tax Support",
    desc: "GST/tax documentation, compliance support and audit support roles.",
    icon: ShieldCheck,
  },
  {
    title: "Teaching / Research (as per norms)",
    desc: "College/university teaching path with required eligibility and exams.",
    icon: GraduationCap,
  },
];

const NEXT_STEP_OPTIONS = [
  {
    title: "NET/SET + Teaching Track (as per norms)",
    desc: "For college/university teaching eligibility, follow latest rules and notifications.",
  },
  {
    title: "PhD / Research",
    desc: "If you want long-term academic/research growth.",
  },
  {
    title: "Professional Commerce (CA/CS/CMA)",
    desc: "M.Com can be combined, but professional courses need disciplined preparation.",
  },
  {
    title: "Skill Certifications",
    desc: "Advanced Excel, Tally/ERP basics, GST/tax basics, Power BI, accounting tools.",
  },
];

const ELIGIBILITY_NOTES = [
  "Usually after B.Com or equivalent UG commerce degree (criteria varies by university).",
  "Some universities accept allied degrees with conditions—verify official notifications.",
  "Admission can be merit-based or entrance-based depending on institute/state/university.",
  "Specialisation/electives vary by college and university.",
];

const COMMON_DOCS = [
  "UG marksheets + degree/provisional certificate",
  "Class 10 & 12 marksheets (sometimes required)",
  "Entrance scorecard (if applicable)",
  "ID proof (Aadhaar etc.)",
  "Photo + signature",
  "Category/EWS/Income certificate (if applicable)",
  "Domicile (if required)",
];

const BUILD_PROFILE = [
  "Advanced Excel + reporting skills (must-have)",
  "Accounting practice + real statements understanding",
  "Basics of taxation/GST documentation (practical exposure)",
  "Clear communication + professional writing",
  "Internship/part-time exposure in accounts/finance",
  "If targeting teaching: research reading habit + methodology basics",
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
   Route: /courses/mcom
------------------------------------------------------------- */

export default function MComPage() {
  const snapshot = useMemo(
    () => [
      { k: "Degree type", v: "PG Commerce Degree" },
      { k: "Duration", v: "2 Years (varies)" },
      { k: "Eligibility", v: "B.Com / equivalent (criteria varies)" },
      { k: "Best for", v: "Advanced commerce • teaching/research • finance roles" },
      { k: "Reality check", v: "Skills + exposure decide jobs" },
    ],
    []
  );

  return (
    <>
    <FrontendLayout>
      <HeroInner title="M.Com (Master of Commerce)" breadcrumb="Business & Management → M.Com" />
      <CoursesTabsBar tabs={TABS} activeId="mcom" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <BookOpen size={18} className="text-primary" />
                <span>About M.Com</span>
              </h2>

              <p className="sectionSub">
                M.Com (Master of Commerce) is a postgraduate degree that strengthens your knowledge in accounting,
                finance, economics, taxation and commerce-related research areas (as per university syllabus).
              </p>

              <p className="sectionSub mb-0">
                M.Com is a strong choice for students who want deeper commerce understanding, plan for teaching/research
                tracks (with required eligibility), or want stronger grounding for finance/account roles.
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
                  M.Com builds depth, but job outcomes still improve mainly through practical skills + internships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) M.COM LADDER */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="M.Com career ladder"
            subtitle="M.Com supports both industry and academic pathways depending on your plan."
          />

          <div className="row g-3">
            {MCOM_LADDER.map((c) => (
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
            Tip: Decide early — are you aiming for teaching/research or corporate roles? Build your profile accordingly.
          </div>
        </div>
      </section>

      {/* 3) WHO SHOULD DO M.COM */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="Who should do M.Com"
            subtitle="M.Com is best when you want deeper commerce knowledge or academic direction."
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

      {/* 4) CORE AREAS */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Core subjects (common)"
            subtitle="Exact syllabus varies by university, but these are commonly seen in M.Com."
          />

          <div className="row g-3">
            {CORE_AREAS.map((s) => (
              <div key={s} className="col-12 col-md-6 col-lg-4">
                <div className="sectionCard h-100">
                  <h3 className="h6 mb-1">{s}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5) WHERE YOU WORK */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={Briefcase}
            title="Where M.Com graduates work"
            subtitle="Work depends on your skills, tools knowledge and experience."
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

      {/* 6) BEST NEXT STEPS */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="Best next steps after M.Com"
            subtitle="Choose based on your target career: industry, teaching, research, or professional commerce."
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
            Shortcut: for corporate roles, add advanced Excel + tools + internship. For teaching, follow NET/SET pathway rules.
          </div>
        </div>
      </section>

      {/* 7) ADMISSION & DOCUMENTS + BUILD PROFILE */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Admission checklist & profile building"
            subtitle="Keep basics ready and build practical skill value alongside PG."
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
                  <span className="fw-semibold text-white">Reminder:</span> course structure and electives vary by university.
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
                  <span>Build your profile during M.Com</span>
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
                  Sensible shortcut: M.Com + advanced Excel + internship = stronger roles in accounts/finance.
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
