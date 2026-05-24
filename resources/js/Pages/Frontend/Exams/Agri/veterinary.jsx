"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';  
import ExamTabsBar from "../ExamTabsBar";
import { Layers3, Network, ExternalLink, Info, ShieldCheck } from "lucide-react";

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
// Veterinary entrance routes (Career Book list) + official portals
// Rule: use only official/working links.
// -------------------------------------------------------------
const VET_EXAMS = [
  {
    sl: 1,
    exam: "VCI Admission & eCounselling (BVSc & AH)",
    fullForm: "Veterinary Council of India – Admission & eCounselling",
    purpose:
      "Central counselling and information for veterinary admissions (seat matrix, allotment, notices) as published by VCI portal",
    eligibility: "As per VCI notices / information bulletin",
    apply: "Online",
    activity: "As per VCI schedule",
    links: [
      { label: "VCI Admission & eCounselling (Official)", href: "https://vci.admissions.nic.in/" },
      { label: "VCI Main Site (Official)", href: "https://vci.dahd.gov.in/" },
      { label: "VCI Help: How to Register/Login", href: "https://vci.admissions.nic.in/how-to-register-and-login/" },
    ],
    tag: "National",
    note:
      "For the latest counselling rules (seat matrix, category rules, documents), rely on the VCI portal notices and information bulletin only.",
  },

  {
    sl: 2,
    exam: "KEAM (Kerala CEE) – Veterinary/Allied Admissions",
    fullForm: "CEE Kerala – KEAM Admission Process",
    purpose:
      "Admissions to professional programmes including veterinary/allied streams in Kerala (as notified by CEE Kerala)",
    eligibility: "As per CEE Kerala rules",
    apply: "Online",
    activity: "As per KEAM cycle",
    links: [
      { label: "CEE Kerala Candidate Portal (Official)", href: "https://cee.kerala.gov.in/main.php" },
      { label: "KEAM 2025 Portal (Official)", href: "https://cee.kerala.gov.in/keam2025/" },
      { label: "KEAM (Main) Page (Official)", href: "https://www.cee.kerala.gov.in/KEAM/" },
    ],
    tag: "State • Kerala",
  },

  {
    sl: 3,
    exam: "AP EAPCET (APSCHE) – Veterinary/Allied Routes",
    fullForm: "Andhra Pradesh Engineering, Agriculture & Pharmacy Common Entrance Test",
    purpose:
      "State entrance route for professional programmes in AP; check notifications for veterinary/allied options (as notified)",
    eligibility: "As per APSCHE rules",
    apply: "Online",
    activity: "As per AP EAPCET calendar",
    links: [
      { label: "AP EAPCET – Official (APSCHE)", href: "https://cets.apsche.ap.gov.in/EAPCET/" },
      { label: "APSCHE CETS Portal (Official)", href: "https://cets.apsche.ap.gov.in/" },
    ],
    tag: "State • AP",
  },

  {
    sl: 4,
    exam: "KCET / UGCET (KEA) – Veterinary/Farm Science",
    fullForm: "Karnataka Examinations Authority – UG CET",
    purpose:
      "Admissions to professional programmes including farm science/veterinary-related options (as notified by KEA)",
    eligibility: "As per KEA rules",
    apply: "Online",
    activity: "As per KEA schedule",
    links: [{ label: "KEA Official Portal", href: "https://cetonline.karnataka.gov.in/kea/" }],
    tag: "State • Karnataka",
    note:
      "KEA regularly alerts about fake sites—use only the official cetonline.karnataka.gov.in domain.",
  },

  {
    sl: 5,
    exam: "JCECE (Jharkhand) – Veterinary/Allied Admissions",
    fullForm: "Jharkhand Combined Entrance Competitive Examination Board (JCECEB)",
    purpose:
      "State entrance/counselling authority for multiple professional admissions in Jharkhand (as notified)",
    eligibility: "As per JCECEB notices",
    apply: "Online",
    activity: "As per JCECEB calendar",
    links: [
      { label: "JCECEB Official Site", href: "https://jceceb.jharkhand.gov.in/" },
      { label: "JCECEB Admit Card/Notices", href: "https://jceceb.jharkhand.gov.in/Links/admit_card.aspx" },
    ],
    tag: "State • Jharkhand",
  },

  {
    sl: 6,
    exam: "RPVT (Rajasthan)",
    fullForm: "Rajasthan Pre-Veterinary Test – RAJUVAS",
    purpose: "Admission to BVSc & AH programmes in Rajasthan (as notified by RAJUVAS)",
    eligibility: "As per RPVT information bulletin",
    apply: "Online",
    activity: "As per RPVT cycle",
    links: [
      { label: "RAJUVAS Main Site (Official)", href: "https://rajuvas.ac.in/" },
      { label: "RPVT Information Bulletin (Official PDF)", href: "https://rajuvas.ac.in/wp-content/uploads/2025/04/Information-Booklet-RPVT-2025.pdf" },
    ],
    tag: "State • Rajasthan",
  },

  {
    sl: 7,
    exam: "OUAT Admissions – Veterinary Route",
    fullForm: "Odisha University of Agriculture & Technology – Admissions",
    purpose:
      "Admissions to OUAT programmes including BVSc & AH (as notified by OUAT)",
    eligibility: "As per OUAT rules",
    apply: "Online",
    activity: "As per OUAT admission notices",
    links: [
      { label: "OUAT Admissions (Official)", href: "https://ouat.ac.in/en/admissions/" },
      { label: "OUAT Main Site (Official)", href: "https://ouat.ac.in/en/" },
    ],
    tag: "University",
  },

  {
    sl: 8,
    exam: "AAU VET Admissions (Assam Agricultural University)",
    fullForm: "Assam Agricultural University – Admission Portal",
    purpose:
      "Admissions to AAU including Faculty of Veterinary Science routes (as notified by AAU)",
    eligibility: "As per AAU admission bulletin",
    apply: "Online",
    activity: "As per AAU admission schedule",
    links: [
      { label: "AAU Admission Portal (Official)", href: "https://admission.aau.ac.in/" },
      { label: "AAU Admission Page (Official)", href: "https://www.aau.ac.in/admission" },
      { label: "AAU Main Site (Official)", href: "https://aau.ac.in/" },
    ],
    tag: "University • Assam",
  },

  {
    sl: 9,
    exam: "UPCATET (UP) – Veterinary/Agri/Allied",
    fullForm: "U.P. Combined Agriculture & Technology Entrance Test",
    purpose:
      "Admission to agriculture & allied programmes including veterinary-related options (as notified)",
    eligibility: "As per UPCATET notification",
    apply: "Online",
    activity: "As per UPCATET calendar",
    links: [
      { label: "UPCATET Official Portal", href: "https://upcatet.net/" },
    ],
    tag: "State • UP",
  },

  {
    sl: 10,
    exam: "UP VEE / DUVASU Admissions (Mathura)",
    fullForm: "DUVASU (UP Veterinary University) – Admissions",
    purpose:
      "Admissions for BVSc & AH and other programmes through university admission process (as notified by DUVASU)",
    eligibility: "As per DUVASU prospectus",
    apply: "Online",
    activity: "As per DUVASU admission notices",
    links: [
      { label: "DUVASU Official Website", href: "https://upvetuniv.edu.in/" },
      { label: "DUVASU Admissions Page (Official)", href: "https://upvetuniv.edu.in/admission/" },
    ],
    tag: "University • UP",
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
export default function VeterinaryExamsPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner title="Veterinary Entrance Exams" breadcrumb="Agri • Defence • School → Veterinary Science" />

      <ExamTabsBar tabs={EXAM_TABS} activeId="veterinary" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">Veterinary Science (BVSc & AH) — Entrance & Admission Routes</h2>
              <p className="sectionSub mb-0">
                Veterinary admissions are handled through national counselling/portals and state/university admission systems.
                Always rely on official notices for eligibility, documents, counselling and seat allotment.
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
                  <dd className="col-6 mb-2">{VET_EXAMS.length}</dd>

                  <dt className="col-6">National portal</dt>
                  <dd className="col-6 mb-2">VCI counselling</dd>

                  <dt className="col-6">State/University</dt>
                  <dd className="col-6 mb-2">RPVT, OUAT, AAU, UPCATET, DUVASU</dd>

                  <dt className="col-6">Rule</dt>
                  <dd className="col-6 mb-0">Only official links</dd>
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
                    Avoid agents and unofficial “registration” sites. Use only government/university domains shown below,
                    and cross-check dates from the official notice PDFs/portals.
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
            <h2 className="sectionHeading mb-2">How Veterinary Exams Connect to Admissions</h2>
            <p className="sectionSub mb-0">
              Typical flow: apply → exam/score (where applicable) → merit/rank → counselling/choice filling → seat allotment →
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
                    <strong>National counselling</strong> → register → choice filling → allotment → reporting
                  </li>
                  <li>
                    <strong>State tests</strong> (e.g., RPVT) → exam → rank → counselling → reporting
                  </li>
                  <li>
                    <strong>University admissions</strong> → portal → merit/counselling as notified
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>For West Bengal minority students:</strong> if you plan veterinary, keep at least two tracks open:
                (1) national counselling route and (2) one university/state route where you’re eligible. Keep documents ready
                (HS marksheet, photo ID, category/income certificates if applicable).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">Veterinary Exams – Official Links</h2>

          <div className="row g-3 g-md-4">
            {VET_EXAMS.map((item) => (
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
