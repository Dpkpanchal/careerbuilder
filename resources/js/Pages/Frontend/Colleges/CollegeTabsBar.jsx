import React, { useRef, useEffect, useState } from "react";
import { Link, usePage } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CollegeTabsBar({ tabs, activeId }) {
  const tabRef = useRef(null);
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [showRightChevron, setShowRightChevron] = useState(true);

  const updateChevronVisibility = () => {
    if (tabRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabRef.current;
      setShowLeftChevron(scrollLeft > 10);
      setShowRightChevron(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = document.querySelector(`#tab-${activeId}`);
    if (el && tabRef.current) {
      const parent = tabRef.current;
      const offset =
        el.offsetLeft - parent.clientWidth / 2 + el.clientWidth / 2;
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

  return (
    <div className="tabsContainer">
      <div className="container">
        <div className="tabsWrapper">
          {showLeftChevron && (
            <button
              className="scrollButton"
              onClick={() => scrollTabs("left")}
            >
              <ChevronLeft size={20} />
            </button>
          )}

          <div
            className="tabsScroll"
            ref={tabRef}
            onScroll={updateChevronVisibility}
          >
            <div className="tabsInner">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  href={tab.href}
                  id={`tab-${tab.id}`}
                  className={`tabButton ${
                    activeId === tab.id ? "tabActive" : ""
                  }`}
                >
                  <span>{tab.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {showRightChevron && (
            <button
              className="scrollButton"
              onClick={() => scrollTabs("right")}
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
