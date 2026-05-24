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
  Rocket,
  Lightbulb,
  Target,
  BarChart3,
  Users,
} from "lucide-react";

import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import EngineeringPageClient from "@/Components/Frontend/ByProfession/EngineeringPageClient";

import EducationLoansScholarshipsTab from "@/Components/Frontend/AfterClass12/EducationLoansScholarshipsTab";
import StudentSupportTab from "@/Components/Frontend/StudentSupportTab";
import FrontendLayout from '@/Layouts/FrontendLayout';

export const metadata = {
  title: "Entrepreneurship & Startups | Idea to Business, Skills, Funding & Careers",
  description:
    "Complete Entrepreneurship & Startups guide: what it is, who it suits, pathways after Class 10/12/Graduation, domains, courses, funding routes, incubators, career outcomes, scholarships & support.",
};

/* =========================
   DATA (Career-book style)
========================= */

const PATHWAYS = [
  {
    title: "After Class 10",
    steps: [
      "Build basics: communication, math, digital literacy and curiosity",
      "Start small projects: selling, freelancing, small services, community solutions",
      "Learn by doing: teamwork, budgeting, simple product creation",
    ],
  },
  {
    title: "After Class 12",
    steps: [
      "Choose a strong UG base (any stream) + build skill stack",
      "Do internships / freelancing and build real-world exposure",
      "Start: small business, side project, content/agency, product prototype",
    ],
  },
  {
    title: "After Graduation",
    steps: [
      "Pick a problem + validate market + build MVP (minimum viable product)",
      "Build team, iterate product, acquire customers",
      "Explore funding: bootstrapping, incubators, angel/VC (if needed)",
    ],
  },
];

const DOMAINS = [
  {
    title: "Tech Startups",
    points: [
      "Apps, platforms, SaaS, AI tools, automation, fintech, edtech",
      "Best for: product thinking + coding/tech + problem-solving",
      "Success depends on: user value + execution speed",
    ],
  },
  {
    title: "Service & Agency Businesses",
    points: [
      "Digital marketing, design, development, consulting, events, content",
      "Best for: skill-first earning + client handling + delivery",
      "Strong for: starting with low capital (often)",
    ],
  },
  {
    title: "Commerce, Retail & D2C",
    points: [
      "Online selling, brands, food, lifestyle, local products",
      "Best for: operations + branding + customer focus",
      "Scale through: distribution + repeat buyers",
    ],
  },
  {
    title: "Social Entrepreneurship",
    points: [
      "Solutions in education, health, environment, community, inclusion",
      "Best for: mission-driven founders + impact + sustainability",
      "Mix of: NGO + business models (depending on approach)",
    ],
  },
];

const COURSES = [
  {
    title: "Skill Stack (Core Founder Skills)",
    text:
      "Communication, sales, marketing, finance basics, negotiation, digital tools—these are the real foundation for entrepreneurship.",
    url: "/courses/entrepreneurship/skills",
    cta: "Explore Skill Stack",
  },
  {
    title: "Business & Management Basics",
    text:
      "Learn business models, pricing, accounting, customer development, operations and team building—useful across all startup types.",
    url: "/courses/entrepreneurship/business-basics",
    cta: "Explore Business Basics",
  },
  {
    title: "Startup / Product Building (MVP Track)",
    text:
      "Learn how to validate problems, build MVP, test market fit, and iterate quickly—especially for tech startups.",
    url: "/courses/entrepreneurship/mvp",
    cta: "Explore MVP Track",
  },
  {
    title: "Funding & Growth (Advanced Track)",
    text:
      "Fundraising, incubators, pitching, scaling, legal basics and compliance—use when your business is ready to grow.",
    url: "/courses/entrepreneurship/funding-growth",
    cta: "Explore Funding & Growth",
  },
];

const EXAMS = [
  {
    title: "No single entrance exam",
    text:
      "Entrepreneurship is not exam-driven. Growth depends on skills, execution, market understanding and consistency.",
    url: "/exams/entrepreneurship/overview",
  },
  {
    title: "Incubator / Program selection",
    text:
      "Many incubators and startup programs select teams based on idea, traction, pitch and founder capability.",
    url: "/exams/entrepreneurship/incubators",
  },
  {
    title: "Business school routes (optional)",
    text:
      "Some students build entrepreneurship through BBA/MBA programs and competitions—but it’s optional, not mandatory.",
    url: "/exams/entrepreneurship/education",
  },
];

const INSTITUTE_LINKS = [
  { title: "Incubators & Startup Cells", url: "/colleges/entrepreneurship/incubators" },
  { title: "Business Schools (BBA/MBA)", url: "/colleges/entrepreneurship/business-schools" },
  { title: "Skill / Startup Bootcamps", url: "/colleges/entrepreneurship/bootcamps" },
  { title: "Government Startup Programs", url: "/colleges/entrepreneurship/government" },
  { title: "Online Learning Platforms", url: "/colleges/entrepreneurship/online" },
];

const INDUSTRIES = [
  "Technology & SaaS",
  "Services & Agencies",
  "Retail / D2C / Commerce",
  "Food & Hospitality businesses",
  "Education & Skill startups",
  "Social impact ventures",
];

const ROLE_EXAMPLES = [
  "Founder / Co-founder",
  "Product / Business Owner",
  "Startup Operator / Growth role",
  "Sales & Marketing lead (early-stage)",
  "Product Manager / Business Development (startup ecosystem)",
  "Freelancer → Agency owner (path-based)",
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

export default function EntrepreneurshipStartupsFuturePathPage() {
  return (
    <FrontendLayout>
    <main>
      {/* ✅ Hero */}
      <HeroInner
        title="Entrepreneurship / Startups"
        subtitle="Create • Build • Sell • Scale"
        description="Entrepreneurship is about solving real problems by building products, services or businesses. It’s skill-driven, execution-focused and can start at any stage—with discipline, learning and consistent action."
      />

      {/* ✅ Sticky tabs system (reuse) */}
      <EngineeringPageClient>
        {/* ✅ Section 1 */}
        <Section
          id="what-is"
          title="What is Entrepreneurship"
          subtitle="Entrepreneurship is turning ideas into real solutions—by building a business model around value."
        >
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7">
              <div className="p-4 rounded-4 bg-white border h-100">
                <p className="text-muted mb-3">
                  Entrepreneurs identify a problem, create a solution, and build a system that delivers value to customers.
                  Startups often focus on scalable models, but entrepreneurship also includes local businesses, services,
                  agencies and social ventures. Success depends on learning fast, execution and customer trust.
                </p>

                <div className="row g-3">
                  {[
                    ["Problem solving", "Start with a real customer problem—then design the solution."],
                    ["Execution", "Consistency beats motivation. Ship work regularly."],
                    ["Customer focus", "Customers decide your product value—not you."],
                    ["Learning mindset", "Iterate, improve, and adapt to feedback."],
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
                    <Rocket size={20} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h5 className="fact-card-title mb-2">What founders commonly do</h5>
                    <ul className="mb-0 ps-3">
                      {[
                        "Validate ideas with real customers",
                        "Build MVP (minimum viable product) or service",
                        "Sell and acquire first customers",
                        "Manage money, operations and delivery",
                        "Hire team and scale growth (later stage)",
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
            <b className="d-block mb-3">Founder toolkit</b>
            <div className="supportMiniStats">
              <div className="supportMiniStat">
                <Lightbulb size={18} />
                <span>
                  <b>Idea</b> clarity
                </span>
              </div>
              <div className="supportMiniStat">
                <Target size={18} />
                <span>
                  <b>Execution</b> routine
                </span>
              </div>
              <div className="supportMiniStat">
                <BarChart3 size={18} />
                <span>
                  <b>Growth</b> learning
                </span>
              </div>
            </div>
          </div>
        </Section>

        {/* ✅ Section 2 */}
        <Section
          id="fit"
          title="Is it for me"
          subtitle="Entrepreneurship can be rewarding—but it needs patience, risk handling and continuous learning."
        >
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="p-4 rounded-4 bg-white border h-100">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <CheckCircle2 size={18} className="text-success" />
                  <b>Entrepreneurship may suit you if</b>
                </div>
                <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                  <li>You enjoy building things and taking responsibility</li>
                  <li>You are comfortable with uncertainty and learning from failure</li>
                  <li>You can communicate, sell and work with people</li>
                  <li>You are consistent and action-oriented</li>
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
                  <li>You want guaranteed stability from day 1</li>
                  <li>You avoid selling, communication or customer feedback</li>
                  <li>You can’t follow routine and execution consistently</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ✅ Section 3 */}
        <Section
          id="pathways"
          title="Entrepreneurship Pathways"
          subtitle="You can start anytime—your stage decides how you build skills and experience."
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
          title="Startup Domains"
          subtitle="Choose a domain that matches your strengths, resources and interest."
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
          title="Skills & Learning"
          subtitle="Entrepreneurship is skill-driven. Build a strong skill stack first—then scale."
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
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ✅ Section 6 */}
        <Section
          id="exams"
          title="Programs & Selection"
          subtitle="Entrepreneurship is not exam-driven, but programs/incubators may select based on idea and pitch."
        >
          <div className="row g-3 g-lg-4">
            {EXAMS.map((box) => (
              <div key={box.title} className="col-12 col-lg-4 d-flex">
                <div className="p-4 rounded-4 bg-white border w-100">
                  <h3 className="h5 mb-2">{box.title}</h3>
                  <p className="text-muted mb-3">{box.text}</p>

                  <div className="d-flex justify-content-end">
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ✅ Section 7 */}
        <Section
          id="colleges"
          title="Incubators & Ecosystem"
          subtitle="Strong support systems help founders learn faster—incubators, startup cells, bootcamps and mentors."
        >
          <div className="border-top pt-4 mt-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <University size={18} className="text-primary" />
              <h3 className="h5 mb-0">Browse by Support Type</h3>
            </div>

            <div className="text-muted mb-4" style={{ maxWidth: "90ch" }}>
              Open a category to see curated lists, funding support routes, and key details.
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
              We will highlight West Bengal’s startup ecosystem, incubators and government programs in the dedicated section
              so students can explore local + national opportunities confidently.
            </div>
          </div>
        </Section>

        {/* ✅ Section 8 */}
        <Section
          id="careers"
          title="Careers & Outcomes"
          subtitle="Even if you don’t continue as a founder, entrepreneurship skills create strong career advantages."
        >
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="fact-card-wrapper w-100">
                <div className="fact-card-inner">
                  <div className="fact-card-icon">
                    <Briefcase size={20} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h5 className="fact-card-title mb-2">Startup ecosystems</h5>

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
                    <Users size={20} />
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

          {/* Growth */}
          <div className="mt-4 p-4 rounded-4 bg-light border studentSupportTabV2">
            <b className="d-block mb-3">Growth (typical)</b>

            <div className="supportMiniStats">
              <div className="supportMiniStat">
                <Sparkles size={18} />
                <span>
                  <b>Learn</b> skills
                </span>
              </div>

              <div className="supportMiniStat">
                <ShieldCheck size={18} />
                <span>
                  <b>Build</b> MVP
                </span>
              </div>

              <div className="supportMiniStat">
                <MapPin size={18} />
                <span>
                  <b>Scale</b> business
                </span>
              </div>
            </div>

            <div className="text-muted mt-2">
              Typical progression: Skill building → Small projects → MVP → Customers → Growth → Scaling (if needed)
            </div>
          </div>
        </Section>

        {/* ✅ Section 9 */}
        <Section
          id="higher"
          title="Higher Studies & Growth"
          subtitle="You can combine entrepreneurship with education, certifications and global learning."
        >
          <div className="row g-3 g-lg-4">
            {[
              {
                title: "Business education (optional)",
                text: "BBA/MBA can strengthen management skills, but entrepreneurship can also be built without them.",
              },
              {
                title: "Specialized certifications",
                text: "Marketing, product management, finance, design, tech certifications can strengthen your founder profile.",
              },
              {
                title: "Global learning & exposure",
                text: "Startup ecosystems grow fast. Exposure to global products and markets can improve your strategy and execution.",
              },
              {
                title: "Partnerships & mentorship",
                text: "Mentors, advisors and founders’ communities often accelerate growth faster than solo learning.",
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
            <EducationLoansScholarshipsTab stageLabel="Entrepreneurship / Startups" />
        </section>

        {/* ✅ Section 11 */}
        <section id="support" className="py-4 py-lg-5 bg-light">
            <StudentSupportTab stageLabel="Entrepreneurship / Startups" />
        </section>
      </EngineeringPageClient>
    </main>
    </FrontendLayout>
  );
}
