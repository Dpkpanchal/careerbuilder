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
  FlaskConical,
  Briefcase,
  Factory,
  BadgeCheck,
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
   DATA – M.Tech (Career Book aligned)
------------------------------------------------------------- */

const MTECH_LADDER = [
  {
    title: "M.Tech / M.E (Postgraduate Engineering)",
    duration: "2 Years",
    focus:
      "Advanced specialisation in a chosen branch with deeper theory, labs and project/research work.",
  },
  {
    title: "Dissertation / Major Project",
    duration: "During the programme",
    focus:
      "A core part of M.Tech—project work defines your niche, portfolio and job readiness.",
  },
  {
    title: "Higher Technical Roles / R&D / Teaching track",
    duration: "After M.Tech",
    focus:
      "R&D roles, product engineering, senior technical jobs, academic pathway (as per norms).",
  },
  {
    title: "PhD / Research (optional)",
    duration: "Long-term",
    focus:
      "Research-focused track for innovation, advanced R&D and academic careers.",
  },
];

const WHO_SHOULD_DO = [
  {
    title: "For deeper specialisation",
    desc: "You want advanced knowledge in your branch and higher responsibility roles.",
    icon: ShieldCheck,
  },
  {
    title: "For R&D / product engineering",
    desc: "You want research-oriented roles, innovation projects and technical depth.",
    icon: FlaskConical,
  },
  {
    title: "For teaching/academic track (as per norms)",
    desc: "M.Tech strengthens eligibility for academic roles along with required regulations.",
    icon: GraduationCap,
  },
  {
    title: "For better career switching (domain upgrade)",
    desc: "You want to shift into a better domain (e.g., core → software) via specialisation.",
    icon: Briefcase,
  },
];

const POPULAR_MTECH_AREAS = [
  "Computer Science (AI/ML, Data Science, Cyber Security, Networks)",
  "VLSI / Embedded Systems / Communication (ECE)",
  "Power Systems / Power Electronics (EE)",
  "Thermal / Design / Manufacturing (Mechanical)",
  "Structural / Geotechnical / Transportation (Civil)",
  "Environmental / Water Resources (Civil/Allied)",
  "Robotics / Automation / Mechatronics (as offered)",
  "Construction Management / Urban Planning (aligned areas, as offered)",
];

const ELIGIBILITY_NOTES = [
  "Usually after B.Tech/B.E or equivalent in a relevant branch (rules vary by institute).",
  "Admission often through GATE and/or institute/state entrance processes.",
  "Some programmes accept sponsored/working candidates (as per institute norms).",
  "Branch alignment and minimum marks criteria vary—verify official notifications.",
];

const WORK_SETTINGS = [
  {
    title: "R&D / Product Companies",
    desc: "Core engineering R&D, advanced product roles, research and development teams.",
    icon: FlaskConical,
  },
  {
    title: "IT / Software (for CS and domain-shifters)",
    desc: "Backend, systems, AI/ML, security, data engineering (depends on skill + projects).",
    icon: Cpu,
  },
  {
    title: "Core Industries",
    desc: "Power, manufacturing, automotive, construction, telecom—higher technical roles.",
    icon: Factory,
  },
  {
    title: "Academics / Training (as per norms)",
    desc: "Teaching/research assistant roles, labs, institutions (depends on eligibility rules).",
    icon: GraduationCap,
  },
];

const ADMISSION_NOTES = [
  "Pick M.Tech specialisation based on your target job role, not just branch name.",
  "Your dissertation/project should match the kind of job you want after M.Tech.",
  "Choose institutes with strong labs, research culture and real placement outcomes.",
];

const COMMON_DOCS = [
  "UG marksheets + degree/provisional certificate",
  "GATE scorecard / entrance score (if applicable)",
  "ID proof (Aadhaar etc.)",
  "Photo + signature",
  "Category/EWS/Income certificate (if applicable)",
  "Domicile (if required)",
];

const BUILD_PROFILE = [
  "Choose a niche and build deep expertise (avoid being generalist at PG level)",
  "Strong major project/dissertation with real problem statement",
  "Research reading habit (papers, standards, tools)",
  "Internships in labs/industry if possible",
  "Strong documentation + presentation skills (reports, papers, demos)",
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
------------------------------------------------------------- */

export default function MTechPage() {
  const snapshot = useMemo(
    () => [
      { k: "Degree type", v: "Postgraduate Engineering Degree" },
      { k: "Duration", v: "2 Years" },
      { k: "Eligibility", v: "B.Tech/B.E (relevant branch)" },
      { k: "Entry", v: "GATE / institute entrance (as applicable)" },
      { k: "Best for", v: "Specialisation • R&D • senior roles • teaching track" },
    ],
    []
  );

  return (
    <>
    <FrontendLayout>
      <HeroInner title="M.Tech (Master of Technology)" breadcrumb="Engineering, Technology & IT → M.Tech" />

      {/* Tabs bar */}
      <CoursesTabsBar tabs={TABS} activeId="mtech" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <ShieldCheck size={18} className="text-primary" />
                <span>About M.Tech</span>
              </h2>

              <p className="sectionSub">
                M.Tech (Master of Technology) is a postgraduate engineering programme designed for deep specialisation in
                a chosen area. It focuses on advanced concepts, laboratory work, tools and strong project/research output.
              </p>

              <p className="sectionSub mb-0">
                The biggest differentiator in M.Tech is your dissertation/project work — it becomes your portfolio and
                often decides your placement and long-term career direction.
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
                  M.Tech helps most when you choose a niche and produce strong project output — not just by collecting the degree.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) M.TECH LADDER */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="M.Tech ladder (how growth happens)"
            subtitle="M.Tech builds depth. Your dissertation + skills decide senior opportunities."
          />

          <div className="row g-3">
            {MTECH_LADDER.map((c) => (
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
            Tip: Choose your dissertation topic like a job strategy — it should match the domain you want to work in.
          </div>
        </div>
      </section>

      {/* 3) WHO SHOULD DO M.TECH */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="Who should do M.Tech"
            subtitle="M.Tech is most valuable when you have a clear goal."
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

      {/* 4) POPULAR SPECIALISATIONS */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={FlaskConical}
            title="Popular M.Tech specialisations"
            subtitle="Options differ by institute. Use this list to understand the typical directions."
          />

          <div className="row g-3">
            {POPULAR_MTECH_AREAS.map((s) => (
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
            icon={Factory}
            title="Where M.Tech graduates work"
            subtitle="Work depends on your niche, project output and skills."
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

                <div className="small text-muted mt-3">
                  <span className="fw-semibold text-white">Reminder:</span> rules vary by institute — verify official notification.
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
        </div>
      </section>

      {/* 7) BUILD YOUR PROFILE */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Build your profile during M.Tech"
            subtitle="M.Tech success is about depth, research attitude and strong project output."
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
            Sensible shortcut: select a niche, build a strong dissertation, and align every semester project toward your target job domain.
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
