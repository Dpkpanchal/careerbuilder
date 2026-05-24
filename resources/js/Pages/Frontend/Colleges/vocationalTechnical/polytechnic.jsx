"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CollegeTabsBar from "../CollegeTabsBar";
import {
  Layers3,
  Network,
  ExternalLink,
  University,
  ShieldCheck,
  ArrowRight,
  Cog,
  Wrench,
  Globe,
} from "lucide-react";

// -------------------------------------------------------------
// Tabs – Vocational & Technical Institutes (same bar for this category)
// -------------------------------------------------------------
const COLLEGE_TABS = [
  { id: "iti", label: "ITI Centres", href: '/colleges/iti-centres-govt-private' },
  { id: "polytechnic", label: "Polytechnic", href: '/colleges/polytechnic-colleges' },
  { id: "msme", label: "MSME Tool Rooms", href: '/colleges/msme-tool-room-institutes' },
  { id: "skill", label: "Skill Development", href: '/colleges/skill-development-centres' },
];
// -------------------------------------------------------------
// ✅ WB official polytechnic portals (working + relevant)
// -------------------------------------------------------------
const WB_OFFICIAL_POLY_LINKS = [
  {
    title: "WB Govt Polytechnics Portal (DTET, WB)",
    url: "https://polytechnic.wbtetsd.gov.in/",
  },
  {
    title: "VOCLET – List of Polytechnic (WBSCT&VE&SD)",
    url: "https://voclet.webscte.co.in/list-Polytechnic",
  },
  {
    title: "SCT&VE&SD – Academic: Polytechnic (WB)",
    url: "https://sctvesd.wb.gov.in/academic/polytechnic",
  },
];

// -------------------------------------------------------------
// Other helpful official references
// -------------------------------------------------------------
const NATIONAL_OFFICIAL_LINKS = [
  { title: "AICTE (Official)", url: "https://www.aicte-india.org/" },
  { title: "AICTE Approved Institutions (Official)", url: "https://www.aicte-india.org/education/institutions" },
  { title: "Apprenticeship India (Official)", url: "https://www.apprenticeshipindia.gov.in/" },
  { title: "Skill India (Official)", url: "https://www.skillindia.gov.in/" },
];

// -------------------------------------------------------------
// Combined for “Browse by Official Sources” section
// -------------------------------------------------------------
const INSTITUTE_LINKS = [...WB_OFFICIAL_POLY_LINKS, ...NATIONAL_OFFICIAL_LINKS];

// -------------------------------------------------------------
// PAGE
// -------------------------------------------------------------
export default function PolytechnicPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner title="Polytechnic Colleges (Diploma)" breadcrumb="Polytechnic Colleges (Diploma)" />

      <CollegeTabsBar tabs={COLLEGE_TABS} activeId="polytechnic" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Cog size={20} className="text-primary" />
                <span>About Polytechnic (Diploma) Colleges</span>
              </h2>

              <p className="sectionSub">
                Polytechnic colleges offer <strong>Diploma</strong> programmes focused on practical engineering and
                technical skills. Common diploma branches include Mechanical, Civil, Electrical, Electronics,
                Computer/IT, Automobile and more.
              </p>

              <p className="sectionSub mb-0">
                Polytechnics are a strong choice after Class 10/12 for students who want hands-on training, early job
                entry and industry exposure. Always confirm the <strong>latest admission rules</strong> using official
                counselling/department portals and the institute’s official website.
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
                  <dt className="col-5">Course type</dt>
                  <dd className="col-7 mb-2">Diploma (technical / engineering)</dd>

                  <dt className="col-5">Typical duration</dt>
                  <dd className="col-7 mb-2">3 years (usually)</dd>

                  <dt className="col-5">WB official portal</dt>
                  <dd className="col-7 mb-2">
                    <a
                      href="https://polytechnic.wbtetsd.gov.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>polytechnic.wbtetsd.gov.in</span>
                      <ExternalLink size={14} />
                    </a>
                  </dd>

                  <dt className="col-5">Verification</dt>
                  <dd className="col-7 mb-0">
                    <a
                      href="https://voclet.webscte.co.in/list-Polytechnic"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <ShieldCheck size={14} className="text-primary" />
                      <span>VOCLET: List of Polytechnic (WB)</span>
                      <ExternalLink size={14} />
                    </a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) BROWSE BY OFFICIAL SOURCES – your UI */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="border-top pt-4 mt-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <University size={18} className="text-primary" />
              <h3 className="h5 mb-0">Browse by Official Sources</h3>
            </div>

            <div className="text-muted mb-4" style={{ maxWidth: "90ch" }}>
              Use official department/council portals for the latest admission notices, list of institutes, and
              verification. For national reference, use AICTE and apprenticeship portals.
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

      {/* 3) DIPLOMA PATHWAYS – DARK BOXES */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">Diploma Pathways & Career Options</h2>
            <p className="sectionSub mb-0">
              How diploma education connects to jobs, apprenticeships and further engineering pathways.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* LEFT */}
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Pathway overview</span>
                </span>

                <p className="small mb-3">
                  Diploma programmes are practical and industry-aligned. After diploma, students can join technician
                  roles, apply for apprenticeships, or pursue higher study options (as per state/institute rules).
                </p>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>Technician jobs</strong> – production, maintenance, site execution, QA/QC (branch-wise).
                  </li>
                  <li>
                    <strong>Apprenticeship</strong> – structured on-job training (strong employability boost).
                  </li>
                  <li>
                    <strong>Higher study</strong> – lateral/bridge options (where allowed by rules).
                  </li>
                  <li>
                    <strong>Government opportunities</strong> – eligibility depends on notifications and requirements.
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
                      <span className="nitExamTag">WB portals</span>
                      <span className="nitExamLevel">Official</span>
                    </div>
                    <p className="nitExamTitle mb-1">Admission & institute list</p>
                    <p className="nitExamText mb-0">
                      Always use WB official portals for current-year notices, counselling and institute lists.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">AICTE</span>
                      <span className="nitExamLevel">Verify</span>
                    </div>
                    <p className="nitExamTitle mb-1">Approval reference</p>
                    <p className="nitExamText mb-0">
                      Use AICTE as a reference check for approved institutions where applicable.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Apprenticeship</span>
                      <span className="nitExamLevel">Career</span>
                    </div>
                    <p className="nitExamTitle mb-1">Industry exposure</p>
                    <p className="nitExamText mb-0">
                      Apprenticeship can significantly improve job readiness and opportunities.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Branch choice</span>
                      <span className="nitExamLevel">Key</span>
                    </div>
                    <p className="nitExamTitle mb-1">Choose wisely</p>
                    <p className="nitExamText mb-0">
                      Compare labs/workshops, training quality, and local industry demand before selecting a branch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            <a href="https://polytechnic.wbtetsd.gov.in/" target="_blank" rel="noreferrer" className="btn btn-primary">
              WB Govt Polytechnics Portal <ExternalLink size={16} className="ms-1" />
            </a>
            <a
              href="https://voclet.webscte.co.in/list-Polytechnic"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              VOCLET – List of Polytechnic <ExternalLink size={16} className="ms-1" />
            </a>
            <a
              href="https://sctvesd.wb.gov.in/academic/polytechnic"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              SCT&VE&SD – Polytechnic <ExternalLink size={16} className="ms-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 4) WB SPOTLIGHT – Official portals (no internal list pages planned) */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">West Bengal – Polytechnic (Official Links)</h2>
              <p className="sectionSub mb-0">
                Since we are not maintaining a separate “all polytechnics” page, use these official portals for the full
                and updated list.
              </p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {WB_OFFICIAL_POLY_LINKS.map((item, idx) => (
              <div key={item.url} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="iitCard w-100 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="iitRank">#{idx + 1}</span>
                    <span className="iitCodeBadge">WB</span>
                  </div>

                  <div className="mb-3">
                    <h3 className="h6 fw-semibold mb-2 text-dark d-flex align-items-center gap-2">
                      <Globe size={16} className="text-primary" />
                      <span>{item.title}</span>
                    </h3>

                    <p className="small text-muted mb-0">
                      Official portal for notices, institute listing and academic information.
                    </p>
                  </div>

                  <div className="iitDivider my-2" />

                  <div className="mt-auto d-flex justify-content-between align-items-center flex-wrap">
                    <span className="small text-muted d-block mb-1">Open</span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                      title={item.url}
                    >
                      <span>{item.url}</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="small text-muted mt-3">
            Tip: Use “VOCLET list” for a quick district-wise view; use the “Govt Polytechnics portal” for institution
            pages, notices, and contacts.
          </div>
        </div>
      </section>

      {/* 5) GUIDANCE NOTE */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="sectionCard bg-light border small">
            <h3 className="h6 mb-2">How to Use This Page</h3>
            <p className="mb-2">
              Start with WB official portals for the latest admission notices and the full institute list. Shortlist by
              branch availability, workshop/lab quality, travel/hostel feasibility, and apprenticeship/industry linkage.
            </p>
            <p className="mb-0 text-muted">
              Always check current-year schedule, documents, seat intake and fees on the official portal or the institute
              website.
            </p>
          </div>
        </div>
      </section>      
      </FrontendLayout>
    </>
  );
}
