import React, { useState } from "react";
import { Link, usePage } from '@inertiajs/react';
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import ExamTabsBar from "../ExamTabsBar";
import { GraduationCap, Layers3, Network, ExternalLink } from "lucide-react";

// -------------------------------------------------------------
// Helper: URL normaliser
// -------------------------------------------------------------
function getWebsiteHref(raw) {
  if (!raw) return "#";
  const trimmed = raw.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed.replace(/^\/\//, "")}`;
}

function getPreview(text, limit = 150) {
  if (!text) return "";
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= limit) return clean;
  return clean.slice(0, limit) + "…";
}

// -------------------------------------------------------------
// Tabs for Engineering Exams
// -------------------------------------------------------------
const EXAM_TABS = [
    { id: "engineering-national", label: "Engineering – National Level", href: '/exams/national-level-eg-jee-main-jee-advanced' },
    { id: "engineering-state", label: "Engineering – State Level", href: '/exams/state-level-wbjee-etc' },
    { id: "engineering-university", label: "Engineering – University Level", href: '/exams/university-level-exams' },
    { id: "mca-exams", label: "MCA Entrance Exams", href: '/exams/mca' },
    { id: "architecture-exams", label: "Architecture Entrance Exams", href: '/exams/architecture' },
];

// -------------------------------------------------------------
// STATE LEVEL ENGINEERING ENTRANCE
// Text taken from “STATE LEVEL ENGINEERING ENTRANCE” block
// on pages 59–61 (no exams added/removed)
// -------------------------------------------------------------
const STATE_ENGINEERING_EXAMS = [
  {
    id: "mht-cet",
    tag: "MHT CET",
    level: "UG",
    name: "Maharashtra’s Common Entrance Test (MHT CET)",
    purpose: "4 Year B.Tech/B Pharm /B Arch Courses",
    eligibility:
      "Indian National, Class 12 or equivalent with 50% marks. For SC/ST/OBC 45%.",
    apply: "Online",
    activity: "January to March",
    source: "https://mhtcet2018.dtemaharashtra.gov.in/",
  },
  {
    id: "ap-eamcet",
    tag: "AP EAMCET",
    level: "UG",
    name: "Andhra Pradesh Engineering, Agriculture and Medicine Common Entrance Test (AP EAMCET)",
    purpose: "B.Tech Engineering, Agriculture, Pharmacy.",
    eligibility: "10+2.",
    apply: "Online",
    activity: "February",
    source: "www.sche.ap.gov.in/eamcet",
  },
  {
    id: "comedk",
    tag: "COMED-K",
    level: "UG",
    name: "Consortium of Medical, Engineering and Dental Colleges of Karnataka’s (COMED-K)",
    purpose: "",
    eligibility:
      "• 10+2 with Physics, Chemistry and Mathematics with English as a compulsory subject. • The General Merit candidates should have passed with a minimum aggregate of 45% marks (40% in respect of SC, ST and OBC candidates of Karnataka State).",
    apply: "Online",
    activity: "January",
    source: "www.comedk.org",
  },
  {
    id: "upsee",
    tag: "UPSEE",
    level: "UG",
    name: "Uttar Pradesh State Entrance Exam (UPSEE)",
    purpose:
      "B. Tech./ B.Arch./B.Des./ B.Pharm./ BHMCT /BFAD /BFA /MBA /MBA (Integrated)/MCA/MCA (Integrated) and 2nd Year of B. Tech./B.Pharm./MCA (Lateral Entry).",
    eligibility:
      "45% in Physics, Mathematics and Chemistry or Computer Sc or Biology. 40% for SC/ST.",
    apply: "Online",
    activity: "January",
    source: "http://www.upsee.nic.in/",
  },
  {
    id: "kar-pgcet",
    tag: "Karnataka PGCET",
    level: "PG",
    name: "Karnataka Post Graduate Common Entrance Test (Karnataka PGCET)",
    purpose: "MBA, MCA, ME / M.Tech / M.Arch.",
    eligibility: "BE/BTECH.",
    apply: "Online",
    activity: "May",
    source: "http://www.kea.kar.nic.in/pgcet_2018.htm",
  },
  {
    id: "wbjee",
    tag: "WBJEE",
    level: "UG",
    name: "West Bengal Joint Entrance Examinations Board (WB JEE)",
    purpose: "B.Tech / B.Arch / Bpharm Courses.",
    eligibility: "45% in 10+2. SC/ST 40%.",
    apply: "Online",
    activity: "December",
    source: "wbjeeb.nic.in",
  },
  {
    id: "bcece",
    tag: "BCECE",
    level: "UG",
    name: "Bihar Combined Entrance Competitive Examination (BCECE)",
    purpose: "BE/BTECH.",
    eligibility: "10+2.",
    apply: "Online",
    activity: "",
    source: "http://bceceboard.bihar.gov.in/",
  },
  {
    id: "ojee",
    tag: "OJEE",
    level: "UG",
    name: "Orissa Joint Entrance Examination (Orissa JEE)",
    purpose: "BTech/BPlan, BPharma.",
    eligibility: "45% in 10+2, 40% for SC/ST.",
    apply: "Online",
    activity: "March",
    source: "www.ojee.nic.in",
  },
  {
    id: "kcet",
    tag: "Karnataka CET",
    level: "UG",
    name: "Karnataka Common Entrance Test (Karnataka CET)",
    purpose:
      "Engineering / Technology courses (B.E. / B.Tech) B.Sc. (Hons) Agriculture, B.Sc. (Hons) Sericulture, B.Sc. (Hons) Horticulture, B.Sc. (Hons) Forestry, B.Sc. Agri Bio Tech, B.H.Sc. (Home Science), B.Tech (Agri. Engg), B.Tech (Food Technology), B.Tech (Dairy Tech), B.F.Sc (Fisheries), B.Tech (Food Science & Tech), B.Sc. (Hons) Agri. Marketing & Bachelor of Veterinary Science and Animal Husbandry (B.V. Sc. & A.H.), B-Pharma.",
    eligibility:
      "Passed in 2nd PUC / 12th Std / Equivalent Exam with English as one of the Languages and obtained a minimum of 45% marks in aggregate in Physics and Mathematics along with Chemistry / Bio-Technology / Biology / Electronics / Computer. (40% for SC, ST, Cat-1, 2A, 2B, 3A and 3B category candidates).",
    apply: "Online",
    activity: "February",
    source: "http://kea.kar.nic.in/",
  },
  {
    id: "tripura-jee",
    tag: "Tripura JEE",
    level: "UG",
    name: "Tripura Joint Entrance Examination (Tripura JEE)",
    purpose:
      "Engineering, Technological, Agricultural, Veterinary, Fisheries and others.",
    eligibility: "Permanent resident of Tripura, 10+2 pass.",
    apply: "Offline (downloading form).",
    activity: "January",
    source: "http://tbjee.nic.in/",
  },
  {
    id: "iisc-ug",
    tag: "IISc UG",
    level: "UG",
    name: "IISC-Bangalore",
    purpose: "BSc (Research).",
    eligibility: "10+2.",
    apply: "Online.",
    activity: "February.",
    source: "http://www.iisc.ac.in/ug",
  },
  {
    id: "jk-bpee-cet",
    tag: "JK-BPEE CET",
    level: "UG",
    name: "JK-BPEE CET",
    purpose: "BE/B.Tech.",
    eligibility: "50% in 10+2.",
    apply: "Online.",
    activity: "February.",
    source: "Jakbopee.org /jkbopee.gov.in",
  },
  {
    id: "gujarat-cet",
    tag: "Gujarat-CET",
    level: "UG",
    name: "Gujarat-CET",
    purpose: "B.Tech.",
    eligibility: "Resident of Gujarat, 10+2 with 45%. 40% for reserve category.",
    apply: "Online.",
    activity: "March.",
    source: "www.gseb.org",
  },
];

// -------------------------------------------------------------
// Card Component – Show more on Purpose + Eligibility
// -------------------------------------------------------------
function StateExamCard({ exam }) {
  const [expanded, setExpanded] = useState(false);

  const longPurpose = exam.purpose && exam.purpose.length > 150;
  const longEligibility = exam.eligibility && exam.eligibility.length > 150;
  const hasShowMore = longPurpose || longEligibility;

  const purposeText =
    expanded || !longPurpose ? exam.purpose : getPreview(exam.purpose);
  const eligibilityText =
    expanded || !longEligibility
      ? exam.eligibility
      : getPreview(exam.eligibility);

  return (
    <div className="iitCard w-100 d-flex flex-column h-100">
      {/* Tag + Level */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <span className="iitRank small fw-semibold">{exam.tag}</span>
        <span className="iitCodeBadge">{exam.level}</span>
      </div>

      {/* Name */}
      <div className="mb-2">
        <h3 className="h6 fw-semibold mb-1 text-dark">{exam.name}</h3>
      </div>

      <div className="iitDivider my-2" />

      {/* Purpose + Eligibility block (main content area) */}
      <div className="small text-muted mb-2 flex-grow-1">
        {exam.purpose && (
          <p className="mb-1">
            <strong>Purpose:</strong> {purposeText}
          </p>
        )}
        {exam.eligibility && (
          <p className="mb-0">
            <strong>Eligibility:</strong> {eligibilityText}
          </p>
        )}

        {hasShowMore && (
          <button
            type="button"
            className="btn btn-link btn-sm px-0 mt-1"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>

      {/* Apply / Activity */}
      <div className="small text-muted mb-2">
        {exam.apply && (
          <p className="mb-1">
            <strong>Apply:</strong> {exam.apply}
          </p>
        )}
        {exam.activity && (
          <p className="mb-0">
            <strong>Activity (typical):</strong> {exam.activity}
          </p>
        )}
      </div>

      {/* Official source / website at bottom */}
      {exam.source && (
        <>
          <div className="iitDivider my-2" />
          <div className="mt-auto d-flex justify-content-between align-items-center">
        
            <a
              href={getWebsiteHref(exam.source)}
              target="_blank"
              rel="noreferrer"
              className="iitWebsiteLink d-inline-flex align-items-center gap-1"
            >
              <span className="small">{exam.source}</span>
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// MAIN PAGE
// -------------------------------------------------------------
export default function EngineeringStateExamsPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="State-Level Engineering Entrance Exams"
        breadcrumb="Engineering → State-Level Entrance Exams"
      />

      <ExamTabsBar tabs={EXAM_TABS} activeId="engineering-state" />

      {/* 1. ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            {/* About section */}
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <span>About State-Level Engineering Exams</span>
              </h2>
              <p className="sectionSub">
                The state-wise list of engineering exams is given so that
                students can understand which entrance tests are used for
                admission into colleges and universities of a particular state.
                Based on these exams’ scores, candidates get an opportunity to
                take admission in different engineering, pharmacy, architecture
                and allied programmes offered by state universities and private
                colleges.
              </p>
              <p className="sectionSub mb-0">
                This page organises the “State Level Engineering Entrance”
                details from the Career Guide into a clean, card-based layout so
                that you can quickly scan the exam name, purpose, eligibility,
                application mode, typical activity months and official links.
              </p>
            </div>

            {/* Snapshot card */}
            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>
                <dl className="row small mb-0">
                  <dt className="col-5">State exams listed</dt>
                  <dd className="col-7 mb-2">
                    {STATE_ENGINEERING_EXAMS.length} entrance exams
                  </dd>

                  <dt className="col-5">States covered</dt>
                  <dd className="col-7 mb-2">
                    Maharashtra, Andhra Pradesh, Karnataka, Uttar Pradesh, West
                    Bengal, Bihar, Odisha, Tripura, Jammu &amp; Kashmir,
                    Gujarat and more.
                  </dd>

                  <dt className="col-5">Levels</dt>
                  <dd className="col-7 mb-2">
                    Mostly UG (B.E./B.Tech/B.Arch/B.Pharm) with some PG (MBA,
                    MCA, M.E./M.Tech/M.Arch).
                  </dd>

                  <dt className="col-5">Key examples</dt>
                  <dd className="col-7 mb-2">
                    MHT CET, AP EAMCET, WBJEE, Karnataka CET, UPSEE, BCECE,
                    OJEE, Gujarat-CET and others.
                  </dd>

                  <dt className="col-5">Typical months</dt>
                  <dd className="col-7 mb-0">
                    Application windows mostly between December and March, with
                    some PG tests in May (always confirm the current year’s
                    schedule).
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW STATE EXAMS FIT INTO YOUR PLAN */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">
              How State-Level Exams Fit with National Exams
            </h2>
            <p className="sectionSub mb-0">
              Most students will balance one or more national-level exams with
              one or more state-level exams, depending on where they want to
              study and what courses they prefer.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* Left: Strategy / pathways */}
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Planning your attempts</span>
                </span>

                <p className="small mb-3">
                  State-level exams are usually used for government engineering
                  colleges, state universities and many private colleges within
                  that state. They complement national-level tests like JEE
                  Main, JEE Advanced or BITSAT.
                </p>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>Target your home state</strong> – exams like MHT
                    CET, WBJEE, BCECE, OJEE, Gujarat-CET provide access to
                    state engineering seats.
                  </li>
                  <li>
                    <strong>Combine with national exams</strong> – many
                    students appear for JEE Main plus one or more relevant
                    state exams in parallel.
                  </li>
                  <li>
                    <strong>Look beyond engineering</strong> – some state
                    tests also cover pharmacy, agriculture, veterinary and
                    other allied courses (e.g. AP EAMCET, Karnataka CET,
                    Tripura JEE).
                  </li>
                  <li>
                    <strong>PG pathways</strong> – tests like Karnataka PGCET
                    support MBA, MCA and M.Tech routes after graduation.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Highlighted clusters */}
            <div className="col-12 col-lg-7 d-flex">
              <div className="row g-3 w-100 align-content-stretch">
                {/* Cluster 1 – Major multi-course exams */}
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Multi-course exams</span>
                      <span className="nitExamLevel">UG</span>
                    </div>
                    <p className="nitExamTitle mb-1">
                      MHT CET, AP EAMCET, Karnataka CET
                    </p>
                    <p className="nitExamText mb-0">
                      Used for engineering as well as B.Pharm, agriculture,
                      veterinary and other professional courses within the
                      respective state.
                    </p>
                  </div>
                </div>

                {/* Cluster 2 – Engineering focussed */}
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Core engineering</span>
                      <span className="nitExamLevel">UG</span>
                    </div>
                    <p className="nitExamTitle mb-1">
                      WBJEE, BCECE, OJEE, Gujarat-CET
                    </p>
                    <p className="nitExamText mb-0">
                      Focused primarily on B.E./B.Tech (and sometimes B.Arch /
                      B.Pharm) seats in their respective states.
                    </p>
                  </div>
                </div>

                {/* Cluster 3 – PG & lateral routes */}
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">PG &amp; Lateral</span>
                      <span className="nitExamLevel">PG</span>
                    </div>
                    <p className="nitExamTitle mb-1">
                      Karnataka PGCET &amp; similar routes
                    </p>
                    <p className="nitExamText mb-0">
                      Support MBA, MCA and M.E./M.Tech/M.Arch admissions after
                      graduation, complementing GATE-based admissions.
                    </p>
                  </div>
                </div>

                {/* Cluster 4 – Special cases */}
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Special &amp; others</span>
                      <span className="nitExamLevel">UG</span>
                    </div>
                    <p className="nitExamTitle mb-1">
                      Tripura JEE, JK-BPEE CET, IISc (BSc Research)
                    </p>
                    <p className="nitExamText mb-0">
                      Smaller state/region-specific exams and specialised
                      options like B.Sc (Research) at IISc that appear in the
                      same section of the guide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DETAILED LIST OF STATE EXAMS */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">
                State-Level Engineering Entrance Exams – Details
              </h2>
              <p className="sectionSub mb-0">
                All exams listed here are taken from the “STATE LEVEL
                ENGINEERING ENTRANCE” section of the Career Guide, organised in
                a modern card layout for easy comparison.
              </p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {STATE_ENGINEERING_EXAMS.map((exam) => (
              <div key={exam.id} className="col-12 col-md-6 col-lg-6 d-flex">
                <StateExamCard exam={exam} />
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
              Use this list to identify which state exams match your home state
              or the state where you wish to study, then note the eligibility,
              tentative activity months and official websites for detailed
              notifications.
            </p>
            <p className="mb-0 text-muted">
              For every admission year, always follow the latest state
              government or examination authority notification for final dates,
              syllabi, seat matrix and counselling procedures. This page is for
              structured guidance, not as a replacement for official documents.
            </p>
          </div>
        </div>
      </section>

      {/* 5. EXPLORE OTHER EXAM CATEGORIES (SIBLINGS OF ENGINEERING) */}
      <section className="py-5 spotlightSection">
        <div className="container py-lg-4">
          <div className="row g-4 align-items-center justify-content-center mb-3 mb-lg-5 text-center">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading text-white mb-2">
                Explore Other Exam Categories
              </h2>
              <p className="sectionSub text-light mb-0">
                Along with engineering entrance exams, students may also prepare
                for medical, management, law and other competitive or
                international examinations. Use these sections to explore full
                details stream-wise.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Medical Entrance Exams */}
            <div className="col-12 col-md-4 col-lg-4">
              <Link
                href="/exams/medical/national"
                className="text-decoration-none"
              >
                <div className="glassCard premiumHover h-100">
                  <h3 className="h6 mb-1 fw-medium text-white">
                    Medical Entrance Exams
                  </h3>
                  <p className="small text-light mb-0">
                    NEET UG and other national, state and university-level
                    exams for MBBS, BDS, AYUSH and allied medical courses.
                  </p>
                </div>
              </Link>
            </div>

            {/* Management & Law Entrance */}
            <div className="col-12 col-md-4 col-lg-4">
              <Link href="/exams/mba" className="text-decoration-none">
                <div className="glassCard premiumHover h-100">
                  <h3 className="h6 mb-1 fw-medium text-white">
                    Management &amp; MBA Entrance
                  </h3>
                  <p className="small text-light mb-0">
                    CAT, XAT, MAT and other tests leading to BBA / MBA and
                    management programmes, with a separate section for Law
                    (CLAT, AILET, etc.).
                  </p>
                </div>
              </Link>
            </div>

            {/* Other Competitive & International */}
            <div className="col-12 col-md-4 col-lg-4">
              <Link href="/exams/international" className="text-decoration-none">
                <div className="glassCard premiumHover h-100">
                  <h3 className="h6 mb-1 fw-medium text-white">
                    Other Competitive &amp; International Exams
                  </h3>
                  <p className="small text-light mb-0">
                    Defence services, civil services &amp; government
                    recruitment, as well as GRE, GMAT, IELTS, TOEFL and other
                    international tests.
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
