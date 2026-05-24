import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, usePage } from '@inertiajs/react';
import { X } from "lucide-react";

export default function MegaMenu({ open, menu, onClose }) {
    const panelRef = useRef(null);
    const { url } = usePage(); // Get current URL from Inertia
    const pathname = url;

  const [activeTabKey, setActiveTabKey] = useState(
    menu?.tabs?.[0]?.key || null
  );

  const isTabbed = menu?.tabbed && Array.isArray(menu.tabs);
  const activeTab =
    isTabbed && activeTabKey
      ? menu.tabs.find((t) => t.key === activeTabKey)
      : null;

  // Reset active tab when menu changes
  useEffect(() => {
    if (menu?.tabs?.length) {
      setActiveTabKey(menu.tabs[0].key);
    } else {
      setActiveTabKey(null);
    }
  }, [menu]);

  // Focus the panel when it opens (for screen readers + keyboard users)
  useEffect(() => {
    if (open && panelRef.current) {
      panelRef.current.focus();
    }
  }, [open]);

  // Outside click closes the panel
  useEffect(() => {
    if (!open) return;

    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose]);

  // ESC key closes the panel
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open || !menu) return null;

  // ARIA id base
  const menuIdBase = menu.key || "mega-menu";

  return (
    <motion.div
      ref={panelRef}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18 }}
      className="mega-panel position-absolute"
      style={{ zIndex: 1150, left: 0, right: 0 }}
      // Make it programmatically focusable (tabIndex -1 is allowed)
      tabIndex={-1}
      // This is treated as a grouped menu region (parent nav already has aria-label)
      role="group"
      aria-label={menu.title || menu.label || "Submenu"}
    >
      <div className="container position-relative px-0">
        {/* Close button */}
        <button
          type="button"
          className="mega-close-btn"
          onClick={onClose}
          aria-label="Close submenu"
        >
          <X size={18} aria-hidden="true" focusable="false" />
        </button>

        {/* Menu heading */}
        {(menu.title || menu.subtitle) && (
          <div className="mb-3">
            {menu.title && (
              <div className="mega-title" id={`${menuIdBase}-heading`}>
                {menu.title}
              </div>
            )}
            {menu.subtitle && (
              <div className="mega-subtitle">{menu.subtitle}</div>
            )}
          </div>
        )}

        {/* ------------------------- */}
        {/* TABBED MODE (Courses etc.) */}
        {/* ------------------------- */}
        {isTabbed ? (
          <div className="d-flex ">
            {/* Left tabs */}
            <div className="mega-tab-container border-end p-3 bg-light">
              <div className="mega-heading mb-2">Categories</div>

              <ul
                className="list-unstyled mb-0"
                role="tablist"
                aria-label="Course categories"
              >
                {menu.tabs.map((tab) => {
                  const tabId = `${menuIdBase}-tab-${tab.key}`;
                  const panelId = `${menuIdBase}-panel-${tab.key}`;
                  const isActive = activeTabKey === tab.key;

                  return (
                    <li key={tab.key} className="mb-1">
                      <button
                        type="button"
                        id={tabId}
                        className={`mega-tab-btn ${isActive ? "active" : ""}`}
                        onClick={() => setActiveTabKey(tab.key)}
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={panelId}
                        tabIndex={isActive ? 0 : -1}
                      >
                        {tab.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Main columns */}
            <div
              className="d-flex flex-grow-1  flex-wrap"
              id={`${menuIdBase}-panel-${activeTabKey}`}
              role="tabpanel"
              aria-labelledby={`${menuIdBase}-tab-${activeTabKey}`}
            >
              {activeTab?.sections?.map((section, idx) => (
                <div
                  key={idx}
                  className="mega-col flex-grow-1 flex-basis-0"
                >
                  {section.title && (
                    <div className="mega-heading mb-2">{section.title}</div>
                  )}

                  <ul className="list-unstyled mb-0">
                    {section.links?.map((ln, i) => (
                      <li key={i} className="mb-1">
                        <a
                          href={ln.href}
                          className={`mega-link ${
                            pathname === ln.href ? "active" : ""
                          }`}
                        >
                          {ln.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ------------------------- */
          /* DEFAULT MODE (Careers etc.) */
          /* ------------------------- */
          <div className="d-flex gap-4 flex-wrap">
            {menu.columns?.map((col, idx) => (
              <div
                key={idx}
                className="mega-col flex-grow-1 flex-basis-0"
                style={{ minWidth: 200 }}
              >
                {col.title && (
                  <div className="mega-heading mb-2">{col.title}</div>
                )}

                <ul className="list-unstyled mb-0">
                  {col.links.map((ln, i) => (
                    <li key={i} className="mb-1">
                      <a
                        href={ln.href}
                        className={`mega-link ${
                          pathname === ln.href ? "active" : ""
                        }`}
                      >
                        {ln.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
