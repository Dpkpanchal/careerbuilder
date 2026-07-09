"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import ExamTabsBar from "../ExamTabsBar";
import { Layers3, Network, ExternalLink } from "lucide-react";

// -------------------------------------------------------------
// Tabs for Computer Applications (simple + future-ready)
// -------------------------------------------------------------
const EXAM_TABS = [
    { id: "engineering-national", label: "Engineering – National Level", href: '/exams/national-level-eg-jee-main-jee-advanced' },
    { id: "engineering-state", label: "Engineering – State Level", href: '/exams/state-level-wbjee-etc' },
    { id: "engineering-university", label: "Engineering – University Level", href: '/exams/university-level-exams' },
    { id: "mca-exams", label: "MCA Entrance Exams", href: '/exams/mca' },
    { id: "architecture-exams", label: "Architecture Entrance Exams", href: '/exams/architecture' },
];

// -------------------------------------------------------------
// MCA Entrance Exams (exact set as given)
// - Links are official and working
// -------------------------------------------------------------
// -------------------------------------------------------------
// Helpers
// -------------------------------------------------------------
function getWebsiteHref(raw) {
  if (!raw) return "#";
  const t = raw.trim();
  if (/^https?:\/\//i.test(t)) return t;
  return `https://${t.replace(/^\/\//, "")}`;
}

function ExamCard({ item }) {
  return (
    <div className="iitCard w-100 d-flex flex-column h-100">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="iitRank small fw-semibold">
         {item.exam}
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

      <div className="mt-auto">
        <a
          href={getWebsiteHref(item.source)}
          target="_blank"
          rel="noreferrer"
          className="iitWebsiteLink d-inline-flex align-items-center gap-1"
        >
          <span className="small">{item.source}</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}

export default function MCAEntranceExamsPage({examContents}) {
  const wbCount = examContents.filter((x) => x.wb_focus).length;

  const computerApplicationsExams = Array.isArray(examContents) ? examContents : [];

  return (
    <>
    <FrontendLayout>
      <HeroInner title="MCA Entrance Exams" breadcrumb="Engineering & Tech → MCA Entrance Exams" />
      <ExamTabsBar tabs={EXAM_TABS} activeId="mca-exams" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">MCA Entrance Exams</h2>
              <p className="sectionSub mb-0">
                MCA admissions happen through national-level tests, university-specific admission routes, and state-level entrance exams.
                Always verify eligibility, dates, and counselling rules from the official portals.
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
                  <dd className="col-7 mb-2">{computerApplicationsExams.length} MCA routes</dd>

                  <dt className="col-5">Coverage</dt>
                  <dd className="col-7 mb-2">National + University + State</dd>

                  <dt className="col-5">West Bengal</dt>
                  <dd className="col-7 mb-0">
                    {wbCount ? "Includes WB JECA (WB MCA pathway)" : "WB pathway included"}
                  </dd>
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
            <h2 className="sectionHeading mb-2">How MCA Exams Connect to Admissions</h2>
            <p className="sectionSub mb-0">
              The typical flow is: application → entrance test → rank/merit list → counselling/selection → seat allotment → admission.
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
                    <strong>Apply</strong> on the exam/university portal
                  </li>
                  <li>
                    <strong>Appear</strong> for the entrance test (where applicable)
                  </li>
                  <li>
                    <strong>Result</strong> → rank/score/merit list
                  </li>
                  <li>
                    <strong>Counselling</strong> / seat allocation / interviews (as notified)
                  </li>
                  <li>
                    <strong>Final admission</strong> after verification + fee submission
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>West Bengal minority students:</strong> If you want MCA in WB colleges, track <strong>WB JECA</strong> closely and
                keep your documents ready for counselling (category certificate, domicile/reservation proofs if applicable).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">Official MCA Entrance Exam Links</h2>

          <div className="row g-3 g-md-4">
            {computerApplicationsExams.map((item) => (
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
