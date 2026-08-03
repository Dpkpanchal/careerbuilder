"use client";

import React, { useMemo } from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import {
  Layers3,
  HeartPulse,
  GraduationCap,
  ClipboardList,
  ShieldCheck,
  Hospital,
  Users,
  Building2,
  Activity,
  BadgeCheck,
  BookOpen,
  Stethoscope,
  Sparkles,
} from "lucide-react";

/* -------------------------------------------------------------
   UI helpers (match your portal patterns)
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
          <dd className={`col-7 ${idx === items.length - 1 ? "mb-0" : "mb-2"}`}>{it.v}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

/* -------------------------------------------------------------
   PAGE
------------------------------------------------------------- */

export default function AlliedHealthSciencesPage({ courseContent }) {
  // Debug log
  console.log('=== AlliedHealthSciencesPage Data ===');
  console.log('Course Content:', courseContent);

  // Extract data from courseContent
  const alliedDomains = courseContent?.allied_domains || [];
  const ladder = courseContent?.ladder || [];
  const eligibilityNotes = courseContent?.eligibility_notes || [];
  const workSettings = courseContent?.work_settings || [];
  const buildProfile = courseContent?.build_profile || [];
  const snapshot = courseContent?.snapshot || [];
  const introHeading = courseContent?.intro_heading || "About Allied Health Sciences";
  const introDescription = courseContent?.intro_description || "Allied Health Sciences are professional healthcare careers that support diagnosis, treatment, surgery, rehabilitation and patient-care systems. These careers work closely with doctors and nurses, and are essential in hospitals, labs, imaging centres, OT and rehab settings.";
  const introDescriptionSecondary = courseContent?.intro_description_secondary || "This page gives a clear map for the most popular allied health domains: Physiotherapy, Medical Lab Technology (MLT), Radiology/Imaging, and OT/Anaesthesia Technology.";

  // Create snapshot items
  const snapshotItems = snapshot.length > 0 
    ? snapshot.map(item => ({ k: item.key, v: item.value }))
    : [
        { k: "What it covers", v: "Physio • Lab (MLT) • Imaging • OT/Anaesthesia" },
        { k: "Entry routes", v: "Diploma → UG Degree → PG Specialisation" },
        { k: "Work settings", v: "Hospitals • Labs/Imaging • Rehab • Training" },
        { k: "Best strategy", v: "Pick one domain and build deep skills" },
        { k: "Reality check", v: "Internship + practical exposure decide growth" },
      ];

  // If no data found, show message
  if (alliedDomains.length === 0 && ladder.length === 0) {
    return (
      <FrontendLayout>
        <HeroInner
          title="Allied Health Sciences (Physio, MLT, Radiology, OT)"
          breadcrumb="Medical & Paramedical → Allied Health Sciences"
        />
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
        title="Allied Health Sciences (Physio, MLT, Radiology, OT)"
        breadcrumb="Medical & Paramedical → Allied Health Sciences"
      />

      {/* 1) ABOUT + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3 d-flex align-items-center gap-2">
                <HeartPulse size={18} className="text-primary" />
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
                  <span>Important note</span>
                </h3>
                <p className="small text-muted mb-0">
                  Course titles and eligibility vary by university/state. Always verify curriculum, clinical posting,
                  and recognition before admission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) LADDER */}
      {ladder.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={GraduationCap}
              title="Allied Health career ladder"
              subtitle="Most allied careers follow a ladder: Diploma (optional) → UG Degree → PG Specialisation → Senior roles."
            />

            <div className="row g-3">
              {ladder.map((step, index) => (
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
              Tip: If you're confused, choose the domain that matches your personality: hands-on therapy (Physio), lab accuracy
              (MLT), tech systems (Imaging), or pressure-proof protocol work (OT).
            </div>
          </div>
        </section>
      )}

      {/* 3) DOMAINS GRID */}
      {alliedDomains.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={Stethoscope}
              title="Major allied health domains"
              subtitle="Pick one domain and go deep. Multi-skill is good later, but specialisation builds strong careers."
            />

            <div className="row g-3">
              {alliedDomains.map((domain, index) => (
                <div key={index} className="col-12 col-md-6">
                  <div className="sectionCard h-100">
                    <div className="d-flex justify-content-between align-items-start gap-3">
                      <div>
                        {domain.badge && (
                          <span className="badge badge-sm text-bg-primary">{domain.badge}</span>
                        )}
                        <h3 className="h6 mb-1 mt-2">{domain.title}</h3>
                        {domain.whatYouDo && (
                          <p className="small text-muted mb-0">{domain.whatYouDo}</p>
                        )}
                      </div>
                      <Activity size={18} className="text-primary flex-shrink-0 mt-1" />
                    </div>

                    {domain.commonRoutes && domain.commonRoutes.length > 0 && (
                      <div className="mt-3">
                        <div className="small fw-semibold text-dark mb-2">Common route</div>
                        <ul className="list-unstyled small mb-0">
                          {domain.commonRoutes.map((route, idx) => (
                            <li key={idx} className="d-flex mb-2">
                              <span className="me-2">•</span>
                              <span>{route}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {domain.whereYouWork && domain.whereYouWork.length > 0 && (
                      <div className="mt-3">
                        <div className="small fw-semibold text-dark mb-2">Where you work</div>
                        <ul className="list-unstyled small mb-0">
                          {domain.whereYouWork.slice(0, 4).map((place, idx) => (
                            <li key={idx} className="d-flex mb-2">
                              <span className="me-2">•</span>
                              <span>{place}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {domain.bestFor && (
                      <div className="mt-3">
                        <div className="small fw-semibold text-dark mb-1">Best for</div>
                        <p className="small text-muted mb-0">{domain.bestFor}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
              Note: Exact job responsibilities depend on your course scope, hospital policy and local regulations.
            </div>
          </div>
        </section>
      )}

      {/* 4) ELIGIBILITY */}
      {eligibilityNotes.length > 0 && (
        <section className="py-5 nitLightGradient">
          <div className="container">
            <SectionHeader
              icon={ShieldCheck}
              title="Eligibility & admission (common patterns)"
              subtitle="Always verify your target university/institute rules."
            />

            <div className="row g-4 align-items-stretch">
              <div className="col-12 col-lg-7 d-flex">
                <div className="nitDarkGlassBox w-100">
                  <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                    <BookOpen size={16} />
                    <span>Eligibility notes</span>
                  </span>

                  <ul className="nitDarkList mb-0">
                    {eligibilityNotes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-12 col-lg-5 d-flex">
                <div className="sectionCard bg-light border w-100">
                  <h3 className="h6 mb-2 d-flex align-items-center gap-2">
                    <Sparkles size={18} className="text-primary" />
                    <span>How to choose the right domain</span>
                  </h3>
                  <p className="small text-muted mb-0">
                    If you like people + movement rehab → Physio. If you prefer accuracy + protocols → MLT. If you like
                    tech systems → Imaging. If you can handle pressure + sterility discipline → OT.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5) WORK SETTINGS */}
      {workSettings.length > 0 && (
        <section className="py-5">
          <div className="container">
            <SectionHeader
              icon={Hospital}
              title="Where allied health professionals work"
              subtitle="Most allied careers are hospital-linked. Your internship and skills decide where you start."
            />

            <div className="row g-3">
              {workSettings.map((work, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-3">
                  <div className="sectionCard h-100">
                    <h3 className="h6 mb-1">{work.title}</h3>
                    <p className="small text-muted mb-0">{work.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6) DOCUMENTS + PROFILE */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <SectionHeader
            icon={ClipboardList}
            title="Documents & profile building"
            subtitle="A practical reminder before you apply and while you study."
          />

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-6 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Building2 size={16} />
                  <span>Admission checklist (general)</span>
                </span>

                <ul className="nitDarkList mb-0">
                  <li>Class 10 & 12 marksheets</li>
                  <li>ID proof (Aadhaar etc.)</li>
                  <li>Photo + signature</li>
                  <li>Category/EWS/Income certificate (if applicable)</li>
                  <li>Domicile (if required)</li>
                  <li>Medical fitness certificate (if asked)</li>
                </ul>
              </div>
            </div>

            {buildProfile.length > 0 && (
              <div className="col-12 col-lg-6 d-flex">
                <div className="sectionCard bg-light border w-100">
                  <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                    <Users size={18} className="text-primary" />
                    <span>Build your profile</span>
                  </h3>

                  <ul className="list-unstyled small mb-0">
                    {buildProfile.map((item, index) => (
                      <li key={index} className="mb-2 d-flex">
                        <span className="me-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="text-muted small mt-4" style={{ maxWidth: "95ch" }}>
            Sensible shortcut: pick one allied domain early, build practical proof (internships/projects), then specialise for senior roles.
          </div>
        </div>
      </section>
    </FrontendLayout>
  );
}