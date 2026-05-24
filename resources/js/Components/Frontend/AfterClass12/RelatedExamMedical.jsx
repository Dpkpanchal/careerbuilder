"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Related Exams – After Class 12 (Medical & Paramedical)
 * - Same IIT-style card design (iitCard, iitDivider, iitWebsiteLink)
 * - Category-based sections
 * - Clear eligibility (after 12 / after graduation / after PG)
 * - Govt & Career Book aligned
 */

const CATEGORIES = [
  {
    key: "medical-ug",
    title: "Medical Entrance Exams (After Class 12)",
    description:
      "Primary entrance examinations for admission into MBBS, BDS and other undergraduate medical courses.",
    items: [
      {
        title: "NEET-UG (National Eligibility cum Entrance Test)",
        authority: "National Testing Agency (NTA)",
        eligibility: "After Class 12 (PCB)",
        usedFor: "MBBS, BDS, BAMS, BHMS, BUMS and other medical courses",
        outcomes: "Doctor, medical practitioner, healthcare professional",
        website: "https://neet.nta.nic.in/",
      },
      {
        title: "AIIMS / JIPMER Admission (via NEET-UG)",
        authority: "AIIMS / JIPMER",
        eligibility: "After Class 12 (PCB) through NEET-UG",
        usedFor: "MBBS admission in AIIMS & JIPMER institutes",
        outcomes: "Medical education at premier institutions",
        website: "https://neet.nta.nic.in/",
        websiteLabel: "NEET (Official)",
      },
    ],
  },

  {
    key: "ayush",
    title: "AYUSH & Alternative Medicine Entrance Exams",
    description:
      "For students interested in traditional Indian systems of medicine such as Ayurveda, Homeopathy and Unani.",
    items: [
      {
        title: "NEET-UG (AYUSH Courses)",
        authority: "NTA / AYUSH Authorities",
        eligibility: "After Class 12 (PCB)",
        usedFor: "BAMS, BHMS, BUMS, BSMS admissions",
        outcomes: "Ayurvedic doctor, homeopathic physician",
        website: "https://neet.nta.nic.in/",
      },
      {
        title: "State AYUSH Counselling",
        authority: "State AYUSH Departments",
        eligibility: "After Class 12 (PCB)",
        usedFor: "AYUSH course admissions in state colleges",
        outcomes: "AYUSH medical practice",
        website: "",
        websiteLabel: "State AYUSH portals",
      },
    ],
  },

  {
    key: "paramedical",
    title: "Paramedical & Allied Health Entrance Exams",
    description:
      "Entrance routes for paramedical and allied health science courses supporting the healthcare system.",
    items: [
      {
        title: "State Paramedical Entrance Exams",
        authority: "State Medical / Health Education Boards",
        eligibility: "After Class 12 (PCB)",
        usedFor: "Paramedical & allied health courses",
        outcomes: "Lab technician, radiology, OT, healthcare support roles",
        website: "",
        websiteLabel: "State portals",
      },
      {
        title: "Institute-Level Paramedical Tests",
        authority: "Medical Colleges / Institutes",
        eligibility: "After Class 12 (PCB)",
        usedFor: "Allied health science programmes",
        outcomes: "Hospital & diagnostic centre careers",
        website: "",
        websiteLabel: "Institute websites",
      },
    ],
  },

  {
    key: "nursing",
    title: "Nursing Entrance Exams",
    description:
      "For students aiming for professional nursing education and hospital-based careers.",
    items: [
      {
        title: "B.Sc Nursing Entrance Exams",
        authority: "State Nursing Councils / Universities",
        eligibility: "After Class 12 (PCB)",
        usedFor: "B.Sc Nursing admission",
        outcomes: "Registered nurse, hospital & clinical roles",
        website: "",
        websiteLabel: "State nursing portals",
      },
      {
        title: "GNM Entrance Exams",
        authority: "State Nursing Boards",
        eligibility: "After Class 12 (PCB)",
        usedFor: "General Nursing & Midwifery (GNM)",
        outcomes: "Staff nurse, community healthcare roles",
        website: "",
        websiteLabel: "State portals",
      },
    ],
  },

  {
    key: "pg-medical",
    title: "Postgraduate Medical Entrance Exams (Plan After MBBS)",
    description:
      "For medical graduates planning specialisation, higher studies and advanced clinical careers.",
    items: [
      {
        title: "NEET-PG",
        authority: "National Board of Examinations (NBE)",
        eligibility: "After MBBS",
        usedFor: "MD / MS / PG Diploma admissions",
        outcomes: "Medical specialisation & consultant roles",
        website: "https://nbe.edu.in/",
        websiteLabel: "NBE",
      },
      {
        title: "INI-CET",
        authority: "AIIMS / NIMHANS / JIPMER / PGI",
        eligibility: "After MBBS",
        usedFor: "PG medical courses in INI institutes",
        outcomes: "Advanced medical training",
        website: "https://www.aiimsexams.ac.in/",
        websiteLabel: "AIIMS Exams",
      },
    ],
  },

  {
    key: "govt-medical",
    title: "Government & Public Health Exams",
    description:
      "Examinations and recruitment routes for doctors and health professionals in government services.",
    items: [
      {
        title: "UPSC CMS (Combined Medical Services)",
        authority: "UPSC",
        eligibility: "After MBBS",
        usedFor: "Central government medical officer posts",
        outcomes: "Govt doctor, health services roles",
        website: "https://upsc.gov.in/",
        websiteLabel: "UPSC",
      },
      {
        title: "State Medical Officer Recruitment",
        authority: "State Health Departments / PSC",
        eligibility: "After MBBS",
        usedFor: "State government doctor posts",
        outcomes: "Public healthcare service",
        website: "",
        websiteLabel: "State PSC portals",
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

export default function MedicalParamedicalRelatedExamsTab() {
  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="mb-4 border-bottom pb-4">
          <h2 className="sectionHeading mb-1">
            Related Exams (After Class 12 – Medical & Paramedical)
          </h2>
          <p className="sectionSub mb-0">
            Entrance and recruitment exams for medical, nursing and paramedical
            career pathways, organised by study stage.
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
