"use client";

import React, { useMemo, useState } from "react";
// import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Route, Map as MapIcon } from "lucide-react";

/**
 * =========================
 * ENGINEERING PATHWAY MAP (Science Students)
 * =========================
 * Based on diagram:
 * - JEXPO → Polytechnic Diploma → JELET → (AMIE/B.Tech/B.E Lateral) + Post Diploma
 * - Entrance Exams (JEE Main / WBJEE / JEM / BITS / TATA etc.) → Engineering (Bachelor)
 * - Bachelor → B.E/B.Tech/B.Arch/B.Pharm → PG → GATE → M.Tech → NET/SET → PhD → Post Doctoral → Asst. Prof (CSC/PSC)
 * - IIT path: JEE (Advance) → IIT Engg. B.Tech → MBA (CAT/MAT/XAT/SNAP/GMAT/JEMAT) or GATE → MS → PhD → Post Doctoral
 * - IIT JAM → Integrated M.Sc → NET/SET → PhD → Asst. Prof (CSC/PSC)
 */

// export const AFTER_12_SCI_ENGINEERING_PATHWAY_MAP = {
//   key: "after-12-sci-engineering",
//   title: "Graduate Level Courses After Class 12 (Science Students) — Engineering",
//   type: "root",
//   entries: [
//     // -------------------------
//     // Polytechnic Route
//     // -------------------------
//     {
//       key: "polytechnic-diploma",
//       label: "Polytechnic Diploma (3 Yrs)",
//       type: "course",
//       notes: ["JEXPO Exam"],
//       children: [
//         {
//           key: "jelet",
//           label: "JELET (2nd Yr Lateral Entry)",
//           type: "exam",
//           notes: ["For BE/B.Tech only"],
//           children: [
//             {
//               key: "lateral-btech",
//               label: "AMIE / B.Tech / B.E (Lateral)",
//               type: "course",
//               children: [],
//             },
//             {
//               key: "post-diploma",
//               label: "Post Diploma",
//               type: "course",
//               children: [],
//             },
//           ],
//         },
//       ],
//     },

//     // -------------------------
//     // Regular Engineering Bachelor Route
//     // -------------------------
//     {
//       key: "engineering-bachelor",
//       label: "Engineering (Bachelor)",
//       type: "course",
//       notes: ["Entrance Exams: JEE(Main), WBJEE, JEM, BITS, TATA etc."],
//       children: [
//         {
//           key: "be-btech-barch-bpharm",
//           label: "B.E / B.Tech / B.Arch / B.Pharm (4 Yrs)",
//           type: "course",
//           children: [
//             {
//               key: "post-graduate",
//               label: "Post Graduate",
//               type: "course",
//               children: [
//                 {
//                   key: "gate",
//                   label: "GATE Exam",
//                   type: "exam",
//                   children: [
//                     {
//                       key: "mtech",
//                       label: "M.Tech",
//                       type: "course",
//                       children: [
//                         {
//                           key: "net-set-mtech",
//                           label: "NET / SET",
//                           type: "exam",
//                           notes: ["Through CSC/PSC"],
//                           children: [
//                             {
//                               key: "phd-mtech",
//                               label: "Ph.D",
//                               type: "course",
//                               children: [
//                                 {
//                                   key: "post-doctoral-mtech",
//                                   label: "Post Doctoral",
//                                   type: "outcome",
//                                   children: [
//                                     { key: "asst-prof-mtech", label: "Asst. Prof.", type: "outcome", children: [] },
//                                   ],
//                                 },
//                               ],
//                             },
//                           ],
//                         },
//                       ],
//                     },
//                   ],
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },

//     // -------------------------
//     // IIT B.Tech Route
//     // -------------------------
//     {
//       key: "iit-btech",
//       label: "IIT Engg. B.Tech (4 Yrs)",
//       type: "course",
//       notes: ["JEE (Advance) / Previously IIT-JEE"],
//       children: [
//         {
//           key: "mba",
//           label: "MBA",
//           type: "course",
//           notes: ["CAT, MAT, XAT, SNAP, GMAT, JEMAT"],
//           children: [
//             {
//               key: "net-set-mba",
//               label: "NET / SET",
//               type: "exam",
//               notes: ["Through CSC/PSC"],
//               children: [
//                 {
//                   key: "phd-mba",
//                   label: "Ph.D",
//                   type: "course",
//                   children: [
//                     {
//                       key: "post-doctoral-mba",
//                       label: "Post Doctoral",
//                       type: "outcome",
//                       children: [{ key: "asst-prof-mba", label: "Asst. Prof.", type: "outcome", children: [] }],
//                     },
//                   ],
//                 },
//               ],
//             },
//           ],
//         },

//         {
//           key: "gate-to-ms",
//           label: "GATE Exam",
//           type: "exam",
//           children: [
//             {
//               key: "ms",
//               label: "Master of Sc (MS)",
//               type: "course",
//               children: [
//                 {
//                   key: "phd-ms",
//                   label: "Ph.D",
//                   type: "course",
//                   children: [
//                     {
//                       key: "post-doctoral-ms",
//                       label: "Post Doctoral",
//                       type: "outcome",
//                       children: [],
//                     },
//                   ],
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },

//     // -------------------------
//     // Integrated M.Sc Route (IIT JAM)
//     // -------------------------
//     {
//       key: "integrated-msc",
//       label: "Integrated M.Sc",
//       type: "course",
//       notes: ["IIT JAM Exam", "Math/Statistics/Physics/Metrology/Chemistry/Geography/Geophysics"],
//       children: [
//         {
//           key: "net-set-msc",
//           label: "NET / SET",
//           type: "exam",
//           children: [
//             {
//               key: "phd-integrated",
//               label: "Ph.D",
//               type: "course",
//               notes: ["Through CSC/PSC"],
//               children: [{ key: "asst-prof-integrated", label: "Asst. Prof.", type: "outcome", children: [] }],
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

function DiagramSection() {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const IMG_SRC = "/images/class-12-engeering.jpg"; // keep same filename as you said

  const clamp = (v) => Math.min(2.5, Math.max(1, v));

  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-3 flex-wrap">
          <div>
            <h2 className="sectionHeading mb-1">For Engineering Diagram</h2>
            <p className="sectionSub mb-0">Official pathway diagram for Science students (Engineering) after Class 12.</p>
          </div>

          <button className="btn btn-primary btn-small mt-3 mt-lg-0" onClick={() => setOpen(true)}>
            View full Screen
          </button>
        </div>

        <div className="rounded-4 border bg-white overflow-hidden">
          {/* <Image src={IMG_SRC} alt="Career pathways after Class 12 Engineering" width={1600} height={1000} className="img-fluid" /> */}

          <img
            src={IMG_SRC}
            alt="Career pathways after Class 12 Engineering"
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
                {/* <Image src={IMG_SRC} alt="Engineering diagram zoomed" width={1600} height={1000} className="img-fluid" /> */}

                <img
                  src={IMG_SRC}
                  alt="Engineering diagram zoomed"
                  className="img-fluid"
                  style={{ maxWidth: "100%", height: "auto" }}
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

const getShortPreview = (entry) => {
  const key = entry?.key;

  const MAP = {
    "polytechnic-diploma": "JEXPO → Polytechnic Diploma → JELET lateral entry into B.Tech/B.E or AMIE route.",
    "engineering-bachelor": "Entrance exams → Engineering Bachelor → PG → GATE → M.Tech → NET/SET → Ph.D → Asst. Prof.",
    "iit-btech": "JEE (Advance) → IIT B.Tech → MBA (CAT etc.) or GATE → MS → Ph.D → Post Doctoral track.",
    "integrated-msc": "IIT JAM → Integrated M.Sc → NET/SET → Ph.D → Asst. Prof (through CSC/PSC).",
  };

  return MAP[key] || "Explore the next steps and outcomes in this pathway.";
};

export default function EngineeringOverviewTab({overview_tree}) {
  const reduceMotion = useReducedMotion();
  const entries = overview_tree.entries;

  const [activeEntry, setActiveEntry] = useState(null);
  const paths = useMemo(() => (activeEntry ? buildPaths(activeEntry) : []), [activeEntry]);

  return (
    <div className="cbAfter12SciEngineeringOverview">
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="mb-4">
            <h2 className="sectionHeading mb-1">Career Pathways After Class 12 (Engineering)</h2>
            <p className="sectionSub mb-0">Select a starting path to view its complete pathway.</p>
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
                    <button className="btn btn-sm btn-primary d-flex align-items-center gap-2" onClick={() => setActiveEntry(null)}>
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

      <DiagramSection />
    </div>
  );
}
