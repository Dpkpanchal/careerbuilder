"use client";

import React from "react";
import {
  Layers3,
  BookOpen,
  FlaskConical,
  Calculator,
  Monitor,
  ClipboardList,
  GraduationCap,
} from "lucide-react";

import HeroInner from "@/components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CoursesTabsBar from "../CoursesTabsBar";

// ------------------------------------------------------------------
// Streamlined Degree sub-tabs (same set)
// ------------------------------------------------------------------
const TABS = [
  { id: "ba", label: "BA & Allied", href: '/courses/arts-graduation-courses-ba-allied' },
  { id: "bcom", label: "B.Com & Allied", href: '/courses/commerce-graduation-courses-bcom-allied' },
  { id: "bsc", label: "B.Sc & Allied", href: '/courses/science-graduation-courses-bsc-allied' },
  { id: "ma", label: "MA, MSW & Allied", href: '/courses/arts-pg-courses-ma-msw-allied' },
  { id: "msc", label: "M.Sc & Allied", href: '/courses/science-pg-courses-msc-allied' },
  { id: "mcom", label: "M.Com & Allied", href: '/courses/commerce-pg-courses-mcom-allied' },
];

// ------------------------------------------------------------------
// Data – Science / B.Sc Streamlined
// ------------------------------------------------------------------
const BSC_OPTIONS = [
  {
    title: "B.Sc (General / Honours)",
    icon: FlaskConical,
    about:
      "The core science graduation route. Honours offers subject depth, while General allows broader combinations.",
    points: [
      "Strong base for MSc, research and technical roles",
      "Suitable for students interested in labs, analysis and scientific thinking",
      "Honours preferred for research/teaching paths",
    ],
    facts: [
      { k: "Duration", v: "3 years" },
      { k: "Eligibility", v: "Class 12 (Science stream)" },
      { k: "Admission", v: "Merit / Entrance (varies)" },
      { k: "Best for", v: "PG • Research • Technical roles" },
    ],
  },
  {
    title: "B.Sc Mathematics / Statistics",
    icon: Calculator,
    about:
      "Highly analytical science route supporting careers in analytics, finance, teaching and competitive exams.",
    points: [
      "Strong base for data, analytics and quantitative exams",
      "Good progression to MSc / teaching / actuarial-style roles",
      "Requires comfort with math and problem-solving",
    ],
    facts: [
      { k: "Duration", v: "3 years" },
      { k: "Eligibility", v: "Class 12 with Mathematics" },
      { k: "Admission", v: "Merit / Entrance (varies)" },
      { k: "Best for", v: "Analytics • Exams • PG" },
    ],
  },
  {
    title: "B.Sc Computer Science / IT",
    icon: Monitor,
    about:
      "Science-oriented computing degree focused on programming, systems and computational thinking.",
    points: [
      "Good alternative to engineering for software/data paths",
      "Skills + projects matter more than theory alone",
      "Internships and hands-on practice are essential",
    ],
    facts: [
      { k: "Duration", v: "3 years" },
      { k: "Eligibility", v: "Class 12 (Math preferred)" },
      { k: "Admission", v: "Merit / Entrance (varies)" },
      { k: "Best for", v: "IT • Data • Software roles" },
    ],
  },
];

const SCIENCE_SUBJECT_AREAS = [
  { title: "Physical Sciences", items: ["Physics", "Chemistry", "Electronics"] },
  { title: "Life Sciences", items: ["Botany", "Zoology", "Microbiology", "Biotechnology"] },
  { title: "Mathematical Sciences", items: ["Mathematics", "Statistics"] },
  { title: "Computing", items: ["Computer Science", "IT", "Data basics"] },
];

const AFTER_BSC = [
  {
    title: "Higher Studies (M.Sc)",
    desc: "Natural progression for science graduates aiming for depth and specialization.",
    points: [
      "Honours subject usually continues into MSc",
      "Research-oriented MSc helps PhD/research careers",
      "Strong fundamentals matter more than shortcuts",
    ],
  },
  {
    title: "Teaching & Academics",
    desc: "Science teaching and academic roles with required qualifications.",
    points: [
      "Choose Honours subject carefully",
      "Build conceptual clarity + lab skills",
      "Follow eligibility rules for teaching roles",
    ],
  },
  {
    title: "Competitive Exams",
    desc: "SSC, state services, technical exams and specialized science exams.",
    points: [
      "Maths/statistics give advantage in aptitude-heavy exams",
      "Science helps in technical/government roles",
      "Consistent practice beats last-minute prep",
    ],
  },
  {
    title: "Skill + Job Route",
    desc: "Lab assistant, data support, IT support and technical roles.",
    points: [
      "Lab/technical internships matter",
      "Software tools + documentation skills help",
      "Certifications add value if aligned with degree",
    ],
  },
];

const ADMISSION_POINTS = [
  "Most B.Sc admissions are merit-based on Class 12 science marks.",
  "Some universities conduct subject-wise entrance tests.",
  "Always check subject eligibility and cut-offs before applying.",
];

const DOCS = [
  "Class 10 & 12 marksheets (Science stream)",
  "ID proof (Aadhaar etc.)",
  "Photo + signature",
  "Category/EWS/Income certificate (if applicable)",
  "Domicile (if required)",
];

const SNAPSHOT = [
  { t: "Research & Labs", d: "Research assistant, lab technician, project staff roles" },
  { t: "Teaching Path", d: "Science teaching with PG + eligibility" },
  { t: "IT & Data", d: "IT support, data analyst (with skills)" },
  { t: "Government Roles", d: "Technical posts, scientific assistants, exams" },
  { t: "Higher Studies", d: "MSc → PhD / research careers" },
  { t: "Industry Support", d: "Quality control, testing, operations roles" },
];

// ------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------
function SectionHeader({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-4 text-center text-lg-start">
      <h2 className="sectionHeading mb-2 d-flex align-items-center gap-2 justify-content-center justify-content-lg-start">
        {Icon ? <Icon size={18} className="text-primary" /> : null}
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

// ------------------------------------------------------------------
// Page
// ------------------------------------------------------------------
export default function ScienceDegree() {
  return (
    <>
    <FrontendLayout>
      <HeroInner title="Science Graduation Courses (B.Sc & Allied)" breadcrumb="B.Sc & Allied" />
      <CoursesTabsBar tabs={TABS} activeId="bsc" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <BookOpen size={18} className="text-primary" />
                <span>About Science Graduation Courses</span>
              </h2>

              <p className="sectionSub">
                Science graduation builds analytical thinking, problem-solving ability and subject depth. It is best
                suited for students interested in laboratories, data, technology, research and scientific careers.
              </p>

              <p className="sectionSub mb-0">
                The streamlined science routes mainly include <b>B.Sc (General/Honours)</b>, along with allied options
                such as <b>Mathematics, Statistics</b> and <b>Computer Science / IT</b>. Outcomes depend heavily on subject
                choice, practical exposure and further specialization.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <MiniDL
                  items={[
                    { k: "Main course", v: "B.Sc (General / Honours)" },
                    { k: "Allied options", v: "Maths • Statistics • Computer Science / IT" },
                    { k: "Typical duration", v: "3 years" },
                    { k: "Entry", v: "After Class 12 (Science)" },
                    { k: "Good for", v: "PG • Research • Technical roles" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) SCIENCE UG OPTIONS */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={FlaskConical}
            title="Science UG options (B.Sc & allied)"
            subtitle="Common streamlined science routes after Class 12. Choose based on interest and long-term goal."
          />

          <div className="row g-4 align-items-stretch">
            {BSC_OPTIONS.map((opt) => {
              const Icon = opt.icon;
              return (
                <div key={opt.title} className="col-12 col-lg-6 d-flex">
                  <div className="nitDarkGlassBox w-100">
                    <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                      <Icon size={16} />
                      <span>{opt.title}</span>
                    </span>

                    <p className="small mb-3">{opt.about}</p>

                    <ul className="nitDarkList mb-3">
                      {opt.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>

                    <div className="sectionCard bg-light border">
                      <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                        <Layers3 size={18} className="text-primary" />
                        <span>Quick facts</span>
                      </h3>
                      <MiniDL items={opt.facts} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3) What you study */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={BookOpen}
            title="What you study (common science areas)"
            subtitle="Most science degrees share core theoretical subjects with strong practical/lab components."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                {SCIENCE_SUBJECT_AREAS.map((sf) => (
                  <div key={sf.title} className="linkRowHover">
                    <span className="mb-1 d-block">
                      <strong>{sf.title}:</strong>{" "}
                      <span className="text-light">{sf.items.join(" • ")}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 col-lg-5 d-flex">
              <div className="sectionCard bg-light border w-100">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Smart choice tips</span>
                </h3>

                {[
                  "Honours preferred for MSc / research / teaching paths.",
                  "Choose subjects you can study deeply for 5–7 years.",
                  "Practical skills and lab exposure matter a lot.",
                  "Don’t ignore communication and documentation skills.",
                ].map((t) => (
                  <div key={t} className="linkRowHover">
                    <span>{t}</span>
                    <span className="small text-muted">Tip</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) After B.Sc */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="After B.Sc: sensible next steps"
            subtitle="Science careers reward depth, patience and skill-building."
          />

          <div className="row g-3 g-md-4">
            {AFTER_BSC.map((x) => (
              <div key={x.title} className="col-12 col-md-6">
                <div className="sectionCard h-100">
                  <h3 className="h6 mb-1">{x.title}</h3>
                  <p className="small text-muted mb-3">{x.desc}</p>

                  <ul className="list-unstyled small mb-0">
                    {x.points.map((p) => (
                      <li key={p} className="d-flex mb-2">
                        <span className="me-2">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5) Admission & Documents */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Admission & Documents"
            subtitle="Admission rules vary by institute and subject."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <ul className="nitDarkList mb-0">
                  {ADMISSION_POINTS.map((x) => (
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
                  {DOCS.map((d) => (
                    <li key={d} className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6) Careers snapshot */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="Careers snapshot"
            subtitle="Science degrees open multiple technical and academic tracks."
          />

          <div className="row g-3">
            {SNAPSHOT.map((c) => (
              <div key={c.t} className="col-12 col-md-6 col-lg-4">
                <div className="sectionCard h-100">
                  <h3 className="h6 mb-1">{c.t}</h3>
                  <p className="small text-muted mb-0">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
