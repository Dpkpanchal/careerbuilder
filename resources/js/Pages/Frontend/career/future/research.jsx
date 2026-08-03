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
  BookOpen,
  FlaskConical,
  Lightbulb,
  Search,
} from "lucide-react";

import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import EngineeringPageClient from "@/Components/Frontend/ByProfession/EngineeringPageClient";

import EducationLoansScholarshipsTab from "@/Components/Frontend/AfterClass12/EducationLoansScholarshipsTab";
import StudentSupportTab from "@/Components/Frontend/StudentSupportTab";
import FrontendLayout from '@/Layouts/FrontendLayout';

export const metadata = {
  title: "Research & PhD Career Guide | Pathways, Exams, Funding & Careers",
  description:
    "Complete Research & PhD career guide: what research is, who it suits, pathways after Class 12/Graduation, domains, exams, universities, careers after PhD, funding and support.",
};

/* =========================
   DATA (Career-book style)
========================= */

// const PATHWAYS = [
//   {
//     title: "After Class 10",
//     steps: [
//       "Build strong basics: reading, writing, curiosity and discipline",
//       "Choose Class 11–12 stream based on interest (Science/Arts/Commerce)",
//       "Start habits: notes, projects, competitions, learning by exploring",
//     ],
//   },
//   {
//     title: "After Class 12",
//     steps: [
//       "Choose a strong UG foundation in your interest area",
//       "Develop skills: research reading, analysis, communication",
//       "Start small portfolio: mini projects, reports, presentations",
//     ],
//   },
//   {
//     title: "After Graduation / PG",
//     steps: [
//       "Most PhD pathways begin after PG (MA/MSc/MTech/MD/MS etc.)",
//       "Prepare for admissions/fellowships (exam + interview + research proposal where needed)",
//       "Research work + publications + thesis → PhD completion",
//     ],
//   },
// ];

// const DOMAINS = [
//   {
//     title: "Science & Basic Research",
//     points: [
//       "Physics, Chemistry, Biology, Mathematics, Environmental science",
//       "Focus: discovery, experiments, theory and deeper understanding",
//       "Best for: curiosity + patience + strong fundamentals",
//     ],
//   },
//   {
//     title: "Engineering & Technology Research",
//     points: [
//       "AI/ML, robotics, electronics, materials, energy, computing, civil systems",
//       "Focus: innovation, prototypes, systems, advanced engineering problems",
//       "Best for: problem-solving + projects + technical depth",
//     ],
//   },
//   {
//     title: "Medical & Clinical Research",
//     points: [
//       "Clinical research, public health research, biomedical research (route-dependent)",
//       "Focus: evidence-based studies, outcomes, health impact",
//       "Best for: discipline + ethics + data understanding",
//     ],
//   },
//   {
//     title: "Social Sciences, Policy & Humanities",
//     points: [
//       "Economics, sociology, political science, education, languages, history, culture",
//       "Focus: society, policy, people, behavior, research writing and analysis",
//       "Best for: reading + critical thinking + writing",
//     ],
//   },
// ];

// const COURSES = [
//   {
//     title: "UG Foundation (BA / BSc / BTech etc.)",
//     text:
//       "A strong undergraduate foundation builds your subject base. Choose an area you enjoy learning deeply and can maintain strong performance in.",
//     url: "/courses/research/ug",
//     cta: "Explore UG Foundations",
//   },
//   {
//     title: "PG Specialization (MA / MSc / MTech / MD/MS etc.)",
//     text:
//       "Postgraduate study strengthens domain depth and research readiness. Many PhD routes prefer or require PG specialization.",
//     url: "/courses/research/pg",
//     cta: "Explore PG Options",
//   },
//   {
//     title: "Integrated / Direct Research Pathways",
//     text:
//       "Some institutes offer integrated research programs (Integrated MSc-PhD / Integrated PhD) depending on eligibility and discipline.",
//     url: "/courses/research/integrated",
//     cta: "Explore Integrated Paths",
//   },
//   {
//     title: "PhD (Full-time / Part-time)",
//     text:
//       "PhD is a long-term research degree (often 4–6 years). Work includes research, publications, thesis writing and final defense.",
//     url: "/courses/research/phd",
//     cta: "Explore PhD Overview",
//   },
// ];

// const EXAMS = [
//   {
//     title: "National-level Eligibility / Fellowships",
//     text:
//       "Some exams determine eligibility for research fellowships and admissions (discipline-wise requirements vary).",
//     url: "/exams/research/national",
//   },
//   {
//     title: "Institute / University PhD Entrance",
//     text:
//       "Many universities conduct PhD entrance tests + interviews and may ask for a research proposal (varies by institute).",
//     url: "/exams/research/university",
//   },
//   {
//     title: "Discipline-specific Routes",
//     text:
//       "Technical/medical/social science pathways often have different exam + selection patterns (route dependent).",
//     url: "/exams/research/discipline",
//   },
// ];

// const INSTITUTE_LINKS = [
//   { title: "IITs / IISERs / Research Institutes", url: "/colleges/research/institutes" },
//   { title: "Central Universities", url: "/colleges/research/central" },
//   { title: "State Universities", url: "/colleges/research/state" },
//   { title: "Medical / Health Research Institutes", url: "/colleges/research/medical" },
//   { title: "Private & Deemed Universities (Selected)", url: "/colleges/research/private" },
//   { title: "Open & Distance (Selected Options)", url: "/colleges/research/open" },
// ];

// const INDUSTRIES = [
//   "Universities & Colleges (Teaching + Research)",
//   "Government Research Labs / Institutions",
//   "Corporate R&D / Product Innovation",
//   "Think Tanks / Policy & Development",
//   "Healthcare / Clinical Research (route-based)",
//   "Data / Research Analytics roles (path-based)",
// ];

// const ROLE_EXAMPLES = [
//   "Research Scholar / PhD Candidate",
//   "Research Associate / Research Fellow",
//   "Scientist / Researcher (Govt/Private)",
//   "Assistant Professor / Faculty (route-based)",
//   "Policy / Social Researcher",
//   "R&D Engineer / Innovation roles (tech domains)",
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

export default function ResearchPhdFuturePathPage({careerData}) {

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
        title="Research & PhD"
        subtitle="Discover • Explore • Innovate • Create Knowledge"
        description="Research and PhD careers focus on deep specialization, discovery and knowledge creation. This path suits students who enjoy learning deeply, asking questions, and building expertise across science, engineering, medicine, social sciences and humanities."
      />

      {/* ✅ Sticky tabs system (reuse) */}
      <EngineeringPageClient>
        {/* ✅ Section 1 */}
        <Section
          id="what-is"
          title="What is Research"
          subtitle="Research is the process of creating new knowledge—not just studying textbooks."
        >
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7">
              <div className="p-4 rounded-4 bg-white border h-100">
                <p className="text-muted mb-3">
                  Research means exploring questions that do not have simple answers. A PhD is the highest academic degree,
                  where you work under a supervisor to study a problem deeply, publish findings and write a thesis.
                  Research exists across all fields—science, technology, medicine, social sciences, arts and policy.
                </p>

                <div className="row g-3">
                  {[
                    ["Curiosity-driven", "You keep asking “why” and “how” and dig deeper."],
                    ["Evidence-based", "You build conclusions using data, logic and references."],
                    ["Writing & communication", "Reports, papers and presentations matter."],
                    ["Long-term discipline", "Consistency over months/years is the key skill."],
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
                    <FlaskConical size={20} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h5 className="fact-card-title mb-2">What researchers commonly do</h5>
                    <ul className="mb-0 ps-3">
                      {[
                        "Read research papers and build understanding",
                        "Design experiments / studies / analysis",
                        "Collect & analyze data (lab/field/desk-based)",
                        "Write papers, reports and thesis",
                        "Present work and defend findings",
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
            <b className="d-block mb-3">Research mindset toolkit</b>
            <div className="supportMiniStats">
              <div className="supportMiniStat">
                <BookOpen size={18} />
                <span>
                  <b>Read</b> deeply
                </span>
              </div>
              <div className="supportMiniStat">
                <Search size={18} />
                <span>
                  <b>Question</b> assumptions
                </span>
              </div>
              <div className="supportMiniStat">
                <Lightbulb size={18} />
                <span>
                  <b>Build</b> ideas
                </span>
              </div>
            </div>
          </div>
        </Section>

        {/* ✅ Section 2 */}
        <Section
          id="fit"
          title="Is Research for me"
          subtitle="Research is rewarding—but it requires patience, writing, and long-term consistency."
        >
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="p-4 rounded-4 bg-white border h-100">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <CheckCircle2 size={18} className="text-success" />
                  <b>Research may suit you if</b>
                </div>
                <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                  <li>You enjoy deep learning and exploring ideas</li>
                  <li>You can read/write regularly and improve your communication</li>
                  <li>You are comfortable working independently for long periods</li>
                  <li>You are patient and consistent (not only result-driven)</li>
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
                  <li>You want quick income and fast results immediately</li>
                  <li>You dislike reading, writing and revising continuously</li>
                  <li>You prefer fixed routine without long uncertainty</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ✅ Section 3 */}
        <Section
          id="pathways"
          title="Research Pathways"
          subtitle="Your stage decides your preparation approach—most PhD routes begin after PG."
        >
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
          title="Domains & Research Areas"
          subtitle="Research exists across disciplines—choose based on interest, strengths and long-term focus."
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
          title="Courses & Degrees"
          subtitle="Research is a long-term pathway built on foundation + specialization + PhD work."
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
          title="Admissions & Eligibility"
          subtitle="Admissions can include exams, interviews and research proposals depending on institute and discipline."
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
          title="Colleges & Universities"
          subtitle="Choose institutes with strong faculty, research culture, labs/resources and support systems."
        >
          <div className="border-top pt-4 mt-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <University size={18} className="text-primary" />
              <h3 className="h5 mb-0">Browse by Institute Type</h3>
            </div>

            <div className="text-muted mb-4" style={{ maxWidth: "90ch" }}>
              Open a category to see curated lists, admission routes, and key details.
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
              We will also highlight West Bengal’s key universities and research-oriented institutions in the dedicated Colleges section
              so students can compare national and state-level options confidently.
            </div>
          </div>
        </Section>

        {/* ✅ Section 8 */}
        <Section
          id="careers"
          title="Careers after PhD"
          subtitle="PhD does not mean only professor—research skills open multiple career clusters."
        >
          <div className="row g-4">
            {/* Sectors */}
            <div className="col-lg-6 d-flex">
              <div className="fact-card-wrapper w-100">
                <div className="fact-card-inner">
                  <div className="fact-card-icon">
                    <Briefcase size={20} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h5 className="fact-card-title mb-2">Career clusters</h5>

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

            {/* Roles */}
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

          {/* Career growth */}
          <div className="mt-4 p-4 rounded-4 bg-light border studentSupportTabV2">
            <b className="d-block mb-3">Career growth (typical)</b>

            <div className="supportMiniStats">
              <div className="supportMiniStat">
                <Sparkles size={18} />
                <span>
                  <b>PG</b> foundation
                </span>
              </div>

              <div className="supportMiniStat">
                <ShieldCheck size={18} />
                <span>
                  <b>PhD</b> scholar
                </span>
              </div>

              <div className="supportMiniStat">
                <MapPin size={18} />
                <span>
                  <b>Expert</b> roles
                </span>
              </div>
            </div>

            <div className="text-muted mt-2">
              Typical progression: PG → PhD Scholar → Research Associate / Post-Doc (optional) → Scientist / Faculty / Expert roles
            </div>
          </div>
        </Section>

        {/* ✅ Section 9 */}
        <Section
          id="higher"
          title="Higher Studies & Global Paths"
          subtitle="Research careers can expand globally through collaborations, publications and advanced specialization."
        >
          <div className="row g-3 g-lg-4">
            {[
              {
                title: "Post-Doctoral work (optional)",
                text: "Some fields prefer a post-doc phase for advanced expertise, publications and research independence.",
              },
              {
                title: "Global research exposure",
                text: "International collaborations, conferences and labs become accessible with strong research output.",
              },
              {
                title: "Interdisciplinary growth",
                text: "Research increasingly mixes domains (AI + health, climate + policy, materials + energy, etc.).",
              },
              {
                title: "Industry-aligned research",
                text: "Corporate R&D and innovation roles can be strong for applied research disciplines.",
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
            <EducationLoansScholarshipsTab stageLabel="Research & PhD" />
        </section>

        {/* ✅ Section 11 */}
        <section id="support" className="py-4 py-lg-5 bg-light">
          <div className="container">
            <StudentSupportTab stageLabel="Research & PhD" />
          </div>
        </section>
      </EngineeringPageClient>
    </main>
    </FrontendLayout>
  );
}
