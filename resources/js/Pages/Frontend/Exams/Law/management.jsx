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


const MANAGEMENT_EXAMS = [
  {
    sl: 1,
    exam: "CAT",
    fullForm: "Common Admission Test",
    purpose: "MBA/PGDM admissions in IIMs + many top B-schools (as per institute acceptance)",
    apply: "Online",
    activity: "Once a year (check official notification)",
    links: [{ label: "CAT Official (iimcat.ac.in)", href: "https://iimcat.ac.in/" }],
    tag: "National • PG",
  },
  {
    sl: 2,
    exam: "XAT",
    fullForm: "Xavier Aptitude Test",
    purpose: "MBA/PGDM admissions in XLRI + XAT-member/accepting institutes",
    apply: "Online",
    activity: "Once a year (check official notification)",
    links: [
      { label: "XAT Official (xatonline.in)", href: "https://xatonline.in/" },
      { label: "XLRI XAT info (official)", href: "https://www.xlri.ac.in/academic-programmes/admission-procedure/overview/XAT" },
    ],
    tag: "National • PG",
  },
  {
    sl: 3,
    exam: "MAT",
    fullForm: "Management Aptitude Test (AIMA)",
    purpose: "MBA/PGDM admissions in participating institutes (as per institute acceptance)",
    apply: "Online",
    activity: "Multiple sessions yearly (check official schedule)",
    links: [{ label: "MAT Official (AIMA)", href: "https://mat.aima.in/" }],
    tag: "National • PG",
  },
  {
    sl: 4,
    exam: "CMAT",
    fullForm: "Common Management Admission Test (NTA)",
    purpose: "MBA/PGDM admissions in AICTE-approved institutions (as per CMAT acceptance rules)",
    apply: "Online",
    activity: "Once a year (check official notification)",
    links: [{ label: "CMAT Official (NTA)", href: "https://cmat.nta.nic.in/" }],
    tag: "National • PG",
  },
  {
    sl: 5,
    exam: "IIFT (MBA Admissions)",
    fullForm: "Indian Institute of Foreign Trade – MBA Admissions",
    purpose: "MBA (IB) / MBA (BA) admissions at IIFT (as notified by IIFT)",
    apply: "Online",
    activity: "As per IIFT admission calendar",
    links: [
      { label: "IIFT Admissions (official)", href: "https://www.iift.ac.in/iift/new-admissions.php" },
      { label: "NTA – IIFT exam page (official)", href: "https://nta.ac.in/Iiftexam" },
    ],
    tag: "Institute • PG",
    note:
      "IIFT admission mode (exam / score accepted / process) can change by year—always follow the latest IIFT admission notice.",
  },
  {
    sl: 6,
    exam: "SNAP",
    fullForm: "Symbiosis National Aptitude Test",
    purpose: "MBA admissions in Symbiosis institutes (as per SNAP / SIU rules)",
    apply: "Online",
    activity: "Multiple test slots in a season (check official schedule)",
    links: [{ label: "SNAP Official (snaptest.org)", href: "https://www.snaptest.org/" }],
    tag: "National • PG",
  },
  {
    sl: 7,
    exam: "SET",
    fullForm: "Symbiosis Entrance Test (UG)",
    purpose: "UG management routes like BBA and other UG programmes (Symbiosis ecosystem)",
    apply: "Online",
    activity: "As per SET cycle",
    links: [{ label: "SET Official (set-test.org)", href: "https://www.set-test.org/" }],
    tag: "National • UG",
    note:
      "SET is primarily for UG programmes (like BBA). For Symbiosis MBA, use SNAP.",
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
            <Info size={18} className="text-primary mt-1 flex-shrink-0" />
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
            <ExternalLink size={16} />
          </a>
        ))}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
export default function ManagementExamsPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner title="MBA & Management Exams" breadcrumb="Law • Management • Finance → Management" />

      <ExamTabsBar tabs={EXAM_TABS} activeId="management" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">Management Entrance Exams (UG + PG)</h2>
              <p className="sectionSub mb-0">
                This page covers major management entrance tests used for admissions into MBA/PGDM programmes
                (CAT/XAT/MAT/CMAT/SNAP/IIFT) and the UG management route (SET).
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
                  <dd className="col-6 mb-2">{MANAGEMENT_EXAMS.length}</dd>

                  <dt className="col-6">Top PG gateways</dt>
                  <dd className="col-6 mb-2">CAT, XAT, CMAT</dd>

                  <dt className="col-6">Symbiosis</dt>
                  <dd className="col-6 mb-2">SNAP (PG) + SET (UG)</dd>

                  <dt className="col-6">Rule</dt>
                  <dd className="col-6 mb-0">Use only official portals</dd>
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
            <h2 className="sectionHeading mb-2">How Management Exams Connect to Admissions</h2>
            <p className="sectionSub mb-0">
              Typical flow: apply → exam → score/percentile → shortlist → GD/PI/WAT (if applicable) → final selection.
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
                    <strong>CAT/XAT/MAT/CMAT</strong> → apply to institutes using score
                  </li>
                  <li>
                    <strong>SNAP</strong> → Symbiosis MBA admissions process
                  </li>
                  <li>
                    <strong>IIFT</strong> → follow IIFT admission notice and steps
                  </li>
                  <li>
                    <strong>SET</strong> → UG routes like BBA (Symbiosis)
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>For West Bengal minority students:</strong> keep 2–3 options open (example: CMAT + CAT + SNAP),
                and plan documents early (marksheets, photo ID, category/income certificates if applicable, and
                domicile rules where required).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">MBA & Management Exams – Official Links</h2>

          <div className="row g-3 g-md-4">
            {MANAGEMENT_EXAMS.map((item) => (
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
