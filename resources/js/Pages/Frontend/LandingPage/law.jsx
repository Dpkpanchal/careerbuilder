// "use client";

// import React from "react";

// import { motion } from "framer-motion";

// import HeroInner from "@/Components/Frontend/Hero/HeroInner";
// import FrontendLayout from "@/Layouts/FrontendLayout";

// import {
//   Scale,
//   GraduationCap,
//   FileText,
//   Building2,
//   BadgeCheck,
//   ArrowRight,
//   ClipboardList,
//   BookOpen,
//   Gavel,
//   Landmark,
//   ShieldCheck,
//   Users,
// } from "lucide-react";

// /**
//  * Law Landing Page — Complete Guide
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

// export default function LawLandingPage() {
//   return (

//       <FrontendLayout>
//           <HeroInner
//             title="Career Guide - Law"
//             breadcrumb="Career Guide - Law"
//             description="Here you can explore all law-related links."
//           />

//     <div className="pb-5">

     

//       {/* HERO */}
//       <div className="w-100 nitLightGradient">
//         <div className="container py-4 py-md-5">
//           <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
//             <div style={{ maxWidth: 720 }}>
//               <h1 className="section-heading mb-2">
//                 Law <span className="gradient-text">Career Guide</span>
//               </h1>

//               <div className="text-muted fw-semibold mb-3">
//                 Courses, Entrance Exams, Colleges & Career Scope — A Complete Roadmap
//               </div>

//               <p className="text-muted mb-3" style={{ lineHeight: 1.7 }}>
//                 A career in law offers one of the most intellectually demanding and
//                 socially impactful paths available — but navigating it requires clarity.
//                 Integrated LLB or 3-year LLB, CLAT or AILET, NLU or state law college,
//                 litigation or corporate law — the choices start early and each one
//                 shapes your direction significantly. This page simplifies it all.
//               </p>

//               <p className="text-muted mb-0" style={{ lineHeight: 1.7 }}>
//                 Whether you're a <b>Class 12 student</b> planning to take the 5-year
//                 integrated law route, or a <b>graduate</b> considering the 3-year LLB,
//                 you'll find clear pathways, exam guidance, career options, and direct
//                 links to detailed pages across the portal — so you can move forward
//                 with confidence.
//               </p>
//             </div>

//             {/* mini stats */}
//             <div className="d-grid gap-2" style={{ minWidth: 260 }}>
//               <div className="p-3 rounded-4 bg-white border shadow-sm">
//                 <div className="small text-muted">Main entrance exam</div>
//                 <div className="fw-bold d-flex align-items-center gap-2">
//                   <ClipboardList size={16} className="text-primary" />
//                   CLAT / AILET
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
//                   title="Law — By Profession"
//                   desc="Full career overview for law as a profession."
//                   href="/career/by-profession/law"
//                 />
//               </div>
//               <div className="col-12 col-md-6 col-xl-3">
//                 <QuickLink
//                   icon={<Scale size={18} className="text-success" />}
//                   title="5-Year Integrated LLB"
//                   desc="BA LLB / BBA LLB / B.Sc LLB after Class 12."
//                   href="/exams/law/law"
//                 />
//               </div>
//               <div className="col-12 col-md-6 col-xl-3">
//                 <QuickLink
//                   icon={<BookOpen size={18} className="text-warning" />}
//                   title="3-Year LLB"
//                   desc="Law degree for graduates from any stream."
//                   href="/exams/law/law"
//                 />
//               </div>
//               <div className="col-12 col-md-6 col-xl-3">
//                 <QuickLink
//                   icon={<Landmark size={18} className="text-danger" />}
//                   title="National Law Universities"
//                   desc="NLUs — India's top law institutes."
//                   href="/colleges/national-law-universities-nlus"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =========================
//           CLAT — Detailed Section
//       ========================= */}
//       <section className="py-5 py-lg-6">
//         <div className="container">
//           <div className="row justify-content-start">
//             <div className="col-lg-9">
//               <div className="mb-4 mb-lg-5">
//                 <h2 className="section-heading mb-3">
//                   <span className="gradient-text">CLAT:</span> The Main Law Entrance Exam
//                 </h2>

//                 <p className="text-muted mb-0">
//                   CLAT (Common Law Admission Test) is the centralised national entrance
//                   exam for admission to undergraduate and postgraduate law programmes at
//                   the <strong>National Law Universities (NLUs)</strong> across India.
//                   A strong CLAT score is the most direct route to the top law schools in
//                   the country. If your goal is an NLU seat — especially in a government
//                   NLU — CLAT preparation is your most important step.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="row justify-content-start">
//             <div className="col-lg-12">
//               <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm mb-4 mb-lg-5">

//                 {/* Quick Facts */}
//                 <div className="row g-4 mb-4">
//                   <div className="col-md-4">
//                     <div
//                       className="small text-uppercase text-muted fw-semibold mb-1 gradient-text"
//                       style={{ letterSpacing: ".08em" }}
//                     >
//                       Sections
//                     </div>
//                     <div className="fw-semibold fs-6">
//                       English · GK · Legal Reasoning · Logical Reasoning · Quantitative
//                     </div>
//                   </div>

//                   <div className="col-md-4">
//                     <div
//                       className="small text-uppercase text-muted fw-semibold mb-1 gradient-text"
//                       style={{ letterSpacing: ".08em" }}
//                     >
//                       Question Type
//                     </div>
//                     <div className="fw-semibold fs-6">Comprehension-based MCQ</div>
//                   </div>

//                   <div className="col-md-4">
//                     <div
//                       className="small text-uppercase text-muted fw-semibold mb-1 gradient-text"
//                       style={{ letterSpacing: ".08em" }}
//                     >
//                       Used For
//                     </div>
//                     <div className="fw-semibold fs-6">
//                       UG & PG Law Admissions (NLUs)
//                     </div>
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
//                     Admission to the <strong>5-year integrated BA LLB / BBA LLB / B.Sc LLB</strong>{" "}
//                     programmes (UG-CLAT) at NLUs. Also used for{" "}
//                     <strong>LLM admissions</strong> (PG-CLAT) at NLUs. The Consortium of
//                     NLUs conducts CLAT; 24 NLUs currently participate in the centralised
//                     counselling process.
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
//                       <div className="fw-semibold mb-1">UG-CLAT (General)</div>
//                       <div className="small text-muted">
//                         Passed Class 12 from any stream<br />
//                         Minimum 45% aggregate marks
//                       </div>
//                     </div>

//                     <div className="col-md-4">
//                       <div className="fw-semibold mb-1">UG-CLAT (SC / ST)</div>
//                       <div className="small text-muted">
//                         Passed Class 12 from any stream<br />
//                         Minimum 40% aggregate marks
//                       </div>
//                     </div>

//                     <div className="col-md-4">
//                       <div className="fw-semibold mb-1">PG-CLAT (LLM)</div>
//                       <div className="small text-muted">
//                         LLB degree (3-year or 5-year integrated)<br />
//                         Minimum 55% aggregate (50% for SC/ST)
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
//                   <div className="fw-semibold">Online Application Mode (consortiumofnlus.ac.in)</div>
//                 </div>

//                 <hr className="my-4" />

//                 <div className="d-flex flex-wrap align-items-center gap-4">
//                   <div>
//                     <div className="small text-muted">Official Website</div>
//                     <a
//                       href="https://consortiumofnlus.ac.in/"
//                       target="_blank"
//                       rel="noreferrer"
//                       className="iitWebsiteLink d-inline-flex align-items-center gap-1 mt-1"
//                     >
//                       <span className="small">https://consortiumofnlus.ac.in/</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* What CLAT unlocks */}
//               <div className="mb-4 mb-lg-5">
//                 <h3 className="h5 fw-semibold mb-3">What CLAT unlocks for you</h3>
//                 <p className="text-muted" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                   CLAT is the gateway to the most prestigious law schools in India. A good
//                   CLAT rank opens access to NLUs where placements in top law firms,
//                   corporate legal departments, and litigation practices are well-established.
//                 </p>

//                 <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
//                   <li>
//                     <strong>24 NLUs</strong> — NLSIU Bangalore, NALSAR Hyderabad, NLU Delhi
//                     (via AILET), WBNUJS Kolkata, and others
//                   </li>
//                   <li>
//                     <strong>Top law firm placements</strong> — AZB, Cyril Amarchand, Khaitan,
//                     S&R, Trilegal, and other Tier-1 firms recruit heavily from NLUs
//                   </li>
//                   <li>
//                     <strong>Corporate legal roles</strong> — in-house counsel at banks, PSUs,
//                     and MNCs
//                   </li>
//                   <li>
//                     <strong>Civil Services / Judiciary</strong> — NLU graduates are
//                     well-positioned for judicial services and UPSC
//                   </li>
//                   <li>
//                     <strong>LLM and international study</strong> — NLU degree is recognised
//                     for applications to Oxford, Harvard, and other global law schools
//                   </li>
//                 </ul>
//               </div>

//               {/* AILET and other exams */}
//               <div className="mb-4 mb-lg-5">
//                 <h3 className="h5 fw-semibold mb-3">
//                   Also relevant: AILET, LSAT India & state law exams
//                 </h3>
//                 <p className="text-muted mb-3" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                   Beyond CLAT, several other law entrance exams open doors to specific
//                   colleges and routes.
//                 </p>

//                 <div className="row g-3">
//                   <div className="col-md-4">
//                     <div className="p-3 rounded-3 border bg-white">
//                       <div className="fw-semibold mb-1">AILET</div>
//                       <div className="small text-muted">
//                         All India Law Entrance Test — conducted by NLU Delhi for admission
//                         to its own programmes. Separate from CLAT; NLU Delhi does not
//                         participate in the CLAT consortium.
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-4">
//                     <div className="p-3 rounded-3 border bg-white">
//                       <div className="fw-semibold mb-1">LSAT India</div>
//                       <div className="small text-muted">
//                         Conducted by LSAC. Accepted by Jindal Global Law School and several
//                         private law colleges. The test format differs from CLAT and is less
//                         current-affairs dependent.
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-4">
//                     <div className="p-3 rounded-3 border bg-white">
//                       <div className="fw-semibold mb-1">State Law Exams</div>
//                       <div className="small text-muted">
//                         Many states conduct their own law entrance exams for state law
//                         university admissions. West Bengal has WBJEE Law for state-level
//                         law college admissions.
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Who should focus */}
//               <div className="mb-4 mb-lg-5">
//                 <h3 className="h5 fw-semibold mb-3">Who should focus on CLAT seriously</h3>
//                 <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                   CLAT rewards students who read widely, think analytically, and can apply
//                   reasoning to unfamiliar situations. It is less about memorised facts and
//                   more about comprehension and logical application — a different preparation
//                   style from science entrance exams.
//                 </p>

//                 <div className="mt-3">
//                   <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
//                     <li>You enjoy reading — news, arguments, and current affairs naturally</li>
//                     <li>
//                       You are interested in justice, policy, business law, or advocacy
//                     </li>
//                     <li>
//                       You can maintain consistent preparation across English, GK, and
//                       reasoning for 6–12 months
//                     </li>
//                     <li>
//                       You are from any stream — Class 12 (Arts, Commerce, or Science)
//                       students are all eligible
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Prep plan */}
//               <div>
//                 <h3 className="h5 fw-semibold mb-3">
//                   A practical CLAT preparation plan (simple & effective)
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
//                       Read every day — this is non-negotiable for CLAT
//                     </div>
//                     <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                       CLAT's comprehension-heavy format means reading speed and
//                       understanding directly impact your score. Read a quality newspaper
//                       daily (The Hindu or Indian Express), focus on editorials, legal news,
//                       and current affairs. This builds both GK and English simultaneously.
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
//                       Legal Reasoning — understand principles, not just rules
//                     </div>
//                     <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                       Legal Reasoning in CLAT does not require prior legal knowledge. Each
//                       question comes with a passage that contains a legal principle — you
//                       apply it to a given situation. Practise by reading the principle
//                       carefully, identifying the key rule, and applying it logically without
//                       bringing in outside knowledge.
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
//                       GK and current affairs — build a consistent revision system
//                     </div>
//                     <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                       CLAT GK is largely current affairs from the past 12 months, with some
//                       static GK (legal, constitutional, and general). Use a monthly current
//                       affairs digest and revise it regularly. Cramming GK the week before
//                       the exam rarely works — consistent monthly revision does.
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
//                       Timed mock tests — speed and accuracy together
//                     </div>
//                     <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                       CLAT is a 2-hour, 120-question exam with 0.25 negative marking. Time
//                       management is critical — most students attempt fewer questions than they
//                       should. Regular full-length mocks train you to read passages quickly,
//                       prioritise questions, and maintain accuracy under time pressure.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <hr className="my-4" />

//       {/* Choose Your Law Pathway */}
//       <section className="pt-lg-5 pb-lg-5">
//         <div className="container">
//           <SectionTitle
//             icon={<FileText size={18} className="text-success" />}
//             title="Choose Your Law Pathway"
//             subtitle="Pick your stage, then follow the most realistic path based on your eligibility and goals."
//           />

//           <div className="mt-4 mt-lg-5">
//             <div className="row g-4">

//               {/* After Class 12 */}
//               <div className="col-lg-12">
//                 <div className="fw-bold d-flex align-items-center gap-2 mb-2">
//                   After Class 12th — 5-Year Integrated LLB
//                 </div>
//                 <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                   The most popular and strategically strong route for aspiring lawyers.
//                   A 5-year integrated programme combines an undergraduate degree
//                   (BA, BBA, or B.Sc) with a law degree (LLB), allowing you to start
//                   practising earlier and with a stronger academic foundation.
//                 </p>

//                 <ul className="text-muted mb-3" style={{ lineHeight: 2 }}>
//                   <li>
//                     Best for: Class 12 students from any stream who are committed to a
//                     law career
//                   </li>
//                   <li>
//                     Key exam: CLAT (for NLUs), AILET (NLU Delhi), LSAT India (private
//                     colleges), state law exams
//                   </li>
//                   <li>
//                     Popular combinations: BA LLB (humanities + law), BBA LLB (business +
//                     law), B.Sc LLB (science + law)
//                   </li>
//                 </ul>

//                 <div className="d-flex gap-3 flex-wrap">
//                   <LinkRow
//                     label="Law Entrance Exams"
//                     meta="Exams"
//                     href="/exams/law/law"
//                   />
//                   <LinkRow
//                     label="National Law Universities (NLUs)"
//                     meta="Colleges"
//                     href="/colleges/national-law-universities-nlus"
//                   />
//                   <LinkRow
//                     label="Law Colleges"
//                     meta="Colleges"
//                     href="/colleges/law-colleges"
//                   />
//                 </div>
//               </div>

//               {/* After Graduation */}
//               <div className="col-lg-12 border-top pt-4 pt-lg-5 mt-lg-5 mt-4">
//                 <div className="fw-bold d-flex align-items-center gap-2 mb-2">
//                   After Graduation — 3-Year LLB
//                 </div>
//                 <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                   Graduates from any discipline — Commerce, Science, Arts, Engineering —
//                   can pursue a 3-year LLB. This route is common for professionals who
//                   decide to switch to law or want to add legal qualification to an
//                   existing career (e.g., CA + LLB for tax law, Engineer + LLB for IP law).
//                 </p>

//                 <ul className="text-muted mb-3" style={{ lineHeight: 2 }}>
//                   <li>
//                     Best for: Graduates who have decided on law as a second career or
//                     want a dual qualification
//                   </li>
//                   <li>
//                     Admission: Most state universities conduct their own 3-year LLB
//                     entrance or merit-based admission
//                   </li>
//                   <li>
//                     Career combination advantage: Engineering + LLB (patents), CA + LLB
//                     (taxation), MBA + LLB (corporate law)
//                   </li>
//                 </ul>

//                 <div className="d-flex gap-3 flex-wrap">
//                   <LinkRow
//                     label="Law Entrance Exams"
//                     meta="Exams"
//                     href="/exams/law/law"
//                   />
//                   <LinkRow
//                     label="Law Colleges"
//                     meta="Colleges"
//                     href="/colleges/law-colleges"
//                   />
//                   <LinkRow
//                     label="After Graduation Guidance"
//                     meta="Stage"
//                     href="/careers/after-graduation"
//                   />
//                 </div>
//               </div>

//               {/* After LLB */}
//               <div className="col-lg-12 border-top pt-4 pt-lg-5 mt-lg-5 mt-4">
//                 <div className="fw-bold d-flex align-items-center gap-2 mb-2">
//                   After LLB — Career Options
//                 </div>
//                 <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                   After completing an LLB (3-year or 5-year), you have several well-defined
//                   directions. The choice depends on whether you prefer courtroom practice,
//                   corporate advisory, academics, or public service.
//                 </p>

//                 <div className="row g-3">
//                   <div className="col-md-6 col-lg-3">
//                     <div className="p-3 rounded-3 border bg-white h-100">
//                       <div className="fw-semibold mb-1 d-flex align-items-center gap-2">
//                         <Gavel size={14} className="text-danger" /> Litigation
//                       </div>
//                       <div className="small text-muted">
//                         Enroll with the Bar Council, work as a junior advocate under a
//                         senior, build a practice over time. Takes dedication but offers
//                         long-term independence.
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6 col-lg-3">
//                     <div className="p-3 rounded-3 border bg-white h-100">
//                       <div className="fw-semibold mb-1 d-flex align-items-center gap-2">
//                         <Landmark size={14} className="text-primary" /> Corporate / Law Firms
//                       </div>
//                       <div className="small text-muted">
//                         Join a law firm or corporate legal team. Deals with contracts,
//                         M&A, compliance, and IPR. Most in-demand at NLU and top private
//                         college graduates.
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6 col-lg-3">
//                     <div className="p-3 rounded-3 border bg-white h-100">
//                       <div className="fw-semibold mb-1 d-flex align-items-center gap-2">
//                         <ShieldCheck size={14} className="text-success" /> Judiciary
//                       </div>
//                       <div className="small text-muted">
//                         Appear for State Judicial Service exams to become a civil judge.
//                         Requires strong preparation in procedural and substantive law.
//                         Highly respected and stable career.
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6 col-lg-3">
//                     <div className="p-3 rounded-3 border bg-white h-100">
//                       <div className="fw-semibold mb-1 d-flex align-items-center gap-2">
//                         <BookOpen size={14} className="text-warning" /> LLM / Academia
//                       </div>
//                       <div className="small text-muted">
//                         Pursue LLM for specialisation (Constitutional Law, IP, Corporate
//                         Law, International Law). Required for teaching positions and
//                         research roles.
//                       </div>
//                     </div>
//                   </div>
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
//             icon={<Scale size={18} className="text-primary" />}
//             title="Courses & Branches"
//             subtitle="Understand what each law programme leads to and which one matches your background and goals."
//           />

//           <div className="row g-3">
//             <div className="col-12">
//               <p className="text-muted mb-0" style={{ lineHeight: 1.9 }}>
//                 Law is not a single career track — it includes litigation, corporate law,
//                 tax law, intellectual property, criminal law, constitutional law, and
//                 international law. Your programme and specialisation shape which of these
//                 you are best positioned for. Choose based on where you want to practise,
//                 not just the prestige of the college.
//               </p>
//             </div>

//             {/* Card 1: 5-year Integrated */}
//             <div className="col-12 col-md-6">
//               <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
//                 <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
//                   <GraduationCap size={16} className="text-primary" />
//                   5-Year Integrated LLB (After Class 12)
//                 </div>
//                 <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                   The most sought-after route. Combines an undergraduate degree with LLB
//                   in five years. Variants include BA LLB (most common), BBA LLB (for
//                   corporate/business law orientation), and B.Sc LLB (for science-law
//                   crossovers like IP law).
//                 </div>
//                 <ul className="small text-muted" style={{ lineHeight: 2 }}>
//                   <li>
//                     <strong>Best for:</strong> Class 12 students committed to law as a
//                     career from the start
//                   </li>
//                   <li>
//                     <strong>Main gate:</strong> CLAT · AILET · LSAT India · State law exams
//                   </li>
//                   <li>
//                     <strong>Outcome:</strong> Advocate, corporate lawyer, judicial services,
//                     LLM/abroad
//                   </li>
//                 </ul>
//                 <div className="d-flex flex-wrap gap-3 mt-3">
//                   <LinkRow label="Law Entrance Exams" href="/exams/law/law" />
//                   <LinkRow
//                     label="National Law Universities"
//                     href="/colleges/national-law-universities-nlus"
//                     meta="NLUs"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Card 2: 3-year LLB */}
//             <div className="col-12 col-md-6">
//               <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
//                 <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
//                   <BookOpen size={16} className="text-success" />
//                   3-Year LLB (After Graduation)
//                 </div>
//                 <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                   A 3-year professional law degree open to graduates from any stream.
//                   Valued for its flexibility — it allows professionals in other fields
//                   to acquire legal knowledge and qualifications without starting over.
//                 </div>
//                 <ul className="small text-muted" style={{ lineHeight: 2 }}>
//                   <li>
//                     <strong>Best for:</strong> Graduates who want to add law to an existing
//                     career or switch streams
//                   </li>
//                   <li>
//                     <strong>Powerful combinations:</strong> CA + LLB · Engineer + LLB ·
//                     MBA + LLB
//                   </li>
//                   <li>
//                     <strong>Outcome:</strong> Advocate, in-house counsel, compliance officer,
//                     legal advisor
//                   </li>
//                 </ul>
//                 <div className="d-flex flex-wrap gap-3 mt-3">
//                   <LinkRow
//                     label="Law Colleges"
//                     href="/colleges/law-colleges"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Card 3: LLM */}
//             <div className="col-12 col-md-6">
//               <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
//                 <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
//                   <Scale size={16} className="text-warning" />
//                   LLM — Master of Laws (PG)
//                 </div>
//                 <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                   A 1–2 year postgraduate law degree for specialisation in a specific area
//                   of law. Required for teaching law and strengthens profiles for research,
//                   international opportunities, and senior legal roles.
//                 </div>
//                 <ul className="small text-muted" style={{ lineHeight: 2 }}>
//                   <li>
//                     <strong>Specialisations:</strong> Constitutional Law, IP Law, Corporate
//                     Law, Tax Law, International Law, Criminal Law
//                   </li>
//                   <li>
//                     <strong>Admission:</strong> PG-CLAT (NLUs) or individual university
//                     entrance
//                   </li>
//                   <li>
//                     <strong>Outcome:</strong> Law teacher, researcher, senior advocate,
//                     policy advisor
//                   </li>
//                 </ul>
//                 <div className="d-flex flex-wrap gap-3 mt-3">
//                   <LinkRow
//                     label="Law Entrance Exams (PG-CLAT)"
//                     href="/exams/law/law"
//                     meta="PG"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Card 4: Judiciary */}
//             <div className="col-12 col-md-6">
//               <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
//                 <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
//                   <Gavel size={16} className="text-danger" />
//                   Judicial Services
//                 </div>
//                 <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                   State Judicial Service exams allow LLB graduates to enter the lower
//                   judiciary as civil judges. This is one of the most respected career
//                   paths in law — competitive, but with high job security and social prestige.
//                 </div>
//                 <ul className="small text-muted" style={{ lineHeight: 2 }}>
//                   <li>
//                     <strong>Eligibility:</strong> LLB degree + Bar enrollment in most states
//                   </li>
//                   <li>
//                     <strong>Exam format:</strong> Written test (objective + subjective) +
//                     viva voce / interview
//                   </li>
//                   <li>
//                     <strong>West Bengal:</strong> West Bengal Judicial Service (WBJS) for
//                     Civil Judge (Junior Division)
//                   </li>
//                 </ul>
//                 <div className="d-flex flex-wrap gap-3 mt-3">
//                   <LinkRow
//                     label="Law Career — By Profession"
//                     href="/career/by-profession/law"
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
//             subtitle="Shortlist colleges by ranking, specialisation strength, recognition, and location."
//           />

//           <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm">
//             <p className="text-muted mb-4" style={{ lineHeight: 1.9 }}>
//               In law, the college you attend matters significantly — especially for corporate
//               law placements and international opportunities. NLUs are the gold standard.
//               For litigation and judiciary careers, a recognised state law college is equally
//               effective if you are self-driven. Focus on Bar Council recognition, moot court
//               culture, and internship support when shortlisting.
//             </p>

//             <div className="row g-3">
//               <div className="col-md-6">
//                 <div className="fw-semibold mb-2">Browse listings</div>
//                 <div className="d-grid gap-2">
//                   <LinkRow
//                     label="National Law Universities (NLUs)"
//                     href="/colleges/national-law-universities-nlus"
//                     meta="National"
//                   />
//                   <LinkRow
//                     label="Law Colleges"
//                     href="/colleges/law-colleges"
//                     meta="By Field"
//                   />
//                 </div>
//               </div>

//               <div className="col-md-6">
//                 <div className="fw-semibold mb-2">Shortlisting checklist</div>
//                 <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
//                   <li>Bar Council of India recognition for the LLB programme</li>
//                   <li>
//                     Moot court programme, legal aid clinic, and internship opportunities
//                   </li>
//                   <li>
//                     Placement records for law firms (relevant if targeting corporate law)
//                   </li>
//                   <li>Faculty quality and visiting practitioner lectures</li>
//                   <li>Total cost: fees + hostel + bar exam and enrollment fees</li>
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
  Scale,
  GraduationCap,
  FileText,
  Building2,
  BadgeCheck,
  ArrowRight,
  ClipboardList,
  BookOpen,
  Gavel,
  Landmark,
  ShieldCheck,
  Users,
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
    Scale: <Scale size={size} className={className || "text-primary"} />,
    GraduationCap: <GraduationCap size={size} className={className || "text-primary"} />,
    FileText: <FileText size={size} className={className || "text-success"} />,
    Building2: <Building2 size={size} className={className || "text-primary"} />,
    BadgeCheck: <BadgeCheck size={size} className={className || "text-success"} />,
    ArrowRight: <ArrowRight size={size} className={className || "text-muted"} />,
    ClipboardList: <ClipboardList size={size} className={className || "text-primary"} />,
    BookOpen: <BookOpen size={size} className={className || "text-warning"} />,
    Gavel: <Gavel size={size} className={className || "text-danger"} />,
    Landmark: <Landmark size={size} className={className || "text-primary"} />,
    ShieldCheck: <ShieldCheck size={size} className={className || "text-success"} />,
    Users: <Users size={size} className={className || "text-primary"} />,
  };
  return icons[iconName] || null;
};

export default function LawLandingPage({ content }) {
  // Use content from database or fallback to empty object
  const pageContent = content || {};

  // Extract sections with fallbacks
  const hero = pageContent?.hero || {};
  const primaryExam = pageContent?.primaryExam || {};
  const pathways = pageContent?.pathways || {};
  const courseBranches = pageContent?.courseBranches || {};
  const colleges = pageContent?.colleges || {};

  return (
    <FrontendLayout>
      <HeroInner
        title="Career Guide - Law"
        breadcrumb="Career Guide - Law"
        description="Here you can explore all law-related links."
      />

      <div className="pb-5">
        {/* HERO SECTION */}
        <div className="w-100 nitLightGradient">
          <div className="container py-4 py-md-5">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
              <div style={{ maxWidth: 720 }}>
                <h1 className="section-heading mb-2">
                  {hero.title || "Law"}{" "}
                  <span className="gradient-text">Career Guide</span>
                </h1>

                <div className="text-muted fw-semibold mb-3">
                  {hero.subtitle || "Courses, Entrance Exams, Colleges & Career Scope — A Complete Roadmap"}
                </div>

                <p className="text-muted mb-3" style={{ lineHeight: 1.7 }}>
                  {hero.description || "A career in law offers one of the most intellectually demanding and socially impactful paths available — but navigating it requires clarity. Integrated LLB or 3-year LLB, CLAT or AILET, NLU or state law college, litigation or corporate law — the choices start early and each one shapes your direction significantly. This page simplifies it all."}
                </p>

                <p className="text-muted mb-0" style={{ lineHeight: 1.7 }}>
                  {hero.description2 || "Whether you're a Class 12 student planning to take the 5-year integrated law route, or a graduate considering the 3-year LLB, you'll find clear pathways, exam guidance, career options, and direct links to detailed pages across the portal — so you can move forward with confidence."}
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

        {/* PRIMARY EXAM SECTION - CLAT */}
        {primaryExam.heading && (
          <section className="py-5 py-lg-6">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-9">
                  <div className="mb-4 mb-lg-5">
                    <h2 className="section-heading mb-3">
                      <span className="gradient-text">{primaryExam.heading?.split(':')[0] || 'CLAT'}:</span>{" "}
                      {primaryExam.heading?.split(':')[1] || "The Main Law Entrance Exam"}
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

                  {/* What CLAT unlocks */}
                  {primaryExam.unlocks && primaryExam.unlocks.length > 0 && (
                    <div className="mb-4 mb-lg-5">
                      <h3 className="h5 fw-semibold mb-3">What CLAT unlocks for you</h3>
                      <p className="text-muted" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                        {primaryExam.unlocksDescription || "CLAT is the gateway to the most prestigious law schools in India. A good CLAT rank opens access to NLUs where placements in top law firms, corporate legal departments, and litigation practices are well-established."}
                      </p>
                      <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
                        {primaryExam.unlocks.map((item, index) => (
                          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Other exams */}
                  {primaryExam.otherExams && primaryExam.otherExams.length > 0 && (
                    <div className="mb-4 mb-lg-5">
                      <h3 className="h5 fw-semibold mb-3">Also relevant: AILET, LSAT India & state law exams</h3>
                      <p className="text-muted mb-3" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                        {primaryExam.otherExamsDescription || "Beyond CLAT, several other law entrance exams open doors to specific colleges and routes."}
                      </p>
                      <div className="row g-3">
                        {primaryExam.otherExams.map((exam, index) => (
                          <div className="col-md-4" key={index}>
                            <div className="p-3 rounded-3 border bg-white h-100">
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
                      <h3 className="h5 fw-semibold mb-3">Who should focus on CLAT seriously</h3>
                      <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                        {primaryExam.whoShouldFocusIntro || "CLAT rewards students who read widely, think analytically, and can apply reasoning to unfamiliar situations. It is less about memorised facts and more about comprehension and logical application — a different preparation style from science entrance exams."}
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
                      <h3 className="h5 fw-semibold mb-3">A practical CLAT preparation plan (simple & effective)</h3>
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

                  {/* After LLB - Career Options */}
                  {pathways.afterLLB && (
                    <div className="col-lg-12 border-top pt-4 pt-lg-5 mt-lg-5 mt-4">
                      <div className="fw-bold d-flex align-items-center gap-2 mb-2">
                        {pathways.afterLLB.title}
                      </div>
                      <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
                        {pathways.afterLLB.description}
                      </p>

                      <div className="row g-3">
                        {pathways.afterLLB.careerOptions?.map((option, index) => (
                          <div className="col-md-6 col-lg-3" key={index}>
                            <div className="p-3 rounded-3 border bg-white h-100">
                              <div className="fw-semibold mb-1 d-flex align-items-center gap-2">
                                {getIcon(option.icon, 14)}
                                {option.title}
                              </div>
                              <div className="small text-muted">{option.description}</div>
                            </div>
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

        {/* COURSES & BRANCHES SECTION */}
        {courseBranches.title && (
          <section className="mt-4 mt-md-5">
            <div className="container">
              <SectionTitle
                icon={<Scale size={18} className="text-primary" />}
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