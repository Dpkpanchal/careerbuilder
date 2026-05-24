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
  Pill,
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
  { title: "Pharmacy Council of India (PCI) – Official", url: "https://www.pci.nic.in/" },
  { title: "PCI – Approved Degree Institutions (B.Pharm)", url: "https://www.pci.nic.in/approved_degree_institutes_us__12.html" },
  { title: "PCI – Approved Diploma Institutions (D.Pharm)", url: "https://pci.gov.in/en/approved-institute/approved-diploma-institutions-u-s-12/" },
  { title: "PCI – Approved Institutions for Pharm.D", url: "https://pci.gov.in/en/approved-institute/approved-institutions-for-pharm-d/" },
  { title: "AICTE Institutions (Reference for approval)", url: "https://www.aicte-india.org/education/institutions" },
  { title: "WBJEEB – Pharmacy Admissions (WBJEE info)", url: "https://wbjeeb.in/" },
  { title: "NIRF 2025 – Pharmacy Ranking (Reference)", url: "https://www.nirfindia.org/Rankings/2025/PharmacyRanking.html" },
];

// -------------------------------------------------------------
// West Bengal spotlight – Pharmacy colleges (official websites/pages)
// (curated, not exhaustive)
// -------------------------------------------------------------
const WB_PHARMACY_SPOTLIGHT = [
  {
    no: 1,
    name: "Jadavpur University – Pharmaceutical Technology",
    city: "Kolkata",
    state: "West Bengal",
    website: "https://jadavpuruniversity.in/academics/pharmaceutical-technology/",
  },
  {
    no: 2,
    name: "Bengal College of Pharmaceutical Sciences & Research (BCPSR)",
    city: "Durgapur",
    state: "West Bengal",
    website: "https://www.bcpsr.ac.in/",
  },
  {
    no: 3,
    name: "Bengal College of Pharmaceutical Technology (BCPT)",
    city: "Dubrajpur (Birbhum)",
    state: "West Bengal",
    website: "https://bcpt.in/",
  },
  {
    no: 4,
    name: "Gupta College of Technological Sciences (GCTS) – Pharmacy",
    city: "Asansol",
    state: "West Bengal",
    website: "https://www.gctsindia.in/",
  },
  {
    no: 5,
    name: "NSHM Knowledge Campus, Kolkata – B.Pharm",
    city: "Kolkata",
    state: "West Bengal",
    website: "https://kolkata.nshm.com/courses/bachelor-of-pharmacy/",
  },
];

// -------------------------------------------------------------
// PAGE
// -------------------------------------------------------------
export default function PharmacyCollegesPage() {
  return (
    <>
      <FrontendLayout>
      <HeroInner title="Pharmacy Colleges in India" breadcrumb="Pharmacy Colleges" />

      <CollegeTabsBar tabs={COLLEGE_TABS} activeId="pharmacy" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Pill size={20} className="text-primary" />
                <span>About Pharmacy Colleges</span>
              </h2>

              <p className="sectionSub">
                Pharmacy education includes pathways like <strong>D.Pharm</strong>, <strong>B.Pharm</strong>,
                <strong> M.Pharm</strong> and <strong>Pharm.D</strong>. Colleges are regulated through approval/recognition
                frameworks and must be verified using official bodies before taking admission.
              </p>

              <p className="sectionSub mb-0">
                Best practice: verify the institute and the exact programme approval using <strong>PCI (Pharmacy Council of India)</strong>,
                then check the admission route and current-year notices from the official exam/counselling portals and the institute website.
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
                  <dd className="col-7 mb-2">{WB_PHARMACY_SPOTLIGHT.length} institutes shown</dd>

                  <dt className="col-5">Regulator</dt>
                  <dd className="col-7 mb-2">
                    <a
                      href="https://www.pci.nic.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>PCI (Official)</span>
                      <ExternalLink size={14} />
                    </a>
                  </dd>

                  <dt className="col-5">WB admission</dt>
                  <dd className="col-7 mb-2">
                    <a
                      href="https://wbjeeb.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>WBJEEB (Engineering/Pharmacy)</span>
                      <ExternalLink size={14} />
                    </a>
                  </dd>

                  <dt className="col-5">Verification</dt>
                  <dd className="col-7 mb-0">
                    <a
                      href="https://www.pci.nic.in/approved_degree_institutes_us__12.html"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <ShieldCheck size={14} className="text-primary" />
                      <span>PCI Approved (Degree) List</span>
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
              Open official sources to verify PCI-approved institutions and reference rankings/admission authorities.
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
            <h2 className="sectionHeading mb-2">Programmes & Verification Checklist</h2>
            <p className="sectionSub mb-0">
              Use PCI first, then compare academics, labs, internships, fees and outcomes.
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
                  Pharmacy offers multiple entry/exit points. Always confirm the exact programme approval (D.Pharm/B.Pharm/Pharm.D/M.Pharm)
                  on PCI links for the current academic session.
                </p>

                <ul className="nitDarkList mb-0">
                  <li><strong>D.Pharm</strong> – diploma pathway (foundation + practice oriented).</li>
                  <li><strong>B.Pharm</strong> – core UG degree pathway.</li>
                  <li><strong>M.Pharm</strong> – PG specialisation (pharmaceutics, pharmacology, etc.).</li>
                  <li><strong>Pharm.D</strong> – clinical pharmacy oriented pathway.</li>
                </ul>
              </div>
            </div>

            {/* RIGHT – cards */}
            <div className="col-12 col-lg-7 d-flex">
              <div className="row g-3 w-100 align-content-stretch">
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">PCI</span>
                      <span className="nitExamLevel">Official</span>
                    </div>
                    <p className="nitExamTitle mb-1">Verify approvals</p>
                    <p className="nitExamText mb-0">
                      Check PCI approved lists for D.Pharm/B.Pharm/M.Pharm/Pharm.D as applicable.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Admissions</span>
                      <span className="nitExamLevel">WB</span>
                    </div>
                    <p className="nitExamTitle mb-1">WBJEEB updates</p>
                    <p className="nitExamText mb-0">
                      Follow WBJEEB for official admission notifications and counselling updates in West Bengal.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Quality</span>
                      <span className="nitExamLevel">Checklist</span>
                    </div>
                    <p className="nitExamTitle mb-1">Lab + industry exposure</p>
                    <p className="nitExamText mb-0">
                      Compare labs, hospital/industry tie-ups, training, internships and placement support.
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
                      Rankings are one input—always prioritize your location, fees, and programme fit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            <a href="https://www.pci.nic.in/" target="_blank" rel="noreferrer" className="btn btn-primary">
              PCI (Official) <ExternalLink size={16} className="ms-1" />
            </a>
            <a
              href="https://www.pci.nic.in/approved_degree_institutes_us__12.html"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              PCI Approved (Degree) <ExternalLink size={16} className="ms-1" />
            </a>
            <a href="https://www.nirfindia.org/Rankings/2025/PharmacyRanking.html" target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              NIRF Pharmacy 2025 <ExternalLink size={16} className="ms-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 4) WB SPOTLIGHT GRID */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">West Bengal – Pharmacy Colleges (Spotlight)</h2>
              <p className="sectionSub mb-0">Curated list with official websites/pages for quick verification.</p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {WB_PHARMACY_SPOTLIGHT.map((inst) => (
              <div key={inst.no} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="iitCard w-100 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="iitRank">#{inst.no}</span>
                    <span className="iitCodeBadge">{inst.city}</span>
                  </div>

                  <div className="mb-3">
                    <h3 className="h6 fw-semibold mb-1 text-dark d-flex  gap-2">
                      <Pill size={16} className="text-primary flex-shrink-0" />
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
              Start with PCI approved lists (degree/diploma/Pharm.D) to verify legitimacy. Then compare syllabus, labs,
              internships, industry exposure, fees and outcomes.
            </p>
            <p className="mb-0 text-muted">
              Always cross-check intake, eligibility and current-year notices on the official institute website and
              official counselling portals.
            </p>
          </div>
        </div>
      </section>
          </FrontendLayout>
      
    </>
  );
}
