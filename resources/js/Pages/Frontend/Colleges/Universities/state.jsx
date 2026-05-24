"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CollegeTabsBar from "../CollegeTabsBar";
import { Layers3, Network, MapPin, ExternalLink, University } from "lucide-react";

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
// Official reference links (UGC is primary authority)
// -------------------------------------------------------------
const OFFICIAL_LINKS = {
  ugcStateDirectory:
    "https://www.ugc.gov.in/universitydetails/university?type=LZ1FUMk6U2JWGNLvhWfVSA%3D%3D", // State Universities
  ugcStatePdf: "https://www.ugc.gov.in/oldpdf/Consolidated_State_University_List.pdf",
};

// -------------------------------------------------------------
// WEST BENGAL SPOTLIGHT (curated list with official sites)
// (You can extend this list later as you build dedicated pages)
// -------------------------------------------------------------
const WB_STATE_UNIVERSITIES = [
  { no: 1, name: "University of Calcutta", city: "Kolkata", state: "West Bengal", website: "https://www.caluniv.ac.in/" },
  { no: 2, name: "Jadavpur University", city: "Kolkata", state: "West Bengal", website: "https://jadavpuruniversity.in/" },
  { no: 3, name: "Maulana Abul Kalam Azad University of Technology (MAKAUT)", city: "Nadia (Haringhata)", state: "West Bengal", website: "https://makautwb.ac.in/" },
  { no: 4, name: "University of Kalyani", city: "Kalyani", state: "West Bengal", website: "https://klyuniv.ac.in/" },
  { no: 5, name: "University of Burdwan", city: "Bardhaman", state: "West Bengal", website: "https://www.buruniv.ac.in/" },
  { no: 6, name: "University of North Bengal", city: "Siliguri", state: "West Bengal", website: "https://www.nbu.ac.in/" },
  { no: 7, name: "Vidyasagar University", city: "Midnapore", state: "West Bengal", website: "https://www.vidyasagar.ac.in/" },
  { no: 8, name: "Presidency University", city: "Kolkata", state: "West Bengal", website: "https://www.presiuniv.ac.in/" },
  { no: 9, name: "West Bengal State University", city: "Barasat", state: "West Bengal", website: "https://wbsu.ac.in/" },
  { no: 10, name: "Bankura University", city: "Bankura", state: "West Bengal", website: "https://www.bankurauniv.ac.in/" },
  { no: 11, name: "Aliah University", city: "Kolkata", state: "West Bengal", website: "https://www.aliah.ac.in/" },
  { no: 12, name: "Rabindra Bharati University", city: "Kolkata", state: "West Bengal", website: "https://rbu.ac.in/" },
];

// -------------------------------------------------------------
// PAGE
// -------------------------------------------------------------
export default function StateUniversitiesPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner title="State Universities in India" breadcrumb="State Universities" />

      <CollegeTabsBar tabs={UNIVERSITY_TABS} activeId="state" />

      {/* 1. ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <span>About State Universities</span>
              </h2>

              <p className="sectionSub">
                State Universities are established by a State Legislature Act and are
                key institutions for higher education across states. They offer a wide
                range of UG, PG and research programmes and often manage affiliated
                colleges (varies by state).
              </p>

              <p className="sectionSub mb-0">
                Because the total number and details can change over time, the most
                reliable way to verify recognition and official URLs is the UGC
                State Universities directory.
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
                  <dd className="col-7 mb-2">{WB_STATE_UNIVERSITIES.length} WB universities listed</dd>

                  <dt className="col-5">Official directory</dt>
                  <dd className="col-7 mb-2">
                    <a
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                      href={OFFICIAL_LINKS.ugcStateDirectory}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>UGC – State Universities</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </dd>

                  <dt className="col-5">Reference PDF</dt>
                  <dd className="col-7 mb-0">
                    <a
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                      href={OFFICIAL_LINKS.ugcStatePdf}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>UGC Consolidated List</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROGRAMMES & ADMISSIONS – DARK BOXES ON LIGHT GRADIENT */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">Programmes & Admissions</h2>
            <p className="sectionSub mb-0">
              Typical structure across State Universities (exact rules vary by state & university).
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* LEFT */}
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Academic pathways</span>
                </span>

                <p className="small mb-3">
                  Most State Universities offer broad multi-stream programmes and
                  may also affiliate a large network of colleges.
                </p>

                <ul className="nitDarkList mb-0">
                  <li><strong>UG</strong> – BA/BSc/BCom and many professional UG options.</li>
                  <li><strong>PG</strong> – MA/MSc/MCom/MBA and specialized masters.</li>
                  <li><strong>PhD</strong> – research degrees with tests + interviews.</li>
                  <li><strong>Affiliated colleges</strong> – admissions may run via university/centralized portals.</li>
                </ul>
              </div>
            </div>

            {/* RIGHT – cards */}
            <div className="col-12 col-lg-7 d-flex">
              <div className="row g-3 w-100 align-content-stretch">
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">UG</span>
                      <span className="nitExamLevel">Admissions</span>
                    </div>
                    <p className="nitExamTitle mb-1">Merit / entrance (varies)</p>
                    <p className="nitExamText mb-0">
                      Many UG courses admit via merit + subject requirements; some use entrances/portals.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">PG</span>
                      <span className="nitExamLevel">Admissions</span>
                    </div>
                    <p className="nitExamTitle mb-1">University tests / CUET-PG</p>
                    <p className="nitExamText mb-0">
                      PG admissions can be test-based, interview-based or CUET-PG based (varies).
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Recognition</span>
                      <span className="nitExamLevel">UGC</span>
                    </div>
                    <p className="nitExamTitle mb-1">Verify on UGC directory</p>
                    <p className="nitExamText mb-0">
                      Always confirm a university’s type, state, status and official URL on UGC.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Tip</span>
                      <span className="nitExamLevel">Students</span>
                    </div>
                    <p className="nitExamTitle mb-1">Track notifications</p>
                    <p className="nitExamText mb-0">
                      Follow the university website for admission notices, schedules and merit lists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Browse All CTA */}
          <div className="text-center mt-4">
            <a
              href={OFFICIAL_LINKS.ugcStateDirectory}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Browse All State Universities on UGC <ExternalLink size={16} className="ms-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. WEST BENGAL SPOTLIGHT GRID */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">West Bengal – State Universities (Spotlight)</h2>
              <p className="sectionSub mb-0">
                Curated WB universities with official websites (you can expand as your portal grows).
              </p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {WB_STATE_UNIVERSITIES.map((u) => (
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

      {/* 4. GUIDANCE NOTE */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="sectionCard bg-light border small">
            <h3 className="h6 mb-2">How to Use This Information</h3>
            <p className="mb-2">
              Use the WB spotlight list for quick navigation, and use the UGC directory link to
              browse the complete official list of State Universities across India.
            </p>
            <p className="mb-0 text-muted">
              Always check the latest admission notices, eligibility rules and schedules on the
              official university website.
            </p>
          </div>
        </div>
      </section>
            </FrontendLayout>
    </>
  );
}
