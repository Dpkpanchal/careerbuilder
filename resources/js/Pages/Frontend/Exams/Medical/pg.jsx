"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import ExamTabsBar from "../ExamTabsBar";
import { Layers3, Network, ExternalLink, Info } from "lucide-react";

// -------------------------------------------------------------
// Tabs (single focus, consistent with other pages)
// -------------------------------------------------------------
const EXAM_TABS = [
  { id: "medical-national", label: "Medical – National Level", href: '/exams/national-level-eg-neet-ug' },
  { id: "medical-state", label: "Medical – State Level", href: '/exams/state-level-medical-exams' },
  { id: "nursing-exams", label: "Nursing & Allied Exams", href: '/exams/university-level-medical-exams' },
  { id: "pg-medical", label: "PG Medical Exams (MD/MS)", href: '/exams/pg' },
  { id: "pharmacy-exams", label: "Pharmacy Entrance Exams", href: '/exams/pharmacy' },
];

// -------------------------------------------------------------
// PG Medical & Allied (MS/MD etc.) — based on your provided list
// Notes for accuracy:
// - "AIIMS PG" is now routed via AIIMS exams portal (INI-CET / INI-SS, as applicable).
// - "AIPGMEE" is a legacy name and has been replaced by NEET-PG.
// - "DNB CET" is represented by NBEMS entrance routes (incl. NEET-PG for MD/MS + DNB-PDCET for post-diploma DNB).
// -------------------------------------------------------------
const PG_MEDICAL_EXAMS = [
  {
    sl: 1,
    exam: "NEET PG",
    fullForm: "National Eligibility cum Entrance Test (Postgraduate)",
    purpose: "Admission to MD/MS/PG Diploma and related NBEMS programmes as notified",
    apply: "Online",
    activity: "As per NBEMS schedule",
    sources: [{ label: "NBEMS NEET-PG (official)", href: "https://natboard.edu.in/viewnbeexam?exam=neetpg" }],
    tag: "National",
  },
  {
    sl: 2,
    exam: "AIIMS PG (INI-CET / INI-SS)",
    fullForm: "AIIMS Entrance (Institute of National Importance Combined Entrance Test / INI Super Specialty)",
    purpose: "PG admission to AIIMS and other INIs (MD/MS/DM/MCh/MDS) as notified",
    apply: "Online",
    activity: "As per AIIMS exams key dates",
    sources: [{ label: "AIIMS Exams Portal (official)", href: "https://www.aiimsexams.ac.in/" }],
    tag: "National (INI)",
  },
  {
    sl: 3,
    exam: "JIPMER (via INI-CET)",
    fullForm: "JIPMER PG admission process (through INI-CET as notified)",
    purpose: "PG admission at JIPMER (MD/MS/MDS etc.) through INI-CET process (as notified)",
    apply: "Online",
    activity: "As per JIPMER notices / AIIMS INI schedule",
    sources: [{ label: "JIPMER Entrance/Admissions (official)", href: "https://jipmer.edu.in/announcement/entrance-examinations-admissions" }],
    tag: "National (INI)",
  },
  {
    sl: 4,
    exam: "PGIMER (INI-CET route / institute notices)",
    fullForm: "Postgraduate Institute of Medical Education & Research (PGIMER) – Admissions",
    purpose: "PG admission information and institute-specific notices (INI-CET linked as notified)",
    apply: "Online",
    activity: "As per PGIMER/INI schedule",
    sources: [{ label: "PGIMER Official Portal", href: "https://pgimer.edu.in/" }],
    tag: "National (INI)",
  },
  {
    sl: 5,
    exam: "DNB CET (NBEMS)",
    fullForm: "NBEMS Entrance Routes for DNB/DrNB as notified (incl. DNB-PDCET where applicable)",
    purpose: "DNB/DrNB admission routes as notified by NBEMS",
    apply: "Online",
    activity: "As per NBEMS schedule",
    sources: [
      { label: "NBEMS Notices / Entrance list", href: "https://natboard.edu.in/allnotice.php" },
      { label: "DNB-PDCET (official)", href: "https://natboard.edu.in/viewnbeexam?exam=pdcet" },
    ],
    tag: "National (NBEMS)",
  },
  {
    sl: 6,
    exam: "AIAPGET",
    fullForm: "All India AYUSH Post Graduate Entrance Test",
    purpose: "PG AYUSH admission (MD/MS Ayurveda/Unani/Siddha/Homeopathy) as notified",
    apply: "Online",
    activity: "As per NTA schedule",
    sources: [
      { label: "NTA Official (AIAPGET appears under NTA exams)", href: "https://nta.ac.in/" },
      { label: "AIAPGET Counselling (AACCC) (official)", href: "https://aaccc.gov.in/pg-counselling/" },
    ],
    tag: "National (AYUSH)",
  },
  {
    sl: 7,
    exam: "IPU CET (PG Medical – as notified)",
    fullForm: "Guru Gobind Singh Indraprastha University – Admission route for PG Medical (code-wise)",
    purpose: "PG medical admissions/notifications for GGSIPU (MD/MS/Diploma etc.) as notified",
    apply: "Online / Physical (as notified)",
    activity: "As per IPU admission notices",
    sources: [
      { label: "IPU Admission Services Platform (official)", href: "https://ipu.admissions.nic.in/" },
      { label: "IPU Admission Notices page (official)", href: "https://www.ipu.ac.in/admission2025main.php" },
    ],
    tag: "University",
  },
  {
    sl: 8,
    exam: "SAAT",
    fullForm: "Siksha ‘O’ Anusandhan Admission Test",
    purpose: "Entrance/admission test for programmes of SOA (as applicable; medical admissions may also follow NEET rules where mandated)",
    apply: "Online",
    activity: "As per SOA admission portal",
    sources: [
      { label: "SOA Admission Portal (official)", href: "https://www.admission.soa.ac.in/" },
      { label: "SAAT Page (official)", href: "https://www.admission.soa.ac.in/saat" },
    ],
    tag: "University",
    note:
      "Important: For MBBS/MD/MS in many institutions, admission is mandated through NEET/NEET-PG as per rules. Always verify on the institute’s official admission page.",
  },
  {
    sl: 9,
    exam: "IUET",
    fullForm: "Integral University Entrance Test",
    purpose: "Admission test for eligible programmes at Integral University (as notified)",
    apply: "Online",
    activity: "As per IUET schedule",
    sources: [{ label: "IUET Official (Integral University)", href: "https://www.iul.ac.in/iuet_syllabus.aspx" }],
    tag: "University",
  },
  {
    sl: 10,
    exam: "RUET",
    fullForm: "Rama University Entrance Test",
    purpose: "Admission test for programmes at Rama University (as notified)",
    apply: "Online",
    activity: "As per RUET schedule",
    sources: [{ label: "RUET Official (Rama University)", href: "https://www.ramauniversity.ac.in/admissions-ruet-4-118" }],
    tag: "University",
  },
  {
    sl: 11,
    exam: "AIPGMEE (Legacy)",
    fullForm: "All India Post Graduate Medical Entrance Examination",
    purpose: "Legacy name — replaced by NEET-PG",
    apply: "—",
    activity: "—",
    sources: [{ label: "Use NEET-PG official portal (NBEMS)", href: "https://natboard.edu.in/viewnbeexam?exam=neetpg" }],
    tag: "Legacy",
    note: "AIPGMEE is an older name; do not follow outdated notices. For PG medical admissions, follow NEET-PG/NBEMS.",
  },
];

// -------------------------------------------------------------
// Card
// -------------------------------------------------------------
function ExamCard({ item }) {
  return (
    <div className="iitCard w-100 d-flex flex-column h-100">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="iitRank small fw-semibold">
          {item.sl}. {item.exam}
        </span>
        <span className="iitCodeBadge">{item.tag}</span>
      </div>

      <h3 className="h6 fw-semibold mb-2 text-dark">{item.fullForm}</h3>

      <div className="small text-muted mb-2">
        <p className="mb-1">
          <strong>PURPOSE:</strong> {item.purpose}
        </p>
        <p className="mb-1">
          <strong>APPLY:</strong> {item.apply}
        </p>
        <p className="mb-0">
          <strong>ACTIVITY:</strong> {item.activity}
        </p>
      </div>

      {!!item.note && (
        <div className="sectionCard bg-light border small mt-2">
          <div className="d-flex align-items-start gap-2">
            <Info size={16} className="text-primary mt-1" />
            <div>{item.note}</div>
          </div>
        </div>
      )}

      <div className="mt-auto d-flex flex-column gap-2 pt-2">
        {item.sources?.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="iitWebsiteLink d-inline-flex align-items-center gap-1"
          >
            <span className="">{s.label}</span>
            <ExternalLink size={14} />
          </a>
        ))}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Page
// -------------------------------------------------------------
export default function PGMedicalExamsPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner title="PG Medical Entrance Exams (MD/MS)" breadcrumb="Medical & Allied → PG Medical" />
      <ExamTabsBar tabs={EXAM_TABS} activeId="pg-medical" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">PG Medical Entrance Exams</h2>
              <p className="sectionSub mb-0">
                For MD/MS and related postgraduate medical admissions, the key gateways are national-level exams (NBEMS / INI),
                plus institute/university admission routes for specific programmes. Always verify the current year bulletin and counselling notice.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>
                <dl className="row small mb-0">
                  <dt className="col-6">Exams listed</dt>
                  <dd className="col-6 mb-2">{PG_MEDICAL_EXAMS.length}</dd>

                  <dt className="col-6">Core MD/MS gateway</dt>
                  <dd className="col-6 mb-2">NEET-PG (NBEMS)</dd>

                  <dt className="col-6">INI institutes</dt>
                  <dd className="col-6 mb-0">AIIMS / JIPMER / PGIMER etc.</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEEP THIS SECTION */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">How PG Medical Exams Connect to Admissions</h2>
            <p className="sectionSub mb-0">
              The typical flow is: application → entrance exam → result/rank → counselling → document verification → admission.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Admission pathway</span>
                </span>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>Apply</strong> on official portal (NBEMS / AIIMS / University)
                  </li>
                  <li>
                    <strong>Appear</strong> for the exam as scheduled
                  </li>
                  <li>
                    <strong>Result</strong> → rank/merit list
                  </li>
                  <li>
                    <strong>Counselling</strong> / choice filling as notified
                  </li>
                  <li>
                    <strong>Admission</strong> after verification + fee submission
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>For West Bengal students:</strong> NEET-PG rank is the main driver for MD/MS admissions. Keep your internship completion,
                registration details, category certificate (if applicable), and counselling documents ready early for state + AIQ rounds.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">PG Medical Exams – Official Links</h2>

          <div className="row g-3 g-md-4">
            {PG_MEDICAL_EXAMS.map((item) => (
              <div key={item.exam} className="col-12 col-md-6 d-flex">
                <ExamCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
