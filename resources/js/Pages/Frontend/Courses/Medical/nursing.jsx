// "use client";

// import React, { useMemo, useState } from "react";
// import HeroInner from "@/Components/Frontend/Hero/HeroInner";
// import FrontendLayout from '@/Layouts/FrontendLayout';

// import {
//   Layers3,
//   HeartPulse,
//   Stethoscope,
//   GraduationCap,
//   ClipboardList,
//   ShieldCheck,
//   Building2,
//   Users,
//   Hospital,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";

// // -------------------------------------------------------------
// // Data (Career-Book aligned overview; no links as per your ask)
// // -------------------------------------------------------------
// const NURSING_LADDER = [
//   {
//     id: "anm",
//     badge: "After Class 10",
//     title: "ANM (Auxiliary Nurse Midwife)",
//     duration: "Typically 2 Years",
//     eligibility: "Class 10 pass (as per institute norms; some may ask specific subjects/criteria)",
//     bestFor:
//       "Students who want an early entry into basic nursing & community health services, especially maternal and child care.",
//     roles: [
//       "ANM / Community Health Worker support",
//       "Primary health & immunisation support roles",
//       "Maternal & child health support roles",
//     ],
//     nextStep: "GNM / B.Sc Nursing (as per eligibility), or service + further upskilling",
//   },
//   {
//     id: "gnm",
//     badge: "After Class 12",
//     title: "GNM (General Nursing & Midwifery)",
//     duration: "Typically 3 Years (+ internship as per norms)",
//     eligibility: "Class 12 pass (streams/criteria as per institute norms)",
//     bestFor:
//       "Students who want a strong clinical nursing base and better hospital exposure than entry-level routes.",
//     roles: [
//       "Staff Nurse (hospital/clinical settings)",
//       "Ward/OT support roles",
//       "Community & outreach nursing (depending on posting)",
//     ],
//     nextStep: "Post Basic B.Sc Nursing / B.Sc Nursing (as per rules) → then M.Sc Nursing",
//   },
//   {
//     id: "bsc",
//     badge: "After Class 12 (Science preferred)",
//     title: "B.Sc Nursing (UG Degree)",
//     duration: "Typically 4 Years",
//     eligibility: "Class 12 pass (Science preferred; institute norms + medical fitness as per rules)",
//     bestFor:
//       "Students targeting a degree-led nursing career with strong clinical foundation, leadership growth, and broader options.",
//     roles: [
//       "Staff Nurse / Clinical Nurse",
//       "Team lead roles over time (with experience)",
//       "Public health/administration support roles (with add-ons)",
//     ],
//     nextStep: "M.Sc Nursing / specialised higher studies, leadership/admin tracks",
//   },
//   {
//     id: "pb",
//     badge: "After GNM (Bridge)",
//     title: "Post Basic B.Sc Nursing",
//     duration: "Typically 2 Years",
//     eligibility: "GNM qualified (plus registration/criteria as per rules)",
//     bestFor:
//       "GNM nurses who want to upgrade to a degree route for better growth and higher study options.",
//     roles: [
//       "Degree-equivalent clinical roles (depending on employer policy)",
//       "Better eligibility for PG/research tracks",
//       "Supervisory track with experience",
//     ],
//     nextStep: "M.Sc Nursing / administration/teaching (as per eligibility norms)",
//   },
//   {
//     id: "msc",
//     badge: "After UG Nursing",
//     title: "M.Sc Nursing (PG Degree)",
//     duration: "Typically 2 Years",
//     eligibility: "B.Sc Nursing / Post Basic B.Sc Nursing (criteria varies by institute)",
//     bestFor:
//       "Students targeting specialisation, teaching, research, senior clinical leadership and management roles.",
//     roles: [
//       "Nurse Educator / Teaching track (as per norms)",
//       "Specialised nursing roles (subject-wise)",
//       "Hospital administration/clinical leadership (with experience)",
//     ],
//     nextStep: "PhD/Research, higher admin leadership, senior teaching track",
//   },
// ];

// const SPECIALISATIONS = [
//   "Medical-Surgical Nursing",
//   "Community Health Nursing",
//   "Obstetrics & Gynaecology Nursing",
//   "Paediatric Nursing",
//   "Psychiatric/Mental Health Nursing",
// ];

// const WORK_SETTINGS = [
//   { title: "Hospitals & Nursing Homes", desc: "Clinical nursing roles across wards, OT, ICU support, emergency care." },
//   { title: "Community & Public Health", desc: "Primary health centres, outreach programs, maternal-child health." },
//   { title: "Education & Training", desc: "Nursing colleges/schools, skill labs, training programs (with eligibility)." },
//   { title: "Administration", desc: "Ward/department coordination, patient-care systems, hospital operations (with experience)." },
// ];

// const ADMISSION_NOTES = [
//   "Admissions can be merit-based or entrance-based depending on institute and state/university rules.",
//   "Eligibility and age criteria vary — always verify official notifications before applying.",
//   "Medical fitness requirements may apply for nursing programmes.",
// ];

// const COMMON_DOCS = [
//   "Class 10 & 12 marksheets",
//   "ID proof (Aadhaar etc.)",
//   "Photo + signature",
//   "Category/EWS/Income certificate (if applicable)",
//   "Domicile (if required)",
//   "Medical fitness certificate (if asked by institute)",
// ];

// const BUILD_YOUR_PROFILE = [
//   "Communication skills + basic English for patient interaction",
//   "Empathy + calm behaviour under pressure",
//   "Discipline, shift readiness and teamwork mindset",
//   "Basic computer skills (hospital documentation)",
//   "Internships/clinical exposure taken seriously (not just attendance)",
// ];

// // -------------------------------------------------------------
// // UI helpers (match your design language)
// // -------------------------------------------------------------
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
//           <dd className={`col-7 ${idx === items.length - 1 ? "mb-0" : "mb-2"}`}>{it.v}</dd>
//         </React.Fragment>
//       ))}
//     </dl>
//   );
// }

// // -------------------------------------------------------------
// // Page
// // -------------------------------------------------------------
// export default function NursingCoursesPage() {
//  const [expanded, setExpanded] = useState(() => {
//   const init = {};
//   NURSING_LADDER.forEach((x) => {
//     init[x.id] = false; 
//   });
//   return init;
// });


//   const toggle = (id) => setExpanded((p) => ({ ...p, [id]: !p[id] }));

//   const snapshot = useMemo(
//     () => [
//       { k: "Main routes", v: "ANM • GNM • B.Sc Nursing • Post Basic B.Sc • M.Sc Nursing" },
//       { k: "Entry points", v: "After Class 10 / After Class 12 / After UG" },
//       { k: "Best for", v: "Clinical care • Community health • Teaching/Leadership (with PG)" },
//       { k: "Work settings", v: "Hospitals • Community • Education • Administration" },
//       { k: "Reality check", v: "Skills + clinical exposure decide growth" },
//     ],
//     []
//   );

//   return (
//     <>
//     <FrontendLayout>
//       <HeroInner title="Nursing (ANM / GNM / B.Sc / M.Sc)" breadcrumb="Nursing" />

//       {/* 1) ABOUT + SNAPSHOT */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <div className="row g-4 align-items-start">
//             <div className="col-12 col-lg-7">
//               <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
//                 <HeartPulse size={18} className="text-primary" />
//                 <span>About Nursing Courses</span>
//               </h2>

//               <p className="sectionSub">
//                 Nursing is a respected healthcare career focused on patient care, clinical support, community health and
//                 health education. It offers multiple entry routes after Class 10 and Class 12, and a clear ladder from
//                 basic training to undergraduate and postgraduate specialisation.
//               </p>

//               <p className="sectionSub mb-0">
//                 The best nursing outcomes come from strong fundamentals, discipline, communication, and taking clinical
//                 exposure seriously. As you grow, nursing also opens leadership roles, education/training paths and
//                 administration opportunities.
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

//               {/* Small “Related core medical” hint (no link) */}
//               <div className="sectionCard bg-light border mt-3">
//                 <h3 className="h6 mb-2 d-flex align-items-center gap-2">
//                   <Stethoscope size={18} className="text-primary" />
//                   <span>Related: MBBS & Core Medical Degrees</span>
//                 </h3>
//                 <p className="small text-muted mb-0">
//                   MBBS is a separate doctor pathway (core medical degree). Nursing is a different professional track with
//                   its own ladder (ANM/GNM/B.Sc/M.Sc) and roles.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2) COURSE LADDER (polished, expandable like your skill pages) */}
//       <section className="py-5 nitLightGradient">
//         <div className="container">
//           <SectionHeader
//             icon={GraduationCap}
//             title="Nursing course ladder"
//             subtitle="Start from the level you are eligible for, then move upward. Expand any route to see details."
//           />

//           <div className="row g-3 g-md-4">
//             {NURSING_LADDER.map((c) => {
//               const isOpen = !!expanded[c.id];

//               return (
//                 <div key={c.id} className="col-12 col-lg-6">
//                   <div className="sectionCard expandCard h-100">
//                     <div className=" gap-3">
//                       <div>
//                         <span className="badge badge-sm text-bg-primary">{c.badge}</span>
//                         <h3 className="h6 mb-1 mt-2">{c.title}</h3>
//                         <p className="small text-muted mb-0">{c.duration}</p>
//                       </div>

                      
//                     </div>

//                     {isOpen ? (
//                       <div className="mt-3">
//                         <div className="d-flex flex-column gap-2">
//                           <div className="">
//                             <span className="fw-semibold text-dark">Eligibility</span>
//                             <span className="small text-muted">{c.eligibility}</span>
//                           </div>
//                           <div className="">
//                             <span className="fw-semibold text-dark">Best for</span>
//                             <span className="small text-muted">{c.bestFor}</span>
//                           </div>
//                           <div className="">
//                             <span className="fw-semibold text-dark">Next step</span>
//                             <span className="small text-muted">{c.nextStep}</span>
//                           </div>
//                         </div>

//                         <div className="mt-3">
//                           <div className="small fw-semibold text-dark mb-2">Typical roles</div>
//                           <ul className="list-unstyled small mb-0">
//                             {c.roles.map((r) => (
//                               <li key={r} className="d-flex mb-2">
//                                 <span className="me-2">•</span>
//                                 <span>{r}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     ) : null}
//                     <button
//                         type="button"
//                         className="expandTrigger btn btn-sm btn-link px-0 d-inline-flex align-items-center gap-1"
//                         onClick={() => toggle(c.id)}
//                       >
//                         {isOpen ? "Hide details" : "View details"}
//                         {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//                       </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
//             Tip: If your goal is long-term growth, B.Sc Nursing (or Post Basic B.Sc after GNM) + later M.Sc Nursing is a
//             strong ladder.
//           </div>
//         </div>
//       </section>

//       {/* 3) PROGRAMMES & SPECIALISATIONS (dark box + cards, like AIIMS section pattern) */}
//       <section className="py-5">
//         <div className="container">
//           <SectionHeader
//             icon={ShieldCheck}
//             title="Specialisations (mainly at PG level)"
//             subtitle="Specialisation choices vary by university, but these are commonly seen in M.Sc Nursing."
//           />

//           <div className="row g-4 align-items-stretch">
//             <div className="col-12 col-lg-5 d-flex">
//               <div className="nitDarkGlassBox w-100">
//                 <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
//                   <ShieldCheck size={16} />
//                   <span>What specialisation changes</span>
//                 </span>

//                 <ul className="nitDarkList mb-0">
//                   <li>
//                     Your work shifts from general nursing into <strong>focused patient groups</strong> or care areas.
//                   </li>
//                   <li>
//                     Better scope for <strong>senior roles</strong> with experience (supervision/education/admin).
//                   </li>
//                   <li>
//                     Your dissertation/projects become important for teaching/research direction.
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="col-12 col-lg-7 d-flex">
//               <div className="row g-3 w-100 align-content-stretch">
//                 {SPECIALISATIONS.map((s) => (
//                   <div key={s} className="col-12 col-sm-6 d-flex">
//                     <div className="nitDarkGlassCard w-100 d-flex flex-column">
//                       <div className="d-flex justify-content-between align-items-center mb-2">
//                         <span className="nitExamTag">M.Sc Nursing</span>
//                         <span className="nitExamLevel">PG</span>
//                       </div>
//                       <p className="nitExamTitle mb-1">{s}</p>
//                       <p className="nitExamText mb-0">
//                         Specialised training focus; exact syllabus depends on university norms.
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 4) WHERE YOU WORK (clean, polished cards) */}
//       <section className="py-5 nitLightGradient">
//         <div className="container">
//           <SectionHeader
//             icon={Hospital}
//             title="Where nurses work"
//             subtitle="Work environment depends on your qualification level, experience and the organisation."
//           />

//           <div className="row g-3">
//             {WORK_SETTINGS.map((w) => (
//               <div key={w.title} className="col-12 col-md-6 col-lg-3">
//                 <div className="sectionCard h-100">
//                   <h3 className="h6 mb-1">{w.title}</h3>
//                   <p className="small text-muted mb-0">{w.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 5) ADMISSION & DOCUMENTS */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <SectionHeader
//             icon={ClipboardList}
//             title="Admission & Documents"
//             subtitle="Rules vary by institute. Keep this practical checklist ready."
//           />

//           <div className="row g-4 align-items-stretch">
//             <div className="col-12 col-lg-7 d-flex">
//               <div className="nitDarkGlassBox w-100">
//                 <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
//                   <Building2 size={16} />
//                   <span>Admission basics</span>
//                 </span>

//                 <ul className="nitDarkList mb-0">
//                   {ADMISSION_NOTES.map((x) => (
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

//       {/* 6) BUILD YOUR PROFILE (polished, sensible) */}
//       <section className="py-5 nitLightGradient">
//         <div className="container">
//           <SectionHeader
//             icon={Users}
//             title="Build your profile during nursing"
//             subtitle="In nursing, your behaviour + skills + clinical learning matters as much as marks."
//           />

//           <div className="row g-3">
//             {BUILD_YOUR_PROFILE.map((t) => (
//               <div key={t} className="col-12 col-md-6 col-lg-4">
//                 <div className="sectionCard h-100">
//                   <h3 className="h6 mb-1">Key focus</h3>
//                   <p className="small text-muted mb-0">{t}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
//             Sensible shortcut: choose your ladder early (ANM/GNM/B.Sc), then commit to skill-building and clinical
//             excellence — that’s what unlocks growth.
//           </div>
//         </div>
//       </section>
//       </FrontendLayout>
//     </>
//   );
// }


"use client";

import React, { useMemo, useState } from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';

import {
  Layers3,
  HeartPulse,
  Stethoscope,
  GraduationCap,
  ClipboardList,
  ShieldCheck,
  Building2,
  Users,
  Hospital,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// -------------------------------------------------------------
// UI helpers (match your design language)
// -------------------------------------------------------------
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

// -------------------------------------------------------------
// Main Page
// -------------------------------------------------------------
export default function NursingCoursesPage({ courseContent }) {
  // Debug log
  console.log('=== NursingCoursesPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const nursingLadder = courseContent?.nursing_ladder || [];
  const specialisations = courseContent?.specialisations || [];
  const workSettings = courseContent?.work_settings || [];
  const admissionNotes = courseContent?.admission_notes || [];
  const commonDocs = courseContent?.common_docs || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About Nursing Courses";
  const introDescription = courseContent?.intro_description || "Nursing is a respected healthcare career focused on patient care, clinical support, community health and health education. It offers multiple entry routes after Class 10 and Class 12, and a clear ladder from basic training to undergraduate and postgraduate specialisation.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "The best nursing outcomes come from strong fundamentals, discipline, communication, and taking clinical exposure seriously. As you grow, nursing also opens leadership roles, education/training paths and administration opportunities.";

  // Initialize expanded state for nursing ladder
  const [expanded, setExpanded] = useState(() => {
    const init = {};
    nursingLadder.forEach((item) => {
      init[item.id] = false;
    });
    return init;
  });

  const toggle = (id) => setExpanded((p) => ({ ...p, [id]: !p[id] }));

  // Convert snapshot array to object for easy access
  const snapshotData = {};
  if (Array.isArray(snapshot)) {
    snapshot.forEach(item => {
      if (item && typeof item === 'object' && 'key' in item && 'value' in item) {
        snapshotData[item.key] = item.value;
      }
    });
  }

  // If no data found, show message
  if (nursingLadder.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner title="Nursing (ANM / GNM / B.Sc / M.Sc)" breadcrumb="Nursing" />
        <div className="container py-5">
          <div className="alert alert-warning">
            <h4>No courses available</h4>
            <p>We're currently updating our course listings. Please check back later.</p>
          </div>
        </div>
      </FrontendLayout>
    );
  }

  // Create snapshot items for MiniDL
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Main routes", v: "ANM • GNM • B.Sc Nursing • Post Basic B.Sc • M.Sc Nursing" },
        { k: "Entry points", v: "After Class 10 / After Class 12 / After UG" },
        { k: "Best for", v: "Clinical care • Community health • Teaching/Leadership (with PG)" },
        { k: "Work settings", v: "Hospitals • Community • Education • Administration" },
        { k: "Reality check", v: "Skills + clinical exposure decide growth" },
      ];

  return (
    <FrontendLayout>
      <HeroInner title="Nursing (ANM / GNM / B.Sc / M.Sc)" breadcrumb="Nursing" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <HeartPulse size={18} className="text-primary" />
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

              {/* Related core medical hint */}
              <div className="sectionCard bg-light border mt-3">
                <h3 className="h6 mb-2 d-flex align-items-center gap-2">
                  <Stethoscope size={18} className="text-primary" />
                  <span>Related: MBBS & Core Medical Degrees</span>
                </h3>
                <p className="small text-muted mb-0">
                  MBBS is a separate doctor pathway (core medical degree). Nursing is a different professional track with
                  its own ladder (ANM/GNM/B.Sc/M.Sc) and roles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) COURSE LADDER */}
      {nursingLadder.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="Nursing course ladder"
              subtitle="Start from the level you are eligible for, then move upward. Expand any route to see details."
            />

            <div className="row g-3 g-md-4">
              {nursingLadder.map((course) => {
                const isOpen = !!expanded[course.id];

                return (
                  <div key={course.id} className="col-12 col-lg-6">
                    <div className="sectionCard expandCard h-100">
                      <div>
                        {course.badge && (
                          <span className="badge badge-sm text-bg-primary">{course.badge}</span>
                        )}
                        <h3 className="h6 mb-1 mt-2">{course.title}</h3>
                        {course.duration && (
                          <p className="small text-muted mb-0">{course.duration}</p>
                        )}
                      </div>

                      {isOpen ? (
                        <div className="mt-3">
                          <div className="d-flex flex-column gap-2">
                            {course.eligibility && (
                              <div>
                                <span className="fw-semibold text-dark">Eligibility</span>
                                <span className="small text-muted d-block">{course.eligibility}</span>
                              </div>
                            )}
                            {course.bestFor && (
                              <div>
                                <span className="fw-semibold text-dark">Best for</span>
                                <span className="small text-muted d-block">{course.bestFor}</span>
                              </div>
                            )}
                            {course.nextStep && (
                              <div>
                                <span className="fw-semibold text-dark">Next step</span>
                                <span className="small text-muted d-block">{course.nextStep}</span>
                              </div>
                            )}
                          </div>

                          {course.roles && course.roles.length > 0 && (
                            <div className="mt-3">
                              <div className="small fw-semibold text-dark mb-2">Typical roles</div>
                              <ul className="list-unstyled small mb-0">
                                {course.roles.map((role, idx) => (
                                  <li key={idx} className="d-flex mb-2">
                                    <span className="me-2">•</span>
                                    <span>{role}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ) : null}

                      <button
                        type="button"
                        className="expandTrigger btn btn-sm btn-link px-0 d-inline-flex align-items-center gap-1"
                        onClick={() => toggle(course.id)}
                      >
                        {isOpen ? "Hide details" : "View details"}
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
              Tip: If your goal is long-term growth, B.Sc Nursing (or Post Basic B.Sc after GNM) + later M.Sc Nursing is a
              strong ladder.
            </div>
          </div>
        </section>
      )}

      {/* 3) SPECIALISATIONS */}
      {specialisations.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Specialisations (mainly at PG level)"
              subtitle="Specialisation choices vary by university, but these are commonly seen in M.Sc Nursing."
            />

            <div className="row g-4 align-items-stretch">
              <div className="col-12 col-lg-5 d-flex">
                <div className="nitDarkGlassBox w-100">
                  <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                    <ShieldCheck size={16} />
                    <span>What specialisation changes</span>
                  </span>

                  <ul className="nitDarkList mb-0">
                    <li>
                      Your work shifts from general nursing into <strong>focused patient groups</strong> or care areas.
                    </li>
                    <li>
                      Better scope for <strong>senior roles</strong> with experience (supervision/education/admin).
                    </li>
                    <li>
                      Your dissertation/projects become important for teaching/research direction.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-lg-7 d-flex">
                <div className="row g-3 w-100 align-content-stretch">
                  {specialisations.map((spec, index) => (
                    <div key={index} className="col-12 col-sm-6 d-flex">
                      <div className="nitDarkGlassCard w-100 d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="nitExamTag">M.Sc Nursing</span>
                          <span className="nitExamLevel">PG</span>
                        </div>
                        <p className="nitExamTitle mb-1">{spec}</p>
                        <p className="nitExamText mb-0">
                          Specialised training focus; exact syllabus depends on university norms.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4) WHERE YOU WORK */}
      {workSettings.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Hospital}
              title="Where nurses work"
              subtitle="Work environment depends on your qualification level, experience and the organisation."
            />

            <div className="row g-3">
              {workSettings.map((work, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-3">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">{work.title}</h3>
                    <p className="small text-muted mb-0">{work.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5) ADMISSION & DOCUMENTS */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Admission & Documents"
            subtitle="Rules vary by institute. Keep this practical checklist ready."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Building2 size={16} />
                  <span>Admission basics</span>
                </span>

                <ul className="nitDarkList mb-0">
                  {(admissionNotes.length > 0 ? admissionNotes : [
                    "Admissions can be merit-based or entrance-based depending on institute and state/university rules.",
                    "Eligibility and age criteria vary — always verify official notifications before applying.",
                    "Medical fitness requirements may apply for nursing programmes."
                  ]).map((note, index) => (
                    <li key={index}>{note}</li>
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
                  {(commonDocs.length > 0 ? commonDocs : [
                    "Class 10 & 12 marksheets",
                    "ID proof (Aadhaar etc.)",
                    "Photo + signature",
                    "Category/EWS/Income certificate (if applicable)",
                    "Domicile (if required)",
                    "Medical fitness certificate (if asked by institute)"
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
              title="Build your profile during nursing"
              subtitle="In nursing, your behaviour + skills + clinical learning matters as much as marks."
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
              Sensible shortcut: choose your ladder early (ANM/GNM/B.Sc), then commit to skill-building and clinical
              excellence — that's what unlocks growth.
            </div>
          </div>
        </section>
      )}
    </FrontendLayout>
  );
}