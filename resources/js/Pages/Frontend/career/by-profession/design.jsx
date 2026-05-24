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
  Palette,
  PenTool,
  Layout,
} from "lucide-react";

import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import EngineeringPageClient from "@/Components/Frontend/ByProfession/EngineeringPageClient";

import EducationLoansScholarshipsTab from "@/Components/Frontend/AfterClass12/EducationLoansScholarshipsTab";
import StudentSupportTab from "@/Components/Frontend/StudentSupportTab";
import FrontendLayout from '@/Layouts/FrontendLayout';

export const metadata = {
  title: "Design Career Guide | Fashion, Graphic, UI/UX, Interior & Architecture Paths",
  description:
    "Complete design career guide: what design is, who it suits, pathways after Class 10/12, design domains, courses, entrance exams, colleges, careers, higher studies, scholarships & education loan support.",
};

/* =========================
   DATA
========================= */

const DOMAINS = [
  {
    title: "Graphic Design & Visual Communication",
    points: [
      "Branding, posters, ads, layouts, typography, content design",
      "Tools: Photoshop, Illustrator, InDesign (plus modern tools)",
      "Best for: creativity + visual storytelling",
    ],
  },
  {
    title: "UI/UX & Product Design",
    points: [
      "App/website design, user research, wireframes, prototypes",
      "Tools: Figma, prototyping, usability testing",
      "Best for: creativity + logic + problem-solving",
    ],
  },
  {
    title: "Fashion & Textile Design",
    points: [
      "Garment design, styling, textiles, fashion communication",
      "Strong scope in brands, boutiques and entrepreneurship",
      "Best for: trends + aesthetics + craft sense",
    ],
  },
  {
    title: "Interior / Architecture / Spatial Design",
    points: [
      "Space planning, interiors, furniture, architecture pathways (course-specific)",
      "Work in studios, real estate, construction design support",
      "Best for: space sense + planning + technical learning",
    ],
  },
];

const PATHWAYS = [
  {
    title: "After Class 10",
    steps: [
      "Basic art/design skills + portfolio building",
      "Vocational/skill courses (graphics, illustration, basic fashion, etc.)",
      "Choose relevant stream after 10 (Arts/Science/Commerce depending on course needs)",
    ],
  },
  {
    title: "After Class 12",
    steps: [
      "UG design degrees/diplomas: B.Des / BA Design / Fashion / Graphics / Interior etc.",
      "Entrance exams + portfolio + interview (for many institutes)",
      "Projects + internships build strong portfolio",
    ],
  },
  {
    title: "After Graduation",
    steps: [
      "M.Des / specialization track",
      "Advanced roles: product design, brand strategy, design leadership",
      "Better opportunities with deep portfolio + skills",
    ],
  },
];

const COURSES = [
  {
    title: "Design Diplomas (Skill-first)",
    text:
      "Shorter practical courses in graphic design, UI basics, fashion basics, interior fundamentals and software tools—good for early entry and portfolio building.",
    url: "/courses/design/diploma",
    cta: "Explore Diplomas",
  },
  {
    title: "B.Des / UG Design Degrees",
    text:
      "Undergraduate design programs focused on core design thinking, projects, studios and portfolio development across multiple domains.",
    url: "/courses/design/ug",
    cta: "Explore UG Design",
  },
  {
    title: "Specializations (UI/UX, Fashion, Interior, etc.)",
    text:
      "Pick a specialization based on interest: UI/UX, graphic, fashion, interior, product, animation and more (course-wise).",
    url: "/courses/design/specializations",
    cta: "Explore Specializations",
  },
  {
    title: "M.Des / Advanced Design Studies",
    text:
      "Postgraduate programs for deeper design strategy, leadership and advanced project-based learning.",
    url: "/courses/design/pg",
    cta: "Explore PG Design",
  },
];

const EXAMS = [
  {
    title: "National-level Design Entrances",
    text:
      "Common national-level exams used for admission to top design institutes (often includes aptitude + creative tests).",
    url: "/exams/design/national",
  },
  {
    title: "State-level / Regional Entrances",
    text:
      "Some states/institutes run regional admission processes depending on course type and institute.",
    url: "/exams/design/state",
  },
  {
    title: "University / Institute-level Tests",
    text:
      "Many private/university design schools conduct their own tests + portfolio reviews + interviews.",
    url: "/exams/design/university",
  },
];

const INSTITUTE_LINKS = [
  { title: "NIDs (National Institute of Design)", url: "/colleges/design/nid" },
  { title: "NIFTs (Fashion Design Institutes)", url: "/colleges/design/nift" },
  { title: "IIT Design / UCEED Institutes", url: "/colleges/design/iit" },
  { title: "Central / State Universities", url: "/colleges/design/universities" },
  { title: "Private & Deemed Universities", url: "/colleges/design/private" },
  { title: "Open & Distance (Selected Options)", url: "/colleges/design/open" },
];

const INDUSTRIES = [
  "Branding & Advertising",
  "Digital Products (Apps/Web)",
  "Media, Content & Publishing",
  "Fashion & Lifestyle",
  "Interior, Architecture & Space Design",
  "Startups & Freelancing",
];

const ROLE_EXAMPLES = [
  "Graphic Designer / Visual Designer",
  "UI Designer / UX Designer",
  "Product Designer (Digital)",
  "Fashion Designer / Stylist (role-based)",
  "Interior Designer (role-based)",
  "Illustrator / Motion Designer (skill-based)",
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

export default function DesignByProfessionPage() {
  return (
    <FrontendLayout>
    <main>
      {/* ✅ Hero */}
      <HeroInner
        title="Design"
        subtitle="Create • Communicate • Solve • Build Beautiful Experiences"
        description="Design careers combine creativity and problem-solving—creating visuals, products, spaces and experiences people use every day."
      />

      {/* ✅ Reuse existing sticky tabs system */}
      <EngineeringPageClient>
        {/* ✅ Section 1 */}
        <Section
          id="what-is"
          title="What is Design"
          subtitle="Design is the art and process of solving problems creatively—through visuals, products, spaces and experiences."
        >
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7">
              <div className="p-4 rounded-4 bg-white border h-100">
                <p className="text-muted mb-3">
                  Designers turn ideas into reality—by understanding people, defining problems, exploring options,
                  and creating outcomes that are functional and visually strong. In modern careers, design spans
                  digital products, branding, fashion, interiors and more.
                </p>

                {/* Slightly more design-flavoured tiles */}
                <div className="row g-3">
                  {[
                    ["Design thinking", "Understand users → define → ideate → prototype → improve."],
                    ["Portfolio-driven", "Projects matter more than marks. Show your work."],
                    ["Tools + craft", "Software skills + fundamentals (layout, color, typography)."],
                    ["Communication", "Present ideas clearly to clients/teams."],
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
              {/* Use fact-card-wrapper for a polished look */}
              <div className="fact-card-wrapper h-100">
                <div className="fact-card-inner">
                  <div className="fact-card-icon">
                    <Palette size={20} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h5 className="fact-card-title mb-2">What designers commonly create</h5>
                    <ul className="mb-0 ps-3">
                      {[
                        "Brand logos, posters, marketing creatives",
                        "App/website UI, user flows, prototypes",
                        "Fashion collections, textiles, styling concepts",
                        "Interiors, space layouts, visual plans",
                        "Illustrations, motion graphics, content design",
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

          {/* Add a small “how to succeed” stripe using your mini stats (no external link) */}
          <div className="mt-4 p-4 rounded-4 bg-light border studentSupportTabV2">
            <b className="d-block mb-3">What builds a strong design career</b>
            <div className="supportMiniStats">
              <div className="supportMiniStat">
                <PenTool size={18} />
                <span>
                  <b>Portfolio</b> over theory
                </span>
              </div>
              <div className="supportMiniStat">
                <Layout size={18} />
                <span>
                  <b>Projects</b> + internships
                </span>
              </div>
              <div className="supportMiniStat">
                <Sparkles size={18} />
                <span>
                  <b>Practice</b> & feedback loop
                </span>
              </div>
            </div>
          </div>
        </Section>

        {/* ✅ Section 2 */}
        <Section
          id="fit"
          title="Who should choose Design"
          subtitle="Choose design if you enjoy creating, observing, improving and building visual or experience-based solutions."
        >
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="p-4 rounded-4 bg-white border h-100">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <CheckCircle2 size={18} className="text-success" />
                  <b>Design may be right for you if</b>
                </div>
                <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                  <li>You enjoy creativity, visuals, layout and aesthetics</li>
                  <li>You like building things (projects, prototypes, concepts)</li>
                  <li>You can take feedback and improve your work</li>
                  <li>You are curious about people and how they use products</li>
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
                  <li>You dislike practical work and project-based learning</li>
                  <li>You want a career with only theory and exams</li>
                  <li>You avoid feedback and iteration</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ✅ Section 3 */}
        <Section id="pathways" title="Design Pathways" subtitle="Multiple entry routes exist depending on your stage.">
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
          title="Design Domains"
          subtitle="Instead of memorizing long lists, choose a design domain based on your interest and work style."
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
          title="Design Courses"
          subtitle="Design education is offered at different levels. Choose based on your stage and goal."
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
          subtitle="Design is offered through national institutes, universities and recognized private schools. Compare portfolio culture, studio exposure and placements."
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
              We will highlight West Bengal’s key design colleges and training options in the dedicated Colleges section
              so students can compare national and state-level options confidently.
            </div>
          </div>
        </Section>

        {/* ✅ Section 8 */}
        <Section
          id="careers"
          title="Careers & Opportunities"
          subtitle="Design careers are portfolio-driven—skills + projects decide your direction more than marks."
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
                  <b>Junior</b> designer roles
                </span>
              </div>

              <div className="supportMiniStat">
                <ShieldCheck size={18} />
                <span>
                  <b>Mid-level</b> specialist track
                </span>
              </div>

              <div className="supportMiniStat">
                <MapPin size={18} />
                <span>
                  <b>Lead</b> / Manager / Freelance studio
                </span>
              </div>
            </div>

            <div className="text-muted mt-2">
              Typical progression: Portfolio → Junior Designer → Designer → Senior / Specialist → Lead / Manager / Independent Practice
            </div>
          </div>
        </Section>

        {/* ✅ Section 9 */}
        <Section
          id="higher"
          title="Higher Studies & Global Paths"
          subtitle="With strong portfolio and specialization, design careers can lead to global opportunities and leadership roles."
        >
          <div className="row g-3 g-lg-4">
            {[
              {
                title: "Specialization & advanced portfolio",
                text: "Choose a niche (UI/UX, brand identity, fashion, interior, animation) and build depth through projects.",
              },
              {
                title: "Postgraduate design (M.Des)",
                text: "Advanced study can strengthen strategy, research and leadership-level design thinking.",
              },
              {
                title: "Freelancing & entrepreneurship",
                text: "Many designers build independent careers—studio, freelance clients or product startups.",
              },
              {
                title: "Global mobility",
                text: "Design portfolios can open international study and job opportunities, especially in digital product and brand roles.",
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
            <EducationLoansScholarshipsTab stageLabel="Design" />
        </section>

        {/* ✅ Section 11 */}
        <section id="support" className="py-4 py-lg-5 bg-light">
          <div className="container">
            <StudentSupportTab stageLabel="Design" />
          </div>
        </section>
      </EngineeringPageClient>
    </main>
    </FrontendLayout>
  );
}
