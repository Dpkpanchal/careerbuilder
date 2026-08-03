// "use client";

// import React from "react";

// import { motion } from "framer-motion";
// import HeroInner from "@/Components/Frontend/Hero/HeroInner";
// import FrontendLayout from "@/Layouts/FrontendLayout";

// import {
//   TrendingUp,
//   GraduationCap,
//   FileText,
//   Building2,
//   BadgeCheck,
//   ArrowRight,
//   ClipboardList,
//   Briefcase,
//   BarChart2,
//   BookOpen,
//   CircleDollarSign,
//   Scale,
//   Award,
// } from "lucide-react";

// /**
//  * Commerce & Management Landing Page — Complete Guide
//  * Design mirrors: /landing-pages/medical.js
//  */

// const fadeUp = {
//   initial: { opacity: 0, y: 10 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, amount: 0.2 },
//   transition: { duration: 0.35 },
// };

// const QuickLink = ({ icon, title, desc, href }) => (
//   <a
//     href={href}
//     className="text-decoration-none d-block h-100"
//     style={{ color: "inherit" }}
//   >
//     <div
//       className="h-100 p-3 rounded-4 border bg-white shadow-sm"
//       style={{ borderColor: "rgba(0,0,0,.08)" }}
//     >
//       <div className="d-flex align-items-start gap-3">
//         <div
//           className="rounded-3 d-flex align-items-center justify-content-center"
//           style={{
//             width: 42,
//             height: 42,
//             background: "rgba(13,110,253,.08)",
//             border: "1px solid rgba(13,110,253,.15)",
//           }}
//         >
//           {icon}
//         </div>
//         <div className="flex-grow-1">
//           <div className="fw-semibold">{title}</div>
//           <div className="small text-muted">{desc}</div>
//           <div className="small fw-semibold text-primary mt-2 d-inline-flex align-items-center gap-1">
//             Explore <ArrowRight size={14} />
//           </div>
//         </div>
//       </div>
//     </div>
//   </a>
// );

// const LinkRow = ({ label, href, meta }) => (
//   <a
//     href={href}
//     className="d-flex align-items-center justify-content-between text-decoration-none px-3 py-2 rounded-3 linkRowHover"
//     style={{
//       border: "1px solid rgba(0,0,0,.08)",
//       background: "#fff",
//       color: "inherit",
//     }}
//   >
//     <div className="d-flex align-items-center gap-2">
//       <span className="fw-semibold">{label}</span>
//       {meta ? (
//         <span className="badge bg-light text-dark border">{meta}</span>
//       ) : null}
//     </div>
//     <ArrowRight size={16} className="text-muted" />
//   </a>
// );

// const SectionTitle = ({ icon, title, subtitle }) => (
//   <div className="d-flex align-items-start gap-3 mb-3">
//     <div
//       className="rounded-3 d-flex align-items-center justify-content-center"
//       style={{
//         width: 44,
//         height: 44,
//         background: "rgba(25,135,84,.10)",
//         border: "1px solid rgba(25,135,84,.18)",
//       }}
//     >
//       {icon}
//     </div>
//     <div>
//       <h2 className="h5 fw-bold mb-1">{title}</h2>
//       {subtitle ? <div className="text-muted small">{subtitle}</div> : null}
//     </div>
//   </div>
// );

// export default function CommerceLandingPage() {
//   return (
   

//        <FrontendLayout>
//           <HeroInner
//             title="Career Guide - Commerce & Management"
//             breadcrumb="Career Guide - Commerce & Management"
//             description="Here you can explore all commerce-related links."
//           />
//            <div className="pb-5">


          

//       {/* HERO */}
//       <div className="w-100 nitLightGradient">
//         <div className="container py-4 py-md-5">
//           <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
//             <div style={{ maxWidth: 720 }}>
//               <h1 className="section-heading mb-2">
//                 Commerce & Management{" "}
//                 <span className="gradient-text">Career Guide</span>
//               </h1>

//               <div className="text-muted fw-semibold mb-3">
//                 Courses, Entrance Exams, Colleges & Career Scope — A Complete Roadmap
//               </div>

//               <p className="text-muted mb-3" style={{ lineHeight: 1.7 }}>
//                 Commerce opens one of the widest sets of career doors — B.Com, BBA, MBA,
//                 CA, CS, CMA, banking, finance, taxation, and management. But the sheer
//                 number of options can make it hard to know where to start or what path
//                 makes the most sense for you. This page brings it all together clearly.
//               </p>

//               <p className="text-muted mb-0" style={{ lineHeight: 1.7 }}>
//                 Whether you've just completed <b>Class 12 (Commerce)</b> and are choosing
//                 your first degree, or you're a graduate planning your next move — MBA,
//                 professional certification, or a career switch — you'll find clear
//                 pathways, course options, exam guidance, and direct links to detailed
//                 pages across the portal.
//               </p>
//             </div>

//             {/* mini stats */}
//             <div className="d-grid gap-2" style={{ minWidth: 260 }}>
//               <div className="p-3 rounded-4 bg-white border shadow-sm">
//                 <div className="small text-muted">Popular paths after 12</div>
//                 <div className="fw-bold d-flex align-items-center gap-2">
//                   <ClipboardList size={16} className="text-primary" />
//                   B.Com · BBA · CA Foundation
//                 </div>
//               </div>

//               <div className="p-3 rounded-4 bg-white border shadow-sm">
//                 <div className="small text-muted">Need guidance?</div>
//                 <div className="fw-bold d-flex align-items-center gap-2">
//                   <BadgeCheck size={16} className="text-success" />
//                   Counselor Support
//                 </div>
//                 <a
//                   href="/counsellors/directory"
//                   className="small text-primary fw-semibold text-decoration-none d-inline-flex align-items-center gap-1"
//                 >
//                   Connect with a Counselor <ArrowRight size={14} />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Quick actions */}
//           <div className="mt-4">
//             <div className="row g-3">
//               <div className="col-12 col-md-6 col-xl-3">
//                 <QuickLink
//                   icon={<GraduationCap size={18} className="text-primary" />}
//                   title="After Class 12 • Commerce"
//                   desc="Step-by-step pathway after 12 for commerce students."
//                   href="/careers/after-class-12-commerce"
//                 />
//               </div>
//               <div className="col-12 col-md-6 col-xl-3">
//                 <QuickLink
//                   icon={<BookOpen size={18} className="text-success" />}
//                   title="B.Com Programs"
//                   desc="B.Com, B.Com (Hons) and allied graduation courses."
//                   href="/courses/bcom-allied-programs"
//                 />
//               </div>
//               <div className="col-12 col-md-6 col-xl-3">
//                 <QuickLink
//                   icon={<Briefcase size={18} className="text-warning" />}
//                   title="BBA / MBA"
//                   desc="Management degrees from UG to PG level."
//                   href="/courses/bba"
//                 />
//               </div>
//               <div className="col-12 col-md-6 col-xl-3">
//                 <QuickLink
//                   icon={<Award size={18} className="text-danger" />}
//                   title="CA / CS / CMA"
//                   desc="Professional commerce certifications and exam paths."
//                   href="/courses/professional"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =========================
//           CAT — Detailed Section
//       ========================= */}
//       <section className="py-5 py-lg-6">
//         <div className="container">
//           <div className="row justify-content-start">
//             <div className="col-lg-9">
//               <div className="mb-4 mb-lg-5">
//                 <h2 className="section-heading mb-3">
//                   <span className="gradient-text">CAT:</span> The Main MBA Entrance Exam
//                 </h2>

//                 <p className="text-muted mb-0">
//                   CAT (Common Admission Test) is India's most competitive management entrance
//                   examination, conducted by the IIMs on a rotational basis. A strong CAT score
//                   is the primary route to <strong>MBA / PGDM</strong> programmes at IIMs and
//                   hundreds of top business schools across the country. If your long-term goal is
//                   a management career at a senior level, CAT is the exam that defines your
//                   trajectory.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="row justify-content-start">
//             <div className="col-lg-12">
//               <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm mb-4 mb-lg-5">

//                 {/* Top Quick Facts */}
//                 <div className="row g-4 mb-4">
//                   <div className="col-md-4">
//                     <div
//                       className="small text-uppercase text-muted fw-semibold mb-1 gradient-text"
//                       style={{ letterSpacing: ".08em" }}
//                     >
//                       Sections
//                     </div>
//                     <div className="fw-semibold fs-6">
//                       VARC • DILR • Quantitative Aptitude
//                     </div>
//                   </div>

//                   <div className="col-md-4">
//                     <div
//                       className="small text-uppercase text-muted fw-semibold mb-1 gradient-text"
//                       style={{ letterSpacing: ".08em" }}
//                     >
//                       Question Type
//                     </div>
//                     <div className="fw-semibold fs-6">MCQ + TITA (CBT)</div>
//                   </div>

//                   <div className="col-md-4">
//                     <div
//                       className="small text-uppercase text-muted fw-semibold mb-1 gradient-text"
//                       style={{ letterSpacing: ".08em" }}
//                     >
//                       Used For
//                     </div>
//                     <div className="fw-semibold fs-6">MBA / PGDM Admissions</div>
//                   </div>
//                 </div>

//                 <hr className="my-4" />

//                 {/* Purpose */}
//                 <div className="mb-4">
//                   <div
//                     className="small text-uppercase text-muted fw-semibold mb-2 gradient-text"
//                     style={{ letterSpacing: ".08em" }}
//                   >
//                     Purpose
//                   </div>
//                   <p className="mb-0 text-muted" style={{ lineHeight: 1.9 }}>
//                     Admission to <strong>MBA / PGDM</strong> programmes at the IIMs (primary
//                     purpose). CAT scores are also accepted by hundreds of other top business
//                     schools — including FMS Delhi, SPJIMR, MDI, IMT, and many more — as their
//                     primary or supplementary criterion.
//                   </p>
//                 </div>

//                 {/* Eligibility */}
//                 <div className="mb-4">
//                   <div
//                     className="small text-uppercase text-muted fw-semibold mb-2 gradient-text"
//                     style={{ letterSpacing: ".08em" }}
//                   >
//                     Eligibility
//                   </div>

//                   <div className="row g-4">
//                     <div className="col-md-4">
//                       <div className="fw-semibold mb-1">General Category</div>
//                       <div className="small text-muted">
//                         Bachelor's degree with minimum 50% aggregate<br />
//                         (or equivalent CGPA) in any discipline
//                       </div>
//                     </div>

//                     <div className="col-md-4">
//                       <div className="fw-semibold mb-1">SC / ST / PWD</div>
//                       <div className="small text-muted">
//                         Bachelor's degree with minimum 45% aggregate<br />
//                         (or equivalent CGPA)
//                       </div>
//                     </div>

//                     <div className="col-md-4">
//                       <div className="fw-semibold mb-1">Final Year Students</div>
//                       <div className="small text-muted">
//                         Students in the final year of their graduation can
//                         apply provisionally
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Apply */}
//                 <div className="mb-4">
//                   <div
//                     className="small text-uppercase text-muted fw-semibold mb-2 gradient-text"
//                     style={{ letterSpacing: ".08em" }}
//                   >
//                     Apply
//                   </div>
//                   <div className="fw-semibold">Online Application Mode (iimcat.ac.in)</div>
//                 </div>

//                 <hr className="my-4" />

//                 <div className="d-flex flex-wrap align-items-center gap-4">
//                   <div>
//                     <div className="small text-muted">Official Website</div>
//                     <a
//                       href="https://iimcat.ac.in/"
//                       target="_blank"
//                       rel="noreferrer"
//                       className="iitWebsiteLink d-inline-flex align-items-center gap-1 mt-1"
//                     >
//                       <span className="small">https://iimcat.ac.in/</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* What CAT unlocks */}
//               <div className="mb-4 mb-lg-5">
//                 <h3 className="h5 fw-semibold mb-3">What CAT unlocks for you</h3>
//                 <p className="text-muted" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                   CAT is not just an exam for IIM admission — a good percentile opens
//                   doors to a wide range of top business schools and also signals strong
//                   analytical and verbal ability to employers.
//                 </p>

//                 <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
//                   <li>
//                     <strong>IIMs</strong> — Ahmedabad, Bangalore, Calcutta, and 17+ others
//                     across India
//                   </li>
//                   <li>
//                     <strong>FMS Delhi, SPJIMR, MDI Gurgaon, IMT Ghaziabad</strong> and many
//                     other top non-IIM schools
//                   </li>
//                   <li>
//                     Hundreds of AICTE-approved MBA/PGDM institutes that accept CAT scores
//                   </li>
//                   <li>
//                     Specialisations: Finance, Marketing, HR, Operations, Strategy, Analytics,
//                     Consulting and more
//                   </li>
//                 </ul>
//               </div>

//               {/* Other management exams */}
//               <div className="mb-4 mb-lg-5">
//                 <h3 className="h5 fw-semibold mb-3">
//                   Other management exams worth knowing
//                 </h3>
//                 <p className="text-muted mb-3" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                   CAT is the top exam, but it is not the only route to a good MBA. Several
//                   other exams cover different sets of colleges and may suit your profile better.
//                 </p>

//                 <div className="row g-3">
//                   <div className="col-md-6">
//                     <div className="p-3 rounded-3 border bg-white">
//                       <div className="fw-semibold mb-1">XAT</div>
//                       <div className="small text-muted">
//                         Conducted by XLRI Jamshedpur. Accepted by XLRI, XIMB and 150+ institutes.
//                         Has a Decision Making section unique to management testing.
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="p-3 rounded-3 border bg-white">
//                       <div className="fw-semibold mb-1">MAT / CMAT</div>
//                       <div className="small text-muted">
//                         MAT is conducted by AIMA; CMAT by NTA. Both are accepted by a large
//                         number of AICTE-approved management institutes and are less competitive
//                         than CAT.
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Who should focus */}
//               <div className="mb-4 mb-lg-5">
//                 <h3 className="h5 fw-semibold mb-3">Who should target CAT seriously</h3>
//                 <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                   CAT preparation is best suited for students who are comfortable with
//                   reading comprehension, logical reasoning, and basic quantitative maths.
//                   It rewards accuracy and calm test temperament — not speed alone.
//                 </p>

//                 <div className="mt-3">
//                   <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
//                     <li>You are targeting a senior management or consulting career path</li>
//                     <li>
//                       You have a graduation degree (or are in the final year) in any stream
//                     </li>
//                     <li>
//                       You are willing to prepare consistently for 6–12 months with daily
//                       practice
//                     </li>
//                     <li>
//                       You can handle timed problem-solving under pressure without losing
//                       accuracy
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Prep plan */}
//               <div>
//                 <h3 className="h5 fw-semibold mb-3">
//                   A practical CAT preparation plan (simple & effective)
//                 </h3>

//                 <div className="d-grid gap-4">
//                   <div>
//                     <div
//                       className="small text-muted text-uppercase fw-semibold mb-2 gradient-text"
//                       style={{ letterSpacing: ".08em" }}
//                     >
//                       Step 1
//                     </div>
//                     <div className="fw-semibold mb-2">
//                       Diagnose your baseline — take a free mock first
//                     </div>
//                     <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                       Before starting any preparation, attempt one free mock CAT to understand
//                       where you stand in all three sections. This helps you allocate study time
//                       correctly from the start — most students waste months on sections they are
//                       already decent at.
//                     </p>
//                   </div>

//                   <div>
//                     <div
//                       className="small text-muted text-uppercase fw-semibold mb-2 gradient-text"
//                       style={{ letterSpacing: ".08em" }}
//                     >
//                       Step 2
//                     </div>
//                     <div className="fw-semibold mb-2">
//                       Build VARC and DILR through daily reading and puzzles
//                     </div>
//                     <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                       Verbal Ability and Reading Comprehension improves with consistent reading
//                       of quality articles (newspapers, editorials, business writing). DILR
//                       requires daily puzzle-solving and logic practice. These two sections
//                       cannot be crammed — they need steady, long-term exposure.
//                     </p>
//                   </div>

//                   <div>
//                     <div
//                       className="small text-muted text-uppercase fw-semibold mb-2 gradient-text"
//                       style={{ letterSpacing: ".08em" }}
//                     >
//                       Step 3
//                     </div>
//                     <div className="fw-semibold mb-2">
//                       Quantitative Aptitude — clear concepts, then practise patterns
//                     </div>
//                     <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                       QA covers arithmetic, algebra, geometry, and number systems from Class
//                       10–12 level. Clear each concept area before moving on. Once concepts are
//                       solid, QA improvement is the fastest with consistent problem-solving
//                       practice.
//                     </p>
//                   </div>

//                   <div>
//                     <div
//                       className="small text-muted text-uppercase fw-semibold mb-2 gradient-text"
//                       style={{ letterSpacing: ".08em" }}
//                     >
//                       Step 4
//                     </div>
//                     <div className="fw-semibold mb-2">
//                       Weekly mocks + deep analysis — this is where the score improves
//                     </div>
//                     <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                       From 3 months before the exam, take full-length mocks weekly and spend
//                       twice the test time on analysis. Track which question types lose you the
//                       most marks and fix those specifically. In CAT, strategy (what to attempt
//                       and what to skip) matters as much as knowledge.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <hr className="my-4" />

//       {/* Professional Commerce: CA / CS / CMA */}
//       <section className="pt-lg-5 pb-lg-5">
//         <div className="container">
//           <SectionTitle
//             icon={<Award size={18} className="text-warning" />}
//             title="Professional Commerce: CA / CS / CMA"
//             subtitle="Alongside degree programmes, these professional certifications are among the most respected commerce career routes."
//           />

//           <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm">
//             <p className="text-muted mb-4" style={{ lineHeight: 1.9 }}>
//               CA (Chartered Accountant), CS (Company Secretary), and CMA (Cost and Management
//               Accountant) are professional qualifications that can be pursued alongside or
//               after a B.Com degree. They are highly valued by employers and open doors to
//               corporate finance, audit, taxation, legal compliance, and advisory roles.
//             </p>

//             <div className="row g-4">
//               <div className="col-md-4">
//                 <div className="fw-semibold mb-1 d-flex align-items-center gap-2">
//                   <CircleDollarSign size={15} className="text-warning" />
//                   CA — Chartered Accountant
//                 </div>
//                 <div className="small text-muted mt-1" style={{ lineHeight: 1.9 }}>
//                   Conducted by ICAI. Three stages: Foundation → Intermediate → Final.
//                   One of India's most respected and demanding professional qualifications.
//                   Leads to careers in audit, taxation, corporate finance, and advisory.
//                 </div>
//               </div>

//               <div className="col-md-4">
//                 <div className="fw-semibold mb-1 d-flex align-items-center gap-2">
//                   <Scale size={15} className="text-primary" />
//                   CS — Company Secretary
//                 </div>
//                 <div className="small text-muted mt-1" style={{ lineHeight: 1.9 }}>
//                   Conducted by ICSI. Three stages: Foundation → Executive → Professional.
//                   Focuses on corporate law, governance, and compliance. CS professionals
//                   are mandatory in listed companies above a certain size.
//                 </div>
//               </div>

//               <div className="col-md-4">
//                 <div className="fw-semibold mb-1 d-flex align-items-center gap-2">
//                   <BarChart2 size={15} className="text-success" />
//                   CMA — Cost & Management Accountant
//                 </div>
//                 <div className="small text-muted mt-1" style={{ lineHeight: 1.9 }}>
//                   Conducted by ICAI (CMA). Three stages: Foundation → Intermediate → Final.
//                   Focuses on cost accounting, management accounting, and financial management.
//                   Strong demand in manufacturing, PSUs, and large corporations.
//                 </div>
//               </div>
//             </div>

//             <div className="mt-4">
//               <LinkRow
//                 label="CA / CS / CMA — Professional Commerce Courses"
//                 href="/courses/professional"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <hr className="my-4" />

//       {/* Choose Your Commerce Pathway */}
//       <section className="pt-lg-5 pb-lg-5">
//         <div className="container">
//           <SectionTitle
//             icon={<FileText size={18} className="text-success" />}
//             title="Choose Your Commerce Pathway"
//             subtitle="Pick your stage, then follow the most realistic path based on your goals and eligibility."
//           />

//           <div className="mt-4 mt-lg-5">
//             <div className="row g-4">
//               <div className="col-lg-12">
//                 <div className="fw-bold d-flex align-items-center gap-2 mb-2">
//                   After Class 12th (Commerce)
//                 </div>
//                 <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                   Class 12 Commerce students have several strong immediate options. The most
//                   common are B.Com (for a broad academic base), BBA (for early management
//                   exposure), and CA Foundation (for the professional CA route). You do not
//                   have to choose only one — B.Com and CA Foundation can be pursued together.
//                 </p>

//                 <ul className="text-muted mb-3" style={{ lineHeight: 2 }}>
//                   <li>
//                     Best for: Students targeting finance, accounts, management, or business
//                     careers
//                   </li>
//                   <li>
//                     Good options: B.Com / B.Com (Hons), BBA, CA Foundation, CS Foundation,
//                     CMA Foundation
//                   </li>
//                   <li>
//                     Smart strategy: Start CA Foundation alongside B.Com for maximum career
//                     optionality
//                   </li>
//                 </ul>

//                 <div className="d-flex gap-3 flex-wrap">
//                   <LinkRow
//                     label="After Class 12 • Commerce"
//                     meta="Stage"
//                     href="/careers/after-class-12-commerce"
//                   />
//                   <LinkRow
//                     label="B.Com & Allied Programs"
//                     meta="UG"
//                     href="/courses/bcom-allied-programs"
//                   />
//                   <LinkRow
//                     label="BBA & UG Management"
//                     meta="UG"
//                     href="/courses/bba"
//                   />
//                   <LinkRow
//                     label="CA / CS / CMA"
//                     meta="Professional"
//                     href="/courses/professional"
//                   />
//                 </div>
//               </div>

//               <div className="col-lg-12 border-top pt-4 pt-lg-5 mt-lg-5 mt-4">
//                 <div className="fw-bold d-flex align-items-center gap-2 mb-2">
//                   After Graduation
//                 </div>
//                 <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                   Graduates from any stream can pursue an MBA. Commerce and BBA graduates
//                   specifically have strong options in M.Com (for academic depth) and MBA
//                   (for management careers). The key decision is whether you want a purely
//                   academic PG path or a professional/industry-oriented one.
//                 </p>

//                 <ul className="text-muted mb-3" style={{ lineHeight: 2 }}>
//                   <li>
//                     MBA route: Requires CAT / XAT / MAT score + group discussion + interview
//                   </li>
//                   <li>
//                     M.Com route: University entrance or merit-based admission; best for
//                     academic and teaching careers
//                   </li>
//                   <li>
//                     CA / CS / CMA completion: Can be done alongside graduation for an
//                     integrated qualification
//                   </li>
//                 </ul>

//                 <div className="d-flex gap-3 flex-wrap">
//                   <LinkRow
//                     label="MBA / PGDM"
//                     meta="PG"
//                     href="/courses/business-management/mba"
//                   />
//                   <LinkRow
//                     label="M.Com & PG Commerce"
//                     meta="PG"
//                     href="/courses/mcom"
//                   />
//                   <LinkRow
//                     label="MBA & Management Exams"
//                     meta="Exams"
//                     href="/exams/law/management"
//                   />
//                   <LinkRow
//                     label="After Graduation Guidance"
//                     meta="Stage"
//                     href="/careers/after-graduation"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <hr className="my-4" />

//       {/* Courses & Branches */}
//       <section className="mt-4 mt-md-5">
//         <div className="container">
//           <SectionTitle
//             icon={<TrendingUp size={18} className="text-primary" />}
//             title="Courses & Branches"
//             subtitle="Understand what each course family leads to, and which one matches your interest + strengths."
//           />

//           <div className="row g-3">
//             <div className="col-12">
//               <p className="text-muted mb-0" style={{ lineHeight: 1.9 }}>
//                 Commerce careers are not limited to accounts or banking. The domain spans
//                 business management, financial services, corporate law, cost analysis, data
//                 analytics for business, and entrepreneurship. Choose based on what
//                 genuinely excites you — the depth of finance, the breadth of management,
//                 or the rigour of professional qualifications.
//               </p>
//             </div>

//             {/* Card 1: B.Com & M.Com */}
//             <div className="col-12 col-md-6">
//               <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
//                 <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
//                   <BookOpen size={16} className="text-primary" />
//                   B.Com & M.Com (Academic Route)
//                 </div>
//                 <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                   The foundational commerce degree. B.Com builds broad knowledge in
//                   accounts, economics, taxation, and business law. M.Com deepens this
//                   for teaching, research, or senior roles.
//                 </div>
//                 <ul className="small text-muted" style={{ lineHeight: 2 }}>
//                   <li>
//                     <strong>Best for:</strong> Students who want a broad academic base with
//                     flexible career options
//                   </li>
//                   <li>
//                     <strong>Commonly paired with:</strong> CA / CS / CMA preparation
//                     simultaneously
//                   </li>
//                   <li>
//                     <strong>Outcome:</strong> Accountant, auditor, finance executive, tax
//                     professional, or higher studies
//                   </li>
//                 </ul>
//                 <div className="d-flex flex-wrap gap-3 mt-3">
//                   <LinkRow
//                     label="B.Com & Allied Programs"
//                     href="/courses/bcom-allied-programs"
//                   />
//                   <LinkRow
//                     label="M.Com & PG Commerce"
//                     href="/courses/mcom"
//                     meta="PG"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Card 2: BBA & MBA */}
//             <div className="col-12 col-md-6">
//               <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
//                 <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
//                   <Briefcase size={16} className="text-warning" />
//                   BBA & MBA (Management Route)
//                 </div>
//                 <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                   BBA is a 3-year management degree after Class 12. MBA/PGDM is the
//                   top postgraduate management qualification, ideally pursued after 2+
//                   years of work experience for maximum value.
//                 </div>
//                 <ul className="small text-muted" style={{ lineHeight: 2 }}>
//                   <li>
//                     <strong>Best for:</strong> Students targeting business leadership,
//                     consulting, marketing, or general management
//                   </li>
//                   <li>
//                     <strong>Main gate (MBA):</strong> CAT · XAT · MAT · CMAT
//                   </li>
//                   <li>
//                     <strong>Outcome:</strong> Manager, consultant, analyst, entrepreneur,
//                     or specialist in HR/Finance/Marketing
//                   </li>
//                 </ul>
//                 <div className="d-flex flex-wrap gap-3 mt-3">
//                   <LinkRow
//                     label="BBA & UG Management"
//                     href="/courses/bba"
//                   />
//                   <LinkRow
//                     label="MBA / PGDM"
//                     href="/courses/mba-pgdm"
//                     meta="PG"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Card 3: CA / CS / CMA */}
//             <div className="col-12 col-md-6">
//               <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
//                 <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
//                   <Award size={16} className="text-danger" />
//                   CA / CS / CMA (Professional Route)
//                 </div>
//                 <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                   These are self-paced professional qualifications with high earning
//                   potential. They are demanding but respected globally and can be started
//                   right after Class 12.
//                 </div>
//                 <ul className="small text-muted" style={{ lineHeight: 2 }}>
//                   <li>
//                     <strong>Best for:</strong> Students comfortable with detail-oriented,
//                     exam-heavy professional study over 3–5 years
//                   </li>
//                   <li>
//                     <strong>Outcome:</strong> Chartered Accountant, Company Secretary,
//                     Cost Accountant — all in high demand
//                   </li>
//                 </ul>
//                 <div className="d-flex flex-wrap gap-3 mt-3">
//                   <LinkRow
//                     label="CA / CS / CMA Courses"
//                     href="/courses/professional"
//                   />
//                   <LinkRow
//                     label="Finance & Accounts Exams"
//                     href="/exams/law/finance-accounts"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Card 4: Banking & Finance */}
//             <div className="col-12 col-md-6">
//               <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
//                 <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
//                   <BarChart2 size={16} className="text-success" />
//                   Banking, Finance & Insurance
//                 </div>
//                 <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                   Careers in banking (PSU and private), financial services, insurance,
//                   and investment management are among the most stable and well-paying in
//                   the commerce domain. Most entry routes are through degree + competitive
//                   exams.
//                 </div>
//                 <ul className="small text-muted" style={{ lineHeight: 2 }}>
//                   <li>
//                     <strong>PSU Banking:</strong> IBPS PO/Clerk, SBI PO/Clerk exams
//                   </li>
//                   <li>
//                     <strong>Investment / Finance:</strong> CFA, CFP for specialised roles
//                   </li>
//                   <li>
//                     <strong>Best paired with:</strong> B.Com / BBA / MBA (Finance)
//                   </li>
//                 </ul>
//                 <div className="d-flex flex-wrap gap-3 mt-3">
//                   <LinkRow
//                     label="Commerce Graduation Courses"
//                     href="/courses/commerce-graduation-courses-bcom-allied"
//                   />
//                   <LinkRow
//                     label="Finance & Accounts Exams"
//                     href="/exams/law/finance-accounts"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Colleges & Institutes */}
//       <section className="mt-4 mt-md-5">
//         <div className="container">
//           <SectionTitle
//             icon={<Building2 size={18} className="text-primary" />}
//             title="Colleges & Institutes"
//             subtitle="Shortlist colleges by course type, recognition, placement records, and affordability."
//           />

//           <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm">
//             <p className="text-muted mb-4" style={{ lineHeight: 1.9 }}>
//               When choosing a commerce or management college, look for: UGC/AICTE
//               recognition, placement records for your target role (finance vs. marketing
//               vs. consulting), faculty quality, and total cost. For MBA specifically, the
//               college's alumni network and recruiter tie-ups matter significantly for
//               first placements.
//             </p>

//             <div className="row g-3">
//               <div className="col-md-6">
//                 <div className="fw-semibold mb-2">Browse listings</div>
//                 <div className="d-grid gap-2">
//                   <LinkRow
//                     label="IIMs — Management Institutes"
//                     href="/colleges/iims-management-institutes"
//                     meta="National"
//                   />
//                   <LinkRow
//                     label="Management & Business Colleges"
//                     href="/colleges/management-business-colleges"
//                     meta="By Field"
//                   />
//                 </div>
//               </div>

//               <div className="col-md-6">
//                 <div className="fw-semibold mb-2">Shortlisting checklist</div>
//                 <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
//                   <li>UGC / AICTE recognition and university affiliation</li>
//                   <li>
//                     Placement records for your target specialisation (not just overall
//                     average)
//                   </li>
//                   <li>Industry connections, internship support, and guest lecture quality</li>
//                   <li>Total cost: fees + hostel + exam fees + study material</li>
//                   <li>
//                     For CA/CS/CMA: institute matters less — the exam board credential is
//                     what counts
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//     </div>
//      </FrontendLayout>
//   );
// }

"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from "@/Layouts/FrontendLayout";

import {
  TrendingUp,
  GraduationCap,
  FileText,
  Building2,
  BadgeCheck,
  ArrowRight,
  ClipboardList,
  Briefcase,
  BarChart2,
  BookOpen,
  CircleDollarSign,
  Scale,
  Award,
} from "lucide-react";

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

// Helper function to get icon component
const getIcon = (iconName, size = 18, className = "") => {
  const icons = {
    TrendingUp: <TrendingUp size={size} className={className || "text-primary"} />,
    GraduationCap: <GraduationCap size={size} className={className || "text-primary"} />,
    FileText: <FileText size={size} className={className || "text-success"} />,
    Building2: <Building2 size={size} className={className || "text-primary"} />,
    BadgeCheck: <BadgeCheck size={size} className={className || "text-success"} />,
    ArrowRight: <ArrowRight size={size} className={className || "text-muted"} />,
    ClipboardList: <ClipboardList size={size} className={className || "text-primary"} />,
    Briefcase: <Briefcase size={size} className={className || "text-warning"} />,
    BarChart2: <BarChart2 size={size} className={className || "text-success"} />,
    BookOpen: <BookOpen size={size} className={className || "text-primary"} />,
    CircleDollarSign: <CircleDollarSign size={size} className={className || "text-warning"} />,
    Scale: <Scale size={size} className={className || "text-primary"} />,
    Award: <Award size={size} className={className || "text-danger"} />,
  };
  return icons[iconName] || null;
};

export default function CommerceLandingPage({ content }) {
  // Use content from database or fallback to empty object
  const pageContent = content || {};

  // Extract sections with fallbacks
  const hero = pageContent?.hero || {};
  const primaryExam = pageContent?.primaryExam || {};
  const professionalCertifications = pageContent?.professionalCertifications || {};
  const pathways = pageContent?.pathways || {};
  const courseBranches = pageContent?.courseBranches || {};
  const colleges = pageContent?.colleges || {};

  return (
    <FrontendLayout>
      <HeroInner
        title="Career Guide - Commerce & Management"
        breadcrumb="Career Guide - Commerce & Management"
        description="Here you can explore all commerce-related links."
      />

      <div className="pb-5">
        {/* HERO SECTION */}
        <div className="w-100 nitLightGradient">
          <div className="container py-4 py-md-5">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
              <div style={{ maxWidth: 720 }}>
                <h1 className="section-heading mb-2">
                  {hero.title || "Commerce & Management"}{" "}
                  <span className="gradient-text">Career Guide</span>
                </h1>

                <div className="text-muted fw-semibold mb-3">
                  {hero.subtitle || "Courses, Entrance Exams, Colleges & Career Scope — A Complete Roadmap"}
                </div>

                <p className="text-muted mb-3" style={{ lineHeight: 1.7 }}>
                  {hero.description || "Commerce opens one of the widest sets of career doors — B.Com, BBA, MBA, CA, CS, CMA, banking, finance, taxation, and management. But the sheer number of options can make it hard to know where to start or what path makes the most sense for you. This page brings it all together clearly."}
                </p>

                <p className="text-muted mb-0" style={{ lineHeight: 1.7 }}>
                  {hero.description2 || "Whether you've just completed Class 12 (Commerce) and are choosing your first degree, or you're a graduate planning your next move — MBA, professional certification, or a career switch — you'll find clear pathways, course options, exam guidance, and direct links to detailed pages across the portal."}
                </p>
              </div>

              {/* Hero Stats */}
              <div className="d-grid gap-2" style={{ minWidth: 260 }}>
                {hero.heroStats?.map((stat, index) => (
                  <div key={index} className="p-3 rounded-4 bg-white border shadow-sm">
                    <div className="small text-muted">{stat.label}</div>
                    <div className="fw-bold d-flex align-items-center gap-2">
                      {getIcon(stat.icon, 16, "text-primary")}
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            {hero.quickLinks && hero.quickLinks.length > 0 && (
              <div className="mt-4">
                <div className="row g-3">
                  {hero.quickLinks.map((link, index) => (
                    <div className="col-12 col-md-6 col-xl-3" key={index}>
                      <QuickLink
                        icon={getIcon(link.icon, 18)}
                        title={link.title}
                        desc={link.desc}
                        href={link.href}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* PRIMARY EXAM SECTION - CAT */}
        {primaryExam.heading && (
          <section className="py-5 py-lg-6">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-9">
                  <div className="mb-4 mb-lg-5">
                    <h2 className="section-heading mb-3">
                      <span className="gradient-text">{primaryExam.heading?.split(':')[0] || 'CAT'}:</span>{" "}
                      {primaryExam.heading?.split(':')[1] || "The Main MBA Entrance Exam"}
                    </h2>
                    <p className="text-muted mb-0">{primaryExam.intro}</p>
                  </div>
                </div>
              </div>

              <div className="row justify-content-start">
                <div className="col-lg-12">
                  <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm mb-4 mb-lg-5">
                    {/* Quick Facts */}
                    <div className="row g-4 mb-4">
                      {primaryExam.quickFacts?.map((fact, index) => (
                        <div className="col-md-4" key={index}>
                          <div className="small text-uppercase text-muted fw-semibold mb-1 gradient-text" style={{ letterSpacing: ".08em" }}>
                            {fact.label}
                          </div>
                          <div className="fw-semibold fs-6">{fact.value}</div>
                        </div>
                      ))}
                    </div>

                    <hr className="my-4" />

                    {/* Purpose */}
                    <div className="mb-4">
                      <div className="small text-uppercase text-muted fw-semibold mb-2 gradient-text" style={{ letterSpacing: ".08em" }}>
                        Purpose
                      </div>
                      <p className="mb-0 text-muted" style={{ lineHeight: 1.9 }}>
                        {primaryExam.purpose}
                      </p>
                    </div>

                    {/* Eligibility */}
                    <div className="mb-4">
                      <div className="small text-uppercase text-muted fw-semibold mb-2 gradient-text" style={{ letterSpacing: ".08em" }}>
                        Eligibility
                      </div>
                      <div className="row g-4">
                        {primaryExam.eligibility?.map((item, index) => (
                          <div className="col-md-4" key={index}>
                            <div className="fw-semibold mb-1">{item.category}</div>
                            <div className="small text-muted">{item.details}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Apply */}
                    <div className="mb-4">
                      <div className="small text-uppercase text-muted fw-semibold mb-2 gradient-text" style={{ letterSpacing: ".08em" }}>
                        Apply
                      </div>
                      <div className="fw-semibold">{primaryExam.applyMode}</div>
                    </div>

                    <hr className="my-4" />

                    <div className="d-flex flex-wrap align-items-center gap-4">
                      <div>
                        <div className="small text-muted">Official Website</div>
                        <a
                          href={primaryExam.officialWebsite}
                          target="_blank"
                          rel="noreferrer"
                          className="iitWebsiteLink d-inline-flex align-items-center gap-1 mt-1"
                        >
                          <span className="small">{primaryExam.officialWebsite}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* What CAT unlocks */}
                  {primaryExam.unlocks && primaryExam.unlocks.length > 0 && (
                    <div className="mb-4 mb-lg-5">
                      <h3 className="h5 fw-semibold mb-3">What CAT unlocks for you</h3>
                      <p className="text-muted" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                        {primaryExam.unlocksDescription || "CAT is not just an exam for IIM admission — a good percentile opens doors to a wide range of top business schools and also signals strong analytical and verbal ability to employers."}
                      </p>
                      <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
                        {primaryExam.unlocks.map((item, index) => (
                          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Other management exams */}
                  {primaryExam.otherExams && primaryExam.otherExams.length > 0 && (
                    <div className="mb-4 mb-lg-5">
                      <h3 className="h5 fw-semibold mb-3">Other management exams worth knowing</h3>
                      <p className="text-muted mb-3" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                        {primaryExam.otherExamsDescription || "CAT is the top exam, but it is not the only route to a good MBA. Several other exams cover different sets of colleges and may suit your profile better."}
                      </p>
                      <div className="row g-3">
                        {primaryExam.otherExams.map((exam, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="p-3 rounded-3 border bg-white">
                              <div className="fw-semibold mb-1">{exam.name}</div>
                              <div className="small text-muted">{exam.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Who should focus */}
                  {primaryExam.whoShouldFocusPoints && (
                    <div className="mb-4 mb-lg-5">
                      <h3 className="h5 fw-semibold mb-3">Who should target CAT seriously</h3>
                      <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                        {primaryExam.whoShouldFocusIntro || "CAT preparation is best suited for students who are comfortable with reading comprehension, logical reasoning, and basic quantitative maths. It rewards accuracy and calm test temperament — not speed alone."}
                      </p>
                      <div className="mt-3">
                        <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
                          {primaryExam.whoShouldFocusPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Prep plan */}
                  {primaryExam.prepPlan && primaryExam.prepPlan.length > 0 && (
                    <div>
                      <h3 className="h5 fw-semibold mb-3">A practical CAT preparation plan (simple & effective)</h3>
                      <div className="d-grid gap-4">
                        {primaryExam.prepPlan.map((step, index) => (
                          <div key={index}>
                            <div className="small text-muted text-uppercase fw-semibold mb-2 gradient-text" style={{ letterSpacing: ".08em" }}>
                              Step {index + 1}
                            </div>
                            <div className="fw-semibold mb-2">{step.title}</div>
                            <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                              {step.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        <hr className="my-4" />

        {/* PROFESSIONAL CERTIFICATIONS SECTION */}
        {professionalCertifications.title && (
          <section className="pt-lg-5 pb-lg-5">
            <div className="container">
              <SectionTitle
                icon={<Award size={18} className="text-warning" />}
                title={professionalCertifications.title}
                subtitle={professionalCertifications.subtitle}
              />

              <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm">
                <p className="text-muted mb-4" style={{ lineHeight: 1.9 }}>
                  {professionalCertifications.description}
                </p>

                <div className="row g-4">
                  {professionalCertifications.cards?.map((card, index) => (
                    <div className="col-md-4" key={index}>
                      <div className="fw-semibold mb-1 d-flex align-items-center gap-2">
                        {getIcon(card.icon, 15)}
                        {card.title}
                      </div>
                      <div className="small text-muted mt-1" style={{ lineHeight: 1.9 }}>
                        {card.description}
                      </div>
                    </div>
                  ))}
                </div>

                {professionalCertifications.link && (
                  <div className="mt-4">
                    <LinkRow
                      label={professionalCertifications.link.label}
                      href={professionalCertifications.link.href}
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        <hr className="my-4" />

        {/* PATHWAYS SECTION */}
        {pathways.title && (
          <section className="pt-lg-5 pb-lg-5">
            <div className="container">
              <SectionTitle
                icon={<FileText size={18} className="text-success" />}
                title={pathways.title}
                subtitle={pathways.subtitle}
              />

              <div className="mt-4 mt-lg-5">
                <div className="row g-4">
                  {/* After Class 12 */}
                  {pathways.after12 && (
                    <div className="col-lg-12">
                      <div className="fw-bold d-flex align-items-center gap-2 mb-2">
                        {pathways.after12.title}
                      </div>
                      <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
                        {pathways.after12.description}
                      </p>
                      <ul className="text-muted mb-3" style={{ lineHeight: 2 }}>
                        {pathways.after12.points?.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                      <div className="d-flex gap-3 flex-wrap">
                        {pathways.after12.links?.map((link, index) => (
                          <LinkRow
                            key={index}
                            label={link.label}
                            meta={link.meta}
                            href={link.href}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* After Graduation */}
                  {pathways.afterGraduation && (
                    <div className="col-lg-12 border-top pt-4 pt-lg-5 mt-lg-5 mt-4">
                      <div className="fw-bold d-flex align-items-center gap-2 mb-2">
                        {pathways.afterGraduation.title}
                      </div>
                      <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
                        {pathways.afterGraduation.description}
                      </p>
                      <ul className="text-muted mb-3" style={{ lineHeight: 2 }}>
                        {pathways.afterGraduation.points?.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                      <div className="d-flex gap-3 flex-wrap">
                        {pathways.afterGraduation.links?.map((link, index) => (
                          <LinkRow
                            key={index}
                            label={link.label}
                            meta={link.meta}
                            href={link.href}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        <hr className="my-4" />

        {/* COURSES & BRANCHES SECTION */}
        {courseBranches.title && (
          <section className="mt-4 mt-md-5">
            <div className="container">
              <SectionTitle
                icon={<TrendingUp size={18} className="text-primary" />}
                title={courseBranches.title}
                subtitle={courseBranches.subtitle}
              />

              <div className="row g-3">
                <div className="col-12">
                  <p className="text-muted mb-0" style={{ lineHeight: 1.9 }}>
                    {courseBranches.intro}
                  </p>
                </div>

                {courseBranches.cards?.map((card, index) => (
                  <div className="col-12 col-md-6" key={index}>
                    <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                      <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
                        {getIcon(card.icon, 16)}
                        {card.title}
                      </div>
                      <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
                        {card.description}
                      </div>
                      <ul className="small text-muted" style={{ lineHeight: 2 }}>
                        {card.points?.map((point, idx) => (
                          <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                        ))}
                      </ul>
                      <div className="d-flex flex-wrap gap-3 mt-3">
                        {card.links?.map((link, idx) => (
                          <LinkRow
                            key={idx}
                            label={link.label}
                            href={link.href}
                            meta={link.meta}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* COLLEGES SECTION */}
        {colleges.title && (
          <section className="mt-4 mt-md-5">
            <div className="container">
              <SectionTitle
                icon={<Building2 size={18} className="text-primary" />}
                title={colleges.title}
                subtitle={colleges.subtitle}
              />

              <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm">
                <p className="text-muted mb-4" style={{ lineHeight: 1.9 }}>
                  {colleges.intro}
                </p>

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="fw-semibold mb-2">Browse listings</div>
                    <div className="d-grid gap-2">
                      {colleges.listings?.map((link, index) => (
                        <LinkRow
                          key={index}
                          label={link.label}
                          href={link.href}
                          meta={link.meta}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="fw-semibold mb-2">Shortlisting checklist</div>
                    <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
                      {colleges.checklist?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </FrontendLayout>
  );
}