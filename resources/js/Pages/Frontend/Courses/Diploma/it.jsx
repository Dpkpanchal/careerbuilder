// import React from "react";
// import { Link, usePage } from '@inertiajs/react';
// import HeroInner from "@/Components/Frontend/Hero/HeroInner";
// import FrontendLayout from '@/Layouts/FrontendLayout';
// import VocationalTabsBar from "./VocationalTabsBar";
// import {
//   Cpu,
//   Code2,
//   Layers,
//   Monitor,
//   TabletSmartphone,
//   Database,
//   Globe,
//   Palette,
//   TerminalSquare,
//   HardDrive,
//   CircuitBoard,
//   Dot
// } from "lucide-react";

// const IT_COURSE_ICON_MAP = {
//   "Diploma in Computer Science & Technology – 3 years": Monitor,
//   "Diploma in Computer Engineering – 3 years": Cpu,
//   "Diploma in Information Technology – 3 years": HardDrive,
//   "Diploma in Electronics & Computer Engineering – 3 years": CircuitBoard,

//   "Advanced Diploma in Software Engineering": Code2,
//   "Diploma in Web Design & Development": Globe,
//   "Diploma in Mobile Application Development": TabletSmartphone,
//   "Diploma in Database Management Systems": Database,

//   "Diploma in Computer Applications (DCA)": TerminalSquare,
//   "Diploma in Financial Accounting & Tally": Database,
//   "Diploma in Desktop Publishing & Graphic Design": Palette,
//   "Diploma in Multimedia & Animation": Layers,
// };

// // ------------------------------------------------------------------
// // Diploma sub-tabs (same structure as other diploma pages)
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
// // Data – Computer / IT diploma clusters & progression
// // ------------------------------------------------------------------

// const IT_GROUPS = [
//   {
//     id: "core-computer",
//     title: "Core Computer Engineering & IT Infrastructure",
//     caption:
//       "Diploma routes that focus on core computing, hardware, networks and basic software foundations.",
//     Icon: Cpu,
//     courses: [
//       "Diploma in Computer Science & Technology – 3 years",
//       "Diploma in Computer Engineering – 3 years",
//       "Diploma in Information Technology – 3 years",
//       "Diploma in Electronics & Computer Engineering – 3 years",
//     ],
//   },
//   {
//     id: "software-web",
//     title: "Software Development & Web Technologies",
//     caption:
//       "Programmes that focus on programming, web development and building software solutions.",
//     Icon: Code2,
//     courses: [
//       "Advanced Diploma in Software Engineering",
//       "Diploma in Web Design & Development",
//       "Diploma in Mobile Application Development",
//       "Diploma in Database Management Systems",
//     ],
//   },
//   {
//     id: "office-multimedia",
//     title: "Office Applications, Graphics & Multimedia",
//     caption:
//       "Shorter diplomas that prepare students for office IT roles, graphics, DTP and multimedia production.",
//     Icon: Layers,
//     courses: [
//       "Diploma in Computer Applications (DCA)",
//       "Diploma in Financial Accounting & Tally",
//       "Diploma in Desktop Publishing & Graphic Design",
//       "Diploma in Multimedia & Animation",
//     ],
//   },
// ];

// const IT_ELIGIBILITY_POINTS = [
//   "Many 3-year Computer / IT diplomas are available after Class 10 through polytechnic / technical entrance exams.",
//   "For some programmes (especially more advanced or software-focused diplomas), Class 12 with Mathematics or a Science stream background is preferred.",
//   "In many states, there are also lateral-entry options into second year diploma for ITI / vocational students, depending on current rules.",
//   "Exact eligibility (subjects, marks, age) and admission mode (entrance test vs. direct admission) are decided by each board / institution, so students must always check the latest notifications.",
// ];

// const IT_BACHELOR = [
//   "B.Tech / BE in Computer Science & Engineering (CSE) – 4 yrs",
//   "B.Tech / BE in Information Technology (IT) – 4 yrs",
//   "BCA (Bachelor of Computer Applications) – 3 yrs",
//   "B.Sc. in Computer Science / Information Technology – 3 yrs",
//   "Integrated BCA–MCA or B.Sc–M.Sc in IT – around 5 yrs",
//   "Diploma to B.Tech / BE lateral entry options where permitted by rules",
// ];

// // ------------------------------------------------------------------
// // Helper components
// // ------------------------------------------------------------------
// function ITGroup({ group }) {
//   const { Icon } = group;
//   return (
//     <section className="mb-0 mt-4 mt-lg-5 border-bottom pb-5">
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
//           const CourseIcon = IT_COURSE_ICON_MAP[name] || Dot;

//           return (
//             <div key={name} className="col-12 col-md-6 col-lg-4 d-flex pe-lg-4">
//               <div className="branchCardNew w-100 d-flex gap-2">
//                 <CourseIcon
//                   size={18}
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


// function ITProgressionSection() {
//   return (
//     <div className="container mt-lg-5 mt-4">
//       <div className="row">
//         <div className="col-lg-6">
//           <h2 className="sectionHeading mb-2">
//             Further Study Options in Computer / IT
//           </h2>
//           <p className="sectionSub mb-0">
//             Computer and IT diplomas can act as stepping stones to higher
//             degrees. Many students complete a diploma first, start working or
//             gain experience, and later enter degree-level programmes through
//             regular or lateral-entry routes.
//           </p>
//         </div>
//       </div>

//       <div className="row g-3 mt-4 g-md-4">
//         {IT_BACHELOR.map((item) => (
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

// export default function DiplomaITPage() {
//   return (
//     <>
//     <FrontendLayout>
//       <HeroInner
//         title="Diploma in Computer / IT"
//         breadcrumb="Diploma in Computer / IT"
//       />

//       <VocationalTabsBar tabs={DIPLOMA_TABS} activeId="it" />

//       {/* Intro + snapshot */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <div className="row g-4 align-items-start">
//             <div className="col-12 col-lg-7">
//               <h2 className="sectionHeading mb-3">
//                 What Is a Diploma in Computer / IT?
//               </h2>
//               <p className="sectionSub">
//                 A Diploma in Computer / IT focuses on practical skills in
//                 computing, programming, networks, databases and office
//                 technology. It is designed to prepare students for entry-level
//                 roles in IT support, software development, office automation and
//                 related areas.
//               </p>
//               <p className="sectionSub mb-0">
//                 These diplomas are usually offered through polytechnics and
//                 technical institutes. They suit students who want a more hands-on,
//                 job-oriented route in technology, and can later connect to
//                 degree programmes such as B.Tech, BCA or B.Sc in Computer
//                 Science / IT.
//               </p>
//             </div>

//             <div className="col-12 col-lg-5">
//               <div className="sectionCard bg-light border">
//                 <h3 className="h6 mb-3">Quick Snapshot</h3>
//                 <dl className="row small mb-0">
//                   <dt className="col-5">Eligibility</dt>
//                   <dd className="col-7 mb-2">
//                     Commonly after Class 10 or Class 12, depending on the
//                     diploma and institute. Mathematics is often required or
//                     strongly recommended.
//                   </dd>

//                   <dt className="col-5">Duration</dt>
//                   <dd className="col-7 mb-2">
//                     Around 3 years for core diplomas; shorter durations for
//                     some application / software courses.
//                   </dd>

//                   <dt className="col-5">Course Types</dt>
//                   <dd className="col-7 mb-2">
//                     Core computer engineering, software development, office
//                     applications, graphics and multimedia.
//                   </dd>

//                   <dt className="col-5">Work Area</dt>
//                   <dd className="col-7 mb-2">
//                     IT support, junior developer roles, data entry & MIS,
//                     lab/office IT maintenance, design & multimedia teams.
//                   </dd>

//                   <dt className="col-5">Progression</dt>
//                   <dd className="col-7 mb-0">
//                     Lateral or regular entry into B.Tech / BE (CSE / IT), BCA,
//                     B.Sc (CS / IT), followed by MCA or M.Tech.
//                   </dd>
//                 </dl>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Grouped course list – Computer / IT diploma clusters */}
//       <section className="py-4 py-md-5 bg-light">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-8 text-center mb-4">
//               <h2 className="sectionHeading mb-2">
//                 Computer / IT Diploma Course Clusters
//               </h2>
//               <p className="sectionSub mb-0">
//                 To make it easier for students, related Computer / IT diplomas
//                 are grouped into simple clusters – core engineering, software
//                 development, and office / multimedia applications.
//               </p>
//             </div>
//           </div>

//           {IT_GROUPS.map((group) => (
//             <ITGroup key={group.id} group={group} />
//           ))}

//           {/* Further study */}
//           <ITProgressionSection />
//         </div>
//       </section>

//       {/* Admission & general info */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <div className="row g-4 align-items-start">
//             <div className="col-12 col-lg-7">
//               <h2 className="sectionHeading mb-3">
//                 Admission & Where to Study
//               </h2>
//               <ul className="list-unstyled small mb-0">
//                 {IT_ELIGIBILITY_POINTS.map((point) => (
//                   <li key={point} className="d-flex mb-2">
//                     <span className="me-2 mt-1">•</span>
//                     <span>{point}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="col-12 col-lg-5">
//               <div className="sectionCard bg-light border">
//                 <h3 className="h6 mb-3">How to Check Current Options</h3>
//                 <p className="small text-muted mb-3">
//                   Computer / IT diplomas are offered by government and private
//                   polytechnics, technical institutes, community colleges and
//                   some universities. Names, seat availability and exact course
//                   combinations can change over time.
//                 </p>
//                 <p className="small text-muted mb-2">
//                   Students should follow state technical education boards,
//                   polytechnic entrance exam notifications and official institute
//                   websites for the latest prospectus, eligibility rules and
//                   admission calendars.
//                 </p>
//                 <p className="small text-muted mb-0">
//                   It is also useful to compare syllabus, lab facilities,
//                   placement support and internship opportunities before choosing
//                   a particular Computer / IT diploma.
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
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import VocationalTabsBar from "./VocationalTabsBar";
import {
  Cpu,
  Code2,
  Layers,
  Monitor,
  TabletSmartphone,
  Database,
  Globe,
  Palette,
  TerminalSquare,
  HardDrive,
  CircuitBoard,
  Dot
} from "lucide-react";

const IT_COURSE_ICON_MAP = {
  "Diploma in Computer Science & Technology – 3 years": Monitor,
  "Diploma in Computer Engineering – 3 years": Cpu,
  "Diploma in Information Technology – 3 years": HardDrive,
  "Diploma in Electronics & Computer Engineering – 3 years": CircuitBoard,
  "Advanced Diploma in Software Engineering": Code2,
  "Diploma in Web Design & Development": Globe,
  "Diploma in Mobile Application Development": TabletSmartphone,
  "Diploma in Database Management Systems": Database,
  "Diploma in Computer Applications (DCA)": TerminalSquare,
  "Diploma in Financial Accounting & Tally": Database,
  "Diploma in Desktop Publishing & Graphic Design": Palette,
  "Diploma in Multimedia & Animation": Layers,
};

// ------------------------------------------------------------------
// Diploma sub-tabs (same structure as other diploma pages)
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

function ITGroup({ group }) {
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
          const CourseIcon = IT_COURSE_ICON_MAP[branch.name] || Dot;

          return (
            <div key={index} className="col-12 col-md-6 col-lg-4 d-flex pe-lg-4">
              <div className="branchCardNew w-100 d-flex gap-2">
                <CourseIcon
                  size={18}
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

function ITProgressionSection({ progressionSteps }) {
  if (!progressionSteps || progressionSteps.length === 0) {
    return null;
  }

  return (
    <div className="container mt-lg-5 mt-4">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="sectionHeading mb-2">
            Further Study Options in Computer / IT
          </h2>
          <p className="sectionSub mb-0">
            Computer and IT diplomas can act as stepping stones to higher
            degrees. Many students complete a diploma first, start working or
            gain experience, and later enter degree-level programmes through
            regular or lateral-entry routes.
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
                <h4 className="h6 mb-1">{item.name || 'Program'}</h4>
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

export default function DiplomaITPage({ courseContent }) {
  // Debug log to see what we're getting
  console.log('=== DiplomaITPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const itGroups = courseContent?.branch_groups || [];
  const progressionSteps = courseContent?.post_diploma || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "What Is a Diploma in Computer / IT?";
  const introDescription = courseContent?.intro_description || "A Diploma in Computer / IT focuses on practical skills in computing, programming, networks, databases and office technology. It is designed to prepare students for entry-level roles in IT support, software development, office automation and related areas.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "These diplomas are usually offered through polytechnics and technical institutes. They suit students who want a more hands-on, job-oriented route in technology, and can later connect to degree programmes such as B.Tech, BCA or B.Sc in Computer Science / IT.";
  const admissionHeading = courseContent?.admission_heading || "Admission & Where to Study";
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
  console.log('Extracted itGroups:', itGroups);
  console.log('Extracted progressionSteps:', progressionSteps);
  console.log('Extracted admissionInfo:', admissionInfo);

  // If no data found, show message
  if (itGroups.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner
          title="Diploma in Computer / IT"
          breadcrumb="Diploma in Computer / IT"
        />
        <VocationalTabsBar tabs={DIPLOMA_TABS} activeId="it" />
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
        title="Diploma in Computer / IT"
        breadcrumb="Diploma in Computer / IT"
      />

      <VocationalTabsBar tabs={DIPLOMA_TABS} activeId="it" />

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
                        Commonly after Class 10 or Class 12, depending on the
                        diploma and institute. Mathematics is often required or
                        strongly recommended.
                      </dd>

                      <dt className="col-5">Duration</dt>
                      <dd className="col-7 mb-2">
                        Around 3 years for core diplomas; shorter durations for
                        some application / software courses.
                      </dd>

                      <dt className="col-5">Course Types</dt>
                      <dd className="col-7 mb-2">
                        Core computer engineering, software development, office
                        applications, graphics and multimedia.
                      </dd>

                      <dt className="col-5">Work Area</dt>
                      <dd className="col-7 mb-2">
                        IT support, junior developer roles, data entry & MIS,
                        lab/office IT maintenance, design & multimedia teams.
                      </dd>

                      <dt className="col-5">Progression</dt>
                      <dd className="col-7 mb-0">
                        Lateral or regular entry into B.Tech / BE (CSE / IT), BCA,
                        B.Sc (CS / IT), followed by MCA or M.Tech.
                      </dd>
                    </>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grouped course list – Computer / IT diploma clusters */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-4">
              <h2 className="sectionHeading mb-2">
                Computer / IT Diploma Course Clusters
              </h2>
              <p className="sectionSub mb-0">
                To make it easier for students, related Computer / IT diplomas
                are grouped into simple clusters – core engineering, software
                development, and office / multimedia applications.
              </p>
            </div>
          </div>

          {itGroups.map((group, index) => (
            <ITGroup key={index} group={group} />
          ))}

          {/* Further study */}
          <ITProgressionSection progressionSteps={progressionSteps} />
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
                <h3 className="h6 mb-3">How to Check Current Options</h3>
                <p className="small text-muted mb-3">
                  Computer / IT diplomas are offered by government and private
                  polytechnics, technical institutes, community colleges and
                  some universities. Names, seat availability and exact course
                  combinations can change over time.
                </p>
                <p className="small text-muted mb-2">
                  Students should follow state technical education boards,
                  polytechnic entrance exam notifications and official institute
                  websites for the latest prospectus, eligibility rules and
                  admission calendars.
                </p>
                <p className="small text-muted mb-0">
                  It is also useful to compare syllabus, lab facilities,
                  placement support and internship opportunities before choosing
                  a particular Computer / IT diploma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FrontendLayout>
  );
}