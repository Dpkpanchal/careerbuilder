// // "use client";

// // import React from "react";

// // import { motion } from "framer-motion";
// // import HeroInner from "@/Components/Frontend/Hero/HeroInner";
// // import FrontendLayout from "@/Layouts/FrontendLayout";

// // import {
// //   Tv,
// //   GraduationCap,
// //   FileText,
// //   Building2,
// //   BadgeCheck,
// //   ArrowRight,
// //   ClipboardList,
// //   Newspaper,
// //   Radio,
// //   Globe,
// //   Megaphone,
// //   Camera,
// //   Mic,
// // } from "lucide-react";

// // /**
// //  * Media & Journalism Landing Page — Complete Guide
// //  * Design mirrors: /landing-pages/medical.js
// //  */

// // const fadeUp = {
// //   initial: { opacity: 0, y: 10 },
// //   whileInView: { opacity: 1, y: 0 },
// //   viewport: { once: true, amount: 0.2 },
// //   transition: { duration: 0.35 },
// // };

// // const QuickLink = ({ icon, title, desc, href }) => (
// //   <a
// //     href={href}
// //     className="text-decoration-none d-block h-100"
// //     style={{ color: "inherit" }}
// //   >
// //     <div
// //       className="h-100 p-3 rounded-4 border bg-white shadow-sm"
// //       style={{ borderColor: "rgba(0,0,0,.08)" }}
// //     >
// //       <div className="d-flex align-items-start gap-3">
// //         <div
// //           className="rounded-3 d-flex align-items-center justify-content-center"
// //           style={{
// //             width: 42,
// //             height: 42,
// //             background: "rgba(13,110,253,.08)",
// //             border: "1px solid rgba(13,110,253,.15)",
// //           }}
// //         >
// //           {icon}
// //         </div>
// //         <div className="flex-grow-1">
// //           <div className="fw-semibold">{title}</div>
// //           <div className="small text-muted">{desc}</div>
// //           <div className="small fw-semibold text-primary mt-2 d-inline-flex align-items-center gap-1">
// //             Explore <ArrowRight size={14} />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </a>
// // );

// // const LinkRow = ({ label, href, meta }) => (
// //   <a
// //     href={href}
// //     className="d-flex align-items-center justify-content-between text-decoration-none px-3 py-2 rounded-3 linkRowHover"
// //     style={{
// //       border: "1px solid rgba(0,0,0,.08)",
// //       background: "#fff",
// //       color: "inherit",
// //     }}
// //   >
// //     <div className="d-flex align-items-center gap-2">
// //       <span className="fw-semibold">{label}</span>
// //       {meta ? (
// //         <span className="badge bg-light text-dark border">{meta}</span>
// //       ) : null}
// //     </div>
// //     <ArrowRight size={16} className="text-muted" />
// //   </a>
// // );

// // const SectionTitle = ({ icon, title, subtitle }) => (
// //   <div className="d-flex align-items-start gap-3 mb-3">
// //     <div
// //       className="rounded-3 d-flex align-items-center justify-content-center"
// //       style={{
// //         width: 44,
// //         height: 44,
// //         background: "rgba(25,135,84,.10)",
// //         border: "1px solid rgba(25,135,84,.18)",
// //       }}
// //     >
// //       {icon}
// //     </div>
// //     <div>
// //       <h2 className="h5 fw-bold mb-1">{title}</h2>
// //       {subtitle ? <div className="text-muted small">{subtitle}</div> : null}
// //     </div>
// //   </div>
// // );

// // export default function MediaLandingPage() {
// //   return (

// //      <FrontendLayout>
// //           <HeroInner
// //             title="Career Guide - Media & Journalism"
// //             breadcrumb="Career Guide - Media & Journalism"
// //             description="Here you can explore all media-related links."
// //           />


// //     <div className="pb-5">
// //       {/* HERO */}

      

// //       <div className="w-100 nitLightGradient">
// //         <div className="container py-4 py-md-5">
// //           <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
// //             <div style={{ maxWidth: 720 }}>
// //               <h1 className="section-heading mb-2">
// //                 Media & Journalism{" "}
// //                 <span className="gradient-text">Career Guide</span>
// //               </h1>

// //               <div className="text-muted fw-semibold mb-3">
// //                 Courses, Entrance Exams, Colleges & Career Scope — A Complete Roadmap
// //               </div>

// //               <p className="text-muted mb-3" style={{ lineHeight: 1.7 }}>
// //                 Media and journalism offer some of the most dynamic and impactful career
// //                 paths available — but the field is broad. Print journalism, broadcast,
// //                 digital content, public relations, advertising, film, radio, and social
// //                 media are all distinct tracks with different skills and entry points.
// //                 Knowing where you fit makes the difference between a focused path and
// //                 years of confusion.
// //               </p>

// //               <p className="text-muted mb-0" style={{ lineHeight: 1.7 }}>
// //                 Whether you're a <b>Class 12 student</b> choosing between a BA in
// //                 Journalism and a Mass Communication degree, or a <b>graduate</b> looking
// //                 at postgraduate programmes or industry entry, this page brings together
// //                 clear pathways, entrance exam guidance, course options, and direct links
// //                 to detailed pages across the portal.
// //               </p>
// //             </div>

// //             {/* mini stats */}
// //             <div className="d-grid gap-2" style={{ minWidth: 260 }}>
// //               <div className="p-3 rounded-4 bg-white border shadow-sm">
// //                 <div className="small text-muted">Top PG institute entrance</div>
// //                 <div className="fw-bold d-flex align-items-center gap-2">
// //                   <ClipboardList size={16} className="text-primary" />
// //                   IIMC Entrance Exam
// //                 </div>
// //               </div>

// //               <div className="p-3 rounded-4 bg-white border shadow-sm">
// //                 <div className="small text-muted">Need guidance?</div>
// //                 <div className="fw-bold d-flex align-items-center gap-2">
// //                   <BadgeCheck size={16} className="text-success" />
// //                   Counselor Support
// //                 </div>
// //                 <a
// //                   href="/counsellors/directory"
// //                   className="small text-primary fw-semibold text-decoration-none d-inline-flex align-items-center gap-1"
// //                 >
// //                   Connect with a Counselor <ArrowRight size={14} />
// //                 </a>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Quick actions */}
// //           <div className="mt-4">
// //             <div className="row g-3">
// //               <div className="col-12 col-md-6 col-xl-3">
// //                 <QuickLink
// //                   icon={<GraduationCap size={18} className="text-primary" />}
// //                   title="Media — By Profession"
// //                   desc="Full career overview for media and journalism."
// //                   href="/careers/media-journalism"
// //                 />
// //               </div>
// //               <div className="col-12 col-md-6 col-xl-3">
// //                 <QuickLink
// //                   icon={<Newspaper size={18} className="text-success" />}
// //                   title="After Class 12 • Arts"
// //                   desc="Pathways after Class 12 including media courses."
// //                   href="/careers/after-class-12-arts"
// //                 />
// //               </div>
// //               <div className="col-12 col-md-6 col-xl-3">
// //                 <QuickLink
// //                   icon={<Mic size={18} className="text-warning" />}
// //                   title="Mass Comm Exams"
// //                   desc="Entrance exams for mass communication programmes."
// //                   href="/exams/design/mass-comm"
// //                 />
// //               </div>
// //               <div className="col-12 col-md-6 col-xl-3">
// //                 <QuickLink
// //                   icon={<Camera size={18} className="text-danger" />}
// //                   title="After Graduation"
// //                   desc="PG, diploma and career options after your degree."
// //                   href="/careers/after-graduation"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* =========================
// //           IIMC — Detailed Section
// //       ========================= */}
// //       <section className="py-5 py-lg-6">
// //         <div className="container">
// //           <div className="row justify-content-start">
// //             <div className="col-lg-9">
// //               <div className="mb-4 mb-lg-5">
// //                 <h2 className="section-heading mb-3">
// //                   <span className="gradient-text">IIMC:</span> India's Top Journalism
// //                   Institute & Entrance
// //                 </h2>

// //                 <p className="text-muted mb-0">
// //                   The Indian Institute of Mass Communication (IIMC), New Delhi, is India's
// //                   most prestigious journalism and mass communication institute. Its annual
// //                   entrance examination is the most competitive in the country for PG
// //                   journalism programmes. An IIMC qualification is widely recognised across
// //                   print, broadcast, and digital media organisations. If your goal is
// //                   journalism at a national level, IIMC preparation should be your primary
// //                   focus.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="row justify-content-start">
// //             <div className="col-lg-12">
// //               <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm mb-4 mb-lg-5">

// //                 {/* Quick Facts */}
// //                 <div className="row g-4 mb-4">
// //                   <div className="col-md-4">
// //                     <div
// //                       className="small text-uppercase text-muted fw-semibold mb-1 gradient-text"
// //                       style={{ letterSpacing: ".08em" }}
// //                     >
// //                       Test Areas
// //                     </div>
// //                     <div className="fw-semibold fs-6">
// //                       English · General Knowledge · Current Affairs · Reasoning
// //                     </div>
// //                   </div>

// //                   <div className="col-md-4">
// //                     <div
// //                       className="small text-uppercase text-muted fw-semibold mb-1 gradient-text"
// //                       style={{ letterSpacing: ".08em" }}
// //                     >
// //                       Question Type
// //                     </div>
// //                     <div className="fw-semibold fs-6">
// //                       MCQ + Descriptive / Essay (varies by programme)
// //                     </div>
// //                   </div>

// //                   <div className="col-md-4">
// //                     <div
// //                       className="small text-uppercase text-muted fw-semibold mb-1 gradient-text"
// //                       style={{ letterSpacing: ".08em" }}
// //                     >
// //                       Used For
// //                     </div>
// //                     <div className="fw-semibold fs-6">
// //                       PG Diploma in Journalism & Mass Comm
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <hr className="my-4" />

// //                 {/* Purpose */}
// //                 <div className="mb-4">
// //                   <div
// //                     className="small text-uppercase text-muted fw-semibold mb-2 gradient-text"
// //                     style={{ letterSpacing: ".08em" }}
// //                   >
// //                     Purpose
// //                   </div>
// //                   <p className="mb-0 text-muted" style={{ lineHeight: 1.9 }}>
// //                     Admission to <strong>PG Diploma programmes</strong> in English
// //                     Journalism, Hindi Journalism, Odia Journalism, Radio & TV Journalism,
// //                     Advertising & PR, and Development Communication at IIMC campuses
// //                     across India (New Delhi, Dhenkanal, Aizawl, Amravati, Jammu, Kottayam).
// //                   </p>
// //                 </div>

// //                 {/* Eligibility */}
// //                 <div className="mb-4">
// //                   <div
// //                     className="small text-uppercase text-muted fw-semibold mb-2 gradient-text"
// //                     style={{ letterSpacing: ".08em" }}
// //                   >
// //                     Eligibility
// //                   </div>

// //                   <div className="row g-4">
// //                     <div className="col-md-4">
// //                       <div className="fw-semibold mb-1">General Category</div>
// //                       <div className="small text-muted">
// //                         Bachelor's degree in any discipline<br />
// //                         Minimum 50% aggregate marks
// //                       </div>
// //                     </div>

// //                     <div className="col-md-4">
// //                       <div className="fw-semibold mb-1">SC / ST / PWD</div>
// //                       <div className="small text-muted">
// //                         Bachelor's degree in any discipline<br />
// //                         Minimum 45% aggregate marks
// //                       </div>
// //                     </div>

// //                     <div className="col-md-4">
// //                       <div className="fw-semibold mb-1">Final Year Students</div>
// //                       <div className="small text-muted">
// //                         Students in the final year of graduation can
// //                         apply provisionally
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Apply */}
// //                 <div className="mb-4">
// //                   <div
// //                     className="small text-uppercase text-muted fw-semibold mb-2 gradient-text"
// //                     style={{ letterSpacing: ".08em" }}
// //                   >
// //                     Apply
// //                   </div>
// //                   <div className="fw-semibold">Online Application Mode (iimc.gov.in)</div>
// //                 </div>

// //                 <hr className="my-4" />

// //                 <div className="d-flex flex-wrap align-items-center gap-4">
// //                   <div>
// //                     <div className="small text-muted">Official Website</div>
// //                     <a
// //                       href="https://iimc.gov.in/"
// //                       target="_blank"
// //                       rel="noreferrer"
// //                       className="iitWebsiteLink d-inline-flex align-items-center gap-1 mt-1"
// //                     >
// //                       <span className="small">https://iimc.gov.in/</span>
// //                     </a>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* What IIMC unlocks */}
// //               <div className="mb-4 mb-lg-5">
// //                 <h3 className="h5 fw-semibold mb-3">What an IIMC qualification unlocks</h3>
// //                 <p className="text-muted" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
// //                   IIMC alumni are found across every major media organisation in India.
// //                   The institute's reputation, combined with its industry connections
// //                   and placement support, makes it the most direct route into national
// //                   level media and journalism roles.
// //                 </p>

// //                 <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
// //                   <li>
// //                     <strong>Print journalism</strong> — newspapers, magazines, and digital
// //                     news outlets (The Hindu, TOI, NDTV, Wire, etc.)
// //                   </li>
// //                   <li>
// //                     <strong>Broadcast journalism</strong> — TV news reporting, anchoring,
// //                     production roles at national channels
// //                   </li>
// //                   <li>
// //                     <strong>Advertising & PR</strong> — account management, copywriting,
// //                     media planning at agencies and corporates
// //                   </li>
// //                   <li>
// //                     <strong>Development communication</strong> — NGOs, UN bodies, government
// //                     communication, and social impact roles
// //                   </li>
// //                   <li>
// //                     <strong>Digital media</strong> — content strategy, social media, video
// //                     journalism, and online newsrooms
// //                   </li>
// //                 </ul>
// //               </div>

// //               {/* Other important exams */}
// //               <div className="mb-4 mb-lg-5">
// //                 <h3 className="h5 fw-semibold mb-3">
// //                   Other important media & mass comm exams
// //                 </h3>
// //                 <p className="text-muted mb-3" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
// //                   IIMC is the top destination but several other strong institutions have
// //                   their own entrance processes worth preparing for.
// //                 </p>

// //                 <div className="row g-3">
// //                   <div className="col-md-6">
// //                     <div className="p-3 rounded-3 border bg-white h-100">
// //                       <div className="fw-semibold mb-1">ACJ — Asian College of Journalism</div>
// //                       <div className="small text-muted">
// //                         Chennai-based, highly respected for its PG Diploma in Journalism.
// //                         Has a separate entrance test and interview process. Known for strong
// //                         print and investigative journalism training.
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <div className="col-md-6">
// //                     <div className="p-3 rounded-3 border bg-white h-100">
// //                       <div className="fw-semibold mb-1">Symbiosis SET (SCMC)</div>
// //                       <div className="small text-muted">
// //                         Symbiosis Institute of Media & Communication uses the Symbiosis
// //                         Entrance Test (SET). Offers programmes in communication management,
// //                         media studies, and advertising.
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <div className="col-md-6">
// //                     <div className="p-3 rounded-3 border bg-white h-100">
// //                       <div className="fw-semibold mb-1">University Entrance Tests</div>
// //                       <div className="small text-muted">
// //                         DU (Delhi University), JMI (Jamia Millia), Calcutta University, and
// //                         other central and state universities conduct their own entrance tests
// //                         for BA/MA Journalism and Mass Communication admissions.
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <div className="col-md-6">
// //                     <div className="p-3 rounded-3 border bg-white h-100">
// //                       <div className="fw-semibold mb-1">FTII / SRFTI — Film & Television</div>
// //                       <div className="small text-muted">
// //                         The Film and Television Institute of India (FTII, Pune) and Satyajit
// //                         Ray Film and Television Institute (SRFTI, Kolkata) have separate
// //                         entrance exams for film direction, editing, cinematography, and
// //                         production.
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Who should focus */}
// //               <div className="mb-4 mb-lg-5">
// //                 <h3 className="h5 fw-semibold mb-3">
// //                   Who is a good fit for media & journalism
// //                 </h3>
// //                 <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
// //                   Unlike engineering or medicine, media careers don't run on a single
// //                   standardised exam or credential. They reward curiosity, communication,
// //                   and consistent output. The best way to prepare is to both study and
// //                   practise — write, publish, record, and build a body of work alongside
// //                   formal education.
// //                 </p>

// //                 <div className="mt-3">
// //                   <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
// //                     <li>
// //                       You enjoy writing, reporting, storytelling, or visual communication
// //                     </li>
// //                     <li>
// //                       You follow current affairs naturally and have opinions on public issues
// //                     </li>
// //                     <li>
// //                       You are comfortable with deadlines, ambiguity, and fast-changing
// //                       environments
// //                     </li>
// //                     <li>
// //                       You can work with people — sources, editors, audiences — not just
// //                       independently
// //                     </li>
// //                   </ul>
// //                 </div>
// //               </div>

// //               {/* Prep plan */}
// //               <div>
// //                 <h3 className="h5 fw-semibold mb-3">
// //                   How to prepare for IIMC and other journalism entrances
// //                 </h3>

// //                 <div className="d-grid gap-4">
// //                   <div>
// //                     <div
// //                       className="small text-muted text-uppercase fw-semibold mb-2 gradient-text"
// //                       style={{ letterSpacing: ".08em" }}
// //                     >
// //                       Step 1
// //                     </div>
// //                     <div className="fw-semibold mb-2">
// //                       Read quality journalism every day — this is the preparation
// //                     </div>
// //                     <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
// //                       The best preparation for journalism entrance exams is reading
// //                       journalism — newspapers, long-form articles, and investigative
// //                       reports. It builds vocabulary, comprehension speed, GK, and
// //                       awareness of how stories are structured simultaneously. Read at
// //                       least one broadsheet newspaper daily for 6 months before the exam.
// //                     </p>
// //                   </div>

// //                   <div>
// //                     <div
// //                       className="small text-muted text-uppercase fw-semibold mb-2 gradient-text"
// //                       style={{ letterSpacing: ".08em" }}
// //                     >
// //                       Step 2
// //                     </div>
// //                     <div className="fw-semibold mb-2">
// //                       Build a current affairs bank — month by month
// //                     </div>
// //                     <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
// //                       IIMC and similar exams test current affairs heavily — political,
// //                       economic, cultural, and international news from the past 6–12
// //                       months. Maintain a monthly summary of major events, important names,
// //                       and significant developments. Review it every 2–3 weeks to retain
// //                       it actively.
// //                     </p>
// //                   </div>

// //                   <div>
// //                     <div
// //                       className="small text-muted text-uppercase fw-semibold mb-2 gradient-text"
// //                       style={{ letterSpacing: ".08em" }}
// //                     >
// //                       Step 3
// //                     </div>
// //                     <div className="fw-semibold mb-2">
// //                       Practise writing — essays, opinion pieces, and news summaries
// //                     </div>
// //                     <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
// //                       Many journalism entrance exams include descriptive or essay sections.
// //                       Write on current topics regularly — practise structuring an argument,
// //                       making a clear point, and writing concisely. Share your writing for
// //                       feedback. A blog or college publication is ideal practice ground.
// //                     </p>
// //                   </div>

// //                   <div>
// //                     <div
// //                       className="small text-muted text-uppercase fw-semibold mb-2 gradient-text"
// //                       style={{ letterSpacing: ".08em" }}
// //                     >
// //                       Step 4
// //                     </div>
// //                     <div className="fw-semibold mb-2">
// //                       Apply to multiple programmes — increase your options
// //                     </div>
// //                     <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
// //                       Unlike CAT or JEE, journalism entrance exams have separate schedules
// //                       and do not conflict. Apply to IIMC, ACJ, Symbiosis, and relevant
// //                       university programmes simultaneously. The interview and writing test
// //                       components mean your personality and genuine interest matter as much
// //                       as your academic score.
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <hr className="my-4" />

// //       {/* Choose Your Pathway */}
// //       <section className="pt-lg-5 pb-lg-5">
// //         <div className="container">
// //           <SectionTitle
// //             icon={<FileText size={18} className="text-success" />}
// //             title="Choose Your Media & Journalism Pathway"
// //             subtitle="Pick your stage, then follow the path that matches your interests and background."
// //           />

// //           <div className="mt-4 mt-lg-5">
// //             <div className="row g-4">

// //               {/* After Class 12 */}
// //               <div className="col-lg-12">
// //                 <div className="fw-bold d-flex align-items-center gap-2 mb-2">
// //                   After Class 12th
// //                 </div>
// //                 <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
// //                   Class 12 students — especially those from Arts/Humanities — can directly
// //                   enter undergraduate journalism and mass communication programmes. A BA in
// //                   Journalism or Mass Communication from a good university is a solid
// //                   foundation and keeps all specialisations open for the future.
// //                 </p>

// //                 <ul className="text-muted mb-3" style={{ lineHeight: 2 }}>
// //                   <li>
// //                     Best for: Students who know media is their field and want to start
// //                     formal training early
// //                   </li>
// //                   <li>
// //                     Good options: BA Journalism, BA Mass Communication, BMM (Bachelor of
// //                     Mass Media), B.Sc Electronic Media
// //                   </li>
// //                   <li>
// //                     Important: Build a portfolio alongside your degree — internships,
// //                     college publications, and social media presence matter at job entry
// //                   </li>
// //                 </ul>

// //                 <div className="d-flex gap-3 flex-wrap">
// //                   <LinkRow
// //                     label="After Class 12 • Arts"
// //                     meta="Stage"
// //                     href="/career/after-12/arts"
// //                   />
// //                   <LinkRow
// //                     label="Mass Comm Exams"
// //                     meta="Exams"
// //                     href="/exams/design/mass-comm"
// //                   />
// //                 </div>
// //               </div>

// //               {/* After Graduation */}
// //               <div className="col-lg-12 border-top pt-4 pt-lg-5 mt-lg-5 mt-4">
// //                 <div className="fw-bold d-flex align-items-center gap-2 mb-2">
// //                   After Graduation
// //                 </div>
// //                 <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
// //                   Graduates from any stream — Arts, Commerce, Science, or Engineering —
// //                   can pursue postgraduate programmes in journalism or mass communication.
// //                   The PG route (via IIMC, ACJ, or university MA programmes) is the most
// //                   structured entry point into competitive national media organisations.
// //                 </p>

// //                 <ul className="text-muted mb-3" style={{ lineHeight: 2 }}>
// //                   <li>
// //                     Best for: Graduates who discovered their interest in media during or
// //                     after their undergraduate years
// //                   </li>
// //                   <li>
// //                     Strong options: IIMC PG Diploma, ACJ PG Diploma, MA Journalism (DU,
// //                     JMI, Calcutta University), Symbiosis SCMC
// //                   </li>
// //                   <li>
// //                     Career switchers: Science or engineering background can be a strong
// //                     advantage in science journalism, data journalism, or tech reporting
// //                   </li>
// //                 </ul>

// //                 <div className="d-flex gap-3 flex-wrap">
// //                   <LinkRow
// //                     label="Mass Comm Exams"
// //                     meta="Exams"
// //                     href="/exams/design/mass-comm"
// //                   />
// //                   <LinkRow
// //                     label="After Graduation Guidance"
// //                     meta="Stage"
// //                     href="/careers/after-graduation"
// //                   />
// //                 </div>
// //               </div>

// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <hr className="my-4" />

// //       {/* Courses & Branches */}
// //       <section className="mt-4 mt-md-5">
// //         <div className="container">
// //           <SectionTitle
// //             icon={<Tv size={18} className="text-primary" />}
// //             title="Courses & Specialisations"
// //             subtitle="Media is a wide field — understand each track before choosing your direction."
// //           />

// //           <div className="row g-3">
// //             <div className="col-12">
// //               <p className="text-muted mb-0" style={{ lineHeight: 1.9 }}>
// //                 Media careers span traditional and digital formats. Print journalism,
// //                 broadcast, PR, advertising, digital content, and film are all distinct
// //                 tracks — each with different skills, daily work, and career trajectories.
// //                 Many professionals eventually specialise in one area, but starting with a
// //                 broad mass communication foundation gives you the flexibility to explore
// //                 before committing.
// //               </p>
// //             </div>

// //             {/* Card 1: Journalism */}
// //             <div className="col-12 col-md-6">
// //               <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
// //                 <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
// //                   <Newspaper size={16} className="text-primary" />
// //                   Journalism — Print, Broadcast & Digital
// //                 </div>
// //                 <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
// //                   Reporting, writing, editing, and publishing news across print, TV, radio,
// //                   and digital platforms. The core journalism track — competitive but with
// //                   strong demand in digital newsrooms.
// //                 </div>
// //                 <ul className="small text-muted" style={{ lineHeight: 2 }}>
// //                   <li>
// //                     <strong>Best for:</strong> Students driven by public interest, current
// //                     affairs, and storytelling
// //                   </li>
// //                   <li>
// //                     <strong>Top institutions:</strong> IIMC, ACJ, DU, JMI, Calcutta University
// //                   </li>
// //                   <li>
// //                     <strong>Outcome:</strong> Reporter, editor, news anchor, digital journalist,
// //                     documentary filmmaker
// //                   </li>
// //                 </ul>
// //                 <div className="d-flex flex-wrap gap-3 mt-3">
// //                   <LinkRow
// //                     label="Mass Comm & Journalism Exams"
// //                     href="/exams/design/mass-comm"
// //                   />
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Card 2: Mass Communication */}
// //             <div className="col-12 col-md-6">
// //               <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
// //                 <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
// //                   <Radio size={16} className="text-success" />
// //                   Mass Communication (BA / MA)
// //                 </div>
// //                 <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
// //                   A broader academic programme covering media theory, communication
// //                   research, media law, advertising, PR, and journalism together. Gives
// //                   a comprehensive foundation before specialising.
// //                 </div>
// //                 <ul className="small text-muted" style={{ lineHeight: 2 }}>
// //                   <li>
// //                     <strong>Best for:</strong> Students who want flexibility to explore
// //                     multiple media tracks before deciding
// //                   </li>
// //                   <li>
// //                     <strong>Available at:</strong> Most central and state universities
// //                     as BA / MA / BMM / MMC
// //                   </li>
// //                   <li>
// //                     <strong>Outcome:</strong> Media professional, researcher, educator,
// //                     content strategist
// //                   </li>
// //                 </ul>
// //                 <div className="d-flex flex-wrap gap-3 mt-3">
// //                   <LinkRow
// //                     label="Mass Comm Exams"
// //                     href="/exams/design/mass-comm"
// //                   />
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Card 3: Digital Media & Content */}
// //             <div className="col-12 col-md-6">
// //               <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
// //                 <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
// //                   <Globe size={16} className="text-warning" />
// //                   Digital Media & Content Creation
// //                 </div>
// //                 <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
// //                   The fastest-growing area in media. Covers video production, social media
// //                   management, podcasting, content strategy, SEO journalism, and online
// //                   newsrooms. Many roles are accessible through self-learning and a strong
// //                   portfolio.
// //                 </div>
// //                 <ul className="small text-muted" style={{ lineHeight: 2 }}>
// //                   <li>
// //                     <strong>Best for:</strong> Students comfortable with technology,
// //                     platforms, and visual storytelling
// //                   </li>
// //                   <li>
// //                     <strong>Entry:</strong> Portfolio + relevant UG degree often sufficient;
// //                     PG programmes available too
// //                   </li>
// //                   <li>
// //                     <strong>Outcome:</strong> Content creator, digital editor, social media
// //                     manager, video journalist, podcast producer
// //                   </li>
// //                 </ul>
// //                 <div className="d-flex flex-wrap gap-3 mt-3">
// //                   <LinkRow
// //                     label="Media & Journalism — Career Guide"
// //                     href="/career/by-profession/media"
// //                   />
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Card 4: PR, Advertising & Corporate Comm */}
// //             <div className="col-12 col-md-6">
// //               <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
// //                 <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
// //                   <Megaphone size={16} className="text-danger" />
// //                   Public Relations, Advertising & Corporate Comm
// //                 </div>
// //                 <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
// //                   PR and advertising are distinct from journalism but share the same
// //                   foundation of communication and storytelling. These tracks offer
// //                   more structured corporate career paths with strong salary growth.
// //                 </div>
// //                 <ul className="small text-muted" style={{ lineHeight: 2 }}>
// //                   <li>
// //                     <strong>Best for:</strong> Students interested in brands, campaigns,
// //                     corporate communication, and events
// //                   </li>
// //                   <li>
// //                     <strong>Top programmes:</strong> IIMC (Advertising & PR), Symbiosis SCMC,
// //                     Mudra Institute (MICA)
// //                   </li>
// //                   <li>
// //                     <strong>Outcome:</strong> PR executive, account manager, brand strategist,
// //                     media planner, corporate communications officer
// //                   </li>
// //                 </ul>
// //                 <div className="d-flex flex-wrap gap-3 mt-3">
// //                   <LinkRow
// //                     label="Mass Comm Exams"
// //                     href="/exams/design/mass-comm"
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* What makes a media career — reality check */}
// //       <section className="mt-4 mt-md-5">
// //         <div className="container">
// //           <SectionTitle
// //             icon={<Mic size={18} className="text-warning" />}
// //             title="What a Media Career Actually Looks Like"
// //             subtitle="An honest look at the realities before you commit to this path."
// //           />

// //           <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm">
// //             <p className="text-muted mb-4" style={{ lineHeight: 1.9 }}>
// //               Media and journalism are genuinely exciting fields — but they come with
// //               specific demands that are worth understanding before committing. Unlike
// //               corporate careers with linear progression, media rewards initiative,
// //               resilience, and a visible body of work.
// //             </p>

// //             <div className="row g-4">
// //               <div className="col-md-6">
// //                 <div className="fw-semibold mb-2">What the field rewards</div>
// //                 <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
// //                   <li>Curiosity and genuine interest in how the world works</li>
// //                   <li>
// //                     Consistent output — writing, reporting, filming, or publishing regularly
// //                   </li>
// //                   <li>
// //                     Ability to work under deadlines without compromising accuracy
// //                   </li>
// //                   <li>
// //                     A portfolio that shows what you can do, not just degrees you hold
// //                   </li>
// //                 </ul>
// //               </div>

// //               <div className="col-md-6">
// //                 <div className="fw-semibold mb-2">Realistic expectations</div>
// //                 <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
// //                   <li>
// //                     Entry-level salaries in traditional journalism can be modest — digital
// //                     and corporate communication roles pay better early on
// //                   </li>
// //                   <li>
// //                     The field is competitive — institution pedigree, internships, and
// //                     work samples matter more than marks
// //                   </li>
// //                   <li>
// //                     Career growth is often non-linear — specialisation and reputation
// //                     build over time
// //                   </li>
// //                   <li>
// //                     A strong second skill (data, video, tech, a regional language) makes
// //                     you significantly more employable
// //                   </li>
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
      
// //     </div>

// //      </FrontendLayout>
// //   );
// // }

// "use client";

// import React from "react";
// import HeroInner from "@/Components/Frontend/Hero/HeroInner";
// import FrontendLayout from "@/Layouts/FrontendLayout";

// import {
//   Tv,
//   GraduationCap,
//   FileText,
//   Building2,
//   BadgeCheck,
//   ArrowRight,
//   ClipboardList,
//   Newspaper,
//   Radio,
//   Globe,
//   Megaphone,
//   Camera,
//   Mic,
// } from "lucide-react";

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

// // Helper function to get icon component
// const getIcon = (iconName, size = 18, className = "") => {
//   const icons = {
//     Tv: <Tv size={size} className={className || "text-primary"} />,
//     GraduationCap: <GraduationCap size={size} className={className || "text-primary"} />,
//     FileText: <FileText size={size} className={className || "text-success"} />,
//     Building2: <Building2 size={size} className={className || "text-primary"} />,
//     BadgeCheck: <BadgeCheck size={size} className={className || "text-success"} />,
//     ArrowRight: <ArrowRight size={size} className={className || "text-muted"} />,
//     ClipboardList: <ClipboardList size={size} className={className || "text-primary"} />,
//     Newspaper: <Newspaper size={size} className={className || "text-primary"} />,
//     Radio: <Radio size={size} className={className || "text-success"} />,
//     Globe: <Globe size={size} className={className || "text-warning"} />,
//     Megaphone: <Megaphone size={size} className={className || "text-danger"} />,
//     Camera: <Camera size={size} className={className || "text-danger"} />,
//     Mic: <Mic size={size} className={className || "text-warning"} />,
//   };
//   return icons[iconName] || null;
// };

// export default function MediaLandingPage({ content }) {
//   // Use content from database or fallback to empty object
//   const pageContent = content || {};

//   // Extract sections with fallbacks
//   const hero = pageContent?.hero || {};
//   const primaryExam = pageContent?.primaryExam || {};
//   const pathways = pageContent?.pathways || {};
//   const courseBranches = pageContent?.courseBranches || {};
//   const colleges = pageContent?.colleges || {};

//   return (
//     <FrontendLayout>
//       <HeroInner
//         title="Career Guide - Media & Journalism"
//         breadcrumb="Career Guide - Media & Journalism"
//         description="Here you can explore all media-related links."
//       />

//       <div className="pb-5">
//         {/* HERO SECTION */}
//         <div className="w-100 nitLightGradient">
//           <div className="container py-4 py-md-5">
//             <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
//               <div style={{ maxWidth: 720 }}>
//                 <h1 className="section-heading mb-2">
//                   {hero.title || "Media & Journalism"}{" "}
//                   <span className="gradient-text">Career Guide</span>
//                 </h1>

//                 <div className="text-muted fw-semibold mb-3">
//                   {hero.subtitle || "Courses, Entrance Exams, Colleges & Career Scope — A Complete Roadmap"}
//                 </div>

//                 <p className="text-muted mb-3" style={{ lineHeight: 1.7 }}>
//                   {hero.description || "Media and journalism offer some of the most dynamic and impactful career paths available — but the field is broad. Print journalism, broadcast, digital content, public relations, advertising, film, radio, and social media are all distinct tracks with different skills and entry points. Knowing where you fit makes the difference between a focused path and years of confusion."}
//                 </p>

//                 <p className="text-muted mb-0" style={{ lineHeight: 1.7 }}>
//                   {hero.description2 || "Whether you're a Class 12 student choosing between a BA in Journalism and a Mass Communication degree, or a graduate looking at postgraduate programmes or industry entry, this page brings together clear pathways, entrance exam guidance, course options, and direct links to detailed pages across the portal."}
//                 </p>
//               </div>

//               {/* Hero Stats */}
//               <div className="d-grid gap-2" style={{ minWidth: 260 }}>
//                 {hero.heroStats?.map((stat, index) => (
//                   <div key={index} className="p-3 rounded-4 bg-white border shadow-sm">
//                     <div className="small text-muted">{stat.label}</div>
//                     <div className="fw-bold d-flex align-items-center gap-2">
//                       {getIcon(stat.icon, 16, "text-primary")}
//                       {stat.value}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Quick Links */}
//             {hero.quickLinks && hero.quickLinks.length > 0 && (
//               <div className="mt-4">
//                 <div className="row g-3">
//                   {hero.quickLinks.map((link, index) => (
//                     <div className="col-12 col-md-6 col-xl-3" key={index}>
//                       <QuickLink
//                         icon={getIcon(link.icon, 18)}
//                         title={link.title}
//                         desc={link.desc}
//                         href={link.href}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* PRIMARY EXAM SECTION - IIMC */}
//         {primaryExam.heading && (
//           <section className="py-5 py-lg-6">
//             <div className="container">
//               <div className="row justify-content-start">
//                 <div className="col-lg-9">
//                   <div className="mb-4 mb-lg-5">
//                     <h2 className="section-heading mb-3">
//                       <span className="gradient-text">{primaryExam.heading?.split(':')[0] || 'IIMC'}:</span>{" "}
//                       {primaryExam.heading?.split(':')[1] || "India's Top Journalism Institute & Entrance"}
//                     </h2>
//                     <p className="text-muted mb-0">{primaryExam.intro}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="row justify-content-start">
//                 <div className="col-lg-12">
//                   <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm mb-4 mb-lg-5">
//                     {/* Quick Facts */}
//                     <div className="row g-4 mb-4">
//                       {primaryExam.quickFacts?.map((fact, index) => (
//                         <div className="col-md-4" key={index}>
//                           <div className="small text-uppercase text-muted fw-semibold mb-1 gradient-text" style={{ letterSpacing: ".08em" }}>
//                             {fact.label}
//                           </div>
//                           <div className="fw-semibold fs-6">{fact.value}</div>
//                         </div>
//                       ))}
//                     </div>

//                     <hr className="my-4" />

//                     {/* Purpose */}
//                     <div className="mb-4">
//                       <div className="small text-uppercase text-muted fw-semibold mb-2 gradient-text" style={{ letterSpacing: ".08em" }}>
//                         Purpose
//                       </div>
//                       <p className="mb-0 text-muted" style={{ lineHeight: 1.9 }}>
//                         {primaryExam.purpose}
//                       </p>
//                     </div>

//                     {/* Eligibility */}
//                     <div className="mb-4">
//                       <div className="small text-uppercase text-muted fw-semibold mb-2 gradient-text" style={{ letterSpacing: ".08em" }}>
//                         Eligibility
//                       </div>
//                       <div className="row g-4">
//                         {primaryExam.eligibility?.map((item, index) => (
//                           <div className="col-md-4" key={index}>
//                             <div className="fw-semibold mb-1">{item.category}</div>
//                             <div className="small text-muted">{item.details}</div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Apply */}
//                     <div className="mb-4">
//                       <div className="small text-uppercase text-muted fw-semibold mb-2 gradient-text" style={{ letterSpacing: ".08em" }}>
//                         Apply
//                       </div>
//                       <div className="fw-semibold">{primaryExam.applyMode}</div>
//                     </div>

//                     <hr className="my-4" />

//                     <div className="d-flex flex-wrap align-items-center gap-4">
//                       <div>
//                         <div className="small text-muted">Official Website</div>
//                         <a
//                           href={primaryExam.officialWebsite}
//                           target="_blank"
//                           rel="noreferrer"
//                           className="iitWebsiteLink d-inline-flex align-items-center gap-1 mt-1"
//                         >
//                           <span className="small">{primaryExam.officialWebsite}</span>
//                         </a>
//                       </div>
//                     </div>
//                   </div>

//                   {/* What it unlocks */}
//                   {primaryExam.unlocks && primaryExam.unlocks.length > 0 && (
//                     <div className="mb-4 mb-lg-5">
//                       <h3 className="h5 fw-semibold mb-3">What an IIMC qualification unlocks</h3>
//                       <p className="text-muted" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                         {primaryExam.unlocksDescription || "IIMC alumni are found across every major media organisation in India. The institute's reputation, combined with its industry connections and placement support, makes it the most direct route into national level media and journalism roles."}
//                       </p>
//                       <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
//                         {primaryExam.unlocks.map((item, index) => (
//                           <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                   {/* Other exams */}
//                   {primaryExam.otherExams && primaryExam.otherExams.length > 0 && (
//                     <div className="mb-4 mb-lg-5">
//                       <h3 className="h5 fw-semibold mb-3">Other important media & mass comm exams</h3>
//                       <p className="text-muted mb-3" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                         IIMC is the top destination but several other strong institutions have their own entrance processes worth preparing for.
//                       </p>
//                       <div className="row g-3">
//                         {primaryExam.otherExams.map((exam, index) => (
//                           <div className="col-md-6" key={index}>
//                             <div className="p-3 rounded-3 border bg-white h-100">
//                               <div className="fw-semibold mb-1">{exam.name}</div>
//                               <div className="small text-muted">{exam.description}</div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {/* Who should focus */}
//                   {primaryExam.whoShouldFocusPoints && (
//                     <div className="mb-4 mb-lg-5">
//                       <h3 className="h5 fw-semibold mb-3">Who is a good fit for media & journalism</h3>
//                       <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                         {primaryExam.whoShouldFocusIntro || "Unlike engineering or medicine, media careers don't run on a single standardised exam or credential. They reward curiosity, communication, and consistent output."}
//                       </p>
//                       <div className="mt-3">
//                         <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
//                           {primaryExam.whoShouldFocusPoints.map((point, index) => (
//                             <li key={index}>{point}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   )}

//                   {/* Prep plan */}
//                   {primaryExam.prepPlan && primaryExam.prepPlan.length > 0 && (
//                     <div>
//                       <h3 className="h5 fw-semibold mb-3">How to prepare for IIMC and other journalism entrances</h3>
//                       <div className="d-grid gap-4">
//                         {primaryExam.prepPlan.map((step, index) => (
//                           <div key={index}>
//                             <div className="small text-muted text-uppercase fw-semibold mb-2 gradient-text" style={{ letterSpacing: ".08em" }}>
//                               Step {index + 1}
//                             </div>
//                             <div className="fw-semibold mb-2">{step.title}</div>
//                             <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
//                               {step.description}
//                             </p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}

//         <hr className="my-4" />

//         {/* PATHWAYS SECTION */}
//         {pathways.title && (
//           <section className="pt-lg-5 pb-lg-5">
//             <div className="container">
//               <SectionTitle
//                 icon={<FileText size={18} className="text-success" />}
//                 title={pathways.title}
//                 subtitle={pathways.subtitle}
//               />

//               <div className="mt-4 mt-lg-5">
//                 <div className="row g-4">
//                   {/* After Class 12 */}
//                   {pathways.after12 && (
//                     <div className="col-lg-12">
//                       <div className="fw-bold d-flex align-items-center gap-2 mb-2">
//                         {pathways.after12.title}
//                       </div>
//                       <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                         {pathways.after12.description}
//                       </p>
//                       <ul className="text-muted mb-3" style={{ lineHeight: 2 }}>
//                         {pathways.after12.points?.map((point, index) => (
//                           <li key={index}>{point}</li>
//                         ))}
//                       </ul>
//                       <div className="d-flex gap-3 flex-wrap">
//                         {pathways.after12.links?.map((link, index) => (
//                           <LinkRow
//                             key={index}
//                             label={link.label}
//                             meta={link.meta}
//                             href={link.href}
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {/* After Graduation */}
//                   {pathways.afterGraduation && (
//                     <div className="col-lg-12 border-top pt-4 pt-lg-5 mt-lg-5 mt-4">
//                       <div className="fw-bold d-flex align-items-center gap-2 mb-2">
//                         {pathways.afterGraduation.title}
//                       </div>
//                       <p className="text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                         {pathways.afterGraduation.description}
//                       </p>
//                       <ul className="text-muted mb-3" style={{ lineHeight: 2 }}>
//                         {pathways.afterGraduation.points?.map((point, index) => (
//                           <li key={index}>{point}</li>
//                         ))}
//                       </ul>
//                       <div className="d-flex gap-3 flex-wrap">
//                         {pathways.afterGraduation.links?.map((link, index) => (
//                           <LinkRow
//                             key={index}
//                             label={link.label}
//                             meta={link.meta}
//                             href={link.href}
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}

//         <hr className="my-4" />

//         {/* COURSES & BRANCHES SECTION */}
//         {courseBranches.title && (
//           <section className="mt-4 mt-md-5">
//             <div className="container">
//               <SectionTitle
//                 icon={<Tv size={18} className="text-primary" />}
//                 title={courseBranches.title}
//                 subtitle={courseBranches.subtitle}
//               />

//               <div className="row g-3">
//                 <div className="col-12">
//                   <p className="text-muted mb-0" style={{ lineHeight: 1.9 }}>
//                     {courseBranches.intro}
//                   </p>
//                 </div>

//                 {courseBranches.cards?.map((card, index) => (
//                   <div className="col-12 col-md-6" key={index}>
//                     <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
//                       <div className="fw-semibold d-flex align-items-center gap-2 mb-2">
//                         {getIcon(card.icon, 16)}
//                         {card.title}
//                       </div>
//                       <div className="small text-muted mb-3" style={{ lineHeight: 1.9 }}>
//                         {card.description}
//                       </div>
//                       <ul className="small text-muted" style={{ lineHeight: 2 }}>
//                         {card.points?.map((point, idx) => (
//                           <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
//                         ))}
//                       </ul>
//                       <div className="d-flex flex-wrap gap-3 mt-3">
//                         {card.links?.map((link, idx) => (
//                           <LinkRow
//                             key={idx}
//                             label={link.label}
//                             href={link.href}
//                             meta={link.meta}
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         )}

//         {/* REALITY CHECK SECTION */}
//         {colleges?.realityCheck && (
//           <section className="mt-4 mt-md-5">
//             <div className="container">
//               <SectionTitle
//                 icon={<Mic size={18} className="text-warning" />}
//                 title={colleges.realityCheck.title || "What a Media Career Actually Looks Like"}
//                 subtitle={colleges.realityCheck.subtitle || "An honest look at the realities before you commit to this path."}
//               />

//               <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm">
//                 <p className="text-muted mb-4" style={{ lineHeight: 1.9 }}>
//                   {colleges.realityCheck.description || "Media and journalism are genuinely exciting fields — but they come with specific demands that are worth understanding before committing."}
//                 </p>

//                 <div className="row g-4">
//                   <div className="col-md-6">
//                     <div className="fw-semibold mb-2">{colleges.realityCheck.whatFieldRewardsTitle || "What the field rewards"}</div>
//                     <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
//                       {colleges.realityCheck.whatFieldRewards?.map((item, index) => (
//                         <li key={index}>{item}</li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="col-md-6">
//                     <div className="fw-semibold mb-2">{colleges.realityCheck.realisticExpectationsTitle || "Realistic expectations"}</div>
//                     <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
//                       {colleges.realityCheck.realisticExpectations?.map((item, index) => (
//                         <li key={index}>{item}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}
//       </div>
//     </FrontendLayout>
//   );
// }


"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from "@/Layouts/FrontendLayout";

import {
  Tv,
  GraduationCap,
  FileText,
  Building2,
  BadgeCheck,
  ArrowRight,
  ClipboardList,
  Newspaper,
  Radio,
  Globe,
  Megaphone,
  Camera,
  Mic,
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
    Tv: <Tv size={size} className={className || "text-primary"} />,
    GraduationCap: <GraduationCap size={size} className={className || "text-primary"} />,
    FileText: <FileText size={size} className={className || "text-success"} />,
    Building2: <Building2 size={size} className={className || "text-primary"} />,
    BadgeCheck: <BadgeCheck size={size} className={className || "text-success"} />,
    ArrowRight: <ArrowRight size={size} className={className || "text-muted"} />,
    ClipboardList: <ClipboardList size={size} className={className || "text-primary"} />,
    Newspaper: <Newspaper size={size} className={className || "text-primary"} />,
    Radio: <Radio size={size} className={className || "text-success"} />,
    Globe: <Globe size={size} className={className || "text-warning"} />,
    Megaphone: <Megaphone size={size} className={className || "text-danger"} />,
    Camera: <Camera size={size} className={className || "text-danger"} />,
    Mic: <Mic size={size} className={className || "text-warning"} />,
  };
  return icons[iconName] || null;
};

export default function MediaLandingPage({ content }) {
  // Use content from database or fallback to empty object
  const pageContent = content || {};

  // Extract sections with fallbacks
  const hero = pageContent?.hero || {};
  const primaryExam = pageContent?.primaryExam || {};
  const pathways = pageContent?.pathways || {};
  const courseBranches = pageContent?.courseBranches || {};
  const realityCheck = pageContent?.realityCheck || {};

  return (
    <FrontendLayout>
      <HeroInner
        title="Career Guide - Media & Journalism"
        breadcrumb="Career Guide - Media & Journalism"
        description="Here you can explore all media-related links."
      />

      <div className="pb-5">
        {/* HERO SECTION */}
        <div className="w-100 nitLightGradient">
          <div className="container py-4 py-md-5">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
              <div style={{ maxWidth: 720 }}>
                <h1 className="section-heading mb-2">
                  {hero.title || "Media & Journalism"}{" "}
                  <span className="gradient-text">Career Guide</span>
                </h1>

                <div className="text-muted fw-semibold mb-3">
                  {hero.subtitle || "Courses, Entrance Exams, Colleges & Career Scope — A Complete Roadmap"}
                </div>

                <p className="text-muted mb-3" style={{ lineHeight: 1.7 }}>
                  {hero.description || "Media and journalism offer some of the most dynamic and impactful career paths available — but the field is broad. Print journalism, broadcast, digital content, public relations, advertising, film, radio, and social media are all distinct tracks with different skills and entry points. Knowing where you fit makes the difference between a focused path and years of confusion."}
                </p>

                <p className="text-muted mb-0" style={{ lineHeight: 1.7 }}>
                  {hero.description2 || "Whether you're a Class 12 student choosing between a BA in Journalism and a Mass Communication degree, or a graduate looking at postgraduate programmes or industry entry, this page brings together clear pathways, entrance exam guidance, course options, and direct links to detailed pages across the portal."}
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

        {/* PRIMARY EXAM SECTION - IIMC */}
        {primaryExam.heading && (
          <section className="py-5 py-lg-6">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-9">
                  <div className="mb-4 mb-lg-5">
                    <h2 className="section-heading mb-3">
                      <span className="gradient-text">{primaryExam.heading?.split(':')[0] || 'IIMC'}:</span>{" "}
                      {primaryExam.heading?.split(':')[1] || "India's Top Journalism Institute & Entrance"}
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

                  {/* What it unlocks */}
                  {primaryExam.unlocks && primaryExam.unlocks.length > 0 && (
                    <div className="mb-4 mb-lg-5">
                      <h3 className="h5 fw-semibold mb-3">What an IIMC qualification unlocks</h3>
                      <p className="text-muted" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                        {primaryExam.unlocksDescription || "IIMC alumni are found across every major media organisation in India. The institute's reputation, combined with its industry connections and placement support, makes it the most direct route into national level media and journalism roles."}
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
                      <h3 className="h5 fw-semibold mb-3">Other important media & mass comm exams</h3>
                      <p className="text-muted mb-3" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                        {primaryExam.otherExamsDescription || "IIMC is the top destination but several other strong institutions have their own entrance processes worth preparing for."}
                      </p>
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
                      <h3 className="h5 fw-semibold mb-3">Who is a good fit for media & journalism</h3>
                      <p className="text-muted mb-0" style={{ fontSize: "1.02rem", lineHeight: 1.9 }}>
                        {primaryExam.whoShouldFocusIntro || "Unlike engineering or medicine, media careers don't run on a single standardised exam or credential. They reward curiosity, communication, and consistent output. The best way to prepare is to both study and practise — write, publish, record, and build a body of work alongside formal education."}
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
                      <h3 className="h5 fw-semibold mb-3">How to prepare for IIMC and other journalism entrances</h3>
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
                icon={<Tv size={18} className="text-primary" />}
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

        {/* REALITY CHECK SECTION */}
        {realityCheck.title && (
          <section className="mt-4 mt-md-5">
            <div className="container">
              <SectionTitle
                icon={<Mic size={18} className="text-warning" />}
                title={realityCheck.title || "What a Media Career Actually Looks Like"}
                subtitle={realityCheck.subtitle || "An honest look at the realities before you commit to this path."}
              />

              <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm">
                <p className="text-muted mb-4" style={{ lineHeight: 1.9 }}>
                  {realityCheck.description || "Media and journalism are genuinely exciting fields — but they come with specific demands that are worth understanding before committing. Unlike corporate careers with linear progression, media rewards initiative, resilience, and a visible body of work."}
                </p>

                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="fw-semibold mb-2">{realityCheck.whatFieldRewardsTitle || "What the field rewards"}</div>
                    <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
                      {realityCheck.whatFieldRewards?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-md-6">
                    <div className="fw-semibold mb-2">{realityCheck.realisticExpectationsTitle || "Realistic expectations"}</div>
                    <ul className="text-muted mb-0" style={{ lineHeight: 2 }}>
                      {realityCheck.realisticExpectations?.map((item, index) => (
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