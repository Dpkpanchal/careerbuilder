// src/pages/more/coaching-support.js
"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';

/* =========================
   DATA (INLINE – AS ASKED)
   ========================= */

// const COACHING_SUPPORT = [
//   { no: 1, subject: "UPSC Exam", institution: "Zakat Foundation of India, New Delhi", web: "http://www.zakatindia.org/" },

//   { no: 2, subject: "UPSC Exam", institution: "Jamia Millia Islamia University, New Delhi", web: "https://www.jmi.ac.in/cccp" },
//   { no: 3, subject: "UPSC Exam", institution: "Hamdard Study Circle, New Delhi", web: "http://hamdardstudycircle.in/" },
//   { no: 4, subject: "UPSC Exam", institution: "Haj Committee, Mumbai", web: "http://www.hajcommittee.gov.in/" },
//   {
//     no: 5,
//     subject: "UPSC Exam",
//     institution: "Centre for Civil Services Coaching, Maulana Azad National Urdu University (MANUU), Hyderabad",
//     web: "http://www.manuu.ac.in/Eng-Php/index-english.php",
//     note: "See: ias_coaching.aspx (on MANUU site)",
//   },
//   {
//     no: 6,
//     subject: "UPSC Exam",
//     institution: "Jamia Hamdard Residential Coaching Academy, New Delhi",
//     web: "https://admission.nopaperforms.com/jamia-hamdard-residential-coaching-academy",
//   },
//   {
//     no: 7,
//     subject: "UPSC Exam",
//     institution: "Aligarh Muslim University Residential Coaching Academy",
//     web: "https://www.amu.ac.in/rcaacademy.jsp?did=10015",
//   },

//   { no: 8, subject: "WB Civil Services Exam", institution: "Administrative Training Institute (ATI), West Bengal", web: "http://www.atiwb.gov.in/" },

//   { no: 9, subject: "JEE Mains & Advanced (IIT)", institution: "Rahmani 30, Patna", web: "http://www.rahmanimission.info/" },

//   { no: 10, subject: "Joint Entrance Exam & WB Civil Services Exam", institution: "Al Ameen Mission, West Bengal", web: "https://alameenmission.org/" },
//   { no: 11, subject: "Joint Entrance Exam & WB Civil Services Exam", institution: "Al Ameen Mission (Free Coaching)", web: "http://www.alameenmission.in/freecoaching/" },

//   { no: 12, subject: "WB Civil Services Exam", institution: "GD Academy, West Bengal", web: "https://www.gdstudycircle.org/" },
//   { no: 13, subject: "VOICE Institute / WB Civil Services", institution: "Academic Association, West Bengal (Taratala, Kolkata)", web: "http://academicassociation.in/", note: "Email: md76monirul@gmail.com" },

//   { no: 14, subject: "WB Civil Services Exam", institution: "SNAP Academy, Kolkata, West Bengal", web: "http://snapbengal.org/" },
//   { no: 15, subject: "WB Civil Services Exam", institution: "Urdu Academy, Kolkata, West Bengal", web: "http://westbengalurduacademy.com/" },

//   // second table items
//   { no: 16, subject: "WB Civil Services Exam", institution: "Educare Foundation for WBCS, Kolkata, West Bengal", web: "educarewbcs@gmail.com", note: "Mob: 8420058936 / 9433894666" },
//   { no: 17, subject: "WB Judicial Services Coaching", institution: "SNAP Academy, Kolkata, West Bengal", web: "http://snapbengal.org/", note: "Mob: 9748800146" },
//   { no: 18, subject: "WB Civil Services Exam & Combined Exam", institution: "DMWS Academy, Durgapur, West Bengal", web: "-", note: "Mob: 8910049878 / 9434590880" },
//   { no: 19, subject: "Law Coaching", institution: "CLATAPULT, West Bengal", web: "https://www.clatapult.com/" },
// ];

/* =========================
   HELPERS
   ========================= */

const isProbablyUrl = (val) => {
  if (!val) return false;
  const s = String(val).trim().toLowerCase();
  return s.startsWith("http://") || s.startsWith("https://") || s.startsWith("www.");
};

const safeHref = (val) => {
  if (!val) return "";
  const s = String(val).trim();
  if (!s || s === "-") return "";
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  if (s.startsWith("www.")) return `https://${s}`;
  return ""; // emails or non-urls will be shown as text
};

export default function CoachingSupportPage({supports}) {

  const COACHING_SUPPORT = supports || [];
  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Coaching Support"
        breadcrumb="More → Coaching Support"
        description="A directory of coaching support centres and study circles for competitive exams. Please verify the latest details directly with the institution."
      />

      <section className="jobsSection">
        <div className="container">
          <h2 className="jobsSectorTitle">Coaching Support Centre</h2>
          <p className="jobsSectorNote">
            The list below is compiled from the Career Book tables. Some entries include email/phone instead of a website.
          </p>

          {/* Responsive table wrapper */}
          <div className="tableScrollWrap">
            <table className="table table-bordered align-middle mb-0 coachingTable">
              <thead>
                <tr>
                  <th style={{ width: 80 }}>No.</th>
                  <th style={{ width: 240 }}>Subject</th>
                  <th>Institution Name</th>
                  <th style={{ width: 320 }}>Web / Contact</th>
                </tr>
              </thead>
              <tbody>
                {COACHING_SUPPORT.map((row) => {
                  const href = safeHref(row.web);
                  return (
                    <tr key={row.no}>
                      <td className="fw-semibold">{row.no}</td>
                      <td>{row.subject}</td>
                      <td>
                        <div className="fw-semibold">{row.institution}</div>
                        {row.note ? <div className="text-muted small mt-1">{row.note}</div> : null}
                      </td>
                      <td>
                        {href ? (
                          <a href={href} target="_blank" rel="noreferrer" className="jobsOfficialLink">
                            {row.web}
                          </a>
                        ) : (
                          <span>{row.web || "-"}</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="text-muted small mt-3">
            Tip: On mobile, swipe horizontally to view all columns.
          </div>
        </div>
      </section>

      {/* Page-local CSS (safe + minimal). If you prefer, move into globals.css */}
      <style jsx global>{`
        /* Reuse your “official directory” section base */
        .jobsSection {
          padding: 46px 0;
          background: #fff;
          scroll-margin-top: 160px;
        }

        .jobsSectorTitle {
          font-size: 20px;
          font-weight: 800;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          margin: 0 0 6px 0;
        }

        .jobsSectorNote {
          font-size: 14px;
          color: #666;
          margin: 0 0 18px 0;
          max-width: 920px;
        }

        /* IMPORTANT: responsive scroll container */
        .tableScrollWrap {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 8px;
          background: #fff;
        }

        /* Ensure table keeps minimum width so scrolling happens on mobile */
        .coachingTable {
          min-width: 920px;
          margin: 0;
        }

        .coachingTable thead th {
          background: #f6f7f9;
          font-weight: 800;
          font-size: 12.5px;
          text-transform: uppercase;
          letter-spacing: 0.35px;
          white-space: nowrap;
        }

        .coachingTable td {
          font-size: 14px;
          vertical-align: top;
        }

        /* professional link style */
        .jobsOfficialLink {
          font-size: 13px;
          font-weight: 650;
          color: var(--bs-primary);
          text-decoration: none;
          word-break: break-word;
        }
        .jobsOfficialLink:hover {
          text-decoration: underline;
        }
      `}</style>
      </FrontendLayout>
    </>
  );
}
