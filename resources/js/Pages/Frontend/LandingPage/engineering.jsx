"use client";

import React from "react";

import { motion } from "framer-motion";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from "@/Layouts/FrontendLayout";

import {
  Cpu,
  GraduationCap,
  FileText,
  Building2,
  BadgeCheck,
  ArrowRight,
  ClipboardList,
  Code,
  Wrench,
  Zap,
  Layers,
  PenTool,
  FlaskConical,
} from "lucide-react";

/**
 * Engineering Landing Page — Complete Guide
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

export default function EngineeringLandingPage() {
  return (

     <FrontendLayout>
          <HeroInner
            title="Career Guide - Engineering & Technology"
            breadcrumb="Career Guide - Engineering & Technology"
            description="Here you can explore all medical-related links."
          />

    <div className="pb-5">

      

      {/* HERO */}
      <div className="w-100 nitLightGradient">
        <div className="container py-4 py-md-5">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div style={{ maxWidth: 720 }}>
              <h1 className="section-heading mb-2">
                Engineering & Technology{" "}
                <span className="gradient-text">Career Guide</span>
              </h1>

              <div className="text-muted fw-semibold mb-3">
                Courses, Entrance Exams, Colleges & Career Scope — A Complete Roadmap
              </div>

              <p className="text-muted mb-3" style={{ lineHeight: 1.7 }}>
                Planning a career in engineering can feel overwhelming — B.Tech, Diploma,
                Polytechnic, dozens of branches, entrance exams like <b>JEE Main</b>,{" "}
                <b>WBJEE</b>, IIT vs NIT vs state colleges, and counselling rounds.
                This page brings everything together in one place.
              </p>

              <p className="text-muted mb-0" style={{ lineHeight: 1.7 }}>
                Whether you're exploring options after <b>Class 10</b> (Polytechnic route)
                or preparing seriously after <b>Class 12 (PCM)</b> for a B.Tech degree,
                you'll find clear pathways, branch choices, exam guidance, college types,
                and direct links to detailed pages across the portal — so you can plan
                your next step with confidence.
              </p>
            </div>

            {/* mini stats */}
            <div className="d-grid gap-2" style={{ minWidth: 260 }}>
              <div className="p-3 rounded-4 bg-white border shadow-sm">
                <div className="small text-muted">Most common entrance</div>
                <div className="fw-bold d-flex align-items-center gap-2">
                  <ClipboardList size={16} className="text-primary" />
                  JEE Main / WBJEE
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
                  icon={<GraduationCap size={18} className="text-primary" />}
                  title="After Class 12 • Engineering"
                  desc="Step-by-step pathway after 12 for B.Tech/B.E."
                  href="/careers/after-class-12-engineering"
                />
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <QuickLink
                  icon={<Wrench size={18} className="text-warning" />}
                  title="Polytechnic / Diploma"
                  desc="3-year diploma after Class 10 — job-ready fast."
                  href="/courses/diploma-in-engineering-polytechnic"
                />
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <QuickLink
                  icon={<Cpu size={18} className="text-success" />}
                  title="B.Tech Programs"
                  desc="All B.Tech/B.E. branches and specialisations."
                  href="/courses/btech-be-programs"
                />
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <QuickLink
                  icon={<Building2 size={18} className="text-danger" />}
                  title="IITs / NITs / IIITs"
                  desc="Top national institutes and admission routes."
                  href="/colleges/iits-indian-institutes-of-technology"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          JEE — Detailed Section
      ========================= */}
      <section className="py-5 py-lg-6">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-9">
              <div className="mb-4 mb-lg-5">
                <h2 className="section-heading mb-3">
                  <span className="gradient-text">JEE:</span> The Main Engineering Entrance Exam
                </h2>

                <p className="text-muted mb-0">
                  JEE (Joint Entrance Examination) is the primary national-level entrance used for
                  admission into <strong>B.Tech / B.E.</strong> programmes at NITs, IIITs, GFTIs,
                  and hundreds of state and private engineering colleges. JEE Advanced — attempted
                  only by top JEE Main scorers — is the sole gateway to the{" "}
                  <strong>IITs</strong>. If your goal is a quality engineering seat, especially in
                  a government or centrally-funded institute, JEE preparation is your most important step.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-start">
            <div className="col-lg-12">
              <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm mb-4 mb-lg-5">

                {/* Top Quick Facts */}
                <div className="row g-4 mb-4">
                  <div className="col-md-4">
                    <div
                      className="small text-uppercase text-muted fw-semibold mb-1 gradient-text"
                      style={{ letterSpacing: ".08em" }}
                    >
                      Subjects
                    </div>
                    <div className="fw-semibold fs-6">
                      Physics • Chemistry • Mathematics
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div
                      className="small text-uppercase text-muted fw-semibold mb-1 gradient-text"
                      style={{ letterSpacing: ".08em" }}
                    >
                      Question Type
                    </div>
                    <div className="fw-semibold fs-6">MCQ + Numerical (CBT)</div>
                  </div>

                  <div className="col-md-4">
                    <div
                      className="small text-uppercase text-muted fw-semibold mb-1 gradient-text"
                      style={{ letterSpacing: ".08em" }}
                    >
                      Used For
                    </div>
                    <div className="fw-semibold fs-6">
                      UG Engineering Admissions
                    </div>
                  </div>
                </div>

                <hr className="my-4" />

                {/* Purpose */}
                <div className="mb-4">
                  <div
                    className="small text-uppercase text-muted fw-semibold mb-2 gradient-text"
                    style={{ letterSpacing: ".08em" }}
                  >
                    Purpose
                  </div>
                  <p className="mb-0 text-muted" style={{ lineHeight: 1.9 }}>
                    Admission to <strong>B.Tech / B.E.</strong> at NITs, IIITs, and GFTIs (JEE Main).
                    Top scorers in JEE Main qualify for <strong>JEE Advanced</strong> — the only route
                    to IIT admissions. Many state and private colleges also accept JEE Main scores
                    directly or use it as a benchmark.
                  </p>
                </div>

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
                      <div className="fw-semibold mb-1">General Category</div>
                      <div className="small text-muted">
                        Passed Class 12 with Physics, Chemistry & Mathematics<br />
                        Maximum 2 consecutive attempts from the year of passing
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="fw-semibold mb-1">SC / ST / PWD</div>
                      <div className="small text-muted">
                        Passed Class 12 with PCM<br />
                        Relaxation in qualifying marks as per NTA norms
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="fw-semibold mb-1">JEE Advanced</div>
                      <div className="small text-muted">
                        Must be in top 2.5 lakh of JEE Main<br />
                        Maximum 2 attempts in consecutive years
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
                  <div className="fw-semibold">Online Application Mode (NTA)</div>
                </div>

                <hr className="my-4" />

                {/* Official websites */}
                <div className="d-flex flex-wrap align-items-center gap-4">
                  <div>
                    <div className="small text-muted">JEE Main — Official Website</div>
                    <a
                      href="https://jeemain.nta.nic.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1 mt-1"
                    >
                      <span className="small">https://jeemain.nta.nic.in/</span>
                    </a>
                  </div>
                  <div>
                    <div className="small text-muted">JEE Advanced — Official Website</div>
                    <a
                      href="https://jeeadv.ac.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="iitWebsiteLink d-inline-flex align-items-center gap-1 mt-1"
                    >
                      <span className="small">https://jeeadv.ac.in/</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* What JEE unlocks */}
              <div className="mb-4 mb-lg-5">
                <h3 className="h5 fw-semibold mb-3">What JEE unlocks for you</h3>
                <p className="text-muted" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                  JEE is not just "one exam" — it is a tiered gateway to multiple engineering
                  pathways. Your JEE Main score opens doors to NITs, IIITs, and state colleges,
                  while a top score in JEE Advanced gives access to the IITs — India's most
                  prestigious engineering institutions.
                </p>

                <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
                  <li>
                    <strong>NITs</strong> (National Institutes of Technology) — centrally funded,
                    excellent placements across all branches
                  </li>
                  <li>
                    <strong>IIITs</strong> (Information Technology Institutes) — strong in CSE/IT
                    and related fields
                  </li>
                  <li>
                    <strong>GFTIs</strong> (Govt. Funded Technical Institutes) — affordable, quality
                    engineering education
                  </li>
                  <li>
                    <strong>IITs</strong> (via JEE Advanced) — top-ranked globally, strongest
                    research and industry connections
                  </li>
                  <li>
                    State and private colleges that accept JEE Main as a qualifying or direct
                    admission score
                  </li>
                </ul>
              </div>

              {/* Also relevant: WBJEE */}
              <div className="mb-4 mb-lg-5">
                <h3 className="h5 fw-semibold mb-3">
                  Also relevant: WBJEE (West Bengal State Exam)
                </h3>
                <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                  WBJEE is conducted by the West Bengal Joint Entrance Examinations Board for
                  admission to B.Tech / B.E. programmes in state universities and private
                  engineering colleges in West Bengal. Students from West Bengal should
                  plan for both JEE Main and WBJEE simultaneously — the syllabi overlap
                  significantly and preparing for one strengthens the other.
                </p>
              </div>

              {/* Who should focus */}
              <div className="mb-4 mb-lg-5">
                <h3 className="h5 fw-semibold mb-3">Who should focus on JEE seriously</h3>
                <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                  JEE rewards consistent, concept-based preparation. It is best suited for
                  students who are strong in Mathematics and willing to practise problem-solving
                  regularly over a 1–2 year preparation cycle.
                </p>

                <div className="mt-3">
                  <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
                    <li>You enjoy problem-solving in Physics and Mathematics</li>
                    <li>You can maintain a steady daily study routine for 12–24 months</li>
                    <li>You are aiming for a government or top-ranked engineering college</li>
                    <li>
                      You can handle concept-heavy questions and timed mock tests without
                      losing focus
                    </li>
                  </ul>
                </div>
              </div>

              {/* Prep plan */}
              <div>
                <h3 className="h5 fw-semibold mb-3">
                  A practical JEE preparation plan (simple & effective)
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
                      Clear your Class 11 concepts first — the base matters most
                    </div>
                    <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                      Most JEE failures happen because Class 11 concepts (especially in Physics
                      and Mathematics) are weak. Before moving to advanced topics or extra
                      materials, make sure your Class 11 NCERT and basic problem-solving
                      foundation is solid.
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
                      Daily problem practice — vary the difficulty level
                    </div>
                    <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                      Solve problems from all three subjects every day. Start with medium-level
                      questions, then gradually add harder ones. Do not skip Chemistry — it is
                      the most scoring subject and the easiest to improve quickly with regular
                      revision.
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
                      Full-length mock tests — start early, analyse every attempt
                    </div>
                    <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                      Attempt a full-length mock at least once every two weeks in the first
                      year, then increase frequency closer to the exam. Spend more time on
                      post-test analysis than on the test itself — understanding why an answer
                      was wrong is where real improvement happens.
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
                      Track weak topics — fix them before they compound
                    </div>
                    <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                      Keep a running list of topics where you consistently lose marks. Revisit
                      them weekly. In JEE, negative marking means that guessing on weak topics
                      costs you more than skipping. Knowing your weak areas and managing them
                      is as important as mastering your strong ones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-4" />

      {/* Choose Your Engineering Pathway */}
      <section className="pt-lg-5 pb-lg-5">
        <div className="container">
          <SectionTitle
            icon={<FileText size={18} className="text-success" />}
            title="Choose Your Engineering Pathway"
            subtitle="Pick your stage, then follow the most realistic path based on eligibility and exam requirements."
          />

          <div className="mt-4 mt-lg-5">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="fw-bold d-flex align-items-center gap-2 mb-2">
                  After Class 10th
                </div>
                <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
                  If you have completed Class 10, the Polytechnic / Diploma in Engineering
                  route is the most practical early entry into the engineering field. It is a
                  3-year programme that gives you job-ready technical skills and also acts as a
                  bridge to B.Tech (lateral entry) later.
                </p>

                <ul className="text-muted mb-3" style={{ lineHeight: 2 }}>
                  <li>
                    Best for: Students who want early employment or are not yet ready for
                    the JEE route
                  </li>
                  <li>
                    Good options: Diploma in Engineering (Civil, Mechanical, Electrical,
                    Electronics, Computer Science)
                  </li>
                  <li>
                    Next step: Choose a trade + shortlist polytechnic colleges + check
                    scholarship options
                  </li>
                </ul>

                <div className="d-flex gap-3 flex-wrap">
                  <LinkRow
                    label="Diploma in Engineering (Polytechnic)"
                    meta="Entry route"
                    href="/courses/diploma-in-engineering-polytechnic"
                  />
                  <LinkRow
                    label="Polytechnic Colleges"
                    meta="Colleges"
                    href="/colleges/polytechnic-colleges"
                  />
                  <LinkRow
                    label="After Class 10 Career Guidance"
                    meta="Stage"
                    href="/careers/after-class-10"
                  />
                </div>
              </div>

              <div className="col-lg-12 border-top pt-4 pt-lg-5 mt-lg-5 mt-4">
                <div className="fw-bold d-flex align-items-center gap-2 mb-2">
                  After Class 12th
                </div>
                <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
                  The standard route to an engineering degree starts after Class 12 with PCM
                  (Physics, Chemistry, Mathematics). JEE Main is the primary entrance exam, with
                  WBJEE for West Bengal state seats. Your rank determines the college and branch
                  you can get.
                </p>

                <ul className="text-muted mb-3" style={{ lineHeight: 2 }}>
                  <li>
                    Best for: PCM students targeting a B.Tech/B.E. degree from a good institute
                  </li>
                  <li>
                    Exam reality: JEE Main for NITs/IIITs/GFTIs; JEE Advanced for IITs;
                    WBJEE for WB state colleges
                  </li>
                  <li>
                    Backup-smart: Build Plan A (IIT/NIT via JEE), Plan B (state college via WBJEE),
                    Plan C (private college direct admission)
                  </li>
                </ul>

                <div className="d-flex gap-3 flex-wrap">
                  <LinkRow
                    label="After Class 12 • Engineering"
                    meta="Stage"
                    href="/careers/after-class-12-engineering"
                  />
                  <LinkRow
                    label="B.Tech / B.E Programs"
                    meta="UG"
                    href="/courses/btech-be-programs"
                  />
                  <LinkRow
                    label="National Level Exams"
                    meta="Exams"
                    href="/exams/national-level-eg-jee-main-jee-advanced"
                  />
                  <LinkRow
                    label="State Level Exams (WBJEE)"
                    meta="Exams"
                    href="/exams/state-level-wbjee-etc"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-4" />

      {/* Courses & Branches */}
      <section className="mt-4 mt-md-5">
        <div className="container">
          <SectionTitle
            icon={<Cpu size={18} className="text-primary" />}
            title="Courses & Branches"
            subtitle="Understand what each course family leads to, and which one matches your interest + strengths."
          />

          <div className="row g-3">
            <div className="col-12">
              <p className="text-muted mb-0" style={{ lineHeight: 1.9 }}>
                Engineering is not one career — it is a wide field with dozens of branches.
                The most in-demand tracks today span computer science, electronics, mechanical,
                civil, and electrical — but newer areas like data science, AI, and mechatronics
                are growing fast. Choose based on what genuinely interests you, not just
                current placement trends.
              </p>
            </div>

            {/* Card 1: Core B.Tech */}
            <div className="col-12 col-md-6">
              <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
                  <Cpu size={16} className="text-primary" />
                  Core Engineering — B.Tech / B.E.
                </div>
                <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
                  The standard 4-year undergraduate degree. Branches include Computer Science,
                  Electronics, Mechanical, Civil, Electrical, Chemical, and more.
                </div>
                <ul className="small text-muted" style={{ lineHeight: 2 }}>
                  <li>
                    <strong>Best for:</strong> Students targeting IITs / NITs / good private
                    colleges with strong placements
                  </li>
                  <li>
                    <strong>Main gate:</strong> JEE Main (NITs/IIITs) · JEE Advanced (IITs) ·
                    WBJEE (WB state)
                  </li>
                  <li>
                    <strong>Outcome:</strong> Engineer, software developer, analyst, researcher,
                    or higher studies (M.Tech/MBA)
                  </li>
                </ul>
                <div className="d-flex flex-wrap gap-3 mt-3">
                  <LinkRow label="B.Tech / B.E Programs" href="/courses/btech-be-programs" />
                  <LinkRow label="M.Tech (PG)" href="/courses/mtech" meta="PG" />
                </div>
              </div>
            </div>

            {/* Card 2: Polytechnic / Diploma */}
            <div className="col-12 col-md-6">
              <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
                  <Wrench size={16} className="text-warning" />
                  Polytechnic / Diploma (Early Entry)
                </div>
                <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
                  A 3-year diploma after Class 10 that provides practical, job-oriented
                  technical training. Also serves as a lateral entry pathway into B.Tech
                  (2nd year) later.
                </div>
                <ul className="small text-muted" style={{ lineHeight: 2 }}>
                  <li>
                    <strong>Best for:</strong> Students who want early employment or want to
                    enter engineering without the JEE pressure
                  </li>
                  <li>
                    <strong>Outcome:</strong> Junior engineer, technician, site supervisor, or
                    B.Tech via lateral entry
                  </li>
                  <li>
                    <strong>Good for:</strong> Faster employment vs the 4-year B.Tech route
                  </li>
                </ul>
                <div className="d-flex flex-wrap gap-3 mt-3">
                  <LinkRow
                    label="Diploma in Engineering (Polytechnic)"
                    href="/courses/diploma-in-engineering-polytechnic"
                  />
                  <LinkRow
                    label="Polytechnic Colleges"
                    href="/colleges/polytechnic-colleges"
                  />
                </div>
              </div>
            </div>

            {/* Card 3: CS, IT & Computer Applications */}
            <div className="col-12 col-md-6">
              <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
                  <Code size={16} className="text-success" />
                  CS, IT & Computer Applications
                </div>
                <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
                  Beyond B.Tech CSE, there are BCA, B.Sc CS/IT, and MCA pathways that lead
                  to software and tech careers — suitable even for students from non-PCM
                  backgrounds.
                </div>
                <ul className="small text-muted" style={{ lineHeight: 2 }}>
                  <li>
                    <strong>Best for:</strong> Students interested in software, data, AI,
                    web development, or IT
                  </li>
                  <li>
                    <strong>Note:</strong> BCA / B.Sc CS are good alternatives if JEE is not
                    the plan
                  </li>
                  <li>
                    <strong>PG option:</strong> MCA / M.Sc CS/IT for specialisation
                  </li>
                </ul>
                <div className="d-flex flex-wrap gap-3 mt-3">
                  <LinkRow label="BCA" href="/courses/bca" />
                  <LinkRow label="B.Sc Computer Science / IT" href="/courses/bsc-computer-science-it" />
                  <LinkRow label="MCA" href="/courses/mca" meta="PG" />
                </div>
              </div>
            </div>

            {/* Card 4: Architecture & Design */}
            <div className="col-12 col-md-6">
              <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
                  <PenTool size={16} className="text-danger" />
                  Architecture & Design
                </div>
                <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
                  B.Arch is a 5-year professional degree combining engineering and design.
                  Admission is via JEE Main (Paper 2) or NATA. It leads to careers in
                  architecture, urban planning, and construction.
                </div>
                <ul className="small text-muted" style={{ lineHeight: 2 }}>
                  <li>
                    <strong>Best for:</strong> Students with interest in design, space planning,
                    and built environments
                  </li>
                  <li>
                    <strong>Main gate:</strong> JEE Main Paper 2 / NATA
                  </li>
                  <li>
                    <strong>Outcome:</strong> Architect, urban planner, interior designer
                  </li>
                </ul>
                <div className="d-flex flex-wrap gap-3 mt-3">
                  <LinkRow label="B.Arch" href="/courses/barch" />
                  <LinkRow
                    label="Architecture Exams (NATA / AAT)"
                    href="/exams/architecture"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colleges & Institutes */}
      <section className="mt-4 mt-md-5">
        <div className="container">
          <SectionTitle
            icon={<Building2 size={18} className="text-primary" />}
            title="Colleges & Institutes"
            subtitle="Shortlist colleges by institute type, branch availability, location, and affordability."
          />

          <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm">
            <p className="text-muted mb-4" style={{ lineHeight: 1.9 }}>
              When choosing an engineering college, focus on: AICTE/UGC recognition,
              placement records for your target branch, lab and infrastructure quality,
              and total cost of attendance (fees + hostel + exam/counselling expenses).
              Tier of the institute matters for first jobs — but consistent academic
              performance matters more for long-term careers.
            </p>

            <div className="row g-3">
              <div className="col-md-6">
                <div className="fw-semibold mb-2">Browse listings</div>
                <div className="d-grid gap-2">
                  <LinkRow
                    label="IITs — Indian Institutes of Technology"
                    href="/colleges/iits-indian-institutes-of-technology"
                    meta="National"
                  />
                  <LinkRow
                    label="NITs — National Institutes of Technology"
                    href="/colleges/nits-national-institutes-of-technology"
                    meta="National"
                  />
                  <LinkRow
                    label="IIITs — Information Technology Institutes"
                    href="/colleges/iits-indian-institutes-of-technology"
                    meta="National"
                  />
                  <LinkRow
                    label="Engineering Colleges"
                    href="/colleges/engineering-colleges"
                    meta="By Field"
                  />
                  <LinkRow
                    label="Polytechnic Colleges (Diploma)"
                    href="/colleges/polytechnic-colleges"
                    meta="Diploma"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="fw-semibold mb-2">Shortlisting checklist</div>
                <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
                  <li>Is the institute AICTE-approved and university-affiliated?</li>
                  <li>Placement records for your specific branch (not just overall)</li>
                  <li>Lab quality, industry tie-ups, and internship support</li>
                  <li>Total cost: fees + hostel + commute + equipment</li>
                  <li>
                    Location and connectivity — affects internship and job opportunities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>

     </FrontendLayout>
  );
}
