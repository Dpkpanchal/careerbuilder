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
  Cloud,
  BadgeCheck,
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
   DATA – MCA (Career Book aligned)
------------------------------------------------------------- */

const MCA_LADDER = [
  {
    title: "MCA (Master of Computer Applications)",
    duration: "2 Years (may vary by rules/university)",
    focus:
      "PG programme focused on software development, computer science fundamentals, systems, and professional readiness.",
  },
  {
    title: "Projects + Internship",
    duration: "During MCA",
    focus:
      "Major projects define your role—full-stack, data, mobile, cloud, security etc.",
  },
  {
    title: "Software / IT Jobs",
    duration: "After MCA",
    focus:
      "Developer roles, engineering roles, testing/QA, data roles, systems roles (based on skills).",
  },
  {
    title: "Specialisation + Growth",
    duration: "Continuous",
    focus:
      "Choose a track and deepen skills for senior roles—product engineering, tech lead, architect, etc.",
  },
];

const WHO_SHOULD_DO = [
  {
    title: "BCA graduates (common ladder)",
    desc: "BCA → MCA is a classic pathway for stronger software career opportunities.",
    icon: GraduationCap,
  },
  {
    title: "Non-engineering graduates aiming for IT",
    desc: "MCA is a structured PG route for software careers after a bachelor degree.",
    icon: ShieldCheck,
  },
  {
    title: "Students ready for intensive coding + projects",
    desc: "MCA is most valuable when you build strong projects and internship exposure.",
    icon: Code2,
  },
  {
    title: "Those targeting product companies / higher roles",
    desc: "With strong DSA, system thinking and projects, MCA can unlock strong roles.",
    icon: Briefcase,
  },
];

const CORE_AREAS = [
  "Programming + software engineering foundations",
  "Data Structures & Algorithms (DSA)",
  "Database systems (SQL + DBMS concepts)",
  "Operating Systems + Computer Networks fundamentals",
  "Web/app development (varies by university)",
  "Project work + internship exposure",
];

const SPECIALISATION_TRACKS = [
  "Full-Stack Development (Frontend + Backend)",
  "Data Engineering / Analytics (SQL, pipelines, reporting)",
  "Cloud & DevOps (deployment, CI/CD, fundamentals)",
  "Cybersecurity (basics, tools, safe coding)",
  "Mobile App Development (Android/iOS frameworks as per learning)",
  "AI/ML basics (where offered / electives)",
];

const WORK_SETTINGS = [
  {
    title: "IT Services & Software Companies",
    desc: "Development, testing, support and implementation roles.",
    icon: Cpu,
  },
  {
    title: "Product Companies / Startups",
    desc: "Developer roles if projects + DSA + interviews are strong.",
    icon: Briefcase,
  },
  {
    title: "Data / Database Teams",
    desc: "DB, analytics support, reporting, data operations (with skills).",
    icon: Database,
  },
  {
    title: "Cloud / Platform Teams",
    desc: "Cloud ops, deployment support, DevOps entry roles (with skills).",
    icon: Cloud,
  },
];

const ELIGIBILITY_NOTES = [
  "Generally after a bachelor’s degree (BCA/B.Sc CS/IT or other graduates as per rules).",
  "Many universities require Mathematics at 10+2 or graduation level (varies).",
  "Admissions may be merit-based or entrance-based depending on institute/state/university.",
  "Always verify current eligibility rules and duration as per official notification.",
];

const ADMISSION_NOTES = [
  "Check if the programme includes updated development stacks and real project work.",
  "Look for internship/industry exposure and placement outcomes.",
  "Your final-year project should match the job role you want after MCA.",
];

const COMMON_DOCS = [
  "UG marksheets + degree/provisional certificate",
  "Class 10 & 12 marksheets (for maths eligibility if required)",
  "Entrance scorecard (if applicable)",
  "ID proof (Aadhaar etc.)",
  "Photo + signature",
  "Category/EWS/Income certificate (if applicable)",
  "Domicile (if required)",
];

const BUILD_PROFILE = [
  "DSA + problem solving (basic to intermediate)",
  "2–4 strong projects (full-stack/data/mobile)",
  "SQL + database skills (mandatory)",
  "Internship or real-world work exposure",
  "Resume + communication + interview practice",
  "Git/GitHub + clean code habits",
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
   Route: /courses/eng-tech/mca
------------------------------------------------------------- */

export default function MCAPage() {
  const snapshot = useMemo(
    () => [
      { k: "Degree type", v: "PG Computer Applications Degree" },
      { k: "Duration", v: "2 Years (varies by rules)" },
      { k: "Eligibility", v: "Bachelor degree (criteria varies)" },
      { k: "Best for", v: "Software careers + stronger roles" },
      { k: "Reality check", v: "Projects + DSA decide placement" },
    ],
    []
  );

  return (
    <>
    <FrontendLayout>
      <HeroInner title="MCA (Master of Computer Applications)" breadcrumb="Engineering, Technology & IT → MCA" />

      {/* Tabs bar */}
      <CoursesTabsBar tabs={TABS} activeId="mca" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Cpu size={18} className="text-primary" />
                <span>About MCA</span>
              </h2>

              <p className="sectionSub">
                MCA (Master of Computer Applications) is a postgraduate programme that prepares graduates for software
                and IT careers through deeper computer science fundamentals, development skills and project work.
              </p>

              <p className="sectionSub mb-0">
                MCA becomes powerful when you use it to build a strong portfolio: projects, internships and coding
                practice are the biggest factors for placements and role quality.
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
                  MCA helps most when your projects and problem-solving level are strong — not just by completing semesters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) MCA LADDER */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="MCA career ladder"
            subtitle="MCA strengthens your pathway into software roles if you build skills seriously."
          />

          <div className="row g-3">
            {MCA_LADDER.map((c) => (
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
            Tip: Choose a track early (full-stack/data/cloud) and align your major project to it.
          </div>
        </div>
      </section>

      {/* 3) WHO SHOULD DO MCA */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="Who should do MCA"
            subtitle="MCA is a strong PG route when you have a clear IT career goal."
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

      {/* 4) CORE AREAS + SPECIALISATION TRACKS */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={Code2}
            title="Core areas & specialisation tracks"
            subtitle="Your job role depends on the track you choose and the projects you build."
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
                <h3 className="h6 mb-3">Popular tracks</h3>
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
            Shortcut: build one strong end-to-end project (idea → code → deployment) and one internship to unlock better roles.
          </div>
        </div>
      </section>

      {/* 5) WHERE YOU WORK */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={Briefcase}
            title="Where MCA graduates work"
            subtitle="Work depends on your skill track and portfolio strength."
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
                  <span className="fw-semibold text-white">Reminder:</span> MCA rules can change — verify official notification.
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
            Tip: Ask about internships, placements, and industry projects — those decide real career value.
          </div>
        </div>
      </section>

      {/* 7) BUILD YOUR PROFILE */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Build your profile during MCA"
            subtitle="MCA outcomes depend on depth, projects and interview readiness."
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
            Sensible shortcut: master DSA + build 2 strong projects + do 1 internship — this unlocks strong software roles.
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
