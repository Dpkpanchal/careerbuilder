"use client";

import React from "react";
import { MapPin, ExternalLink, ArrowUpRight } from "lucide-react";

/**
 * Top / Reputed Colleges & Universities – Arts
 * Expanded WB + National
 * Includes UGC official reference links
 * Indicative (non-ranking, non-exhaustive)
 */

// const SECTIONS = [
//   {
//     key: "central",
//     title: "Central Universities & National Institutions",
//     description:
//       "Central universities and national institutions recognised by the Government of India, offering Arts, Humanities and Social Science programmes.",
//     items: [
//       { name: "University of Delhi", city: "New Delhi", state: "Delhi", website: "https://www.du.ac.in" },
//       { name: "Jawaharlal Nehru University", city: "New Delhi", state: "Delhi", website: "https://www.jnu.ac.in" },
//       { name: "Banaras Hindu University", city: "Varanasi", state: "Uttar Pradesh", website: "https://www.bhu.ac.in" },
//       { name: "Aligarh Muslim University", city: "Aligarh", state: "Uttar Pradesh", website: "https://www.amu.ac.in" },
//       { name: "Jamia Millia Islamia", city: "New Delhi", state: "Delhi", website: "https://www.jmi.ac.in" },
//       { name: "University of Hyderabad", city: "Hyderabad", state: "Telangana", website: "https://uohyd.ac.in" },
//       { name: "Central University of Rajasthan", city: "Ajmer", state: "Rajasthan", website: "https://curaj.ac.in" },
//     ],
//   },

//   {
//     key: "state-wb",
//     title: "State Universities – West Bengal",
//     description:
//       "Major state universities in West Bengal offering undergraduate and postgraduate Arts and Humanities programmes.",
//     items: [
//       { name: "University of Calcutta", city: "Kolkata", state: "West Bengal", website: "https://www.caluniv.ac.in" },
//       { name: "Jadavpur University", city: "Kolkata", state: "West Bengal", website: "https://www.jaduniv.edu.in" },
//       { name: "Presidency University", city: "Kolkata", state: "West Bengal", website: "https://www.presiuniv.ac.in" },
//       { name: "University of Kalyani", city: "Nadia", state: "West Bengal", website: "https://klyuniv.ac.in" },
//       { name: "Vidyasagar University", city: "Midnapore", state: "West Bengal", website: "https://vidyasagar.ac.in" },
//       { name: "University of Burdwan", city: "Purba Bardhaman", state: "West Bengal", website: "https://www.buruniv.ac.in" },
//       { name: "University of North Bengal", city: "Darjeeling", state: "West Bengal", website: "https://www.nbu.ac.in" },
//       { name: "Sidho-Kanho-Birsha University", city: "Purulia", state: "West Bengal", website: "https://skbu.ac.in" },
//     ],
//   },

//   {
//     key: "deemed",
//     title: "Deemed & Autonomous Universities",
//     description:
//       "UGC-recognised deemed and autonomous universities known for Arts, Social Sciences and Humanities.",
//     items: [
//       { name: "Tata Institute of Social Sciences (TISS)", city: "Mumbai", state: "Maharashtra", website: "https://www.tiss.edu" },
//       { name: "Azim Premji University", city: "Bengaluru", state: "Karnataka", website: "https://azimpremjiuniversity.edu.in" },
//       { name: "Christ University", city: "Bengaluru", state: "Karnataka", website: "https://www.christuniversity.in" },
//       { name: "Jamia Hamdard", city: "New Delhi", state: "Delhi", website: "https://jamiahamdard.edu" },
//     ],
//   },
// ];

function CollegeCard({ inst }) {
  return (
    <div className="iitCard w-100 d-flex flex-column">
      <div className="mb-3">
        <h3 className="h6 fw-semibold mb-1 text-dark">{inst.name}</h3>
        <p className="small text-muted mb-0 d-flex align-items-center gap-1">
          <MapPin size={14} className="text-primary" />
          <span>{inst.city}, {inst.state}</span>
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
        >
          <span>{inst.website}</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}

function UGCReferenceBlock() {
  return (
    <div className="rounded-4 border bg-light p-3 p-md-4">
      <h3 className="h6 fw-semibold mb-2">
        Official Reference – Recognised Universities
      </h3>
      <p className="small text-muted mb-3">
        The institutions listed above are indicative and representative.
        Students are advised to explore all UGC-recognised universities through
        official portals.
      </p>

      <ul className="small mb-0 ps-3">
        <li>
          <a href="https://www.ugc.gov.in/universitydetails/university?type=ddmCMsxJZgXH2S%2Fm0uMOKQ==&utm_source=chatgpt.com" target="_blank" rel="noreferrer">
            UGC – List of Central Universities <ArrowUpRight size={12} />
          </a>
        </li>
        <li>
          <a href="https://www.ugc.gov.in/universitydetails/university?type=MuOh4z0uqRaY2k8Ag10I0g==&utm_source=chatgpt.com" target="_blank" rel="noreferrer">
            UGC – List of State Universities <ArrowUpRight size={12} />
          </a>
        </li>
        <li>
          <a href="https://deemed.ugc.ac.in/?utm_source=chatgpt.com" target="_blank" rel="noreferrer">
            UGC – Deemed to be Universities <ArrowUpRight size={12} />
          </a>
        </li>
        <li>
          <a href="https://aishe.gov.in/" target="_blank" rel="noreferrer">
            AISHE – All India Survey on Higher Education <ArrowUpRight size={12} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function TopCollegesUniversitiesArtsTab({top_colleges_and_universities}) {
const SECTIONS = top_colleges_and_universities;

  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="mb-4 border-bottom pb-4">
          <h2 className="sectionHeading mb-1">
            Reputed Colleges & Universities (Arts)
          </h2>
          <p className="sectionSub mb-0">
            Representative universities and institutions offering Arts and
            Humanities programmes, aligned with career guidance pathways.
          </p>
        </div>

        <div className="d-flex flex-column gap-5">
          {SECTIONS.map((section) => (
            <div key={section.key} className="border-bottom pb-5">
              <h3 className="h5 mb-1">{section.title}</h3>
              <p className="text-muted mb-4">{section.description}</p>

              <div className="row g-3 g-md-4">
                {section.items.map((inst) => (
                  <div key={inst.name} className="col-12 col-md-6 col-lg-4 d-flex">
                    <CollegeCard inst={inst} />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* UGC Reference Block */}
          <UGCReferenceBlock />
        </div>
      </div>
    </section>
  );
}
