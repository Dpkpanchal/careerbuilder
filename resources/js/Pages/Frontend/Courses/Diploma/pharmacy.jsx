// import React from "react";
// import { Link, usePage } from '@inertiajs/react';
// import HeroInner from "@/components/Frontend/Hero/HeroInner";
// import FrontendLayout from '@/Layouts/FrontendLayout';
// import VocationalTabsBar from "./VocationalTabsBar";
// import {
//     Leaf,
//   Beaker,
//   HeartPulse,
//   Layers,
//   Pill,
//   TestTube,
//   Microscope,
//   Radiation,
//   Activity,
//   Atom,
//   Stethoscope,
//   BookOpenCheck,
//   Syringe,
//   Dot,
//   ExternalLink
// } from "lucide-react";

// const COURSE_ICON_MAP = {
//   "Diploma in Pharmacy (D.Pharm) – 2.5 years": Pill,
//   "Bachelor of Pharmacy (B.Pharm) – 4 years": Microscope,
//   "B.Pharm (Lateral Entry – for D.Pharm holders) – 3 years": Activity,
//   "Pharm (Hons.) – 4 years": BookOpenCheck,
//   "Bachelor of Pharmacy (Ayurveda) – 4 years": Leaf,
//   "Master of Pharmacy (M.Pharm) – 2 years": Atom,
//   "Pharm.D (Post Baccalaureate) – 3 years": Stethoscope,
//   "Doctor of Pharmacy (Pharm.D) – 6 years": Syringe,
// };

// // ------------------------------------------------------------------
// // Diploma sub-tabs (same as Paramedical page)
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
// // Data from Career Book – PHARMACY SECTION
// // ------------------------------------------------------------------
// //
// // We are grouping it like this, based on the book:
// // - Diploma: D.Pharm – 2.5 years
// // - Undergraduate: B.Pharm, B.Pharm (Lateral), Pharm (Hons.), B.Pharm (Ayurveda)
// // - Postgraduate & Doctoral: M.Pharm, Pharm.D, Pharm.D (Post Baccalaureate)
// //

// const PHARMACY_GROUPS = [
//   {
//     id: "diploma",
//     title: "Diploma Level – Entry into Pharmacy",
//     caption:
//       "Foundation-level programme after Higher Secondary that allows you to begin working as a pharmacist and later move into degree programmes.",
//     Icon: Beaker,
//     courses: ["Diploma in Pharmacy (D.Pharm) – 2.5 years"],
//   },
//   {
//     id: "undergraduate",
//     title: "Undergraduate Pharmacy Degrees",
//     caption:
//       "Full-fledged pharmacy degrees focusing on pharmacology, pharmaceutics, hospital and industrial pharmacy, taken after Class 12 or via lateral entry.",
//     Icon: HeartPulse,
//     courses: [
//       "Bachelor of Pharmacy (B.Pharm) – 4 years",
//       "B.Pharm (Lateral Entry – for D.Pharm holders) – 3 years",
//       "Pharm (Hons.) – 4 years",
//       "Bachelor of Pharmacy (Ayurveda) – 4 years",
//     ],
//   },
//   {
//     id: "postgraduate",
//     title: "Postgraduate & Doctoral Programmes",
//     caption:
//       "Advanced specialisations and research-oriented programmes for those who wish to grow in clinical, academic or industrial pharmacy.",
//     Icon: Layers,
//     courses: [
//       "Master of Pharmacy (M.Pharm) – 2 years",
//       "Pharm.D (Post Baccalaureate) – 3 years",
//       "Doctor of Pharmacy (Pharm.D) – 6 years",
//     ],
//   },
// ];

// const PHARMACY_ELIGIBILITY_POINTS = [
//   "For D.Pharm, the guidance mentions 10+2 with Physics, Chemistry and Mathematics or Biology, with a minimum age of 17 years at the time of admission.",
//   "For B.Pharm, students should typically pass 10+2 with Physics and Chemistry as compulsory subjects along with Mathematics / Biology / Computer Science / Biotechnology, with around 50% marks (relaxations may apply for reserved categories).",
//   "For M.Pharm, the basic eligibility is successful completion of B.Pharm with not less than about 50% marks (exact percentage and relaxations vary).",
//   "Exact marks, reservations, entrance tests (WBJEE, GPAT, etc.) and seat availability depend on the current rules of universities, councils and institutions.",
// ];

// const PHARMACY_PROGRESSION = [
//   "Start with D.Pharm (Diploma in Pharmacy) – the 2.5 year entry-level course after Class 12 Science.",
//   "Move into B.Pharm (Bachelor of Pharmacy) – 4 years, or via lateral entry (3 years) if you already hold a D.Pharm.",
//   "Specialise further with M.Pharm (Master of Pharmacy) – 2 years in fields such as Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, etc.",
//   "Consider Pharm.D (Doctor of Pharmacy) – a clinical, patient-care oriented programme (6 years regular or 3 years after B.Pharm).",
// ];

// // ------------------------------------------------------------------
// // Helper components
// // ------------------------------------------------------------------

// function PharmacyGroup({ group }) {
//   const { Icon } = group;
//   return (
//      <section className="mb-0 mt-4 mt-lg-5 border-bottom pb-5">
//       <div className="row">
//         <div className="col-lg-7">
//           <h3 className="h5 mb-2 d-flex align-items-center gap-2">
//             <span>{group.title}</span>
//           </h3>
//           <p className="text-muted mb-3">{group.caption}</p>
//         </div>
//       </div>

//       <div className="row mt-3 g-3">
//         {group.courses.map((name) => {
//           const CourseIcon = COURSE_ICON_MAP[name] || Dot;

//           return (
//             <div key={name} className="col-12 col-md-6 col-lg-4 d-flex pe-lg-4">
//               <div className="branchCardNew w-100 d-flex gap-2 align-items-start">
//                 <CourseIcon
//                   size={17}
//                   className="text-primary flex-shrink-0 mt-1"
//                 />
//                 <div className="branchText">{name}</div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// function PharmacyProgressionSection() {
//   return (
//     <div className="container mt-lg-5 mt-4">
//       <div className="row">
//         <div className="col-lg-7">
//           <h2 className="sectionHeading mb-2">
//             Study Pathway in Pharmacy (From Diploma to Doctorate)
//           </h2>
//           <p className="sectionSub mb-0">
//             The Career Book shows pharmacy clearly as a ladder – starting with
//             a diploma and moving all the way up to degree, postgraduate and
//             doctoral programmes. Students can begin with D.Pharm and then move
//             step-by-step into higher levels, as per eligibility and interest.
//           </p>
//         </div>
//       </div>

//       <div className="row g-3 mt-4 g-md-4">
//         {PHARMACY_PROGRESSION.map((item) => (
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

// export default function DiplomaPharmacyPage() {
//   return (
//     <>
//     <FrontendLayout>
//       <HeroInner
//         title="Diploma in Pharmacy (D.Pharm)"
//         breadcrumb="Diploma in Pharmacy (D.Pharm)"
//       />

//       <VocationalTabsBar tabs={DIPLOMA_TABS} activeId="pharmacy" />

//       {/* Intro + snapshot */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <div className="row g-4 align-items-start">
//             <div className="col-12 col-lg-7">
//               <h2 className="sectionHeading mb-3">
//                 What Is a Diploma in Pharmacy (D.Pharm)?
//               </h2>
//               <p className="sectionSub">
//                 D.Pharm is a foundation-level pharmacy programme that teaches
//                 students how medicines are prepared, stored and dispensed
//                 safely. It focuses on drug dosages, pharmacology basics and the
//                 responsible use of medicines in hospitals, clinics and
//                 community pharmacies.
//               </p>
//               <p className="sectionSub mb-0">
//                 The Career Book describes pharmacy as a branch of health
//                 sciences that deals with the preparation and dispensing of
//                 drugs, aiming to ensure the safe and effective use of
//                 pharmaceutical medicines. D.Pharm is the first step into this
//                 field, especially for students who have completed Higher
//                 Secondary in Science.
//               </p>
//             </div>

//             <div className="col-12 col-lg-5">
//               <div className="sectionCard bg-light border">
//                 <h3 className="h6 mb-3">Quick Snapshot</h3>
//                 <dl className="row small mb-0">
//                   <dt className="col-5">Eligibility</dt>
//                   <dd className="col-7 mb-2">
//                     10+2 (Science) with Physics, Chemistry and Mathematics or
//                     Biology. Minimum age around 17 years at admission, as per
//                     rules.
//                   </dd>

//                   <dt className="col-5">Duration</dt>
//                   <dd className="col-7 mb-2">Around 2.5 years for D.Pharm.</dd>

//                   <dt className="col-5">Course Type</dt>
//                   <dd className="col-7 mb-2">
//                     Health sciences diploma focused on medicines, dispensing and
//                     patient-care support.
//                   </dd>

//                   <dt className="col-5">Work Area</dt>
//                   <dd className="col-7 mb-2">
//                     Retail medical shops, hospital pharmacies, basic roles in
//                     pharma industry and distribution.
//                   </dd>

//                   <dt className="col-5">Progression</dt>
//                   <dd className="col-7 mb-0">
//                     B.Pharm (regular or lateral entry), followed by M.Pharm,
//                     Pharm.D and research roles.
//                   </dd>
//                 </dl>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Grouped course list – Diploma to PG/PhD ladder */}
//       <section className="py-4 py-md-5 bg-light">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-8 text-center mb-4">
//               <h2 className="sectionHeading mb-2">
//                 Pharmacy Course Ladder from Diploma to Doctorate
//               </h2>
//               <p className="sectionSub mb-0">
//                 This view organises the Pharmacy section of the Career Book into
//                 simple blocks – Diploma, Undergraduate and Postgraduate / Doctoral
//                 – so that students can see the full growth path clearly.
//               </p>
//             </div>
//           </div>

//           {PHARMACY_GROUPS.map((group) => (
//             <PharmacyGroup key={group.id} group={group} />
//           ))}

//           {/* Further study / pathway */}
//           <PharmacyProgressionSection />
//         </div>
//       </section>

//       {/* Admission & general info (based on pharmacy notes in the book) */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <div className="row g-4 align-items-start">
//             <div className="col-12 col-lg-7">
//               <h2 className="sectionHeading mb-3">
//                 Admission, Entrance Exams & Where to Study
//               </h2>
//               <ul className="list-unstyled small mb-0">
//                 {PHARMACY_ELIGIBILITY_POINTS.map((point) => (
//                   <li key={point} className="d-flex mb-2">
//                     <span className="me-2 mt-1">•</span>
//                     <span>{point}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="col-12 col-lg-5">
//               <div className="sectionCard bg-light border">
//                 <h3 className="h6 mb-3">Checking Current Pharmacy Options</h3>
//                 <p className="small text-muted mb-2">
//                   The Career Book lists pharmacy as a professional course and
//                   mentions diploma, degree and postgraduate options, along with
//                   some example institutions in West Bengal. However, exact
//                   course combinations and seats can change over time.
//                 </p>
//                 <p className="small text-muted mb-2">
//                   For D.Pharm and B.Pharm, students should follow latest notices
//                   from state pharmacy councils, health universities, WBJEE board
//                   and recognised institutes. For M.Pharm and higher, exams such
//                   as GPAT and NIPER JEE are important.
//                 </p>
//                 <p className="small text-muted mb-0">
//                   Always refer to official websites of universities, councils
//                   and entrance-exam bodies for updated eligibility, forms,
//                   deadlines and approved college lists.
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
import { Link } from '@inertiajs/react';
import HeroInner from "@/components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import VocationalTabsBar from "./VocationalTabsBar";
import {
  Leaf,
  Beaker,
  HeartPulse,
  Layers,
  Pill,
  TestTube,
  Microscope,
  Radiation,
  Activity,
  Atom,
  Stethoscope,
  BookOpenCheck,
  Syringe,
  Dot,
  ExternalLink
} from "lucide-react";

const COURSE_ICON_MAP = {
  "Diploma in Pharmacy (D.Pharm) – 2.5 years": Pill,
  "Bachelor of Pharmacy (B.Pharm) – 4 years": Microscope,
  "B.Pharm (Lateral Entry – for D.Pharm holders) – 3 years": Activity,
  "Pharm (Hons.) – 4 years": BookOpenCheck,
  "Bachelor of Pharmacy (Ayurveda) – 4 years": Leaf,
  "Master of Pharmacy (M.Pharm) – 2 years": Atom,
  "Pharm.D (Post Baccalaureate) – 3 years": Stethoscope,
  "Doctor of Pharmacy (Pharm.D) – 6 years": Syringe,
};

// ------------------------------------------------------------------
// Diploma sub-tabs (same as Paramedical page)
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
// Helper components
// ------------------------------------------------------------------

function PharmacyGroup({ group }) {
  return (
    <section className="mb-0 mt-4 mt-lg-5 border-bottom pb-5">
      <div className="row">
        <div className="col-lg-7">
          <h3 className="h5 mb-2 d-flex align-items-center gap-2">
            <span>{group.title}</span>
          </h3>
          <p className="text-muted mb-3">{group.caption}</p>
        </div>
      </div>

      <div className="row mt-3 g-3">
        {group.branches && group.branches.map((branch, index) => {
          // Get icon from course name
          const CourseIcon = COURSE_ICON_MAP[branch.name] || Dot;

          return (
            <div key={index} className="col-12 col-md-6 col-lg-4 d-flex pe-lg-4">
              <div className="branchCardNew w-100 d-flex gap-2 align-items-start">
                <CourseIcon
                  size={17}
                  className="text-primary flex-shrink-0 mt-1"
                />
                <div className="branchText">{branch.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function PharmacyProgressionSection({ progressionSteps }) {
  if (!progressionSteps || progressionSteps.length === 0) {
    return null;
  }

  return (
    <div className="container mt-lg-5 mt-4">
      <div className="row">
        <div className="col-lg-7">
          <h2 className="sectionHeading mb-2">
            Study Pathway in Pharmacy (From Diploma to Doctorate)
          </h2>
          <p className="sectionSub mb-0">
            The Career Book shows pharmacy clearly as a ladder – starting with
            a diploma and moving all the way up to degree, postgraduate and
            doctoral programmes. Students can begin with D.Pharm and then move
            step-by-step into higher levels, as per eligibility and interest.
          </p>
        </div>
      </div>

      <div className="row g-3 mt-4 g-md-4">
        {progressionSteps.map((item, index) => {
          // Check if item is a string or object
          if (typeof item === 'string') {
            return (
              <div key={index} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="sectionCard h-100">
                  <p className="small mb-0">{item}</p>
                </div>
              </div>
            );
          }
          
          // If it's an object with name, path, duration
          return (
            <div key={index} className="col-12 col-md-6 col-lg-4 d-flex">
              <div className="sectionCard h-100">
                <h4 className="h6 mb-1">{item.name || 'Step'}</h4>
                {item.duration && (
                  <p className="small text-muted mb-1">
                    Duration: {item.duration}
                  </p>
                )}
                {item.path && (
                  <p className="small mb-0">
                    <span className="text-muted">Pathway: </span>
                    {item.path}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// Main Page
// ------------------------------------------------------------------

export default function DiplomaPharmacyPage({ courseContent }) {
  // Debug log to see what we're getting
  console.log('=== DiplomaPharmacyPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent - USING CORRECT FIELD NAMES
  const pharmacyGroups = courseContent?.branch_groups || [];
  const progressionSteps = courseContent?.post_diploma || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "What Is a Diploma in Pharmacy (D.Pharm)?";
  const introDescription = courseContent?.intro_description || "D.Pharm is a foundation-level pharmacy programme that teaches students how medicines are prepared, stored and dispensed safely. It focuses on drug dosages, pharmacology basics and the responsible use of medicines in hospitals, clinics and community pharmacies.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "The Career Book describes pharmacy as a branch of health sciences that deals with the preparation and dispensing of drugs, aiming to ensure the safe and effective use of pharmaceutical medicines. D.Pharm is the first step into this field, especially for students who have completed Higher Secondary in Science.";
  const admissionHeading = courseContent?.admission_heading || "Admission, Entrance Exams & Where to Study";
  const admissionDescription = courseContent?.admission_description || "";
  const admissionInfo = courseContent?.admission_info || [];

  // Convert snapshot array to object for easy access
  const snapshotData = {};
  if (Array.isArray(snapshot)) {
    snapshot.forEach(item => {
      if (item && typeof item === 'object' && 'key' in item && 'value' in item) {
        snapshotData[item.key] = item.value;
      }
    });
  }

  // Debug the extracted data
  console.log('Extracted pharmacyGroups:', pharmacyGroups);
  console.log('Extracted progressionSteps:', progressionSteps);
  console.log('Extracted admissionInfo:', admissionInfo);

  // If no data found, show message
  if (pharmacyGroups.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner
          title="Diploma in Pharmacy (D.Pharm)"
          breadcrumb="Diploma in Pharmacy (D.Pharm)"
        />
        <VocationalTabsBar tabs={DIPLOMA_TABS} activeId="pharmacy" />
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
        title="Diploma in Pharmacy (D.Pharm)"
        breadcrumb="Diploma in Pharmacy (D.Pharm)"
      />

      <VocationalTabsBar tabs={DIPLOMA_TABS} activeId="pharmacy" />

      {/* Intro + snapshot */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">{introHeading}</h2>
              <p className="sectionSub">{introDescription}</p>
              {introDescriptionSecondary && (
                <p className="sectionSub mb-0">{introDescriptionSecondary}</p>
              )}
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3">Quick Snapshot</h3>
                <dl className="row small mb-0">
                  {snapshot && snapshot.length > 0 ? (
                    snapshot.map((item, index) => (
                      <React.Fragment key={index}>
                        <dt className="col-5">{item.key}</dt>
                        <dd className="col-7 mb-2">{item.value}</dd>
                      </React.Fragment>
                    ))
                  ) : (
                    // Fallback content if no snapshot data
                    <>
                      <dt className="col-5">Eligibility</dt>
                      <dd className="col-7 mb-2">
                        10+2 (Science) with Physics, Chemistry and Mathematics or
                        Biology. Minimum age around 17 years at admission, as per rules.
                      </dd>

                      <dt className="col-5">Duration</dt>
                      <dd className="col-7 mb-2">Around 2.5 years for D.Pharm.</dd>

                      <dt className="col-5">Course Type</dt>
                      <dd className="col-7 mb-2">
                        Health sciences diploma focused on medicines, dispensing and
                        patient-care support.
                      </dd>

                      <dt className="col-5">Work Area</dt>
                      <dd className="col-7 mb-2">
                        Retail medical shops, hospital pharmacies, basic roles in
                        pharma industry and distribution.
                      </dd>

                      <dt className="col-5">Progression</dt>
                      <dd className="col-7 mb-0">
                        B.Pharm (regular or lateral entry), followed by M.Pharm,
                        Pharm.D and research roles.
                      </dd>
                    </>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grouped course list – Diploma to PG/PhD ladder */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-4">
              <h2 className="sectionHeading mb-2">
                Pharmacy Course Ladder from Diploma to Doctorate
              </h2>
              <p className="sectionSub mb-0">
                This view organises the Pharmacy section of the Career Book into
                simple blocks – Diploma, Undergraduate and Postgraduate / Doctoral
                – so that students can see the full growth path clearly.
              </p>
            </div>
          </div>

          {pharmacyGroups.map((group, index) => (
            <PharmacyGroup key={index} group={group} />
          ))}

          {/* Further study / pathway */}
          <PharmacyProgressionSection progressionSteps={progressionSteps} />
        </div>
      </section>

      {/* Admission & general info */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">{admissionHeading}</h2>
              {admissionDescription && (
                <p className="sectionSub">{admissionDescription}</p>
              )}
              <ul className="list-unstyled small mb-0">
                {(admissionInfo || []).map((item, index) => (
                  <li key={index} className="d-flex mb-2">
                    <span className="me-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3">Checking Current Pharmacy Options</h3>
                <p className="small text-muted mb-2">
                  The Career Book lists pharmacy as a professional course and
                  mentions diploma, degree and postgraduate options, along with
                  some example institutions in West Bengal. However, exact
                  course combinations and seats can change over time.
                </p>
                <p className="small text-muted mb-2">
                  For D.Pharm and B.Pharm, students should follow latest notices
                  from state pharmacy councils, health universities, WBJEE board
                  and recognised institutes. For M.Pharm and higher, exams such
                  as GPAT and NIPER JEE are important.
                </p>
                <p className="small text-muted mb-0">
                  Always refer to official websites of universities, councils
                  and entrance-exam bodies for updated eligibility, forms,
                  deadlines and approved college lists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FrontendLayout>
  );
}
