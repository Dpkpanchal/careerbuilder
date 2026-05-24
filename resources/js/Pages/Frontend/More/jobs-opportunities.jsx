// src/pages/more/jobs-opportunities.js
"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
// src/data/resources/jobs-opportunities.data.js

export const JOB_OPPORTUNITIES_SECTORS = [
  {
    id: "government",
    title: "Government Officials Type",
    note: "Major recruitment bodies and common job groups.",
    groups: [
      {
        recruitedBy: "UPSC (Union Public Service Commission)",
        website: "https://www.upsc.gov.in",
        rows: [
          { post: "Central Civil Services (IAS, IPS, IRS, IFS)", eligibility: "Any Graduate" },
          { post: "Central Engineering Services (IES)", eligibility: "Any Engineering Graduate" },
          { post: "Indian Audit & Account Services", eligibility: "Graduate with Accountancy" },
          { post: "Miscellaneous type exams", eligibility: "As per required Post" },
        ],
      },
      {
        recruitedBy: "SSC (Central Government)",
        website: "https://ssc.nic.in",
        rows: [
          { post: "CGL", eligibility: "Any Graduate" },
          { post: "CHSL", eligibility: "Any Higher Secondary (12th)" },
          { post: "Grade C", eligibility: "12th" },
          { post: "Grade D", eligibility: "10th standard" },
          { post: "Miscellaneous type", eligibility: "As per Post required" },
        ],
      },
      {
        recruitedBy: "WBPSC (Government of West Bengal)",
        website: "https://psc.wb.gov.in",
        rows: [
          { post: "State Civil Services (WBCS)", eligibility: "Any Graduate" },
          { post: "State Judicial Services (WBJS)", eligibility: "Any Law Graduate" },
          { post: "Audit & Accounts services", eligibility: "Graduate with Accountancy" },
          { post: "State Forest Services (WBFS)", eligibility: "Any Graduate" },
          { post: "Sub Inspector Post (Police)", eligibility: "Any Graduate" },
          { post: "Sub Inspector (Food & Supply)", eligibility: "10th" },
          { post: "Grade C", eligibility: "12th" },
          { post: "Grade D", eligibility: "10th" },
        ],
      },
      {
        recruitedBy: "Municipal Service Commission (W.B)",
        website: "https://www.mscwb.org",
        rows: [
          { post: "Assistant Engineer", eligibility: "B.Tech (Electrical/Mech/Civil)" },
          { post: "Sub-Assistant Engg", eligibility: "Diploma Engineering" },
          { post: "LD Assistant", eligibility: "Madhyamik (with Typing Skill)" },
          { post: "Junior Assistant", eligibility: "Higher Secondary" },
          { post: "Surveyor", eligibility: "Madhyamik/Diploma (Survey Engg)" },
          { post: "Draftsman", eligibility: "Madhyamik / ITI Draftsmanship" },
          { post: "Accounts Assistant", eligibility: "Graduate in Commerce" },
          { post: "Miscellaneous", eligibility: "As per recruitment required" },
        ],
      },
    ],
  },

  {
    id: "banking",
    title: "Banking Sector Job",
    note: "Popular banking recruitment paths.",
    groups: [
      {
        recruitedBy: "IBPS",
        website: "https://www.ibps.in",
        rows: [
          { post: "IBPS PO/MT", eligibility: "Any Graduate" },
          { post: "IBPS SO", eligibility: "Graduate with Specialisation required" },
          { post: "IBPS Clerk", eligibility: "Any Graduate" },
        ],
      },
      {
        recruitedBy: "SBI",
        website: "https://www.sbi.co.in",
        rows: [
          { post: "SBI PO/MT", eligibility: "Any Graduate" },
          { post: "SBI Clerk", eligibility: "Any Graduate" },
        ],
      },
      {
        recruitedBy: "RBI",
        website: "https://www.rbi.org.in",
        rows: [
          { post: "RBI Official", eligibility: "Any Graduate" },
          { post: "NABARD", eligibility: "Any Graduate" },
          { post: "GIC", eligibility: "Any Graduate" },
          { post: "Miscellaneous", eligibility: "As per requirement required" },
        ],
      },
    ],
  },

  {
    id: "defence",
    title: "Defence Sector",
    note: "Army, Air Force, Navy, CAPFs and Coast Guard.",
    groups: [
      {
        recruitedBy: "Indian Army",
        website: "https://joinindianarmy.nic.in",
        rows: [
          { post: "Officer & Soldiers", eligibility: "12th" },
          { post: "Soldier", eligibility: "10th" },
        ],
      },
      {
        recruitedBy: "Indian Air Force",
        website: "https://indianairforce.nic.in",
        rows: [
          { post: "AFCAT", eligibility: "Any Graduate / Engineer" },
          { post: "NDA", eligibility: "12th (Science)" },
          { post: "Miscellaneous type", eligibility: "As per requirement required" },
        ],
      },
      {
        recruitedBy: "Indian Navy",
        website: "https://indiannavy.gov.in",
        rows: [
          { post: "NDA & Naval Academy", eligibility: "12th (Science)" },
          { post: "CDSE", eligibility: "Any Graduate" },
          { post: "Miscellaneous type", eligibility: "As per requirement required" },
        ],
      },
      {
        recruitedBy: "CRPF",
        website: "https://crpf.gov.in",
        rows: [
          { post: "Sub Inspector", eligibility: "Any Graduate" },
          { post: "Assistant Sub Inspector", eligibility: "12th" },
          { post: "Constable", eligibility: "10th" },
        ],
      },
      {
        recruitedBy: "Indian Coast Guard",
        website: "https://joinindiancoastguard.gov.in",
        rows: [
          { post: "Navik (Domestic Duty)", eligibility: "10th Pass" },
          { post: "Assistant Commandant", eligibility: "Any Graduate" },
          { post: "Navik (General Duty)", eligibility: "12th Science" },
          { post: "Yantrik", eligibility: "Diploma Engineering" },
        ],
      },
    ],
  },

  {
    id: "teaching",
    title: "Teaching",
    note: "West Bengal + Central teacher eligibility snapshots.",
    groups: [
      {
        recruitedBy: "SSC (School Service Commission WB)",
        website: "https://www.westbengalssc.com",
        rows: [
          { post: "TET (Upper Primary)", eligibility: "Any Graduate + 2 year teaching training" },
          { post: "TET (Primary)", eligibility: "12th + 2 year teaching training" },
          { post: "SLST", eligibility: "Masters degree (subject-specific) + teaching training" },
        ],
      },
      {
        recruitedBy: "Central Government Teacher",
        website: "",
        rows: [{ post: "CTET", eligibility: "Graduate with training" }],
      },
      {
        recruitedBy: "Miscellaneous Type",
        website: "",
        rows: [
          { post: "Group C", eligibility: "12th" },
          { post: "Group D", eligibility: "10th" },
        ],
      },
    ],
  },

  {
    id: "engineering",
    title: "Engineering Type",
    note: "PSU/Central/State engineering routes + WB examples.",
    groups: [
      {
        recruitedBy: "PSU (All)",
        website: "",
        rows: [{ post: "GATE", eligibility: "Any Engineering Graduate" }],
      },
      {
        recruitedBy: "Central Government",
        website: "",
        rows: [{ post: "IES", eligibility: "Engineering Graduate" }],
      },
      {
        recruitedBy: "State Government (WB examples)",
        website: "",
        rows: [
          { post: "Assistant Engineer", eligibility: "Engineering Graduate" },
          { post: "Sub Assistant Engineer", eligibility: "Diploma Engineering" },
          { post: "Technician", eligibility: "ITI" },
        ],
        sublinks: [
          { label: "WBSEDCL", href: "https://www.wbsedcl.in" },
          { label: "WBSETCL", href: "https://www.wbsetcl.in" },
        ],
      },
    ],
  },

  {
    id: "railway",
    title: "Railway Sector",
    note: "RRB recruitment snapshots.",
    groups: [
      {
        recruitedBy: "RRB (Railway Recruitment Board)",
        website: "https://www.rrbkolkata.gov.in",
        rows: [
          { post: "Group D", eligibility: "10th / ITI" },
          { post: "Group C", eligibility: "ITI / Diploma / 12th" },
        ],
      },
    ],
  },
];

export const JOBS_AFTER_CLASS_8 = {
  id: "after-class-8",
  title: "Jobs Opportunity After Class 8",
  note: "These are indicative examples shown in the Career Book table.",
  groups: [
    {
      typeOfJob: "Driver Type Job",
      rows: [
        { recruitedBy: "Fire & Emergency Service", website: "https://www.wbfes.gov.in", post: "Driver", eligibility: "Class 8" },
        { recruitedBy: "West Bengal Police", website: "https://policewb.gov.in", post: "Driver", eligibility: "Class 8" },
        { recruitedBy: "West Bengal Health Recruitment Board", website: "https://www.wbhrb.in", post: "Driver", eligibility: "Class 8" },
      ],
    },
    {
      typeOfJob: "Office Peon",
      rows: [
        { recruitedBy: "Office of District Judge & Session Judge", website: "", post: "Peon", eligibility: "Class 8" },
        { recruitedBy: "District Collector & Election Office", website: "", post: "Peon", eligibility: "Class 8" },
      ],
    },
    {
      typeOfJob: "Civic Volunteer Post",
      rows: [{ recruitedBy: "WBPS / Police", website: "https://policewb.gov.in", post: "Civic Volunteer", eligibility: "Class 8" }],
    },
    {
      typeOfJob: "Junior Constable",
      rows: [{ recruitedBy: "WBPS / Police", website: "https://policewb.gov.in", post: "Junior Constable", eligibility: "Class 8" }],
    },
    {
      typeOfJob: "Soldier Tradesmen",
      rows: [{ recruitedBy: "Indian Army", website: "https://joinindianarmy.nic.in", post: "Tradesmen", eligibility: "Class 8" }],
    },
    {
      typeOfJob: "Anganwadi Worker / Helper / Mini Anganwadi Worker",
      rows: [{ recruitedBy: "Directorate of Women & Child Development", website: "https://www.wbcdsw.gov.in", post: "Anganwadi (role varies)", eligibility: "Class 8" }],
    },
    {
      typeOfJob: "Lab Assistant",
      rows: [{ recruitedBy: "State Fisheries Development Corporation", website: "https://wbsfdc.com", post: "Lab Assistant", eligibility: "Class 8" }],
    },
  ],
};

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

export default function JobsOpportunitiesPage() {
  const tabs = useMemo(
    () => [
      { id: "government", label: "Government" },
      { id: "banking", label: "Banking" },
      { id: "defence", label: "Defence" },
      { id: "teaching", label: "Teaching" },
      { id: "engineering", label: "Engineering" },
      { id: "railway", label: "Railway" },
      { id: JOBS_AFTER_CLASS_8.id, label: "After Class 8" },
    ],
    []
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
      {JOB_OPPORTUNITIES_SECTORS.map((sector) => (
        <SectorSection key={sector.id} sector={sector} />
      ))}

      <AfterClass8Section block={JOBS_AFTER_CLASS_8} />
      </FrontendLayout>
    </>
  );
}
