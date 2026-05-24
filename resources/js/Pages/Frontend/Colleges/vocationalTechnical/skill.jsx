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
  Sparkles,
  BadgeCheck,
  Globe,
  Briefcase,
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
// ✅ Official sources (National + WB) — verified, relevant
// -------------------------------------------------------------
const OFFICIAL_SKILL_LINKS = [
  // National ecosystem
  { title: "Skill India Digital Hub (SIDH) (Official)", url: "https://www.skillindiadigital.gov.in/" },
  { title: "Ministry of Skill Development & Entrepreneurship (MSDE) (Official)", url: "https://www.msde.gov.in/" },
  { title: "National Skill Development Corporation (NSDC) (Official)", url: "https://nsdcindia.org/" },
  { title: "PMKVY (myScheme) – Scheme Details (Official)", url: "https://www.myscheme.gov.in/schemes/pmkvy-sp" },
  { title: "Apprenticeship India (Official)", url: "https://www.apprenticeshipindia.gov.in/" },
  { title: "Skill India (Official)", url: "https://www.skillindia.gov.in/" },

  // West Bengal ecosystem
  { title: "PBSSD – Utkarsh Bangla (WB) (Official)", url: "https://pbssd.gov.in/" },
  { title: "PBSSD – Course List (WB) (Official)", url: "https://pbssd.gov.in/course_list" },
  { title: "Directorate of Vocational Education & Training (DVET), WB (Official)", url: "https://dvet.wb.gov.in/" },
  { title: "WBSCT&VE&SD (Technical Education Division) (Official)", url: "https://webscte.co.in/" },
];

// -------------------------------------------------------------
// WB spotlight (official links only — since no master list planned)
// -------------------------------------------------------------
const WB_SPOTLIGHT = [
  {
    no: 1,
    name: "PBSSD (Utkarsh Bangla) – Training Ecosystem (WB)",
    city: "West Bengal",
    state: "WB",
    website: "https://pbssd.gov.in/",
    note: "State skill ecosystem portal (training calendar, providers/centres, course info).",
  },
  {
    no: 2,
    name: "PBSSD – Course List (WB)",
    city: "West Bengal",
    state: "WB",
    website: "https://pbssd.gov.in/course_list",
    note: "Browse available skill courses/offerings (official list).",
  },
  {
    no: 3,
    name: "DVET (WB) – Vocational Education & Training (WB)",
    city: "West Bengal",
    state: "WB",
    website: "https://dvet.wb.gov.in/",
    note: "Official WB vocational training directorate portal.",
  },
  {
    no: 4,
    name: "WBSCT&VE&SD – Technical & Vocational Education (WB)",
    city: "West Bengal",
    state: "WB",
    website: "https://webscte.co.in/",
    note: "Official council portal (technical/vocational education reference).",
  },
];

// -------------------------------------------------------------
// PAGE
// -------------------------------------------------------------
export default function SkillDevelopmentCentresPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner title="Skill Development Centres" breadcrumb="Skill Development Centres" />

      <CollegeTabsBar tabs={COLLEGE_TABS} activeId="skill" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Sparkles size={20} className="text-primary" />
                <span>About Skill Development Centres</span>
              </h2>

              <p className="sectionSub">
                Skill Development Centres provide short-term, job-oriented training in areas like IT skills, retail,
                hospitality, healthcare support, electrical/electronics, construction, beauty & wellness, logistics,
                manufacturing support, and more.
              </p>

              <p className="sectionSub mb-0">
                The safest approach is to choose training through official portals (Skill India / NSDC / state missions),
                verify the training provider/centre, and prefer programs that support assessment, certification,
                apprenticeship, or placement linkage.
              </p>
            </div>

            {/* ✅ Quick Snapshot (pattern preserved: clickable links kept) */}
            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <dl className="row small mb-0">
                  <dt className="col-5">Best for</dt>
                  <dd className="col-7 mb-2">Short courses → jobs / upgrade / apprenticeship</dd>

                  <dt className="col-5">National portal</dt>
                  <dd className="col-7 mb-2">
                    <a
                      href="https://www.skillindiadigital.gov.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>Skill India Digital Hub</span>
                      <ExternalLink size={14} />
                    </a>
                  </dd>

                  <dt className="col-5">WB ecosystem</dt>
                  <dd className="col-7 mb-2">
                    <a
                      href="https://pbssd.gov.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>PBSSD (Utkarsh Bangla)</span>
                      <ExternalLink size={14} />
                    </a>
                  </dd>

                  <dt className="col-5">Verification</dt>
                  <dd className="col-7 mb-0">
                    <a
                      href="https://www.myscheme.gov.in/schemes/pmkvy-sp"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <ShieldCheck size={14} className="text-primary" />
                      <span>PMKVY (Official Scheme Info)</span>
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
              Use these portals to find training opportunities, confirm authenticity, and understand certification /
              apprenticeship / scheme rules.
            </div>

            <div className="row g-2 g-lg-3">
              {OFFICIAL_SKILL_LINKS.map((item) => (
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

      {/* 3) HOW SKILL CENTRES HELP – DARK BOXES */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">What You Get From Skill Development</h2>
            <p className="sectionSub mb-0">
              Skill centres are strongest when they lead to certification, practical training, and job linkage.
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
                  Pick a skill course based on your interest + local demand. Prefer centres that provide hands-on
                  training, assessment/certification, and placement/apprenticeship support.
                </p>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>Short-term courses</strong> – faster entry to jobs or internship.
                  </li>
                  <li>
                    <strong>Certification</strong> – improves trust and job readiness.
                  </li>
                  <li>
                    <strong>Apprenticeship</strong> – strong pathway for real experience.
                  </li>
                  <li>
                    <strong>Upskilling</strong> – add modules like communication, safety, digital tools.
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
                      <span className="nitExamTag">SIDH</span>
                      <span className="nitExamLevel">Official</span>
                    </div>
                    <p className="nitExamTitle mb-1">Find training opportunities</p>
                    <p className="nitExamText mb-0">
                      Use Skill India Digital Hub to explore skilling ecosystem services.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">NSDC</span>
                      <span className="nitExamLevel">Ecosystem</span>
                    </div>
                    <p className="nitExamTitle mb-1">Training ecosystem</p>
                    <p className="nitExamText mb-0">
                      NSDC is a key body in India’s skilling ecosystem (centres, partners, initiatives).
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">PMKVY</span>
                      <span className="nitExamLevel">Scheme</span>
                    </div>
                    <p className="nitExamTitle mb-1">Scheme-backed training</p>
                    <p className="nitExamText mb-0">
                      Check scheme details only from official portals before joining.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Apprenticeship</span>
                      <span className="nitExamLevel">Career</span>
                    </div>
                    <p className="nitExamTitle mb-1">Job-linked pathway</p>
                    <p className="nitExamText mb-0">
                      Apprenticeship can be one of the strongest job-entry routes after skilling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            <a
              href="https://www.skillindiadigital.gov.in/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Skill India Digital Hub <ExternalLink size={16} className="ms-1" />
            </a>
            <a href="https://pbssd.gov.in/" target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              PBSSD (Utkarsh Bangla) <ExternalLink size={16} className="ms-1" />
            </a>
            <a
              href="https://www.apprenticeshipindia.gov.in/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              Apprenticeship India <ExternalLink size={16} className="ms-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 4) WB SPOTLIGHT – Official links only */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">West Bengal – Skill Development (Official Links)</h2>
              <p className="sectionSub mb-0">
                We are not maintaining a separate “all skill centres” list page. Use these official portals to find
                updated training providers/centres and courses.
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
                      <Briefcase size={16} className="text-primary" />
                      <span>{inst.name}</span>
                    </h3>

                    <p className="small text-muted mb-0 d-flex align-items-center gap-1">
                      <Globe size={14} className="text-primary" />
                      <span>
                        {inst.city}, {inst.state}
                      </span>
                    </p>

                    {inst.note ? <p className="small text-muted mt-2 mb-0">{inst.note}</p> : null}
                  </div>

                  <div className="iitDivider my-2" />

                  <div className="mt-auto d-flex justify-content-between align-items-center flex-wrap">
                    <span className="small text-muted d-block mb-1">Open</span>
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
            <ShieldCheck size={14} className="text-primary" />
            <span>
              Tip: Prefer centres listed on official portals (PBSSD/SIDH) and always verify course duration, fees,
              certification and placement/apprenticeship linkage.
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
              Start with official portals (SIDH / PBSSD) to shortlist courses. Then verify the training provider/centre,
              check batch dates, trainer quality, lab/practical time, certification, and job/apprenticeship support.
            </p>
            <p className="mb-0 text-muted">
              Avoid random “agent” admissions. Use only official portals and official centre contacts.
            </p>
          </div>
        </div>
      </section>

     </FrontendLayout>
    </>
  );
}
