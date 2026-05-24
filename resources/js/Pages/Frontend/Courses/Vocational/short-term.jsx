import React from "react";
import { Link, usePage } from '@inertiajs/react';
import { ExternalLink, ArrowRight } from "lucide-react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import VocationalTabsBar from "./VocationalTabsBar";

// ------------------ Tabs (same across vocational pages) ------------------

const TABS = [
  {
    id: "class-8-plus",
    label: "Class 8+ Vocational Trades",
    href: "/courses/vocational/class-8-plus",
  },
  {
    id: "class-10-plus",
    label: "Class 10+ Vocational Trades",
    href: "/courses/vocational/class-10-plus",
  },
  {
    id: "iti",
    label: "ITI & ITC Trades",
    href: "/courses/vocational/iti",
  },
  {
    id: "msme",
    label: "MSME Tool Room Courses",
    href: "/courses/vocational/msme",
  },
  {
    id: "short-term",
    label: "Short-Term Skill Programs",
    href: "/courses/vocational/short-term",
  },
];

// ------------------ Data (from your book) ------------------

// Note: This page is not listing every individual external course
// (because the book gives mainly portals/institutions), but it
// organises ALL the short-term channels your book mentions:
//  - MSME Tool Room short courses
//  - Fire & Safety institutions list
//  - State council / DGT / NSDC skill links
//  - “Career Launcher” idea for Class 8 & 10 onwards

const AGENCIES = [
  {
    id: "wbscvet",
    title:
      "West Bengal State Council of Technical & Vocational Education and Skill Development",
    role:
      "State-level body for technical, vocational education and skill development. Runs and coordinates many ITI / vocational and short-term programs across West Bengal.",
    links: [
      { label: "ITI Portal", url: "https://iti.webscte.co.in/" },
      { label: "e-ITI Portal", url: "https://eiti.webscte.co.in/" },
      { label: "Mini ITI Portal", url: "https://miti.webscte.co.in/" },
      { label: "WBSCVET Portal", url: "http://www.wbscvt.net/#" },
    ],
  },
  {
    id: "dgt",
    title: "Directorate General of Training (DGT)",
    role:
      "National authority for industrial training institutes and related skill training framework mentioned in the guidance.",
    links: [
      { label: "DGT Official Website", url: "http://dget.nic.in/content/" },
    ],
  },
  {
    id: "nsdc",
    title: "National Skill Development Centre (NSDC)",
    role:
      "National-level platform for many sector-wise skill development courses through partner institutions.",
    links: [
      { label: "NSDC Website", url: "https://www.nsdcindia.org/" },
    ],
  },
];

const FIRE_SAFETY = [
  {
    id: "nafs",
    title: "National Academy of Fire and Safety Engineering",
    role:
      "Institution mentioned for fire and industrial safety-related courses, suitable for students who want specialised safety roles.",
    links: [
      {
        label: "Course Information",
        url: "https://nafsindia.com/nafs-programme.php",
      },
    ],
  },
  {
    id: "safety-academy",
    title: "Safety Academy – Fire & Safety Courses",
    role:
      "Fire and safety training provider with multiple course options as referenced in the book.",
    links: [
      {
        label: "Courses After 12th in India",
        url: "http://www.safetyacademy.in/course-after-12th-in-india.html",
      },
    ],
  },
];

const PATH_EXAMPLES = [
  {
    id: "early-launch",
    title: "Class 8–10: ‘Career Launcher’ + Short Term",
    text: "Start with small vocational courses (like tailoring, basic computer, repair work etc.) during Class 8–10 and then add a 3–6 month short-term program later to upgrade one focused skill.",
  },
  {
    id: "after-10",
    title: "After Class 10: ITI / Vocational + Short-Term",
    text: "Combine a regular ITI or Class 10+ vocational stream with a short-term program in CAD/CAM, CNC, mechatronics or networking to become more employable in specific roles.",
  },
  {
    id: "after-12-or-diploma",
    title: "After HS / Diploma: Specialisation Boost",
    text: "Use short-term programs at MSME Tool Room, Fire & Safety institutes or other skill centres to specialise further in one domain—helpful for job switch or promotion.",
  },
];

// ------------------ Helper Components ------------------

function AgencyCard({ agency }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 d-flex">
      <div className="sectionCard h-100">
        <h3 className="h6 mb-1">{agency.title}</h3>
        <p className="small text-muted mb-3">{agency.role}</p>
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
  );
}

function FireSafetyCard({ item }) {
  return (
    <div className="col-12 col-md-6 d-flex">
      <div className="sectionCard h-100">
        <h3 className="h6 mb-1">{item.title}</h3>
        <p className="small text-muted mb-3">{item.role}</p>
        <ul className="list-unstyled small mb-0">
          {item.links.map((link) => (
            <li key={link.url}>
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
  );
}

function PathCard({ path }) {
  return (
    <div className="col-12 col-md-4 d-flex">
      <div className="sectionCard hoverCard h-100">
        <h3 className="h6 mb-2">{path.title}</h3>
        <p className="small text-muted mb-0">{path.text}</p>
      </div>
    </div>
  );
}

// ------------------ Page Component ------------------

export default function ShortTermSkillProgramsPage() {
  return (
    <>
      <HeroInner
        title="Short-Term Skill Programs"
        breadcrumb="Short-Term Skill Programs"
      />

      <VocationalTabsBar tabs={TABS} activeId="short-term" />

      {/* Intro */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">
                What Are Short-Term Skill Programs?
              </h2>
              <p className="sectionSub">
                In the guidance material, short-term skill options are shown as
                practical “career launcher” type courses. They are generally
                a few weeks to a few months in length and focus on one clear
                skill – such as machining, CAD, computer hardware, networking,
                fire & safety, or basic vocational trades.
              </p>
              <p className="sectionSub mb-0">
                These programs are useful if you want early income opportunities,
                side work during study, or quick upskilling before going for
                longer courses like ITI, Diploma or Degree.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3">Quick Snapshot</h3>
                <dl className="row small mb-0">
                  <dt className="col-5">Who can join?</dt>
                  <dd className="col-7 mb-2">
                    Class 8–10 students, HS passed, ITI students, Diploma /
                    Degree students (varies with program).
                  </dd>

                  <dt className="col-5">Typical duration</dt>
                  <dd className="col-7 mb-2">
                    From a few weeks up to 3–6 months.
                  </dd>

                  <dt className="col-5">Focus</dt>
                  <dd className="col-7 mb-2">
                    One skill at a time – like CAD/CAM, CNC, mechatronics,
                    embedded systems, hardware & networking, or fire & safety.
                  </dd>

                  <dt className="col-5">Where held?</dt>
                  <dd className="col-7 mb-0">
                    MSME Tool Room, ITI-based centres, state/central skill
                    bodies, and recognised fire & safety institutions.
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where to find short-term programs */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="row justify-content-center ">
          <div className="col-lg-7 text-center mb-5">
            <h2 className="sectionHeading mb-2">
              Where Can You Find Short-Term Skill Courses?
            </h2>
            <p className="sectionSub mb-0">
              The guidance document points towards a few key agencies and
              institutions. These are good starting points to discover current
              short-term offerings.
            </p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {AGENCIES.map((agency) => (
              <AgencyCard key={agency.id} agency={agency} />
            ))}
          </div>
        </div>
      </section>

      {/* MSME Tool Room highlight */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">
                Short-Term Programs at MSME Tool Room – Kolkata
              </h2>
              <p className="sectionSub">
                MSME Tool Room – Kolkata (Central Tool Room & Training Centre)
                runs multiple 2–6 month programs in areas like CAD/CAM, CNC
                machining, mechatronics, industrial automation, VLSI & embedded
                systems, computer hardware, networking and CCNA.
              </p>
              <p className="sectionSub mb-0">
                These are shown in detail on the MSME page. You can treat this
                short-term page as a “hub”, then go deeper if you already
                know you want an advanced technical focus.
              </p>
            </div>
            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3">See Full MSME Course List</h3>
                <p className="small text-muted mb-3">
                  For each MSME program you will find duration, fee, eligibility,
                  intake and a short content summary.
                </p>
                <Link
                  href="/courses/msme"
                  className="btn btn-sm btn-primary rounded-pill px-3 d-inline-flex align-items-center gap-1"
                >
                  <ArrowRight size={14} />
                  View MSME Tool Room Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fire & Safety Institutions */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="row justify-content-center ">
          <div className="col-lg-7 text-center mb-5">
            <h2 className="sectionHeading mb-2">
              Fire & Safety Courses and Institutions
            </h2>
            <p className="sectionSub mb-0">
              The guidance also lists specialised institutions for fire and
              industrial safety training. These usually offer certificate and
              diploma-style short-term programs.
            </p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {FIRE_SAFETY.map((item) => (
              <FireSafetyCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* How to use short-term courses strategically */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row justify-content-center ">
          <div className="col-lg-7 text-center mb-5">
            <h2 className="sectionHeading mb-2">
              How to Use Short-Term Courses Smartly
            </h2>
            <p className="sectionSub mb-0">
              Short-term programs work best when you connect them with your
              main study line. Here are some simple ways to combine them.
            </p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {PATH_EXAMPLES.map((path) => (
              <PathCard key={path.id} path={path} />
            ))}
          </div>
        </div>
      </section>

      {/* Explore other course paths */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
         <div className="row justify-content-center ">
          <div className="col-lg-7 text-center mb-5">
            <h2 className="sectionHeading mb-2">Explore Other Course Paths</h2>
            <p className="sectionSub mb-0">
              Use this page as a hub and then explore long-term and regular
              vocational options that match your interest.
            </p>
            </div>
          </div>

          <div className="row g-3 g-md-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-3">
              <Link
                href="/courses/vocational/class-8-plus"
                className="text-decoration-none"
              >
                <div className="sectionCard hoverCard h-100">
                  <h3 className="h6 mb-1">Class 8+ Vocational Trades</h3>
                  <p className="small text-muted mb-0">
                    Early “career launcher” type options after Class 8.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <Link
                href="/courses/vocational/class-10-plus"
                className="text-decoration-none"
              >
                <div className="sectionCard hoverCard h-100">
                  <h3 className="h6 mb-1">Class 10+ Vocational Trades</h3>
                  <p className="small text-muted mb-0">
                    Vocational higher-secondary streams after Class 10.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <Link href="/courses/vocational/iti" className="text-decoration-none">
                <div className="sectionCard hoverCard h-100">
                  <h3 className="h6 mb-1">ITI & ITC Trades</h3>
                  <p className="small text-muted mb-0">
                    Industrial training routes with strong job orientation.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <Link href="/courses/vocational/msme" className="text-decoration-none">
                <div className="sectionCard hoverCard h-100">
                  <h3 className="h6 mb-1">MSME Tool Room Courses</h3>
                  <p className="small text-muted mb-0">
                    Advanced technical skill programs in design and manufacturing.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
