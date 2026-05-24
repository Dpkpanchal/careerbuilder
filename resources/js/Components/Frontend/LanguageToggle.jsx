// import { useEffect, useState } from 'react';

// const LanguageSwitcher = () => {
//   const [currentLang, setCurrentLang] = useState('en');

//   useEffect(() => {
//     const getCurrentLangFromCookie = () => {
//       const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
//       return match?.[1] || 'en';
//     };

//     setCurrentLang(getCurrentLangFromCookie());
//   }, []);

//   const changeLanguage = (langCode) => {
//     const cookieValue = `/en/${langCode}`;

//     // set cookie (path)
//     document.cookie = `googtrans=${cookieValue}; path=/;`;

//     // set cookie (domain)
//     document.cookie = `googtrans=${cookieValue}; domain=${window.location.hostname}; path=/;`;

//     // optional: support www / subdomain
//     document.cookie = `googtrans=${cookieValue}; domain=.${window.location.hostname}; path=/;`;

//     window.location.reload();
//   };

//   return (
//     <div className="lang-btn-wrap notranslate">
//       <button
//         className={`btn btn-sm ${currentLang === 'en' ? 'active' : ''}`}
//         onClick={() => changeLanguage('en')}
//       >
//         <span className="notranslate">English</span>
//       </button>

//       <button
//         className={`btn btn-sm ${currentLang === 'bn' ? 'active' : ''}`}
//         onClick={() => changeLanguage('bn')}
//       >
//         <span className="notranslate">বাংলা</span>
//       </button>
//     </div>
//   );
// };

// export default LanguageSwitcher;

import { useEffect, useState } from "react";
 
const COOKIE_NAME = "googtrans";
 
function getCookie(name) {
  const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return m ? decodeURIComponent(m[2]) : "";
}
 
// function setCookie(name, value) {
//   const maxAge = 60 * 60 * 24 * 365; // 1 year
//   document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}`;
//   document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; domain=${window.location.hostname}`;
// }

function setCookie(name, value) {
  const maxAge = 60 * 60 * 24 * 365;

  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; path=/; max-age=${maxAge}; domain=.${window.location.hostname}`;
}
 
// function clearCookie(name) {
//   document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
//   document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${window.location.hostname}; path=/;`;
// }

function clearCookie(name) {
  const domain = window.location.hostname;

  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${domain}; path=/;`;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${domain}; path=/;`;
}
 
function parseLangFromGoogTrans(v) {
  const parts = (v || "").split("/");
  return parts[2] || "en";
}
 
// function applyLang(lang) {
//   const trySet = () => {
//     const select = document.querySelector(".goog-te-combo");
//     if (!select) return setTimeout(trySet, 200);
//     select.value = lang;
//     select.dispatchEvent(new Event("change"));
//   };
//   trySet();
// }

function applyLang(lang) {
  const observer = new MutationObserver(() => {
    const select = document.querySelector(".goog-te-combo");

    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
      observer.disconnect();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

 
export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState("en");
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    setCurrentLang(parseLangFromGoogTrans(getCookie(COOKIE_NAME)));
  }, []);
 
  const changeLanguage = (langCode) => {
   if (langCode === "en") {
      clearCookie(COOKIE_NAME);
      setCurrentLang("en");

      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = "en";
        select.dispatchEvent(new Event("change"));
      }

      window.location.reload();
      return;
    }
 
    // Set cookie
    setCookie(COOKIE_NAME, `/en/${langCode}`);
    setCurrentLang(langCode);
 
    // Load translate only when needed (PSI-safe)
    setLoading(true);
    window.__ensureGoogleTranslate?.();
 
    // Apply once ready
    setTimeout(() => {
      applyLang(langCode);
      setLoading(false);
    }, 400);
  };
 
  return (
<div className="lang-btn-wrap notranslate">
<button
        type="button"
        className={`btn btn-sm ${currentLang === "en" ? "active" : ""}`}
        onClick={() => changeLanguage("en")}
>
<span className="notranslate">English</span>
</button>
 
      <button
        type="button"
        className={`btn btn-sm ${currentLang === "bn" ? "active" : ""}`}
        onClick={() => changeLanguage("bn")}
        disabled={loading}
>
<span className="notranslate">বাংলা</span>
        {loading ? "…" : ""}
</button>
</div>
  );
}

