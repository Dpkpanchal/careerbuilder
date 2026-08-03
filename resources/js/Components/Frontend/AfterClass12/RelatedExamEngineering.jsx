"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Related Exams – After Class 12 (Science – Engineering)
 * - Same IIT-style card design you’re using (iitCard, iitDivider, iitWebsiteLink)
 * - Category heading + description (no accordion, no search)
 * - Eligibility mentioned clearly (because not all are “after 12 only”)
 */

// const CATEGORIES = [
//   {
//     key: "engg-ug-national",
//     title: "National Engineering Entrance Exams (After Class 12)",
//     description:
//       "These are the primary national-level exams for admission into B.Tech/BE programmes across top institutes and universities.",
//     items: [
//       {
//         title: "JEE Main",
//         authority: "National Testing Agency (NTA)",
//         eligibility: "After Class 12 (PCM)",
//         usedFor: "Admission to NITs, IIITs, CFTIs and as a qualifier for JEE Advanced",
//         outcomes: "B.Tech/BE admission in top govt institutes",
//         website: "https://jeemain.nta.nic.in/",
//       },
//       {
//         title: "JEE Advanced",
//         authority: "IITs (Zonal IIT as organizing institute)",
//         eligibility: "After qualifying JEE Main (as per eligibility rules)",
//         usedFor: "Admission to IITs (B.Tech and integrated programmes)",
//         outcomes: "IIT admission and top engineering career pathways",
//         website: "https://jeeadv.ac.in/",
//       },
//     ],
//   },

//   {
//     key: "engg-ug-state",
//     title: "State Engineering Entrance Exams",
//     description:
//       "State-level exams for admission into engineering colleges within the state (including government and private colleges).",
//     items: [
//       {
//         title: "WBJEE",
//         authority: "West Bengal Joint Entrance Examinations Board",
//         eligibility: "After Class 12 (PCM)",
//         usedFor: "B.Tech/BE admission in West Bengal engineering colleges",
//         outcomes: "Engineering admission in WB colleges/universities",
//         website: "https://wbjeeb.nic.in/",
//       },
//       {
//         title: "Other State JEE Exams",
//         authority: "Respective State Entrance Boards",
//         eligibility: "After Class 12 (PCM)",
//         usedFor: "B.Tech/BE admissions within respective states",
//         outcomes: "State engineering college admissions",
//         website: "",
//         websiteLabel: "State board portals",
//       },
//     ],
//   },

//   {
//     key: "engg-ug-private",
//     title: "Private / Institute Engineering Entrance Exams",
//     description:
//       "Many reputed private universities conduct their own entrance tests for B.Tech/BE admissions.",
//     items: [
//       {
//         title: "BITSAT",
//         authority: "BITS Pilani",
//         eligibility: "After Class 12 (PCM)",
//         usedFor: "Admission to BITS Pilani/Goa/Hyderabad campuses",
//         outcomes: "High-quality private engineering education & placements",
//         website: "https://www.bitsadmission.com/",
//       },
//       {
//         title: "VITEEE",
//         authority: "VIT",
//         eligibility: "After Class 12 (PCM/PCB as per course rules)",
//         usedFor: "Admission to VIT B.Tech programmes",
//         outcomes: "Engineering admission in VIT campuses",
//         website: "https://viteee.vit.ac.in/",
//       },
//       {
//         title: "SRMJEEE",
//         authority: "SRM Institute of Science and Technology",
//         eligibility: "After Class 12 (PCM)",
//         usedFor: "B.Tech admission in SRM campuses",
//         outcomes: "Engineering admission in SRM",
//         website: "https://www.srmist.edu.in/admission-india/",
//       },
//       {
//         title: "COMEDK UGET",
//         authority: "COMEDK",
//         eligibility: "After Class 12 (PCM)",
//         usedFor: "B.E/B.Tech admission in participating Karnataka colleges",
//         outcomes: "Engineering admission via COMEDK colleges",
//         website: "https://www.comedk.org/",
//       },
//       {
//         title: "MET (Manipal Entrance Test)",
//         authority: "MAHE (Manipal Academy of Higher Education)",
//         eligibility: "After Class 12 (PCM)",
//         usedFor: "B.Tech admission in Manipal campuses",
//         outcomes: "Engineering admission in Manipal",
//         website: "https://www.manipal.edu/",
//       },
//     ],
//   },

//   {
//     key: "engg-lateral",
//     title: "Lateral Entry (Diploma/B.Sc to Engineering)",
//     description:
//       "If a student completes a Diploma or eligible B.Sc route, these exams help enter directly into 2nd year engineering (where applicable).",
//     items: [
//       {
//         title: "JEELET (West Bengal – Lateral Entry)",
//         authority: "WBJEEB",
//         eligibility: "After Diploma / eligible B.Sc (as per rules)",
//         usedFor: "2nd year (lateral) admission into engineering programmes in WB",
//         outcomes: "Direct entry into 2nd year B.Tech/BE (WB)",
//         website: "https://wbjeeb.nic.in/",
//         websiteLabel: "WBJEEB (JEELET)",
//       },
//       {
//         title: "State Lateral Entry Exams",
//         authority: "Respective State Boards",
//         eligibility: "After Diploma / eligible B.Sc (state-wise rules)",
//         usedFor: "Lateral entry engineering admission",
//         outcomes: "2nd year entry (where applicable)",
//         website: "",
//         websiteLabel: "State portals",
//       },
//     ],
//   },

//   {
//     key: "engg-pg",
//     title: "Postgraduate Engineering Exams (Plan After B.Tech)",
//     description:
//       "These exams are taken after engineering graduation for M.Tech admission, PSU jobs and higher technical roles.",
//     items: [
//       {
//         title: "GATE",
//         authority: "IITs / IISc (Organizing institute varies)",
//         eligibility: "After B.Tech/BE (or final year)",
//         usedFor: "M.Tech admission + PSU recruitment + research opportunities",
//         outcomes: "M.Tech, PSU jobs, research/Ph.D pathways",
//         website: "https://gate2025.iitr.ac.in/", // yearly domain changes; keep as example
//         websiteLabel: "GATE (official – year-wise)",
//       },
//       {
//         title: "ISRO / DRDO / BARC / PSU Recruitment Exams",
//         authority: "Respective organizations",
//         eligibility: "After B.Tech/BE (criteria varies)",
//         usedFor: "Technical officer/scientist/engineer roles",
//         outcomes: "Govt/PSU engineering careers",
//         website: "",
//         websiteLabel: "Organization portals",
//       },
//     ],
//   },

//   {
//     key: "engg-govt-career",
//     title: "Engineering Government Service Exams (After Graduation)",
//     description:
//       "For engineering graduates targeting government engineering services and technical administrative roles.",
//     items: [
//       {
//         title: "UPSC ESE (Engineering Services Examination)",
//         authority: "UPSC",
//         eligibility: "After Engineering Graduation",
//         usedFor: "Central government engineering services (Group A)",
//         outcomes: "IES officer roles in central departments",
//         website: "https://upsc.gov.in/",
//         websiteLabel: "UPSC",
//       },
//       {
//         title: "SSC JE (Junior Engineer)",
//         authority: "SSC",
//         eligibility: "Diploma/Engineering (post-wise)",
//         usedFor: "Junior Engineer roles (civil/electrical/mechanical etc.)",
//         outcomes: "Technical govt job roles",
//         website: "https://ssc.gov.in/",
//         websiteLabel: "SSC",
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

      {exam.eligibility ? (
        <div className="small text-muted mb-2">
          <span className="fw-semibold">Eligible After:</span> {exam.eligibility}
        </div>
      ) : null}

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

export default function EngineeringRelatedExamsTab({related_exams}) {

  const CATEGORIES = related_exams;
  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="mb-4 border-bottom pb-4">
          <h2 className="sectionHeading mb-1">
            Related Exams (After Class 12 – Engineering)
          </h2>
          <p className="sectionSub mb-0">
            Key entrance and competitive exams for engineering pathways — organised by admission type and career stage.
          </p>
        </div>

        <div className="d-flex flex-column gap-5">
          {CATEGORIES.map((cat) => (
            <div key={cat.key} className="border-bottom pb-5">
              <h3 className="h5 mb-1">{cat.title}</h3>
              <p className="text-muted mb-4">{cat.description}</p>

              <div className="row g-3 g-md-4">
                {cat.items.map((exam) => (
                  <div key={exam.title} className="col-12 col-md-6 col-lg-4 d-flex">
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
