// // components/GoogleTranslateWidget.js
// 'use client';
// import { useEffect } from 'react';

// const GoogleTranslateWidget = () => {
//   useEffect(() => {
//     const addGoogleTranslateScript = () => {
//       if (document.getElementById('google-translate-script')) return;

//       const script = document.createElement('script');
//       script.id = 'google-translate-script';
//       script.src =
//         '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//       document.body.appendChild(script);

//       window.googleTranslateElementInit = function () {
//         new window.google.translate.TranslateElement(
//           {
//             pageLanguage: 'en',
//             includedLanguages: 'en,bn',
//             layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//             autoDisplay: false,
//           },
//           'google_translate_element'
//         );
//       };
//     };

//     addGoogleTranslateScript();
//   }, []);

//   return (
//     <div
//       id="google_translate_element"
//       style={{ display: 'none' }} // hide Google's default UI
//     />
//   );
// };

// export default GoogleTranslateWidget;


import { useEffect, useRef, useState } from "react";

const COOKIE_NAME = "googtrans";

function getCookie(name) {
  const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return m ? decodeURIComponent(m[2]) : "";
}

function parseLangFromGoogTrans(v) {
  // expected "/en/bn"
  const parts = (v || "").split("/");
  return parts[2] || "en";
}

export default function GoogleTranslateProvider({ children }) {
  const initiatedRef = useRef(false);
  const [ready, setReady] = useState(false);

  // ✅ Lazy loader (runs only once)
  useEffect(() => {
    window.__ensureGoogleTranslate = () => {
      if (initiatedRef.current) return;
      initiatedRef.current = true;

      window.googleTranslateElementInit = function () {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,bn",
            autoDisplay: false,
          },
          "google_translate_element"
        );

        setReady(true);

        const lang = parseLangFromGoogTrans(getCookie(COOKIE_NAME));
        if (lang && lang !== "en") {
          setTimeout(() => {
            const select = document.querySelector(".goog-te-combo");
            if (select) {
              select.value = lang;
              select.dispatchEvent(new Event("change"));
            }
          }, 250);
        }
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    return () => {};
  }, []);

  // ✅ DELAYED AUTO LOAD (PageSpeed safe)
  useEffect(() => {
    const lang = parseLangFromGoogTrans(getCookie(COOKIE_NAME));
    if (lang === "en") return;

    const loadWithDelay = () => {
      setTimeout(() => {
        window.__ensureGoogleTranslate?.();
      }, 2500); // ✅ guaranteed delay (PSI friendly)
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(loadWithDelay, { timeout: 4000 });
    } else {
      loadWithDelay();
    }

    // ✅ Interaction fallback (best practice)
    const onFirstInteraction = () => {
      window.__ensureGoogleTranslate?.();
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("scroll", onFirstInteraction);
      window.removeEventListener("click", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
    };

    window.addEventListener("scroll", onFirstInteraction, { once: true });
    window.addEventListener("click", onFirstInteraction, { once: true });
    window.addEventListener("keydown", onFirstInteraction, { once: true });

    return cleanup;
  }, []);

  return (
    <>
      {/* Hidden mount point */}
      <div id="google_translate_element" style={{ display: "none" }} />

      {/* Hide Google banner */}
      <style>{`
        .goog-te-banner-frame.skiptranslate { display: none !important; }
        body { top: 0 !important; }
      `}</style>

      {children}
    </>
  );
}
