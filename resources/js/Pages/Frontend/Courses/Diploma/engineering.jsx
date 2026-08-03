import React from "react";
import { Link } from '@inertiajs/react';
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
// Icon mapping for branch names
// ------------------------------------------------------------------

const ICON_MAP = {
  "Civil Engineering": Building2,
  "Mechanical Engineering": Cog,
  "Mechanical Engineering (Production)": Factory,
  "Electrical Engineering": Zap,
  "Electrical & Electronics Engineering": Bolt,
  "Electrical Engineering (Industrial Control)": Settings2,
  "Electrical Power System": BatteryCharging,
  "Automobile Engineering": CarFront,
  "Chemical Engineering": Beaker,
  "Agricultural Engineering": Sprout,
  "Mining Engineering": Mountain,
  "Mine Surveying": Map,
  "Metallurgical Engineering": FlaskConical,
  "Electronics & Telecommunication Engineering": Radio,
  "Electronics & Instrumentation Engineering": Gauge,
  "Instrumentation & Control Engineering": SlidersHorizontal,
  "Medical Electronics (Post Diploma – 1½ Years)": HeartPulse,
  "Food Processing Technology": Utensils,
  "Footwear Technology": Footprints,
  "Leather Goods Technology": Layers,
  "Packaging Technology": Package,
  "Printing Technology": Printer,
  "Photography": Camera,
  "Survey Engineering": LocateFixed,
  "GIS & GPS Technology": Globe,
  "Petrochemical Engineering (Post Diploma – 1½ Years)": TestTube2,
};

function getIconForBranch(name) {
  return ICON_MAP[name] || Cog; // fallback icon
}

// ------------------------------------------------------------------
// Helper components
// ------------------------------------------------------------------

function BranchGroup({ group }) {
  return (
    <section className="mb-0 mt-4 mt-lg-5 border-bottom pb-5">
      <div className="row">
        <div className="col-lg-6">
          <h3 className="h5 mb-2">{group.title}</h3>
          <p className="text-muted mb-3">{group.caption}</p>
        </div>
      </div>

      <div className="row mt-3 g-3">
        {group.branches && group.branches.map((b) => {
          const Icon = getIconForBranch(b.name);
          return (
            <div key={b.name} className="col-6 col-md-4 col-lg-4 d-flex pe-lg-4">
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

function PostDiplomaSection({ postDiploma }) {
  if (!postDiploma || postDiploma.length === 0) {
    return null;
  }

  return (
    <div className="container mt-lg-5 mt-4">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="sectionHeading mb-2">Post-Diploma Upgrade Options</h2>
          <p className="sectionSub mb-0">
            After completing a regular diploma, students can move to specialised
            post-diploma programs mentioned in the guidance material.
          </p>
        </div>
      </div>
      <div className="row g-3 mt-4 g-md-4">
        {postDiploma.map((item, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="sectionCard h-100">
              <h3 className="h6 mb-1">{item.name}</h3>
              {item.duration && (
                <p className="small text-muted mb-2">
                  Duration: {item.duration}
                </p>
              )}
              {item.path && (
                <p className="small mb-0">
                  <span className="text-muted">Pathway: </span>
                  {item.path}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PolytechnicLinksSection({ polytechnicLinks }) {
  if (!polytechnicLinks || polytechnicLinks.length === 0) {
    return null;
  }

  return (
    <ul className="list-unstyled small mb-0">
      {polytechnicLinks.map((item, index) => (
        <li key={index} className="mb-2">
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
  );
}

// ------------------------------------------------------------------
// Main Page
// ------------------------------------------------------------------

export default function DiplomaEngineeringPage({ courseContent }) {
  // Debug log to see what we're getting
  console.log('=== DiplomaEngineeringPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const branchGroups = courseContent?.branch_groups || [];
  const postDiploma = courseContent?.post_diploma || [];
  const polytechnicLinks = courseContent?.polytechnic_links || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "What Is a Diploma in Engineering (Polytechnic)?";
  const introDescription = courseContent?.intro_description || "Diploma polytechnic courses are 3-year professional programs after Class 10 that prepare students for technical jobs and further study. This route is especially suitable for students who prefer practical learning and early employability instead of a purely academic path.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "Entry is generally through JEXPO (for first-year admission) or VOCLET (for direct second-year entry) in West Bengal, with government and self-financed polytechnics spread across the state.";
  const admissionHeading = courseContent?.admission_heading || "Admission: JEXPO & VOCLET Route";
  const admissionDescription = courseContent?.admission_description || "";
  const admissionInfo = courseContent?.admission_info || [];

  // Convert snapshot array to object for easy access
  const snapshotData = {};
  if (Array.isArray(snapshot)) {
    snapshot.forEach(item => {
      if (item && typeof item === 'object' && 'key' in item && 'value' in item) {
        snapshotData[item.key] = item.value;
      }
    });
  }

  // If no data found, show message
  if (branchGroups.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner
          title="Diploma in Engineering (Polytechnic)"
          breadcrumb="Diploma in Engineering (Polytechnic)"
        />
        <VocationalTabsBar tabs={DIPLOMA_TABS} activeId="engineering" />
        <div className="container py-5">
          <div className="alert alert-warning">
            <h4>No courses available</h4>
            <p>We're currently updating our course listings. Please check back later.</p>
          </div>
        </div>
      </FrontendLayout>
    );
  }

  return (
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
              <h2 className="sectionHeading mb-3">{introHeading}</h2>
              <p className="sectionSub">{introDescription}</p>
              {introDescriptionSecondary && (
                <p className="sectionSub mb-0">{introDescriptionSecondary}</p>
              )}
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3">Quick Snapshot</h3>
                <dl className="row small mb-0">
                  {snapshot && snapshot.length > 0 ? (
                    snapshot.map((item, index) => (
                      <React.Fragment key={index}>
                        <dt className="col-5">{item.key}</dt>
                        <dd className="col-7 mb-2">{item.value}</dd>
                      </React.Fragment>
                    ))
                  ) : (
                    // Fallback content if no snapshot data
                    <>
                      <dt className="col-5">Eligibility</dt>
                      <dd className="col-7 mb-2">
                        Passed Class 10 (Madhyamik or equivalent), as per Council rules.
                      </dd>

                      <dt className="col-5">Duration</dt>
                      <dd className="col-7 mb-2">Usually 3 years for diploma.</dd>

                      <dt className="col-5">Entry Routes</dt>
                      <dd className="col-7 mb-2">
                        JEXPO (1st year) and VOCLET (2nd year lateral for eligible vocational / ITI candidates).
                      </dd>

                      <dt className="col-5">Institutions</dt>
                      <dd className="col-7 mb-2">
                        Government and self-financed polytechnic institutions under the State Council.
                      </dd>

                      <dt className="col-5">Next Steps</dt>
                      <dd className="col-7 mb-0">
                        Technical jobs, post-diploma specialisation or progression to higher studies as per rules.
                      </dd>
                    </>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch groups */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
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

          {branchGroups.map((group, index) => (
            <BranchGroup key={index} group={group} />
          ))}
        </div>
        
        {/* Post Diploma */}
        <PostDiplomaSection postDiploma={postDiploma} />
      </section>

      {/* Admission & Polytechnic links */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">{admissionHeading}</h2>
              {admissionDescription && (
                <p className="sectionSub">{admissionDescription}</p>
              )}
              <ul className="list-unstyled small mb-0">
                {(admissionInfo || []).map((item, index) => (
                  <li key={index} className="d-flex mb-2">
                    <span className="me-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
                {admissionInfo.length === 0 && (
                  <>
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
                  </>
                )}
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
                <PolytechnicLinksSection polytechnicLinks={polytechnicLinks} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </FrontendLayout>
  );
}
