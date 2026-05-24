"use client";
import React, { useEffect, useState } from "react";

const FONT_SCALES = {
  
  xs:     0.75,
  small:  0.85,
  normal: 1,
  large:  1.15,
  xl:     1.30,
  xxl:    1.50,
};

const FONT_SIZE_ORDER = ["xs", "small", "normal", "large", "xl", "xxl"];

export default function AccessibilityControls() {
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("normal");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    /* =======================
       THEME INITIALIZATION
       ======================= */
    const storedTheme = window.localStorage.getItem("theme");
    let initialTheme = "light";
    if (storedTheme === "light" || storedTheme === "dark") {
      initialTheme = storedTheme;
    } else if (!isMobile) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      initialTheme = prefersDark ? "dark" : "light";
    } else {
      initialTheme = "light";
    }
    setTheme(initialTheme);
    root.setAttribute("data-theme", initialTheme);

    /* =======================
       FONT SIZE INITIALIZATION
       ======================= */
    const storedFont = window.localStorage.getItem("fontSize");
    const initialFont =
      storedFont && FONT_SCALES[storedFont] ? storedFont : "normal";
    setFontSize(initialFont);
    root.style.setProperty("--font-scale", FONT_SCALES[initialFont].toString());
  }, []);

  const updateFontSize = (sizeKey) => {
    const scale = FONT_SCALES[sizeKey];
    if (!scale) return;
    setFontSize(sizeKey);
    document.documentElement.style.setProperty("--font-scale", scale.toString());
    window.localStorage.setItem("fontSize", sizeKey);
  };

  const decreaseFontSize = () => {
    const currentIndex = FONT_SIZE_ORDER.indexOf(fontSize);
    if (currentIndex > 0) {
      updateFontSize(FONT_SIZE_ORDER[currentIndex - 1]);
    }
  };

  const increaseFontSize = () => {
    const currentIndex = FONT_SIZE_ORDER.indexOf(fontSize);
    if (currentIndex < FONT_SIZE_ORDER.length - 1) {
      updateFontSize(FONT_SIZE_ORDER[currentIndex + 1]);
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <div
      className="accessibility-controls"
      aria-label="Accessibility settings"
    >
      {/* Font size controls */}
      <div role="group" aria-label="Adjust text size">
        <button
          type="button"
          className="accessibility-btn"
          onClick={decreaseFontSize}
          aria-pressed={fontSize === FONT_SIZE_ORDER[0]}
          disabled={fontSize === FONT_SIZE_ORDER[0]}
        >
          A-
        </button>
        <button
          type="button"
          className="accessibility-btn"
          onClick={() => updateFontSize("normal")}
          aria-pressed={fontSize === "normal"}
        >
          A
        </button>
        <button
          type="button"
          className="accessibility-btn"
          onClick={increaseFontSize}
          aria-pressed={fontSize === FONT_SIZE_ORDER[FONT_SIZE_ORDER.length - 1]}
          disabled={fontSize === FONT_SIZE_ORDER[FONT_SIZE_ORDER.length - 1]}
        >
          A+
        </button>
      </div>

      {/* Theme toggle */}
      <button
        type="button"
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-pressed={theme === "dark"}
        aria-label={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}