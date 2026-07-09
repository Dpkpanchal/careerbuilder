
"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';  
import ExamTabsBar from "../ExamTabsBar";
import { Layers3, Network, ExternalLink, Info, ShieldCheck } from "lucide-react";

// -------------------------------------------------------------
// Tabs (Agri • Defence • School bucket) - static UI config, keep as is
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
            <Info size={16} className="text-primary mt-1" />
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
export default function AgricultureExamsPage({ examContents }) {
  // examContents ab backend/CMS se aane wala dynamic data hai.
  // Expected shape (per item): { sl, exam, fullForm, purpose, eligibility,
  //                              apply, activity, links: [{label, href}], tag, note? }
  const agriExams = Array.isArray(examContents) ? examContents : [];

  return (
    <>
      <FrontendLayout>
        <HeroInner title="Agriculture Entrance Exams" breadcrumb="Agri • Defence • School → Agriculture" />

        <ExamTabsBar tabs={EXAM_TABS} activeId="agriculture" />

        {/* INTRO + SNAPSHOT */}
        <section className="py-4 py-md-5">
          <div className="container">
            <div className="row g-4 align-items-start">
              <div className="col-12 col-lg-7">
                <h2 className="sectionHeading mb-3">Agriculture & Allied Sciences — Entrance Routes</h2>
                <p className="sectionSub mb-0">
                  Agriculture admissions happen via national routes (ICAR), state-level portals, and some university
                  admission systems. Use only official portals for applications and counselling.
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
                    <dd className="col-6 mb-2">{agriExams.length}</dd>

                    <dt className="col-6">National route</dt>
                    <dd className="col-6 mb-2">ICAR AIEEA</dd>

                    <dt className="col-6">Key WB route</dt>
                    <dd className="col-6 mb-2">WBJEEB</dd>

                    <dt className="col-6">Safety</dt>
                    <dd className="col-6 mb-0">Avoid agents / fake sites</dd>
                  </dl>
                </div>
              </div>
            </div>

            {/* Safety note (short) */}
            <div className="row mt-3">
              <div className="col-12">
                <div className="sectionCard bg-light border small">
                  <div className="d-flex align-items-start gap-2">
                    <ShieldCheck size={16} className="text-success mt-1" />
                    <div>
                      Always apply through <strong>official</strong> government/university domains. If a portal asks for
                      payment via unknown links/UPI IDs, stop and verify from the official notice.
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
              <h2 className="sectionHeading mb-2">How Agriculture Exams Connect to Admissions</h2>
              <p className="sectionSub mb-0">
                Typical flow: apply → exam/score (where applicable) → rank/merit list → counselling/choice filling → seat allotment →
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
                      <strong>National (ICAR)</strong> → exam → rank → counselling → allotment
                    </li>
                    <li>
                      <strong>State portals</strong> → exam/merit → counselling → college reporting
                    </li>
                    <li>
                      <strong>University admissions</strong> → portal → merit/counselling as notified
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-lg-7 d-flex">
                <div className="sectionCard bg-light border w-100 small">
                  <strong>For West Bengal minority students:</strong> keep both options open — (1) WB routes for nearby
                  colleges and (2) national ICAR route for wider choices. Keep documents ready: HS marksheet, photo ID,
                  domicile/category/income certificates (if applicable), and scholarship documents.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LIST — ab dynamic examContents se render ho raha hai */}
        <section className="py-4 py-md-5">
          <div className="container">
            <h2 className="sectionHeading mb-3">Agriculture Exams – Official Links</h2>

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