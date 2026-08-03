"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from "@/Layouts/FrontendLayout";

import { motion } from "framer-motion";
import {
  Stethoscope,
  HeartPulse,
  GraduationCap,
  FileText,
  Building2,
  BadgeCheck,
  ArrowRight,
  Activity,
  Hospital,
  Syringe,
  Pill,
  Leaf,
  ClipboardList,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  CalendarDays,
  Target,
  MapPin,
} from "lucide-react";

/**
 * Medical Landing Page — Complete Guide
 * Design goals:
 * - Student-friendly, scannable sections
 * - Quick links to existing portal pages
 * - Bootstrap grid + your tokens (globals.css)
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

export default function MedicalLandingPage() {



  return (

     <FrontendLayout>
          <HeroInner
            title="Medical - A Complete Guide"
            breadcrumb="Medical - A Complete Guide"
            description="Here you can explore all medical-related links."
          />


    <div className="pb-5">

       
    
      {/* HERO */}
      <div
  className="w-100 nitLightGradient">
  <div className="container py-4 py-md-5">
    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
      <div style={{ maxWidth: 720 }}>
        

        <h1 className="section-heading mb-2">
          Medical & Healthcare <span className="gradient-text">Career Guide</span>
        </h1>

        <div className="text-muted fw-semibold mb-3">
          Courses, Entrance Exams, Colleges & Career Scope — A Complete Roadmap
        </div>

        <p className="text-muted mb-3" style={{ lineHeight: 1.7 }}>
          Planning a career in the medical field can feel confusing — MBBS, Nursing,
          Paramedical, Pharmacy, AYUSH, eligibility rules, counselling, and entrance
          exams like <b>NEET</b>. This page is built to simplify everything in one place.
        </p>

        <p className="text-muted mb-0" style={{ lineHeight: 1.7 }}>
          Whether you’re exploring options after <b>Class 10</b> or preparing seriously
          after <b>Class 12 (Science)</b>, you’ll find clear pathways, course choices,
          exam guidance, institute types, and direct links to detailed pages across the portal —
          so you can decide your next step with confidence.
        </p>
      </div>

      {/* mini stats */}
      <div className="d-grid gap-2" style={{ minWidth: 260 }}>
        <div className="p-3 rounded-4 bg-white border shadow-sm">
          <div className="small text-muted">Most common entrance</div>
          <div className="fw-bold d-flex align-items-center gap-2">
            <ClipboardList size={16} className="text-primary" />
            NEET (UG)
          </div>
        </div>

        <div className="p-3 rounded-4 bg-white border shadow-sm">
          <div className="small text-muted">Need guidance?</div>

          <div className="fw-bold d-flex align-items-center gap-2">
            <BadgeCheck size={16} className="text-success" />
            Counselor Support
          </div>

          <a
            href={route('more.counsellorsDirectory')}
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
            title="After Class 12 • Medical"
            desc="Exact step-by-step pathway after 12 for medical."
            href="/careers/after-class-12-medical"
          />
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <QuickLink
            icon={<Activity size={18} className="text-success" />}
            title="Nursing"
            desc="ANM/GNM/B.Sc/M.Sc Nursing pathway."
            href="/courses/nursing-anm-gnm-bsc-nursing"
          />
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <QuickLink
            icon={<Syringe size={18} className="text-danger" />}
            title="Paramedical"
            desc="Diploma after 10 + UG after 12 options."
            href="/courses/ug-paramedical-degrees" 
          />
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <QuickLink
            icon={<Pill size={18} className="text-warning" />}
            title="Pharmacy"
            desc="D.Pharm/B.Pharm/ M.Pharm/Pharm.D."
            href="/courses/pharmacy-dpharm-bpharm-mpharm-pharmd"
          />
        </div>
      </div>
    </div>
  </div>
</div>

{/* =========================
    NEET – Detailed Section (Minimal + Spacious)
    Link: /exams/medical/national
========================= */}
<section className="py-5 py-lg-6">
  <div className="container">
    {/* Header */}
    <div className="row justify-content-start">
      <div className="col-lg-9">
        <div className="mb-4 mb-lg-5">
          

          <h2 className="section-heading mb-3" >
           <span className="gradient-text"> NEET: </span> The Main Medical Entrance Exam
          </h2>

          <p className="text-muted mb-0  ">
            NEET is the single national-level entrance examination used for admission into
            <strong> MBBS</strong>, <strong>BDS</strong>, <strong>AYUSH</strong> (BAMS/BHMS/BUMS),
            and other undergraduate medical pathways in India. If your goal is a medical seat—especially
            in government colleges—NEET preparation becomes your most important step.
          </p>
        </div>
      </div>
    </div>

    {/* Main body – calm layout */}
    <div className="row justify-content-start">
      <div className="col-lg-12">
        {/* Soft info strip (not a heavy card) */}
       <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm mb-4 mb-lg-5">

        {/* Top Quick Facts */}
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <div className="small text-uppercase text-muted fw-semibold mb-1 gradient-text" style={{ letterSpacing: ".08em" }}>
              Subjects
            </div>
            <div className="fw-semibold fs-6">
              Physics • Chemistry • Biology
            </div>
          </div>

          <div className="col-md-4">
            <div className="small text-uppercase text-muted fw-semibold mb-1 gradient-text" style={{ letterSpacing: ".08em" }}>
              Question Type
            </div>
            <div className="fw-semibold fs-6">
              MCQ (Objective)
            </div>
          </div>

          <div className="col-md-4">
            <div className="small text-uppercase text-muted fw-semibold mb-1 gradient-text" style={{ letterSpacing: ".08em" }}>
              Used For
            </div>
            <div className="fw-semibold fs-6">
              UG Medical Admissions
            </div>
          </div>
        </div>

        <hr className="my-4" />

        {/* Purpose */}
        <div className="mb-4">
          <div className="small text-uppercase text-muted fw-semibold mb-2 gradient-text" style={{ letterSpacing: ".08em" }}>
            Purpose
          </div>
          <p className="mb-0 text-muted" style={{ lineHeight: 1.9 }}>
            Admission to <strong>MBBS</strong> (primary purpose). Also used for
            <strong> BDS, AYUSH</strong> and other undergraduate medical seats as
            notified by the competent authorities.
          </p>
        </div>

        {/* Eligibility */}
        <div className="mb-4">
          <div className="small text-uppercase text-muted fw-semibold mb-2 gradient-text" style={{ letterSpacing: ".08em" }}>
            Eligibility
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="fw-semibold mb-1">General Category</div>
              <div className="small text-muted">
                Age 17–25 years<br />
                Minimum 50% in Physics, Chemistry & Biology (10+2 level)
              </div>
            </div>

            <div className="col-md-4">
              <div className="fw-semibold mb-1">SC / ST / OBC</div>
              <div className="small text-muted">
                Age 17–25 years<br />
                Minimum 40% in Physics, Chemistry & Biology (10+2 level)
              </div>
            </div>

            <div className="col-md-4">
              <div className="fw-semibold mb-1">PWD Category</div>
              <div className="small text-muted">
                Minimum 45% in Physics, Chemistry & Biology
              </div>
            </div>
          </div>
        </div>

        {/* Apply */}
        <div className="mb-4">
          <div className="small text-uppercase text-muted fw-semibold mb-2 gradient-text" style={{ letterSpacing: ".08em" }}>
            Apply
          </div>
          <div className="fw-semibold">Online Application Mode</div>
        </div>

        <hr className="my-4" />

        {/* Official Website */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div>
            <div className="small text-muted">Official Website</div>
            <a
              href="https://neet.nta.nic.in/"
              target="_blank"
              rel="noreferrer"
              className="iitWebsiteLink d-inline-flex align-items-center gap-1 mt-1"
            >
              <span className="small">https://neet.nta.nic.in/</span>
            </a>
          </div>

        </div>

      </div>


        {/* Section: what NEET unlocks */}
        <div className="mb-4 mb-lg-5">
          <h3 className="h5 fw-semibold mb-3">What NEET unlocks for you</h3>
          <p className="text-muted" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
            NEET is not just “one exam”—it is the gateway to multiple medical and health science pathways.
            A good NEET score can open opportunities in government and private medical colleges, and also
            supports admissions into AYUSH programmes depending on counselling rules.
          </p>

          <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
            <li><strong>MBBS</strong> (Doctor) and <strong>BDS</strong> (Dental) admissions</li>
            <li><strong>AYUSH</strong> programmes such as BAMS / BHMS / BUMS (as per counselling)</li>
            <li>Broader health and allied UG options where NEET is accepted (varies by year/rules)</li>
            <li>All India & State counselling routes for seat allocation</li>
          </ul>
        </div>

        {/* Section: who should focus */}
        <div className="mb-4 mb-lg-5">
          <h3 className="h5 fw-semibold mb-3">Who should focus on NEET seriously</h3>
          <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
            NEET suits students who are comfortable with Biology and can maintain consistency over a long
            preparation cycle. It rewards disciplined revision and repeated practice—not last-minute study.
          </p>

          <div className="mt-3">
            <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
              <li>You are interested in medical careers and patient-focused work</li>
              <li>You can follow a steady routine for 12–18 months (even 2–4 hours daily)</li>
              <li>You are willing to revise NCERT multiple times (especially Biology)</li>
              <li>You can handle mock tests + improvement tracking without losing motivation</li>
            </ul>
          </div>
        </div>

        {/* Section: prep plan – detailed but airy */}
        <div className="">
          <h3 className="h5 fw-semibold mb-3">A practical NEET preparation plan (simple & effective)</h3>

          <div className="d-grid gap-4">
            <div>
              <div className="small text-muted text-uppercase fw-semibold mb-2 gradient-text" style={{ letterSpacing: ".08em" }}>
                Step 1
              </div>
              <div className="fw-semibold mb-2">Start with NCERT — build your foundation</div>
              <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                For most students, the fastest improvement comes when NCERT is mastered properly first.
                Read, underline, revise, and test yourself repeatedly. Biology NCERT should become your
                strongest area before adding extra materials.
              </p>
            </div>

            <div>
              <div className="small text-muted text-uppercase fw-semibold mb-2 gradient-text" style={{ letterSpacing: ".08em" }}>
                Step 2
              </div>
              <div className="fw-semibold mb-2">Daily MCQs — practice is non-negotiable</div>
              <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                Do a fixed set of MCQs daily from all three subjects. The goal is not just volume—it’s
                accuracy and learning from mistakes. When a chapter feels weak, revise it first, then practice.
              </p>
            </div>

            <div>
              <div className="small text-muted text-uppercase fw-semibold mb-2 gradient-text" style={{ letterSpacing: ".08em" }}>
                Step 3
              </div>
              <div className="fw-semibold mb-2">Weekly mock tests — measure your progress</div>
              <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                A weekly mock improves time management and helps you understand your exam temperament.
                Always spend time analyzing the mock—most growth happens during analysis, not during the test.
              </p>
            </div>

            <div>
              <div className="small text-muted text-uppercase fw-semibold mb-2 gradient-text" style={{ letterSpacing: ".08em" }}>
                Step 4
              </div>
              <div className="fw-semibold mb-2">Maintain a “mistake notebook”</div>
              <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                Write down repeated errors: the concept, the correct approach, and why your answer was wrong.
                Revising your mistakes every week gives faster score improvement than re-reading chapters.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom block: checklist moved here (formerly right block) */}
        

        {/* Extra spacing below section */}
      </div>
    </div>
  </div>
</section>
<hr className="my-4" />

     <section className="pt-lg-5 pb-lg-5">
      <div className="container">
  <SectionTitle
    icon={<FileText size={18} className="text-success" />}
    title="Choose Your Medical Pathway"
    subtitle="Pick your stage, then follow the most realistic path based on eligibility and exam requirements."
  />

  <div className=" mt-4 mt-lg-5">
    <div className="row g-4">
      <div className="col-lg-12">
        <div className="fw-bold d-flex align-items-center gap-2 mb-2">
         After Class 10th
        </div>
        <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
          If you are still early in your journey, the best strategy is to choose a
          job-linked healthcare route first (diploma/vocational), then upgrade later.
          This helps you build skills and income early, while keeping growth options open.
        </p>

        <ul className="text-muted mb-3" style={{ lineHeight: 2 }}>
          <li>Best for: Students exploring healthcare but not ready for NEET yet</li>
          <li>Good options: Diploma Paramedical, D.Pharm, vocational healthcare trades</li>
          <li>Next step: Choose a course + shortlist colleges + check scholarship support</li>
        </ul>

        <div className="d-flex gap-3 flex-wrap">
          <LinkRow label="Diploma in Paramedical" meta="Entry route" href="courses/diploma-in-paramedical" />
          <LinkRow label="Diploma in Pharmacy (D.Pharm)" meta="Entry route" href="courses/diploma-in-pharmacy-dpharm" />
          <LinkRow label="After Class 10 Career Guidance" meta="Stage" href="careers/after-class-10" />
        </div>
      </div>

      <div className="col-lg-12 border-top pt-4 pt-lg-5 mt-lg-5 mt-4">
        <div className="fw-bold d-flex align-items-center gap-2 mb-2">
          After Class 12th
        </div>
        <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
          Most medical degrees begin after higher secondary (PCB).
          If your goal is MBBS or BDS, NEET becomes central. If MBBS is uncertain,
          allied health and nursing offer strong careers with faster employability.
        </p>

        <ul className="text-muted mb-3" style={{ lineHeight: 2 }}>
          <li>Best for: PCB students targeting degree-level healthcare careers</li>
          <li>Exam reality: NEET is critical for MBBS/BDS and often influences other admissions</li>
          <li>Backup-smart: Build Plan A (MBBS), Plan B (Nursing/Allied), Plan C (Pharmacy/AYUSH)</li>
        </ul>

        <div className="d-flex gap-3 flex-wrap">
          {/* <LinkRow label="After Class 12 • Medical/Paramedical" meta="Stage" href={route('After.Class.Twelve.Medical')} />
          <LinkRow label="MBBS & Core Medical Degrees" meta="UG" href={route('courses.medical.mbbs')} />
          <LinkRow label="UG Paramedical Degrees" meta="UG" href={route('courses.paramedical.ug')} />
          <LinkRow label="Allied Health Sciences" meta="UG/PG" href={route('courses.medical.alliedHealth')} /> */}
        </div>
      </div>
    </div>
  </div>
  </div>
</section>
<hr className="my-4 " />
<section className="mt-4 mt-md-5 ">
  <div className="container">
  <SectionTitle
    icon={<HeartPulse size={18} className="text-danger" />}
    title="Courses & Branches"
    subtitle="Understand what each course family leads to, and which one matches your interest + strengths."
  />

  <div className="row g-3">
    <div className="col-12">
        <p className="text-muted mb-0" style={{ lineHeight: 1.9 }}>
          Healthcare careers are not only MBBS. The medical domain has multiple high-demand tracks:
          clinical roles, hospital operations, diagnostics, pharmacy, and community health.
          Choose based on your interest: patient care, lab/technology, medicines, or alternative systems.
        </p>
    </div>

    {/* Keep your 4 cards but add “What you become” and “Best for” */}
    <div className="col-12 col-md-6">
      <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
        <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
          <Hospital size={16} className="text-danger" />
          Core Medical (Doctor Route)
        </div>
        <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
          This is the doctor pathway: MBBS is the primary entry route. PG (MD/MS) comes after MBBS.
        </div>
        <ul className="small text-muted" style={{ lineHeight: 2 }}>
          <li><strong>Best for:</strong> Students strongly committed to long preparation + clinical life</li>
          <li><strong>Main gate:</strong> NEET (UG)</li>
          <li><strong>Outcome:</strong> Doctor, specialist (after PG), hospital practice</li>
        </ul>
        <div className="d-flex flex-wrap gap-3 mt-3">
          {/* <LinkRow label="MBBS & Core Medical Degrees" href={route('courses.medical.mbbs')} /> */}
          {/* <LinkRow label="PG Medical Courses" href="/courses/medical/pg" meta="PG" /> */}
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6">
      <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
        <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
          <Activity size={16} className="text-success" />
          Nursing & Allied (High Demand)
        </div>
        <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
          Nursing is a strong, stable career in hospitals, public health and overseas opportunities.
          Allied health is ideal for students interested in healthcare + technology.
        </div>
        <ul className="small text-muted" style={{ lineHeight: 2 }}>
          <li><strong>Best for:</strong> Patient care mindset / hospital environment</li>
          <li><strong>Outcome:</strong> Nurse, clinical staff, allied health professional</li>
          <li><strong>Good for:</strong> Faster employability vs MBBS</li>
        </ul>
        <div className="d-flex flex-wrap gap-3 mt-3">
          {/* <LinkRow label="Nursing (ANM / GNM / B.Sc / M.Sc)" href={route('courses.nursing')} />
          <LinkRow label="Allied Health Sciences" href={route('courses.medical.alliedHealth')} /> */}
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6">
      <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
        <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
          <Syringe size={16} className="text-primary" />
          Paramedical (Job-Linked Skills)
        </div>
        <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
          Paramedical courses lead to roles like lab technician, radiology, OT technician,
          physiotherapy support and more. Many routes offer quicker entry into the workforce.
        </div>
        <div className="d-flex flex-wrap gap-3 mt-3">
          {/* <LinkRow label="Diploma Paramedical (Early entry)" href={route('courses.paramedical.diploma')} meta="After 10" />
          <LinkRow label="UG Paramedical (Degree track)" href={route('courses.paramedical.ug')} meta="After 12" /> */}
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6">
      <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
        <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
          <Pill size={16} className="text-warning" />
          Pharmacy & AYUSH (Alternative Tracks)
        </div>
        <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
          Pharmacy is for students interested in medicines, industry, hospital pharmacy and clinical roles.
          AYUSH is for those aligned with alternative systems and related healthcare careers.
        </div>
        <div className="d-flex flex-wrap gap-3 mt-3">
          {/* <LinkRow label="Pharmacy Programs" href={route('courses.pharmacy')} />
          <LinkRow label="AYUSH (Ayurveda, Homoeopathy, Unani, Siddha)" href={route('courses.ayush')} />
          <LinkRow label="Naturopathy & Yoga" href={route('courses.naturopathy.yoga')} /> */}
        </div>
      </div>
    </div>
  </div>
  </div>
</section>

<section className="mt-4 mt-md-5">
  <div className="container">
  <SectionTitle
    icon={<Building2 size={18} className="text-primary" />}
    title="Colleges & Institutes"
    subtitle="Shortlist colleges by course type, recognition, location, and affordability."
  />

  <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm">
    <p className="text-muted mb-4" style={{ lineHeight: 1.9 }}>
      While choosing a college, focus on recognition/approval, clinical exposure (for medical/nursing),
      lab infrastructure (for allied/paramedical), and total cost (fees + hostel + exam/counselling expenses).
    </p>

    <div className="row g-3">
      <div className="col-md-6">
        <div className="fw-semibold mb-2">Browse listings</div>
        <div className="d-grid gap-2">
          {/* <LinkRow label="AIIMS — Medical Institutes" href={route('colleges.aiims')} meta="National" />
          <LinkRow label="Medical & Paramedical Colleges" href={route('colleges.medical')} meta="By Field" />
          <LinkRow label="Nursing Colleges" href={route('colleges.nursing')} meta="By Field" />
          <LinkRow label="Pharmacy Colleges" href={route('colleges.pharmacy')} meta="By Field" /> */}
        </div>
      </div>

      <div className="col-md-6">
        <div className="fw-semibold mb-2">Shortlisting checklist</div>
        <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
          <li>Is the institute recognized/approved for the course?</li>
          <li>Clinical/hospital tie-up and exposure (medical/nursing/allied)</li>
          <li>Placement support or internship availability</li>
          <li>Total cost: fees + hostel + commute + instruments</li>
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
