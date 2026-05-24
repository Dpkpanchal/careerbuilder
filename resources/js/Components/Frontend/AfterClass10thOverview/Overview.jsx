"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Award,
  Layers,
  Wrench,
  GraduationCap,
  Clipboard,
} from "lucide-react";
import styles from "./Overview.module.css";

/**
 * CareerOptionsAfter10
 * - Presents six distinct paths as separate panels (no accordion)
 * - Content is the literal extracted text for each path
 */
export default function CareerOptionsAfter10() {
  const panels = [
    {
      id: "school",
      title: "School Exam",
      subtitle: "Class XI / Class XII (Sc / Arts / Com)",
      icon: BookOpen,
      colorClass: styles.red,
      content: [
        "School Exam → Class XI (Sc/Arts/Com) → School Exam → Class XII (Sc/Arts/Com)",
        
      ],
    },

    {
      id: "jhmat",
      title: "JHMAT Exam",
      subtitle: "(Reqd 50% in Cl X)",
      icon: Award,
      colorClass: styles.pink,
      content: [
        "JHMAT Exam (Reqd 50% in Cl X)",
        "Diploma in Hotel Management (3 yrs) → Bachelor in Hotel Management (3 yrs) → Master in Hotel Management (2 yrs) → MBA in Hotel Management (2 yrs)",
      ],
    },

    {
      id: "classx_girls",
      title: "Class X Marks Basis",
      subtitle: "(Girls only)",
      icon: GraduationCap,
      colorClass: styles.orange,
      content: [
        "Class X Marks Basis (Girls only) → Auxiliary Nursing & Midwifery (ANM) 18 months",
      ],
    },

    {
      id: "jexpo",
      title: "JEXPO Exam",
      subtitle: "POLYTECHNIC DIPLOMA",
      icon: Layers,
      colorClass: styles.blue,
      content: [
        "JEXPO Exam → POLYTECHNIC DIPLOMA",
        "AMIE → GATE EXAM → M.Tec → Ph.D.",
        "B.E. → GATE EXAM → M.Tec → Ph.D.",
        "Part Time B.E. → GATE EXAM → M.Tec → Ph.D.",
        "Post Diploma",
        "VOCLET Exam → POLYTECHNIC DIPLOMA → JELET Exam (2 yrs lat entry)",
        "AT IGNOU → B.Tech in Construction Management / B.Tech in Water Resource Engg",
        "Part Time B.E. (Jadavpur University & B.E. (5 yrs evening)) → GATE Exam → M.Tec → Ph.D.",
      ],
    },

    {
      id: "vocational",
      title: "VOCATIONAL COURSE",
      subtitle: "Equivalent to Cl XII (2 yrs) Course",
      icon: BookOpen,
      colorClass: styles.teal,
      content: [
        "Vocational Course at (X+2) Level",
        "Business & Commerce (BC) 2 yrs:",
        "  1. Marketing & Salesmanship",
        "  2. Modern office practice",
        "  3. Library & Information Science",
        "  4. Travel & Tourism",
        "",
        "Engineering & Technology (E) 2 yrs:",
        "  1. Civil Construction & Maintenance Technology",
        "  2. Automobile Mechanics",
        "  3. Air-Conditioner & Refrigerator mechanic",
        "  4. Computer Assembly & Maintenance",
        "  5. Pump Operator & Maintenance",
        "  6. IT Enabled Services",
        "  7. Maintenance & repair of Elec. Domestic Appliances",
        "  8. Consumer & Industrial Electronics Mechanics",
        "",
        "Agriculture (AG) 2 yrs:",
        "  1. Pisciculture",
        "  2. Dairy Farming",
        "  3. Preservation & Processing of Fruits & Vegetables",
        "  4. Horticulture nursery management",
        "  5. Compost & vermicompost",
        "  6. Plantation worker",
        "",
        "Home Science (HS) 2 yrs:",
        "  1. Health Care",
        "  2. Food preservation & processing",
        "  3. Mother and child care",
        "  4. Interior Decoration",
        "",
        "For details please visit Website — www.wbscvet.org",
      ],
    },

    {
      id: "iti",
      title: "ITI / ITC / JR POLYTECHNIC",
      subtitle: "(Equivalent to Cl XI & XII (2 yrs) Course)",
      icon: Wrench,
      colorClass: styles.violet,
      content: [
        "ITI After Class X (M & B Category)",
        "M-Category (examples):",
        "  Tool & Die maker — 3 yrs",
        "  Draftsman mechanical — 2 yrs",
        "  Draftsman civil — 2 yrs",
        "  Electrician — 2 yrs",
        "  Fitter — 2 yrs",
        "  Electronic mechanic — 2 yrs",
        "  Grinder — 2 yrs",
        "  Instrument mechanic — 2 yrs",
        "  Machinist — 2 yrs",
        "  Radio & TV Mechanic — 2 yrs",
        "  Refrigeration & Air Cond. Mechanic — 2 yrs",
        "  Surveyor — 2 yrs",
        "  Turner — 2 yrs",
        "  Motor vehicle Mechanic — 2 yrs",
        "  Information Technology & Electronic System Maintenance — 2 yrs",
        "  Plastic Processing Operator — 1 yrs",
        "  Desk Making — 1 yrs",
        "  Hair & skin care — 1 yrs",
        "  Diesel Mechanic — 1 yrs",
        "",
        "B-Category (examples):",
        "  Automobile — 1 yrs",
        "  Production & manufacturing — 1 yrs",
        "  Instrumentation — 1 yrs",
        "  Chemical — 1 yrs",
        "  Electrical — 1 yrs",
        "  Construction & Wood working — 1 yrs",
        "  Information Technology — 1 yrs",
        "  Apparel — 1 yrs",
        "  Agricultural Machinery — 1 yrs",
        "  Food Processing — 1 yrs",
        "  Hospitality — 1 yrs",
        "  Electronic — 1 yrs",
        "  Fabrication – Fitting & Welding — 1 yrs",
        "",
        "For details please visit Website — www.ctwb.org",
        "10% seat reserved for NCVT students",
        "60% in Class X (Polytechnic Diploma)",
      ],
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          CAREER OPTIONS AFTER CLASS-10
        </motion.h2>

        <p className={styles.lead}>Six distinct entry paths — exact options listed below.</p>

        <div className="row gx-4 gy-4">
          {panels.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.id} className="col-12 ">
                <motion.article
                  className={`${styles.panel} ${p.colorClass} card h-100`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.06 * panels.indexOf(p) }}
                >
                  <div className={styles.head}>
                    <div className={styles.iconWrap}>
                      <Icon size={20} />
                    </div>
                    <div className={styles.titleWrap}>
                      <div className={styles.titleText}>{p.title}</div>
                      <div className={styles.subtitleText}>{p.subtitle}</div>
                    </div>
                  </div>

                  <div className={styles.body}>
                    {p.content.map((line, i) => (
                      <p key={i} className={styles.line}>
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.article>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-4">
          <small className="text-muted">Content above is the literal transcribed chart content.</small>
        </div>
      </div>
    </section>
  );
}
