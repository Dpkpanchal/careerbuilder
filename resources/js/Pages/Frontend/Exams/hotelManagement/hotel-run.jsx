// "use client";

// import React from "react";
// import HeroInner from "@/Components/Frontend/Hero/HeroInner";
// import FrontendLayout from '@/Layouts/FrontendLayout';
// import ExamTabsBar from "../ExamTabsBar";
// import { Layers3, Network, ExternalLink, Info } from "lucide-react";

// // -------------------------------------------------------------
// // Tabs
// // -------------------------------------------------------------
// const EXAM_TABS = [
//   { id: "national", label: "National Level", href: '/exams/hotel-management/national' },
//   { id: "state", label: "State Level", href: '/exams/hotel-management/state' },
//   { id: "university", label: "University Level", href: '/exams/hotel-management/university' },
//   { id: "hotel-run", label: "Hotel-run / Industry Exams", href: '/exams/hotel-management/hotel-run' },
// ];

// // -------------------------------------------------------------
// // HOTEL-RUN / INDUSTRY EXAMS (from your dataset)
// // Keep exactly the 3 items:
// // 1) Ecole Hoteliere Lavasa Entrance Test
// // 2) Oberoi STEP Entrance Test
// // 3) IHM Aurangabad Entrance Test
// // -------------------------------------------------------------
// const HOTEL_RUN_EXAMS = [
//   {
//     sl: 1,
//     exam: "Ecole Hoteliere Lavasa Entrance Test",
//     fullForm: "Ecole Hoteliere Lavasa – Entrance / Selection Process",
//     purpose: "4 Year Hotel Management Course",
//     eligibility: "10+2 (Selection via online assessment + personal interview, as notified)",
//     apply: "Online",
//     activity: "No deadline given (check official website)",
//     sources: [
//       { label: "Ecole Hoteliere Lavasa (official website)", href: "https://ecolelavasa.edu.in/" },
//     ],
//     tag: "Industry / Institute",
//     note: "Admission timelines may change; verify current intake, fees and selection steps on the official site.",
//   },
//   {
//     sl: 2,
//     exam: "Oberoi STEP Entrance / Selection",
//     fullForm: "Systematic Training and Education Programme (STEP) – The Oberoi Group",
//     purpose: "Bachelor of Tourism Studies (training programme route as notified)",
//     eligibility:
//       "Class XII (Age above 18 and below 20 years, English criteria as notified by Oberoi)",
//     apply: "Online",
//     activity: "July (programme start; registration window varies—check STEP page)",
//     sources: [
//       { label: "Oberoi STEP (official)", href: "https://www.oberoigroup.com/learning-programmes/step" },
//     ],
//     tag: "Industry",
//     note: "Selection includes online registration + assessments/interviews (as notified on official STEP page).",
//   },
//   {
//     sl: 3,
//     exam: "IHM Aurangabad Entrance / Selection",
//     fullForm: "IHM Aurangabad – Admissions & Selection Process",
//     purpose: "B.A. (Hons) in Hotel Management (and allied programmes as notified)",
//     eligibility: "10+2 in any stream with English (as notified by IHM-A)",
//     apply: "Online",
//     activity:
//       "Assessment through Statement of Purpose, Group Discussion, Personal Interview (as per IHM-A selection process)",
//     sources: [
//       { label: "IHM-A Apply Now (official)", href: "https://ihmaurangabad.ac.in/apply-now/" },
//       { label: "IHM-A Selection Process (official)", href: "https://ihmaurangabad.ac.in/selection-process/" },
//       { label: "IHM-A Admissions (official)", href: "https://ihmaurangabad.ac.in/admissions-2024/" },
//     ],
//     tag: "Industry / Institute",
//   },
// ];

// // -------------------------------------------------------------
// // Card
// // -------------------------------------------------------------
// function ExamCard({ item }) {
//   return (
//     <div className="iitCard w-100 d-flex flex-column h-100">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <span className="iitRank small fw-semibold">
//           {item.sl}. {item.exam}
//         </span>
//         <span className="iitCodeBadge">{item.tag}</span>
//       </div>

//       <h3 className="h6 fw-semibold mb-2 text-dark">{item.fullForm}</h3>

//       <div className="small text-muted mb-2">
//         <p className="mb-1">
//           <strong>PURPOSE:</strong> {item.purpose}
//         </p>
//         <p className="mb-1">
//           <strong>ELIGIBILITY:</strong> {item.eligibility}
//         </p>
//         <p className="mb-1">
//           <strong>APPLY:</strong> {item.apply}
//         </p>
//         <p className="mb-0">
//           <strong>ACTIVITY:</strong> {item.activity}
//         </p>
//       </div>

//       {!!item.note && (
//         <div className="sectionCard bg-light border small mt-2">
//           <div className="d-flex align-items-start gap-2">
//             <Info size={16} className="text-primary mt-1 flex-shrink-0" />
//             <div>{item.note}</div>
//           </div>
//         </div>
//       )}

//       <div className="mt-auto d-flex flex-column gap-2 pt-2">
//         {item.sources?.map((s) => (
//           <a
//             key={s.href}
//             href={s.href}
//             target="_blank"
//             rel="noreferrer"
//             className="iitWebsiteLink d-inline-flex align-items-center gap-1"
//           >
//             <span className="">{s.label}</span>
//             <ExternalLink size={14} />
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }

// // -------------------------------------------------------------
// // Page
// // -------------------------------------------------------------
// export default function HotelRunIndustryExamsPage() {
//   return (
//     <>
//     <FrontendLayout>
//       <HeroInner
//         title="Hotel-run / Industry Hospitality Exams"
//         breadcrumb="Hospitality & Tourism → Hotel-run / Industry Exams"
//       />

//       <ExamTabsBar tabs={EXAM_TABS} activeId="hotel-run" />

//       {/* INTRO + SNAPSHOT */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <div className="row g-4 align-items-start">
//             <div className="col-12 col-lg-7">
//               <h2 className="sectionHeading mb-3">Hotel-run / Industry Entrance & Selection Routes</h2>
//               <p className="sectionSub mb-0">
//                 Apart from national/state/university exams, some hotel groups and industry-linked institutes
//                 run their own selection processes. These may involve online profiling, SOP, interviews, and assessments.
//               </p>
//             </div>

//             <div className="col-12 col-lg-5">
//               <div className="sectionCard bg-light border">
//                 <h3 className="h6 mb-3 d-flex align-items-center gap-2">
//                   <Layers3 size={18} className="text-primary" />
//                   <span>Quick Snapshot</span>
//                 </h3>

//                 <dl className="row small mb-0">
//                   <dt className="col-6">Routes listed</dt>
//                   <dd className="col-6 mb-2">{HOTEL_RUN_EXAMS.length}</dd>

//                   <dt className="col-6">Selection style</dt>
//                   <dd className="col-6 mb-2">Assessment + interview</dd>

//                   <dt className="col-6">Best practice</dt>
//                   <dd className="col-6 mb-0">Only use official portals</dd>
//                 </dl>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* KEEP THIS SECTION */}
//       <section className="py-5 nitLightGradient">
//         <div className="container">
//           <div className="mb-4 text-center text-lg-start">
//             <h2 className="sectionHeading mb-2">How Hotel-run / Industry Routes Connect to Admissions</h2>
//             <p className="sectionSub mb-0">
//               Typically: application → screening/profile test → SOP / interview rounds → final selection → joining instructions.
//             </p>
//           </div>

//           <div className="row g-4 align-items-stretch">
//             <div className="col-12 col-lg-5 d-flex">
//               <div className="nitDarkGlassBox w-100">
//                 <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
//                   <Network size={16} />
//                   <span>Selection pathway</span>
//                 </span>

//                 <ul className="nitDarkList mb-0">
//                   <li>
//                     <strong>Apply</strong> on the official institute / hotel group portal
//                   </li>
//                   <li>
//                     <strong>Screening</strong> (online profiling / assessment where applicable)
//                   </li>
//                   <li>
//                     <strong>SOP / Interview</strong> rounds (GD/PI as notified)
//                   </li>
//                   <li>
//                     <strong>Final selection</strong> + offer / joining instructions
//                   </li>
//                   <li>
//                     <strong>Start programme</strong> as per intake calendar
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="col-12 col-lg-7 d-flex">
//               <div className="sectionCard bg-light border w-100 small">
//                 <strong>West Bengal minority students:</strong> These routes can be high-value (industry exposure + training),
//                 but always confirm legitimacy on the official portal and never pay any fee to third-party agents.
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* LIST */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <h2 className="sectionHeading mb-3">Hotel-run / Industry Exams – Official Links</h2>

//           <div className="row g-3 g-md-4">
//             {HOTEL_RUN_EXAMS.map((item) => (
//               <div key={item.exam} className="col-12 col-md-6 d-flex">
//                 <ExamCard item={item} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       </FrontendLayout>
//     </>
//   );
// }
"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import ExamTabsBar from "../ExamTabsBar";
import { Layers3, Network, ExternalLink, Info } from "lucide-react";

// -------------------------------------------------------------
// Tabs
// -------------------------------------------------------------
const EXAM_TABS = [
  { id: "national", label: "National Level", href: '/exams/hotel-management/national' },
  { id: "state", label: "State Level", href: '/exams/hotel-management/state' },
  { id: "university", label: "University Level", href: '/exams/hotel-management/university' },
  { id: "hotel-run", label: "Hotel-run / Industry Exams", href: '/exams/hotel-management/hotel-run' },
];

// -------------------------------------------------------------
// Card
// -------------------------------------------------------------
function ExamCard({ item }) {
  return (
    <div className="iitCard w-100 d-flex flex-column h-100">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="iitRank small fw-semibold">
          {item.sl}. {item.exam}
        </span>
        <span className="iitCodeBadge">{item.tag}</span>
      </div>

      <h3 className="h6 fw-semibold mb-2 text-dark">{item.fullForm}</h3>

      <div className="small text-muted mb-2">
        <p className="mb-1">
          <strong>PURPOSE:</strong> {item.purpose}
        </p>
        <p className="mb-1">
          <strong>ELIGIBILITY:</strong> {item.eligibility}
        </p>
        <p className="mb-1">
          <strong>APPLY:</strong> {item.apply}
        </p>
        <p className="mb-0">
          <strong>ACTIVITY:</strong> {item.activity}
        </p>
      </div>

      {!!item.note && (
        <div className="sectionCard bg-light border small mt-2">
          <div className="d-flex align-items-start gap-2">
            <Info size={16} className="text-primary mt-1 flex-shrink-0" />
            <div>{item.note}</div>
          </div>
        </div>
      )}

      <div className="mt-auto d-flex flex-column gap-2 pt-2">
        {item.sources?.map((l) => (
                                       <a
                                         key={l.href}
                                         href={l.href}
                                         target="_blank"
                                         rel="noreferrer"
                                         className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                                       >
                                         <span className="small">{l.label}</span>
                                         <ExternalLink size={14} />
                                       </a>
                                     ))}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Page
// -------------------------------------------------------------
export default function HotelRunIndustryExamsPage({ examContents }) {

  const hotelRunExams = Array.isArray(examContents) ? examContents : [];

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Hotel-run / Industry Hospitality Exams"
        breadcrumb="Hospitality & Tourism → Hotel-run / Industry Exams"
      />

      <ExamTabsBar tabs={EXAM_TABS} activeId="hotel-run" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">Hotel-run / Industry Entrance & Selection Routes</h2>
              <p className="sectionSub mb-0">
                Apart from national/state/university exams, some hotel groups and industry-linked institutes
                run their own selection processes. These may involve online profiling, SOP, interviews, and assessments.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <dl className="row small mb-0">
                  <dt className="col-6">Routes listed</dt>
                  <dd className="col-6 mb-2">{hotelRunExams.length}</dd>

                  <dt className="col-6">Selection style</dt>
                  <dd className="col-6 mb-2">Assessment + interview</dd>

                  <dt className="col-6">Best practice</dt>
                  <dd className="col-6 mb-0">Only use official portals</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEEP THIS SECTION */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">How Hotel-run / Industry Routes Connect to Admissions</h2>
            <p className="sectionSub mb-0">
              Typically: application → screening/profile test → SOP / interview rounds → final selection → joining instructions.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Selection pathway</span>
                </span>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>Apply</strong> on the official institute / hotel group portal
                  </li>
                  <li>
                    <strong>Screening</strong> (online profiling / assessment where applicable)
                  </li>
                  <li>
                    <strong>SOP / Interview</strong> rounds (GD/PI as notified)
                  </li>
                  <li>
                    <strong>Final selection</strong> + offer / joining instructions
                  </li>
                  <li>
                    <strong>Start programme</strong> as per intake calendar
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>West Bengal minority students:</strong> These routes can be high-value (industry exposure + training),
                but always confirm legitimacy on the official portal and never pay any fee to third-party agents.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">Hotel-run / Industry Exams – Official Links</h2>

          {hotelRunExams.length === 0 ? (
            <div className="sectionCard bg-light border text-center small text-muted">
              No exam data available right now. Please check back later.
            </div>
          ) : (
            <div className="row g-3 g-md-4">
              {hotelRunExams.map((item) => (
                <div key={item.sl ?? item.exam} className="col-12 col-md-6 d-flex">
                  <ExamCard item={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}