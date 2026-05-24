"use client";

import React, { useMemo } from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import {
  Stethoscope,
  HeartPulse,
  Layers3,
  GraduationCap,
  ClipboardList,
  ShieldCheck,
  Hospital,
  Users,
} from "lucide-react";

/* -------------------------------------------------------------
   DATA – Career Book aligned (Doctor pathway)
------------------------------------------------------------- */

const COURSE_LADDER = [
  {
    title: "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
    duration: "4.5 Years",
    focus:
      "Foundation of medical sciences, clinical diagnosis, patient care and hospital-based training.",
  },
  {
    title: "Compulsory Rotatory Internship",
    duration: "1 Year",
    focus:
      "Hands-on rotational training across Medicine, Surgery, OBG, Paediatrics, Emergency and allied departments.",
  },
  {
    title: "Postgraduate Medical Degree (MD / MS)",
    duration: "3 Years",
    focus:
      "Clinical specialisation such as Medicine, Surgery, Paediatrics, Orthopaedics, OBG, Psychiatry etc.",
  },
  {
    title: "Super Specialisation (DM / MCh)",
    duration: "3 Years",
    focus:
      "Advanced super-speciality training such as Cardiology, Neurology, Gastroenterology, Neurosurgery etc.",
  },
];

const ELIGIBILITY_NOTES = [
  "Class 12 passed with Physics, Chemistry and Biology (PCB).",
  "Must qualify NEET (UG) as per current regulations.",
  "Age, category and reservation norms apply as notified.",
  "Medical fitness is mandatory for admission.",
];

const CORE_SUBJECTS = [
  "Anatomy, Physiology, Biochemistry",
  "Pathology, Pharmacology, Microbiology",
  "Forensic Medicine & Community Medicine",
  "Medicine, Surgery, Paediatrics",
  "Obstetrics & Gynaecology",
  "Orthopaedics, Psychiatry, Dermatology, Anaesthesia",
];

const WORK_SETTINGS = [
  {
    title: "Government Hospitals",
    desc: "Medical Officer, Resident Doctor, Specialist roles through state/central services.",
  },
  {
    title: "Private Hospitals",
    desc: "Clinical practice, emergency care, ICU, speciality departments.",
  },
  {
    title: "Medical Colleges",
    desc: "Teaching, training, academic medicine (after PG).",
  },
  {
    title: "Public Health & Administration",
    desc: "Health services, programmes, policy and administration (with experience).",
  },
];

const BUILD_PROFILE = [
  "Strong academic foundation + disciplined study routine",
  "Serious clinical exposure during postings & internship",
  "Communication skills and ethical patient handling",
  "Stress management and long-hour work readiness",
  "Early clarity on PG specialisation goals",
];

/* -------------------------------------------------------------
   UI Helpers
------------------------------------------------------------- */

function SectionHeader({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-4 text-center text-lg-start">
      <h2 className="sectionHeading mb-2 d-flex align-items-center gap-2 justify-content-center justify-content-lg-start">
        {Icon && <Icon size={18} className="text-primary" />}
        <span>{title}</span>
      </h2>
      {subtitle && (
        <p className="sectionSub mb-0" style={{ maxWidth: "90ch" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------
   PAGE
------------------------------------------------------------- */

export default function MBBSCoursesPage() {
  const snapshot = useMemo(
    () => [
      { k: "Degree type", v: "Core Medical (Doctor) Degree" },
      { k: "Duration", v: "4.5 Years + 1 Year Internship" },
      { k: "Entrance exam", v: "NEET (UG)" },
      { k: "Next levels", v: "MD / MS → DM / MCh" },
      { k: "Reality check", v: "PG specialisation decides growth" },
    ],
    []
  );

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="MBBS & Core Medical Degrees"
        breadcrumb="Medical & Paramedical → MBBS"
      />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <HeartPulse size={18} className="text-primary" />
                <span>About MBBS</span>
              </h2>

              <p className="sectionSub">
                MBBS is the primary medical degree required to become a doctor in
                India. It focuses on diagnosis, treatment, patient care and
                clinical decision-making across all major medical disciplines.
              </p>

              <p className="sectionSub mb-0">
                It is a long and demanding journey, where real career growth
                comes after postgraduate specialisation and sustained clinical
                experience.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <dl className="row small mb-0">
                  {snapshot.map((s, i) => (
                    <React.Fragment key={i}>
                      <dt className="col-5">{s.k}</dt>
                      <dd className="col-7 mb-2">{s.v}</dd>
                    </React.Fragment>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) COURSE LADDER */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="Doctor career ladder"
            subtitle="MBBS is the foundation. Senior authority comes after postgraduate and super-specialisation."
          />

          <div className="row g-3">
            {COURSE_LADDER.map((c) => (
              <div key={c.title} className="col-12 col-md-6">
                <div className="sectionCard h-100">
                  <h3 className="h6 mb-1">{c.title}</h3>
                  <p className="small text-muted mb-1">{c.duration}</p>
                  <p className="small text-muted mb-0">{c.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3) ELIGIBILITY & STUDY */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="Eligibility & core subjects"
            subtitle="Rules may change; always verify official notifications."
          />

          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <div className="nitDarkGlassBox">
                <ul className="nitDarkList mb-0">
                  {ELIGIBILITY_NOTES.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3">Major subjects covered</h3>
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
          </div>
        </div>
      </section>

      {/* 4) WHERE DOCTORS WORK */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={Hospital}
            title="Where doctors work"
            subtitle="Your role depends on qualification, PG specialisation and experience."
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

      {/* 5) BUILD YOUR PROFILE */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Build your profile during MBBS"
            subtitle="Marks matter, but discipline, ethics and clinical seriousness matter more."
          />

          <div className="row g-3">
            {BUILD_PROFILE.map((b) => (
              <div key={b} className="col-12 col-md-6 col-lg-4">
                <div className="sectionCard h-100">
                  <h3 className="h6 mb-1">Key focus</h3>
                  <p className="small text-muted mb-0">{b}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            MBBS is not a shortcut career. Commitment, patience and postgraduate
            planning decide long-term success.
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
