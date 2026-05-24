"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import ExamTabsBar from "../ExamTabsBar";
import { Layers3, Network, ExternalLink } from "lucide-react";

// -------------------------------------------------------------
// Tabs (single focus, consistent with MCA page)
// -------------------------------------------------------------
const EXAM_TABS = [
    { id: "engineering-national", label: "Engineering – National Level", href: '/exams/national-level-eg-jee-main-jee-advanced' },
    { id: "engineering-state", label: "Engineering – State Level", href: '/exams/state-level-wbjee-etc' },
    { id: "engineering-university", label: "Engineering – University Level", href: '/exams/university-level-exams' },
    { id: "mca-exams", label: "MCA Entrance Exams", href: '/exams/mca' },
    { id: "architecture-exams", label: "Architecture Entrance Exams", href: '/exams/architecture' },
];

// -------------------------------------------------------------
// Architecture Entrance Exams (EXACTLY as given)
// -------------------------------------------------------------
const ARCHITECTURE_EXAMS = [
  {
    sl: 1,
    exam: "NATA",
    fullForm: "National Aptitude Test in Architecture",
    purpose: "Admission to B.Arch degree courses in architecture colleges across India",
    eligibility: "10+2 or equivalent with eligibility as notified by Council of Architecture",
    apply: "Online",
    activity: "As notified annually (multiple sessions may be conducted)",
    source: "https://www.nata.in/",
    tag: "National",
  },
  {
    sl: 2,
    exam: "AAT",
    fullForm: "Architecture Aptitude Test",
    purpose: "Admission to B.Arch programme offered by IIT Kharagpur and IIT Roorkee",
    eligibility: "Qualified JEE Advanced candidates as notified by IITs",
    apply: "Online",
    activity: "June (after JEE Advanced)",
    source: "https://josaa.nic.in/",
    tag: "National (IIT)",
  },
  {
    sl: 3,
    exam: "TANATA",
    fullForm: "Tamil Nadu Aptitude Test in Architecture",
    purpose: "Admission into B.Arch degree programmes in Tamil Nadu colleges",
    eligibility: "10+2 or equivalent as notified by state authority",
    apply: "Online",
    activity: "As per Tamil Nadu admission schedule",
    source: "https://www.tn.gov.in/",
    tag: "State (TN)",
  },
];

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
// Card
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

// -------------------------------------------------------------
// Page
// -------------------------------------------------------------
export default function ArchitectureEntranceExamsPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Architecture Entrance Exams"
        breadcrumb="Engineering & Tech → Architecture Exams"
      />

      <ExamTabsBar tabs={EXAM_TABS} activeId="architecture-exams" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">Architecture Entrance Exams</h2>
              <p className="sectionSub mb-0">
                Architecture admissions after Class 12 are conducted through national and
                state-level aptitude tests. These exams assess drawing skills, spatial ability,
                and architectural aptitude required for the B.Arch programme.
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
                  <dd className="col-7 mb-2">{ARCHITECTURE_EXAMS.length} entrance exams</dd>

                  <dt className="col-5">Primary exam</dt>
                  <dd className="col-7 mb-2">NATA (National)</dd>

                  <dt className="col-5">IIT route</dt>
                  <dd className="col-7 mb-0">AAT (via JEE Advanced)</dd>
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
            <h2 className="sectionHeading mb-2">How Architecture Exams Connect to Admissions</h2>
            <p className="sectionSub mb-0">
              Architecture admissions typically follow an aptitude-based selection process,
              combined with counselling and document verification.
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
                    <strong>Apply</strong> for the aptitude test (NATA / AAT / TANATA)
                  </li>
                  <li>
                    <strong>Appear</strong> for the exam as scheduled
                  </li>
                  <li>
                    <strong>Qualify</strong> with required score/criteria
                  </li>
                  <li>
                    <strong>Counselling</strong> / choice filling as per authority
                  </li>
                  <li>
                    <strong>Final admission</strong> to B.Arch programme
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>West Bengal students:</strong> NATA is the primary route for admission
                to B.Arch programmes in most colleges across India, including institutions
                in West Bengal.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">Architecture Entrance Exams – Official Links</h2>

          <div className="row g-3 g-md-4">
            {ARCHITECTURE_EXAMS.map((item) => (
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
