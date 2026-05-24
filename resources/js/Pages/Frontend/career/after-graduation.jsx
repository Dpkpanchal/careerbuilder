"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import * as Lucide from "lucide-react";

import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import ArtsOverviewTab from "@/Components/Frontend/AfterClass12/AfterGraduationBSc";
import RelatedExamBsc from "@/Components/Frontend/AfterClass12/RelatedExamBsc";
import EducationLoansScholarshipsTab from "@/Components/Frontend/AfterClass12/EducationLoansScholarshipsTab";
import FrontendLayout from '@/Layouts/FrontendLayout';

import styles from "./AfterClass8.module.css"; 

const { ChevronLeft, ChevronRight, GraduationCap, Map, BookOpen, Award, HelpCircle, ClipboardList } =
  Lucide;

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "related-exams", label: "Related Exams" },
  { id: "loan-scholarship", label: "Education Loans & Scholarships" },
];

export default function AfterClass12ArtsPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [explorerFocus, setExplorerFocus] = useState(null);

  const tabRef = useRef(null);
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [showRightChevron, setShowRightChevron] = useState(true);

  const updateChevronVisibility = () => {
    if (!tabRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = tabRef.current;
    setShowLeftChevron(scrollLeft > 10);
    setShowRightChevron(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = document.querySelector(`#tab-${activeTab}`);
    if (el && tabRef.current) {
      const parent = tabRef.current;
      const offset = el.offsetLeft - parent.clientWidth / 2 + el.clientWidth / 2;
      parent.scrollTo({ left: offset, behavior: "smooth" });
    }
    updateChevronVisibility();
  }, [activeTab]);

  useEffect(() => {
    updateChevronVisibility();
    window.addEventListener("resize", updateChevronVisibility);
    return () => window.removeEventListener("resize", updateChevronVisibility);
  }, []);

  const scrollTabs = (direction) => {
    const el = tabRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.6);
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
    setTimeout(updateChevronVisibility, 300);
  };

  const renderIcon = (IconComponent, props = {}) => {
    const Icon = IconComponent ?? HelpCircle;
    return <Icon {...props} />;
  };

  const handleSelectPath = (focusKey) => {
    setExplorerFocus(focusKey);
    setActiveTab("courses");
    setTimeout(() => {
      const el = document.getElementById("arts-course-explorer");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  return (
    <FrontendLayout>
      <div className={styles.pageContainer}>
        {/* Hero */}
        <HeroInner title="Career Options — After Graduation/Bachelor Degree (B.Sc)" breadcrumb="Graduation/Bachelor Degree (B.Sc) " />

        {/* Tabs */}
        <div className={styles.tabsContainer}>
          <div className="container">
            <div className={styles.tabsWrapper}>
              {showLeftChevron && (
                <button className={styles.scrollButton} onClick={() => scrollTabs("left")}>
                  {renderIcon(ChevronLeft, { size: 20 })}
                </button>
              )}

              <div className={styles.tabsScroll} ref={tabRef} onScroll={updateChevronVisibility}>
                <div className={styles.tabsInner}>
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      id={`tab-${tab.id}`}
                      className={`${styles.tabButton} ${activeTab === tab.id ? styles.tabActive : ""}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                    
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {showRightChevron && (
                <button className={styles.scrollButton} onClick={() => scrollTabs("right")}>
                  {renderIcon(ChevronRight, { size: 20 })}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <main >
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "overview" && <ArtsOverviewTab />}

            {activeTab === "related-exams" && <RelatedExamBsc onSelectPath={handleSelectPath} />}

            {activeTab === "loan-scholarship" && <EducationLoansScholarshipsTab />}
          </motion.div>
        </main>
      </div>
    </FrontendLayout>
  );
}
