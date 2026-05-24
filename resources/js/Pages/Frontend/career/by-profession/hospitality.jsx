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
  Plane,
  Hotel,
  Utensils,
  Users,
} from "lucide-react";

import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import EngineeringPageClient from "@/Components/Frontend/ByProfession/EngineeringPageClient";

import EducationLoansScholarshipsTab from "@/Components/Frontend/AfterClass12/EducationLoansScholarshipsTab";
import StudentSupportTab from "@/Components/Frontend/StudentSupportTab";
import FrontendLayout from '@/Layouts/FrontendLayout';  

export const metadata = {
  title: "Hospitality & Tourism Career Guide | Courses, Colleges, Jobs & Growth",
  description:
    "Complete Hospitality & Tourism career guide: what it is, who it suits, pathways after Class 10/12, key domains, courses, admissions, colleges, career opportunities, higher studies, scholarships & education loan support.",
};

/* =========================
   DATA
========================= */

const DOMAINS = [
  {
    title: "Hotel Operations",
    points: [
      "Front office, housekeeping, guest relations, hotel administration",
      "Work in hotels, resorts, boutique properties",
      "Best for: people skills + discipline + service mindset",
    ],
  },
  {
    title: "Food & Beverage (F&B)",
    points: [
      "Restaurant service, kitchen operations (role-based), catering, banquets",
      "Strong career scope in hotels, restaurants, events",
      "Best for: teamwork + stamina + service excellence",
    ],
  },
  {
    title: "Travel & Tourism Services",
    points: [
      "Travel agencies, tour operations, itinerary planning, ticketing (role-based)",
      "Work with domestic/international travel ecosystem",
      "Best for: planning + communication + geography awareness",
    ],
  },
  {
    title: "Aviation / Cruise / Events (Path-specific)",
    points: [
      "Cabin crew support pathways, ground ops (role-based), cruise hospitality, events",
      "Fast-paced, customer-facing environments",
      "Best for: confidence + grooming + communication",
    ],
  },
];

const PATHWAYS = [
  {
    title: "After Class 10",
    steps: [
      "Skill-first certificates (hotel ops basics, culinary basics, service training)",
      "Choose Class 11–12 based on your plan (any stream works for many hospitality courses)",
      "Start building soft skills: communication, English, grooming, teamwork",
    ],
  },
  {
    title: "After Class 12",
    steps: [
      "UG degree/diploma: Hotel Management, Tourism, Travel, Culinary (course-wise)",
      "Admissions can be institute-based or via entrance/counselling (varies)",
      "Internships are a core part of hospitality learning",
    ],
  },
  {
    title: "After Graduation",
    steps: [
      "PG in Hotel/Tourism/Management (MBA in Hospitality/Travel – institute-wise)",
      "Specialize in operations, revenue, marketing, events, international hospitality",
      "Better roles with domain depth + experience",
    ],
  },
];

const COURSES = [
  {
    title: "Certificates & Skill Courses",
    text:
      "Short practical programs in hospitality service, front office basics, bakery/cookery basics, and travel services—good for early entry and confidence building.",
    url: "/courses/hospitality/skill",
    cta: "Explore Skill Courses",
  },
  {
    title: "Diploma in Hotel / Tourism",
    text:
      "Diploma routes focused on hands-on hospitality or tourism operations, often with internship exposure and faster job entry.",
    url: "/courses/hospitality/diploma",
    cta: "Explore Diplomas",
  },
  {
    title: "UG Degree (Hotel Management / Tourism)",
    text:
      "Undergraduate programs that build strong foundation in hotel operations, F&B, housekeeping, travel & tourism management and internships.",
    url: "/courses/hospitality/ug",
    cta: "Explore UG Programs",
  },
  {
    title: "PG & Specialization",
    text:
      "Postgraduate options for leadership roles—operations management, revenue, marketing, events, and hospitality business strategy.",
    url: "/courses/hospitality/pg",
    cta: "Explore Higher Studies",
  },
];

const EXAMS = [
  {
    title: "National-level Admissions / Tests",
    text:
      "Some top institutes use national-level tests or centralized counselling for hotel management/tourism (varies by institute).",
    url: "/exams/hospitality/national",
  },
  {
    title: "State-level Admissions / Counselling",
    text:
      "Many admissions happen through state-level counselling or institute processes (state-wise variation).",
    url: "/exams/hospitality/state",
  },
  {
    title: "University / Institute-level Selection",
    text:
      "Many universities and private institutes use merit + interviews/aptitude tests for hospitality and tourism programs.",
    url: "/exams/hospitality/university",
  },
];

const INSTITUTE_LINKS = [
  { title: "IHM / Hotel Management Institutes", url: "/colleges/hospitality/ihm" },
  { title: "Tourism & Travel Institutes", url: "/colleges/hospitality/tourism" },
  { title: "Central / State Universities", url: "/colleges/hospitality/universities" },
  { title: "Private & Deemed Universities", url: "/colleges/hospitality/private" },
  { title: "Open & Distance (Selected Options)", url: "/colleges/hospitality/open" },
];

const INDUSTRIES = [
  "Hotels & Resorts",
  "Restaurants, Cafés & Catering",
  "Travel Agencies & Tour Operators",
  "Airlines / Airports (role-based)",
  "Cruise / Event Hospitality (path-based)",
  "Online Travel & Hospitality Platforms",
];

const ROLE_EXAMPLES = [
  "Front Office Executive / Guest Relations",
  "F&B Service Executive / Banquet Executive",
  "Housekeeping Executive",
  "Travel Consultant / Tour Coordinator",
  "Event Coordinator (hospitality/events)",
  "Operations Supervisor (with experience)",
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

export default function HospitalityTourismByProfessionPage() {
  return (
    <FrontendLayout>
    <main>
      {/* ✅ Hero */}
      <HeroInner
        title="Hospitality & Tourism"
        subtitle="Service • Experience • Travel • People"
        description="Hospitality and tourism careers focus on service, guest experience, travel planning, hotel operations, food & beverage, events and customer management—strongly driven by skills, communication and real-world exposure."
      />

      {/* ✅ Reuse existing sticky tabs system */}
      <EngineeringPageClient>
        {/* ✅ Section 1 */}
        <Section
          id="what-is"
          title="What is Hospitality"
          subtitle="Hospitality & tourism is about delivering great experiences—through service, operations, travel planning and customer care."
        >
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7">
              <div className="p-4 rounded-4 bg-white border h-100">
                <p className="text-muted mb-3">
                  Hospitality includes hotels, restaurants, resorts, events and service operations. Tourism includes travel
                  planning, tour operations, destination services and customer management. Careers are practical and people-focused—
                  your skills, attitude and experience matter a lot.
                </p>

                <div className="row g-3">
                  {[
                    ["Service mindset", "Helping people and handling guests professionally."],
                    ["Communication", "Spoken skills, English, confidence and grooming."],
                    ["Practical training", "Internships and on-field exposure are key."],
                    ["Fast growth with skills", "Performance and experience drive promotions."],
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
                    <Hotel size={20} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h5 className="fact-card-title mb-2">What you’ll commonly work on</h5>
                    <ul className="mb-0 ps-3">
                      {[
                        "Guest handling, bookings, front office operations",
                        "Restaurant service, banquets, catering workflows",
                        "Housekeeping and property maintenance standards",
                        "Tour planning, itinerary, coordination and support",
                        "Events, experiences and customer satisfaction",
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

          {/* mini stripe */}
          <div className="mt-4 p-4 rounded-4 bg-light border studentSupportTabV2">
            <b className="d-block mb-3">Skills that matter most in this field</b>
            <div className="supportMiniStats">
              <div className="supportMiniStat">
                <Users size={18} />
                <span>
                  <b>People</b> skills
                </span>
              </div>
              <div className="supportMiniStat">
                <Utensils size={18} />
                <span>
                  <b>Service</b> excellence
                </span>
              </div>
              <div className="supportMiniStat">
                <Plane size={18} />
                <span>
                  <b>Exposure</b> & internships
                </span>
              </div>
            </div>
          </div>
        </Section>

        {/* ✅ Section 2 */}
        <Section
          id="fit"
          title="Who should choose Hospitality"
          subtitle="Choose hospitality if you enjoy service, people interaction and practical learning with real-world exposure."
        >
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="p-4 rounded-4 bg-white border h-100">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <CheckCircle2 size={18} className="text-success" />
                  <b>This field may be right for you if</b>
                </div>
                <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                  <li>You enjoy interacting with people and handling guests</li>
                  <li>You can work in teams and follow service standards</li>
                  <li>You are comfortable with practical training and shifts</li>
                  <li>You want faster skill-based growth</li>
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
                  <li>You dislike customer-facing work and service interaction</li>
                  <li>You want only desk-based work with fixed routine</li>
                  <li>You avoid teamwork or practical environments</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ✅ Section 3 */}
        <Section id="pathways" title="Hospitality Pathways" subtitle="Multiple entry routes exist depending on your current stage.">
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
          subtitle="Hospitality and tourism has multiple domains—choose based on your interest and work style."
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
          title="Hospitality Courses"
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
          subtitle="Hospitality & tourism is offered through IHMs, universities and recognized private institutes. Compare practical labs, industry tie-ups and internships."
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
              We will highlight West Bengal’s key hospitality and tourism institutes in the dedicated Colleges section
              so students can compare national and state-level options confidently.
            </div>
          </div>
        </Section>

        {/* ✅ Section 8 */}
        <Section
          id="careers"
          title="Careers & Opportunities"
          subtitle="Hospitality and tourism careers are skill-driven—training + internships + attitude decide your growth."
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
                  <b>Executive</b> → Supervisor
                </span>
              </div>

              <div className="supportMiniStat">
                <MapPin size={18} />
                <span>
                  <b>Manager</b> / Operations lead
                </span>
              </div>
            </div>

            <div className="text-muted mt-2">
              Typical progression: Trainee/Intern → Executive → Supervisor → Assistant Manager → Manager / Operations Lead
            </div>
          </div>
        </Section>

        {/* ✅ Section 9 */}
        <Section
          id="higher"
          title="Higher Studies & Global Paths"
          subtitle="With experience and specialization, hospitality careers can grow into leadership and global opportunities."
        >
          <div className="row g-3 g-lg-4">
            {[
              {
                title: "Specialization & management roles",
                text: "Operations, revenue, sales & marketing, events, culinary leadership (role-based) grow with experience.",
              },
              {
                title: "Postgraduate study",
                text: "PG programs can support leadership growth and open better opportunities in large chains and corporate roles.",
              },
              {
                title: "Entrepreneurship",
                text: "Many professionals start cafés, catering, boutique stays, travel services, events business—skills + experience help.",
              },
              {
                title: "Global mobility",
                text: "Hospitality skills can open international opportunities; requirements vary by country and employer policies.",
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
            <EducationLoansScholarshipsTab stageLabel="Hospitality & Tourism" />
        </section>

        {/* ✅ Section 11 */}
        <section id="support" className="py-4 py-lg-5 bg-light">
          <div className="container">
            <StudentSupportTab stageLabel="Hospitality & Tourism" />
          </div>
        </section>
      </EngineeringPageClient>
    </main>
    </FrontendLayout>
  );
}
