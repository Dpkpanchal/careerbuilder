import React, { useState } from "react";
import { Link } from '@inertiajs/react';
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import HeroInner from "@/components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import VocationalTabsBar from "./VocationalTabsBar";

const TABS = [
  {
    id: "class-8-plus",
    label: "Class 8+ Vocational Trades",
    href: '/courses/class-8-vocational-trades',
  },
  {
    id: "class-10-plus",
    label: "Class 10+ Vocational Trades",
    href: '/courses/class-10-vocational-trades',
  },
  {
    id: "iti",
    label: "ITI & ITC Trades",
    href: '/courses/iti-itc-trades',
  },
  {
    id: "msme",
    label: "MSME Tool Room Courses",
    href: '/courses/msme-tool-room-courses',
  },
];

const MORE_PAGES_10 = [
  {
    label: "Class 8+ Vocational Trades",
    description: "Early skill options that begin right after Class 8.",
    href: "/courses/class-8-vocational-trades",
  },
  {
    label: "ITI & ITC Trades",
    description: "Formal industrial training routes after secondary level.",
    href: "/courses/iti-itc-trades",
  },
  {
    label: "MSME Tool Room Courses",
    description: "Industry-linked programmes in tooling and manufacturing.",
    href: "/courses/msme-tool-room-courses",
  },
];

// ----------------------
// Helper components
// ----------------------

function SectorGridExpandable10({ sectors }) {
  const [expanded, setExpanded] = useState({});

  const toggleSector = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // If no sectors provided, show a message
  if (!sectors || sectors.length === 0) {
    return (
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center mb-5">
              <h2 className="sectionHeading mb-2">Vocational Streams After Class 10</h2>
              <p className="sectionSub mb-0">No courses available at the moment. Please check back later.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-4 py-md-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center mb-5">
            <h2 className="sectionHeading mb-2">
              Vocational Streams After Class 10
            </h2>
            <p className="sectionSub mb-0">
              These Class 10+ programmes are typically 2-year courses at the
              higher secondary level in the vocational stream. Select a sector to
              see the types of trades offered.
            </p>
          </div>
        </div>

        <div className="row g-3 g-md-4">
          {sectors.map((sector) => {
            const sectorId = sector.code || sector.id || Math.random().toString();
            const isExpanded = !!expanded[sectorId];
            const courses = sector.courses || [];
            const hasMore = courses.length > 4;
            const visibleCourses = isExpanded
              ? courses
              : courses.slice(0, 4);

            return (
              <div key={sectorId} className="col-12 col-md-6 col-lg-4">
                <div className="sectionCard expandCard h-100">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge badge-sm text-bg-primary">
                      {sector.code || sector.id || 'Sector'}
                    </span>
                  </div>
                  <h3 className="h6 mb-2">{sector.title || 'Untitled Sector'}</h3>
                  <p className="small text-muted mb-3">{sector.description || ''}</p>

                  <ul className="list-unstyled small mb-2">
                    {visibleCourses.map((course, index) => (
                      <li key={index} className="d-flex">
                        <span className="me-2">•</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>

                  {hasMore && (
                    <button
                      type="button"
                      className="expandTrigger btn btn-sm btn-link px-0 d-inline-flex align-items-center gap-1"
                      onClick={() => toggleSector(sectorId)}
                    >
                      {isExpanded ? "Hide full list" : "View full list"}
                      {isExpanded ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AdmissionInfoSection10({ admissionHeading, admissionDescription, admissionInfo, nextSteps }) {
  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-7">
            <h2 className="sectionHeading mb-3">
              {admissionHeading || "How Class 10+ Vocational Admission Works"}
            </h2>
            <p className="sectionSub">
              {admissionDescription || "The exact process can vary from school to school, but the points below describe the typical pattern for vocational programmes after Class 10."}
            </p>
            <ul className="list-unstyled mb-3 small">
              {(admissionInfo || []).map((item, idx) => (
                <li key={idx} className="d-flex mb-2">
                  <span className="me-2 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-lg-5">
            <div className="sectionCard bg-light border">
              <h3 className="h6 mb-3">Simple Planning Checklist</h3>
              <ol className="small ps-3 mb-3">
                {(nextSteps || []).map((step, idx) => (
                  <li key={idx} className="mb-1">{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillAgenciesSection({ skillAgencies }) {
  if (!skillAgencies || skillAgencies.length === 0) {
    return null;
  }

  return (
    <section className="py-4 py-md-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center mb-5">
            <h2 className="sectionHeading mb-2">
              Skill Education & Training Agencies
            </h2>
            <p className="sectionSub mb-0">
              Use these official portals to track notifications, institute lists
              and schemes related to vocational and skill-based education.
            </p>
          </div>
        </div>

        <div className="row g-3 g-md-4">
          {skillAgencies.map((agency, index) => (
            <div key={index} className="col-12 col-md-6">
              <div className="sectionCard h-100">
                <h3 className="h6 mb-1">{agency.title}</h3>
                <p className="small text-muted mb-3">{agency.subtitle}</p>
                <ul className="list-unstyled small mb-0">
                  {(agency.links || []).map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-1">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="infoLink d-inline-flex align-items-center gap-1"
                      >
                        <ExternalLink size={14} />
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExploreMorePagesSection10() {
  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center mb-5">
            <h2 className="sectionHeading mb-2">Continue Exploring Courses</h2>
            <p className="sectionSub mb-0">
              You can combine Class 10+ vocational options with other paths such
              as ITI, tool room courses and short-term skill programmes.
            </p>
          </div>
        </div>

        <div className="row g-3 g-md-4 justify-content-center">
          {MORE_PAGES_10.map((item) => (
            <div key={item.href} className="col-12 col-md-6 col-lg-4">
              <Link href={item.href} className="text-decoration-none">
                <div className="sectionCard h-100 hover-shadow transition">
                  <h3 className="h6 mb-2">{item.label}</h3>
                  <p className="small text-muted mb-0">{item.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------
// Main Page Component
// ----------------------

export default function Class10VocationalPage({ courseContent }) {
  // Debug log to see what we're getting
  console.log('=== Class10VocationalPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const sectors = courseContent?.sectors || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "Why Choose Vocational Stream After Class 10?";
  const introDescription = courseContent?.intro_description || "After Class 10, students can move into a vocational higher secondary stream instead of the regular academic route. This option focuses more on hands-on skills, workshops and real workplace exposure, while still keeping the door open for further study later.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "The streams below give a sense of the kind of work each area leads to, so that students and parents can make a confident, informed choice.";
  const admissionHeading = courseContent?.admission_heading || "How Class 10+ Vocational Admission Works";
  const admissionDescription = courseContent?.admission_description || "The exact process can vary from school to school, but the points below describe the typical pattern for vocational programmes after Class 10.";
  const admissionInfo = courseContent?.admission_info || [];
  const nextSteps = courseContent?.next_steps || [];
  const skillAgencies = courseContent?.skill_agencies || [];

  // Convert snapshot array to object for easy access
  const snapshotData = {};
  if (Array.isArray(snapshot)) {
    snapshot.forEach(item => {
      if (item && typeof item === 'object' && 'key' in item && 'value' in item) {
        snapshotData[item.key] = item.value;
      }
    });
  }

  // If no sectors found, show message
  if (sectors.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner
          title="Class 10+ Vocational & Skill Courses"
          breadcrumb="Class 10th vocational courses"
        />
        <VocationalTabsBar tabs={TABS} activeId="class-10-plus" />
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
        title="Class 10+ Vocational & Skill Courses"
        breadcrumb="Class 10th vocational courses"
      />

      <VocationalTabsBar tabs={TABS} activeId="class-10-plus" />

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
                      <dd className="col-7 mb-2">Passed Class 10</dd>

                      <dt className="col-5">Duration</dt>
                      <dd className="col-7 mb-2">
                        Usually 2 years (equivalent to higher secondary in vocational stream)
                      </dd>

                      <dt className="col-5">Main Streams</dt>
                      <dd className="col-7 mb-2">
                        Business & Commerce, Engineering & Technology, Agriculture, Home Science
                      </dd>

                      <dt className="col-5">Typical Outcomes</dt>
                      <dd className="col-7 mb-0">
                        Early employability, eligibility for further vocational / technical study, and a strong foundation for skill-based careers.
                      </dd>
                    </>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectorGridExpandable10 sectors={sectors} />
      
      <AdmissionInfoSection10 
        admissionHeading={admissionHeading}
        admissionDescription={admissionDescription}
        admissionInfo={admissionInfo}
        nextSteps={nextSteps}
      />
      
      <SkillAgenciesSection skillAgencies={skillAgencies} />
      
      {/* <ExploreMorePagesSection10 /> */}
    </FrontendLayout>
  );
}
