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

// Map DB icon string → actual component
const ICON_MAP = {
  Award,
  BadgeCheck,
  ShieldCheck,
  GraduationCap,
  BadgeIndianRupee,
  CalendarClock,
  UserCheck,
  Landmark,
};

function FactCard({ icon, title, content }) {
  const IconComponent = ICON_MAP[icon] || Award;

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
        <div className="fact-card-icon">
          <IconComponent size={22} />
        </div>
        <div style={{ flex: 1 }}>
          <h5 className="fact-card-title">{title}</h5>
          <div
            className="fact-card-text"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
}

function SchemeStrip({ schemes = [] }) {
  if (!schemes.length) return null;

  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center gap-4 py-4 w-100 mt-lg-5 border-top border-bottom">
      {schemes.map((scheme, idx) => (
        <motion.a
          key={scheme.id}
          href={scheme.href}
          target="_blank"
          rel="noreferrer noopener"
          title={scheme.full_name}
          className="scheme-logo fill-effect"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.12 + 0.1, duration: 0.4 }}
        >
          {scheme.short_name.split("\n").map((word, widx) => (
            <span key={widx} style={{ display: "block" }}>
              {word}
            </span>
          ))}
        </motion.a>
      ))}
    </div>
  );
}

function FundSection({ section }) {
  const bgClass = section.bg_style === "white" ? "bg-white" : "bg-light";

  return (
    <section className={`overflow-hidden py-5 ${bgClass}`}>
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
                {section.heading_prefix}
                <br />
                <span className="gradient-text">{section.heading_highlight}</span>
              </h2>

              <p className="text-muted mb-4" style={{ fontSize: "1.06rem" }}>
                {section.description}
              </p>

              {section.extra_note && (
                <div
                  className="small text-muted mb-3"
                  dangerouslySetInnerHTML={{ __html: section.extra_note }}
                />
              )}

              {/* ✅ Only 1 CTA for this section */}
              <Link href={section.cta_link} className="btn btn-primary mt-lg-3">
                {section.cta_label} <ArrowRight size={18} className="ms-1" />
              </Link>
            </MotionDiv>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6">
            <div className="row g-3">
              {section.cards.map((card, idx) => (
                <MotionDiv
                  key={card.id}
                  className="col-12"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                >
                  <FactCard icon={card.icon} title={card.title} content={card.content} />
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>

        {/* Scheme logos (only shows if section has schemes, e.g. Scholarships) */}
        <SchemeStrip schemes={section.schemes} />

        {/* Info note box (only shows if note_title is set, e.g. WB Govt support note) */}
        {section.note_title && (
          <div className="mt-4">
            <div className="p-4 rounded-4 border bg-white d-flex align-items-start gap-3">
              <div className="icon-wrapper" style={{ width: 44, height: 44 }}>
                <Landmark size={22} />
              </div>
              <div>
                <h5 className="mb-1">{section.note_title}</h5>
                <div className="text-muted">{section.note_text}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default function EducationLoansScholarshipsTab({
  sections = [],
  parentClassName = "",
}) {
  return (
    <div className={parentClassName}>
      {sections.map((section) => (
        <FundSection key={section.id} section={section} />
      ))}
    </div>
  );
}
