// "use client";

// import React from "react";
// import {
//   Layers3,
//   BookOpen,
//   GraduationCap,
//   Users,
//   ScrollText,
//   ClipboardList,
//   Sparkles,
// } from "lucide-react";

// import HeroInner from "@/components/Frontend/Hero/HeroInner";
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
// // Data – Arts PG (MA / MSW & allied)
// // ------------------------------------------------------------------
// const PG_OPTIONS = [
//   {
//     title: "M.A (Master of Arts)",
//     icon: GraduationCap,
//     about:
//       "The most common Arts postgraduate degree. It deepens your subject knowledge and supports teaching, research and competitive exam preparation.",
//     points: [
//       "Best for subject depth, academics and long-term specialization",
//       "Useful for teaching track and higher studies (PhD/research)",
//       "Also supports competitive exams and policy/administration roles (depending on subject)",
//     ],
//     facts: [
//       { k: "Duration", v: "2 years (typical)" },
//       { k: "Eligibility", v: "Graduation (subject rules vary)" },
//       { k: "Admission", v: "Merit / Entrance (varies)" },
//       { k: "Best for", v: "Teaching • Research • Exams • Specialist roles" },
//     ],
//   },
//   {
//     title: "M.S.W (Master of Social Work)",
//     icon: Users,
//     about:
//       "A professional PG route for social sector careers. Strong for NGO leadership, development projects, counselling support and CSR roles.",
//     points: [
//       "Best progression after BSW, but open to other graduates too (as per rules)",
//       "Fieldwork/internships are central to MSW outcomes",
//       "Leads to program management, CSR, community development roles",
//     ],
//     facts: [
//       { k: "Duration", v: "2 years (typical)" },
//       { k: "Eligibility", v: "Graduation (rules vary)" },
//       { k: "Admission", v: "Merit / Entrance (varies)" },
//       { k: "Best for", v: "NGO • CSR • Social sector leadership" },
//     ],
//   },
//   {
//     title: "Allied Arts PG (subject-wise masters)",
//     icon: ScrollText,
//     about:
//       "Many universities offer PG programmes aligned to Arts & social sciences—examples include Public Administration, Sociology, Political Science, Psychology and more.",
//     points: [
//       "Choose based on long-term career goal (teaching/research/governance/social sector)",
//       "Subject choice matters more than degree name alone",
//       "Build projects, writing and field exposure during PG",
//     ],
//     facts: [
//       { k: "Duration", v: "2 years (typical)" },
//       { k: "Eligibility", v: "Graduation (subject mapping varies)" },
//       { k: "Admission", v: "Merit / Entrance (varies)" },
//       { k: "Best for", v: "Specialisation • PG outcomes" },
//     ],
//   },
// ];

// const MA_SUBJECT_FAMILIES = [
//   { title: "Languages & Literature", items: ["Bengali", "English", "Hindi", "Urdu", "Sanskrit", "Other languages"] },
//   { title: "Humanities", items: ["History", "Philosophy", "Geography"] },
//   { title: "Social Sciences", items: ["Political Science", "Sociology", "Psychology", "Public Administration"] },
//   { title: "Economics & Interdisciplinary", items: ["Economics", "Development studies (where available)"] },
// ];

// const AFTER_PG = [
//   {
//     title: "Teaching & Academics",
//     desc: "PG builds subject depth and improves eligibility for academic roles (as per norms).",
//     points: [
//       "Strong writing + conceptual clarity matters most",
//       "Choose dissertation/project topics carefully",
//       "Follow eligibility rules for teaching recruitment",
//     ],
//   },
//   {
//     title: "Research Path (PhD / Fellowships)",
//     desc: "For students who enjoy deep study and research work in a subject domain.",
//     points: [
//       "Develop research writing + methodology basics",
//       "Build a clean academic profile + references",
//       "Track fellowships and university research admissions",
//     ],
//   },
//   {
//     title: "Social Sector / CSR (MSW focus)",
//     desc: "Field-based careers in NGOs, CSR foundations, development and community programs.",
//     points: [
//       "Internships/fieldwork is the real differentiator",
//       "Build program documentation + reporting skills",
//       "Leadership grows with experience + networks",
//     ],
//   },
//   {
//     title: "Competitive Exams & Policy Roles",
//     desc: "PG strengthens your subject base for exams and policy/governance work.",
//     points: [
//       "Answer writing and reading depth improves results",
//       "Select optional subject wisely (if applicable)",
//       "Stay consistent with current affairs + core concepts",
//     ],
//   },
// ];

// const ADMISSION_POINTS = [
//   "PG admissions can be merit-based or entrance-based depending on the university.",
//   "Some subjects require graduation in the same/related discipline; rules vary by institute.",
//   "Check reservation/category rules and domicile requirements where applicable.",
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
//   { t: "Teaching Track", d: "Lecturer/teaching pathway (as per eligibility) + coaching/academic roles" },
//   { t: "Research & PhD", d: "PhD, research assistant/project roles, fellowships" },
//   { t: "NGO / CSR", d: "Program officer, project coordinator, CSR roles (MSW strong)" },
//   { t: "Policy & Governance", d: "Policy support, administration roles, think tanks (subject dependent)" },
//   { t: "Content / Communication", d: "Writing, communication, media + social sector comms" },
//   { t: "Competitive Exams", d: "State/national exams supported by deep subject base" },
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
// export default function ArtsPGDegree() {
//   return (
//     <>
//     <FrontendLayout>
//       <HeroInner title="Arts PG Courses (MA, MSW & Allied)" breadcrumb="MA, MSW & Allied" />
//       <CoursesTabsBar tabs={TABS} activeId="ma" />

//       {/* 1) ABOUT + SNAPSHOT */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <div className="row g-4 align-items-start">
//             <div className="col-12 col-lg-7">
//               <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
//                 <BookOpen size={18} className="text-primary" />
//                 <span>About Arts Post Graduation</span>
//               </h2>

//               <p className="sectionSub">
//                 Arts postgraduate study helps you go deeper into a subject and improve long-term career outcomes. It is
//                 most useful when you have a clear goal—teaching, research, social sector careers, policy/administration,
//                 or competitive exam preparation.
//               </p>

//               <p className="sectionSub mb-0">
//                 In streamlined Arts PG routes, the most common options are <b>M.A</b> (subject masters), <b>M.S.W</b>{" "}
//                 (professional social work), and other allied PG programmes in humanities and social sciences depending on
//                 the university.
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
//                     { k: "Main PG routes", v: "MA • MSW • Allied Arts PG" },
//                     { k: "Typical duration", v: "2 years" },
//                     { k: "Entry", v: "After graduation" },
//                     { k: "Best for", v: "Teaching • Research • NGO/CSR • Exams" },
//                     { k: "Key success factor", v: "Projects/fieldwork + writing + clarity" },
//                   ]}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2) PG OPTIONS – polished & sensible */}
//       <section className="py-5 nitLightGradient">
//         <div className="container">
//           <SectionHeader
//             icon={GraduationCap}
//             title="Arts PG options (MA, MSW & allied)"
//             subtitle="Choose based on your long-term plan. PG works best when you build practical work (projects/fieldwork) along with academics."
//           />

//           <div className="row g-4 align-items-stretch">
//             {PG_OPTIONS.map((opt) => {
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
//             Pro tip: PG outcomes become stronger when you do <b>project work</b>, build <b>writing + presentation</b>{" "}
//             skills, and collect 1–2 solid recommendation references.
//           </div>
//         </div>
//       </section>

//       {/* 3) MA subject families (clean grouped list) */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <SectionHeader
//             icon={BookOpen}
//             title="Common MA subject families"
//             subtitle="Universities offer MA across languages, humanities and social sciences. Exact names vary."
//           />

//           <div className="row g-4 align-items-stretch">
//             <div className="col-12 col-lg-7 d-flex">
//               <div className="nitDarkGlassBox w-100">
//                 {MA_SUBJECT_FAMILIES.map((sf) => (
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
//                   <span>How to choose your MA</span>
//                 </h3>

//                 {[
//                   "Choose a subject you can study deeply for 2–5 more years (PG + possible PhD).",
//                   "If your goal is teaching/research, prefer strong academic departments and dissertation support.",
//                   "If your goal is exams/policy, choose subjects with GS overlap and answer-writing scope.",
//                   "Build a portfolio: writing samples, projects, presentations, field exposure (where relevant).",
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

//       {/* 4) After PG – sensible next steps */}
//       <section className="py-5 nitLightGradient">
//         <div className="container">
//           <SectionHeader
//             icon={ClipboardList}
//             title="After MA/MSW: sensible next steps"
//             subtitle="PG gives you depth. Now convert it into outcomes through research, teaching readiness, or real-world exposure."
//           />

//           <div className="row g-3 g-md-4">
//             {AFTER_PG.map((x) => (
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
//             Sensible shortcut: treat your PG like a “portfolio build” — 1 dissertation/project + 1 internship/fieldwork +
//             strong writing/presentation = very strong profile.
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
//             icon={BookOpen}
//             title="Careers snapshot"
//             subtitle="PG opens stronger roles when combined with projects, fieldwork and communication skills."
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
//             Tip: For MA/MSW, strong outcomes come from <b>writing + projects + field exposure</b>. Use your PG to build a
//             visible, credible profile.
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
  GraduationCap,
  Users,
  ScrollText,
  ClipboardList,
  Sparkles,
} from "lucide-react";

import HeroInner from "@/components/Frontend/Hero/HeroInner";
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
// Icon resolver — DB stores icon as a string (e.g. "GraduationCap")
// ------------------------------------------------------------------
const ICON_MAP = {
  Layers3,
  BookOpen,
  GraduationCap,
  Users,
  ScrollText,
  ClipboardList,
  Sparkles,
};

function resolveIcon(name, fallback = GraduationCap) {
  return ICON_MAP[name] || fallback;
}

// ------------------------------------------------------------------
// Static "Quick facts" per PG option — not stored in DB, so kept
// hardcoded here. Matched by option id first, then by title (fallback).
// ------------------------------------------------------------------
const STATIC_DEGREE_FACTS = {
  "ma-master-of-arts": [
    { k: "Duration", v: "2 years (typical)" },
    { k: "Eligibility", v: "Graduation (subject rules vary)" },
    { k: "Admission", v: "Merit / Entrance (varies)" },
    { k: "Best for", v: "Teaching • Research • Exams • Specialist roles" },
  ],
  "msw-master-of-social-work": [
    { k: "Duration", v: "2 years (typical)" },
    { k: "Eligibility", v: "Graduation (rules vary)" },
    { k: "Admission", v: "Merit / Entrance (varies)" },
    { k: "Best for", v: "NGO • CSR • Social sector leadership" },
  ],
  "allied-arts-pg": [
    { k: "Duration", v: "2 years (typical)" },
    { k: "Eligibility", v: "Graduation (subject mapping varies)" },
    { k: "Admission", v: "Merit / Entrance (varies)" },
    { k: "Best for", v: "Specialisation • PG outcomes" },
  ],
};

// Fallback by matching keywords in the title, in case the DB id doesn't
// match the keys above exactly.
const STATIC_DEGREE_FACTS_BY_TITLE = [
  { match: /m\.?a\b|master of arts/i, facts: STATIC_DEGREE_FACTS["ma-master-of-arts"] },
  { match: /m\.?s\.?w|social work/i, facts: STATIC_DEGREE_FACTS["msw-master-of-social-work"] },
  { match: /allied/i, facts: STATIC_DEGREE_FACTS["allied-arts-pg"] },
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
export default function ArtsPGDegree({ courseContent: courseContentProp }) {
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
          title={intro_heading || "Arts PG Courses (MA, MSW & Allied)"}
          breadcrumb="MA, MSW & Allied"
        />
        <CoursesTabsBar tabs={TABS} activeId="ma" />

        {/* 1) ABOUT + SNAPSHOT */}
        <section className="py-4 py-md-5">
          <div className="container">
            <div className="row g-4 align-items-start">
              <div className="col-12 col-lg-7">
                <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                  <BookOpen size={18} className="text-primary" />
                  <span>{intro_heading || "About Arts Post Graduation"}</span>
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

        {/* 2) PG OPTIONS */}
        {degree_options.length > 0 && (
          <section className="py-5 nitLightGradient">
            <div className="container">
              <SectionHeader
                icon={GraduationCap}
                title="Arts PG options (MA, MSW & allied)"
                subtitle="Choose based on your long-term plan. PG works best when you build practical work (projects/fieldwork) along with academics."
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
                Pro tip: PG outcomes become stronger when you do <b>project work</b>, build <b>writing + presentation</b>{" "}
                skills, and collect 1–2 solid recommendation references.
              </div>
            </div>
          </section>
        )}

        {/* 3) MA subject families */}
        {subject_families.length > 0 && (
          <section className="py-4 py-md-5">
            <div className="container">
              <SectionHeader
                icon={BookOpen}
                title="Common MA subject families"
                subtitle="Universities offer MA across languages, humanities and social sciences. Exact names vary."
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
                      <span>How to choose your MA</span>
                    </h3>

                    {[
                      "Choose a subject you can study deeply for 2–5 more years (PG + possible PhD).",
                      "If your goal is teaching/research, prefer strong academic departments and dissertation support.",
                      "If your goal is exams/policy, choose subjects with GS overlap and answer-writing scope.",
                      "Build a portfolio: writing samples, projects, presentations, field exposure (where relevant).",
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

        {/* 4) After PG: sensible next steps */}
        {after_degree.length > 0 && (
          <section className="py-5 nitLightGradient">
            <div className="container">
              <SectionHeader
                icon={ClipboardList}
                title="After MA/MSW: sensible next steps"
                subtitle="PG gives you depth. Now convert it into outcomes through research, teaching readiness, or real-world exposure."
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
                Sensible shortcut: treat your PG like a "portfolio build" — 1 dissertation/project + 1 internship/fieldwork +
                strong writing/presentation = very strong profile.
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
                icon={BookOpen}
                title="Careers snapshot"
                subtitle="PG opens stronger roles when combined with projects, fieldwork and communication skills."
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
                Tip: For MA/MSW, strong outcomes come from <b>writing + projects + field exposure</b>. Use your PG to build a
                visible, credible profile.
              </div>
            </div>
          </section>
        )}
      </FrontendLayout>
    </>
  );
}

