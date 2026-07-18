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
// Card Component – Show more on Purpose + Eligibility
// -------------------------------------------------------------
function StateExamCard({ exam }) {
  const [expanded, setExpanded] = useState(false);

  // Defensive: coerce to plain strings so show more/less works
  // even if the backend sends arrays, null, or non-string values.
  const purposeRaw = Array.isArray(exam.purpose)
    ? exam.purpose.join(" ")
    : typeof exam.purpose === "string"
    ? exam.purpose
    : "";

  const eligibilityRaw = Array.isArray(exam.eligibility)
    ? exam.eligibility.join(" ")
    : typeof exam.eligibility === "string"
    ? exam.eligibility
    : "";

  const longPurpose = purposeRaw.length > 150;
  const longEligibility = eligibilityRaw.length > 150;
  const hasShowMore = longPurpose || longEligibility;

  const purposeText = expanded || !longPurpose ? purposeRaw : getPreview(purposeRaw);
  const eligibilityText =
    expanded || !longEligibility ? eligibilityRaw : getPreview(eligibilityRaw);

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
        {!!purposeRaw && (
          <p className="mb-1">
            <strong>Purpose:</strong> {purposeText}
          </p>
        )}
        {!!eligibilityRaw && (
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
export default function EngineeringStateExamsPage({ examContents }) {

  const stateEngineeringExams = Array.isArray(examContents) ? examContents : [];

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
                Based on these exams' scores, candidates get an opportunity to
                take admission in different engineering, pharmacy, architecture
                and allied programmes offered by state universities and private
                colleges.
              </p>
              <p className="sectionSub mb-0">
                This page organises the "State Level Engineering Entrance"
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
                    {stateEngineeringExams.length} entrance exams
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
                    some PG tests in May (always confirm the current year's
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
                All exams listed here are taken from the "STATE LEVEL
                ENGINEERING ENTRANCE" section of the Career Guide, organised in
                a modern card layout for easy comparison.
              </p>
            </div>
          </div>

          {stateEngineeringExams.length === 0 ? (
            <div className="sectionCard bg-light border text-center small text-muted">
              No exam data available right now. Please check back later.
            </div>
          ) : (
            <div className="row g-3 g-md-4">
              {stateEngineeringExams.map((exam, idx) => (
                <div key={exam.id ?? `${exam.tag ?? "exam"}-${idx}`} className="col-12 col-md-6 col-lg-6 d-flex">
                  <StateExamCard exam={exam} />
                </div>
              ))}
            </div>
          )}
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
     
      </FrontendLayout>
    </>
  );
}