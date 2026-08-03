"use client";

import React, { useMemo } from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import CoursesTabsBar from "../CoursesTabsBar";
import {
  Layers3,
  GraduationCap,
  ClipboardList,
  ShieldCheck,
  Building2,
  Users,
  Briefcase,
  BadgeCheck,
  Calculator,
  Landmark,
  FileText,
  LineChart,
} from "lucide-react";

/* -------------------------------------------------------------
   Tabs (Business & Management) – SAME set (do not change)
------------------------------------------------------------- */

const TABS = [
  { id: "bcom", label: "B.Com", href: '/courses/bcom-allied-programs' },
  { id: "mcom", label: "M.Com", href: '/courses/mcom' },
  { id: "bba", label: "BBA", href: '/courses/bba' },
  { id: "mba", label: "MBA / PGDM", href: '/courses/mba-pgdm' },
  { id: "finance", label: "Finance / Taxation / Accounting", href: '/courses/finance' },
  { id: "pro", label: "CA / CS / CMA", href: '/courses/finance-taxation-accounting' },
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

export default function FinanceAccountingPage({ courseContent }) {
  // Debug log
  console.log('=== FinanceAccountingPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const financeLadder = courseContent?.finance_ladder || [];
  const courseOptions = courseContent?.course_options || [];
  const typicalRoles = courseContent?.typical_roles || [];
  const workSettings = courseContent?.work_settings || [];
  const eligibilityNotes = courseContent?.eligibility_notes || [];
  const commonDocs = courseContent?.common_docs || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About this career domain";
  const introDescription = courseContent?.intro_description || "Finance, Taxation and Accounting form the backbone of every business. These roles focus on managing money, compliance, reporting, analysis and statutory responsibilities.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "Career growth in this domain depends more on practical skills, accuracy and certifications than just academic degrees.";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "Career domain", v: "Finance • Taxation • Accounting" },
        { k: "Entry routes", v: "B.Com / M.Com / BBA / MBA + skills" },
        { k: "Best for", v: "Accounts • Tax • Banking • Finance roles" },
        { k: "Growth drivers", v: "Skills + accuracy + certifications" },
        { k: "Reality check", v: "Practical exposure > degree name" },
      ];

  // If no data found, show message
  if (financeLadder.length === 0 && courseOptions.length === 0 && typicalRoles.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner
          title="Finance / Taxation / Accounting"
          breadcrumb="Business & Management → Finance / Taxation / Accounting"
        />
        <CoursesTabsBar tabs={TABS} activeId="finance" />
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
        title="Finance / Taxation / Accounting"
        breadcrumb="Business & Management → Finance / Taxation / Accounting"
      />
      <CoursesTabsBar tabs={TABS} activeId="finance" />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <Calculator size={18} className="text-primary" />
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
                  Companies hire for skills, accuracy and exposure — not just degree titles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) CAREER PATHS (FINANCE LADDER) */}
      {financeLadder.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="Major career paths"
              subtitle="Most roles fall into one of these practical tracks."
            />

            <div className="row g-3">
              {financeLadder.map((path, index) => {
                // Get icon based on title
                const getIcon = (title) => {
                  if (title.includes("Accounting")) return Calculator;
                  if (title.includes("Taxation")) return FileText;
                  if (title.includes("Finance")) return LineChart;
                  return Calculator;
                };
                const Icon = path.icon || getIcon(path.title);

                return (
                  <div key={index} className="col-12 col-md-4">
                    <div className="sectionCard h-100">
                      <h3 className="h6 mb-1 d-flex align-items-center gap-2">
                        <Icon size={16} className="text-primary" />
                        <span>{path.title}</span>
                      </h3>
                      <p className="small text-muted mb-1">{path.focus}</p>
                      {path.examples && (
                        <p className="small text-muted mb-0">
                          <strong>Examples:</strong> {path.examples}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 3) COURSES & ROUTES */}
      {courseOptions.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Courses & entry routes"
              subtitle="Different learning routes lead to finance/accounting roles."
            />

            <div className="row g-3">
              {courseOptions.map((course, index) => (
                <div key={index} className="col-12 col-md-6">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">{course.title}</h3>
                    <p className="small text-muted mb-0">{course.desc || course.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4) ROLES & WORK SETTINGS */}
      {(typicalRoles.length > 0 || workSettings.length > 0) && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={Briefcase}
              title="Roles & work environments"
              subtitle="Work settings vary by organisation size and role type."
            />

            <div className="row g-4 align-items-stretch">
              {typicalRoles.length > 0 && (
                <div className="col-12 col-lg-6 d-flex">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-3">Typical roles</h3>
                    <ul className="list-unstyled small mb-0">
                      {typicalRoles.map((role, index) => (
                        <li key={index} className="mb-2 d-flex">
                          <span className="me-2">•</span>
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {workSettings.length > 0 && (
                <div className="col-12 col-lg-6 d-flex">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-3">Where you work</h3>
                    <div className="row g-3">
                      {workSettings.map((work, index) => {
                        // Get icon based on title
                        const getIcon = (title) => {
                          if (title.includes("Accounts") || title.includes("Finance")) return Calculator;
                          if (title.includes("CA") || title.includes("Tax")) return FileText;
                          if (title.includes("Bank") || title.includes("Financial Institutions")) return Landmark;
                          if (title.includes("SME") || title.includes("Startups")) return Briefcase;
                          return Briefcase;
                        };
                        const Icon = work.icon || getIcon(work.title);

                        return (
                          <div key={index} className="col-12">
                            <div className="sectionCard bg-light border">
                              <h4 className="h6 mb-1 d-flex align-items-center gap-2">
                                <Icon size={16} className="text-primary" />
                                <span>{work.title}</span>
                              </h4>
                              <p className="small text-muted mb-0">{work.desc || work.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 5) ADMISSION & PROFILE */}
      <section className="py-4 py-md-5">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Eligibility & profile building"
            subtitle="Focus on skills that directly improve employability."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex">
              <div className="nitDarkGlassBox w-100">
                <ul className="nitDarkList mb-0">
                  {(eligibilityNotes.length > 0 ? eligibilityNotes : [
                    "Open to commerce graduates and management graduates; some roles accept other streams with skills.",
                    "Accounting/tax roles strongly prefer commerce background or relevant certifications.",
                    "Professional courses have separate eligibility and exam structures."
                  ]).map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
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
                    "Academic marksheets & degree certificates",
                    "ID proof (Aadhaar etc.)",
                    "Resume with skills/certifications",
                    "Internship / experience certificates (if any)"
                  ]).map((doc, index) => (
                    <li key={index} className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {buildProfile.length > 0 && (
              <div className="col-12">
                <div className="sectionCard">
                  <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                    <Users size={18} className="text-primary" />
                    <span>Build your profile</span>
                  </h3>

                  <div className="row g-3">
                    {buildProfile.map((item, index) => (
                      <div key={index} className="col-12 col-md-6 col-lg-4">
                        <div className="sectionCard bg-light border h-100">
                          <h4 className="h6 mb-1">Key focus</h4>
                          <p className="small text-muted mb-0">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-muted small mt-3" style={{ maxWidth: "95ch" }}>
                    Sensible shortcut: Excel + Tally + GST basics + internship = fastest entry into accounts/tax roles.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </FrontendLayout>
  );
}