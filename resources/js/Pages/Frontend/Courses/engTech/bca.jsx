// "use client";

// import React, { useMemo } from "react";
// import HeroInner from "@/Components/Frontend/Hero/HeroInner";
// import FrontendLayout from '@/Layouts/FrontendLayout';
// import CoursesTabsBar from "../CoursesTabsBar";
// import {
//   Layers3,
//   Cpu,
//   GraduationCap,
//   ClipboardList,
//   ShieldCheck,
//   Users,
//   Building2,
//   Briefcase,
//   Code2,
//   Database,
//   Network,
//   BadgeCheck,
// } from "lucide-react";

// /* -------------------------------------------------------------
//    Tabs (shared across Engineering, Technology & IT)
// ------------------------------------------------------------- */

// const TABS = [
//   { id: "btech", label: "B.Tech / B.E", href: '/courses/btech-be-programs' },
//   { id: "barch", label: "B.Arch", href: '/courses/barch' },
//   { id: "mtech", label: "M.Tech", href: '/courses/mtech' },
//   { id: "bca", label: "BCA", href: '/courses/bca' },
//   { id: "bscc", label: "B.Sc Computer Science / IT", href: '/courses/bsc-computer-science-it' },
//   { id: "mca", label: "MCA", href: '/courses/mca' },
//   { id: "msc", label: "M.Sc Computer Science / IT", href: '/courses/msc' },
// ];

// /* -------------------------------------------------------------
//    DATA – BCA (Career Book aligned)
// ------------------------------------------------------------- */

// const BCA_LADDER = [
//   {
//     title: "BCA (Bachelor of Computer Applications)",
//     duration: "3 Years",
//     focus:
//       "UG programme focused on computer applications, programming fundamentals, databases and software development basics.",
//   },
//   {
//     title: "Entry-level IT Jobs",
//     duration: "After BCA",
//     focus:
//       "Software trainee, junior developer, support roles, testing, web/app development (depending on skills).",
//   },
//   {
//     title: "MCA (Master of Computer Applications)",
//     duration: "2 Years (varies by rules)",
//     focus:
//       "PG route for deeper CS/IT learning and better career scope (aligned with software/product roles).",
//   },
//   {
//     title: "Specialisation + Growth",
//     duration: "Continuous",
//     focus:
//       "Full-stack, data, cloud, cybersecurity, mobile apps—choose one track and go deep for higher roles.",
//   },
// ];

// const WHO_SHOULD_DO = [
//   {
//     title: "Students who want IT without Engineering",
//     desc: "BCA is a strong route for software careers without a B.Tech degree.",
//     icon: GraduationCap,
//   },
//   {
//     title: "Students interested in programming + applications",
//     desc: "Best for those who want to build software, websites and apps.",
//     icon: Code2,
//   },
//   {
//     title: "Students planning MCA later",
//     desc: "BCA + MCA is a common ladder for long-term software growth.",
//     icon: ShieldCheck,
//   },
//   {
//     title: "Students who will build skills alongside degree",
//     desc: "Outcome depends heavily on projects, portfolio and internships.",
//     icon: Briefcase,
//   },
// ];

// const CORE_SUBJECTS = [
//   "Programming fundamentals (C/C++/Java/Python depending on university)",
//   "Data Structures & Algorithms (foundation level)",
//   "Database Management Systems (DBMS)",
//   "Operating Systems basics",
//   "Computer Networks basics",
//   "Web development fundamentals",
// ];

// const CAREER_ROLES = [
//   "Software Developer (Junior)",
//   "Web Developer",
//   "App Developer (with skills)",
//   "QA / Testing",
//   "Technical Support / IT Support",
//   "Database / Backend trainee roles",
// ];

// const WORK_SETTINGS = [
//   {
//     title: "Software / IT Services",
//     desc: "Web/app development, support, testing and tech services roles.",
//     icon: Cpu,
//   },
//   {
//     title: "Product Companies / Startups",
//     desc: "Developer roles if you have strong projects and interview readiness.",
//     icon: Briefcase,
//   },
//   {
//     title: "Data & Database Teams",
//     desc: "DB support, data operations, analytics support roles (with skills).",
//     icon: Database,
//   },
//   {
//     title: "Networking / IT Operations",
//     desc: "IT support, systems and basic networking operations roles.",
//     icon: Network,
//   },
// ];

// const ELIGIBILITY_NOTES = [
//   "Usually after Class 12 (any stream) — criteria varies by university.",
//   "Some universities prefer Mathematics/Computer in Class 12, but many accept all streams.",
//   "Admissions may be merit-based or entrance-based depending on institute.",
//   "To compete in IT jobs, you must build skills beyond the syllabus.",
// ];

// const ADMISSION_NOTES = [
//   "Choose a college with good computer labs, faculty and internship support.",
//   "Check if they include modern development skills or only theory.",
//   "Ask about placement support, alumni outcomes and practical project work.",
// ];

// const COMMON_DOCS = [
//   "Class 10 & 12 marksheets",
//   "ID proof (Aadhaar etc.)",
//   "Photo + signature",
//   "Category/EWS/Income certificate (if applicable)",
//   "Domicile (if required)",
// ];

// const BUILD_PROFILE = [
//   "Learn one programming language well (Java/Python/JS)",
//   "Build 3–5 strong projects (portfolio/GitHub)",
//   "Practice DSA + logic (basic to intermediate)",
//   "Internship or real freelancing work (even small)",
//   "Communication + interview skills",
// ];

// /* -------------------------------------------------------------
//    UI Helpers
// ------------------------------------------------------------- */

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

// /* -------------------------------------------------------------
//    PAGE
// ------------------------------------------------------------- */

// export default function BCAPage() {
//   const snapshot = useMemo(
//     () => [
//       { k: "Degree type", v: "UG Computer Applications Degree" },
//       { k: "Duration", v: "3 Years" },
//       { k: "Eligibility", v: "Class 12 (criteria varies)" },
//       { k: "Best for", v: "Software careers without Engineering" },
//       { k: "Strong ladder", v: "BCA → MCA → specialisation" },
//     ],
//     []
//   );

//   return (
//     <>
//     <FrontendLayout>
//       <HeroInner title="BCA (Bachelor of Computer Applications)" breadcrumb="Engineering, Technology & IT → BCA" />

//       {/* Tabs bar */}
//       <CoursesTabsBar tabs={TABS} activeId="bca" />

//       {/* 1) ABOUT + SNAPSHOT */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <div className="row g-4 align-items-start">
//             <div className="col-12 col-lg-7">
//               <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
//                 <Cpu size={18} className="text-primary" />
//                 <span>About BCA</span>
//               </h2>

//               <p className="sectionSub">
//                 BCA (Bachelor of Computer Applications) is an undergraduate programme focused on computer applications,
//                 programming and software fundamentals. It is a popular route for students who want to enter IT without
//                 pursuing B.Tech.
//               </p>

//               <p className="sectionSub mb-0">
//                 Your career outcome depends heavily on skills: projects, internships, coding practice and real software
//                 exposure matter more than marks alone.
//               </p>
//             </div>

//             <div className="col-12 col-lg-5">
//               <div className="sectionCard bg-light border">
//                 <h3 className="h6 mb-3 d-flex align-items-center gap-2">
//                   <Layers3 size={18} className="text-primary" />
//                   <span>Quick Snapshot</span>
//                 </h3>
//                 <MiniDL items={snapshot} />
//               </div>

//               <div className="sectionCard bg-light border mt-3">
//                 <h3 className="h6 mb-2 d-flex align-items-center gap-2">
//                   <BadgeCheck size={18} className="text-primary" />
//                   <span>Reality check</span>
//                 </h3>
//                 <p className="small text-muted mb-0">
//                   A BCA degree helps, but your projects + coding skill decide your placement and job role.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2) BCA LADDER */}
//       <section className="py-5 nitLightGradient">
//         <div className="container">
//           <SectionHeader
//             icon={GraduationCap}
//             title="BCA career ladder"
//             subtitle="BCA is a strong start for IT careers, especially if you build skills alongside the degree."
//           />

//           <div className="row g-3">
//             {BCA_LADDER.map((c) => (
//               <div key={c.title} className="col-12 col-md-6">
//                 <div className="sectionCard h-100">
//                   <h3 className="h6 mb-1">{c.title}</h3>
//                   <p className="small text-muted mb-1">{c.duration}</p>
//                   <p className="small text-muted mb-0">{c.focus}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
//             Tip: If you want long-term growth, BCA + MCA + a strong portfolio is a powerful ladder.
//           </div>
//         </div>
//       </section>

//       {/* 3) WHO SHOULD DO BCA */}
//       <section className="py-5">
//         <div className="container">
//           <SectionHeader icon={ShieldCheck} title="Who should do BCA" subtitle="BCA is best when your goal is software and you commit to skill building." />

//           <div className="row g-3">
//             {WHO_SHOULD_DO.map((x) => {
//               const Icon = x.icon;
//               return (
//                 <div key={x.title} className="col-12 col-md-6">
//                   <div className="sectionCard h-100">
//                     <h3 className="h6 mb-1 d-flex align-items-center gap-2">
//                       <Icon size={16} className="text-primary" />
//                       <span>{x.title}</span>
//                     </h3>
//                     <p className="small text-muted mb-0">{x.desc}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 4) CORE SUBJECTS + ROLES */}
//       <section className="py-5 nitLightGradient">
//         <div className="container">
//           <SectionHeader icon={Code2} title="Core subjects & typical roles" subtitle="Syllabus varies, but these are common core areas and entry roles." />

//           <div className="row g-4 align-items-stretch">
//             <div className="col-12 col-lg-6 d-flex">
//               <div className="sectionCard h-100">
//                 <h3 className="h6 mb-3">Core subjects (common)</h3>
//                 <ul className="list-unstyled small mb-0">
//                   {CORE_SUBJECTS.map((s) => (
//                     <li key={s} className="mb-2 d-flex">
//                       <span className="me-2">•</span>
//                       <span>{s}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <div className="col-12 col-lg-6 d-flex">
//               <div className="sectionCard h-100">
//                 <h3 className="h6 mb-3">Typical entry roles</h3>
//                 <ul className="list-unstyled small mb-0">
//                   {CAREER_ROLES.map((r) => (
//                     <li key={r} className="mb-2 d-flex">
//                       <span className="me-2">•</span>
//                       <span>{r}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 5) WHERE YOU WORK */}
//       <section className="py-5">
//         <div className="container">
//           <SectionHeader icon={Briefcase} title="Where BCA graduates work" subtitle="Your job depends on your skill track: development, data, ops or support." />

//           <div className="row g-3">
//             {WORK_SETTINGS.map((w) => {
//               const Icon = w.icon;
//               return (
//                 <div key={w.title} className="col-12 col-md-6 col-lg-3">
//                   <div className="sectionCard h-100">
//                     <h3 className="h6 mb-1 d-flex align-items-center gap-2">
//                       <Icon size={16} className="text-primary" />
//                       <span>{w.title}</span>
//                     </h3>
//                     <p className="small text-muted mb-0">{w.desc}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 6) ADMISSION & DOCUMENTS */}
//       <section className="py-4 py-md-5 nitLightGradient">
//         <div className="container">
//           <SectionHeader icon={ClipboardList} title="Admission & documents" subtitle="A practical checklist before you apply." />

//           <div className="row g-4 align-items-stretch">
//             <div className="col-12 col-lg-7 d-flex">
//               <div className="nitDarkGlassBox w-100">
//                 <ul className="nitDarkList mb-0">
//                   {ELIGIBILITY_NOTES.map((x) => (
//                     <li key={x}>{x}</li>
//                   ))}
//                 </ul>

//                 <div className="small text-muted mt-3">
//                   <span className="fw-semibold text-white">Reminder:</span> eligibility differs by university—always verify official notification.
//                 </div>
//               </div>
//             </div>

//             <div className="col-12 col-lg-5 d-flex">
//               <div className="sectionCard bg-light border w-100">
//                 <h3 className="h6 mb-3 d-flex align-items-center gap-2">
//                   <Building2 size={18} className="text-primary" />
//                   <span>Common documents</span>
//                 </h3>

//                 <ul className="list-unstyled small mb-0">
//                   {COMMON_DOCS.map((d) => (
//                     <li key={d} className="mb-2 d-flex">
//                       <span className="me-2">•</span>
//                       <span>{d}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
//             Tip: Ask about internships, practical projects and placement outcomes—those decide real value.
//           </div>
//         </div>
//       </section>

//       {/* 7) BUILD YOUR PROFILE */}
//       <section className="py-5">
//         <div className="container">
//           <SectionHeader icon={Users} title="Build your profile during BCA" subtitle="BCA success is about portfolio, practice and real projects." />

//           <div className="row g-3">
//             {BUILD_PROFILE.map((t) => (
//               <div key={t} className="col-12 col-md-6 col-lg-4">
//                 <div className="sectionCard h-100">
//                   <h3 className="h6 mb-1">Key focus</h3>
//                   <p className="small text-muted mb-0">{t}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
//             Sensible shortcut: build projects every semester and do at least one internship—this unlocks strong IT roles.
//           </div>
//         </div>
//       </section>
//       </FrontendLayout>
//     </>
//   );
// }

"use client";

import React, { useMemo } from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CoursesTabsBar from "../CoursesTabsBar";
import {
  Layers3,
  Cpu,
  GraduationCap,
  ClipboardList,
  ShieldCheck,
  Users,
  Building2,
  Briefcase,
  Code2,
  Database,
  Network,
  BadgeCheck,
} from "lucide-react";

/* -------------------------------------------------------------
   Tabs (shared across Engineering, Technology & IT)
------------------------------------------------------------- */

const TABS = [
  { id: "btech", label: "B.Tech / B.E", href: '/courses/btech-be-programs' },
  { id: "barch", label: "B.Arch", href: '/courses/barch' },
  { id: "mtech", label: "M.Tech", href: '/courses/mtech' },
  { id: "bca", label: "BCA", href: '/courses/bca' },
  { id: "bscc", label: "B.Sc Computer Science / IT", href: '/courses/bsc-computer-science-it' },
  { id: "mca", label: "MCA", href: '/courses/mca' },
  { id: "msc", label: "M.Sc Computer Science / IT", href: '/courses/msc' },
];

/* -------------------------------------------------------------
   UI Helpers
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
          <dd className={`col-7 ${idx === items.length - 1 ? "mb-0" : "mb-2"}`}>
            {it.v}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

/* -------------------------------------------------------------
   PAGE
------------------------------------------------------------- */

export default function BCAPage({ courseContent }) {
  // Debug log
  console.log('=== BCAPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const bcaLadder = courseContent?.bca_ladder || [];
  const whoShouldDo = courseContent?.who_should_do || [];
  const coreSubjects = courseContent?.core_areas || [];
  const careerRoles = courseContent?.typical_roles || [];
  const workSettings = courseContent?.work_settings || [];
  const eligibilityNotes = courseContent?.eligibility_notes || [];
  const admissionNotes = courseContent?.admission_notes || [];
  const commonDocs = courseContent?.common_docs || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About BCA";
  const introDescription = courseContent?.intro_description || "BCA (Bachelor of Computer Applications) is an undergraduate programme focused on computer applications, programming and software fundamentals. It is a popular route for students who want to enter IT without pursuing B.Tech.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "Your career outcome depends heavily on skills: projects, internships, coding practice and real software exposure matter more than marks alone.";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Degree type", v: "UG Computer Applications Degree" },
        { k: "Duration", v: "3 Years" },
        { k: "Eligibility", v: "Class 12 (criteria varies)" },
        { k: "Best for", v: "Software careers without Engineering" },
        { k: "Strong ladder", v: "BCA → MCA → specialisation" },
      ];

  // If no data found, show message
  if (bcaLadder.length === 0 && coreSubjects.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner title="BCA (Bachelor of Computer Applications)" breadcrumb="Engineering, Technology & IT → BCA" />
        <CoursesTabsBar tabs={TABS} activeId="bca" />
        <div className="container py-5">
          <div className="alert alert-warning">
            <h4>No courses available</h4>
            <p>We're currently updating our course listings. Please check back later.</p>
          </div>
        </div>
      </FrontendLayout>
    );
  }

  return (
    <FrontendLayout>
      <HeroInner title="BCA (Bachelor of Computer Applications)" breadcrumb="Engineering, Technology & IT → BCA" />

      {/* Tabs bar */}
      <CoursesTabsBar tabs={TABS} activeId="bca" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Cpu size={18} className="text-primary" />
                <span>{introHeading}</span>
              </h2>

              <p className="sectionSub">{introDescription}</p>

              {introDescriptionSecondary && (
                <p className="sectionSub mb-0">{introDescriptionSecondary}</p>
              )}
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>
                <MiniDL items={snapshotItems} />
              </div>

              <div className="sectionCard bg-light border mt-3">
                <h3 className="h6 mb-2 d-flex align-items-center gap-2">
                  <BadgeCheck size={18} className="text-primary" />
                  <span>Reality check</span>
                </h3>
                <p className="small text-muted mb-0">
                  A BCA degree helps, but your projects + coding skill decide your placement and job role.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) BCA LADDER */}
      {bcaLadder.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="BCA career ladder"
              subtitle="BCA is a strong start for IT careers, especially if you build skills alongside the degree."
            />

            <div className="row g-3">
              {bcaLadder.map((step, index) => (
                <div key={index} className="col-12 col-md-6">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">{step.title}</h3>
                    {step.duration && (
                      <p className="small text-muted mb-1">{step.duration}</p>
                    )}
                    {step.focus && (
                      <p className="small text-muted mb-0">{step.focus}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
              Tip: If you want long-term growth, BCA + MCA + a strong portfolio is a powerful ladder.
            </div>
          </div>
        </section>
      )}

      {/* 3) WHO SHOULD DO BCA */}
      {whoShouldDo.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Who should do BCA"
              subtitle="BCA is best when your goal is software and you commit to skill building."
            />

            <div className="row g-3">
              {whoShouldDo.map((item, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("IT") || title.includes("Engineering")) return GraduationCap;
                  if (title.includes("programming") || title.includes("Programming") || title.includes("applications")) return Code2;
                  if (title.includes("MCA")) return ShieldCheck;
                  if (title.includes("skills") || title.includes("Skills")) return Briefcase;
                  return ShieldCheck;
                };
                const Icon = item.icon || getIcon(item.title);

                return (
                  <div key={index} className="col-12 col-md-6">
                    <div className="sectionCard h-100">
                      <h3 className="h6 mb-1 d-flex align-items-center gap-2">
                        <Icon size={16} className="text-primary" />
                        <span>{item.title}</span>
                      </h3>
                      <p className="small text-muted mb-0">{item.desc || item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4) CORE SUBJECTS + ROLES */}
      {(coreSubjects.length > 0 || careerRoles.length > 0) && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Code2}
              title="Core subjects & typical roles"
              subtitle="Syllabus varies, but these are common core areas and entry roles."
            />

            <div className="row g-4 align-items-stretch">
              {coreSubjects.length > 0 && (
                <div className="col-12 col-lg-6 d-flex">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-3">Core subjects (common)</h3>
                    <ul className="list-unstyled small mb-0">
                      {coreSubjects.map((subject, index) => (
                        <li key={index} className="mb-2 d-flex">
                          <span className="me-2">•</span>
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {careerRoles.length > 0 && (
                <div className="col-12 col-lg-6 d-flex">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-3">Typical entry roles</h3>
                    <ul className="list-unstyled small mb-0">
                      {careerRoles.map((role, index) => (
                        <li key={index} className="mb-2 d-flex">
                          <span className="me-2">•</span>
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 5) WHERE YOU WORK */}
      {workSettings.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={Briefcase}
              title="Where BCA graduates work"
              subtitle="Your job depends on your skill track: development, data, ops or support."
            />

            <div className="row g-3">
              {workSettings.map((work, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("Software") || title.includes("IT")) return Cpu;
                  if (title.includes("Product") || title.includes("Startups")) return Briefcase;
                  if (title.includes("Data") || title.includes("Database")) return Database;
                  if (title.includes("Networking") || title.includes("Network") || title.includes("Ops")) return Network;
                  return Cpu;
                };
                const Icon = work.icon || getIcon(work.title);

                return (
                  <div key={index} className="col-12 col-md-6 col-lg-3">
                    <div className="sectionCard h-100">
                      <h3 className="h6 mb-1 d-flex align-items-center gap-2">
                        <Icon size={16} className="text-primary" />
                        <span>{work.title}</span>
                      </h3>
                      <p className="small text-muted mb-0">{work.desc || work.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6) ADMISSION & DOCUMENTS */}
      <section className="py-4 py-md-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Admission & documents"
            subtitle="A practical checklist before you apply."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <ul className="nitDarkList mb-0">
                  {(eligibilityNotes.length > 0 ? eligibilityNotes : [
                    "Usually after Class 12 (any stream) — criteria varies by university.",
                    "Some universities prefer Mathematics/Computer in Class 12, but many accept all streams.",
                    "Admissions may be merit-based or entrance-based depending on institute.",
                    "To compete in IT jobs, you must build skills beyond the syllabus."
                  ]).map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>

                <div className="small text-muted mt-3">
                  <span className="fw-semibold text-white">Reminder:</span> eligibility differs by university—always verify official notification.
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5 d-flex">
              <div className="sectionCard bg-light border w-100">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Building2 size={18} className="text-primary" />
                  <span>Common documents</span>
                </h3>

                <ul className="list-unstyled small mb-0">
                  {(commonDocs.length > 0 ? commonDocs : [
                    "Class 10 & 12 marksheets",
                    "ID proof (Aadhaar etc.)",
                    "Photo + signature",
                    "Category/EWS/Income certificate (if applicable)",
                    "Domicile (if required)"
                  ]).map((doc, index) => (
                    <li key={index} className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Tip: Ask about internships, practical projects and placement outcomes—those decide real value.
          </div>
        </div>
      </section>

      {/* 7) BUILD YOUR PROFILE */}
      {buildProfile.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={Users}
              title="Build your profile during BCA"
              subtitle="BCA success is about portfolio, practice and real projects."
            />

            <div className="row g-3">
              {buildProfile.map((item, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">Key focus</h3>
                    <p className="small text-muted mb-0">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
              Sensible shortcut: build projects every semester and do at least one internship—this unlocks strong IT roles.
            </div>
          </div>
        </section>
      )}
    </FrontendLayout>
  );
}
