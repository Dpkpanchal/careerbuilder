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
  Wheat,
  Stethoscope,
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
  // Agriculture admissions (official)
  { title: "ICAR – CUET (ICAR-UG) Bulletin (Official)", url: "https://www.icar.org.in/en/node/22050" },
  { title: "NTA – ICAR page for CUET (UG) (Official)", url: "https://cuet.nta.nic.in/indian-council-of-agricultural-research-icar/" },

  // Veterinary recognition + counselling (official)
  { title: "Veterinary Council of India (VCI) – Official", url: "https://vci.dahd.gov.in/" },
  { title: "VCI Counselling Portal (Official)", url: "https://vci.admissions.nic.in/" },

  // University verification (official)
  { title: "UGC – Deemed to be University Portal (Official)", url: "https://deemed.ugc.ac.in/" },

  // Quality reference (official)
  { title: "NIRF 2025 – Agriculture & Allied Ranking (Reference)", url: "https://www.nirfindia.org/Rankings/2025/AgricultureRanking.html" },
];

// -------------------------------------------------------------
// West Bengal spotlight – Agriculture & Veterinary institutes
// (curated list with official websites)
// -------------------------------------------------------------
// const WB_AGRI_VET_SPOTLIGHT = [
//   {
//     no: 1,
//     name: "Bidhan Chandra Krishi Viswavidyalaya (BCKV)",
//     city: "Mohanpur (Nadia)",
//     state: "West Bengal",
//     website: "https://www.bckv.edu.in/",
//   },
//   {
//     no: 2,
//     name: "Uttar Banga Krishi Viswavidyalaya (UBKV)",
//     city: "Pundibari (Cooch Behar)",
//     state: "West Bengal",
//     website: "https://www.ubkv.ac.in/",
//   },
//   {
//     no: 3,
//     name: "West Bengal University of Animal & Fishery Sciences (WBUAFS)",
//     city: "Kolkata / Mohanpur",
//     state: "West Bengal",
//     website: "https://www.wbuafsce.org/",
//   },
//   {
//     no: 4,
//     name: "University of Calcutta (Life Science / Allied departments)",
//     city: "Kolkata",
//     state: "West Bengal",
//     website: "https://www.caluniv.ac.in/",
//   },
//   {
//     no: 5,
//     name: "Kazi Nazrul University (Allied / Life Science ecosystem)",
//     city: "Asansol (Paschim Bardhaman)",
//     state: "West Bengal",
//     website: "https://www.knu.ac.in/",
//   },
// ];

// -------------------------------------------------------------
// PAGE
// -------------------------------------------------------------
export default function AgricultureVeterinaryCollegesPage({collegeContents}) {
  const WB_AGRI_VET_SPOTLIGHT = Array.isArray(collegeContents) ? collegeContents : [];

  return (
    <>
    <FrontendLayout>
      <HeroInner title="Agriculture & Veterinary Colleges in India" breadcrumb="Agriculture & Veterinary Colleges" />

      <CollegeTabsBar tabs={COLLEGE_TABS} activeId="agriculture" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Wheat size={20} className="text-primary" />
                <span>About Agriculture & Veterinary Colleges</span>
              </h2>

              <p className="sectionSub">
                Agriculture & Allied Sciences includes programmes like <strong>B.Sc Agriculture</strong>,{" "}
                <strong>Horticulture</strong>, <strong>Forestry</strong>, <strong>Fisheries</strong>,{" "}
                <strong>Food Technology</strong> and related disciplines. Veterinary education includes{" "}
                <strong>BVSc & A.H.</strong> and higher studies (MVSc/PhD) through universities and specialised institutes.
              </p>

              <p className="sectionSub mb-0">
                Best practice: verify admissions through official sources like <strong>ICAR (CUET-ICAR UG)</strong> and
                confirm programme recognition/standards for veterinary via <strong>VCI</strong>, then cross-check each
                institute’s official website for the latest notices.
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
                  <dd className="col-7 mb-2">{WB_AGRI_VET_SPOTLIGHT.length} institutes shown</dd>

                  <dt className="col-5">Agri UG route</dt>
                  <dd className="col-7 mb-2">
                    <a
                      href="https://www.icar.org.in/en/node/22050"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>CUET (ICAR-UG) – ICAR</span>
                      <ExternalLink size={14} />
                    </a>
                    <br />
                    <a
                      href="https://cuet.nta.nic.in/indian-council-of-agricultural-research-icar/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>NTA CUET – ICAR page</span>
                      <ExternalLink size={14} />
                    </a>
                  </dd>

                  <dt className="col-5">Veterinary</dt>
                  <dd className="col-7 mb-2">
                    <a
                      href="https://vci.dahd.gov.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>VCI (Official)</span>
                      <ExternalLink size={14} />
                    </a>
                    <br />
                    <a
                      href="https://vci.admissions.nic.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>VCI Counselling Portal</span>
                      <ExternalLink size={14} />
                    </a>
                  </dd>

                  <dt className="col-5">Verification</dt>
                  <dd className="col-7 mb-0">
                    <a
                      href="https://vci.dahd.gov.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <ShieldCheck size={14} className="text-primary" />
                      <span>Use ICAR/VCI + official websites</span>
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
              Open official sources for agriculture admissions, veterinary verification, and reference rankings.
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

      {/* 3) PROGRAMMES & ADMISSION ROUTES – DARK BOXES */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">Programmes & Admission Routes</h2>
            <p className="sectionSub mb-0">
              A quick view of popular agriculture allied pathways and how to verify admissions/recognition.
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
                  Agriculture & Allied Sciences has multiple UG options; veterinary education is a distinct professional
                  route (BVSc & A.H.) that must be verified via VCI norms and official counselling portals.
                </p>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>B.Sc Agriculture</strong> – core agriculture programme.
                  </li>
                  <li>
                    <strong>Horticulture / Forestry / Fisheries</strong> – allied specialisations (as offered).
                  </li>
                  <li>
                    <strong>Food / Agri Technology</strong> – technology and processing focused routes.
                  </li>
                  <li>
                    <strong>BVSc & A.H.</strong> – veterinary professional degree (VCI standards apply).
                  </li>
                  <li>
                    <strong>PG & Research</strong> – M.Sc / MVSc / PhD tracks depending on stream.
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
                      <span className="nitExamTag">CUET (ICAR-UG)</span>
                      <span className="nitExamLevel">UG</span>
                    </div>
                    <p className="nitExamTitle mb-1">Agriculture & allied admissions</p>
                    <p className="nitExamText mb-0">
                      Follow ICAR + NTA CUET pages for eligibility, subjects and counselling notices.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">VCI</span>
                      <span className="nitExamLevel">Vet</span>
                    </div>
                    <p className="nitExamTitle mb-1">BVSc & A.H. verification</p>
                    <p className="nitExamText mb-0">
                      Verify standards/recognition and use VCI counselling portal (as notified).
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">University routes</span>
                      <span className="nitExamLevel">Varies</span>
                    </div>
                    <p className="nitExamTitle mb-1">State / university admissions</p>
                    <p className="nitExamText mb-0">
                      Many state universities and institutes run their own merit/counselling processes.
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
                      Rankings are one signal—also compare labs, farms/field exposure, internships and total cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            <a href="https://www.icar.org.in/en/node/22050" target="_blank" rel="noreferrer" className="btn btn-primary">
              ICAR CUET (ICAR-UG) <ExternalLink size={16} className="ms-1" />
            </a>
            <a
              href="https://cuet.nta.nic.in/indian-council-of-agricultural-research-icar/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              NTA CUET – ICAR <ExternalLink size={16} className="ms-1" />
            </a>
            <a href="https://vci.dahd.gov.in/" target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              VCI (Official) <ExternalLink size={16} className="ms-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 4) WB SPOTLIGHT GRID */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">West Bengal – Agriculture & Veterinary (Spotlight)</h2>
              <p className="sectionSub mb-0">Curated institutes with official websites for quick verification.</p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {WB_AGRI_VET_SPOTLIGHT.map((inst) => (
              <div key={inst.no} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="iitCard w-100 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="iitRank">#{inst.no}</span>
                    <span className="iitCodeBadge">{inst.city}</span>
                  </div>

                  <div className="mb-3">
                    <h3 className="h6 fw-semibold mb-1 text-dark d-flex gap-2">
                      {inst.name.toLowerCase().includes("animal") || inst.name.toLowerCase().includes("veter") ? (
                        <Stethoscope size={16} className="text-primary flex-shrink-0" />
                      ) : (
                        <Wheat size={16} className="text-primary flex-shrink-0" />
                      )}
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
              Start with ICAR (CUET-ICAR UG) and NTA CUET pages for agriculture admissions. For veterinary, verify norms and
              counselling updates through VCI official portals. Then shortlist institutes by facilities (labs/farms/clinical
              complex), internships/training, fees and location.
            </p>
            <p className="mb-0 text-muted">
              Always check current-year notices (eligibility, seat matrix, counselling schedule, documents) on the official
              institute website.
            </p>
          </div>
        </div>
      </section>
</FrontendLayout>
    </>
  );
}
