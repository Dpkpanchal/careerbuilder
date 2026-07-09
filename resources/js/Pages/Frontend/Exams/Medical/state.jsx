"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import ExamTabsBar from "../ExamTabsBar";
import { Layers3, Network, ExternalLink, Info } from "lucide-react";

// -------------------------------------------------------------
// Tabs
// -------------------------------------------------------------
const EXAM_TABS = [
  { id: "medical-national", label: "Medical – National Level", href: '/exams/national-level-eg-neet-ug' },
  { id: "medical-state", label: "Medical – State Level", href: '/exams/state-level-medical-exams' },
  { id: "nursing-exams", label: "Nursing & Allied Exams", href: '/exams/university-level-medical-exams' },
  { id: "pg-medical", label: "PG Medical Exams (MD/MS)", href: '/exams/pg' },
  { id: "pharmacy-exams", label: "Pharmacy Entrance Exams", href: '/exams/pharmacy' },
];

// -------------------------------------------------------------
// Helpers
// -------------------------------------------------------------
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function ExamItemCard({ item }) {
  const tagText = item.isHash ? "# Also used for other courses" : "Replaced for MBBS";
  return (
    <div className="iitCard w-100 d-flex flex-column h-100">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <span className="iitRank small fw-semibold">{item.title}</span>
        <span className="iitCodeBadge">{tagText}</span>
      </div>

      {item.note && <p className="small text-muted mb-3">{item.note}</p>}

      {item.href && isValidUrl(item.href) && (
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="iitWebsiteLink d-inline-flex align-items-center gap-1 mt-auto"
        >
          <span className="small">{item.linkLabel || item.href}</span>
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// Page
// -------------------------------------------------------------
export default function MedicalStateExamsPage({ examContents }) {

  const replacedStateMedicalExams = Array.isArray(examContents) ? examContents : [];
  const replacedCount = replacedStateMedicalExams.filter((x) => !x.isHash).length;
  const hashCount = replacedStateMedicalExams.filter((x) => x.isHash).length;

  return (
    <>
    <FrontendLayout>
      <HeroInner title="State Level Medical Entrance" breadcrumb="Medical & Allied → State Level" />
      <ExamTabsBar tabs={EXAM_TABS} activeId="medical-state" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">NEET Replaced State-level Medical Entrance Exams</h2>
              <p className="sectionSub mb-0">
                From 2013 onwards, NEET became the primary entrance route for MBBS/BDS admissions. The state-level MBBS entrances
                listed below are no longer separate MBBS exams. Some items marked with <strong>#</strong> are still conducted for
                other courses such as engineering/pharmacy, etc.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <dl className="row small mb-0">
                  <dt className="col-6">Items listed</dt>
                  <dd className="col-6 mb-2">{replacedStateMedicalExams.length}</dd>

                  <dt className="col-6">Replaced for MBBS</dt>
                  <dd className="col-6 mb-2">{replacedCount}</dd>

                  <dt className="col-6">Marked with #</dt>
                  <dd className="col-6 mb-0">{hashCount} (still for other courses)</dd>
                </dl>
              </div>
            </div>
          </div>

          <div className="mt-3 sectionCard bg-light border small">
            <div className="d-flex align-items-start gap-2">
              <Info size={16} className="text-primary mt-1" />
              <div>
                <strong>How to read this page:</strong> If you are looking for MBBS/BDS admission, focus on{" "}
                <strong>NEET-UG</strong> + your state counselling. Items marked <strong>#</strong> are not MBBS entrances now.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) HOW IT CONNECTS */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">How State Medical Admissions Work Now</h2>
            <p className="sectionSub mb-0">
              The admission flow is NEET score → state merit list → counselling rounds → seat allotment → verification → admission.
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
                    <strong>NEET-UG</strong> → score + AIR
                  </li>
                  <li>
                    <strong>Register</strong> for state counselling (as per state authority)
                  </li>
                  <li>
                    <strong>Merit list</strong> + document verification
                  </li>
                  <li>
                    <strong>Choice filling</strong> → seat allotment rounds
                  </li>
                  <li>
                    <strong>Final admission</strong> at allotted college
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>West Bengal students:</strong> For MBBS/BDS, you will follow NEET-UG + West Bengal state counselling
                notifications. WBJEE is relevant for engineering/pharmacy routes, not MBBS.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">List of Exams Replaced (and # Exams Still Used for Other Courses)</h2>

          {replacedStateMedicalExams.length === 0 ? (
            <div className="sectionCard bg-light border text-center small text-muted">
              No exam data available right now. Please check back later.
            </div>
          ) : (
            <div className="row g-3 g-md-4">
              {replacedStateMedicalExams.map((item) => (
                <div key={item.id ?? item.title} className="col-12 col-md-6 d-flex">
                  <ExamItemCard item={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
