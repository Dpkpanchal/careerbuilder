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
  Sparkles,
  Activity,
} from "lucide-react";

/* -------------------------------------------------------------
   DATA – Naturopathy & Yoga
   Career-book aligned overview page for /courses/medical/naturopathy-yoga
   - No links (portal pattern)
------------------------------------------------------------- */

const PATHWAYS = [
  {
    title: "Certificate / Diploma (Entry routes)",
    duration: "3 Months – 2 Years (varies by institute/course)",
    focus:
      "Basics of naturopathy/lifestyle guidance, yoga instruction, fitness and wellness support (scope varies widely).",
  },
  {
    title: "UG Degree (BNYS / related programmes where offered)",
    duration: "Typically 4.5–5.5 Years (may include internship) • varies",
    focus:
      "Doctor-level naturopathy & yoga system route in recognised programmes, with clinical and wellness exposure.",
  },
  {
    title: "PG / Specialisation (where available)",
    duration: "1–3 Years (varies)",
    focus:
      "Specialised tracks like yoga therapy, clinical nutrition, wellness management, research/teaching (as per options).",
  },
  {
    title: "Career growth with experience",
    duration: "Continuous",
    focus:
      "Senior wellness roles, therapy practice, teaching/training, entrepreneurship and programme leadership.",
  },
];

const WHAT_YOU_DO = [
  {
    title: "Lifestyle & wellness support",
    desc: "Guide people on daily routines, healthy habits, stress management and preventive wellness practices.",
  },
  {
    title: "Yoga training / instruction",
    desc: "Teach yoga postures, breathing, flexibility and safe practice techniques (as per your certification).",
  },
  {
    title: "Yoga therapy (advanced/clinical settings)",
    desc: "Work with therapy-based yoga in wellness/rehab settings (scope depends on your training and rules).",
  },
  {
    title: "Natural health approaches (naturopathy)",
    desc: "Diet and lifestyle-based approaches; specific clinical practice depends on the qualification and regulations.",
  },
];

const ELIGIBILITY_NOTES = [
  "Certificate/Diploma: Often after Class 10 or 12 (varies widely by institute).",
  "BNYS/UG routes: Usually after Class 12 (Science preferred in many cases) — confirm current rules.",
  "Admissions may be merit-based or entrance-based depending on state/university norms.",
  "Because course titles vary, always verify recognition, syllabus and internship/clinical exposure before joining.",
];

const WHERE_YOU_WORK = [
  { title: "Wellness & Yoga Centres", desc: "Yoga instruction, wellness programs, lifestyle coaching (as per training)." },
  { title: "Hospitals (Wellness/Rehab support)", desc: "Yoga/rehab support roles in suitable setups (depends on role rules)." },
  { title: "Schools/Colleges/Institutions", desc: "Yoga training programs and fitness/wellness activities (as eligible)." },
  { title: "Self-practice / Entrepreneurship", desc: "Personal coaching, studios, retreats, wellness programs with experience." },
];

const ADMISSION_NOTES = [
  "Choose an institute with strong practical training and safe teaching methods.",
  "Avoid courses that promise unrealistic medical claims; focus on wellness, fitness and evidence-based practice.",
  "If your goal is clinical practice, prefer recognised degree routes with internship/clinical exposure.",
];

const COMMON_DOCS = [
  "Class 10/12 marksheets (as required)",
  "ID proof (Aadhaar etc.)",
  "Photo + signature",
  "Category/EWS/Income certificate (if applicable)",
  "Domicile (if required)",
  "Medical fitness certificate (if asked)",
];

const BUILD_PROFILE = [
  "Strong communication skills (teaching + counselling style)",
  "Safety-first mindset (correct posture guidance, injury prevention)",
  "Basic anatomy understanding (especially for yoga instruction)",
  "Consistency: personal practice + discipline builds credibility",
  "Optional add-ons: nutrition basics, meditation, fitness training (as per interest)",
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
   Use as: /courses/medical/naturopathy-yoga
------------------------------------------------------------- */

export default function NaturopathyYogaPage() {
  const snapshot = useMemo(
    () => [
      { k: "Focus", v: "Wellness • Lifestyle • Yoga training • Preventive health" },
      { k: "Entry routes", v: "Certificate/Diploma → UG degree (where offered) → PG" },
      { k: "Work settings", v: "Wellness centres • Institutions • Rehab support" },
      { k: "Best strategy", v: "Build real teaching skills + safe practice methods" },
      { k: "Reality check", v: "Credibility comes from consistency + practical skill" },
    ],
    []
  );

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Naturopathy & Yoga"
        breadcrumb="Medical & Paramedical → Naturopathy & Yoga"
      />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <HeartPulse size={18} className="text-primary" />
                <span>About Naturopathy & Yoga</span>
              </h2>

              <p className="sectionSub">
                Naturopathy and Yoga focus on wellness, preventive health, lifestyle improvement and mind-body practices.
                Many students choose this path to work in wellness centres, teach yoga, support rehabilitation routines,
                or build a long-term wellness practice.
              </p>

              <p className="sectionSub mb-0">
                The field has multiple routes — short certifications for yoga instruction and wellness support, and
                longer degree routes (like BNYS in some institutions) for more structured clinical and system-level
                training.
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
                  Course titles and permissions vary widely. Always verify recognition, syllabus and the real career scope
                  before joining.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) PATHWAYS / LADDER */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="Course pathways"
            subtitle="Start from a route that fits your goal: teaching wellness/yoga, or structured degree pathways where offered."
          />

          <div className="row g-3">
            {PATHWAYS.map((c) => (
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
            Tip: If your goal is teaching, focus on safe instruction skills. If your goal is clinical practice, prefer recognised degree routes with internship.
          </div>
        </div>
      </section>

      {/* 3) WHAT YOU DO */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            icon={Leaf}
            title="What you do in this career"
            subtitle="The role depends on your qualification and the workplace setting."
          />

          <div className="row g-3">
            {WHAT_YOU_DO.map((x) => (
              <div key={x.title} className="col-12 col-md-6 col-lg-3">
                <div className="sectionCard h-100">
                  <h3 className="h6 mb-1">{x.title}</h3>
                  <p className="small text-muted mb-0">{x.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) ELIGIBILITY */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ShieldCheck}
            title="Eligibility & admission (common patterns)"
            subtitle="Always verify criteria from the institute you apply to."
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
                  <span>Best suited for</span>
                </h3>
                <p className="small text-muted mb-0">
                  Students who enjoy wellness and teaching, have patience for guiding people, and can maintain
                  consistency in personal practice and discipline.
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
            title="Where you can work"
            subtitle="Work settings depend on your qualification and experience."
          />

          <div className="row g-3">
            {WHERE_YOU_WORK.map((w) => (
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
            title="Admission & profile building"
            subtitle="Practical checklist before admission and during the course."
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
            Sensible shortcut: build credibility by mastering safe instruction, strong communication, and consistent practice — that is what creates long-term career growth.
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
