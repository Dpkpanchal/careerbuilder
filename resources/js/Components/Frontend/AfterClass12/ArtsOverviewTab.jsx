"use client";

import React, { useMemo, useState } from "react";
// import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Route, Map as MapIcon } from "lucide-react";


export const AFTER_12_ARTS_PATHWAY_MAP = {
  key: "after-12-arts",
  title: "Graduate Level Courses After Class 12 (Arts Students)",
  type: "root",
  entries: [
    // =========================
    // TOP ROW (direct after class 12 options)
    // =========================
   

    {
      key: "ba-3yrs",
      label: "B.A. (3 Yrs)",
      type: "course",
      children: [
        // =========================================================
        // LOWER HORIZONTAL BRANCHES FROM B.A. (as per diagram)
        // =========================================================

        // 1) M.A branch (NET/SET/CSC-PSC → Asst. Prof / PhD / MPhil)
        {
          key: "ma",
          label: "M.A.",
          type: "course",
          children: [
            {
              key: "net-set",
              label: "NET / SET",
              type: "exam",
              children: [
                {
                  key: "asst-prof",
                  label: "Asst. Prof",
                  type: "outcome",
                  notes: ["Through CSC/PSC "],
                  children: [],
                },
                {
                  key: "phd-from-ma",
                  label: "Ph.D",
                  type: "course",
                  children: [
                    {
                      key: "post-doc",
                      label: "Post Doc",
                      type: "outcome",
                      children: [],
                    },
                  ],
                },
                {
                  key: "mphil",
                  label: "M.Phil",
                  type: "course",
                  children: [
                    {
                      key: "phd-from-mphil",
                      label: "Ph.D",
                      type: "course",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },

        // 2) B.Ed branch (50% in Graduation + SSC/MSC → Secondary Teacher)
        {
          key: "bed",
          label: "B.Ed",
          type: "course",
          notes: ["50% in Graduation"],
          children: [
            {
              key: "med-from-bed",
              label: "M.Ed",
              type: "course",
              children: [
                {
                  key: "phd-from-med",
                  label: "Ph. D",
                  type: "course",
                  children: [],
                },
              ],
            },

            // Side output shown near B.Ed
            {
              key: "secondary-teacher",
              label: "Secondary Teacher",
              type: "outcome",
              notes: ["SSC", "MSC (as shown near the B.Ed branch)"],
              children: [],
            },
          ],
        },

        // 3) B.Ed (Spl Education) branch with specializations → M.Ed
        {
          key: "bed-spl",
          label: "B.Ed (Spl Education)",
          type: "course",
          notes: [
            "Hearing Impairment",
            "Visual Impairment",
            "Mental Retardation",
            "Learning Disability",
          ],
          children: [
            {
              key: "med-from-spl",
              label: "M.Ed",
              type: "course",
              children: [],
            },
          ],
        },

        // 4) LLB branch (separate from BA LLB 5 yrs) → LLM → PhD → Judicial Exam (also LLM → Judicial Exam)
        {
          key: "llb",
          label: "LLB",
          type: "course",
          children: [
            {
              key: "llm-from-llb",
              label: "LLM",
              type: "course",
              children: [
                {
                  key: "phd-from-llm-llb",
                  label: "Ph.D",
                  type: "course",
                  children: [
                    {
                      key: "judicial-exam-from-phd-llb",
                      label: "Judicial Exam",
                      type: "exam",
                      children: [],
                    },
                  ],
                },
                {
                  key: "judicial-exam-from-llm-llb",
                  label: "Judicial Exam",
                  type: "exam",
                  children: [],
                },
              ],
            },
          ],
        },

        // 5) Competitive exams block (as a terminal group)
        {
          key: "competitive-exams",
          label: "WBCS / WBFS / IAS / IPS / IFS / IRS, IES Misc etc",
          type: "exam_group",
          children: [],
        },
      ],
    },

    {
      key: "ba-public-admin",
      label: "B.A. Public Administration",
      type: "course",
      children: [
        {
          key: "ma-public-admin",
          label: "M.A. Public Administration",
          type: "course",
          children: [],
        },
      ],
    },

    // BA LLB (5 yrs) branch → LLM (2 yrs) → PhD → Judicial Exam + LLM → Judicial Exam
    {
      key: "ba-llb-5yrs",
      label: "B.A. LLB (5 Yrs)",
      type: "course",
      children: [
        {
          key: "llm-2yrs",
          label: "LLM (2 Yrs)",
          type: "course",
          children: [
            {
              key: "phd-from-llm-2yrs",
              label: "Ph.D",
              type: "course",
              children: [
                {
                  key: "judicial-exam-from-phd-5yrs",
                  label: "Judicial Exam",
                  type: "exam",
                  children: [],
                },
              ],
            },
            {
              key: "judicial-exam-from-llm-2yrs",
              label: "Judicial Exam",
              type: "exam",
              children: [],
            },
          ],
        },
      ],
    },

    {
      key: "bsw",
      label: "B.S.W.",
      type: "course",
      children: [
        {
          key: "msw",
          label: "M.S.W.",
          type: "course",
          children: [
            {
              key: "phd-from-msw",
              label: "Ph.D",
              type: "course",
              children: [],
            },
          ],
        },
      ],
    },

    {
      key: "bba",
      label: "BBA",
      type: "course",
      children: [
        {
          key: "mba",
          label: "MBA",
          type: "course",
          children: [
            {
              key: "phd-from-mba",
              label: "Ph.D",
              type: "course",
              children: [],
            },
          ],
        },
      ],
    },
     {
      key: "journalism",
      label: "Journalism",
      type: "course",
      children: [],
    },

    {
      key: "blib",
      label: "B.Lib",
      type: "course",
      children: [
        {
          key: "mlib",
          label: "M.Lib",
          type: "course",
          children: [],
        },
      ],
    },
  ],
};

function DiagramSection() {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const IMG_SRC = "/images/class-12-arts.jpg";

  const clamp = (v) => Math.min(2.5, Math.max(1, v));

  return (
    <section className="py-4 py-md-5 ">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-3 flex-wrap">
          <div>
            <h2 className="sectionHeading mb-1">For Arts Student Diagram</h2>
            <p className="sectionSub mb-0">
              Official pathway diagram for Arts students after Class 12.
            </p>
          </div>
          <button className="btn btn-primary btn-small mt-3 mt-lg-0" onClick={() => setOpen(true)}>
            View full Screen
          </button>
        </div>

        <div className="rounded-4 border bg-white overflow-hidden">
        <img
          src={IMG_SRC}
          alt="Career pathways after Class 12 Arts"
          className="img-fluid"
          style={{ maxWidth: "100%", height: "auto" }}
        />

        </div>
      </div>

      {open && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0,0,0,.65)", zIndex: 2000 }}
          onClick={() => setOpen(false)}
        >
          <div
            className="position-absolute top-50 start-50 translate-middle bg-white rounded-4 p-3"
            style={{ width: "95%", maxWidth: 1100, height: "90%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between align-items-center mb-2">
              <strong>Diagram</strong>
              <button className="btn btn-sm btn-primary" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>

            <div className="d-flex gap-2 mb-2">
              <button className="btn btn-outline-secondary btn-sm" onClick={() => setZoom((z) => clamp(z - 0.2))}>-</button>
              <button className="btn btn-outline-secondary btn-sm" onClick={() => setZoom((z) => clamp(z + 0.2))}>+</button>
              <button className="btn btn-outline-secondary btn-sm" onClick={() => setZoom(1)}>Reset</button>
            </div>

            <div className="overflow-auto "  style={{ height: "calc(100% - 80px)", overflow: "auto" }}>
              <div style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}>
                <Image
                  src={IMG_SRC}
                  alt="Career diagram zoomed"
                  width={1600}
                  height={1000}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


const typeLabel = (t) => (t || "").replaceAll("_", " ");

function buildPaths(root) {
  const paths = [];
  const walk = (node, acc) => {
    const next = node.children || [];
    if (!next.length) {
      paths.push(acc);
      return;
    }
    next.forEach((c) => walk(c, [...acc, c]));
  };
  walk(root, [root]);
  return paths;
}

function PathCard({ path, index }) {
  const leaf = path[path.length - 1];

  return (
    <div className="rounded-4 border p-3 bg-light">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <div className="fw-semibold d-flex align-items-center gap-2">
          <Route size={16} className="text-primary" />
          Path {index + 1}
        </div>
        <span className="badge text-bg-light border text-capitalize">
          {typeLabel(leaf.type)}
        </span>
      </div>

      <div className="d-flex flex-column gap-2">
        {path.map((node, i) => (
          <div key={`${node.key}-${i}`} className=" border-top p-2">
            <div className="fw-semibold">
              {i + 1}. {node.label}
            </div>
            <div className="small text-muted text-capitalize">
              {typeLabel(node.type)}
            </div>

            {node.notes?.length ? (
              <ul className="small text-muted mt-2 ps-3 mb-0">
                {node.notes.map((n, idx) => (
                  <li key={idx}>{n}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ArtsOverviewTab() {
  const reduceMotion = useReducedMotion();
  const entries = AFTER_12_ARTS_PATHWAY_MAP.entries;

  const [activeEntry, setActiveEntry] = useState(null);

  const paths = useMemo(
    () => (activeEntry ? buildPaths(activeEntry) : []),
    [activeEntry]
  );

  return (
    <div className="cbAfter12ArtsOverview">
      {/* ======================
          A. PATHWAY OPTIONS
         ====================== */}
      <section className="py-4 py-md-5 bg-light ">
        <div className="container">
          <div className="mb-4">
            <h2 className="sectionHeading mb-1">
              Career Pathways After Class 12 (Arts)
            </h2>
            <p className="sectionSub mb-0">
              Select a starting course to view its complete pathway.
            </p>
          </div>

          <div className="row g-3 g-md-4">
            {entries.map((entry) => (
              <div key={entry.key} className="col-12 col-md-4 col-lg-3 d-flex">
                <div className="news-card p-3 bg-white w-100 d-flex flex-column">
                  <div className="bg-light rounded-4 px-3 py-2">
                  <div className="fw-semibold mb-1">{entry.label}</div>
                  <div className="small text-muted  text-capitalize">
                    {typeLabel(entry.type)}
                  </div>
                  </div>

                  <button
                    className="expandTrigger mt-3 btn btn-sm btn-link px-0 d-inline-flex align-items-center gap-1 ps-3"
                    onClick={() => setActiveEntry(entry)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ======================
              PATHWAY MODAL
             ====================== */}
          <AnimatePresence>
            {activeEntry && (
              <motion.div
                className="position-fixed top-0 start-0 w-100 h-100"
                style={{ background: "rgba(0,0,0,.65)", zIndex: 2000 }}
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={reduceMotion ? undefined : { opacity: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                onClick={() => setActiveEntry(null)}
              >
                <motion.div
                  className="position-absolute top-50 start-50 translate-middle bg-white rounded-4 border shadow"
                  style={{ width: "95%", maxWidth: 1100, height: "90%" }}
                  initial={reduceMotion ? false : { y: 16, opacity: 0 }}
                  animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
                  exit={reduceMotion ? undefined : { y: 16, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                    <div className="fw-semibold d-flex align-items-center gap-2">
                      <MapIcon size={18} className="text-primary" />
                      {activeEntry.label} — Pathways
                    </div>
                    <button
                      className="btn btn-sm btn-primary d-flex align-items-center gap-2"
                      onClick={() => setActiveEntry(null)}
                    >
                      <X size={16} /> Close
                    </button>
                  </div>

                  <div
                    className="p-3"
                    style={{ height: "calc(100% - 80px)", overflow: "auto" }}
                  >
                    <div className="row g-3">
                      {paths.map((p, idx) => (
                        <div key={idx} className="col-12">
                          <PathCard path={p} index={idx} />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ======================
          B. DIAGRAM SECTION
         ====================== */}
      <DiagramSection />
    </div>
  );
}
