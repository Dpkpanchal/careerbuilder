// "use client";

// import React from "react";
// import {
//   Layers3,
//   BookOpen,
//   FlaskConical,
//   Calculator,
//   Monitor,
//   ClipboardList,
//   GraduationCap,
//   Sparkles,
//   Microscope,
// } from "lucide-react";

// import HeroInner from "@/Components/Frontend/Hero/HeroInner";
// import FrontendLayout from '@/Layouts/FrontendLayout';
// import CoursesTabsBar from "../CoursesTabsBar";

// // ------------------------------------------------------------------
// // Streamlined Degree sub-tabs (same set)
// // ------------------------------------------------------------------
// const TABS = [
//   { id: "ba", label: "BA & Allied", href: '/courses/arts-graduation-courses-ba-allied' },
//   { id: "bcom", label: "B.Com & Allied", href: '/courses/commerce-graduation-courses-bcom-allied' },
//   { id: "bsc", label: "B.Sc & Allied", href: '/courses/science-graduation-courses-bsc-allied' },
//   { id: "ma", label: "MA, MSW & Allied", href: '/courses/arts-pg-courses-ma-msw-allied' },
//   { id: "msc", label: "M.Sc & Allied", href: '/courses/science-pg-courses-msc-allied' },
//   { id: "mcom", label: "M.Com & Allied", href: '/courses/commerce-pg-courses-mcom-allied' },
// ];

// // ------------------------------------------------------------------
// // Data – Science PG (M.Sc & allied)
// // ------------------------------------------------------------------
// const MSC_OPTIONS = [
//   {
//     title: "M.Sc (Core Sciences)",
//     icon: FlaskConical,
//     about:
//       "Postgraduate specialization in a science subject. Ideal for deeper subject mastery, research readiness and technical roles.",
//     points: [
//       "Best for strong specialization + lab/research exposure",
//       "Good base for PhD / research projects (subject dependent)",
//       "Also supports teaching track and scientific roles",
//     ],
//     facts: [
//       { k: "Duration", v: "2 years (typical)" },
//       { k: "Eligibility", v: "B.Sc / related graduation (rules vary)" },
//       { k: "Admission", v: "Merit / Entrance (varies)" },
//       { k: "Best for", v: "Research • Teaching • Technical roles" },
//     ],
//   },
//   {
//     title: "M.Sc Mathematics / Statistics",
//     icon: Calculator,
//     about:
//       "Advanced quantitative PG route for research, analytics, teaching and data-heavy careers.",
//     points: [
//       "Strong base for data/analytics mindset and quantitative roles",
//       "Good for higher studies and research in mathematical sciences",
//       "Requires consistent practice and conceptual depth",
//     ],
//     facts: [
//       { k: "Duration", v: "2 years (typical)" },
//       { k: "Eligibility", v: "B.Sc with Maths/Stats (rules vary)" },
//       { k: "Admission", v: "Merit / Entrance (varies)" },
//       { k: "Best for", v: "Analytics • Research • Teaching" },
//     ],
//   },
//   {
//     title: "M.Sc Computer Science / IT (where offered)",
//     icon: Monitor,
//     about:
//       "PG computing route for software/data careers and advanced computing roles. Outcomes depend heavily on projects and skills.",
//     points: [
//       "Good for software/data paths (with strong projects)",
//       "Internship + portfolio matters as much as degree",
//       "Choose institutes with labs, faculty support and exposure",
//     ],
//     facts: [
//       { k: "Duration", v: "2 years (typical)" },
//       { k: "Eligibility", v: "B.Sc/BCA/related (rules vary)" },
//       { k: "Admission", v: "Merit / Entrance (varies)" },
//       { k: "Best for", v: "Software • Data • IT careers" },
//     ],
//   },
//   {
//     title: "Allied Science PG (subject-wise masters)",
//     icon: Microscope,
//     about:
//       "Universities also offer allied science PG programmes such as Biotechnology, Microbiology, Environmental Science, Electronics and more.",
//     points: [
//       "Choose based on career goal (industry/research/teaching)",
//       "Check lab facilities and practical exposure of the institute",
//       "Projects + internships improve outcomes sharply",
//     ],
//     facts: [
//       { k: "Duration", v: "2 years (typical)" },
//       { k: "Eligibility", v: "Related graduation (mapping varies)" },
//       { k: "Admission", v: "Merit / Entrance (varies)" },
//       { k: "Best for", v: "Specialisation • Industry • Research" },
//     ],
//   },
// ];

// const MSC_SUBJECT_FAMILIES = [
//   { title: "Physical Sciences", items: ["Physics", "Chemistry", "Electronics", "Environmental Science"] },
//   { title: "Life Sciences", items: ["Botany", "Zoology", "Microbiology", "Biotechnology"] },
//   { title: "Mathematical Sciences", items: ["Mathematics", "Statistics"] },
//   { title: "Computing", items: ["Computer Science", "IT", "Data-focused masters (where offered)"] },
// ];

// const AFTER_MSC = [
//   {
//     title: "Research Path (PhD / Projects / Fellowships)",
//     desc: "Best for students who enjoy deep study and research work. MSc is a strong bridge to PhD.",
//     points: [
//       "Develop research writing + methodology basics",
//       "Build 1–2 serious projects/dissertation work",
//       "Track fellowships and university PhD notifications",
//     ],
//   },
//   {
//     title: "Teaching & Academics",
//     desc: "MSc improves subject depth and supports teaching readiness (as per eligibility norms).",
//     points: [
//       "Conceptual clarity + problem solving matters",
//       "Build lab and demonstration confidence",
//       "Follow recruitment eligibility rules carefully",
//     ],
//   },
//   {
//     title: "Industry / Technical Roles",
//     desc: "Lab, QC/testing, R&D support, analytics/IT (depending on subject).",
//     points: [
//       "Choose electives aligned with industry needs",
//       "Internships and practical tools matter",
//       "Documentation + reporting skills improve performance",
//     ],
//   },
//   {
//     title: "Competitive Exams",
//     desc: "Technical/scientific posts and exams based on subject specialization.",
//     points: [
//       "Revision + problem practice consistently",
//       "Keep notes + formula/diagram sheets",
//       "Practice previous year papers and mocks",
//     ],
//   },
// ];

// const ADMISSION_POINTS = [
//   "MSc admissions can be merit-based or entrance-based depending on the university.",
//   "Many subjects require graduation in the same/related discipline; mapping varies.",
//   "Check institute lab facilities, dissertation structure and placement support where relevant.",
// ];

// const DOCS = [
//   "Graduation marksheets / final result",
//   "Class 10 & 12 marksheets",
//   "ID proof (Aadhaar etc.)",
//   "Photo + signature",
//   "Category/EWS/Income certificate (if applicable)",
//   "Migration/TC (if asked by institute)",
// ];

// const SNAPSHOT = [
//   { t: "Research & PhD", d: "PhD, research assistant/project roles, fellowships" },
//   { t: "Teaching Path", d: "Academic/teaching roles (as per eligibility)" },
//   { t: "Lab & QC", d: "Lab scientist/technician, quality control and testing roles" },
//   { t: "R&D Support", d: "Industry research support, product/testing teams" },
//   { t: "Analytics / IT", d: "Data/IT roles (Math/CS pathways with skills)" },
//   { t: "Government Technical", d: "Scientific assistant/technical posts and exams" },
// ];

// // ------------------------------------------------------------------
// // Helpers
// // ------------------------------------------------------------------
// function SectionHeader({ icon: Icon, title, subtitle }) {
//   return (
//     <div className="mb-4 text-center text-lg-start">
//       <h2 className="sectionHeading mb-2 d-flex align-items-center gap-2 justify-content-center justify-content-lg-start">
//         {Icon ? <Icon size={18} className="text-primary" /> : null}
//         <span>{title}</span>
//       </h2>
//       {subtitle ? (
//         <p className="sectionSub mb-0" style={{ maxWidth: "90ch" }}>
//           {subtitle}
//         </p>
//       ) : null}
//     </div>
//   );
// }

// function MiniDL({ items }) {
//   return (
//     <dl className="row small mb-0">
//       {items.map((it, idx) => (
//         <React.Fragment key={idx}>
//           <dt className="col-5">{it.k}</dt>
//           <dd className={`col-7 ${idx === items.length - 1 ? "mb-0" : "mb-2"}`}>
//             {it.v}
//           </dd>
//         </React.Fragment>
//       ))}
//     </dl>
//   );
// }

// // ------------------------------------------------------------------
// // Page
// // ------------------------------------------------------------------
// export default function SciencePGDegree() {
//   return (
//     <>
//     <FrontendLayout>
//       <HeroInner title="Science PG Courses (M.Sc & Allied)" breadcrumb="M.Sc & Allied" />
//       <CoursesTabsBar tabs={TABS} activeId="msc" />

//       {/* 1) ABOUT + SNAPSHOT */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <div className="row g-4 align-items-start">
//             <div className="col-12 col-lg-7">
//               <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
//                 <BookOpen size={18} className="text-primary" />
//                 <span>About Science Post Graduation</span>
//               </h2>

//               <p className="sectionSub">
//                 Science postgraduate study is about specialization and depth. It works best for students who want
//                 research, teaching, technical roles, or a strong subject foundation for higher studies and competitive
//                 technical exams.
//               </p>

//               <p className="sectionSub mb-0">
//                 In streamlined science PG routes, the main option is <b>M.Sc</b> (subject masters), with allied pathways
//                 like Mathematics/Statistics, Computer Science/IT (where offered), and other applied science programmes.
//                 Outcomes improve sharply when you build projects, lab skills and practical tool exposure.
//               </p>
//             </div>

//             <div className="col-12 col-lg-5">
//               <div className="sectionCard bg-light border">
//                 <h3 className="h6 mb-3 d-flex align-items-center gap-2">
//                   <Layers3 size={18} className="text-primary" />
//                   <span>Quick Snapshot</span>
//                 </h3>

//                 <MiniDL
//                   items={[
//                     { k: "Main PG route", v: "M.Sc (subject masters)" },
//                     { k: "Allied options", v: "Maths/Stats • CS/IT • Applied sciences" },
//                     { k: "Typical duration", v: "2 years" },
//                     { k: "Entry", v: "After graduation (B.Sc/related)" },
//                     { k: "Best for", v: "Research • Teaching • Technical roles" },
//                   ]}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2) MSc options */}
//       <section className="py-5 nitLightGradient">
//         <div className="container">
//           <SectionHeader
//             icon={FlaskConical}
//             title="M.Sc & allied options"
//             subtitle="Pick a subject you can study deeply and work with practically (labs/projects). That’s what decides outcomes."
//           />

//           <div className="row g-4 align-items-stretch">
//             {MSC_OPTIONS.map((opt) => {
//               const Icon = opt.icon;
//               return (
//                 <div key={opt.title} className="col-12 col-lg-6 d-flex">
//                   <div className="nitDarkGlassBox w-100">
//                     <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
//                       <Icon size={16} />
//                       <span>{opt.title}</span>
//                     </span>

//                     <p className="small mb-3">{opt.about}</p>

//                     <ul className="nitDarkList mb-3">
//                       {opt.points.map((p) => (
//                         <li key={p}>{p}</li>
//                       ))}
//                     </ul>

//                     <div className="sectionCard bg-light border">
//                       <h3 className="h6 mb-3 d-flex align-items-center gap-2">
//                         <Layers3 size={18} className="text-primary" />
//                         <span>Quick facts</span>
//                       </h3>
//                       <MiniDL items={opt.facts} />
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
//             Pro tip: The biggest difference-maker in MSc is your <b>dissertation/project</b>. Treat it like a portfolio
//             piece, not a formality.
//           </div>
//         </div>
//       </section>

//       {/* 3) Subject families + choice tips */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <SectionHeader
//             icon={BookOpen}
//             title="Common MSc subject families"
//             subtitle="Exact programme names vary by institute, but these broad families cover most options."
//           />

//           <div className="row g-4 align-items-stretch">
//             <div className="col-12 col-lg-7 d-flex">
//               <div className="nitDarkGlassBox w-100">
//                 {MSC_SUBJECT_FAMILIES.map((sf) => (
//                   <div key={sf.title} className="">
//                     <span className="mb-2 d-block">
//                       <strong>{sf.title}:</strong>{" "}
//                       <span className="text-light">{sf.items.join(" • ")}</span>
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="col-12 col-lg-5 d-flex">
//               <div className="sectionCard bg-light border w-100">
//                 <h3 className="h6 mb-3 d-flex align-items-center gap-2">
//                   <Layers3 size={18} className="text-primary" />
//                   <span>How to choose your MSc</span>
//                 </h3>

//                 {[
//                   "Choose a subject you can go deep in for 2–5 more years (MSc + possible PhD).",
//                   "Check lab facilities, dissertation structure and faculty support before choosing.",
//                   "If targeting industry: prefer programmes with practical tools + internship culture.",
//                   "If targeting research: choose programmes with strong projects, publications and mentorship.",
//                 ].map((t) => (
//                   <div key={t} className="mb-1 small">
//                     <span>{t}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 4) After MSc */}
//       <section className="py-5 nitLightGradient">
//         <div className="container">
//           <SectionHeader
//             icon={ClipboardList}
//             title="After MSc: sensible next steps"
//             subtitle="MSc gives depth. Convert it into outcomes through research projects, teaching readiness, or industry exposure."
//           />

//           <div className="row g-3 g-md-4">
//             {AFTER_MSC.map((x) => (
//               <div key={x.title} className="col-12 col-md-6">
//                 <div className="sectionCard h-100">
//                   <h3 className="h6 mb-1">{x.title}</h3>
//                   <p className="small text-muted mb-3">{x.desc}</p>

//                   <ul className="list-unstyled small mb-0">
//                     {x.points.map((p) => (
//                       <li key={p} className="d-flex mb-2">
//                         <span className="me-2">•</span>
//                         <span>{p}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
//             Sensible shortcut: build a strong profile with <b>1 dissertation</b> + <b>1 internship/project</b> + good
//             documentation/presentation.
//           </div>
//         </div>
//       </section>

//       {/* 5) Admission & Documents */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <SectionHeader
//             icon={ClipboardList}
//             title="Admission & Documents"
//             subtitle="Admission rules vary by university and subject mapping."
//           />

//           <div className="row g-4 align-items-stretch">
//             <div className="col-12 col-lg-7 d-flex">
//               <div className="nitDarkGlassBox w-100">
//                 <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
//                   <Sparkles size={16} />
//                   <span>Admission basics</span>
//                 </span>

//                 <ul className="nitDarkList mb-0">
//                   {ADMISSION_POINTS.map((x) => (
//                     <li key={x}>{x}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <div className="col-12 col-lg-5 d-flex">
//               <div className="sectionCard bg-light border w-100">
//                 <h3 className="h6 mb-3 d-flex align-items-center gap-2">
//                   <Layers3 size={18} className="text-primary" />
//                   <span>Common documents checklist</span>
//                 </h3>

//                 <ul className="list-unstyled small mb-0">
//                   {DOCS.map((d) => (
//                     <li key={d} className="mb-2 d-flex">
//                       <span className="me-2">•</span>
//                       <span>{d}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="text-muted small mt-3">
//                   Keep scanned copies ready (PDF/JPG) and verify document format rules during application.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 6) Careers snapshot */}
//       <section className="py-5 nitLightGradient">
//         <div className="container">
//           <SectionHeader
//             icon={GraduationCap}
//             title="Careers snapshot"
//             subtitle="Science PG opens stronger technical roles when combined with practical exposure."
//           />

//           <div className="row g-3">
//             {SNAPSHOT.map((c) => (
//               <div key={c.t} className="col-12 col-md-6 col-lg-4">
//                 <div className="sectionCard h-100">
//                   <h3 className="h6 mb-1">{c.t}</h3>
//                   <p className="small text-muted mb-0">{c.d}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
//             Tip: In MSc, the strongest differentiator is your <b>project/lab exposure</b> + how well you can communicate
//             your work (reports, presentations, interviews).
//           </div>
//         </div>
//       </section>
//       </FrontendLayout>
//     </>
//   );
// }

"use client";

import React from "react";
import { usePage } from '@inertiajs/react';
import {
  Layers3,
  BookOpen,
  FlaskConical,
  Calculator,
  Monitor,
  ClipboardList,
  GraduationCap,
  Sparkles,
  Microscope,
} from "lucide-react";

import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CoursesTabsBar from "../CoursesTabsBar";

// ------------------------------------------------------------------
// Static tabs (not part of courseContent, shared across Streamlined pages)
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
// Icon resolver — DB stores icon as a string (e.g. "FlaskConical")
// ------------------------------------------------------------------
const ICON_MAP = {
  Layers3,
  BookOpen,
  FlaskConical,
  Calculator,
  Monitor,
  ClipboardList,
  GraduationCap,
  Sparkles,
  Microscope,
};

function resolveIcon(name, fallback = FlaskConical) {
  return ICON_MAP[name] || fallback;
}

// ------------------------------------------------------------------
// Static "Quick facts" per PG option — not stored in DB, so kept
// hardcoded here. Matched by option id first, then by title (fallback).
// ------------------------------------------------------------------
const STATIC_DEGREE_FACTS = {
  "msc-core-sciences": [
    { k: "Duration", v: "2 years (typical)" },
    { k: "Eligibility", v: "B.Sc / related graduation (rules vary)" },
    { k: "Admission", v: "Merit / Entrance (varies)" },
    { k: "Best for", v: "Research • Teaching • Technical roles" },
  ],
  "msc-maths-statistics": [
    { k: "Duration", v: "2 years (typical)" },
    { k: "Eligibility", v: "B.Sc with Maths/Stats (rules vary)" },
    { k: "Admission", v: "Merit / Entrance (varies)" },
    { k: "Best for", v: "Analytics • Research • Teaching" },
  ],
  "msc-computer-science-it": [
    { k: "Duration", v: "2 years (typical)" },
    { k: "Eligibility", v: "B.Sc/BCA/related (rules vary)" },
    { k: "Admission", v: "Merit / Entrance (varies)" },
    { k: "Best for", v: "Software • Data • IT careers" },
  ],
  "allied-science-pg": [
    { k: "Duration", v: "2 years (typical)" },
    { k: "Eligibility", v: "Related graduation (mapping varies)" },
    { k: "Admission", v: "Merit / Entrance (varies)" },
    { k: "Best for", v: "Specialisation • Industry • Research" },
  ],
};

// Fallback by matching keywords in the title, in case the DB id doesn't
// match the keys above exactly.
const STATIC_DEGREE_FACTS_BY_TITLE = [
  { match: /math|statistic/i, facts: STATIC_DEGREE_FACTS["msc-maths-statistics"] },
  { match: /computer|it\b/i, facts: STATIC_DEGREE_FACTS["msc-computer-science-it"] },
  { match: /allied/i, facts: STATIC_DEGREE_FACTS["allied-science-pg"] },
  { match: /m\.?sc.*(core|science)/i, facts: STATIC_DEGREE_FACTS["msc-core-sciences"] },
];

function getStaticFacts(opt) {
  if (opt.id && STATIC_DEGREE_FACTS[opt.id]) return STATIC_DEGREE_FACTS[opt.id];
  const byTitle = STATIC_DEGREE_FACTS_BY_TITLE.find((entry) => entry.match.test(opt.title || ""));
  return byTitle ? byTitle.facts : null;
}

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

// ------------------------------------------------------------------
// Page
// ------------------------------------------------------------------
export default function SciencePGDegree({ courseContent: courseContentProp }) {
  const { props } = usePage();
  const courseContent = courseContentProp || props.courseContent || {};

  const {
    intro_heading,
    intro_description,
    intro_description_secondary,
    snapshot = [],
    subject_families = [],
    degree_options = [],
    after_degree = [],
    admission_points = [],
    documents = [],
    careers_snapshot = [],
  } = courseContent;

  return (
    <>
      <FrontendLayout>
        <HeroInner
          title={intro_heading || "Science PG Courses (M.Sc & Allied)"}
          breadcrumb="M.Sc & Allied"
        />
        <CoursesTabsBar tabs={TABS} activeId="msc" />

        {/* 1) ABOUT + SNAPSHOT */}
        <section className="py-4 py-md-5">
          <div className="container">
            <div className="row g-4 align-items-start">
              <div className="col-12 col-lg-7">
                <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                  <BookOpen size={18} className="text-primary" />
                  <span>{intro_heading || "About Science Post Graduation"}</span>
                </h2>

                {intro_description && <p className="sectionSub">{intro_description}</p>}
                {intro_description_secondary && (
                  <p className="sectionSub mb-0">{intro_description_secondary}</p>
                )}
              </div>

              {snapshot.length > 0 && (
                <div className="col-12 col-lg-5">
                  <div className="sectionCard bg-light border">
                    <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                      <Layers3 size={18} className="text-primary" />
                      <span>Quick Snapshot</span>
                    </h3>

                    <MiniDL items={snapshot.map((s) => ({ k: s.key, v: s.value }))} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 2) MSc options */}
        {degree_options.length > 0 && (
          <section className="py-5 nitLightGradient">
            <div className="container">
              <SectionHeader
                icon={FlaskConical}
                title="M.Sc & allied options"
                subtitle="Pick a subject you can study deeply and work with practically (labs/projects). That's what decides outcomes."
              />

              <div className="row g-4 align-items-stretch">
                {degree_options.map((opt) => {
                  const Icon = resolveIcon(opt.icon);
                  const facts =
                    (opt.facts?.length > 0 && opt.facts.map((f) => ({ k: f.k, v: f.v }))) ||
                    getStaticFacts(opt) ||
                    [opt.level && { k: "Level", v: opt.level }, opt.tag && { k: "Category", v: opt.tag }].filter(Boolean);

                  return (
                    <div key={opt.id || opt.title} className="col-12 col-lg-6 d-flex">
                      <div className="nitDarkGlassBox w-100">
                        <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                          <Icon size={16} />
                          <span>{opt.title}</span>
                        </span>

                        {opt.description && <p className="small mb-3">{opt.description}</p>}

                        {Array.isArray(opt.keyPoints) && opt.keyPoints.length > 0 && (
                          <ul className="nitDarkList mb-3">
                            {opt.keyPoints.map((p) => (
                              <li key={p}>{p}</li>
                            ))}
                          </ul>
                        )}

                        {facts.length > 0 && (
                          <div className="sectionCard bg-light border">
                            <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                              <Layers3 size={18} className="text-primary" />
                              <span>Quick facts</span>
                            </h3>
                            <MiniDL items={facts} />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
                Pro tip: The biggest difference-maker in MSc is your <b>dissertation/project</b>. Treat it like a portfolio
                piece, not a formality.
              </div>
            </div>
          </section>
        )}

        {/* 3) Subject families + choice tips */}
        {subject_families.length > 0 && (
          <section className="py-4 py-md-5">
            <div className="container">
              <SectionHeader
                icon={BookOpen}
                title="Common MSc subject families"
                subtitle="Exact programme names vary by institute, but these broad families cover most options."
              />

              <div className="row g-4 align-items-stretch">
                <div className="col-12 col-lg-7 d-flex">
                  <div className="nitDarkGlassBox w-100">
                    {subject_families.map((sf) => (
                      <div key={sf.title} className="">
                        <span className="mb-2 d-block">
                          <strong>{sf.title}:</strong>{" "}
                          <span className="text-light">{(sf.items || []).join(" • ")}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-12 col-lg-5 d-flex">
                  <div className="sectionCard bg-light border w-100">
                    <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                      <Layers3 size={18} className="text-primary" />
                      <span>How to choose your MSc</span>
                    </h3>

                    {[
                      "Choose a subject you can go deep in for 2–5 more years (MSc + possible PhD).",
                      "Check lab facilities, dissertation structure and faculty support before choosing.",
                      "If targeting industry: prefer programmes with practical tools + internship culture.",
                      "If targeting research: choose programmes with strong projects, publications and mentorship.",
                    ].map((t) => (
                      <div key={t} className="mb-1 small">
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 4) After MSc */}
        {after_degree.length > 0 && (
          <section className="py-5 nitLightGradient">
            <div className="container">
              <SectionHeader
                icon={ClipboardList}
                title="After MSc: sensible next steps"
                subtitle="MSc gives depth. Convert it into outcomes through research projects, teaching readiness, or industry exposure."
              />

              <div className="row g-3 g-md-4">
                {after_degree.map((x) => (
                  <div key={x.title} className="col-12 col-md-6">
                    <div className="sectionCard h-100">
                      <h3 className="h6 mb-1">{x.title}</h3>
                      {x.desc && <p className="small text-muted mb-3">{x.desc}</p>}

                      {Array.isArray(x.points) && x.points.length > 0 && (
                        <ul className="list-unstyled small mb-0">
                          {x.points.map((p) => (
                            <li key={p} className="d-flex mb-2">
                              <span className="me-2">•</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
                Sensible shortcut: build a strong profile with <b>1 dissertation</b> + <b>1 internship/project</b> + good
                documentation/presentation.
              </div>
            </div>
          </section>
        )}

        {/* 5) Admission & Documents */}
        {(admission_points.length > 0 || documents.length > 0) && (
          <section className="py-4 py-md-5">
            <div className="container">
              <SectionHeader
                icon={ClipboardList}
                title="Admission & Documents"
                subtitle="Admission rules vary by university and subject mapping."
              />

              <div className="row g-4 align-items-stretch">
                {admission_points.length > 0 && (
                  <div className="col-12 col-lg-7 d-flex">
                    <div className="nitDarkGlassBox w-100">
                      <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                        <Sparkles size={16} />
                        <span>Admission basics</span>
                      </span>

                      <ul className="nitDarkList mb-0">
                        {admission_points.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {documents.length > 0 && (
                  <div className="col-12 col-lg-5 d-flex">
                    <div className="sectionCard bg-light border w-100">
                      <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                        <Layers3 size={18} className="text-primary" />
                        <span>Common documents checklist</span>
                      </h3>

                      <ul className="list-unstyled small mb-0">
                        {documents.map((d) => (
                          <li key={d} className="mb-2 d-flex">
                            <span className="me-2">•</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="text-muted small mt-3">
                        Keep scanned copies ready (PDF/JPG) and verify document format rules during application.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* 6) Careers snapshot */}
        {careers_snapshot.length > 0 && (
          <section className="py-5 nitLightGradient">
            <div className="container">
              <SectionHeader
                icon={GraduationCap}
                title="Careers snapshot"
                subtitle="Science PG opens stronger technical roles when combined with practical exposure."
              />

              <div className="row g-3">
                {careers_snapshot.map((c) => (
                  <div key={c.title} className="col-12 col-md-6 col-lg-4">
                    <div className="sectionCard h-100">
                      <h3 className="h6 mb-1">{c.title}</h3>
                      <p className="small text-muted mb-0">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
                Tip: In MSc, the strongest differentiator is your <b>project/lab exposure</b> + how well you can communicate
                your work (reports, presentations, interviews).
              </div>
            </div>
          </section>
        )}
      </FrontendLayout>
    </>
  );
}

