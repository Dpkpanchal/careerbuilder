"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import ExamTabsBar from "../ExamTabsBar";
import { Layers3, Network, ExternalLink, AlertTriangle, Info } from "lucide-react";

// -------------------------------------------------------------
// Tabs (Law • Management • Finance bucket)
// -------------------------------------------------------------
const EXAM_TABS = [
  { id: "law", label: "Law", href: '/exams/law/law' },
  { id: "management", label: "Management", href: '/exams/law/management' },
  { id: "finance-accounts", label: "Finance & Accounts", href: '/exams/law/finance-accounts' },
];

const LAW_EXAMS = [
  {
    sl: 1,
    exam: "CLAT",
    fullForm: "Common Law Admission Test",
    purpose: "UG/PG law admissions in participating National Law Universities (NLUs)",
    activity: "February (as per your Career Book; verify current cycle on official portal)",
    sourceLinks: [{ label: "Consortium of NLUs (Official)", href: "https://consortiumofnlus.ac.in/" }],
    tag: "National",
  },
  {
    sl: 2,
    exam: "AILET",
    fullForm: "All India Law Entrance Test (NLU Delhi)",
    purpose: "UG/PG/PhD admissions at National Law University Delhi",
    activity: "February (Career Book; verify current cycle)",
    sourceLinks: [{ label: "NLU Delhi (Official)", href: "https://nludelhi.ac.in/" }],
    tag: "National",
  },

  // LSAT-India has changed over years; keep as “status check required”
  {
    sl: 3,
    exam: "LSAT (India)",
    fullForm: "Law School Admission Test – India",
    purpose: "Used by some private law schools (status may change by year)",
    activity: "March (Career Book; verify current status before planning)",
    sourceLinks: [{ label: "LSAC (Reference)", href: "https://www.lsac.org/" }],
    tag: "Status Check",
    note:
      "Important: LSAT-India availability can change. Always verify if it is being conducted for the current admission cycle before applying.",
  },

  {
    sl: 4,
    exam: "UL-SAT (UPES)",
    fullForm: "UPES Legal Studies Aptitude Test",
    purpose: "UG law admissions at UPES (also accepts other pathways as notified)",
    activity: "March (Career Book; verify current cycle)",
    sourceLinks: [{ label: "UPES ULSAT (Official)", href: "https://www.upes.ac.in/admissions/admission-alerts/ulsat" }],
    tag: "University",
  },

  {
    sl: 5,
    exam: "SET / SLAT (Symbiosis)",
    fullForm: "Symbiosis Law Admission Test (SLAT) / Symbiosis Entrance ecosystem",
    purpose: "UG law admissions for Symbiosis Law Schools",
    activity: "March (Career Book; verify current cycle)",
    sourceLinks: [{ label: "SLAT (Official)", href: "https://www.slat-test.org/" }],
    tag: "University",
  },

  {
    sl: 6,
    exam: "IPU CET (Law)",
    fullForm: "Guru Gobind Singh Indraprastha University – Common Entrance Test",
    purpose: "Law admissions (and other programmes) as notified by GGSIPU",
    activity: "March (Career Book; verify current cycle)",
    sourceLinks: [{ label: "GGSIPU (Official)", href: "https://ipu.ac.in/" }],
    tag: "University",
  },

  {
    sl: 7,
    exam: "MH-CET (Law)",
    fullForm: "Maharashtra Common Entrance Test – Law",
    purpose: "5-year / 3-year LLB admissions in Maharashtra through CET Cell processes",
    activity: "March (Career Book; verify current cycle)",
    sourceLinks: [{ label: "CET Cell Maharashtra (Official)", href: "https://cetcell.mahacet.org/" }],
    tag: "State",
  },

  {
    sl: 8,
    exam: "Christ University ET (Law)",
    fullForm: "Christ University – Online Entrance Test (Law)",
    purpose: "UG/PG law admissions at Christ University (as notified)",
    activity: "March (Career Book; verify dates on admissions page)",
    sourceLinks: [{ label: "Christ University (Official)", href: "https://christuniversity.in/" }],
    tag: "University",
  },

  {
    sl: 9,
    exam: "RULET",
    fullForm: "Rajasthan University Law Entrance Test",
    purpose: "BA LLB / BCom LLB admissions (as notified by University of Rajasthan)",
    activity: "August (Career Book; verify current cycle)",
    sourceLinks: [{ label: "University of Rajasthan (Official)", href: "https://www.uniraj.ac.in/" }],
    tag: "University",
  },

  {
    sl: 10,
    exam: "APLAWCET",
    fullForm: "Andhra Pradesh Law Common Entrance Test",
    purpose: "LLB admissions in Andhra Pradesh (as notified by APSCHE)",
    activity: "March (Career Book; verify current cycle)",
    sourceLinks: [{ label: "AP LAWCET (Official)", href: "https://cets.apsche.ap.gov.in/LAWCET/" }],
    tag: "State",
  },

  {
    sl: 11,
    exam: "ILSAT",
    fullForm: "ICFAI Law School Admission Test",
    purpose: "UG/PG law admissions at ICFAI Law School (as notified)",
    activity: "May (Career Book; verify current cycle)",
    sourceLinks: [
      { label: "ICFAI Law – Admissions (Official)", href: "https://www.ifheindia.org/icfai-law-school-hyderabad" },
    ],
    tag: "University",
  },

  {
    sl: 12,
    exam: "KIIT Law Entrance",
    fullForm: "K-LAT (KIIT School of Law Entrance) / KIIT pathways as notified",
    purpose: "UG law admissions at KIIT School of Law",
    activity: "November (Career Book; verify current cycle)",
    sourceLinks: [{ label: "KIIT Law K-LAT (Official)", href: "https://law.kiit.ac.in/k-lat/" }],
    tag: "University",
  },

  {
    sl: 13,
    exam: "AMU Law Entrance",
    fullForm: "Aligarh Muslim University – Law Entrance (as notified)",
    purpose: "Law admissions at AMU (as per admission notifications)",
    activity: "May (Career Book; verify current cycle)",
    sourceLinks: [{ label: "AMU (Official)", href: "https://www.amu.ac.in/" }],
    tag: "University",
  },

  {
    sl: 14,
    exam: "ILICAT / ILI Admission Test",
    fullForm: "Indian Law Institute – All India Admission Test (as notified)",
    purpose: "Admissions at Indian Law Institute (programmes as notified)",
    activity: "May (Career Book; verify current cycle)",
    sourceLinks: [
      { label: "Indian Law Institute (Official)", href: "https://ili.ac.in/" },
      { label: "ILI Admissions Portal (Official)", href: "https://iliadm.samarth.edu.in/" },
    ],
    tag: "National / Institute",
  },

  {
    sl: 15,
    exam: "KLEE",
    fullForm: "Kerala Law Entrance Examination",
    purpose: "Law admissions in Kerala via CEE Kerala processes",
    activity: "June end (Career Book; verify current cycle)",
    sourceLinks: [{ label: "CEE Kerala (Official)", href: "https://cee.kerala.gov.in/main.php" }],
    tag: "State",
  },

  // GNDU items in your book — but official domains are currently unreliable (avoid linking unsafe pages)
  {
    sl: 16,
    exam: "GNDU CET (Law)",
    fullForm: "Guru Nanak Dev University – Common Entrance Test (as notified)",
    purpose: "Admissions as notified by GNDU / state counselling (verify current policy)",
    activity: "March (Career Book; verify via trusted official notices)",
    sourceLinks: [],
    tag: "Verify",
    note:
      "We are not linking GNDU portals here because multiple GNDU-looking domains currently appear unsafe/spammy. Use only verified GNDU/UGC notices before applying.",
  },

  {
    sl: 17,
    exam: "ACLAT",
    fullForm: "Alliance Common Law Admission Test (Alliance University)",
    purpose: "UG/PG law admissions at Alliance University (as notified)",
    activity: "April (Career Book; verify current cycle)",
    sourceLinks: [
      { label: "Alliance University (Official)", href: "https://www.alliance.edu.in/" },
      { label: "Alliance Apply (Official)", href: "https://apply.alliance.edu.in/" },
    ],
    tag: "University",
  },

  {
    sl: 18,
    exam: "University of Calcutta – B.A. LL.B Entrance",
    fullForm: "B.A., LL.B Admission Entrance Test (as notified)",
    purpose: "5-year B.A. LL.B admissions under University of Calcutta process",
    activity: "May (Career Book; verify current cycle)",
    sourceLinks: [
      { label: "CU Admission / Examination Notices (Official)", href: "https://www.caluniv.ac.in/admission/admission.html" },
      { label: "CU B.A. LL.B Portal (Official)", href: "https://www.caluniv-ucsta.net/llb/" },
    ],
    tag: "WB / University",
  },
];

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
        <p className="mb-0">
          <strong>CALENDAR:</strong> {item.activity}
        </p>
      </div>

      {!!item.note && (
        <div className="sectionCard bg-light border small mt-2">
          <div className="d-flex align-items-start gap-2">
            <AlertTriangle size={18} className="text-warning mt-1 flex-shrink-0" />
            <div>{item.note}</div>
          </div>
        </div>
      )}

      <div className="mt-auto d-flex flex-column gap-2 pt-3">
        {item.sourceLinks?.length ? (
          item.sourceLinks.map((s) => (
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
          ))
        ) : (
          <div className="small text-muted">
            <Info size={16} className="me-1 flex-shrink-0" />
            Official link not listed (verify via trusted notices).
          </div>
        )}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
export default function LawEntranceExamsPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner title="Law Entrance Exams" breadcrumb="Law • Management • Finance → Law" />

      <ExamTabsBar tabs={EXAM_TABS} activeId="law" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">Law Entrance Exams After Class 12</h2>
              <p className="sectionSub mb-0">
                This list follows your Career Book coverage: national (CLAT/AILET), key university tests, and state
                law exams. For West Bengal students, CLAT + University of Calcutta routes are especially relevant.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <dl className="row small mb-0">
                  <dt className="col-6">Exams covered</dt>
                  <dd className="col-6 mb-2">{LAW_EXAMS.length}</dd>

                  <dt className="col-6">Best national gateways</dt>
                  <dd className="col-6 mb-2">CLAT, AILET</dd>

                  <dt className="col-6">West Bengal focus</dt>
                  <dd className="col-6 mb-2">WBNUJS via CLAT + CU B.A. LL.B route</dd>

                  <dt className="col-6">Safety rule</dt>
                  <dd className="col-6 mb-0">Use only official portals</dd>
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
            <h2 className="sectionHeading mb-2">How Law Exams Connect to Admissions</h2>
            <p className="sectionSub mb-0">
              Typical flow: exam/score → counselling or institute application → document verification → seat allotment.
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
                    <strong>CLAT</strong> → NLUs counselling (choose preferences)
                  </li>
                  <li>
                    <strong>AILET</strong> → NLU Delhi admissions process
                  </li>
                  <li>
                    <strong>State exams</strong> (MH-CET/APLAWCET/KLEE) → state counselling / CAP
                  </li>
                  <li>
                    <strong>University tests</strong> (SLAT/ULSAT/RULET etc.) → institute application + interview (if any)
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>For West Bengal minority students:</strong> shortlist 2–3 routes (example: CLAT + CU B.A. LL.B +
                1 private university test). Keep documents ready: marksheets, ID, category/income certificates (if
                applicable), and domicile rules where required.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">Law Entrance Exams – Official Links</h2>

          <div className="row g-3 g-md-4">
            {LAW_EXAMS.map((item) => (
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
