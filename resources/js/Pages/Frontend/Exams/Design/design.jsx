"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import ExamTabsBar from "../ExamTabsBar";
import { Layers3, Network, ExternalLink } from "lucide-react";

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
// DESIGN & FASHION ENTRANCE EXAMS
// Source: Career Book (Fashion and Design section)
// -------------------------------------------------------------
const DESIGN_EXAMS = [
  {
    sl: 1,
    exam: "NIFT Entrance Exam",
    fullForm: "National Institute of Fashion Technology Entrance Examination",
    purpose:
      "B.Des / B.FTech (UG), M.Des / M.FTech / MFM (PG) programmes at NIFT campuses",
    eligibility:
      "As per NIFT norms (UG after Class 12, PG after graduation)",
    apply: "Online",
    activity: "October – January",
    source: "https://nift.ac.in/admission",
    tag: "National",
  },
  {
    sl: 2,
    exam: "NID DAT",
    fullForm: "National Institute of Design – Design Aptitude Test",
    purpose:
      "B.Des / GDPD (UG) and M.Des (PG) programmes at NID campuses",
    eligibility:
      "UG after Class 12, PG after graduation (as per NID rules)",
    apply: "Online",
    activity: "September – November",
    source: "https://admissions.nid.edu/",
    tag: "National",
  },
  {
    sl: 3,
    exam: "CEED",
    fullForm: "Common Entrance Examination for Design",
    purpose:
      "M.Des and PhD programmes in Design at IITs and participating institutes",
    eligibility:
      "Graduation in any discipline",
    apply: "Online",
    activity: "September – November",
    source: "https://ceed.iitb.ac.in/",
    tag: "National (PG)",
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

      <h3 className="h6 fw-semibold mb-2 text-dark">
        {item.fullForm}
      </h3>

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

      <div className="mt-auto pt-3">
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
export default function DesignEntranceExamsPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Design & Fashion Entrance Exams"
        breadcrumb="Design • Media • Humanities → Fashion & Design"
      />

      <ExamTabsBar tabs={EXAM_TABS} activeId="design" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">
                Fashion & Design Entrance Exams
              </h2>
              <p className="sectionSub mb-0">
                Design and fashion entrance examinations are conducted for admission into
                undergraduate and postgraduate programmes in fashion, textile, product,
                communication and industrial design.
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
                  <dd className="col-6 mb-2">{DESIGN_EXAMS.length}</dd>

                  <dt className="col-6">UG entry</dt>
                  <dd className="col-6 mb-2">NIFT, NID</dd>

                  <dt className="col-6">PG entry</dt>
                  <dd className="col-6 mb-2">CEED</dd>

                  <dt className="col-6">Key institutes</dt>
                  <dd className="col-6 mb-0">NIFT, NID, IITs</dd>
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
              How Design Exams Connect to Admissions
            </h2>
            <p className="sectionSub mb-0">
              Design admissions usually involve an aptitude test followed by studio tests,
              interviews or portfolio evaluation.
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
                    <strong>Written / Aptitude test</strong> (design thinking, creativity)
                  </li>
                  <li>
                    <strong>Studio test / Portfolio</strong> (where applicable)
                  </li>
                  <li>
                    <strong>Interview</strong>
                  </li>
                  <li>
                    <strong>Merit list & counselling</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>For West Bengal minority students:</strong> focus on NIFT Kolkata and
                nearby NID/IIT centres while keeping national options open. Start preparing
                sketching, creativity and general aptitude early.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">
            Design & Fashion Entrance Exams – Official Links
          </h2>

          <div className="row g-3 g-md-4">
            {DESIGN_EXAMS.map((item) => (
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
