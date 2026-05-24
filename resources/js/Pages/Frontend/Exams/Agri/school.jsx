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
  { id: "agriculture", label: "Agriculture", href: "/exams/agri/agriculture" },
  { id: "veterinary", label: "Veterinary Science", href: "/exams/agri/veterinary" },
  { id: "defence", label: "Defence & Marine", href: "/exams/agri/defence" },
  { id: "school", label: "School-level", href: "/exams/agri/school" },
];


const SCHOOL_EXAMS = [
  {
    sl: 1,
    exam: "NTSE",
    fullForm: "National Talent Search Examination (NTS Scheme) – NCERT",
    purpose:
      "Scholarship programme to identify and support talented school students (Stage I/II as notified)",
    eligibility: "As per NCERT notice (class/age rules vary by cycle/state)",
    apply: "As per NCERT / State authority process",
    activity: "As per NCERT notices",
    links: [
      { label: "NCERT – NTSE / NTS Scheme Page (Official)", href: "https://ncert.nic.in/national-talent-examination.php?ln=en" },
      { label: "India.gov.in – NTSE Service Listing", href: "https://services.india.gov.in/service/detail/apply-for-national-talent-search-scheme" },
      { label: "NCERT Main Site", href: "https://ncert.nic.in/" },
    ],
    tag: "Govt • Scholarship",
    note:
      "Dates/format may change. Always follow the latest notice on the NCERT NTSE page.",
  },

  {
    sl: 2,
    exam: "KVPY (Status Update)",
    fullForm: "Kishore Vaigyanik Protsahan Yojana – Fellowship route (Exam discontinued)",
    purpose:
      "Earlier a national fellowship route for science talent; the aptitude test has been discontinued from 2022 onwards and subsumed with INSPIRE (DST).",
    eligibility: "Replacement route runs under INSPIRE rules/notifications",
    apply: "Online (INSPIRE portal)",
    activity: "As per INSPIRE schedule",
    links: [
      { label: "INSPIRE Portal (Official – DST)", href: "https://online-inspire.gov.in/" },
      { label: "IISc UG Admission FAQ mentioning KVPY discontinued", href: "https://oir.iisc.ac.in/index.php/announcement-of-iisc-ug-program-b-sc-research-admission-2021-22-1/" },
    ],
    tag: "Govt • Fellowship",
    note:
      "We keep KVPY here because it appears in the Career Book, but the exam is not conducted now. Use INSPIRE for the current official fellowship route.",
  },

  {
    sl: 3,
    exam: "NSO (SOF)",
    fullForm: "National Science Olympiad – Science Olympiad Foundation (SOF)",
    purpose:
      "School olympiad competition to assess science reasoning and aptitude (classes 1–12)",
    eligibility: "As per SOF NSO rules",
    apply: "Through school / online as per SOF instructions",
    activity: "As per SOF schedule",
    links: [
      { label: "SOF – NSO Official Page", href: "https://sofworld.org/nso" },
      { label: "SOF Main Site", href: "https://sofworld.org/" },
      { label: "SOF Results Portal", href: "https://results.sofworld.org/results" },
    ],
    tag: "Olympiad",
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
export default function SchoolLevelExamsPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner title="School-level Scholarship / Talent Exams" breadcrumb="Agri • Defence • School → School-level" />

      <ExamTabsBar tabs={EXAM_TABS} activeId="school" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">Talent & Scholarship Exams (School Students)</h2>
              <p className="sectionSub mb-0">
                These exams help students get scholarships, recognition, and early exposure to competitive academics.
                Always verify the latest notice from the official portal before applying.
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
                  <dd className="col-6 mb-2">{SCHOOL_EXAMS.length}</dd>

                  <dt className="col-6">Govt scholarship</dt>
                  <dd className="col-6 mb-2">NTSE (NCERT)</dd>

                  <dt className="col-6">Fellowship route</dt>
                  <dd className="col-6 mb-2">INSPIRE (KVPY replaced)</dd>

                  <dt className="col-6">Olympiad</dt>
                  <dd className="col-6 mb-0">SOF NSO</dd>
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
                    Use only official portals for dates, application steps and fee payment. If any website/agent claims
                    “guaranteed selection” or asks for payment via unknown UPI IDs, ignore and verify from the official notice.
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
            <h2 className="sectionHeading mb-2">How School-level Exams Help Students</h2>
            <p className="sectionSub mb-0">
              Typical flow: apply → exam/selection process → results → scholarship/recognition → use benefits in higher studies.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Pathway</span>
                </span>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>NTSE</strong> → state stage → national stage (as notified) → scholarship
                  </li>
                  <li>
                    <strong>INSPIRE</strong> → application/selection → fellowship/benefits (as notified)
                  </li>
                  <li>
                    <strong>Olympiads</strong> (NSO etc.) → exam → medals/ranks → certificates/benefits
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>For West Bengal minority students:</strong> keep focus on (1) government scholarship routes (NTSE / INSPIRE),
                and (2) one olympiad (like NSO) to build confidence + certificates. Track school notices and official portals.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">Official Links</h2>

          <div className="row g-3 g-md-4">
            {SCHOOL_EXAMS.map((item) => (
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
