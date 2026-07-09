import React from "react";
import { Link, usePage } from '@inertiajs/react';
import HeroInner from "@/components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CollegeTabsBar from "./CollegeTabsBar";
import { BriefcaseBusiness, Layers3, Network, MapPin, ExternalLink } from "lucide-react";

// -------------------------------------------------------------
// Tabs – same as IIT / NIT pages
// -------------------------------------------------------------
const COLLEGE_TABS = [
  {
    id: "iits",
    label: "IITs",
    href: '/colleges/iits-indian-institutes-of-technology',
  },
  {
    id: "nits",
    label: "NITs",
    href: '/colleges/nits-national-institutes-of-technology',
  },

  {
    id: "iims",
    label: "IIMs",
    href: '/colleges/iims-management-institutes',
  },
  {
    id: "aiims",
    label: "AIIMS",
    href: '/colleges/aiims-medical-institutes',
  },
  {
    id: "design",
    label: "NIFT / NID",
    href: '/colleges/nift-nid-fashion-design',
  },
  {
    id: "nlu",
    label: "NLUs",
    href: '/colleges/national-law-universities-nlus',
  },
];

// -------------------------------------------------------------
// IIM LIST – 20 IIMs (name, city, state, website)
// -------------------------------------------------------------
const IIM_LIST = [
  {
    no: 1,
    name: "Indian Institute of Management Calcutta",
    city: "Kolkata",
    state: "West Bengal",
    website: "https://www.iimcal.ac.in",
  },
  {
    no: 2,
    name: "Indian Institute of Management Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    website: "https://www.iima.ac.in",
  },
  {
    no: 3,
    name: "Indian Institute of Management Bangalore",
    city: "Bengaluru",
    state: "Karnataka",
    website: "https://www.iimb.ac.in",
  },
  {
    no: 4,
    name: "Indian Institute of Management Lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    website: "https://www.iiml.ac.in",
  },
  {
    no: 5,
    name: "Indian Institute of Management Kozhikode",
    city: "Kozhikode",
    state: "Kerala",
    website: "https://www.iimk.ac.in",
  },
  {
    no: 6,
    name: "Indian Institute of Management Indore",
    city: "Indore",
    state: "Madhya Pradesh",
    website: "https://www.iimidr.ac.in",
  },
  {
    no: 7,
    name: "Indian Institute of Management Shillong",
    city: "Shillong",
    state: "Meghalaya",
    website: "https://www.iimshillong.ac.in",
  },
  {
    no: 8,
    name: "Indian Institute of Management Rohtak",
    city: "Rohtak",
    state: "Haryana",
    website: "https://www.iimrohtak.ac.in",
  },
  {
    no: 9,
    name: "Indian Institute of Management Ranchi",
    city: "Ranchi",
    state: "Jharkhand",
    website: "https://www.iimranchi.ac.in",
  },
  {
    no: 10,
    name: "Indian Institute of Management Raipur",
    city: "Raipur",
    state: "Chhattisgarh",
    website: "https://www.iimraipur.ac.in",
  },
  {
    no: 11,
    name: "Indian Institute of Management Kashipur",
    city: "Kashipur",
    state: "Uttarakhand",
    website: "https://www.iimkashipur.ac.in",
  },
  {
    no: 12,
    name: "Indian Institute of Management Tiruchirappalli",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    website: "https://www.iimtrichy.ac.in",
  },
  {
    no: 13,
    name: "Indian Institute of Management Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    website: "https://www.iimu.ac.in",
  },
  {
    no: 14,
    name: "Indian Institute of Management Amritsar",
    city: "Amritsar",
    state: "Punjab",
    website: "https://www.iimamritsar.ac.in",
  },
  {
    no: 15,
    name: "Indian Institute of Management Bodh Gaya",
    city: "Bodh Gaya",
    state: "Bihar",
    website: "https://www.iimbg.ac.in",
  },
  {
    no: 16,
    name: "Indian Institute of Management Nagpur",
    city: "Nagpur",
    state: "Maharashtra",
    website: "https://www.iimnagpur.ac.in",
  },
  {
    no: 17,
    name: "Indian Institute of Management Sambalpur",
    city: "Sambalpur",
    state: "Odisha",
    website: "https://www.iimsambalpur.ac.in",
  },
  {
    no: 18,
    name: "Indian Institute of Management Sirmaur",
    city: "Sirmaur district",
    state: "Himachal Pradesh",
    website: "https://www.iimsirmaur.ac.in",
  },
  {
    no: 19,
    name: "Indian Institute of Management Visakhapatnam",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    website: "https://www.iimv.ac.in",
  },
  {
    no: 20,
    name: "Indian Institute of Management Jammu",
    city: "Jammu",
    state: "Jammu and Kashmir",
    website: "https://www.iimj.ac.in",
  },
];

// -------------------------------------------------------------
// PAGE
// -------------------------------------------------------------
export default function IIMsPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="IIMs – Indian Institutes of Management"
        breadcrumb="IIMs – Indian Institutes of Management"
      />

      <CollegeTabsBar tabs={COLLEGE_TABS} activeId="iims" />

      {/* 1. ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <span>About the IIMs</span>
              </h2>
              <p className="sectionSub">
                The Indian Institutes of Management (IIMs) are a group of public, autonomous
                institutes of management education and research in India. They are known for
                their flagship Post Graduate Programme in Management (PGP) and related diploma
                programmes which are treated as equivalent to regular MBA degrees.
              </p>
              <p className="sectionSub mb-0">
                Many IIMs also offer one-year management programmes for experienced graduates,
                doctoral-level Fellow Programme in Management (FPM), and a range of executive,
                part-time and specialised programmes. Some campuses run unique integrated and
                working-professional programmes. Admission to core management programmes is
                primarily through the Common Admission Test (CAT).
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>
                <dl className="row small mb-0">
                  <dt className="col-5">Number of IIMs</dt>
                  <dd className="col-7 mb-2">
                    {IIM_LIST.length} institutes shown in this list
                  </dd>

                  <dt className="col-5">Type</dt>
                  <dd className="col-7 mb-2">
                    Public, autonomous institutes of management education
                  </dd>

                  <dt className="col-5">Flagship Programme</dt>
                  <dd className="col-7 mb-2">
                    Post Graduate Programme in Management (PGP) and equivalent diplomas
                  </dd>

                  <dt className="col-5">Other Programmes</dt>
                  <dd className="col-7 mb-2">
                    One-year management programmes, FPM (doctoral), executive & part-time courses
                  </dd>

                  <dt className="col-5">Main Entrance</dt>
                  <dd className="col-7 mb-0">
                    Common Admission Test (CAT) for most management programmes
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROGRAMMES & ENTRANCE TESTS – DARK BOXES ON LIGHT GRADIENT */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          {/* Header */}
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">
              Programmes & Entrance Tests at IIMs
            </h2>
            <p className="sectionSub mb-0">
              How the main IIM management programmes connect with national-level entrance tests.
            </p>
          </div>

          {/* Content */}
          <div className="row g-4 align-items-stretch">
            {/* LEFT – Programme pathways */}
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Programme pathways</span>
                </span>

                <p className="small mb-3">
                  IIMs offer management education from early-career level to senior leadership:
                  full-time PGP, one-year executive tracks, doctoral research, and short-term
                  executive education.
                </p>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>PGP / MBA-equivalent</strong> – core two-year flagship programme in management.
                  </li>
                  <li>
                    <strong>One-year executive programmes</strong> – for candidates with prior work experience.
                  </li>
                  <li>
                    <strong>FPM / PhD</strong> – Fellow Programme in Management and other doctoral-level tracks.
                  </li>
                  <li>
                    <strong>Executive & part-time programmes</strong> – working manager programmes and EMBA formats.
                  </li>
                  <li>
                    <strong>Integrated or unique programmes</strong> – such as five-year integrated management
                    programmes at select IIMs.
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT – Exam cards */}
            <div className="col-12 col-lg-7 d-flex">
              <div className="row g-3 w-100 align-content-stretch">
                {/* CAT */}
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">CAT</span>
                      <span className="nitExamLevel">PG</span>
                    </div>
                    <p className="nitExamTitle mb-1">PGP / MBA-equivalent entry</p>
                    <p className="nitExamText mb-0">
                      Main national-level entrance test for core management programmes at IIMs.
                    </p>
                  </div>
                </div>

                {/* Other tests / profiles */}
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Profiles & other criteria</span>
                      <span className="nitExamLevel">PG / Exec</span>
                    </div>
                    <p className="nitExamTitle mb-1">Executive & specialised programmes</p>
                    <p className="nitExamText mb-0">
                      Some programmes may use CAT scores along with work experience, interviews,
                      institute-level tests or academic records.
                    </p>
                  </div>
                </div>

                {/* Doctoral selection */}
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">FPM / PhD selection</span>
                      <span className="nitExamLevel">Doctoral</span>
                    </div>
                    <p className="nitExamTitle mb-1">Research admissions</p>
                    <p className="nitExamText mb-0">
                      Doctoral programmes typically combine test scores, academic profile and
                      research interviews as per each IIM’s rules.
                    </p>
                  </div>
                </div>

                {/* Short-term executive */}
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Executive education</span>
                      <span className="nitExamLevel"> Professionals</span>
                    </div>
                    <p className="nitExamTitle mb-1">Short-term & modular courses</p>
                    <p className="nitExamText mb-0">
                      Many IIMs run open and custom executive programmes where selection is based
                      on professional background instead of a national exam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIST OF IIMs – PREMIUM CATALOG GRID */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">
                Indian Institutes of Management (IIMs)
              </h2>
              <p className="sectionSub mb-0">
                A catalogue of major IIM campuses across India with their locations and official websites.
              </p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {IIM_LIST.map((inst) => (
              <div key={inst.no} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="iitCard w-100 d-flex flex-column">
                  {/* Rank + city badge */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="iitRank">#{inst.no}</span>
                    <span className="iitCodeBadge">{inst.city}</span>
                  </div>

                  {/* Name + state */}
                  <div className="mb-3">
                    <h3 className="h6 fw-semibold mb-1 text-dark">
                      {inst.name}
                    </h3>
                    <p className="small text-muted mb-0 d-flex align-items-center gap-1">
                      <MapPin size={14} className="text-primary" />
                      <span>
                        {inst.city}, {inst.state}
                      </span>
                    </p>
                  </div>

                  <div className="iitDivider my-2" />

                  {/* Official website */}
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="small text-muted d-block mb-1">
                      Official website
                    </span>
                    <a
                      href={inst.website}
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
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

      {/* 4. GUIDANCE NOTE */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="sectionCard bg-light border small">
            <h3 className="h6 mb-2">How to Use This Information</h3>
            <p className="mb-2">
              This page gives an overview of the IIM system, broad programme types and the
              main national-level entrance test used for admissions, along with a list of
              major IIM campuses.
            </p>
            <p className="mb-0 text-muted">
              For any particular admission cycle, candidates should always follow the latest
              official notifications for CAT and other institute-specific admission details
              published on the respective IIM websites.
            </p>
          </div>
        </div>
      </section>

    
      </FrontendLayout>
    </>
  );
}
