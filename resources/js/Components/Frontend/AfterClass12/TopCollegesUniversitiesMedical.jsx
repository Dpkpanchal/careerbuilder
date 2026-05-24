"use client";

import React from "react";
import { MapPin, ExternalLink, ArrowUpRight } from "lucide-react";

/**
 * Reputed Colleges & Universities – Medical & Paramedical
 * Expanded WB + National
 * Indicative (non-ranking, non-exhaustive)
 * Includes official regulatory reference links
 */

const SECTIONS = [
  {
    key: "medical-national",
    title: "National Medical Institutions",
    description:
      "Institutes of National Importance and central institutions offering MBBS, postgraduate medical and allied health programmes.",
    items: [
      {
        name: "All India Institute of Medical Sciences (AIIMS), New Delhi",
        city: "New Delhi",
        state: "Delhi",
        website: "https://www.aiims.edu",
      },
      {
        name: "Postgraduate Institute of Medical Education & Research (PGIMER)",
        city: "Chandigarh",
        state: "Chandigarh",
        website: "https://pgimer.edu.in",
      },
      {
        name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
        city: "Puducherry",
        state: "Puducherry",
        website: "https://jipmer.edu.in",
      },
      {
        name: "Armed Forces Medical College (AFMC)",
        city: "Pune",
        state: "Maharashtra",
        website: "https://www.afmc.nic.in",
      },
    ],
  },

  {
    key: "state-wb-medical",
    title: "Medical Colleges – West Bengal",
    description:
      "Government medical colleges in West Bengal offering MBBS and postgraduate medical education.",
    items: [
      {
        name: "Medical College & Hospital, Kolkata",
        city: "Kolkata",
        state: "West Bengal",
        website: "https://www.mckolkata.org",
      },
      {
        name: "Nil Ratan Sircar Medical College (NRS)",
        city: "Kolkata",
        state: "West Bengal",
        website: "https://www.nrsmc.edu.in",
      },
      {
        name: "RG Kar Medical College & Hospital",
        city: "Kolkata",
        state: "West Bengal",
        website: "https://www.rgkarmedicalcollege.org",
      },
      {
        name: "Burdwan Medical College",
        city: "Purba Bardhaman",
        state: "West Bengal",
        website: "https://bmcwb.in",
      },
      {
        name: "North Bengal Medical College",
        city: "Darjeeling",
        state: "West Bengal",
        website: "https://www.nbmch.org",
      },
    ],
  },

  {
    key: "paramedical",
    title: "Paramedical & Allied Health Institutions",
    description:
      "Institutions offering nursing, physiotherapy, laboratory technology, radiology and other allied health programmes.",
    items: [
      {
        name: "College of Nursing, Medical College Kolkata",
        city: "Kolkata",
        state: "West Bengal",
        website: "https://www.mckolkata.org",
      },
      {
        name: "West Bengal University of Health Sciences (WBUHS)",
        city: "Kolkata",
        state: "West Bengal",
        website: "https://wbuhs.ac.in",
      },
      {
        name: "Christian Medical College (CMC)",
        city: "Vellore",
        state: "Tamil Nadu",
        website: "https://www.cmch-vellore.edu",
      },
      {
        name: "Manipal College of Health Professions",
        city: "Manipal",
        state: "Karnataka",
        website: "https://manipal.edu/mu/mchp.html",
      },
    ],
  },

  {
    key: "deemed",
    title: "Deemed & Autonomous Medical Universities",
    description:
      "UGC-recognised deemed universities offering medical and allied health science programmes.",
    items: [
      {
        name: "Sri Ramachandra Institute of Higher Education & Research",
        city: "Chennai",
        state: "Tamil Nadu",
        website: "https://www.sriramachandra.edu.in",
      },
      {
        name: "Kasturba Medical College (KMC), Manipal",
        city: "Manipal",
        state: "Karnataka",
        website: "https://manipal.edu/kmc-manipal.html",
      },
      {
        name: "Amrita Institute of Medical Sciences",
        city: "Kochi",
        state: "Kerala",
        website: "https://www.amrita.edu/school/medicine",
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

function RegulatoryReferenceBlock() {
  return (
    <div className="rounded-4 border bg-light p-3 p-md-4">
      <h3 className="h6 fw-semibold mb-2">
        Official Reference – Recognised Medical & Paramedical Institutions
      </h3>
      <p className="small text-muted mb-3">
        The institutions listed above are indicative and representative. Students
        are advised to verify recognition and approval through official regulatory
        bodies.
      </p>

      <ul className="small mb-0 ps-3">
        <li>
          <a href="https://www.nmc.org.in" target="_blank" rel="noreferrer">
            National Medical Commission (NMC) <ArrowUpRight size={12} />
          </a>
        </li>
        <li>
          <a href="https://www.ugc.gov.in" target="_blank" rel="noreferrer">
            University Grants Commission (UGC) <ArrowUpRight size={12} />
          </a>
        </li>
        <li>
          <a href="https://www.indiannursingcouncil.org" target="_blank" rel="noreferrer">
            Indian Nursing Council (INC) <ArrowUpRight size={12} />
          </a>
        </li>
        <li>
          <a href="https://www.aicte-india.org" target="_blank" rel="noreferrer">
            AICTE – Paramedical / Allied Health (where applicable){" "}
            <ArrowUpRight size={12} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function TopCollegesUniversitiesMedicalParamedicalTab() {
  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="mb-4 border-bottom pb-4">
          <h2 className="sectionHeading mb-1">
            Reputed Colleges & Universities (Medical & Paramedical)
          </h2>
          <p className="sectionSub mb-0">
            Representative medical and allied health institutions offering MBBS,
            nursing and paramedical programmes (indicative list; not a ranking).
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

          {/* Regulatory Reference Block */}
          <RegulatoryReferenceBlock />
        </div>
      </div>
    </section>
  );
}
