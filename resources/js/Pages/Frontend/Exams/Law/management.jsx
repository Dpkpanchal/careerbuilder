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
         {item.sources?.map((l) => (
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
export default function ManagementExamsPage({ examContents }) {

  const managementExams = Array.isArray(examContents) ? examContents : [];

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
                  <dd className="col-6 mb-2">{managementExams.length}</dd>

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

          {managementExams.length === 0 ? (
            <div className="sectionCard bg-light border text-center small text-muted">
              No exam data available right now. Please check back later.
            </div>
          ) : (
            <div className="row g-3 g-md-4">
              {managementExams.map((item) => (
                <div key={item.sl ?? item.exam} className="col-12 col-md-6 d-flex">
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