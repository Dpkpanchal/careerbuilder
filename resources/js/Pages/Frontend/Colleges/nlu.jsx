import React from "react";
import { Link, usePage } from '@inertiajs/react';
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CollegeTabsBar from "./CollegeTabsBar";
import { Scale, Layers3, Network, MapPin, ExternalLink } from "lucide-react";

// -------------------------------------------------------------
// Tabs – same family as IIT / NIT / IIM / AIIMS / NIFT/NID
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
// Helper – normalise website into href
// -------------------------------------------------------------
function getWebsiteHref(raw) {
  if (!raw) return "#";
  const trimmed = raw.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed.replace(/^\/\//, "")}`;
}


// -------------------------------------------------------------
// NLUs – list of 19 National Law Universities
// -------------------------------------------------------------
const NLU_LIST = [
  {
    name: "National Law School of India University (NLSIU)",
    city: "Bengaluru",
    state: "Karnataka",
    website: "https://www.nls.ac.in",
  },
  {
    name: "NALSAR University of Law",
    city: "Hyderabad",
    state: "Telangana",
    website: "https://www.nalsar.ac.in",
  },
  {
    name: "National Law Institute University (NLIU)",
    city: "Bhopal",
    state: "Madhya Pradesh",
    website: "https://www.nliu.ac.in",
  },
  {
    name: "The WB National University of Juridical Sciences (WBNUJS)",
    city: "Kolkata",
    state: "West Bengal",
    website: "https://www.nujs.edu",
  },
  {
    name: "National Law University, Jodhpur (NLUJ)",
    city: "Jodhpur",
    state: "Rajasthan",
    website: "https://nlujodhpur.ac.in",
  },
  {
    name: "Hidayatullah National Law University (HNLU)",
    city: "Raipur",
    state: "Chhattisgarh",
    website: "https://www.hnlu.ac.in",
  },
  {
    name: "Gujarat National Law University (GNLU)",
    city: "Gandhinagar",
    state: "Gujarat",
    website: "https://www.gnlu.ac.in",
  },
  {
    name: "Dr. Ram Manohar Lohiya National Law University (RMLNLU)",
    city: "Lucknow",
    state: "Uttar Pradesh",
    website: "https://www.rmlnlu.ac.in",
  },
  {
    name: "Rajiv Gandhi National University of Law (RGNUL)",
    city: "Patiala",
    state: "Punjab",
    website: "https://www.rgnul.ac.in",
  },
  {
    name: "Chanakya National Law University (CNLU)",
    city: "Patna",
    state: "Bihar",
    website: "https://www.cnlu.ac.in",
  },
  {
    name: "National University of Advanced Legal Studies (NUALS)",
    city: "Kochi",
    state: "Kerala",
    website: "https://nuals.ac.in",
  },
  {
    name: "National Law University Odisha (NLUO)",
    city: "Cuttack",
    state: "Odisha",
    website: "https://www.nluo.ac.in",
  },
  {
    name: "National University of Study and Research in Law (NUSRL)",
    city: "Ranchi",
    state: "Jharkhand",
    website: "https://www.nusrlranchi.in",
  },
  {
    name: "National Law University and Judicial Academy, Assam (NLUJA)",
    city: "Guwahati",
    state: "Assam",
    website: "https://www.nluassam.ac.in",
  },
  {
    name: "Damodaram Sanjivayya National Law University (DSNLU)",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    website: "https://dsnlu.ac.in",
  },
  {
    name: "Tamil Nadu National Law University (TNNLU)",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    website: "https://tnnlu.ac.in",
  },
  {
    name: "Maharashtra National Law University Mumbai (MNLU Mumbai)",
    city: "Mumbai",
    state: "Maharashtra",
    website: "https://mnlumumbai.edu.in",
  },
  {
    name: "Maharashtra National Law University Nagpur (MNLU Nagpur)",
    city: "Nagpur",
    state: "Maharashtra",
    website: "https://www.nlunagpur.ac.in",
  },
  {
    name: "Maharashtra National Law University Aurangabad (MNLU Aurangabad)",
    city: "Aurangabad",
    state: "Maharashtra",
    website: "https://mnlua.ac.in",
  },
];

// -------------------------------------------------------------
// Main Page
// -------------------------------------------------------------
export default function NLUsPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="NLUs – National Law Universities"
        breadcrumb="NLUs – National Law Universities"
      />

      <CollegeTabsBar tabs={COLLEGE_TABS} activeId="nlu" />

      {/* 1. ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            {/* About */}
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Scale size={22} className="text-primary" />
                <span>About National Law Universities</span>
              </h2>
              <p className="sectionSub">
                National Law Universities (NLUs) form a group of specialised institutions
                for legal education in India. They are known for their integrated
                five-year law programmes, strong emphasis on moot courts and research,
                and close connection with the legal profession and judiciary.
              </p>
              <p className="sectionSub mb-0">
                Most NLUs admit students to their integrated BA LLB or BBA LLB programmes
                through the Common Law Admission Test (CLAT), while NLU Delhi conducts
                its own entrance test. After graduation, students can pursue LLM, research,
                and other advanced legal education pathways through national and
                institute-level entrance examinations.
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
                  <dt className="col-5">Number of NLUs</dt>
                  <dd className="col-7 mb-2">{NLU_LIST.length} universities</dd>

                  <dt className="col-5">Core UG degree</dt>
                  <dd className="col-7 mb-2">
                    5-year integrated BA LLB / BBA LLB and related law degrees
                  </dd>

                  <dt className="col-5">PG programmes</dt>
                  <dd className="col-7 mb-2">
                    LLM, specialised postgraduate law programmes and research degrees
                  </dd>

                  <dt className="col-5">Main national exam</dt>
                  <dd className="col-7 mb-2">
                    CLAT (for participating NLUs); AILET (for NLU Delhi)
                  </dd>

                  <dt className="col-5">Other routes</dt>
                  <dd className="col-7 mb-0">
                    LSAT—India and various university-level law entrance tests
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 3. LIST OF NLUs – premium cards */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">
                National Law Universities (NLUs)
              </h2>
              <p className="sectionSub mb-0">
                A catalogue of 19 National Law Universities with their location and official websites.
              </p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {NLU_LIST.map((inst, index) => (
              <div key={inst.name} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="iitCard w-100 d-flex flex-column">
                  {/* Rank + city badge */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="iitRank">#{index + 1}</span>
                    <span className="iitCodeBadge">{inst.city}</span>
                  </div>

                  {/* Name + state */}
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

                  {/* Website */}
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

      {/* 4. GUIDANCE NOTE */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="sectionCard bg-light border small">
            <h3 className="h6 mb-2">How to Use This Information</h3>
            <p className="mb-2">
              This page brings together the key law entrance exams and the main group of
              National Law Universities so that students can quickly see where different
              exams lead and which institutes they connect to.
            </p>
            <p className="mb-0 text-muted">
              For any admission cycle, always follow the latest official notifications on
              exam websites such as CLAT and AILET, and individual NLU portals for exact
              eligibility, schedules and procedures.
            </p>
          </div>
        </div>
      </section>

   
      </FrontendLayout>
    </>
  );
}
