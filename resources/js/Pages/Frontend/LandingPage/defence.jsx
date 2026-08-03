// "use client";

// import React from "react";

// import { motion } from "framer-motion";
// import HeroInner from "@/Components/Frontend/Hero/HeroInner";
// import FrontendLayout from "@/Layouts/FrontendLayout";


// import {
//   Shield,
//   GraduationCap,
//   FileText,
//   BadgeCheck,
//   ArrowRight,
//   ClipboardList,
//   Anchor,
//   Wind,
//   Star,
//   Target,
//   Users,
//   Award,
//   Zap,
//   TrendingUp,
// } from "lucide-react";

// /**
//  * Defence Forces Landing Page — Complete Guide
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

// export default function DefenceLandingPage() {
//   return (
    

//        <FrontendLayout>
//           <HeroInner
//             title="Career Guide - Defence Forces"
//             breadcrumb="Career Guide - Defence Forces"
//             description="Here you can explore all defence-related links."
//           />
//           <div className="pb-5">

//       {/* HERO */}
//       <div className="w-100 nitLightGradient">
//         <div className="container py-4 py-md-5">
//           <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
//             <div style={{ maxWidth: 720 }}>
//               <h1 className="section-heading mb-2">
//                 Defence Forces{" "}
//                 <span className="gradient-text">Career Guide</span>
//               </h1>

//               <div className="text-muted fw-semibold mb-3">
//                 Entry Routes, Exams, Services & Preparation — A Complete Roadmap
//               </div>

//               <p className="text-muted mb-3" style={{ lineHeight: 1.7 }}>
//                 A career in the Indian Armed Forces — Army, Navy, or Air Force — is
//                 one of the most honourable and structured paths available. But the
//                 entry routes are varied and can be confusing: NDA after Class 12, CDS
//                 after graduation, AFCAT for Air Force, TES for technical entry, and
//                 many more. Each has its own eligibility, exam, and selection process.
//                 This page maps it all clearly.
//               </p>

//               <p className="text-muted mb-0" style={{ lineHeight: 1.7 }}>
//                 Whether you're a <b>Class 11–12 student</b> aiming for NDA, or a
//                 <b> graduate</b> targeting a commissioned officer role through CDS or
//                 AFCAT — you'll find the right entry route, exam details, preparation
//                 guidance, and honest expectations here.
//               </p>
//             </div>

//             {/* mini stats */}
//             <div className="d-grid gap-2" style={{ minWidth: 260 }}>
//               <div className="p-3 rounded-4 bg-white border shadow-sm">
//                 <div className="small text-muted">Primary entry exams</div>
//                 <div className="fw-bold d-flex align-items-center gap-2">
//                   <ClipboardList size={16} className="text-primary" />
//                   NDA · CDS · AFCAT
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
//                   icon={<Shield size={18} className="text-primary" />}
//                   title="Defence — By Profession"
//                   desc="Full career overview for defence as a profession."
//                   href="/career/by-profession/defence"
//                 />
//               </div>
//               <div className="col-12 col-md-6 col-xl-3">
//                 <QuickLink
//                   icon={<Target size={18} className="text-danger" />}
//                   title="NDA Exam"
//                   desc="Officer entry after Class 12 — Army, Navy, Air Force."
//                   href="/exams/agri/defence"
//                 />
//               </div>
//               <div className="col-12 col-md-6 col-xl-3">
//                 <QuickLink
//                   icon={<Award size={18} className="text-success" />}
//                   title="CDS / AFCAT"
//                   desc="Graduate-level commissioned officer entries."
//                   href="/exams/agri/defence"
//                 />
//               </div>
//               <div className="col-12 col-md-6 col-xl-3">
//                 <QuickLink
//                   icon={<GraduationCap size={18} className="text-warning" />}
//                   title="All Defence Exams"
//                   desc="NDA, CDS, TES, AFCAT, Soldier entry and more."
//                   href="/exams/agri/defence"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =========================
//           NDA — Detailed Section
//       ========================= */}
//       <section className="py-5 py-lg-6">
//         <div className="container">
//           <div className="row justify-content-start">
//             <div className="col-lg-9">
//               <div className="mb-4 mb-lg-5">
//                 <h2 className="section-heading mb-3">
//                   <span className="gradient-text">NDA:</span> The Main Entry After
//                   Class 12
//                 </h2>

//                 <p className="text-muted mb-0">
//                   The National Defence Academy (NDA) examination, conducted by UPSC, is
//                   the most prestigious entry route into the Indian Armed Forces for students
//                   straight out of Class 12. Selected candidates join the NDA at Khadakwasla
//                   (Pune) for a 3-year joint training programme, after which they are
//                   commissioned as officers into the <strong>Army, Navy, or Air Force</strong>.
//                   If your goal is to become a commissioned officer and you are still in
//                   school, NDA is the earliest and most direct route available.
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
//                       Written Test
//                     </div>
//                     <div className="fw-semibold fs-6">
//                       Mathematics + General Ability Test (GAT)
//                     </div>
//                   </div>

//                   <div className="col-md-4">
//                     <div
//                       className="small text-uppercase text-muted fw-semibold mb-1 gradient-text"
//                       style={{ letterSpacing: ".08em" }}
//                     >
//                       Selection Stages
//                     </div>
//                     <div className="fw-semibold fs-6">
//                       Written Exam → SSB Interview → Medical
//                     </div>
//                   </div>

//                   <div className="col-md-4">
//                     <div
//                       className="small text-uppercase text-muted fw-semibold mb-1 gradient-text"
//                       style={{ letterSpacing: ".08em" }}
//                     >
//                       Conducted By
//                     </div>
//                     <div className="fw-semibold fs-6">UPSC (twice a year)</div>
//                   </div>
//                 </div>

//                 <hr className="my-4" />

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
//                       <div className="fw-semibold mb-1">Age</div>
//                       <div className="small text-muted">
//                         16.5 to 19.5 years at the time of commencement of
//                         the course (unmarried male candidates only)
//                       </div>
//                     </div>

//                     <div className="col-md-4">
//                       <div className="fw-semibold mb-1">Education</div>
//                       <div className="small text-muted">
//                         Class 12 passed or appearing<br />
//                         <strong>Army:</strong> Any stream<br />
//                         <strong>Navy / Air Force:</strong> PCM compulsory
//                       </div>
//                     </div>

//                     <div className="col-md-4">
//                       <div className="fw-semibold mb-1">Physical Standards</div>
//                       <div className="small text-muted">
//                         Height, weight, and vision standards apply. Medical
//                         fitness is tested after clearing written exam and SSB.
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
//                   <div className="fw-semibold">
//                     Online via UPSC (upsconline.nic.in) — two notifications per year
//                   </div>
//                 </div>

//                 <hr className="my-4" />

//                 <div className="d-flex flex-wrap align-items-center gap-4">
//                   <div>
//                     <div className="small text-muted">NDA Official Info</div>
//                     <a
//                       href="https://upsc.gov.in/"
//                       target="_blank"
//                       rel="noreferrer"
//                       className="iitWebsiteLink d-inline-flex align-items-center gap-1 mt-1"
//                     >
//                       <span className="small">https://upsc.gov.in/</span>
//                     </a>
//                   </div>
//                   <div>
//                     <div className="small text-muted">NDA Academy</div>
//                     <a
//                       href="https://www.nda.nic.in/"
//                       target="_blank"
//                       rel="noreferrer"
//                       className="iitWebsiteLink d-inline-flex align-items-center gap-1 mt-1"
//                     >
//                       <span className="small">https://www.nda.nic.in/</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* What NDA unlocks */}
//               <div className="mb-4 mb-lg-5">
//                 <h3 className="h5 fw-semibold mb-3">What NDA unlocks for you</h3>
//                 <p className="text-muted" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                   NDA is not just an exam — it is the gateway to a full officer career
//                   across all three services. Cadets undergo joint training at the NDA
//                   followed by service-specific academies, emerging as commissioned
//                   officers with a degree and the full benefits of service life.
//                 </p>

//                 <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
//                   <li>
//                     <strong>Indian Army</strong> — further training at IMA (Indian Military
//                     Academy, Dehradun); commissioned as Lieutenant
//                   </li>
//                   <li>
//                     <strong>Indian Navy</strong> — further training at INA (Indian Naval
//                     Academy, Ezhimala); commissioned as Sub-Lieutenant
//                   </li>
//                   <li>
//                     <strong>Indian Air Force</strong> — further training at AFA (Air Force
//                     Academy, Hyderabad); commissioned as Flying Officer
//                   </li>
//                   <li>
//                     B.Sc degree from JNU upon NDA completion (integrated academic programme)
//                   </li>
//                   <li>
//                     A structured career with salary, allowances, housing, medical, and a
//                     pension-backed service life
//                   </li>
//                 </ul>
//               </div>

//               {/* Other entry routes after Class 12 */}
//               <div className="mb-4 mb-lg-5">
//                 <h3 className="h5 fw-semibold mb-3">
//                   Other entry routes after Class 12
//                 </h3>

//                 <div className="row g-3">
//                   <div className="col-md-6">
//                     <div className="p-3 rounded-3 border bg-white h-100">
//                       <div className="fw-semibold mb-1">TES — Technical Entry Scheme (Army)</div>
//                       <div className="small text-muted">
//                         For Class 12 PCM students with 70%+ marks. Direct entry into the
//                         Army as a technical officer. No written exam — shortlisting is
//                         based on Class 12 marks + SSB interview. Leads to B.Tech + commission.
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="p-3 rounded-3 border bg-white h-100">
//                       <div className="fw-semibold mb-1">10+2 Cadet Entry Scheme (Navy)</div>
//                       <div className="small text-muted">
//                         Entry into the Indian Navy for PCM students after Class 12.
//                         Selected candidates undergo B.Tech training at IIEST (formerly
//                         BEIT) and are commissioned as officers upon completion.
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Who should aim for NDA */}
//               <div className="mb-4 mb-lg-5">
//                 <h3 className="h5 fw-semibold mb-3">Who should aim for NDA</h3>
//                 <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                   NDA is suited for students who have a strong, genuine desire for a
//                   life of service, discipline, and adventure — not just a government
//                   job with good pay. The training is physically and mentally demanding,
//                   and the lifestyle is fundamentally different from civilian careers.
//                 </p>

//                 <div className="mt-3">
//                   <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
//                     <li>
//                       You have a genuine interest in national service, not just the
//                       perks of a defence career
//                     </li>
//                     <li>
//                       You are physically fit and willing to maintain high fitness
//                       standards throughout your career
//                     </li>
//                     <li>
//                       You are comfortable with a structured, disciplined lifestyle —
//                       postings, transfers, and service obligations
//                     </li>
//                     <li>
//                       You have a strong foundation in Mathematics (essential for the
//                       written test and technical branches)
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Prep plan */}
//               <div>
//                 <h3 className="h5 fw-semibold mb-3">
//                   A practical NDA preparation plan (simple & effective)
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
//                       Master Class 11–12 Mathematics — it is the core
//                     </div>
//                     <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                       The Mathematics paper (300 marks) covers Class 11–12 topics:
//                       Algebra, Calculus, Trigonometry, Matrices, Probability, and
//                       Analytical Geometry. A strong Maths score is the most reliable
//                       way to clear the written cut-off. Focus on concept clarity and
//                       speed — practice previous year papers regularly.
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
//                       GAT — build GK, English, and science simultaneously
//                     </div>
//                     <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                       The General Ability Test (GAT, 600 marks) covers English,
//                       Physics, Chemistry, Geography, History, Current Affairs, and
//                       General Science. Read a newspaper daily for English and GK.
//                       Revise NCERT Science and Social Studies for the subject sections.
//                       This section rewards consistent, broad reading — not cramming.
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
//                       Physical fitness — train from the start, not just before SSB
//                     </div>
//                     <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                       The SSB process and NDA training both demand a high level of
//                       physical fitness. Start running, swimming, and building general
//                       fitness from your Class 11 itself — do not wait until after the
//                       written exam. A strong physical base also builds the mental
//                       confidence and discipline that SSB assessors look for.
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
//                       Prepare for the SSB — it is a different kind of test
//                     </div>
//                     <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                       The SSB (Services Selection Board) is a 5-day psychological and
//                       personality assessment — not an exam you can cram for. Read about
//                       the SSB process early, understand what Officer Like Qualities (OLQs)
//                       mean, and work genuinely on your communication, leadership awareness,
//                       and self-confidence. Authenticity matters more than prepared answers.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <hr className="my-4" />

//       {/* Entry Routes — by stage */}
//       <section className="pt-lg-5 pb-lg-5">
//         <div className="container">
//           <SectionTitle
//             icon={<FileText size={18} className="text-success" />}
//             title="Entry Routes by Stage"
//             subtitle="Choose the right entry route based on where you are in your education."
//           />

//           <div className="mt-4 mt-lg-5">
//             <div className="row g-4">

//               {/* After Class 10 */}
//               <div className="col-lg-12">
//                 <div className="fw-bold d-flex align-items-center gap-2 mb-2">
//                   After Class 10th — Soldier / Airman / Sailor (Other Ranks)
//                 </div>
//                 <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                   Class 10 pass candidates can apply for various non-officer (Other
//                   Ranks) roles in the Armed Forces. These are essential, respected
//                   positions — not lesser careers. They offer a structured service life,
//                   good pay, and clear promotion pathways.
//                 </p>

//                 <ul className="text-muted mb-3" style={{ lineHeight: 2 }}>
//                   <li>
//                     <strong>Indian Army:</strong> Agniveer (Agnipath scheme) in various
//                     categories — General Duty, Technical, Clerk, Tradesman
//                   </li>
//                   <li>
//                     <strong>Indian Navy:</strong> Agniveer (SSR, MR) — Sailor roles in
//                     technical and non-technical trades
//                   </li>
//                   <li>
//                     <strong>Indian Air Force:</strong> Agniveer Vayu — Airman roles
//                     across science, arts, and commerce streams (Class 12 required)
//                   </li>
//                 </ul>

//                 <div className="d-flex gap-3 flex-wrap">
//                   <LinkRow
//                     label="Defence Exams — All Routes"
//                     meta="Exams"
//                     href="/exams/agri/defence"
//                   />
//                 </div>
//               </div>

//               {/* After Class 12 */}
//               <div className="col-lg-12 border-top pt-4 pt-lg-5 mt-lg-5 mt-4">
//                 <div className="fw-bold d-flex align-items-center gap-2 mb-2">
//                   After Class 12th — Officer Entry via NDA / TES
//                 </div>
//                 <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                   The most sought-after officer entry routes begin right after Class 12.
//                   NDA is the primary and most prestigious route. TES (Army) and 10+2
//                   Cadet Entry (Navy) are additional technical pathways for PCM students.
//                 </p>

//                 <ul className="text-muted mb-3" style={{ lineHeight: 2 }}>
//                   <li>
//                     <strong>NDA:</strong> Any stream for Army; PCM compulsory for Navy/Air
//                     Force — UPSC written exam + SSB + Medical
//                   </li>
//                   <li>
//                     <strong>TES (Army):</strong> PCM with 70%+ in Class 12 — merit-based
//                     shortlisting + SSB + Medical
//                   </li>
//                   <li>
//                     <strong>10+2 Cadet Entry (Navy):</strong> PCM students — leads to
//                     B.Tech + Naval commission
//                   </li>
//                 </ul>

//                 <div className="d-flex gap-3 flex-wrap">
//                   <LinkRow
//                     label="Defence Exams (NDA / TES)"
//                     meta="Exams"
//                     href="/exams/agri/defence"
//                   />
//                   <LinkRow
//                     label="Defence — Career Overview"
//                     meta="Career"
//                     href="/career/by-profession/defence"
//                   />
//                 </div>
//               </div>

//               {/* After Graduation */}
//               <div className="col-lg-12 border-top pt-4 pt-lg-5 mt-lg-5 mt-4">
//                 <div className="fw-bold d-flex align-items-center gap-2 mb-2">
//                   After Graduation — CDS, AFCAT & Other Entries
//                 </div>
//                 <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                   Graduates from any stream can apply for commissioned officer roles
//                   through CDS (Combined Defence Services) exam or AFCAT (Air Force
//                   Common Admission Test). These are among the most competitive
//                   graduate-level officer entries available.
//                 </p>

//                 <ul className="text-muted mb-3" style={{ lineHeight: 2 }}>
//                   <li>
//                     <strong>CDS:</strong> UPSC exam for IMA (Army), INA (Navy), AFA
//                     (Air Force), and OTA (Officers Training Academy) — different
//                     educational eligibility for each
//                   </li>
//                   <li>
//                     <strong>AFCAT:</strong> Air Force Common Admission Test for Flying,
//                     Ground Duty (Technical and Non-Technical) branches
//                   </li>
//                   <li>
//                     <strong>SSC Technical / Non-Technical (Army):</strong> Short Service
//                     Commission entries for engineering graduates and non-technical graduates
//                   </li>
//                   <li>
//                     <strong>JAG Entry (Army):</strong> Judge Advocate General — for
//                     law graduates (LLB)
//                   </li>
//                 </ul>

//                 <div className="d-flex gap-3 flex-wrap">
//                   <LinkRow
//                     label="Defence Exams (CDS / AFCAT)"
//                     meta="Exams"
//                     href="/exams/agri/defence"
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

//       {/* The Three Services */}
//       <section className="mt-4 mt-md-5">
//         <div className="container">
//           <SectionTitle
//             icon={<Shield size={18} className="text-primary" />}
//             title="The Three Services"
//             subtitle="Understand each service — choose based on genuine interest, not just prestige."
//           />

//           <div className="row g-3">
//             <div className="col-12">
//               <p className="text-muted mb-0" style={{ lineHeight: 1.9 }}>
//                 The Indian Armed Forces have three distinct services — each with its own
//                 culture, branch structure, and career trajectory. While NDA and CDS
//                 allow you to indicate a service preference, understanding each one
//                 helps you make a more deliberate choice.
//               </p>
//             </div>

//             {/* Indian Army */}
//             <div className="col-12 col-md-4">
//               <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
//                 <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
//                   <Shield size={16} className="text-primary" />
//                   Indian Army
//                 </div>
//                 <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                   The largest of the three services. Offers the widest range of officer
//                   arms and services — Infantry, Armoured Corps, Artillery, Engineers,
//                   Signals, Army Service Corps, Medical, and more.
//                 </div>
//                 <ul className="small text-muted" style={{ lineHeight: 2 }}>
//                   <li><strong>Entry routes:</strong> NDA, CDS (IMA), TES, SSC</li>
//                   <li><strong>Training:</strong> IMA, Dehradun</li>
//                   <li>
//                     <strong>Career breadth:</strong> Operations, administration, technical,
//                     intelligence, logistics
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Indian Navy */}
//             <div className="col-12 col-md-4">
//               <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
//                 <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
//                   <Anchor size={16} className="text-success" />
//                   Indian Navy
//                 </div>
//                 <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                   Smaller and more technical than the Army. Officer roles include
//                   Executive (ship operations and command), Engineering, Electrical,
//                   Education, and Naval Architecture branches.
//                 </div>
//                 <ul className="small text-muted" style={{ lineHeight: 2 }}>
//                   <li><strong>Entry routes:</strong> NDA (PCM), CDS (INA), 10+2 Cadet Entry</li>
//                   <li><strong>Training:</strong> INA, Ezhimala (Kerala)</li>
//                   <li>
//                     <strong>Career breadth:</strong> Warships, submarines, aviation,
//                     maritime operations
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Indian Air Force */}
//             <div className="col-12 col-md-4">
//               <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
//                 <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
//                   <Wind size={16} className="text-warning" />
//                   Indian Air Force
//                 </div>
//                 <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                   The most technically specialised service. Flying Branch (pilots),
//                   Ground Duty Technical (engineering), and Ground Duty Non-Technical
//                   (administration, logistics, education, accounts) are the main tracks.
//                 </div>
//                 <ul className="small text-muted" style={{ lineHeight: 2 }}>
//                   <li><strong>Entry routes:</strong> NDA (PCM), CDS (AFA), AFCAT</li>
//                   <li><strong>Training:</strong> AFA, Hyderabad (Dundigal)</li>
//                   <li>
//                     <strong>Career breadth:</strong> Fighter/transport/helicopter flying,
//                     aerospace engineering, air traffic control
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SSB Interview */}
//       <section className="mt-4 mt-md-5">
//         <div className="container">
//           <SectionTitle
//             icon={<Users size={18} className="text-danger" />}
//             title="The SSB Interview — What It Actually Is"
//             subtitle="Every officer entry route ends here. Understand it before you begin preparation."
//           />

//           <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm">
//             <p className="text-muted mb-4" style={{ lineHeight: 1.9 }}>
//               The Services Selection Board (SSB) is a 5-day psychological, physical,
//               and leadership assessment conducted at various centres across India.
//               It is not an exam you can crack with last-minute preparation — it tests
//               who you genuinely are, not what you have memorised. Understanding the
//               SSB process early gives you time to develop the qualities it looks for
//               rather than just practising for it.
//             </p>

//             <div className="row g-4">
//               <div className="col-md-6">
//                 <div className="fw-semibold mb-2">The 5-day process</div>
//                 <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
//                   <li>
//                     <strong>Day 1 — Screening:</strong> Officer Intelligence Rating (OIR)
//                     test + Picture Perception and Description Test (PPDT). About 60% of
//                     candidates are screened out here.
//                   </li>
//                   <li>
//                     <strong>Days 2–4 — Psychological & GTO Tests:</strong> Thematic
//                     Apperception Test, Word Association, Situation Reaction Test, Group
//                     Discussions, Group Planning Exercise, Outdoor GTO tasks
//                   </li>
//                   <li>
//                     <strong>Day 4 — Personal Interview:</strong> In-depth one-on-one
//                     interview with an Interviewing Officer
//                   </li>
//                   <li>
//                     <strong>Day 5 — Conference:</strong> Final board conference; results
//                     announced. Recommended candidates proceed to medical examination.
//                   </li>
//                 </ul>
//               </div>

//               <div className="col-md-6">
//                 <div className="fw-semibold mb-2">Officer Like Qualities (OLQs)</div>
//                 <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                   The SSB assesses 15 defined Officer Like Qualities grouped into four
//                   categories. These cannot be faked — they are evaluated across multiple
//                   situations over 5 days to ensure consistency.
//                 </p>
//                 <div className="row g-2">
//                   {[
//                     "Effective Intelligence",
//                     "Reasoning Ability",
//                     "Organising Ability",
//                     "Power of Expression",
//                     "Social Adaptability",
//                     "Cooperation",
//                     "Sense of Responsibility",
//                     "Initiative",
//                     "Self Confidence",
//                     "Speed of Decision",
//                     "Ability to Influence",
//                     "Liveliness",
//                     "Determination",
//                     "Courage",
//                     "Stamina",
//                   ].map((olq) => (
//                     <div key={olq} className="col-6">
//                       <div
//                         className="small rounded-3 px-3 py-2 border text-muted"
//                         style={{ background: "#fafafa" }}
//                       >
//                         {olq}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Reality check */}
//       <section className="mt-4 mt-md-5">
//         <div className="container">
//           <SectionTitle
//             icon={<TrendingUp size={18} className="text-warning" />}
//             title="What a Defence Career Actually Demands"
//             subtitle="An honest look at service life before you commit to this path."
//           />

//           <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm">
//             <p className="text-muted mb-4" style={{ lineHeight: 1.9 }}>
//               A defence career is among the most rewarding — but it requires a genuinely
//               different lifestyle commitment compared to civilian careers. Understanding
//               what it actually involves helps you prepare with the right mindset.
//             </p>

//             <div className="row g-4">
//               <div className="col-md-6">
//                 <div className="fw-semibold mb-2">What the career offers</div>
//                 <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
//                   <li>
//                     Early responsibility — junior officers lead teams from day one
//                   </li>
//                   <li>
//                     Structured pay, allowances, housing, medical, and a strong
//                     pension-backed retirement package
//                   </li>
//                   <li>
//                     Adventure, physical challenge, and a strong sense of brotherhood
//                     and purpose
//                   </li>
//                   <li>
//                     Post-retirement opportunities in corporate security, defence PSUs,
//                     and government advisory roles
//                   </li>
//                 </ul>
//               </div>

//               <div className="col-md-6">
//                 <div className="fw-semibold mb-2">What it requires</div>
//                 <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
//                   <li>
//                     Postings across India (and sometimes abroad) — family relocation
//                     is a regular part of service life
//                   </li>
//                   <li>
//                     Sustained physical fitness throughout your career — not just
//                     during selection
//                   </li>
//                   <li>
//                     Willingness to serve in remote or operationally active areas when
//                     required
//                   </li>
//                   <li>
//                     Acceptance that the career path is service-first — personal
//                     preferences are secondary to operational requirements
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="mt-4">
//               <LinkRow
//                 label="Defence Forces — Career Overview"
//                 href="/career/by-profession/defence"
//               />
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
  Shield,
  GraduationCap,
  FileText,
  BadgeCheck,
  ArrowRight,
  ClipboardList,
  Anchor,
  Wind,
  Star,
  Target,
  Users,
  Award,
  Zap,
  TrendingUp,
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
    Shield: <Shield size={size} className={className || "text-primary"} />,
    GraduationCap: <GraduationCap size={size} className={className || "text-primary"} />,
    FileText: <FileText size={size} className={className || "text-success"} />,
    BadgeCheck: <BadgeCheck size={size} className={className || "text-success"} />,
    ArrowRight: <ArrowRight size={size} className={className || "text-muted"} />,
    ClipboardList: <ClipboardList size={size} className={className || "text-primary"} />,
    Anchor: <Anchor size={size} className={className || "text-success"} />,
    Wind: <Wind size={size} className={className || "text-warning"} />,
    Star: <Star size={size} className={className || "text-warning"} />,
    Target: <Target size={size} className={className || "text-danger"} />,
    Users: <Users size={size} className={className || "text-danger"} />,
    Award: <Award size={size} className={className || "text-success"} />,
    Zap: <Zap size={size} className={className || "text-warning"} />,
    TrendingUp: <TrendingUp size={size} className={className || "text-warning"} />,
  };
  return icons[iconName] || null;
};

export default function DefenceLandingPage({ content }) {
  // Use content from database or fallback to empty object
  const pageContent = content || {};

  // Extract sections with fallbacks
  const hero = pageContent?.hero || {};
  const primaryExam = pageContent?.primaryExam || {};
  const entryRoutes = pageContent?.entryRoutes || {};
  const services = pageContent?.services || {};
  const ssbInterview = pageContent?.ssbInterview || {};
  const realityCheck = pageContent?.realityCheck || {};

  return (
    <FrontendLayout>
      <HeroInner
        title="Career Guide - Defence Forces"
        breadcrumb="Career Guide - Defence Forces"
        description="Here you can explore all defence-related links."
      />

      <div className="pb-5">
        {/* HERO SECTION */}
        <div className="w-100 nitLightGradient">
          <div className="container py-4 py-md-5">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
              <div style={{ maxWidth: 720 }}>
                <h1 className="section-heading mb-2">
                  {hero.title || "Defence Forces"}{" "}
                  <span className="gradient-text">Career Guide</span>
                </h1>

                <div className="text-muted fw-semibold mb-3">
                  {hero.subtitle || "Entry Routes, Exams, Services & Preparation — A Complete Roadmap"}
                </div>

                <p className="text-muted mb-3" style={{ lineHeight: 1.7 }}>
                  {hero.description || "A career in the Indian Armed Forces — Army, Navy, or Air Force — is one of the most honourable and structured paths available. But the entry routes are varied and can be confusing: NDA after Class 12, CDS after graduation, AFCAT for Air Force, TES for technical entry, and many more. Each has its own eligibility, exam, and selection process. This page maps it all clearly."}
                </p>

                <p className="text-muted mb-0" style={{ lineHeight: 1.7 }}>
                  {hero.description2 || "Whether you're a Class 11–12 student aiming for NDA, or a graduate targeting a commissioned officer role through CDS or AFCAT — you'll find the right entry route, exam details, preparation guidance, and honest expectations here."}
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

        {/* PRIMARY EXAM SECTION - NDA */}
        {primaryExam.heading && (
          <section className="py-5 py-lg-6">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-9">
                  <div className="mb-4 mb-lg-5">
                    <h2 className="section-heading mb-3">
                      <span className="gradient-text">{primaryExam.heading?.split(':')[0] || 'NDA'}:</span>{" "}
                      {primaryExam.heading?.split(':')[1] || "The Main Entry After Class 12"}
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
                      {primaryExam.ndaAcademyWebsite && (
                        <div>
                          <div className="small text-muted">NDA Academy</div>
                          <a
                            href={primaryExam.ndaAcademyWebsite}
                            target="_blank"
                            rel="noreferrer"
                            className="iitWebsiteLink d-inline-flex align-items-center gap-1 mt-1"
                          >
                            <span className="small">{primaryExam.ndaAcademyWebsite}</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* What NDA unlocks */}
                  {primaryExam.unlocks && primaryExam.unlocks.length > 0 && (
                    <div className="mb-4 mb-lg-5">
                      <h3 className="h5 fw-semibold mb-3">What NDA unlocks for you</h3>
                      <p className="text-muted" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                        {primaryExam.unlocksDescription || "NDA is not just an exam — it is the gateway to a full officer career across all three services. Cadets undergo joint training at the NDA followed by service-specific academies, emerging as commissioned officers with a degree and the full benefits of service life."}
                      </p>
                      <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
                        {primaryExam.unlocks.map((item, index) => (
                          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Other entry routes after Class 12 */}
                  {primaryExam.otherExams && primaryExam.otherExams.length > 0 && (
                    <div className="mb-4 mb-lg-5">
                      <h3 className="h5 fw-semibold mb-3">Other entry routes after Class 12</h3>
                      <div className="row g-3">
                        {primaryExam.otherExams.map((exam, index) => (
                          <div className="col-md-6" key={index}>
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
                      <h3 className="h5 fw-semibold mb-3">Who should aim for NDA</h3>
                      <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                        {primaryExam.whoShouldFocusIntro || "NDA is suited for students who have a strong, genuine desire for a life of service, discipline, and adventure — not just a government job with good pay. The training is physically and mentally demanding, and the lifestyle is fundamentally different from civilian careers."}
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
                      <h3 className="h5 fw-semibold mb-3">A practical NDA preparation plan (simple & effective)</h3>
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

        {/* ENTRY ROUTES SECTION */}
        {entryRoutes.title && (
          <section className="pt-lg-5 pb-lg-5">
            <div className="container">
              <SectionTitle
                icon={<FileText size={18} className="text-success" />}
                title={entryRoutes.title}
                subtitle={entryRoutes.subtitle}
              />

              <div className="mt-4 mt-lg-5">
                <div className="row g-4">
                  {/* After Class 10 */}
                  {entryRoutes.after10 && (
                    <div className="col-lg-12">
                      <div className="fw-bold d-flex align-items-center gap-2 mb-2">
                        {entryRoutes.after10.title}
                      </div>
                      <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
                        {entryRoutes.after10.description}
                      </p>
                      <ul className="text-muted mb-3" style={{ lineHeight: 2 }}>
                        {entryRoutes.after10.points?.map((point, index) => (
                          <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                        ))}
                      </ul>
                      <div className="d-flex gap-3 flex-wrap">
                        {entryRoutes.after10.links?.map((link, index) => (
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

                  {/* After Class 12 */}
                  {entryRoutes.after12 && (
                    <div className="col-lg-12 border-top pt-4 pt-lg-5 mt-lg-5 mt-4">
                      <div className="fw-bold d-flex align-items-center gap-2 mb-2">
                        {entryRoutes.after12.title}
                      </div>
                      <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
                        {entryRoutes.after12.description}
                      </p>
                      <ul className="text-muted mb-3" style={{ lineHeight: 2 }}>
                        {entryRoutes.after12.points?.map((point, index) => (
                          <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                        ))}
                      </ul>
                      <div className="d-flex gap-3 flex-wrap">
                        {entryRoutes.after12.links?.map((link, index) => (
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
                  {entryRoutes.afterGraduation && (
                    <div className="col-lg-12 border-top pt-4 pt-lg-5 mt-lg-5 mt-4">
                      <div className="fw-bold d-flex align-items-center gap-2 mb-2">
                        {entryRoutes.afterGraduation.title}
                      </div>
                      <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
                        {entryRoutes.afterGraduation.description}
                      </p>
                      <ul className="text-muted mb-3" style={{ lineHeight: 2 }}>
                        {entryRoutes.afterGraduation.points?.map((point, index) => (
                          <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                        ))}
                      </ul>
                      <div className="d-flex gap-3 flex-wrap">
                        {entryRoutes.afterGraduation.links?.map((link, index) => (
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

        {/* THE THREE SERVICES SECTION */}
        {services.title && (
          <section className="mt-4 mt-md-5">
            <div className="container">
              <SectionTitle
                icon={<Shield size={18} className="text-primary" />}
                title={services.title}
                subtitle={services.subtitle}
              />

              <div className="row g-3">
                <div className="col-12">
                  <p className="text-muted mb-0" style={{ lineHeight: 1.9 }}>
                    {services.intro}
                  </p>
                </div>

                {services.cards?.map((card, index) => (
                  <div className="col-12 col-md-4" key={index}>
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SSB INTERVIEW SECTION */}
        {ssbInterview.title && (
          <section className="mt-4 mt-md-5">
            <div className="container">
              <SectionTitle
                icon={<Users size={18} className="text-danger" />}
                title={ssbInterview.title}
                subtitle={ssbInterview.subtitle}
              />

              <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm">
                <p className="text-muted mb-4" style={{ lineHeight: 1.9 }}>
                  {ssbInterview.description}
                </p>

                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="fw-semibold mb-2">The 5-day process</div>
                    <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
                      {ssbInterview.process?.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  </div>

                  <div className="col-md-6">
                    <div className="fw-semibold mb-2">Officer Like Qualities (OLQs)</div>
                    <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
                      The SSB assesses 15 defined Officer Like Qualities grouped into four
                      categories. These cannot be faked — they are evaluated across multiple
                      situations over 5 days to ensure consistency.
                    </p>
                    <div className="row g-2">
                      {ssbInterview.olqs?.map((olq, index) => (
                        <div key={index} className="col-6">
                          <div
                            className="small rounded-3 px-3 py-2 border text-muted"
                            style={{ background: "#fafafa" }}
                          >
                            {olq}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* REALITY CHECK SECTION */}
        {realityCheck.title && (
          <section className="mt-4 mt-md-5">
            <div className="container">
              <SectionTitle
                icon={<TrendingUp size={18} className="text-warning" />}
                title={realityCheck.title}
                subtitle={realityCheck.subtitle}
              />

              <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm">
                <p className="text-muted mb-4" style={{ lineHeight: 1.9 }}>
                  {realityCheck.description}
                </p>

                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="fw-semibold mb-2">What the career offers</div>
                    <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
                      {realityCheck.offers?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-md-6">
                    <div className="fw-semibold mb-2">What it requires</div>
                    <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
                      {realityCheck.requires?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {realityCheck.link && (
                  <div className="mt-4">
                    <LinkRow
                      label={realityCheck.link.label}
                      href={realityCheck.link.href}
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </FrontendLayout>
  );
}