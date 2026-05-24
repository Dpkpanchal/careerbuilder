// src/pages/more/minority-schemes.js
"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';

/* =========================
   HELPERS
   ========================= */
const normalizeUrl = (u) => {
  if (!u) return "";
  const s = String(u).trim();
  if (!s || s === "-") return "";
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  return `https://${s}`;
};

/* =========================
   DATA (INLINE – AS ASKED)
   ========================= */
// const MINORITY_SCHEMES = [
//   { no: 1, subject: "Centrally Sponsored Scholarship Schemes", link: "https://scholarships.gov.in/" },
//   { no: 2, subject: "Post Matric Scholarship under Talent Support Programme (WBMDFC)", link: "www.tsp.wbmdfc.co.in" },
//   { no: 3, subject: "Swami Vivekananda Merit-cum-Means Scholarship", link: "https://svmcm.wbhed.gov.in/" },
//   { no: 4, subject: "Wakf Scholarship and Stipend for Muslim Students", link: "http://auqafboardwb.org/" },
//   { no: 5, subject: "Haji Md Mohsin Scholarship", link: "http://www.wbmdfc.org/notice/haji-md.-mohsin-scholarship.html" },
//   { no: 6, subject: "Begum Hazrat Mahal National Scholarship for Girls", link: "https://scholarship-maef.org/" },
//   { no: 7, subject: "Education Loan for Minorities", link: "http://www.wbmdfc.net/" },
//   { no: 8, subject: "UGC Scholarship and Fellowship", link: "https://www.ugc.ac.in/page/Scholarships-and-Fellowships.aspx" },
//   { no: 9, subject: '"MANF" – Maulana Azad National Fellowship for Minority Students', link: "https://www.ugc.ac.in/manf/" },
//   { no: 10, subject: "Term Loan for Minorities", link: "http://wbmdfc.org/form/form-list.php" },
//   { no: 11, subject: '"Nai Udaan" – Support for preparation of UPSC/SSC/State PSC Exams', link: "http://naiudaan-moma.gov.in/" },
//   { no: 12, subject: '"Nai Roshni" – Leadership Development Programme for Minority Women', link: "http://nairoshni-moma.gov.in/" },
//   { no: 13, subject: '"Nai Manzil" – Integrated Education and Livelihood initiative', link: "http://naimanzil.minorityaffairs.gov.in/" },
//   { no: 14, subject: '“Seekho aur Kamao (Learn & Earn)” – Skill development schemes of minorities', link: "http://seekhoaurkamao-moma.gov.in/" },
//   {
//     no: 15,
//     subject: '"Padho Pardesh" – Interest Subsidy on Educational Loans for Overseas Studies',
//     link: "http://www.minorityaffairs.gov.in/schemesperformance/padho-pardesh-scheme-interest-subsidy-educational-loans-overseas-studies-students-belonging-minority",
//   },
//   {
//     no: 16,
//     subject: '"USTTAD" – Upgrading the Skills and Training in Traditional Arts & Crafts',
//     link: "http://www.minorityaffairs.gov.in/schemesperformance/usttad-upgrading-skills-and-training-traditional-arts-crafts-development",
//   },
//   {
//     no: 17,
//     subject: '"Hamari Dharohar" – Preserve Heritage of Minority Communities',
//     link: "http://www.minorityaffairs.gov.in/schemesperformance/%E2%80%9Chamari-dharohar%E2%80%9D-scheme-preserve-rich-heritage-minority-communities-india-under-overall-concept",
//   },
//   {
//     no: 18,
//     subject: '"Pradhan Mantri Jan Vikas Karyakram" (PMJVK) – Previously MSDP',
//     link: "http://www.minorityaffairs.gov.in/pradhan-mantri-jan-vikas-karyakram-pmjvk-0",
//   },
//   { no: 19, subject: "Khwaja Gharib Nawaz Skill Development Training for Minorities", link: "http://www.maef.nic.in/CategoryContent.aspx?Id=359" },
//   { no: 20, subject: "Cyber Gram Yojana", link: "http://www.cybergramyojana.in/" },
//   { no: 21, subject: "Scheme to Provide Quality Education in Madrasas (SPQEM)", link: "http://mhrd.gov.in/spqem" },
//   { no: 22, subject: "Infrastructure Development in Minority Institutes (IDMI)", link: "http://mhrd.gov.in/idmi" },
//   {
//     no: 23,
//     subject: "Construction of Boundary Wall around Graveyard/Mosque/Idgah/Mazar (Online Application)",
//     link: "http://wbminorityaffairs.in/",
//   },
// ];

/* =========================
   PAGE
   ========================= */
export default function MinoritySchemesPage({schemes}) {

  const MINORITY_SCHEMES = schemes || [];
  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Minority Schemes"
        breadcrumb="More → Minority Schemes"
        description="Important scholarship, loan, fellowship and skill-development schemes for minority communities (with official web links)."
      />

      <section className="jobsSection">
        <div className="container">
          <h2 className="jobsSectorTitle">Minority Schemes</h2>
          <p className="jobsSectorNote">
            Please verify eligibility rules, deadlines and documents from the official portal before applying.
          </p>

          <div className="tableScrollWrap">
            <table className="table table-bordered align-middle mb-0 schemesTable">
              <thead>
                <tr>
                  <th style={{ width: 70 }}>No.</th>
                  <th>Scheme / Subject</th>
                  <th style={{ width: 360 }}>Web Link</th>
                </tr>
              </thead>
              <tbody>
                {MINORITY_SCHEMES.map((r) => {
                  const href = normalizeUrl(r.link);
                  return (
                    <tr key={r.no}>
                      <td className="fw-semibold">{r.no}</td>
                      <td>{r.subject}</td>
                      <td>
                        {href ? (
                          <a href={href} target="_blank" rel="noreferrer" className="jobsOfficialLink">
                            {r.link}
                          </a>
                        ) : (
                          <span>{r.link || "-"}</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="text-muted small mt-3">
            Tip: On mobile devices, swipe horizontally to view all columns.
          </div>
        </div>
      </section>

      {/* Page-local CSS (move to globals.css if you prefer) */}
      <style jsx global>{`
        .jobsSection {
          padding: 46px 0;
          background: #fff;
        }

        .jobsSectorTitle {
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .jobsSectorNote {
          font-size: 14px;
          color: #666;
          margin: 0 0 18px 0;
          max-width: 920px;
        }

        .tableScrollWrap {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 8px;
          background: #fff;
        }

        .schemesTable {
          min-width: 920px;
          margin: 0;
        }

        .schemesTable thead th {
          background: #f6f7f9;
          font-weight: 500;
          font-size: 12.5px;
          text-transform: uppercase;
          letter-spacing: 0.35px;
          white-space: nowrap;
        }

        .schemesTable td {
          font-size: 14px;
          vertical-align: top;
        }

        .jobsOfficialLink {
          font-size: 13px;
          font-weight: 500;
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
