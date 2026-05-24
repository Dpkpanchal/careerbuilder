"use client";

import React from "react";
import { Link } from "@inertiajs/react"; 
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  University,
  Globe,
  Users,
  BookOpen,
  Home,
  Link2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  MapPin,
} from "lucide-react";

const SUPPORT_ITEMS = [
 
  {
    title: "Admission Support Team",
    desc: "Support for admissions planning, course selection direction and next-step clarity.",
    href: route('more.admissionSupport'),
    icon: <University size={22} />,
    tone: "Admissions",
    level: "India",
  },
  {
    title: "Contact Details of SNAP Career Counsellors",
    desc: "Verified counsellor contacts to discuss stream choice, careers and personal guidance.",
    href: route('more.counsellorsDirectory'),
    icon: <Users size={22} />,
    tone: "Counselling",
    level: "Help",
  },
  {
    title: "Coaching Support Centre",
    desc: "Support centres and preparation resources for competitive exams and career readiness.",
    href: route('more.coachingSupport'),
    icon: <BookOpen size={22} />,
    tone: "Preparation",
    level: "Exams",
  },
  {
    title: "Information about Wakf-run Hostels",
    desc: "Hostel support information for students who need safe accommodation for studies.",
    href: route('more.waqfRunHostel'),
    icon: <Home size={22} />,
    tone: "Stay",
    level: "Hostels",
  },
   {
    title: "Jobs Opportunity in Different Sector",
    desc: "Sector-wise job areas and role types to help students understand where careers exist.",
    href: route('more.jobsOpportunities'),
    icon: <Briefcase size={22} />,
    tone: "Careers",
    level: "All",
  },
  {
    title: "Important Web Links",
    desc: "Official portals for scholarships, admissions, exams, results and student services.",
    href: route('more.importantWebLinks'),
    icon: <Link2 size={22} />,
    tone: "Official",
    level: "Links",
  },
];

// Split into two “rows” for a premium layout rhythm
const ROW_1 = SUPPORT_ITEMS.slice(0, 4);
const ROW_2 = SUPPORT_ITEMS.slice(4);

function FactTile({ icon, title, text, delay = 0 }) {
  return (
    <motion.div
      className="col-12"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
    >
      <div className="fact-card-wrapper">
        <div className="fact-card-inner">
          <div className="fact-card-icon">{icon}</div>
          <div style={{ flex: 1 }}>
            <h5 className="fact-card-title">{title}</h5>
            <div className="fact-card-text">{text}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}


function SupportBlock({ item, idx }) {
  return (
    <motion.div
      className="col-12 col-sm-6 d-flex"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: idx * 0.06 }}
    >
      <div className="nitDarkGlassCard w-100 d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="nitExamTag">{item.tone}</span>
          <span className="nitExamLevel">{item.level}</span>
        </div>

        <div className="nitExamTitle mb-1 d-flex align-items-start gap-2 mb-2">
          <span aria-hidden="true" className="d-inline-flex align-items-center mt-1">
            {item.icon}
          </span>
          <h4 className="fs-5 mb-0">{item.title}</h4>
        </div>

        <p className="nitExamText small mb-0">{item.desc}</p>

        {/* ✅ Professional Explore link (pretty + consistent) */}
        <div className="mt-3 mt-auto d-flex justify-content-end">
          <Link
            href={item.href}
            className="btn btn-sm btn-outline-primary rounded-pill d-inline-flex align-items-center gap-2 mt-2"
            aria-label={`Explore ${item.title}`}
          >
            Explore
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function StudentSupportTab({
}) {
  return (
    <section
      className={`studentSupportTabV2 overflow-hidden py-5 bg-light`}
    >
      <div className="container py-lg-4">
        {/* Header Row (KEEP AS-IS) */}
        <div className="row align-items-center justify-content-between gy-5 gx-md-6">
          {/* LEFT */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
             

              <h2 className="section-heading mb-3">
                Student <span className="gradient-text">Support</span>
              </h2>

              <p className="text-muted mb-4" style={{ fontSize: "1.12rem" }}>
                This is not just “information”. These are practical support resources — career guidance,
                admission help, counselling contacts, coaching support, accommodation info, and official links —
                so students can move forward with clarity and confidence.
              </p>

              <div className="supportMiniStats">
                <div className="supportMiniStat">
                  <Sparkles size={18} />
                  <span>
                    <b>Clarity</b> for next steps
                  </span>
                </div>
                <div className="supportMiniStat">
                  <ShieldCheck size={18} />
                  <span>
                    <b>Trusted</b> & verified support
                  </span>
                </div>
                <div className="supportMiniStat">
                  <MapPin size={18} />
                  <span>
                    <b>Local</b> + national resources
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: stacked premium tiles (KEEP AS-IS) */}
          <div className="col-lg-5">
            <div className="row g-3">
              <FactTile
                icon={<University size={22} />}
                title="Admission help that removes confusion"
                text="Shortlists, direction, and support resources — so students don’t feel lost in forms, timelines, or choices."
                delay={0.05}
              />
              <FactTile
                icon={<Users size={22} />}
                title="Counselling support when students need it"
                text="Because one correct decision at the right time can change the whole career path."
                delay={0.12}
              />
              <FactTile
                icon={<Briefcase size={22} />}
                title="Career awareness beyond “popular choices”"
                text="Sector-wise job opportunities help students see real options and realistic pathways."
                delay={0.19}
              />
            </div>
          </div>
        </div>

        {/* Directory Row 1 (KEEP STRUCTURE) */}
        <div className="mt-4 mt-lg-5">
          <div className="d-flex align-items-center justify-content-between gap-3 mb-3 mb-lg-5">
            <div>
              <h4 className="mb-1 supportSectionTitle">Support Directory</h4>
              <div className="text-muted">
                Quick access cards — each opens a dedicated page.
              </div>
            </div>
          </div>

          {/* ✅ UPDATED GRID: now uses col-sm-6 card system */}
          <div className="row g-3 g-lg-4">
            {ROW_1.map((item, idx) => (
              <SupportBlock key={item.href} item={item} idx={idx} />
            ))}
          </div>

       

          {/* Directory Row 2 (KEEP STRUCTURE) */}
          <div className="row g-3 g-lg-4 mt-1">
            {ROW_2.map((item, idx) => (
              <SupportBlock key={item.href} item={item} idx={idx + 4} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
