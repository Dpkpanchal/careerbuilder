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
// Agriculture entrance exams (based on Career Book list)
// NOTE: Some items are “routes” used for Agriculture & Allied Sciences.
// We only put official/working links.
// -------------------------------------------------------------
const AGRI_EXAMS = [
  {
    sl: 1,
    exam: "WBJEE (WBJEEB)",
    fullForm: "West Bengal Joint Entrance Examination",
    purpose: "Admissions in participating institutes (some allied/Agri-related programmes where applicable)",
    eligibility: "As per WBJEEB rules",
    apply: "Online",
    activity: "As per WBJEEB calendar",
    links: [
      { label: "WBJEE – Official (WBJEEB)", href: "https://wbjeeb.nic.in/wbjee/" },
      { label: "WBJEEB Main Site", href: "https://wbjeeb.nic.in/" },
      { label: "WBJEEB e-Services", href: "https://wbjeeb.nic.in/ewbjee/" },
    ],
    tag: "WB • State",
  },

  {
    sl: 2,
    exam: "ICAR AIEEA (UG/PG/PhD)",
    fullForm: "All India Entrance Examinations for Agricultural Courses (NTA for ICAR)",
    purpose: "National-level admission route for Agriculture & Allied Sciences programmes (as notified)",
    eligibility: "As per NTA/ICAR notifications",
    apply: "Online",
    activity: "As per NTA/ICAR schedule",
    links: [
      { label: "ICAR AIEEA – Official (NTA)", href: "https://icar.nta.ac.in/" },
      { label: "NTA ICAR Exam Page", href: "https://www.nta.ac.in/Icarexam" },
      { label: "ICAR Main Site", href: "https://www.icar.org.in/" },
    ],
    tag: "National",
  },

  {
    sl: 3,
    exam: "KEAM (Kerala CEE)",
    fullForm: "Kerala Engineering / Agriculture / Medical Admission Process (CEE Kerala)",
    purpose: "Admissions to Agriculture/Forestry/Veterinary/Fisheries and other professional programmes (as notified)",
    eligibility: "As per CEE Kerala rules",
    apply: "Online",
    activity: "As per KEAM cycle",
    links: [
      { label: "CEE Kerala Candidate Portal", href: "https://cee.kerala.gov.in/main.php" },
      { label: "KEAM 2025 Portal", href: "https://cee.kerala.gov.in/keam2025/" },
      { label: "KEAM Notifications (2025)", href: "https://cee.kerala.gov.in/keam2025/notification" },
      { label: "KEAM 2026 Page (if applicable)", href: "https://www.cee.kerala.gov.in/KEAM/" },
    ],
    tag: "State • Kerala",
  },

  {
    sl: 4,
    exam: "KCET / UGCET (KEA)",
    fullForm: "Karnataka Common Entrance Test / UG CET (KEA)",
    purpose: "Admissions to professional programmes including Farm Science and allied streams (as notified by KEA)",
    eligibility: "As per KEA rules",
    apply: "Online",
    activity: "As per KEA schedule",
    links: [{ label: "KEA Official Portal", href: "https://cetonline.karnataka.gov.in/kea/" }],
    tag: "State • Karnataka",
    note:
      "KEA warns about fake websites—use only the official cetonline.karnataka.gov.in domain for forms/notices.",
  },

  {
    sl: 5,
    exam: "AP EAPCET (APSCHE)",
    fullForm: "Andhra Pradesh Engineering, Agriculture & Pharmacy Common Entrance Test",
    purpose: "Admissions in Engineering/Agriculture/Pharmacy streams in Andhra Pradesh (as notified)",
    eligibility: "As per APSCHE rules",
    apply: "Online",
    activity: "As per AP EAPCET calendar",
    links: [
      { label: "AP EAPCET – Official (APSCHE)", href: "https://cets.apsche.ap.gov.in/EAPCET/" },
      { label: "APSCHE CETS Portal", href: "https://cets.apsche.ap.gov.in/" },
    ],
    tag: "State • AP",
  },

  {
    sl: 6,
    exam: "Tripura JEE (TBJEE)",
    fullForm: "Tripura Joint Entrance Examination",
    purpose: "Admissions to Engineering/Agri/Veterinary and other professional courses in Tripura (as notified)",
    eligibility: "As per TBJEE rules",
    apply: "Online",
    activity: "As per TJEE calendar",
    links: [
      { label: "TBJEE Official Site", href: "https://tbjee.nic.in/" },
      { label: "TJEE Online Portal", href: "https://jeeonline.tripura.gov.in/" },
    ],
    tag: "State • Tripura",
  },

  {
    sl: 7,
    exam: "BHU UG Admissions (CUET route)",
    fullForm: "Banaras Hindu University – UG Admissions Portal",
    purpose: "UG admissions including relevant Agriculture/Science routes (as notified by BHU)",
    eligibility: "As per BHU rules",
    apply: "Online",
    activity: "As per BHU admission cycle",
    links: [
      { label: "BHU Admission & Counselling", href: "https://www.bhu.ac.in/Site/AdmissionCounselling/1_2_16_Main-Site" },
      { label: "BHU CUET UG Portal", href: "https://bhucuet.samarth.edu.in/" },
    ],
    tag: "University",
  },

  {
    sl: 8,
    exam: "OUAT Admissions",
    fullForm: "Odisha University of Agriculture & Technology – Admissions",
    purpose: "UG/PG Agriculture & allied admissions (as notified by OUAT)",
    eligibility: "As per OUAT rules",
    apply: "Online",
    activity: "As per OUAT admissions notices",
    links: [
      { label: "OUAT Admissions (Official)", href: "https://ouat.ac.in/en/admissions/" },
      { label: "OUAT Main Site", href: "https://ouat.ac.in/en/" },
    ],
    tag: "University",
  },

  {
    sl: 9,
    exam: "HORTICET (Dr. YSRHU)",
    fullForm: "Horticulture Common Entrance Test – Dr. Y.S.R. Horticultural University",
    purpose: "Admissions into B.Sc (Hons) Horticulture and related programmes (as notified)",
    eligibility: "As per Dr. YSRHU rules",
    apply: "Online",
    activity: "As per HORTICET notifications",
    links: [
      { label: "Dr. YSRHU Admission Notifications", href: "https://drysrhu.ap.gov.in/AdmissionNotifications.html" },
      { label: "Dr. YSRHU Main Site", href: "https://drysrhu.ap.gov.in/" },
    ],
    tag: "State/University",
   
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
            <Info size={16} className="text-primary mt-1" />
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
            <span className="small">{l.label}</span>
            <ExternalLink size={14} />
          </a>
        ))}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
export default function AgricultureExamsPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner title="Agriculture Entrance Exams" breadcrumb="Agri • Defence • School → Agriculture" />

      <ExamTabsBar tabs={EXAM_TABS} activeId="agriculture" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">Agriculture & Allied Sciences — Entrance Routes</h2>
              <p className="sectionSub mb-0">
                Agriculture admissions happen via national routes (ICAR), state-level portals, and some university
                admission systems. Use only official portals for applications and counselling.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <dl className="row small mb-0">
                  <dt className="col-6">Exams/routes listed</dt>
                  <dd className="col-6 mb-2">{AGRI_EXAMS.length}</dd>

                  <dt className="col-6">National route</dt>
                  <dd className="col-6 mb-2">ICAR AIEEA</dd>

                  <dt className="col-6">Key WB route</dt>
                  <dd className="col-6 mb-2">WBJEEB</dd>

                  <dt className="col-6">Safety</dt>
                  <dd className="col-6 mb-0">Avoid agents / fake sites</dd>
                </dl>
              </div>
            </div>
          </div>

          {/* Safety note (short) */}
          <div className="row mt-3">
            <div className="col-12">
              <div className="sectionCard bg-light border small">
                <div className="d-flex align-items-start gap-2">
                  <ShieldCheck size={16} className="text-success mt-1" />
                  <div>
                    Always apply through <strong>official</strong> government/university domains. If a portal asks for
                    payment via unknown links/UPI IDs, stop and verify from the official notice.
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
            <h2 className="sectionHeading mb-2">How Agriculture Exams Connect to Admissions</h2>
            <p className="sectionSub mb-0">
              Typical flow: apply → exam/score (where applicable) → rank/merit list → counselling/choice filling → seat allotment →
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
                    <strong>National (ICAR)</strong> → exam → rank → counselling → allotment
                  </li>
                  <li>
                    <strong>State portals</strong> → exam/merit → counselling → college reporting
                  </li>
                  <li>
                    <strong>University admissions</strong> → portal → merit/counselling as notified
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>For West Bengal minority students:</strong> keep both options open — (1) WB routes for nearby
                colleges and (2) national ICAR route for wider choices. Keep documents ready: HS marksheet, photo ID,
                domicile/category/income certificates (if applicable), and scholarship documents.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">Agriculture Exams – Official Links</h2>

          <div className="row g-3 g-md-4">
            {AGRI_EXAMS.map((item) => (
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
