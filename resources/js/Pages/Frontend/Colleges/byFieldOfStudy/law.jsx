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
  Scale,
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
  // Admissions / exams (official)
  { title: "CLAT – Consortium of NLUs (Official)", url: "https://consortiumofnlus.ac.in/" },

  // Recognition / approvals (official)
  { title: "Bar Council of India (BCI) – Official", url: "https://www.barcouncilofindia.org/" },
  { title: "BCI – Recognised Universities/Colleges (Law Colleges/CLEs)", url: "https://www.barcouncilofindia.org/info/recognised-universities-colleges" },
  { title: "BCI – Affiliation & Recognition (Universities/Colleges)", url: "https://www.barcouncilofindia.org/info/affiliation-and-recognition-for-universities-and-colleges" },

  // Rankings (reference)
  { title: "NIRF 2025 – Law Ranking (Reference)", url: "https://www.nirfindia.org/Rankings/2025/LawRanking.html" },
];

// -------------------------------------------------------------
// West Bengal spotlight – Law colleges / NLUs (with official websites)
// (curated list, not exhaustive)
// -------------------------------------------------------------
// const WB_LAW_SPOTLIGHT = [
//   {
//     no: 1,
//     name: "The West Bengal National University of Juridical Sciences (NUJS)",
//     city: "Kolkata",
//     state: "West Bengal",
//     website: "https://www.nujs.edu/",
//   },
//   {
//     no: 2,
//     name: "University of Calcutta – Department of Law",
//     city: "Kolkata",
//     state: "West Bengal",
//     website: "https://www.caluniv.ac.in/",
//   },
//   {
//     no: 3,
//     name: "Aliah University (Law)",
//     city: "Kolkata",
//     state: "West Bengal",
//     website: "https://www.aliah.ac.in/",
//   },
//   {
//     no: 4,
//     name: "University of North Bengal (Law / affiliated ecosystem)",
//     city: "Siliguri (Darjeeling)",
//     state: "West Bengal",
//     website: "https://www.nbu.ac.in/",
//   },
//   {
//     no: 5,
//     name: "Burdwan University (Law / affiliated ecosystem)",
//     city: "Purba Bardhaman",
//     state: "West Bengal",
//     website: "https://www.buruniv.ac.in/",
//   },
// ];

// -------------------------------------------------------------
// PAGE
// -------------------------------------------------------------
export default function LawCollegesPage({collegeContents}) {
  const WB_LAW_SPOTLIGHT = Array.isArray(collegeContents) ? collegeContents : [];

  return (
    <>
    <FrontendLayout>
      <HeroInner title="Law Colleges in India" breadcrumb="Law Colleges" />

      <CollegeTabsBar tabs={COLLEGE_TABS} activeId="law" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Scale size={20} className="text-primary" />
                <span>About Law Colleges</span>
              </h2>

              <p className="sectionSub">
                Law education in India includes integrated UG programmes like <strong>B.A LL.B / BBA LL.B</strong>, the{" "}
                <strong>3-year LL.B</strong>, and postgraduate pathways like <strong>LL.M</strong>. Many top law schools
                are National Law Universities (NLUs), while several strong options are offered through universities and
                recognised colleges.
              </p>

              <p className="sectionSub mb-0">
                Always verify a law programme using <strong>BCI recognition/approval</strong> and confirm the latest
                admission route (CLAT/university tests/merit) through official notifications and the institute website.
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
                  <dd className="col-7 mb-2">{WB_LAW_SPOTLIGHT.length} institutes shown</dd>

                  <dt className="col-5">Key UG route</dt>
                  <dd className="col-7 mb-2">
                    <a
                      href="https://consortiumofnlus.ac.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>CLAT (Consortium of NLUs)</span>
                      <ExternalLink size={14} />
                    </a>
                  </dd>

                  <dt className="col-5">Recognition</dt>
                  <dd className="col-7 mb-2">
                    <a
                      href="https://www.barcouncilofindia.org/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>BCI (Official)</span>
                      <ExternalLink size={14} />
                    </a>
                  </dd>

                  <dt className="col-5">Verification</dt>
                  <dd className="col-7 mb-0">
                    <a
                      href="https://www.barcouncilofindia.org/info/recognised-universities-colleges"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <ShieldCheck size={14} className="text-primary" />
                      <span>BCI Recognised Law Colleges</span>
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
              Use official sources to verify recognised law colleges/universities and track the main admissions route.
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
            <h2 className="sectionHeading mb-2">Programmes & Admission Routes</h2>
            <p className="sectionSub mb-0">
              Understand key law pathways and how to verify recognition + admissions using official sources.
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
                  Law has both integrated UG programmes and graduate-entry programmes. Recognition/approval and current-year
                  admissions rules must be checked from official sources.
                </p>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>5-year integrated law</strong> – B.A LL.B / BBA LL.B / B.Com LL.B (as offered).
                  </li>
                  <li>
                    <strong>3-year LL.B</strong> – graduate-entry law programme (university/institute rules apply).
                  </li>
                  <li>
                    <strong>LL.M</strong> – postgraduate specialisation.
                  </li>
                  <li>
                    <strong>Research / PhD (Law)</strong> – research-oriented track.
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
                      <span className="nitExamTag">CLAT</span>
                      <span className="nitExamLevel">UG/PG</span>
                    </div>
                    <p className="nitExamTitle mb-1">NLU admissions route</p>
                    <p className="nitExamText mb-0">
                      Follow the Consortium of NLUs for notifications, counselling and seat allocation process.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">University tests</span>
                      <span className="nitExamLevel">Varies</span>
                    </div>
                    <p className="nitExamTitle mb-1">Non-NLU routes</p>
                    <p className="nitExamText mb-0">
                      Many universities run their own admission tests or merit-based admissions (check notices).
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">BCI</span>
                      <span className="nitExamLevel">Official</span>
                    </div>
                    <p className="nitExamTitle mb-1">Recognition check</p>
                    <p className="nitExamText mb-0">
                      Verify college/university recognition and approvals using BCI official pages before admission.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Rankings</span>
                      <span className="nitExamLevel">Reference</span>
                    </div>
                    <p className="nitExamTitle mb-1">Use NIRF wisely</p>
                    <p className="nitExamText mb-0">
                      Rankings are one input—also compare faculty, moots, internships, alumni and total cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            <a href="https://consortiumofnlus.ac.in/" target="_blank" rel="noreferrer" className="btn btn-primary">
              CLAT (Official) <ExternalLink size={16} className="ms-1" />
            </a>
            <a
              href="https://www.barcouncilofindia.org/info/recognised-universities-colleges"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              BCI Recognised Law Colleges <ExternalLink size={16} className="ms-1" />
            </a>
            <a href="https://www.nirfindia.org/Rankings/2025/LawRanking.html" target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              NIRF Law 2025 <ExternalLink size={16} className="ms-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 4) WB SPOTLIGHT GRID */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">West Bengal – Law Colleges (Spotlight)</h2>
              <p className="sectionSub mb-0">Curated list with official websites/pages for quick verification.</p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {WB_LAW_SPOTLIGHT.map((inst) => (
              <div key={inst.no} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="iitCard w-100 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="iitRank">#{inst.no}</span>
                    <span className="iitCodeBadge">{inst.city}</span>
                  </div>

                  <div className="mb-3">
                    <h3 className="h6 fw-semibold mb-1 text-dark d-flex  gap-2">
                      <Scale size={16} className="text-primary flex-shrink-0" />
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
              Start with CLAT official portal (for NLUs) and verify recognition using BCI pages. Then shortlist colleges
              based on teaching quality, moots, internships, alumni network, location, hostel and total cost.
            </p>
            <p className="mb-0 text-muted">
              Always cross-check current-year admission notices, fee structure, and course recognition on the official
              institute website.
            </p>
          </div>
        </div>
      </section>
            </FrontendLayout>
    </>
  );
}
