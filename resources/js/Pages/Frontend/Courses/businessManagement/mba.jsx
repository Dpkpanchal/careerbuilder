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
  LineChart,
  Megaphone,
  Settings,
  UserRound,
  Handshake,
} from "lucide-react";

/* -------------------------------------------------------------
   Tabs (Business & Management) – same set used in B.Com / M.Com / BBA
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
   DATA – MBA / PGDM (Career Book aligned)
------------------------------------------------------------- */

const MBA_LADDER = [
  {
    title: "MBA / PGDM (Postgraduate Management)",
    duration: "Typically 2 Years",
    focus:
      "PG management programme focusing on business leadership, strategy, and specialised domains like marketing/finance/HR/operations.",
  },
  {
    title: "Summer Internship / Live Projects",
    duration: "During MBA",
    focus:
      "Internships strongly impact placements. Choose projects aligned to your target role.",
  },
  {
    title: "Management Roles (Entry)",
    duration: "After MBA",
    focus:
      "Management trainee roles, business analyst, sales/marketing roles, HR roles, operations roles (depends on specialisation).",
  },
  {
    title: "Leadership Growth",
    duration: "With experience",
    focus:
      "Manager → senior manager → leadership roles, depending on performance and domain expertise.",
  },
];

const WHO_SHOULD_DO = [
  {
    title: "Graduates who want management/leadership roles",
    desc: "MBA suits those aiming for business decision-making roles beyond entry-level jobs.",
    icon: Briefcase,
  },
  {
    title: "Students who can commit to internships + networking",
    desc: "MBA outcomes depend heavily on internships, networking and placement readiness.",
    icon: Handshake,
  },
  {
    title: "Students who want domain specialisation",
    desc: "Choose a track like marketing/finance/HR/ops and build depth through projects.",
    icon: ShieldCheck,
  },
  {
    title: "Working professionals planning career switch",
    desc: "MBA can support switches (role/domain) if you build the right profile and skills.",
    icon: Users,
  },
];

const SPECIALISATIONS = [
  { title: "Marketing", desc: "Branding, sales leadership, digital marketing, growth roles.", icon: Megaphone },
  { title: "Finance", desc: "Corporate finance, banking, analyst roles, investments (skills matter).", icon: LineChart },
  { title: "HR", desc: "Recruitment, HR operations, talent management, people strategy.", icon: UserRound },
  { title: "Operations", desc: "Supply chain, process improvement, operations management.", icon: Settings },
];

const TYPICAL_ROLES = [
  "Management Trainee / Graduate Trainee",
  "Business Development / Sales Manager (entry level)",
  "Marketing Executive / Brand roles (entry level)",
  "Business Analyst (entry level, skill-dependent)",
  "HR Executive / HR Operations (entry level)",
  "Operations Executive / Process roles (entry level)",
];

const WORK_SETTINGS = [
  {
    title: "Corporate Companies",
    desc: "Management trainee roles across marketing, finance, HR and operations.",
    icon: Briefcase,
  },
  {
    title: "Banks & Financial Services",
    desc: "Finance/relationship roles, operations and management roles (profile dependent).",
    icon: LineChart,
  },
  {
    title: "Startups",
    desc: "Fast growth roles with broader responsibilities (performance-driven).",
    icon: Megaphone,
  },
  {
    title: "Consulting / Services",
    desc: "Process, strategy, business analysis and client roles (profile dependent).",
    icon: Handshake,
  },
];

const ELIGIBILITY_NOTES = [
  "Typically after graduation (any stream) — eligibility rules vary by institute and exam.",
  "Admissions are usually entrance-based (national/state/university exams) followed by GD/PI rounds (varies).",
  "MBA and PGDM are both management programmes; structures and approval bodies can differ by institute.",
  "Always verify official exam/institute notifications before applying.",
];

const COMMON_DOCS = [
  "Graduation marksheets + degree/provisional certificate",
  "Entrance scorecard (if applicable)",
  "Class 10 & 12 marksheets (often required for admission records)",
  "ID proof (Aadhaar etc.)",
  "Photo + signature",
  "Category/EWS/Income certificate (if applicable)",
  "Work experience proof (if applicable)",
];

const BUILD_PROFILE = [
  "Communication + presentation skills (non-negotiable)",
  "Excel + basic analytics (PowerPoint + reporting)",
  "Internship mindset: choose projects that match your target role",
  "Networking + resume + interview practice",
  "Basic business reading habit (industry awareness)",
  "If finance track: strengthen accounting + basics of valuation (as per level)",
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
   Route: /courses/mba
------------------------------------------------------------- */

export default function MBAPage() {
  const snapshot = useMemo(
    () => [
      { k: "Course type", v: "PG Management Programme (MBA/PGDM)" },
      { k: "Duration", v: "Typically 2 Years" },
      { k: "Eligibility", v: "Graduation (criteria varies)" },
      { k: "Best for", v: "Management roles • leadership • career switch" },
      { k: "Reality check", v: "College + profile + internships decide outcome" },
    ],
    []
  );

  return (
    <>
    <FrontendLayout>
      <HeroInner title="MBA / PGDM" breadcrumb="Business & Management → MBA / PGDM" />
      <CoursesTabsBar tabs={TABS} activeId="mba" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Briefcase size={18} className="text-primary" />
                <span>About MBA / PGDM</span>
              </h2>

              <p className="sectionSub">
                MBA/PGDM are postgraduate management programmes designed to build business leadership, strategy and
                professional readiness for management roles. You typically choose a specialisation such as marketing,
                finance, HR or operations.
              </p>

              <p className="sectionSub mb-0">
                MBA outcomes depend heavily on your institute quality, internships, projects, communication skills and
                placement preparation.
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
                  Your first job role depends on institute + internship + communication. MBA is not a magic guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) MBA LADDER */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="MBA / PGDM career ladder"
            subtitle="MBA builds a management base. Internships and projects shape your placement role."
          />

          <div className="row g-3">
            {MBA_LADDER.map((c) => (
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
            Tip: Choose your target role early (marketing/finance/HR/ops) and align internship + projects to it.
          </div>
        </div>
      </section>

      {/* 3) WHO SHOULD DO MBA */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="Who should do MBA"
            subtitle="MBA is best when you have clear goals and are ready for intensive placement preparation."
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

      {/* 4) SPECIALISATIONS */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={Briefcase}
            title="Popular specialisations"
            subtitle="Specialisation options vary by institute, but these are common tracks."
          />

          <div className="row g-3">
            {SPECIALISATIONS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="col-12 col-md-6 col-lg-3">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1 d-flex align-items-center gap-2">
                      <Icon size={16} className="text-primary" />
                      <span>{s.title}</span>
                    </h3>
                    <p className="small text-muted mb-0">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5) ROLES + WORK SETTINGS */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Typical roles & work settings"
            subtitle="Your role depends on specialisation + internship + placement performance."
          />

          <div className="row g-4 align-items-stretch">
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

            <div className="col-12 col-lg-6 d-flex">
              <div className="sectionCard h-100">
                <h3 className="h6 mb-3">Work settings</h3>
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

      {/* 6) ADMISSION + DOCUMENTS */}
      <section className="py-4 py-md-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Admissions & documents"
            subtitle="Admissions are usually exam + interview based. Keep this checklist ready."
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
                  <span className="fw-semibold text-white">Reminder:</span> entrance processes differ across MBA exams and institutes.
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
            Tip: Shortlist colleges based on placements, specialisation strength, alumni outcomes and internship support.
          </div>
        </div>
      </section>

      {/* 7) BUILD YOUR PROFILE */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Build your profile during MBA"
            subtitle="MBA is a placement-driven programme. Your profile-building must be intentional."
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
            Sensible shortcut: choose a specialisation early + build projects/internships in that domain + practice interviews weekly.
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
