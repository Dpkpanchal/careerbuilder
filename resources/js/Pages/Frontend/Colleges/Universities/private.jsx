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
// Official reference links (authoritative)
// -------------------------------------------------------------
const OFFICIAL_LINKS = {
  // UGC Directory – State Private Universities
  ugcPrivateDirectory:
    "https://www.ugc.gov.in/universitydetails/university?type=0wBmFB1Rb4JGVzq9UP%2FiOg%3D%3D", // State Private Universities :contentReference[oaicite:3]{index=3}

  // UGC Directory (shows multiple types; useful if you later add filters/search UX)
  ugcUniversitiesDirectory:
    "https://www.ugc.gov.in/universitydetails/university?type=MuOh4z0uqRaY2k8Ag10I0g%3D%3D", // View All :contentReference[oaicite:4]{index=4}

  // Deemed portal – list with “Website” column
  ugcDeemedList:
    "https://deemed.ugc.ac.in/Home/ListOfDeemedToBeUniversity", // :contentReference[oaicite:5]{index=5}

  // UGC “other details” pages (optional references)
  ugcPrivateOther:
    "https://www.ugc.gov.in/universitydetails/universityother?type=0wBmFB1Rb4JGVzq9UP%2FiOg%3D%3D", // :contentReference[oaicite:6]{index=6}
  ugcDeemedOther:
    "https://www.ugc.gov.in/universitydetails/universityother?type=UCL6fMspL2LJS89kv%2B%2BN3A%3D%3D", // Deemed details page :contentReference[oaicite:7]{index=7}
};

// -------------------------------------------------------------
// West Bengal Spotlight (curated, official websites)
// Private Universities in WB (examples students search most often)
// -------------------------------------------------------------
const WB_PRIVATE_UNIS = [
  { no: 1, name: "Adamas University", city: "Kolkata (Barasat)", state: "West Bengal", website: "https://adamasuniversity.ac.in/" }, // :contentReference[oaicite:8]{index=8}
  { no: 2, name: "Amity University Kolkata", city: "Kolkata (New Town)", state: "West Bengal", website: "https://amity.edu/kolkata/" }, // :contentReference[oaicite:9]{index=9}
  { no: 3, name: "Sister Nivedita University", city: "Kolkata (New Town)", state: "West Bengal", website: "https://www.snuniv.ac.in/" }, // :contentReference[oaicite:10]{index=10}
  { no: 4, name: "Techno India University", city: "Kolkata (Salt Lake)", state: "West Bengal", website: "https://www.technoindiauniversity.ac.in/" }, // :contentReference[oaicite:11]{index=11}
  { no: 5, name: "Brainware University", city: "Kolkata (Barasat)", state: "West Bengal", website: "https://www.brainwareuniversity.ac.in/" }, // :contentReference[oaicite:12]{index=12}
  { no: 6, name: "JIS University", city: "Kolkata", state: "West Bengal", website: "https://www.jisuniversity.ac.in/" }, // :contentReference[oaicite:13]{index=13}
  { no: 7, name: "University of Engineering & Management (UEM), Kolkata", city: "Kolkata (New Town)", state: "West Bengal", website: "https://uem.edu.in/uem-kolkata/" }, // :contentReference[oaicite:14]{index=14}
  { no: 8, name: "St. Xavier’s University, Kolkata", city: "Kolkata (New Town)", state: "West Bengal", website: "https://www.sxuk.edu.in/" }, // :contentReference[oaicite:15]{index=15}
];

// Deemed in/around WB (spotlight example)
const WB_DEEMED_UNIS = [
  { no: 1, name: "Ramakrishna Mission Vivekananda Educational and Research Institute (RKMVERI)", city: "Belur Math (Howrah)", state: "West Bengal", website: "https://rkmvu.ac.in/" }, // :contentReference[oaicite:16]{index=16}
];

// -------------------------------------------------------------
// PAGE
// -------------------------------------------------------------
export default function PrivateDeemedUniversitiesPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Private & Deemed Universities in India"
        breadcrumb="Private & Deemed Universities"
      />

      <CollegeTabsBar tabs={UNIVERSITY_TABS} activeId="private" />

      {/* 1. ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <span>About Private & Deemed Universities</span>
              </h2>

              <p className="sectionSub">
                In India, <strong>State Private Universities</strong> are established by State Acts
                and listed by UGC. <strong>Deemed-to-be Universities</strong> are institutions
                declared “Deemed” under Section 3 of the UGC Act and are listed on UGC’s
                Deemed University portal.
              </p>

              <p className="sectionSub mb-0">
                To avoid confusion with unrecognized institutions, always verify the university’s
                status and official website using UGC listings before applying.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <dl className="row small mb-0">
                  <dt className="col-5">Private (official list)</dt>
                  <dd className="col-7 mb-2">
                    <a
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                      href={OFFICIAL_LINKS.ugcPrivateDirectory}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>UGC – State Private Universities</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </dd>

                  <dt className="col-5">Deemed (official list)</dt>
                  <dd className="col-7 mb-2">
                    <a
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                      href={OFFICIAL_LINKS.ugcDeemedList}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>UGC – Deemed Universities</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </dd>

                  <dt className="col-5">WB spotlight</dt>
                  <dd className="col-7 mb-2">
                    {WB_PRIVATE_UNIS.length} private + {WB_DEEMED_UNIS.length} deemed 
                  </dd>

                  <dt className="col-5">Tip</dt>
                  <dd className="col-7 mb-0 d-flex align-items-start gap-2">
                    <ShieldCheck size={16} className="text-primary mt-1" />
                    <span>Verify on UGC before admission</span>
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
              Typical pathways across Private and Deemed universities (exact rules vary by institute).
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* LEFT – Programme pathways */}
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Academic pathways</span>
                </span>

                <p className="small mb-3">
                  Many private/deemed universities run multi-disciplinary schools and
                  professional programmes with industry tie-ups and campus placements.
                </p>

                <ul className="nitDarkList mb-0">
                  <li><strong>UG</strong> – BA/BSc/BCom/BBA/BCA + domain UG programmes</li>
                  <li><strong>Professional</strong> – BTech, Nursing/Pharmacy, Law, Design (where approved)</li>
                  <li><strong>PG</strong> – MBA/MA/MSc/MCA and specialized masters</li>
                  <li><strong>Research</strong> – PhD & centres (as per eligibility + notifications)</li>
                </ul>
              </div>
            </div>

            {/* RIGHT – Cards */}
            <div className="col-12 col-lg-7 d-flex">
              <div className="row g-3 w-100 align-content-stretch">
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">UG</span>
                      <span className="nitExamLevel">Admissions</span>
                    </div>
                    <p className="nitExamTitle mb-1">Merit / entrance tests</p>
                    <p className="nitExamText mb-0">
                      Admissions may be merit-based or exam-based depending on programme and rules.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Approvals</span>
                      <span className="nitExamLevel">Important</span>
                    </div>
                    <p className="nitExamTitle mb-1">Programme approvals</p>
                    <p className="nitExamText mb-0">
                      Some programmes need approvals from statutory councils (where applicable).
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Verification</span>
                      <span className="nitExamLevel">UGC</span>
                    </div>
                    <p className="nitExamTitle mb-1">Use UGC lists only</p>
                    <p className="nitExamText mb-0">
                      Confirm the university name and URL from UGC before paying any fee.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Browse</span>
                      <span className="nitExamLevel">Official</span>
                    </div>
                    <p className="nitExamTitle mb-1">Explore official directories</p>
                    <p className="nitExamText mb-0">
                      Private Universities and Deemed Universities have separate official UGC lists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Browse All CTA */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            <a
              href={OFFICIAL_LINKS.ugcPrivateDirectory}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Browse Private Universities (UGC) <ExternalLink size={16} className="ms-1" />
            </a>
            <a
              href={OFFICIAL_LINKS.ugcDeemedList}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              Browse Deemed Universities (UGC) <ExternalLink size={16} className="ms-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 3A. WEST BENGAL – PRIVATE UNIVERSITIES (SPOTLIGHT GRID) */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">West Bengal – Private Universities </h2>
              <p className="sectionSub mb-0">Curated WB private universities with official websites.</p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {WB_PRIVATE_UNIS.map((u) => (
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
                      <span>{u.city}, {u.state}</span>
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

      {/* 3B. WEST BENGAL – DEEMED (SPOTLIGHT GRID) */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">West Bengal – Deemed-to-be Universities </h2>
              <p className="sectionSub mb-0">Verified deemed university with official website.</p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {WB_DEEMED_UNIS.map((u) => (
              <div key={u.no} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="iitCard w-100 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="iitRank">#{u.no}</span>
                    <span className="iitCodeBadge">{u.city}</span>
                  </div>

                  <div className="mb-3">
                    <h3 className="h6 fw-semibold mb-1 text-dark d-flex  gap-2">
                      <University size={16} className="text-primary flex-shrink-0" />
                      <span>{u.name}</span>
                    </h3>

                    <p className="small text-muted mb-0 d-flex align-items-center gap-1">
                      <MapPin size={14} className="text-primary flex-shrink-0" />
                      <span>{u.city}, {u.state}</span>
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

          <div className="text-center mt-3">
            <a
              href={OFFICIAL_LINKS.ugcDeemedList}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary btn-sm"
            >
              View all Deemed-to-be Universities (UGC) <ExternalLink size={14} className="ms-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. GUIDANCE NOTE */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="sectionCard bg-light border small">
            <h3 className="h6 mb-2">How to Use This Information</h3>
            <p className="mb-2">
              Use the WB spotlight section for quick navigation. For the complete official list,
              always use the UGC directories:
              <span className="ms-1">
                Private Universities (UGC) and Deemed Universities (UGC).
              </span>
            </p>
            <p className="mb-0 text-muted">
              Before enrolling, verify the university’s name, status and website on UGC to avoid
              confusion with unrecognized institutions.
            </p>
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
