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
            <Info size={16} className="text-primary mt-1" />
            <div>{item.note}</div>
          </div>
        </div>
      )}

      <div className="mt-auto d-flex flex-column gap-2 pt-2">
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
// Page
// -------------------------------------------------------------
export default function HotelManagementStatePage({ examContents }) {

  const stateHotelExams = Array.isArray(examContents) ? examContents : [];
  const wbCount = stateHotelExams.filter((x) => x.wbFocus).length;
  const wbFocusExam = stateHotelExams.find((x) => x.wbFocus);

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Hotel Management Entrance Exams – State Level"
        breadcrumb="Hospitality & Tourism → State Level"
      />

      <ExamTabsBar tabs={EXAM_TABS} activeId="state" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">State Level Hotel Management Entrance Exams</h2>
              <p className="sectionSub mb-0">
                State-level hotel management entrance exams help students take admission into HMCT/BHMCT
                programmes in colleges of the respective state.
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
                  <dd className="col-6 mb-2">{stateHotelExams.length}</dd>

                  <dt className="col-6">West Bengal focus</dt>
                  <dd className="col-6 mb-2">{wbCount ? wbFocusExam.exam : "—"}</dd>

                  <dt className="col-6">Admission mode</dt>
                  <dd className="col-6 mb-0">Exam + counselling (state CAP)</dd>
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
            <h2 className="sectionHeading mb-2">How State Exams Connect to Admissions</h2>
            <p className="sectionSub mb-0">
              In most states: apply → entrance exam → result/rank → counselling → seat allotment → admission.
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
                    <strong>Apply</strong> on the state authority portal
                  </li>
                  <li>
                    <strong>Appear</strong> for the entrance test (as notified)
                  </li>
                  <li>
                    <strong>Result</strong> → rank/merit list
                  </li>
                  <li>
                    <strong>Counselling</strong> + choice filling
                  </li>
                  <li>
                    <strong>Final admission</strong> after verification + fee submission
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>West Bengal minority students:</strong> For WB, always track WBJEEB notices and counselling
                updates. If JEHOM/HMCT notice is active, you'll find it under WBJEEB → Examinations.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">State Level Hotel Management Entrance Exams – Official Links</h2>

          {stateHotelExams.length === 0 ? (
            <div className="sectionCard bg-light border text-center small text-muted">
              No exam data available right now. Please check back later.
            </div>
          ) : (
            <div className="row g-3 g-md-4">
              {stateHotelExams.map((item) => (
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
