"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CollegeTabsBar from "../CollegeTabsBar";
import ITIInstitutes from "@/Components/Frontend/Itiitcandjrpolytechnic/ITIInstitutes";
import {
  Layers3,
  Network,
  ExternalLink,
  University,
  ShieldCheck,
  ArrowRight,
  Wrench,
  BadgeCheck,
} from "lucide-react";

// -------------------------------------------------------------
// Tabs – Vocational & Technical Institutes (for this category)
// -------------------------------------------------------------
const COLLEGE_TABS = [
  { id: "iti", label: "ITI Centres", href: '/colleges/iti-centres-govt-private' },
  { id: "polytechnic", label: "Polytechnic", href: '/colleges/polytechnic-colleges' },
  { id: "msme", label: "MSME Tool Rooms", href: '/colleges/msme-tool-room-institutes' },
  { id: "skill", label: "Skill Development", href: '/colleges/skill-development-centres' },
];

// -------------------------------------------------------------
// Official links (we don't maintain internal list pages)
// -------------------------------------------------------------
const INSTITUTE_LINKS = [
  { title: "NCVT / DGT – Directorate General of Training (Official)", url: "https://dgt.gov.in/" },
  { title: "Skill India (Official)", url: "https://www.skillindia.gov.in/" },
  { title: "NSDC – National Skill Development Corporation (Official)", url: "https://www.nsdcindia.org/" },
  { title: "Apprenticeship India (Official)", url: "https://www.apprenticeshipindia.gov.in/" },
  { title: "WBSCVT (West Bengal) – State Council for Vocational Training (Official)", url: "https://wbscvt.net/" },
];

// -------------------------------------------------------------
// PAGE
// -------------------------------------------------------------
export default function ITIPage({itis}) {
  return (
    <>
    <FrontendLayout>
      <HeroInner title="ITI Centres (Govt / Private)" breadcrumb="ITI Centres (Govt / Private)" />

      <CollegeTabsBar tabs={COLLEGE_TABS} activeId="iti" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Wrench size={20} className="text-primary" />
                <span>About ITI (Industrial Training Institute)</span>
              </h2>

              <p className="sectionSub">
                ITI courses are job-oriented vocational programmes that build practical skills for trades like
                electrician, fitter, welder, mechanic, COPA, plumbing, and more. Many ITI trades are linked to
                apprenticeship and industry-ready roles.
              </p>

              <p className="sectionSub mb-0">
                Best practice: choose trade based on your interest + local job demand, verify institute status through
                official training bodies, and check placement/apprenticeship support.
              </p>
            </div>

            {/* ✅ Quick Snapshot (pattern preserved: keep clickable official links) */}
            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <dl className="row small mb-0">
                  <dt className="col-5">Course type</dt>
                  <dd className="col-7 mb-2">Trade-based vocational training</dd>

                  <dt className="col-5">Typical duration</dt>
                  <dd className="col-7 mb-2">6 months – 2 years (trade-wise)</dd>

                  <dt className="col-5">Outcome</dt>
                  <dd className="col-7 mb-2">Jobs + apprenticeship + self-employment</dd>

                  <dt className="col-5">Verification</dt>
                  <dd className="col-7 mb-0">
                    <a
                      href="https://dgt.gov.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <ShieldCheck size={14} className="text-primary" />
                      <span>DGT / NCVT (Official)</span>
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
              <h3 className="h5 mb-0">Browse by Official Sources</h3>
            </div>

            <div className="text-muted mb-4" style={{ maxWidth: "90ch" }}>
              Use these official links to verify training bodies, apprenticeship options, and state portals.
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

      {/* 3) TRADES & PATHWAYS – DARK BOXES */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">Trades & Career Pathways</h2>
            <p className="sectionSub mb-0">How ITI connects to jobs, apprenticeships, and further technical education.</p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* LEFT – pathway summary */}
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Pathway overview</span>
                </span>

                <p className="small mb-3">
                  ITI focuses on hands-on trade skills. After ITI, students can pursue apprenticeships, industry jobs,
                  self-employment, or progress to diploma pathways depending on eligibility and state rules.
                </p>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>Direct jobs</strong> – technician/helper roles (trade-wise).
                  </li>
                  <li>
                    <strong>Apprenticeship</strong> – structured on-job training (highly recommended).
                  </li>
                  <li>
                    <strong>Self-employment</strong> – service work, contracts, small workshop.
                  </li>
                  <li>
                    <strong>Further study</strong> – diploma / skill upgrades (as per norms).
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
                      <span className="nitExamTag">Apprenticeship</span>
                      <span className="nitExamLevel">Career</span>
                    </div>
                    <p className="nitExamTitle mb-1">Best next step</p>
                    <p className="nitExamText mb-0">
                      Apprenticeship gives real industry exposure and improves employability.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Skill India / NSDC</span>
                      <span className="nitExamLevel">Official</span>
                    </div>
                    <p className="nitExamTitle mb-1">Skill upgrades</p>
                    <p className="nitExamText mb-0">
                      Add short-term certifications (soft skills, safety, tools) to boost job readiness.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Trade selection</span>
                      <span className="nitExamLevel">Important</span>
                    </div>
                    <p className="nitExamTitle mb-1">Choose wisely</p>
                    <p className="nitExamText mb-0">
                      Select trade based on interest + local demand + placement support.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Verification</span>
                      <span className="nitExamLevel">Must</span>
                    </div>
                    <p className="nitExamTitle mb-1">Confirm institute status</p>
                    <p className="nitExamText mb-0">
                      Always verify using DGT/NCVT + state portals before paying fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            <a href="https://dgt.gov.in/" target="_blank" rel="noreferrer" className="btn btn-primary">
              DGT / NCVT (Official) <ExternalLink size={16} className="ms-1" />
            </a>
            <a
              href="https://www.apprenticeshipindia.gov.in/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              Apprenticeship India <ExternalLink size={16} className="ms-1" />
            </a>
            <a href="https://wbscvt.net/" target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              WBSCVT (WB) <ExternalLink size={16} className="ms-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 4) ITI LIST (YOUR COMPONENT) */}
      <section className="py-4 bg-light ">
        <div className="container">
          <ITIInstitutes data={itis}/>
        </div>
      </section>

      {/* 5) GUIDANCE NOTE */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="sectionCard bg-light border small">
            <h3 className="h6 mb-2">How to Use This Page</h3>
            <p className="mb-2">
              Use the ITI list to shortlist institutes near you, then verify recognition/affiliation using official
              portals. Prefer institutes with labs, safety practices, strong workshop training and apprenticeship
              support.
            </p>
            <p className="mb-0 text-muted">
              Always check current-year admission notices, trade availability, fees, and required documents on the
              institute website or state portal.
            </p>
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
