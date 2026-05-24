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
  Factory,
  MapPin,
  BadgeCheck,
  Cpu,
  Wrench,
  Globe 
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
// ✅ Official sources (relevant + works)
// -------------------------------------------------------------
const MSME_OFFICIAL_LINKS = [
  {
    title: "MSME Dashboard – Tool Rooms / Technology Centres (State-wise Directory)",
    url: "https://dashboard.msme.gov.in/map_wise_tc.aspx",
  },
  {
    title: "MSMEDI / DCMSME – MSME Technology Centre (MSME-TC) Institute List",
    url: "https://msmedi.dcmsme.gov.in/Institution_List.aspx?agencyId=2",
  },
  {
    title: "Ministry of MSME – Brief about MSME Tool Rooms (Official)",
    url: "https://msme.gov.in/brief-about-msme-tool-rooms",
  },
];

// -------------------------------------------------------------
// WB spotlight (keep only high-confidence official/primary)
// -------------------------------------------------------------
const WB_SPOTLIGHT = [
  {
    no: 1,
    name: "MSME Tool Room – Kolkata (CTTC, Kolkata)",
    city: "Kolkata",
    state: "West Bengal",
    website: "https://www.msmetoolroomkolkata.com/",
    note: "Training, consultancy, and advanced tooling facilities (WB).",
  },
  {
    no: 2,
    name: "MSME Dashboard – WB listing (Technology Centres / Tool Rooms)",
    city: "West Bengal",
    state: "WB",
    website: "https://dashboard.msme.gov.in/map_wise_tc.aspx",
    note: "Use the directory to find the latest WB centre listing and details.",
  },
];

// -------------------------------------------------------------
// PAGE
// -------------------------------------------------------------
export default function MSMEToolRoomsPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner title="MSME Tool Room Institutes / Technology Centres" breadcrumb="MSME Tool Room Institutes" />

      <CollegeTabsBar tabs={COLLEGE_TABS} activeId="msme" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Factory size={20} className="text-primary" />
                <span>About MSME Tool Rooms / Technology Centres</span>
              </h2>

              <p className="sectionSub">
                MSME Tool Rooms (Technology Centres) are advanced training and industry-support institutes under the
                Ministry of MSME. They focus on high-end technical skills and services like precision machining, tool &
                die, mould design, CAD/CAM/CAE, CNC, metrology, automation, additive manufacturing and related domains.
              </p>

              <p className="sectionSub mb-0">
                These centres typically offer a mix of long-term diploma-type programmes, short-term upskilling courses,
                and industry services (prototype/tooling/consultancy). Always use official directories for the latest
                centre list and programme updates.
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
                  <dt className="col-5">What it is</dt>
                  <dd className="col-7 mb-2">Advanced technical training + industry support</dd>

                  <dt className="col-5">Best for</dt>
                  <dd className="col-7 mb-2">Manufacturing careers, tooling, CNC, CAD/CAM, automation</dd>

                  <dt className="col-5">Official directory</dt>
                  <dd className="col-7 mb-2">
                    <a
                      href="https://dashboard.msme.gov.in/map_wise_tc.aspx"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>MSME Dashboard (TC Directory)</span>
                      <ExternalLink size={14} />
                    </a>
                  </dd>

                  <dt className="col-5">Verification</dt>
                  <dd className="col-7 mb-0">
                    <a
                      href="https://msmedi.dcmsme.gov.in/Institution_List.aspx?agencyId=2"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <ShieldCheck size={14} className="text-primary" />
                      <span>MSME-TC Institute List (Official)</span>
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
              Use these official sources to locate centres, verify authenticity, and check training/service offerings.
            </div>

            <div className="row g-2 g-lg-3">
              {MSME_OFFICIAL_LINKS.map((item) => (
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

      {/* 3) TRAINING & SERVICES – DARK BOXES */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">Training Tracks & Industry Services</h2>
            <p className="sectionSub mb-0">
              MSME Technology Centres typically support both students and industries through skill training + tooling services.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* LEFT – pathways */}
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>What you can do here</span>
                </span>

                <p className="small mb-3">
                  If you want a manufacturing career, these centres are high-value because you learn on industry-grade
                  machines and software, often with strong industry linkage.
                </p>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>Technical training</strong> – CNC, CAD/CAM, tool & die, moulds, metrology.
                  </li>
                  <li>
                    <strong>Industry services</strong> – tooling, prototyping, testing, consultancy.
                  </li>
                  <li>
                    <strong>Short-term upskilling</strong> – job-focused modules for freshers/working professionals.
                  </li>
                  <li>
                    <strong>Entrepreneur support</strong> – exposure to manufacturing processes & quality systems.
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
                      <span className="nitExamTag">CNC / Machining</span>
                      <span className="nitExamLevel">Core</span>
                    </div>
                    <p className="nitExamTitle mb-1">Hands-on workshops</p>
                    <p className="nitExamText mb-0">
                      Practical training on machines is the biggest advantage of MSME tool rooms.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">CAD/CAM</span>
                      <span className="nitExamLevel">Design</span>
                    </div>
                    <p className="nitExamTitle mb-1">Industrial software</p>
                    <p className="nitExamText mb-0">
                      Learn CAD/CAM/CAE and connect it with actual manufacturing output.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Tooling</span>
                      <span className="nitExamLevel">Advanced</span>
                    </div>
                    <p className="nitExamTitle mb-1">Tool & die / mould</p>
                    <p className="nitExamText mb-0">
                      Specialised manufacturing skills often lead to better pay and stable demand.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Verify</span>
                      <span className="nitExamLevel">Must</span>
                    </div>
                    <p className="nitExamTitle mb-1">Use official directories</p>
                    <p className="nitExamText mb-0">
                      Don’t rely on random lists—use MSME/ DCMSME official listings for authenticity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            <a
              href="https://dashboard.msme.gov.in/map_wise_tc.aspx"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Find Centres (MSME Dashboard) <ExternalLink size={16} className="ms-1" />
            </a>
            <a
              href="https://msmedi.dcmsme.gov.in/Institution_List.aspx?agencyId=2"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              MSME-TC Institute List <ExternalLink size={16} className="ms-1" />
            </a>
            <a
              href="https://msme.gov.in/brief-about-msme-tool-rooms"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              Ministry Note <ExternalLink size={16} className="ms-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 4) WB SPOTLIGHT – keep only official/primary */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">West Bengal – MSME Tool Room (Spotlight)</h2>
              <p className="sectionSub mb-0">
                Use these high-confidence sources for WB. For the complete list, use the MSME Dashboard directory.
              </p>
            </div>

            <span className="badge text-bg-light border d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill">
              <BadgeCheck size={16} className="text-primary" />
              <span className="text-muted">Official sources only</span>
            </span>
          </div>

          <div className="row g-3 g-md-4">
            {WB_SPOTLIGHT.map((inst) => (
              <div key={inst.no} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="iitCard w-100 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="iitRank">#{inst.no}</span>
                    <span className="iitCodeBadge">{inst.city}</span>
                  </div>

                  <div className="mb-3">
                    <h3 className="h6 fw-semibold mb-1 text-dark d-flex align-items-center gap-2">
                      {inst.no === 1 ? <Wrench size={16} className="text-primary" /> : <Cpu size={16} className="text-primary" />}
                      <span>{inst.name}</span>
                    </h3>

                    <p className="small text-muted mb-0 d-flex align-items-center gap-1">
                      <MapPin size={14} className="text-primary" />
                      <span>
                        {inst.city}, {inst.state}
                      </span>
                    </p>

                    {inst.note ? <p className="small text-muted mt-2 mb-0">{inst.note}</p> : null}
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

          <div className="small text-muted mt-3 d-flex align-items-center gap-2">
            <Globe size={14} className="text-primary" />
            <span>
              If you need the complete national list, use the MSME Dashboard directory and the official MSME-TC institute list.
            </span>
          </div>
        </div>
      </section>

      {/* 5) GUIDANCE NOTE */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="sectionCard bg-light border small">
            <h3 className="h6 mb-2">How to Use This Page</h3>
            <p className="mb-2">
              Use the MSME Dashboard directory to find centres by state. Then open the centre website to verify the
              latest courses, eligibility, fees, labs/workshops, and placement/industry linkage.
            </p>
            <p className="mb-0 text-muted">
              Avoid unofficial lists. Always cross-check through MSME/DCMSME links before taking admission.
            </p>
          </div>
        </div>
      </section>
</FrontendLayout> 
    </>
  );
}
