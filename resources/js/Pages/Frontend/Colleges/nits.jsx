import React from "react";
import { Link, usePage } from '@inertiajs/react';
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CollegeTabsBar from "./CollegeTabsBar";
import { Network, MapPin, ExternalLink } from "lucide-react";

// -------------------------------------------------------------
// Tabs for National Institutes (same across IIT / NIT / IIIT / IIM / AIIMS / NIFT/NID / NLUs)
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
// NIT LIST – exactly from your data (no additions / removals)
// -------------------------------------------------------------
// const NIT_LIST = [
//   { no: 1, name: "NIT Allahabad", city: "Allahabad", state: "Uttar Pradesh", website: "www.mnnit.ac.in" },
//   { no: 2, name: "NIT Bhopal", city: "Bhopal", state: "Madhya Pradesh", website: "www.manit.ac.in" },
//   { no: 3, name: "NIT Calicut", city: "Calicut", state: "Kerala", website: "www.nitc.ac.in" },
//   { no: 4, name: "NIT Hamirpur", city: "Hamirpur", state: "Himachal Pradesh", website: "www.nith.ac.in" },
//   { no: 5, name: "NIT Jaipur", city: "Jaipur", state: "Rajasthan", website: "www.mnit.ac.in" },
//   { no: 6, name: "NIT Jalandhar", city: "Jalandhar", state: "Punjab", website: "www.nitj.ac.in" },
//   { no: 7, name: "NIT Jamshedpur", city: "Jamshedpur", state: "Jharkhand", website: "http://www.nitjsr.ac.in" },
//   { no: 8, name: "NIT Kurukshetra", city: "Kurukshetra", state: "Haryana", website: "www.nitkkr.nic.in" },
//   { no: 9, name: "NIT Nagpur", city: "Nagpur", state: "Maharashtra", website: "www.vnit.ac.in" },
//   { no: 10, name: "NIT Rourkela", city: "Rourkela", state: "Odisha", website: "www.nitrkl.ac.in" },
//   { no: 11, name: "NIT Silchar", city: "Silchar", state: "Assam", website: "www.nits.ac.in" },
//   { no: 12, name: "NIT Surathkal", city: "Mangalore", state: "Karnataka", website: "www.nitk.ac.in" },
//   { no: 13, name: "NIT Warangal", city: "Warangal", state: "Telangana", website: "www.nitw.ac.in" },
//   { no: 14, name: "NIT Durgapur", city: "Durgapur", state: "West Bengal", website: "www.nitdgp.ac.in" },
//   { no: 15, name: "NIT Srinagar", city: "Srinagar", state: "Jammu and Kashmir", website: "www.nitsri.net" },
//   { no: 16, name: "NIT Surat", city: "Surat", state: "Gujarat", website: "www.svnit.ac.in" },
//   { no: 17, name: "NIT Trichy", city: "Trichy", state: "Tamil Nadu", website: "www.nitt.edu" },
//   { no: 18, name: "NIT Patna", city: "Patna", state: "Bihar", website: "www.nitp.ac.in" },
//   { no: 19, name: "NIT Raipur", city: "Raipur", state: "Chhattisgarh", website: "www.nitrr.ac.in" },
//   { no: 20, name: "NIT Agartala", city: "Agartala", state: "Tripura", website: "www.tec.nic.in" },
//   { no: 21, name: "NIT Arunachal Pradesh", city: "Yupia", state: "Arunachal Pradesh", website: "www.nitap.in" },
//   { no: 22, name: "NIT Delhi", city: "New Delhi", state: "Delhi", website: "http://nitdelhi.ac.in/" },
//   { no: 23, name: "NIT Goa", city: "Farmagudi", state: "Goa", website: "www.nitgoa.ac.in/" },
//   { no: 24, name: "NIT Manipur", city: "Imphal", state: "Manipur", website: "http://www.nitmanipur.in/" },
//   { no: 25, name: "NIT Meghalaya", city: "Shillong", state: "Meghalaya", website: "http://www.nitm.ac.in/" },
//   { no: 26, name: "NIT Mizoram", city: "Aizawl", state: "Mizoram", website: "http://www.nitmz.ac.in" },
//   { no: 27, name: "NIT Nagaland", city: "Dimapur", state: "Nagaland", website: "http://nitnagaland.ac.in/homenew/" },
//   { no: 28, name: "NIT Puducherry", city: "Karaikal", state: "Puducherry", website: "http://www.nitt.edu/home/nitp/" },
//   { no: 29, name: "NIT Sikkim", city: "Ravangla", state: "Sikkim", website: "www.nitc.ac.in/sikkim/" },
//   { no: 30, name: "NIT Uttarakhand", city: "Srinagar", state: "Uttarakhand", website: "http://nituk.ac.in/" },
//   { no: 31, name: "NIT Andhra Pradesh", city: "Tadepalligudem", state: "Andhra Pradesh", website: "http://nitandhra.ac.in/" },
// ];

// -------------------------------------------------------------
// PAGE
// -------------------------------------------------------------
export default function NITsPage({collegeContents}) {

  const NIT_LIST = Array.isArray(collegeContents) ? collegeContents : [];

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="NITs – National Institutes of Technology"
        breadcrumb="NITs – National Institutes of Technology"
      />

      <CollegeTabsBar tabs={COLLEGE_TABS} activeId="nits" />

      {/* 1. ABOUT + SNAPSHOT (unchanged, no icons here as per instruction) */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">About the NITs</h2>
              <p className="sectionSub">
                The National Institutes of Technology (NITs) are autonomous public institutes of
                higher education in India. They offer degree courses at bachelors, masters and
                doctorate levels in various branches of engineering, architecture, management and
                science.
              </p>
              <p className="sectionSub mb-0">
                Admission to under-graduate courses such as Bachelor of Technology (B.Tech) and
                Bachelor of Architecture (B.Arch) programmes in NITs is through the Joint Entrance
                Examination (Main). Postgraduate admissions use exams like GATE for M.Tech and
                M.Sc, CAT for MBA, and NIMCET for MCA programmes.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3">Quick Snapshot</h3>
                <dl className="row small mb-0">
                  <dt className="col-5">Number of NITs</dt>
                  <dd className="col-7 mb-2">{NIT_LIST.length} institutes listed</dd>

                  <dt className="col-5">Type</dt>
                  <dd className="col-7 mb-2">
                    Autonomous public institutes of higher education
                  </dd>

                  <dt className="col-5">Levels</dt>
                  <dd className="col-7 mb-2">
                    Bachelor&apos;s, Master&apos;s and Doctoral programmes
                  </dd>

                  <dt className="col-5">Fields</dt>
                  <dd className="col-7 mb-2">
                    Engineering, architecture, management and science
                  </dd>

                  <dt className="col-5">UG Admission</dt>
                  <dd className="col-7 mb-2">JEE (Main)</dd>

                  <dt className="col-5">PG Admission</dt>
                  <dd className="col-7 mb-0">
                    GATE (M.Tech / M.Sc), CAT (MBA), NIMCET (MCA)
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROGRAMMES & ENTRANCE TESTS – LIGHT GRADIENT BG + DARK BOXES */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          {/* Header */}
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">Programmes & Entrance Tests at NITs</h2>
            <p className="sectionSub mb-0">
              A clean overview of how NIT academic programmes align with national entrance examinations.
            </p>
          </div>

          {/* Content */}
          <div className="row g-4 align-items-stretch">
            {/* LEFT – Large Programmes Box */}
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Programme pathways</span>
                </span>

                <p className="small mb-3">
                  NITs offer undergraduate, postgraduate and research-level programmes in engineering,
                  architecture, science, management and computer applications.
                </p>

                <ul className="nitDarkList mb-0">
                  <li><strong>B.Tech / B.Arch</strong> – undergraduate engineering & architecture.</li>
                  <li><strong>M.Tech / M.Sc</strong> – postgraduate technical & science disciplines.</li>
                  <li><strong>MBA</strong> – management programmes at selected NITs.</li>
                  <li><strong>MCA</strong> – through NIMCET entrance examination.</li>
                  <li><strong>PhD</strong> – research-level programmes.</li>
                </ul>
              </div>
            </div>

            {/* RIGHT – Exam Cards */}
            <div className="col-12 col-lg-7 d-flex">
              <div className="row g-3 w-100 align-content-stretch">
                {[
                  {
                    tag: "JEE (Main)",
                    level: "UG",
                    title: "Entry to B.Tech / B.Arch",
                    text: "Primary route for undergraduate engineering and architecture programmes in NITs.",
                  },
                  {
                    tag: "GATE",
                    level: "PG",
                    title: "M.Tech / M.Sc admissions",
                    text: "Used for postgraduate technical and science programmes.",
                  },
                  {
                    tag: "CAT",
                    level: "PG",
                    title: "MBA programmes",
                    text: "Entrance for management programmes offered at selected NITs.",
                  },
                  {
                    tag: "NIMCET",
                    level: "PG",
                    title: "MCA programmes",
                    text: "Common entrance test for MCA programmes in NITs.",
                  },
                ].map((exam, idx) => (
                  <div className="col-12 col-sm-6 d-flex" key={idx}>
                    <div className="nitDarkGlassCard w-100 d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="nitExamTag">{exam.tag}</span>
                        <span className="nitExamLevel">{exam.level}</span>
                      </div>
                      <p className="nitExamTitle mb-1">{exam.title}</p>
                      <p className="nitExamText mb-0">{exam.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. LIST OF NITS – SAME PREMIUM CARD STYLE AS IITs, MOBILE-FIRST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">
                National Institutes of Technology (NITs)
              </h2>
              <p className="sectionSub mb-0">
                All NIT campuses with city, state and official website links.
              </p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {NIT_LIST.map((inst) => (
              <div key={inst.no} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="iitCard w-100 d-flex flex-column">
                  {/* Rank + City badge */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="iitRank">#{inst.no}</span>
                    <span className="iitCodeBadge">{inst.city}</span>
                  </div>

                  {/* Name + State */}
                  <div className="mb-3">
                    <h3 className="h6 fw-semibold mb-1 text-dark">{inst.name}</h3>
                    <p className="small text-muted mb-0 d-flex align-items-center gap-1">
                      <MapPin size={14} className="text-primary" />
                      <span>
                        {inst.city}, {inst.state}
                      </span>
                    </p>
                  </div>

                  <div className="iitDivider my-2" />

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
              This section gives an overview of the NIT system, programmes available and key
              entrance tests, along with a list of campuses and websites.
            </p>
            <p className="mb-0 text-muted">
              For any particular admission cycle, students should always follow the latest official
              notifications for JEE (Main), GATE, CAT, NIMCET and the individual NIT websites for
              exact eligibility, dates and procedures.
            </p>
          </div>
        </div>
      </section>

    
      </FrontendLayout>
    </>
  );
}
