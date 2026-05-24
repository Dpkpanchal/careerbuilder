"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Route, Map as MapIcon } from "lucide-react";

/**
 * =========================
 * AFTER B.Sc PATHWAY MAP
 * =========================
 * Based on your diagram "Graduation / Bachelor Degree (B.Sc) 3 Yrs"
 * This is kept practical + readable for UI (not every tiny connector is duplicated),
 * but all major routes are covered.
 */
export const AFTER_BSC_PATHWAY_MAP = {
  key: "after-bsc",
  title: "Graduation / Bachelor Degree (B.Sc) — Pathways",
  type: "root",
  entries: [
    // 1) Competitive exams
    {
      key: "wbcs-upsc",
      label: "WBCS / WBFC / IAS / IPS / IFS / IRS / IES etc.",
      type: "exam_group",
      children: [
        {
          key: "phd-via-competitive",
          label: "Ph.D",
          type: "course",
          children: [
            { key: "post-doc-competitive", label: "Post Doctoral", type: "outcome", children: [] },
          ],
        },
      ],
    },

    // 2) MBA (through NET/SET)
    {
      key: "mba-netset",
      label: "MBA",
      type: "course",
      notes: ["Through NET / SET (as shown in diagram)"],
      children: [],
    },

    // 3) Teaching route: B.Ed → M.Ed → Secondary Teacher
    {
      key: "bed",
      label: "B.Ed (1 Yr)",
      type: "course",
      notes: ["From IGNOU (2 yrs duration shown in diagram)"],
      children: [
        {
          key: "med",
          label: "M.Ed (1 Yr)",
          type: "course",
          notes: ["From IGNOU"],
          children: [
            { key: "secondary-teacher", label: "Secondary Teacher", type: "outcome", children: [] },
          ],
        },
      ],
    },

    // 4) Master degree → M.Phil → PhD → Post Doctoral
    {
      key: "msc",
      label: "Master Degree (M.Sc)",
      type: "course",
      children: [
        {
          key: "mphil",
          label: "M.Phil (2 yrs)",
          type: "course",
          children: [
            {
              key: "phd-after-mphil",
              label: "Ph.D",
              type: "course",
              notes: ["NET / SET"],
              children: [
                { key: "post-doc-after-mphil", label: "Post Doctoral", type: "outcome", children: [] },
              ],
            },
          ],
        },
      ],
    },

    // 5) Integrated PhD (M.Sc + PhD) via JEST
    {
      key: "integrated-phd",
      label: "Integrated Ph.D (M.Sc + Ph.D)",
      type: "course",
      notes: ["JEST Exam"],
      children: [{ key: "post-doctoral-integrated", label: "Post Doctoral", type: "outcome", children: [] }],
    },

    // 6) PBIR (M.Sc + PhD)
    {
      key: "pbir",
      label: "PBIR (M.Sc + Ph.D)",
      type: "course",
      notes: ["Post-bachelor Integrated Research", "S.N. Bose (Kolkata), IACS, IISc, IISER, DAE etc."],
      children: [],
    },

    // 7) B.Tech (core tech branches) → GATE → M.Tech → PhD → Post Doctoral / Asst Prof
    {
      key: "btech-chemical-petro-polymer",
      label: "B.Tech (Chemical / Ceramic / Oil / Pharma & Fine Chemical / Petrochemical & Petroleum / Polymer Sci & Tech)",
      type: "course",
      notes: ["Entrance Test", "University Selection Test"],
      children: [
        {
          key: "gate-mtech-1",
          label: "GATE Exam",
          type: "exam",
          children: [
            {
              key: "mtech-1",
              label: "M.Tech (2 Yrs)",
              type: "course",
              notes: ["Through NET / SET (as shown)"],
              children: [
                {
                  key: "phd-1",
                  label: "Ph.D",
                  type: "course",
                  notes: ["Through CSC/PSC"],
                  children: [
                    { key: "post-doc-1", label: "Post Doctoral", type: "outcome", children: [] },
                    { key: "asst-prof-1", label: "Asst Prof", type: "outcome", children: [] },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // 8) B.Tech (Radio Physics / Electronics / IT / Optics & Opto Electronics / Electrical Engg / Instrumentation) → GATE → M.Tech → PhD → Post Doctoral / Asst Prof
    {
      key: "btech-rpe-it",
      label: "B.Tech (Radio Physics & Electronics / IT / Optics & Opto Electronics / Electrical / Instrumentation)",
      type: "course",
      notes: ["University Test / Entrance Test"],
      children: [
        {
          key: "gate-mtech-2",
          label: "GATE Exam",
          type: "exam",
          children: [
            {
              key: "mtech-2",
              label: "M.Tech (2 Yrs)",
              type: "course",
              children: [
                {
                  key: "phd-2",
                  label: "Ph.D",
                  type: "course",
                  notes: ["Through CSC/PSC"],
                  children: [
                    { key: "post-doc-2", label: "Post Doctoral", type: "outcome", children: [] },
                    { key: "asst-prof-2", label: "Asst Prof", type: "outcome", children: [] },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // 9) Packing Technology → CAT/XAT/MAT/SNAP/GMAT/JEMAT → MBA → PhD → Post Doctoral / Asst Prof
    {
      key: "packing-tech",
      label: "Packing Technology",
      type: "course",
      children: [
        {
          key: "mba-entrance",
          label: "MBA",
          type: "course",
          notes: ["CAT / XAT / MAT / SNAP / GMAT / JEMAT"],
          children: [
            {
              key: "phd-mba-route",
              label: "Ph.D",
              type: "course",
              notes: ["NET / SET"],
              children: [
                { key: "post-doc-mba", label: "Post Doctoral", type: "outcome", children: [] },
                { key: "asst-prof-mba", label: "Asst Prof", type: "outcome", children: [] },
              ],
            },
          ],
        },
      ],
    },

    // 10) JEELET → BE (Lateral)
    {
      key: "jeelet",
      label: "JEELET (2nd Yr Entry)",
      type: "exam",
      notes: ["For B.Sc (H) with Math students only", "Reserved seats mentioned in diagram"],
      children: [{ key: "be-lateral", label: "B.E. (Lateral)", type: "course", children: [] }],
    },
  ],
};

function DiagramSection() {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const IMG_SRC = "/images/bsc.jpg"; // keep same pattern you used

  const clamp = (v) => Math.min(2.5, Math.max(1, v));

  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-3 flex-wrap">
          <div>
            <h2 className="sectionHeading mb-1">After B.Sc Diagram</h2>
            <p className="sectionSub mb-0">Official pathway diagram after B.Sc (3 years).</p>
          </div>

          <button className="btn btn-primary btn-small mt-3 mt-lg-0" onClick={() => setOpen(true)}>
            View full Screen
          </button>
        </div>

        <div className="rounded-4 border bg-white overflow-hidden">
          <img src={IMG_SRC} alt="After B.Sc pathway diagram" width={1600} height={1000} className="img-fluid" />
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
                <img src={IMG_SRC} alt="After B.Sc diagram zoomed" width={1600} height={1000} className="img-fluid" />
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

// Short description (single string) shown in card before "View Details"
const getShortDescription = (entry) => {
  const MAP = {
    "wbcs-upsc":
      "Prepare for WBCS/UPSC and related services; also links to research route shown in the diagram.",
    "mba-netset":
      "Management pathway after B.Sc as shown (MBA via NET/SET mention).",
    bed:
      "Teaching track: B.Ed → M.Ed (IGNOU route shown) leading to Secondary Teacher.",
    msc:
      "Higher studies route: M.Sc → M.Phil → Ph.D → Post Doctoral (NET/SET step shown).",
    "integrated-phd":
      "Direct research track via JEST: Integrated Ph.D (M.Sc + Ph.D) → Post Doctoral.",
    pbir:
      "Post-bachelor integrated research programmes (M.Sc + Ph.D) at top institutes listed in the diagram.",
    "btech-chemical-petro-polymer":
      "Tech pathway: B.Tech (core branches) → GATE → M.Tech → Ph.D → Asst Prof / Post Doctoral.",
    "btech-rpe-it":
      "Electronics/IT pathway: B.Tech → GATE → M.Tech → Ph.D → Asst Prof / Post Doctoral.",
    "packing-tech":
      "Packaging tech route: MBA entrances → MBA → Ph.D (NET/SET) → Asst Prof / Post Doctoral.",
    jeelet:
      "Lateral entry route via JEELET for eligible B.Sc (H) students → B.E (Lateral).",
  };

  return (
    MAP[entry?.key] ||
    "Explore this option and open details to view the full pathway from the official diagram."
  );
};

export default function AfterBScOverviewTab() {
  const reduceMotion = useReducedMotion();
  const entries = AFTER_BSC_PATHWAY_MAP.entries;

  const [activeEntry, setActiveEntry] = useState(null);

  const paths = useMemo(() => (activeEntry ? buildPaths(activeEntry) : []), [activeEntry]);

  return (
    <div className="cbAfterBscOverview">
      {/* ======================
          A. PATHWAY OPTIONS
         ====================== */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="mb-4">
            <h2 className="sectionHeading mb-1">Career Pathways After B.Sc</h2>
            <p className="sectionSub mb-0">Select an option to view its pathway in steps.</p>
          </div>

          <div className="row g-3 g-md-4">
            {entries.map((entry) => (
              <div key={entry.key} className="col-12 col-md-4 col-lg-3 d-flex">
                <div className="news-card p-3 bg-white w-100 d-flex flex-column">
                  <div className="bg-light rounded-4 px-3 py-2">
                    <div className="fw-semibold mb-1">{entry.label}</div>
                    <div className="small text-muted text-capitalize">{typeLabel(entry.type)}</div>
                  </div>

                  <p className="small text-muted mb-2 mt-2 ps-3">{getShortDescription(entry)}</p>

                  <button
                    className="expandTrigger mt-2 btn btn-sm btn-link px-0 d-inline-flex align-items-center gap-1 ps-3"
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
