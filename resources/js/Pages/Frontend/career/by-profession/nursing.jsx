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
  title: "Nursing & Allied Health Career Guide | Courses, Exams, Colleges & Jobs",
  description:
    "Complete Nursing & Allied Health career guide: what it is, who it suits, pathways after Class 10/12, key domains, exams, colleges, careers, higher studies, scholarships & education loan support.",
};

/* =========================
   DATA
========================= */

// const DOMAINS = [
//   {
//     title: "Nursing (GNM / B.Sc Nursing)",
//     points: [
//       "Patient care, clinical support, critical care, ward management",
//       "Strong demand in hospitals + community health",
//       "Best for: empathy + discipline + patient interaction",
//     ],
//   },
//   {
//     title: "Diagnostics (Lab / Imaging)",
//     points: [
//       "Medical Lab Technology, Radiology/Imaging, Pathology support",
//       "Work in labs, diagnostic centers, hospitals",
//       "Best for: accuracy + procedures + technical workflow",
//     ],
//   },
//   {
//     title: "Therapy & Rehabilitation",
//     points: [
//       "Physiotherapy, Occupational Therapy, Speech & Audiology",
//       "Rehab, recovery, mobility and therapy programs",
//       "Best for: hands-on care + long-term patient support",
//     ],
//   },
//   {
//     title: "Emergency & Critical Care Allied Roles",
//     points: [
//       "OT/ICU tech support, anesthesia support roles (program-specific)",
//       "High-pressure environments with strong protocols",
//       "Best for: calm mindset + attention to detail",
//     ],
//   },
// ];

// const PATHWAYS = [
//   {
//     title: "After Class 10",
//     steps: [
//       "ANM / entry-level nursing routes (where applicable)",
//       "Allied/paramedical certificate or diploma options",
//       "Early entry into healthcare support roles",
//     ],
//   },
//   {
//     title: "After Class 12 (Science)",
//     steps: [
//       "GNM / B.Sc Nursing / Allied Health UG routes",
//       "Admissions via counselling or institute selection (varies)",
//       "Clinical training + internships build experience",
//     ],
//   },
//   {
//     title: "After Graduation",
//     steps: [
//       "M.Sc Nursing / specialization tracks",
//       "Advanced clinical, teaching, research and admin roles",
//       "Better roles with domain depth + experience",
//     ],
//   },
// ];

// const COURSES = [
//   {
//     title: "ANM / Entry-level Nursing Routes",
//     text:
//       "Early-entry healthcare route focused on basic nursing and community support (availability and rules depend on program/state).",
//     url: '/courses/nursing-anm-gnm-bsc-nursing',
//     cta: "Explore ANM",
//   },
//   {
//     title: "GNM / B.Sc Nursing",
//     text:
//       "Core nursing pathways leading to strong hospital and community health careers with clinical training.",
//     url: '/courses/nursing-anm-gnm-bsc-nursing',
//     cta: "Explore Nursing Courses",
//   },
//   {
//     title: "Allied Health (Diagnostics / Therapy)",
//     text:
//       "Allied health degrees/diplomas such as lab tech, radiology, physiotherapy and other clinical support roles.",
//     url: '/courses/medical/allied-health',
//     cta: "Explore Allied Health",
//   },
//   {
//     title: "Postgraduate & Specialization",
//     text:
//       "M.Sc Nursing and specialization options for advanced practice, teaching, administration and research.",
//     url: '/courses/medical/pg',
//     cta: "Explore Higher Studies",
//   },
// ];

// const EXAMS = [
//   {
//     title: "National-level Exams / Screening",
//     text:
//       "Some nursing/allied admissions use national-level tests or centralized counselling depending on course/institute.",
//     url: '/exams/national-level-eg-neet-ug',
//   },
//   {
//     title: "State-level Admissions / Counselling",
//     text:
//       "Many nursing and allied seats are filled via state boards/counselling processes (varies by state).",
//     url: '/exams/state-level-medical-exams',
//   },
//   {
//     title: "University / Institute-level Admissions",
//     text:
//       "Some universities and institutes conduct their own admissions tests or merit-based selection.",
//     url: '/exams/university-level-medical-exams',
//   },
// ];

// const INSTITUTE_LINKS = [
//   { title: "Government Nursing Colleges", url: '/colleges/nursing-colleges' },
//   { title: "State Nursing Institutes", url: '/colleges/nursing-colleges' },
//   { title: "Private Nursing Colleges", url: '/colleges/nursing-colleges' },
//   // { title: "Allied Health Institutes", url: '/colleges/nursing-colleges' },
//   // { title: "Open & Distance (Selected Options)", url: '/colleges/nursing-colleges' },
// ];

// const INDUSTRIES = [
//   "Hospitals & Clinics",
//   "Nursing Homes & Care Centers",
//   "Diagnostics Labs & Imaging Centers",
//   "Rehabilitation & Therapy Centers",
//   "Community Health & NGOs",
//   "Government Health Programs",
// ];

// const ROLE_EXAMPLES = [
//   "Staff Nurse / Clinical Nurse",
//   "ICU / OT / Emergency Nurse (with training)",
//   "Lab Technician / Diagnostic Assistant",
//   "Radiology / Imaging Technician",
//   "Physiotherapist / Rehab Assistant",
//   "Community Health Worker / Program Support",
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

export default function NursingByProfessionPage({careerData}) {

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
          title="Nursing & Allied Health"
          subtitle="Care • Support • Diagnose • Rehabilitate"
          description="Nursing and allied health careers are the backbone of healthcare delivery—supporting doctors, caring for patients, running diagnostics, therapy and recovery services."
        />

        {/* ✅ Reuse existing sticky tabs system */}
        <EngineeringPageClient>
          {/* ✅ Section 1 */}
          <Section
            id="what-is"
            title="What is Nursing & Allied Health"
            subtitle="These careers focus on patient care, clinical support, diagnostics, therapy, and rehabilitation across healthcare systems."
          >
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-7">
                <div className="p-4 rounded-4 bg-white border h-100">
                  <p className="text-muted mb-3">
                    Nursing and allied health professionals work directly with patients and healthcare teams.
                    Nursing focuses on clinical care, patient monitoring, and support. Allied health includes
                    diagnostics (labs, imaging), therapy and rehabilitation, emergency support and other clinical services.
                  </p>

                  <div className="row g-3">
                    {[
                      ["Patient-first mindset", "Care, empathy, and responsible clinical behavior."],
                      ["Practical skills", "Hands-on training and real clinical exposure matters."],
                      ["Teamwork", "Work closely with doctors and hospital systems."],
                      ["Stable demand", "Strong employability across hospitals and care centers."],
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
                    <li>Hospitals, nursing homes & clinics</li>
                    <li>ICU / OT / emergency units</li>
                    <li>Diagnostics labs & imaging centers</li>
                    <li>Physiotherapy & rehab centers</li>
                    <li>Community health programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* ✅ Section 2 */}
          <Section
            id="fit"
            title="Who should choose Nursing"
            subtitle="Choose this path if you want a patient-facing healthcare career with strong practical training and long-term growth."
          >
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="p-4 rounded-4 bg-white border h-100">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <CheckCircle2 size={18} className="text-success" />
                    <b>Nursing / allied may be right for you if</b>
                  </div>
                  <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                    <li>You enjoy helping people and patient care</li>
                    <li>You can follow protocols and handle responsibility</li>
                    <li>You are comfortable with hospitals and clinical settings</li>
                    <li>You prefer practical skill-based learning</li>
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
                    <li>You dislike clinical environments or patient interaction</li>
                    <li>You struggle with discipline and shift-based routines</li>
                    <li>You want a purely desk-based career</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* ✅ Section 3 */}
          <Section id="pathways" title="Nursing Pathways" subtitle="Different routes exist depending on your stage and goal.">
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
            subtitle="Nursing and allied health include patient care, diagnostics, therapy and clinical support domains."
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
            title="Nursing Courses"
            subtitle="Choose the level that matches your stage and long-term goal."
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
            subtitle="Nursing and allied health courses are offered through government institutes, state boards and recognized private institutions. Compare training quality and clinical exposure."
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
                We will highlight West Bengal’s key nursing colleges and allied health institutes in the dedicated Colleges section
                so students can compare national and state-level options confidently.
              </div>
            </div>
          </Section>

          {/* ✅ Section 8 */}
          <Section
            id="careers"
            title="Careers & Opportunities"
            subtitle="Nursing and allied health careers have strong demand in hospitals, diagnostics and rehabilitation services."
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
                    <b>Entry</b> roles & ward experience
                  </span>
                </div>

                <div className="supportMiniStat">
                  <ShieldCheck size={18} />
                  <span>
                    <b>Specialized</b> ICU / OT / Diagnostics
                  </span>
                </div>

                <div className="supportMiniStat">
                  <MapPin size={18} />
                  <span>
                    <b>Senior</b> / Supervisor / Teaching
                  </span>
                </div>
              </div>

              <div className="text-muted mt-2">
                Typical progression: Entry Nurse/Tech → Experienced Clinical Role → Specialized Unit / Senior → Supervisor / Educator / Admin roles
              </div>
            </div>
          </Section>

          {/* ✅ Section 9 */}
          <Section
            id="higher"
            title="Higher Studies & Global Paths"
            subtitle="Higher studies and specialization can unlock advanced roles, teaching, research and global opportunities."
          >
            <div className="row g-3 g-lg-4">
              {[
                {
                  title: "Postgraduate specialization",
                  text: "M.Sc Nursing and advanced allied programs help you grow into senior clinical and leadership roles.",
                },
                {
                  title: "Teaching & academics",
                  text: "With higher studies and experience, nursing educators and trainers are in demand.",
                },
                {
                  title: "Hospital administration",
                  text: "Experience + management learning can lead to admin/supervisory healthcare roles.",
                },
                {
                  title: "Global mobility",
                  text: "Nursing and allied health roles can open international opportunities (requirements vary by country).",
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
              <EducationLoansScholarshipsTab stageLabel="Nursing & Allied Health" />
          </section>

          {/* ✅ Section 11 */}
          <section id="support" className="py-4 py-lg-5 bg-light">
            <div className="container">
              <StudentSupportTab stageLabel="Nursing & Allied Health" />
            </div>
          </section>
        </EngineeringPageClient>
      </main>
    </FrontendLayout>
  );
}
