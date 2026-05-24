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
  Pill,
  FlaskConical,
  Factory,
} from "lucide-react";

/* -------------------------------------------------------------
   DATA – Pharmacy (D.Pharm / B.Pharm / M.Pharm / Pharm.D)
   Career-book aligned overview page for /courses/medical/pharmacy
   - No links (portal pattern)
------------------------------------------------------------- */

const PHARMACY_LADDER = [
  {
    title: "D.Pharm (Diploma in Pharmacy)",
    duration: "2 Years",
    focus:
      "Entry route for pharmacy practice basics: dispensing, medicines handling, pharmacy operations (as per norms).",
    next: "Register (as per rules) → job + upgrade to B.Pharm (where applicable)",
  },
  {
    title: "B.Pharm (Bachelor of Pharmacy)",
    duration: "4 Years",
    focus:
      "Core pharmacy degree: pharmaceutics, pharmacology, medicinal chemistry, pharma analysis, clinical basics.",
    next: "Industry / hospital / retail → M.Pharm or MBA/other specialisations",
  },
  {
    title: "M.Pharm (Master of Pharmacy)",
    duration: "2 Years",
    focus:
      "Specialisation for research, quality, formulation, regulatory, clinical pharmacy (as per institute options).",
    next: "Senior industry roles, research, teaching (as per eligibility), further study",
  },
  {
    title: "Pharm.D (Doctor of Pharmacy)",
    duration: "6 Years (5 years study + 1 year internship/clinical training) • (or 3-year PB route after B.Pharm as per norms)",
    focus:
      "Strong clinical/pharmacy practice route with hospital exposure, patient medication management and clinical training.",
    next: "Clinical pharmacy roles, hospital track, higher studies/research (as per pathway)",
  },
];

const ELIGIBILITY_NOTES = [
  "D.Pharm: Usually after Class 12 (Science preferred in many institutes) — verify institute norms.",
  "B.Pharm: After Class 12 (commonly PCM/PCB as per institute rules).",
  "M.Pharm: After B.Pharm (relevant specialisation options vary).",
  "Pharm.D: After Class 12 (PCB/PCM rules vary) or Post Baccalaureate route after B.Pharm (as per norms).",
  "Admission may be merit-based or entrance-based depending on state/university/institute.",
];

const CORE_AREAS = [
  "Pharmaceutics (formulation & dosage forms)",
  "Pharmacology (drug action & effects)",
  "Medicinal Chemistry",
  "Pharmaceutical Analysis & Quality",
  "Clinical Pharmacy & Hospital Pharmacy (more in Pharm.D / clinical tracks)",
  "Regulatory, Ethics & Pharmacy Practice basics",
];

const WORK_SETTINGS = [
  {
    title: "Retail / Community Pharmacy",
    desc: "Dispensing, inventory, patient counselling basics, pharmacy operations (as per regulations).",
    icon: Pill,
  },
  {
    title: "Hospital Pharmacy / Clinical Support",
    desc: "Medication management support, ward supply chain, clinical pharmacy roles (stronger for Pharm.D / PG).",
    icon: Hospital,
  },
  {
    title: "Pharmaceutical Industry",
    desc: "Manufacturing, formulation, QC/QA, R&D support, regulatory affairs, supply chain.",
    icon: Factory,
  },
  {
    title: "Research / Academics (with PG + norms)",
    desc: "Research projects, lab work, teaching/training track in eligible institutions.",
    icon: FlaskConical,
  },
];

const SPECIALISATIONS = [
  "Pharmaceutics (Formulation)",
  "Pharmacology",
  "Pharmaceutical Chemistry",
  "Pharmaceutical Analysis (QA/QC)",
  "Clinical Pharmacy / Hospital Pharmacy (where offered)",
  "Regulatory Affairs (career direction; course availability varies)",
];

const ADMISSION_NOTES = [
  "Choose recognised institutions with proper labs, practical exposure and internship tie-ups.",
  "Industry roles often prefer strong fundamentals + practical lab skills (QC/QA/formulation).",
  "Clinical/hospital roles are stronger for Pharm.D and relevant PG pathways.",
  "Avoid unverified course names; confirm curriculum and scope before admission.",
];

const COMMON_DOCS = [
  "Class 10 & 12 marksheets",
  "ID proof (Aadhaar etc.)",
  "Photo + signature",
  "Category/EWS/Income certificate (if applicable)",
  "Domicile (if required)",
  "Medical fitness certificate (if asked by institute)",
];

const BUILD_PROFILE = [
  "Strong basics in chemistry + biology (as relevant to your course)",
  "Lab discipline: accuracy, documentation, safety protocols",
  "Basic computer skills (inventory systems, reporting, data handling)",
  "Communication skills (patient counselling / team coordination)",
  "Pick a direction early: Industry (QC/QA/R&D) vs Clinical (hospital) vs Retail",
];

/* -------------------------------------------------------------
   UI Helpers (match your portal patterns)
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
   Use as: /courses/medical/pharmacy
------------------------------------------------------------- */

export default function PharmacyCoursesPage() {
  const snapshot = useMemo(
    () => [
      { k: "Main routes", v: "D.Pharm • B.Pharm • M.Pharm • Pharm.D" },
      { k: "Entry point", v: "After Class 12 (commonly Science)" },
      { k: "Core sectors", v: "Retail • Hospital • Industry • Research" },
      { k: "Best strategy", v: "Choose a direction early (clinical vs industry)" },
      { k: "Reality check", v: "Practical skills + exposure decide growth" },
    ],
    []
  );

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Pharmacy (D.Pharm / B.Pharm / M.Pharm / Pharm.D)"
        breadcrumb="Medical & Paramedical → Pharmacy"
      />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <HeartPulse size={18} className="text-primary" />
                <span>About Pharmacy Courses</span>
              </h2>

              <p className="sectionSub">
                Pharmacy is a healthcare and life-science career focused on medicines—how they are prepared, tested,
                manufactured, regulated and used safely for patients. Pharmacy professionals work across retail and
                hospital settings as well as pharmaceutical industry and research.
              </p>

              <p className="sectionSub mb-0">
                The field offers multiple ladders: D.Pharm for quick entry, B.Pharm as the main degree route, M.Pharm for
                specialisation and Pharm.D for stronger clinical/hospital exposure.
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
                  Eligibility and admissions vary by institute/state/university. Always check official notifications and
                  recognition before admission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) PHARMACY LADDER */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="Pharmacy course ladder"
            subtitle="Start from the level you are eligible for, then move upward for better roles and specialisation."
          />

          <div className="row g-3">
            {PHARMACY_LADDER.map((c) => (
              <div key={c.title} className="col-12 col-md-6">
                <div className="sectionCard h-100">
                  <h3 className="h6 mb-1">{c.title}</h3>
                  <p className="small text-muted mb-1">{c.duration}</p>
                  <p className="small text-muted mb-2">{c.focus}</p>
                  <p className="small text-muted mb-0">
                    <span className="fw-semibold text-dark">Next:</span> {c.next}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Tip: If you want hospital/clinical roles, explore Pharm.D or clinical-focused PG options. If you want industry,
            build strong lab + QC/QA fundamentals.
          </div>
        </div>
      </section>

      {/* 3) ELIGIBILITY + CORE AREAS */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="Eligibility & core study areas"
            subtitle="Course rules vary by institute. Use this as a practical guide."
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
                <h3 className="h6 mb-3">Core areas you study</h3>
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
          </div>
        </div>
      </section>

      {/* 4) WORK SETTINGS */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={Hospital}
            title="Where pharmacy professionals work"
            subtitle="Your pathway (retail vs hospital vs industry) defines your skills and growth."
          />

          <div className="row g-3">
            {WORK_SETTINGS.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="col-12 col-md-6 col-lg-3">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1 d-flex align-items-start gap-2">
                      <Icon size={20} className="text-primary flex-shrink-0" />
                      <span>{w.title}</span>
                    </h3>
                    <p className="small text-muted mb-0 mt-2">{w.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Reality check: Industry roles usually prefer strong practical lab skills. Hospital/clinical roles prefer clinical exposure.
          </div>
        </div>
      </section>

      {/* 5) SPECIALISATIONS */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={Activity}
            title="Specialisations (mainly at PG level)"
            subtitle="Specialisation availability depends on university and institute options."
          />

          <div className="row g-3">
            {SPECIALISATIONS.map((s) => (
              <div key={s} className="col-12 col-md-6 col-lg-4">
                <div className="sectionCard h-100">
                  <h3 className="h6 mb-1">M.Pharm / PG focus</h3>
                  <p className="small text-muted mb-0">{s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6) ADMISSION & DOCUMENTS */}
      <section className="py-4 py-md-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Admission & Documents"
            subtitle="Keep this checklist ready and choose institutes carefully."
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
            Tip: Ask about labs, internships, industry/hospital tie-ups, and real placement outcomes before paying fees.
          </div>
        </div>
      </section>

      {/* 7) BUILD YOUR PROFILE */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Build your profile in pharmacy"
            subtitle="Your direction decides what you should focus on: retail, hospital or industry."
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
            Sensible shortcut: Decide your track early — Industry (QC/QA/R&D) or Clinical (hospital) — then build deep proof through projects/internships.
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
