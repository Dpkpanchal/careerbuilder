import React from "react";
import { Link, usePage } from '@inertiajs/react';
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import VocationalTabsBar from "./VocationalTabsBar";
import {
  Building2,
  Cog,
  Factory,
  Zap,
  Bolt,
  Settings2,
  BatteryCharging,
  CarFront,
  Beaker,
  Sprout,
  Mountain,
  Map,
  FlaskConical,
  Radio,
  Gauge,
  SlidersHorizontal,
  HeartPulse,
  Utensils,
  Footprints,
  Layers,
  Package,
  Printer,
  Camera,
  LocateFixed,
  Globe,
  TestTube2,
  ExternalLink,
} from "lucide-react";

// ------------------------------------------------------------------
// Diploma sub-tabs
// ------------------------------------------------------------------

const DIPLOMA_TABS = [
  {
    id: "engineering",
    label: "Diploma in Engineering",
    href: '/courses/diploma-in-engineering-polytechnic',
  },
  {
    id: "paramedical",
    label: "Diploma in Paramedical",
    href: '/courses/diploma-in-paramedical',
  },
  {
    id: "pharmacy",
    label: "Diploma in Pharmacy (D.Pharm)",
    href: '/courses/diploma-in-pharmacy-dpharm',
  },
  {
    id: "it",
    label: "Diploma in Computer / IT",
    href: '/courses/diploma-in-computer-it',
  },
];

// ------------------------------------------------------------------
// Branch data (from Career Book) + icons
// ------------------------------------------------------------------

const BRANCH_GROUPS = [
  {
    id: "core",
    title: "Core Engineering Diplomas",
    caption:
      "Classic engineering branches with strong demand in construction, manufacturing, power and infrastructure.",
    branches: [
      { name: "Civil Engineering", icon: Building2 },
      { name: "Mechanical Engineering", icon: Cog },
      { name: "Mechanical Engineering (Production)", icon: Factory },
      { name: "Electrical Engineering", icon: Zap },
      { name: "Electrical & Electronics Engineering", icon: Bolt },
      {
        name: "Electrical Engineering (Industrial Control)",
        icon: Settings2,
      },
      { name: "Electrical Power System", icon: BatteryCharging },
      { name: "Automobile Engineering", icon: CarFront },
      { name: "Chemical Engineering", icon: Beaker },
      { name: "Agricultural Engineering", icon: Sprout },
      { name: "Mining Engineering", icon: Mountain },
      { name: "Mine Surveying", icon: Map },
      { name: "Metallurgical Engineering", icon: FlaskConical },
    ],
  },
  {
    id: "electronics-instrumentation",
    title: "Electronics, Communication & Instrumentation",
    caption:
      "For students interested in circuits, communication systems, industrial control and measurement.",
    branches: [
      {
        name: "Electronics & Telecommunication Engineering",
        icon: Radio,
      },
      {
        name: "Electronics & Instrumentation Engineering",
        icon: Gauge,
      },
      {
        name: "Instrumentation & Control Engineering",
        icon: SlidersHorizontal,
      },
      {
        name: "Medical Electronics (Post Diploma – 1½ Years)",
        icon: HeartPulse,
      },
    ],
  },
  {
    id: "applied-tech",
    title: "Applied Technology & Allied Fields",
    caption:
      "Application-focused programs that combine engineering with specific industries and products.",
    branches: [
      { name: "Food Processing Technology", icon: Utensils },
      { name: "Footwear Technology", icon: Footprints },
      { name: "Leather Goods Technology", icon: Layers },
      { name: "Packaging Technology", icon: Package },
      { name: "Printing Technology", icon: Printer },
      { name: "Photography", icon: Camera },
      { name: "Survey Engineering", icon: LocateFixed },
      { name: "GIS & GPS Technology", icon: Globe },
      {
        name: "Petrochemical Engineering (Post Diploma – 1½ Years)",
        icon: TestTube2,
      },
    ],
  },
];

const POST_DIPLOMA = [
  {
    name: "Post Diploma in Medical Electronics",
    duration: "1½ Years",
    path: "After relevant diploma in electronics / instrumentation related fields.",
  },
  {
    name: "Post Diploma in Petrochemical Engineering",
    duration: "1½ Years",
    path: "After suitable base diploma in chemical / allied engineering fields.",
  },
];

const POLYTECHNIC_LINKS = [
  {
    label: "List of Polytechnic Institutions (as per Council)",
    url: "http://wbscte.net/info/list-of-politichnic.html",
  },
  {
    label:
      "West Bengal State Council of Technical & Vocational Education & Skill Development",
    url: "http://www.wbscvt.net/#",
  },
];

// ------------------------------------------------------------------
// Helper components
// ------------------------------------------------------------------

function BranchGroup({ group }) {
  return (
    <section className="mb-0 mt-4 mt-lg-5 border-bottom pb-5">
      <div className="row  ">
          <div className="col-lg-6">
      <h3 className="h5 mb-2">{group.title}</h3>
      <p className=" text-muted mb-3">{group.caption}</p>
      </div>
      </div>

      <div className="row mt-3 g-3 ">
        {group.branches.map((b) => {
          const Icon = b.icon;
          return (
            <div key={b.name} className="col-6 col-md-4 col-lg-4 d-flex pe-lg-4 ">
              <div className="branchCardNew w-100 d-flex gap-2">
                <Icon
                  size={18}
                  strokeWidth={1.8}
                  className="text-primary flex-shrink-0"
                />
                <div className="branchText">{b.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function PostDiplomaSection() {
  return (
      <div className="container mt-lg-5 mt-4">
        <div className="row  ">
          <div className="col-lg-6">
          <h2 className="sectionHeading mb-2">Post-Diploma Upgrade Options</h2>
          <p className="sectionSub mb-0">
            After completing a regular diploma, students can move to specialised
            post-diploma programs mentioned in the guidance material.
          </p>
          </div>
        </div>
        <div className="row g-3 mt-4 g-md-4 ">
          {POST_DIPLOMA.map((item) => (
            <div key={item.name} className="col-12 col-md-6 col-lg-4 d-flex">
              <div className="sectionCard h-100">
                <h3 className="h6 mb-1">{item.name}</h3>
                <p className="small text-muted mb-2">
                  Duration: {item.duration}
                </p>
                <p className="small mb-0">
                  <span className="text-muted">Pathway: </span>
                  {item.path}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

// ------------------------------------------------------------------
// Main Page
// ------------------------------------------------------------------

export default function DiplomaEngineeringPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Diploma in Engineering (Polytechnic)"
        breadcrumb="Diploma in Engineering (Polytechnic)"
      />

      <VocationalTabsBar tabs={DIPLOMA_TABS} activeId="engineering" />

      {/* Intro + snapshot */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">
                What Is a Diploma in Engineering (Polytechnic)?
              </h2>
              <p className="sectionSub">
                Diploma polytechnic courses are 3-year professional programs
                after Class 10 that prepare students for technical jobs and
                further study. This route is especially suitable for students
                who prefer practical learning and early employability instead of
                a purely academic path.
              </p>
              <p className="sectionSub mb-0">
                Entry is generally through{" "}
                <strong>JEXPO</strong> (for first-year admission) or{" "}
                <strong>VOCLET</strong> (for direct second-year entry) in West
                Bengal, with government and self-financed polytechnics spread
                across the state.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3">Quick Snapshot</h3>
                <dl className="row small mb-0">
                  <dt className="col-5">Eligibility</dt>
                  <dd className="col-7 mb-2">
                    Passed Class 10 (Madhyamik or equivalent), as per Council
                    rules.
                  </dd>

                  <dt className="col-5">Duration</dt>
                  <dd className="col-7 mb-2">Usually 3 years for diploma.</dd>

                  <dt className="col-5">Entry Routes</dt>
                  <dd className="col-7 mb-2">
                    JEXPO (1st year) and VOCLET (2nd year lateral for eligible
                    vocational / ITI candidates).
                  </dd>

                  <dt className="col-5">Institutions</dt>
                  <dd className="col-7 mb-2">
                    Government and self-financed polytechnic institutions under
                    the State Council.
                  </dd>

                  <dt className="col-5">Next Steps</dt>
                  <dd className="col-7 mb-0">
                    Technical jobs, post-diploma specialisation or progression
                    to higher studies as per rules.
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch groups */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="row justify-content-center ">
          <div className="col-lg-7 text-center mb-4">
            <h2 className="sectionHeading mb-2">
              Diploma Engineering Branches
            </h2>
            <p className="sectionSub mb-0">
              These branches appear in the diploma / polytechnic section of the
              guidance and are offered in different combinations at various
              polytechnic institutes.
            </p>
            </div>
          </div>

          {BRANCH_GROUPS.map((group) => (
            <BranchGroup key={group.id} group={group} />
          ))}
        </div>
        {/* Post Diploma */}
      <PostDiplomaSection />
      </section>

      {/* Admission & Polytechnic links */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">
                Admission: JEXPO & VOCLET Route
              </h2>
              <ul className="list-unstyled small mb-0">
                <li className="d-flex mb-2">
                  <span className="me-2 mt-1">•</span>
                  <span>
                    <strong>JEXPO</strong> is the common entrance route for
                    first-year diploma seats in polytechnic institutes after
                    Class 10.
                  </span>
                </li>
                <li className="d-flex mb-2">
                  <span className="me-2 mt-1">•</span>
                  <span>
                    <strong>VOCLET</strong> allows eligible vocational / ITI /
                    related candidates to enter directly into the{" "}
                    <strong>second year</strong> of selected diploma courses.
                  </span>
                </li>
                <li className="d-flex mb-2">
                  <span className="me-2 mt-1">•</span>
                  <span>
                    Seat distribution between government and self-financed
                    polytechnics follows rules decided by the State Council.
                    Exact details and yearly updates are published through
                    official notifications.
                  </span>
                </li>
                <li className="d-flex mb-2">
                  <span className="me-2 mt-1">•</span>
                  <span>
                    Students should follow Council/Board announcements,
                    admission booklets and official websites for the latest
                    schedule, eligibility and reservation rules.
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3">Polytechnic Institution Information</h3>
                <p className="small text-muted mb-3">
                  The guidance gives a link to the consolidated list of
                  polytechnic institutions. Use it to check which branches are
                  available at which institute.
                </p>
                <ul className="list-unstyled small mb-0">
                  {POLYTECHNIC_LINKS.map((item) => (
                    <li key={item.url} className="mb-2">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="infoLink d-inline-flex align-items-center gap-1"
                      >
                        <ExternalLink size={14} />
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Explore other diploma paths */}
      <section className="py-5 spotlightSection">
        <div className="container py-lg-4">

          <div className="mb-4 mb-lg-5 text-center">
            <h2 className="sectionHeading text-white mb-2">
              Explore Other Diploma Paths
            </h2>
            <p className="sectionSub text-light mb-0">
              Compare parallel diploma programs to choose the right technical route.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            
            <div className="col-12 col-md-4">
              <Link href="/courses/diploma/paramedical" className="text-decoration-none">
                <div className="glassCard premiumHover h-100">
                  <h3 className="h5 mb-2 fw-medium text-white pharmacyTitleGradient">Diploma in Paramedical</h3>
                  <p className="small text-light mb-0 ">
                    Diagnostic, lab and health support programs.
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-4">
              <Link href="/courses/diploma/pharmacy" className="text-decoration-none">
                <div className="glassCard premiumHover h-100">
                  <h3 className="h5 mb-2 fw-medium text-white pharmacyTitleGradient">Diploma in Pharmacy (D.Pharm)</h3>
                  <p className="small text-light mb-0">
                    Two-year foundation for pharmacy careers.
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-4">
              <Link href="/courses/diploma/it" className="text-decoration-none">
                <div className="glassCard premiumHover h-100">
                  <h3 className="h5 mb-2 fw-medium text-white pharmacyTitleGradient">Diploma in Computer / IT</h3>
                  <p className="small text-light mb-0">
                    Software, IT and multimedia technical training.
                  </p>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
