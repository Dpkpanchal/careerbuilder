"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import ExamTabsBar from "../ExamTabsBar";
import { Layers3, Network, ExternalLink, AlertTriangle, Info } from "lucide-react";

// -------------------------------------------------------------
// Tabs (Law • Management • Finance bucket)
// -------------------------------------------------------------
const EXAM_TABS = [
  { id: "law", label: "Law", href: '/exams/law/law' },
  { id: "management", label: "Management", href: '/exams/law/management' },
  { id: "finance-accounts", label: "Finance & Accounts", href: '/exams/law/finance-accounts' },
];

// -------------------------------------------------------------
function ExamCard({ item }) {
  return (
    <div className="iitCard w-100 d-flex flex-column h-100">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="iitRank small fw-semibold">
          {item.sl}. {item.exam}
        </span>
        <span className="iitCodeBadge">{item.tag}</span>
      </div>

      <h3 className="h6 fw-semibold mb-2 text-dark">{item.fullForm}</h3>

      <div className="small text-muted mb-2">
        <p className="mb-1">
          <strong>PURPOSE:</strong> {item.purpose}
        </p>
        <p className="mb-0">
          <strong>CALENDAR:</strong> {item.activity}
        </p>
      </div>

      {!!item.note && (
        <div className="sectionCard bg-light border small mt-2">
          <div className="d-flex align-items-start gap-2">
            <AlertTriangle size={18} className="text-warning mt-1 flex-shrink-0" />
            <div>{item.note}</div>
          </div>
        </div>
      )}

     <div className="mt-auto d-flex flex-column gap-2 pt-3">
        {item.sources?.length ? (
          item.sources.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="iitWebsiteLink d-inline-flex align-items-center gap-1"
            >
              <span className="">{s.label}</span>
              <ExternalLink size={14} />
            </a>
          ))
        ) : (
          <div className="small text-muted">
            <Info size={16} className="me-1 flex-shrink-0" />
            Official link not listed (verify via trusted notices).
          </div>
        )}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
export default function LawEntranceExamsPage({ examContents }) {

  const lawExams = Array.isArray(examContents) ? examContents : [];

  return (
    <>
    <FrontendLayout>
      <HeroInner title="Law Entrance Exams" breadcrumb="Law • Management • Finance → Law" />

      <ExamTabsBar tabs={EXAM_TABS} activeId="law" />

      {/* INTRO + SNAPSHOT */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="sectionHeading mb-3">Law Entrance Exams After Class 12</h2>
              <p className="sectionSub mb-0">
                This list follows your Career Book coverage: national (CLAT/AILET), key university tests, and state
                law exams. For West Bengal students, CLAT + University of Calcutta routes are especially relevant.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sectionCard bg-light border">
                <h3 className="h6 mb-3 d-flex align-items-center gap-2">
                  <Layers3 size={18} className="text-primary" />
                  <span>Quick Snapshot</span>
                </h3>

                <dl className="row small mb-0">
                  <dt className="col-6">Exams covered</dt>
                  <dd className="col-6 mb-2">{lawExams.length}</dd>

                  <dt className="col-6">Best national gateways</dt>
                  <dd className="col-6 mb-2">CLAT, AILET</dd>

                  <dt className="col-6">West Bengal focus</dt>
                  <dd className="col-6 mb-2">WBNUJS via CLAT + CU B.A. LL.B route</dd>

                  <dt className="col-6">Safety rule</dt>
                  <dd className="col-6 mb-0">Use only official portals</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEEP THIS SECTION */}
      <section className="py-5 nitLightGradient">
        <div className="container">
          <div className="mb-4 text-center text-lg-start">
            <h2 className="sectionHeading mb-2">How Law Exams Connect to Admissions</h2>
            <p className="sectionSub mb-0">
              Typical flow: exam/score → counselling or institute application → document verification → seat allotment.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-5 d-flex">
              <div className="nitDarkGlassBox w-100">
                <span className="nitDarkChip mb-3 d-inline-flex align-items-center gap-2">
                  <Network size={16} />
                  <span>Admission pathway</span>
                </span>

                <ul className="nitDarkList mb-0">
                  <li>
                    <strong>CLAT</strong> → NLUs counselling (choose preferences)
                  </li>
                  <li>
                    <strong>AILET</strong> → NLU Delhi admissions process
                  </li>
                  <li>
                    <strong>State exams</strong> (MH-CET/APLAWCET/KLEE) → state counselling / CAP
                  </li>
                  <li>
                    <strong>University tests</strong> (SLAT/ULSAT/RULET etc.) → institute application + interview (if any)
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex">
              <div className="sectionCard bg-light border w-100 small">
                <strong>For West Bengal minority students:</strong> shortlist 2–3 routes (example: CLAT + CU B.A. LL.B +
                1 private university test). Keep documents ready: marksheets, ID, category/income certificates (if
                applicable), and domicile rules where required.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="sectionHeading mb-3">Law Entrance Exams – Official Links</h2>

          {lawExams.length === 0 ? (
            <div className="sectionCard bg-light border text-center small text-muted">
              No exam data available right now. Please check back later.
            </div>
          ) : (
            <div className="row g-3 g-md-4">
              {lawExams.map((item) => (
                <div key={item.sl ?? item.exam} className="col-12 col-md-6 d-flex">
                  <ExamCard item={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
