"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import ExamTabsBar from "../ExamTabsBar";
import { Layers3, Network, ExternalLink } from "lucide-react";

// -------------------------------------------------------------
// Tabs
// -------------------------------------------------------------
const EXAM_TABS = [
  { id: "national", label: "National Level", href: '/exams/hotel-management/national' },
  { id: "state", label: "State Level", href: '/exams/hotel-management/state' },
  { id: "university", label: "University Level", href: '/exams/hotel-management/university' },
  { id: "hotel-run", label: "Hotel-run / Industry Exams", href: '/exams/hotel-management/hotel-run' },
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
        <span className="iitCodeBadge">National</span>
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

      <div className="mt-auto">
        <a
          href={item.source}
          target="_blank"
          rel="noreferrer"
          className="iitWebsiteLink d-inline-flex align-items-center gap-1"
        >
          <span className="">{item.source}</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Page
// -------------------------------------------------------------
export default function HotelManagementNationalPage({ examContents }) {

  const nationalHotelExams = Array.isArray(examContents) ? examContents : [];

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Hotel Management Entrance Exams – National Level"
        breadcrumb="Hospitality & Tourism → National Level"
      />

      <ExamTabsBar tabs={EXAM_TABS} activeId="national" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">
                National Level Hotel Management Entrance Exams
              </h2>
              <p className="sectionSub mb-0">
                National-level hotel management entrance examinations are conducted for admission
                to undergraduate hospitality and hotel administration programmes across India.
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
                  <dd className="col-6 mb-2">{nationalHotelExams.length}</dd>

                  <dt className="col-6">Primary gateway</dt>
                  <dd className="col-6 mb-2">NCHMCT JEE</dd>

                  <dt className="col-6">Course level</dt>
                  <dd className="col-6 mb-0">UG (Hotel / Hospitality)</dd>
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
            <h2 className="sectionHeading mb-2">
              How National Hotel Management Exams Connect to Admissions
            </h2>
            <p className="sectionSub mb-0">
              These national exams act as centralized gateways for admission to hotel management
              institutes across India.
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
                    <strong>Apply</strong> for the national entrance exam
                  </li>
                  <li>
                    <strong>Appear</strong> for the test
                  </li>
                  <li>
                    <strong>Qualify</strong> with required score/rank
                  </li>
                  <li>
                    <strong>Counselling</strong> / seat allocation
                  </li>
                  <li>
                    <strong>Final admission</strong> into hotel management programme
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>West Bengal students:</strong> National exams like NCHMCT JEE allow
                admission into Central IHMs as well as affiliated institutes across India,
                including seats accessible to WB students through centralized counselling.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">
            National Level Hotel Management Entrance Exams
          </h2>

          {nationalHotelExams.length === 0 ? (
            <div className="sectionCard bg-light border text-center small text-muted">
              No exam data available right now. Please check back later.
            </div>
          ) : (
            <div className="row g-3 g-md-4">
              {nationalHotelExams.map((item) => (
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