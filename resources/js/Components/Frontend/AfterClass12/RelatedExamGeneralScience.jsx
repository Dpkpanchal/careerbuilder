"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Related Exams – After Class 12 (Science – General)
 * - Same design system as Arts & Commerce
 * - Eligibility clearly mentioned
 * - No unnecessary tags
 * - Category-based sections
 */

// const CATEGORIES = [
//   {
//     key: "science-ug",
//     title: "Science & University Entrance Exams (After Class 12)",
//     description:
//       "These exams allow entry into general science, pure science and interdisciplinary undergraduate programmes.",
//     items: [
//       {
//         title: "CUET-UG (Science Stream)",
//         authority: "National Testing Agency (NTA)",
//         eligibility: "After Class 12 (Science)",
//         usedFor: "B.Sc (Physics, Chemistry, Maths, Biology, Statistics, etc.)",
//         outcomes: "Pure science graduation, higher studies, govt exams",
//         website: "https://cuet.nta.nic.in/",
//       },
//       {
//         title: "University / State Entrance Tests",
//         authority: "Central & State Universities",
//         eligibility: "After Class 12",
//         usedFor: "B.Sc (Hons) / Integrated Science programmes",
//         outcomes: "Research foundation, teaching, MSc pathways",
//         website: "",
//         websiteLabel: "University portals",
//       },
//     ],
//   },

//   {
//     key: "paramedical",
//     title: "Paramedical & Allied Health Entrance Exams",
//     description:
//       "For science students interested in healthcare support, diagnostics and allied medical services.",
//     items: [
//       {
//         title: "State Paramedical Entrance Exams",
//         authority: "State Health / Education Boards",
//         eligibility: "After Class 12 (PCB)",
//         usedFor: "Paramedical & allied health courses",
//         outcomes: "Lab technician, radiology, OT, healthcare roles",
//         website: "",
//         websiteLabel: "State portals",
//       },
//       {
//         title: "Institute-Specific Paramedical Tests",
//         authority: "Medical Institutes",
//         eligibility: "After Class 12 (PCB)",
//         usedFor: "Allied health & diagnostic programmes",
//         outcomes: "Hospital & clinical support careers",
//         website: "",
//         websiteLabel: "Institute websites",
//       },
//     ],
//   },

//   {
//     key: "teaching",
//     title: "Teaching & Education Entrance Exams",
//     description:
//       "For science students planning a teaching career through education degrees.",
//     items: [
//       {
//         title: "B.Ed Entrance Exams",
//         authority: "State / Universities",
//         eligibility: "After Graduation (B.Sc)",
//         usedFor: "Bachelor of Education",
//         outcomes: "Secondary & higher secondary teaching",
//         website: "",
//         websiteLabel: "State / University portals",
//       },
//     ],
//   },

//   {
//     key: "govt",
//     title: "Government & Competitive Exams",
//     description:
//       "Science graduates are eligible for a wide range of government and public sector examinations.",
//     items: [
//       {
//         title: "UPSC Civil Services Examination",
//         authority: "Union Public Service Commission",
//         eligibility: "After Graduation",
//         usedFor: "IAS, IPS, IFS, IRS",
//         outcomes: "Top civil services careers",
//         website: "https://upsc.gov.in",
//       },
//       {
//         title: "WBCS / State PSC Exams",
//         authority: "State Public Service Commissions",
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
//         usedFor: "Central govt & PSU jobs",
//         outcomes: "Clerk, Officer, Technical & admin roles",
//         website: "https://ssc.gov.in/",
//         websiteLabel: "SSC (example)",
//       },
//     ],
//   },

//   {
//     key: "research",
//     title: "Research, Teaching & Higher Studies Exams",
//     description:
//       "For students planning postgraduate studies, research or college-level teaching.",
//     items: [
//       {
//         title: "IIT-JAM",
//         authority: "Indian Institutes of Technology",
//         eligibility: "After B.Sc",
//         usedFor: "M.Sc admission in IITs & IISc",
//         outcomes: "Research, Ph.D, academic careers",
//         website: "https://jam.iisc.ac.in",
//       },
//       {
//         title: "UGC NET (Science Subjects)",
//         authority: "NTA",
//         eligibility: "After Master’s Degree",
//         usedFor: "Assistant Professor & Ph.D eligibility",
//         outcomes: "College teaching & research",
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
        <span className="fw-semibold">Career outcomes:</span>{" "}
        {exam.outcomes}
      </div>

      <div className="mt-auto d-flex justify-content-between align-items-center flex-wrap">
        <ExternalLink
          href={exam.website}
        />
      </div>
    </div>
  );
}

export default function ScienceGeneralRelatedExamsTab({related_exams}) {

const CATEGORIES = related_exams;

  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="mb-4 border-bottom pb-4">
          <h2 className="sectionHeading mb-1">
            Related Exams (After Class 12 – Science)
          </h2>
          <p className="sectionSub mb-0">
            Entrance, competitive and higher-study exams relevant for general
            science students, organised by career direction.
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
