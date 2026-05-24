"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout'; 
import ExamTabsBar from "../ExamTabsBar";
import { Layers3, Network, ExternalLink, Info, ShieldCheck, Anchor } from "lucide-react";

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
// Marine + Navy + Defence (Career Book list: AIMNET, IMU CET, CDS, Navy SSR, Army TES, NDA)
// IMPORTANT:
// - For Merchant Navy: ONLY list portals that are official/verification-safe.
// - AIMNET is commonly institute-run; there is no single govt “AIMNET official portal” to trust.
//   So we show it as "Institute-run screening test" and point users to DGS Approved Institutes list.
// -------------------------------------------------------------
const MARINE_NAVY_DEFENCE = [
  // ---------------------- MARINE ----------------------
  {
    sl: 1,
    group: "Marine (Merchant Navy)",
    exam: "IMU CET",
    fullForm: "Indian Maritime University Common Entrance Test",
    purpose:
      "Admissions to IMU UG/PG programmes (B.Tech / B.Sc / DNS etc.) and counselling (as notified)",
    eligibility: "As per IMU CET prospectus/notice",
    apply: "Online",
    activity: "As per IMU CET calendar",
    links: [
      { label: "IMU Admissions (Official)", href: "https://www.imu.edu.in/imunew/admissions-2025-26" },
      { label: "IMU CET Registration (Official)", href: "https://imu.cbexams.com/imu25cetl/regprocess.aspx" },
      { label: "IMU Main Website (Official)", href: "https://www.imu.edu.in/" },
    ],
    tag: "Marine • National",
  },
  {
    sl: 2,
    group: "Marine (Merchant Navy)",
    exam: "AIMNET (Institute-run screening)",
    fullForm: "All India Merchant Navy Entrance Test (used by some training institutes)",
    purpose:
      "Screening test used by some maritime training institutes for admissions (not a single govt counselling system)",
    eligibility: "Varies by institute/course",
    apply: "Via institute (verify institute approval first)",
    activity: "Varies",
    links: [
      {
        label: "DGS Approved Training Institutes (Verify Institute First)",
        href: "https://www.dgshipping.gov.in/Content/ApprovedTraininginstitutes.aspx",
      },
      {
        label: "DGS Main Site (Official)",
        href: "https://www.dgshipping.gov.in/",
      },
    ],
    tag: "Marine • Verify",
    note:
      "Before paying any fee to any maritime institute/agent, verify the institute is DGS-approved using the official DGS “Approved Training Institutes” list.",
  },

  // ---------------------- DEFENCE / NAVY ----------------------
  {
    sl: 3,
    group: "Navy & Defence (Govt)",
    exam: "NDA & NA (UPSC)",
    fullForm: "National Defence Academy & Naval Academy Examination",
    purpose:
      "Entry to NDA (Army/Navy/Air Force wings) + Naval Academy course (as per UPSC notification)",
    eligibility: "As per UPSC notification",
    apply: "Online (UPSC portal)",
    activity: "As per UPSC calendar",
    links: [
      {
        label: "UPSC NDA/NA Exam Page (Official)",
        href: "https://upsc.gov.in/examinations/National%20Defence%20Academy%20and%20Naval%20Academy%20Examination%20%28I%29%2C%202025",
      },
      { label: "UPSC Apply Online", href: "https://upsc.gov.in/apply-online" },
    ],
    tag: "Defence • National",
  },
  {
    sl: 4,
    group: "Navy & Defence (Govt)",
    exam: "CDS (UPSC)",
    fullForm: "Combined Defence Services Examination",
    purpose:
      "Entry to IMA / INA / AFA / OTA (as per UPSC notification and eligibility)",
    eligibility: "As per UPSC notification",
    apply: "Online (UPSC portal)",
    activity: "As per UPSC calendar",
    links: [
      {
        label: "UPSC Examinations (Official)",
        href: "https://upsc.gov.in/examinations",
      },
      { label: "UPSC Apply Online", href: "https://upsc.gov.in/apply-online" },
    ],
    tag: "Defence • National",
    note:
      "UPSC exam pages change each cycle. Use UPSC 'Examinations' page to open the latest CDS notification link.",
  },
  {
    sl: 5,
    group: "Navy & Defence (Govt)",
    exam: "Indian Navy Agniveer (SSR)",
    fullForm: "Agniveer (SSR) – Join Indian Navy",
    purpose:
      "Recruitment route for Sailor entry under Agniveer (SSR) as notified by Indian Navy",
    eligibility: "As per Join Indian Navy notification (varies by batch)",
    apply: "Online (official portals only)",
    activity: "As per Navy recruitment cycle",
    links: [
      { label: "Agniveer (SSR) – Join Indian Navy", href: "https://www.joinindiannavy.gov.in/en/page/agniveer-ssr.html" },
      { label: "Agniveer Navy Portal (CDAC)", href: "https://agniveernavy.cdac.in/" },
      { label: "Selection Procedure (SSR/MR)", href: "https://www.joinindiannavy.gov.in/page/selection-procedure-agniveer-ssr-and-agniveer-mr.html" },
    ],
    tag: "Navy • National",
  },
  {
    sl: 6,
    group: "Navy & Defence (Govt)",
    exam: "Indian Army 10+2 TES",
    fullForm: "Technical Entry Scheme (TES) – Indian Army (10+2)",
    purpose:
      "Officer entry route for PCM students through TES (as per latest notification)",
    eligibility: "As per TES notification",
    apply: "Online (Join Indian Army portal)",
    activity: "As per Army schedule",
    links: [
      { label: "Join Indian Army (Official)", href: "https://www.joinindianarmy.nic.in/" },
    ],
    tag: "Army • National",
    note:
      "TES runs by course number (TES-53/54/55...). Always open the latest TES notification on the official Join Indian Army site.",
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

      <div className="small text-muted mb-2">
        <div className="d-flex align-items-center gap-2 mb-2">
          <Anchor size={16} className="text-primary" />
          <strong className="text-dark">{item.group}</strong>
        </div>

        <h3 className="h6 fw-semibold mb-2 text-dark">{item.fullForm}</h3>

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
            <Info size={16} className="text-primary mt-1 flex-" />
            <div>{item.note}</div>
          </div>
        </div>
      )}

      <div className="mt-auto d-flex flex-column gap-2 pt-3">
        {item.links?.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="iitWebsiteLink d-inline-flex align-items-center gap-1"
          >
            <span className="">{l.label}</span>
            <ExternalLink size={14} />
          </a>
        ))}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
export default function MarineNavyDefencePage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Marine, Navy & Defence Exams"
        breadcrumb="Agri • Defence • School → Marine / Merchant Navy"
      />

      <ExamTabsBar tabs={EXAM_TABS} activeId="marine" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">Marine + Navy + Defence — Verified Entry Routes</h2>
              <p className="sectionSub mb-0">
                This page combines Merchant Navy routes (like IMU CET) with key Navy/Defence entries (UPSC NDA/CDS,
                Navy Agniveer SSR, Army TES). For Merchant Navy, the most important step is verifying institute approval
                through DGS before paying any fee.
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
                  <dd className="col-6 mb-2">{MARINE_NAVY_DEFENCE.length}</dd>

                  <dt className="col-6">Marine (official)</dt>
                  <dd className="col-6 mb-2">IMU CET</dd>

                  <dt className="col-6">Verify before pay</dt>
                  <dd className="col-6 mb-2">DGS approved institute list</dd>

                  <dt className="col-6">Defence/Navy</dt>
                  <dd className="col-6 mb-0">NDA, CDS, SSR, TES</dd>
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
                    <strong>Safety rule:</strong> For Merchant Navy admissions, verify the institute on the official
                    DGS list first. For UPSC/Navy/Army, use only official recruitment portals.
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
            <h2 className="sectionHeading mb-2">How These Exams Connect to Selection</h2>
            <p className="sectionSub mb-0">
              Merchant Navy routes usually go via admission + medical + training eligibility; Defence/Navy routes go via written/test stages + medical + merit.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Selection pathway</span>
                </span>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>IMU CET</strong> → exam → rank → counselling → seat allotment → medical/standards → admission
                  </li>
                  <li>
                    <strong>Merchant Navy (institute)</strong> → verify DGS approval → screening → medical → admission/training
                  </li>
                  <li>
                    <strong>UPSC (NDA/CDS)</strong> → written → SSB → medical → merit → academy training
                  </li>
                  <li>
                    <strong>Navy/Army entries</strong> → online application → stages as notified → medical → final merit
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>For West Bengal minority students:</strong> if you want Merchant Navy, keep IMU CET + one
                verified DGS-approved institute route. If you want Defence, keep NDA (after 12) as primary and TES/SSR
                as backup depending on stream eligibility.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">Official Links </h2>

          <div className="row g-3 g-md-4">
            {MARINE_NAVY_DEFENCE.map((item) => (
              <div key={`${item.exam}-${item.sl}`} className="col-12 col-md-6 d-flex">
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
