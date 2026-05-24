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
   DATA – B.Sc Computer Science / IT (Career Book aligned)
------------------------------------------------------------- */

const BSC_CS_IT_LADDER = [
  {
    title: "B.Sc Computer Science / IT (UG Degree)",
    duration: "3 Years",
    focus:
      "Science-based UG degree focused on computer fundamentals, programming, maths/logic and computing systems.",
  },
  {
    title: "Entry-level IT / Tech Jobs",
    duration: "After UG",
    focus:
      "Developer trainee, QA/testing, IT support, web development, data operations (depending on skills).",
  },
  {
    title: "M.Sc Computer Science / IT (PG)",
    duration: "2 Years (varies)",
    focus:
      "Deeper CS/IT knowledge, research orientation and stronger specialization options.",
  },
  {
    title: "Specialisation + Growth",
    duration: "Continuous",
    focus:
      "Choose a track (full-stack, data, cloud, cybersecurity) and build strong projects for higher roles.",
  },
];

const BSC_VARIANTS = [
  {
    title: "B.Sc Computer Science",
    desc: "More CS fundamentals focus: programming, algorithms, systems and core computing subjects.",
    icon: Cpu,
  },
  {
    title: "B.Sc Information Technology (IT)",
    desc: "More application and IT systems focus: networks, databases, web systems and IT operations exposure.",
    icon: Network,
  },
  {
    title: "B.Sc (CS/IT) with Specialisation (where offered)",
    desc: "Some colleges offer tracks like Data Science, AI, Cybersecurity; syllabus differs by institute.",
    icon: FlaskConical,
  },
];

const CORE_SUBJECTS = [
  "Programming fundamentals (C/C++/Java/Python depending on university)",
  "Data Structures & Algorithms (foundation level)",
  "Database Management Systems (DBMS)",
  "Operating Systems basics",
  "Computer Networks basics",
  "Web development fundamentals",
  "Mathematics/Statistics (often stronger than BCA in many universities)",
];

const CAREER_ROLES = [
  "Software Developer (Junior) / Developer trainee",
  "Web Developer",
  "QA / Testing",
  "IT Support / System Support",
  "Database / Backend trainee roles",
  "Data operations / analytics support (with skills)",
];

const WORK_SETTINGS = [
  {
    title: "IT Services & Software",
    desc: "Development, testing, support and IT services roles.",
    icon: Cpu,
  },
  {
    title: "Startups / Product Teams",
    desc: "Developer roles if you have strong projects + interview readiness.",
    icon: Briefcase,
  },
  {
    title: "Data / Database Teams",
    desc: "DB support, data ops, reporting and analytics support roles.",
    icon: Database,
  },
  {
    title: "IT Operations / Networking",
    desc: "Network/support roles, basic system administration tracks (with skills).",
    icon: Network,
  },
];

const ELIGIBILITY_NOTES = [
  "Usually after Class 12 — eligibility may vary by university (science preference in some colleges).",
  "Some colleges may prefer Mathematics/Computer at Class 12 level; many accept other streams too.",
  "Admission may be merit-based or entrance-based depending on institute.",
  "For jobs, you must build real projects and practical skills beyond the syllabus.",
];

const ADMISSION_NOTES = [
  "Choose colleges with strong labs, updated syllabus and practical training.",
  "Check if they include modern development and internship support.",
  "Ask about placement support and alumni outcomes for CS/IT roles.",
];

const COMMON_DOCS = [
  "Class 10 & 12 marksheets",
  "ID proof (Aadhaar etc.)",
  "Photo + signature",
  "Category/EWS/Income certificate (if applicable)",
  "Domicile (if required)",
];

const BUILD_PROFILE = [
  "Pick one main language (Python/Java/JS) and get strong",
  "Build 3–5 solid projects (portfolio/GitHub)",
  "Practice DSA + logic (basic to intermediate)",
  "Internship / freelance / real work exposure",
  "Basic SQL + database skills (mandatory for most roles)",
  "Communication + interview practice",
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
   Route: /courses/eng-tech/bsc-computer
------------------------------------------------------------- */

export default function BScComputerPage() {
  const snapshot = useMemo(
    () => [
      { k: "Degree type", v: "UG Science Degree (CS/IT)" },
      { k: "Duration", v: "3 Years" },
      { k: "Eligibility", v: "Class 12 (criteria varies)" },
      { k: "Best for", v: "CS fundamentals + tech careers" },
      { k: "Strong ladder", v: "B.Sc → M.Sc / MCA → specialisation" },
    ],
    []
  );

  return (
    <>
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
                <span>About B.Sc Computer Science / IT</span>
              </h2>

              <p className="sectionSub">
                B.Sc Computer Science and B.Sc IT are undergraduate science degrees that build strong foundations in
                programming, computing fundamentals and IT systems. Many universities keep a stronger maths/logic base in
                B.Sc compared to purely application-focused programmes.
              </p>

              <p className="sectionSub mb-0">
                Like all tech careers, your outcome depends on skills: projects, internships and interview readiness
                matter more than marks alone.
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
                  Degree gives foundation, but portfolio + practice decides jobs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) LADDER */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="Career ladder (B.Sc CS/IT)"
            subtitle="B.Sc builds fundamentals. After that, specialisation creates growth."
          />

          <div className="row g-3">
            {BSC_CS_IT_LADDER.map((c) => (
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
            Tip: If you want long-term growth, plan for M.Sc/MCA or a strong specialization (data/cloud/security) with projects.
          </div>
        </div>
      </section>

      {/* 3) B.Sc CS vs B.Sc IT */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="B.Sc Computer Science vs B.Sc IT"
            subtitle="Difference is often in focus; exact syllabus varies by university."
          />

          <div className="row g-3">
            {BSC_VARIANTS.map((x) => {
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
            icon={Code2}
            title="Core subjects & typical roles"
            subtitle="These are common foundation topics and entry-level roles."
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
                  {CAREER_ROLES.map((r) => (
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
            title="Where B.Sc CS/IT graduates work"
            subtitle="Work depends on your skill track: development, data, ops or support."
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
                  {ELIGIBILITY_NOTES.map((x) => (
                    <li key={x}>{x}</li>
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

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Tip: Ask about labs, internships, and placement outcomes — those decide real value.
          </div>
        </div>
      </section>

      {/* 7) BUILD YOUR PROFILE */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Build your profile during B.Sc CS/IT"
            subtitle="Skills + projects decide your job, not only the degree title."
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
            Sensible shortcut: build projects every semester + learn SQL + do one internship — this unlocks strong CS/IT roles.
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
