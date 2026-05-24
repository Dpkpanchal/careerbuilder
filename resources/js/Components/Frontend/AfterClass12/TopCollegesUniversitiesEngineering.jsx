"use client";

import React from "react";
import { MapPin, ExternalLink, ArrowUpRight } from "lucide-react";

/**
 * Reputed Colleges & Universities – Engineering
 * Expanded WB + National
 * Includes UGC official reference links
 * Indicative (non-ranking, non-exhaustive)
 */

const SECTIONS = [
  {
    key: "iit-nit",
    title: "IITs, NITs & Institutes of National Importance",
    description:
      "Institutes of National Importance established by Act of Parliament, offering undergraduate and postgraduate engineering programmes.",
    items: [
      {
        name: "Indian Institute of Technology Kharagpur (IIT KGP)",
        city: "Kharagpur",
        state: "West Bengal",
        website: "https://www.iitkgp.ac.in",
      },
      {
        name: "Indian Institute of Technology Delhi (IIT Delhi)",
        city: "New Delhi",
        state: "Delhi",
        website: "https://home.iitd.ac.in",
      },
      {
        name: "Indian Institute of Technology Bombay (IIT Bombay)",
        city: "Mumbai",
        state: "Maharashtra",
        website: "https://www.iitb.ac.in",
      },
      {
        name: "National Institute of Technology Durgapur (NIT DGP)",
        city: "Durgapur",
        state: "West Bengal",
        website: "https://nitdgp.ac.in",
      },
      {
        name: "National Institute of Technology Trichy (NIT Trichy)",
        city: "Tiruchirappalli",
        state: "Tamil Nadu",
        website: "https://www.nitt.edu",
      },
    ],
  },

  {
    key: "central",
    title: "Central Universities & Technical Universities",
    description:
      "Central and technical universities offering B.Tech / M.Tech programmes across engineering disciplines.",
    items: [
      {
        name: "Jamia Millia Islamia",
        city: "New Delhi",
        state: "Delhi",
        website: "https://www.jmi.ac.in",
      },
      {
        name: "Aligarh Muslim University (AMU)",
        city: "Aligarh",
        state: "Uttar Pradesh",
        website: "https://www.amu.ac.in",
      },
      {
        name: "Delhi Technological University (DTU)",
        city: "New Delhi",
        state: "Delhi",
        website: "https://dtu.ac.in",
      },
      {
        name: "Jawaharlal Nehru University (Engineering Schools)",
        city: "New Delhi",
        state: "Delhi",
        website: "https://www.jnu.ac.in",
      },
    ],
  },

  {
    key: "state-wb",
    title: "State Universities – West Bengal",
    description:
      "Major state universities and government engineering universities in West Bengal.",
    items: [
      {
        name: "Jadavpur University",
        city: "Kolkata",
        state: "West Bengal",
        website: "https://www.jaduniv.edu.in",
      },
      {
        name: "University of Calcutta (Engineering & Technology)",
        city: "Kolkata",
        state: "West Bengal",
        website: "https://www.caluniv.ac.in",
      },
      {
        name: "Maulana Abul Kalam Azad University of Technology (MAKAUT)",
        city: "Haringhata",
        state: "West Bengal",
        website: "https://makautwb.ac.in",
      },
      {
        name: "Kalyani Government Engineering College",
        city: "Kalyani",
        state: "West Bengal",
        website: "https://kgec.edu.in",
      },
    ],
  },

  {
    key: "deemed-private",
    title: "Deemed & Autonomous Engineering Universities",
    description:
      "UGC-recognised deemed and autonomous universities offering engineering and technology programmes.",
    items: [
      {
        name: "Birla Institute of Technology & Science (BITS Pilani)",
        city: "Pilani",
        state: "Rajasthan",
        website: "https://www.bits-pilani.ac.in",
      },
      {
        name: "Vellore Institute of Technology (VIT)",
        city: "Vellore",
        state: "Tamil Nadu",
        website: "https://vit.ac.in",
      },
      {
        name: "SRM Institute of Science and Technology",
        city: "Chennai",
        state: "Tamil Nadu",
        website: "https://www.srmist.edu.in",
      },
      {
        name: "Amity University",
        city: "Noida",
        state: "Uttar Pradesh",
        website: "https://www.amity.edu",
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
        are advised to explore all UGC-recognised universities and AICTE-approved
        engineering institutions through official portals.
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
          <a href="https://www.aicte-india.org/" target="_blank" rel="noreferrer">
            AICTE – Approved Engineering Institutions <ArrowUpRight size={12} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function TopCollegesUniversitiesEngineeringTab() {
  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="mb-4 border-bottom pb-4">
          <h2 className="sectionHeading mb-1">
            Reputed Colleges & Universities (Engineering)
          </h2>
          <p className="sectionSub mb-0">
            Representative institutions offering engineering and technology
            programmes (indicative list; not a ranking).
          </p>
        </div>

        <div className="d-flex flex-column gap-5">
          {SECTIONS.map((section) => (
            <div key={section.key} className="border-bottom pb-5">
              <h3 className="h5 mb-1">{section.title}</h3>
              <p className="text-muted mb-4">{section.description}</p>

              <div className="row g-3 g-md-4">
                {section.items.map((inst) => (
                  <div
                    key={inst.name}
                    className="col-12 col-md-6 col-lg-4 d-flex"
                  >
                    <CollegeCard inst={inst} />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* UGC / AICTE Reference Block */}
          <UGCReferenceBlock />
        </div>
      </div>
    </section>
  );
}
