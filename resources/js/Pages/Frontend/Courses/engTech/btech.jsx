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
//   Building2,
//   Users,
//   Factory,
//   Briefcase,
//   Wrench,
// } from "lucide-react";

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
//    DATA – B.Tech / B.E (Career Book aligned)
// ------------------------------------------------------------- */

// const ENGINEERING_LADDER = [
//   {
//     title: "B.Tech / B.E (Undergraduate Engineering)",
//     duration: "4 Years",
//     focus:
//       "Core engineering foundation with theory, labs, projects and industrial exposure.",
//   },
//   {
//     title: "Industry / Job / Startup",
//     duration: "Immediate after UG",
//     focus:
//       "Software, core engineering, manufacturing, infrastructure, PSU/private sector roles.",
//   },
//   {
//     title: "M.Tech / M.E (Postgraduate)",
//     duration: "2 Years",
//     focus:
//       "Advanced specialisation, research orientation, higher technical roles.",
//   },
//   {
//     title: "Research / Leadership Growth",
//     duration: "Continuous",
//     focus:
//       "Senior engineering roles, R&D, teaching, technical leadership, entrepreneurship.",
//   },
// ];

// const POPULAR_BRANCHES = [
//   "Computer Science & Engineering (CSE)",
//   "Information Technology (IT)",
//   "Electronics & Communication Engineering (ECE)",
//   "Electrical Engineering (EE)",
//   "Mechanical Engineering (ME)",
//   "Civil Engineering (CE)",
//   "Artificial Intelligence / Data Science (emerging branches)",
//   "Chemical / Instrumentation / Production (as offered)",
// ];

// const ELIGIBILITY_NOTES = [
//   "Class 12 passed with Physics, Chemistry and Mathematics (PCM).",
//   "Admission generally through entrance exams (JEE, state-level exams or institute exams).",
//   "Eligibility criteria, age limits and counselling rules vary by exam and institute.",
//   "Medical fitness and document verification apply as per admission rules.",
// ];

// const WORK_SETTINGS = [
//   {
//     title: "IT & Software Industry",
//     desc: "Software development, data roles, system engineering, tech services.",
//     icon: Cpu,
//   },
//   {
//     title: "Core Engineering Industries",
//     desc: "Manufacturing, power, electronics, telecom, automotive, infrastructure.",
//     icon: Factory,
//   },
//   {
//     title: "Construction & Infrastructure",
//     desc: "Civil projects, design, execution, quality, planning roles.",
//     icon: Wrench,
//   },
//   {
//     title: "Corporate / Consulting / Startups",
//     desc: "Product companies, startups, analytics, operations, tech consulting.",
//     icon: Briefcase,
//   },
// ];

// const ADMISSION_NOTES = [
//   "Choose colleges with strong labs, faculty and placement records.",
//   "Branch matters, but skills and projects matter more in the long run.",
//   "Internships during 2nd–4th year significantly improve outcomes.",
// ];

// const COMMON_DOCS = [
//   "Class 10 & 12 marksheets",
//   "Entrance exam admit card & rank card",
//   "ID proof (Aadhaar etc.)",
//   "Photo + signature",
//   "Category/EWS/Income certificate (if applicable)",
//   "Domicile certificate (if required)",
// ];

// const BUILD_PROFILE = [
//   "Strong fundamentals in maths, logic and core subjects",
//   "Hands-on projects beyond syllabus",
//   "Internships (industry or research based)",
//   "Programming + problem-solving skills (for most branches)",
//   "Communication skills and teamwork mindset",
// ];

// /* -------------------------------------------------------------
//    UI helpers (portal design language)
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

// export default function BTechBEPage() {
//   const snapshot = useMemo(
//     () => [
//       { k: "Degree type", v: "Professional Engineering Degree" },
//       { k: "Duration", v: "4 Years" },
//       { k: "Eligibility", v: "Class 12 (PCM)" },
//       { k: "Entry exams", v: "JEE / State-level / Institute exams" },
//       { k: "Career scope", v: "Industry • PSU • Higher studies • Startups" },
//     ],
//     []
//   );

//   return (
//     <>
//     <FrontendLayout>
//       <HeroInner
//         title="B.Tech / B.E Programs"
//         breadcrumb="Engineering, Technology & IT → B.Tech / B.E"
//       />
//        <CoursesTabsBar tabs={TABS} activeId="btech" />

//       {/* 1) ABOUT + SNAPSHOT */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <div className="row g-4 align-items-start">
//             <div className="col-12 col-lg-7">
//               <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
//                 <Cpu size={18} className="text-primary" />
//                 <span>About B.Tech / B.E</span>
//               </h2>

//               <p className="sectionSub">
//                 B.Tech (Bachelor of Technology) and B.E (Bachelor of Engineering)
//                 are undergraduate professional degrees focused on applying
//                 science, mathematics and technology to solve real-world problems.
//               </p>

//               <p className="sectionSub mb-0">
//                 These programs combine classroom learning, laboratory work,
//                 projects and internships, preparing students for engineering
//                 roles across IT, core industries, infrastructure and emerging
//                 technologies.
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
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2) ENGINEERING LADDER */}
//       <section className="py-5 nitLightGradient">
//         <div className="container">
//           <SectionHeader
//             icon={GraduationCap}
//             title="Engineering career ladder"
//             subtitle="Engineering growth depends on skills, experience and continuous learning."
//           />

//           <div className="row g-3">
//             {ENGINEERING_LADDER.map((c) => (
//               <div key={c.title} className="col-12 col-md-6">
//                 <div className="sectionCard h-100">
//                   <h3 className="h6 mb-1">{c.title}</h3>
//                   <p className="small text-muted mb-1">{c.duration}</p>
//                   <p className="small text-muted mb-0">{c.focus}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3) POPULAR BRANCHES */}
//       <section className="py-5">
//         <div className="container">
//           <SectionHeader
//             icon={ShieldCheck}
//             title="Popular engineering branches"
//             subtitle="Branch selection matters, but skill-building matters more."
//           />

//           <div className="row g-3">
//             {POPULAR_BRANCHES.map((b) => (
//               <div key={b} className="col-12 col-md-6 col-lg-4">
//                 <div className="sectionCard h-100">
//                   <h3 className="h6 mb-1">{b}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4) WHERE ENGINEERS WORK */}
//       <section className="py-5 nitLightGradient">
//         <div className="container">
//           <SectionHeader
//             icon={Factory}
//             title="Where engineers work"
//             subtitle="Work environment depends on branch, skills and experience."
//           />

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

//       {/* 5) ADMISSION & DOCUMENTS */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <SectionHeader
//             icon={ClipboardList}
//             title="Admission & documents"
//             subtitle="Keep this checklist ready while applying."
//           />

//           <div className="row g-4 align-items-stretch">
//             <div className="col-12 col-lg-7 d-flex">
//               <div className="nitDarkGlassBox w-100">
//                 <ul className="nitDarkList mb-0">
//                   {ELIGIBILITY_NOTES.map((x) => (
//                     <li key={x}>{x}</li>
//                   ))}
//                 </ul>
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
//         </div>
//       </section>

//       {/* 6) BUILD YOUR PROFILE */}
//       <section className="py-5 nitLightGradient">
//         <div className="container">
//           <SectionHeader
//             icon={Users}
//             title="Build your profile during engineering"
//             subtitle="Engineering rewards skill, not just degree."
//           />

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
//             Sensible shortcut: pick a branch you can skill-up in, start internships early, and build projects every year.
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
  Building2,
  Users,
  Factory,
  Briefcase,
  Wrench,
} from "lucide-react";

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
   UI helpers (portal design language)
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

export default function BTechBEPage({ courseContent }) {
  // Debug log
  console.log('=== BTechBEPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const engineeringLadder = courseContent?.btech_ladder || [];
  const popularBranches = courseContent?.core_areas || [];
  const workSettings = courseContent?.work_settings || [];
  const eligibilityNotes = courseContent?.eligibility_notes || [];
  const admissionNotes = courseContent?.admission_notes || [];
  const commonDocs = courseContent?.common_docs || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About B.Tech / B.E";
  const introDescription = courseContent?.intro_description || "B.Tech (Bachelor of Technology) and B.E (Bachelor of Engineering) are undergraduate professional degrees focused on applying science, mathematics and technology to solve real-world problems.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "These programs combine classroom learning, laboratory work, projects and internships, preparing students for engineering roles across IT, core industries, infrastructure and emerging technologies.";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Degree type", v: "Professional Engineering Degree" },
        { k: "Duration", v: "4 Years" },
        { k: "Eligibility", v: "Class 12 (PCM)" },
        { k: "Entry exams", v: "JEE / State-level / Institute exams" },
        { k: "Career scope", v: "Industry • PSU • Higher studies • Startups" },
      ];

  // If no data found, show message
  if (engineeringLadder.length === 0 && popularBranches.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner
          title="B.Tech / B.E Programs"
          breadcrumb="Engineering, Technology & IT → B.Tech / B.E"
        />
        <CoursesTabsBar tabs={TABS} activeId="btech" />
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
      <HeroInner
        title="B.Tech / B.E Programs"
        breadcrumb="Engineering, Technology & IT → B.Tech / B.E"
      />
      <CoursesTabsBar tabs={TABS} activeId="btech" />

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
            </div>
          </div>
        </div>
      </section>

      {/* 2) ENGINEERING LADDER */}
      {engineeringLadder.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="Engineering career ladder"
              subtitle="Engineering growth depends on skills, experience and continuous learning."
            />

            <div className="row g-3">
              {engineeringLadder.map((step, index) => (
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
          </div>
        </section>
      )}

      {/* 3) POPULAR BRANCHES */}
      {popularBranches.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Popular engineering branches"
              subtitle="Branch selection matters, but skill-building matters more."
            />

            <div className="row g-3">
              {popularBranches.map((branch, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">{branch}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4) WHERE ENGINEERS WORK */}
      {workSettings.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Factory}
              title="Where engineers work"
              subtitle="Work environment depends on branch, skills and experience."
            />

            <div className="row g-3">
              {workSettings.map((work, index) => {
                // Get icon based on title or use a default
                const getIcon = (title) => {
                  if (title.includes("IT") || title.includes("Software")) return Cpu;
                  if (title.includes("Core") || title.includes("Manufacturing") || title.includes("Industry")) return Factory;
                  if (title.includes("Construction") || title.includes("Infrastructure")) return Wrench;
                  if (title.includes("Corporate") || title.includes("Consulting") || title.includes("Startups")) return Briefcase;
                  return Briefcase;
                };
                const Icon = work.icon || getIcon(work.title);

                return (
                  <div key={index} className="col-12 col-md-6 col-lg-3">
                    <div className="sectionCard h-100">
                      <h3 className="h6 mb-1 d-flex align-items-center gap-2">
                        <Icon size={16} className="text-primary" />
                        <span>{work.title}</span>
                      </h3>
                      <p className="small text-muted mb-0">{work.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 5) ADMISSION & DOCUMENTS */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Admission & documents"
            subtitle="Keep this checklist ready while applying."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <ul className="nitDarkList mb-0">
                  {(eligibilityNotes.length > 0 ? eligibilityNotes : [
                    "Class 12 passed with Physics, Chemistry and Mathematics (PCM).",
                    "Admission generally through entrance exams (JEE, state-level exams or institute exams).",
                    "Eligibility criteria, age limits and counselling rules vary by exam and institute.",
                    "Medical fitness and document verification apply as per admission rules."
                  ]).map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
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
                    "Entrance exam admit card & rank card",
                    "ID proof (Aadhaar etc.)",
                    "Photo + signature",
                    "Category/EWS/Income certificate (if applicable)",
                    "Domicile certificate (if required)"
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
        </div>
      </section>

      {/* 6) BUILD YOUR PROFILE */}
      {buildProfile.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Users}
              title="Build your profile during engineering"
              subtitle="Engineering rewards skill, not just degree."
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
              Sensible shortcut: pick a branch you can skill-up in, start internships early, and build projects every year.
            </div>
          </div>
        </section>
      )}
    </FrontendLayout>
  );
}
