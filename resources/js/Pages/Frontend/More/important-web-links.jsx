"use client";

import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from "@/Layouts/FrontendLayout";

/* =========================
   HELPERS
   ========================= */
const normalizeUrl = (u) => {
  if (!u) return "";
  if (u.startsWith("http://") || u.startsWith("https://")) return u;
  return `https://${u}`;
};

/* =========================
   REUSABLE TABLE
   ========================= */
function LinksTable({ data }) {
  if (!data || !data.length) return null;

  return (
    <div className="tableScrollWrap">
      <table className="table table-bordered align-middle mb-0 linksTable">
        <thead>
          <tr>
            <th style={{ width: 70 }}>No.</th>
            <th style={{ width: 360 }}>Subject</th>
            <th>Web Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r, i) => (
            <tr key={r.id ?? i}>
              <td className="fw-semibold">{i + 1}</td>
              <td>{r.subject}</td>
              <td>
                <a
                  href={normalizeUrl(r.web_link)}
                  target="_blank"
                  rel="noreferrer"
                  className="jobsOfficialLink"
                >
                  {r.web_link}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* =========================
   PAGE
   ========================= */
export default function ImportantWebLinksPage({
  schoolLinks,
  collegeLinks,
  universityLinks,
  resultLinks,
  jobNewsLinks,
  minorityLinks,
}) {
  return (
    <FrontendLayout>
      <HeroInner
        title="Important Web Links"
        breadcrumb="More → Important Web Links"
        description="Official and useful web portals related to school, college, university, examinations, jobs, and minority welfare."
      />

      <section className="jobsSection">
        <div className="container">
          <h2 className="jobsSectorTitle">School</h2>
          <LinksTable data={schoolLinks} />
        </div>
      </section>

      <section className="jobsSection">
        <div className="container">
          <h2 className="jobsSectorTitle">College</h2>
          <LinksTable data={collegeLinks} />
        </div>
      </section>

      <section className="jobsSection">
        <div className="container">
          <h2 className="jobsSectorTitle">University</h2>
          <LinksTable data={universityLinks} />
        </div>
      </section>

      <section className="jobsSection">
        <div className="container">
          <h2 className="jobsSectorTitle">Results & Entrance Exams</h2>
          <LinksTable data={resultLinks} />
        </div>
      </section>

      <section className="jobsSection">
        <div className="container">
          <h2 className="jobsSectorTitle">Current Affairs & Job News</h2>
          <LinksTable data={jobNewsLinks} />
        </div>
      </section>

      <section className="jobsSection">
        <div className="container">
          <h2 className="jobsSectorTitle">Government & Minority Welfare Websites</h2>
          <LinksTable data={minorityLinks} />
        </div>
      </section>

      {/* Styles unchanged */}
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
          margin-bottom: 16px;
        }

        .tableScrollWrap {
          width: 100%;
          overflow-x: auto;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 8px;
          background: #fff;
        }

        .linksTable {
          min-width: 820px;
        }

        .linksTable thead th {
          background: #f6f7f9;
          font-weight: 500;
          font-size: 12.5px;
          text-transform: uppercase;
        }

        .jobsOfficialLink {
          font-size: 13px;
          font-weight: 650;
          color: var(--bs-primary);
          word-break: break-word;
        }
      `}</style>
    </FrontendLayout>
  );
}

