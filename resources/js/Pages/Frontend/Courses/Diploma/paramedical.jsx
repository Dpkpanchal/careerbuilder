// import React from "react";
// import { Link, usePage } from '@inertiajs/react';
// import HeroInner from "@/Components/Frontend/Hero/HeroInner";
// import VocationalTabsBar from "./VocationalTabsBar";
// import FrontendLayout from '@/Layouts/FrontendLayout';
// import { Beaker, HeartPulse, Layers, ExternalLink } from "lucide-react";

// // ------------------------------------------------------------------
// // Diploma sub-tabs (same as Engineering page)
// // ------------------------------------------------------------------

// const DIPLOMA_TABS = [
//   {
//     id: "engineering",
//     label: "Diploma in Engineering",
//     href: '/courses/diploma-in-engineering-polytechnic',
//   },
//   {
//     id: "paramedical",
//     label: "Diploma in Paramedical",
//     href: '/courses/diploma-in-paramedical',
//   },
//   {
//     id: "pharmacy",
//     label: "Diploma in Pharmacy (D.Pharm)",
//     href: '/courses/diploma-in-pharmacy-dpharm',
//   },
//   {
//     id: "it",
//     label: "Diploma in Computer / IT",
//     href: '/courses/diploma-in-computer-it',
//   },
// ];

// // ------------------------------------------------------------------
// // Data from Career Book – PARAMEDICAL COURSES AFTER HS (Sc)
// // ------------------------------------------------------------------

// const PARAMED_GROUPS = [
//   {
//     id: "lab-imaging",
//     title: "Diagnostic & Imaging Technologies",
//     caption:
//       "Lab and imaging–oriented diploma courses focused on tests, scans and diagnostic support.",
//     Icon: Beaker,
//     courses: [
//       "Diploma in Medical Laboratory Technology (DMLT) – 2 years",
//       "Diploma in Radiography (DRD) – 2 years",
//       "Diploma in X-Ray Technician & Radiography – 2 years",
//       "Diploma in Dialysis Technique",
//       "Diploma in Electro Cardio Graphic Technique (ECG) – 2 years",
//       "CT & MRI Technician",
//       "Phlebotomist (Blood Collection)",
//     ],
//   },
//   {
//     id: "therapy-critical",
//     title: "Therapy, Cardiac & Critical Care",
//     caption:
//       "Courses related to therapy, cardiac care, operation theatre and intensive / critical care support.",
//     Icon: HeartPulse,
//     courses: [
//       "Diploma in Physiotherapy (DPT) – 2 years",
//       "Diploma in Neuroelectro Physiology (DNEP) – 2 years",
//       "Diploma in Perfusion Technology (DPFT) – 2 years",
//       "Diploma in Cath Lab Technician (DCLT) – 2 years",
//       "Diploma in Critical Care Technology (DCCT) – 2 years",
//       "Operation Theatre Technician",
//       "ICU Technician",
//       "Arieathesist (Anaesthesia assistant)",
//       "Cardiographer",
//     ],
//   },
//   {
//     id: "dental-allied",
//     title: "Dental, Allied & Supportive Roles",
//     caption:
//       "Allied health, dental support and holistic care roles connected with hospitals and clinics.",
//     Icon: Layers,
//     courses: [
//       "Clinical Child Development – 2 years",
//       "Dental Mechanic (DM)",
//       "Dental Hygienist (DH)",
//       "Dental Technician (DT) – 2 years",
//       "Diploma in Medical Social Work",
//       "Hospital Administration",
//       "Diploma in Yoga & Naturopathy – 2 years",
//     ],
//   },
// ];

// const PARAMED_ELIGIBILITY_POINTS = [
//   "These diploma courses are shown for students after Higher Secondary (Science) with Biology.",
//   "The text highlights that for many paramedical diploma / degree courses, candidates should pass 10+2 with Physics, Chemistry and Biology from a recognised board.",
//   "Exact marks, age limits and admission process (entrance test or direct admission) depend on the specific course and institution.",
//   "Lists of paramedical and nursing institutions are to be checked from updated official notifications and council / university websites.",
// ];

// const PARAMED_BACHELOR = [
//   "Occupational Therapy (BOT / MOT) – 4 yrs / 2 yrs",
//   "Prosthetic or Orthotic Engineering – 4.5 yrs",
//   "Audiology & Speech Therapy – 4 yrs",
//   "Bachelor of Medical Laboratory Technology (BMLT) – 3.5 yrs",
//   "Bachelor of Optometry Science (B. OPTM) – 4 yrs",
//   "Bachelor of Radio Imaging Technology (BRIT) – 3 yrs",
//   "Bachelor of Hospital Management (BHM) – 3 yrs",
// ];

// // ------------------------------------------------------------------
// // Helper components
// // ------------------------------------------------------------------

// function ParamedGroup({ group }) {
//   const { Icon } = group;
//   return (
//     <section className="mb-0 mt-4 mt-lg-5 border-bottom pb-5">
//       <div className="row">
//         <div className="col-lg-7">
//           <h3 className="h5 mb-2 d-flex align-items-center gap-2">
//             <Icon size={18} className="text-primary" />
//             <span>{group.title}</span>
//           </h3>
//           <p className="text-muted mb-3">{group.caption}</p>
//         </div>
//       </div>

//       <div className="row mt-3 g-3">
//         {group.courses.map((name) => (
//           <div
//             key={name}
//             className="col-12 col-md-6 col-lg-4 d-flex pe-lg-4"
//           >
//             <div className="branchCardNew w-100 d-flex gap-2">
//               <span className="text-primary small flex-shrink-0 mt-1">•</span>
//               <div className="branchText">{name}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function BachelorProgressionSection() {
//   return (
//     <div className="container mt-lg-5 mt-4">
//       <div className="row">
//         <div className="col-lg-6">
//           <h2 className="sectionHeading mb-2">
//             Further Study Options in Paramedical
//           </h2>
//           <p className="sectionSub mb-0">
//             Along with diploma-level programs, the guidance also lists several
//             bachelor&apos;s degrees that build on similar skill areas. Students
//             can plan diploma first and then move into these higher programs as
//             per rules and eligibility.
//           </p>
//         </div>
//       </div>

//       <div className="row g-3 mt-4 g-md-4">
//         {PARAMED_BACHELOR.map((item) => (
//           <div key={item} className="col-12 col-md-6 col-lg-4 d-flex">
//             <div className="sectionCard h-100">
//               <p className="small mb-0">{item}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ------------------------------------------------------------------
// // Main Page
// // ------------------------------------------------------------------

// export default function DiplomaParamedicalPage() {
//   return (
//     <>
//     <FrontendLayout>
//       <HeroInner
//         title="Diploma in Paramedical"
//         breadcrumb="Diploma in Paramedical"
//       />

//       <VocationalTabsBar tabs={DIPLOMA_TABS} activeId="paramedical" />

//       {/* Intro + snapshot */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <div className="row g-4 align-items-start">
//             <div className="col-12 col-lg-7">
//               <h2 className="sectionHeading mb-3">
//                 What Is a Diploma in Paramedical?
//               </h2>
//               <p className="sectionSub">
//                 Paramedical diplomas train students in hospital- and
//                 clinic-based support roles such as lab testing, imaging, therapy,
//                 critical care, dental support, and allied health services. They
//                 are usually 2-year programs after Higher Secondary (Science)
//                 with Biology.
//               </p>
//               <p className="sectionSub mb-0">
//                 These courses help students work closely with doctors, nurses
//                 and technicians in diagnostic centres, hospitals and speciality
//                 clinics, and can later connect to bachelor&apos;s degrees in
//                 similar fields.
//               </p>
//             </div>

//             <div className="col-12 col-lg-5">
//               <div className="sectionCard bg-light border">
//                 <h3 className="h6 mb-3">Quick Snapshot</h3>
//                 <dl className="row small mb-0">
//                   <dt className="col-5">Eligibility</dt>
//                   <dd className="col-7 mb-2">
//                     HS (Science) with Biology, as per course and institution
//                     rules.
//                   </dd>

//                   <dt className="col-5">Duration</dt>
//                   <dd className="col-7 mb-2">
//                     Generally around 2 years for most diplomas shown.
//                   </dd>

//                   <dt className="col-5">Course Types</dt>
//                   <dd className="col-7 mb-2">
//                     Lab & imaging, therapy & critical care, dental and allied
//                     health support.
//                   </dd>

//                   <dt className="col-5">Work Area</dt>
//                   <dd className="col-7 mb-2">
//                     Hospitals, diagnostic centres, rehabilitation units and
//                     speciality clinics.
//                   </dd>

//                   <dt className="col-5">Progression</dt>
//                   <dd className="col-7 mb-0">
//                     Higher diplomas or bachelor degrees like BMLT, B. OPTM, BRIT
//                     or BHM, depending on eligibility.
//                   </dd>
//                 </dl>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Grouped course list (from PARAMEDICAL COURSES AFTER HS Sc) */}
//       <section className="py-4 py-md-5 bg-light">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-8 text-center mb-4">
//               <h2 className="sectionHeading mb-2">
//                 Paramedical Diploma Course Clusters
//               </h2>
//               <p className="sectionSub mb-0">
//                 These clusters organise the &quot;PARAMEDICAL COURSES AFTER HS
//                 (Sc)&quot; into simple groups so that students can see related
//                 options together.
//               </p>
//             </div>
//           </div>

//           {PARAMED_GROUPS.map((group) => (
//             <ParamedGroup key={group.id} group={group} />
//           ))}

//           {/* Further study */}
//           <BachelorProgressionSection />
//         </div>
//       </section>

//       {/* Admission & general info (based on the paramedical notes in the book) */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <div className="row g-4 align-items-start">
//             <div className="col-12 col-lg-7">
//               <h2 className="sectionHeading mb-3">
//                 Admission & Where to Study
//               </h2>
//               <ul className="list-unstyled small mb-0">
//                 {PARAMED_ELIGIBILITY_POINTS.map((point) => (
//                   <li key={point} className="d-flex mb-2">
//                     <span className="me-2 mt-1">•</span>
//                     <span>{point}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="col-12 col-lg-5">
//               <div className="sectionCard bg-light border">
//                 <h3 className="h6 mb-3">Checking Current Course Availability</h3>
//                 <p className="small text-muted mb-3">
//                   The guidance mentions that lists of paramedical institutions
//                   and nursing colleges are to be seen from updated official
//                   sources. Exact course combination and seat availability may
//                   change over time.
//                 </p>
//                 <p className="small text-muted mb-0">
//                   Students should follow notices from health universities,
//                   department of health, councils and recognised institutions in
//                   West Bengal for the latest paramedical admission details.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

   
//       </FrontendLayout>
//     </>
    
//   );
// }


import React from "react";
import { Link, usePage } from '@inertiajs/react';
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import VocationalTabsBar from "./VocationalTabsBar";
import FrontendLayout from '@/Layouts/FrontendLayout';
import { Beaker, HeartPulse, Layers, ExternalLink, GraduationCap } from "lucide-react";

// ------------------------------------------------------------------
// Static tabs (these don't come from courseContent, keep as-is)
// ------------------------------------------------------------------

const DIPLOMA_TABS = [
  {
    id: "engineering",
    label: "Diploma in Engineering",
    href: '/courses/diploma-in-engineering-polytechnic',
  },
  {
    id: "paramedical",
    label: "Diploma in Paramedical",
    href: '/courses/diploma-in-paramedical',
  },
  {
    id: "pharmacy",
    label: "Diploma in Pharmacy (D.Pharm)",
    href: '/courses/diploma-in-pharmacy-dpharm',
  },
  {
    id: "it",
    label: "Diploma in Computer / IT",
    href: '/courses/diploma-in-computer-it',
  },
];

// ------------------------------------------------------------------
// Icon resolver — DB stores icon as a string (e.g. "Beaker")
// ------------------------------------------------------------------

const ICON_MAP = {
  Beaker,
  HeartPulse,
  Layers,
  ExternalLink,
  GraduationCap,
};

function resolveIcon(name) {
  return ICON_MAP[name] || Layers; // fallback icon if not mapped
}

// ------------------------------------------------------------------
// Helper components
// ------------------------------------------------------------------

function ParamedGroup({ group }) {
  const branches = group.branches || [];

  return (
    <section className="mb-0 mt-4 mt-lg-5 border-bottom pb-5">
      <div className="row">
        <div className="col-lg-7">
          <h3 className="h5 mb-2 d-flex align-items-center gap-2">
            {branches[0] &&
              (() => {
                const Icon = resolveIcon(group.icon || branches[0]?.icon);
                return <Icon size={18} className="text-primary" />;
              })()}
            <span>{group.title}</span>
          </h3>
          {group.caption && <p className="text-muted mb-3">{group.caption}</p>}
        </div>
      </div>

      <div className="row mt-3 g-3">
        {branches.map((branch, idx) => (
          <div
            key={`${group.id}-${idx}`}
            className="col-12 col-md-6 col-lg-4 d-flex pe-lg-4"
          >
            <div className="branchCardNew w-100 d-flex gap-2">
              <span className="text-primary small flex-shrink-0 mt-1">•</span>
              <div className="branchText">{branch.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BachelorProgressionSection({ postDiploma }) {
  if (!postDiploma || postDiploma.length === 0) return null;

  return (
    <div className="container mt-lg-5 mt-4">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="sectionHeading mb-2">
            Further Study Options in Paramedical
          </h2>
          <p className="sectionSub mb-0">
            Along with diploma-level programs, the guidance also lists several
            bachelor&apos;s degrees that build on similar skill areas. Students
            can plan diploma first and then move into these higher programs as
            per rules and eligibility.
          </p>
        </div>
      </div>

      <div className="row g-3 mt-4 g-md-4">
        {postDiploma.map((item, idx) => (
          <div key={`${item.name}-${idx}`} className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="sectionCard h-100">
              <p className="small mb-1 fw-semibold">{item.name}</p>
              {(item.duration || item.path) && (
                <p className="small text-muted mb-0">
                  {item.duration}
                  {item.path ? ` • ${item.path}` : ""}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// Main Page
// ------------------------------------------------------------------

export default function DiplomaParamedicalPage({ courseContent: courseContentProp }) {
  // Accept courseContent either as a direct prop or from shared Inertia page props
  const { props } = usePage();
  const courseContent = courseContentProp || props.courseContent || {};

  const {
    intro_heading,
    intro_description,
    intro_description_secondary,
    snapshot = [],
    branch_groups = [],
    post_diploma = [],
    admission_heading,
    admission_description,
    admission_info = [],
  } = courseContent;

  return (
    <>
      <FrontendLayout>
        <HeroInner
          title={intro_heading || "Diploma in Paramedical"}
          breadcrumb={intro_heading || "Diploma in Paramedical"}
        />

        <VocationalTabsBar tabs={DIPLOMA_TABS} activeId="paramedical" />

        {/* Intro + snapshot */}
        <section className="py-4 py-md-5">
          <div className="container">
            <div className="row g-4 align-items-start">
              <div className="col-12 col-lg-7">
                <h2 className="sectionHeading mb-3">
                  What Is a {intro_heading || "Diploma in Paramedical"}?
                </h2>
                {intro_description && (
                  <p className="sectionSub">{intro_description}</p>
                )}
                {intro_description_secondary && (
                  <p className="sectionSub mb-0">{intro_description_secondary}</p>
                )}
              </div>

              {snapshot.length > 0 && (
                <div className="col-12 col-lg-5">
                  <div className="sectionCard bg-light border">
                    <h3 className="h6 mb-3">Quick Snapshot</h3>
                    <dl className="row small mb-0">
                      {snapshot.map((row, idx) => (
                        <React.Fragment key={`${row.key}-${idx}`}>
                          <dt className="col-5">{row.key}</dt>
                          <dd className="col-7 mb-2">{row.value}</dd>
                        </React.Fragment>
                      ))}
                    </dl>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Grouped course list */}
        {branch_groups.length > 0 && (
          <section className="py-4 py-md-5 bg-light">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center mb-4">
                  <h2 className="sectionHeading mb-2">
                    Paramedical Diploma Course Clusters
                  </h2>
                  <p className="sectionSub mb-0">
                    These clusters organise the paramedical courses into simple
                    groups so that students can see related options together.
                  </p>
                </div>
              </div>

              {branch_groups.map((group) => (
                <ParamedGroup key={group.id} group={group} />
              ))}

              {/* Further study */}
              <BachelorProgressionSection postDiploma={post_diploma} />
            </div>
          </section>
        )}

        {/* Admission & general info */}
        {(admission_info.length > 0 || admission_description) && (
          <section className="py-4 py-md-5">
            <div className="container">
              <div className="row g-4 align-items-start">
                <div className="col-12 col-lg-7">
                  <h2 className="sectionHeading mb-3">
                    {admission_heading || "Admission & Where to Study"}
                  </h2>
                  {admission_description && (
                    <p className="sectionSub mb-3">{admission_description}</p>
                  )}
                  {admission_info.length > 0 && (
                    <ul className="list-unstyled small mb-0">
                      {admission_info.map((point, idx) => (
                        <li key={idx} className="d-flex mb-2">
                          <span className="me-2 mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="col-12 col-lg-5">
                  <div className="sectionCard bg-light border">
                    <h3 className="h6 mb-3">Checking Current Course Availability</h3>
                    <p className="small text-muted mb-3">
                      The guidance mentions that lists of paramedical institutions
                      and nursing colleges are to be seen from updated official
                      sources. Exact course combination and seat availability may
                      change over time.
                    </p>
                    <p className="small text-muted mb-0">
                      Students should follow notices from health universities,
                      department of health, councils and recognised institutions
                      for the latest paramedical admission details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </FrontendLayout>
    </>
  );
}


