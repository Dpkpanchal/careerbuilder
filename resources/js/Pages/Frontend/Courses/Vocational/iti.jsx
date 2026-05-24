"use client";

import React, { useState, useRef, useEffect } from "react";
import { Link, usePage } from '@inertiajs/react';
import {
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import VocationalTabsBar from "./VocationalTabsBar";


// ------------------------------------------------------------------------
// Tabs (same for all vocational pages)
// ------------------------------------------------------------------------

const TABS = [
  {
    id: "class-8-plus",
    label: "Class 8+ Vocational Trades",
    href: '/courses/class-8-vocational-trades',
    
  },
  {
    id: "class-10-plus",
    label: "Class 10+ Vocational Trades",
    href: '/courses/class-10-vocational-trades',
  },
  {
    id: "iti",
    label: "ITI & ITC Trades",
    href: '/courses/iti-itc-trades',
  },
  {
    id: "msme",
    label: "MSME Tool Room Courses",
    href: '/courses/msme-tool-room-courses',
  },

];


// ------------------------------------------------------------------------
// Extracted ONLY from your Career Book
// ------------------------------------------------------------------------

// We derive ITI/ITC trade groupings purely from vocational trade sets.
// No external trade names are used.

const ITI_SECTORS = [
  {
    id: "et",
    code: "ET",
    title: "Engineering & Technology Trades",
    description:
      "Hands-on technical work such as repair, wiring, maintenance, fabrication and workshop-based skills.",
    courses: [
      "Electrical House Wiring & Motor Winding",
      "2/3 Wheeler Mechanic",
      "Auto Electrician",
      "Automobile Maintenance",
      "Diesel Pump Set Repairing",
      "Servicing of Domestic Electronic Products",
      "Welding",
      "Mason",
      "Plumbing",
      "Mechanic Rural",
      "Repair & Maintenance of Agricultural Machinery",
      "Wooden Furniture Making",
      "Sheet Metal Work",
      "Foundry Work",
    ],
  },
  {
    id: "ag",
    code: "AG",
    title: "Agriculture Trades",
    description:
      "Training related to farming, fisheries and rural agricultural systems suitable after Class 10.",
    courses: [
      "Pisciculture",
      "Ornamental Fish Culture",
      "Mushroom Cultivation",
      "Composting / Vermi-Compost",
      "Dairy Farming",
      "Poultry Farming",
      "Bee Keeping",
      "Goat Keeping",
      "Seed Production Techniques",
    ],
  },
  {
    id: "hs",
    code: "HS",
    title: "Home Science & Service Trades",
    description:
      "Creative and service-oriented trades suitable for self-employment, small units or service jobs.",
    courses: [
      "Tailoring",
      "Boutique Work",
      "Beautician",
      "Silk Screen Printing",
      "Manufacture of Jam, Jelly & Pickles",
      "Interior Decoration",
      "Toy Making (Soft)",
      "Glass & Ceramic Based Work",
      "Crèche Management",
      "Book & Document Binding",
    ],
  },
  {
    id: "bc",
    code: "BC",
    title: "Business & Commerce Trades",
    description:
      "Entry-level business and commerce roles, field work, marketing and communication.",
    courses: ["Marketing", "Rural Marketing", "Security Guard"],
  },
  {
    id: "pm",
    code: "PM",
    title: "Paramedical Support Trades",
    description:
      "Support roles in healthcare settings under trained medical professionals.",
    courses: ["Blood Collection Assistant", "Health Worker", "OT Assistant"],
  },
];

// Admission information taken directly from book's educational route diagram.

const ADMISSION_INFO = [
  "Eligibility: Completed Class 10.",
  "Admission is through Direct Admission or Selection Test conducted by institutions.",
  "Some categories follow an Exam / Counselling process (E-Category).",
  "Training is available at Government ITI, Private ITC and Junior Polytechnic centres.",
  "Stipend may be available in some government-managed training schemes.",
  "Notifications typically appear in newspapers, outdoor ads and institutional social media.",
];

// Important agencies (book already includes these).

const SKILL_AGENCIES = [
  {
    title:
      "West Bengal State Council of Technical & Vocational Education and Skill Development",
    subtitle: "State-level body for managing vocational & technical training.",
    links: [
      { label: "ITI Portal", url: "https://iti.webscte.co.in/" },
      { label: "e-ITI Portal", url: "https://eiti.webscte.co.in/" },
      { label: "Mini ITI Portal", url: "https://miti.webscte.co.in/" },
      { label: "WBSCVET Portal", url: "http://www.wbscvt.net/#" },
    ],
  },
  {
    title: "Directorate General of Training (DGT)",
    subtitle:
      "Responsible for training policies and industrial training institutions.",
    links: [{ label: "Official Website", url: "http://dget.nic.in/content/" }],
  },
  {
    title: "National Skill Development Corporation (NSDC)",
    subtitle:
      "Works with training partners and sector skill councils for skill development.",
    links: [{ label: "NSDC India", url: "https://www.nsdcindia.org/" }],
  },
];

// ------------------------------------------------------------------------
// Components
// ------------------------------------------------------------------------

// Expandable Trade Cards

function ITISectorGrid() {
  const [expanded, setExpanded] = useState({});
  const toggle = (id) => setExpanded((p) => ({ ...p, [id]: !p[id] }));

  return (
    <section className="py-4 py-md-5 bg-light">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-7 text-center mb-5">
          <h2 className="sectionHeading mb-2">
            Types of Trades You Will Find in ITI / ITC
          </h2>
          <p className="sectionSub mb-0">
            These trade areas reflect the vocational pathways shown for Class 10
            students in the Career Guidance Book. Click a sector to view more
            trade options.
          </p>
          </div>
        </div>

        <div className="row g-3 g-md-4">
          {ITI_SECTORS.map((sector) => {
            const isExpanded = expanded[sector.id];
            const visible =
              isExpanded || sector.courses.length <= 4
                ? sector.courses
                : sector.courses.slice(0, 4);

            return (
              <div className="col-12 col-md-6 col-lg-4" key={sector.id}>
                <div className="sectionCard expandCard h-100">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="badge badge-sm text-bg-primary">
                      {sector.code}
                    </span>
                  </div>

                  <h3 className="h6 mb-2">{sector.title}</h3>
                  <p className="small text-muted mb-3">{sector.description}</p>

                  <ul className="list-unstyled small mb-2">
                    {visible.map((item) => (
                      <li key={item} className="d-flex">
                        <span className="me-2">•</span> {item}
                      </li>
                    ))}
                  </ul>

                  {sector.courses.length > 4 && (
                    <button
                      className="expandTrigger btn btn-sm btn-link px-0 d-inline-flex align-items-center gap-1"
                      onClick={() => toggle(sector.id)}
                    >
                      {isExpanded ? "Hide full list" : "View full list"}
                      {isExpanded ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Admission

function AdmissionSection() {
  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-7">
            <h2 className="sectionHeading mb-3">
              Admission to ITI / ITC After Class 10
            </h2>
            <p className="sectionSub">
              The Career Guidance Book clearly shows the entry route for
              vocational training after Class 10. Here is a simplified version
              to help students and parents understand the process.
            </p>

            <ul className="list-unstyled small mb-3">
              {ADMISSION_INFO.map((line) => (
                <li className="d-flex mb-2" key={line}>
                  <span className="me-2 mt-1">•</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-lg-5">
            <div className="sectionCard bg-light border">
              <h3 className="h6 mb-3">Quick Checklist</h3>
              <ol className="small ps-3 mb-3">
                <li>Confirm you have passed Class 10.</li>
                <li>Choose a sector that matches your interest.</li>
                <li>
                  Check nearby Govt ITI / Private ITC / Junior Polytechnic
                  centres.
                </li>
                <li>
                  Check whether admission is direct or via test / counselling.
                </li>
                <li>Track notifications from institutes regularly.</li>
              </ol>

              <Link
                href="/iti-finder"
                className="btn btn-sm btn-primary rounded-pill px-4 mt-2"
              >
                View ITI / ITC College List (Coming Soon)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Agencies
function SkillAgenciesSection() {
  return (
    <section className="py-4 py-md-5 bg-light">
      <div className="container">
        <div className="mb-4 text-center">
          <h2 className="sectionHeading mb-2">
            Useful Skill Training Portals
          </h2>
          <p className="sectionSub mb-0">
            These official platforms publish updates on vocational training,
            institutes and skill development schemes.
          </p>
        </div>

        <div className="row g-3 g-md-4">
          {SKILL_AGENCIES.map((agency) => (
            <div className="col-12 col-md-6" key={agency.title}>
              <div className="sectionCard h-100">
                <h3 className="h6 mb-1">{agency.title}</h3>
                <p className="small text-muted mb-3">{agency.subtitle}</p>

                <ul className="list-unstyled small mb-0">
                  {agency.links.map((l) => (
                    <li key={l.url}>
                      <a
                        className="infoLink d-inline-flex align-items-center gap-1"
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={14} />
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Explore More
function ExploreMore() {
  const PAGES = [
    {
      label: "Class 8+ Vocational Trades",
      description: "Early skill options starting immediately after Class 8.",
      href: "/courses/vocational/class-8-plus",
    },
    {
      label: "Class 10+ Vocational Trades",
      description: "Higher-secondary vocational streams after Class 10.",
      href: "/courses/vocational/class-10-plus",
    },
    {
      label: "MSME Tool Room Courses",
      description: "Industry-linked courses offered by MSME Tool Rooms.",
      href: "/courses/vocational/msme",
    },
  
  ];

  return (
    <section className="py-4 py-md-5 spotlightSection">
      <div className="container py-lg-4">
        <div className="row justify-content-center ">
          <div className="col-lg-7 text-center mb-5">
          <h2 className="sectionHeading text-white mb-2">Continue Exploring</h2>
          <p className="sectionSub mb-0">
            Discover more pathways based on your interest and future goals.
          </p>
          </div>
        </div>

        <div className="row g-3 g-md-4 justify-content-center">
          {PAGES.map((p) => (
            <div className="col-12 col-md-6 col-lg-4" key={p.href}>
              <Link href={p.href} className="text-decoration-none">
                <div className="glassCard premiumHover h-100">
                  <h3 className="h5 mb-2 fw-medium text-white pharmacyTitleGradient">{p.label}</h3>
                  <p className="small text-light mb-0">{p.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------------------------------------------------------------------------
// MAIN COMPONENT
// ------------------------------------------------------------------------

export default function ITICoursesPage() {
  

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="ITI & ITC Courses (After Class 10)"
        breadcrumb="ITI & ITC Courses"
      />

      <VocationalTabsBar tabs={TABS} activeId="iti" />

      {/* Intro */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">
                What Are ITI & ITC Courses?
              </h2>
              <p className="sectionSub">
                Industrial Training Institutes (ITI) and Industrial Training
                Centres (ITC) are job-oriented training centres that focus on
                hands-on skills, workshop practice and practical knowledge.
              </p>
              <p className="sectionSub mb-0">
                These courses help students become employable early, build strong
                technical skills and explore freelancing or apprenticeship
                opportunities.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3">Quick Snapshot</h3>
                <dl className="row small mb-0">
                  <dt className="col-5">Eligibility</dt>
                  <dd className="col-7 mb-2">Completed Class 10</dd>

                  <dt className="col-5">Training Centres</dt>
                  <dd className="col-7 mb-2">
                    Govt ITI, Private ITC, Junior Polytechnic
                  </dd>

                  <dt className="col-5">Admission</dt>
                  <dd className="col-7 mb-2">
                    Direct / Selection Test / Exam (E-Category)
                  </dd>

                  <dt className="col-5">Benefits</dt>
                  <dd className="col-7 mb-0">
                    Practical skills, low fees, stipends in some schemes
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ITISectorGrid />
      <AdmissionSection />
      <SkillAgenciesSection />
      <ExploreMore />
      </FrontendLayout>
    </>
  );
}
