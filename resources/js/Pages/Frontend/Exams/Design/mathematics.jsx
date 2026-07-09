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
function RouteCard({ item }) {
  return (
    <div className="iitCard w-100 d-flex flex-column h-100">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="iitRank small fw-semibold">
          {item.sl}. {item.route}
        </span>
        <span className="iitCodeBadge">{item.tag}</span>
      </div>

      <h3 className="h6 fw-semibold mb-2 text-dark">{item.nature}</h3>

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
export default function MathematicsUGAdmissionsPage({ examContents }) {

  const mathRoutes = Array.isArray(examContents) ? examContents : [];

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Mathematics (UG) Admissions / Tests"
        breadcrumb="Design • Media • Humanities → Mathematics"
      />

      <ExamTabsBar tabs={EXAM_TABS} activeId="mathematics" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">Mathematics Admissions Routes (After Class 12)</h2>
              <p className="sectionSub mb-0">
                For Mathematics UG in West Bengal, admissions commonly happen through merit-based selection lists
                (like JU / St. Xavier's) or through an entrance + counselling route (PUBDET for Presidency University).
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
                  <dd className="col-6 mb-2">{mathRoutes.length}</dd>

                  <dt className="col-6">Merit basis</dt>
                  <dd className="col-6 mb-2">JU, St. Xavier's</dd>

                  <dt className="col-6">Entrance route</dt>
                  <dd className="col-6 mb-2">PUBDET (WBJEEB)</dd>

                  <dt className="col-6">Best practice</dt>
                  <dd className="col-6 mb-0">Track official lists & deadlines</dd>
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
            <h2 className="sectionHeading mb-2">How Mathematics UG Admissions Work</h2>
            <p className="sectionSub mb-0">
              Typical flow depends on the route: merit list reporting or entrance + counselling.
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
                    <strong>Merit basis</strong> → apply online → selection list → reporting & verification → admission
                  </li>
                  <li>
                    <strong>Entrance route (PUBDET)</strong> → register → exam → rank card → counselling choice filling → seat allotment
                  </li>
                  <li>
                    <strong>Always</strong> → check eligibility, subject combination, and fee/payment steps on official notices
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>For West Bengal minority students:</strong> keep at least 2 options open (one merit route + PUBDET route).
                Keep documents ready: HS marksheet, photo ID, category/income certificates (if applicable), and watch reporting dates carefully.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">Official Portals</h2>

          {mathRoutes.length === 0 ? (
            <div className="sectionCard bg-light border text-center small text-muted">
              No exam data available right now. Please check back later.
            </div>
          ) : (
            <div className="row g-3 g-md-4">
              {mathRoutes.map((item) => (
                <div key={item.sl ?? item.route} className="col-12 col-md-6 d-flex">
                  <RouteCard item={item} />
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