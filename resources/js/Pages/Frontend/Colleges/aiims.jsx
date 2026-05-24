import React from "react";
import { Link, usePage } from '@inertiajs/react';
import HeroInner from '@/Components/Frontend/Hero/HeroInner';
import FrontendLayout from '@/Layouts/FrontendLayout';
import CollegeTabsBar from "./CollegeTabsBar";
import { Stethoscope, Layers3, Network, MapPin, ExternalLink } from "lucide-react";

// -------------------------------------------------------------
// Tabs – same as other National Institutes pages
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
// AIIMS LIST – curated set of AIIMS campuses with websites
// (you can extend this list further if needed)
// -------------------------------------------------------------
const AIIMS_LIST = [
  {
    no: 1,
    name: "AIIMS New Delhi",
    city: "New Delhi",
    state: "Delhi",
    website: "https://www.aiims.edu/en.html",
  },
  {
    no: 2,
    name: "AIIMS Bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",
    website: "https://www.aiimsbhopal.edu.in",
  },
  {
    no: 3,
    name: "AIIMS Bhubaneswar",
    city: "Bhubaneswar",
    state: "Odisha",
    website: "https://aiimsbhubaneswar.nic.in",
  },
  {
    no: 4,
    name: "AIIMS Jodhpur",
    city: "Jodhpur",
    state: "Rajasthan",
    website: "https://www.aiimsjodhpur.edu.in",
  },
  {
    no: 5,
    name: "AIIMS Patna",
    city: "Patna",
    state: "Bihar",
    website: "https://aiimspatna.edu.in",
  },
  {
    no: 6,
    name: "AIIMS Raipur",
    city: "Raipur",
    state: "Chhattisgarh",
    website: "https://www.aiimsraipur.edu.in",
  },
  {
    no: 7,
    name: "AIIMS Rishikesh",
    city: "Rishikesh",
    state: "Uttarakhand",
    website: "https://aiimsrishikesh.edu.in",
  },
  {
    no: 8,
    name: "AIIMS Kalyani",
    city: "Kalyani",
    state: "West Bengal",
    website: "https://aiimskalyani.edu.in",
  },
  {
    no: 9,
    name: "AIIMS Gorakhpur",
    city: "Gorakhpur",
    state: "Uttar Pradesh",
    website: "https://aiimsgorakhpur.edu.in",
  },
  {
    no: 10,
    name: "AIIMS Bathinda",
    city: "Bathinda",
    state: "Punjab",
    website: "https://aiimsbathinda.edu.in",
  },
  {
    no: 11,
    name: "AIIMS Bilaspur",
    city: "Bilaspur",
    state: "Himachal Pradesh",
    website: "https://www.aiimsbilaspur.edu.in",
  },
  {
    no: 12,
    name: "AIIMS Mangalagiri",
    city: "Mangalagiri",
    state: "Andhra Pradesh",
    website: "https://www.aiimsmangalagiri.edu.in",
  },
  {
    no: 13,
    name: "AIIMS Deoghar",
    city: "Deoghar",
    state: "Jharkhand",
    website: "https://www.aiimsdeoghar.edu.in",
  },
  {
    no: 14,
    name: "AIIMS Guwahati",
    city: "Guwahati",
    state: "Assam",
    website: "https://aiimsguwahati.ac.in",
  },
  {
    no: 15,
    name: "AIIMS Nagpur",
    city: "Nagpur",
    state: "Maharashtra",
    website: "https://aiimsnagpur.edu.in",
  },
  {
    no: 16,
    name: "AIIMS Rae Bareli",
    city: "Rae Bareli",
    state: "Uttar Pradesh",
    website: "https://aiimsrbl.edu.in",
  },
  {
    no: 17,
    name: "AIIMS Vijaypur, Jammu",
    city: "Vijaypur",
    state: "Jammu and Kashmir",
    website: "https://www.aiimsjammu.edu.in",
  },
];

// -------------------------------------------------------------
// PAGE
// -------------------------------------------------------------
export default function AIIMSPage() {
  return (
    <>
    <FrontendLayout>  
      <HeroInner title="Aiims Medical Institutes" breadcrumb="Aiims Medical Institutes" />  
      <CollegeTabsBar tabs={COLLEGE_TABS} activeId="aiims" />

      {/* 1. ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <span>About AIIMS</span>
              </h2>
              <p className="sectionSub">
                The All India Institutes of Medical Sciences (AIIMS) are a group of
                autonomous public medical institutes. They are among the most reputed
                centres for medical education, research and hospital services in India,
                with undergraduate, postgraduate and super-speciality programmes in
                medicine and allied health sciences.
              </p>
              <p className="sectionSub mb-0">
                AIIMS campuses offer MBBS, B.Sc. (Nursing), MD / MS, DM / MCh and
                other advanced courses. Entry to core undergraduate medical programmes
                is through the national NEET (UG) examination, while postgraduate and
                super-speciality admissions use dedicated national-level tests as per
                current regulations.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>
                <dl className="row small mb-0">
                  <dt className="col-5">Number shown</dt>
                  <dd className="col-7 mb-2">
                    {AIIMS_LIST.length} AIIMS campuses listed
                  </dd>

                  <dt className="col-5">Type</dt>
                  <dd className="col-7 mb-2">
                    Autonomous public medical institutes
                  </dd>

                  <dt className="col-5">Core UG course</dt>
                  <dd className="col-7 mb-2">MBBS, B.Sc. (Nursing) and allied UG courses</dd>

                  <dt className="col-5">PG & higher</dt>
                  <dd className="col-7 mb-2">
                    MD / MS, DM / MCh, PhD, and other specialisations
                  </dd>

                  <dt className="col-5">Main UG exam</dt>
                  <dd className="col-7 mb-0">NEET (UG)</dd>
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
              Programmes & Entrance Tests at AIIMS
            </h2>
            <p className="sectionSub mb-0">
              How AIIMS medical and nursing programmes connect with national-level entrance
              examinations.
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
                  AIIMS campuses run a complete ladder of medical education – from MBBS
                  and B.Sc. (Nursing) to specialised postgraduate and super-speciality
                  programmes, plus research and fellowship tracks.
                </p>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>MBBS</strong> – core undergraduate medical programme.
                  </li>
                  <li>
                    <strong>B.Sc. Nursing & allied UG</strong> – nursing and paramedical
                    undergraduate programmes.
                  </li>
                  <li>
                    <strong>MD / MS</strong> – postgraduate clinical and non-clinical medical
                    degrees.
                  </li>
                  <li>
                    <strong>DM / MCh</strong> – super-speciality programmes in selected
                    disciplines.
                  </li>
                  <li>
                    <strong>PhD & research</strong> – doctoral and research-oriented tracks.
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT – Exam cards */}
            <div className="col-12 col-lg-7 d-flex">
              <div className="row g-3 w-100 align-content-stretch">
                {/* NEET UG */}
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">NEET (UG)</span>
                      <span className="nitExamLevel">UG</span>
                    </div>
                    <p className="nitExamTitle mb-1">MBBS admission</p>
                    <p className="nitExamText mb-0">
                      National-level entrance examination used for MBBS seats in AIIMS institutes.
                    </p>
                  </div>
                </div>

                {/* Nursing / UG allied routes */}
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Nursing & UG tests</span>
                      <span className="nitExamLevel">UG</span>
                    </div>
                    <p className="nitExamTitle mb-1">B.Sc. Nursing / allied UG</p>
                    <p className="nitExamText mb-0">
                      Dedicated entrance routes or national tests are notified for B.Sc. Nursing
                      and other UG health programmes depending on the year.
                    </p>
                  </div>
                </div>

                {/* PG / INI-type exams */}
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">PG medical exams</span>
                      <span className="nitExamLevel">PG</span>
                    </div>
                    <p className="nitExamTitle mb-1">MD / MS admissions</p>
                    <p className="nitExamText mb-0">
                      Postgraduate medical seats use national-level PG medical entrance
                      examinations as per current regulations and notifications.
                    </p>
                  </div>
                </div>

                {/* Super-speciality & research selection */}
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Super-speciality & research</span>
                      <span className="nitExamLevel">Higher</span>
                    </div>
                    <p className="nitExamTitle mb-1">DM / MCh / PhD</p>
                    <p className="nitExamText mb-0">
                      Selection combines entrance tests, academic record and interviews, as per
                      notifications issued by individual AIIMS and central authorities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIST OF AIIMS – PREMIUM CATALOG GRID */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">
                All India Institutes of Medical Sciences (AIIMS)
              </h2>
              <p className="sectionSub mb-0">
                Key AIIMS campuses across India with their locations and official websites.
              </p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {AIIMS_LIST.map((inst) => (
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
                  <div className="mt-auto d-flex justify-content-between align-items-center flex-wrap">
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
              This page brings together the basic structure of AIIMS programmes, the major
              entrance routes and a catalogue of important AIIMS campuses with their websites.
            </p>
            <p className="mb-0 text-muted">
              For any admission year, students should follow the latest official notifications
              for NEET (UG), postgraduate medical entrance exams and institute-specific updates
              published on AIIMS websites and central counselling portals.
            </p>
          </div>
        </div>
      </section>

      {/* 5. EXPLORE OTHER COLLEGE CATEGORIES – SIBLINGS OF NATIONAL INSTITUTES */}
      <section className="py-5 spotlightSection">
        <div className="container py-lg-4">
          <div className="row g-4 align-items-center justify-content-center mb-3 mb-lg-5 text-center">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading text-white mb-2">
                Explore Other College Categories
              </h2>
              <p className="sectionSub text-light mb-0">
                From AIIMS you can also explore universities, stream-wise colleges and
                vocational & technical institutes.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Universities */}
            <div className="col-12 col-md-4 col-lg-4">
              <Link href="/colleges/central" className="text-decoration-none">
                <div className="glassCard premiumHover h-100">
                  <h3 className="h6 mb-1 fw-medium text-white">Universities</h3>
                  <p className="small text-light mb-0">
                    Central, state, private / deemed and open universities.
                  </p>
                </div>
              </Link>
            </div>

            {/* By Field of Study */}
            <div className="col-12 col-md-4 col-lg-4">
              <Link href="/colleges/engineering" className="text-decoration-none">
                <div className="glassCard premiumHover h-100">
                  <h3 className="h6 mb-1 fw-medium text-white">By Field of Study</h3>
                  <p className="small text-light mb-0">
                    Engineering, medical, management, law, agriculture and more.
                  </p>
                </div>
              </Link>
            </div>

            {/* Vocational & Technical Institutes */}
            <div className="col-12 col-md-4 col-lg-4">
              <Link href="/colleges/iti" className="text-decoration-none">
                <div className="glassCard premiumHover h-100">
                  <h3 className="h6 mb-1 fw-medium text-white">
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
