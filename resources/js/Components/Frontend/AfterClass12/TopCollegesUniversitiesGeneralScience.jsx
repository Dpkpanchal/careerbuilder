"use client";

import React from "react";
import { MapPin, ExternalLink, ArrowUpRight } from "lucide-react";

/**
 * Reputed Colleges & Universities – Science (General)
 * Expanded WB + National
 * Includes UGC official reference links
 * Indicative (non-ranking, non-exhaustive)
 */

const SECTIONS = [
  {
    key: "central",
    title: "Central Universities & National Institutions",
    description:
      "Central universities and national institutions offering undergraduate and postgraduate programmes in pure and applied sciences.",
    items: [
      {
        name: "University of Delhi (DU)",
        city: "New Delhi",
        state: "Delhi",
        website: "https://www.du.ac.in",
      },
      {
        name: "Jawaharlal Nehru University (JNU)",
        city: "New Delhi",
        state: "Delhi",
        website: "https://www.jnu.ac.in",
      },
      {
        name: "Banaras Hindu University (BHU)",
        city: "Varanasi",
        state: "Uttar Pradesh",
        website: "https://www.bhu.ac.in",
      },
      {
        name: "University of Hyderabad",
        city: "Hyderabad",
        state: "Telangana",
        website: "https://uohyd.ac.in",
      },
      {
        name: "Aligarh Muslim University (AMU)",
        city: "Aligarh",
        state: "Uttar Pradesh",
        website: "https://www.amu.ac.in",
      },
      {
        name: "Jamia Millia Islamia",
        city: "New Delhi",
        state: "Delhi",
        website: "https://www.jmi.ac.in",
      },
    ],
  },

  {
    key: "state-wb",
    title: "State Universities – West Bengal",
    description:
      "Major state universities in West Bengal offering B.Sc and M.Sc programmes across core science disciplines.",
    items: [
      {
        name: "University of Calcutta",
        city: "Kolkata",
        state: "West Bengal",
        website: "https://www.caluniv.ac.in",
      },
      {
        name: "Jadavpur University",
        city: "Kolkata",
        state: "West Bengal",
        website: "https://www.jaduniv.edu.in",
      },
      {
        name: "Presidency University",
        city: "Kolkata",
        state: "West Bengal",
        website: "https://www.presiuniv.ac.in",
      },
      {
        name: "University of Kalyani",
        city: "Nadia",
        state: "West Bengal",
        website: "https://klyuniv.ac.in",
      },
      {
        name: "Vidyasagar University",
        city: "Midnapore",
        state: "West Bengal",
        website: "https://vidyasagar.ac.in",
      },
      {
        name: "University of Burdwan",
        city: "Purba Bardhaman",
        state: "West Bengal",
        website: "https://www.buruniv.ac.in",
      },
      {
        name: "University of North Bengal",
        city: "Darjeeling",
        state: "West Bengal",
        website: "https://www.nbu.ac.in",
      },
      {
        name: "Sidho-Kanho-Birsha University",
        city: "Purulia",
        state: "West Bengal",
        website: "https://skbu.ac.in",
      },
    ],
  },

  {
    key: "institutes",
    title: "Institutes of Science & Research",
    description:
      "Institutes known for scientific research, interdisciplinary science education and advanced laboratories.",
    items: [
      {
        name: "Indian Institute of Science (IISc)",
        city: "Bengaluru",
        state: "Karnataka",
        website: "https://iisc.ac.in",
      },
      {
        name: "Indian Institutes of Science Education and Research (IISERs)",
        city: "Multiple Locations",
        state: "India",
        website: "https://www.iiseradmission.in",
      },
      {
        name: "Homi Bhabha National Institute (HBNI)",
        city: "Mumbai",
        state: "Maharashtra",
        website: "https://www.hbni.ac.in",
      },
      {
        name: "National Institute of Science Education and Research (NISER)",
        city: "Bhubaneswar",
        state: "Odisha",
        website: "https://www.niser.ac.in",
      },
    ],
  },

  {
    key: "deemed",
    title: "Deemed & Autonomous Universities",
    description:
      "UGC-recognised deemed and autonomous universities offering science and interdisciplinary programmes.",
    items: [
      {
        name: "BITS Pilani",
        city: "Pilani",
        state: "Rajasthan",
        website: "https://www.bits-pilani.ac.in",
      },
      {
        name: "Christ University",
        city: "Bengaluru",
        state: "Karnataka",
        website: "https://www.christuniversity.in",
      },
      {
        name: "Amity University",
        city: "Noida",
        state: "Uttar Pradesh",
        website: "https://www.amity.edu",
      },
      {
        name: "Vellore Institute of Technology (VIT)",
        city: "Vellore",
        state: "Tamil Nadu",
        website: "https://vit.ac.in",
      },
    ],
  },
];

function CollegeCard({ inst }) {
  return (
    <div className="iitCard w-100 d-flex flex-column">
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

      <div className="mt-auto d-flex justify-content-between align-items-center flex-wrap">
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
        The institutions listed above are indicative and representative. Students
        are advised to explore all UGC-recognised universities through official portals.
      </p>

      <ul className="small mb-0 ps-3">
        <li>
          <a
            href="https://www.ugc.gov.in/universitydetails/university?type=ddmCMsxJZgXH2S%2Fm0uMOKQ%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            UGC – List of Central Universities <ArrowUpRight size={12} />
          </a>
        </li>
        <li>
          <a
            href="https://www.ugc.gov.in/universitydetails/university?type=MuOh4z0uqRaY2k8Ag10I0g%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            UGC – List of State Universities <ArrowUpRight size={12} />
          </a>
        </li>
        <li>
          <a href="https://deemed.ugc.ac.in/" target="_blank" rel="noreferrer">
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

export default function TopCollegesUniversitiesScienceGeneralTab() {
  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="mb-4 border-bottom pb-4">
          <h2 className="sectionHeading mb-1">
            Reputed Colleges & Universities (Science – General)
          </h2>
          <p className="sectionSub mb-0">
            Representative universities and institutions offering B.Sc and M.Sc
            programmes in core science disciplines (indicative list; not a ranking).
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
