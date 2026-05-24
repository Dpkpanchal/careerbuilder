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
  title: "Medical Career Guide | MBBS, Exams, Colleges & Healthcare Careers",
  description:
    "A complete medical career guide: what medical is, who it suits, pathways after Class 10/12, key domains, entrance exams, colleges, career opportunities, higher studies, scholarships & education loan support.",
};

/* =========================
   DATA
========================= */

const DOMAINS = [
  {
    title: "Clinical Medicine (MBBS → MD/MS)",
    points: [
      "Direct patient care: diagnosis, treatment, procedures",
      "Long-term study + internship + residency",
      "Best for: strong interest in biology + patient responsibility",
    ],
  },
  {
    title: "Dental (BDS → MDS)",
    points: [
      "Oral health, dental surgery, orthodontics, prosthetics",
      "Strong private practice opportunities",
      "Best for: precision work + clinical practice",
    ],
  },
  {
    title: "AYUSH (BAMS / BHMS / BUMS etc.)",
    points: [
      "Traditional & integrative systems of medicine",
      "Govt + private sector opportunities",
      "Best for: interest in alternative medicine pathways",
    ],
  },
  {
    title: "Nursing & Allied Health",
    points: [
      "B.Sc Nursing, paramedical, diagnostics, therapy roles",
      "High demand in hospitals + global opportunities",
      "Best for: patient care + practical healthcare careers",
    ],
  },
];

const PATHWAYS = [
  {
    title: "After Class 10",
    steps: [
      "Paramedical / Allied Health diploma options (entry-level healthcare)",
      "ANM / support roles (where applicable)",
      "Build basics before higher medical pathways",
    ],
  },
  {
    title: "After Class 12 (Science)",
    steps: [
      "MBBS / BDS / AYUSH / Nursing / Allied Health routes",
      "Entrance + counselling decides college & seat type",
      "Internship + practical training shapes your career",
    ],
  },
  {
    title: "After Graduation",
    steps: [
      "MD / MS / PG Diploma / M.Sc Nursing (specialization track)",
      "Research, teaching, hospital leadership roles",
      "Better roles with deep domain expertise",
    ],
  },
];

const COURSES = [
  {
    title: "MBBS (Doctor Path)",
    text:
      "The primary route to become a medical doctor. Includes academic study, clinical postings, and compulsory internship.",
    url: '/courses/medical/mbbs',
    cta: "Explore MBBS",
  },
  {
    title: "BDS / AYUSH / Nursing",
    text:
      "Alternative & allied medical routes with strong demand: dental, traditional medicine and nursing pathways.",
    url: '/courses/medical/allied-health',
    cta: "Explore Allied Routes",
  },
  {
    title: "Postgraduate Medical Studies",
    text:
      "MD, MS, PG Diploma and related programs help you specialize and access higher clinical roles.",
    url: '/courses/medical/pg',
    cta: "Explore PG Medical",
  },
  {
    title: "Research / PhD / Public Health",
    text:
      "For students interested in research, teaching, public health, policy and long-term academic careers.",
    url: '/careers/research-phd',
    cta: "Explore Research Paths",
  },
];

const EXAMS = [
  {
    title: "National-level Entrance Exams",
    text:
      "Primary gateways for medical admissions across India (UG/PG pathways through national-level exams & counselling).",
     url: '/exams/pg',
  },
  {
    title: "State-level Counselling",
    text:
      "State quota counselling for government and private medical colleges. Rules vary by state.",
     url: '/exams/pg',
  },
  {
    title: "University-level Processes",
    text:
      "Some universities have additional screening / counselling steps depending on the program.",
    url: '/exams/pg',
  },
];

const INSTITUTE_LINKS = [
  { title: "AIIMS & National Institutes", url: '/colleges/aiims-medical-institutes' },
  { title: "Central Universities", url: '/colleges/central-universities' },
  { title: "State Medical Colleges", url: '/colleges/state-universities' },
  { title: "Private Medical Colleges", url: '#' },
  { title: "Nursing & Allied Institutes", url: '/colleges/nursing-colleges' },
];

const INDUSTRIES = [
  "Hospitals & Clinics",
  "Government Health Services",
  "Medical Colleges & Teaching Hospitals",
  "Research Labs & Institutes",
  "Public Health & NGOs",
  "Healthcare Startups & Services",
];

const ROLE_EXAMPLES = [
  "Doctor / Resident / Medical Officer",
  "Specialist Consultant (after PG)",
  "Surgeon / Physician (domain-based)",
  "Public Health Professional",
  "Medical Researcher / Academic",
  "Hospital Administrator (with experience)",
];

/* =========================
   SECTION WRAPPER (same as Engineering)
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

export default function MedicalByProfessionPage() {
  return (
    <FrontendLayout>
      <main>
        {/* ✅ Hero */}
        <HeroInner
          title="Medical • Doctor (MBBS)"
          subtitle="Care • Diagnose • Treat • Serve Society"
          description="Medical careers focus on human health—diagnosis, treatment, prevention, and improving wellbeing through clinical care and health systems."
        />

        {/* ✅ Sticky tabs + active section tracking (reusing your existing client wrapper) */}
        <EngineeringPageClient>
          {/* ✅ Section 1 */}
          <Section
            id="what-is"
            title="What is Medical"
            subtitle="Medical is a professional field focused on human health, clinical care, disease prevention, and responsible decision-making."
          >
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-7">
                <div className="p-4 rounded-4 bg-white border h-100">
                  <p className="text-muted mb-3">
                    Medical professionals study the human body, diagnose illnesses, treat patients, and help prevent disease.
                    Beyond hospitals, healthcare also includes community health, research, diagnostics, and emergency care.
                  </p>

                  <div className="row g-3">
                    {[
                      ["Responsibility", "High trust profession—decisions affect lives."],
                      ["Strong science base", "Biology + chemistry + concepts must be clear."],
                      ["Patient empathy", "Communication, patience and ethics matter."],
                      ["Long-term learning", "Continuous upskilling and specialization is common."],
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
                    <li>Hospitals & clinics</li>
                    <li>Emergency & critical care</li>
                    <li>Community/public health programs</li>
                    <li>Medical colleges & teaching hospitals</li>
                    <li>Diagnostics: labs, imaging, pathology</li>
                    <li>Research & clinical trials</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* ✅ Section 2 */}
          <Section
            id="fit"
            title="Who should choose Medical"
            subtitle="Choose medical when you can commit to long study, high responsibility and patient-centered work."
          >
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="p-4 rounded-4 bg-white border h-100">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <CheckCircle2 size={18} className="text-success" />
                    <b>Medical may be right for you if</b>
                  </div>
                  <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                    <li>You enjoy biology and human health topics</li>
                    <li>You can handle responsibility and discipline</li>
                    <li>You have patience, empathy and communication skills</li>
                    <li>You’re ready for long-term study + training</li>
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
                    <li>You want a quick-entry career with minimal training</li>
                    <li>You dislike clinical environments or patient interaction</li>
                    <li>You are choosing only due to pressure or prestige</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* ✅ Section 3 */}
          <Section id="pathways" title="Medical Pathways" subtitle="Different routes exist depending on your stage.">
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
            subtitle="Medical careers include clinical, allied, traditional systems and health support domains."
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
            title="Medical Courses"
            subtitle="Medical education is offered at different levels. Choose the route that matches your stage and goal."
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
            subtitle="Medical education is offered through national institutes, government colleges and recognized private institutions. Compare quality, training exposure and internship opportunities."
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
                We will highlight West Bengal’s key medical colleges and healthcare institutes in the dedicated Colleges section
                so students can compare national and state-level options confidently.
              </div>
            </div>
          </Section>

          {/* ✅ Section 8 – Careers & Opportunities (same design system) */}
          <Section
            id="careers"
            title="Careers & Opportunities"
            subtitle="Medical is not one job—your route (MBBS / allied / specialization) decides your roles and work environment."
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
                    <b>Internship</b> & Junior Doctor roles
                  </span>
                </div>

                <div className="supportMiniStat">
                  <ShieldCheck size={18} />
                  <span>
                    <b>Resident</b> / Medical Officer
                  </span>
                </div>

                <div className="supportMiniStat">
                  <MapPin size={18} />
                  <span>
                    <b>Specialist</b> / Consultant / Leadership
                  </span>
                </div>
              </div>

              <div className="text-muted mt-2">
                Typical progression: Intern → Junior Doctor / MO → Resident / Registrar → Specialist → Consultant / HOD / Senior roles
              </div>
            </div>
          </Section>

          {/* ✅ Section 9 */}
          <Section
            id="higher"
            title="Higher Studies & Global Paths"
            subtitle="Medical can lead to specialization, research, teaching, government services and global opportunities."
          >
            <div className="row g-3 g-lg-4">
              {[
                {
                  title: "Postgraduate specialization",
                  text: "MD / MS helps you become a specialist and access advanced clinical roles.",
                },
                {
                  title: "Super-specialty (advanced)",
                  text: "Further specialization paths can lead to high-skill clinical practice in focused domains.",
                },
                {
                  title: "Public health & health systems",
                  text: "Public health roles focus on community healthcare, programs, policy and impact at scale.",
                },
                {
                  title: "Global mobility",
                  text: "With strong academics and training, medical pathways can open international study and practice routes (rules vary by country).",
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
              <EducationLoansScholarshipsTab stageLabel="Medical" />
          </section>

          {/* ✅ Section 11 */}
          <section id="support" className="py-4 py-lg-5 bg-light">
            <div className="container">
              <StudentSupportTab stageLabel="Medical" />
            </div>
          </section>
        </EngineeringPageClient>
      </main>
    </FrontendLayout>
  );
}
