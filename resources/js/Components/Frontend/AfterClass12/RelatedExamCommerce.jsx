"use client";

import React from "react";
import {
  Briefcase,
  Landmark,
  Scale,
  Calculator,
  Building2,
  Microscope,
  Link as LinkIcon,
  ArrowUpRight,
} from "lucide-react";

/**
 * Related Exams – After Class 12 (Commerce)
 * - Same card design as Arts
 * - Eligibility mentioned where applicable
 * - Category-based (no accordion, no search)
 */

// const CATEGORIES = [
//   {
//     key: "commerce-ug",
//     title: "Commerce & Business Entrance Exams (After Class 12)",
//     description:
//       "These exams allow direct entry into commerce, accounting and business programmes after Class 12.",
//     items: [
//       {
//         title: "CUET-UG (Commerce Stream)",
//         authority: "NTA",
//         eligibility: "After Class 12 (Commerce)",
//         usedFor: "B.Com / B.Com (Hons) / Economics / Business Studies",
//         outcomes: "Commerce graduation, higher studies, govt exams",
//         website: "https://cuet.nta.nic.in/",
//       },
//       {
//         title: "BBA Entrance Exams",
//         authority: "Universities / Institutes",
//         eligibility: "After Class 12 (Commerce / Arts)",
//         usedFor: "BBA programmes",
//         outcomes: "Management foundation, MBA pathway",
//         website: "",
//         websiteLabel: "University portals",
//       },
//       {
//         title: "IPMAT (Selected IIMs)",
//         authority: "IIMs",
//         eligibility: "After Class 12 (criteria institute-specific)",
//         usedFor: "Integrated BBA + MBA",
//         outcomes: "Early management career, leadership roles",
//         website: "https://www.iimidr.ac.in",
//         websiteLabel: "IIM Indore (example)",
//       },
//     ],
//   },

//   {
//     key: "professional",
//     title: "Professional Accounting & Finance Exams",
//     description:
//       "Highly valued professional qualifications in accounting, auditing, finance and taxation.",
//     items: [
//       {
//         title: "CA – Chartered Accountant",
//         authority: "ICAI",
//         eligibility: "After Class 12 (Commerce)",
//         usedFor: "Professional accounting & auditing qualification",
//         outcomes: "CA, Auditor, Finance Head, Tax Consultant",
//         website: "https://www.icai.org",
//       },
//       {
//         title: "CMA – Cost & Management Accountant",
//         authority: "ICMAI",
//         eligibility: "After Class 12",
//         usedFor: "Costing & management accounting",
//         outcomes: "Cost Accountant, Finance & Operations roles",
//         website: "https://icmai.in",
//       },
//       {
//         title: "CS – Company Secretary",
//         authority: "ICSI",
//         eligibility: "After Class 12",
//         usedFor: "Corporate law & compliance",
//         outcomes: "Company Secretary, Compliance Officer",
//         website: "https://www.icsi.edu",
//       },
//       {
//         title: "CFA – Chartered Financial Analyst",
//         authority: "CFA Institute",
//         eligibility: "Graduation required (plan after B.Com)",
//         usedFor: "Investment & financial analysis",
//         outcomes: "Equity research, portfolio management",
//         website: "https://www.cfainstitute.org",
//       },
//     ],
//   },

//   {
//     key: "law",
//     title: "Law Entrance Exams (Commerce Eligible)",
//     description:
//       "Commerce students can pursue law through integrated or post-graduation pathways.",
//     items: [
//       {
//         title: "CLAT",
//         authority: "Consortium of NLUs",
//         eligibility: "After Class 12 (Commerce)",
//         usedFor: "B.Com LLB / BA LLB",
//         outcomes: "Law practice, judiciary, corporate law",
//         website: "https://consortiumofnlus.ac.in",
//       },
//       {
//         title: "AILET",
//         authority: "NLU Delhi",
//         eligibility: "After Class 12",
//         usedFor: "BA LLB at NLU Delhi",
//         outcomes: "Legal practice, judiciary, policy roles",
//         website: "https://nludelhi.ac.in",
//       },
//     ],
//   },

//   {
//     key: "govt",
//     title: "Government & Competitive Exams",
//     description:
//       "Commerce graduates are eligible for a wide range of government and regulatory services.",
//     items: [
//       {
//         title: "UPSC Civil Services Examination",
//         authority: "UPSC",
//         eligibility: "After Graduation",
//         usedFor: "IAS, IPS, IFS, IRS",
//         outcomes: "Top civil services careers",
//         website: "https://upsc.gov.in",
//       },
//       {
//         title: "WBCS / State PSC Exams",
//         authority: "State PSC",
//         eligibility: "After Graduation",
//         usedFor: "State administrative services",
//         outcomes: "SDM, DSP, BDO, Admin roles",
//         website: "https://psc.wb.gov.in",
//         websiteLabel: "WBPSC",
//       },
//       {
//         title: "SSC / Banking / Railways Exams",
//         authority: "SSC / IBPS / RRB",
//         eligibility: "After 12 / Graduation (post-specific)",
//         usedFor: "Central & PSU jobs",
//         outcomes: "Clerk, Officer, Govt service roles",
//         website: "https://ssc.gov.in/",
//         websiteLabel: "SSC (example)",
//       },
//     ],
//   },

//   {
//     key: "academic",
//     title: "Teaching, Research & Higher Studies Exams",
//     description:
//       "For commerce students planning academics, research or college teaching careers.",
//     items: [
//       {
//         title: "UGC NET (Commerce / Management)",
//         authority: "NTA",
//         eligibility: "After Master’s Degree",
//         usedFor: "Assistant Professor & Ph.D eligibility",
//         outcomes: "College teaching, research careers",
//         website: "https://ugcnet.nta.nic.in",
//       },
//       {
//         title: "SET / SLET",
//         authority: "State SET Bodies",
//         eligibility: "After Master’s Degree",
//         usedFor: "State-level teaching eligibility",
//         outcomes: "Assistant Professor (state universities)",
//         website: "",
//         websiteLabel: "State SET portals",
//       },
//     ],
//   },
// ];

function ExternalLink({ href, label }) {
  if (!href) return <span className="text-muted">{label}</span>;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
    >
      <span>{label || "Official Website"}</span>
      <ArrowUpRight size={14} />
    </a>
  );
}

function ExamCard({ exam }) {
  return (
    <div className="iitCard w-100 d-flex flex-column">
      <div className="mb-3">
        <h3 className="h6 fw-semibold mb-1 text-dark">{exam.title}</h3>
        <p className="small text-muted mb-0">{exam.authority}</p>
      </div>

      <div className="iitDivider my-2" />

      {exam.eligibility && (
        <div className="small text-muted mb-2">
          <span className="fw-semibold">Eligible After:</span>{" "}
          {exam.eligibility}
        </div>
      )}

      <div className="small text-muted mb-2">
        <span className="fw-semibold">Used for:</span> {exam.usedFor}
      </div>

      <div className="small text-muted mb-3">
        <span className="fw-semibold">Career outcomes:</span> {exam.outcomes}
      </div>

      <div className="mt-auto d-flex justify-content-between align-items-center flex-wrap">
        <ExternalLink
          href={exam.website}
        />
      </div>
    </div>
  );
}

export default function CommerceRelatedExamsTab({related_exams}) {

const CATEGORIES = related_exams;
  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="mb-4 border-bottom pb-4">
          <h2 className="sectionHeading mb-1">
            Related Exams (After Class 12 – Commerce)
          </h2>
          <p className="sectionSub mb-0">
            Entrance, professional and competitive exams relevant for Commerce
            students, organised by career path.
          </p>
        </div>

        <div className="d-flex flex-column gap-5">
          {CATEGORIES.map((cat) => (
            <div key={cat.key} className="border-bottom pb-5">
              <h3 className="h5 mb-1">{cat.title}</h3>
              <p className="text-muted mb-4">{cat.description}</p>

              <div className="row g-3 g-md-4">
                {cat.items.map((exam) => (
                  <div
                    key={exam.title}
                    className="col-12 col-md-6 col-lg-4 d-flex"
                  >
                    <ExamCard exam={exam} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
