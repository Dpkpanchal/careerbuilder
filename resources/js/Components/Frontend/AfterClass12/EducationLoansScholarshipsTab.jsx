"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  ShieldCheck,
  GraduationCap,
  BadgeIndianRupee,
  CalendarClock,
  UserCheck,
  Landmark,
  ArrowRight,
} from "lucide-react";

const MotionDiv = motion.div;

function FactCard({ icon, title, text }) {
  return (
    <div
      className="fact-card-wrapper"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(111,72,235,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div className="fact-card-inner">
        <div className="fact-card-icon">{icon}</div>
        <div style={{ flex: 1 }}>
          <h5 className="fact-card-title">{title}</h5>
          <div className="fact-card-text">{text}</div>
        </div>
      </div>
    </div>
  );
}

function SchemeStrip({ schemes = [] }) {
  if (!schemes.length) return null;

  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center gap-4 py-4 w-100 mt-lg-5 border-top border-bottom">
      {schemes.map(({ full, short, href }, idx) => (
        <motion.a
          key={idx}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          title={full}
          className="scheme-logo fill-effect"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.12 + 0.1, duration: 0.4 }}
        >
          {short.split("\n").map((word, widx) => (
            <span key={widx} style={{ display: "block" }}>
              {word}
            </span>
          ))}
        </motion.a>
      ))}
    </div>
  );
}

export default function EducationLoansScholarshipsTab({
  stageLabel = "After Class 12 ",
  parentClassName = "",
}) {
  // =========================
  // SECTION: Scholarships
  // =========================
  const scholarshipFactCards = [
    {
        icon: <Award size={22} />,
        title: "Scholarships at a glance",
        text: (
        <div className="small">
            <div className="d-flex justify-content-between gap-2">
            <b>Pre-Matric</b> <span className="text-muted">School level support</span>
            </div>
            <div className="d-flex justify-content-between gap-2">
            <b>Post-Matric</b> <span className="text-muted">UG/PG and above</span>
            </div>
            <div className="d-flex justify-content-between gap-2">
            <b>Merit-based</b> <span className="text-muted">Rewards academic effort</span>
            </div>
            <div className="d-flex justify-content-between gap-2">
            <b>Means-based</b> <span className="text-muted">Supports financial need</span>
            </div>
        </div>
        ),
    },
    {
        icon: <GraduationCap size={22} />,
        title: "What scholarships usually support",
        text: (
        <ul className="mb-0" style={{ paddingLeft: "1.1rem" }}>
            <li>Tuition / course fees (full or partial)</li>
            <li>Maintenance support for study continuity</li>
            <li>Special support for professional / technical pathways</li>
            <li>Renewal-based help across years (where applicable)</li>
        </ul>
        ),
    },
    {
        icon: <ShieldCheck size={22} />,
        title: "Why this matters after this stage",
        text: (
        <div className="small text-muted">
            <b>{stageLabel}</b>, costs rise (course fees, coaching, travel, hostel, books).
            Scholarships reduce drop-out risk and help students focus on learning instead of financial stress.
        </div>
        ),
    },
    ];


  const scholarshipSchemes = [
    {
      full: "National Scholarship Portal (NSP)",
      short: "NSP\nScholarships",
      href: "https://scholarships.gov.in",
    },
    {
      full: "WBMDFC Talent Support Program Portal",
      short: "WBMDFC\nTSP Portal",
      href: "https://tsp.wbmdfc.co.in",
    },
  ];

  // =========================
  // SECTION: Education Loans
  // =========================
 const loanFactCards = [
  {
    icon: <BadgeIndianRupee size={22} />,
    title: "WBMDFC Education Loan — a bridge to higher studies",
    text: (
      <div className="small text-muted">
        Designed to support eligible minority students in West Bengal when course costs are higher than what scholarships can cover.
        A trusted state initiative that enables serious higher education journeys.
      </div>
    ),
  },
  {
    icon: <UserCheck size={22} />,
    title: "Best fit for career-building courses",
    text: (
      <ul className="mb-0" style={{ paddingLeft: "1.1rem" }}>
        <li>Professional / technical programmes</li>
        <li>High-fee UG/PG courses where family support is limited</li>
        <li>Students who want to invest in long-term career outcomes</li>
      </ul>
    ),
  },
  {
    icon: <Landmark size={22} />,
    title: "Why WBMDFC loan matters",
    text: (
      <ul className="mb-0" style={{ paddingLeft: "1.1rem" }}>
        <li>Connects deserving students to structured financial support</li>
        <li>Helps continue education without compromising the course choice</li>
        <li>Complements scholarships (use both smartly)</li>
      </ul>
    ),
  },
];

  

  // =========================
  // Render
  // =========================
  return (
    <div className={parentClassName}>
      {/* ===================== Scholarships Section ===================== */}
      <section className="overflow-hidden py-5 bg-light">
        <div className="container py-lg-5 py-md-6">
          <div className="row align-items-center justify-content-between gy-5 gx-md-6">
            {/* LEFT */}
            <div className="col-lg-5">
              <MotionDiv
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
               

                <h2 className="section-heading mb-3">
                  Scholarships that
                  <br />
                  <span className="gradient-text">reduce your burden</span>
                </h2>

                <p className="text-muted mb-4" style={{ fontSize: "1.06rem" }}>
                  Scholarships are the first funding layer — they can cover fees, maintenance,
                  and study support based on category, merit, income, and course type. Apply early,
                  keep documents ready, and track renewal timelines.
                </p>

                {/* ✅ Only 1 CTA for this section */}
                <Link href="/scholarship/overview" className="btn btn-primary mt-lg-4">
                  Explore Scholarships <ArrowRight size={18} className="ms-1" />
                </Link>

              </MotionDiv>
            </div>

            {/* RIGHT */}
            <div className="col-lg-6">
              <div className="row g-3">
                {scholarshipFactCards.map((card, idx) => (
                  <MotionDiv
                    key={idx}
                    className="col-12"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                  >
                    <FactCard {...card} />
                  </MotionDiv>
                ))}
              </div>
            </div>
          </div>

  

          {/* WB Govt support note */}
          <div className="mt-4">
            <div className="p-4 rounded-4 border bg-white d-flex align-items-start gap-3">
              <div className="icon-wrapper" style={{ width: 44, height: 44 }}>
                <Landmark size={22} />
              </div>
              <div>
                <h5 className="mb-1">How West Bengal supports students</h5>
                <div className="text-muted">
                  Through scholarship portals, minority-focused assistance, institutional support,
                  and verified information — the goal is to ensure students can continue studies
                  without financial stress.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Loans Section ===================== */}
      <section className="overflow-hidden py-5 bg-white">
        <div className="container py-lg-5 py-md-6">
          <div className="row align-items-center justify-content-between gy-5 gx-md-6">
            {/* LEFT */}
            <div className="col-lg-5">
              <MotionDiv
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="section-heading mb-3">
                  Education Loans that
                  <br />
                  <span className="gradient-text">unlock opportunity</span>
                </h2>

                <p className="text-muted mb-4" style={{ fontSize: "1.06rem" }}>
                  When course cost is higher than scholarship coverage, education loans become the
                  bridge. For eligible students in West Bengal, WBMDFC provides an education loan
                  support option with special interest slabs (as per income/category).
                </p>

                <div className="small text-muted mb-3">
                  <b>Best for:</b> Professional/technical courses where total fees are high.
                  <br />
                  <b>Smart strategy:</b> Combine scholarships + loan (only when needed).
                </div>

                {/* ✅ Only 1 CTA for this section */}
                <Link href="/scholarship/education-loans" className="btn btn-primary mt-lg-3">
                  Explore Education Loans <ArrowRight size={18} className="ms-1" />
                </Link>
              </MotionDiv>
            </div>

            {/* RIGHT */}
            <div className="col-lg-6">
              <div className="row g-3">
                {loanFactCards.map((card, idx) => (
                  <MotionDiv
                    key={idx}
                    className="col-12"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                  >
                    <FactCard {...card} />
                  </MotionDiv>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
