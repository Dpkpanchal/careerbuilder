"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CollegeTabsBar from "../CollegeTabsBar";
import { Layers3, Network, MapPin, ExternalLink, University, ShieldCheck } from "lucide-react";

// -------------------------------------------------------------
// Tabs – Universities category
// -------------------------------------------------------------
const UNIVERSITY_TABS = [
  { id: "central", label: "Central", href: '/colleges/central-universities' },
  { id: "state", label: "State", href: '/colleges/state-universities' },
  { id: "private", label: "Private / Deemed", href: '#' },
  { id: "open", label: "Open & Distance", href: '/colleges/open-distance-universities-ignou-nsou' },
];


// -------------------------------------------------------------
// Official reference links (UGC-DEB is primary authority for ODL/Online)
// -------------------------------------------------------------
const OFFICIAL_LINKS = {
  debHome: "https://deb.ugc.ac.in/", // :contentReference[oaicite:3]{index=3}
  debHeiProgrammeList: "https://deb.ugc.ac.in/Home/HEI_Prog_List_DEB", // :contentReference[oaicite:4]{index=4}
  debSearch: "https://deb.ugc.ac.in/OLSearch", // :contentReference[oaicite:5]{index=5}
};

// -------------------------------------------------------------
// Curated list of major Open / Distance Universities (with official websites)
// Keep it short + high-quality (the full list should remain on DEB).
// -------------------------------------------------------------
const OPEN_DISTANCE_SPOTLIGHT = [
  { no: 1, name: "Indira Gandhi National Open University (IGNOU)", city: "New Delhi", state: "Delhi", website: "https://www.ignou.ac.in/" }, // :contentReference[oaicite:6]{index=6}
  { no: 2, name: "Netaji Subhas Open University (NSOU)", city: "Kolkata", state: "West Bengal", website: "https://www.wbnsou.ac.in/" }, // :contentReference[oaicite:7]{index=7}
  { no: 3, name: "Tamil Nadu Open University (TNOU)", city: "Chennai", state: "Tamil Nadu", website: "https://tnou.ac.in/" }, // :contentReference[oaicite:8]{index=8}
  { no: 4, name: "Vardhman Mahaveer Open University (VMOU)", city: "Kota", state: "Rajasthan", website: "https://www.vmou.ac.in/home" }, // :contentReference[oaicite:9]{index=9}
  { no: 5, name: "Madhya Pradesh Bhoj (Open) University (MPBOU)", city: "Bhopal", state: "Madhya Pradesh", website: "https://mpbou.edu.in/" }, // :contentReference[oaicite:10]{index=10}
  { no: 6, name: "Uttar Pradesh Rajarshi Tandon Open University (UPRTOU)", city: "Prayagraj", state: "Uttar Pradesh", website: "https://www.uprtou.ac.in/" }, // :contentReference[oaicite:11]{index=11}
  { no: 7, name: "Dr. B. R. Ambedkar Open University (BRAOU)", city: "Hyderabad", state: "Telangana", website: "https://braou.ac.in/" }, // :contentReference[oaicite:12]{index=12}
  { no: 8, name: "Yashwantrao Chavan Maharashtra Open University (YCMOU)", city: "Nashik", state: "Maharashtra", website: "https://www.ycmou.ac.in/" }, // :contentReference[oaicite:13]{index=13}
  { no: 9, name: "Karnataka State Open University (KSOU)", city: "Mysuru", state: "Karnataka", website: "https://www.ksoumysuru.ac.in/" }, // :contentReference[oaicite:14]{index=14}
];

// -------------------------------------------------------------
// PAGE
// -------------------------------------------------------------
export default function OpenDistanceUniversitiesPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Open & Distance Universities (ODL / Online)"
        breadcrumb="Open & Distance Universities"
      />

      <CollegeTabsBar tabs={UNIVERSITY_TABS} activeId="open" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <span>About Open & Distance Learning</span>
              </h2>

              <p className="sectionSub">
                Open & Distance Learning (ODL) and Online programmes allow students to
                study with flexibility (location and time) through approved universities
                and institutions. These programmes are regulated through UGC norms and
                the UGC Distance Education Bureau (DEB) listings.
              </p>

              <p className="sectionSub mb-0">
                For the safest decision, always verify that the university and the
                specific programme you want are listed on the official DEB portal.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <dl className="row small mb-0">
                  <dt className="col-5">Spotlight</dt>
                  <dd className="col-7 mb-2">{OPEN_DISTANCE_SPOTLIGHT.length} universities </dd>

                  <dt className="col-5">Official authority</dt>
                  <dd className="col-7 mb-2">
                    <a
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                      href={OFFICIAL_LINKS.debHome}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>UGC – Distance Education Bureau</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </dd>

                  <dt className="col-5">HEI + Programme list</dt>
                  <dd className="col-7 mb-2">
                    <a
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                      href={OFFICIAL_LINKS.debHeiProgrammeList}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>DEB – Approved HEIs & Programmes</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </dd>

                  <dt className="col-5">Search (official)</dt>
                  <dd className="col-7 mb-0">
                    <a
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                      href={OFFICIAL_LINKS.debSearch}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>DEB Search</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) PROGRAMMES & VERIFICATION – DARK BOXES ON LIGHT GRADIENT */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">How to Choose an ODL / Online University</h2>
            <p className="sectionSub mb-0">
              A simple checklist to avoid unapproved universities and wrong programmes.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* LEFT – Checklist */}
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Verification checklist</span>
                </span>

                <p className="small mb-3">
                  Before you pay any fees, confirm recognition and programme approval
                  on the official DEB portal.
                </p>

                <ul className="nitDarkList mb-0">
                  <li><strong>Step 1:</strong> Find the university on DEB (HEI list).</li>
                  <li><strong>Step 2:</strong> Confirm your exact programme is approved for the relevant session.</li>
                  <li><strong>Step 3:</strong> Use only the official university website/portal for admission.</li>
                  <li><strong>Step 4:</strong> Keep screenshots / receipts / emails for reference.</li>
                </ul>
              </div>
            </div>

            {/* RIGHT – Cards */}
            <div className="col-12 col-lg-7 d-flex">
              <div className="row g-3 w-100 align-content-stretch">
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">ODL</span>
                      <span className="nitExamLevel">Mode</span>
                    </div>
                    <p className="nitExamTitle mb-1">Distance learning programmes</p>
                    <p className="nitExamText mb-0">
                      Programmes delivered through study centres, LMS and examinations as notified.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Online</span>
                      <span className="nitExamLevel">Mode</span>
                    </div>
                    <p className="nitExamTitle mb-1">Fully online programmes</p>
                    <p className="nitExamText mb-0">
                      Online learning + evaluation as per UGC rules and university notification.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Verify</span>
                      <span className="nitExamLevel">DEB</span>
                    </div>
                    <p className="nitExamTitle mb-1">Approved HEI + Programme</p>
                    <p className="nitExamText mb-0">
                      Use the DEB list/search to confirm approval for the relevant session.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Tip</span>
                      <span className="nitExamLevel">Safety</span>
                    </div>
                    <p className="nitExamTitle mb-1 d-flex align-items-center gap-2">
                      <ShieldCheck size={16} />
                      <span>Avoid unofficial portals</span>
                    </p>
                    <p className="nitExamText mb-0">
                      Apply only via the official university website and official admission portal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Browse CTA */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            <a
              href={OFFICIAL_LINKS.debHeiProgrammeList}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Browse DEB Approved HEIs & Programmes <ExternalLink size={16} className="ms-1" />
            </a>
            <a
              href={OFFICIAL_LINKS.debSearch}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              Search on DEB <ExternalLink size={16} className="ms-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 3) SPOTLIGHT LIST – PREMIUM CATALOG GRID */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">Popular Open & Distance Universities </h2>
              <p className="sectionSub mb-0">
                A curated list of major open universities with official websites (for full list, use DEB).
              </p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {OPEN_DISTANCE_SPOTLIGHT.map((u) => (
              <div key={u.no} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="iitCard w-100 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="iitRank">#{u.no}</span>
                    <span className="iitCodeBadge">{u.city}</span>
                  </div>

                  <div className="mb-3">
                    <h3 className="h6 fw-semibold mb-1 text-dark d-flex align-items-center gap-2">
                      <University size={16} className="text-primary" />
                      <span>{u.name}</span>
                    </h3>

                    <p className="small text-muted mb-0 d-flex align-items-center gap-1">
                      <MapPin size={14} className="text-primary" />
                      <span>
                        {u.city}, {u.state}
                      </span>
                    </p>
                  </div>

                  <div className="iitDivider my-2" />

                  <div className="mt-auto d-flex justify-content-between align-items-center flex-wrap">
                    <span className="small text-muted d-block mb-1">Official website</span>
                    <a
                      href={u.website}
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                      title={u.website}
                    >
                      <span>{u.website}</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) GUIDANCE NOTE */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="sectionCard bg-light border small">
            <h3 className="h6 mb-2">How to Use This Information</h3>
            <p className="mb-2">
              Use this page to discover major ODL/Online universities quickly. For the complete,
              official and updated list, always check the UGC-DEB portal.
            </p>
            <p className="mb-0 text-muted">
              Always verify the university + programme approval for your admission session before paying fees.
            </p>
          </div>
        </div>
      </section>
    </FrontendLayout>
    </>
  );
}
