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
  HeartHandshake,
  Users,
  Globe2,
  HandCoins,
  ClipboardCheck,
} from "lucide-react";

import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import EngineeringPageClient from "@/Components/Frontend/ByProfession/EngineeringPageClient";

import EducationLoansScholarshipsTab from "@/Components/Frontend/AfterClass12/EducationLoansScholarshipsTab";
import StudentSupportTab from "@/Components/Frontend/StudentSupportTab";
import FrontendLayout from '@/Layouts/FrontendLayout';  

export const metadata = {
  title: "Social Work & NGOs | Career Guide, Courses, Pathways & Opportunities",
  description:
    "Complete Social Work & NGOs career guide: what social work is, who it suits, pathways after Class 10/12/Graduation, domains, courses, institutes, careers, higher studies, scholarships & support.",
};

/* =========================
   DATA (Career-book style)
========================= */

// const PATHWAYS = [
//   {
//     title: "After Class 10",
//     steps: [
//       "Build empathy + communication + discipline through small initiatives",
//       "Volunteer locally: community events, tutoring, awareness drives (safe & supervised)",
//       "Choose Class 11–12 stream based on interest (any stream can enter social work)",
//     ],
//   },
//   {
//     title: "After Class 12",
//     steps: [
//       "Start volunteering with credible organizations or community projects",
//       "Choose UG options like BSW / BA / BSc (based on interest area)",
//       "Build skills: communication, documentation, teamwork, basic data handling",
//     ],
//   },
//   {
//     title: "After Graduation",
//     steps: [
//       "MSW / MA specialization for stronger professional roles",
//       "Work in NGOs, CSR, social programs, research, policy support",
//       "Grow with field experience, project ownership and leadership roles",
//     ],
//   },
// ];

// const DOMAINS = [
//   {
//     title: "Community Development",
//     points: [
//       "Rural/urban development, community mobilization, livelihoods",
//       "Best for: field work + people interaction + program execution",
//       "Focus: long-term improvement and participation",
//     ],
//   },
//   {
//     title: "Education & Child Welfare",
//     points: [
//       "Child protection, education programs, school outreach, counseling support",
//       "Best for: patience + mentorship mindset + structured work",
//       "Focus: learning outcomes, safety and support systems",
//     ],
//   },
//   {
//     title: "Health & Public Welfare",
//     points: [
//       "Public health awareness, nutrition, disability support, mental health programs",
//       "Best for: care mindset + coordination + community trust building",
//       "Focus: awareness, access and service delivery",
//     ],
//   },
//   {
//     title: "Environment & Social Impact",
//     points: [
//       "Climate, sustainability, conservation, disaster response support",
//       "Best for: mission-driven + operations + coordination",
//       "Focus: impact measurement and long-term change",
//     ],
//   },
// ];

// const COURSES = [
//   {
//     title: "BSW (Bachelor of Social Work)",
//     text:
//       "A strong entry-level professional degree for social work careers. Builds field exposure, community practice, and program understanding.",
//     url: "/courses/social-work/bsw",
//     cta: "Explore BSW",
//   },
//   {
//     title: "MSW (Master of Social Work)",
//     text:
//       "Advanced specialization for leadership roles in NGOs, CSR, counseling support, program design and management.",
//     url: "/courses/social-work/msw",
//     cta: "Explore MSW",
//   },
//   {
//     title: "Short Courses & Certifications (Impact Skills)",
//     text:
//       "Useful add-ons: project management, monitoring & evaluation, communication, counseling basics, fundraising and documentation.",
//     url: "/courses/social-work/certifications",
//     cta: "Explore Certifications",
//   },
//   {
//     title: "Research / Policy / Development Studies (Optional)",
//     text:
//       "For students interested in policy research, development economics, public policy or social impact strategy roles.",
//     url: "/courses/social-work/policy",
//     cta: "Explore Policy Path",
//   },
// ];

// const EXAMS = [
//   {
//     title: "Mostly admission-based (no single exam)",
//     text:
//       "Many social work programs are admission-based (merit or university-level selection). Some institutes may conduct entrance tests.",
//     url: "/exams/social-work/overview",
//   },
//   {
//     title: "University-level entrances (where applicable)",
//     text:
//       "Some universities and institutes conduct their own entrances/interviews for BSW/MSW programs.",
//     url: "/exams/social-work/university",
//   },
//   {
//     title: "Government / PSU / CSR allied routes",
//     text:
//       "Some allied roles come via general competitive exams and program recruitments (role-based).",
//     url: "/exams/social-work/allied",
//   },
// ];

// const INSTITUTE_LINKS = [
//   { title: "Social Work Colleges (BSW/MSW)", url: "/colleges/social-work" },
//   { title: "Universities (Social Sciences / Development)", url: "/colleges/social-work/universities" },
//   { title: "NGO Training & Volunteer Programs", url: "/colleges/social-work/ngos" },
//   { title: "CSR & Corporate Social Impact Programs", url: "/colleges/social-work/csr" },
//   { title: "Online Learning Platforms", url: "/colleges/social-work/online" },
// ];

// const INDUSTRIES = [
//   "NGOs & Foundations",
//   "CSR (Corporate Social Responsibility)",
//   "Government Social Programs (role-based)",
//   "International organizations / Development sector",
//   "Education & Child welfare organizations",
//   "Healthcare & Public welfare programs",
// ];

// const ROLE_EXAMPLES = [
//   "Social Worker / Community Worker",
//   "Program Coordinator / Field Coordinator",
//   "Project Manager (Social sector)",
//   "Counseling / Support roles (training dependent)",
//   "Monitoring & Evaluation (M&E) Associate",
//   "Fundraising / Partnerships Associate",
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

export default function SocialWorkNgoFuturePathPage({careerData}) {

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
        title="Social Work / NGOs"
        subtitle="Serve • Support • Empower • Build Impact"
        description="Social work is a professional pathway focused on helping communities and improving lives through structured programs, field work, counseling support and development initiatives. NGOs, CSR programs and public welfare projects offer diverse roles for impact-driven students."
      />

      {/* ✅ Sticky tabs system (reuse) */}
      <EngineeringPageClient>
        {/* ✅ Section 1 */}
        <Section
          id="what-is"
          title="What is Social Work"
          subtitle="Social work is a professional field focused on community support, welfare and social impact."
        >
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7">
              <div className="p-4 rounded-4 bg-white border h-100">
                <p className="text-muted mb-3">
                  Social work is not only volunteering—it is structured, skill-based work that supports people and communities.
                  Social workers and NGO professionals plan programs, work in the field, coordinate services, document outcomes
                  and help create long-term change in education, health, child welfare, livelihoods and public development.
                </p>

                <div className="row g-3">
                  {[
                    ["People-first mindset", "Empathy + responsibility + patience are key."],
                    ["Field + coordination", "Work involves field visits and program execution."],
                    ["Communication", "Community trust and clear communication matter."],
                    ["Impact measurement", "Documentation and outcomes tracking build credibility."],
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
                    <HeartHandshake size={20} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h5 className="fact-card-title mb-2">What social sector work includes</h5>
                    <ul className="mb-0 ps-3">
                      {[
                        "Community outreach and field visits",
                        "Program planning and coordination",
                        "Documentation, reporting and data tracking",
                        "Counseling/support work (training-based)",
                        "Fundraising and partnerships (role-based)",
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
            <b className="d-block mb-3">Impact toolkit</b>
            <div className="supportMiniStats">
              <div className="supportMiniStat">
                <Users size={18} />
                <span>
                  <b>Community</b> trust
                </span>
              </div>
              <div className="supportMiniStat">
                <ClipboardCheck size={18} />
                <span>
                  <b>Program</b> execution
                </span>
              </div>
              <div className="supportMiniStat">
                <Globe2 size={18} />
                <span>
                  <b>Impact</b> mindset
                </span>
              </div>
            </div>
          </div>
        </Section>

        {/* ✅ Section 2 */}
        <Section
          id="fit"
          title="Is it for me"
          subtitle="Social work is rewarding, but requires patience, emotional strength and responsibility."
        >
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="p-4 rounded-4 bg-white border h-100">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <CheckCircle2 size={18} className="text-success" />
                  <b>This path may suit you if</b>
                </div>
                <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                  <li>You genuinely want to help people and communities</li>
                  <li>You can work patiently and handle real-world challenges</li>
                  <li>You can communicate and coordinate with different groups</li>
                  <li>You can manage documentation and responsibility</li>
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
                  <li>You want only desk work and avoid field exposure</li>
                  <li>You struggle with emotional situations and human issues</li>
                  <li>You want quick results without long-term effort</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ✅ Section 3 */}
        <Section
          id="pathways"
          title="Social Work Pathways"
          subtitle="You can enter social work from any stream—your stage decides your approach."
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
          title="Domains in Social Sector"
          subtitle="Choose a domain based on your interest—education, health, environment, policy or community development."
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
          title="Courses & Skills"
          subtitle="A professional social work career grows with the right degree + field exposure + impact skills."
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
          title="Admissions & Entry"
          subtitle="Social work is mostly admission-based, but some institutes may have entrance tests or interviews."
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
          title="Colleges & NGO Ecosystem"
          subtitle="Choose institutes with field exposure, strong placements in social sector and practical learning."
        >
          <div className="border-top pt-4 mt-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <University size={18} className="text-primary" />
              <h3 className="h5 mb-0">Browse by Support Type</h3>
            </div>

            <div className="text-muted mb-4" style={{ maxWidth: "90ch" }}>
              Open a category to see curated lists, internships, NGO ecosystem routes, and key details.
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
              We will highlight West Bengal’s social work colleges, key NGOs, CSR programs and local opportunities
              in the dedicated Colleges section so students can explore local + national impact paths.
            </div>
          </div>
        </Section>

        {/* ✅ Section 8 */}
        <Section
          id="careers"
          title="Careers & Opportunities"
          subtitle="Social sector careers include field work, program management, CSR roles and impact research."
        >
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="fact-card-wrapper w-100">
                <div className="fact-card-inner">
                  <div className="fact-card-icon">
                    <Briefcase size={20} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h5 className="fact-card-title mb-2">Where you can work</h5>

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
                    <HandCoins size={20} />
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
            <b className="d-block mb-3">Career growth (typical)</b>

            <div className="supportMiniStats">
              <div className="supportMiniStat">
                <Sparkles size={18} />
                <span>
                  <b>Volunteer</b> exposure
                </span>
              </div>

              <div className="supportMiniStat">
                <ShieldCheck size={18} />
                <span>
                  <b>Professional</b> roles
                </span>
              </div>

              <div className="supportMiniStat">
                <MapPin size={18} />
                <span>
                  <b>Leadership</b> & impact
                </span>
              </div>
            </div>

            <div className="text-muted mt-2">
              Typical progression: Volunteer / Intern → Field Coordinator → Program Coordinator → Project Manager → Senior leadership roles
            </div>
          </div>
        </Section>

        {/* ✅ Section 9 */}
        <Section
          id="higher"
          title="Higher Studies & Growth"
          subtitle="Social sector growth comes from specialization, field experience and impact skills."
        >
          <div className="row g-3 g-lg-4">
            {[
              {
                title: "Specialization in social work domains",
                text: "Child welfare, mental health support, community development, public health, disability support, etc.",
              },
              {
                title: "Impact measurement & research roles",
                text: "Monitoring & evaluation (M&E), policy research, social data analysis and reporting are high value skills.",
              },
              {
                title: "CSR & corporate pathways",
                text: "CSR roles demand coordination, reporting, project planning and partnership building skills.",
              },
              {
                title: "Global exposure",
                text: "International organizations and development sector roles become possible with experience and strong profiles.",
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
            <EducationLoansScholarshipsTab stageLabel="Social Work / NGOs" />
        </section>

        {/* ✅ Section 11 */}
        <section id="support" className="py-4 py-lg-5 bg-light">
          <div className="container">
            <StudentSupportTab stageLabel="Social Work / NGOs" />
          </div>
        </section>
      </EngineeringPageClient>
    </main>
    </FrontendLayout>
  );
}
