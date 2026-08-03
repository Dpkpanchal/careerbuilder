import React from "react";
import { Link } from "@inertiajs/react";  
import { ArrowRight, CheckCircle2, GraduationCap, Briefcase, University, MapPin, Sparkles, ShieldCheck  } from "lucide-react";

import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import EngineeringPageClient from "@/Components/Frontend/ByProfession/EngineeringPageClient";
import EducationLoansScholarshipsTab from "@/Components/Frontend/AfterClass12/EducationLoansScholarshipsTab";
import StudentSupportTab from "@/Components/Frontend/StudentSupportTab";
import FrontendLayout from '@/Layouts/FrontendLayout';

export const metadata = {
  title: "Engineering Career Guide | Pathways, Branches, Exams, Colleges & Jobs",
  description:
    "A complete engineering career guide: what engineering is, who it suits, pathways after Class 10/12, branches, entrance exams, top colleges, career opportunities, scholarships & education loan support.",
};

// const BRANCH_GROUPS = [
//   {
//     title: "Core Engineering",
//     points: [
//       "Civil, Mechanical, Electrical, Chemical",
//       "Focus: infrastructure, machines, power systems, industrial processes",
//       "Best for: hands-on problem-solving and real-world systems",
//     ],
//   },
//   {
//     title: "Computer & Technology",
//     points: [
//       "Computer Science, IT, AI/ML, Data Science, Cyber Security",
//       "Focus: software systems, automation, data, platforms",
//       "Best for: logic + coding + continuous tech learning",
//     ],
//   },
//   {
//     title: "Electronics & Communication",
//     points: [
//       "ECE, EEE, Instrumentation",
//       "Focus: communication, embedded systems, electronics, control systems",
//       "Best for: interest in hardware + signals + electronics",
//     ],
//   },
//   {
//     title: "Emerging & Interdisciplinary",
//     points: [
//       "Robotics, Renewable Energy, Biomedical, Materials/Nano",
//       "Focus: innovation at the intersection of disciplines",
//       "Best for: curiosity + future-facing tech interests",
//     ],
//   },
// ];

// const PATHWAYS = [
//   {
//     title: "After Class 10",
//     steps: [
//       "Diploma / Polytechnic in Engineering",
//       "Skill-first learning + early technical exposure",
//       "Lateral entry option to Degree (where applicable)",
//     ],
//   },
//   {
//     title: "After Class 12 (Science)",
//     steps: [
//       "B.Tech / B.E (most common route)",
//       "Internships + projects build your profile",
//       "Jobs / Higher studies / specialization",
//     ],
//   },
//   {
//     title: "After Graduation",
//     steps: [
//       "M.Tech / MS / specialization track",
//       "Research roles, teaching, advanced technical pathways",
//       "Better roles with domain depth",
//     ],
//   },
// ];

// const COURSES = [
//   {
//     title: "Diploma in Engineering",
//     text:
//       "A practical, skill-focused technical qualification often chosen after Class 10. Useful for early employment and for continuing to degree via lateral entry (where applicable).",
//     url: '/courses/diploma-in-engineering-polytechnic',
//     cta: "Explore Diploma Courses",
//   },
//   {
//     title: "B.Tech / B.E (Bachelor’s)",
//     text:
//       "The standard undergraduate engineering degree that builds a strong foundation in technical concepts, problem-solving, design, and project work.",
//     url: '/courses/btech-be-programs',
//     cta: "Explore UG Engineering",
//   },
//   {
//     title: "M.Tech / MS (Postgraduate)",
//     text:
//       "Advanced specialization for students aiming at high-skill roles, research, teaching, or deeper domain expertise.",
//     url: '/courses/mtech',
//     cta: "Explore PG Engineering",
//   },
//   {
//     title: "Research / PhD",
//     text:
//       "For students interested in innovation, R&D, advanced research, and academic careers.",
//     url: '/careers/research-phd',
//     cta: "Explore Research Path",
//   },
// ];

// const EXAMS = [
//   {
//     title: "National-level Entrance Exams",
//     text:
//       "Centralized exams used for admission to premier engineering institutes and national universities across India.",
//     url: '/exams/national-level-eg-jee-main-jee-advanced',
//   },
//   {
//     title: "State-level Entrance Exams",
//     text:
//       "Conducted by state authorities for admission to government and private engineering colleges within a state.",
//     url: '/exams/state-level-wbjee-etc',
//   },
//   {
//     title: "University-level Entrance Exams",
//     text:
//       "Some universities and deemed institutions conduct their own entrance tests for engineering programs.",
//     url: '/exams/university-level-exams',
//   },
// ];


// const INSTITUTE_LINKS = [
//   { title: "IITs (Indian Institutes of Technology)", url: '/colleges/iits-indian-institutes-of-technology' },
//   { title: "NITs (National Institutes of Technology)", url: '/colleges/nits-national-institutes-of-technology' },
//   { title: "Central Universities", url: '/colleges/central-universities' },
//   { title: "State Universities", url: '/colleges/state-universities' },
//   { title: "Private & Deemed Universities", url: '#' },
//   { title: "Open & Distance (Selected Options)", url: '/colleges/open-distance-universities-ignou-nsou' },
// ];


// const INDUSTRIES = [
//   "IT & Software",
//   "Infrastructure & Construction",
//   "Manufacturing & Automotive",
//   "Power & Energy",
//   "Electronics & Telecom",
//   "Government / PSU & Public Sector",
//   "Startups & Innovation",
// ];

// const ROLE_EXAMPLES = [
//   "Software / Systems Engineer",
//   "Design Engineer",
//   "Project Engineer",
//   "Quality / Testing Engineer",
//   "Data / AI Engineer (for computing branches)",
//   "Network / Electronics Engineer (for ECE/EEE)",
//   "Site / Structural Engineer (for Civil)",
// ];

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-4 py-lg-5 ">
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

export default function EngineeringByProfessionPage({careerData}) {

  const getCareerData = () => {
    if (!careerData) return null;
    if (Array.isArray(careerData)) {
      return careerData.length > 0 ? careerData[0] : null;
    }
    return careerData;
  };

  const career = getCareerData();

  // Get overview_tree data
  const BRANCH_GROUPS = career?.branch_groups || [];
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
          title="Engineering"
          subtitle="Design • Build • Innovate • Solve Real-World Problems"
          description="Engineering is a professional field that applies science, mathematics, and technology to build systems, products, structures, and solutions that shape modern life."
          // optional: breadcrumb / image props if your HeroInner supports them
        />

        <EngineeringPageClient>
        {/* ✅ Section 1 */}
        <Section
          id="what-is"
          title="What is Engineering"
          subtitle="Engineering is about thinking logically, solving problems, and creating practical solutions—not just studying technical subjects."
        >
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7">
              <div className="sectionCard hoverCard w-100">
                <p className="text-muted mb-3" >
                  Engineers analyze challenges, design systems, test ideas, and improve how things work. From
                  roads and bridges to software, power systems, machines, medical devices, automation, and
                  renewable energy—engineering has many real-world applications.
                </p>

                <div className="row g-3">
                  {[
                    ["Problem solving", "Break complex problems into clear steps."],
                    ["Design mindset", "Create, build, test, improve."],
                    ["Technology application", "Use tools and systems to deliver solutions."],
                    ["Continuous learning", "Engineering changes with technology—skills must grow."],
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
                  <b>What engineers commonly work on</b>
                </div>
                <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                  <li>Software apps and platforms</li>
                  <li>Machines, manufacturing, automobiles</li>
                  <li>Infrastructure and smart cities</li>
                  <li>Power systems, energy, renewables</li>
                  <li>Electronics, telecom, embedded systems</li>
                  <li>Robotics, automation, AI-driven systems</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ✅ Section 2 */}
        <Section
          id="fit"
          title="Who should choose Engineering"
          subtitle="Choose engineering when interest and aptitude come together—not only because it’s popular."
        >
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="p-4 rounded-4 bg-white border h-100">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <CheckCircle2 size={18} className="text-success" />
                  <b>Engineering may be right for you if</b>
                </div>
                <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                  <li>You enjoy math/science or logical thinking</li>
                  <li>You like understanding how things work</li>
                  <li>You enjoy building, improving, or designing systems</li>
                  <li>You’re ready to keep learning new tools and skills</li>
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
                  <li>You strongly dislike analytical / technical subjects</li>
                  <li>You want a career with minimal continuous upskilling</li>
                  <li>You are choosing only due to peer pressure or trend</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ✅ Section 3 */}
        <Section
          id="pathways"
          title="Engineering Pathways"
          subtitle="Multiple entry routes exist depending on your current stage."
        >
          <div className="row g-3 g-lg-4">
            {PATHWAYS.map((p) => (
              <div key={p.title} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="sectionCard hoverCard w-100">
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
          title="Branches & Specializations"
          subtitle="Instead of memorizing long lists, understand branches in grouped categories and choose based on interest and future work style."
        >
          <div className="row g-3 g-lg-4">
            {BRANCH_GROUPS.map((g) => (
              <div key={g.title} className="col-12 col-md-6 d-flex">
                <div className="sectionCard hoverCard w-100">
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
          title="Engineering Courses"
          subtitle="Engineering education is offered at different levels. Choose the level that matches your stage and long-term plan."
        >
          <div className="row g-3 g-lg-4">
            {COURSES.map((c) => (
              <div key={c.title} className="col-12 col-md-6 d-flex">
                <div className="sectionCard hoverCard w-100">
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
                <div className="sectionCard hoverCard w-100">
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
            subtitle="Engineering is offered through national institutes, universities, and recognized private institutions. Compare quality, exposure, and opportunities—not only rankings."
          >
            <div className="border-top pt-4 mt-4" >
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

            
          </Section>


        {/* ✅ Section 8 – Careers & Opportunities */}
        <Section
          id="careers"
          title="Careers & Opportunities"
          subtitle="Engineering is not one job—it’s a platform of roles across industries. Your branch, skills, and projects decide your direction."
        >
          <div className="row g-4">
            {/* Industries */}
            <div className="col-lg-6 d-flex">
              <div className="fact-card-wrapper w-100">
                <div className="fact-card-inner">
                  <div className="fact-card-icon">
                    <Briefcase size={20} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h5 className="fact-card-title mb-2">Major industries</h5>

                    <div className="d-flex flex-wrap gap-2">
                      {INDUSTRIES.map((x) => (
                        <span
                          key={x}
                          className="badge bg-light text-dark border rounded-pill px-3 py-2"
                          style={{ fontWeight: 500 }}
                        >
                          {x}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Job roles */}
            <div className="col-lg-6 d-flex">
              <div className="fact-card-wrapper w-100">
                <div className="fact-card-inner">
                  <div className="fact-card-icon">
                    <Briefcase size={20} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h5 className="fact-card-title mb-2">
                      Common job roles <span className="text-muted">(examples)</span>
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

          {/* Career growth */}
          <div className="mt-4 p-4 rounded-4 bg-light border studentSupportTabV2">
            <b className="d-block mb-3">Career growth (typical)</b>

            <div className="supportMiniStats">
              <div className="supportMiniStat">
                <Sparkles size={18} />
                <span>
                  <b>Graduate</b> Engineer
                </span>
              </div>

              <div className="supportMiniStat">
                <ShieldCheck size={18} />
                <span>
                  <b>Experienced</b> Engineer / Senior
                </span>
              </div>

              <div className="supportMiniStat">
                <MapPin size={18} />
                <span>
                  <b>Leadership</b> or Specialist roles
                </span>
              </div>
            </div>

            <div className="text-muted mt-2">
              Typical progression: Graduate Engineer → Engineer → Senior Engineer →
              Lead / Manager → Specialist / Architect / Consultant
            </div>
          </div>
        </Section>


        {/* ✅ Section 9 */}
        <Section
          id="higher"
          title="Higher Studies & Global Paths"
          subtitle="Engineering can lead to higher studies, research, public sector routes, and global opportunities."
        >
          <div className="row g-3 g-lg-4">
            {[
              {
                title: "Postgraduate specialization",
                text: "M.Tech / MS helps you go deeper into a domain and unlock advanced technical roles.",
              },
              {
                title: "Research & innovation",
                text: "R&D, labs, and PhD pathways are ideal for students who enjoy exploration and experimentation.",
              },
              {
                title: "Public sector & national opportunities",
                text: "Some pathways connect to PSU and government technical opportunities via national exams.",
              },
              {
                title: "Global mobility",
                text: "Engineering skills can open international education and job opportunities, especially with strong projects and specialization.",
              },
            ].map((c) => (
              <div key={c.title} className="col-12 col-md-6 d-flex">
                <div className="sectionCard hoverCard w-100">
                  <h3 className="h6 mb-2">{c.title}</h3>
                  <div className="text-muted">{c.text}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ✅ Section 10: Loans & Scholarships (your reusable component) */}
        <section id="funding" className="py-4 py-lg-5">
            <EducationLoansScholarshipsTab stageLabel="Engineering" />
        </section>

        {/* ✅ Section 11: Student Support (your reusable component) */}
        <section id="support" className="py-4 py-lg-5 bg-light">
          <div className="container">
            <StudentSupportTab stageLabel="Engineering" />
          </div>
        </section>
        </EngineeringPageClient>

        
      </main>
    </FrontendLayout>
  );
}
