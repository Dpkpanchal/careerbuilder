"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';  
import ExamTabsBar from "../ExamTabsBar";
import { Layers3, Network, ExternalLink, Info, ShieldCheck } from "lucide-react";

// -------------------------------------------------------------
// Tabs (Agri • Defence • School bucket)
// -------------------------------------------------------------
const EXAM_TABS = [
  { id: "agriculture", label: "Agriculture", href: '/exams/agri/agriculture' },
  { id: "veterinary", label: "Veterinary Science", href: '/exams/agri/veterinary' },
  { id: "defence", label: "Defence & Marine", href: '/exams/agri/defence' },
  { id: "school", label: "School-level", href: '/exams/agri/school' },
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
          <strong>ELIGIBILITY:</strong> {item.eligibility}
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
export default function VeterinaryExamsPage({ examContents }) {

  const agriExams = Array.isArray(examContents) ? examContents : [];

  return (
    <>
    <FrontendLayout>
      <HeroInner title="Veterinary Entrance Exams" breadcrumb="Agri • Defence • School → Veterinary Science" />

      <ExamTabsBar tabs={EXAM_TABS} activeId="veterinary" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">Veterinary Science (BVSc & AH) — Entrance & Admission Routes</h2>
              <p className="sectionSub mb-0">
                Veterinary admissions are handled through national counselling/portals and state/university admission systems.
                Always rely on official notices for eligibility, documents, counselling and seat allotment.
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
                  <dd className="col-6 mb-2">{agriExams.length}</dd>

                  <dt className="col-6">National portal</dt>
                  <dd className="col-6 mb-2">VCI counselling</dd>

                  <dt className="col-6">State/University</dt>
                  <dd className="col-6 mb-2">RPVT, OUAT, AAU, UPCATET, DUVASU</dd>

                  <dt className="col-6">Rule</dt>
                  <dd className="col-6 mb-0">Only official links</dd>
                </dl>
              </div>
            </div>
          </div>

          {/* Safety note */}
          <div className="row mt-3">
            <div className="col-12">
              <div className="sectionCard bg-light border small">
                <div className="d-flex align-items-start gap-2">
                  <ShieldCheck size={16} className="text-success mt-1" />
                  <div>
                    Avoid agents and unofficial "registration" sites. Use only government/university domains shown below,
                    and cross-check dates from the official notice PDFs/portals.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEEP THIS SECTION */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">How Veterinary Exams Connect to Admissions</h2>
            <p className="sectionSub mb-0">
              Typical flow: apply → exam/score (where applicable) → merit/rank → counselling/choice filling → seat allotment →
              document verification → admission.
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
                    <strong>National counselling</strong> → register → choice filling → allotment → reporting
                  </li>
                  <li>
                    <strong>State tests</strong> (e.g., RPVT) → exam → rank → counselling → reporting
                  </li>
                  <li>
                    <strong>University admissions</strong> → portal → merit/counselling as notified
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>For West Bengal minority students:</strong> if you plan veterinary, keep at least two tracks open:
                (1) national counselling route and (2) one university/state route where you're eligible. Keep documents ready
                (HS marksheet, photo ID, category/income certificates if applicable).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">Veterinary Exams – Official Links</h2>

          {agriExams.length === 0 ? (
            <div className="sectionCard bg-light border text-center small text-muted">
              No exam data available right now. Please check back later.
            </div>
          ) : (
            <div className="row g-3 g-md-4">
              {agriExams.map((item) => (
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
