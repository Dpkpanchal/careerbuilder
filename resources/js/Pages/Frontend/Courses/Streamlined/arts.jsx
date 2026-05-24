"use client";

import React from "react";
import {
  Layers3,
  BookOpen,
  GraduationCap,
  Landmark,
  Scale,
  Users,
  ClipboardList,
  Sparkles,
} from "lucide-react";

import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CoursesTabsBar from "../CoursesTabsBar";

// ------------------------------------------------------------------
// Streamlined Degree sub-tabs (as you gave)
// ------------------------------------------------------------------
const TABS = [
  { id: "ba", label: "BA & Allied", href: '/courses/arts-graduation-courses-ba-allied' },
  { id: "bcom", label: "B.Com & Allied", href: '/courses/commerce-graduation-courses-bcom-allied' },
  { id: "bsc", label: "B.Sc & Allied", href: '/courses/science-graduation-courses-bsc-allied' },
  { id: "ma", label: "MA, MSW & Allied", href: '/courses/arts-pg-courses-ma-msw-allied' },
  { id: "msc", label: "M.Sc & Allied", href: '/courses/science-pg-courses-msc-allied' },
  { id: "mcom", label: "M.Com & Allied", href: '/courses/commerce-pg-courses-mcom-allied' },
];

// ------------------------------------------------------------------
// Data (Career Book Streamlined – Arts UG)
// ------------------------------------------------------------------
const BA_SUBJECT_FAMILIES = [
  {
    title: "Languages & Literature",
    items: ["Bengali", "English", "Hindi", "Urdu", "Sanskrit", "Other languages"],
  },
  { title: "Humanities", items: ["History", "Philosophy", "Geography"] },
  {
    title: "Social Sciences",
    items: ["Political Science", "Sociology", "Psychology", "Public Administration"],
  },
  { title: "Economics", items: ["Economics (General/Honours depending on institute)"] },
];

const AFTER_BA = [
  {
    title: "Higher Studies",
    desc: "MA / MSW / other PG → specialization and better opportunities.",
    points: [
      "Pick a subject you can continue long-term (MA/research).",
      "Improve writing, reading depth and basic research skills.",
      "Build a clean academic profile (attendance + grades).",
    ],
  },
  {
    title: "Teaching Track",
    desc: "Plan UG + required teaching qualification for school/education roles.",
    points: [
      "Choose a strong Honours subject for your teaching domain.",
      "Work on communication and classroom confidence early.",
      "Check eligibility rules for teaching roles before deciding.",
    ],
  },
  {
    title: "Competitive Exams",
    desc: "WBCS/UPSC/SSC/Banking/Railways — choose based on interest & eligibility.",
    points: [
      "Build GK + current affairs habit (daily, not last-minute).",
      "Choose one exam track and stick to it for 6–12 months.",
      "Practice answer writing / mocks consistently.",
    ],
  },
  {
    title: "Skill + Job Route",
    desc: "Communication, digital skills, internships → faster employability.",
    points: [
      "MS Office / Docs + presentations (must-have for most jobs).",
      "English + interview practice + resume basics.",
      "Internship/volunteering for real experience and confidence.",
    ],
  },
];

const ADMISSION_POINTS = [
  "Many UG admissions are based on Class 12 marks (merit list).",
  "Some colleges may have subject cut-offs or entrance routes for selected courses.",
  "Always verify from official institute/university notices before applying.",
];

const DOCS = [
  "Class 10 & 12 marksheets",
  "ID proof (Aadhaar etc.)",
  "Photo + signature",
  "Category/EWS/Income certificate (if applicable)",
  "Domicile (if required)",
];

const SNAPSHOT = [
  { t: "Govt Exams Track", d: "WBCS/UPSC/SSC etc. (based on your goal)" },
  { t: "Teaching/Education", d: "BA + required teaching qualification path" },
  { t: "Administration", d: "Office/admin/coordinator roles with skills" },
  { t: "Media/Content", d: "Content, communication, social media (with add-ons)" },
  { t: "Social Sector/NGO", d: "Community programs, CSR, field/project work" },
  { t: "Higher Studies", d: "MA/MSW → research/academics specialization" },
];

// ------------------------------------------------------------------
// Small helpers (composition only)
// ------------------------------------------------------------------
function SectionHeader({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-4 text-center text-lg-start">
      <h2 className="sectionHeading mb-2 d-flex align-items-center gap-2 justify-content-center justify-content-lg-start">
        {Icon ? <Icon size={18} className="text-primary" /> : null}
        <span>{title}</span>
      </h2>
      {subtitle ? (
        <p className="sectionSub mb-0" style={{ maxWidth: "90ch" }}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function MiniDL({ items }) {
  return (
    <dl className="row small mb-0">
      {items.map((it, idx) => (
        <React.Fragment key={idx}>
          <dt className="col-5">{it.k}</dt>
          <dd className={`col-7 ${idx === items.length - 1 ? "mb-0" : "mb-2"}`}>
            {it.v}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

// ------------------------------------------------------------------
// Page
// ------------------------------------------------------------------
export default function ArtsDegree() {
  return (
    <>
    <FrontendLayout>
      <HeroInner title="Arts Graduation Courses (BA & Allied)" breadcrumb="BA & Allied" />
      <CoursesTabsBar tabs={TABS} activeId="ba" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <BookOpen size={18} className="text-primary" />
                <span>About Arts Graduation Courses</span>
              </h2>

              <p className="sectionSub">
                Arts graduation is one of the most flexible degree routes after Class 12. It can be built around a major
                subject (Honours) or a broader combination (General), and it works well for higher studies, competitive
                exams, teaching pathways, and diverse entry-level careers.
              </p>

              <p className="sectionSub mb-0">
                In streamlined Arts-aligned choices, you’ll commonly see B.A, B.A Public Administration, Integrated
                B.A LL.B (Law), and BSW (Social Work). The right choice depends on your long-term goal—so decide early
                and build skills + experience alongside your degree.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <MiniDL
                  items={[
                    { k: "Options covered", v: "BA • Public Admin • BA LL.B • BSW" },
                    { k: "Typical duration", v: "3 years (most UG) • 5 years (Integrated Law)" },
                    { k: "Entry", v: "After Class 12" },
                    { k: "Admission", v: "Merit / Entrance (varies by institute)" },
                    { k: "Good for", v: "PG • Exams • Teaching track • Careers" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) BA (General/Honours) – MORE POLISHED / SENSIBLE (enhanced hierarchy) */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="B.A (General / Honours)"
            subtitle="The most flexible Arts UG route. Choose General for breadth or Honours for depth in one subject."
          />

          <div className="row g-4 align-items-stretch">
            {/* LEFT – polished content with chips + grouped lists */}
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <BookOpen size={16} />
                  <span>What you study (common families)</span>
                </span>

                <div className="d-flex flex-column gap-2 mb-4">
                  {BA_SUBJECT_FAMILIES.map((sf) => (
                    <div key={sf.title} className="">
                      <span>
                        <strong>{sf.title}:</strong>{" "}
                        <span className="text-light small">{sf.items.join(" • ")}</span>
                      </span>
                    </div>
                  ))}
                </div>

                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Sparkles size={16} />
                  <span>How to choose smartly</span>
                </span>

                <ul className="nitDarkList mb-0">
                  <li>
                    Pick <strong>Honours</strong> if you want depth for <strong>PG / teaching / research</strong>.
                  </li>
                  <li>
                    Pick <strong>General</strong> if you want flexibility and broader combinations.
                  </li>
                  <li>
                    For exams, choose a subject that supports <strong>answer-writing + GS overlap</strong>
                    (e.g., History/Pol Science/Public Admin).
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT – clean quick facts + outcomes */}
            <div className="col-12 col-lg-5 d-flex">
              <div className="sectionCard bg-light border w-100">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick facts</span>
                </h3>

                <MiniDL
                  items={[
                    { k: "Duration", v: "3 years" },
                    { k: "Eligibility", v: "Class 12 pass" },
                    { k: "Admission", v: "Merit / Entrance (varies)" },
                    { k: "Best for", v: "PG • Exams • Flexible careers" },
                  ]}
                />

                <div className="mt-4">
                  <div className="fw-semibold mb-2">Typical outcomes</div>

                  <div className="d-flex flex-column gap-2">
                    {[
                      "Higher studies (MA / MSW / other PG options)",
                      "Teaching track planning (as per requirements)",
                      "Competitive exam preparation (WBCS/UPSC/SSC etc.)",
                      "Entry roles + skills (content/admin/operations/support roles)",
                    ].map((x) => (
                      <div key={x} className="">
                        <span>{x}</span>
                        <span className="small text-muted">Outcome</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-muted small mt-3">
                    Sensible approach: decide one primary goal (PG/exams/job) by end of 1st year and build your profile
                    accordingly.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compact course variants row (polished, but minimal) */}
          <div className="row g-3 mt-3">
            <div className="col-12 col-lg-4">
              <div className="nitDarkGlassCard h-100">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="nitExamTag">BA</span>
                  <span className="nitExamLevel">UG</span>
                </div>
                <p className="nitExamTitle mb-1">B.A (General)</p>
                <p className="nitExamText mb-0">
                  Broad combinations. Good if you want flexibility and multiple direction options.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="nitDarkGlassCard h-100">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="nitExamTag">BA</span>
                  <span className="nitExamLevel">UG</span>
                </div>
                <p className="nitExamTitle mb-1">B.A (Honours)</p>
                <p className="nitExamText mb-0">
                  One major subject. Better if you plan PG/teaching/research in the same domain.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="nitDarkGlassCard h-100">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="nitExamTag">Add-ons</span>
                  <span className="nitExamLevel">Must</span>
                </div>
                <p className="nitExamTitle mb-1">Skills & Experience</p>
                <p className="nitExamText mb-0">
                  Communication + basic digital skills + internship/volunteering improve outcomes sharply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) Public Admin */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={Landmark}
            title="B.A Public Administration"
            subtitle="Governance, public systems, administration and policy-focused studies."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Landmark size={16} />
                  <span>Where it helps most</span>
                </span>

                <ul className="nitDarkList mb-0">
                  <li>
                    Helps build strong base for <strong>governance & administration</strong> topics.
                  </li>
                  <li>
                    Useful support for <strong>competitive exams</strong> where polity/admin overlaps.
                  </li>
                  <li>
                    Natural progression to <strong>MA (Public Administration)</strong> or policy-related PG.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-5 d-flex">
              <div className="sectionCard bg-light border w-100">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick facts</span>
                </h3>

                <MiniDL
                  items={[
                    { k: "Duration", v: "3 years" },
                    { k: "Eligibility", v: "Class 12 pass" },
                    { k: "Best for", v: "Governance/Admin focus" },
                    { k: "Progression", v: "MA (Public Administration)" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) BA LLB */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={Scale}
            title="B.A LL.B (Integrated Law)"
            subtitle="Professional route for law: advocacy, judiciary, compliance and policy roles."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Scale size={16} />
                  <span>Where it leads</span>
                </span>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>Advocacy/practice</strong> pathway (as per required registration).
                  </li>
                  <li>
                    <strong>Judiciary</strong> track (as per eligibility rules).
                  </li>
                  <li>
                    <strong>Corporate legal</strong> roles: compliance, contracts, governance, policy.
                  </li>
                </ul>

                <div className="text-muted small mt-3">
                  Note: Admission patterns can vary by institute and year—follow official notices.
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5 d-flex">
              <div className="sectionCard bg-light border w-100">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick facts</span>
                </h3>

                <MiniDL
                  items={[
                    { k: "Duration", v: "5 years" },
                    { k: "Eligibility", v: "Class 12 pass" },
                    { k: "Admission", v: "Merit / Entrance (varies)" },
                    { k: "Best for", v: "Law + policy careers" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) BSW */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="BSW (Bachelor of Social Work)"
            subtitle="Ideal for social sector, development projects, community programs and CSR support."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Users size={16} />
                  <span>What makes BSW strong</span>
                </span>

                <ul className="nitDarkList mb-0">
                  <li>
                    Best progression: <strong>BSW → MSW</strong> for stronger roles and growth.
                  </li>
                  <li>
                    Experience matters: internships/volunteering add real value.
                  </li>
                  <li>
                    Career areas: NGO programs, CSR, community outreach, project coordination.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-5 d-flex">
              <div className="sectionCard bg-light border w-100">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick facts</span>
                </h3>

                <MiniDL
                  items={[
                    { k: "Duration", v: "3 years" },
                    { k: "Eligibility", v: "Class 12 pass" },
                    { k: "Best for", v: "NGO/CSR focus" },
                    { k: "Progression", v: "MSW" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6) After BA */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="After BA: sensible next steps"
            subtitle="Pick a direction early and build skills + experience alongside your degree."
          />

          <div className="row g-3 g-md-4">
            {AFTER_BA.map((x) => (
              <div key={x.title} className="col-12 col-md-6">
                <div className="sectionCard h-100">
                  <h3 className="h6 mb-1">{x.title}</h3>
                  <p className="small text-muted mb-3">{x.desc}</p>

                  <ul className="list-unstyled small mb-0">
                    {x.points.map((p) => (
                      <li key={p} className="d-flex mb-2">
                        <span className="me-2">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Sensible shortcut: choose one primary goal (PG / exams / job) by end of 1st year and build your profile in that
            direction.
          </div>
        </div>
      </section>

      {/* 7) Admission & Documents */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Admission & Documents"
            subtitle="Admission rules vary by institute. Keep these practical points in mind before applying."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <ClipboardList size={16} />
                  <span>Admission pattern (simple)</span>
                </span>

                <ul className="nitDarkList mb-0">
                  {ADMISSION_POINTS.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-5 d-flex">
              <div className="sectionCard bg-light border w-100">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Common documents checklist</span>
                </h3>

                <ul className="list-unstyled small mb-0">
                  {DOCS.map((d) => (
                    <li key={d} className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-muted small mt-3">
                  Keep scanned copies ready (PDF/JPG) and check size limits during application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8) Careers snapshot */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="Careers snapshot"
            subtitle="Arts degrees open multiple tracks. Choose one and build a strong profile around it."
          />

          <div className="row g-3">
            {SNAPSHOT.map((c) => (
              <div key={c.t} className="col-12 col-md-6 col-lg-4">
                <div className="sectionCard h-100">
                  <h3 className="h6 mb-1">{c.t}</h3>
                  <p className="small text-muted mb-0">{c.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Tip: Your degree becomes powerful when you combine it with skill-building, internships, and a clear goal by the
            end of first year.
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
