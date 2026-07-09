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
export default function HumanitiesExamsPage({ examContents }) {

  const humanitiesExams = Array.isArray(examContents) ? examContents : [];

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
                  <dd className="col-6 mb-2">{humanitiesExams.length}</dd>

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

          {humanitiesExams.length === 0 ? (
            <div className="sectionCard bg-light border text-center small text-muted">
              No exam data available right now. Please check back later.
            </div>
          ) : (
            <div className="row g-3 g-md-4">
              {humanitiesExams.map((item) => (
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