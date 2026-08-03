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
  title: "Chartered Accountant (CA) Career Guide | Pathway, Exams, Articleship & Jobs",
  description:
    "Complete CA career guide: what CA is, who it suits, step-by-step pathway after Class 12/Graduation, exams, articleship, opportunities in audit, tax, finance and corporate roles, higher studies, scholarships & education loan support.",
};

/* =========================
   DATA
========================= */

// const DOMAINS = [
//   {
//     title: "Audit & Assurance",
//     points: [
//       "Statutory audit, internal audit, risk and compliance",
//       "Work with firms, corporates, banks and large organizations",
//       "Best for: detail-oriented and process-driven mindset",
//     ],
//   },
//   {
//     title: "Taxation (Direct & Indirect)",
//     points: [
//       "Income tax, GST, tax planning, advisory and compliance",
//       "High demand in businesses and professional practice",
//       "Best for: analytical thinking + rules interpretation",
//     ],
//   },
//   {
//     title: "Corporate Finance & Advisory",
//     points: [
//       "Financial planning, MIS, budgeting, valuation, due diligence",
//       "Strong scope in corporates, startups and consulting",
//       "Best for: numbers + business understanding",
//     ],
//   },
//   {
//     title: "Practice / Entrepreneurship",
//     points: [
//       "Independent practice: audit, tax, compliance and advisory",
//       "Build your own client base over time",
//       "Best for: communication + business development",
//     ],
//   },
// ];

// const PATHWAYS = [
//   {
//     title: "After Class 12",
//     steps: [
//       "Register for CA Foundation",
//       "Clear Foundation → then CA Intermediate",
//       "Start Articleship after Intermediate eligibility (as per ICAI rules)",
//     ],
//   },
//   {
//     title: "After Graduation",
//     steps: [
//       "Some graduates may be eligible for direct entry to Intermediate (as per ICAI rules)",
//       "Then Articleship + CA Final",
//       "Good option for commerce/finance graduates",
//     ],
//   },
//   {
//     title: "Qualification (Final)",
//     steps: [
//       "Complete Articleship + clear CA Final",
//       "Become a Chartered Accountant",
//       "Choose job, practice, specialization or higher certifications",
//     ],
//   },
// ];

// const COURSES = [
//   {
//     title: "CA Foundation",
//     text:
//       "Entry-level stage for Class 12 pass students. Builds base in accounting, law and quantitative aptitude.",
//     url: '/courses/finance-taxation-accounting',
//     cta: "Explore Foundation",
//   },
//   {
//     title: "CA Intermediate",
//     text:
//       "Core CA stage with deeper subjects: accounting, tax, auditing, corporate law and finance.",
//     url: '/courses/finance-taxation-accounting',
//     cta: "Explore Intermediate",
//   },
//   {
//     title: "Articleship (Practical Training)",
//     text:
//       "Mandatory on-the-job training under a practicing CA/firm. Builds real-world experience and skills.",
//     url: '/courses/finance-taxation-accounting',
//     cta: "Explore Articleship",
//   },
//   {
//     title: "CA Final",
//     text:
//       "Final stage for becoming a Chartered Accountant. Focuses on advanced auditing, taxation, finance and strategic management.",
//     url: '/courses/finance-taxation-accounting',
//     cta: "Explore CA Final",
//   },
// ];

// const EXAMS = [
//   {
//     title: "CA Foundation Exam",
//     text:
//       "First exam stage for CA aspirants. Required for entry into the CA course after Class 12 (unless direct entry applies).",
//     url: '/exams/law/finance-accounts',
//   },
//   {
//     title: "CA Intermediate Exam",
//     text:
//       "Second stage exam covering core CA subjects. Clearing this enables practical training and progress toward Final.",
//     url: '/exams/law/finance-accounts',
//   },
//   {
//     title: "CA Final Exam",
//     text:
//       "Final exam stage to qualify as a Chartered Accountant (with required training completion).",
//     url: '/exams/law/finance-accounts',
//   },
// ];

// const INSTITUTE_LINKS = [
//   { title: "CA Course & Registration (ICAI)", url: "#" },
//   { title: "Coaching / Training Institutes", url: "#" },
//   { title: "Commerce Colleges (Support Path)", url: "#" },
//   { title: "Online Learning Options", url: "#" },
//   { title: "Open & Distance (Support Path)", url: "#" },
// ];

// const INDUSTRIES = [
//   "CA Firms & Audit Practice",
//   "Corporate Finance & Accounts",
//   "Taxation & Compliance",
//   "Banks & Financial Institutions",
//   "Consulting & Advisory",
//   "Startups & Entrepreneurship",
// ];

// const ROLE_EXAMPLES = [
//   "Chartered Accountant (Practice / Job)",
//   "Audit Associate / Audit Manager",
//   "Tax Consultant / GST Specialist",
//   "Finance Analyst / FP&A",
//   "Internal Auditor / Risk & Compliance",
//   "Corporate Finance / Valuation (with skills)",
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

export default function CAByProfessionPage({careerData}) {

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
          title="Chartered Accountant (CA)"
          subtitle="Audit • Tax • Finance • Advisory"
          description="CA is one of the most respected finance professions. It combines accounting expertise, taxation, auditing, compliance and business advisory—backed by structured exams and mandatory practical training."
        />

        {/* ✅ Reuse existing sticky tabs system */}
        <EngineeringPageClient>
          {/* ✅ Section 1 */}
          <Section
            id="what-is"
            title="What is CA"
            subtitle="A Chartered Accountant is a finance professional trained in accounting, audit, tax, compliance and business advisory."
          >
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-7">
                <div className="p-4 rounded-4 bg-white border h-100">
                  <p className="text-muted mb-3">
                    CA professionals help individuals and businesses maintain accurate financial records, comply with tax laws,
                    conduct audits, advise on financial decisions, and ensure compliance with regulations. The pathway includes
                    structured exams and mandatory practical training (articleship).
                  </p>

                  <div className="row g-3">
                    {[
                      ["Strong fundamentals", "Accounting + law + tax concepts build the base."],
                      ["Discipline & consistency", "Regular study over multiple stages is required."],
                      ["Practical training", "Articleship builds real-world professional skills."],
                      ["High career flexibility", "Job, practice, consulting, corporate finance pathways."],
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
                    <b>Where CAs work</b>
                  </div>
                  <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                    <li>CA firms (audit & tax practice)</li>
                    <li>Corporate finance & accounts teams</li>
                    <li>Banks and financial institutions</li>
                    <li>Consulting and advisory firms</li>
                    <li>Independent practice (own firm)</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* ✅ Section 2 */}
          <Section
            id="fit"
            title="Who should choose CA"
            subtitle="Choose CA if you are comfortable with numbers, rules and long-term exam-based progression."
          >
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="p-4 rounded-4 bg-white border h-100">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <CheckCircle2 size={18} className="text-success" />
                    <b>CA may be right for you if</b>
                  </div>
                  <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                    <li>You like accounting, finance, tax or business studies</li>
                    <li>You are disciplined and can study consistently</li>
                    <li>You can handle exams + practical training commitments</li>
                    <li>You want strong long-term career flexibility</li>
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
                    <li>You dislike reading rules, laws, and detailed concepts</li>
                    <li>You want a quick qualification without multi-stage exams</li>
                    <li>You struggle with consistency over long periods</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* ✅ Section 3 */}
          <Section id="pathways" title="CA Pathways" subtitle="Your CA journey is structured into stages with training.">
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
            subtitle="CAs can specialize through work experience and additional certifications."
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
          <Section id="courses" title="CA Course Stages" subtitle="The CA journey has defined stages and practical training.">
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
            title="CA Exams"
            subtitle="This section gives the CA exam map at a glance. For full details, open the dedicated CA Exams section."
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
            subtitle="CA is managed by ICAI. Students typically use coaching/training plus commerce education support."
          >
            <div className="border-top pt-4 mt-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <University size={18} className="text-primary" />
                <h3 className="h5 mb-0">Browse by Learning Path</h3>
              </div>

              <div className="text-muted mb-4" style={{ maxWidth: "90ch" }}>
                Choose a support path for CA preparation and structured learning.
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
                We will highlight West Bengal’s key commerce institutes and CA training support options in the dedicated Colleges section.
              </div>
            </div>
          </Section>

          {/* ✅ Section 8 */}
          <Section
            id="careers"
            title="Careers & Opportunities"
            subtitle="CA opens opportunities across audit, tax, finance, compliance and advisory roles."
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
                    <b>Entry</b> roles / Articleship
                  </span>
                </div>

                <div className="supportMiniStat">
                  <ShieldCheck size={18} />
                  <span>
                    <b>Qualified</b> CA roles
                  </span>
                </div>

                <div className="supportMiniStat">
                  <MapPin size={18} />
                  <span>
                    <b>Senior</b> Manager / Partner / CFO track
                  </span>
                </div>
              </div>

              <div className="text-muted mt-2">
                Typical progression: Foundation/Inter → Articleship → CA Qualified → Senior roles → Manager/Partner/CFO/Practice growth
              </div>
            </div>
          </Section>

          {/* ✅ Section 9 */}
          <Section
            id="higher"
            title="Higher Studies & Global Paths"
            subtitle="CAs can grow through specialization, certifications and global finance opportunities."
          >
            <div className="row g-3 g-lg-4">
              {[
                {
                  title: "Specialized certifications",
                  text: "Certifications in GST, internal audit, valuation, IFRS, financial modeling can strengthen career paths.",
                },
                {
                  title: "Corporate leadership track",
                  text: "With experience, CAs can grow into finance leadership roles including controller, head finance and CFO track.",
                },
                {
                  title: "Practice growth",
                  text: "Many CAs build their own practice, expand services and grow a professional firm.",
                },
                {
                  title: "Global mobility",
                  text: "Finance roles can open international opportunities; additional country-specific qualifications may be required.",
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
              <EducationLoansScholarshipsTab stageLabel="CA" />
          </section>

          {/* ✅ Section 11 */}
          <section id="support" className="py-4 py-lg-5 bg-light">
            <div className="container">
              <StudentSupportTab stageLabel="CA" />
            </div>
          </section>
        </EngineeringPageClient>
      </main>
    </FrontendLayout>
  );
}
