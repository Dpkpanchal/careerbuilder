"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import ExamTabsBar from "../ExamTabsBar";
import { Layers3, Network, ExternalLink, Info } from "lucide-react";

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
// UNIVERSITY HOTEL MANAGEMENT ENTRANCE EXAMS (from your dataset)
// -------------------------------------------------------------
const UNIVERSITY_HOTEL_EXAMS = [
  {
    sl: 1,
    exam: "IPU CET BHMCT",
    fullForm:
      "Guru Gobind Singh Indraprastha University Common Entrance Test – Bachelor of Hotel Management and Catering Technology",
    purpose: "BHMCT admission (IPU affiliated institutes / as notified)",
    eligibility: "10+2 with 50% with English as mandatory subject; Age not more than 21 years",
    apply: "Online",
    activity: "April",
    sources: [
      { label: "IPU Admissions Portal (official)", href: "https://ipu.admissions.nic.in/" },
      { label: "IPU Official Website (official)", href: "https://www.ipu.ac.in/" },
      { label: "IPU Admission Notices (official)", href: "https://www.ipu.ac.in/admission2025main.php" },
    ],
    tag: "University",
    note:
      "IPU may run BHMCT through a notified admission route (CET/CUET/merit as announced). Always check the current-year brochure + notices on the IPU official portals.",
  },
  {
    sl: 2,
    exam: "PUTHAT",
    fullForm: "Punjab University Tourism and Hospitality Aptitude Test",
    purpose: "BHMCT and related hospitality programmes (as notified by Panjab University)",
    eligibility: "10+2 with 50%; English mandatory",
    apply: "Online",
    activity: "March",
    sources: [
      { label: "PUTHAT Official Website", href: "https://puthat.puchd.ac.in/" },
      { label: "Panjab University – Entrance Test Schedule (official)", href: "https://admissions.puchd.ac.in/entrance-test-details.php" },
      { label: "Panjab University Official Website", href: "https://puchd.ac.in/" },
    ],
    tag: "University",
  },
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

      <div className="mt-auto d-flex flex-column gap-2 pt-2">
        {item.sources?.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="iitWebsiteLink d-inline-flex align-items-center gap-1"
          >
            <span className="">{s.label}</span>
            <ExternalLink size={14} />
          </a>
        ))}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Page
// -------------------------------------------------------------
export default function HotelManagementUniversityPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Hotel Management Entrance Exams – University Level"
        breadcrumb="Hospitality & Tourism → University Level"
      />

      <ExamTabsBar tabs={EXAM_TABS} activeId="university" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">University Level Hotel Management Entrance Exams</h2>
              <p className="sectionSub mb-0">
                Some universities conduct their own entrance tests for BHMCT / hospitality programmes.
                Use the official university admission portals to confirm eligibility, schedule, and counselling rules.
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
                  <dd className="col-6 mb-2">{UNIVERSITY_HOTEL_EXAMS.length}</dd>

                  <dt className="col-6">Key universities</dt>
                  <dd className="col-6 mb-2">GGSIPU + Panjab University</dd>

                  <dt className="col-6">Course level</dt>
                  <dd className="col-6 mb-0">UG (BHMCT / hospitality)</dd>
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
            <h2 className="sectionHeading mb-2">How University Exams Connect to Admissions</h2>
            <p className="sectionSub mb-0">
              Typically: apply → appear for entrance test → result/merit → counselling/selection → admission.
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
                    <strong>Apply</strong> on university admission portal
                  </li>
                  <li>
                    <strong>Entrance test</strong> (or notified admission mode)
                  </li>
                  <li>
                    <strong>Result</strong> → rank/merit list
                  </li>
                  <li>
                    <strong>Counselling</strong> / seat allotment
                  </li>
                  <li>
                    <strong>Final admission</strong> after verification + fee payment
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>West Bengal minority students:</strong> University-level exams are a good option if you’re open to studying
                outside WB. Keep scanned documents ready and follow the official admission portal dates strictly.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">University Level Hotel Management Entrance Exams – Official Links</h2>

          <div className="row g-3 g-md-4">
            {UNIVERSITY_HOTEL_EXAMS.map((item) => (
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
