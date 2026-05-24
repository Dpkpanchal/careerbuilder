"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Route, Map as MapIcon } from "lucide-react";

/**
 * =========================
 * COMMERCE PATHWAY MAP
 * =========================
 */
export const AFTER_12_COMMERCE_PATHWAY_MAP = {
  key: "after-12-commerce",
  title: "Graduate Level Courses After Class 12 (Commerce Students)",
  type: "root",
  entries: [
    {
      key: "bca-3yrs",
      label: "BCA (3 Yrs)",
      type: "course",
      children: [{ key: "mca-2yrs", label: "MCA (2 Yrs)", type: "course", children: [] }],
    },
    {
      key: "ba-llb-5yrs",
      label: "BA LLB (5 Yrs)",
      type: "course",
      children: [
        {
          key: "llm-2yrs",
          label: "LLM (2 Yrs)",
          type: "course",
          children: [
            {
              key: "phd-law",
              label: "Ph.D",
              type: "course",
              children: [{ key: "judicial-exam-law", label: "Judicial Exam", type: "exam", children: [] }],
            },
          ],
        },
      ],
    },
    {
      key: "bba-3yrs",
      label: "BBA (3 Yrs)",
      type: "course",
      children: [
        {
          key: "mba-3yrs",
          label: "MBA (3 Yrs)",
          type: "course",
          children: [{ key: "phd-mba", label: "Ph.D", type: "course", children: [] }],
        },
      ],
    },
    {
      key: "ca-entry",
      label: "CA",
      type: "course",
      notes: ["Fundamental", "Intermediate"],
      children: [
        {
          key: "ca-levels",
          label: "CA (Levels)",
          type: "course",
          notes: ["Fundamental", "Intermediate", "Final"],
          children: [],
        },
      ],
    },
    {
      key: "costing-entry",
      label: "Costing",
      type: "course",
      notes: ["Inter"],
      children: [
        { key: "costing-levels", label: "Costing (Levels)", type: "course", notes: ["Inter", "Final"], children: [] },
      ],
    },
    {
      key: "bcom-3yrs",
      label: "B.Com (3 Yrs)",
      type: "course",
      children: [
        {
          key: "mcom",
          label: "M.Com",
          type: "course",
          children: [
            {
              key: "net-set",
              label: "NET / SET",
              type: "exam",
              children: [
                { key: "asst-prof", label: "Asst. Prof", type: "outcome", children: [] },
                {
                  key: "phd-commerce",
                  label: "Ph.D",
                  type: "course",
                  children: [{ key: "post-doc", label: "Post Doc", type: "outcome", children: [] }],
                },
              ],
            },
          ],
        },
        { key: "costing-from-bcom", label: "Costing", type: "course", notes: ["Inter", "Final"], children: [] },
        { key: "ca-from-bcom", label: "CA", type: "course", notes: ["Fundamental", "Intermediate", "Final"], children: [] },
        {
          key: "llb-3yrs",
          label: "LLB (3 Yrs)",
          type: "course",
          children: [
            {
              key: "llm-2yrs-from-llb",
              label: "LLM (2 Yrs)",
              type: "course",
              children: [
                {
                  key: "phd-from-llm",
                  label: "Ph.D",
                  type: "course",
                  children: [
                    { key: "judicial-exam-from-phd", label: "Judicial Exam", type: "exam", children: [] },
                  ],
                },
              ],
            },
          ],
        },
        {
          key: "bed",
          label: "B.Ed",
          type: "course",
          notes: ["50% in Graduation"],
          children: [
            {
              key: "med",
              label: "M.Ed",
              type: "course",
              children: [{ key: "phd-edu", label: "Ph.D", type: "course", children: [] }],
            },
            {
              key: "secondary-teacher",
              label: "Secondary Teacher",
              type: "outcome",
              notes: ["SSC", "MSC (as shown near B.Ed branch)"],
              children: [],
            },
          ],
        },
      ],
    },
    { key: "company-secretariat", label: "Company Secretariat (CS)", type: "course", children: [] },
    {
      key: "cfa",
      label: "Chartered Financial Analyst (CFA)",
      type: "course",
      children: [{ key: "cag-exam", label: "Comptroller & Auditor General of India Exam", type: "exam", children: [] }],
    },
    { key: "tax-practitioner", label: "Tax Practitioner (1 Yr)", type: "course", notes: ["Bengal Tax Council"], children: [] },
    { key: "irpm", label: "Industrial Relation & Personal Management", type: "course", notes: ["PG Course"], children: [] },
    { key: "pgdip-islamic-banking", label: "PG Dip Islamic Banking and Finance", type: "course", children: [] },
    { key: "wbaa-exam", label: "West Bengal Audits & Accounts Service Exam (WBAA)", type: "exam", children: [] },
    { key: "upsc-exam", label: "UPSC Exam", type: "exam", children: [] },
  ],
};

function DiagramSection() {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const IMG_SRC = "/images/class-12-commerce.jpg";

  const clamp = (v) => Math.min(2.5, Math.max(1, v));

  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-3 flex-wrap">
          <div>
            <h2 className="sectionHeading mb-1">For Commerce Student Diagram</h2>
            <p className="sectionSub mb-0">Official pathway diagram for Commerce students after Class 12.</p>
          </div>
          <button className="btn btn-primary btn-small mt-3 mt-lg-0" onClick={() => setOpen(true)}>
            View full Screen
          </button>
        </div>

        <div className="rounded-4 border bg-white overflow-hidden">
          <img
            src={IMG_SRC}
            alt="Career pathways after Class 12 Commerce"
            width={1600}
            height={1000}
            className="img-fluid"
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
              <button className="btn btn-outline-secondary btn-sm" onClick={() => setZoom((z) => clamp(z - 0.2))}>
                -
              </button>
              <button className="btn btn-outline-secondary btn-sm" onClick={() => setZoom((z) => clamp(z + 0.2))}>
                +
              </button>
              <button className="btn btn-outline-secondary btn-sm" onClick={() => setZoom(1)}>
                Reset
              </button>
            </div>

            <div className="overflow-auto" style={{ height: "calc(100% - 80px)" }}>
              <div style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}>
                <img src={IMG_SRC} alt="Career diagram zoomed" width={1600} height={1000} className="img-fluid" />
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
        <span className="badge text-bg-light border text-capitalize">{typeLabel(leaf.type)}</span>
      </div>

      <div className="d-flex flex-column gap-2">
        {path.map((node, i) => (
          <div key={`${node.key}-${i}`} className="border-top p-2">
            <div className="fw-semibold">
              {i + 1}. {node.label}
            </div>
            <div className="small text-muted text-capitalize">{typeLabel(node.type)}</div>

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

/**
 * Short description (single string) per entry.
 * Shown before "View Details"
 */
const getShortPreview = (entry) => {
  const key = entry?.key;

  const MAP = {
    "bca-3yrs": "BCA → MCA pathway for IT/software careers and higher studies.",
    "ba-llb-5yrs": "Integrated law route: BA LLB → LLM → Ph.D and Judicial Exam options.",
    "bba-3yrs": "Management route: BBA → MBA with scope for Ph.D and leadership roles.",
    "ca-entry": "Chartered Accountancy track for auditing, taxation, accounts and corporate finance.",
    "costing-entry": "Costing/Management Accounting (Inter → Final) for costing & finance operations roles.",
    "bcom-3yrs": "Core commerce route with options like M.Com, CA, LLB, B.Ed and NET/SET pathways.",
    "company-secretariat": "CS pathway for corporate compliance, governance and secretarial practice roles.",
    "cfa": "CFA track for investment analysis, equity research, portfolio and finance careers.",
    "tax-practitioner": "1-year taxation-focused course for tax practice, filing and consultancy support.",
    "irpm": "PG course for HR, labour laws and personnel management roles.",
    "pgdip-islamic-banking": "Specialized PG diploma for Islamic banking & finance domain knowledge.",
    "wbaa-exam": "WBAA exam pathway for West Bengal audit & accounts government services.",
    "upsc-exam": "UPSC competitive exam route for all-India central services careers.",
  };

  return MAP[key] || "Explore the next steps and outcomes in this pathway.";
};

export default function CommerceOverviewTab() {
  const reduceMotion = useReducedMotion();
  const entries = AFTER_12_COMMERCE_PATHWAY_MAP.entries;

  const [activeEntry, setActiveEntry] = useState(null);

  const paths = useMemo(() => (activeEntry ? buildPaths(activeEntry) : []), [activeEntry]);

  return (
    <div className="cbAfter12CommerceOverview">
      {/* ======================
          A. PATHWAY OPTIONS
         ====================== */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="mb-4">
            <h2 className="sectionHeading mb-1">Career Pathways After Class 12 (Commerce)</h2>
            <p className="sectionSub mb-0">Select a starting course to view its complete pathway.</p>
          </div>

          <div className="row g-3 g-md-4">
            {entries.map((entry) => {
              const preview = getShortPreview(entry);

              return (
                <div key={entry.key} className="col-12 col-md-4 col-lg-3 d-flex">
                  <div className="news-card p-3 bg-white w-100 d-flex flex-column">
                    <div className="bg-light rounded-4 px-3 py-2">
                      <div className="fw-semibold mb-1">{entry.label}</div>
                      <div className="small text-muted text-capitalize">{typeLabel(entry.type)}</div>
                    </div>

                    <p className="small text-muted mb-2 mt-2 ps-3">{preview}</p>

                    <button
                      className="expandTrigger mt-1 btn btn-sm btn-link px-0 d-inline-flex align-items-center gap-1 ps-3"
                      onClick={() => setActiveEntry(entry)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              );
            })}
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

                  <div className="p-3" style={{ height: "calc(100% - 80px)", overflow: "auto" }}>
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
