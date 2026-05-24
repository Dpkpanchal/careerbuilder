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
  Stethoscope,
  Sparkles,
} from "lucide-react";

/* -------------------------------------------------------------
   DATA – Allied Health Sciences (Physio, MLT, Radiology, OT)
   Career-book aligned overview page for /courses/medical
   - No links (as per your ask)
------------------------------------------------------------- */

const ALLIED_DOMAINS = [
  {
    key: "physio",
    title: "Physiotherapy (BPT / MPT)",
    badge: "Therapy & Rehabilitation",
    whatYouDo:
      "Help patients recover movement and function after injury, surgery, neuro conditions, sports issues and chronic pain.",
    commonRoutes: ["BPT (UG)", "MPT (PG specialisation)"],
    whereYouWork: ["Hospitals", "Rehab centres", "Sports clinics", "Ortho/Neuro clinics", "Home-care rehab"],
    bestFor:
      "Students who like hands-on patient work, rehab science, exercise therapy and long-term patient improvement.",
  },
  {
    key: "mlt",
    title: "Medical Laboratory Technology (DMLT / BMLT / M.Sc MLT)",
    badge: "Diagnostics & Lab Systems",
    whatYouDo:
      "Work in pathology/diagnostic labs: sample processing, testing workflows, quality control and reporting systems.",
    commonRoutes: ["DMLT (Diploma)", "BMLT / B.Sc MLT (UG)", "M.Sc MLT / MMLT (PG)"],
    whereYouWork: ["Hospital labs", "Diagnostic chains", "Reference labs", "Blood banks (as per training)"],
    bestFor:
      "Students who prefer lab-based work, accuracy, protocols and testing systems (less bedside patient work).",
  },
  {
    key: "radiology",
    title: "Radiology & Imaging (Diploma / B.Sc / M.Sc)",
    badge: "Imaging & Patient Safety",
    whatYouDo:
      "Support imaging services like X-ray and advanced imaging workflow (as per training and centre policy).",
    commonRoutes: ["Diploma (entry)", "B.Sc Imaging / Radiology (UG)", "M.Sc Imaging (PG)"],
    whereYouWork: ["Hospitals", "Imaging centres", "Diagnostic chains", "Speciality clinics"],
    bestFor:
      "Students who like medical technology, imaging systems workflow and structured clinical department routines.",
  },
  {
    key: "ot",
    title: "Operation Theatre & Anaesthesia Technology (Diploma / B.Sc / M.Sc)",
    badge: "OT Systems & Sterility",
    whatYouDo:
      "Assist OT workflows: sterilisation protocols, instruments handling, OT preparation and anaesthesia support systems (as per scope).",
    commonRoutes: ["Diploma (entry)", "B.Sc OT & Anaesthesia (UG)", "M.Sc OT/AT (PG)"],
    whereYouWork: ["Hospitals (OT)", "Surgical centres", "Emergency & trauma units"],
    bestFor:
      "Students who can handle pressure, protocols and sterile discipline, and like structured OT environments.",
  },
];

const LADDER = [
  {
    title: "Diploma / Certificate (Entry routes)",
    duration: "6 Months – 2 Years (varies)",
    focus: "Fast, job-oriented entry in allied health support (scope depends on course quality).",
  },
  {
    title: "UG Degree (B.Sc / Bachelor routes)",
    duration: "Typically 3–4 Years",
    focus: "Strong foundation + clinical training + better long-term career growth.",
  },
  {
    title: "PG Degree (M.Sc / MPT etc.)",
    duration: "1–2 Years (often 2) / varies",
    focus: "Specialisation for senior roles, teaching/training, quality systems and leadership tracks.",
  },
  {
    title: "Career growth with experience",
    duration: "Continuous",
    focus: "Senior/lead roles, quality & operations, training, specialised departments and administration.",
  },
];

const ELIGIBILITY_NOTES = [
  "Eligibility differs by domain (some require PCB/PCM). Always verify institute rules.",
  "Admissions can be merit-based or entrance-based depending on university/state norms.",
  "Medical fitness may be required for some clinical courses.",
  "Real growth depends on practical training, not only the certificate/degree title.",
];

const WORK_SETTINGS = [
  { title: "Hospitals", desc: "Core departments: rehab, lab, imaging, OT and speciality units." },
  { title: "Diagnostic Chains", desc: "Labs and imaging centres with standard protocols and reporting systems." },
  { title: "Rehab & Therapy Clinics", desc: "Physio and rehabilitation focused centres." },
  { title: "Academic & Training", desc: "Teaching/skill labs/training roles (typically after PG + experience)." },
];

const BUILD_PROFILE = [
  "Protocol discipline: hygiene, safety, patient handling and accuracy",
  "Communication + teamwork (you work with doctors and nurses daily)",
  "Basic computer skills (reports, EMR/records, documentation)",
  "Serious internships/clinical exposure (skills > attendance)",
  "Choose one domain and go deep for better growth",
];

/* -------------------------------------------------------------
   UI helpers (match your portal patterns)
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
   Use as: /courses/medical (Allied Health Sciences overview)
------------------------------------------------------------- */

export default function AlliedHealthSciencesPage() {
  const snapshot = useMemo(
    () => [
      { k: "What it covers", v: "Physio • Lab (MLT) • Imaging • OT/Anaesthesia" },
      { k: "Entry routes", v: "Diploma → UG Degree → PG Specialisation" },
      { k: "Work settings", v: "Hospitals • Labs/Imaging • Rehab • Training" },
      { k: "Best strategy", v: "Pick one domain and build deep skills" },
      { k: "Reality check", v: "Internship + practical exposure decide growth" },
    ],
    []
  );

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Allied Health Sciences (Physio, MLT, Radiology, OT)"
        breadcrumb="Medical & Paramedical → Allied Health Sciences"
      />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <HeartPulse size={18} className="text-primary" />
                <span>About Allied Health Sciences</span>
              </h2>

              <p className="sectionSub">
                Allied Health Sciences are professional healthcare careers that support diagnosis, treatment, surgery,
                rehabilitation and patient-care systems. These careers work closely with doctors and nurses, and are
                essential in hospitals, labs, imaging centres, OT and rehab settings.
              </p>

              <p className="sectionSub mb-0">
                This page gives a clear map for the most popular allied health domains: Physiotherapy, Medical Lab
                Technology (MLT), Radiology/Imaging, and OT/Anaesthesia Technology.
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
                  Course titles and eligibility vary by university/state. Always verify curriculum, clinical posting,
                  and recognition before admission.
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
            title="Allied Health career ladder"
            subtitle="Most allied careers follow a ladder: Diploma (optional) → UG Degree → PG Specialisation → Senior roles."
          />

          <div className="row g-3">
            {LADDER.map((c) => (
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
            Tip: If you’re confused, choose the domain that matches your personality: hands-on therapy (Physio), lab accuracy
            (MLT), tech systems (Imaging), or pressure-proof protocol work (OT).
          </div>
        </div>
      </section>

      {/* 3) DOMAINS GRID */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={Stethoscope}
            title="Major allied health domains"
            subtitle="Pick one domain and go deep. Multi-skill is good later, but specialisation builds strong careers."
          />

          <div className="row g-3">
            {ALLIED_DOMAINS.map((d) => (
              <div key={d.key} className="col-12 col-md-6">
                <div className="sectionCard h-100">
                  <div className="d-flex justify-content-between align-items-start gap-3">
                    <div>
                      <span className="badge badge-sm text-bg-primary">{d.badge}</span>
                      <h3 className="h6 mb-1 mt-2">{d.title}</h3>
                      <p className="small text-muted mb-0">{d.whatYouDo}</p>
                    </div>
                    <Activity size={18} className="text-primary flex-shrink-0 mt-1" />
                  </div>

                  <div className="mt-3">
                    <div className="small fw-semibold text-dark mb-2">Common route</div>
                    <ul className="list-unstyled small mb-0">
                      {d.commonRoutes.map((x) => (
                        <li key={x} className="d-flex mb-2">
                          <span className="me-2">•</span>
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3">
                    <div className="small fw-semibold text-dark mb-2">Where you work</div>
                    <ul className="list-unstyled small mb-0">
                      {d.whereYouWork.slice(0, 4).map((x) => (
                        <li key={x} className="d-flex mb-2">
                          <span className="me-2">•</span>
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3">
                    <div className="small fw-semibold text-dark mb-1">Best for</div>
                    <p className="small text-muted mb-0">{d.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Note: Exact job responsibilities depend on your course scope, hospital policy and local regulations.
          </div>
        </div>
      </section>

      {/* 4) ELIGIBILITY */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="Eligibility & admission (common patterns)"
            subtitle="Always verify your target university/institute rules."
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
                <h3 className="h6 mb-2 d-flex align-items-center gap-2">
                  <Sparkles size={18} className="text-primary" />
                  <span>How to choose the right domain</span>
                </h3>
                <p className="small text-muted mb-0">
                  If you like people + movement rehab → Physio. If you prefer accuracy + protocols → MLT. If you like
                  tech systems → Imaging. If you can handle pressure + sterility discipline → OT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) WORK SETTINGS */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={Hospital}
            title="Where allied health professionals work"
            subtitle="Most allied careers are hospital-linked. Your internship and skills decide where you start."
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

      {/* 6) DOCUMENTS + PROFILE */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Documents & profile building"
            subtitle="A practical reminder before you apply and while you study."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-6 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Building2 size={16} />
                  <span>Admission checklist (general)</span>
                </span>

                <ul className="nitDarkList mb-0">
                  <li>Class 10 & 12 marksheets</li>
                  <li>ID proof (Aadhaar etc.)</li>
                  <li>Photo + signature</li>
                  <li>Category/EWS/Income certificate (if applicable)</li>
                  <li>Domicile (if required)</li>
                  <li>Medical fitness certificate (if asked)</li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-6 d-flex">
              <div className="sectionCard bg-light border w-100">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Users size={18} className="text-primary" />
                  <span>Build your profile</span>
                </h3>

                <ul className="list-unstyled small mb-0">
                  {BUILD_PROFILE.map((t) => (
                    <li key={t} className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Sensible shortcut: pick one allied domain early, build practical proof (internships/projects), then specialise for senior roles.
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
