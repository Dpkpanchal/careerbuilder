"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Route, Map as MapIcon } from "lucide-react";

/**
 * =========================
 * GENERAL SCIENCE PATHWAY MAP
 * =========================
 * Based on the diagram:
 * B.Sc → M.Sc → Ph.D
 * BS-MS Dual Degree (IISER)
 * B.F.Sc → M.F.Sc
 * B.Sc Nutrition → M.Sc Nutrition
 * B.Stat(H)/B.Math(H) → M.Stat(H)/M.Math(H) → NET → (PhD/PostDoc or M.Tech)
 * B.Sc(Agri)/B.Sc(Hort) → M.Sc(Agri/Hort) → NET → (PhD/PostDoc) + ADO Exam → Scientist/Asst Prof etc.
 * BA LLB (admission tests) → LLM → NET → PhD → Asst Prof / Judicial Service
 * Hotel Management (Bachelor → Master) → MBA(HM)
 * BCA → MCA → NET → PhD/Asst Prof/PostDoc
 * BBA → MBA → NET → PhD
 */
// export const AFTER_12_GENERAL_SCIENCE_PATHWAY_MAP = {
//   key: "after-12-general-science",
//   title: "Graduate Level Courses After Class 12 (Science Students) — General Science",
//   type: "root",
//   entries: [
//     {
//       key: "bsc",
//       label: "B.Sc",
//       type: "course",
//       children: [
//         {
//           key: "msc",
//           label: "M.Sc",
//           type: "course",
//           children: [{ key: "phd-bsc", label: "Ph.D", type: "course", children: [] }],
//         },
//       ],
//     },

//     {
//       key: "bs-ms-iiser",
//       label: "BS-MS Dual Degree (IISER)",
//       type: "course",
//       notes: ["Science at IISER (Education & Research)"],
//       children: [],
//     },

//     {
//       key: "bfsc",
//       label: "Bachelor of Fishery Sc. (B.F.Sc) (4 Yrs)",
//       type: "course",
//       notes: ["University Selection Test"],
//       children: [
//         { key: "mfsc", label: "Master of Fishery Sc. (M.F.Sc) (2 Yrs)", type: "course", children: [] },
//       ],
//     },

//     {
//       key: "bsc-nutrition",
//       label: "B.Sc in Nutrition",
//       type: "course",
//       children: [{ key: "msc-nutrition", label: "M.Sc in Nutrition", type: "course", children: [] }],
//     },

//     {
//       key: "bstat-bmath",
//       label: "B.Stat (H) / B.Math (H) (3 Yrs)",
//       type: "course",
//       notes: ["ISI Exam"],
//       children: [
//         {
//           key: "mstat-mmath",
//           label: "M.Stat (H) / M.Math (H) (2 Yrs)",
//           type: "course",
//           children: [
//             {
//               key: "net-stat-math",
//               label: "NET",
//               type: "exam",
//               children: [
//                 {
//                   key: "phd-stat-math",
//                   label: "Ph.D",
//                   type: "course",
//                   children: [{ key: "postdoc-stat-math", label: "Post Doc", type: "outcome", children: [] }],
//                 },
//                 { key: "mtech", label: "M.Tech (2 Yrs)", type: "course", children: [] },
//               ],
//             },
//           ],
//         },
//       ],
//     },

//     {
//       key: "bsc-agri-hort",
//       label: "B.Sc (Agri) / B.Sc (Hort) (4 Yrs)",
//       type: "course",
//       notes: ["Exam"],
//       children: [
//         {
//           key: "msc-agri-hort",
//           label: "M.Sc (Agri) / M.Sc (Hort) (2 Yrs)",
//           type: "course",
//           children: [
//             {
//               key: "net-agri",
//               label: "NET",
//               type: "exam",
//               children: [
//                 {
//                   key: "phd-agri",
//                   label: "Ph.D",
//                   type: "course",
//                   children: [{ key: "postdoc-agri", label: "Post Doc", type: "outcome", children: [] }],
//                 },
//                 {
//                   key: "ado-exam",
//                   label: "A.D.O. Exam",
//                   type: "exam",
//                   children: [
//                     {
//                       key: "scientist-asstprof",
//                       label: "Asst. Prof / Scientist (ICAR, BDT, DST, CSIR, IISC, DRDO, DAE etc.)",
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

//     {
//       key: "ba-llb",
//       label: "BA LLB (5 Yrs)",
//       type: "course",
//       notes: ["Admission Tests by Institute (CLAT / ILET / ILT etc.)"],
//       children: [
//         {
//           key: "llm-2yrs",
//           label: "LLM (2 Yrs)",
//           type: "course",
//           children: [
//             { key: "judicial-service", label: "Judicial Service", type: "exam", notes: ["50% in LLB / CLAT (as shown)"], children: [] },
//             {
//               key: "net-law",
//               label: "NET",
//               type: "exam",
//               children: [
//                 {
//                   key: "phd-law",
//                   label: "Ph.D",
//                   type: "course",
//                   children: [
//                     { key: "asstprof-or-judicial", label: "Asst. Prof. or Judicial Service", type: "outcome", children: [] },
//                   ],
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },

//     {
//       key: "hotel-mgmt",
//       label: "Bachelor in Hotel Management (4 Yrs)",
//       type: "course",
//       notes: ["Science / Arts / Commerce Students"],
//       children: [
//         {
//           key: "master-hm",
//           label: "Master in Hotel Management (2 Yrs)",
//           type: "course",
//           children: [{ key: "mba-hm", label: "MBA (HM) (2 Yrs)", type: "course", children: [] }],
//         },
//       ],
//     },

//     {
//       key: "bca",
//       label: "BCA (3 Yrs)",
//       type: "course",
//       notes: ["Science / Arts students only (as shown)"],
//       children: [
//         {
//           key: "mca",
//           label: "MCA (2 Yrs)",
//           type: "course",
//           notes: ["IECA Exam / UPMCACT (as shown)"],
//           children: [
//             {
//               key: "net-it",
//               label: "NET",
//               type: "exam",
//               children: [
//                 {
//                   key: "phd-it",
//                   label: "Ph.D",
//                   type: "course",
//                   children: [{ key: "postdoc-it", label: "Post Doc", type: "outcome", children: [] }],
//                 },
//                 { key: "asstprof-it", label: "Asst. Prof.", type: "outcome", children: [] },
//               ],
//             },
//           ],
//         },
//       ],
//     },

//     {
//       key: "bba",
//       label: "BBA (3 Yrs)",
//       type: "course",
//       children: [
//         {
//           key: "mba-2yrs",
//           label: "MBA (2 Yrs)",
//           type: "course",
//           children: [
//             { key: "net-mba", label: "NET", type: "exam", children: [{ key: "phd-mba", label: "Ph.D", type: "course", children: [] }] },
//             { key: "asstprof-mba", label: "Asst. Prof.", type: "outcome", children: [] },
//           ],
//         },
//       ],
//     },
//   ],
// };

function DiagramSection() {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const IMG_SRC = "/images/class-12-general-science.jpg";

  const clamp = (v) => Math.min(2.5, Math.max(1, v));

  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-3 flex-wrap">
          <div>
            <h2 className="sectionHeading mb-1">For General Science Diagram</h2>
            <p className="sectionSub mb-0">
              Official pathway diagram for Science students (General Science) after Class 12.
            </p>
          </div>

          <button className="btn btn-primary btn-small mt-3 mt-lg-0" onClick={() => setOpen(true)}>
            View full Screen
          </button>
        </div>

        <div className="rounded-4 border bg-white overflow-hidden">
          <img
            src={IMG_SRC}
            alt="Career pathways after Class 12 (General Science)"
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
    bsc: "B.Sc → M.Sc → Ph.D pathway for core science research and teaching roles.",
    "bs-ms-iiser": "BS-MS dual degree at IISER for science education & research-focused careers.",
    bfsc: "B.F.Sc → M.F.Sc pathway for fisheries science, aquaculture and related government/private roles.",
    "bsc-nutrition": "Nutrition pathway: B.Sc → M.Sc in Nutrition for health, dietetics and research options.",
    "bstat-bmath": "ISI route: B.Stat/B.Math → M.Stat/M.Math → NET leading to Ph.D/Post Doc or M.Tech.",
    "bsc-agri-hort":
      "Agri/Horticulture pathway: B.Sc → M.Sc → NET → Ph.D/Post Doc; also ADO exam for govt roles.",
    "ba-llb": "Law route: BA LLB → LLM → NET → Ph.D; options include Asst. Prof or Judicial Service.",
    "hotel-mgmt": "Hotel Management: Bachelor → Master → MBA(HM) for hospitality management careers.",
    bca: "BCA → MCA route for IT careers; NET can lead to Ph.D/Asst. Prof/Post Doc.",
    bba: "BBA → MBA route; NET can lead to Ph.D and academic/teaching pathways.",
  };

  return MAP[key] || "Explore the next steps and outcomes in this pathway.";
};

export default function GeneralScienceOverviewTab({overview_tree}) {


  const reduceMotion = useReducedMotion();
  const entries = overview_tree.entries;

  const [activeEntry, setActiveEntry] = useState(null);
  const paths = useMemo(() => (activeEntry ? buildPaths(activeEntry) : []), [activeEntry]);

  return (
    <div className="cbAfter12GeneralScienceOverview">
      {/* ======================
          A. PATHWAY OPTIONS
         ====================== */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="mb-4">
            <h2 className="sectionHeading mb-1">Career Pathways After Class 12 (General Science)</h2>
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
