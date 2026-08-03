"use client";

import React, { useMemo } from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CoursesTabsBar from "../CoursesTabsBar";
import {
  Layers3,
  Cpu,
  GraduationCap,
  ClipboardList,
  ShieldCheck,
  Users,
  Building2,
  FlaskConical,
  Briefcase,
  Factory,
  BadgeCheck,
} from "lucide-react";

/* -------------------------------------------------------------
   Tabs (shared across Engineering, Technology & IT)
------------------------------------------------------------- */

const TABS = [
  { id: "btech", label: "B.Tech / B.E", href: '/courses/btech-be-programs' },
  { id: "barch", label: "B.Arch", href: '/courses/barch' },
  { id: "mtech", label: "M.Tech", href: '/courses/mtech' },
  { id: "bca", label: "BCA", href: '/courses/bca' },
  { id: "bscc", label: "B.Sc Computer Science / IT", href: '/courses/bsc-computer-science-it' },
  { id: "mca", label: "MCA", href: '/courses/mca' },
  { id: "msc", label: "M.Sc Computer Science / IT", href: '/courses/msc' },
];

/* -------------------------------------------------------------
   UI Helpers
------------------------------------------------------------- */

function SectionHeader({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-4 text-center text-lg-start">
      <h2 className="sectionHeading mb-2 d-flex align-items-center gap-2 justify-content-center justify-content-lg-start">
        {Icon ? <Icon size={18} className="text-primary" /> : null}
        <span>{title}</span>
      </h2>
      {subtitle ? (
        <p className="sectionSub mb-0" style={{ maxWidth: "90ch" }}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function MiniDL({ items }) {
  return (
    <dl className="row small mb-0">
      {items.map((it, idx) => (
        <React.Fragment key={idx}>
          <dt className="col-5">{it.k}</dt>
          <dd className={`col-7 ${idx === items.length - 1 ? "mb-0" : "mb-2"}`}>
            {it.v}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

/* -------------------------------------------------------------
   PAGE
------------------------------------------------------------- */

export default function MTechPage({ courseContent }) {
  // Debug log
  console.log('=== MTechPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const mtechLadder = courseContent?.mtech_ladder || [];
  const whoShouldDo = courseContent?.who_should_do || [];
  const popularAreas = courseContent?.core_areas || courseContent?.specialisation_tracks || [];
  const workSettings = courseContent?.work_settings || [];
  const eligibilityNotes = courseContent?.eligibility_notes || [];
  const admissionNotes = courseContent?.admission_notes || [];
  const commonDocs = courseContent?.common_docs || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About M.Tech";
  const introDescription = courseContent?.intro_description || "M.Tech (Master of Technology) is a postgraduate engineering programme designed for deep specialisation in a chosen area. It focuses on advanced concepts, laboratory work, tools and strong project/research output.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "The biggest differentiator in M.Tech is your dissertation/project work — it becomes your portfolio and often decides your placement and long-term career direction.";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Degree type", v: "Postgraduate Engineering Degree" },
        { k: "Duration", v: "2 Years" },
        { k: "Eligibility", v: "B.Tech/B.E (relevant branch)" },
        { k: "Entry", v: "GATE / institute entrance (as applicable)" },
        { k: "Best for", v: "Specialisation • R&D • senior roles • teaching track" },
      ];

  // If no data found, show message
  if (mtechLadder.length === 0 && popularAreas.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner title="M.Tech (Master of Technology)" breadcrumb="Engineering, Technology & IT → M.Tech" />
        <CoursesTabsBar tabs={TABS} activeId="mtech" />
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
      <HeroInner title="M.Tech (Master of Technology)" breadcrumb="Engineering, Technology & IT → M.Tech" />

      {/* Tabs bar */}
      <CoursesTabsBar tabs={TABS} activeId="mtech" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <ShieldCheck size={18} className="text-primary" />
                <span>{introHeading}</span>
              </h2>

              <p className="sectionSub">{introDescription}</p>

              {introDescriptionSecondary && (
                <p className="sectionSub mb-0">{introDescriptionSecondary}</p>
              )}
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>
                <MiniDL items={snapshotItems} />
              </div>

              <div className="sectionCard bg-light border mt-3">
                <h3 className="h6 mb-2 d-flex align-items-center gap-2">
                  <BadgeCheck size={18} className="text-primary" />
                  <span>Reality check</span>
                </h3>
                <p className="small text-muted mb-0">
                  M.Tech helps most when you choose a niche and produce strong project output — not just by collecting the degree.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) M.TECH LADDER */}
      {mtechLadder.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="M.Tech ladder (how growth happens)"
              subtitle="M.Tech builds depth. Your dissertation + skills decide senior opportunities."
            />

            <div className="row g-3">
              {mtechLadder.map((step, index) => (
                <div key={index} className="col-12 col-md-6">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">{step.title}</h3>
                    {step.duration && (
                      <p className="small text-muted mb-1">{step.duration}</p>
                    )}
                    {step.focus && (
                      <p className="small text-muted mb-0">{step.focus}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
              Tip: Choose your dissertation topic like a job strategy — it should match the domain you want to work in.
            </div>
          </div>
        </section>
      )}

      {/* 3) WHO SHOULD DO M.TECH */}
      {whoShouldDo.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Who should do M.Tech"
              subtitle="M.Tech is most valuable when you have a clear goal."
            />

            <div className="row g-3">
              {whoShouldDo.map((item, index) => {
                // Get icon based on title or use default
                const getIcon = (title) => {
                  if (title.includes("specialisation") || title.includes("Specialisation")) return ShieldCheck;
                  if (title.includes("R&D") || title.includes("research")) return FlaskConical;
                  if (title.includes("teaching") || title.includes("Teaching") || title.includes("academic")) return GraduationCap;
                  if (title.includes("switching") || title.includes("Switching") || title.includes("domain")) return Briefcase;
                  return ShieldCheck;
                };
                const Icon = item.icon || getIcon(item.title);

                return (
                  <div key={index} className="col-12 col-md-6">
                    <div className="sectionCard h-100">
                      <h3 className="h6 mb-1 d-flex align-items-center gap-2">
                        <Icon size={16} className="text-primary" />
                        <span>{item.title}</span>
                      </h3>
                      <p className="small text-muted mb-0">{item.desc || item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4) POPULAR SPECIALISATIONS */}
      {popularAreas.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={FlaskConical}
              title="Popular M.Tech specialisations"
              subtitle="Options differ by institute. Use this list to understand the typical directions."
            />

            <div className="row g-3">
              {popularAreas.map((area, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">{area}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5) WHERE YOU WORK */}
      {workSettings.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={Factory}
              title="Where M.Tech graduates work"
              subtitle="Work depends on your niche, project output and skills."
            />

            <div className="row g-3">
              {workSettings.map((work, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("R&D") || title.includes("Product")) return FlaskConical;
                  if (title.includes("IT") || title.includes("Software") || title.includes("CS")) return Cpu;
                  if (title.includes("Core") || title.includes("Manufacturing") || title.includes("Power")) return Factory;
                  if (title.includes("Academics") || title.includes("Teaching") || title.includes("Training")) return GraduationCap;
                  return Briefcase;
                };
                const Icon = work.icon || getIcon(work.title);

                return (
                  <div key={index} className="col-12 col-md-6 col-lg-3">
                    <div className="sectionCard h-100">
                      <h3 className="h6 mb-1 d-flex align-items-center gap-2">
                        <Icon size={16} className="text-primary" />
                        <span>{work.title}</span>
                      </h3>
                      <p className="small text-muted mb-0">{work.desc || work.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6) ADMISSION & DOCUMENTS */}
      <section className="py-4 py-md-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Admission & documents"
            subtitle="Keep this checklist ready while applying."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <ul className="nitDarkList mb-0">
                  {(eligibilityNotes.length > 0 ? eligibilityNotes : [
                    "Usually after B.Tech/B.E or equivalent in a relevant branch (rules vary by institute).",
                    "Admission often through GATE and/or institute/state entrance processes.",
                    "Some programmes accept sponsored/working candidates (as per institute norms).",
                    "Branch alignment and minimum marks criteria vary—verify official notifications."
                  ]).map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>

                <div className="small text-muted mt-3">
                  <span className="fw-semibold text-white">Reminder:</span> rules vary by institute — verify official notification.
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5 d-flex">
              <div className="sectionCard bg-light border w-100">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Building2 size={18} className="text-primary" />
                  <span>Common documents</span>
                </h3>

                <ul className="list-unstyled small mb-0">
                  {(commonDocs.length > 0 ? commonDocs : [
                    "UG marksheets + degree/provisional certificate",
                    "GATE scorecard / entrance score (if applicable)",
                    "ID proof (Aadhaar etc.)",
                    "Photo + signature",
                    "Category/EWS/Income certificate (if applicable)",
                    "Domicile (if required)"
                  ]).map((doc, index) => (
                    <li key={index} className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7) BUILD YOUR PROFILE */}
      {buildProfile.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={Users}
              title="Build your profile during M.Tech"
              subtitle="M.Tech success is about depth, research attitude and strong project output."
            />

            <div className="row g-3">
              {buildProfile.map((item, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">Key focus</h3>
                    <p className="small text-muted mb-0">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
              Sensible shortcut: select a niche, build a strong dissertation, and align every semester project toward your target job domain.
            </div>
          </div>
        </section>
      )}
    </FrontendLayout>
  );
}