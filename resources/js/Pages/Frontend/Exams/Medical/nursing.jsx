"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import ExamTabsBar from "../ExamTabsBar";
import { Layers3, Network, ExternalLink, Info } from "lucide-react";

// -------------------------------------------------------------
// Tabs (single focus, consistent with MCA/Architecture pages)
// -------------------------------------------------------------
const EXAM_TABS = [
  { id: "medical-national", label: "Medical – National Level", href: '/exams/national-level-eg-neet-ug' },
  { id: "medical-state", label: "Medical – State Level", href: '/exams/state-level-medical-exams' },
  { id: "nursing-exams", label: "Nursing & Allied Exams", href: '/exams/university-level-medical-exams' },
  { id: "pg-medical", label: "PG Medical Exams (MD/MS)", href: '/exams/pg' },
  { id: "pharmacy-exams", label: "Pharmacy Entrance Exams", href: '/exams/pharmacy' },
];

// -------------------------------------------------------------
// Nursing & Allied Exams (based on your provided data)
// - WB: JENPAUH is the nursing entrance reference; WBJEEB currently publishes nursing intake under JENPAS-UG / ANM & GNM.
// - AMU: Nursing (GNM) admission via AMU admissions portal / controller exams.
// -------------------------------------------------------------
const NURSING_EXAMS = [
  {
    sl: 1,
    exam: "JENPAUH (WB)",
    fullForm: "Joint Entrance for Nursing courses in different Government and Private Nursing colleges of West Bengal",
    purpose: "Admission to Nursing / Allied seats in West Bengal as notified by WB authority",
    eligibility: "As per WBJEEB information bulletin (category & course-wise rules as notified)",
    apply: "Online",
    activity: "As per WBJEEB schedule (check portal)",
    // Official portals (working)
    sources: [
      { label: "WBJEEB JENPAS-UG (official)", href: "https://wbjeeb.nic.in/jenpas-ug/" },
      { label: "WBJEEB ANM & GNM (official)", href: "https://wbjeeb.nic.in/" }, // WBJEEB main (ANM & GNM is inside Examinations)
    ],
    tag: "State (WB)",
    wbFocus: true,
    statusNote:
      "Note: The West Bengal nursing entrance is currently published by WBJEEB under JENPAS-UG / ANM & GNM portals. Always verify the latest bulletin on WBJEEB.",
  },
  {
    sl: 2,
    exam: "AMU Entrance Test",
    fullForm: "Aligarh Muslim University – Diploma in General Nursing & Midwifery (GNM) Admission Route",
    purpose: "Diploma in General Nursing & Midwifery (GNM) admission at AMU (as notified)",
    eligibility: "As per AMU guide/brochure for the concerned session",
    apply: "Online",
    activity: "As per AMU admission schedule (check portal)",
    sources: [
      { label: "AMU Controller Exams – General Admissions (official)", href: "https://www.amucontrollerexams.com/page/view/general-admission-1550578415" },
      { label: "AMU Online Application (OAPS) (official)", href: "https://oaps.amuonline.ac.in/" },
    ],
    tag: "University",
  },
];

// -------------------------------------------------------------
// Card
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
          <strong>ELIGIBILITY:</strong> {item.eligibility}
        </p>
        <p className="mb-1">
          <strong>APPLY:</strong> {item.apply}
        </p>
        <p className="mb-0">
          <strong>ACTIVITY:</strong> {item.activity}
        </p>
      </div>

      {!!item.statusNote && (
        <div className="sectionCard bg-light border small mt-2">
          <div className="d-flex align-items-start gap-2">
            <Info size={16} className="text-primary mt-1" />
            <div>{item.statusNote}</div>
          </div>
        </div>
      )}

      <div className="mt-auto d-flex flex-column gap-2 pt-2">
        {item.sources?.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="iitWebsiteLink d-inline-flex align-items-center gap-1"
          >
            <span className="small">{s.label}</span>
            <ExternalLink size={14} />
          </a>
        ))}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Page
// -------------------------------------------------------------
export default function NursingExamsPage() {
  const wbCount = NURSING_EXAMS.filter((x) => x.wbFocus).length;

  return (
    <>
    <FrontendLayout>
      <HeroInner title="Nursing & Allied Exams" breadcrumb="Medical & Allied → Nursing & Allied Exams" />
      <ExamTabsBar tabs={EXAM_TABS} activeId="nursing-exams" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">Nursing & Allied Entrance Exams</h2>
              <p className="sectionSub mb-0">
                Nursing admissions are conducted through state boards and university admission routes. Always rely on the official
                bulletin/portal for eligibility, seat matrix, and counselling rules.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>
                <dl className="row small mb-0">
                  <dt className="col-6">Exams listed</dt>
                  <dd className="col-6 mb-2">{NURSING_EXAMS.length}</dd>

                  <dt className="col-6">West Bengal focus</dt>
                  <dd className="col-6 mb-2">{wbCount ? "Included" : "—"}</dd>

                  <dt className="col-6">Best practice</dt>
                  <dd className="col-6 mb-0">Verify bulletin + counselling notice</dd>
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
            <h2 className="sectionHeading mb-2">How Nursing Exams Connect to Admissions</h2>
            <p className="sectionSub mb-0">
              The typical flow is: application → entrance/merit → rank/merit list → counselling → verification → admission.
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
                    <strong>Apply</strong> on the official portal
                  </li>
                  <li>
                    <strong>Entrance / merit</strong> as notified
                  </li>
                  <li>
                    <strong>Result</strong> → rank/merit list
                  </li>
                  <li>
                    <strong>Counselling</strong> + choice filling (if applicable)
                  </li>
                  <li>
                    <strong>Final admission</strong> after verification + fee payment
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>West Bengal minority students:</strong> Track WBJEEB notifications early, keep your documents ready
                (category certificate, domicile/reservation proofs if applicable), and follow counselling instructions carefully.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">Nursing Entrance Exams – Official Links</h2>

          <div className="row g-3 g-md-4">
            {NURSING_EXAMS.map((item) => (
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
