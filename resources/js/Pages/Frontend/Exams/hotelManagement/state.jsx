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
// STATE LEVEL HOTEL MANAGEMENT ENTRANCE EXAMS (from your dataset)
// - UPSEE BHMCT: current official route is UPTAC counselling; BHMCT shown under "Entrance Examinations".
// - UKSEE BHMCT: official UTU page exists (UKSEE).
// - MAH HM CET: official CET Cell page for BHMCT.
// - WBJEE HM (JEHOM): WBJEEB is official authority; JEHOM may be listed under "Examinations" when active.
// -------------------------------------------------------------
const STATE_HOTEL_EXAMS = [
  {
    sl: 1,
    exam: "UPSEE BHMCT",
    fullForm: "Uttar Pradesh State Entrance Examination – BHMCT Route",
    purpose: "Bachelor of Hotel Management and Catering Technology (BHMCT) admissions in UP",
    eligibility: "10+2 with 45% (SC/ST 40%)",
    apply: "Online",
    activity: "January (varies yearly)",
    sources: [
      { label: "UPTAC (official counselling portal)", href: "https://uptac.admissions.nic.in/" },
      { label: "UPTAC – Entrance Examinations (BHMCT listed)", href: "https://uptac.admissions.nic.in/entrance-examinations/" },
    ],
    tag: "State (UP)",
    note:
      "UPSEE name is used widely, but current admissions are routed via UPTAC (AKTU counselling). Always verify the BHMCT entry under UPTAC entrance examinations.",
  },
  {
    sl: 2,
    exam: "UKSEE BHMCT",
    fullForm: "Uttarakhand State Entrance Exam (UKSEE) – BHMCT",
    purpose: "BHMCT admissions in Uttarakhand (as notified)",
    eligibility: "10+2 with 50% with English as main/mandatory subject (as notified)",
    apply: "Online",
    activity: "April (varies yearly)",
    sources: [
      { label: "Uttarakhand Technical University (official)", href: "https://uktech.ac.in/" },
      { label: "UKSEE page (official)", href: "https://uktech.ac.in/en/page/uk-see-2022" },
    ],
    tag: "State (UK)",
  },
  {
    sl: 3,
    exam: "MAH HM CET",
    fullForm: "Maharashtra Hotel Management Common Entrance Test (MAH HM CET / BHMCT CET)",
    purpose: "Bachelor of Hotel Management & Catering Technology admissions in Maharashtra (CAP process)",
    eligibility: "10+2 (as notified by CET Cell)",
    apply: "Online",
    activity: "April (varies yearly)",
    sources: [
      { label: "CET Cell – BHMCT page (official)", href: "https://cetcell.mahacet.org/bachelor-of-hotel-management-and-catering-technology/" },
      { label: "CET Cell Maharashtra (official)", href: "https://cetcell.mahacet.org/" },
    ],
    tag: "State (MH)",
  },
  {
    sl: 4,
    exam: "WBJEE HM (JEHOM)",
    fullForm: "WBJEEB Joint Entrance for Hotel Management (JEHOM)",
    purpose: "Bachelor Degree in Hotel Management and Catering Technology (HMCT) admissions in West Bengal",
    eligibility: "10+2 with 45% in regular mode (as notified by WBJEEB)",
    apply: "Online",
    activity: "March to April (varies yearly)",
    sources: [
      { label: "WBJEEB – Examinations list (official)", href: "https://wbjeeb.nic.in/wbjee/" },
      { label: "WBJEEB Home (official)", href: "https://wbjeeb.nic.in/" },
    ],
    tag: "State (WB)",
    wbFocus: true,
    note:
      "JEHOM may not be active every year as a separate page. Use WBJEEB official site → Examinations, and follow the latest notice when JEHOM/HMCT is published.",
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
            <Info size={16} className="text-primary mt-1" />
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
export default function HotelManagementStatePage() {
  const wbCount = STATE_HOTEL_EXAMS.filter((x) => x.wbFocus).length;

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
                  <dd className="col-6 mb-2">{STATE_HOTEL_EXAMS.length}</dd>

                  <dt className="col-6">West Bengal focus</dt>
                  <dd className="col-6 mb-2">{wbCount ? "WBJEEB HM (JEHOM)" : "—"}</dd>

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
                updates. If JEHOM/HMCT notice is active, you’ll find it under WBJEEB → Examinations.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">State Level Hotel Management Entrance Exams – Official Links</h2>

          <div className="row g-3 g-md-4">
            {STATE_HOTEL_EXAMS.map((item) => (
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
