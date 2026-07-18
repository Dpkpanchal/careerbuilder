// import React, { useState } from "react";
// import { Link, usePage } from '@inertiajs/react';
// import HeroInner from "@/Components/Frontend/Hero/HeroInner";
// import FrontendLayout from '@/Layouts/FrontendLayout';
// import ExamTabsBar from "../ExamTabsBar";
// import { GraduationCap, Layers3, Network, ExternalLink } from "lucide-react";

// // -------------------------------------------------------------
// // Helper: URL normaliser
// // -------------------------------------------------------------
// function getWebsiteHref(raw) {
//   if (!raw) return "#";
//   const trimmed = raw.trim();
//   if (/^https?:\/\//i.test(trimmed)) return trimmed;
//   return `https://${trimmed.replace(/^\/\//, "")}`;
// }

// // Small helper to make a short preview for eligibility
// function getEligibilityPreview(full) {
//   if (!full) return "";
//   const clean = full.replace(/\s+/g, " ").trim();
//   if (clean.length <= 140) return clean;
//   return clean.slice(0, 140) + "…";
// }

// // -------------------------------------------------------------
// // Tabs for Engineering Exams
// // -------------------------------------------------------------
// const EXAM_TABS = [
//     { id: "engineering-national", label: "Engineering – National Level", href: '/exams/national-level-eg-jee-main-jee-advanced' },
//     { id: "engineering-state", label: "Engineering – State Level", href: '/exams/state-level-wbjee-etc' },
//     { id: "engineering-university", label: "Engineering – University Level", href: '/exams/university-level-exams' },
//     { id: "mca-exams", label: "MCA Entrance Exams", href: '/exams/mca' },
//     { id: "architecture-exams", label: "Architecture Entrance Exams", href: '/exams/architecture' },
// ];

// // -------------------------------------------------------------
// // NATIONAL LEVEL ENGINEERING ENTRANCE EXAMS
// // Text taken from “Entrance Examination Details” block
// // (no extra exams added, only structured)
// // -------------------------------------------------------------
// const NATIONAL_ENGINEERING_EXAMS = [
//   {
//     id: "jee-main",
//     tag: "JEE Main",
//     level: "UG",
//     name: "Joint Entrance Examination (JEE) Main",
//     purpose: "For Admission in B. E./B. Tech., B. Arch., B. Planning",
//     eligibility:
//       "Class 12, 12 passed",
//     apply: "Online",
//     activity: "April",
//     source: "http://jeemain.nic.in/jeemainapp/Welcome.aspx",
//   },
//   {
//     id: "jee-advanced",
//     tag: "JEE Advanced",
//     level: "UG",
//     name: "Joint Entrance Exam Advanced (JEE Advanced)",
//     purpose:
//       "Admission in UG programmes in IITs and ISM Dhanbad",
//     eligibility:
//       "Class 12, 12 Passed (PCM)",
//     apply: "Online",
//     activity: "May",
//     source: "http://jeeadv.iitd.ac.in/",
//   },
//   {
//     id: "bitsat",
//     tag: "BITSAT",
//     level: "UG",
//     name: "Birla Institute of Technology & Science Admission Test (BITSAT)",
//     purpose:
//       "Admission in Integrated First Degree programmes in BITS Pilani, Goa & Hyderabad campuses.",
//     eligibility:
//       "Class 12, 12 passed (PCM)",
//     apply: "Online",
//     activity: "January, February",
//     source: "www.bitsadmission.com/",
//   },
//   {
//     id: "viteee",
//     tag: "VITEEE",
//     level: "UG",
//     name: "Vellore Institute of Technology Engineering Entrance Exam (VITEEE)",
//     purpose: "Admission in B Tech Courses",
//     eligibility: "Class 12",
//     apply: "Online, By Post",
//     activity: "January, February",
//     source: "www.vit.ac.in",
//   },
//   {
//     id: "apiit-nat",
//     tag: "APIIT NAT",
//     level: "UG",
//     name: "National Admission Test (APIIT NAT)",
//     purpose:
//       "For admission in B.E./B.Tech/BBA/MBA courses of Asia Pacific Institute of Information Technology.",
//     eligibility:
//       "Passed 10+2 examination from recognized Board / University with 45% marks (42.75% in case of candidate belonging to reserved category i.e. SC / ST category) in Physics and Mathematics as compulsory subjects along with one of the following subjects: Chemistry / Computer Science / Biotechnology / Biology.",
//     apply: "Online",
//     activity: "June",
//     source: "http://www.apiit.edu.in/admissions/admission-process.html",
//   },
//   {
//     id: "itsat",
//     tag: "ITSAT",
//     level: "UG",
//     name: "ICFAI Tech School Admission Test (ITSAT)",
//     purpose: "B.Tech",
//     // keep this as the full PDF eligibility block (no paraphrasing)
//     eligibility:
//       "Pass with 50% and above aggregate marks in Class XII or its equivalent with Mathematics, Physics, Chemistry and English as subjects. Class XII or its equivalent students awaiting their final examination results may also apply, provided they have completed 12 years of formal schooling in order to apply for the program. Admission will be offered based on scores secured in ITSAT 2018 / JEE (Main) 2018 / State Level / Other National Level Engineering Entrance Tests (2018).",
//     apply: "Online",
//     activity: "Online mode: May, Offline mode: May",
//     source: "http://www.icfaiuniversity.in/itsat/online-registration.html",
//   },
//   {
//     id: "nata",
//     tag: "NATA",
//     level: "UG",
//     name: "National Aptitude Test in Architecture (NATA)",
//     purpose: "B.Arch.",
//     eligibility:
//       "Only candidates who have the following credentials shall be eligible for admission to B.Arch Course. Qualified a recognized aptitude test in Architecture (NATA or equivalent). Have gone through any of the following curriculum with marks as prescribed below: 10+2 or equivalent examination of Central/State Govts. with 50% aggregate marks and with Mathematics as a compulsory subject of examination; OR 10+3 Diploma (any stream) recognized by Central/State Govts. with 50% aggregate marks with Mathematics as a compulsory subject of examination; OR International Baccalaureate Diploma passed/appearing, after 10 years of schooling with 50% marks in aggregate and with Mathematics as compulsory subject of examination.",
//     apply: "Online",
//     activity: "April",
//     source: "https://learning.tcsionhub.in/test/nata-2018",
//   },
//   {
//     id: "gate",
//     tag: "GATE",
//     level: "PG",
//     name: "Graduate Aptitude Test in Engineering (GATE)",
//     purpose:
//       "ME/MTECH in IITs, NITs, and other Universities. Direct Jobs in PSU",
//     eligibility: "B.Tech/MSc",
//     apply: "Online",
//     activity: "February",
//     source: "http://gate.iitm.ac.in/",
//   },
//   {
//     id: "jntu-pacet",
//     tag: "JNTU PACET",
//     level: "UG",
//     name: "Jawaharlal Nehru Technological University Planning and Architecture Common Entrance Test (JNTU PACET)",
//     purpose: "5 year B.Arch or 4 year B.Plan",
//     eligibility:
//       "Candidate should obtain a Minimum of 50% in 10 + 2 Marks",
//     apply: "Online",
//     activity: "May",
//     source: "Jntu.ac.in",
//   },
//   {
//     id: "amie",
//     tag: "AMIE",
//     level: "UG / Professional",
//     name: "Associates Membership of Institution of Engineering (AMIE)",
//     purpose: "AMIE equivalent to BE/BTECH",
//     eligibility:
//       "1. Passed recognized 3-year Polytechnic Diploma or its equivalent in any branch of engineering (no marks restriction). 2. Minimum age 18 years.",
//     apply: "Online / Offline",
//     activity: "June",
//     source: "https://www.ieindia.org",
//   },
//   {
//     id: "enat",
//     tag: "ENAT",
//     level: "UG",
//     name: "EPSI National Admission Test (ENAT)",
//     purpose: "BE/BTECH",
//     eligibility:
//       "To be eligible to appear for ENAT examinations the candidate needs to satisfy the eligibility conditions laid down by the respective member institution and the course he/she is aspiring for admission. Therefore the specific eligibility requirement needs to be obtained from the concerned institutions’ official website depending upon the course chosen.",
//     apply:
//       "The printed brochure with form can also be obtained from Education Promotion Society for India on payment towards ENAT – EPSI National Admission Test Prospectus and postage charges.",
//     activity: "From April to May",
//     source: "www.enat.org.in or www.epsi.org",
//   },
//   {
//     id: "ecet-fdh",
//     tag: "ECET FDH",
//     level: "UG (Lateral)",
//     name: "EPSI National Admission Test (ECET FDH)",
//     purpose: "BE/BTECH for diploma holders through lateral entry",
//     eligibility: "Diploma with 60% marks",
//     apply: "Online / Offline",
//     activity: "May",
//     source: "http://ecet.tsche.ac.in/TSECET/TSECET_HomePage.aspx",
//   },
//   {
//     id: "lpunest",
//     tag: "LPUNEST",
//     level: "UG",
//     name: "LPU-NEST (B.Tech)",
//     purpose:
//       "• B.Tech. (4 years Programme) • B.Tech. (Hons.) (4 years) • Dual Degree B.Tech. – M.Tech (6 Years) • Dual Degree B.Tech. – MBA (6 Years) • Integrated B.Tech. – M.Tech. (5 Years Programme) • Integrated B.Tech. – MBA (5 Years Programme)",
//     eligibility:
//       "Only Indian Nationals are eligible to apply for LPUNEST (B.Tech.). Applicants appearing for LPUNEST (B.Tech.) should have either completed or shall be appearing in 12th in final examination from Central Board of Secondary Education (CBSE), New Delhi or The Council for Indian School Certificate Examination (ICSE), New Delhi or State Board or other Council, Institution, College, etc. recognized by Council of Boards of School Education (COBSE), New Delhi or any other concerned apex body as applicable. For B.Tech. and B.Tech. (Hons.): Pass with 60% aggregate marks in 10+2 or equivalent with Physics, Mathematics and English* (subject to qualifying LPUNEST (B.Tech.)). For B.Tech. (Biotechnology) and allied programmes and Integrated B.Tech. – M.Tech. (Biotechnology): subjects considered: Physics, Chemistry, English & either Maths or Biology or Biotechnology; other things remaining same as above. For B.Tech. Chemical Engineering (CHE) and B.Tech. (CHE – Petroleum): subjects considered: Physics, Chemistry, Mathematics and English; other things remaining same as above.",
//     apply: "Online",
//     activity: "April",
//     source: "www.lpu.in",
//   },
//   {
//     id: "manipal",
//     tag: "Manipal (B.Tech)",
//     level: "UG",
//     name: "Manipal B.Tech Entrance (Manipal Institute of Technology)",
//     purpose:
//       "For admission in B.Tech program in Aeronautical, Chemical, Electrical & Electronics, Electronics & Instrumentation, Automobile, Civil, Electronics & Communication, Mechanical, Biomedical, Computer & Communication, Industrial & Production, Mechatronics, Biotechnology, Computer Science, Information Technology, Media Technology.",
//     eligibility:
//       "Citizenship: Indian nationals. In order to be eligible for B. Tech admission at Manipal Institute of Technology, it is necessary for applicants to be Indian nationals. Applicants who have completed 10+2, A Level, IB, American 12th grade, or any equivalent examination can apply for admission. The B. Tech eligibility criteria mandate that their compulsory subjects include Physics, Mathematics, and English. In addition to this, their optional subjects may include Chemistry, Biology, Biotechnology, or any technical vocational subject. They should have scored a minimum of 50% marks taken together in Physics, Mathematics, and any one of the optional subjects.",
//     apply: "Online",
//     activity: "April",
//     source: "https://admissions.manipal.edu",
//   },
//   {
//     id: "iisc-bangalore",
//     tag: "IISc UG",
//     level: "UG",
//     name: "IISc Bangalore UG Entrance (B.Sc. Research)",
//     purpose: "B.Sc (Research) at IISc Bangalore",
//     eligibility: "10+2",
//     apply: "Online",
//     activity: "February",
//     source: "http://www.iisc.ac.in/ug",
//   },
// ];

// // -------------------------------------------------------------
// // Card Component – show more near Eligibility, equal height
// // -------------------------------------------------------------
// function ExamCard({ exam }) {
//   const [expanded, setExpanded] = useState(false);

//   const hasLongEligibility = exam.eligibility && exam.eligibility.length > 140;
//   const eligibilityText = expanded || !hasLongEligibility
//     ? exam.eligibility
//     : getEligibilityPreview(exam.eligibility);

//   return (
//     <div className="iitCard w-100 d-flex flex-column h-100">
//       {/* Top tag + level */}
//       <div className="d-flex align-items-center justify-content-between mb-3">
//         <span className="iitRank small fw-semibold">{exam.tag}</span>
//         <span className="iitCodeBadge">{exam.level}</span>
//       </div>

//       {/* Title + purpose */}
//       <div className="mb-2">
//         <h3 className="h6 fw-semibold mb-1 text-dark">{exam.name}</h3>
//         {exam.purpose && (
//           <p className="small text-muted mb-0">{exam.purpose}</p>
//         )}
//       </div>

//       <div className="iitDivider my-2" />

//       {/* Eligibility + show more – this is directly under title */}
//       <div className="small text-muted mb-2">
//         {exam.eligibility && (
//           <p className="mb-1">
//             <strong>Eligibility:</strong> {eligibilityText}
//           </p>
//         )}

//         {hasLongEligibility && (
//           <button
//             type="button"
//             className="btn btn-link btn-sm px-0 mt-0"
//             onClick={() => setExpanded((v) => !v)}
//           >
//             {expanded ? "Show less" : "Show more"}
//           </button>
//         )}
//       </div>

//       {/* Apply / Activity – keep in the middle, still inside flex-grow area */}
//       <div className="small text-muted mb-2 flex-grow-1">
//         {exam.apply && (
//           <p className="mb-1">
//             <strong>Apply:</strong> {exam.apply}
//           </p>
//         )}
//         {exam.activity && (
//           <p className="mb-0">
//             <strong>Activity (typical):</strong> {exam.activity}
//           </p>
//         )}
//       </div>

//       {/* Source / website at bottom */}
//       {exam.source && (
//         <>
//           <div className="iitDivider my-2" />
//           <div className="mt-auto d-flex justify-content-between align-items-center">
           
//             <a
//               href={getWebsiteHref(exam.source)}
//               target="_blank"
//               rel="noreferrer"
//               className="iitWebsiteLink d-inline-flex align-items-center gap-1"
//             >
//               <span className="small">{exam.source}</span>
//               <ExternalLink size={14} aria-hidden="true" />
//             </a>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// // -------------------------------------------------------------
// // MAIN PAGE
// // -------------------------------------------------------------
// export default function EngineeringNationalExamsPage() {
//   return (
//     <>
//     <FrontendLayout>
//       <HeroInner
//         title="National Level Engineering Entrance Exams"
//         breadcrumb="Engineering → National Level Entrance Exams"
//       />

//       <ExamTabsBar tabs={EXAM_TABS} activeId="engineering-national" />

//       {/* 1. ABOUT + SNAPSHOT */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <div className="row g-4 align-items-start">
//             {/* About */}
//             <div className="col-12 col-lg-7">
//               <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
//                 <span>About National Engineering Entrance Exams</span>
//               </h2>
//               <p className="sectionSub">
//                 At the national level, engineering and architecture aspirants
//                 appear for entrance examinations that are used for admission
//                 into premier institutes and universities across India. These
//                 include central examinations such as JEE (Main) and JEE
//                 (Advanced), university-specific tests like BITSAT and VITEEE,
//                 and common aptitude tests like GATE for postgraduate
//                 engineering.
//               </p>
//               <p className="sectionSub mb-0">
//                 This page brings together the entrance examination details given
//                 in the Career Guide for national-level engineering, technology
//                 and architecture programmes – including their purpose,
//                 eligibility, basic application mode, typical activity month and
//                 official sources as available.
//               </p>
//             </div>

//             {/* Snapshot */}
//             <div className="col-12 col-lg-5">
//               <div className="sectionCard bg-light border">
//                 <h3 className="h6 mb-3 d-flex align-items-center gap-2">
//                   <Layers3 size={18} className="text-primary" />
//                   <span>Quick Snapshot</span>
//                 </h3>
//                 <dl className="row small mb-0">
//                   <dt className="col-5">National exams listed</dt>
//                   <dd className="col-7 mb-2">
//                     {NATIONAL_ENGINEERING_EXAMS.length} entrance exams
//                   </dd>

//                   <dt className="col-5">Levels covered</dt>
//                   <dd className="col-7 mb-2">
//                     UG (B.E./B.Tech/B.Arch), integrated degrees, PG (GATE) and
//                     professional equivalent (AMIE)
//                   </dd>

//                   <dt className="col-5">Key UG gateways</dt>
//                   <dd className="col-7 mb-2">
//                     JEE Main, JEE Advanced, BITSAT, VITEEE, APIIT NAT, ITSAT,
//                     NATA and others
//                   </dd>

//                   <dt className="col-5">PG / professional</dt>
//                   <dd className="col-7 mb-2">
//                     GATE for M.E./M.Tech and PSU jobs, AMIE as B.E./B.Tech
//                     equivalent
//                   </dd>

//                   <dt className="col-5">Example programmes</dt>
//                   <dd className="col-7 mb-0">
//                     B.Tech, B.E., B.Arch, B.Planning, B.Sc (Research),
//                     integrated B.Tech–M.Tech/MBA and M.Tech via GATE
//                   </dd>
//                 </dl>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. PROGRAMMES & EXAM PATHWAYS */}
//       <section className="py-5 nitLightGradient">
//         <div className="container">
//           <div className="mb-4 text-center text-lg-start">
//             <h2 className="sectionHeading mb-2">
//               How National Exams Connect to Programmes
//             </h2>
//             <p className="sectionSub mb-0">
//               Different national entrance exams lead to different types of
//               engineering, architecture and related programmes.
//             </p>
//           </div>

//           <div className="row g-4 align-items-stretch">
//             {/* Left */}
//             <div className="col-12 col-lg-5 d-flex">
//               <div className="nitDarkGlassBox w-100">
//                 <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
//                   <Network size={16} />
//                   <span>Programme pathways</span>
//                 </span>

//                 <p className="small mb-3">
//                   National-level engineering entrances open doors to different
//                   categories of programmes – undergraduate engineering and
//                   architecture, integrated and dual degrees, as well as
//                   postgraduate technical courses and professional
//                   qualifications.
//                 </p>

//                 <ul className="nitDarkList mb-0">
//                   <li>
//                     <strong>B.E./B.Tech / B.Arch / B.Planning</strong> – via
//                     exams such as JEE Main, JEE Advanced, BITSAT, VITEEE, NATA,
//                     APIIT NAT, ITSAT and others.
//                   </li>
//                   <li>
//                     <strong>Integrated and Dual Degrees</strong> – exams like
//                     LPUNEST and Manipal entrance cover integrated B.Tech–M.Tech
//                     or B.Tech–MBA pathways.
//                   </li>
//                   <li>
//                     <strong>Bachelor of Science (Research)</strong> – IISc
//                     Bangalore UG entrance (B.Sc Research).
//                   </li>
//                   <li>
//                     <strong>Postgraduate Engineering</strong> – GATE scores
//                     used for M.E./M.Tech admissions in IITs, NITs and other
//                     universities and for PSU recruitment.
//                   </li>
//                   <li>
//                     <strong>Professional Equivalents</strong> – AMIE provides a
//                     route equivalent to B.E./B.Tech for diploma holders and
//                     working candidates.
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Right – highlighted group cards */}
//             <div className="col-12 col-lg-7 d-flex">
//               <div className="row g-3 w-100 align-content-stretch">
//                 <div className="col-12 col-sm-6 d-flex">
//                   <div className="nitDarkGlassCard w-100 d-flex flex-column">
//                     <div className="d-flex justify-content-between align-items-center mb-2">
//                       <span className="nitExamTag">JEE Main &amp; Advanced</span>
//                       <span className="nitExamLevel">UG</span>
//                     </div>
//                     <p className="nitExamTitle mb-1">
//                       Entry to NITs, IIITs and IITs
//                     </p>
//                     <p className="nitExamText mb-0">
//                       National gateway to centrally funded engineering
//                       institutes including IITs (JEE Advanced) and NITs (JEE
//                       Main).
//                     </p>
//                   </div>
//                 </div>

//                 <div className="col-12 col-sm-6 d-flex">
//                   <div className="nitDarkGlassCard w-100 d-flex flex-column">
//                     <div className="d-flex justify-content-between align-items-center mb-2">
//                       <span className="nitExamTag">BITSAT / VITEEE</span>
//                       <span className="nitExamLevel">UG</span>
//                     </div>
//                     <p className="nitExamTitle mb-1">
//                       University-specific B.Tech entries
//                     </p>
//                     <p className="nitExamText mb-0">
//                       National-level entrances for BITS Pilani campuses and VIT
//                       University B.Tech programmes.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="col-12 col-sm-6 d-flex">
//                   <div className="nitDarkGlassCard w-100 d-flex flex-column">
//                     <div className="d-flex justify-content-between align-items-center mb-2">
//                       <span className="nitExamTag">NATA / JNTU PACET</span>
//                       <span className="nitExamLevel">Architecture</span>
//                     </div>
//                     <p className="nitExamTitle mb-1">
//                       B.Arch and B.Plan admissions
//                     </p>
//                     <p className="nitExamText mb-0">
//                       Used for architecture and planning programmes in
//                       different institutes.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="col-12 col-sm-6 d-flex">
//                   <div className="nitDarkGlassCard w-100 d-flex flex-column">
//                     <div className="d-flex justify-content-between align-items-center mb-2">
//                       <span className="nitExamTag">GATE / AMIE</span>
//                       <span className="nitExamLevel">PG / Professional</span>
//                     </div>
//                     <p className="nitExamTitle mb-1">
//                       M.Tech & BE/B.Tech equivalent
//                     </p>
//                     <p className="nitExamText mb-0">
//                       GATE for postgraduate engineering and PSU recruitment;
//                       AMIE as a professional engineering qualification route.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. DETAILED LIST – cards with show more near eligibility */}
//       <section className="py-4 py-md-5">
//         <div className="container">
//           <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
//             <div className="flex-grow-1">
//               <h2 className="sectionHeading mb-1">
//                 National Level Engineering Entrance Exams – Details
//               </h2>
//               <p className="sectionSub mb-0">
//                 All national-level engineering, technology and architecture
//                 entrance examinations listed in the Career Guide under the
//                 “Entrance Examination Details” section.
//               </p>
//             </div>
//           </div>

//           <div className="row g-3 g-md-4">
//             {NATIONAL_ENGINEERING_EXAMS.map((exam) => (
//               <div key={exam.id} className="col-12 col-md-6 col-lg-6 d-flex">
//                 <ExamCard exam={exam} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. GUIDANCE NOTE */}
//       <section className="py-4 py-md-5 bg-light">
//         <div className="container">
//           <div className="sectionCard bg-light border small">
//             <h3 className="h6 mb-2">How to Use This Information</h3>
//             <p className="mb-2">
//               This section compiles national-level engineering and related
//               entrance examinations from the Career Guide so that students can
//               see the exam name, basic purpose, eligibility, usual activity
//               month and source in one place.
//             </p>
//             <p className="mb-0 text-muted">
//               For any particular admission year, always rely on the latest
//               official notification or exam website for updated dates,
//               eligibility changes, syllabus and application procedures. The
//               details here are for guidance and planning only.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* 5. EXPLORE OTHER EXAM CATEGORIES */}
// <section className="py-5 spotlightSection">
//   <div className="container py-lg-4">
//     <div className="row g-4 align-items-center justify-content-center mb-3 mb-lg-5 text-center">
//       <div className="col-12 col-lg-7">
//         <h2 className="sectionHeading text-white mb-2">
//           Explore Other Exam Categories
//         </h2>
//         <p className="sectionSub text-light mb-0">
//           Along with engineering entrance exams, students may also prepare for
//           medical, management, law and other competitive or international
//           examinations. Use these sections to explore full details stream-wise.
//         </p>
//       </div>
//     </div>

//     <div className="row g-4 justify-content-center">
//       {/* Medical Entrance Exams */}
//       <div className="col-12 col-md-4 col-lg-4">
//         <Link
//           href="/exams/medical/national"
//           className="text-decoration-none"
//         >
//           <div className="glassCard premiumHover h-100">
//             <h3 className="h6 mb-1 fw-medium text-white">
//               Medical Entrance Exams
//             </h3>
//             <p className="small text-light mb-0">
//               NEET UG and other national, state and university-level exams for
//               MBBS, BDS, AYUSH and allied medical courses.
//             </p>
//           </div>
//         </Link>
//       </div>

//       {/* Management & Law Entrance */}
//       <div className="col-12 col-md-4 col-lg-4">
//         <Link
//           href="/exams/mba"
//           className="text-decoration-none"
//         >
//           <div className="glassCard premiumHover h-100">
//             <h3 className="h6 mb-1 fw-medium text-white">
//               Management &amp; Law Entrance
//             </h3>
//             <p className="small text-light mb-0">
//               CAT, XAT, MAT and other tests leading to BBA / MBA and
//               management programmes, with a separate section for Law (CLAT,
//               AILET, etc.).
//             </p>
//           </div>
//         </Link>
//       </div>

//       {/* Other Competitive & International */}
//       <div className="col-12 col-md-4 col-lg-4">
//         <Link
//           href="/exams/international"
//           className="text-decoration-none"
//         >
//           <div className="glassCard premiumHover h-100">
//             <h3 className="h6 mb-1 fw-medium text-white">
//               Other Competitive &amp; International Exams
//             </h3>
//             <p className="small text-light mb-0">
//               Defence services, civil services &amp; government recruitment, as
//               well as GRE, GMAT, IELTS, TOEFL and other international tests.
//             </p>
//           </div>
//         </Link>
//       </div>
//     </div>
//   </div>
// </section>
// </FrontendLayout>
//     </>
//   );
// }


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

// Small helper to make a short preview for eligibility
function getEligibilityPreview(full) {
  if (!full) return "";
  const clean = full.replace(/\s+/g, " ").trim();
  if (clean.length <= 140) return clean;
  return clean.slice(0, 140) + "…";
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
// Card Component – show more near Eligibility, equal height
// -------------------------------------------------------------

function ExamCard({ exam }) {
  const [expanded, setExpanded] = useState(false);

  // Normalize eligibility to a single string regardless of whether backend sends string or array
  const eligibilityRaw = Array.isArray(exam.eligibility)
    ? exam.eligibility.join(" ")
    : typeof exam.eligibility === "string"
    ? exam.eligibility
    : "";

  const hasLongEligibility = eligibilityRaw.length > 140;
  const eligibilityText =
    expanded || !hasLongEligibility
      ? eligibilityRaw
      : getEligibilityPreview(eligibilityRaw);

  return (
    <div className="iitCard w-100 d-flex flex-column h-100">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <span className="iitRank small fw-semibold">{exam.tag}</span>
        <span className="iitCodeBadge">{exam.level}</span>
      </div>

      <div className="mb-2">
        <h3 className="h6 fw-semibold mb-1 text-dark">{exam.name}</h3>
        {exam.purpose && (
          <p className="small text-muted mb-0">{exam.purpose}</p>
        )}
      </div>

      <div className="iitDivider my-2" />

      <div className="small text-muted mb-2">
        {!!eligibilityRaw && (
          <p className="mb-1">
            <strong>Eligibility:</strong> {eligibilityText}
          </p>
        )}

        {hasLongEligibility && (
          <button
            type="button"
            className="btn btn-link btn-sm px-0 mt-0"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>

      <div className="small text-muted mb-2 flex-grow-1">
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
export default function EngineeringNationalExamsPage({ examContents }) {

  const nationalEngineeringExams = Array.isArray(examContents) ? examContents : [];

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="National Level Engineering Entrance Exams"
        breadcrumb="Engineering → National Level Entrance Exams"
      />

      <ExamTabsBar tabs={EXAM_TABS} activeId="engineering-national" />

      {/* 1. ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            {/* About */}
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <span>About National Engineering Entrance Exams</span>
              </h2>
              <p className="sectionSub">
                At the national level, engineering and architecture aspirants
                appear for entrance examinations that are used for admission
                into premier institutes and universities across India. These
                include central examinations such as JEE (Main) and JEE
                (Advanced), university-specific tests like BITSAT and VITEEE,
                and common aptitude tests like GATE for postgraduate
                engineering.
              </p>
              <p className="sectionSub mb-0">
                This page brings together the entrance examination details given
                in the Career Guide for national-level engineering, technology
                and architecture programmes – including their purpose,
                eligibility, basic application mode, typical activity month and
                official sources as available.
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
                  <dt className="col-5">National exams listed</dt>
                  <dd className="col-7 mb-2">
                    {nationalEngineeringExams.length} entrance exams
                  </dd>

                  <dt className="col-5">Levels covered</dt>
                  <dd className="col-7 mb-2">
                    UG (B.E./B.Tech/B.Arch), integrated degrees, PG (GATE) and
                    professional equivalent (AMIE)
                  </dd>

                  <dt className="col-5">Key UG gateways</dt>
                  <dd className="col-7 mb-2">
                    JEE Main, JEE Advanced, BITSAT, VITEEE, APIIT NAT, ITSAT,
                    NATA and others
                  </dd>

                  <dt className="col-5">PG / professional</dt>
                  <dd className="col-7 mb-2">
                    GATE for M.E./M.Tech and PSU jobs, AMIE as B.E./B.Tech
                    equivalent
                  </dd>

                  <dt className="col-5">Example programmes</dt>
                  <dd className="col-7 mb-0">
                    B.Tech, B.E., B.Arch, B.Planning, B.Sc (Research),
                    integrated B.Tech–M.Tech/MBA and M.Tech via GATE
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROGRAMMES & EXAM PATHWAYS */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">
              How National Exams Connect to Programmes
            </h2>
            <p className="sectionSub mb-0">
              Different national entrance exams lead to different types of
              engineering, architecture and related programmes.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* Left */}
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Programme pathways</span>
                </span>

                <p className="small mb-3">
                  National-level engineering entrances open doors to different
                  categories of programmes – undergraduate engineering and
                  architecture, integrated and dual degrees, as well as
                  postgraduate technical courses and professional
                  qualifications.
                </p>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>B.E./B.Tech / B.Arch / B.Planning</strong> – via
                    exams such as JEE Main, JEE Advanced, BITSAT, VITEEE, NATA,
                    APIIT NAT, ITSAT and others.
                  </li>
                  <li>
                    <strong>Integrated and Dual Degrees</strong> – exams like
                    LPUNEST and Manipal entrance cover integrated B.Tech–M.Tech
                    or B.Tech–MBA pathways.
                  </li>
                  <li>
                    <strong>Bachelor of Science (Research)</strong> – IISc
                    Bangalore UG entrance (B.Sc Research).
                  </li>
                  <li>
                    <strong>Postgraduate Engineering</strong> – GATE scores
                    used for M.E./M.Tech admissions in IITs, NITs and other
                    universities and for PSU recruitment.
                  </li>
                  <li>
                    <strong>Professional Equivalents</strong> – AMIE provides a
                    route equivalent to B.E./B.Tech for diploma holders and
                    working candidates.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right – highlighted group cards */}
            <div className="col-12 col-lg-7 d-flex">
              <div className="row g-3 w-100 align-content-stretch">
                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">JEE Main &amp; Advanced</span>
                      <span className="nitExamLevel">UG</span>
                    </div>
                    <p className="nitExamTitle mb-1">
                      Entry to NITs, IIITs and IITs
                    </p>
                    <p className="nitExamText mb-0">
                      National gateway to centrally funded engineering
                      institutes including IITs (JEE Advanced) and NITs (JEE
                      Main).
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">BITSAT / VITEEE</span>
                      <span className="nitExamLevel">UG</span>
                    </div>
                    <p className="nitExamTitle mb-1">
                      University-specific B.Tech entries
                    </p>
                    <p className="nitExamText mb-0">
                      National-level entrances for BITS Pilani campuses and VIT
                      University B.Tech programmes.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">NATA / JNTU PACET</span>
                      <span className="nitExamLevel">Architecture</span>
                    </div>
                    <p className="nitExamTitle mb-1">
                      B.Arch and B.Plan admissions
                    </p>
                    <p className="nitExamText mb-0">
                      Used for architecture and planning programmes in
                      different institutes.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex">
                  <div className="nitDarkGlassCard w-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="nitExamTag">GATE / AMIE</span>
                      <span className="nitExamLevel">PG / Professional</span>
                    </div>
                    <p className="nitExamTitle mb-1">
                      M.Tech & BE/B.Tech equivalent
                    </p>
                    <p className="nitExamText mb-0">
                      GATE for postgraduate engineering and PSU recruitment;
                      AMIE as a professional engineering qualification route.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DETAILED LIST – cards with show more near eligibility */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end mb-3 mb-lg-4 gap-2">
            <div className="flex-grow-1">
              <h2 className="sectionHeading mb-1">
                National Level Engineering Entrance Exams – Details
              </h2>
              <p className="sectionSub mb-0">
                All national-level engineering, technology and architecture
                entrance examinations listed in the Career Guide under the
                "Entrance Examination Details" section.
              </p>
            </div>
          </div>

          {nationalEngineeringExams.length === 0 ? (
            <div className="sectionCard bg-light border text-center small text-muted">
              No exam data available right now. Please check back later.
            </div>
          ) : (
            <div className="row g-3 g-md-4">
              {nationalEngineeringExams.map((exam) => (
                <div key={exam.id ?? exam.tag} className="col-12 col-md-6 col-lg-6 d-flex">
                  <ExamCard exam={exam} />
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
              This section compiles national-level engineering and related
              entrance examinations from the Career Guide so that students can
              see the exam name, basic purpose, eligibility, usual activity
              month and source in one place.
            </p>
            <p className="mb-0 text-muted">
              For any particular admission year, always rely on the latest
              official notification or exam website for updated dates,
              eligibility changes, syllabus and application procedures. The
              details here are for guidance and planning only.
            </p>
          </div>
        </div>
      </section>


</FrontendLayout>
    </>
  );
}