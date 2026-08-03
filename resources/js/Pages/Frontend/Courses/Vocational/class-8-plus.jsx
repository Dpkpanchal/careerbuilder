import React, { useState, useRef, useEffect } from "react";
import { Link, usePage } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, HelpCircle, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import VocationalTabsBar from "./VocationalTabsBar";

// ----------------------
// Tabs config
// ----------------------
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

const MORE_PAGES = [
  {
    label: "Class 10+ Vocational Trades",
    description: "Skill options available after completing Class 10.",
    href: "/courses/class-10-vocational-trades",
  },
  {
    label: "ITI & ITC Trades",
    description: "Industrial training routes for technical trades.",
    href: "/courses/iti-itc-trades",
  },
  {
    label: "MSME Tool Room Courses",
    description: "Specialised training in tool rooms and manufacturing.",
    href: "/courses/msme-tool-room-courses",
  },
];

// ----------------------
// Helper components
// ----------------------

function SectorGridExpandable({ sectors }) {
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
              <h2 className="sectionHeading mb-2">Explore Skill Areas After Class 8</h2>
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
            <h2 className="sectionHeading mb-2">Explore Skill Areas After Class 8</h2>
            <p className="sectionSub mb-0">
              Courses are grouped into broad sectors. Start by choosing an area that matches your interest and strengths.
            </p>
          </div>
        </div>

        <div className="row g-3 g-md-4">
          {sectors.map((sector) => {
            const isExpanded = !!expanded[sector.code];
            const hasMore = sector.courses && sector.courses.length > 4;
            const visibleCourses = isExpanded
              ? sector.courses
              : sector.courses ? sector.courses.slice(0, 4) : [];

            return (
              <div key={sector.code} className="col-12 col-md-6 col-lg-4">
                <div className="sectionCard expandCard h-100">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge badge-sm text-bg-primary">
                      {sector.code}
                    </span>
                  </div>
                  <h3 className="h6 mb-2">{sector.title}</h3>
                  <p className="small text-muted mb-3">{sector.description}</p>

                  <ul className="list-unstyled small mb-2">
                    {visibleCourses.map((course) => (
                      <li key={course} className="d-flex">
                        <span className="me-2">•</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>

                  {hasMore && (
                    <button
                      type="button"
                      className="expandTrigger btn btn-sm btn-link px-0 d-inline-flex align-items-center gap-1"
                      onClick={() => toggleSector(sector.code)}
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

function AdmissionInfoSection({ admissionHeading, admissionDescription, admissionInfo, nextSteps }) {
  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-7">
            <h2 className="sectionHeading mb-3">{admissionHeading || "Admission & Where to Study"}</h2>
            <p className="sectionSub">{admissionDescription || "Different institutes run vocational courses after Class 8. The exact process can vary, but the broad steps are similar."}</p>
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
              <h3 className="h6 mb-3">Simple Next Steps</h3>
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
            <h2 className="sectionHeading mb-2">Key Skill Education & Training Agencies</h2>
            <p className="sectionSub mb-0">
              These organisations run or support vocational training, skill development and specialised courses. Explore their official portals for detailed notifications.
            </p>
          </div>
        </div>

        <div className="row g-3 g-md-4">
          {skillAgencies.map((agency) => (
            <div key={agency.title} className="col-12 col-md-6">
              <div className="sectionCard h-100">
                <h3 className="h6 mb-1">{agency.title}</h3>
                <p className="small text-muted mb-3">{agency.subtitle}</p>
                <ul className="list-unstyled small mb-0">
                  {(agency.links || []).map((link) => (
                    <li key={link.url} className="mb-1">
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

function ExploreMorePagesSection() {
  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center mb-5">
            <h2 className="sectionHeading mb-2">Explore More Vocational Paths</h2>
            <p className="sectionSub mb-0">
              Continue exploring other vocational education options available after different academic levels.
            </p>
          </div>
        </div>

        <div className="row g-3 g-md-4">
          {MORE_PAGES.map((page) => (
            <div key={page.href} className="col-12 col-md-4">
              <Link href={page.href} className="text-decoration-none">
                <div className="sectionCard h-100 hover-shadow transition">
                  <h3 className="h6 mb-2">{page.label}</h3>
                  <p className="small text-muted mb-0">{page.description}</p>
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

export default function Class8VocationalPage({ courseContent }) {
  // Debug log to see what we're getting
  console.log('=== Class8VocationalPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const sectors = courseContent?.sectors || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "Vocational Options After Class 8";
  const introDescription = courseContent?.intro_description || "After completing Class 8, students can begin structured skill training alongside regular studies.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "";
  const admissionHeading = courseContent?.admission_heading || "Admission & Where to Study";
  const admissionDescription = courseContent?.admission_description || "";
  const admissionInfo = courseContent?.admission_info || [];
  const nextSteps = courseContent?.next_steps || [];
  const skillAgencies = courseContent?.skill_agencies || [];

  // Create snapshot data for quick info
  const snapshotData = {};
  if (Array.isArray(snapshot)) {
    snapshot.forEach(item => {
      if (item && typeof item === 'object' && 'key' in item && 'value' in item) {
        snapshotData[item.key] = item.value;
      }
    });
  }

  console.log('Snapshot Data:', snapshotData);
  console.log('Snapshot Data - Eligibility:', snapshotData['Eligibility']);

  // If no sectors found, show message
  if (sectors.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner
          title={introHeading}
          breadcrumb="Class 8th vocational courses"
        />
        <VocationalTabsBar tabs={TABS} activeId="class-8-plus" />
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
        title={introHeading}
        breadcrumb="Class 8th vocational courses"
      />

      <VocationalTabsBar tabs={TABS} activeId="class-8-plus" />

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
                {Array.isArray(snapshot) && snapshot.map((item, index) => (
                  <React.Fragment key={index}>
                    <dt className="col-5">{item.key}</dt>
                    <dd className="col-7 mb-2">{item.value}</dd>
                  </React.Fragment>
                ))}
              </dl>
            </div>
            </div>
          </div>
        </div>
      </section>

      <SectorGridExpandable sectors={sectors} />
      
      <AdmissionInfoSection 
        admissionHeading={admissionHeading}
        admissionDescription={admissionDescription}
        admissionInfo={admissionInfo}
        nextSteps={nextSteps}
      />
      
      <SkillAgenciesSection skillAgencies={skillAgencies} />
      
      {/* <ExploreMorePagesSection /> */}
    </FrontendLayout>
  );
}