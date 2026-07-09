"use client";

import React, { useState } from "react";
import { Link, usePage } from '@inertiajs/react';
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import VocationalTabsBar from "./VocationalTabsBar";

// ------------------------------------------------------------------
// Tabs (same across vocational pages)
// ------------------------------------------------------------------
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

// ------------------------------------------------------------------
// MSME – Data (from your book; some bits marked as partial / verify)
// ------------------------------------------------------------------

// Long term
const LONG_TERM = [
  {
    id: "diploma-tool-die",
    name: "Diploma in Tool & Die Making (AICTE Approved)",
    duration: "4 Years",
    intake: "100",
    fee: "₹36,000 per year",
    start: "August",
    selection: "Test / Interview",
    eligibility:
      "Class 10 pass (or equivalent) with Mathematics and Science, minimum 50% in aggregate (40% for SC/ST).",
    summary:
      "Deep training in tool and die design, manufacturing processes and industrial practices through classroom and intensive workshop exposure.",
    contentsBrief:
      "Engineering Metrology, Workshop Technology, Engineering Drawing, Strength of Materials, Moulds, Press Tools, Jigs & Fixtures, manufacturing-related theory and practicals.",
  },
];

// Short / medium-term courses flattened into one array
const COURSES = [
  // Tool Design & CAD/CAM
  {
    id: "mcc-cadcam",
    group: "Tool Design & CAD/CAM",
    name: 'Master Certificate Course in "CAD / CAM / CAE"',
    duration: "6 Months",
    intake: "40",
    fee: "₹32,000",
    start: "February & August",
    selection: "First Come – First Serve",
    eligibility:
      "Degree in Engineering (Mechanical / Production / Manufacturing / Polymer or equivalent).",
    contents:
      "Practice on AutoCAD, SolidWorks, Creo, CATIA, DELCAM, ANSYS and CNC programming using desktop simulators, CNC milling, CNC turning and WEDM.",
  },
  {
    id: "mcc-structural",
    group: "Tool Design & CAD/CAM",
    name: 'Master Certificate Course in "Structural Design and Analysis" (MCSD-A)',
    duration: "4 Months",
    intake: "40",
    fee: "₹25,000",
    start: "February & August",
    selection: "First Come – First Serve",
    eligibility: "B.E. (Civil) or equivalent.",
    contents:
      "AutoCAD, 3Ds Max, STAAD.Pro and Revit for structural modelling, visualisation and analysis.",
  },
  {
    id: "adv-tool-design-unknown-title",
    group: "Tool Design & CAD/CAM",
    name:
      "Advanced Tool Design Programme (course title partially unreadable in scan)",
    duration: "4 Months (as per scan)",
    intake: "20–40 (as per batch size; check latest notice)",
    fee: "Around ₹20,000 (see official notice for exact fee)",
    start: "February & August (as per scan)",
    selection: "First Come – First Serve",
    eligibility:
      "Diploma in Tool & Die Making / Mechanical Engineering or equivalent.",
    contents:
      "Advanced work on moulds, press tools, jigs & fixtures and related manufacturing technology with AutoCAD, Delcam, Pro/E, SolidWorks and Creo.",
    note:
      "Exact course title and some details are not fully legible in the scan. Please cross-check with MSME Tool Room’s latest prospectus.",
  },

  // Machining
  {
    id: "adv-cert-cnc",
    group: "CNC & Conventional Machining",
    name: 'Advance Certificate Course in "CNC Machining"',
    duration: "6 Months",
    intake: "40",
    fee: "₹32,000",
    start: "February, May, August & November",
    selection: "First Come – First Serve",
    eligibility:
      "Diploma (Mechanical) / ITI in Machinist, Tool & Die Maker, Grinder, Turner or equivalent.",
    contents:
      "AutoCAD (2D), CNC part programming, Delcam (PowerMill), CNC turning, CNC milling and extensive shop-floor practice.",
  },
  {
    id: "conventional-machining-10th",
    group: "CNC & Conventional Machining",
    name:
      "Conventional Lathe / Milling / Grinding Course (title not fully legible)",
    duration: "6 Months",
    intake: "40",
    fee: "₹22,000",
    start: "January & July",
    selection: "First Come – First Serve",
    eligibility: "10th Standard.",
    contents:
      "Conventional lathe operations (threading, facing, drilling, reaming, taper turning, grooving, parting, boring, thread cutting), milling operations (plain, slab, face, angular, slot, gear and thread milling), grinding operations, bench work and drilling.",
    note:
      "Course name line is partially corrupted in the scan; structure and contents are taken from the visible text.",
  },

  // Automation & Mechatronics
  {
    id: "cert-mechatronics",
    group: "Automation, Mechatronics & Embedded",
    name: 'Certificate Course in "Mechatronics"',
    duration: "6 Months",
    intake: "40",
    fee: "₹30,000",
    start: "January & July",
    selection: "First Come – First Serve",
    eligibility:
      "ITI / Diploma in Electrical, Electronics, Mechanical, Instrument or equivalent.",
    contents:
      "Basic electronics and applications, circuit design, basic electrical and industrial applications, electrical hardware control, industrial automation & PLC, interfacing with field devices, hydraulics & pneumatics, AutoCAD, digital electronics, VLSI & embedded concepts for office automation, CNC programming & practice, project work.",
  },
  {
    id: "cciam",
    group: "Automation, Mechatronics & Embedded",
    name:
      "Certificate Course in Industrial Automation and Maintenance (CCIAM)",
    duration: "3 Months",
    intake: "40",
    fee: "₹15,000",
    start: "February & August",
    selection: "First Come – First Serve",
    eligibility: "ITI in Electrical / Electronics or equivalent.",
    contents:
      "Electrical safety, basic electronics components and applications, electrical hardware control, industrial automation & PLC, interfacing with field devices, basics of hydraulics & pneumatics, industrial maintenance systems, computer fundamentals and CNC overview.",
  },
  {
    id: "mccapc",
    group: "Automation, Mechatronics & Embedded",
    name:
      "Master Certificate Course in Automation & Process Control (MCCAPC)",
    duration: "4 Months",
    intake: "40",
    fee: "₹22,000",
    start: "February & August",
    selection: "First Come – First Serve",
    eligibility:
      "Diploma / Degree in Electrical, Electronics, Instrumentation, Mechanical or related fields (as per scan).",
    contents:
      "Industrial automation with PLC, process control systems (including DCS and PID/PD/PI controllers), basic electronics and electricals, PLC programming and communication with field devices, project work.",
  },
  {
    id: "admma",
    group: "Automation, Mechatronics & Embedded",
    name: "Advance Diploma in Machine Maintenance & Automation (ADMMA)",
    duration: "4 Months",
    intake: "40",
    fee: "₹20,000",
    start: "Multiple batches in a year (as per notice)",
    selection: "First Come – First Serve",
    eligibility:
      "Technical background (details partly unreadable; verify in prospectus).",
    contents:
      "Focus on maintenance of industrial machines, basics of automation and computer fundamentals with project work.",
    note:
      "Some lines on dates and detailed contents are not fully legible in the scan; confirm with current MSME Tool Room schedule.",
  },
  {
    id: "adves",
    group: "Automation, Mechatronics & Embedded",
    name: "Advance Diploma in VLSI & Embedded System (ADVES)",
    duration: "4 Months",
    intake: "20",
    fee: "₹20,000",
    start: "February & August",
    selection: "First Come – First Serve",
    eligibility:
      "Diploma / Degree in Electrical, Electronics, Mechanical, Instrument or equivalent.",
    contents:
      "Computer fundamentals, basic electronics & electricals, industrial automation & PLC, digital electronics, VLSI & embedded systems, microprocessor & microcontroller, basics of C language, VLSI circuit design with Microwind, Xilinx & Altera tools, ARM7, test equipment, basics of different types of robots, live practice and robotics project.",
  },

  // Hardware / Networking / CCNA
  {
    id: "cert-hardware-networking",
    group: "Computer Hardware, Networking & CCNA",
    name: 'Certificate Course in "Computer Hardware & Networking Management"',
    duration: "6 Months",
    intake: "40",
    fee: "₹25,000",
    start: "February & August",
    selection: "First Come – First Serve",
    eligibility:
      "Degree / Diploma (any discipline), any graduate, ITI, or 10+2.",
    contents:
      "Computer fundamentals, basic electronics, SMPS and power supply, computer architecture, motherboard & add-on cards, microprocessor, storage devices, partitioning & OS loading, input devices, monitors, printers, system assembling, laptop overview; plus networking fundamentals, OSI model, protocols, topology, IP addressing, transmission media, cabling, peer-to-peer, client-server, DHCP, DNS, Linux networking and troubleshooting.",
  },
  {
    id: "adchnm-ccna",
    group: "Computer Hardware, Networking & CCNA",
    name:
      "Advance Diploma in Computer Hardware and Network Management with CCNA",
    duration: "Advanced long-term (duration not fully legible)",
    intake: "As per batch notification",
    fee: "As per latest fee schedule",
    start: "February & August (as seen in scan)",
    selection: "First Come – First Serve",
    eligibility:
      "Background in hardware / networking (exact line partly unreadable).",
    contents:
      "Extended training in computer hardware, network management and Cisco networking concepts, building on the certificate level course.",
    note:
      "Duration and some details are not fully readable; please confirm with MSME Tool Room Kolkata.",
  },
  {
    id: "ccna",
    group: "Computer Hardware, Networking & CCNA",
    name: "Cisco Certified Network Associate (CCNA)",
    duration: "2–4 Months (varies by batch plan)",
    intake: "20",
    fee: "Fee varies by batch",
    start: "Multiple batches (e.g., March, July, September, December).",
    selection: "First Come – First Serve",
    eligibility:
      "Degree / Diploma (any discipline), BCA, MCA, 10+2 pass out.",
    contents:
      "Networking fundamentals, OSI model, IP addressing, VLSM, CIDR, routing & packet forwarding, router and switch configuration, static/dynamic routing (RIP, OSPF, EIGRP), switching technologies, VLAN and inter-VLAN routing, access lists and basic security, lab practice with Packet Tracer and Cisco devices.",
    note:
      "The scan shows overlapping CCNA blocks with slightly different values; follow the official MSME Tool Room notification for exact structure.",
  },
];

// ------------------------------------------------------------------
// Helper: group courses by group label
// ------------------------------------------------------------------
const GROUP_ORDER = [
  "Tool Design & CAD/CAM",
  "CNC & Conventional Machining",
  "Automation, Mechatronics & Embedded",
  "Computer Hardware, Networking & CCNA",
];

function groupCourses(courses) {
  const map = {};
  for (const c of courses) {
    if (!map[c.group]) map[c.group] = [];
    map[c.group].push(c);
  }
  return GROUP_ORDER.map((g) => ({
    name: g,
    courses: map[g] || [],
  })).filter((g) => g.courses.length > 0);
}

// ------------------------------------------------------------------
// Course Card
// ------------------------------------------------------------------
function CourseCard({ course }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sectionCard h-100 courseCard">
      <div className="d-flex flex-column gap-1 mb-1">
        <div className="small fw-semibold">{course.name}</div>
        <div className="d-flex flex-wrap gap-2 small text-muted">
          {course.duration && (
            <span className="badge badge-sm bg-light text-muted border-0">
              {course.duration}
            </span>
          )}
          {course.fee && (
            <span className="badge badge-sm bg-light text-muted border-0">
              Fee: {course.fee}
            </span>
          )}
          {course.start && (
            <span className="badge badge-sm bg-light text-muted border-0">
              Start: {course.start}
            </span>
          )}
        </div>
      </div>

      <button
        type="button"
        className="expandTrigger btn btn-sm btn-link px-0 d-inline-flex align-items-center gap-1 small"
        onClick={() => setOpen((p) => !p)}
      >
        {open ? "Hide details" : "View details"}
        {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {open && (
        <div className="mt-2 small">
          {course.eligibility && (
            <p className="mb-1">
              <span className="text-muted">Eligibility: </span>
              {course.eligibility}
            </p>
          )}
          {course.selection && (
            <p className="mb-1">
              <span className="text-muted">Selection: </span>
              {course.selection}
            </p>
          )}
          {course.contents && <p className="mb-1">{course.contents}</p>}
          {course.note && (
            <p className="mb-0 text-warning fst-italic">{course.note}</p>
          )}
        </div>
      )}
    </div>
  );
}

// ------------------------------------------------------------------
// Page Component
// ------------------------------------------------------------------

export default function MSMEToolRoomPage() {
  const grouped = groupCourses(COURSES);

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="MSME Tool Room – Kolkata Courses"
        breadcrumb="MSME Tool Room Kolkata"
      />

      <VocationalTabsBar tabs={TABS} activeId="msme" />

      {/* Overview */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">
                High-End Skill Training at MSME Tool Room, Kolkata
              </h2>
              <p className="sectionSub">
                MSME Tool Room – Kolkata (Central Tool Room & Training Centre)
                is a Government of India society under the Ministry of MSME. It
                focuses on specialised training in tool &amp; die making,
                CAD/CAM, automation, mechatronics, hardware and networking.
              </p>
              <p className="sectionSub mb-0">
                The programs below range from a 4-year diploma to focused
                certificate and advanced diploma courses of 2–6 months, meant
                for students after Class 10, ITI pass-outs, diploma holders and
                engineering graduates.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3">Institute Snapshot</h3>
                <dl className="row small mb-0">
                  <dt className="col-5">Institute</dt>
                  <dd className="col-7 mb-2">
                    MSME Tool Room – Kolkata
                    <br />
                    (Central Tool Room &amp; Training Centre)
                  </dd>

                  <dt className="col-5">Authority</dt>
                  <dd className="col-7 mb-2">
                    Govt. of India Society, Ministry of MSME
                  </dd>

                  <dt className="col-5">Location</dt>
                  <dd className="col-7 mb-2">
                    Bon Hooghly Industrial Area,
                    <br />
                    Kolkata – 700108
                  </dd>

                  <dt className="col-5">Website</dt>
                  <dd className="col-7 mb-0">
                    <a
                      href="http://www.msmetoolroomkolkata.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="infoLink d-inline-flex align-items-center gap-1"
                    >
                      <ExternalLink size={14} />
                      msmetoolroomkolkata.com
                    </a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long-term Diploma */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="row justify-content-center ">
          <div className="col-lg-7 text-center mb-5">
            <h2 className="sectionHeading mb-2">
              Long-Term Diploma (After Class 10)
            </h2>
            <p className="sectionSub mb-0">
              A full 4-year program that builds deep technical expertise in tool
              and die making and allied engineering areas.
            </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              {LONG_TERM.map((course) => (
                <div key={course.id} className="sectionCard">
                  <div className="row g-3">
                    <div className="col-12 col-md-8">
                      <h3 className="h6 mb-2">{course.name}</h3>
                      <p className="small text-muted mb-2">
                        {course.summary}
                      </p>
                      <p className="small mb-0">
                        <span className="text-muted">Key topics: </span>
                        {course.contentsBrief}
                      </p>
                    </div>
                    <div className="col-12 col-md-4 small text-muted">
                      <div>
                        <strong>Duration:</strong> {course.duration}
                      </div>
                      <div>
                        <strong>Intake:</strong> {course.intake}
                      </div>
                      <div>
                        <strong>Fee:</strong> {course.fee}
                      </div>
                      <div>
                        <strong>Start:</strong> {course.start}
                      </div>
                      <div>
                        <strong>Selection:</strong> {course.selection}
                      </div>
                      <div className="mt-1">
                        <strong>Eligibility:</strong> {course.eligibility}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Medium & Short-Term: grouped cards but airy */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row justify-content-center ">
          <div className="col-lg-7 text-center mb-5">
            <h2 className="sectionHeading mb-2">
              Medium & Short-Term Programs
            </h2>
            <p className="sectionSub mb-0">
              Choose a group that matches your interest – design, machining,
              automation or networking – and then open the cards to see full
              details.
            </p>
            </div>
          </div>

          {grouped.map((group) => (
            <div key={group.name} className="mb-4 mb-md-5">
              <div className="d-flex justify-content-between align-items-end mb-2">
                <h3 className="h6 mb-0">{group.name}</h3>
              </div>
              <div className="row g-3 g-md-4">
                {group.courses.map((course) => (
                  <div
                    key={course.id}
                    className="col-12 col-md-6 col-lg-4 d-flex"
                  >
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to choose */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">
                How to Choose the Right MSME Course
              </h2>
              <ul className="list-unstyled small mb-0">
                <li className="d-flex mb-2">
                  <span className="me-2 mt-1">•</span>
                  <span>
                    If you have just passed <strong>Class 10</strong> and want a
                    full technical profession, consider the{" "}
                    <strong>Diploma in Tool &amp; Die Making</strong>.
                  </span>
                </li>
                <li className="d-flex mb-2">
                  <span className="me-2 mt-1">•</span>
                  <span>
                    If you are already in <strong>Diploma or B.Tech</strong> and
                    want to specialise, look at{" "}
                    <strong>CAD/CAM/CAE, Structural Design, VLSI & Embedded</strong>{" "}
                    or <strong>Automation & Process Control</strong>.
                  </span>
                </li>
                <li className="d-flex mb-2">
                  <span className="me-2 mt-1">•</span>
                  <span>
                    If you enjoy <strong>machine shop and production work</strong>,
                    consider <strong>CNC Machining</strong> and conventional
                    machining programs.
                  </span>
                </li>
                <li className="d-flex mb-2">
                  <span className="me-2 mt-1">•</span>
                  <span>
                    If you are drawn towards{" "}
                    <strong>computers, networks and servers</strong>, choose{" "}
                    <strong>Hardware & Networking</strong> or{" "}
                    <strong>CCNA-focused</strong> courses.
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3">Next Steps</h3>
                <ol className="small ps-3 mb-3">
                  <li>Match your interest with one of the groups above.</li>
                  <li>Check your eligibility (Class 10 / ITI / Diploma / Degree).</li>
                  <li>Note down duration, fee and start months.</li>
                  <li>
                    Visit the official MSME Tool Room website to confirm the
                    latest schedule and apply.
                  </li>
                </ol>
                <a
                  href="http://www.msmetoolroomkolkata.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary rounded-pill px-3 d-inline-flex align-items-center gap-1"
                >
                  <ExternalLink size={14} />
                  Visit MSME Tool Room Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      </FrontendLayout>
    </>
  );
}
