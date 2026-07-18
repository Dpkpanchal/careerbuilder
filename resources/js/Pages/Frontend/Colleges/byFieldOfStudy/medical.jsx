"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CollegeTabsBar from "../CollegeTabsBar";
import {
  Layers3,
  Network,
  MapPin,
  ExternalLink,
  University,
  ShieldCheck,
  ArrowRight,
  Stethoscope,
} from "lucide-react";

// -------------------------------------------------------------
// Tabs – By Field of Study (same bar for all by-field pages)
// -------------------------------------------------------------
const COLLEGE_TABS = [
  {
    id: "engineering",
    label: "Engineering Colleges",
    href: '/colleges/engineering-colleges',
  },
  {
    id: "medical",
    label: "Medical & Paramedical",
    href: '/colleges/medical-paramedical-colleges',
  },
  {
    id: "nursing",
    label: "Nursing",
    href: '/colleges/nursing-colleges',
  },
  {
    id: "pharmacy",
    label: "Pharmacy",
    href: '/colleges/pharmacy-colleges',
  },
  {
    id: "management",
    label: "Management & Business",
    href: '/colleges/management-business-colleges',
  },
  {
    id: "law",
    label: "Law",
    href: '/colleges/law-colleges',
  },
  {
    id: "agriculture",
    label: "Agriculture & Veterinary",
    href: '/colleges/agriculture-veterinary-colleges',
  },
  {
    id: "teacher-training",
    label: "Teacher Training / B.Ed",
    href: '/colleges/teacher-training-bed-colleges',
  },
];

// -------------------------------------------------------------
// Official links (NO internal listing pages needed)
// -------------------------------------------------------------
const INSTITUTE_LINKS = [
  { title: "NEET (UG) – Official (NTA)", url: "https://neet.nta.nic.in/" },
  { title: "UG Medical Counselling – Official (MCC / DGHS)", url: "https://mcc.nic.in/ug-medical-counselling/" },
  { title: "NMC – List of Colleges Teaching MBBS (Official)", url: "https://www.nmc.org.in/information-desk/for-students-to-study-in-india/list-of-college-teaching-mbbs/" },
  { title: "NMC – College & Course Search (Official)", url: "https://www.nmc.org.in/information-desk/college-and-course-search/" },
  { title: "NCAHP – Allied & Healthcare Professions (Official)", url: "https://ncahp.abdm.gov.in/" },
  { title: "NIRF 2025 – Medical Ranking (Reference)", url: "https://www.nirfindia.org/Rankings/2025/MedicalRanking.html" },
];

// -------------------------------------------------------------
// West Bengal spotlight – Medical colleges (with official websites)
// (curated, not exhaustive)
// -------------------------------------------------------------
// const WB_MEDICAL_SPOTLIGHT = [
//   { no: 1, name: "Medical College & Hospital, Kolkata", city: "Kolkata", state: "West Bengal", website: "https://www.medicalcollegekolkata.in/" },
//   { no: 2, name: "IPGMER & SSKM Hospital", city: "Kolkata", state: "West Bengal", website: "https://www.ipgmer.gov.in/" },
//   { no: 3, name: "Nil Ratan Sircar Medical College & Hospital (NRSMC)", city: "Kolkata", state: "West Bengal", website: "https://nrsmc.edu.in/" },
//   { no: 4, name: "R. G. Kar Medical College & Hospital", city: "Kolkata", state: "West Bengal", website: "https://www.rgkarmch.in/" },
//   { no: 5, name: "Calcutta National Medical College & Hospital (CNMC)", city: "Kolkata", state: "West Bengal", website: "https://www.cnmckolkata.com/" },
//   { no: 6, name: "College of Medicine & JNM Hospital (COMJNMH)", city: "Kalyani (Nadia)", state: "West Bengal", website: "https://comjnmh.ac.in/" },
//   { no: 7, name: "Burdwan Medical College & Hospital", city: "Purba Bardhaman", state: "West Bengal", website: "https://bmcgov.com/" },
//   { no: 8, name: "North Bengal Medical College & Hospital", city: "Sushrutanagar (Darjeeling)", state: "West Bengal", website: "https://nbmch.ac.in/" },
//   { no: 9, name: "Bankura Sammilani Medical College & Hospital", city: "Bankura", state: "West Bengal", website: "https://bsmedicalcollege.org.in/" },
//   { no: 10, name: "Midnapore Medical College & Hospital", city: "Paschim Medinipur", state: "West Bengal", website: "https://midnaporemmc.ac.in/" },
//   { no: 11, name: "Malda Medical College & Hospital", city: "Malda", state: "West Bengal", website: "https://www.maldamedicalcollege.co.in/" },
//   { no: 12, name: "Murshidabad Medical College & Hospital", city: "Berhampore (Murshidabad)", state: "West Bengal", website: "https://www.msdmch.org/" },
// ];

// -------------------------------------------------------------
// PAGE
// -------------------------------------------------------------
export default function MedicalParamedicalCollegesPage({collegeContents}) {
  const WB_MEDICAL_SPOTLIGHT = Array.isArray(collegeContents) ? collegeContents : [];

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Medical & Paramedical Colleges in India"
        breadcrumb="Medical & Paramedical Colleges"
      />

      <CollegeTabsBar tabs={COLLEGE_TABS} activeId="medical" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Stethoscope size={20} className="text-primary" />
                <span>About Medical & Paramedical Colleges</span>
              </h2>

              <p className="sectionSub">
                Medical education in India spans <strong>MBBS and allied medical degrees</strong>, plus a wide
                range of <strong>paramedical / allied health</strong> programmes (lab technology, radiology,
                physiotherapy, OT/anaesthesia technology and more) offered through universities and recognized institutions.
              </p>

              <p className="sectionSub mb-0">
                For safe shortlisting: always verify the institute and course using official regulators/counselling portals,
                then check the institute website for the latest seats, fees, hostel, and academic rules.
              </p>
            </div>

            {/* ✅ Quick Snapshot (pattern preserved: clickable official links) */}
            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <dl className="row small mb-0">
                  <dt className="col-5">WB spotlight</dt>
                  <dd className="col-7 mb-2">
                    {WB_MEDICAL_SPOTLIGHT.length} institutes shown
                  </dd>

                  <dt className="col-5">Main UG exam</dt>
                  <dd className="col-7 mb-2">
                    <a
                      href="https://neet.nta.nic.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>NEET (UG) – NTA</span>
                      <ExternalLink size={14} />
                    </a>
                  </dd>

                  <dt className="col-5">UG counselling</dt>
                  <dd className="col-7 mb-2">
                    <a
                      href="https://mcc.nic.in/ug-medical-counselling/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <span>MCC UG Counselling</span>
                      <ExternalLink size={14} />
                    </a>
                  </dd>

                  <dt className="col-5">Verification</dt>
                  <dd className="col-7 mb-0">
                    <a
                      href="https://www.nmc.org.in/information-desk/for-students-to-study-in-india/list-of-college-teaching-mbbs/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                    >
                      <ShieldCheck size={14} className="text-primary" />
                      <span>NMC MBBS College List</span>
                      <ExternalLink size={14} />
                    </a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) BROWSE BY INSTITUTE TYPE – OFFICIAL LINKS (your UI) */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="border-top pt-4 mt-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <University size={18} className="text-primary" />
              <h3 className="h5 mb-0">Browse by Institute Type</h3>
            </div>

            <div className="text-muted mb-4" style={{ maxWidth: "90ch" }}>
              Open official sources to verify exams, counselling, recognized colleges and allied-health categories.
            </div>

            <div className="row g-2 g-lg-3">
              {INSTITUTE_LINKS.map((item) => (
                <div key={item.url} className="col-12 col-md-6">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="d-flex align-items-center justify-content-between gap-3 px-3 py-3 rounded-4 border bg-light text-decoration-none linkRowHover"
                    style={{ transition: "all 0.2s ease" }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span
                        className="rounded-pill"
                        style={{
                          width: 10,
                          height: 10,
                          background: "var(--color-secondary)",
                          display: "inline-block",
                        }}
                      />
                      <span className="fw-semibold text-dark">{item.title}</span>
                    </div>

                    <ArrowRight size={18} className="text-primary" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3) PROGRAMMES & ROUTES – DARK BOXES */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">Programmes & Admission Routes</h2>
            <p className="sectionSub mb-0">
              Understand how MBBS and allied health admissions connect to official exams and counselling.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* LEFT – pathways */}
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Programme pathways</span>
                </span>

                <p className="small mb-3">
                  Medical & allied health education has multiple levels. Always confirm eligibility and current-year rules
                  on the official portals.
                </p>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>MBBS</strong> – core undergraduate medical degree.
                  </li>
                  <li>
                    <strong>Allied / Paramedical UG</strong> – lab technology, radiology/imaging, physiotherapy, OT/anaesthesia
                    tech, nutrition, etc.
                  </li>
                  <li>
                    <strong>PG medical</strong> – MD/MS and other postgraduate pathways as per notifications.
                  </li>
                  <li>
                    <strong>Super-speciality</strong> – DM/MCh and higher clinical tracks (as per rules).
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT – cards */}
            <div className="col-12 col-lg-7 d-flex">
              <div className="row g-3 w-100 align-content-stretch">
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">NEET (UG)</span>
                      <span className="nitExamLevel">UG</span>
                    </div>
                    <p className="nitExamTitle mb-1">MBBS entry</p>
                    <p className="nitExamText mb-0">
                      Check the official NEET (UG) portal for information bulletins and updates.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Counselling</span>
                      <span className="nitExamLevel">UG</span>
                    </div>
                    <p className="nitExamTitle mb-1">Seat allocation</p>
                    <p className="nitExamText mb-0">
                      MCC handles online counselling for All India Quota seats as per official notices.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Recognition</span>
                      <span className="nitExamLevel">Official</span>
                    </div>
                    <p className="nitExamTitle mb-1">Verify colleges</p>
                    <p className="nitExamText mb-0">
                      Use NMC “MBBS colleges list” and “college/course search” before trusting any brochure.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Allied Health</span>
                      <span className="nitExamLevel">Paramed</span>
                    </div>
                    <p className="nitExamTitle mb-1">NCAHP reference</p>
                    <p className="nitExamText mb-0">
                      Allied/health professions categories and updates are available on the NCAHP portal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            <a href="https://neet.nta.nic.in/" target="_blank" rel="noreferrer" className="btn btn-primary">
              NEET (UG) – NTA <ExternalLink size={16} className="ms-1" />
            </a>
            <a href="https://mcc.nic.in/ug-medical-counselling/" target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              MCC UG Counselling <ExternalLink size={16} className="ms-1" />
            </a>
            <a href="https://www.nmc.org.in/information-desk/college-and-course-search/" target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              NMC College Search <ExternalLink size={16} className="ms-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 4) WB SPOTLIGHT GRID */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">West Bengal – Medical Colleges (Spotlight)</h2>
              <p className="sectionSub mb-0">
                Curated list with official websites (for quick shortlisting and verification).
              </p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {WB_MEDICAL_SPOTLIGHT.map((inst) => (
              <div key={inst.no} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="iitCard w-100 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="iitRank">#{inst.no}</span>
                    <span className="iitCodeBadge">{inst.city}</span>
                  </div>

                  <div className="mb-3">
                    <h3 className="h6 fw-semibold mb-1 text-dark d-flex  gap-2">
                      <Stethoscope size={16} className="text-primary flex-shrink-0" />
                      <span>{inst.name}</span>
                    </h3>

                    <p className="small text-muted mb-0 d-flex align-items-center gap-1">
                      <MapPin size={14} className="text-primary" />
                      <span>
                        {inst.city}, {inst.state}
                      </span>
                    </p>
                  </div>

                  <div className="iitDivider my-2" />

                  <div className="mt-auto d-flex justify-content-between align-items-center flex-wrap">
                    <span className="small text-muted d-block mb-1">Official website</span>
                    <a
                      href={inst.website}
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                      title={inst.website}
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

      {/* 5) GUIDANCE NOTE */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="sectionCard bg-light border small">
            <h3 className="h6 mb-2">How to Use This Page</h3>
            <p className="mb-2">
              Start with official portals (NEET/NTA, MCC, NMC and NCAHP) for verification. Then shortlist colleges
              based on location, fees, hospital exposure, academics and outcomes.
            </p>
            <p className="mb-0 text-muted">
              Always cross-check seats/fees/eligibility and current-year notices on the official institute websites and
              counselling authorities.
            </p>
          </div>
        </div>
      </section>
</FrontendLayout>
    </>
  );
}
