import React, { useState, useRef, useEffect } from "react";
import { Link, usePage } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, HelpCircle, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import VocationalTabsBar from "./VocationalTabsBar";

// ----------------------
// Tabs config
// ----------------------
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
// Data
// ----------------------

// Sector-wise lists
const SECTORS = [
  {
    id: "et",
    code: "ET",
    title: "Engineering & Technology",
    description:
      "Practical technical skills that can lead to early employment, apprenticeships and future ITI or diploma study.",
    courses: [
      "Amin survey",
      "Electrical House wiring & Motor Winding",
      "Servicing Of Domistic Electronics product",
      "2/3 wheeler mechanic",
      "Auto Electrician",
      "Automobile maintenance",
      "Diesel Pump set Repairing",
      "Rural Sanitation & sanitary plumbing",
      "Mechanic rural",
      "Photography",
      "Videography",
      "Manufacture of jute product",
      "Plumbing",
      "Wooden Furniture Making",
      "Telephone & Mobile Set Repairing",
      "Footwear (open type)",
      "Welding",
      "Repair & maintenance of Agriculture machinaries",
      "DTP",
      "Mason",
    ],
  },
  {
    id: "ag",
    code: "AG",
    title: "Agriculture",
    description:
      "Skills related to farming, fisheries and animal husbandry, suitable for both self-employment and rural jobs.",
    courses: [
      "Marin Fisheries",
      "Ornamental Fish Culture",
      "Mushroom Cultivation",
      "Composting",
      "Dairy farming",
      "Poultry farming",
      "Bee keeping",
      "Goat keeping",
      "Seed Production Tech",
    ],
  },
  {
    id: "hs",
    code: "HS",
    title: "Home Science",
    description:
      "Home-based and creative skills, ideal for small businesses, boutique work and service-oriented careers.",
    courses: [
      "Tailoring",
      "Commercial Art",
      "Manufacture of Jam, jelly & pickles",
      "Silk screen printing",
      "Crèche management",
      "Jari work & kantha embroidery",
      "Toy Making (Soft)",
      "Interior Decoration",
      "Beautician",
      "Boutique work",
      "Glass painting & Prodution of ceramic & Candle items",
      "Painter",
      "Book & Doc Binder",
    ],
  },
  {
    id: "bc",
    code: "BC",
    title: "Business & Commerce",
    description:
      "Field and support roles for students interested in marketing, sales and basic business services.",
    courses: ["Rural Marketing", "Marketing", "Security Guard"],
  },
  {
    id: "pm",
    code: "PM",
    title: "Paramedical",
    description:
      "Entry-level healthcare support roles under guidance of trained medical professionals.",
    courses: ["Blood Collection Assistant", "Health Worker", "OT Assistant"],
  },
];

const ADMISSION_INFO = [
  "Courses are offered through ITI, ITC, Junior Polytechnic, Rabindra Open Schooling centres and other recognised skill institutes.",
  "Basic eligibility is usually completion of Class 8 (VIII pass). Some trades may have additional criteria decided by the institute.",
  "For certain categories there may be entrance tests, counselling rounds or selection procedures.",
  "Updates and notifications are commonly published through official websites, local newspapers and institute notice boards.",
];

const SKILL_AGENCIES = [
  {
    title: "West Bengal State Council of Technical & Vocational Education and Skill Development",
    subtitle: "State-level body for technical and vocational education in West Bengal.",
    links: [
      { label: "ITI Portal", url: "https://iti.webscte.co.in/" },
      { label: "e-ITI Portal", url: "https://eiti.webscte.co.in/" },
      { label: "Mini ITI Portal", url: "https://miti.webscte.co.in/" },
      { label: "WBSCVET Portal", url: "http://www.wbscvt.net/#" },
    ],
  },
  {
    title: "Directorate General of Training (DGT)",
    subtitle: "Central agency overseeing industrial training and ITIs across India.",
    links: [{ label: "DGT Official Site", url: "http://dget.nic.in/content/" }],
  },
  {
    title: "National Skill Development Corporation (NSDC)",
    subtitle: "National-level organisation supporting skill development and training partners.",
    links: [{ label: "NSDC Official Site", url: "https://www.nsdcindia.org/" }],
  },
  {
    title: "Fire & Safety Training Institutions",
    subtitle: "Specialised institutes offering fire and industrial safety courses.",
    links: [
      { label: "National Academy of Fire & Safety Engineering", url: "https://nafsindia.com/nafs-programme.php" },
      { label: "Safety Academy – Fire & Safety Courses", url: "http://www.safetyacademy.in/course-after-12th-in-india.htm" },
    ],
  },
];

const MORE_PAGES = [
  {
    label: "Class 10+ Vocational Trades",
    description: "Skill options available after completing Class 10.",
    href: "/courses/vocational/class-10-plus",
  },
  {
    label: "ITI & ITC Trades",
    description: "Industrial training routes for technical trades.",
    href: "/courses/vocational/iti",
  },
  {
    label: "MSME Tool Room Courses",
    description: "Specialised training in tool rooms and manufacturing.",
    href: "/courses/vocational/msme",
  },
 
];

// ----------------------
// Helper components
// ----------------------


function SectorGridExpandable() {
  const [expanded, setExpanded] = useState({});

  const toggleSector = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-4 py-md-5 bg-light">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-7 text-center mb-5">
          <h2 className="sectionHeading mb-2">Explore Skill Areas After Class 8</h2>
          <p className="sectionSub mb-0">
            Courses are grouped into broad sectors. Start by choosing an area that matches your interest and strengths.
          </p>
          </div>
        </div>

        <div className="row g-3 g-md-4">
          {SECTORS.map((sector) => {
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

function AdmissionInfoSection() {
  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-7">
            <h2 className="sectionHeading mb-3">Admission & Where to Study</h2>
            <p className="sectionSub">
              Different institutes run vocational courses after Class 8. The exact process can vary, but the broad steps are similar.
            </p>
            <ul className="list-unstyled mb-3 small">
              {ADMISSION_INFO.map((item, idx) => (
                <li key={idx} className="d-flex mb-2">
                  <span className="me-2 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-lg-5">
            <div className="sectionCard bg-light border">
              <h3 className="h6 mb-3">Simple Next Steps</h3>
              <ol className="small ps-3 mb-3">
                <li className="mb-1">
                  Shortlist one or two sectors that genuinely interest you.
                </li>
                <li className="mb-1">
                  Find nearby ITI / ITC / Junior Polytechnic / recognised centres offering those trades.
                </li>
                <li className="mb-1">
                  Check admission rules: direct admission, entrance test, or counselling.
                </li>
                <li className="mb-1">
                  Keep an eye on notices, official websites and newspapers so you don’t miss deadlines.
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
          <h2 className="sectionHeading mb-2">Key Skill Education & Training Agencies</h2>
          <p className="sectionSub mb-0">
            These organisations run or support vocational training, skill development and specialised courses. Explore their official portals for detailed notifications.
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

function ExploreMorePagesSection() {
  // return (
  //   <section className="py-4 py-md-5 spotlightSection">
  //     <div className="container py-lg-4">
  //       <div className="row justify-content-center ">
  //         <div className="col-lg-7 text-center mb-5">
  //         <h2 className="sectionHeading text-white mb-2">Continue Exploring Courses</h2>
  //         <p className="sectionSub mb-0">
  //           After understanding options at Class 8+, you can also explore these related course pathways.
  //         </p>
  //         </div>
  //       </div>

  //       <div className="row g-3 g-md-4 justify-content-center">
  //         {MORE_PAGES.map((item) => (
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

export default function Class8VocationalPage() {
 

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Class 8+ Vocational & Skill Courses"
        breadcrumb="Class 8th vocational courses"
      />

      <VocationalTabsBar tabs={TABS} activeId="class-8-plus" />


      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">
                Vocational Options After Class 8
              </h2>
              <p className="sectionSub">
                After completing Class 8, students can begin structured skill
                training alongside regular studies. These courses focus on
                practical learning, early work exposure and clear pathways
                towards higher training like ITI, polytechnic or specialised
                programmes.
              </p>
              <p className="sectionSub mb-0">
                On this page you can explore different skill sectors, understand
                how admission works and discover important agencies and portals
                related to vocational education.
              </p>
            </div>
            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3">Quick Snapshot</h3>
                <dl className="row small mb-0">
                  <dt className="col-5">Eligibility</dt>
                  <dd className="col-7 mb-2">Completed Class 8 (VIII pass)</dd>

                  <dt className="col-5">Major Sectors</dt>
                  <dd className="col-7 mb-2">
                    Engineering & Technology, Agriculture, Home Science,
                    Business & Commerce, Paramedical
                  </dd>

                  <dt className="col-5">Course Duration</dt>
                  <dd className="col-7 mb-2">
                    Around 6 months to 2 years depending on the trade
                  </dd>

                  <dt className="col-5">Typical Institutes</dt>
                  <dd className="col-7 mb-0">
                    ITI / ITC, Junior Polytechnic, recognised vocational centres
                    and training partners.
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectorGridExpandable />
      <AdmissionInfoSection />
      <SkillAgenciesSection />
      <ExploreMorePagesSection />
      </FrontendLayout>
    </>
  );
}
