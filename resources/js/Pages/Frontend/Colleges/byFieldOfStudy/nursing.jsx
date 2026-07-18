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
  HeartPulse,
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
  {
    title: "Indian Nursing Council (INC) – Official",
    url: "https://www.indiannursingcouncil.org/",
  },
  {
    title: "INC – Nursing Institutes (Year-wise / Recognised lists)",
    url: "https://www.indiannursingcouncil.org/nursing-institute-for-the-year-2025-26",
  },
  {
    title: "INC Online Report – Institutions (State-wise)",
    url: "https://online.indiannursingcouncil.org/Reports/YearlyReportByState.aspx",
  },
  {
    title: "West Bengal Nursing Council (WBNC) – Official",
    url: "https://www.wbnc.in/",
  },
  {
    title: "WBJEEB – JENPAS(UG) (B.Sc Nursing + Allied)",
    url: "https://wbjeeb.nic.in/jenpas-ug/",
  },
  {
    title: "WBJEEB – ANM & GNM (Exam/Updates)",
    url: "https://wbjeeb.nic.in/anm-gnm/",
  },
  {
    title: "WBUHS – Nursing Colleges / Courses List (WB)",
    url: "https://wbuhs.ac.in/courses/nursing/?courseId=202",
  },
];

// -------------------------------------------------------------
// West Bengal spotlight – Nursing colleges (with official pages)
// (curated list, not exhaustive)
// -------------------------------------------------------------
// const WB_NURSING_SPOTLIGHT = [
//   {
//     no: 1,
//     name: "College of Nursing, Medical College & Hospital, Kolkata",
//     city: "Kolkata",
//     state: "West Bengal",
//     website: "https://www.medicalcollegekolkata.in/main/page/Nursing92f1da",
//   },
//   {
//     no: 2,
//     name: "College of Nursing / Nursing Training School – IPGMER & SSKM Hospital",
//     city: "Kolkata",
//     state: "West Bengal",
//     website: "https://www.ipgmer.gov.in/nursingcourses",
//   },
//   {
//     no: 3,
//     name: "Govt. College of Nursing – NRS Medical College & Hospital",
//     city: "Kolkata",
//     state: "West Bengal",
//     website: "https://nrsmc.edu.in/department/college-of-nursing",
//   },
//   {
//     no: 4,
//     name: "College of Nursing – R. G. Kar Medical College & Hospital",
//     city: "Kolkata",
//     state: "West Bengal",
//     website: "https://www.rgkarmch.in/page/cms/college_of_nursing_f9c354",
//   },
//   {
//     no: 5,
//     name: "College of Nursing – Calcutta National Medical College",
//     city: "Kolkata",
//     state: "West Bengal",
//     website: "https://www.cnmckolkata.com/",
//   },
//   {
//     no: 6,
//     name: "College of Nursing – North Bengal Medical College & Hospital",
//     city: "Sushrutanagar (Darjeeling)",
//     state: "West Bengal",
//     website: "https://nbmch.ac.in/",
//   },
// ];

// -------------------------------------------------------------
// PAGE
// -------------------------------------------------------------
export default function NursingCollegesPage({collegeContents}) {
  const WB_NURSING_SPOTLIGHT = Array.isArray(collegeContents) ? collegeContents : [];

  return (
    <>
    <FrontendLayout>
      <HeroInner title="Nursing Colleges in India" breadcrumb="Nursing Colleges" />

      <CollegeTabsBar tabs={COLLEGE_TABS} activeId="nursing" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <HeartPulse size={20} className="text-primary" />
                <span>About Nursing Colleges</span>
              </h2>

              <p className="sectionSub">
                Nursing education covers multiple pathways such as <strong>ANM</strong>, <strong>GNM</strong>,
                <strong> B.Sc Nursing</strong>, <strong>Post Basic B.Sc Nursing</strong> and <strong>M.Sc Nursing</strong>.
                Colleges may be attached to large teaching hospitals (for strong clinical exposure) or run as standalone
                nursing institutes.
              </p>

              <p className="sectionSub mb-0">
                For safe shortlisting: verify recognition and programme approvals using{" "}
                <strong>INC (Indian Nursing Council)</strong> + your <strong>State Nursing Council</strong>, then confirm
                admission rules on the official exam/counselling portals and the institute website.
              </p>
            </div>

            {/* ✅ Quick Snapshot (pattern preserved: clickable official links) */}
            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <dl className="row small mb-0">
                  <dt className="col-5">WB spotlight</dt>
                  <dd className="col-7 mb-2">{WB_NURSING_SPOTLIGHT.length} institutes shown</dd>

                  <dt className="col-5">Recognition</dt>
                  <dd className="col-7 mb-2">
                    <a
                      href="https://www.indiannursingcouncil.org/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>INC (Official)</span>
                      <ExternalLink size={14} />
                    </a>
                    <br />
                    <a
                      href="https://www.wbnc.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>WB Nursing Council (Official)</span>
                      <ExternalLink size={14} />
                    </a>
                  </dd>

                  <dt className="col-5">WB admissions</dt>
                  <dd className="col-7 mb-2">
                    <a
                      href="https://wbjeeb.nic.in/jenpas-ug/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>JENPAS(UG) – WBJEEB</span>
                      <ExternalLink size={14} />
                    </a>
                    <br />
                    <a
                      href="https://wbjeeb.nic.in/anm-gnm/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>ANM & GNM – WBJEEB</span>
                      <ExternalLink size={14} />
                    </a>
                  </dd>

                  <dt className="col-5">Verification</dt>
                  <dd className="col-7 mb-0">
                    <a
                      href="https://online.indiannursingcouncil.org/Reports/YearlyReportByState.aspx"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <ShieldCheck size={14} className="text-primary" />
                      <span>INC Institutions Report</span>
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
              Open official sources to verify recognised nursing institutions, programme approvals, and admissions.
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

      {/* 3) PROGRAMMES & ROUTES – DARK BOXES */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">Programmes & Admission Routes</h2>
            <p className="sectionSub mb-0">
              Understand key nursing pathways and how to verify recognition and admissions using official sources.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* LEFT – pathways */}
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Programme pathways</span>
                </span>

                <p className="small mb-3">
                  Nursing programmes differ by level and entry route. Always confirm eligibility + current-year rules on
                  the official board/authority notifications.
                </p>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>ANM</strong> – foundational nursing & midwifery track (entry rules vary by state).
                  </li>
                  <li>
                    <strong>GNM</strong> – diploma pathway with strong clinical exposure.
                  </li>
                  <li>
                    <strong>B.Sc Nursing</strong> – core undergraduate nursing degree.
                  </li>
                  <li>
                    <strong>Post Basic B.Sc Nursing</strong> – bridge programme for eligible candidates.
                  </li>
                  <li>
                    <strong>M.Sc Nursing</strong> – postgraduate specialisation tracks.
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT – cards */}
            <div className="col-12 col-lg-7 d-flex">
              <div className="row g-3 w-100 align-content-stretch">
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Recognition</span>
                      <span className="nitExamLevel">INC</span>
                    </div>
                    <p className="nitExamTitle mb-1">Verify recognised institutes</p>
                    <p className="nitExamText mb-0">
                      Use INC “nursing institutes” pages and the online state-wise report before shortlisting.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">State Council</span>
                      <span className="nitExamLevel">WBNC</span>
                    </div>
                    <p className="nitExamTitle mb-1">State-level registration</p>
                    <p className="nitExamText mb-0">
                      Nursing councils manage registration/renewal and publish important notices.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">WB Admissions</span>
                      <span className="nitExamLevel">UG</span>
                    </div>
                    <p className="nitExamTitle mb-1">JENPAS(UG)</p>
                    <p className="nitExamText mb-0">
                      WBJEEB conducts JENPAS(UG) for B.Sc Nursing and allied health UG admissions (as notified).
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">ANM / GNM</span>
                      <span className="nitExamLevel">WB</span>
                    </div>
                    <p className="nitExamTitle mb-1">ANM & GNM updates</p>
                    <p className="nitExamText mb-0">
                      Follow WBJEEB updates for ANM/GNM (dates, eligibility, notices) as notified.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            <a href="https://www.indiannursingcouncil.org/" target="_blank" rel="noreferrer" className="btn btn-primary">
              INC (Official) <ExternalLink size={16} className="ms-1" />
            </a>
            <a
              href="https://online.indiannursingcouncil.org/Reports/YearlyReportByState.aspx"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              INC Institutions Report <ExternalLink size={16} className="ms-1" />
            </a>
            <a href="https://wbjeeb.nic.in/jenpas-ug/" target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              JENPAS(UG) – WBJEEB <ExternalLink size={16} className="ms-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 4) WB SPOTLIGHT GRID */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">West Bengal – Nursing Colleges (Spotlight)</h2>
              <p className="sectionSub mb-0">Curated list with official pages/websites for quick verification.</p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {WB_NURSING_SPOTLIGHT.map((inst) => (
              <div key={inst.no} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="iitCard w-100 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="iitRank">#{inst.no}</span>
                    <span className="iitCodeBadge">{inst.city}</span>
                  </div>

                  <div className="mb-3">
                    <h3 className="h6 fw-semibold mb-1 text-dark d-flex  gap-2">
                      <HeartPulse size={16} className="text-primary flex-shrink-0" />
                      <span>{inst.name}</span>
                    </h3>

                    <p className="small text-muted mb-0 d-flex align-items-center gap-1">
                      <MapPin size={14} className="text-primary" />
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
              Start with INC + your State Nursing Council for recognition/registration. Then follow the official
              exam/counselling portals and confirm details on each institute’s website.
            </p>
            <p className="mb-0 text-muted">
              Always cross-check intake, eligibility, internship/clinical posting, hostel, fees and current-year notices
              from official sources.
            </p>
          </div>
        </div>
      </section>

    </FrontendLayout>
    </>
  );
}
