"use client";

import React, { useEffect, useMemo, useState } from "react";
import ByProfessionSectionsBar from "./ByProfessionSectionsBar";

export default function EngineeringPageClient({ children }) {
  const tabs = useMemo(
    () => [
      { id: "what-is", label: "What is", target: "#what-is" },
      { id: "fit", label: "Is it for me?", target: "#fit" },
      { id: "pathways", label: "Pathways", target: "#pathways" },
      { id: "branches", label: "Branches", target: "#branches" },
      { id: "courses", label: "Courses", target: "#courses" },
      { id: "exams", label: "Exams", target: "#exams" },
      { id: "colleges", label: "Colleges", target: "#colleges" },
      { id: "careers", label: "Careers", target: "#careers" },
      { id: "higher", label: "Higher studies", target: "#higher" },
      { id: "funding", label: "Loans & Scholarships", target: "#funding" },
      { id: "support", label: "Student support", target: "#support" },
    ],
    []
  );

  const [activeId, setActiveId] = useState(tabs[0]?.id || "what-is");

  const scrollToTarget = (target) => {
    const el = document.querySelector(target);
    if (!el) return;

    // If you have a fixed navbar, subtract its height here:
    const headerOffset = 160; // e.g. 72
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset - 10;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const ids = tabs.map((t) => t.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.35, 0.5],
        // If sticky header, use rootMargin to trigger earlier/later:
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [tabs]);

  return (
    <>
      <ByProfessionSectionsBar
        tabs={tabs}
        activeId={activeId}
        onTabClick={(id, target) => {
          setActiveId(id);
          scrollToTarget(target);
        }}
      />
      {children}
    </>
  );
}
