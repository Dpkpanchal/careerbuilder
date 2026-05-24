"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CollegeTabsBar from "../CollegeTabsBar";
import { Layers3, Network, MapPin, ExternalLink, University, ShieldCheck, ArrowRight } from "lucide-react";

// -------------------------------------------------------------
// TOP TABS (Colleges main categories) – same pattern across Colleges
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
// OFFICIAL LINKS (for “Browse by Institute Type” section)
// -------------------------------------------------------------
const INSTITUTE_LINKS = [
  { title: "IITs (National Institutes) – Official (JoSAA)", url: "https://josaa.nic.in/" },
  { title: "NITs / IIITs / GFTIs – Official (CSAB)", url: "https://csab.nic.in/" },
  { title: "AICTE Approved Engineering Institutions (India)", url: "https://www.aicte-india.org/education/institutions" },
  { title: "NIRF Engineering Rankings (Reference)", url: "https://www.nirfindia.org/Rankings/2025/EngineeringRanking.html" },
  { title: "West Bengal Engineering Admissions – WBJEEB (Official)", url: "https://wbjeeb.in/" },
  { title: "WBJEEB Notices / Counselling Updates (Official)", url: "https://wbjeeb.nic.in/" },
];

// -------------------------------------------------------------
// West Bengal spotlight – expanded (official websites)
// -------------------------------------------------------------
const WB_ENGINEERING_SPOTLIGHT = [
  // University / INI / Govt
  { no: 1, name: "Jadavpur University – Faculty of Engineering & Technology", city: "Kolkata", state: "West Bengal", website: "https://jadavpuruniversity.in/" },
  { no: 2, name: "IIEST, Shibpur", city: "Howrah", state: "West Bengal", website: "https://www.iiests.ac.in/" },
  { no: 3, name: "Jalpaiguri Government Engineering College (JGEC)", city: "Jalpaiguri", state: "West Bengal", website: "https://jgec.ac.in/" },
  { no: 4, name: "Kalyani Government Engineering College (KGEC)", city: "Kalyani", state: "West Bengal", website: "https://www.kgec.edu.in/" },
  { no: 5, name: "Cooch Behar Government Engineering College (CGEC)", city: "Cooch Behar", state: "West Bengal", website: "https://cgec.org.in/" },
  { no: 6, name: "Ramkrishna Mahato Government Engineering College (RKMGEC)", city: "Purulia", state: "West Bengal", website: "https://rkmgec.ac.in/" },
  { no: 7, name: "Government College of Engineering & Textile Technology, Berhampore (GCETTB)", city: "Berhampore", state: "West Bengal", website: "https://www.gcettb.ac.in/" },
  { no: 8, name: "Government College of Engineering & Textile Technology, Serampore (GCETTS)", city: "Serampore", state: "West Bengal", website: "https://www.gcetts.ac.in/" },
  { no: 9, name: "Government College of Engineering & Leather Technology (GCELT)", city: "Kolkata (Salt Lake)", state: "West Bengal", website: "https://gcelt.gov.in/" },

  // Private (popular)
  { no: 10, name: "Heritage Institute of Technology, Kolkata (HITK)", city: "Kolkata", state: "West Bengal", website: "https://www.heritageit.edu/" },
  { no: 11, name: "Haldia Institute of Technology (HIT Haldia)", city: "Haldia", state: "West Bengal", website: "https://hithaldia.ac.in/" },
  { no: 12, name: "Institute of Engineering & Management (IEM), Kolkata", city: "Kolkata", state: "West Bengal", website: "https://iem.edu.in/" },
  { no: 13, name: "Techno Main Salt Lake", city: "Kolkata (Salt Lake)", state: "West Bengal", website: "https://www.ticollege.ac.in/" },
  { no: 14, name: "Narula Institute of Technology", city: "Kolkata (Agarpara)", state: "West Bengal", website: "https://www.nit.ac.in/" },
  { no: 15, name: "RCC Institute of Information Technology (RCCIIT)", city: "Kolkata", state: "West Bengal", website: "https://rcciit.edu.in/" },
  { no: 16, name: "Meghnad Saha Institute of Technology (MSIT)", city: "Kolkata", state: "West Bengal", website: "https://msit.edu.in/" },
  { no: 17, name: "Netaji Subhash Engineering College (NSEC)", city: "Kolkata", state: "West Bengal", website: "https://www.nsec.ac.in/" },
  { no: 18, name: "Techno International New Town", city: "Kolkata (New Town)", state: "West Bengal", website: "https://tint.edu.in/" },
  { no: 19, name: "Bengal Institute of Technology (BIT)", city: "Kolkata", state: "West Bengal", website: "https://bitcollege.in/" },
  { no: 20, name: "Future Institute of Engineering & Management (FIEM)", city: "Kolkata (Sonarpur)", state: "West Bengal", website: "https://futureengineering.in/" },
];

// -------------------------------------------------------------
// PAGE
// -------------------------------------------------------------
export default function EngineeringCollegesPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner title="Engineering Colleges in India" breadcrumb="Engineering Colleges" />

      <CollegeTabsBar tabs={COLLEGE_TABS} activeId="engineering" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">About Engineering Colleges</h2>

              <p className="sectionSub">
                Engineering in India is offered through national institutes, universities, and recognized
                private institutions. Compare quality, exposure, labs, internships and outcomes—not only rankings.
              </p>

              <p className="sectionSub mb-0">
                Always verify approval/recognition using official sources and check the latest admission rules
                from counselling authorities (state/national) and the institute website.
              </p>
            </div>

            <div className="col-12 col-lg-5">
                <div className="sectionCard bg-light border">
                    <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                    <Layers3 size={18} className="text-primary" />
                    <span>Quick Snapshot</span>
                    </h3>

                    <dl className="row small mb-0">
                    <dt className="col-5">WB spotlight</dt>
                    <dd className="col-7 mb-2">
                        {WB_ENGINEERING_SPOTLIGHT.length} institutes shown
                    </dd>

                    <dt className="col-5">Key UG routes</dt>
                    <dd className="col-7 mb-2">
                        <a
                        href="https://josaa.nic.in/"
                        target="_blank"
                        rel="noreferrer"
                        className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                        >
                        <span>JoSAA / JEE (National)</span>
                        <ExternalLink size={14} />
                        </a>
                        <br />
                        <a
                        href="https://wbjeeb.in/"
                        target="_blank"
                        rel="noreferrer"
                        className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                        >
                        <span>WBJEEB (West Bengal)</span>
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
      <section className="py-4 mb-lg-5 ">
        <div className="container">
          <div className="border-top pt-4 ">
            <div className="d-flex align-items-center gap-2 mb-3">
              <University size={18} className="text-primary" />
              <h3 className="h5 mb-0">Browse by Institute Type</h3>
            </div>

            <div className="text-muted mb-4" style={{ maxWidth: "90ch" }}>
              Open official sources to verify approvals, counselling, and authentic institute lists.
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

      {/* 3) ADMISSIONS + VERIFICATION – DARK BOXES */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">Admissions & Verification</h2>
            <p className="sectionSub mb-0">A simple checklist to shortlist the right engineering college.</p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* LEFT – checklist */}
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Shortlisting checklist</span>
                </span>

                <p className="small mb-3">
                  Use official lists first, then compare branch fit, cost and outcomes.
                </p>

                <ul className="nitDarkList mb-0">
                  <li><strong>Step 1:</strong> Verify approval/recognition via official portals (AICTE/authority).</li>
                  <li><strong>Step 2:</strong> Confirm admission route (state counselling / JoSAA / institute process).</li>
                  <li><strong>Step 3:</strong> Compare labs, internships, placements, faculty and alumni network.</li>
                  <li><strong>Step 4:</strong> Check fees, scholarships, hostel and travel feasibility.</li>
                </ul>
              </div>
            </div>

            {/* RIGHT – cards */}
            <div className="col-12 col-lg-7 d-flex">
              <div className="row g-3 w-100 align-content-stretch">
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Approval</span>
                      <span className="nitExamLevel">AICTE</span>
                    </div>
                    <p className="nitExamTitle mb-1">Confirm approved institute</p>
                    <p className="nitExamText mb-0">Check the official AICTE institutions page/list.</p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Counselling</span>
                      <span className="nitExamLevel">Official</span>
                    </div>
                    <p className="nitExamTitle mb-1">Follow counselling updates</p>
                    <p className="nitExamText mb-0">Seat matrix / rules / dates are published by official boards.</p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Rankings</span>
                      <span className="nitExamLevel">Reference</span>
                    </div>
                    <p className="nitExamTitle mb-1">Use rankings carefully</p>
                    <p className="nitExamText mb-0">Rankings are one input—always check your branch + outcomes.</p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Safety</span>
                      <span className="nitExamLevel">Tip</span>
                    </div>
                    <p className="nitExamTitle mb-1 d-flex align-items-center gap-2">
                      <ShieldCheck size={16} />
                      <span>Use only official websites</span>
                    </p>
                    <p className="nitExamText mb-0">Avoid unofficial portals and paid “agents” for admissions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons (official links) */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            <a
              href="https://www.aicte-india.org/education/institutions"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              AICTE Institutions <ExternalLink size={16} className="ms-1" />
            </a>
            <a
              href="https://www.nirfindia.org/Rankings/2025/EngineeringRanking.html"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              NIRF Engineering 2025 <ExternalLink size={16} className="ms-1" />
            </a>
            <a href="https://wbjeeb.in/" target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              WBJEEB <ExternalLink size={16} className="ms-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 4) WB SPOTLIGHT GRID – bigger list */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">West Bengal – Engineering Colleges (Spotlight)</h2>
              <p className="sectionSub mb-0">Curated list with official websites (for quick shortlisting).</p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {WB_ENGINEERING_SPOTLIGHT.map((inst) => (
              <div key={inst.no} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="iitCard w-100 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="iitRank">#{inst.no}</span>
                    <span className="iitCodeBadge">{inst.city}</span>
                  </div>

                  <div className="mb-3">
                    <h3 className="h6 fw-semibold mb-1 text-dark d-flex align-items-center gap-2">
                      <University size={16} className="text-primary" />
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
              Use the official links (AICTE / counselling portals) to verify authenticity and admissions.
              Use the WB spotlight list to quickly start shortlisting.
            </p>
            <p className="mb-0 text-muted">
              Always cross-check fees, eligibility, seat matrix, and current-year notices on official sources.
            </p>
          </div>
        </div>
      </section>
            </FrontendLayout>
    </>
  );
}
