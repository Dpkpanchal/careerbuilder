import React from "react";
import { Link, usePage } from '@inertiajs/react';
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CollegeTabsBar from "./CollegeTabsBar";
import {
  GraduationCap,
  Layers3,
  Network,
  MapPin,
  ExternalLink,
} from "lucide-react";

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
// EXACT IIT DATA YOU PASTED (NOTHING ADDED / REMOVED)
// -------------------------------------------------------------

const IIT_LIST = [
  {
    name: "IIT Kharagpur",
    code: "IITKGP",
    state: "West Bengal",
    website: "http://www.iitkgp.ac.in",
  },
  {
    name: "IIT Bombay",
    code: "IITB",
    state: "Maharashtra",
    website: "http://www.iitb.ac.in",
  },
  {
    name: "IIT Kanpur",
    code: "IITK",
    state: "Uttar Pradesh",
    website: "http://www.iitk.ac.in",
  },
  {
    name: "IIT Madras",
    code: "IITM",
    state: "Tamil Nadu",
    website: "http://www.iitm.ac.in/",
  },
  {
    name: "IIT Delhi",
    code: "IITD",
    state: "Delhi",
    website: "http://www.iitd.ac.in",
  },
  {
    name: "IIT Guwahati",
    code: "IITG",
    state: "Assam",
    website: "http://www.iitg.ernet.in",
  },
  {
    name: "IIT Roorkee",
    code: "IITR",
    state: "Uttarakhand",
    website: "http://www.iitr.ernet.in",
  },
  {
    name: "IIT Ropar",
    code: "IITRPR",
    state: "Punjab",
    website: "http://www.iitrpr.ac.in",
  },
  {
    name: "IIT Bhubaneswar",
    code: "IITBBS",
    state: "Odisha",
    website: "http://www.iitbbs.ac.in",
  },
  {
    name: "IIT Gandhinagar",
    code: "IITGN",
    state: "Gujarat",
    website: "https://www.iitgn.ac.in/",
  },
  {
    name: "IIT Hyderabad",
    code: "IITH",
    state: "Telangana",
    website: "http://www.iith.ac.in",
  },
  {
    name: "IIT Jodhpur",
    code: "IITJ",
    state: "Rajasthan",
    website: "http://www.iitj.ac.in",
  },
  {
    name: "IIT Patna",
    code: "IITP",
    state: "Bihar",
    website: "http://www.iitp.ac.in",
  },
  {
    name: "IIT Indore",
    code: "IITI",
    state: "Madhya Pradesh",
    website: "http://www.iiti.ac.in",
  },
  {
    name: "IIT Mandi",
    code: "IITMandi",
    state: "Himachal Pradesh",
    website: "http://www.iitmandi.ac.in",
  },
  {
    name: "IIT (BHU) Varanasi",
    code: "IIT (BHU)",
    state: "Uttar Pradesh",
    website: "http://iitbhu.ac.in",
  },
  {
    name: "IIT Palakkad",
    code: "IITPKD",
    state: "Kerala",
    website: "http://iitpkd.ac.in",
  },
  {
    name: "IIT Tirupati",
    code: "IITTP",
    state: "Andhra Pradesh",
    website: "http://iittp.ac.in",
  },
  {
    name: "IIT Dhanbad",
    code: "IIT (ISM)",
    state: "Jharkhand",
    website: "http://iitism.ac.in",
  },
  {
    name: "IIT Bhilai",
    code: "IITBH",
    state: "Chhattisgarh",
    website: "https://www.iitbhilai.ac.in",
  },
  {
    name: "IIT Goa",
    code: "IITGOA",
    state: "Goa",
    website: "http://www.iitgoa.ac.in",
  },
  {
    name: "IIT Jammu",
    code: "IITJMU",
    state: "Jammu and Kashmir",
    website: "http://iitjammu.ac.in",
  },
  {
    name: "IIT Dharwad",
    code: "IITDH",
    state: "Karnataka",
    website: "http://www.iitdh.ac.in",
  },
];

// -------------------------------------------------------------
// MAIN PAGE
// -------------------------------------------------------------

export default function IITsPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="IITs – Indian Institutes of Technology"
        breadcrumb="IITs – Indian Institutes of Technology"
      />

      <CollegeTabsBar tabs={COLLEGE_TABS} activeId="national" />

      {/* 1. ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <span>About the IITs</span>
              </h2>
              <p className="sectionSub">
                The Indian Institutes of Technology (IITs) are autonomous public
                institutes of higher education. They are among the most
                reputed engineering and technology institutions in the country
                and admit students to their undergraduate programmes through a
                common entrance process based on the Joint Entrance Examination
                (Advanced).
              </p>
              <p className="sectionSub mb-0">
                For postgraduate technical degrees such as M.Tech or MS,
                admissions are taken mainly through the Graduate Aptitude Test
                in Engineering (GATE). IITs also offer M.Sc in subjects like
                Mathematics, Physics and Chemistry, as well as management and
                design programmes, with entrance tests such as CAT, JAM and
                CEED mentioned for different courses.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>
                <dl className="row small mb-0">
                  <dt className="col-5">Number of IITs</dt>
                  <dd className="col-7 mb-2">
                    {IIT_LIST.length} institutes (as listed in this guide)
                  </dd>

                  <dt className="col-5">Type</dt>
                  <dd className="col-7 mb-2">
                    Autonomous public institutes of higher education
                  </dd>

                  <dt className="col-5">UG Admission</dt>
                  <dd className="col-7 mb-2">
                    Joint Entrance Examination – Advanced
                  </dd>

                  <dt className="col-5">PG Admission</dt>
                  <dd className="col-7 mb-2">
                    Primarily through GATE (technical), with JAM / CAT / CEED
                    for other programmes
                  </dd>

                  <dt className="col-5">Example Degrees</dt>
                  <dd className="col-7 mb-0">
                    B.Tech, M.Tech, MS, M.Sc, management and design programmes
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROGRAMMES & ENTRANCE TESTS – IITs */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          {/* Header */}
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">
              Programmes & Entrance Tests at IITs
            </h2>
            <p className="sectionSub mb-0">
              IITs offer a wide range of technical, scientific and professional
              programmes, each linked with specific national entrance
              examinations.
            </p>
          </div>

          {/* Content Grid */}
          <div className="row g-4 align-items-stretch">
            {/* LEFT – Main programmes overview */}
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Programme pathways</span>
                </span>

                <p className="small mb-3">
                  Indian Institutes of Technology offer undergraduate,
                  postgraduate and doctoral programmes across engineering,
                  sciences, management, architecture and design.
                </p>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>B.Tech / B.S</strong> – premier undergraduate
                    engineering & science degrees.
                  </li>
                  <li>
                    <strong>B.Arch</strong> – architecture programme at select
                    IITs.
                  </li>
                  <li>
                    <strong>M.Tech / M.S</strong> – postgraduate engineering &
                    research-oriented programmes.
                  </li>
                  <li>
                    <strong>M.Sc</strong> – postgraduate science disciplines.
                  </li>
                  <li>
                    <strong>M.Des</strong> – design programmes offered at top
                    IITs.
                  </li>
                  <li>
                    <strong>MBA</strong> – management programmes at certain IIT
                    campuses.
                  </li>
                  <li>
                    <strong>PhD</strong> – research programmes across
                    engineering, science & humanities.
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT – Entrance exam cards */}
            <div className="col-12 col-lg-7 d-flex">
              <div className="row g-3 w-100 align-content-stretch">
                {/* Card 1 — JEE Advanced */}
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">JEE (Advanced)</span>
                      <span className="nitExamLevel">UG</span>
                    </div>
                    <p className="nitExamTitle mb-1">
                      Entry to B.Tech / B.S / B.Arch
                    </p>
                    <p className="nitExamText mb-0">
                      The primary examination for undergraduate admission into
                      IITs.
                    </p>
                  </div>
                </div>

                {/* Card 2 — GATE */}
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">GATE</span>
                      <span className="nitExamLevel">PG</span>
                    </div>
                    <p className="nitExamTitle mb-1">
                      M.Tech / M.S admissions
                    </p>
                    <p className="nitExamText mb-0">
                      Required for IIT postgraduate engineering and research
                      programmes.
                    </p>
                  </div>
                </div>

                {/* Card 3 — JAM */}
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">JAM</span>
                      <span className="nitExamLevel">PG</span>
                    </div>
                    <p className="nitExamTitle mb-1">M.Sc programmes</p>
                    <p className="nitExamText mb-0">
                      Joint Admission Test for IIT postgraduate science courses.
                    </p>
                  </div>
                </div>

                {/* Card 4 — CAT / CEED */}
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">CAT / CEED</span>
                      <span className="nitExamLevel">PG</span>
                    </div>
                    <p className="nitExamTitle mb-1">
                      MBA / M.Des programmes
                    </p>
                    <p className="nitExamText mb-0">
                      Management programmes use CAT, while design programmes use
                      CEED.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIST OF IITS – PREMIUM, CATALOG STYLE, USING YOUR DATA */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">
                Indian Institutes of Technology (IITs)
              </h2>
              <p className="sectionSub mb-0">
                A quick catalogue of all {IIT_LIST.length} IITs with their
                codes, states and official websites.
              </p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {IIT_LIST.map((inst, index) => (
              <div key={inst.name} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="iitCard w-100 d-flex flex-column">
                  {/* Rank + Code */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="iitRank">#{index + 1}</span>

                    <span className="iitCodeBadge">{inst.code}</span>
                  </div>

                  {/* Name + State */}
                  <div className="mb-3">
                    <h3 className="h6 fw-semibold mb-1 text-dark">
                      {inst.name}
                    </h3>
                    <p className="small text-muted mb-0 d-flex align-items-center gap-1">
                      <MapPin size={14} className="text-primary" />
                      <span>{inst.state}</span>
                    </p>
                  </div>

                  <div className="iitDivider my-2"></div>

                  {/* Official Website */}
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
              This section gives an overview of what IITs are, which campuses
              exist, and which entrance tests are associated with different
              types of programmes.
            </p>
            <p className="mb-0 text-muted">
              For any specific year, candidates should always follow the latest
              official notifications for JEE (Advanced), GATE, JAM, CAT, CEED
              and the individual IIT websites for exact eligibility, important
              dates and admission procedures.
            </p>
          </div>
        </div>
      </section>

    
      </FrontendLayout>
    </>
  );
}
