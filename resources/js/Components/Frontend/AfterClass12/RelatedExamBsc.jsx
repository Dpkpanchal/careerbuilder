"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Related Exams – After B.Sc
 * Same structure as Arts / Commerce / Science / Engineering / Medical
 */

const CATEGORIES = [
  {
    key: "msc-admission",
    title: "Postgraduate Science Admission Exams",
    description:
      "Entrance examinations for admission into M.Sc and integrated postgraduate science programmes.",
    items: [
      {
        title: "IIT JAM",
        authority: "IITs / IISc",
        eligibility: "After B.Sc (or final year)",
        usedFor: "M.Sc admission in IITs, IISc, NITs & CFTIs",
        outcomes: "Research, Ph.D, academic & industry roles",
        website: "https://jam.iisc.ac.in",
      },
      {
        title: "CUET-PG (Science Subjects)",
        authority: "National Testing Agency (NTA)",
        eligibility: "After B.Sc",
        usedFor: "M.Sc admission in Central & State Universities",
        outcomes: "Postgraduate science education",
        website: "https://cuet.nta.nic.in",
      },
      {
        title: "University PG Entrance Tests",
        authority: "Central / State Universities",
        eligibility: "After B.Sc",
        usedFor: "M.Sc / Applied science PG programmes",
        outcomes: "Higher studies & specialization",
        website: "",
        websiteLabel: "University portals",
      },
    ],
  },

  {
    key: "teaching",
    title: "Teaching & Education Entrance Exams",
    description:
      "For B.Sc graduates planning careers in school or college teaching.",
    items: [
      {
        title: "B.Ed Entrance Exams",
        authority: "State Governments / Universities",
        eligibility: "After B.Sc",
        usedFor: "Bachelor of Education",
        outcomes: "Secondary & higher secondary teaching",
        website: "",
        websiteLabel: "State / University portals",
      },
      {
        title: "UGC NET",
        authority: "National Testing Agency (NTA)",
        eligibility: "After Master’s Degree",
        usedFor: "Assistant Professor & Ph.D eligibility",
        outcomes: "College teaching & research",
        website: "https://ugcnet.nta.nic.in",
      },
      {
        title: "SET / SLET",
        authority: "State SET Bodies",
        eligibility: "After Master’s Degree",
        usedFor: "State-level Assistant Professor eligibility",
        outcomes: "Teaching in state universities/colleges",
        website: "",
        websiteLabel: "State SET portals",
      },
    ],
  },

  {
    key: "research",
    title: "Research & Ph.D Entrance Exams",
    description:
      "Exams required for doctoral research and advanced scientific careers.",
    items: [
      {
        title: "CSIR UGC NET (JRF)",
        authority: "CSIR / NTA",
        eligibility: "After M.Sc",
        usedFor: "Junior Research Fellowship & Ph.D admission",
        outcomes: "Research scientist, Ph.D scholar",
        website: "https://csirnet.nta.nic.in",
      },
      {
        title: "Institute Ph.D Entrance Tests",
        authority: "Universities / Research Institutes",
        eligibility: "After M.Sc",
        usedFor: "Ph.D programmes",
        outcomes: "Academic & R&D careers",
        website: "",
        websiteLabel: "Institute portals",
      },
    ],
  },

  {
    key: "govt",
    title: "Government & Competitive Exams",
    description:
      "Science graduates are eligible for a wide range of government and public-sector exams.",
    items: [
      {
        title: "UPSC Civil Services Examination",
        authority: "UPSC",
        eligibility: "After Graduation",
        usedFor: "IAS, IPS, IFS, IRS",
        outcomes: "Administrative & civil services careers",
        website: "https://upsc.gov.in",
      },
      {
        title: "WBCS / State PSC Exams",
        authority: "State Public Service Commissions",
        eligibility: "After Graduation",
        usedFor: "State administrative services",
        outcomes: "SDM, DSP, BDO, administrative roles",
        website: "https://psc.wb.gov.in",
        websiteLabel: "WBPSC",
      },
      {
        title: "SSC / Banking / Railways Exams",
        authority: "SSC / IBPS / RRB",
        eligibility: "After Graduation (post-specific)",
        usedFor: "Central government & PSU jobs",
        outcomes: "Clerk, officer, technical posts",
        website: "https://ssc.gov.in",
        websiteLabel: "SSC (example)",
      },
    ],
  },

  {
    key: "applied",
    title: "Applied Science & Professional Exams",
    description:
      "For B.Sc graduates moving into applied, analytical and industry-oriented roles.",
    items: [
      {
        title: "GATE (for science streams)",
        authority: "IITs / IISc",
        eligibility: "After B.Sc / M.Sc (as per paper rules)",
        usedFor: "M.Tech, PSU jobs, research roles",
        outcomes: "Technical, research & PSU careers",
        website: "https://gate2025.iitr.ac.in",
        websiteLabel: "GATE (official – year-wise)",
      },
      {
        title: "Statistical / Analytical Service Exams",
        authority: "Govt Departments / Institutes",
        eligibility: "After B.Sc / M.Sc (Statistics / Maths)",
        usedFor: "Statistical & analytical roles",
        outcomes: "Data, analytics, govt research roles",
        website: "",
        websiteLabel: "Respective portals",
      },
    ],
  },
];

function ExternalLink({ href, label }) {
  if (!href) return <span className="text-muted">{label}</span>;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
    >
      <span>{label || "Visit"}</span>
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

export default function AfterBScRelatedExamsTab() {
  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="mb-4 border-bottom pb-4">
          <h2 className="sectionHeading mb-1">
            Related Exams (After Graduation / Bachelor Degree – B.Sc)
          </h2>
          <p className="sectionSub mb-0">
            Entrance, competitive and research exams relevant after completing
            a Bachelor of Science degree.
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
