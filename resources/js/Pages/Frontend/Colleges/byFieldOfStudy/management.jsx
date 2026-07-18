"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CollegeTabsBar from "../CollegeTabsBar";
import {
  Layers3,
  Network,
  MapPin,
  ExternalLink,
  University,
  ShieldCheck,
  ArrowRight,
  BriefcaseBusiness,
} from "lucide-react";

// -------------------------------------------------------------
// Tabs – By Field of Study (same bar for all by-field pages)
// -------------------------------------------------------------
const COLLEGE_TABS = [
  {
    id: "engineering",
    label: "Engineering Colleges",
    href: '/colleges/engineering-colleges',
  },
  {
    id: "medical",
    label: "Medical & Paramedical",
    href: '/colleges/medical-paramedical-colleges',
  },
  {
    id: "nursing",
    label: "Nursing",
    href: '/colleges/nursing-colleges',
  },
  {
    id: "pharmacy",
    label: "Pharmacy",
    href: '/colleges/pharmacy-colleges',
  },
  {
    id: "management",
    label: "Management & Business",
    href: '/colleges/management-business-colleges',
  },
  {
    id: "law",
    label: "Law",
    href: '/colleges/law-colleges',
  },
  {
    id: "agriculture",
    label: "Agriculture & Veterinary",
    href: '/colleges/agriculture-veterinary-colleges',
  },
  {
    id: "teacher-training",
    label: "Teacher Training / B.Ed",
    href: '/colleges/teacher-training-bed-colleges',
  },
];

// -------------------------------------------------------------
// Official links (NO internal listing pages needed)
// -------------------------------------------------------------
const INSTITUTE_LINKS = [
  // Exams / admissions (official)
  { title: "CAT (MBA) – Official", url: "https://iimcat.ac.in/" },
  { title: "XAT – Official (XLRI)", url: "https://xatonline.in/" },
  { title: "CMAT – Official (NTA)", url: "https://cmat.nta.nic.in/" },
  { title: "SNAP – Official (Symbiosis)", url: "https://www.snaptest.org/" },

  // University verification (official)
  { title: "UGC – Central Universities (Official list)", url: "https://www.ugc.gov.in/universitydetails/university?type=ddmCMsxJZgXH2S%2Fm0uMOKQ%3D%3D" },
  { title: "UGC – State Universities (Official list)", url: "https://www.ugc.gov.in/universitydetails/university?type=LZ1FUMk6U2JWGNLvhWfVSA%3D%3D" },
  { title: "UGC – State Private Universities (Official list)", url: "https://www.ugc.gov.in/universitydetails/university?type=0wBmFB1Rb4JGVzq9UP%2FiOg%3D%3D" },
  { title: "UGC – Deemed to be University Portal", url: "https://deemed.ugc.ac.in/" },

  // Institutional approval (official)
  { title: "AICTE Approved Institutions (Official)", url: "https://www.aicte-india.org/education/institutions" },
];

// -------------------------------------------------------------
// West Bengal spotlight – Management & Business institutes
// (curated list with official websites)
// -------------------------------------------------------------
// const WB_MANAGEMENT_SPOTLIGHT = [
//   {
//     no: 1,
//     name: "Indian Institute of Management Calcutta (IIMC)",
//     city: "Kolkata",
//     state: "West Bengal",
//     website: "https://www.iimcal.ac.in/",
//   },
//   {
//     no: 2,
//     name: "Indian Institute of Foreign Trade (IIFT) – Kolkata Campus",
//     city: "Kolkata",
//     state: "West Bengal",
//     website: "https://www.iift.ac.in/",
//   },
//   {
//     no: 3,
//     name: "Indian Institute of Social Welfare & Business Management (IISWBM)",
//     city: "Kolkata",
//     state: "West Bengal",
//     website: "https://www.iiswbm.edu/",
//   },
//   {
//     no: 4,
//     name: "University of Calcutta – Dept. of Business Management",
//     city: "Kolkata",
//     state: "West Bengal",
//     website: "https://www.caluniv.ac.in/",
//   },
//   {
//     no: 5,
//     name: "Jadavpur University (Management / related departments)",
//     city: "Kolkata",
//     state: "West Bengal",
//     website: "https://jadavpuruniversity.in/",
//   },
//   {
//     no: 6,
//     name: "St. Xavier’s College, Kolkata (Autonomous)",
//     city: "Kolkata",
//     state: "West Bengal",
//     website: "https://www.sxccal.edu/",
//   },
//   {
//     no: 7,
//     name: "MAKAUT, West Bengal (University ecosystem for affiliated colleges)",
//     city: "Haringhata (Nadia)",
//     state: "West Bengal",
//     website: "https://makautwb.ac.in/",
//   },
// ];

// -------------------------------------------------------------
// PAGE
// -------------------------------------------------------------
export default function ManagementBusinessCollegesPage({collegeContents}) {
  const WB_MANAGEMENT_SPOTLIGHT = Array.isArray(collegeContents) ? collegeContents : [];

  return (
    <>
    <FrontendLayout>
      <HeroInner title="Management & Business Colleges in India" breadcrumb="Management & Business Colleges" />

      <CollegeTabsBar tabs={COLLEGE_TABS} activeId="management" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <BriefcaseBusiness size={20} className="text-primary" />
                <span>About Management & Business Colleges</span>
              </h2>

              <p className="sectionSub">
                Management & Business education includes <strong>BBA/BMS/BBM</strong> at the undergraduate level and{" "}
                <strong>MBA/PGDM</strong> at the postgraduate level, with specialisations like Marketing, Finance, HR,
                Operations, Strategy and Business Analytics.
              </p>

              <p className="sectionSub mb-0">
                Shortlist smartly: verify the institute’s status via <strong>UGC (universities)</strong> and{" "}
                <strong>AICTE (approved institutions)</strong>, then follow the official exam portals (CAT/XAT/CMAT/SNAP)
                and the institute website for the latest admissions, seats, fees and selection stages.
              </p>
            </div>

            {/* ✅ Quick Snapshot (pattern preserved: keep clickable links) */}
            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <dl className="row small mb-0">
                  <dt className="col-5">WB spotlight</dt>
                  <dd className="col-7 mb-2">{WB_MANAGEMENT_SPOTLIGHT.length} institutes shown</dd>

                  <dt className="col-5">Key UG route</dt>
                  <dd className="col-7 mb-2">CUET / university tests (as notified)</dd>

                  <dt className="col-5">Key PG exams</dt>
                  <dd className="col-7 mb-2">
                    <a
                      href="https://iimcat.ac.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>CAT (Official)</span>
                      <ExternalLink size={14} />
                    </a>
                    <br />
                    <a
                      href="https://xatonline.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>XAT (Official)</span>
                      <ExternalLink size={14} />
                    </a>
                    <br />
                    <a
                      href="https://cmat.nta.nic.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>CMAT (Official)</span>
                      <ExternalLink size={14} />
                    </a>
                  </dd>

                  <dt className="col-5">Verification</dt>
                  <dd className="col-7 mb-0">
                    <a
                      href="https://www.aicte-india.org/education/institutions"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <ShieldCheck size={14} className="text-primary" />
                      <span>AICTE Approved Institutions</span>
                      <ExternalLink size={14} />
                    </a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) BROWSE BY INSTITUTE TYPE – OFFICIAL LINKS (your UI) */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="border-top pt-4 mt-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <University size={18} className="text-primary" />
              <h3 className="h5 mb-0">Browse by Institute Type</h3>
            </div>

            <div className="text-muted mb-4" style={{ maxWidth: "90ch" }}>
              Open official sources for entrance exams, university lists and approval/verification.
            </div>

            <div className="row g-2 g-lg-3">
              {INSTITUTE_LINKS.map((item) => (
                <div key={item.url} className="col-12 col-md-6">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="d-flex align-items-center justify-content-between gap-3 px-3 py-3 rounded-4 border bg-light text-decoration-none linkRowHover"
                    style={{ transition: "all 0.2s ease" }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span
                        className="rounded-pill"
                        style={{
                          width: 10,
                          height: 10,
                          background: "var(--color-secondary)",
                          display: "inline-block",
                        }}
                      />
                      <span className="fw-semibold text-dark">{item.title}</span>
                    </div>

                    <ArrowRight size={18} className="text-primary" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3) PROGRAMMES & ENTRANCE TESTS – DARK BOXES */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">Programmes & Entrance Tests</h2>
            <p className="sectionSub mb-0">
              Understand management pathways and how entrance tests connect to admissions and selection stages.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* LEFT – Programme pathways */}
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Programme pathways</span>
                </span>

                <p className="small mb-3">
                  Institutes offer UG pathways (BBA/BMS/BBM), PG pathways (MBA/PGDM), and specialised tracks in finance,
                  marketing, HR, operations, analytics and more.
                </p>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>BBA / BMS / BBM</strong> – UG foundation in business and management.
                  </li>
                  <li>
                    <strong>Integrated MBA</strong> – combined UG+PG pathway in selected institutes.
                  </li>
                  <li>
                    <strong>MBA / PGDM</strong> – PG management programme with specialisations.
                  </li>
                  <li>
                    <strong>Executive / Working-professional MBA</strong> – for experienced candidates (as per institute rules).
                  </li>
                  <li>
                    <strong>Research / PhD (Management)</strong> – academic & research-oriented track.
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT – Exam cards */}
            <div className="col-12 col-lg-7 d-flex">
              <div className="row g-3 w-100 align-content-stretch">
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">CAT</span>
                      <span className="nitExamLevel">PG</span>
                    </div>
                    <p className="nitExamTitle mb-1">IIMs + many top B-schools</p>
                    <p className="nitExamText mb-0">
                      National-level test used for MBA/PGP admissions (selection stages vary by institute).
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">XAT</span>
                      <span className="nitExamLevel">PG</span>
                    </div>
                    <p className="nitExamTitle mb-1">XLRI + partner institutes</p>
                    <p className="nitExamText mb-0">
                      Widely accepted MBA/PGDM exam; check official portal for dates and process.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">CMAT</span>
                      <span className="nitExamLevel">PG</span>
                    </div>
                    <p className="nitExamTitle mb-1">AICTE-approved institutes</p>
                    <p className="nitExamText mb-0">
                      NTA CMAT score is accepted by AICTE-approved institutions and university departments.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">SNAP</span>
                      <span className="nitExamLevel">PG</span>
                    </div>
                    <p className="nitExamTitle mb-1">Symbiosis MBA admissions</p>
                    <p className="nitExamText mb-0">
                      Official pathway for Symbiosis MBA programmes (follow SNAP portal updates).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            <a href="https://iimcat.ac.in/" target="_blank" rel="noreferrer" className="btn btn-primary">
              CAT (Official) <ExternalLink size={16} className="ms-1" />
            </a>
            <a href="https://xatonline.in/" target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              XAT (Official) <ExternalLink size={16} className="ms-1" />
            </a>
            <a href="https://cmat.nta.nic.in/" target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              CMAT (Official) <ExternalLink size={16} className="ms-1" />
            </a>
            <a href="https://www.snaptest.org/" target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              SNAP (Official) <ExternalLink size={16} className="ms-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 4) WB SPOTLIGHT GRID */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">West Bengal – Management & Business (Spotlight)</h2>
              <p className="sectionSub mb-0">
                Curated institutions with official websites (for quick shortlisting and verification).
              </p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {WB_MANAGEMENT_SPOTLIGHT.map((inst) => (
              <div key={inst.no} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="iitCard w-100 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="iitRank">#{inst.no}</span>
                    <span className="iitCodeBadge">{inst.city}</span>
                  </div>

                  <div className="mb-3">
                    <h3 className="h6 fw-semibold mb-1 text-dark d-flex  gap-2">
                      <BriefcaseBusiness size={16} className="text-primary flex-shrink-0" />
                      <span>{inst.name}</span>
                    </h3>

                    <p className="small text-muted mb-0 d-flex align-items-center gap-1">
                      <MapPin size={14} className="text-primary flex-shrink-0" />
                      <span>
                        {inst.city}, {inst.state}
                      </span>
                    </p>
                  </div>

                  <div className="iitDivider my-2" />

                  <div className="mt-auto d-flex justify-content-between align-items-center flex-wrap">
                    <span className="small text-muted d-block mb-1">Official website</span>
                    <a
                      href={inst.website}
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                      title={inst.website}
                    >
                      <span>{inst.website}</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5) GUIDANCE NOTE */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="sectionCard bg-light border small">
            <h3 className="h6 mb-2">How to Use This Page</h3>
            <p className="mb-2">
              Start with official portals (CAT/XAT/CMAT/SNAP) for dates and process. Verify universities using UGC lists
              and approvals using AICTE links. Then shortlist based on fees, faculty, industry exposure, internships,
              placements and location.
            </p>
            <p className="mb-0 text-muted">
              Always check current-year notices (application windows, selection stages like WAT/PI, eligibility and fees)
              on the official institute websites.
            </p>
          </div>
        </div>
      </section>
            </FrontendLayout>
     
    </>
  );
}
