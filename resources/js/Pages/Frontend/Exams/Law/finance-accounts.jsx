// "use client";

// import React from "react";
// import HeroInner from "@/Components/Frontend/Hero/HeroInner";
// import FrontendLayout from '@/Layouts/FrontendLayout';  
// import ExamTabsBar from "../ExamTabsBar";
// import { Layers3, Network, ExternalLink, Info } from "lucide-react";

// // -------------------------------------------------------------
// // Tabs (Law • Management • Finance bucket)
// // -------------------------------------------------------------
// const EXAM_TABS = [
//   { id: "law", label: "Law", href: '/exams/law/law' },
//   { id: "management", label: "Management", href: '/exams/law/management' },
//   { id: "finance-accounts", label: "Finance & Accounts", href: '/exams/law/finance-accounts' },
// ];


// // -------------------------------------------------------------
// // Finance & Accounts exams (CA / CS / CMA / CFA)
// // IMPORTANT:
// // - “CPT” is now discontinued; CA entry is via CA Foundation (ICAI).
// // - Keep links official + working.
// // -------------------------------------------------------------
// const FINANCE_EXAMS = [
//   {
//     sl: 1,
//     exam: "CA (ICAI) – Foundation → Inter → Final",
//     short: "Chartered Accountancy",
//     purpose: "Chartered Accountant pathway (accounting, audit, taxation, finance)",
//     who: "After Class 12: start with CA Foundation (then Intermediate, Final + training as per ICAI rules)",
//     apply: "Online",
//     links: [
//       { label: "ICAI Official Website", href: "https://www.icai.org/" },
//       { label: "ICAI Self Service Portal (SSP)", href: "https://www.icai.org/post/16559" },
//     ],
//     tag: "National • Professional",
//     note:
//       "Older references may mention CPT. Currently ICAI entry is through CA Foundation. Always follow latest ICAI notifications and SSP announcements.",
//   },

//   {
//     sl: 2,
//     exam: "CS (ICSI) – CSEET → Executive → Professional",
//     short: "Company Secretary",
//     purpose: "Company Secretary pathway (corporate law, compliance, governance)",
//     who: "After Class 12: start with CSEET (then Executive, Professional as per ICSI rules)",
//     apply: "Online",
//     links: [
//       { label: "ICSI Official Website", href: "https://www.icsi.edu/" },
//       { label: "ICSI Examination Section", href: "https://www.icsi.edu/examinationnew/" },
//     ],
//     tag: "National • Professional",
//     note:
//       "ICSI has announced CSEET restructuring for future sessions. Check the ICSI website before planning dates/syllabus.",
//   },

//   {
//     sl: 3,
//     exam: "CMA (ICMAI) – Foundation → Inter → Final",
//     short: "Cost & Management Accounting",
//     purpose: "CMA pathway (costing, management accounting, finance, strategic cost management)",
//     who: "After Class 12: start with CMA Foundation (then Intermediate, Final as per ICMAI rules)",
//     apply: "Online",
//     links: [
//       { label: "ICMAI Official Website", href: "https://icmai.in/" },
//       { label: "ICMAI Students – Examination Portal", href: "https://icmai.in/studentswebsite/exam.php" },
//     ],
//     tag: "National • Professional",
//   },

//   {
//     sl: 4,
//     exam: "CFA Program (CFA Institute) – Level I → II → III",
//     short: "Chartered Financial Analyst",
//     purpose: "Global finance/investment credential (ethics, valuation, portfolio management)",
//     who: "Typically after graduation / final-year students (eligibility rules as per CFA Institute)",
//     apply: "Online",
//     links: [
//       { label: "CFA Program (Official)", href: "https://www.cfainstitute.org/programs/cfa-program" },
//       { label: "CFA Exam (Official)", href: "https://www.cfainstitute.org/programs/cfa-program/exam" },
//     ],
//     tag: "International • Professional",
//   },
// ];

// // -------------------------------------------------------------
// function ExamCard({ item }) {
//   return (
//     <div className="iitCard w-100 d-flex flex-column h-100">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <span className="iitRank small fw-semibold">
//           {item.sl}. {item.short}
//         </span>
//         <span className="iitCodeBadge">{item.tag}</span>
//       </div>

//       <h3 className="h6 fw-semibold mb-2 text-dark">{item.exam}</h3>

//       <div className="small text-muted mb-2">
//         <p className="mb-1">
//           <strong>PURPOSE:</strong> {item.purpose}
//         </p>
//         <p className="mb-1">
//           <strong>WHO CAN APPLY:</strong> {item.who}
//         </p>
//         <p className="mb-0">
//           <strong>APPLY:</strong> {item.apply}
//         </p>
//       </div>

//       {!!item.note && (
//         <div className="sectionCard bg-light border small mt-2">
//           <div className="d-flex align-items-start gap-2">
//             <Info size={18} className="text-primary mt-1 flex-shrink-0" />
//             <div>{item.note}</div>
//           </div>
//         </div>
//       )}

//       <div className="mt-auto d-flex flex-column gap-2 pt-3">
//         {item.links?.map((l) => (
//           <a
//             key={l.href}
//             href={l.href}
//             target="_blank"
//             rel="noreferrer"
//             className="iitWebsiteLink d-inline-flex align-items-center gap-1"
//           >
//             <span className="small">{l.label}</span>
//             <ExternalLink size={16} />
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }

// // -------------------------------------------------------------
// export default function FinanceAccountsExamsPage() {
//   return (
//     <>
//     <FrontendLayout>
//       <HeroInner
//         title="CA / CS / CMA / CFA Exams"
//         breadcrumb="Law • Management • Finance → Finance & Accounts"
//       />

//       <ExamTabsBar tabs={EXAM_TABS} activeId="finance-accounts" />

//       {/* INTRO + SNAPSHOT */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <div className="row g-4 align-items-start">
//             <div className="col-12 col-lg-7">
//               <h2 className="sectionHeading mb-3">Finance & Accounts Professional Exams</h2>
//               <p className="sectionSub mb-0">
//                 These exams lead to professional careers in accounting, taxation, corporate compliance, cost management,
//                 and investment/finance. Always use official websites for eligibility, syllabus, fees, and dates.
//               </p>
//             </div>

//             <div className="col-12 col-lg-5">
//               <div className="sectionCard bg-light border">
//                 <h3 className="h6 mb-3 d-flex align-items-center gap-2">
//                   <Layers3 size={18} className="text-primary" />
//                   <span>Quick Snapshot</span>
//                 </h3>

//                 <dl className="row small mb-0">
//                   <dt className="col-6">Exams covered</dt>
//                   <dd className="col-6 mb-2">{FINANCE_EXAMS.length}</dd>

//                   <dt className="col-6">Indian professional tracks</dt>
//                   <dd className="col-6 mb-2">CA, CS, CMA</dd>

//                   <dt className="col-6">International track</dt>
//                   <dd className="col-6 mb-2">CFA</dd>

//                   <dt className="col-6">Rule</dt>
//                   <dd className="col-6 mb-0">Only official portals</dd>
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
//             <h2 className="sectionHeading mb-2">How These Exams Connect to Careers</h2>
//             <p className="sectionSub mb-0">
//               Typical flow: registration → exam stages → training/articleship (where required) → certification → jobs.
//             </p>
//           </div>

//           <div className="row g-4 align-items-stretch">
//             <div className="col-12 col-lg-5 d-flex">
//               <div className="nitDarkGlassBox w-100">
//                 <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
//                   <Network size={16} />
//                   <span>Career pathway</span>
//                 </span>

//                 <ul className="nitDarkList mb-0">
//                   <li>
//                     <strong>CA</strong> → Audit, Tax, Corporate Finance, Practice
//                   </li>
//                   <li>
//                     <strong>CS</strong> → Company Law, Compliance, Governance, Secretarial Practice
//                   </li>
//                   <li>
//                     <strong>CMA</strong> → Costing, Management Accounting, FP&amp;A, Strategy
//                   </li>
//                   <li>
//                     <strong>CFA</strong> → Investment, Research, Portfolio, Financial Analytics
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="col-12 col-lg-7 d-flex">
//               <div className="sectionCard bg-light border w-100 small">
//                 <strong>For West Bengal minority students:</strong> choose 1 core track first (CA/CS/CMA) and keep a backup.
//                 Track scholarships/fee support in your district/community schemes and keep documents ready (income/caste/minority
//                 certificates if applicable).
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* LIST */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <h2 className="sectionHeading mb-3">Finance & Accounts Exams – Official Links</h2>

//           <div className="row g-3 g-md-4">
//             {FINANCE_EXAMS.map((item) => (
//               <div key={item.short} className="col-12 col-md-6 d-flex">
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
// Tabs (Law • Management • Finance bucket)
// -------------------------------------------------------------
const EXAM_TABS = [
  { id: "law", label: "Law", href: '/exams/law/law' },
  { id: "management", label: "Management", href: '/exams/law/management' },
  { id: "finance-accounts", label: "Finance & Accounts", href: '/exams/law/finance-accounts' },
];

// -------------------------------------------------------------
function ExamCard({ item }) {
  return (
    <div className="iitCard w-100 d-flex flex-column h-100">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="iitRank small fw-semibold">
          {item.sl}. {item.short}
        </span>
        <span className="iitCodeBadge">{item.tag}</span>
      </div>

      <h3 className="h6 fw-semibold mb-2 text-dark">{item.exam}</h3>

      <div className="small text-muted mb-2">
        <p className="mb-1">
          <strong>PURPOSE:</strong> {item.purpose}
        </p>
        <p className="mb-1">
          <strong>WHO CAN APPLY:</strong> {item.who}
        </p>
        <p className="mb-0">
          <strong>APPLY:</strong> {item.apply}
        </p>
      </div>

      {!!item.note && (
        <div className="sectionCard bg-light border small mt-2">
          <div className="d-flex align-items-start gap-2">
            <Info size={18} className="text-primary mt-1 flex-shrink-0" />
            <div>{item.note}</div>
          </div>
        </div>
      )}

      <div className="mt-auto d-flex flex-column gap-2 pt-3">
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
export default function FinanceAccountsExamsPage({ examContents }) {

  const financeExams = Array.isArray(examContents) ? examContents : [];

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="CA / CS / CMA / CFA Exams"
        breadcrumb="Law • Management • Finance → Finance & Accounts"
      />

      <ExamTabsBar tabs={EXAM_TABS} activeId="finance-accounts" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">Finance & Accounts Professional Exams</h2>
              <p className="sectionSub mb-0">
                These exams lead to professional careers in accounting, taxation, corporate compliance, cost management,
                and investment/finance. Always use official websites for eligibility, syllabus, fees, and dates.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <dl className="row small mb-0">
                  <dt className="col-6">Exams covered</dt>
                  <dd className="col-6 mb-2">{financeExams.length}</dd>

                  <dt className="col-6">Indian professional tracks</dt>
                  <dd className="col-6 mb-2">CA, CS, CMA</dd>

                  <dt className="col-6">International track</dt>
                  <dd className="col-6 mb-2">CFA</dd>

                  <dt className="col-6">Rule</dt>
                  <dd className="col-6 mb-0">Only official portals</dd>
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
            <h2 className="sectionHeading mb-2">How These Exams Connect to Careers</h2>
            <p className="sectionSub mb-0">
              Typical flow: registration → exam stages → training/articleship (where required) → certification → jobs.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Career pathway</span>
                </span>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>CA</strong> → Audit, Tax, Corporate Finance, Practice
                  </li>
                  <li>
                    <strong>CS</strong> → Company Law, Compliance, Governance, Secretarial Practice
                  </li>
                  <li>
                    <strong>CMA</strong> → Costing, Management Accounting, FP&amp;A, Strategy
                  </li>
                  <li>
                    <strong>CFA</strong> → Investment, Research, Portfolio, Financial Analytics
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>For West Bengal minority students:</strong> choose 1 core track first (CA/CS/CMA) and keep a backup.
                Track scholarships/fee support in your district/community schemes and keep documents ready (income/caste/minority
                certificates if applicable).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">Finance & Accounts Exams – Official Links</h2>

          {financeExams.length === 0 ? (
            <div className="sectionCard bg-light border text-center small text-muted">
              No exam data available right now. Please check back later.
            </div>
          ) : (
            <div className="row g-3 g-md-4">
              {financeExams.map((item) => (
                <div key={item.sl ?? item.short} className="col-12 col-md-6 d-flex">
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