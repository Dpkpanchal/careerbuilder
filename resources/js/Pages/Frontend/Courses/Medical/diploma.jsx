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
} from "lucide-react";

/* -------------------------------------------------------------
   DATA (Career Book aligned – Paramedical diploma after Class 10)
   - No links (as per your pattern)
------------------------------------------------------------- */

const DIPLOMA_LADDER = [
  {
    title: "Diploma / Certificate (After Class 10)",
    duration: "6 Months – 2 Years (varies by course)",
    focus:
      "Job-oriented healthcare support skills: lab, radiology, OT support, emergency care, pharmacy assistance, etc.",
  },
  {
    title: "Work + Skill Upgrade",
    duration: "On-the-job (continuous)",
    focus:
      "Early employment in hospitals/clinics/diagnostic centres while upgrading skills and certifications.",
  },
  {
    title: "Higher Entry Options (After 10+2)",
    duration: "UG Degree routes (varies)",
    focus:
      "Students can move to UG paramedical degrees after completing Class 12 (and eligibility rules).",
  },
  {
    title: "PG / Specialised Training (After UG)",
    duration: "1–2 Years (varies)",
    focus:
      "Advanced specialisations (e.g., advanced imaging, lab specialities, hospital admin support).",
  },
];

const ELIGIBILITY_NOTES = [
  "Class 10 pass (some institutes may require minimum marks).",
  "Age and medical fitness criteria may apply (varies by institute).",
  "Admissions can be merit-based or institute/board-based (as per local rules).",
  "Always verify the exact course name + recognition status before joining.",
];

const COMMON_DIPLOMA_OPTIONS = [
  {
    name: "DMLT (Diploma in Medical Laboratory Technology)",
    notes:
      "Lab sample collection, testing support, reporting basics; works in pathology labs/diagnostic centres.",
  },
  {
    name: "Radiology / Imaging Assistant (Diploma)",
    notes:
      "Supports X-ray/Imaging departments; exact role depends on institute training and rules.",
  },
  {
    name: "OT Technician / OT Assistant (Diploma)",
    notes:
      "Operation theatre assistance, instrument handling basics, sterilisation protocols (as trained).",
  },
  {
    name: "Emergency / First Aid / Basic Patient Care (Certificate/Diploma)",
    notes:
      "Entry-level patient care and emergency support skills (course scope varies widely).",
  },
  {
    name: "Dialysis Technician (Some centres offer after 10; many prefer 10+2)",
    notes:
      "Kidney dialysis unit support (eligibility depends on institute norms).",
  },
  {
    name: "Physiotherapy Assistant (Certificate/Diploma)",
    notes:
      "Assists physiotherapy sessions under supervision; full physiotherapy degree is separate.",
  },
];

const WORK_SETTINGS = [
  {
    title: "Hospitals & Nursing Homes",
    desc: "Entry roles in lab support, OT support, patient care support, emergency support (as per training).",
  },
  {
    title: "Diagnostic Labs",
    desc: "Lab technician assistant roles, sample collection, reporting support (scope depends on course).",
  },
  {
    title: "Imaging & Radiology Centres",
    desc: "Support roles in imaging/X-ray departments (as per certification and centre policy).",
  },
  {
    title: "Community & Outreach",
    desc: "Basic health support roles in camps, outreach programs and primary health initiatives (where applicable).",
  },
];

const ADMISSION_NOTES = [
  "Choose only recognised institutes and verify course scope and placement support.",
  "Do not join ‘fancy named’ courses without checking curriculum, practical training and certification validity.",
  "Prefer courses with strong hands-on practical exposure and hospital tie-ups.",
];

const COMMON_DOCS = [
  "Class 10 marksheet",
  "ID proof (Aadhaar etc.)",
  "Photo + signature",
  "Category/EWS/Income certificate (if applicable)",
  "Domicile (if required)",
  "Medical fitness certificate (if asked by institute)",
];

const BUILD_PROFILE = [
  "Discipline + hygiene + safety mindset (infection control basics)",
  "Communication skills for patient interaction and teamwork",
  "Basic computer skills (reports, documentation, billing systems)",
  "Serious practical learning (real skill > certificate)",
  "Upgrade plan: Class 12 + UG degree later for higher growth",
];

/* -------------------------------------------------------------
   UI Helpers (same style as Nursing/MBBS pages)
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

export default function ParamedicalDiplomaPage() {
  const snapshot = useMemo(
    () => [
      { k: "Who it’s for", v: "Students after Class 10 who want early healthcare entry" },
      { k: "Typical duration", v: "6 Months – 2 Years (varies)" },
      { k: "Common areas", v: "Lab • OT • Radiology • Patient care support" },
      { k: "Work settings", v: "Hospitals • Labs • Imaging centres" },
      { k: "Reality check", v: "Practical training decides employability" },
    ],
    []
  );

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Diploma Paramedical Courses (After 10)"
        breadcrumb="Medical & Paramedical → Diploma Paramedical"
      />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <HeartPulse size={18} className="text-primary" />
                <span>About Paramedical Diplomas (After 10)</span>
              </h2>

              <p className="sectionSub">
                Paramedical diploma and certificate courses allow students to enter the healthcare ecosystem early—usually
                in support roles that assist doctors, nurses and hospital departments like laboratories, imaging,
                operation theatre and patient care services.
              </p>

              <p className="sectionSub mb-0">
                These are practical, job-oriented routes. The best outcomes come when you choose a recognised institute,
                take hands-on training seriously, and plan your next upgrades (Class 12 → UG degree) for long-term growth.
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

              {/* Small note box (no links) */}
              <div className="sectionCard bg-light border mt-3">
                <h3 className="h6 mb-2 d-flex align-items-center gap-2">
                  <BadgeCheck size={18} className="text-primary" />
                  <span>Important note</span>
                </h3>
                <p className="small text-muted mb-0">
                  Course names and eligibility can vary widely across institutes. Always verify recognition, curriculum,
                  practical training and placement support before admission.
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
            title="Paramedical ladder (from Class 10 onwards)"
            subtitle="Start with a diploma/certificate, gain experience, then upgrade to higher qualifications for better roles."
          />

          <div className="row g-3">
            {DIPLOMA_LADDER.map((c) => (
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
            Tip: If you want higher growth, complete Class 12 and plan for an UG paramedical degree later.
          </div>
        </div>
      </section>

      {/* 3) COMMON DIPLOMA OPTIONS */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="Popular diploma/entry-level paramedical options"
            subtitle="Exact course availability depends on your district/state and the institute. Use this as a career map."
          />

          <div className="row g-3">
            {COMMON_DIPLOMA_OPTIONS.map((x) => (
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
            Note: Some specialisations are offered after 10+2 in many institutes. Always confirm eligibility before applying.
          </div>
        </div>
      </section>

      {/* 4) WORK SETTINGS */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={Hospital}
            title="Where you can work"
            subtitle="Work environment and role scope depend on your course quality, practical training and employer policy."
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

      {/* 5) ADMISSION & DOCUMENTS */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Admission & Documents"
            subtitle="A practical checklist to reduce last-minute confusion."
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
            Warning: Avoid institutes that promise “guaranteed job” without real hospital tie-up and practical training.
          </div>
        </div>
      </section>

      {/* 6) BUILD YOUR PROFILE */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Build your profile during a diploma"
            subtitle="In paramedical roles, your attitude + practical skill makes you employable."
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
            Sensible shortcut: pick one core skill area (Lab/OT/Imaging), build strong basics, then upgrade to a UG degree for better growth.
          </div>
        </div>
      </section>

      </FrontendLayout>
    </>
  );
}
