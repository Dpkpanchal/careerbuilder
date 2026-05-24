"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import ExamTabsBar from "../ExamTabsBar";
import { Layers3, Network, ExternalLink, Info } from "lucide-react";

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
// Humanities & Social Science entrance exams/routes
// Rule: official + working links only.
// -------------------------------------------------------------
const HUMANITIES_EXAMS = [
  {
    sl: 1,
    exam: "BHU Admissions (UG / Humanities routes)",
    fullForm: "Banaras Hindu University – Admissions Portal",
    purpose: "UG admissions across disciplines (Humanities/Social Sciences as notified)",
    apply: "Online",
    activity: "As per BHU admission notices / CUET cycle (as applicable)",
    links: [
      { label: "BHU Admission Portal (Official)", href: "https://admission.bhu.ac.in/en" },
      { label: "BHU CUET UG Portal (Official)", href: "https://bhucuet.samarth.edu.in/" },
      { label: "BHU Admissions & Counselling (Official)", href: "https://www.bhu.ac.in/Site/AdmissionCounselling/1_2_16_Main-Site" },
    ],
    tag: "University",
  },

  {
    sl: 2,
    exam: "HSEE (IIT Madras)",
    fullForm: "Humanities and Social Sciences Entrance Examination",
    purpose: "Admissions route for integrated M.A. programme(s) at IIT Madras (as notified)",
    apply: "Online",
    activity: "As per HSEE notification (varies by year)",
    links: [{ label: "HSEE Portal (Official)", href: "https://hsee.iitm.ac.in/" }],
    tag: "National / Institute",
    note:
      "HSEE schedule can vary by year. Always verify the current notification on the official portal before planning.",
  },

  {
    sl: 3,
    exam: "TISS-BAT",
    fullForm: "Tata Institute of Social Sciences – Bachelors Admission Test (as notified)",
    purpose: "Admissions to TISS UG programmes (route depends on the current policy)",
    apply: "Online",
    activity: "As per TISS admissions notices",
    links: [
      { label: "TISS Admissions (Official)", href: "https://admissions.tiss.ac.in/" },
      { label: "TISS BAT Instructions (Official)", href: "https://admissions.tiss.ac.in/view/5/admissions/ba-ma-admissions/instruction-for-all-candidates-appearing-for-bat/" },
    ],
    tag: "Institute",
  },

  {
    sl: 4,
    exam: "JNU Admissions (JNUEE Portal)",
    fullForm: "Jawaharlal Nehru University – Admissions Portal",
    purpose: "UG/PG admissions as notified by JNU (mode/criteria can change by year)",
    apply: "Online",
    activity: "As per JNU admissions notifications",
    links: [
      { label: "JNUEE/JNU Admissions Portal (Official)", href: "https://jnuee.jnu.ac.in/" },
      { label: "JNU Admissions Notices (Official)", href: "https://www.jnu.ac.in/admissions" },
    ],
    tag: "University",
  },

  {
    sl: 5,
    exam: "EFLU Entrance / Admissions",
    fullForm: "The English and Foreign Languages University – Admissions",
    purpose: "Admissions for language & humanities programmes (BA/MA/others as notified)",
    apply: "Online",
    activity: "As per EFLU admissions notices",
    links: [
      { label: "EFLU Main Site (Official)", href: "https://www.efluniversity.ac.in/" },
      { label: "EFLU Admissions Portal (Official)", href: "https://efluadm.samarth.edu.in/" },
      { label: "EFLU CUET Portal (Official)", href: "https://eflucuet.samarth.edu.in/pg/index.php" },
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
            <Info size={16} className="text-primary mt-1 flex-shrink-0" />
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
            <span className="">{l.label}</span>
            <ExternalLink size={14} />
          </a>
        ))}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
export default function HumanitiesExamsPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Humanities & Social Science Exams"
        breadcrumb="Design • Media • Humanities → Humanities & Social Science"
      />

      <ExamTabsBar tabs={EXAM_TABS} activeId="humanities" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">Humanities & Social Science Entrance Routes</h2>
              <p className="sectionSub mb-0">
                Admissions in Humanities and Social Sciences are commonly done through university admission portals
                (often CUET-based), and a few institute/university specific tests. Always apply via official portals.
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
                  <dd className="col-6 mb-2">{HUMANITIES_EXAMS.length}</dd>

                  <dt className="col-6">Institute routes</dt>
                  <dd className="col-6 mb-2">HSEE (IITM), TISS</dd>

                  <dt className="col-6">University portals</dt>
                  <dd className="col-6 mb-2">BHU, JNU, EFLU</dd>

                  <dt className="col-6">Rule</dt>
                  <dd className="col-6 mb-0">Use only official links</dd>
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
            <h2 className="sectionHeading mb-2">How These Routes Connect to Admissions</h2>
            <p className="sectionSub mb-0">
              Typical flow: apply → entrance / CUET score (as applicable) → merit list → counselling/verification →
              admission.
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
                    <strong>University portal</strong> → eligibility + CUET/criteria → merit/counselling
                  </li>
                  <li>
                    <strong>Institute test</strong> (where applicable) → test → shortlist/interview → final list
                  </li>
                  <li>
                    <strong>Verification</strong> → documents + category/domicile rules (if applicable)
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>For West Bengal minority students:</strong> keep at least 2 routes open (one university portal +
                one institute route if you are eligible). Track scholarship/fee support and keep documents ready (marksheets,
                photo ID, and category/income certificates if applicable).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">Official Portals</h2>

          <div className="row g-3 g-md-4">
            {HUMANITIES_EXAMS.map((item) => (
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
