"use client";

import React from "react";
import {
  Layers3,
  BookOpen,
  Receipt,
  Landmark,
  PieChart,
  Briefcase,
  ClipboardList,
} from "lucide-react";

import HeroInner from "@/components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CoursesTabsBar from "../CoursesTabsBar";

// ------------------------------------------------------------------
// Streamlined Degree sub-tabs (same set across Streamlined pages)
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
// Data (Streamlined – Commerce UG)
// ------------------------------------------------------------------
const COMMERCE_OPTIONS = [
  {
    title: "B.Com (General / Honours)",
    icon: Receipt,
    about:
      "The most common Commerce degree. Honours gives depth (Accounting/Finance), while General keeps options wide.",
    keyPoints: [
      "Best for accounting, finance, banking support roles and business foundation",
      "Strong base for CA/CS/CMA and MBA preparation",
      "Good progression to M.Com, MBA/PGDM and professional certifications",
    ],
    facts: [
      { k: "Duration", v: "3 years" },
      { k: "Eligibility", v: "Class 12 pass (Commerce preferred)" },
      { k: "Admission", v: "Merit / Entrance (varies)" },
      { k: "Best for", v: "Finance • Accounts • Exams • Business" },
    ],
  },
  {
    title: "BBA (UG Management)",
    icon: Briefcase,
    about:
      "A management-focused UG route for business operations, marketing, HR and entrepreneurship basics.",
    keyPoints: [
      "Best for early management track (marketing/HR/operations)",
      "Works well before MBA/PGDM",
      "Internships + communication skills matter a lot",
    ],
    facts: [
      { k: "Duration", v: "3 years" },
      { k: "Eligibility", v: "Class 12 pass" },
      { k: "Admission", v: "Merit / Entrance (varies)" },
      { k: "Best for", v: "Management • MBA path • Business" },
    ],
  },
  {
    title: "B.Com (Accounting & Finance / similar specialisations)",
    icon: PieChart,
    about:
      "Commerce specialisations offered by some institutes. Names differ, but focus stays around finance, accounting, taxation basics.",
    keyPoints: [
      "More focused than B.Com General",
      "Good for finance roles + professional course support",
      "Check curriculum and placement exposure of the institute",
    ],
    facts: [
      { k: "Duration", v: "3 years" },
      { k: "Eligibility", v: "Class 12 pass" },
      { k: "Admission", v: "Merit / Entrance (varies)" },
      { k: "Best for", v: "Finance • Accounting • Tax" },
    ],
  },
  {
    title: "B.A / B.Sc Economics (where available)",
    icon: Landmark,
    about:
      "Economics is a strong allied route for commerce-minded students. It supports banking, analytics, policy and higher studies.",
    keyPoints: [
      "Strong base for banking/finance + analytics mindset",
      "Good for competitive exams + higher studies",
      "Skill add-ons (Excel/data) boost outcomes",
    ],
    facts: [
      { k: "Duration", v: "3 years" },
      { k: "Eligibility", v: "Class 12 pass" },
      { k: "Admission", v: "Merit / Entrance (varies)" },
      { k: "Best for", v: "Banking • Analytics • PG" },
    ],
  },
];

const COMMERCE_SUBJECT_AREAS = [
  { title: "Core Commerce", items: ["Financial Accounting", "Business Studies", "Commerce Basics"] },
  { title: "Finance & Tax", items: ["Corporate Finance", "Taxation basics", "Costing basics"] },
  { title: "Management", items: ["Marketing basics", "HR fundamentals", "Operations overview"] },
  { title: "Skills (must add)", items: ["Excel", "Communication", "Presentation", "Internship exposure"] },
];

const AFTER_BCOM = [
  {
    title: "Professional Courses",
    desc: "CA / CS / CMA and other certifications build strong career advantage.",
    points: [
      "Choose one professional track early and stay consistent",
      "Build accounting + law basics gradually (don’t rush)",
      "Practice mock tests and problem solving regularly",
    ],
  },
  {
    title: "Higher Studies",
    desc: "M.Com / MBA / specialised PG routes for better roles and growth.",
    points: [
      "M.Com for deeper commerce + academic path",
      "MBA for management roles and leadership track",
      "Short courses (Excel, Tally, analytics) help alongside",
    ],
  },
  {
    title: "Competitive Exams",
    desc: "Banking/SSC/Railways/state exams — commerce gives good base for aptitude & GK.",
    points: [
      "Strengthen aptitude (math/reasoning) + English",
      "Follow current affairs daily",
      "Practice mocks and previous year papers",
    ],
  },
  {
    title: "Skill + Job Route",
    desc: "Accounts assistant, billing, operations, sales support roles grow fast with skills.",
    points: [
      "Excel + basic accounting tools",
      "Resume + interview practice",
      "Internships / part-time experience helps a lot",
    ],
  },
];

const ADMISSION_POINTS = [
  "Many UG admissions are based on Class 12 marks (merit list).",
  "Some colleges may have subject cut-offs or entrance routes for selected programmes.",
  "Always verify from official institute/university notices before applying.",
];

const DOCS = [
  "Class 10 & 12 marksheets",
  "ID proof (Aadhaar etc.)",
  "Photo + signature",
  "Category/EWS/Income certificate (if applicable)",
  "Domicile (if required)",
];

const SNAPSHOT = [
  { t: "Accounts & Finance", d: "Accounting, billing, finance support, junior analyst roles" },
  { t: "Banking & Exams", d: "Bank PO/Clerk, insurance, SSC, state-level exams" },
  { t: "Business Operations", d: "Operations/admin/coordinator roles with Excel + communication" },
  { t: "Sales & Marketing", d: "Sales support, marketing operations, business development entry roles" },
  { t: "Professional Practice", d: "CA/CS/CMA track → audit, taxation, compliance" },
  { t: "Management Track", d: "BBA/MBA path → HR, marketing, operations leadership" },
];

// ------------------------------------------------------------------
// Helpers (same as you liked: section headings + DL)
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
export default function CommerceDegree() {
  return (
    <>
    <FrontendLayout>
      <HeroInner title="Commerce Graduation Courses (B.Com & Allied)" breadcrumb="B.Com & Allied" />
      <CoursesTabsBar tabs={TABS} activeId="bcom" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <BookOpen size={18} className="text-primary" />
                <span>About Commerce Graduation Courses</span>
              </h2>

              <p className="sectionSub">
                Commerce graduation is the most direct route into accounting, finance, banking and business operations.
                Students typically choose B.Com (General/Honours) as the core degree and then strengthen outcomes with
                professional courses, skill training, internships and a clear career goal.
              </p>

              <p className="sectionSub mb-0">
                In streamlined Commerce choices, the main UG route is <b>B.Com</b> (General/Honours), supported by allied
                options like <b>BBA</b> (management-focused) and finance/accounting specialisation degrees offered by some
                institutes. Your final outcome depends heavily on skills (Excel/communication) and practical exposure.
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
                    { k: "Main course", v: "B.Com (General / Honours)" },
                    { k: "Allied options", v: "BBA • Finance/Accounting specialisations • Economics (where available)" },
                    { k: "Typical duration", v: "3 years" },
                    { k: "Entry", v: "After Class 12" },
                    { k: "Good for", v: "Accounts • Finance • Banking • Business • Exams" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) COMMERCE UG OPTIONS (polished, sensible; no links) */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={Receipt}
            title="Commerce UG options (B.Com & allied)"
            subtitle="These are the most common streamlined commerce routes after Class 12. Choose based on your goal and strengths."
          />

          <div className="row g-4 align-items-stretch">
            {COMMERCE_OPTIONS.map((opt) => {
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
                      {opt.keyPoints.map((p) => (
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
            Practical note: For commerce students, outcomes improve sharply when you build <b>Excel + communication</b> and
            gain <b>internship exposure</b> during graduation.
          </div>
        </div>
      </section>

      {/* 3) What you study (clean grouped list) */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={PieChart}
            title="What you study (common areas)"
            subtitle="Most commerce degrees share core accounting/finance subjects and basic management foundations."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <BookOpen size={16} />
                  <span>Core subject areas</span>
                </span>

                <div className="d-flex flex-column gap-2 mb-0">
                  {COMMERCE_SUBJECT_AREAS.map((sf) => (
                    <div key={sf.title} className="linkRowHover">
                      <span>
                        <strong>{sf.title}:</strong>{" "}
                        <span className="text-light">{sf.items.join(" • ")}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5 d-flex">
              <div className="sectionCard bg-light border w-100">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Smart choice tips</span>
                </h3>

                <div className="d-flex flex-column gap-2">
                  {[
                    "Choose Honours if you want depth for M.Com / finance roles / academic track.",
                    "Choose BBA if you want early management track before MBA.",
                    "If your goal is CA/CS/CMA, start foundation prep early and stay consistent.",
                    "Build Excel + communication from 1st year (non-negotiable).",
                  ].map((t) => (
                    <div key={t} className="linkRowHover">
                      <span>{t}</span>
                      <span className="small text-muted">Tip</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) After B.Com (sensible next steps) */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="After B.Com: sensible next steps"
            subtitle="Pick a direction early and build skills + experience alongside your degree."
          />

          <div className="row g-3 g-md-4">
            {AFTER_BCOM.map((x) => (
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
            Sensible shortcut: by end of 1st year, decide one primary goal (professional course / PG / exams / job) and
            start building toward it consistently.
          </div>
        </div>
      </section>

      {/* 5) Admission & Documents */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Admission & Documents"
            subtitle="Admission rules vary by institute. Keep these practical points in mind before applying."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <ClipboardList size={16} />
                  <span>Admission pattern (simple)</span>
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
                  Keep scanned copies ready (PDF/JPG) and check size limits during application.
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
            icon={Briefcase}
            title="Careers snapshot"
            subtitle="Commerce degrees open multiple tracks. Choose one and build a strong profile around it."
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
            Tip: For commerce students, outcomes improve sharply with <b>Excel + communication</b>, internship exposure, and
            consistent preparation if you are targeting exams or professional courses.
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
