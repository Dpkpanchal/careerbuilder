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
  BadgeCheck,
  BookOpen,
  Leaf,
  Stethoscope,
  Sparkles,
} from "lucide-react";

/* -------------------------------------------------------------
   DATA – AYUSH (Ayurveda, Homoeopathy, Unani, Siddha)
   Career-book aligned overview page for /courses/medical/ayush
   - No links (portal pattern)
------------------------------------------------------------- */

const AYUSH_SYSTEMS = [
  {
    key: "ayurveda",
    title: "Ayurveda (BAMS → MD Ayurveda)",
    badge: "Traditional Indian Medicine",
    whatYouStudy:
      "Ayurvedic principles, diagnosis methods, herbal formulations, Panchakarma basics (where applicable) and clinical practice as per syllabus.",
    commonRoute: ["BAMS (UG)", "Internship (as per norms)", "MD Ayurveda (PG)"],
    whereYouWork: ["AYUSH hospitals", "Clinics", "Wellness centres", "Panchakarma centres", "Research/teaching (with PG)"],
    bestFor:
      "Students interested in traditional Indian medicine, holistic lifestyle approach and long-term clinical practice building.",
  },
  {
    key: "homeopathy",
    title: "Homoeopathy (BHMS → MD Homoeopathy)",
    badge: "Alternative Medicine System",
    whatYouStudy:
      "Homeopathic philosophy, materia medica, repertory, case-taking, clinical training and practice systems as per syllabus.",
    commonRoute: ["BHMS (UG)", "Internship (as per norms)", "MD Homoeopathy (PG)"],
    whereYouWork: ["Homeopathy hospitals", "Clinics", "Dispensaries", "Private practice", "Teaching/research (with PG)"],
    bestFor:
      "Students who like detailed patient history-taking and long-term case management style practice.",
  },
  {
    key: "unani",
    title: "Unani (BUMS → MD Unani)",
    badge: "Greco-Arab Medicine System",
    whatYouStudy:
      "Unani principles, diagnosis, regimens, pharmacology (as per Unani), and clinical training as per syllabus.",
    commonRoute: ["BUMS (UG)", "Internship (as per norms)", "MD Unani (PG)"],
    whereYouWork: ["AYUSH hospitals", "Unani clinics", "Dispensaries", "Community health programs", "Teaching (with PG)"],
    bestFor:
      "Students interested in Unani philosophy, regimen-based care and clinical practice in AYUSH setups.",
  },
  {
    key: "siddha",
    title: "Siddha (BSMS → MD Siddha)",
    badge: "Traditional South Indian System",
    whatYouStudy:
      "Siddha principles, medicines, diagnosis methods, and clinical training as per syllabus.",
    commonRoute: ["BSMS (UG)", "Internship (as per norms)", "MD Siddha (PG)"],
    whereYouWork: ["Siddha hospitals/clinics", "AYUSH wellness centres", "Community health (where applicable)", "Teaching (with PG)"],
    bestFor:
      "Students interested in Siddha system and long-term clinical practice building in recognised setups.",
  },
];

const AYUSH_LADDER = [
  {
    title: "UG AYUSH Degree (BAMS / BHMS / BUMS / BSMS)",
    duration: "Typically 5.5 Years (including internship) • varies by system",
    focus:
      "Foundation in the chosen AYUSH system + clinical training as per syllabus.",
  },
  {
    title: "Clinical Practice / Service",
    duration: "Continuous",
    focus:
      "Work in clinics/hospitals/wellness setups; build practical patient-handling experience.",
  },
  {
    title: "PG Specialisation (MD in AYUSH system)",
    duration: "Typically 3 Years (varies)",
    focus:
      "Advanced learning for teaching, research, and specialised practice tracks.",
  },
  {
    title: "Long-term growth",
    duration: "Continuous",
    focus:
      "Senior clinician, teaching roles, research, administration, wellness entrepreneurship (as per experience).",
  },
];

const ELIGIBILITY_NOTES = [
  "Usually after Class 12 with Science (commonly PCB); exact criteria varies by system and regulations.",
  "Admissions may be via NEET (UG) or other criteria depending on current rules and notifications.",
  "Medical fitness and document verification apply as per counselling rules.",
  "Always confirm recognition of the college and the course before admission.",
];

const WORK_SETTINGS = [
  { title: "AYUSH Hospitals & Dispensaries", desc: "Clinical roles in government/private AYUSH setups." },
  { title: "Clinics & Private Practice", desc: "Independent practice (as per registration rules and experience)." },
  { title: "Wellness & Lifestyle Centres", desc: "Holistic health, preventive care, therapy/wellness programs." },
  { title: "Teaching & Research (with PG)", desc: "Academic track in recognised colleges and research institutions." },
];

const ADMISSION_NOTES = [
  "Choose a recognised college with strong clinical exposure and hospital tie-up.",
  "Understand the system’s philosophy and treatment approach before committing.",
  "Long-term success depends on clinical maturity, ethics and patient trust building.",
];

const COMMON_DOCS = [
  "Class 10 & 12 marksheets",
  "ID proof (Aadhaar etc.)",
  "Photo + signature",
  "Category/EWS/Income certificate (if applicable)",
  "Domicile (if required)",
  "Medical fitness certificate (if asked by institute/counselling)",
];

const BUILD_PROFILE = [
  "Strong basics in biology and patient communication",
  "Ethics + discipline + long-term learning mindset",
  "Case history-taking and follow-up discipline (very important in AYUSH practice)",
  "Practical exposure during internship (seriously, not just attendance)",
  "If you want teaching/research, plan PG (MD) early",
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
   Use as: /courses/medical/ayush
------------------------------------------------------------- */

export default function AYUSHCoursesPage() {
  const snapshot = useMemo(
    () => [
      { k: "Systems covered", v: "Ayurveda • Homoeopathy • Unani • Siddha" },
      { k: "Main UG degrees", v: "BAMS • BHMS • BUMS • BSMS" },
      { k: "Typical UG duration", v: "≈ 5.5 Years (incl. internship) • varies" },
      { k: "Where you work", v: "AYUSH hospitals • Clinics • Wellness centres" },
      { k: "Reality check", v: "Clinical maturity + patient trust decide success" },
    ],
    []
  );

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="AYUSH (Ayurveda, Homoeopathy, Unani, Siddha)"
        breadcrumb="Medical & Paramedical → AYUSH"
      />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <HeartPulse size={18} className="text-primary" />
                <span>About AYUSH</span>
              </h2>

              <p className="sectionSub">
                AYUSH represents India’s recognized traditional and alternative medical systems — Ayurveda, Homoeopathy,
                Unani and Siddha. These are doctor-level clinical pathways within their own systems, with UG degrees and
                internships followed by PG specialisation options.
              </p>

              <p className="sectionSub mb-0">
                Success in AYUSH depends on clinical discipline, ethics, patient communication and consistent practice
                building — similar to other medical careers, but within the philosophy and methods of the chosen system.
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
                  Admission rules can change. Always verify current eligibility, counselling process and course recognition
                  before joining.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) AYUSH LADDER */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="AYUSH career ladder"
            subtitle="UG degree + internship builds clinical base. PG (MD) strengthens specialisation and teaching/research routes."
          />

          <div className="row g-3">
            {AYUSH_LADDER.map((c) => (
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
            Tip: Choose the system that matches your beliefs and working style, because you’ll study and practice it deeply for years.
          </div>
        </div>
      </section>

      {/* 3) SYSTEMS GRID */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={Stethoscope}
            title="AYUSH systems & common routes"
            subtitle="Each system has its own UG degree and PG route. Choose one system and go deep."
          />

          <div className="row g-3">
            {AYUSH_SYSTEMS.map((d) => (
              <div key={d.key} className="col-12 col-md-6">
                <div className="sectionCard h-100">
                  <div className="d-flex justify-content-between align-items-start gap-3">
                    <div>
                      <span className="badge badge-sm text-bg-primary">{d.badge}</span>
                      <h3 className="h6 mb-1 mt-2">{d.title}</h3>
                      <p className="small text-muted mb-0">{d.whatYouStudy}</p>
                    </div>
                    <Leaf size={18} className="text-primary flex-shrink-0 mt-1" />
                  </div>

                  <div className="mt-3">
                    <div className="small fw-semibold text-dark mb-2">Common route</div>
                    <ul className="list-unstyled small mb-0">
                      {d.commonRoute.map((x) => (
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
            Note: The role scope and practice permissions depend on regulations and registration norms. Always follow official rules.
          </div>
        </div>
      </section>

      {/* 4) ELIGIBILITY */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="Eligibility & admission (common patterns)"
            subtitle="Confirm current rules from official notifications before applying."
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
                  <span>How to choose a system</span>
                </h3>
                <p className="small text-muted mb-0">
                  Choose the system you genuinely respect and can practice long-term. AYUSH is not “easy medical”—it requires
                  serious study, internship learning and ethical practice building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) WHERE YOU WORK */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={Hospital}
            title="Where AYUSH professionals work"
            subtitle="Your practice setting depends on experience, location, and the network you build."
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

      {/* 6) ADMISSION & PROFILE */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Admission & profile building"
            subtitle="Practical reminders before you join and while you study."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-6 d-flex">
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

                <div className="mt-3 small text-muted">
                  <span className="fw-semibold text-white">Common documents:</span>{" "}
                  {COMMON_DOCS.slice(0, 4).join(" • ")} • ...
                </div>
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
            Sensible shortcut: Choose one AYUSH system, build strong internship learning, and plan PG (MD) if you want teaching/research or advanced practice.
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
