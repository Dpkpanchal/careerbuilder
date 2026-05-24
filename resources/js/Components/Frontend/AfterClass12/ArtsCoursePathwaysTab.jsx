"use client";

import React from "react";
// import Image from "next/image";

const PATH_CARDS = [
  { key: "journalism", title: "Journalism", desc: "UG → Media roles / higher studies" },
  { key: "library", title: "Library Science", desc: "B.Lib → M.Lib" },
  { key: "ba", title: "B.A (3 Years)", desc: "B.A → M.A → NET/SET → Research" },
  { key: "publicadmin", title: "Public Administration", desc: "B.A → M.A (Public Admin)" },
  { key: "law", title: "Law", desc: "B.A LLB / LLB → LLM → Judicial Exam" },
  { key: "socialwork", title: "Social Work", desc: "BSW → MSW → Careers + Research" },
  { key: "business", title: "Business", desc: "BBA → MBA → Corporate roles" },
  { key: "teaching", title: "Teaching", desc: "B.A → B.Ed → M.Ed / Teacher jobs" },
];

export default function ArtsCoursePathwaysTab({ onSelectPath }) {
  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="rounded-4 border p-4">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
            <div>
              <h2 className="h5 mb-1">Graduate Level Courses — After Class 12 (Arts)</h2>
              <div className="small text-muted">
                Use this pathways map to understand UG → PG → exams/research progression.
              </div>
            </div>
            <span className="badge text-bg-light border">Visual Pathways</span>
          </div>

          {/* ✅ Put this image in /public/images/... */}
          <div className="rounded-4 border overflow-hidden">
          <img
            src="/images/career-pathways/after-class-12-arts.jpg"
            alt="After Class 12 Arts pathways"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />

          </div>

          <div className="d-flex flex-wrap gap-2 mt-3">
            <span className="badge text-bg-light border">UG</span>
            <span className="badge text-bg-light border">PG</span>
            <span className="badge text-bg-light border">Research</span>
            <span className="badge text-bg-light border">Competitive Exams</span>
          </div>
        </div>
      </div>

      {/* Clickable cards */}
      <div className="col-12">
        <div className="rounded-4 border p-4">
          <div className="fw-semibold mb-2">Explore a path</div>
          <div className="row g-3">
            {PATH_CARDS.map((c) => (
              <div className="col-12 col-md-6 col-lg-3" key={c.key}>
                <button
                  type="button"
                  onClick={() => onSelectPath?.(c.key)}
                  className="btn btn-outline-secondary w-100 text-start rounded-4 p-3 h-100"
                >
                  <div className="fw-semibold">{c.title}</div>
                  <div className="small text-muted">{c.desc}</div>
                </button>
              </div>
            ))}
          </div>

          <div className="small text-muted mt-3">
            Tip: Click a card to jump directly to the Course Explorer with a focused view.
          </div>
        </div>
      </div>
    </div>
  );
}
