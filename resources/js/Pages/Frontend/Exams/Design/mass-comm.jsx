"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import ExamTabsBar from "../ExamTabsBar";
import { Layers3, Network, ExternalLink, Info, AlertTriangle } from "lucide-react";

// -------------------------------------------------------------
// Tabs (Design • Media • Humanities bucket)
// -------------------------------------------------------------
const EXAM_TABS = [
  { id: "design", label: "Fashion & Design", href: '/exams/design/design' },
  { id: "mass-comm", label: "Media & Mass Comm", href: '/exams/design/mass-comm' },
  { id: "humanities", label: "Humanities", href: '/exams/design/humanities' },
  { id: "mathematics", label: "Mathematics", href: '/exams/design/mathematics' },
];

// -------------------------------------------------------------
// Mass Comm exams list (based on your provided dataset)
// Rule: use official + working links. If unclear, show "Verify".
// -------------------------------------------------------------
const MASS_COMM_EXAMS = [
  {
    sl: 1,
    exam: "IIMC Entrance / Admissions",
    fullForm: "Indian Institute of Mass Communication – Admissions",
    purpose: "PG / MA media & communication programmes (as notified by IIMC)",
    apply: "Online",
    activity: "As per IIMC admissions notices",
    links: [
      { label: "IIMC Admissions Portal (Official)", href: "https://iimc.admissions.nic.in/" },
      { label: "IIMC Admissions Notices (Official)", href: "https://iimc.gov.in/admission-2025-2026" },
    ],
    tag: "National • PG",
  },

  {
    sl: 2,
    exam: "DU DSJ Admission (CUET-based)",
    fullForm: "Delhi School of Journalism – University of Delhi",
    purpose: "UG/PG admissions as per University of Delhi policy (currently CUET-based for many programmes)",
    apply: "Online",
    activity: "As per DU + CUET schedule",
    links: [
      { label: "Delhi School of Journalism (Official)", href: "https://www.dsj.du.ac.in/" },
      { label: "DU on CUET (NTA Official Listing)", href: "https://cuet.nta.nic.in/university-of-delhi/" },
    ],
    tag: "University",
    note:
      "DU admissions rules (CUET subjects/CSAS) can change by year—always follow the latest DU/CSAS and CUET notifications.",
  },

  

  {
    sl: 3,
    exam: "GGSIPU CET (Mass Comm / Journalism codes)",
    fullForm: "Guru Gobind Singh Indraprastha University – CET / Admissions",
    purpose: "UG/PG admissions in Journalism & Mass Communication and allied programmes (as notified by GGSIPU)",
    apply: "Online",
    activity: "As per IPU admission schedule",
    links: [
      { label: "IPU Admissions Portal (Official)", href: "https://ipu.admissions.nic.in/" },
      { label: "GGSIPU Admission Notices (Official)", href: "https://www.ipu.ac.in/admission2025main.php" },
      { label: "GGSIPU Main Site (Official)", href: "https://www.ipu.ac.in/" },
    ],
    tag: "University",
  },

  {
    sl: 4,
    exam: "ACJ Entrance (Admissions)",
    fullForm: "Asian College of Journalism – Entrance & Admissions",
    purpose: "PG diploma programmes in journalism (as notified by ACJ)",
    apply: "Online",
    activity: "As per ACJ admissions calendar",
    links: [
      { label: "ACJ Eligibility & Procedure (Official)", href: "https://asianmedia.org.in/acj/home/eligibility_procedure" },
      { label: "ACJ Main Site (Official)", href: "https://www.asianmedia.org.in/" },
    ],
    tag: "Institute • PG",
  },

  {
    sl: 5,
    exam: "XIC OET / XOET",
    fullForm: "Xavier Institute of Communications – Online Entrance Test",
    purpose: "PG diploma courses in journalism/media, PR, advertising etc. (as notified by XIC)",
    apply: "Online",
    activity: "As per XIC admissions schedule",
    links: [
      { label: "XIC Admissions (Official)", href: "https://www.xaviercomm.org/admissions/admissions.htm" },
      { label: "XIC Main Site (Official)", href: "https://www.xaviercomm.org/" },
    ],
    tag: "Institute • PG",
  },

  {
    sl: 6,
    exam: "SUAT",
    fullForm: "Sharda University Admission Test",
    purpose: "Admissions to journalism & mass comm and other programmes at Sharda (as notified)",
    apply: "Online",
    activity: "As per Sharda admissions schedule",
    links: [
      { label: "SUAT (Official)", href: "https://admissions.sharda.ac.in/SUAT/" },
      { label: "SUAT Exam Portal (Official)", href: "https://suat.sharda.ac.in/" },
    ],
    tag: "University",
  },

  {
    sl: 7,
    exam: "KIITEE",
    fullForm: "KIIT Entrance Examination",
    purpose: "Admissions to various KIIT programmes (includes media-related options as offered by KIIT)",
    apply: "Online",
    activity: "As per KIITEE schedule",
    links: [
      { label: "KIITEE (Official)", href: "https://kiitee.kiit.ac.in/" },
      { label: "KIIT Admissions (Official)", href: "https://kiit.ac.in/admission/" },
    ],
    tag: "University",
  },
];

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
          <strong>APPLY:</strong> {item.apply}
        </p>
        <p className="mb-0">
          <strong>ACTIVITY:</strong> {item.activity}
        </p>
      </div>

      {!!item.note && (
        <div className="sectionCard bg-light border small mt-2">
          <div className="d-flex align-items-start gap-2">
            {item.tag === "Verify" ? (
              <AlertTriangle size={16} className="text-warning mt-1 flex-shrink-0" />
            ) : (
              <Info size={16} className="text-primary mt-1 flex-shrink-0" />
            )}
            <div>{item.note}</div>
          </div>
        </div>
      )}

      <div className="mt-auto d-flex flex-column gap-2 pt-3">
       {item.links?.map((l) => (
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
export default function MassCommExamsPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Media & Mass Communication Exams"
        breadcrumb="Design • Media • Humanities → Media & Mass Comm"
      />

      <ExamTabsBar tabs={EXAM_TABS} activeId="mass-comm" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">Mass Communication Entrance Exams</h2>
              <p className="sectionSub mb-0">
                Admissions in Journalism & Mass Communication may happen through national institutes, university
                admissions (often CUET-based), or institute-run entrance tests for PG diplomas.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <dl className="row small mb-0">
                  <dt className="col-6">Exams/routes listed</dt>
                  <dd className="col-6 mb-2">{MASS_COMM_EXAMS.length}</dd>

                  <dt className="col-6">Key national institute</dt>
                  <dd className="col-6 mb-2">IIMC</dd>

                  <dt className="col-6">Top PG diploma routes</dt>
                  <dd className="col-6 mb-2">ACJ, XIC</dd>

                  <dt className="col-6">Rule</dt>
                  <dd className="col-6 mb-0">Apply only via official portals</dd>
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
            <h2 className="sectionHeading mb-2">How Mass Comm Exams Connect to Admissions</h2>
            <p className="sectionSub mb-0">
              Typical flow: online application → entrance/shortlisting → interview/portfolio (if any) → merit list →
              admission & document verification.
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
                    <strong>National/Institute tests</strong> → test + interview (if applicable)
                  </li>
                  <li>
                    <strong>University admissions</strong> → CUET / CET / counselling (as notified)
                  </li>
                  <li>
                    <strong>Document verification</strong> → final admission confirmation
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>For West Bengal minority students:</strong> keep at least 2 routes open (example: IIMC + one
                university + one institute diploma). Avoid agents; always apply through the official website only.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">Mass Comm Exams – Official Links</h2>

          <div className="row g-3 g-md-4">
            {MASS_COMM_EXAMS.map((item) => (
              <div key={item.exam} className="col-12 col-md-6 d-flex">
                <ExamCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
