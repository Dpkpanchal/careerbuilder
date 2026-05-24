"use client";

import React, { useMemo } from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import {
  Layers3,
  HeartPulse,
  GraduationCap,
  ClipboardList,
  ShieldCheck,
  Hospital,
  Users,
  Building2,
  Activity,
  BadgeCheck,
  BookOpen,
  Award,
} from "lucide-react";

/* -------------------------------------------------------------
   DATA (Career Book aligned – PG Paramedical)
   - No links (portal pattern)
------------------------------------------------------------- */

const PG_LADDER = [
  {
    title: "PG Paramedical (After UG Degree)",
    duration: "Typically 1–2 Years (varies by course/university)",
    focus:
      "Advanced learning in a chosen allied health domain for higher responsibility and specialised departments.",
  },
  {
    title: "Clinical / Departmental Specialisation",
    duration: "During course + internships/fieldwork",
    focus:
      "Work in specialised units (advanced labs, imaging, rehab, ICU support systems) as per course structure.",
  },
  {
    title: "Senior Roles / Teaching / Research (with experience)",
    duration: "Long-term progression",
    focus:
      "Supervision, quality control, training roles, academic pathway and research support (in suitable institutions).",
  },
];

const ELIGIBILITY_NOTES = [
  "A relevant UG paramedical degree is required (course-specific).",
  "Some PG programmes prefer internship/clinical experience before admission.",
  "Admission can be merit-based or entrance-based depending on university rules.",
  "Registration/medical fitness/document requirements vary by institute.",
];

const COMMON_PG_OPTIONS = [
  {
    name: "M.Sc Medical Laboratory Technology (M.Sc MLT) / MMLT",
    notes:
      "Advanced diagnostics, lab management, quality systems, specialised pathology/microbiology workflows (as per syllabus).",
  },
  {
    name: "M.Sc Radiology & Imaging Technology",
    notes:
      "Advanced imaging workflow, patient safety protocols, specialised department exposure (as permitted by course scope).",
  },
  {
    name: "M.Sc Operation Theatre & Anaesthesia Technology",
    notes:
      "Advanced OT systems, protocols, infection control, anaesthesia workflow understanding (as per course norms).",
  },
  {
    name: "MPT (Master of Physiotherapy) / M.Sc Physiotherapy (where applicable)",
    notes:
      "Specialised rehab tracks (neuro/ortho/sports/cardio), clinical decision support under professional scope.",
  },
  {
    name: "M.Sc Dialysis / Renal Care (course names vary)",
    notes:
      "Advanced dialysis unit operations, patient monitoring systems, safety protocols and unit coordination.",
  },
  {
    name: "M.Sc Optometry / Vision Science (where offered)",
    notes:
      "Advanced vision care, clinical optometry systems, special clinic/hospital exposure (as per institute).",
  },
];

const SPECIALISATION_DIRECTIONS = [
  "Advanced lab quality & accreditation workflow (QA/QC)",
  "Special lab domains (microbiology, biochemistry, hematology) — as per institute",
  "Advanced imaging systems workflow (CT/MRI) — as per rules and training",
  "Critical care / ICU support operations (as per role scope)",
  "Rehabilitation specialities (Neuro / Ortho / Sports / Cardio)",
  "Hospital operations: documentation, infection control, patient safety systems",
];

const WORK_SETTINGS = [
  {
    title: "Hospitals (Specialised Departments)",
    desc: "Senior/lead roles in labs, imaging, OT, dialysis, rehab units (scope depends on policy + experience).",
  },
  {
    title: "Diagnostic Chains & Reference Labs",
    desc: "Quality control, advanced testing workflows, reporting systems, supervisory pathways (lab routes).",
  },
  {
    title: "Teaching & Training",
    desc: "Skill labs, paramedical colleges and training roles (as per eligibility and institute norms).",
  },
  {
    title: "Research & Clinical Support",
    desc: "Clinical studies support, data/quality systems, specialised projects in suitable institutions.",
  },
];

const ADMISSION_NOTES = [
  "Choose PG based on your UG domain (Lab/Imaging/Physio/OT/Dialysis/Optometry).",
  "Select institutes with strong clinical tie-ups and real department exposure (not just classroom).",
  "Ask about practical hours, equipment access, and placement outcomes.",
];

const COMMON_DOCS = [
  "UG marksheets + completion certificate",
  "Internship/experience certificate (if applicable)",
  "ID proof (Aadhaar etc.)",
  "Photo + signature",
  "Category/EWS/Income certificate (if applicable)",
  "Domicile (if required)",
  "Medical fitness certificate (if asked by institute)",
];

const BUILD_PROFILE = [
  "Depth in your domain (don’t remain a generalist after PG)",
  "Documentation and reporting skills (quality + accuracy)",
  "Protocol discipline: infection control, safety, ethics",
  "Team leadership and calm behaviour under pressure",
  "Continuous upskilling (new tools, systems, certifications)",
];

/* -------------------------------------------------------------
   UI Helpers (match your Nursing/MBBS/UG pages)
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
------------------------------------------------------------- */

export default function PGParamedicalPage() {
  const snapshot = useMemo(
    () => [
      { k: "Who it’s for", v: "Students after UG paramedical degree" },
      { k: "Duration", v: "Typically 1–2 Years (varies)" },
      { k: "Goal", v: "Specialisation + senior responsibility" },
      { k: "Work settings", v: "Hospitals • Diagnostic chains • Teaching" },
      { k: "Reality check", v: "Depth + practical exposure decide senior growth" },
    ],
    []
  );

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="PG Paramedical Courses"
        breadcrumb="Medical & Paramedical → PG Paramedical"
      />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <HeartPulse size={18} className="text-primary" />
                <span>About PG Paramedical</span>
              </h2>

              <p className="sectionSub">
                PG paramedical programmes help allied health graduates build deeper expertise in a focused domain like
                advanced lab diagnostics, imaging technology, OT systems, dialysis care, physiotherapy specialities and
                more. This is where you move from “support roles” into specialised and senior departmental work.
              </p>

              <p className="sectionSub mb-0">
                The strongest outcomes come from choosing a domain-aligned PG, joining institutes with real clinical
                exposure, and developing leadership + quality discipline for long-term growth.
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
                  <span>Important note</span>
                </h3>
                <p className="small text-muted mb-0">
                  PG titles differ across universities. Always check curriculum, department exposure, eligibility, and
                  the real job scope for your target role.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) PG LADDER */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="PG ladder (for senior growth)"
            subtitle="PG is where you specialise. Depth + real department exposure builds senior-level capability."
          />

          <div className="row g-3">
            {PG_LADDER.map((c) => (
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
            Tip: Choose a PG aligned to your UG domain — and make your clinical exposure your competitive advantage.
          </div>
        </div>
      </section>

      {/* 3) ELIGIBILITY */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="Eligibility (common patterns)"
            subtitle="Eligibility varies by course and university. Confirm before applying."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <BookOpen size={16} />
                  <span>Eligibility notes</span>
                </span>

                <ul className="nitDarkList mb-0">
                  {ELIGIBILITY_NOTES.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-5 d-flex">
              <div className="sectionCard bg-light border w-100">
                <h3 className="h6 mb-3">Best suited for</h3>
                <p className="small text-muted mb-0">
                  Allied health graduates who want specialised roles, better responsibility, stronger hospital
                  departments exposure, and long-term growth into supervisory/teaching tracks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) COMMON PG OPTIONS */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={Award}
            title="Common PG paramedical options"
            subtitle="Exact names differ. Use this to understand direction and career fit."
          />

          <div className="row g-3">
            {COMMON_PG_OPTIONS.map((x) => (
              <div key={x.name} className="col-12 col-md-6 col-lg-4">
                <div className="sectionCard h-100">
                  <div className="d-flex align-items-start gap-2">
                    <Activity size={18} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="h6 mb-1">{x.name}</h3>
                      <p className="small text-muted mb-0">{x.notes}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Note: PG selection should match your UG degree and your target department role.
          </div>
        </div>
      </section>

      {/* 5) SPECIALISATION DIRECTIONS */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="Specialisation directions (career growth)"
            subtitle="Focus areas that commonly lead to senior responsibilities."
          />

          <div className="row g-3">
            {SPECIALISATION_DIRECTIONS.map((s) => (
              <div key={s} className="col-12 col-md-6 col-lg-4">
                <div className="sectionCard h-100">
                  <h3 className="h6 mb-1">Growth focus</h3>
                  <p className="small text-muted mb-0">{s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6) WORK SETTINGS */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={Hospital}
            title="Where you can work after PG"
            subtitle="PG opens senior/lead roles depending on employer policy and your department experience."
          />

          <div className="row g-3">
            {WORK_SETTINGS.map((w) => (
              <div key={w.title} className="col-12 col-md-6 col-lg-3">
                <div className="sectionCard h-100">
                  <h3 className="h6 mb-1">{w.title}</h3>
                  <p className="small text-muted mb-0">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7) ADMISSION & DOCUMENTS */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Admission & Documents"
            subtitle="A practical checklist to avoid last-minute confusion."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Building2 size={16} />
                  <span>Admission basics</span>
                </span>

                <ul className="nitDarkList mb-0">
                  {ADMISSION_NOTES.map((x) => (
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
            Tip: Ask about department postings, equipment access, and who mentors PG students in practical work.
          </div>
        </div>
      </section>

      {/* 8) BUILD YOUR PROFILE */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Build your profile during PG"
            subtitle="PG success is about depth, discipline and clinical maturity."
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
            Sensible shortcut: become a specialist in one domain, build real departmental proof (projects/quality work), then grow into senior/teaching roles.
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
