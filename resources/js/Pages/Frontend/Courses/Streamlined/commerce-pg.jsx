"use client";

import React from "react";
import {
  Layers3,
  BookOpen,
  Calculator,
  Briefcase,
  ClipboardList,
  GraduationCap,
  PieChart,
  Sparkles,
} from "lucide-react";

import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CoursesTabsBar from "../CoursesTabsBar";

// ------------------------------------------------------------------
// Streamlined Degree sub-tabs (same set)
// ------------------------------------------------------------------
const TABS = [
  { id: "ba", label: "BA & Allied", href: '/courses/arts-graduation-courses-ba-allied' },
  { id: "bcom", label: "B.Com & Allied", href: '/courses/commerce-graduation-courses-bcom-allied' },
  { id: "bsc", label: "B.Sc & Allied", href: '/courses/science-graduation-courses-bsc-allied' },
  { id: "ma", label: "MA, MSW & Allied", href: '/courses/arts-pg-courses-ma-msw-allied' },
  { id: "msc", label: "M.Sc & Allied", href: '/courses/science-pg-courses-msc-allied' },
  { id: "mcom", label: "M.Com & Allied", href: '/courses/commerce-pg-courses-mcom-allied' },
];

// ------------------------------------------------------------------
// Data – Commerce PG (M.Com & allied)
// ------------------------------------------------------------------
const MCOM_OPTIONS = [
  {
    title: "M.Com (General / Accounting / Finance)",
    icon: Calculator,
    about:
      "Postgraduate commerce degree focused on accounting, finance, taxation and advanced commerce concepts.",
    points: [
      "Best for accounting, finance, teaching and academic tracks",
      "Strong base for CA/CS/CMA support and finance roles",
      "Useful for PhD/research in commerce-related subjects",
    ],
    facts: [
      { k: "Duration", v: "2 years (typical)" },
      { k: "Eligibility", v: "B.Com / related graduation" },
      { k: "Admission", v: "Merit / Entrance (varies)" },
      { k: "Best for", v: "Teaching • Finance • Research" },
    ],
  },
  {
    title: "M.Com (Specialised streams)",
    icon: PieChart,
    about:
      "Some universities offer specialisations like Accounting & Finance, Taxation, Banking, or Management.",
    points: [
      "More focused curriculum than M.Com General",
      "Good for niche finance, taxation and compliance roles",
      "Check syllabus and faculty strength before choosing",
    ],
    facts: [
      { k: "Duration", v: "2 years (typical)" },
      { k: "Eligibility", v: "Commerce-related graduation" },
      { k: "Admission", v: "Merit / Entrance (varies)" },
      { k: "Best for", v: "Specialised commerce roles" },
    ],
  },
  {
    title: "Allied Commerce PG",
    icon: Briefcase,
    about:
      "Allied PG programmes related to commerce such as Business Economics, Banking & Insurance, or Management-focused masters.",
    points: [
      "Choose based on career goal (industry/academics/exams)",
      "Skill-oriented PGs work best with internships",
      "Practical exposure improves employability",
    ],
    facts: [
      { k: "Duration", v: "2 years (typical)" },
      { k: "Eligibility", v: "Graduation (rules vary)" },
      { k: "Admission", v: "Merit / Entrance (varies)" },
      { k: "Best for", v: "Industry • Management • Exams" },
    ],
  },
];

const COMMERCE_PG_AREAS = [
  { title: "Accounting & Finance", items: ["Advanced Accounting", "Corporate Finance", "Financial Management"] },
  { title: "Taxation & Law", items: ["Direct & Indirect Taxes", "Business Law", "Corporate Compliance"] },
  { title: "Economics & Analytics", items: ["Business Economics", "Statistics", "Research Methods"] },
  { title: "Skills (must add)", items: ["Advanced Excel", "Accounting software", "Presentation & reporting"] },
];

const AFTER_MCOM = [
  {
    title: "Teaching & Academics",
    desc: "M.Com strengthens eligibility and subject depth for academic roles (as per norms).",
    points: [
      "Build strong conceptual clarity and academic writing",
      "Choose dissertation topic aligned with long-term plan",
      "Track teaching eligibility and recruitment rules",
    ],
  },
  {
    title: "Professional Courses Support",
    desc: "M.Com complements CA/CS/CMA preparation and finance certifications.",
    points: [
      "Align PG subjects with professional syllabus",
      "Practice problem-solving consistently",
      "Balance PG + professional prep carefully",
    ],
  },
  {
    title: "Industry & Corporate Roles",
    desc: "Finance, accounts, compliance, operations and analyst roles.",
    points: [
      "Internships and practical tools matter",
      "Advanced Excel + accounting software helps",
      "Documentation and communication improve growth",
    ],
  },
  {
    title: "Competitive Exams",
    desc: "Commerce PG supports exams in banking, finance and administration.",
    points: [
      "Focus on aptitude + finance basics",
      "Stay consistent with current affairs",
      "Practice mocks and previous papers",
    ],
  },
];

const ADMISSION_POINTS = [
  "M.Com admissions may be merit-based or entrance-based depending on university.",
  "Some specialisations require specific UG background; mapping varies.",
  "Check institute accreditation, faculty and dissertation structure.",
];

const DOCS = [
  "Graduation marksheets / final result",
  "Class 10 & 12 marksheets",
  "ID proof (Aadhaar etc.)",
  "Photo + signature",
  "Category/EWS/Income certificate (if applicable)",
  "Migration/TC (if required)",
];

const SNAPSHOT = [
  { t: "Teaching Track", d: "Commerce teaching and academic roles (as per eligibility)" },
  { t: "Finance & Accounts", d: "Accounting, finance, audit and compliance roles" },
  { t: "Professional Practice", d: "CA/CS/CMA aligned roles and support" },
  { t: "Corporate & Operations", d: "Business operations, reporting and analyst roles" },
  { t: "Research & PhD", d: "PhD, research assistant and academic research paths" },
  { t: "Competitive Exams", d: "Banking, finance and administrative exams" },
];

// ------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------
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

// ------------------------------------------------------------------
// Page
// ------------------------------------------------------------------
export default function CommercePGDegree() {
  return (
    <>
    <FrontendLayout>
      <HeroInner title="Commerce PG Courses (M.Com & Allied)" breadcrumb="M.Com & Allied" />
      <CoursesTabsBar tabs={TABS} activeId="mcom" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <BookOpen size={18} className="text-primary" />
                <span>About Commerce Post Graduation</span>
              </h2>

              <p className="sectionSub">
                Commerce postgraduate study builds advanced knowledge in accounting, finance, taxation and business
                systems. It is best suited for students targeting teaching, finance roles, professional courses or
                research in commerce-related areas.
              </p>

              <p className="sectionSub mb-0">
                In streamlined Commerce PG routes, <b>M.Com</b> is the primary option, supported by specialised and allied
                PG programmes depending on university offerings. Outcomes improve significantly with practical tools,
                internships and a clear career goal.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <MiniDL
                  items={[
                    { k: "Main PG route", v: "M.Com (General / Specialised)" },
                    { k: "Typical duration", v: "2 years" },
                    { k: "Entry", v: "After graduation (Commerce-related)" },
                    { k: "Best for", v: "Teaching • Finance • Research • Exams" },
                    { k: "Key success factor", v: "Tools + internships + clarity" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) M.Com options */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={Calculator}
            title="M.Com & allied options"
            subtitle="Choose a programme aligned with your long-term goal—academics, finance, industry or exams."
          />

          <div className="row g-4 align-items-stretch">
            {MCOM_OPTIONS.map((opt) => {
              const Icon = opt.icon;
              return (
                <div key={opt.title} className="col-12 col-lg-6 d-flex">
                  <div className="nitDarkGlassBox w-100">
                    <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                      <Icon size={16} />
                      <span>{opt.title}</span>
                    </span>

                    <p className="small mb-3">{opt.about}</p>

                    <ul className="nitDarkList mb-3">
                      {opt.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>

                    <div className="sectionCard bg-light border">
                      <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                        <Layers3 size={18} className="text-primary" />
                        <span>Quick facts</span>
                      </h3>
                      <MiniDL items={opt.facts} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Pro tip: M.Com outcomes improve sharply when you master <b>advanced Excel</b>, accounting tools and complete a
            meaningful dissertation/project.
          </div>
        </div>
      </section>

      {/* 3) Subject areas + choice tips */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={BookOpen}
            title="Common M.Com subject areas"
            subtitle="Most commerce PG programmes revolve around these core academic and applied areas."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                {COMMERCE_PG_AREAS.map((sf) => (
                  <div key={sf.title} className="">
                    <span className="mb-2">
                      <strong>{sf.title}:</strong>{" "}
                      <span className="text-light">{sf.items.join(" • ")}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 col-lg-5 d-flex">
              <div className="sectionCard bg-light border w-100">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>How to choose your M.Com</span>
                </h3>

                {[
                  "Choose specialisation aligned with teaching, finance or industry goals.",
                  "Check dissertation support and faculty experience.",
                  "If targeting industry, prefer programmes with tools and internship exposure.",
                  "Build strong documentation and presentation skills during PG.",
                ].map((t) => (
                  <div key={t} className="mb-1 small">
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) After M.Com */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="After M.Com: sensible next steps"
            subtitle="M.Com builds depth. Convert it into outcomes with tools, internships and specialization."
          />

          <div className="row g-3 g-md-4">
            {AFTER_MCOM.map((x) => (
              <div key={x.title} className="col-12 col-md-6">
                <div className="sectionCard h-100">
                  <h3 className="h6 mb-1">{x.title}</h3>
                  <p className="small text-muted mb-3">{x.desc}</p>

                  <ul className="list-unstyled small mb-0">
                    {x.points.map((p) => (
                      <li key={p} className="d-flex mb-2">
                        <span className="me-2">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Sensible shortcut: treat M.Com as a <b>professional upgrade</b>—tools + dissertation + internships matter
            more than marks alone.
          </div>
        </div>
      </section>

      {/* 5) Admission & Documents */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Admission & Documents"
            subtitle="Admission rules vary by university and specialisation."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Sparkles size={16} />
                  <span>Admission basics</span>
                </span>

                <ul className="nitDarkList mb-0">
                  {ADMISSION_POINTS.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-5 d-flex">
              <div className="sectionCard bg-light border w-100">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Common documents checklist</span>
                </h3>

                <ul className="list-unstyled small mb-0">
                  {DOCS.map((d) => (
                    <li key={d} className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-muted small mt-3">
                  Keep scanned copies ready (PDF/JPG) and verify document format rules during application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6) Careers snapshot */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="Careers snapshot"
            subtitle="Commerce PG opens stronger roles when combined with tools and practical exposure."
          />

          <div className="row g-3">
            {SNAPSHOT.map((c) => (
              <div key={c.t} className="col-12 col-md-6 col-lg-4">
                <div className="sectionCard h-100">
                  <h3 className="h6 mb-1">{c.t}</h3>
                  <p className="small text-muted mb-0">{c.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Tip: The biggest differentiator after M.Com is your <b>practical skillset</b>—advanced Excel, accounting
            tools, and real-world exposure.
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
