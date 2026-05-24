import React, { useState } from "react";
import { Link, usePage } from '@inertiajs/react';
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import ExamTabsBar from "../ExamTabsBar";
import { GraduationCap, Layers3, Network, ExternalLink } from "lucide-react";

// -------------------------------------------------------------
// Helpers
// -------------------------------------------------------------
function getWebsiteHref(raw) {
  if (!raw) return "#";
  const trimmed = raw.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed.replace(/^\/\//, "")}`;
}

function getNamePreview(text, limit = 42) {
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
// UNIVERSITY LEVEL ENTRANCE EXAM FOR ENGINEERING
//
// "If Students aspiring to take direct admission in B-Tech courses of various
//  prestigious Universities across India, then must appear in the University
//  Level Entrance Exams for Engineering."
//
// SL. NO. | ENTRANCE EXAM FOR ENGINEERING (UNIVERSITY WISE)
//         | FULL FORM OF ENGINEERING EXAMS IN INDIA
//         | ENGINEERING ENTRANCE EXAMS CALENDAR
// -------------------------------------------------------------
const UNIVERSITY_ENGINEERING_EXAMS = [
  {
    id: "srmjee",
    tag: "SRMJEE",
    name: "SRM Engineering Entrance Exam",
    calendar: "APRIL",
  },
  {
    id: "ipu-cet",
    tag: "IPU CET",
    name: "Guru Gobind Singh Indraprastha University Common Entrance Test",
    calendar: "APRIL",
  },
  {
    id: "imu-cet",
    tag: "IMU CET",
    name: "Indian Marine University Common Entrance Test",
    calendar: "MAY",
  },
  {
    id: "vmu-eee",
    tag: "VMU EEE",
    name: "Vinayaka Mission University Engineering Entrance Examination",
    calendar: "MAY",
  },
  {
    id: "vsat",
    tag: "VSAT",
    name: "Vignan University Entrance Test",
    calendar: "APRIL",
  },
  {
    id: "aueee",
    tag: "AUEEE",
    name: "Andhra University Engineering Entrance Exam",
    calendar: "MAY",
  },
  {
    id: "kiitee",
    tag: "KIITEE",
    name: "Kalinga Institute of Industrial Technology Engineering Entrance Exam",
    calendar: "APRIL",
  },
  {
    id: "bvp-cet",
    tag: "BVP CET",
    name: "Bharati Vidyapeeth Common Entrance Test",
    calendar: "JUNE",
  },
  {
    id: "aeee",
    tag: "AEEE",
    name: "Amrita Engineering Entrance Examination",
    calendar: "APRIL",
  },
  {
    id: "kee",
    tag: "KEE",
    name: "Karunya Entrance Examination",
    calendar: "MAY",
  },
  {
    id: "bsaueee",
    tag: "BSAUEEE",
    name: "B S Abdur Rehman University Engineering Entrance Exam",
    calendar: "APRIL",
  },
  {
    id: "saat",
    tag: "SAAT",
    name: "Siksha Anusandhan University Admission Test",
    calendar: "MAY",
  },
  {
    id: "cusat-cat",
    tag: "CUSAT CAT",
    name: "Cochin University of Science & Technology Common Admission Test",
    calendar: "APRIL TO MAY",
  },
  {
    id: "sliet",
    tag: "SLIET",
    name: "Sliet Engineering Test",
    calendar: "JUNE",
  },
  {
    id: "vee",
    tag: "VEE",
    name: "Vels Entrance Examination",
    calendar: "MAY",
  },
  {
    id: "beee",
    tag: "BEEE",
    name: "Bharath Engineering Entrance Examination",
    calendar: "APRIL",
  },
  {
    id: "amueee",
    tag: "AMUEEE",
    name: "Aligarh Muslim University Engineering Entrance Exam",
    calendar: "APRIL",
  },
  {
    id: "aueet",
    tag: "AUEET",
    name: "Alliance University Engineering Entrance Test",
    calendar: "JUNE",
  },
];

// -------------------------------------------------------------
// Card – attractive, equal height, with "show more" on long name
// -------------------------------------------------------------
function UniversityExamCard({ exam }) {
  const [expanded, setExpanded] = useState(false);

  const isLongName = exam.name && exam.name.length > 42;
  const titlePreview = getNamePreview(exam.name, 42);
  const showName = expanded || !isLongName ? exam.name : titlePreview;

  return (
    <div className="iitCard w-100 d-flex flex-column h-100">
      {/* Top row: tag + calendar chip */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <span className="iitRank small fw-semibold">{exam.tag}</span>
        <span className="iitCodeBadge">{exam.calendar}</span>
      </div>

      {/* Name + optional show more */}
      <div className="mb-2">
        <h3 className="h6 fw-semibold mb-1 text-dark">{showName}</h3>

      </div>

      <div className="iitDivider my-2" />

      {/* Overview text – generic but honest (no fake eligibility) */}
      <div className="small text-muted mb-2 flex-grow-1">
        <p className="mb-1">
          <strong>Exam type:</strong> University level entrance exam for
          engineering / B.Tech admission in the respective university.
        </p>
        <p className="mb-0">
          <strong>Exam month (as per guide):</strong> {exam.calendar}
        </p>
      </div>

      
    </div>
  );
}

// -------------------------------------------------------------
// MAIN PAGE
// -------------------------------------------------------------
export default function EngineeringUniversityExamsPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="University-Level Engineering Entrance Exams"
        breadcrumb="Engineering → University-Level Entrance Exams"
      />

      <ExamTabsBar tabs={EXAM_TABS} activeId="engineering-university" />

      {/* 1. ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            {/* About */}
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <span>About University-Level Engineering Entrance Exams</span>
              </h2>
              <p className="sectionSub mb-2">
                If students aspiring to take direct admission in B-Tech courses
                of various prestigious Universities across India, then must
                appear in the University Level Entrance Exams for Engineering.
              </p>
              <p className="sectionSub mb-0">
                This page converts the table of “UNIVERSITY LEVEL ENTRANCE
                EXAM FOR ENGINEERING” into a clean interface. Each card
                represents one university-specific engineering entrance test,
                showing its short name, full form and the exam month from the
                calendar column.
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
                  <dt className="col-5">University exams listed</dt>
                  <dd className="col-7 mb-2">
                    {UNIVERSITY_ENGINEERING_EXAMS.length} entrance exams
                  </dd>

                  <dt className="col-5">Purpose</dt>
                  <dd className="col-7 mb-2">
                    Direct B.Tech / engineering admissions into specific
                    universities and deemed universities.
                  </dd>

                  <dt className="col-5">Exam window</dt>
                  <dd className="col-7 mb-2">
                    Mostly between <strong>April</strong> and{" "}
                    <strong>June</strong>, as per the exam calendar in the
                    guide.
                  </dd>

                  <dt className="col-5">Examples</dt>
                  <dd className="col-7 mb-2">
                    SRMJEE, IPU CET, KIITEE, AEEE, BEEE, AMUEEE and others.
                  </dd>

                  <dt className="col-5">How to use</dt>
                  <dd className="col-7 mb-0">
                    Shortlist universities you like, then track their official
                    notifications using these exam names and months.
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW UNIVERSITY EXAMS FIT YOUR PLAN */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">
              How University-Level Exams Fit with Your Preparation
            </h2>
            <p className="sectionSub mb-0">
              Students usually combine national-level exams, one or more
              state-level tests, and a few university-level exams for specific
              campuses they are targeting.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* Left – Strategy */}
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Planning your mix of exams</span>
                </span>

                <p className="small mb-3">
                  University-level exams are designed specifically for the
                  engineering colleges of that particular university group.
                  Clearing them gives you a direct route into that institution,
                  often alongside national ranks.
                </p>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>Shortlist universities</strong> – identify 3–5
                    private / deemed / state universities where you genuinely
                    want to study.
                  </li>
                  <li>
                    <strong>Map exam months</strong> – most exams in this list
                    are held in April, May or June. Plan your schedule so that
                    dates do not clash with national exams.
                  </li>
                  <li>
                    <strong>Use as backup &amp; opportunity</strong> – some
                    students treat these exams as backups; others treat them as
                    first choice for specific campuses like SRM, KIIT, IP
                    University, Amrita and so on.
                  </li>
                  <li>
                    <strong>Always confirm from official sites</strong> – the
                    table in the guide gives only names and months, so use those
                    as a starting point to search the latest details.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right – Highlighted clusters */}
            <div className="col-12 col-lg-7 d-flex">
              <div className="row g-3 w-100 align-content-stretch">
                {/* Cluster 1: Large multi-campus universities */}
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Multi-campus groups</span>
                      <span className="nitExamLevel">UG</span>
                    </div>
                    <p className="nitExamTitle mb-1">
                      SRMJEE, KIITEE, AEEE, BEEE
                    </p>
                    <p className="nitExamText mb-0">
                      Entry gateways to large private universities with multiple
                      campuses and a variety of engineering branches.
                    </p>
                  </div>
                </div>

                {/* Cluster 2: State-capital & metro universities */}
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Metro universities</span>
                      <span className="nitExamLevel">UG</span>
                    </div>
                    <p className="nitExamTitle mb-1">
                      IPU CET, CUSAT CAT, AMUEEE
                    </p>
                    <p className="nitExamText mb-0">
                      Tests for well-known universities located in or near major
                      cities, often with strong local industry connections.
                    </p>
                  </div>
                </div>

                {/* Cluster 3: Deemed & specialised institutions */}
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Deemed &amp; specialised</span>
                      <span className="nitExamLevel">UG</span>
                    </div>
                    <p className="nitExamTitle mb-1">
                      SAAT, VMU EEE, BSAUEEE, VEE
                    </p>
                    <p className="nitExamText mb-0">
                      Entrance routes to institutions with specific strengths
                      (e.g. health sciences, marine, regional engineering).
                    </p>
                  </div>
                </div>

                {/* Cluster 4: Other named tests */}
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">Other university tests</span>
                      <span className="nitExamLevel">UG</span>
                    </div>
                    <p className="nitExamTitle mb-1">
                      VSAT, AUEEE, SLIET, AUEET
                    </p>
                    <p className="nitExamText mb-0">
                      Additional university exams appearing in the table – worth
                      exploring if their location and course offerings match
                      your interests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DETAILED LIST – CARD GRID */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">
                University-Level Engineering Entrance Exams – List
              </h2>
              <p className="sectionSub mb-0">
                The table from the Career Guide is presented here as individual
                cards – same exams, same full forms, same calendar months; only
                the layout has changed.
              </p>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {UNIVERSITY_ENGINEERING_EXAMS.map((exam) => (
              <div key={exam.id} className="col-12 col-md-6 col-lg-6 d-flex">
                <UniversityExamCard exam={exam} />
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
              Treat this page as a quick index of university-based engineering
              entrance exams. Use the exam short name and full form exactly as
              written here to search for the latest year’s notification on the
              official university website.
            </p>
            <p className="mb-0 text-muted">
              The Career Guide table lists only the exam name and calendar
              month. For eligibility, detailed schedule, pattern, and online
              form, always follow the current information published by the
              respective university or examination authority.
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
