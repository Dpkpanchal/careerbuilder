import React from "react";
import { Link } from "@inertiajs/react";  
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  University,
  MapPin,
  Sparkles,
  ShieldCheck,
  Landmark,
  ClipboardList,
  Target,
} from "lucide-react";

import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import EngineeringPageClient from "@/Components/Frontend/ByProfession/EngineeringPageClient";

import EducationLoansScholarshipsTab from "@/Components/Frontend/AfterClass12/EducationLoansScholarshipsTab";
import StudentSupportTab from "@/Components/Frontend/StudentSupportTab";
import FrontendLayout from '@/Layouts/FrontendLayout';

export const metadata = {
  title: "Civil Services Career Guide | UPSC/WBCS Path, Exams, Preparation & Careers",
  description:
    "Complete Civil Services career guide: what it is, who it suits, pathways after Class 12/Graduation, exam structure, preparation roadmap, career roles, higher studies, scholarships & education loan support.",
};

/* =========================
   DATA (Career-book style)
========================= */

// const DOMAINS = [
//   {
//     title: "Administrative Services",
//     points: [
//       "Policy implementation, governance, development programs, administration",
//       "Roles span district/state/central administration (service-wise)",
//       "Best for: leadership + decision-making + responsibility",
//     ],
//   },
//   {
//     title: "Police & Protective Services",
//     points: [
//       "Law & order, public safety, administration, investigation support (role-wise)",
//       "State police services and allied roles (exam/service dependent)",
//       "Best for: discipline + resilience + field readiness",
//     ],
//   },
//   {
//     title: "Revenue, Finance & Allied Services",
//     points: [
//       "Revenue administration, taxation, finance oversight, compliance (role-wise)",
//       "Strong scope in state/central departments (service dependent)",
//       "Best for: analytical thinking + administration mindset",
//     ],
//   },
//   {
//     title: "Specialized Services (Role-based)",
//     points: [
//       "Labour, transport, social welfare, rural development, education admin, etc.",
//       "Depends on state/central service allocation and vacancies",
//       "Best for: domain interest + public impact mindset",
//     ],
//   },
// ];

// const PATHWAYS = [
//   {
//     title: "After Class 10",
//     steps: [
//       "Build strong basics: reading habit, writing, current affairs awareness",
//       "Choose any stream based on strengths (Arts/Science/Commerce)",
//       "Focus on communication + discipline + long-term consistency",
//     ],
//   },
//   {
//     title: "After Class 12",
//     steps: [
//       "Choose graduation subject you can score well in + enjoy learning",
//       "Start foundation habits: newspapers, notes, basic polity/history/geography",
//       "Don’t rush—Civil Services is typically planned with graduation timeline",
//     ],
//   },
//   {
//     title: "After Graduation",
//     steps: [
//       "Main preparation phase for UPSC/WBCS and other state services",
//       "Optional subject selection (where applicable), test series, answer writing",
//       "Interview preparation + personality development",
//     ],
//   },
// ];

// const COURSES = [
//   {
//     title: "Graduation (Any Stream) + Foundation Building",
//     text:
//       "Civil Services typically requires graduation. Choose a subject you can study deeply and score well in—your base matters for preparation quality.",
//     url: "/courses/civil-services/graduation",
//     cta: "Explore Graduation Path",
//   },
//   {
//     title: "Civil Services Foundation Course",
//     text:
//       "Structured foundation for basics: polity, history, geography, economy, environment and current affairs—aligned to exam pattern.",
//     url: "/courses/civil-services/foundation",
//     cta: "Explore Foundation",
//   },
//   {
//     title: "Optional / Specialized Preparation (Exam-wise)",
//     text:
//       "Optional subjects (where applicable) and advanced topics need structured planning and answer-writing practice.",
//     url: "/courses/civil-services/optional",
//     cta: "Explore Optional Prep",
//   },
//   {
//     title: "Interview / Personality Test Prep",
//     text:
//       "Communication, decision-making, awareness and personality development for the final stage selection (where applicable).",
//     url: "/courses/civil-services/interview",
//     cta: "Explore Interview Prep",
//   },
// ];

// const EXAMS = [
//   {
//     title: "National-level Civil Services",
//     text:
//       "UPSC Civil Services and other national exams for central services (exam-wise details in dedicated section).",
//     url: "/exams/civil-services/national",
//   },
//   {
//     title: "State-level Civil Services",
//     text:
//       "State Public Service Commission exams like WBCS and other state services (state-wise variation).",
//     url: "/exams/civil-services/state",
//   },
//   {
//     title: "Departmental / Allied Competitive Exams",
//     text:
//       "Other government recruitment routes: SSC, railways, banking, departmental roles (path-based).",
//     url: "/exams/civil-services/allied",
//   },
// ];

// const INSTITUTE_LINKS = [
//   { title: "UPSC Preparation Institutes", url: "/colleges/civil-services/upsc" },
//   { title: "State PSC (WBCS) Coaching", url: "/colleges/civil-services/state-psc" },
//   { title: "Universities (Strong Graduation Base)", url: "/colleges/civil-services/universities" },
//   { title: "Online Preparation Platforms", url: "/colleges/civil-services/online" },
//   { title: "Open & Distance (Graduation Support)", url: "/colleges/civil-services/open" },
// ];

// const INDUSTRIES = [
//   "Government Administration",
//   "Police & Protective Services",
//   "Revenue & Finance Departments",
//   "Social Welfare & Development",
//   "Public Policy & Governance",
//   "Allied Government Services",
// ];

// const ROLE_EXAMPLES = [
//   "Administrative Officer (service-wise)",
//   "Revenue Officer / Administrative roles",
//   "Police Service roles (service-wise)",
//   "Block / District level administration roles",
//   "Policy / Governance support roles",
//   "Allied services via state/central exams",
// ];

/* =========================
   SECTION WRAPPER
========================= */

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-4 py-lg-5">
      <div className="container">
        <div className="mb-4">
          <h2 className="section-heading mb-2">
            {title.includes(" ") ? (
              <>
                {title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="gradient-text">{title.split(" ").slice(-1)}</span>
              </>
            ) : (
              <span className="gradient-text">{title}</span>
            )}
          </h2>
          {subtitle ? (
            <p className="text-muted mb-0" style={{ maxWidth: "85ch", fontSize: "1.08rem" }}>
              {subtitle}
            </p>
          ) : null}
        </div>

        {children}
      </div>
    </section>
  );
}

/* =========================
   PAGE
========================= */

export default function CivilServicesByProfessionPage({careerData}) {

  const getCareerData = () => {
    if (!careerData) return null;
    if (Array.isArray(careerData)) {
      return careerData.length > 0 ? careerData[0] : null;
    }
    return careerData;
  };

  const career = getCareerData();

  // Get overview_tree data
  const DOMAINS = career?.branch_groups || [];
  const PATHWAYS = career?.pathways || [];
  const COURSES = career?.courses || [];
  const EXAMS = career?.exams || [];
  const INSTITUTE_LINKS = career?.institute_links || [];
  const INDUSTRIES = career?.industries || [];
  const ROLE_EXAMPLES = career?.role_examples || [];


  return (
    <FrontendLayout>
    <main>
      {/* ✅ Hero */}
      <HeroInner
        title="Civil Services"
        subtitle="Governance • Leadership • Public Impact"
        description="Civil Services is a competitive pathway to government leadership roles. It requires strong fundamentals, consistent preparation, current affairs awareness, and disciplined answer writing."
      />

      {/* ✅ Reuse existing sticky tabs system */}
      <EngineeringPageClient>
        {/* ✅ Section 1 */}
        <Section
          id="what-is"
          title="What is Civil Services"
          subtitle="Civil Services is a pathway to administrative and public service roles through competitive exams and selection processes."
        >
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7">
              <div className="p-4 rounded-4 bg-white border h-100">
                <p className="text-muted mb-3">
                  Civil Services includes central and state-level competitive exams leading to roles in administration,
                  law & order, revenue, public welfare and governance. Success depends on consistent study, clear writing,
                  awareness of current events, and strong personality development.
                </p>

                <div className="row g-3">
                  {[
                    ["Long-term consistency", "Preparation is a marathon—daily habits matter."],
                    ["Strong writing", "Answer-writing practice improves marks significantly."],
                    ["Current affairs", "Daily news + monthly revision builds edge."],
                    ["Decision-making mindset", "Develop balanced thinking and public responsibility."],
                  ].map(([h, d]) => (
                    <div key={h} className="col-md-6">
                      <div className="p-3 rounded-4 border bg-light h-100">
                        <b className="d-block mb-1">{h}</b>
                        <div className="text-muted">{d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="fact-card-wrapper h-100">
                <div className="fact-card-inner">
                  <div className="fact-card-icon">
                    <Landmark size={20} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h5 className="fact-card-title mb-2">What you commonly work on</h5>
                    <ul className="mb-0 ps-3">
                      {[
                        "Public administration and governance",
                        "Policy implementation and program execution",
                        "Revenue and development administration",
                        "Law & order support (service dependent)",
                        "Citizen services and public welfare delivery",
                      ].map((x) => (
                        <li key={x} className="fact-card-text mb-1">
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mini stripe */}
          <div className="mt-4 p-4 rounded-4 bg-light border studentSupportTabV2">
            <b className="d-block mb-3">Civil Services success toolkit</b>
            <div className="supportMiniStats">
              <div className="supportMiniStat">
                <ClipboardList size={18} />
                <span>
                  <b>Daily</b> routine
                </span>
              </div>
              <div className="supportMiniStat">
                <Target size={18} />
                <span>
                  <b>Mock</b> tests
                </span>
              </div>
              <div className="supportMiniStat">
                <Sparkles size={18} />
                <span>
                  <b>Answer</b> writing
                </span>
              </div>
            </div>
          </div>
        </Section>

        {/* ✅ Section 2 */}
        <Section
          id="fit"
          title="Who should choose Civil Services"
          subtitle="Choose this path if you are ready for disciplined preparation and responsibility-focused work."
        >
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="p-4 rounded-4 bg-white border h-100">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <CheckCircle2 size={18} className="text-success" />
                  <b>This path may be right for you if</b>
                </div>
                <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                  <li>You are disciplined and can follow a long-term plan</li>
                  <li>You enjoy reading and learning diverse subjects</li>
                  <li>You can write structured answers and improve with practice</li>
                  <li>You want roles with public responsibility and impact</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 rounded-4 bg-white border h-100">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <CheckCircle2 size={18} className="text-danger" />
                  <b>You may want to reconsider if</b>
                </div>
                <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                  <li>You want quick results without long preparation</li>
                  <li>You struggle with consistent routine and revision</li>
                  <li>You avoid reading and writing regularly</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ✅ Section 3 */}
        <Section id="pathways" title="Civil Services Pathways" subtitle="Your stage decides your preparation approach.">
          <div className="row g-3 g-lg-4">
            {PATHWAYS.map((p) => (
              <div key={p.title} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="p-4 rounded-4 bg-white border w-100">
                  <b className="d-block mb-2">{p.title}</b>
                  <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                    {p.steps.map((s) => (
                      <li key={s} className="text-muted" style={{ marginBottom: 6 }}>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ✅ Section 4 */}
        <Section
          id="branches"
          title="Services & Role Areas"
          subtitle="Civil services offers multiple role groups depending on exam, rank and service allocation."
        >
          <div className="row g-3 g-lg-4">
            {DOMAINS.map((g) => (
              <div key={g.title} className="col-12 col-md-6 d-flex">
                <div className="p-4 rounded-4 bg-white border w-100">
                  <h3 className="h5 mb-2">{g.title}</h3>
                  <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                    {g.points.map((x) => (
                      <li key={x} className="text-muted" style={{ marginBottom: 6 }}>
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ✅ Section 5 */}
        <Section
          id="courses"
          title="Preparation & Study Track"
          subtitle="Civil services is exam-driven—your preparation structure is your course."
        >
          <div className="row g-3 g-lg-4">
            {COURSES.map((c) => (
              <div key={c.title} className="col-12 col-md-6 d-flex">
                <div className="p-4 rounded-4 bg-white border w-100">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <GraduationCap size={18} className="text-primary" />
                    <b>{c.title}</b>
                  </div>
                  <p className="text-muted mb-3">{c.text}</p>

                  <div className="d-flex justify-content-end">
                    <Link
                      href={c.url}
                      className="btn btn-sm btn-outline-primary rounded-pill d-inline-flex align-items-center gap-2"
                    >
                      {c.cta} <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ✅ Section 6 */}
        <Section
          id="exams"
          title="Exams Map"
          subtitle="This section gives the exam map at a glance. For full lists and details, open the dedicated Exams page."
        >
          <div className="row g-3 g-lg-4">
            {EXAMS.map((box) => (
              <div key={box.title} className="col-12 col-lg-4 d-flex">
                <div className="p-4 rounded-4 bg-white border w-100">
                  <h3 className="h5 mb-2">{box.title}</h3>
                  <p className="text-muted mb-3">{box.text}</p>

                  <div className="d-flex justify-content-end">
                    <Link
                      href={box.url}
                      className="btn btn-sm btn-outline-primary rounded-pill d-inline-flex align-items-center gap-2"
                    >
                      View Details <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ✅ Section 7 */}
        <Section
          id="colleges"
          title="Colleges & Coaching"
          subtitle="Civil services is preparation-based. Choose your graduation base and a support system that fits your learning style."
        >
          <div className="border-top pt-4 mt-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <University size={18} className="text-primary" />
              <h3 className="h5 mb-0">Browse by Support Type</h3>
            </div>

            <div className="text-muted mb-4" style={{ maxWidth: "90ch" }}>
              Open a category to see curated lists, preparation routes, and key details.
            </div>

            <div className="row g-2 g-lg-3">
              {INSTITUTE_LINKS.map((item) => (
                <div key={item.url} className="col-12 col-md-6">
                  <Link
                    href={item.url}
                    className="d-flex align-items-center justify-content-between gap-3 px-3 py-3 rounded-4 border bg-light text-decoration-none linkRowHover"
                    style={{ transition: "all 0.2s ease" }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span
                        className="rounded-pill"
                        style={{
                          width: 10,
                          height: 10,
                          background: "var(--color-secondary)",
                          display: "inline-block",
                        }}
                      />
                      <span className="fw-semibold text-dark">{item.title}</span>
                    </div>

                    <ArrowRight size={18} className="text-primary" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 p-4 rounded-4 bg-light border">
            <div className="d-flex align-items-center gap-2 mb-2">
              <MapPin size={18} className="text-primary" />
              <b>West Bengal focus</b>
            </div>
            <div className="text-muted" style={{ maxWidth: "90ch" }}>
              We will highlight West Bengal’s key WBCS preparation resources and institutions in the dedicated Colleges section
              so students can compare state and national-level preparation options confidently.
            </div>
          </div>
        </Section>

        {/* ✅ Section 8 */}
        <Section
          id="careers"
          title="Careers & Opportunities"
          subtitle="Civil services roles vary by exam and service allocation—but the core goal is public administration and governance."
        >
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="fact-card-wrapper w-100">
                <div className="fact-card-inner">
                  <div className="fact-card-icon">
                    <Briefcase size={20} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h5 className="fact-card-title mb-2">Major departments</h5>

                    <div className="d-flex flex-wrap gap-2">
                      {INDUSTRIES.map((x) => (
                        <span key={x} className="badge bg-light text-dark border rounded-pill px-3 py-2">
                          {x}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex">
              <div className="fact-card-wrapper w-100">
                <div className="fact-card-inner">
                  <div className="fact-card-icon">
                    <Briefcase size={20} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h5 className="fact-card-title mb-2">
                      Common roles <span className="text-muted">(examples)</span>
                    </h5>

                    <ul className="mb-0 ps-3">
                      {ROLE_EXAMPLES.map((x) => (
                        <li key={x} className="fact-card-text mb-1">
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-4 bg-light border studentSupportTabV2">
            <b className="d-block mb-3">Career growth (typical)</b>

            <div className="supportMiniStats">
              <div className="supportMiniStat">
                <Sparkles size={18} />
                <span>
                  <b>Preparation</b> phase
                </span>
              </div>

              <div className="supportMiniStat">
                <ShieldCheck size={18} />
                <span>
                  <b>Officer</b> role (service-wise)
                </span>
              </div>

              <div className="supportMiniStat">
                <MapPin size={18} />
                <span>
                  <b>Senior</b> leadership roles
                </span>
              </div>
            </div>

            <div className="text-muted mt-2">
              Typical progression: Preparation → Selection → Training → Field posting → Senior responsibilities → Leadership roles
            </div>
          </div>
        </Section>

        {/* ✅ Section 9 */}
        <Section
          id="higher"
          title="Higher Studies & Growth"
          subtitle="Civil services growth comes from experience, performance, training and continuous learning."
        >
          <div className="row g-3 g-lg-4">
            {[
              {
                title: "Continuous learning",
                text: "Policy, governance and administration needs lifelong learning—training programs and self-study support growth.",
              },
              {
                title: "Specialization in governance domains",
                text: "Over time, officers develop domain expertise: finance, rural development, education, law & order, etc.",
              },
              {
                title: "Alternative public policy paths",
                text: "Even outside selection, public policy and governance roles exist through research, NGOs and development programs.",
              },
              {
                title: "Global exposure",
                text: "Some roles involve international exposure, collaborations and training programs (service dependent).",
              },
            ].map((c) => (
              <div key={c.title} className="col-12 col-md-6 d-flex">
                <div className="p-4 rounded-4 bg-white border w-100">
                  <h3 className="h6 mb-2">{c.title}</h3>
                  <div className="text-muted">{c.text}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ✅ Section 10 */}
        <section id="funding" className="py-4 py-lg-5">
          <div className="container">
            <EducationLoansScholarshipsTab stageLabel="Civil Services" />
          </div>
        </section>

        {/* ✅ Section 11 */}
        <section id="support" className="py-4 py-lg-5 bg-light">
          <div className="container">
            <StudentSupportTab stageLabel="Civil Services" />
          </div>
        </section>
      </EngineeringPageClient>
    </main>
    </FrontendLayout>
  );
}
