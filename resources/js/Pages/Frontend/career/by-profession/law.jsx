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
} from "lucide-react";

import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import EngineeringPageClient from "@/Components/Frontend/ByProfession/EngineeringPageClient";

import EducationLoansScholarshipsTab from "@/Components/Frontend/AfterClass12/EducationLoansScholarshipsTab";
import StudentSupportTab from "@/Components/Frontend/StudentSupportTab";
import FrontendLayout from '@/Layouts/FrontendLayout';

export const metadata = {
  title: "Law Career Guide | LLB, Integrated Law, Exams, Colleges & Legal Careers",
  description:
    "Complete law career guide: what law is, who it suits, pathways after Class 12/Graduation, law courses (BA LLB/BBA LLB/LLB), entrance exams, colleges, legal careers, higher studies, scholarships & education loan support.",
};

/* =========================
   DATA
========================= */

const DOMAINS = [
  {
    title: "Litigation & Court Practice",
    points: [
      "Practice in courts: drafting, arguments, case strategy",
      "Learning grows with experience and mentorship",
      "Best for: strong communication + resilience",
    ],
  },
  {
    title: "Corporate / Business Law",
    points: [
      "Contracts, compliance, mergers, company law, startups",
      "Work with corporates, law firms, in-house legal teams",
      "Best for: structured thinking + documentation",
    ],
  },
  {
    title: "Criminal Law & Public Justice",
    points: [
      "Criminal cases, public prosecution, investigation support",
      "Includes advocacy, legal aid and public interest roles",
      "Best for: courage + ethics + strong case reasoning",
    ],
  },
  {
    title: "Civil, Family & Property Law",
    points: [
      "Property, family disputes, consumer, civil litigation",
      "High demand in local practice and advisory work",
      "Best for: practical problem solving + negotiation",
    ],
  },
];

const PATHWAYS = [
  {
    title: "After Class 12",
    steps: [
      "Integrated Law: BA LLB / BBA LLB / B.Com LLB (5 years)",
      "Entrance exams + counselling decide college admission",
      "Internships and moot courts build profile early",
    ],
  },
  {
    title: "After Graduation",
    steps: [
      "LLB (3 years) after completing any bachelor degree",
      "Good option for graduates changing to law",
      "Internships + specialization decide career direction",
    ],
  },
  {
    title: "After Law Degree",
    steps: [
      "Enroll with State Bar Council (as per rules)",
      "Court practice / jobs / higher studies",
      "Build expertise through internships + practical exposure",
    ],
  },
];

const COURSES = [
  {
    title: "Integrated Law (5 years)",
    text:
      "BA LLB / BBA LLB / B.Com LLB after Class 12. Strong route for students who decide early.",
    url: "/courses/law/integrated",
    cta: "Explore Integrated Law",
  },
  {
    title: "LLB (3 years)",
    text:
      "3-year law degree after graduation. Common path for graduates switching to legal careers.",
    url: "/courses/law/llb",
    cta: "Explore LLB",
  },
  {
    title: "LLM (Postgraduate)",
    text:
      "Specialize in constitutional law, corporate law, criminal law, international law and more.",
    url: "/courses/law/llm",
    cta: "Explore LLM",
  },
  {
    title: "Judiciary / Legal Exams Prep",
    text:
      "Paths like judiciary, public prosecution and competitive legal roles require structured preparation.",
    url: "/courses/law/judiciary",
    cta: "Explore Judiciary Path",
  },
];

const EXAMS = [
  {
    title: "National-level Entrance Exams",
    text:
      "National law admissions and competitive exams for top institutes (e.g., national-level law entrances).",
    url: "/exams/law/national",
  },
  {
    title: "State-level Entrance Exams",
    text:
      "State-level entrances and admissions processes for state universities and colleges (varies by state).",
    url: "/exams/law/state",
  },
  {
    title: "University-level Entrance Exams",
    text:
      "Some universities conduct their own entrance tests for law programs.",
    url: "/exams/law/university",
  },
];

const INSTITUTE_LINKS = [
  { title: "NLUs (National Law Universities)", url: "/colleges/law/nlus" },
  { title: "Central Universities", url: "/colleges/law/central" },
  { title: "State Universities", url: "/colleges/law/state" },
  { title: "Private & Deemed Universities", url: "/colleges/law/private" },
  { title: "Open & Distance (Selected Options)", url: "/colleges/law/open" },
];

const INDUSTRIES = [
  "Courts & Litigation Practice",
  "Corporate Legal / In-house Counsel",
  "Law Firms & Advisory",
  "Government Legal Services",
  "Compliance & Risk",
  "NGOs & Public Interest",
];

const ROLE_EXAMPLES = [
  "Advocate / Litigator",
  "Legal Associate (Law firm)",
  "In-house Legal Counsel",
  "Compliance / Risk Associate",
  "Legal Researcher / Policy Support",
  "Judiciary / Prosecution (through exams)",
];

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

export default function LawByProfessionPage() {
  return (
    <FrontendLayout>
    <main>
      {/* ✅ Hero */}
      <HeroInner
        title="Law"
        subtitle="Justice • Rights • Advocacy • Governance"
        description="Law is a professional field focused on justice, rights, rules and dispute resolution. Legal careers span courts, corporate advisory, public policy and governance."
      />

      {/* ✅ Reuse existing sticky tabs system */}
      <EngineeringPageClient>
        {/* ✅ Section 1 */}
        <Section
          id="what-is"
          title="What is Law"
          subtitle="Law is the study and practice of legal rules, rights, justice and dispute resolution in society."
        >
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7">
              <div className="p-4 rounded-4 bg-white border h-100">
                <p className="text-muted mb-3">
                  Legal professionals interpret laws, draft documents, argue cases, resolve disputes and support individuals,
                  businesses and government bodies. Law careers require strong reading, reasoning, writing and communication skills.
                </p>

                <div className="row g-3">
                  {[
                    ["Critical thinking", "Analyze facts, apply laws, build arguments."],
                    ["Communication", "Writing, drafting, speaking and negotiation."],
                    ["Ethics & responsibility", "High integrity is essential in legal work."],
                    ["Long-term growth", "Experience and specialization shape success."],
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
              <div className="p-4 rounded-4 bg-white border h-100">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <Briefcase size={18} className="text-primary" />
                  <b>Common work environments</b>
                </div>
                <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                  <li>Courts and litigation chambers</li>
                  <li>Law firms and advisory practices</li>
                  <li>Corporate legal departments</li>
                  <li>Government legal services</li>
                  <li>Policy & research organizations</li>
                  <li>NGOs and public interest work</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ✅ Section 2 */}
        <Section
          id="fit"
          title="Who should choose Law"
          subtitle="Choose law if you enjoy reading, reasoning, writing and advocating with responsibility."
        >
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="p-4 rounded-4 bg-white border h-100">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <CheckCircle2 size={18} className="text-success" />
                  <b>Law may be right for you if</b>
                </div>
                <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                  <li>You can read and understand long text and rules</li>
                  <li>You enjoy debating, reasoning and problem solving</li>
                  <li>You have good communication and writing skills</li>
                  <li>You can be ethical and disciplined with work</li>
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
                  <li>You dislike reading and writing extensively</li>
                  <li>You want a quick path without long learning</li>
                  <li>You struggle with patience and structured reasoning</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ✅ Section 3 */}
        <Section id="pathways" title="Law Pathways" subtitle="Different entry routes exist depending on your current stage.">
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
          title="Domains & Specializations"
          subtitle="Law offers multiple domains—choose based on interest and work style."
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
          title="Law Courses"
          subtitle="Choose integrated law after Class 12 or 3-year LLB after graduation—based on your stage."
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
          title="Entrance Exams"
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
                      View Exams <ArrowRight size={16} />
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
          subtitle="Law is offered through NLUs, universities and recognized private institutions. Compare faculty, internships, moots and placements—not only rankings."
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
              We will highlight West Bengal’s key law colleges and universities in the dedicated Colleges section
              so students can compare national and state-level options confidently.
            </div>
          </div>
        </Section>

        {/* ✅ Section 8 */}
        <Section
          id="careers"
          title="Careers & Opportunities"
          subtitle="Law careers span court practice, corporate advisory, compliance, government and public interest roles."
        >
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="fact-card-wrapper w-100">
                <div className="fact-card-inner">
                  <div className="fact-card-icon">
                    <Briefcase size={20} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h5 className="fact-card-title mb-2">Major sectors</h5>

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
                  <b>Internships</b> & learning phase
                </span>
              </div>

              <div className="supportMiniStat">
                <ShieldCheck size={18} />
                <span>
                  <b>Associate</b> / Junior Advocate
                </span>
              </div>

              <div className="supportMiniStat">
                <MapPin size={18} />
                <span>
                  <b>Senior</b> Counsel / Partner / Leadership
                </span>
              </div>
            </div>

            <div className="text-muted mt-2">
              Typical progression: Intern → Junior role → Associate → Senior role → Specialist / Partner / Leadership
            </div>
          </div>
        </Section>

        {/* ✅ Section 9 */}
        <Section
          id="higher"
          title="Higher Studies & Global Paths"
          subtitle="Higher studies and specializations can unlock advanced legal roles and broader opportunities."
        >
          <div className="row g-3 g-lg-4">
            {[
              {
                title: "LLM and specialization",
                text: "LLM helps deepen expertise in areas like corporate law, constitutional law, criminal law or international law.",
              },
              {
                title: "Judiciary & competitive legal roles",
                text: "Judiciary, prosecution and other legal services require focused exam preparation and strong fundamentals.",
              },
              {
                title: "Corporate and policy growth",
                text: "Legal careers can grow into compliance head, legal head, policy roles and advisory leadership.",
              },
              {
                title: "Global mobility",
                text: "Legal careers can open international study/practice pathways—rules vary by country and qualification requirements.",
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
            <EducationLoansScholarshipsTab stageLabel="Law" />
        </section>

        {/* ✅ Section 11 */}
        <section id="support" className="py-4 py-lg-5 bg-light">
          <div className="container">
            <StudentSupportTab stageLabel="Law" />
          </div>
        </section>
      </EngineeringPageClient>
    </main>
    </FrontendLayout>
  );
}
