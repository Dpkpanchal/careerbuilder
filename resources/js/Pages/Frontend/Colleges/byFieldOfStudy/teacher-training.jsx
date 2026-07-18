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
  GraduationCap,
  School,
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
  // Recognition / approvals (official)
  { title: "NCTE – National Council for Teacher Education (Official)", url: "https://ncte.gov.in/" },
  { title: "NCTE – Recognised Institutions / Search (Official)", url: "https://ncte.gov.in/website/recognised_institutions.aspx" },

  // Integrated teacher education route (official)
  { title: "NCET (NTA) – National Common Entrance Test (Official)", url: "https://ncet.samarth.ac.in/" },

  // Eligibility tests (official)
  { title: "CTET – Central Teacher Eligibility Test (Official)", url: "https://ctet.nic.in/" },

  // West Bengal-specific (official)
  { title: "WBUTTEPA (Official) – Teacher Education University (WB)", url: "https://wbuttepa.ac.in/" },
  { title: "WBBPE (Official) – Primary Education Board (WB)", url: "https://wbbpe.org/" },

  // Reference ranking
  { title: "NIRF 2025 – Education Ranking (Reference)", url: "https://www.nirfindia.org/Rankings/2025/EducationRanking.html" },
];

// -------------------------------------------------------------
// West Bengal spotlight – Teacher Education / B.Ed ecosystem
// (curated list with official websites)
// -------------------------------------------------------------
// const WB_BED_SPOTLIGHT = [
//   {
//     no: 1,
//     name: "West Bengal University of Teachers' Training, Education Planning and Administration (WBUTTEPA)",
//     city: "Kolkata",
//     state: "West Bengal",
//     website: "https://wbuttepa.ac.in/",
//   },
//   {
//     no: 2,
//     name: "University of Calcutta (Education / Teacher Education ecosystem)",
//     city: "Kolkata",
//     state: "West Bengal",
//     website: "https://www.caluniv.ac.in/",
//   },
//   {
//     no: 3,
//     name: "Jadavpur University (Education / allied departments)",
//     city: "Kolkata",
//     state: "West Bengal",
//     website: "https://jadavpuruniversity.in/",
//   },
//   {
//     no: 4,
//     name: "University of North Bengal (Education / affiliated ecosystem)",
//     city: "Siliguri (Darjeeling)",
//     state: "West Bengal",
//     website: "https://www.nbu.ac.in/",
//   },
//   {
//     no: 5,
//     name: "Burdwan University (Education / affiliated ecosystem)",
//     city: "Purba Bardhaman",
//     state: "West Bengal",
//     website: "https://www.buruniv.ac.in/",
//   },
// ];

// -------------------------------------------------------------
// PAGE
// -------------------------------------------------------------
export default function TeacherTrainingBEdCollegesPage({collegeContents}) {
  const WB_BED_SPOTLIGHT = Array.isArray(collegeContents) ? collegeContents : [];

  return (
    <>
    <FrontendLayout>
      <HeroInner title="Teacher Training / B.Ed Colleges in India" breadcrumb="Teacher Training / B.Ed Colleges" />

      <CollegeTabsBar tabs={COLLEGE_TABS} activeId="teacher-training" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <GraduationCap size={20} className="text-primary" />
                <span>About Teacher Training / B.Ed</span>
              </h2>

              <p className="sectionSub">
                Teacher education includes programmes like <strong>B.Ed</strong> (teacher training for secondary/senior
                secondary levels), <strong>D.El.Ed</strong> (elementary education), and newer integrated options such as{" "}
                <strong>4-year Integrated Teacher Education Programme (ITEP)</strong> where notified.
              </p>

              <p className="sectionSub mb-0">
                Before admission, always verify the institute/programme using <strong>NCTE recognition</strong>, then
                check the latest admission rules on university/state portals and official institute websites. For future
                teaching eligibility, follow official updates for <strong>CTET/TET</strong> as applicable.
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
                  <dd className="col-7 mb-2">{WB_BED_SPOTLIGHT.length} institutes shown</dd>

                  <dt className="col-5">Recognition</dt>
                  <dd className="col-7 mb-2">
                    <a
                      href="https://ncte.gov.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>NCTE (Official)</span>
                      <ExternalLink size={14} />
                    </a>
                    <br />
                    <a
                      href="https://ncte.gov.in/website/recognised_institutions.aspx"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>NCTE Recognised Institutions</span>
                      <ExternalLink size={14} />
                    </a>
                  </dd>

                  <dt className="col-5">Key route</dt>
                  <dd className="col-7 mb-2">
                    <a
                      href="https://ncet.samarth.ac.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>NCET (NTA) – ITEP</span>
                      <ExternalLink size={14} />
                    </a>
                  </dd>

                  <dt className="col-5">Verification</dt>
                  <dd className="col-7 mb-0">
                    <a
                      href="https://ncte.gov.in/website/recognised_institutions.aspx"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <ShieldCheck size={14} className="text-primary" />
                      <span>Use NCTE + official university portals</span>
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
              Use official sources to verify recognition, understand admissions, and track eligibility tests.
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
              Key teacher-training pathways and the safest verification + admission workflow.
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
                  Teacher education differs by level (elementary vs secondary) and by admission route (university/state
                  rules). Always verify recognition first using NCTE.
                </p>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>B.Ed</strong> – teacher training for secondary/senior secondary levels.
                  </li>
                  <li>
                    <strong>D.El.Ed</strong> – elementary education route (where offered).
                  </li>
                  <li>
                    <strong>ITEP (4-year integrated)</strong> – integrated pathway (via NCET where notified).
                  </li>
                  <li>
                    <strong>M.Ed</strong> – postgraduate teacher education.
                  </li>
                  <li>
                    <strong>Research / PhD (Education)</strong> – research and academic track.
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
                      <span className="nitExamTag">NCTE</span>
                      <span className="nitExamLevel">Official</span>
                    </div>
                    <p className="nitExamTitle mb-1">Recognition check</p>
                    <p className="nitExamText mb-0">
                      Verify the institute and programme recognition using NCTE recognised institutions.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Admissions</span>
                      <span className="nitExamLevel">Varies</span>
                    </div>
                    <p className="nitExamTitle mb-1">University / state rules</p>
                    <p className="nitExamText mb-0">
                      Many admissions are run by universities or state portals. Always follow the latest notifications.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">NCET</span>
                      <span className="nitExamLevel">ITEP</span>
                    </div>
                    <p className="nitExamTitle mb-1">Integrated teacher education</p>
                    <p className="nitExamText mb-0">
                      Track NCET for integrated teacher education routes where notified.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">CTET/TET</span>
                      <span className="nitExamLevel">Eligibility</span>
                    </div>
                    <p className="nitExamTitle mb-1">Teaching eligibility tests</p>
                    <p className="nitExamText mb-0">
                      Follow CTET/TET official updates as required for teaching eligibility and recruitment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            <a href="https://ncte.gov.in/" target="_blank" rel="noreferrer" className="btn btn-primary">
              NCTE (Official) <ExternalLink size={16} className="ms-1" />
            </a>
            <a
              href="https://ncte.gov.in/website/recognised_institutions.aspx"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              NCTE Recognised Institutions <ExternalLink size={16} className="ms-1" />
            </a>
            <a href="https://ctet.nic.in/" target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              CTET (Official) <ExternalLink size={16} className="ms-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 4) WB SPOTLIGHT GRID */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">West Bengal – Teacher Education (Spotlight)</h2>
              <p className="sectionSub mb-0">Curated ecosystem institutions with official websites for verification.</p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {WB_BED_SPOTLIGHT.map((inst) => (
              <div key={inst.no} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="iitCard w-100 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="iitRank">#{inst.no}</span>
                    <span className="iitCodeBadge">{inst.city}</span>
                  </div>

                  <div className="mb-3">
                    <h3 className="h6 fw-semibold mb-1 text-dark d-flex  gap-2">
                      <School size={16} className="text-primary flex-shrink-0" />
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
              Start with NCTE to verify recognition. Then follow your target university/state admission notifications for
              application dates, eligibility, merit rules and counselling steps. For teaching eligibility, track CTET/TET
              notifications as applicable.
            </p>
            <p className="mb-0 text-muted">
              Always cross-check seat intake, fees, internship/school attachment, and current-year notices on the official
              institute website.
            </p>
          </div>
        </div>
      </section>
      </FrontendLayout> 
    </>
  );
}
