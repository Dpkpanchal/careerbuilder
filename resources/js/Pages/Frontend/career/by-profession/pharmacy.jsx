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
  title: "Pharmacy Career Guide | D.Pharm, B.Pharm, Exams, Colleges & Jobs",
  description:
    "Complete pharmacy career guide: what pharmacy is, who it suits, pathways after Class 10/12, courses (D.Pharm/B.Pharm/M.Pharm), exams, colleges, careers, higher studies, scholarships & education loan support.",
};

/* =========================
   DATA
========================= */

const DOMAINS = [
  {
    title: "Community / Retail Pharmacy",
    points: [
      "Dispensing medicines, patient counselling, basic health support",
      "Work in retail pharmacies, hospital pharmacies",
      "Best for: strong responsibility + communication",
    ],
  },
  {
    title: "Hospital & Clinical Pharmacy",
    points: [
      "Medication management, coordination with doctors/nurses",
      "Hospital pharmacy operations & safety protocols",
      "Best for: clinical environment + precision",
    ],
  },
  {
    title: "Pharma Industry (Production / QA / QC)",
    points: [
      "Manufacturing, quality control, quality assurance, compliance",
      "Strong scope in pharma companies and plants",
      "Best for: process mindset + documentation discipline",
    ],
  },
  {
    title: "Research, Regulatory & New-Age Roles",
    points: [
      "Drug research, trials support, regulatory affairs, pharmacovigilance",
      "Growing roles in compliance and global pharma operations",
      "Best for: detail-oriented + learning mindset",
    ],
  },
];

const PATHWAYS = [
  {
    title: "After Class 10",
    steps: [
      "D.Pharm eligibility often starts after Class 12, but some skill routes exist after 10",
      "Choose Science stream (PCB/PCM as required) for pharmacy pathways",
      "Build strong basics in chemistry & biology",
    ],
  },
  {
    title: "After Class 12 (Science)",
    steps: [
      "D.Pharm / B.Pharm are primary entry routes",
      "Admission via state/national processes (varies)",
      "Internships + practical training build job readiness",
    ],
  },
  {
    title: "After Graduation",
    steps: [
      "M.Pharm / specialization track",
      "Research, industry leadership, regulatory pathways",
      "Better roles with domain depth",
    ],
  },
];

const COURSES = [
  {
    title: "D.Pharm (Diploma in Pharmacy)",
    text:
      "A practical pharmacy diploma route leading to entry-level pharmacy roles and eligibility for registration (as per norms).",
    url: '/courses/diploma-in-pharmacy-dpharm',
    cta: "Explore D.Pharm",
  },
  {
    title: "B.Pharm (Bachelor of Pharmacy)",
    text:
      "The standard undergraduate pharmacy degree with stronger scope in industry, hospital and advanced pathways.",
      url: '/courses/pharmacy-dpharm-bpharm-mpharm-pharmd',
      cta: "Explore B.Pharm",
  },
  {
    title: "M.Pharm (Postgraduate)",
    text:
      "Advanced specialization in pharmacy domains, enabling higher roles in industry, research and academics.",
    url: '/courses/pharmacy-dpharm-bpharm-mpharm-pharmd',
    cta: "Explore M.Pharm",
  },
  {
    title: "Research / PhD / Regulatory",
    text:
      "For research-oriented careers, academic roles, regulatory affairs and global pharma operations.",
    url: '/careers/research-phd',
    cta: "Explore Research Paths",
  },
];

const EXAMS = [
  {
    title: "National-level Entrance / Screening",
    text:
      "Some pharmacy admissions use national-level entrance tests or centralized counselling depending on institute/state.",
    url: '/exams/pharmacy',
  },
  {
    title: "State-level Entrance / Counselling",
    text:
      "Many pharmacy admissions happen through state entrance exams or counselling processes (varies by state).",
    url: '/exams/pharmacy',
  },
  {
    title: "University / Institute-level Admissions",
    text:
      "Certain universities conduct their own admission tests or merit-based selection for pharmacy programs.",
    url: '/exams/pharmacy',
  },
];

const INSTITUTE_LINKS = [
  { title: "Government Pharmacy Colleges", url: '/colleges/pharmacy-colleges' },
  { title: "State Universities", url: '/colleges/pharmacy-colleges' },
  { title: "Private Pharmacy Colleges", url: '/colleges/pharmacy-colleges' },
  // { title: "Deemed / University Schools", url: "/colleges/pharmacy/university" },
  // { title: "Open & Distance (Selected Options)", url: "/colleges/pharmacy/open" },
];

const INDUSTRIES = [
  "Retail & Community Pharmacies",
  "Hospitals & Clinical Settings",
  "Pharmaceutical Manufacturing",
  "Quality Assurance & Control",
  "Regulatory Affairs & Compliance",
  "Research, Trials & Pharmacovigilance",
];

const ROLE_EXAMPLES = [
  "Pharmacist (Retail / Hospital)",
  "Production / Manufacturing Executive",
  "QA / QC Associate",
  "Regulatory Affairs Associate",
  "Clinical Research / Trial Support",
  "Medical Coding / Pharmacovigilance (role-based)",
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

export default function PharmacyByProfessionPage() {
  return (
    <FrontendLayout>
      <main>
        {/* ✅ Hero */}
        <HeroInner
          title="Pharmacy"
          subtitle="Medicines • Safety • Quality • Patient Support"
          description="Pharmacy careers focus on medicines—how they are made, tested, regulated and used safely. Pharmacists play a key role in healthcare delivery and the pharma industry."
        />

        {/* ✅ Reuse existing sticky tabs system */}
        <EngineeringPageClient>
          {/* ✅ Section 1 */}
          <Section
            id="what-is"
            title="What is Pharmacy"
            subtitle="Pharmacy combines healthcare and science—focusing on medicines, patient safety, quality and proper use."
          >
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-7">
                <div className="p-4 rounded-4 bg-white border h-100">
                  <p className="text-muted mb-3">
                    Pharmacy professionals study how medicines are developed, manufactured, tested, stored, and dispensed.
                    They support doctors and patients by ensuring safe and correct use of medicines, and also contribute to
                    pharma manufacturing, quality assurance, regulatory compliance and research.
                  </p>

                  <div className="row g-3">
                    {[
                      ["Medicine knowledge", "Understand drugs, dosage, interactions and safety."],
                      ["Accuracy & responsibility", "High impact work—errors can be critical."],
                      ["Quality & compliance", "Strong documentation and standards in pharma."],
                      ["Career diversity", "Hospital, retail, industry, regulatory and research roles."],
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
                    <b>Where pharmacists work</b>
                  </div>
                  <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                    <li>Retail pharmacies & medical stores</li>
                    <li>Hospitals and clinical pharmacies</li>
                    <li>Pharma manufacturing plants</li>
                    <li>QA/QC labs and compliance teams</li>
                    <li>Regulatory and drug safety teams</li>
                    <li>Research and clinical trial support</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* ✅ Section 2 */}
          <Section
            id="fit"
            title="Who should choose Pharmacy"
            subtitle="Choose pharmacy if you like science, accuracy, and responsible healthcare/industry work."
          >
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="p-4 rounded-4 bg-white border h-100">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <CheckCircle2 size={18} className="text-success" />
                    <b>Pharmacy may be right for you if</b>
                  </div>
                  <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                    <li>You like chemistry/biology and medicine-related topics</li>
                    <li>You are detail-oriented and careful with procedures</li>
                    <li>You can handle responsibility and accuracy</li>
                    <li>You want options in healthcare + industry roles</li>
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
                    <li>You dislike science subjects and lab work</li>
                    <li>You want a career with minimal compliance/protocols</li>
                    <li>You are choosing only due to trend or pressure</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* ✅ Section 3 */}
          <Section id="pathways" title="Pharmacy Pathways" subtitle="Multiple routes exist depending on your stage and goal.">
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
            subtitle="Pharmacy careers are spread across healthcare delivery, manufacturing, quality, and regulatory roles."
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
            title="Pharmacy Courses"
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
            subtitle="Pharmacy is offered through government institutes, universities and recognized private colleges. Compare labs, industry exposure, internship support and placements."
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
                We will highlight West Bengal’s key pharmacy colleges and institutes in the dedicated Colleges section
                so students can compare national and state-level options confidently.
              </div>
            </div>
          </Section>

          {/* ✅ Section 8 */}
          <Section
            id="careers"
            title="Careers & Opportunities"
            subtitle="Pharmacy careers exist in retail, hospitals, manufacturing, quality, regulatory and research roles."
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
                    <b>Entry</b> pharmacy roles
                  </span>
                </div>

                <div className="supportMiniStat">
                  <ShieldCheck size={18} />
                  <span>
                    <b>Specialized</b> QA/QC / Clinical / Regulatory
                  </span>
                </div>

                <div className="supportMiniStat">
                  <MapPin size={18} />
                  <span>
                    <b>Senior</b> lead / manager roles
                  </span>
                </div>
              </div>

              <div className="text-muted mt-2">
                Typical progression: Pharmacist/Associate → Experienced Role → Specialized Track → Senior/Lead → Manager/Expert roles
              </div>
            </div>
          </Section>

          {/* ✅ Section 9 */}
          <Section
            id="higher"
            title="Higher Studies & Global Paths"
            subtitle="Higher studies and specialization can unlock advanced roles, research and global opportunities."
          >
            <div className="row g-3 g-lg-4">
              {[
                {
                  title: "Postgraduate specialization",
                  text: "M.Pharm enables deeper expertise and higher roles in industry, clinical and research tracks.",
                },
                {
                  title: "Regulatory & compliance pathways",
                  text: "Regulatory affairs, pharmacovigilance and compliance roles are growing in global pharma operations.",
                },
                {
                  title: "Research & academia",
                  text: "Research roles, teaching positions and PhD pathways suit students interested in innovation and academics.",
                },
                {
                  title: "Global mobility",
                  text: "Pharmacy roles can open international opportunities (requirements vary by country and licensing norms).",
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
              <EducationLoansScholarshipsTab stageLabel="Pharmacy" />
          </section>

          {/* ✅ Section 11 */}
          <section id="support" className="py-4 py-lg-5 bg-light">
            <div className="container">
              <StudentSupportTab stageLabel="Pharmacy" />
            </div>
          </section>
        </EngineeringPageClient>
      </main>
    </FrontendLayout>
  );
}
