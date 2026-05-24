"use client";

import React from "react";
// import Link from "next/link";
import { Link } from "react-router-dom";

const EXAMS = [
  { title: "CLAT / Law Entrance", desc: "For integrated law courses and top law colleges.", tag: "Law" },
  { title: "NET / SET", desc: "For Assistant Professor eligibility after PG (as per norms).", tag: "Teaching" },
  { title: "Judicial Exam", desc: "Path after LLB/LLM (state-wise rules).", tag: "Law" },
  { title: "WBCS / UPSC", desc: "Civil services preparation alongside graduation.", tag: "Govt" },
];

const PLAN_30 = [
  "Shortlist 2 tracks (example: BA + Govt exams, or BA LLB).",
  "Check eligibility & entrances for your preferred colleges.",
  "Create a basic study plan (2–3 hours/day) for entrance/exams.",
  "Collect documents and track application deadlines.",
  "Check scholarships and apply early.",
  "Talk to a counsellor if you’re unsure.",
];

export default function ArtsExamsNextStepsTab() {
  return (
    <div className="row g-4">
      <div className="col-12 col-lg-7">
        <div className="rounded-4 border p-4">
          <h2 className="h5 mb-2">Exams & Milestones</h2>
          <div className="text-muted small mb-3">
            These are common next-step exams for Arts students depending on chosen pathway.
          </div>

          <div className="row g-3">
            {EXAMS.map((e) => (
              <div className="col-12 col-md-6" key={e.title}>
                <div className="rounded-4 border p-3 h-100">
                  <div className="d-flex justify-content-between align-items-start gap-2">
                    <div className="fw-semibold">{e.title}</div>
                    <span className="badge text-bg-light border">{e.tag}</span>
                  </div>
                  <div className="small text-muted mt-1">{e.desc}</div>
                  <div className="d-flex gap-2 mt-3">
                    <Link href="/exams" className="btn btn-outline-secondary btn-sm">
                      Explore Exams
                    </Link>
                    <Link href="/courses" className="btn btn-outline-primary btn-sm">
                      Related Courses
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-12 col-lg-5">
        <div className="rounded-4 border p-4">
          <h3 className="h6 mb-2">Your next 30 days plan</h3>
          <ol className="mb-0">
            {PLAN_30.map((s) => (
              <li key={s} className="small text-muted mb-2">
                {s}
              </li>
            ))}
          </ol>

          <div className="d-flex flex-wrap gap-2 mt-3">
            <Link href="/scholarships" className="btn btn-outline-secondary btn-sm">
              Scholarships
            </Link>
            <Link href="/career-pathfinder" className="btn btn-primary btn-sm">
              Career Pathfinder
            </Link>
            <Link href="/forum" className="btn btn-outline-primary btn-sm">
              Ask in Forum
            </Link>
          </div>

          <div className="small text-muted mt-3">
            Note: Posting in Forum requires login/registration (browsing can remain open as you planned).
          </div>
        </div>
      </div>
    </div>
  );
}
