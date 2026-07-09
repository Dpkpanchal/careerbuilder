
"use client";

import React, { useState } from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import ExamTabsBar from "../ExamTabsBar";
import { Layers3, Network, ExternalLink, Info } from "lucide-react";

// -------------------------------------------------------------
// Tabs (keep consistent with your medical pages)
// -------------------------------------------------------------
const EXAM_TABS = [
  { id: "medical-national", label: "Medical – National Level", href: '/exams/national-level-eg-neet-ug' },
  { id: "medical-state", label: "Medical – State Level", href: '/exams/state-level-medical-exams' },
  { id: "nursing-exams", label: "Nursing & Allied Exams", href: '/exams/university-level-medical-exams' },
  { id: "pg-medical", label: "PG Medical Exams (MD/MS)", href: '/exams/pg' },
  { id: "pharmacy-exams", label: "Pharmacy Entrance Exams", href: '/exams/pharmacy' },
];

// Extra official pathway links (kept static — this is a fixed reference link, not exam data)
const OFFICIAL_COUNSELLING = {
  mccUg: "https://mcc.nic.in/ug-medical-counselling/",
};

// -------------------------------------------------------------
// Helpers
// -------------------------------------------------------------
function getWebsiteHref(raw) {
  if (!raw) return "#";
  const t = raw.trim();
  if (/^https?:\/\//i.test(t)) return t;
  return `https://${t.replace(/^\/\//, "")}`;
}

// -------------------------------------------------------------
// Card (same style as your engineering cards)
// -------------------------------------------------------------
function ExamCard({ item }) {
  const [open, setOpen] = useState(false);

  const eligibilityText = item.eligibility || [];
  const activityText = item.activity || [];

  return (
    <div className="iitCard w-100 d-flex flex-column h-100">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <span className="iitRank small fw-semibold">{item.exam}</span>
        <span className="iitCodeBadge">National</span>
      </div>

      {item.purpose && (
        <p className="small text-muted mb-2">
          <strong>PURPOSE:</strong> {item.purpose}
        </p>
      )}

      <div className="iitDivider my-2" />

      <div className="small text-muted mb-2">
        {!!eligibilityText.length && (
          <>
            <p className="mb-1">
              <strong>ELIGIBILITY:</strong>
            </p>
            <ul className="mb-2 ps-3">
              {(open ? eligibilityText : eligibilityText.slice(0, 2)).map((t, idx) => (
                <li key={idx}>{t}</li>
              ))}
            </ul>

            {eligibilityText.length > 2 && (
              <button type="button" className="btn btn-link btn-sm px-0 mt-0" onClick={() => setOpen((v) => !v)}>
                {open ? "Show less" : "Show more"}
              </button>
            )}
          </>
        )}

        {item.apply && (
          <p className="mb-1">
            <strong>APPLY:</strong> {item.apply}
          </p>
        )}

        {!!activityText.length && (
          <>
            <p className="mb-1">
              <strong>ACTIVITY:</strong>
            </p>
            <ul className="mb-0 ps-3">
              {activityText.map((t, idx) => (
                <li key={idx}>{t}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      {!!item.statusNote && (
        <div className="sectionCard bg-light border small mt-2">
          <div className="d-flex align-items-start gap-2">
            <Info size={16} className="text-primary mt-1" />
            <div>{item.statusNote}</div>
          </div>
        </div>
      )}

      {item.source && (
        <>
          <div className="iitDivider my-2" />
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <a
              href={getWebsiteHref(item.source)}
              target="_blank"
              rel="noreferrer"
              className="iitWebsiteLink d-inline-flex align-items-center gap-1"
            >
              <span className="small">{item.source}</span>
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// Page
// -------------------------------------------------------------
export default function MedicalNationalExamsPage({ examContents }) {

  const nationalMedicalExams = Array.isArray(examContents) ? examContents : [];

  return (
    <>
    <FrontendLayout>
      <HeroInner title="National Level Medical Entrance Exam" breadcrumb="Medical & Allied → National Level" />
      <ExamTabsBar tabs={EXAM_TABS} activeId="medical-national" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">National Level Medical Entrance Exam</h2>
              <p className="sectionSub mb-0">
                National-level medical entrance exams are used for admission to MBBS and other UG medical seats (as notified).
                Always check the official portals for the latest eligibility, dates, and counselling rules.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <dl className="row small mb-0">
                  <dt className="col-5">Exams listed</dt>
                  <dd className="col-7 mb-2">{nationalMedicalExams.length} (NEET + major institutes)</dd>

                  <dt className="col-5">Primary UG gateway</dt>
                  <dd className="col-7 mb-2">NEET-UG (for MBBS admissions)</dd>

                  <dt className="col-5">Counselling (official)</dt>
                  <dd className="col-7 mb-0">
                    <a href={OFFICIAL_COUNSELLING.mccUg} target="_blank" rel="noreferrer" className="text-decoration-none">
                      MCC UG Medical Counselling <ExternalLink size={12} className="ms-1" />
                    </a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) KEEP THIS SECTION */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">How National Exams Connect to Admissions</h2>
            <p className="sectionSub mb-0">
              The typical flow is: application → exam → score/rank → counselling rounds → seat allotment → verification → admission.
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
                    <strong>Appear</strong> in the exam (as notified)
                  </li>
                  <li>
                    <strong>Result</strong> → score / rank / merit list
                  </li>
                  <li>
                    <strong>Counselling</strong> (AIQ via MCC + State counselling)
                  </li>
                  <li>
                    <strong>Final admission</strong> after verification + fee submission
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>West Bengal students:</strong> Track both counselling streams — All India Quota (MCC) and West Bengal state
                counselling notifications. Always rely on official portals.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) LIST (table-style cards) */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="mb-3 mb-lg-4">
            <h2 className="sectionHeading mb-1">National Medical Entrance Exams – Official Links</h2>
            <p className="sectionSub mb-0">Below are the key national-level exam pathways and their official portals.</p>
          </div>

          {nationalMedicalExams.length === 0 ? (
            <div className="sectionCard bg-light border text-center small text-muted">
              No exam data available right now. Please check back later.
            </div>
          ) : (
            <div className="row g-3 g-md-4">
              {nationalMedicalExams.map((item) => (
                <div key={item.id ?? item.exam} className="col-12 col-md-6 d-flex">
                  <ExamCard item={item} />
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