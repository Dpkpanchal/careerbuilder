"use client";
import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import styles from "./Overview.module.css";

// Color class mapping - map string keys to actual CSS module classes
const colorClassMap = {
  red: styles.red,
  pink: styles.pink,
  orange: styles.orange,
  blue: styles.blue,
  teal: styles.teal,
  violet: styles.violet,
  green: styles.green,
  yellow: styles.yellow,
  purple: styles.purple,
  indigo: styles.indigo,
  cyan: styles.cyan,
  gray: styles.gray,
};

export default function CareerOptionsAfter10({ overview }) {
  // If no data, return null or loading state
  if (!overview || !Array.isArray(overview) || overview.length === 0) {
    return (
      <section className={styles.section}>
        <div className="container text-center py-5">
          <h3>No Overview Data Available</h3>
        </div>
      </section>
    );
  }

  // Map string icon names to actual components
  const getIcon = (iconName) => {
    if (!iconName) return LucideIcons.BookOpen;
    const Icon = LucideIcons[iconName];
    return Icon || LucideIcons.BookOpen;
  };

  // Get the actual CSS module class from the string
  // The database stores "styles.red" but we need to extract "red" and map it
  const getColorClass = (colorClassString) => {
    if (!colorClassString) return styles.default;
    
    // Extract the color name from "styles.red" -> "red"
    const colorName = colorClassString.replace('styles.', '');
    
    // Return the mapped CSS module class or default
    return colorClassMap[colorName] || styles.default;
  };

  // Get color value for the icon
  const getColorValue = (colorClassString) => {
    if (!colorClassString) return '#6c757d';
    
    const colorName = colorClassString.replace('styles.', '');
    const colorMap = {
      red: '#dc3545',
      pink: '#e83e8c',
      orange: '#fd7e14',
      blue: '#0d6efd',
      teal: '#20c997',
      violet: '#6f42c1',
      green: '#198754',
      yellow: '#ffc107',
      purple: '#6f42c1',
      indigo: '#6610f2',
      cyan: '#0dcaf0',
      gray: '#6c757d',
    };
    return colorMap[colorName] || '#6c757d';
  };

  const panels = overview.map((item) => ({
    ...item,
    icon: getIcon(item.icon),
    colorClass: getColorClass(item.colorClass),
    colorValue: getColorValue(item.colorClass),
  }));

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
          {panels.map((p, index) => {
            const Icon = p.icon;
            return (
              <div key={p.id} className="col-12">
                <motion.article
                  className={`${styles.panel} ${p.colorClass} card h-100`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.06 * index }}
                >
                  <div className={styles.head}>
                    <div className={styles.iconWrap}>
                      <Icon size={20} color={p.colorValue} strokeWidth={2} />
                    </div>
                    <div className={styles.titleWrap}>
                      <div className={styles.titleText}>{p.title}</div>
                      <div className={styles.subtitleText}>{p.subtitle}</div>
                    </div>
                  </div>

                  <div className={styles.body}>
                    {p.content && p.content.map((line, i) => (
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