import React, { useState } from "react";
import { Link, usePage } from '@inertiajs/react';
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CollegeTabsBar from "./CollegeTabsBar";
import { Scissors, Layers3, Network, MapPin, ExternalLink } from "lucide-react";

// -------------------------------------------------------------
// Tabs – same family as IIT / NIT / IIM / AIIMS
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
// NIFT LIST – EXACTLY from your Career Book (names + addresses + contacts + websites)
// I’ve normalised spacing a bit but not added/removed any campuses.
// -------------------------------------------------------------
const NIFT_LIST = [
  {
    no: 1,
    name: "NIFT Delhi",
    city: "New Delhi",
    state: "Delhi",
    address:
      "NIFT Campus, Hauz Khas, Near Gulmohar Park, New Delhi – 110016",
    contact: "011-26542100, campusdirectordelhi@gmail.com",
    website: "www.nift.ac.in/delhi",
  },
  {
    no: 2,
    name: "NIFT Mumbai",
    city: "Navi Mumbai",
    state: "Maharashtra",
    address:
      "NIFT Campus, Plot No. 15, Sector 4, Kharghar, Navi Mumbai – 410210 (Maharastra)",
    contact: "022-27747000, nift.mumbai@nift.ac.in",
    website: "www.nift.ac.in/mumbai",
  },
  {
    no: 3,
    name: "NIFT Bengaluru",
    city: "Bangalore",
    state: "Karnataka",
    address:
      "NIFT Campus, C.A. Site #21, Sector-1, 27th Main, HSR Layout, Bangalore – 560102, Karnataka",
    contact: "080-22552550-56, director.bengaluru@nift.ac.in",
    website: "www.nift.ac.in/bengaluru",
  },
  {
    no: 4,
    name: "NIFT Gandhinagar",
    city: "Gandhinagar",
    state: "Gujarat",
    address: "GH-0 Circle, Gandhinagar – 382007, Gujarat",
    contact: "079-23240832, nift.gandhinagar@nift.ac.in",
    website: "www.nift.ac.in/gandhinagar",
  },
  {
    no: 5,
    name: "NIFT Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    address: "Opp. Hitech City, Madhapur, Hyderabad – 500081",
    contact: "040-23114537, nift.hyderabad@nift.ac.in",
    website: "www.nift.ac.in/hyderabad",
  },
  {
    no: 6,
    name: "NIFT Chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    address:
      "NIFT Campus, (near Tidel Park and Software Technology Park of India), Rajiv Gandhi Salai, Taramani, Chennai – 600113, Tamil Nadu",
    contact:
      "044-22542755 / 22542756, nift.chennai@nift.ac.in, director.chennai@nift.ac.in",
    website: "www.nift.ac.in/chennai",
  },
  {
    no: 7,
    name: "NIFT Kolkata",
    city: "Kolkata",
    state: "West Bengal",
    address:
      "Plot – 3B, Block-LA, Near 16 No. Water Tank, Sector III, Salt Lake City, Kolkata – 700098, West Bengal",
    contact: "+91-33-23358872, nift.kolkata@nift.ac.in",
    website: "www.nift.ac.in/kolkata",
  },
  {
    no: 8,
    name: "NIFT Bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",
    address:
      "NIFT Block, MP Bhoj (Open) University Campus, Kolar Road, Bhopal – 462016 (Madhya Pradesh)",
    contact:
      "0755-2493636, nift.bhopal@nift.ac.in, director.bhopal@nift.ac.in",
    website: "www.nift.ac.in/bhopal",
  },
  {
    no: 9,
    name: "NIFT Patna",
    city: "Patna",
    state: "Bihar",
    address:
      "NIFT Patna Campus, Near Jakkanpur Police Station, Mithapur, Patna – 800001, Bihar",
    contact: "0612-2675087, nift.patna@nift.ac.in",
    website: "www.nift.ac.in/patna",
  },
  {
    no: 10,
    name: "NIFT Kangra",
    city: "Kangra",
    state: "Himachal Pradesh",
    address: "Chheb, Kangra – 176001, Himachal Pradesh",
    contact: "01892-260874, nift.kangra@nift.ac.in",
    website: "www.nift.ac.in/kangra",
  },
  {
    no: 11,
    name: "NIFT Shillong",
    city: "Shillong",
    state: "Meghalaya",
    address:
      "NIFT Campus, North Eastern Indira Gandhi Regional Institute of Health & Medical Sciences (Old NEIGRIHMS Campus), 'C' Block, Pasteur Hills, Lawmali, Shillong – 793012, Meghalaya",
    contact: "0364-2590240, nift.shillong@nift.ac.in",
    website: "www.nift.ac.in/shillong",
  },
  {
    no: 12,
    name: "NIFT Bhubaneswar",
    city: "Bhubaneswar",
    state: "Odissa",
    address:
      "IDCO Plot No. 24, Opp. KIIT School of Management, Chandaka Industrial Estate, Bhubaneswar – 751024 (Odissa)",
    contact: "0674-2305700, nift.bhubneswar@nift.ac.in",
    website: "www.nift.ac.in/bhubaneswar",
  },
  {
    no: 13,
    name: "NIFT Rae Bareli",
    city: "Rae Bareli",
    state: "Uttar Pradesh",
    address:
      "NIFT Campus, Doorbhash Nagar, Rae Bareli – 229010, Uttar Pradesh",
    contact: "0535-2702426, nift.raebareli@nift.ac.in",
    website: "www.nift.ac.in/raebareli",
  },
  {
    no: 14,
    name: "NIFT Jodhpur",
    city: "Jodhpur",
    state: "Rajasthan",
    address: "Inside Sojati Gate, Jodhpur – 342001, Rajasthan",
    contact: "0291-3246310, director.niftjodhpur@gmail.com",
    website: "www.nift.ac.in/jodhpur",
  },
  {
    no: 15,
    name: "NIFT Kannur",
    city: "Kannur",
    state: "Kerala",
    address:
      "NIFT Campus, Dharmasala, Mangattuparamba, Kannur – 670562, Kerala",
    contact: "0497-2784780–84, nift.kannur@nift.ac.in",
    website: "www.nift.ac.in/kannur",
  },
];

// -------------------------------------------------------------
// NID LIST – external (you allowed this in Option B)
// -------------------------------------------------------------
const NID_LIST = [
  {
    no: 1,
    name: "NID Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    website: "www.nid.edu",
  },
  {
    no: 2,
    name: "NID Bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    website: "www.nid.edu/campus/bengaluru",
  },
  {
    no: 3,
    name: "NID Gandhinagar",
    city: "Gandhinagar",
    state: "Gujarat",
    website: "www.nid.edu/campus/gandhinagar",
  },
  {
    no: 4,
    name: "NID Andhra Pradesh",
    city: "Amaravati",
    state: "Andhra Pradesh",
    website: "nid.ac.in",
  },
  {
    no: 5,
    name: "NID Assam",
    city: "Jorhat",
    state: "Assam",
    website: "nidj.ac.in",
  },
];

// -------------------------------------------------------------
// Helper: URL normaliser (keeps display text same as book)
// -------------------------------------------------------------
function getWebsiteHref(raw) {
  if (!raw) return "#";
  const trimmed = raw.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed.replace(/^\/\//, "")}`;
}

// -------------------------------------------------------------
// Card component for NIFT – with expandable address/contact
// -------------------------------------------------------------
function NiftCard({ campus }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="iitCard w-100 d-flex flex-column">
      {/* Rank + city badge */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <span className="iitRank">#{campus.no}</span>
        <span className="iitCodeBadge">{campus.city}</span>
      </div>

      {/* Name + state */}
      <div className="mb-2">
        <h3 className="h6 fw-semibold mb-1 text-dark">{campus.name}</h3>
        <p className="small text-muted mb-0 d-flex align-items-center gap-1">
          <MapPin size={14} className="text-primary" />
          <span>
            {campus.city}, {campus.state}
          </span>
        </p>
      </div>

      {/* Expandable details */}
      <button
        type="button"
        className="btn btn-sm btn-link px-0 small text-decoration-none mt-2 mb-1"
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? "Hide full address & contact" : "Show full address & contact"}
      </button>

      {expanded && (
        <div className="small text-muted mb-2">
          <div className="mb-1">
            <strong>Address:</strong> {campus.address}
          </div>
          <div>
            <strong>Contact:</strong> {campus.contact}
          </div>
        </div>
      )}

      <div className="iitDivider my-2" />

      {/* Official website */}
      <div className="mt-auto d-flex justify-content-between align-items-center">
        <span className="small text-muted d-block mb-1">Official website</span>
        <a
          href={getWebsiteHref(campus.website)}
          target="_blank"
          rel="noreferrer"
          className="iitWebsiteLink d-inline-flex align-items-center gap-1"
        >
          <span>{campus.website}</span>
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Main Page
// -------------------------------------------------------------
export default function DesignCollegesPage() {
  return (
    <>
      <FrontendLayout>
      <HeroInner
        title="NIFT / NID – Fashion & Design Institutes"
        breadcrumb="NIFT / NID – Fashion & Design Institutes"
      />

      <CollegeTabsBar tabs={COLLEGE_TABS} activeId="design" />

      {/* 1. ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            {/* About */}
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Scissors size={22} className="text-primary" />
                <span>About NIFT & NID</span>
              </h2>
              <p className="sectionSub">
                National Institute of Fashion Technology (NIFT) is a group of colleges
                focused on fashion, design, management and technology for the
                international fashion business. It offers four-year undergraduate and
                two-year postgraduate programmes in design, management and technology.
              </p>
              <p className="sectionSub mb-0">
                For design programmes like B.Des and M.Des, candidates appear for the
                Creative Ability Test (CAT) and the General Ability Test (GAT). For
                technology and management programmes such as B.F.Tech, M.F.Tech and
                M.F.M, aspirants are required to qualify in relevant national level
                entrance examinations. National Institute of Design (NID) and some IITs
                use design exams such as UCEED and CEED for their design programmes.
              </p>
            </div>

            {/* Snapshot */}
            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <dl className="row small mb-0">
                  <dt className="col-5">NIFT campuses</dt>
                  <dd className="col-7 mb-2">{NIFT_LIST.length} campuses listed</dd>

                  <dt className="col-5">NID campuses</dt>
                  <dd className="col-7 mb-2">{NID_LIST.length} campuses</dd>

                  <dt className="col-5">UG programmes</dt>
                  <dd className="col-7 mb-2">
                    B.Des, B.F.Tech and other design / fashion technology programmes
                  </dd>

                  <dt className="col-5">PG programmes</dt>
                  <dd className="col-7 mb-2">
                    M.Des, M.F.Tech, fashion management and higher design programmes
                  </dd>

                  <dt className="col-5">Main exams</dt>
                  <dd className="col-7 mb-0">
                    NIFT Entrance (CAT+GAT), UCEED, CEED and other national level tests
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROGRAMMES & ENTRANCE TESTS – same dark-glass pattern */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">Programmes & Entrance Tests</h2>
            <p className="sectionSub mb-0">
              How fashion and design programmes connect with national-level entrance exams.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* Left – Programme pathways */}
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Programme pathways</span>
                </span>

                <p className="small mb-3">
                  NIFT and NID offer a range of creative programmes across fashion,
                  communication, product, textile and industrial design, at both
                  undergraduate and postgraduate levels.
                </p>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>B.Des</strong> – fashion, accessory, communication, textile,
                    product and related design fields.
                  </li>
                  <li>
                    <strong>B.F.Tech</strong> – fashion technology and apparel production.
                  </li>
                  <li>
                    <strong>M.Des</strong> – advanced design and innovation programmes.
                  </li>
                  <li>
                    <strong>M.F.Tech</strong> – postgraduate fashion technology.
                  </li>
                  <li>
                    <strong>MFM</strong> – fashion management and retail-related roles.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right – Exam cards */}
            <div className="col-12 col-lg-7 d-flex">
              <div className="row g-3 w-100 align-content-stretch">
                {[
                  {
                    tag: "NIFT Entrance",
                    level: "UG / PG",
                    title: "CAT & GAT",
                    text: "Creative Ability Test (CAT) and General Ability Test (GAT) for B.Des, M.Des and related programmes.",
                  },
                  {
                    tag: "NIFT Tech / Mgmt",
                    level: "Tech / Mgmt",
                    title: "B.F.Tech, M.F.Tech, M.F.M",
                    text: "Technology and management programmes use national level entrance examinations as notified.",
                  },
                  {
                    tag: "UCEED",
                    level: "UG",
                    title: "B.Des – Design",
                    text: "Undergraduate Common Entrance Examination for Design used by NID / IITs for some B.Des programmes.",
                  },
                  {
                    tag: "CEED",
                    level: "PG",
                    title: "M.Des – Design",
                    text: "Common Entrance Examination for Design for postgraduate design programmes at NID, IITs and other institutes.",
                  },
                ].map((exam) => (
                  <div key={exam.tag} className="col-12 col-sm-6 d-flex">
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

      {/* 3. NIFT CAMPUSES – premium cards with expand */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-2">NIFT Campuses</h2>
          <p className="sectionSub mb-4">
            All National Institute of Fashion Technology campuses listed with full address, 
            contact and website – expand any card to see details.
          </p>

          <div className="row g-3 g-md-4">
            {NIFT_LIST.map((campus) => (
              <div key={campus.no} className="col-12 col-md-6 col-lg-4 d-flex">
                <NiftCard campus={campus} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NID CAMPUSES – simpler cards (no expand, just basic info) */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-2">NID Campuses</h2>
          <p className="sectionSub mb-4">
            Leading National Institute of Design campuses offering B.Des and M.Des programmes.
          </p>

          <div className="row g-3 g-md-4">
            {NID_LIST.map((inst) => (
              <div key={inst.no} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="iitCard w-100 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="iitRank">#{inst.no}</span>
                    <span className="iitCodeBadge">{inst.city}</span>
                  </div>

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

                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="small text-muted d-block mb-1">
                      Official website
                    </span>
                    <a
                      href={getWebsiteHref(inst.website)}
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

      {/* 5. GUIDANCE NOTE */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="sectionCard bg-light border small">
            <h3 className="h6 mb-2">How to Use This Information</h3>
            <p className="mb-2">
              This page organises key fashion and design institutes, their entrance exams, and
              campus details so that students can note locations and official websites in one place.
            </p>
            <p className="mb-0 text-muted">
              For any specific admission year, always refer to official notifications and the
              latest details on NIFT, NID and national design entrance exam websites.
            </p>
          </div>
        </div>
      </section>

      {/* 6. EXPLORE OTHER COLLEGE CATEGORIES */}
      <section className="py-5 spotlightSection">
        <div className="container py-lg-4">
          <div className="mb-4 mb-lg-5 text-center">
            <h2 className="sectionHeading text-white mb-2">
              Explore Other College Categories
            </h2>
            <p className="sectionSub text-light mb-0">
              From design institutes, you can also explore universities, engineering colleges and
              vocational / technical institutes.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Universities */}
            <div className="col-12 col-md-4">
              <Link href="/colleges/central" className="text-decoration-none">
                <div className="glassCard premiumHover h-100">
                  <h3 className="h6 mb-2 text-white">Universities</h3>
                  <p className="small text-light mb-0">
                    Central, state, private / deemed and open universities.
                  </p>
                </div>
              </Link>
            </div>

            {/* By Field of Study */}
            <div className="col-12 col-md-4">
              <Link href="/colleges/engineering" className="text-decoration-none">
                <div className="glassCard premiumHover h-100">
                  <h3 className="h6 mb-2 text-white">By Field of Study</h3>
                  <p className="small text-light mb-0">
                    Engineering, medical, management, law, agriculture and more.
                  </p>
                </div>
              </Link>
            </div>

            {/* Vocational & Technical */}
            <div className="col-12 col-md-4">
              <Link href="/colleges/iti" className="text-decoration-none">
                <div className="glassCard premiumHover h-100">
                  <h3 className="h6 mb-2 text-white">
                    Vocational & Technical Institutes
                  </h3>
                  <p className="small text-light mb-0">
                    ITI centres, polytechnic colleges, MSME tool rooms and skill centres.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
