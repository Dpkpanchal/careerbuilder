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
} from "lucide-react";

/* -------------------------------------------------------------
   DATA (Career Book aligned – UG Paramedical after 10+2)
   - No links (portal pattern)
------------------------------------------------------------- */

const UG_LADDER = [
  {
    title: "UG Paramedical Degree (After 10+2)",
    duration: "Typically 3–4 Years (varies by course)",
    focus:
      "Degree-level training for allied health roles: diagnostics, therapy, imaging, emergency and clinical support.",
  },
  {
    title: "Internship / Clinical Training",
    duration: "As per course norms",
    focus:
      "Hands-on hospital/clinic exposure in labs, wards, diagnostic centres, rehabilitation units, OT, imaging etc.",
  },
  {
    title: "Work + Specialised Certifications",
    duration: "On-the-job (continuous)",
    focus:
      "Skill upgrades in specialised tools, protocols and clinical systems to strengthen employability.",
  },
  {
    title: "PG Paramedical / Specialisation",
    duration: "1–2 Years (varies)",
    focus:
      "Advanced learning in chosen domain for senior roles, teaching, research and specialised departments.",
  },
];

const ELIGIBILITY_NOTES = [
  "Class 12 passed (Science is commonly preferred; exact subject rules vary by course).",
  "Some courses may require PCB/PCM; others accept any stream — verify institute norms.",
  "Admissions can be merit-based or entrance-based depending on university/state rules.",
  "Medical fitness requirements may apply (course/institute-wise).",
];

const UG_COURSE_OPTIONS = [
  {
    name: "B.Sc Medical Laboratory Technology (BMLT / B.Sc MLT)",
    notes: "Advanced lab diagnostics, pathology workflow, quality control, reporting systems.",
  },
  {
    name: "B.Sc Radiology & Imaging Technology",
    notes: "Imaging systems support (X-ray/CT/MRI workflow basics as per training), patient safety protocols.",
  },
  {
    name: "B.Sc Operation Theatre & Anaesthesia Technology",
    notes: "OT systems, sterilisation, instrument management, anaesthesia support workflow (as per course scope).",
  },
  {
    name: "Bachelor of Physiotherapy (BPT) / B.Sc Physiotherapy",
    notes: "Rehabilitation, therapy techniques, sports/ortho support; physiotherapy is a major allied health career.",
  },
  {
    name: "B.Sc Dialysis Technology",
    notes: "Dialysis unit operations support, patient monitoring, infection control and safety protocols.",
  },
  {
    name: "B.Sc Optometry",
    notes: "Eye testing, vision care support, optical systems; works with eye hospitals/clinics.",
  },
  {
    name: "B.Sc Emergency & Trauma Care / Critical Care (course names vary)",
    notes: "Emergency response basics, trauma support, ICU workflow understanding (varies by institute).",
  },
  {
    name: "B.Sc Cardiac Care / Respiratory Care (course names vary)",
    notes: "Support roles in cardiac/respiratory units; eligibility and scope vary by institute norms.",
  },
];

const SPECIALISATION_AREAS = [
  "Advanced Lab Diagnostics & Quality",
  "CT / MRI workflow specialisation (as per role rules)",
  "ICU / Critical Care support systems",
  "Rehabilitation focus (Neuro/Ortho/Sports)",
  "Hospital infection control & patient safety",
];

const WORK_SETTINGS = [
  {
    title: "Hospitals & Multi-speciality Centres",
    desc: "Allied health departments: lab, imaging, OT support, physiotherapy, dialysis, emergency support.",
  },
  {
    title: "Diagnostic Labs & Pathology Centres",
    desc: "Testing, reporting systems, quality control, sample processing (lab routes).",
  },
  {
    title: "Imaging & Radiology Centres",
    desc: "Imaging support departments (radiology routes) under centre protocols.",
  },
  {
    title: "Rehab & Physiotherapy Clinics",
    desc: "Therapy and rehabilitation services, sports injury support, home-care rehab setups.",
  },
];

const ADMISSION_NOTES = [
  "Prefer recognised institutions with hospital tie-ups and strong practical training.",
  "Check curriculum, internship/clinical exposure, and lab/equipment availability before joining.",
  "Be careful of ‘shortcuts’ or unverified course titles — confirm recognition and scope.",
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
  "Strong basics in biology + healthcare communication",
  "Comfort with practical work, instruments, protocols and hygiene",
  "Basic computer skills (reports, EMR, billing/records)",
  "Teamwork mindset (you work alongside doctors & nurses)",
  "Long-term plan: PG/specialisation for senior roles and growth",
];

/* -------------------------------------------------------------
   UI Helpers (match Nursing/MBBS pages)
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

export default function UGParamedicalPage() {
  const snapshot = useMemo(
    () => [
      { k: "Who it’s for", v: "Students after Class 12 (10+2)" },
      { k: "Degree duration", v: "Typically 3–4 Years (varies)" },
      { k: "Core areas", v: "Lab • Imaging • OT • Physio • Dialysis" },
      { k: "Work settings", v: "Hospitals • Labs • Rehab • Imaging centres" },
      { k: "Reality check", v: "Internship + skills decide placement quality" },
    ],
    []
  );

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="UG Paramedical Degrees (After 10+2)"
        breadcrumb="Medical & Paramedical → UG Paramedical"
      />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <HeartPulse size={18} className="text-primary" />
                <span>About UG Paramedical Degrees</span>
              </h2>

              <p className="sectionSub">
                UG paramedical degrees (after Class 12) prepare students for professional allied health roles that support
                diagnosis, treatment, rehabilitation and clinical services. These careers work closely with doctors,
                nurses, laboratories, imaging departments, OT and therapy units.
              </p>

              <p className="sectionSub mb-0">
                Compared to short diplomas, UG degrees offer broader training and stronger long-term growth—especially if
                you build practical skills and plan a PG/specialisation later.
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
                  Eligibility and course names can differ across universities. Always verify exact subject requirement,
                  internship structure and recognition before applying.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) UG LADDER */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="UG paramedical ladder"
            subtitle="Start with a degree route, take internships seriously, then specialise for senior roles."
          />

          <div className="row g-3">
            {UG_LADDER.map((c) => (
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
            Tip: Choose a domain (Lab/Imaging/Physio/OT/Dialysis) early and build deep practical skill in it.
          </div>
        </div>
      </section>

      {/* 3) ELIGIBILITY */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="Eligibility (common patterns)"
            subtitle="Confirm exact criteria from your target institution before you apply."
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
                  Students who like practical healthcare work, can handle instruments/protocols, and want a stable allied
                  health career with scope to grow through specialisation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) COMMON UG OPTIONS */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={Activity}
            title="Popular UG paramedical degree options"
            subtitle="These are commonly found across universities. Availability differs by state and institution."
          />

          <div className="row g-3">
            {UG_COURSE_OPTIONS.map((x) => (
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
            Note: Course titles differ (B.Sc / Bachelor). Focus on curriculum + internship + practical exposure.
          </div>
        </div>
      </section>

      {/* 5) SPECIALISATION AREAS */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="Specialisation directions (for growth)"
            subtitle="These are growth directions you can aim for with experience + certifications/PG."
          />

          <div className="row g-3">
            {SPECIALISATION_AREAS.map((s) => (
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
            title="Where you can work"
            subtitle="Your role scope depends on your degree, internship quality and employer policy."
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
            subtitle="Keep this practical checklist ready."
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
            Tip: Before paying fees, check labs/equipment, internship tie-ups, and real student outcomes.
          </div>
        </div>
      </section>

      {/* 8) BUILD YOUR PROFILE */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Build your profile during UG"
            subtitle="Degree-level skills + discipline make you employable and growth-ready."
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
            Sensible shortcut: pick a domain early, become excellent at practical work, then plan PG/specialisation for senior roles.
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
