"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const getWebsiteHref = (raw) => {
  if (!raw) return "";
  const t = String(raw).trim();
  if (!t) return "";
  if (/^https?:\/\//i.test(t)) return t;
  return `https://${t.replace(/^\/\//, "")}`;
};

/* ---------- Sticky Tabs Bar (professional, minimal) ---------- */
function SectorTabsBar({ tabs, activeId, onJump }) {
  const scrollerRef = useRef(null);

  const scrollBy = (dx) => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollBy({ left: dx, behavior: "smooth" });
  };

  return (
    <div className="jobsStickyTabs">
      <div className="container">
        <div className="jobsTabsWrap">
          <button className="jobsTabsNavBtn" onClick={() => scrollBy(-240)} aria-label="Scroll left">
            <ChevronLeft size={18} />
          </button>

          <div className="jobsTabs" ref={scrollerRef}>
            {tabs.map((t) => (
              <button
                key={t.id}
                className={`jobsTab ${activeId === t.id ? "active" : ""}`}
                onClick={() => onJump(t.id)}
                type="button"
              >
                {t.label}
              </button>
            ))}
          </div>

          <button className="jobsTabsNavBtn" onClick={() => scrollBy(240)} aria-label="Scroll right">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Recruiter header row ---------- */
function RecruiterHeader({ recruitedBy, website, sublinks }) {
  const href = getWebsiteHref(website);

  return (
    <div className="jobsRecruiterHeader">
      <div className="jobsRecruiterName">{recruitedBy}</div>

      <div className="d-flex align-items-center gap-2 flex-wrap">
        {Array.isArray(sublinks) && sublinks.length ? (
          <>
            {sublinks.map((s) => (
              <a
                key={s.label}
                href={getWebsiteHref(s.href)}
                target="_blank"
                rel="noreferrer"
                className="jobsSmallLink"
              >
                <ExternalLink size={14} />
                {s.label}
              </a>
            ))}
          </>
        ) : null}

        {href ? (
          <a href={href} target="_blank" rel="noreferrer" className="jobsOfficialLink">
            <ExternalLink size={14} />
            Official Website
          </a>
        ) : null}
      </div>
    </div>
  );
}

/* ---------- Professional table ---------- */
function JobsTable({ headLeft = "Post / Examination", headRight = "Eligibility", rows }) {
  return (
    <div className="jobsTable">
      <div className="jobsTableRow jobsTableHead">
        <div>{headLeft}</div>
        <div>{headRight}</div>
      </div>

      {rows.map((r, idx) => (
        <div key={idx} className="jobsTableRow">
          <div className="jobsCellStrong">{r.post}</div>
          <div>{r.eligibility}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Sector section ---------- */
function SectorSection({ sector }) {
  return (
    <section id={sector.id} className="jobsSection">
      <div className="container">
        <div className="jobsSectorTop">
          <h2 className="jobsSectorTitle">{sector.title}</h2>
          {sector.note ? <p className="jobsSectorNote">{sector.note}</p> : null}
        </div>

        <div className="jobsSectorBody">
          {sector.groups.map((g, idx) => (
            <div key={idx} className="jobsRecruiterBlock">
              <RecruiterHeader recruitedBy={g.recruitedBy} website={g.website} sublinks={g.sublinks} />
              <JobsTable rows={g.rows} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- After Class 8 section (different shape) ---------- */
function AfterClass8Section({ block }) {
  return (
    <section id={block.id} className="jobsSection">
      <div className="container">
        <div className="jobsSectorTop">
          <h2 className="jobsSectorTitle">{block.title}</h2>
          {block.note ? <p className="jobsSectorNote">{block.note}</p> : null}
        </div>

        <div className="jobsSectorBody">
          {block.groups.map((g, idx) => (
            <div key={idx} className="jobsRecruiterBlock">
              <div className="jobsRecruiterHeader">
                <div className="jobsRecruiterName">{g.typeOfJob}</div>
              </div>

              <div className="jobsTable">
                <div className="jobsTableRow jobsTableHead">
                  <div>Recruited By / Post</div>
                  <div>Eligibility</div>
                </div>

                {g.rows.map((r, i) => {
                  const href = getWebsiteHref(r.website);
                  return (
                    <div key={i} className="jobsTableRow">
                      <div>
                        <div className="jobsCellStrong d-flex align-items-center gap-2 flex-wrap">
                          <span>{r.recruitedBy}</span>
                          {href ? (
                            <a href={href} target="_blank" rel="noreferrer" className="jobsMiniOfficial">
                              <ExternalLink size={14} />
                              Link
                            </a>
                          ) : null}
                        </div>
                        <div className="jobsMutedSmall">Post: {r.post}</div>
                      </div>
                      <div>{r.eligibility}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Active tab based on scroll (optional but nice) ---------- */
function useActiveSection(ids, offset = 170) {
  const [active, setActive] = useState(ids?.[0] || "");

  useEffect(() => {
    if (!ids?.length) return;

    const handler = () => {
      const pos = window.scrollY + offset;
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= pos) current = id;
      }
      setActive(current);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [ids, offset]);

  return [active, setActive];
}

// sectors + afterClass8 come from JobsOpportunitiesController@index (DB-backed)
export default function JobsOpportunitiesPage({ sectors = [], afterClass8 }) {
  const tabs = useMemo(
    () => [
      ...sectors.map((s) => ({ id: s.id, label: s.label })),
      { id: afterClass8.id, label: "After Class 8" },
    ],
    [sectors, afterClass8]
  );

  const sectionIds = useMemo(() => tabs.map((t) => t.id), [tabs]);
  const [activeId, setActiveId] = useActiveSection(sectionIds, 190);

  const jumpTo = (id) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Jobs Opportunities"
        breadcrumb="More → Jobs Opportunities"
        description="A structured directory of major recruitment bodies, common posts/exams and basic eligibility. Always verify latest notifications on official websites."
      />

      <SectorTabsBar tabs={tabs} activeId={activeId} onJump={jumpTo} />

      {/* Content */}
      {sectors.map((sector) => (
        <SectorSection key={sector.id} sector={sector} />
      ))}

      <AfterClass8Section block={afterClass8} />
      </FrontendLayout>
    </>
  );
}

