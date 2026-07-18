"use client";

import React from "react";
import { Link, usePage } from '@inertiajs/react'; 
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CollegeTabsBar from "../CollegeTabsBar";
import { Layers3, Network, MapPin, ExternalLink, University } from "lucide-react";

// -------------------------------------------------------------
// Tabs – Universities category (same component, same UX pattern)
// -------------------------------------------------------------
const UNIVERSITY_TABS = [
  { id: "central", label: "Central", href: '/colleges/central-universities' },
  { id: "state", label: "State", href: '/colleges/state-universities' },
  // { id: "private", label: "Private / Deemed", href: '#' },
  { id: "open", label: "Open & Distance", href: '/colleges/open-distance-universities-ignou-nsou' },
];

// -------------------------------------------------------------
// Official reference links
// -------------------------------------------------------------
const OFFICIAL_LINKS = {
  ugcDirectory:
    "https://www.ugc.gov.in/universitydetails/university?type=ddmCMsxJZgXH2S%2Fm0uMOKQ%3D%3D",
  moeCentralUniversities: "https://www.education.gov.in/en/central-universities-0",
  ugcConsolidatedPdf:
    "https://www.ugc.gov.in/oldpdf/Consolidated%20list%20of%20Central%20Universities%20as%20on%2029.06.2017.pdf",
};

// -------------------------------------------------------------
// CENTRAL UNIVERSITIES LIST (56)
// Notes:
// - Names aligned with UGC consolidated list & common usage.
// - Websites are the official university domains (as used in MoE list / official sites).
// - You can tweak city spellings as per your portal style.
// -------------------------------------------------------------
// const CENTRAL_UNIVERSITIES = [
//   // Andhra Pradesh (3)
//   { no: 1, name: "Central University of Andhra Pradesh", city: "Anantapur", state: "Andhra Pradesh", website: "https://cuap.ac.in/" },
//   { no: 2, name: "Central Tribal University of Andhra Pradesh", city: "Vizianagaram", state: "Andhra Pradesh", website: "https://ctuap.ac.in/" },
//   { no: 3, name: "National Sanskrit University", city: "Tirupati", state: "Andhra Pradesh", website: "https://nsktu.ac.in/" },

//   // Arunachal Pradesh (1)
//   { no: 4, name: "Rajiv Gandhi University", city: "Doimukh (Itanagar)", state: "Arunachal Pradesh", website: "https://rgu.ac.in/" },

//   // Assam (2)
//   { no: 5, name: "Assam University", city: "Silchar", state: "Assam", website: "https://aus.ac.in/" },
//   { no: 6, name: "Tezpur University", city: "Tezpur", state: "Assam", website: "https://www.tezu.ernet.in/" },

//   // Bihar (4)
//   { no: 7, name: "Central University of South Bihar", city: "Gaya", state: "Bihar", website: "https://www.cusb.ac.in/" },
//   { no: 8, name: "Mahatma Gandhi Central University", city: "Motihari", state: "Bihar", website: "https://mgcub.ac.in/" },
//   { no: 9, name: "Nalanda University", city: "Rajgir", state: "Bihar", website: "https://nalandauniv.edu.in/" },
//   { no: 10, name: "Dr. Rajendra Prasad Central Agricultural University", city: "Pusa (Samastipur)", state: "Bihar", website: "https://www.rpcau.ac.in/" },

//   // Chhattisgarh (1)
//   { no: 11, name: "Guru Ghasidas Vishwavidyalaya", city: "Bilaspur", state: "Chhattisgarh", website: "https://www.ggu.ac.in/" },

//   // Delhi (7)
//   { no: 12, name: "University of Delhi", city: "New Delhi", state: "Delhi", website: "https://www.du.ac.in/" },
//   { no: 13, name: "Jawaharlal Nehru University", city: "New Delhi", state: "Delhi", website: "https://www.jnu.ac.in/" },
//   { no: 14, name: "Jamia Millia Islamia", city: "New Delhi", state: "Delhi", website: "https://www.jmi.ac.in/" },
//   { no: 15, name: "Indira Gandhi National Open University (IGNOU)", city: "New Delhi", state: "Delhi", website: "https://www.ignou.ac.in/" },
//   { no: 16, name: "South Asian University", city: "New Delhi", state: "Delhi", website: "https://www.sau.int/" },
//   { no: 17, name: "Central Sanskrit University", city: "New Delhi", state: "Delhi", website: "https://www.sanskrit.nic.in/" },
//   { no: 18, name: "Shri Lal Bahadur Shastri National Sanskrit University", city: "New Delhi", state: "Delhi", website: "https://www.slbsrsv.ac.in/" },

//   // Gujarat (2)
//   { no: 19, name: "Central University of Gujarat", city: "Gandhinagar", state: "Gujarat", website: "https://www.cug.ac.in/" },
//   { no: 20, name: "Gati Shakti Vishwavidyalaya", city: "Vadodara", state: "Gujarat", website: "https://gsv.ac.in/" },

//   // Haryana (1)
//   { no: 21, name: "Central University of Haryana", city: "Mahendragarh", state: "Haryana", website: "https://www.cuh.ac.in/" },

//   // Himachal Pradesh (1)
//   { no: 22, name: "Central University of Himachal Pradesh", city: "Dharamshala", state: "Himachal Pradesh", website: "https://www.cuhimachal.ac.in/" },

//   // Jammu & Kashmir (2)
//   { no: 23, name: "Central University of Jammu", city: "Samba", state: "Jammu & Kashmir", website: "https://www.cujammu.ac.in/" },
//   { no: 24, name: "Central University of Kashmir", city: "Ganderbal", state: "Jammu & Kashmir", website: "https://www.cukashmir.ac.in/" },

//   // Jharkhand (1)
//   { no: 25, name: "Central University of Jharkhand", city: "Ranchi", state: "Jharkhand", website: "https://www.cuj.ac.in/" },

//   // Karnataka (1)
//   { no: 26, name: "Central University of Karnataka", city: "Kalaburagi", state: "Karnataka", website: "https://www.cuk.ac.in/" },

//   // Kerala (1)
//   { no: 27, name: "Central University of Kerala", city: "Kasaragod", state: "Kerala", website: "https://www.cukerala.ac.in/" },

//   // Ladakh (1)
//   { no: 28, name: "Sindhu Central University", city: "Ladakh", state: "Ladakh", website: "https://sindhucu.ac.in/" },

//   // Madhya Pradesh (2)
//   { no: 29, name: "Dr. Harisingh Gour Vishwavidyalaya", city: "Sagar", state: "Madhya Pradesh", website: "https://www.dhsgsu.edu.in/" },
//   { no: 30, name: "Indira Gandhi National Tribal University", city: "Amarkantak", state: "Madhya Pradesh", website: "https://www.igntu.ac.in/" },

//   // Maharashtra (1)
//   { no: 31, name: "Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya", city: "Wardha", state: "Maharashtra", website: "https://www.mgahv.in/" },

//   // Manipur (3)
//   { no: 32, name: "Central Agricultural University", city: "Imphal", state: "Manipur", website: "https://www.cau.ac.in/" },
//   { no: 33, name: "Manipur University", city: "Imphal", state: "Manipur", website: "https://www.manipuruniv.ac.in/" },
//   { no: 34, name: "National Sports University", city: "Imphal (Khuman Lampak)", state: "Manipur", website: "https://www.nsu.ac.in/" },

//   // Meghalaya (1)
//   { no: 35, name: "North Eastern Hill University (NEHU)", city: "Shillong", state: "Meghalaya", website: "https://www.nehu.ac.in/" },

//   // Mizoram (1)
//   { no: 36, name: "Mizoram University", city: "Aizawl", state: "Mizoram", website: "https://www.mzu.edu.in/" },

//   // Nagaland (1)
//   { no: 37, name: "Nagaland University", city: "Lumami", state: "Nagaland", website: "https://nagalanduniversity.ac.in/" },

//   // Odisha (1)
//   { no: 38, name: "Central University of Odisha", city: "Koraput", state: "Odisha", website: "https://www.cuo.ac.in/" },

//   // Puducherry (1)
//   { no: 39, name: "Pondicherry University", city: "Puducherry", state: "Puducherry", website: "https://www.pondiuni.edu.in/" },

//   // Punjab (1)
//   { no: 40, name: "Central University of Punjab", city: "Bathinda", state: "Punjab", website: "https://www.cup.edu.in/" },

//   // Rajasthan (1)
//   { no: 41, name: "Central University of Rajasthan", city: "Ajmer", state: "Rajasthan", website: "https://www.curaj.ac.in/" },

//   // Sikkim (1)
//   { no: 42, name: "Sikkim University", city: "Gangtok", state: "Sikkim", website: "https://www.cus.ac.in/" },

//   // Tamil Nadu (2)
//   { no: 43, name: "Central University of Tamil Nadu", city: "Thiruvarur", state: "Tamil Nadu", website: "https://www.cutn.ac.in/" },
//   { no: 44, name: "Indian Maritime University", city: "Chennai", state: "Tamil Nadu", website: "https://www.imu.edu.in/" },

//   // Telangana (4)
//   { no: 45, name: "University of Hyderabad", city: "Hyderabad", state: "Telangana", website: "https://uohyd.ac.in/" },
//   { no: 46, name: "Maulana Azad National Urdu University", city: "Hyderabad", state: "Telangana", website: "https://manuu.edu.in/" },
//   { no: 47, name: "English and Foreign Languages University (EFLU)", city: "Hyderabad", state: "Telangana", website: "https://www.efluniversity.ac.in/" },
//   { no: 48, name: "Rajiv Gandhi National Institute of Youth Development (RGNIYD)", city: "Hyderabad", state: "Telangana", website: "https://www.rgniyd.gov.in/" },

//   // Tripura (1)
//   { no: 49, name: "Tripura University", city: "Agartala", state: "Tripura", website: "https://www.tripurauniv.ac.in/" },

//   // Uttar Pradesh (6)
//   { no: 50, name: "Aligarh Muslim University (AMU)", city: "Aligarh", state: "Uttar Pradesh", website: "https://www.amu.ac.in/" },
//   { no: 51, name: "Babasaheb Bhimrao Ambedkar University (BBAU)", city: "Lucknow", state: "Uttar Pradesh", website: "https://www.bbau.ac.in/" },
//   { no: 52, name: "Banaras Hindu University (BHU)", city: "Varanasi", state: "Uttar Pradesh", website: "https://www.bhu.ac.in/" },
//   { no: 53, name: "University of Allahabad", city: "Prayagraj", state: "Uttar Pradesh", website: "https://www.allduniv.ac.in/" },
//   { no: 54, name: "Rajiv Gandhi National Aviation University", city: "Amethi", state: "Uttar Pradesh", website: "https://www.rgnau.ac.in/" },
//   { no: 55, name: "Rani Lakshmi Bai Central Agricultural University", city: "Jhansi", state: "Uttar Pradesh", website: "https://www.rlbcau.ac.in/" },

//   // Uttarakhand (1)
//   { no: 56, name: "Hemwati Nandan Bahuguna Garhwal University", city: "Srinagar (Garhwal)", state: "Uttarakhand", website: "https://hnbgu.ac.in/" },

//   // West Bengal (1)
//   { no: 57, name: "Visva-Bharati", city: "Santiniketan", state: "West Bengal", website: "https://www.visvabharati.ac.in/" },
// ];

// NOTE: If you prefer exactly 56 items, tell me which one to remove based on your chosen “central universities count”.
// UGC & MoE references typically cite ~56 central universities (list updates over time). :contentReference[oaicite:3]{index=3}

// -------------------------------------------------------------
// PAGE
// -------------------------------------------------------------
export default function CentralUniversitiesPage({collegeContents}) {


   const CENTRAL_UNIVERSITIES = Array.isArray(collegeContents) ? collegeContents : [];

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Central Universities in India"
        breadcrumb="Central Universities"
      />

      <CollegeTabsBar tabs={UNIVERSITY_TABS} activeId="central" />

      {/* 1. ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <span>About Central Universities</span>
              </h2>

              <p className="sectionSub">
                Central Universities are public universities established by an Act of
                Parliament and governed under the relevant central legislation and
                rules. They operate as national-level institutions offering UG, PG and
                research programmes across disciplines.
              </p>

              <p className="sectionSub mb-0">
                For the most accurate and up-to-date status, students should always
                verify a university’s details on the official UGC directory and the
                Ministry of Education references.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <dl className="row small mb-0">
                  <dt className="col-5">Universities listed</dt>
                  <dd className="col-7 mb-2">{CENTRAL_UNIVERSITIES.length}</dd>

                  <dt className="col-5">Type</dt>
                  <dd className="col-7 mb-2">Central (Act of Parliament)</dd>

                  <dt className="col-5">Common admissions</dt>
                  <dd className="col-7 mb-2">
                    Merit / CUET / university-specific entrances (varies by course)
                  </dd>

                  <dt className="col-5">Official directory</dt>
                  <dd className="col-7 mb-2">
                    <a
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                      href={OFFICIAL_LINKS.ugcDirectory}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>UGC Universities Directory</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </dd>

                  <dt className="col-5">Reference list</dt>
                  <dd className="col-7 mb-0">
                    <a
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                      href={OFFICIAL_LINKS.moeCentralUniversities}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>MoE Central Universities</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROGRAMMES & ADMISSIONS – DARK BOXES ON LIGHT GRADIENT */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">Programmes & Admissions</h2>
            <p className="sectionSub mb-0">
              What you typically find across Central Universities (UG, PG, PhD and
              national-level admissions where applicable).
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* LEFT */}
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Academic pathways</span>
                </span>

                <p className="small mb-3">
                  Central Universities generally offer multi-disciplinary programmes
                  with research opportunities and national collaboration.
                </p>

                <ul className="nitDarkList mb-0">
                  <li><strong>UG degrees</strong> – BA/BSc/BCom/BBAs and many domain UG programmes.</li>
                  <li><strong>PG degrees</strong> – MA/MSc/MCom/MBA and specialized masters.</li>
                  <li><strong>PhD & Research</strong> – research degrees, labs, centres of excellence.</li>
                  <li><strong>Professional programmes</strong> – law/education/management/tech (varies).</li>
                </ul>
              </div>
            </div>

            {/* RIGHT – cards */}
            <div className="col-12 col-lg-7 d-flex">
              <div className="row g-3 w-100 align-content-stretch">
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">UG admissions</span>
                      <span className="nitExamLevel">UG</span>
                    </div>
                    <p className="nitExamTitle mb-1">Merit / CUET / entrance</p>
                    <p className="nitExamText mb-0">
                      Many UG programmes use CUET and/or merit + university rules (varies).
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">PG admissions</span>
                      <span className="nitExamLevel">PG</span>
                    </div>
                    <p className="nitExamTitle mb-1">PG entrance / merit</p>
                    <p className="nitExamText mb-0">
                      PG admissions may use CUET-PG, university tests and/or interviews.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Research</span>
                      <span className="nitExamLevel">PhD</span>
                    </div>
                    <p className="nitExamTitle mb-1">PhD / fellowship tracks</p>
                    <p className="nitExamText mb-0">
                      Selection usually combines test + interview + eligibility norms.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Verification</span>
                      <span className="nitExamLevel">Official</span>
                    </div>
                    <p className="nitExamTitle mb-1">Always confirm on UGC</p>
                    <p className="nitExamText mb-0">
                      Check UGC directory + official university website for latest updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIST – PREMIUM CATALOG GRID */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">Central Universities (Official Websites)</h2>
              <p className="sectionSub mb-0">
                Browse Central Universities across India with locations and official websites.
              </p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {CENTRAL_UNIVERSITIES.map((u) => (
              <div key={u.no} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="iitCard w-100 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="iitRank">#{u.id}</span>
                    <span className="iitCodeBadge">{u.city}</span>
                  </div>

                  <div className="mb-3">
                    <h3 className="h6 fw-semibold mb-1 text-dark d-flex align-items-center gap-2">
                      <University size={16} className="text-primary" />
                      <span>{u.name}</span>
                    </h3>

                    <p className="small text-muted mb-0 d-flex align-items-center gap-1">
                      <MapPin size={14} className="text-primary" />
                      <span>
                        {u.city}, {u.state}
                      </span>
                    </p>
                  </div>

                  <div className="iitDivider my-2" />

                  <div className="mt-auto d-flex justify-content-between align-items-center flex-wrap">
                    <span className="small text-muted d-block mb-1">Official website</span>

                    <a
                      href={u.website}
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                      title={u.website}
                    >
                      <span>{u.website}</span>
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
              This page helps you quickly discover Central Universities, their locations,
              and official websites for admissions, courses, fees and notifications.
            </p>
            <p className="mb-0 text-muted">
              Always cross-check the latest admission rules, eligibility and counselling
              updates on the university website and official UGC listings.
            </p>
          </div>
        </div>
      </section>

    </FrontendLayout>
    </>
  );
}
