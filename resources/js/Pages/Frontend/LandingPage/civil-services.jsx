"use client";

import React from "react";

import { motion } from "framer-motion";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from "@/Layouts/FrontendLayout";

import {
  Landmark,
  GraduationCap,
  FileText,
  BadgeCheck,
  ArrowRight,
  ClipboardList,
  ShieldCheck,
  Globe,
  Users,
  BookOpen,
  Target,
  MapPin,
  Award,
  TrendingUp,
} from "lucide-react";

/**
 * Civil Services Landing Page — Complete Guide
 * Design mirrors: /landing-pages/medical.js
 */

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.35 },
};

const QuickLink = ({ icon, title, desc, href }) => (
  <a
    href={href}
    className="text-decoration-none d-block h-100"
    style={{ color: "inherit" }}
  >
    <div
      className="h-100 p-3 rounded-4 border bg-white shadow-sm"
      style={{ borderColor: "rgba(0,0,0,.08)" }}
    >
      <div className="d-flex align-items-start gap-3">
        <div
          className="rounded-3 d-flex align-items-center justify-content-center"
          style={{
            width: 42,
            height: 42,
            background: "rgba(13,110,253,.08)",
            border: "1px solid rgba(13,110,253,.15)",
          }}
        >
          {icon}
        </div>
        <div className="flex-grow-1">
          <div className="fw-semibold">{title}</div>
          <div className="small text-muted">{desc}</div>
          <div className="small fw-semibold text-primary mt-2 d-inline-flex align-items-center gap-1">
            Explore <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </div>
  </a>
);

const LinkRow = ({ label, href, meta }) => (
  <a
    href={href}
    className="d-flex align-items-center justify-content-between text-decoration-none px-3 py-2 rounded-3 linkRowHover"
    style={{
      border: "1px solid rgba(0,0,0,.08)",
      background: "#fff",
      color: "inherit",
    }}
  >
    <div className="d-flex align-items-center gap-2">
      <span className="fw-semibold">{label}</span>
      {meta ? (
        <span className="badge bg-light text-dark border">{meta}</span>
      ) : null}
    </div>
    <ArrowRight size={16} className="text-muted" />
  </a>
);

const SectionTitle = ({ icon, title, subtitle }) => (
  <div className="d-flex align-items-start gap-3 mb-3">
    <div
      className="rounded-3 d-flex align-items-center justify-content-center"
      style={{
        width: 44,
        height: 44,
        background: "rgba(25,135,84,.10)",
        border: "1px solid rgba(25,135,84,.18)",
      }}
    >
      {icon}
    </div>
    <div>
      <h2 className="h5 fw-bold mb-1">{title}</h2>
      {subtitle ? <div className="text-muted small">{subtitle}</div> : null}
    </div>
  </div>
);

export default function CivilServicesLandingPage() {
  return (


    
      <FrontendLayout>
          <HeroInner
            title="Civil Services Career Guide"
            breadcrumb="Civil Services Career Guide"
            description="Here you can explore all medical-related links."
          />

    <div className="pb-5">



      {/* HERO */}
      <div className="w-100 nitLightGradient">
        <div className="container py-4 py-md-5">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div style={{ maxWidth: 720 }}>
              <h1 className="section-heading mb-2">
                Civil Services{" "}
                <span className="gradient-text">Career Guide</span>
              </h1>

              <div className="text-muted fw-semibold mb-3">
                UPSC, WBCS, Exam Stages, Services & Preparation — A Complete Roadmap
              </div>

              <p className="text-muted mb-3" style={{ lineHeight: 1.7 }}>
                A career in civil services is one of the most ambitious and respected
                paths in India — but it demands years of disciplined preparation. UPSC
                CSE, WBCS, exam stages, optional subjects, syllabus depth, and the
                reality of multiple attempts can make it hard to know where to begin.
                This page simplifies everything into one clear place.
              </p>

              <p className="text-muted mb-0" style={{ lineHeight: 1.7 }}>
                Whether you are a <b>student in graduation</b> starting to think about
                civil services, or someone who has already begun preparation and wants
                to understand the full picture — you'll find clear pathways, exam
                breakdowns, service options, and honest preparation guidance here.
              </p>
            </div>

            {/* mini stats */}
            <div className="d-grid gap-2" style={{ minWidth: 260 }}>
              <div className="p-3 rounded-4 bg-white border shadow-sm">
                <div className="small text-muted">Primary entrance exams</div>
                <div className="fw-bold d-flex align-items-center gap-2">
                  <ClipboardList size={16} className="text-primary" />
                  UPSC CSE · WBCS
                </div>
              </div>

              <div className="p-3 rounded-4 bg-white border shadow-sm">
                <div className="small text-muted">Need guidance?</div>
                <div className="fw-bold d-flex align-items-center gap-2">
                  <BadgeCheck size={16} className="text-success" />
                  Counselor Support
                </div>
                <a
                  href="/counsellors/directory"
                  className="small text-primary fw-semibold text-decoration-none d-inline-flex align-items-center gap-1"
                >
                  Connect with a Counselor <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="mt-4">
            <div className="row g-3">
              <div className="col-12 col-md-6 col-xl-3">
                <QuickLink
                  icon={<Landmark size={18} className="text-primary" />}
                  title="Civil Services — By Profession"
                  desc="Full career overview for civil services as a profession."
                  href="/career/by-profession/civil-services"
                />
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <QuickLink
                  icon={<Target size={18} className="text-danger" />}
                  title="UPSC CSE"
                  desc="India's most prestigious exam — IAS, IPS, IFS and more."
                  href="https://upsc.gov.in/"
                />
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <QuickLink
                  icon={<MapPin size={18} className="text-success" />}
                  title="WBCS"
                  desc="West Bengal Civil Service exam for state-level posts."
                  href="https://wbpsc.gov.in/"
                />
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <QuickLink
                  icon={<GraduationCap size={18} className="text-warning" />}
                  title="After Graduation"
                  desc="Career options and pathways after your degree."
                  href="/careers/after-graduation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          UPSC CSE — Detailed Section
      ========================= */}
      <section className="py-5 py-lg-6">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-9">
              <div className="mb-4 mb-lg-5">
                <h2 className="section-heading mb-3">
                  <span className="gradient-text">UPSC CSE:</span> The Main Civil
                  Services Exam
                </h2>

                <p className="text-muted mb-0">
                  The UPSC Civil Services Examination (CSE) is India's most prestigious
                  competitive exam, conducted by the Union Public Service Commission.
                  It selects officers for the <strong>Indian Administrative Service (IAS)</strong>,{" "}
                  <strong>Indian Police Service (IPS)</strong>,{" "}
                  <strong>Indian Foreign Service (IFS)</strong>, and over 20 other
                  Group A and B Central Services. A single exam with three progressive
                  stages, UPSC CSE demands sustained preparation across a wide syllabus
                  over 1–3 years for most successful candidates.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-start">
            <div className="col-lg-12">
              <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm mb-4 mb-lg-5">

                {/* Quick Facts — 3 stages */}
                <div className="row g-4 mb-4">
                  <div className="col-md-4">
                    <div
                      className="small text-uppercase text-muted fw-semibold mb-1 gradient-text"
                      style={{ letterSpacing: ".08em" }}
                    >
                      Stage 1 — Prelims
                    </div>
                    <div className="fw-semibold fs-6">
                      GS Paper I + CSAT (Qualifying)
                    </div>
                    <div className="small text-muted mt-1">
                      MCQ format · Negative marking · Screening round
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div
                      className="small text-uppercase text-muted fw-semibold mb-1 gradient-text"
                      style={{ letterSpacing: ".08em" }}
                    >
                      Stage 2 — Mains
                    </div>
                    <div className="fw-semibold fs-6">
                      9 Papers (GS I–IV + Essay + Optional × 2)
                    </div>
                    <div className="small text-muted mt-1">
                      Descriptive format · Marks count for final merit
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div
                      className="small text-uppercase text-muted fw-semibold mb-1 gradient-text"
                      style={{ letterSpacing: ".08em" }}
                    >
                      Stage 3 — Interview
                    </div>
                    <div className="fw-semibold fs-6">
                      Personality Test (275 marks)
                    </div>
                    <div className="small text-muted mt-1">
                      Conducted by UPSC board · Tests reasoning and character
                    </div>
                  </div>
                </div>

                <hr className="my-4" />

                {/* Eligibility */}
                <div className="mb-4">
                  <div
                    className="small text-uppercase text-muted fw-semibold mb-2 gradient-text"
                    style={{ letterSpacing: ".08em" }}
                  >
                    Eligibility
                  </div>

                  <div className="row g-4">
                    <div className="col-md-4">
                      <div className="fw-semibold mb-1">Educational</div>
                      <div className="small text-muted">
                        Bachelor's degree in any discipline from a
                        recognised university (any stream)
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="fw-semibold mb-1">Age Limit</div>
                      <div className="small text-muted">
                        General: 21–32 years<br />
                        OBC: 21–35 years<br />
                        SC / ST: 21–37 years
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="fw-semibold mb-1">Attempts</div>
                      <div className="small text-muted">
                        General: 6 attempts<br />
                        OBC: 9 attempts<br />
                        SC / ST: Unlimited (within age)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Apply */}
                <div className="mb-4">
                  <div
                    className="small text-uppercase text-muted fw-semibold mb-2 gradient-text"
                    style={{ letterSpacing: ".08em" }}
                  >
                    Apply
                  </div>
                  <div className="fw-semibold">Online Application Mode (upsconline.nic.in)</div>
                </div>

                <hr className="my-4" />

                <div className="d-flex flex-wrap align-items-center gap-4">
                  <div>
                    <div className="small text-muted">Official Website</div>
                    <a
                      href="https://upsc.gov.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1 mt-1"
                    >
                      <span className="small">https://upsc.gov.in/</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* What UPSC CSE unlocks */}
              <div className="mb-4 mb-lg-5">
                <h3 className="h5 fw-semibold mb-3">
                  Services allocated through UPSC CSE
                </h3>
                <p className="text-muted" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                  The service you are allocated depends on your final merit rank and your
                  preference list. Higher ranks unlock the most sought-after services.
                  All services offer significant responsibility, authority, and social
                  impact.
                </p>

                <div className="row g-3 mt-1">
                  <div className="col-md-6 col-lg-3">
                    <div className="p-3 rounded-3 border bg-white h-100">
                      <div className="fw-semibold mb-1">IAS</div>
                      <div className="small text-muted">
                        Indian Administrative Service — district administration,
                        policy implementation, and senior government positions.
                        Most sought-after service.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="p-3 rounded-3 border bg-white h-100">
                      <div className="fw-semibold mb-1">IPS</div>
                      <div className="small text-muted">
                        Indian Police Service — law enforcement, intelligence,
                        and internal security at state and central levels.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="p-3 rounded-3 border bg-white h-100">
                      <div className="fw-semibold mb-1">IFS</div>
                      <div className="small text-muted">
                        Indian Foreign Service — diplomatic postings, embassies,
                        and international relations. Requires strong language and
                        communication skills.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="p-3 rounded-3 border bg-white h-100">
                      <div className="fw-semibold mb-1">IRS, IRS (IT) & others</div>
                      <div className="small text-muted">
                        Indian Revenue Service (Customs & IT), IRTS, IRAS, IRPS,
                        IPoS and 20+ other Group A/B central services.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WBCS */}
              <div className="mb-4 mb-lg-5">
                <h3 className="h5 fw-semibold mb-3">
                  WBCS: West Bengal Civil Service Exam
                </h3>
                <p className="text-muted mb-3" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                  The West Bengal Civil Service (Executive) Examination is conducted by
                  the West Bengal Public Service Commission (WBPSC). It is the state-level
                  equivalent of UPSC CSE and selects officers for the West Bengal Civil
                  Service (Executive) and allied state services. For students from West
                  Bengal who want a government career with direct impact at the state
                  level, WBCS is the most relevant exam.
                </p>

                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="p-3 rounded-3 border bg-white h-100">
                      <div className="fw-semibold mb-1">Exam Pattern</div>
                      <div className="small text-muted">
                        Three stages: Preliminary (MCQ) → Main (descriptive, 6 papers)
                        → Personality Test. Syllabus overlaps significantly with UPSC.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 rounded-3 border bg-white h-100">
                      <div className="fw-semibold mb-1">Posts Allocated</div>
                      <div className="small text-muted">
                        WBCS (Exe.), WBPS (Police), Sub-Divisional Officer, Block
                        Development Officer, and several allied Group A/B state services.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 rounded-3 border bg-white h-100">
                      <div className="fw-semibold mb-1">Key Difference from UPSC</div>
                      <div className="small text-muted">
                        Bengali language paper is included. State-specific GK (WB history,
                        economy, geography) is tested. Age limit and attempt rules differ.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <a
                    href="https://wbpsc.gov.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="iitWebsiteLink d-inline-flex align-items-center gap-1"
                  >
                    <span className="small">WBPSC Official Website — https://wbpsc.gov.in/</span>
                  </a>
                </div>
              </div>

              {/* Who should pursue civil services */}
              <div className="mb-4 mb-lg-5">
                <h3 className="h5 fw-semibold mb-3">
                  Who should seriously pursue civil services
                </h3>
                <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                  Civil services is not the right choice for everyone — and knowing this
                  early saves years. It suits students who are genuinely motivated by
                  public administration, are comfortable with a multi-year preparation
                  commitment, and can stay focused through uncertainty and repeated cycles.
                </p>

                <div className="mt-3">
                  <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
                    <li>
                      You are genuinely interested in governance, public policy, and
                      serving at a systemic level — not just the prestige or salary
                    </li>
                    <li>
                      You can commit 1–3 years of focused preparation after graduation
                      with limited income in that period
                    </li>
                    <li>
                      You enjoy reading across subjects — history, polity, economy,
                      geography, science, and current affairs simultaneously
                    </li>
                    <li>
                      You have the emotional resilience to handle an uncertain outcome
                      over multiple attempts
                    </li>
                  </ul>
                </div>
              </div>

              {/* Prep plan */}
              <div>
                <h3 className="h5 fw-semibold mb-3">
                  A practical UPSC preparation plan (simple & honest)
                </h3>

                <div className="d-grid gap-4">
                  <div>
                    <div
                      className="small text-muted text-uppercase fw-semibold mb-2 gradient-text"
                      style={{ letterSpacing: ".08em" }}
                    >
                      Step 1
                    </div>
                    <div className="fw-semibold mb-2">
                      Understand the syllabus fully before studying anything
                    </div>
                    <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                      Download the official UPSC CSE syllabus and read it cover to cover
                      before opening any book. The syllabus defines what is in and what is
                      out. Most beginners waste months studying material that is not
                      tested. Map every topic to the syllabus before you invest time in it.
                    </p>
                  </div>

                  <div>
                    <div
                      className="small text-muted text-uppercase fw-semibold mb-2 gradient-text"
                      style={{ letterSpacing: ".08em" }}
                    >
                      Step 2
                    </div>
                    <div className="fw-semibold mb-2">
                      NCERTs first — build a clean, reliable foundation
                    </div>
                    <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                      NCERT textbooks (Class 6–12) for History, Geography, Polity,
                      Economics, and Science are the starting point for most serious
                      aspirants. They are factually reliable, clearly written, and directly
                      relevant to the Prelims syllabus. Read them before moving to
                      standard reference books.
                    </p>
                  </div>

                  <div>
                    <div
                      className="small text-muted text-uppercase fw-semibold mb-2 gradient-text"
                      style={{ letterSpacing: ".08em" }}
                    >
                      Step 3
                    </div>
                    <div className="fw-semibold mb-2">
                      Current affairs — daily reading, monthly consolidation
                    </div>
                    <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                      Current affairs is tested heavily in both Prelims and Mains.
                      Read a quality newspaper daily (The Hindu or Indian Express),
                      with a focus on national and international policy, economy, and
                      environment. Every month, consolidate what you read into a
                      structured summary. Don't let it pile up — review it actively.
                    </p>
                  </div>

                  <div>
                    <div
                      className="small text-muted text-uppercase fw-semibold mb-2 gradient-text"
                      style={{ letterSpacing: ".08em" }}
                    >
                      Step 4
                    </div>
                    <div className="fw-semibold mb-2">
                      Answer writing for Mains — start earlier than you think
                    </div>
                    <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                      The Mains exam is entirely descriptive — your ability to write
                      structured, analytical answers under time pressure is what separates
                      ranks. Start practising answer writing from the first year of
                      preparation, not just before the exam. Write daily. Get feedback.
                      Quality and structure matter more than volume.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-4" />

      {/* The Three Stages — visual breakdown */}
      <section className="pt-lg-5 pb-lg-5">
        <div className="container">
          <SectionTitle
            icon={<Target size={18} className="text-danger" />}
            title="The Three Stages of UPSC CSE"
            subtitle="Each stage is a filter — understand what each one tests and how to approach it."
          />

          <div className="mt-4 mt-lg-5">
            <div className="row g-4">

              {/* Prelims */}
              <div className="col-lg-4">
                <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                  <div className="fw-bold d-flex align-items-center gap-2 mb-3">
                    <span
                      className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                      style={{
                        width: 28,
                        height: 28,
                        background: "var(--bs-primary)",
                        fontSize: 13,
                        flexShrink: 0,
                      }}
                    >
                      1
                    </span>
                    Preliminary Examination
                  </div>

                  <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
                    A screening test. Only marks from <strong>GS Paper I</strong> count —
                    CSAT (Paper II) is qualifying only (33% needed). Prelims score is not
                    counted in final merit.
                  </div>

                  <ul className="small text-muted mb-3" style={{ lineHeight: 2 }}>
                    <li><strong>GS Paper I:</strong> History, Geography, Polity, Economy, Environment, Science & Tech, Current Affairs</li>
                    <li><strong>CSAT Paper II:</strong> Reading comprehension, reasoning, basic numeracy (qualifying)</li>
                    <li><strong>Format:</strong> MCQ with ⅓ negative marking</li>
                    <li><strong>Goal:</strong> Clear the cut-off to qualify for Mains</li>
                  </ul>
                </div>
              </div>

              {/* Mains */}
              <div className="col-lg-4">
                <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                  <div className="fw-bold d-flex align-items-center gap-2 mb-3">
                    <span
                      className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                      style={{
                        width: 28,
                        height: 28,
                        background: "var(--bs-success)",
                        fontSize: 13,
                        flexShrink: 0,
                      }}
                    >
                      2
                    </span>
                    Main Examination
                  </div>

                  <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
                    The most important stage. 9 papers over several days — all descriptive.
                    7 papers count for merit; 2 are qualifying. This is where ranks are
                    made.
                  </div>

                  <ul className="small text-muted mb-3" style={{ lineHeight: 2 }}>
                    <li><strong>Essay Paper:</strong> 2 essays on diverse topics (250 marks)</li>
                    <li><strong>GS I–IV:</strong> History, Society, Governance, Ethics (250 marks each)</li>
                    <li><strong>Optional Papers:</strong> 2 papers from 1 chosen optional subject (250 + 250 marks)</li>
                    <li><strong>Qualifying:</strong> Indian Language paper + English paper</li>
                  </ul>
                </div>
              </div>

              {/* Interview */}
              <div className="col-lg-4">
                <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                  <div className="fw-bold d-flex align-items-center gap-2 mb-3">
                    <span
                      className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                      style={{
                        width: 28,
                        height: 28,
                        background: "var(--bs-warning)",
                        fontSize: 13,
                        flexShrink: 0,
                      }}
                    >
                      3
                    </span>
                    Personality Test (Interview)
                  </div>

                  <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
                    Conducted by a UPSC board. Worth 275 marks — a significant portion
                    of the final merit. Tests intellectual curiosity, balance of judgement,
                    and suitability for civil service.
                  </div>

                  <ul className="small text-muted mb-3" style={{ lineHeight: 2 }}>
                    <li>Based on your Detailed Application Form (DAF) — be honest and thorough</li>
                    <li>Questions span current affairs, your background, optional subject, and opinion-based scenarios</li>
                    <li>There are no right or wrong answers — clarity of thought and honesty matter</li>
                    <li>Final rank = Mains marks + Interview marks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-4" />

      {/* Optional Subject */}
      <section className="mt-4 mt-md-5">
        <div className="container">
          <SectionTitle
            icon={<BookOpen size={18} className="text-success" />}
            title="Choosing Your Optional Subject"
            subtitle="One of the most important decisions in your UPSC preparation — choose carefully."
          />

          <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm">
            <p className="text-muted mb-4" style={{ lineHeight: 1.9 }}>
              The optional subject contributes <strong>500 marks</strong> (2 papers ×
              250) to your Mains score — a significant chunk of the total 1750 marks.
              Choosing the right optional can meaningfully improve your rank. There is
              no single "best" optional — the right choice depends on your background,
              genuine interest, and availability of good resources.
            </p>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="fw-semibold mb-2">Factors to consider</div>
                <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
                  <li>
                    <strong>Your graduation subject:</strong> If you studied Economics,
                    History, or Political Science, leveraging that background saves time
                  </li>
                  <li>
                    <strong>Overlap with GS:</strong> Optionals like History, Geography,
                    PSIR, Sociology have strong overlap with General Studies papers
                  </li>
                  <li>
                    <strong>Scoring potential:</strong> Some optionals (Anthropology,
                    Medical Science, Law) have historically good scoring patterns — but
                    this changes over years
                  </li>
                  <li>
                    <strong>Resource availability:</strong> Choose a subject with good
                    coaching material, previous year papers, and guidance available
                  </li>
                </ul>
              </div>

              <div className="col-md-6">
                <div className="fw-semibold mb-2">Commonly chosen optionals</div>
                <div className="row g-2">
                  {[
                    "History",
                    "Geography",
                    "Political Science & IR",
                    "Sociology",
                    "Public Administration",
                    "Anthropology",
                    "Economics",
                    "Philosophy",
                    "Psychology",
                    "Law",
                  ].map((opt) => (
                    <div key={opt} className="col-6">
                      <div
                        className="small rounded-3 px-3 py-2 border text-muted"
                        style={{ background: "#fafafa" }}
                      >
                        {opt}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check */}
      <section className="mt-4 mt-md-5">
        <div className="container">
          <SectionTitle
            icon={<TrendingUp size={18} className="text-warning" />}
            title="What Civil Services Preparation Actually Demands"
            subtitle="An honest picture before you commit to this path."
          />

          <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm">
            <p className="text-muted mb-4" style={{ lineHeight: 1.9 }}>
              Civil services is one of the most rewarding careers in India — but
              the preparation path is genuinely demanding and uncertain. Understanding
              what it actually requires helps you make an informed decision and prepare
              more effectively if you do choose it.
            </p>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="fw-semibold mb-2">What the journey typically looks like</div>
                <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
                  <li>
                    Most successful candidates prepare for <strong>1.5–3 years</strong>{" "}
                    before clearing, with many taking 2–3 attempts
                  </li>
                  <li>
                    The Prelims cut-off varies each year — clearing it is not guaranteed
                    even with solid preparation
                  </li>
                  <li>
                    Mains and Interview preparation require different skills — analytical
                    writing and communication, not just knowledge
                  </li>
                  <li>
                    Most aspirants study 6–10 hours daily during the preparation period
                  </li>
                </ul>
              </div>

              <div className="col-md-6">
                <div className="fw-semibold mb-2">What helps aspirants succeed</div>
                <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
                  <li>
                    A clear, structured study plan with regular revision — not just
                    coverage of new material
                  </li>
                  <li>
                    Answer writing practice from the very first year — not as an
                    afterthought before Mains
                  </li>
                  <li>
                    Peer groups and mentors who can give honest feedback on answers
                    and strategy
                  </li>
                  <li>
                    Emotional stability and a support system — the preparation period
                    is long and mentally demanding
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <LinkRow
                label="Civil Services — Career Overview"
                href="/career/by-profession/civil-services"
              />
            </div>
          </div>
        </div>
      </section>
      
       
    </div>
     </FrontendLayout>
  );
}
