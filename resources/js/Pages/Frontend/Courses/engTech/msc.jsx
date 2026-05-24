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
  FlaskConical,
  BadgeCheck,
  BookOpen,
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
   DATA – M.Sc Computer Science / IT (Career Book aligned)
------------------------------------------------------------- */

const MSC_LADDER = [
  {
    title: "M.Sc Computer Science / IT (PG Degree)",
    duration: "2 Years (varies by university)",
    focus:
      "Advanced CS/IT learning with stronger theory, electives and project/research orientation than UG.",
  },
  {
    title: "Project / Dissertation (Key Output)",
    duration: "During M.Sc",
    focus:
      "Research/project work defines your niche and helps in jobs or PhD readiness.",
  },
  {
    title: "Jobs / Industry Roles",
    duration: "After M.Sc",
    focus:
      "Developer roles, data roles, system roles, QA, research assistant roles (depending on skills and track).",
  },
  {
    title: "PhD / Research / Teaching track (optional)",
    duration: "Long-term",
    focus:
      "Higher research pathway, academic track, specialised R&D roles.",
  },
];

const WHO_SHOULD_DO = [
  {
    title: "Students who like CS fundamentals + theory",
    desc: "M.Sc is a strong choice if you want deeper concepts, not only application work.",
    icon: BookOpen,
  },
  {
    title: "Students planning research/PhD",
    desc: "M.Sc builds research orientation through dissertation and academic rigour.",
    icon: FlaskConical,
  },
  {
    title: "B.Sc CS/IT graduates aiming for better roles",
    desc: "M.Sc can strengthen your profile when paired with projects and skill-building.",
    icon: ShieldCheck,
  },
  {
    title: "Students who want a PG but not MCA route",
    desc: "M.Sc is a science-postgrad path; both M.Sc and MCA can lead to IT roles depending on skills.",
    icon: GraduationCap,
  },
];

const CORE_AREAS = [
  "Advanced programming + software engineering concepts",
  "Data structures, algorithms (stronger depth)",
  "Database systems + data modelling",
  "Operating systems, networks (deeper concepts)",
  "Theory of computation / compiler basics (depends on university)",
  "Electives (AI/ML, data science, security, distributed systems, etc.)",
];

const SPECIALISATION_TRACKS = [
  "AI / Machine Learning (where offered)",
  "Data Science / Analytics (where offered)",
  "Cybersecurity (where offered)",
  "Cloud / Distributed Systems (where offered)",
  "Networking / Systems (where offered)",
  "Software Engineering / Full-Stack (skill-driven)",
];

const WORK_SETTINGS = [
  {
    title: "IT Services & Software",
    desc: "Development, testing, support, implementation roles (with skills).",
    icon: Cpu,
  },
  {
    title: "Data / Database Teams",
    desc: "Analytics support, data ops, SQL/reporting roles (with skills).",
    icon: Database,
  },
  {
    title: "Systems / Networking",
    desc: "Network/system support, infrastructure roles (with skills).",
    icon: Network,
  },
  {
    title: "Research / Academia (as per norms)",
    desc: "RA roles, labs, teaching track, PhD pathway (depends on eligibility).",
    icon: FlaskConical,
  },
];

const ELIGIBILITY_NOTES = [
  "Generally after a UG degree like B.Sc CS/IT, BCA, or related (criteria varies).",
  "Some universities require Mathematics/Computer background; others accept broader UG degrees.",
  "Admission may be merit-based or entrance-based depending on university/state.",
  "Always verify current eligibility rules and programme structure from official notifications.",
];

const ADMISSION_NOTES = [
  "Check electives and lab facilities—those decide your specialisation options.",
  "Choose a dissertation/project topic aligned with your target career.",
  "If your goal is industry, build projects and internship exposure alongside academics.",
];

const COMMON_DOCS = [
  "UG marksheets + degree/provisional certificate",
  "Entrance scorecard (if applicable)",
  "ID proof (Aadhaar etc.)",
  "Photo + signature",
  "Category/EWS/Income certificate (if applicable)",
  "Domicile (if required)",
];

const BUILD_PROFILE = [
  "Pick a niche (data/AI/cloud/security) and build depth",
  "1 strong dissertation/project + 2 supporting projects",
  "SQL + database fundamentals (mandatory for many roles)",
  "Internship or real-world work exposure",
  "DSA + coding practice for interviews",
  "Strong documentation + presentation skills",
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
   Route: /courses/eng-tech/msc
------------------------------------------------------------- */

export default function MScComputerPage() {
  const snapshot = useMemo(
    () => [
      { k: "Degree type", v: "PG Science Degree (CS/IT)" },
      { k: "Duration", v: "2 Years (varies)" },
      { k: "Eligibility", v: "Relevant UG degree (criteria varies)" },
      { k: "Best for", v: "Deeper CS • research • stronger specialization" },
      { k: "Reality check", v: "Project + skills decide outcomes" },
    ],
    []
  );

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="M.Sc Computer Science / IT"
        breadcrumb="Engineering, Technology & IT → M.Sc Computer Science / IT"
      />

      {/* Tabs bar */}
      <CoursesTabsBar tabs={TABS} activeId="msc" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Cpu size={18} className="text-primary" />
                <span>About M.Sc Computer Science / IT</span>
              </h2>

              <p className="sectionSub">
                M.Sc Computer Science / IT is a postgraduate science degree that deepens your understanding of computer
                science fundamentals and advanced topics. It often has stronger theory + research orientation compared to
                many UG routes.
              </p>

              <p className="sectionSub mb-0">
                Your project/dissertation is a key output in M.Sc — it can support both industry roles and research/PhD
                readiness depending on how you plan it.
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
                  M.Sc helps most when you build a strong project + skills — not only by passing theory papers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) MSC LADDER */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="M.Sc (CS/IT) career ladder"
            subtitle="M.Sc builds depth. Your dissertation + skills decide the direction: industry or research."
          />

          <div className="row g-3">
            {MSC_LADDER.map((c) => (
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
            Tip: If your goal is industry, build job-ready projects + internship. If your goal is research, make your dissertation publication-ready.
          </div>
        </div>
      </section>

      {/* 3) WHO SHOULD DO */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="Who should do M.Sc CS/IT"
            subtitle="M.Sc is ideal for students who want deeper fundamentals and research/project orientation."
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

      {/* 4) CORE AREAS + SPECIALISATION */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={Code2}
            title="Core areas & specialisation options"
            subtitle="Exact syllabus varies, but these are common foundations and tracks."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-6 d-flex">
              <div className="sectionCard h-100">
                <h3 className="h6 mb-3">Core areas (common)</h3>
                <ul className="list-unstyled small mb-0">
                  {CORE_AREAS.map((s) => (
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
                <h3 className="h6 mb-3">Popular tracks (electives)</h3>
                <ul className="list-unstyled small mb-0">
                  {SPECIALISATION_TRACKS.map((s) => (
                    <li key={s} className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Shortcut: build one “deep” project aligned with your elective track + one “practical” project aligned with jobs.
          </div>
        </div>
      </section>

      {/* 5) WHERE YOU WORK */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={Briefcase}
            title="Where M.Sc CS/IT graduates work"
            subtitle="Work depends on your specialization and project strength."
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
                  <span className="fw-semibold text-white">Reminder:</span> eligibility and syllabus differ by university — verify official notification.
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
            Tip: If you want placements, treat M.Sc like a “portfolio program”: projects + internship + DSA.
          </div>
        </div>
      </section>

      {/* 7) BUILD YOUR PROFILE */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Build your profile during M.Sc"
            subtitle="Your dissertation + projects decide whether you go industry or research."
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
            Sensible shortcut: one strong dissertation + one internship + interview practice = strong outcomes after M.Sc.
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
