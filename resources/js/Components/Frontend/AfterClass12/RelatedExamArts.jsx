"use client";

import React, { useMemo, useState } from "react";
import {
  Scale,
  GraduationCap,
  Building2,
  School,
  Landmark,
  Microscope,
  Link as LinkIcon,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/**
 * Arts Related Exams Tab
 * - No accordion
 * - No search
 * - Category heading + description
 * - Exam cards with official links
 */

const CATEGORIES = [
  {
    key: "law",
    title: "Law & Legal Education Entrance Exams",
    icon: Scale,
    description:
      "For students who want to pursue Law, Judiciary, Legal Practice or Corporate Law after Class 12.",
    items: [
      {
        title: "CLAT – Common Law Admission Test",
        eligibility: "After Class 12 (Arts)",
        usedFor: "BA LLB (5-Year Integrated Law) at NLUs",
        outcomes: "Lawyer, Judicial Services, Legal Advisor, Corporate Counsel",
        authority: "Consortium of NLUs",
        website: "https://consortiumofnlus.ac.in",
      },
      {
        title: "AILET – All India Law Entrance Test",
        eligibility: "After Class 12",
        usedFor: "BA LLB at NLU Delhi",
        outcomes: "Judiciary, Litigation, Policy & Legal Research",
        authority: "NLU Delhi",
        website: "https://nludelhi.ac.in",
      },
      {
        title: "State Law Entrance Exams",
        eligibility: "After Class 12",
        usedFor: "BA LLB / LLB at Govt & Private colleges",
        outcomes: "Advocacy, Legal Services, Judiciary",
        authority: "State Universities / Exam Bodies",
        website: "",
        websiteLabel: "State / University portals",
      },
    ],
  },

  {
    key: "ug",
    title: "General University & Humanities Entrance Exams",
    icon: GraduationCap,
    description:
      "For B.A, Social Sciences, Journalism, Humanities and Liberal Arts programmes.",
    items: [
      {
        title: "CUET-UG – Common University Entrance Test",
        eligibility: "After Class 12 (Arts)",
        usedFor: "B.A / BSW / Journalism / Humanities courses",
        outcomes: "University admission, academics, govt exam readiness",
        authority: "NTA",
        website: "https://cuet.nta.nic.in/",
      },
      {
        title: "University-Specific Entrance Tests",
        eligibility: "After Class 12",
        usedFor: "B.A (Hons) / Humanities programmes",
        outcomes: "Admission to reputed universities",
        authority: "Respective Universities",
        website: "",
        websiteLabel: "University websites",
      },
    ],
  },

  {
    key: "management",
    title: "Management & Business Exams",
    icon: Building2,
    description:
      "Arts students can enter management via BBA and integrated programmes.",
    items: [
      {
        title: "BBA Entrance Exams",
        eligibility: "After Class 12 (Arts)",
        usedFor: "BBA programmes",
        outcomes: "Management foundation, MBA pathway",
        authority: "Universities / Institutes",
        website: "",
        websiteLabel: "Institute portals",
      },
      {
        title: "IPMAT (Selected Institutes)",
        eligibility: "After Class 12 (Institute criteria varies)",
        usedFor: "Integrated BBA + MBA",
        outcomes: "Early management career",
        authority: "IIMs",
        website: "https://www.iimidr.ac.in",
        websiteLabel: "IIM Indore (example)",
      },
    ],
  },

  {
    key: "education",
    title: "Teaching & Education Entrance Exams",
    icon: School,
    description:
      "For students planning a teaching career through B.Ed and M.Ed pathways.",
    items: [
      {
        title: "B.Ed Entrance Exams",
        eligibility: "After Graduation (B.A)",
        usedFor: "Bachelor of Education",
        outcomes: "Secondary school teacher",
        authority: "State / Universities",
        website: "",
        websiteLabel: "State / University portals",
      },
    ],
  },

  {
    key: "govt",
    title: "Government Competitive Exams",
    icon: Landmark,
    description:
      "Arts subjects strongly align with civil services and government exams.",
    items: [
      {
        title: "UPSC Civil Services Examination",
        eligibility: "After Graduation",
        usedFor: "IAS, IPS, IFS, IRS",
        outcomes: "Top civil services careers",
        authority: "UPSC",
        website: "https://upsc.gov.in",
      },
      {
        title: "WBCS / State PSC Exams",
        eligibility: "After Graduation",
        usedFor: "State Administrative Services",
        outcomes: "SDM, DSP, BDO, Admin roles",
        authority: "State PSC",
        website: "https://psc.wb.gov.in",
        websiteLabel: "WBPSC",
      },
      {
        title: "SSC / Banking / Railways Exams",
        eligibility: "After 12 / Graduation (post-wise)",
        usedFor: "Central & PSU jobs",
        outcomes: "Clerk, Officer, Govt service roles",
        authority: "SSC / IBPS / RRB",
        website: "https://ssc.gov.in/",
        websiteLabel: "SSC (example)",
      },
    ],
  },

  {
    key: "research",
    title: "Teaching, Research & Ph.D Eligibility Exams",
    icon: Microscope,
    description:
      "For students aiming at college teaching, research and Ph.D careers.",
    items: [
      {
        title: "UGC NET",
        eligibility: "After Master’s Degree",
        usedFor: "Assistant Professor & Ph.D eligibility",
        outcomes: "College professor, researcher",
        authority: "NTA",
        website: "https://ugcnet.nta.nic.in",
      },
      {
        title: "SET / SLET",
        eligibility: "After Master’s Degree",
        usedFor: "State-level teaching eligibility",
        outcomes: "Assistant Professor (state universities)",
        authority: "State SET Bodies",
        website: "",
        websiteLabel: "State SET portals",
      },
    ],
  },
];

function ExternalLink({ href, label }) {
  if (!href) return <span className="text-muted">{label}</span>;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="d-inline-flex align-items-center gap-1">
      <LinkIcon size={14} />
      {label || "Official Website"}
      <ArrowUpRight size={14} />
    </a>
  );
}

function ExamCard({ exam }) {
  return (
    <div className="iitCard w-100 d-flex flex-column">

      {/* Exam name + authority */}
      <div className="mb-3">
        <h3 className="h6 fw-semibold mb-1 text-dark">
          {exam.title}
        </h3>
        <p className="small text-muted mb-0 d-flex align-items-center gap-1">
          <Scale size={14} className="text-primary" />
          <span>{exam.authority}</span>
        </p>
      </div>

      <div className="iitDivider my-2" />
        {exam.eligibility && (
        <div className="small text-muted mb-2">
            <span className="fw-semibold">Eligible After:</span> {exam.eligibility}
        </div>
        )}

      {/* Exam purpose */}
      <div className="small text-muted mb-3">
        <span className="fw-semibold">Used for:</span>{" "}
        {exam.usedFor}
      </div>

      {/* Career outcome (optional but useful) */}
      <div className="small text-muted mb-3">
        <span className="fw-semibold">Career outcomes:</span>{" "}
        {exam.outcomes}
      </div>

      {/* Official website */}
      <div className="mt-auto d-flex justify-content-between align-items-center small flex-wrap">
       
        <ExternalLink
          href={exam.website}
        />
      </div>
    </div>
  );
}


export default function ArtsRelatedExamsTab() {
  return (
    <section className="py-4 py-md-5 ">
      <div className="container">
        <div className="mb-4 border-bottom pb-4">
          <h2 className="sectionHeading mb-1">Related Exams for Arts Students</h2>
          <p className="sectionSub mb-0">
            Entrance and competitive exams relevant for Arts students, organised by career goal.
          </p>
        </div>

        <div className="d-flex flex-column gap-4">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.key} className="border-bottom pb-5">
                <div className="d-flex gap-3 mb-4">
                  
                  <div>
                    <h3 className="h5 mb-1">{cat.title}</h3>
                    <p className="text-muted mb-0">{cat.description}</p>
                  </div>
                </div>

                <div className="row g-3 g-md-4">
                  {cat.items.map((exam) => (
                    <div key={exam.title} className="col-12 col-md-6 col-lg-4 d-flex">
                      <ExamCard exam={exam} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
