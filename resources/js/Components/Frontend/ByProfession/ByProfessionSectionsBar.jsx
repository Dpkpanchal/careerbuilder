"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * tabs: [{ id: "what-is", label: "What is", target: "#what-is" }, ...]
 * activeId: string
 * onTabClick: (id) => void  // triggers smooth scroll
 */
export default function ByProfessionSectionsBar({ tabs = [], activeId, onTabClick }) {
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
    const el = document.querySelector(`#tab-${activeId}`);
    if (el && tabRef.current) {
      const parent = tabRef.current;
      const offset = el.offsetLeft - parent.clientWidth / 2 + el.clientWidth / 2;
      parent.scrollTo({ left: offset, behavior: "smooth" });
    }
    updateChevronVisibility();
  }, [activeId]);

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

  const handleClick = (e, tab) => {
    e.preventDefault();
    onTabClick?.(tab.id, tab.target);
  };

  return (
    <div className="tabsContainer byProfessionTabsContainer">
      <div className="container">
        <div className="tabsWrapper">
          {showLeftChevron && (
            <button className="scrollButton" onClick={() => scrollTabs("left")} aria-label="Scroll left">
              <ChevronLeft size={20} />
            </button>
          )}

          <div className="tabsScroll" ref={tabRef} onScroll={updateChevronVisibility}>
            <div className="tabsInner">
              {tabs.map((tab) => (
                <a
                  key={tab.id}
                  href={tab.target}
                  id={`tab-${tab.id}`}
                  onClick={(e) => handleClick(e, tab)}
                  className={`tabButton ${activeId === tab.id ? "tabActive" : ""}`}
                  aria-current={activeId === tab.id ? "page" : undefined}
                >
                  <span>{tab.label}</span>
                </a>
              ))}
            </div>
          </div>

          {showRightChevron && (
            <button className="scrollButton" onClick={() => scrollTabs("right")} aria-label="Scroll right">
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
