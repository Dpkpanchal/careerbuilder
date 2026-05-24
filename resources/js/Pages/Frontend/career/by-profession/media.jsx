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
  PenLine,
  Video,
  Radio,
  Megaphone,
} from "lucide-react";

import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import EngineeringPageClient from "@/Components/Frontend/ByProfession/EngineeringPageClient";

import EducationLoansScholarshipsTab from "@/Components/Frontend/AfterClass12/EducationLoansScholarshipsTab";
import StudentSupportTab from "@/Components/Frontend/StudentSupportTab";
import FrontendLayout from '@/Layouts/FrontendLayout';  

export const metadata = {
  title: "Media & Journalism Career Guide | Courses, Colleges, Careers & Growth",
  description:
    "Complete Media & Journalism career guide: what it is, who it suits, pathways after Class 10/12, media domains, courses, admissions, colleges, career opportunities, higher studies, scholarships & education loan support.",
};

/* =========================
   DATA (Career-book style)
========================= */

const DOMAINS = [
  {
    title: "Journalism & Reporting",
    points: [
      "News reporting, ground stories, interviews, fact-checking",
      "Print + digital journalism roles",
      "Best for: curiosity + ethics + strong writing",
    ],
  },
  {
    title: "Digital Media & Content",
    points: [
      "Content writing, SEO content, social media content, creator economy",
      "Work with brands, startups, agencies, news platforms",
      "Best for: storytelling + consistency + creativity",
    ],
  },
  {
    title: "Broadcast, Video & Production",
    points: [
      "TV/news production, video editing, camera work (role-based)",
      "YouTube, OTT, studio production teams",
      "Best for: communication + technical media skills",
    ],
  },
  {
    title: "PR, Advertising & Corporate Communication",
    points: [
      "Public relations, brand communication, campaigns, media relations",
      "Strong scope in corporates and agencies",
      "Best for: communication + strategy + people skills",
    ],
  },
];

const PATHWAYS = [
  {
    title: "After Class 10",
    steps: [
      "Build basics: writing, reading, communication, speaking confidence",
      "Start small: school newsletter, blogging, video storytelling, photography",
      "Choose Class 11–12 stream based on interest (any stream works for many media courses)",
    ],
  },
  {
    title: "After Class 12",
    steps: [
      "UG programs: BA Journalism/Mass Comm, BJMC, BA Media Studies (course-wise)",
      "Portfolio matters: writing samples, reels, projects, internships",
      "Choose a track: journalism, digital content, PR, production, etc.",
    ],
  },
  {
    title: "After Graduation",
    steps: [
      "PG: MA Journalism/Mass Comm, PG Diploma in Journalism/Media (institute-wise)",
      "Specialize: data journalism, broadcast, documentary, PR, digital strategy",
      "Better roles with strong portfolio + experience",
    ],
  },
];

const COURSES = [
  {
    title: "Skill Courses (Content, Video, Communication)",
    text:
      "Short practical courses in writing, anchoring basics, photography, video editing, social media and content strategy—useful for portfolio building.",
    url: "/courses/media/skill",
    cta: "Explore Skill Courses",
  },
  {
    title: "UG Degree (Journalism / Mass Communication)",
    text:
      "Undergraduate programs that cover reporting, media studies, communication, ethics and production basics—along with projects.",
    url: "/courses/media/ug",
    cta: "Explore UG Programs",
  },
  {
    title: "Diploma / Certificate in Journalism",
    text:
      "Focused programs for faster entry into media roles—often oriented around practical reporting, editing and production.",
    url: "/courses/media/diploma",
    cta: "Explore Diplomas",
  },
  {
    title: "PG & Specialization",
    text:
      "Postgraduate study for advanced roles and specialization in broadcast, digital media, PR, research, documentary and more.",
    url: "/courses/media/pg",
    cta: "Explore Higher Studies",
  },
];

const EXAMS = [
  {
    title: "National-level Admissions",
    text:
      "Some media schools use national-level tests/interviews/portfolio assessment depending on the institute.",
    url: "/exams/media/national",
  },
  {
    title: "State-level / Regional Admissions",
    text:
      "State universities and colleges may have their own admission processes (varies by state).",
    url: "/exams/media/state",
  },
  {
    title: "University / Institute-level Selection",
    text:
      "Many institutes use interviews, writing tests, aptitude tests and portfolio for selection.",
    url: "/exams/media/university",
  },
];

const INSTITUTE_LINKS = [
  { title: "Central Universities", url: "/colleges/media/central" },
  { title: "State Universities", url: "/colleges/media/state" },
  { title: "Private & Deemed Universities", url: "/colleges/media/private" },
  { title: "Media & Journalism Institutes", url: "/colleges/media/institutes" },
  { title: "Open & Distance (Selected Options)", url: "/colleges/media/open" },
];

const INDUSTRIES = [
  "News & Journalism (Print/Digital)",
  "Broadcast TV / Video Platforms",
  "Digital Content & Social Media",
  "PR & Corporate Communication",
  "Advertising & Creative Agencies",
  "Production Houses / Podcasts",
];

const ROLE_EXAMPLES = [
  "Reporter / Journalist",
  "Copywriter / Content Writer",
  "Video Editor / Producer (role-based)",
  "Anchor / Presenter (skill-based)",
  "PR Executive / Corporate Communication",
  "Social Media Manager / Content Strategist",
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

export default function MediaJournalismByProfessionPage() {
  return (
    <FrontendLayout>
    <main>
      {/* ✅ Hero */}
      <HeroInner
        title="Media & Journalism"
        subtitle="Stories • Truth • Communication • Impact"
        description="Media and journalism careers focus on storytelling, information, communication and public impact—across print, digital, broadcast, content and PR."
      />

      {/* ✅ Reuse existing sticky tabs system */}
      <EngineeringPageClient>
        {/* ✅ Section 1 */}
        <Section
          id="what-is"
          title="What is Media"
          subtitle="Media & journalism is about creating, verifying and communicating information—through stories, reporting and content."
        >
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7">
              <div className="p-4 rounded-4 bg-white border h-100">
                <p className="text-muted mb-3">
                  Journalism focuses on reporting, investigation, fact-checking and public interest stories.
                  Media includes content creation, production, digital platforms, advertising and communication.
                  Careers are portfolio-driven—projects and real work matter a lot.
                </p>

                <div className="row g-3">
                  {[
                    ["Storytelling", "Write, speak and present ideas clearly."],
                    ["Ethics & accuracy", "Verify facts and be responsible."],
                    ["Digital skills", "Content + tools (editing, social, analytics) matter."],
                    ["Portfolio-driven growth", "Your work samples build your career faster than marks."],
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
                    <Megaphone size={20} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h5 className="fact-card-title mb-2">What you may work on</h5>
                    <ul className="mb-0 ps-3">
                      {[
                        "News reporting and interviews",
                        "Writing articles, scripts and copy",
                        "Video production and editing",
                        "Podcasting and audio content",
                        "PR campaigns and corporate communication",
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
            <b className="d-block mb-3">Fastest way to grow in this field</b>
            <div className="supportMiniStats">
              <div className="supportMiniStat">
                <PenLine size={18} />
                <span>
                  <b>Write</b> consistently
                </span>
              </div>
              <div className="supportMiniStat">
                <Video size={18} />
                <span>
                  <b>Create</b> video & reels
                </span>
              </div>
              <div className="supportMiniStat">
                <Radio size={18} />
                <span>
                  <b>Publish</b> & get feedback
                </span>
              </div>
            </div>
          </div>
        </Section>

        {/* ✅ Section 2 */}
        <Section
          id="fit"
          title="Who should choose Media"
          subtitle="Choose media if you enjoy writing, communication, creativity and real-world content creation."
        >
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="p-4 rounded-4 bg-white border h-100">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <CheckCircle2 size={18} className="text-success" />
                  <b>This field may be right for you if</b>
                </div>
                <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                  <li>You like writing, speaking, interviewing or storytelling</li>
                  <li>You are curious and enjoy learning new topics</li>
                  <li>You can handle feedback and deadlines</li>
                  <li>You are comfortable using digital tools and platforms</li>
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
                  <li>You dislike reading/writing and regular content creation</li>
                  <li>You want fixed routine without deadlines</li>
                  <li>You are not comfortable with public-facing work</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ✅ Section 3 */}
        <Section id="pathways" title="Media Pathways" subtitle="Multiple entry routes exist depending on your stage.">
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
          subtitle="Media has multiple domains—choose based on interest and work style."
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
          title="Media Courses"
          subtitle="Choose the level that matches your stage and long-term plan."
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
          title="Admissions & Entrance"
          subtitle="This section gives the admission map at a glance. For full lists and details, open the dedicated Exams page."
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
          title="Colleges & Institutes"
          subtitle="Media is offered through universities and specialized institutes. Compare faculty, industry exposure, internships and studio facilities."
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
              We will highlight West Bengal’s key media and journalism institutes and colleges in the dedicated Colleges section
              so students can compare national and state-level options confidently.
            </div>
          </div>
        </Section>

        {/* ✅ Section 8 */}
        <Section
          id="careers"
          title="Careers & Opportunities"
          subtitle="Media careers are portfolio-driven—your work samples, internships and consistency decide your growth."
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
                  <b>Intern</b> / trainee phase
                </span>
              </div>

              <div className="supportMiniStat">
                <ShieldCheck size={18} />
                <span>
                  <b>Creator</b> / Associate roles
                </span>
              </div>

              <div className="supportMiniStat">
                <MapPin size={18} />
                <span>
                  <b>Senior</b> editor / producer / lead
                </span>
              </div>
            </div>

            <div className="text-muted mt-2">
              Typical progression: Portfolio → Intern → Associate → Specialist → Senior roles → Editor/Producer/Lead
            </div>
          </div>
        </Section>

        {/* ✅ Section 9 */}
        <Section
          id="higher"
          title="Higher Studies & Global Paths"
          subtitle="With specialization and strong portfolio, media careers can expand into leadership and global opportunities."
        >
          <div className="row g-3 g-lg-4">
            {[
              {
                title: "Specialization & niche growth",
                text: "Data journalism, documentary, broadcast production, UI content design, PR strategy—niches can boost growth.",
              },
              {
                title: "Postgraduate study",
                text: "PG programs can strengthen fundamentals, research, and access to networks and internships.",
              },
              {
                title: "Freelancing & creator economy",
                text: "Many professionals build independent careers: YouTube, writing, brand deals, content studios and consulting.",
              },
              {
                title: "Global mobility",
                text: "Strong communication, portfolio and specialization can open international study and media opportunities.",
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
            <EducationLoansScholarshipsTab stageLabel="Media & Journalism" />
        </section>

        {/* ✅ Section 11 */}
        <section id="support" className="py-4 py-lg-5 bg-light">
          <div className="container">
            <StudentSupportTab stageLabel="Media & Journalism" />
          </div>
        </section>
      </EngineeringPageClient>
    </main>
    </FrontendLayout>
  );
}
