// "use client";

// import React from "react";
// import HeroInner from "@/Components/Frontend/Hero/HeroInner";
// import FrontendLayout from '@/Layouts/FrontendLayout';
// import ExamTabsBar from "../ExamTabsBar";
// import { Layers3, Network, ExternalLink, Info } from "lucide-react";

// // -------------------------------------------------------------
// // Tabs (single focus like other pages)
// // -------------------------------------------------------------
// const EXAM_TABS = [
//   { id: "medical-national", label: "Medical – National Level", href: '/exams/national-level-eg-neet-ug' },
//   { id: "medical-state", label: "Medical – State Level", href: '/exams/state-level-medical-exams' },
//   { id: "nursing-exams", label: "Nursing & Allied Exams", href: '/exams/university-level-medical-exams' },
//   { id: "pg-medical", label: "PG Medical Exams (MD/MS)", href: '/exams/pg' },
//   { id: "pharmacy-exams", label: "Pharmacy Entrance Exams", href: '/exams/pharmacy' },
// ];



// const PHARMACY_EXAMS = [
//   // WB Focus
//   {
//     sl: 1,
//     exam: "WBJEE (WB)",
//     fullForm: "West Bengal Joint Entrance Examination",
//     purpose: "Admission to Pharmacy (B.Pharm) and other UG professional courses in West Bengal (as notified)",
//     eligibility: "As per WBJEEB information bulletin",
//     apply: "Online",
//     activity: "As per WBJEEB schedule",
//     sources: [{ label: "WBJEEB – WBJEE (official)", href: "https://wbjeeb.nic.in/wbjee/" }],
//     tag: "State (WB)",
//     wbFocus: true,
//   },
//   {
//     sl: 2,
//     exam: "JELET (WB) – Lateral Entry",
//     fullForm: "Joint Entrance Examination for Lateral Entry",
//     purpose: "Admission to 2nd year (3rd semester) in Pharmacy (and other streams) under lateral entry scheme in West Bengal",
//     eligibility: "As per WBJEEB JELET bulletin",
//     apply: "Online",
//     activity: "As per WBJEEB schedule",
//     sources: [{ label: "WBJEEB – JELET (official)", href: "https://wbjeeb.nic.in/jelet/" }],
//     tag: "State (WB)",
//     wbFocus: true,
//   },

//   // National / Major
//   {
//     sl: 3,
//     exam: "BITSAT",
//     fullForm: "BITS Admission Test (BITSAT)",
//     purpose: "Admission to B.Pharm and other first-degree programmes at BITS campuses (as notified)",
//     eligibility: "As per BITS admission brochure",
//     apply: "Online",
//     activity: "As per BITS schedule",
//     sources: [{ label: "BITS Admission (official)", href: "https://www.bitsadmission.com/" }],
//     tag: "National (Institute)",
//   },
//   {
//     sl: 4,
//     exam: "GPAT",
//     fullForm: "Graduate Pharmacy Aptitude Test",
//     purpose: "Admission to M.Pharm (and related opportunities) as notified",
//     eligibility: "As per GPAT bulletin",
//     apply: "Online",
//     activity: "As per official schedule",
//     sources: [
//       { label: "NTA – Pharmacy Exam / GPAT (official)", href: "https://www.nta.ac.in/Pharmacyexam" },
//       { label: "NTA (official)", href: "https://nta.ac.in/" },
//     ],
//     tag: "National (PG)",
//   },
//   {
//     sl: 5,
//     exam: "NIPER JEE",
//     fullForm: "National Institute of Pharmaceutical Education and Research Joint Entrance Exam",
//     purpose: "Admission to MS(Pharm)/M.Pharm/M.Tech(Pharm)/MBA(Pharm)/PhD routes as notified by NIPERs",
//     eligibility: "As per NIPER JEE brochure",
//     apply: "Online",
//     activity: "As per NIPER schedule",
//     sources: [
//       { label: "NIPER JEE (official portal)", href: "https://www.niper.gov.in/niperjee2025/" },
//       { label: "NIPER JEE Registration (official)", href: "https://www.niper.gov.in/niperjee2025/registration" },
//     ],
//     tag: "National (NIPER)",
//   },

//   // University / Institute Tests (as per your list)
//   {
//     sl: 6,
//     exam: "MU OET (now MET)",
//     fullForm: "Manipal University Online Entrance Test (now Manipal Entrance Test)",
//     purpose: "Admission to eligible programmes at MAHE as notified (including Pharmacy where applicable)",
//     eligibility: "As per MAHE admission rules",
//     apply: "Online",
//     activity: "As per MET schedule",
//     sources: [
//       { label: "MAHE – Entrance Test Overview (official)", href: "https://www.manipal.edu/mu/admission/indian-students/online-entrance-exam-overview.html" },
//       { label: "MET Schedule (official)", href: "https://www.manipal.edu/metschedule" },
//     ],
//     tag: "University",
//     note: "MU OET is now called MET. Always verify programme-wise eligibility on MAHE website.",
//   },
//   {
//     sl: 7,
//     exam: "ITM NEST",
//     fullForm: "ITM National Entrance & Scholarship Test (ITM University)",
//     purpose: "Admission and scholarship test for ITM University programmes (as notified; pharmacy where applicable)",
//     eligibility: "As per ITM University admission notice",
//     apply: "Online / Offline as notified",
//     activity: "As per ITM University schedule",
//     sources: [{ label: "ITM University (official)", href: "https://www.itmuniversity.ac.in/" }],
//     tag: "University",
//     note:
//       "Some sites publish ITM NEST details, but always verify the actual application/notice from ITM University official website before applying.",
//   },
//   {
//     sl: 8,
//     exam: "GITAM GAT",
//     fullForm: "GITAM Admission Test (GAT)",
//     purpose: "Admission to programmes at GITAM (including Pharmacy where applicable) as notified",
//     eligibility: "As per GITAM admission rules",
//     apply: "Online",
//     activity: "As per GITAM schedule",
//     sources: [
//       { label: "GITAM Apply Portal (official)", href: "https://apply.gitam.edu/" },
//       { label: "GITAM Official Website", href: "https://www.gitam.edu/" },
//     ],
//     tag: "University",
//   },
//   {
//     sl: 9,
//     exam: "MDUCEE",
//     fullForm: "Maharshi Dayanand University Common Entrance Exam / Admission Route",
//     purpose: "Admission to MDU programmes including Pharmaceutical Sciences (as notified)",
//     eligibility: "As per MDU admission portal / prospectus",
//     apply: "Online",
//     activity: "As per MDU schedule",
//     sources: [
//       { label: "MDU Admission Portal (official)", href: "https://mduadmission.samarth.edu.in/" },
//       { label: "MDU Admission Login (official)", href: "https://mduadmission.samarth.edu.in/index.php/site/login" },
//       { label: "MDU – Faculty of Pharmaceutical Sciences (official)", href: "https://mdu.ac.in/Faculty/CoursesHome.aspx?Code=856" },
//     ],
//     tag: "University",
//   },
//   {
//     sl: 10,
//     exam: "VEE",
//     fullForm: "VELS Entrance Examination (Vels Institute of Science, Technology & Advanced Studies – VISTAS)",
//     purpose: "Admission to VISTAS programmes including Pharmacy (as notified)",
//     eligibility: "As per VISTAS prospectus / admission rules",
//     apply: "Online",
//     activity: "As per VISTAS schedule",
//     sources: [
//       { label: "VISTAS Official Website", href: "https://vistas.ac.in/" },
//       { label: "VISTAS Application (official)", href: "https://vistas.ac.in/application/" },
//       { label: "VISTAS Admission Login (official)", href: "https://vistas.ac.in/admission-login/" },
//       { label: "VEE Procedure PDF (official)", href: "https://vistas.ac.in/wp-content/uploads/2020/09/Entrance-Exam-Procedure-VEE.pdf" },
//       { label: "VISTAS Online Application (official)", href: "https://erp.vistas.ac.in/velsonline/applicationist/loginManager/applicantRegistration.jsp" },
//     ],
//     tag: "University",
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
//             <Info size={16} className="text-primary mt-1" />
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
// export default function PharmacyEntranceExamsPage() {
//   const wbCount = PHARMACY_EXAMS.filter((x) => x.wbFocus).length;

//   return (
//     <>
//     <FrontendLayout>
//       <HeroInner title="Pharmacy Entrance Exams" breadcrumb="Medical & Allied → Pharmacy Entrance Exams" />
//       <ExamTabsBar tabs={EXAM_TABS} activeId="pharmacy-exams" />

//       {/* INTRO + SNAPSHOT */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <div className="row g-4 align-items-start">
//             <div className="col-12 col-lg-7">
//               <h2 className="sectionHeading mb-3">Pharmacy Entrance Exams</h2>
//               <p className="sectionSub mb-0">
//                 Pharmacy admissions may be through state boards (UG), national-level tests (PG), and university entrance routes.
//                 Always verify the bulletin and counselling notice from the official portal before applying.
//               </p>
//             </div>

//             <div className="col-12 col-lg-5">
//               <div className="sectionCard bg-light border">
//                 <h3 className="h6 mb-3 d-flex align-items-center gap-2">
//                   <Layers3 size={18} className="text-primary" />
//                   <span>Quick Snapshot</span>
//                 </h3>
//                 <dl className="row small mb-0">
//                   <dt className="col-6">Exams listed</dt>
//                   <dd className="col-6 mb-2">{PHARMACY_EXAMS.length}</dd>

//                   <dt className="col-6">West Bengal focus</dt>
//                   <dd className="col-6 mb-2">{wbCount ? "WBJEE + JELET" : "—"}</dd>

//                   <dt className="col-6">PG gateway</dt>
//                   <dd className="col-6 mb-0">GPAT (M.Pharm)</dd>
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
//             <h2 className="sectionHeading mb-2">How Pharmacy Exams Connect to Admissions</h2>
//             <p className="sectionSub mb-0">
//               Usually: application → exam/score → counselling/selection → verification → admission.
//             </p>
//           </div>

//           <div className="row g-4 align-items-stretch">
//             <div className="col-12 col-lg-5 d-flex">
//               <div className="nitDarkGlassBox w-100">
//                 <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
//                   <Network size={16} />
//                   <span>Admission pathway</span>
//                 </span>

//                 <ul className="nitDarkList mb-0">
//                   <li>
//                     <strong>Apply</strong> on official portal (WBJEEB / NTA / Institute)
//                   </li>
//                   <li>
//                     <strong>Appear</strong> for exam (or merit route where applicable)
//                   </li>
//                   <li>
//                     <strong>Result</strong> → score/rank/merit list
//                   </li>
//                   <li>
//                     <strong>Counselling</strong> / choice filling (if applicable)
//                   </li>
//                   <li>
//                     <strong>Final admission</strong> after verification + fee payment
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="col-12 col-lg-7 d-flex">
//               <div className="sectionCard bg-light border w-100 small">
//                 <strong>West Bengal minority students:</strong> For B.Pharm in WB, your main routes are WBJEE (regular entry) and JELET (lateral entry).
//                 Watch WBJEEB counselling notices carefully and keep documents (category, domicile/reservation proofs if applicable) ready.
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* LIST */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <h2 className="sectionHeading mb-3">Pharmacy Entrance Exams – Official Links</h2>

//           <div className="row g-3 g-md-4">
//             {PHARMACY_EXAMS.map((item) => (
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
// Tabs (single focus like other pages)
// -------------------------------------------------------------
const EXAM_TABS = [
  { id: "medical-national", label: "Medical – National Level", href: '/exams/national-level-eg-neet-ug' },
  { id: "medical-state", label: "Medical – State Level", href: '/exams/state-level-medical-exams' },
  { id: "nursing-exams", label: "Nursing & Allied Exams", href: '/exams/university-level-medical-exams' },
  { id: "pg-medical", label: "PG Medical Exams (MD/MS)", href: '/exams/pg' },
  { id: "pharmacy-exams", label: "Pharmacy Entrance Exams", href: '/exams/pharmacy' },
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
            <Info size={16} className="text-primary mt-1" />
            <div>{item.note}</div>
          </div>
        </div>
      )}

      <div className="mt-auto d-flex flex-column gap-2 pt-2">
        {item.sources?.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="iitWebsiteLink d-inline-flex align-items-center gap-1"
          >
            <span className="">{s.label}</span>
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
export default function PharmacyEntranceExamsPage({ examContents }) {

  const pharmacyExams = Array.isArray(examContents) ? examContents : [];
  const wbCount = pharmacyExams.filter((x) => x.wbFocus).length;

  return (
    <>
    <FrontendLayout>
      <HeroInner title="Pharmacy Entrance Exams" breadcrumb="Medical & Allied → Pharmacy Entrance Exams" />
      <ExamTabsBar tabs={EXAM_TABS} activeId="pharmacy-exams" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">Pharmacy Entrance Exams</h2>
              <p className="sectionSub mb-0">
                Pharmacy admissions may be through state boards (UG), national-level tests (PG), and university entrance routes.
                Always verify the bulletin and counselling notice from the official portal before applying.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>
                <dl className="row small mb-0">
                  <dt className="col-6">Exams listed</dt>
                  <dd className="col-6 mb-2">{pharmacyExams.length}</dd>

                  <dt className="col-6">West Bengal focus</dt>
                  <dd className="col-6 mb-2">{wbCount ? "WBJEE + JELET" : "—"}</dd>

                  <dt className="col-6">PG gateway</dt>
                  <dd className="col-6 mb-0">GPAT (M.Pharm)</dd>
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
            <h2 className="sectionHeading mb-2">How Pharmacy Exams Connect to Admissions</h2>
            <p className="sectionSub mb-0">
              Usually: application → exam/score → counselling/selection → verification → admission.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Admission pathway</span>
                </span>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>Apply</strong> on official portal (WBJEEB / NTA / Institute)
                  </li>
                  <li>
                    <strong>Appear</strong> for exam (or merit route where applicable)
                  </li>
                  <li>
                    <strong>Result</strong> → score/rank/merit list
                  </li>
                  <li>
                    <strong>Counselling</strong> / choice filling (if applicable)
                  </li>
                  <li>
                    <strong>Final admission</strong> after verification + fee payment
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>West Bengal minority students:</strong> For B.Pharm in WB, your main routes are WBJEE (regular entry) and JELET (lateral entry).
                Watch WBJEEB counselling notices carefully and keep documents (category, domicile/reservation proofs if applicable) ready.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">Pharmacy Entrance Exams – Official Links</h2>

          {pharmacyExams.length === 0 ? (
            <div className="sectionCard bg-light border text-center small text-muted">
              No exam data available right now. Please check back later.
            </div>
          ) : (
            <div className="row g-3 g-md-4">
              {pharmacyExams.map((item) => (
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