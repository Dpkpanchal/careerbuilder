"use client";

import React, { useMemo, useState } from "react";
// import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Route, Map as MapIcon } from "lucide-react";

/**
 * =========================
 * MEDICAL & PARAMEDICAL PATHWAY MAP (Science Students)
 * =========================
 * Based on diagram:
 * - Nursing: GNM → B.Sc Nursing → M.Sc Nursing
 * - MBBS/BDS/B.Pharm → MD/MDS/MS/M.Pharm
 * - BHMS/BUMS/BAMS/BPT → MD/MS/MPT
 * - Vet & Animal Husbandry (B.V.Sc & A.H) → M.V.Sc & A.H → (PhD/Asst Prof via CSC/PSC) + Vet Serv Exam
 * - BPT → MPT
 * - D.Pharm (2 yrs) → B.Pharm (4 yrs, lateral entry) → GPAT → M.Pharm (2 yrs) → PhD
 * - Nursing B.Sc (H) → Nursing M.Sc (H) → PhD
 * - Paramedical courses list (Diploma + Bachelor degree options)
 */

export const AFTER_12_SCI_MEDICAL_PATHWAY_MAP = {
  key: "after-12-sci-medical",
  title: "Graduate Level Courses After Class 12 (Science Students) — Medical & Paramedical",
  type: "root",
  entries: [
    // -------------------------
    // Nursing (GNM route)
    // -------------------------
    {
      key: "gnm",
      label: "Diploma Nursing (GNM) (3 & 1/2 Yrs)",
      type: "course",
      notes: ["HS (Sc) / JENPARH"],
      children: [
        {
          key: "bsc-nursing",
          label: "Bachelor in Nursing",
          type: "course",
          children: [
            {
              key: "msc-nursing",
              label: "Master in Nursing",
              type: "course",
              children: [],
            },
          ],
        },
      ],
    },

    // -------------------------
    // MBBS / BDS / B.Pharm -> MD/MDS/MS/M.Pharm
    // -------------------------
    {
      key: "mbbs-bds-bpharm",
      label: "MBBS / BDS / B.Pharm",
      type: "course",
      notes: ["NEET / AFMC / JIPMER (as shown)"],
      children: [
        {
          key: "md-mds-ms-mpharm",
          label: "MD / MDS / MS / M.Pharm",
          type: "course",
          notes: ["Entrance / Exam (as shown)"],
          children: [],
        },
      ],
    },

    // -------------------------
    // AYUSH + BPT group -> MD/MS/MPT
    // -------------------------
    {
      key: "ayush-bpt",
      label: "BHMS / BUMS / BAMS / BPT (4 & 1/2 Yrs)",
      type: "course",
      notes: ["JENPARH Exam (as shown)"],
      children: [
        {
          key: "md-ms-mpt",
          label: "MD / MS / MPT",
          type: "course",
          notes: ["Exam (as shown)"],
          children: [],
        },
      ],
    },

    // -------------------------
    // Veterinary route
    // -------------------------
    {
      key: "bvsc",
      label: "Vet & Animal Husbandry (B.V.Sc & A.H) (5 Yrs)",
      type: "course",
      notes: ["EVETS Exam (as shown)"],
      children: [
        {
          key: "mvsc",
          label: "M.V.Sc & A.H (2 Yrs)",
          type: "course",
          children: [
            {
              key: "phd-vet",
              label: "Ph.D",
              type: "course",
              notes: ["Through CSC/PSC"],
              children: [{ key: "asst-prof-vet", label: "Asst. Prof.", type: "outcome", children: [] }],
            },
          ],
        },
        {
          key: "vet-serv-exam",
          label: "Vet Serv Exam",
          type: "exam",
          children: [],
        },
      ],
    },

    // -------------------------
    // Physiotherapy route
    // -------------------------
    {
      key: "bpt",
      label: "Bachelor in Physio (BPT) (4 & 1/2 Yrs)",
      type: "course",
      notes: ["HS (Sc)"],
      children: [
        {
          key: "mpt",
          label: "Master in Physio (MPT) (2 Yrs)",
          type: "course",
          children: [],
        },
      ],
    },

    // -------------------------
    // Pharmacy route
    // -------------------------
    {
      key: "dpharm",
      label: "D.Pharm (2 Yrs)",
      type: "course",
      notes: ["HS (Sc)"],
      children: [
        {
          key: "bpharm",
          label: "B.Pharm (4 Yrs)",
          type: "course",
          notes: ["Lateral Entry (as shown)"],
          children: [
            {
              key: "gpat",
              label: "GPAT Exam",
              type: "exam",
              children: [
                {
                  key: "mpharm",
                  label: "M.Pharm (2 Yrs)",
                  type: "course",
                  children: [{ key: "phd-pharm", label: "Ph.D", type: "course", children: [] }],
                },
              ],
            },
          ],
        },
      ],
    },

    // -------------------------
    // Nursing (Hons) route
    // -------------------------
    {
      key: "nursing-hons",
      label: "Nursing B.Sc (H)",
      type: "course",
      notes: ["HS (Sc) 50% marks", "JENPARH (Girls Only) (as shown)"],
      children: [
        {
          key: "nursing-msc-hons",
          label: "Nursing M.Sc (H) (2 Yrs)",
          type: "course",
          children: [{ key: "phd-nursing", label: "Ph.D", type: "course", children: [] }],
        },
      ],
    },

    // -------------------------
    // Paramedical Courses (Diploma)
    // -------------------------
    {
      key: "paramedical-diploma",
      label: "Paramedical Courses (Diploma)",
      type: "course_group",
      notes: [
        "Examples: DMLT, DRD, DPT, DCPT, DNEP, DCCT, ECG, CT & MRI Technician, OT Technician, Phlebotomy, etc.",
        "Full list shown in diagram (after HS Sc).",
      ],
      children: [],
    },

    // -------------------------
    // Paramedical Courses (Bachelor Degree)
    // -------------------------
    {
      key: "paramedical-bachelor",
      label: "Paramedical Courses (Bachelor Degree)",
      type: "course_group",
      notes: [
        "Examples: BOT/MOT, Prosthetic/Orthotic Engg, Audiology & Speech Therapy, BMLT, B.Optm, BRIT, BHM etc.",
        "Durations vary (as per diagram).",
      ],
      children: [],
    },
  ],
};

function DiagramSection() {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const IMG_SRC = "/images/class-12-medical.jpg";

  const clamp = (v) => Math.min(2.5, Math.max(1, v));

  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-3 flex-wrap">
          <div>
            <h2 className="sectionHeading mb-1">For Medical & Paramedical Diagram</h2>
            <p className="sectionSub mb-0">
              Official pathway diagram for Science students (Medical & Paramedical) after Class 12.
            </p>
          </div>

          <button className="btn btn-primary btn-small mt-3 mt-lg-0" onClick={() => setOpen(true)}>
            View full Screen
          </button>
        </div>

        <div className="rounded-4 border bg-white overflow-hidden">
          {/* <Image
            src={IMG_SRC}
            alt="Career pathways after Class 12 (Medical & Paramedical)"
            width={1600}
            height={1000}
            className="img-fluid"
          /> */}

          <img
            src={IMG_SRC}
            alt="Career pathways after Class 12 (Medical & Paramedical)"
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
               <img
                  src={IMG_SRC}
                  alt="Medical diagram zoomed"
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
    gnm: "GNM → Bachelor in Nursing → Master in Nursing pathway for nursing careers.",
    "mbbs-bds-bpharm": "NEET/AFMC/JIPMER route to MBBS/BDS/B.Pharm → MD/MDS/MS/M.Pharm specialization.",
    "ayush-bpt": "BHMS/BUMS/BAMS/BPT route with options for MD/MS/MPT higher studies.",
    bvsc: "EVETS route to B.V.Sc & A.H → M.V.Sc → Ph.D/Asst. Prof and Vet Service Exam option.",
    bpt: "BPT → MPT pathway for physiotherapy clinical careers.",
    dpharm: "D.Pharm → B.Pharm (lateral) → GPAT → M.Pharm → Ph.D pathway in pharmacy.",
    "nursing-hons": "Nursing B.Sc (H) → Nursing M.Sc (H) → Ph.D academic/research nursing pathway.",
    "paramedical-diploma": "Diploma paramedical options after HS (Sc): lab, radiology, OT, ICU, ECG, CT/MRI etc.",
    "paramedical-bachelor": "Bachelor paramedical options: OT, Speech/Audiology, BMLT, Optometry, Imaging, Hospital Mgmt etc.",
  };

  return MAP[key] || "Explore the next steps and outcomes in this pathway.";
};

export default function MedicalParamedicalOverviewTab() {
  const reduceMotion = useReducedMotion();
  const entries = AFTER_12_SCI_MEDICAL_PATHWAY_MAP.entries;

  const [activeEntry, setActiveEntry] = useState(null);
  const paths = useMemo(() => (activeEntry ? buildPaths(activeEntry) : []), [activeEntry]);

  return (
    <div className="cbAfter12SciMedicalOverview">
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="mb-4">
            <h2 className="sectionHeading mb-1">Career Pathways After Class 12 (Medical & Paramedical)</h2>
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

      <DiagramSection />
    </div>
  );
}
