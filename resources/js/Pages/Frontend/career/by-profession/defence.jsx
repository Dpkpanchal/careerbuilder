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
  Shield,
  Target,
  Dumbbell,
  Flag,
} from "lucide-react";

import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import EngineeringPageClient from "@/Components/Frontend/ByProfession/EngineeringPageClient";

import EducationLoansScholarshipsTab from "@/Components/Frontend/AfterClass12/EducationLoansScholarshipsTab";
import StudentSupportTab from "@/Components/Frontend/StudentSupportTab";
import FrontendLayout from '@/Layouts/FrontendLayout';

export const metadata = {
  title: "Defence Forces Career Guide | Army, Navy, Air Force Pathways & Exams",
  description:
    "Complete Defence Forces career guide: what it is, who it suits, pathways after Class 10/12/Graduation, entry routes, exams, training, careers, higher studies, scholarships & education loan support.",
};

/* =========================
   DATA (Career-book style)
========================= */

// const DOMAINS = [
//   {
//     title: "Officer Entry (Leadership Track)",
//     points: [
//       "Commissioned officer roles: leadership, operations, administration (service-wise)",
//       "Entry routes include NDA, CDS and other service pathways (exam-wise)",
//       "Best for: leadership + discipline + decision making",
//     ],
//   },
//   {
//     title: "Technical & Engineering Roles",
//     points: [
//       "Technical branches in Army/Navy/Air Force (entry route dependent)",
//       "Suited for STEM background and technical aptitude",
//       "Best for: problem-solving + technical interest + discipline",
//     ],
//   },
//   {
//     title: "Soldier / Sailor / Airman (Non-Officer Track)",
//     points: [
//       "Operational and trade roles based on eligibility and recruitment",
//       "Training is intensive and skill-based",
//       "Best for: fitness + resilience + commitment",
//     ],
//   },
//   {
//     title: "Support Services (Role-based)",
//     points: [
//       "Medical, nursing, logistics, education, administration, allied services",
//       "Entry depends on dedicated exams/selection routes",
//       "Best for: service mindset + specialized skills",
//     ],
//   },
// ];

// const PATHWAYS = [
//   {
//     title: "After Class 10",
//     steps: [
//       "Build fitness + discipline + strong basics",
//       "Explore defence-friendly skill routes (sports, NCC, leadership habits)",
//       "Plan Class 11–12 carefully (Science helps for technical entries)",
//     ],
//   },
//   {
//     title: "After Class 12",
//     steps: [
//       "Officer entry routes (e.g., NDA-type pathways) for eligible candidates",
//       "Non-officer recruitment routes (service-wise)",
//       "Focus on: fitness + written exam + SSB/selection preparation",
//     ],
//   },
//   {
//     title: "After Graduation",
//     steps: [
//       "Officer entry routes via graduation-level exams (e.g., CDS-type pathways) and service selections",
//       "Technical entries for engineering graduates (route dependent)",
//       "SSB + interview + medical fitness remain critical",
//     ],
//   },
// ];

// const COURSES = [
//   {
//     title: "Fitness & Readiness (Foundation Track)",
//     text:
//       "Defence careers require top physical fitness, discipline and mental toughness. Start with daily routine, sports, and consistent training.",
//     url: "/courses/defence/fitness",
//     cta: "Explore Fitness Track",
//   },
//   {
//     title: "Defence Exam Preparation (Written)",
//     text:
//       "Structured preparation for written exams: aptitude, math (route-wise), English, GK/current affairs and reasoning.",
//     url: "/courses/defence/prep",
//     cta: "Explore Exam Prep",
//   },
//   {
//     title: "SSB / Interview Preparation",
//     text:
//       "SSB focuses on personality, leadership, decision making and communication—requires practice and self-improvement.",
//     url: "/courses/defence/ssb",
//     cta: "Explore SSB Prep",
//   },
//   {
//     title: "Technical / Specialized Path",
//     text:
//       "If you aim for technical branches, build strong STEM fundamentals and choose the right graduation route (entry dependent).",
//     url: "/courses/defence/technical",
//     cta: "Explore Technical Path",
//   },
// ];

// const EXAMS = [
//   {
//     title: "National-level Officer Entry Exams",
//     text:
//       "Officer entry routes are primarily national-level exams and selection processes (exam-wise details inside).",
//     url: "/exams/defence/national",
//   },
//   {
//     title: "Recruitment & Trade Entries",
//     text:
//       "Non-officer recruitment/trade entries are service-wise and notification-based (eligibility varies).",
//     url: "/exams/defence/recruitment",
//   },
//   {
//     title: "Service-specific Selections",
//     text:
//       "Some entries depend on direct selections, interviews and medical/fitness standards (route dependent).",
//     url: "/exams/defence/service",
//   },
// ];

// const INSTITUTE_LINKS = [
//   { title: "NDA / Officer Training Prep", url: "/colleges/defence/nda" },
//   { title: "CDS / Graduation-level Prep", url: "/colleges/defence/cds" },
//   { title: "SSB Guidance & Training", url: "/colleges/defence/ssb" },
//   { title: "NCC & Defence Activities", url: "/colleges/defence/ncc" },
//   { title: "Online Preparation Platforms", url: "/colleges/defence/online" },
// ];

// const INDUSTRIES = [
//   "Indian Army (Service-wise roles)",
//   "Indian Navy (Service-wise roles)",
//   "Indian Air Force (Service-wise roles)",
//   "Defence Support Services (Medical/Logistics/Tech – route dependent)",
//   "Allied Security & Government Services (path-based)",
// ];

// const ROLE_EXAMPLES = [
//   "Commissioned Officer (Army/Navy/Air Force – route dependent)",
//   "Technical Officer / Engineer (entry dependent)",
//   "Soldier / Sailor / Airman (recruitment-based)",
//   "Logistics / Administration support roles",
//   "Medical / Nursing / Allied roles (route dependent)",
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

export default function DefenceForcesByProfessionPage({careerData}) {

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
        title="Defence Forces"
        subtitle="Discipline • Courage • Service • Nation"
        description="Defence forces careers demand physical fitness, mental strength, discipline and leadership. Entry routes vary by stage—Class 12, graduation, recruitment trades and specialized pathways."
      />

      {/* ✅ Reuse existing sticky tabs system */}
      <EngineeringPageClient>
        {/* ✅ Section 1 */}
        <Section
          id="what-is"
          title="What is Defence"
          subtitle="Defence forces careers include leadership, operational roles and specialized services across Army, Navy and Air Force."
        >
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7">
              <div className="p-4 rounded-4 bg-white border h-100">
                <p className="text-muted mb-3">
                  Defence careers are built on service, discipline and responsibility. Selection is competitive and includes
                  written exams (route-wise), fitness standards, medical fitness and interview/SSB (for officer routes).
                  Success depends on consistency, confidence and strong character.
                </p>

                <div className="row g-3">
                  {[
                    ["Physical fitness", "Fitness and endurance are non-negotiable."],
                    ["Discipline", "Routine, consistency and training mindset."],
                    ["Leadership & teamwork", "Lead and work with teams under pressure."],
                    ["Mental strength", "Confidence, resilience and decision making."],
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
                    <Shield size={20} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h5 className="fact-card-title mb-2">What you commonly work on</h5>
                    <ul className="mb-0 ps-3">
                      {[
                        "National security and operational readiness",
                        "Training, discipline and mission execution",
                        "Leadership and administration (officer track)",
                        "Technical systems and maintenance (technical branches)",
                        "Support services: logistics, medical, communication (route-based)",
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
            <b className="d-block mb-3">Defence readiness toolkit</b>
            <div className="supportMiniStats">
              <div className="supportMiniStat">
                <Dumbbell size={18} />
                <span>
                  <b>Fitness</b> routine
                </span>
              </div>
              <div className="supportMiniStat">
                <Target size={18} />
                <span>
                  <b>SSB</b> practice
                </span>
              </div>
              <div className="supportMiniStat">
                <Flag size={18} />
                <span>
                  <b>Discipline</b> mindset
                </span>
              </div>
            </div>
          </div>
        </Section>

        {/* ✅ Section 2 */}
        <Section
          id="fit"
          title="Who should choose Defence"
          subtitle="Choose defence if you want service to nation and are ready for training, discipline and competitive selection."
        >
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="p-4 rounded-4 bg-white border h-100">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <CheckCircle2 size={18} className="text-success" />
                  <b>This path may be right for you if</b>
                </div>
                <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                  <li>You are physically active and ready to improve fitness</li>
                  <li>You can follow discipline and routine consistently</li>
                  <li>You have leadership/teamwork mindset</li>
                  <li>You want a respected career with responsibility and service</li>
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
                  <li>You are not willing to follow strict training lifestyle</li>
                  <li>You avoid physical activity or high discipline environments</li>
                  <li>You want quick results without long preparation</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ✅ Section 3 */}
        <Section id="pathways" title="Defence Pathways" subtitle="Entry routes depend on your stage and eligibility.">
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
          title="Entry Tracks & Role Areas"
          subtitle="Defence careers vary by entry route—officer, technical, recruitment trades and specialized services."
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
          title="Preparation & Training Track"
          subtitle="Defence careers are selection + training driven—your preparation structure is your course."
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
          title="Exams & Selection"
          subtitle="This section gives the selection map at a glance. For full lists and details, open the dedicated Exams page."
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
          title="Institutes & Support"
          subtitle="Defence selection is preparation-based. Choose a support system that matches your learning style and fitness plan."
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
              We will highlight West Bengal’s key defence preparation resources, NCC options and selection guidance in the dedicated section
              so students can plan state and national-level opportunities confidently.
            </div>
          </div>
        </Section>

        {/* ✅ Section 8 */}
        <Section
          id="careers"
          title="Careers & Opportunities"
          subtitle="Defence roles depend on entry route, service allocation and eligibility—core focus remains leadership, operations and service."
        >
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="fact-card-wrapper w-100">
                <div className="fact-card-inner">
                  <div className="fact-card-icon">
                    <Briefcase size={20} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h5 className="fact-card-title mb-2">Major services</h5>

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
                  <b>Selection</b> phase
                </span>
              </div>

              <div className="supportMiniStat">
                <ShieldCheck size={18} />
                <span>
                  <b>Training</b> academy
                </span>
              </div>

              <div className="supportMiniStat">
                <MapPin size={18} />
                <span>
                  <b>Posting</b> → senior roles
                </span>
              </div>
            </div>

            <div className="text-muted mt-2">
              Typical progression: Preparation → Written/Selection → SSB/Interview (officer track) → Training → Posting → Senior responsibilities
            </div>
          </div>
        </Section>

        {/* ✅ Section 9 */}
        <Section
          id="higher"
          title="Higher Studies & Growth"
          subtitle="Defence careers grow through training, specialization, discipline and continuous learning."
        >
          <div className="row g-3 g-lg-4">
            {[
              {
                title: "Specialized branches and training",
                text: "Over time, personnel can move into specialized branches: technical, logistics, aviation, intelligence support (route/service dependent).",
              },
              {
                title: "Leadership and responsibility growth",
                text: "Promotions depend on performance, training, service needs and eligibility criteria.",
              },
              {
                title: "Education and certifications",
                text: "Many roles involve continuous courses, certifications and professional development during service.",
              },
              {
                title: "Alternative allied paths",
                text: "Defence-style discipline and skills can support careers in paramilitary and allied government services (path-based).",
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
            <EducationLoansScholarshipsTab stageLabel="Defence Forces" />
        </section>

        {/* ✅ Section 11 */}
        <section id="support" className="py-4 py-lg-5 bg-light">
          <div className="container">
            <StudentSupportTab stageLabel="Defence Forces" />
          </div>
        </section>
      </EngineeringPageClient>
    </main>
    </FrontendLayout>
  );
}
