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
import HeroInner from "@/components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import VocationalTabsBar from "./VocationalTabsBar";

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

// ----------------------
// Tabs config (same as Class 8 page)
// ----------------------


// ----------------------
// Data – Class 10+ Vocational (X+2 level)
// ----------------------

const SECTORS_10_PLUS = [
  {
    id: "bc",
    code: "BC",
    title: "Business & Commerce",
    description:
      "Office, marketing and service roles for students who are comfortable with commerce, communication and people-facing work.",
    courses: [
      "Marketing & salesmanship",
      "Modern Office Practice",
      "Library & Information Science",
      "Travel & Tourism",
    ],
  },
  {
    id: "et",
    code: "ET",
    title: "Engineering & Technology",
    description:
      "Job-oriented technical courses for those interested in machines, electronics, construction, IT and repair work.",
    courses: [
      "Civil construction & Maintenance Technology",
      "Automobile Mechanics",
      "Air-Conditioner & Refrigerator mechanic",
      "Computer Assembly & Maintenance",
      "Pump Operator & Maintenance",
      "IT Enabled Services",
      "Maintenance & repair of Elec. Domestic Appliances",
      "Consumer & Industrial Electronics Mechanics",
    ],
  },
  {
    id: "ag",
    code: "AG",
    title: "Agriculture",
    description:
      "Courses linked to farming, fisheries and plant-based livelihoods, suitable for rural students and those with land access.",
    courses: [
      "Pisciculture",
      "Dairy Farming",
      "Preservation & Processing of Fruits & vegetables",
      "Horticulture nursery management",
      "Compost & vermicropost",
      "Plant portion",
    ],
  },
  {
    id: "hs",
    code: "HS",
    title: "Home Science",
    description:
      "Home-based and care-oriented skills that can support self-employment, small units and service sector opportunities.",
    courses: [
      "Health Care",
      "Food preservation & processing",
      "Mother and child care",
      "Interior Decoration",
    ],
  },
];

const ADMISSION_INFO_10 = [
  "These Class 10+ vocational courses are usually offered as (X+2) level programmes in selected schools, vocational centres and recognised institutions.",
  "Basic eligibility is completion of Class 10. Individual institutes may specify minimum marks, subject preferences or other conditions.",
  "Admission may be based on school records, separate merit lists, entrance tests or counselling, depending on the institution.",
  "Most courses run for 2 years and are treated as equivalent to higher secondary in the vocational stream, enabling further study later.",
];

const SKILL_AGENCIES = [
  {
    title:
      "West Bengal State Council of Technical & Vocational Education and Skill Development",
    subtitle:
      "State-level body for technical and vocational education and skill development in West Bengal.",
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
      "Central agency responsible for industrial training and ITIs across India.",
    links: [{ label: "DGT Official Site", url: "http://dget.nic.in/content/" }],
  },
  {
    title: "National Skill Development Corporation (NSDC)",
    subtitle:
      "National organisation that works with training partners, sector skill councils and industry.",
    links: [{ label: "NSDC Official Site", url: "https://www.nsdcindia.org/" }],
  },
  {
    title: "Fire & Safety Training Institutions",
    subtitle:
      "Specialised institutes offering fire safety and industrial safety courses.",
    links: [
      {
        label: "National Academy of Fire & Safety Engineering",
        url: "https://nafsindia.com/nafs-programme.php",
      },
      {
        label: "Safety Academy – Fire & Safety Courses",
        url: "http://www.safetyacademy.in/course-after-12th-in-india.htm",
      },
    ],
  },
];

const MORE_PAGES_10 = [
  {
    label: "Class 8+ Vocational Trades",
    description: "Early skill options that begin right after Class 8.",
    href: "/courses/vocational/class-8-plus",
  },
  {
    label: "ITI & ITC Trades",
    description: "Formal industrial training routes after secondary level.",
    href: "/courses/vocational/iti",
  },
  {
    label: "MSME Tool Room Courses",
    description: "Industry-linked programmes in tooling and manufacturing.",
    href: "/courses/vocational/msme",
  },
 
];

// ----------------------
// Helper components
// ----------------------

function SectorGridExpandable10() {
  const [expanded, setExpanded] = useState({});

  const toggleSector = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-4 py-md-5 bg-light">
      <div className="container">
       <div className="row justify-content-center ">
          <div className="col-lg-7 text-center mb-5">
          <h2 className="sectionHeading mb-2">
            Vocational Streams After Class 10
          </h2>
          <p className="sectionSub mb-0">
            These Class 10+ programmes are typically 2-year courses at the
            higher secondary level in the vocational stream. Select a sector to
            see the types of trades offered.
          </p>
          </div>
        </div>

        <div className="row g-3 g-md-4">
          {SECTORS_10_PLUS.map((sector) => {
            const isExpanded = !!expanded[sector.id];
            const hasMore = sector.courses.length > 4;
            const visibleCourses = isExpanded
              ? sector.courses
              : sector.courses.slice(0, 4);

            return (
              <div key={sector.id} className="col-12 col-md-6 col-lg-4">
                <div className="sectionCard expandCard h-100">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge badge-sm text-bg-primary">
                      {sector.code}
                    </span>
                  </div>
                  <h3 className="h6 mb-2">{sector.title}</h3>
                  <p className="small text-muted mb-3">{sector.description}</p>

                  <ul className="list-unstyled small mb-2">
                    {visibleCourses.map((course) => (
                      <li key={course} className="d-flex">
                        <span className="me-2">•</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>

                  {hasMore && (
                    <button
                      type="button"
                      className="expandTrigger btn btn-sm btn-link px-0 d-inline-flex align-items-center gap-1"
                      onClick={() => toggleSector(sector.id)}
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

function AdmissionInfoSection10() {
  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-7">
            <h2 className="sectionHeading mb-3">
              How Class 10+ Vocational Admission Works
            </h2>
            <p className="sectionSub">
              The exact process can vary from school to school, but the points
              below describe the typical pattern for vocational programmes after
              Class 10.
            </p>
            <ul className="list-unstyled mb-3 small">
              {ADMISSION_INFO_10.map((item, idx) => (
                <li key={idx} className="d-flex mb-2">
                  <span className="me-2 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-lg-5">
            <div className="sectionCard bg-light border">
              <h3 className="h6 mb-3">Simple Planning Checklist</h3>
              <ol className="small ps-3 mb-3">
                <li className="mb-1">
                  Decide whether you want a vocational higher secondary route
                  right after Class 10 or a general academic route.
                </li>
                <li className="mb-1">
                  Shortlist sectors that match your interest: technical,
                  commerce, agriculture or care-based.
                </li>
                <li className="mb-1">
                  Find schools or centres in your area that offer those
                  vocational streams.
                </li>
                <li className="mb-1">
                  Check eligibility, last dates and required documents well in
                  advance.
                </li>
              </ol>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillAgenciesSection() {
  return (
    <section className="py-4 py-md-5 bg-light">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-7 text-center mb-5">
          <h2 className="sectionHeading mb-2">
            Skill Education & Training Agencies
          </h2>
          <p className="sectionSub mb-0">
            Use these official portals to track notifications, institute lists
            and schemes related to vocational and skill-based education.
          </p>
          </div>
        </div>

        <div className="row g-3 g-md-4">
          {SKILL_AGENCIES.map((agency) => (
            <div key={agency.title} className="col-12 col-md-6">
              <div className="sectionCard h-100">
                <h3 className="h6 mb-1">{agency.title}</h3>
                <p className="small text-muted mb-3">{agency.subtitle}</p>
                <ul className="list-unstyled small mb-0">
                  {agency.links.map((link) => (
                    <li key={link.url} className="mb-1">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="infoLink d-inline-flex align-items-center gap-1"
                      >
                        <ExternalLink size={14} />
                        <span>{link.label}</span>
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

function ExploreMorePagesSection10() {
  // return (
  //   <section className="py-4 py-md-5 spotlightSection">
  //     <div className="container py-lg-4">
  //       <div className="row justify-content-center ">
  //         <div className="col-lg-7 text-center mb-5">
  //         <h2 className="sectionHeading text-white mb-2">Continue Exploring Courses</h2>
  //         <p className="sectionSub mb-0">
  //           You can combine Class 10+ vocational options with other paths such
  //           as ITI, tool room courses and short-term skill programmes.
  //         </p>
  //         </div>
  //       </div>

  //       <div className="row g-3 g-md-4 justify-content-center">
  //         {MORE_PAGES_10.map((item) => (
  //           <div key={item.href} className="col-12 col-md-6 col-lg-4">
  //             <Link href={item.href} className="text-decoration-none">
  //               <div className="glassCard premiumHover h-100">
  //                 <h3 className="h5 mb-2 fw-medium text-white pharmacyTitleGradient">{item.label}</h3>
  //                 <p className="small text-light mb-0">{item.description}</p>
  //               </div>
  //             </Link>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
}

// ----------------------
// Main Page Component
// ----------------------

export default function Class10VocationalPage() {
 

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Class 10+ Vocational & Skill Courses"
        breadcrumb="Class 10th vocational courses"
      />

      <VocationalTabsBar tabs={TABS} activeId="class-10-plus" />

      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">
                Why Choose Vocational Stream After Class 10?
              </h2>
              <p className="sectionSub">
                After Class 10, students can move into a vocational higher
                secondary stream instead of the regular academic route. This
                option focuses more on hands-on skills, workshops and real
                workplace exposure, while still keeping the door open for
                further study later.
              </p>
              <p className="sectionSub mb-0">
                The streams below give a sense of the kind of work each area
                leads to, so that students and parents can make a confident,
                informed choice.
              </p>
            </div>
            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3">Quick Snapshot</h3>
                <dl className="row small mb-0">
                  <dt className="col-5">Eligibility</dt>
                  <dd className="col-7 mb-2">Passed Class 10</dd>

                  <dt className="col-5">Duration</dt>
                  <dd className="col-7 mb-2">
                    Usually 2 years (equivalent to higher secondary in
                    vocational stream)
                  </dd>

                  <dt className="col-5">Main Streams</dt>
                  <dd className="col-7 mb-2">
                    Business & Commerce, Engineering & Technology, Agriculture,
                    Home Science
                  </dd>

                  <dt className="col-5">Typical Outcomes</dt>
                  <dd className="col-7 mb-0">
                    Early employability, eligibility for further vocational /
                    technical study, and a strong foundation for skill-based
                    careers.
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectorGridExpandable10 />
      <AdmissionInfoSection10 />
      <SkillAgenciesSection />
      <ExploreMorePagesSection10 />
      </FrontendLayout>
    </>
  );
}
