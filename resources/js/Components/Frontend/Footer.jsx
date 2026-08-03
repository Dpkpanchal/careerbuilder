// "use client";

// import React, { useMemo, useState, useEffect } from "react";
// import { Link, usePage } from '@inertiajs/react';
// import { useReducedMotion, motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   Award,
//   Users,
//   GraduationCap,
//   ChevronRight,
//   Compass,
//   BookOpen,
//   Building2,
//   ClipboardList,
//   Home,
// } from "lucide-react";

// /* -----------------------------
//   Helpers (Fixed for route functions)
// ------------------------------ */
// function normalizeHref(href) {
//   if (!href) return null;
  
//   // If href is already a string (static path), process it
//   if (typeof href === 'string') {
//     let h = href.trim();
//     h = h.replace(/\s+/g, ""); // fixes "/exams/design /mass-comm"
//     if (!h.startsWith("/")) return null;
//     return h;
//   }
  
//   // If href is a function (deferred route call), we'll handle it differently
//   // Return the function itself to be executed later
//   return href;
// }

// // New function to execute route functions safely
// function resolveHref(href) {
//   if (typeof href === 'function') {
//     try {
//       const result = href();
//       if (!result) return null;
//       let h = String(result).trim();
//       h = h.replace(/\s+/g, "");
//       if (!h.startsWith("/")) return null;
//       return h;
//     } catch (error) {
//       console.warn('Route function error:', error);
//       return null;
//     }
//   }
//   return href;
// }

// function collectLinksFromTabbed(menus, menuKey) {
//   const menu = menus.find((m) => m.key === menuKey);
//   if (!menu?.tabbed || !Array.isArray(menu.tabs)) return [];
//   const out = [];
//   for (const tab of menu.tabs) {
//     for (const sec of tab.sections || []) {
//       for (const l of sec.links || []) {
//         // Store the href as-is (could be function or string)
//         const href = l.href;
//         if (href) {
//           out.push({ 
//             label: l.label, 
//             href, // Store raw href (function or string)
//             tabKey: tab.key, 
//             secTitle: sec.title 
//           });
//         }
//       }
//     }
//   }
//   return out;
// }

// function collectLinksFromColumns(menus, menuKey) {
//   const menu = menus.find((m) => m.key === menuKey);
//   if (!menu?.columns) return [];
//   const out = [];
//   for (const col of menu.columns || []) {
//     for (const l of col.links || []) {
//       const href = l.href;
//       if (href) {
//         out.push({ label: l.label, href, colTitle: col.title });
//       }
//     }
//   }
//   return out;
// }

// function pickFirstExisting(menus, menuKey) {
//   const menu = menus.find((m) => m.key === menuKey);
//   if (!menu) return null;
//   if (menu.href) return resolveHref(menu.href);

//   const tabbed = collectLinksFromTabbed(menus, menuKey);
//   if (tabbed.length) return resolveHref(tabbed[0].href);

//   const cols = collectLinksFromColumns(menus, menuKey);
//   if (cols.length) return resolveHref(cols[0].href);

//   return null;
// }

// function uniqByHref(list) {
//   const map = new Map();
//   for (const item of list) {
//     const resolvedHref = resolveHref(item.href);
//     if (resolvedHref && !map.has(resolvedHref)) {
//       map.set(resolvedHref, { ...item, href: resolvedHref });
//     }
//   }
//   return Array.from(map.values());
// }

// function topN(list, n) {
//   return list.slice(0, n);
// }

// /* -----------------------------
//   UI
// ------------------------------ */
// function FootLink({ href, label }) {
//   // Resolve the href (executes route functions)
//   const resolvedHref = resolveHref(href);
  
//   if (!resolvedHref) return null;
  
//   return (
//     <li className="cbf-li">
//       <Link href={resolvedHref} className="cbf-link" aria-label={label}>
//         <ChevronRight size={14} className="cbf-chev" aria-hidden="true" />
//         <span className="cbf-link-text">{label}</span>
//       </Link>
//     </li>
//   );
// }

// function Col({ title, icon, links }) {
//   // Filter out links with unresolved routes
//   const validLinks = links.filter(l => resolveHref(l.href));
  
//   return (
//     <section className="cbf-col" aria-label={title}>
//       <div className="cbf-col-head">
//         <span className="cbf-ico" aria-hidden="true">
//           {icon}
//         </span>
//         <h6 className="cbf-title m-0">{title}</h6>
//       </div>
//       <ul className="cbf-list" role="list">
//         {validLinks.map((l, i) => (
//           <FootLink key={`${resolveHref(l.href)}-${i}`} href={l.href} label={l.label} />
//         ))}
//       </ul>
//     </section>
//   );
// }

// function Accordion({ title, icon, links, defaultOpen = false }) {
//   // Filter out links with unresolved routes
//   const validLinks = links.filter(l => resolveHref(l.href));
  
//   return (
//     <details className="cbf-acc" open={defaultOpen}>
//       <summary className="cbf-acc-sum" aria-label={`Open ${title}`}>
//         <span className="cbf-acc-left">
//           <span className="cbf-ico" aria-hidden="true">
//             {icon}
//           </span>
//           <span className="cbf-title">{title}</span>
//         </span>
//         <span className="cbf-acc-arrow" aria-hidden="true">
//           <ChevronRight size={18} />
//         </span>
//       </summary>
//       <div className="cbf-acc-body">
//         <ul className="cbf-list" role="list">
//           {validLinks.map((l, i) => (
//             <FootLink key={`${resolveHref(l.href)}-${i}`} href={l.href} label={l.label} />
//           ))}
//         </ul>
//       </div>
//     </details>
//   );
// }

// export default function PortalFooterMinimal() {
//   const reduceMotion = useReducedMotion();
//   const { menus = [] } = usePage().props;


//   console.log(JSON.stringify(usePage().props.menus, null, 2))

//   const data = useMemo(() => {
//     const moreLinks = collectLinksFromColumns(menus, "more");

    
//     const forumHref = pickFirstExisting(menus, "forum");

//     // UPDATED: Use route function comparison properly
//     const scholarshipHref =
//       moreLinks.find((l) => {
//         const href = resolveHref(l.href);
//         return href && href.includes("scholarship");
//       })?.href ||
//       moreLinks.find((l) => l.label.toLowerCase().includes("scholarship"))?.href ||
//       null;

//     const careersAll = collectLinksFromTabbed(menus, "careers");
//     const stage = careersAll.filter((x) => x.tabKey === "by-stage");
//     const profession = careersAll.filter((x) => x.tabKey === "by-profession");
//     const future = careersAll.filter((x) => x.tabKey === "future-paths");

//     const coursesAll = collectLinksFromTabbed(menus, "courses");
//     const collegesAll = collectLinksFromTabbed(menus, "colleges");
//     const examsAll = collectLinksFromTabbed(menus, "exams");

//     // UPDATED: Support links - use all moreLinks with route functions
//     const supportLinks = moreLinks.map(link => ({
//       label: link.label,
//       href: link.href // Keep as function for later resolution
//     }));

//     // Minimal CTA: only 2-3 items, clean
//     const ctas = [
//       { 
//         title: "Scholarship", 
//         subtitle: "Schemes & support", 
//         href: scholarshipHref, 
//         icon: <Award size={18} /> 
//       },
//       { 
//         title: "Counsellors", 
//         subtitle: "Expert guidance", 
//         href: route('more.counsellorsDirectory'), 
//         icon: <Users size={18} /> 
//       },
//       { 
//         title: "Forum", 
//         subtitle: "Ask & learn", 
//         href: forumHref, 
//         icon: <GraduationCap size={18} /> 
//       },
//     ]
//     .filter((c) => !!resolveHref(c.href))
//     .map((c) => ({ 
//       ...c, 
//       href: resolveHref(c.href) 
//     }));

//     // 5 columns as per your design - UPDATED to match second version
//     return {
//       ctas,
//       columns: {
//         careers: topN(uniqByHref([...stage, ...profession, ...future]), 120),
//         courses: topN(uniqByHref(coursesAll), 120),
//         colleges: topN(uniqByHref(collegesAll), 100),
//         exams: topN(uniqByHref(examsAll), 80),
//         support: topN(
//           uniqByHref([
//             { 
//               label: "Scholarship Overview", 
//               href: scholarshipHref 
//             }, 
//             ...supportLinks
//           ].filter(item => item.href)), 
//           12
//         ),
//       },
//       year: new Date().getFullYear(),
//     };
//   }, [menus]);



//   const fade = {
//     hidden: { opacity: 0, y: 10 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: 0.05 * i, duration: 0.35, ease: "easeOut" },
//     }),
//   };

//   return (
//     <footer className="cbf" aria-label="Site footer">
//       {/* Top thin CTA strip (minimal) */}
//       <div className="cbf-cta">
//         <div className="container">
//           <div className="cbf-cta-row">
//             <div className="cbf-brand">
//               <span className="cbf-dot" aria-hidden="true" />
//               <div className="cbf-brand-text">
//                 <div className="cbf-brand-name">Career Builder</div>
//                 <div className="cbf-brand-sub">Guidance for West Bengal minority students</div>
//               </div>
//             </div>

//             <div className="cbf-cta-links" aria-label="Quick links">
//               {data.ctas.map((c, idx) => (
//                 <motion.div
//                   key={c.title}
//                   variants={reduceMotion ? undefined : fade}
//                   initial={reduceMotion ? undefined : "hidden"}
//                   whileInView={reduceMotion ? undefined : "visible"}
//                   viewport={{ once: true }}
//                   custom={idx + 1}
//                 >
//                   <Link href={c.href} className="cbf-cta-pill" aria-label={c.title}>
//                     <span className="cbf-cta-ico" aria-hidden="true">{c.icon}</span>
//                     <span className="cbf-cta-txt">
//                       <span className="cbf-cta-title">{c.title}</span>
//                       <span className="cbf-cta-sub">{c.subtitle}</span>
//                     </span>
//                     <ArrowUpRight size={16} className="cbf-cta-arrow" aria-hidden="true" />
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main minimal nav - UPDATED to 5 columns */}
//       <div className="cbf-nav">
//         <div className="container">
//           {/* Desktop: 5 columns - UPDATED */}
//           <div className="cbf-grid d-none d-lg-grid">
//             <Col title="Careers" icon={<Compass size={16} />} links={data.columns.careers} />
//             <Col title="Courses" icon={<BookOpen size={16} />} links={data.columns.courses} />
//             <Col title="Colleges" icon={<Building2 size={16} />} links={data.columns.colleges} />
//             <Col title="Exams" icon={<ClipboardList size={16} />} links={data.columns.exams} />
//             {/* UPDATED: Changed icon from ClipboardList to Home for Support column */}
//             <Col title="Support" icon={<Home size={16} />} links={data.columns.support} />
//           </div>

//           {/* Mobile: clean accordion - UPDATED */}
//           <div className="d-lg-none">
//             <Accordion title="Careers" icon={<Compass size={16} />} links={data.columns.careers} defaultOpen />
//             <Accordion title="Courses" icon={<BookOpen size={16} />} links={data.columns.courses} />
//             <Accordion title="Colleges" icon={<Building2 size={16} />} links={data.columns.colleges} />
//             <Accordion title="Exams" icon={<ClipboardList size={16} />} links={data.columns.exams} />
//             {/* UPDATED: Changed icon from ClipboardList to Home for Support accordion */}
//             <Accordion title="Support" icon={<Home size={16} />} links={data.columns.support} />
//           </div>
//         </div>
//       </div>

//       {/* Bottom minimal bar */}
//       <div className="cbf-bottom">
//         <div className="container">
//           <div className="cbf-bottom-row">
//             <div className="cbf-bottom-left">
//               <span className="cbf-pill">Powered by WBMDFC</span>
//               <span className="cbf-copy">© {data.year} Career Builder • All rights reserved</span>
//             </div>

//             <button
//               type="button"
//               className="cbf-top"
//               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//               aria-label="Back to top"
//             >
//               <span>Back to top</span>
//               <ChevronRight size={14} aria-hidden="true" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* UPDATED CSS for 5 columns */}
//      <style jsx global>{`
//         /* Root */
//         .cbf {
//           color: rgba(233, 238, 252, 0.92);
//           background:var(--color-secondary)
//         }
 
//         /* CTA (minimal, not boxy) */
//         .cbf-cta { padding: 18px 0; }
//         .cbf-cta-row {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 14px;
//           flex-wrap: wrap;
//         }
//         .cbf-brand {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           min-width: 240px;
//         }
//         .cbf-dot {
//           width: 10px; height: 10px; border-radius: 999px;
//           background: linear-gradient(135deg, rgba(77,171,255,1), rgba(34,193,195,1));
//           box-shadow: 0 0 0 3px rgba(77,171,255,0.14);
//           flex: 0 0 auto;
//         }
//         .cbf-brand-name { font-weight: 500; color: #fff; letter-spacing: -0.2px; }
//         .cbf-brand-sub { font-size: 0.88rem; color: rgba(233,238,252,0.72); margin-top: 2px; }
 
//         .cbf-cta-links {
//           display: flex;
//           gap: 10px;
//           flex-wrap: wrap;
//           align-items: center;
//           justify-content: flex-end;
//         }
 
//         .cbf-cta-pill {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           padding: 10px 12px;
//           border-radius: 999px;
 
//           text-decoration: none;
//           color: rgba(233,238,252,1);
 
//           background: rgba(255,255,255,0.1);
//           border: 1px solid rgba(255,255,255,0.1);
//           backdrop-filter: blur(10px);
//           transition: transform .18s ease, background .18s ease, border-color .18s ease;
//           white-space: nowrap;
//         }
//         .cbf-cta-pill:hover {
//           transform: translateY(-1px);
//           background: rgba(255,255,255,0.07);
//           border-color: rgba(77,171,255,0.22);
//         }
//         .cbf-cta-pill:focus-visible {
//           outline: 2px solid rgba(77,171,255,0.65);
//           outline-offset: 3px;
//         }
//         .cbf-cta-ico {
//           width: 30px; height: 30px;
//           display: grid; place-items: center;
//           border-radius: 999px;
//           background: rgba(77,171,255,0.10);
//           border: 1px solid rgba(77,171,255,0.16);
//           flex: 0 0 auto;
//         }
//         .cbf-cta-txt { display: flex; flex-direction: column; line-height: 1.05; }
//         .cbf-cta-title { font-weight: 500; color: #fff; font-size: 0.92rem; }
//         .cbf-cta-sub { font-size: 0.78rem; color: rgba(233,238,252,0.68); margin-top: 2px; }
//         .cbf-cta-arrow { opacity: 0.9; }
 
//         /* Nav */
//         .cbf-nav {
//           padding: 18px 0 22px;
//           border-top: 1px solid rgba(255,255,255,0.15);
//         }
 
//         /* 4 columns only, spacious */
//         .cbf-grid {
//           display: grid;
//           grid-template-columns: 1.2fr 1.1fr 1.1fr 0.9fr;
//           gap: 18px 28px;
//         }
 
//         /* No cards/boxes everywhere: just clean columns */
//         .cbf-col { min-width: 0; }
//         .cbf-col-head {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding-bottom: 10px;
//           border-bottom: 1px solid rgba(255,255,255,0.15);
//           margin-bottom: 10px;
//         }
//         .cbf-ico {
//           width: 28px; height: 28px;
//           display: grid; place-items: center;
//           border-radius: 10px;
//           background: rgba(255,255,255,.1);
//           border: 1px solid rgba(255,255,255,.1);
//           color: rgba(207,231,255,0.95);
//           flex: 0 0 auto;
//         }
//         .cbf-title { font-weight: 500; color: #fff; font-size: 0.95rem; letter-spacing: -0.15px; }
 
//         .cbf-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 2px; }
//         .cbf-li { margin: 0; }
 
//         /* Links: minimal, professional (no “blue default”) */
//         .cbf-link,
//         .cbf-link:visited {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding: 7px 4px;
//           text-decoration: none;
//           color: rgba(255,255,255,1);
//           font-size: 0.90rem;
//           line-height: 1.2;
//           border-radius: 10px;
//           transition: transform .15s ease, color .15s ease, background .15s ease;
//         }
//         .cbf-chev { opacity: 0.70; color: rgba(255,255,255,1); transition: transform .15s ease, opacity .15s ease; }
 
//         .cbf-link:hover {
//           color: #fff;
//           background: rgba(255,255,255,0.04);
//           transform: translateX(2px);
//         }
//         .cbf-link:hover .cbf-chev { transform: translateX(2px); opacity: 1; }
 
//         .cbf-link:focus-visible {
//           outline: 2px solid rgba(77,171,255,0.65);
//           outline-offset: 3px;
//         }
 
//         /* Mobile accordion: still minimal (no heavy borders) */
//         .cbf-acc {
//           border-radius: 14px;
//           background: rgba(255,255,255,0.03);
//           border: 1px solid rgba(255,255,255,0.08);
//           overflow: hidden;
//           margin-bottom: 10px;
//         }
//         .cbf-acc-sum {
//           cursor: pointer;
//           padding: 14px 12px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           list-style: none;
//           user-select: none;
//         }
//         .cbf-acc-sum::-webkit-details-marker { display: none; }
//         .cbf-acc-left { display: inline-flex; align-items: center; gap: 10px; }
//         .cbf-acc-arrow {
//           width: 34px; height: 34px;
//           display: grid; place-items: center;
//           border-radius: 12px;
//           background: rgba(255,255,255,0.03);
//           border: 1px solid rgba(255,255,255,0.08);
//           transition: transform .18s ease;
//         }
//         details[open] .cbf-acc-arrow { transform: rotate(90deg); }
//         .cbf-acc-body {
//           padding: 0 12px 12px;
//           border-top: 1px solid rgba(255,255,255,0.08);
//         }
 
//         /* Bottom */
//         .cbf-bottom {
//           padding: 14px 0;
//           border-top: 1px solid rgba(255,255,255,0.08);
//           background: rgba(0,0,0,0.18);
//         }
//         .cbf-bottom-row {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 10px;
//           flex-wrap: wrap;
//         }
//         .cbf-bottom-left { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
//         .cbf-pill {
//           padding: 6px 10px;
//           border-radius: 999px;
//           font-size: 0.82rem;
//           background: rgba(255,255,255,0.10);
//           border: 1px solid rgba(255,255,255,0.18);
//           color: rgba(233,238,252,0.92);
//           font-weight: 500;
//         }
//         .cbf-copy { color: rgba(233,238,252,0.68); font-size: 0.88rem; }
 
//         .cbf-top {
//           border: 1px solid rgba(255,255,255,0.10);
//           background: rgba(255,255,255,0.04);
//           color: rgba(233,238,252,0.88);
//           border-radius: 999px;
//           padding: 9px 12px;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           cursor: pointer;
//           transition: transform .15s ease, background .15s ease, border-color .15s ease;
//         }
//         .cbf-top:hover {
//           transform: translateY(-1px);
//           background: rgba(255,255,255,0.06);
//           border-color: rgba(77,171,255,0.22);
//         }
//         .cbf-top:focus-visible {
//           outline: 2px solid rgba(77,171,255,0.65);
//           outline-offset: 3px;
//         }
 
//         @media (prefers-reduced-motion: reduce) {
//           .cbf-link, .cbf-cta-pill, .cbf-top, .cbf-chev { transition: none; }
//         }
//       `}</style>
//     </footer>
//   );
// }


"use client";

import React, { useMemo, useState, useEffect } from "react";
import { Link, usePage } from '@inertiajs/react';
import { useReducedMotion, motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Users,
  GraduationCap,
  ChevronRight,
  Compass,
  BookOpen,
  Building2,
  ClipboardList,
  Home,
} from "lucide-react";

/* -----------------------------
  Helpers (Fixed for route functions)
------------------------------ */
function normalizeHref(href) {
  if (!href) return null;

  if (typeof href === 'string') {
    let h = href.trim();
    h = h.replace(/\s+/g, "");
    if (!h.startsWith("/")) return null;
    return h;
  }

  return href;
}

// Executes route functions safely, returns null instead of throwing
function resolveHref(href) {
  if (typeof href === 'function') {
    try {
      const result = href();
      if (!result) return null;
      let h = String(result).trim();
      h = h.replace(/\s+/g, "");
      if (!h.startsWith("/") && !h.startsWith("http")) return null;
      return h;
    } catch (error) {
      console.warn('Route function error:', error);
      return null;
    }
  }
  return href;
}

function collectLinksFromTabbed(menus, menuKey) {
  const menu = menus.find((m) => m.key === menuKey);
  if (!menu?.tabbed || !Array.isArray(menu.tabs)) return [];
  const out = [];
  for (const tab of menu.tabs) {
    for (const sec of tab.sections || []) {
      for (const l of sec.links || []) {
        const href = l.href;
        if (href) {
          out.push({
            label: l.label,
            href,
            tabKey: tab.key,
            secTitle: sec.title
          });
        }
      }
    }
  }
  return out;
}

// ✅ NEW: your backend does NOT send a "more" aggregator menu with
// `columns`. Instead, misc pages (Scholarship, Counsellors Directory,
// Jobs, Minority Schemes, Hostel, Admission Support, Coaching Support,
// Important Web Links) are each their own flat top-level menu entry
// with `tabbed: false` and a direct `href`. This reads those safely.
function getFlatMenu(menus, key) {
  const menu = menus.find((m) => m.key === key);
  if (!menu || !menu.href) return null;
  return { label: menu.label, href: menu.href, key: menu.key };
}

function collectFlatMenus(menus, keys) {
  return keys
    .map((key) => getFlatMenu(menus, key))
    .filter(Boolean);
}

function pickFirstExisting(menus, menuKey) {
  const menu = menus.find((m) => m.key === menuKey);
  if (!menu) return null;
  if (menu.href) return resolveHref(menu.href);

  const tabbed = collectLinksFromTabbed(menus, menuKey);
  if (tabbed.length) return resolveHref(tabbed[0].href);

  return null;
}

function uniqByHref(list) {
  const map = new Map();
  for (const item of list) {
    const resolvedHref = resolveHref(item.href);
    if (resolvedHref && !map.has(resolvedHref)) {
      map.set(resolvedHref, { ...item, href: resolvedHref });
    }
  }
  return Array.from(map.values());
}

function topN(list, n) {
  return list.slice(0, n);
}

/* -----------------------------
  UI
------------------------------ */
function FootLink({ href, label }) {
  const resolvedHref = resolveHref(href);

  if (!resolvedHref) return null;

  return (
    <li className="cbf-li">
      <Link href={resolvedHref} className="cbf-link" aria-label={label}>
        <ChevronRight size={14} className="cbf-chev" aria-hidden="true" />
        <span className="cbf-link-text">{label}</span>
      </Link>
    </li>
  );
}

function Col({ title, icon, links }) {
  const validLinks = links.filter(l => resolveHref(l.href));

  return (
    <section className="cbf-col" aria-label={title}>
      <div className="cbf-col-head">
        <span className="cbf-ico" aria-hidden="true">
          {icon}
        </span>
        <h6 className="cbf-title m-0">{title}</h6>
      </div>
      <ul className="cbf-list" role="list">
        {validLinks.map((l, i) => (
          <FootLink key={`${resolveHref(l.href)}-${i}`} href={l.href} label={l.label} />
        ))}
      </ul>
    </section>
  );
}

function Accordion({ title, icon, links, defaultOpen = false }) {
  const validLinks = links.filter(l => resolveHref(l.href));

  return (
    <details className="cbf-acc" open={defaultOpen}>
      <summary className="cbf-acc-sum" aria-label={`Open ${title}`}>
        <span className="cbf-acc-left">
          <span className="cbf-ico" aria-hidden="true">
            {icon}
          </span>
          <span className="cbf-title">{title}</span>
        </span>
        <span className="cbf-acc-arrow" aria-hidden="true">
          <ChevronRight size={18} />
        </span>
      </summary>
      <div className="cbf-acc-body">
        <ul className="cbf-list" role="list">
          {validLinks.map((l, i) => (
            <FootLink key={`${resolveHref(l.href)}-${i}`} href={l.href} label={l.label} />
          ))}
        </ul>
      </div>
    </details>
  );
}

export default function PortalFooterMinimal() {
  const reduceMotion = useReducedMotion();
  const { menus = [] } = usePage().props;

  const data = useMemo(() => {
    // ✅ FIXED: these are the actual flat menu keys your backend sends
    // (there is no "more" aggregator menu). Add/remove keys here as
    // your menu list grows.
    const FLAT_SUPPORT_KEYS = [
      "scholarship",
      "about",     // "Counsellors Directory" (key is named "about" on the backend)
      "jobs",
      "schemes",
      "hostel",
      "support",
      "coaching",
      "links",
    ];

    const flatMenus = collectFlatMenus(menus, FLAT_SUPPORT_KEYS);

    // ✅ FIXED: read Scholarship's href directly from its own menu entry
    // instead of searching inside a non-existent "more" menu.
    const scholarshipHref = getFlatMenu(menus, "scholarship")?.href || null;

    // ✅ FIXED: Counsellors Directory href comes straight from the "about"
    // menu entry's own `href` — no named route() call needed (and no
    // risk of crashing the whole footer if that route name doesn't exist).
    const counsellorsHref = getFlatMenu(menus, "about")?.href || null;

    // There's currently no "forum" menu in the backend data at all, so
    // this safely resolves to null and the Forum CTA just won't render
    // (rather than crashing). Add a "forum" key on the backend if you
    // want this pill to show.
    const forumHref = pickFirstExisting(menus, "forum");

    const careersAll = collectLinksFromTabbed(menus, "careers");
    const stage = careersAll.filter((x) => x.tabKey === "by-stage");
    const profession = careersAll.filter((x) => x.tabKey === "by-profession");
    const future = careersAll.filter((x) => x.tabKey === "future-paths");

    const coursesAll = collectLinksFromTabbed(menus, "courses");
    const collegesAll = collectLinksFromTabbed(menus, "colleges");
    const examsAll = collectLinksFromTabbed(menus, "exams");

    // Minimal CTA: only 2-3 items, clean
    const ctas = [
      {
        title: "Scholarship",
        subtitle: "Schemes & support",
        href: scholarshipHref,
        icon: <Award size={18} />
      },
      {
        title: "Counsellors",
        subtitle: "Expert guidance",
        href: counsellorsHref,
        icon: <Users size={18} />
      },
      {
        title: "Forum",
        subtitle: "Ask & learn",
        href: forumHref,
        icon: <GraduationCap size={18} />
      },
    ]
    .filter((c) => !!resolveHref(c.href))
    .map((c) => ({
      ...c,
      href: resolveHref(c.href)
    }));

    return {
      ctas,
      columns: {
        careers: topN(uniqByHref([...stage, ...profession, ...future]), 120),
        courses: topN(uniqByHref(coursesAll), 120),
        colleges: topN(uniqByHref(collegesAll), 100),
        exams: topN(uniqByHref(examsAll), 80),
        // ✅ FIXED: built straight from the flat top-level menus
        support: topN(uniqByHref(flatMenus), 12),
      },
      year: new Date().getFullYear(),
    };
  }, [menus]);



  const fade = {
    hidden: { opacity: 0, y: 10 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * i, duration: 0.35, ease: "easeOut" },
    }),
  };

  return (
    <footer className="cbf" aria-label="Site footer">
      {/* Top thin CTA strip (minimal) */}
      <div className="cbf-cta">
        <div className="container">
          <div className="cbf-cta-row">
            <div className="cbf-brand">
              <span className="cbf-dot" aria-hidden="true" />
              <div className="cbf-brand-text">
                <div className="cbf-brand-name">Career Builder</div>
                <div className="cbf-brand-sub">Guidance for West Bengal minority students</div>
              </div>
            </div>

            <div className="cbf-cta-links" aria-label="Quick links">
              {data.ctas.map((c, idx) => (
                <motion.div
                  key={c.title}
                  variants={reduceMotion ? undefined : fade}
                  initial={reduceMotion ? undefined : "hidden"}
                  whileInView={reduceMotion ? undefined : "visible"}
                  viewport={{ once: true }}
                  custom={idx + 1}
                >
                  <Link href={c.href} className="cbf-cta-pill" aria-label={c.title}>
                    <span className="cbf-cta-ico" aria-hidden="true">{c.icon}</span>
                    <span className="cbf-cta-txt">
                      <span className="cbf-cta-title">{c.title}</span>
                      <span className="cbf-cta-sub">{c.subtitle}</span>
                    </span>
                    <ArrowUpRight size={16} className="cbf-cta-arrow" aria-hidden="true" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main minimal nav - 5 columns */}
      <div className="cbf-nav">
        <div className="container">
          {/* Desktop: 5 columns */}
          <div className="cbf-grid d-none d-lg-grid">
            <Col title="Careers" icon={<Compass size={16} />} links={data.columns.careers} />
            <Col title="Courses" icon={<BookOpen size={16} />} links={data.columns.courses} />
            <Col title="Colleges" icon={<Building2 size={16} />} links={data.columns.colleges} />
            <Col title="Exams" icon={<ClipboardList size={16} />} links={data.columns.exams} />
            <Col title="Support" icon={<Home size={16} />} links={data.columns.support} />
          </div>

          {/* Mobile: clean accordion */}
          <div className="d-lg-none">
            <Accordion title="Careers" icon={<Compass size={16} />} links={data.columns.careers} defaultOpen />
            <Accordion title="Courses" icon={<BookOpen size={16} />} links={data.columns.courses} />
            <Accordion title="Colleges" icon={<Building2 size={16} />} links={data.columns.colleges} />
            <Accordion title="Exams" icon={<ClipboardList size={16} />} links={data.columns.exams} />
            <Accordion title="Support" icon={<Home size={16} />} links={data.columns.support} />
          </div>
        </div>
      </div>

      {/* Bottom minimal bar */}
      <div className="cbf-bottom">
        <div className="container">
          <div className="cbf-bottom-row">
            <div className="cbf-bottom-left">
              <span className="cbf-pill">Powered by WBMDFC</span>
              <span className="cbf-copy">© {data.year} Career Builder • All rights reserved</span>
            </div>

            <button
              type="button"
              className="cbf-top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ChevronRight size={14} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .cbf {
          color: rgba(233, 238, 252, 0.92);
          background:var(--color-secondary)
        }
        .cbf-cta { padding: 18px 0; }
        .cbf-cta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          flex-wrap: wrap;
        }
        .cbf-brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-width: 240px;
        }
        .cbf-dot {
          width: 10px; height: 10px; border-radius: 999px;
          background: linear-gradient(135deg, rgba(77,171,255,1), rgba(34,193,195,1));
          box-shadow: 0 0 0 3px rgba(77,171,255,0.14);
          flex: 0 0 auto;
        }
        .cbf-brand-name { font-weight: 500; color: #fff; letter-spacing: -0.2px; }
        .cbf-brand-sub { font-size: 0.88rem; color: rgba(233,238,252,0.72); margin-top: 2px; }

        .cbf-cta-links {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-end;
        }

        .cbf-cta-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 999px;

          text-decoration: none;
          color: rgba(233,238,252,1);

          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          transition: transform .18s ease, background .18s ease, border-color .18s ease;
          white-space: nowrap;
        }
        .cbf-cta-pill:hover {
          transform: translateY(-1px);
          background: rgba(255,255,255,0.07);
          border-color: rgba(77,171,255,0.22);
        }
        .cbf-cta-pill:focus-visible {
          outline: 2px solid rgba(77,171,255,0.65);
          outline-offset: 3px;
        }
        .cbf-cta-ico {
          width: 30px; height: 30px;
          display: grid; place-items: center;
          border-radius: 999px;
          background: rgba(77,171,255,0.10);
          border: 1px solid rgba(77,171,255,0.16);
          flex: 0 0 auto;
        }
        .cbf-cta-txt { display: flex; flex-direction: column; line-height: 1.05; }
        .cbf-cta-title { font-weight: 500; color: #fff; font-size: 0.92rem; }
        .cbf-cta-sub { font-size: 0.78rem; color: rgba(233,238,252,0.68); margin-top: 2px; }
        .cbf-cta-arrow { opacity: 0.9; }

        .cbf-nav {
          padding: 18px 0 22px;
          border-top: 1px solid rgba(255,255,255,0.15);
        }

        .cbf-grid {
          display: grid;
          grid-template-columns: 1.2fr 1.1fr 1.1fr 0.9fr;
          gap: 18px 28px;
        }

        .cbf-col { min-width: 0; }
        .cbf-col-head {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.15);
          margin-bottom: 10px;
        }
        .cbf-ico {
          width: 28px; height: 28px;
          display: grid; place-items: center;
          border-radius: 10px;
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,255,255,.1);
          color: rgba(207,231,255,0.95);
          flex: 0 0 auto;
        }
        .cbf-title { font-weight: 500; color: #fff; font-size: 0.95rem; letter-spacing: -0.15px; }

        .cbf-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 2px; }
        .cbf-li { margin: 0; }

        .cbf-link,
        .cbf-link:visited {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 7px 4px;
          text-decoration: none;
          color: rgba(255,255,255,1);
          font-size: 0.90rem;
          line-height: 1.2;
          border-radius: 10px;
          transition: transform .15s ease, color .15s ease, background .15s ease;
        }
        .cbf-chev { opacity: 0.70; color: rgba(255,255,255,1); transition: transform .15s ease, opacity .15s ease; }

        .cbf-link:hover {
          color: #fff;
          background: rgba(255,255,255,0.04);
          transform: translateX(2px);
        }
        .cbf-link:hover .cbf-chev { transform: translateX(2px); opacity: 1; }

        .cbf-link:focus-visible {
          outline: 2px solid rgba(77,171,255,0.65);
          outline-offset: 3px;
        }

        .cbf-acc {
          border-radius: 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
          margin-bottom: 10px;
        }
        .cbf-acc-sum {
          cursor: pointer;
          padding: 14px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          list-style: none;
          user-select: none;
        }
        .cbf-acc-sum::-webkit-details-marker { display: none; }
        .cbf-acc-left { display: inline-flex; align-items: center; gap: 10px; }
        .cbf-acc-arrow {
          width: 34px; height: 34px;
          display: grid; place-items: center;
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          transition: transform .18s ease;
        }
        details[open] .cbf-acc-arrow { transform: rotate(90deg); }
        .cbf-acc-body {
          padding: 0 12px 12px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .cbf-bottom {
          padding: 14px 0;
          border-top: 1px solid rgba(255,255,255,0.08);
          background: rgba(0,0,0,0.18);
        }
        .cbf-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
        }
        .cbf-bottom-left { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
        .cbf-pill {
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 0.82rem;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.18);
          color: rgba(233,238,252,0.92);
          font-weight: 500;
        }
        .cbf-copy { color: rgba(233,238,252,0.68); font-size: 0.88rem; }

        .cbf-top {
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.04);
          color: rgba(233,238,252,0.88);
          border-radius: 999px;
          padding: 9px 12px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: transform .15s ease, background .15s ease, border-color .15s ease;
        }
        .cbf-top:hover {
          transform: translateY(-1px);
          background: rgba(255,255,255,0.06);
          border-color: rgba(77,171,255,0.22);
        }
        .cbf-top:focus-visible {
          outline: 2px solid rgba(77,171,255,0.65);
          outline-offset: 3px;
        }

        @media (prefers-reduced-motion: reduce) {
          .cbf-link, .cbf-cta-pill, .cbf-top, .cbf-chev { transition: none; }
        }
      `}</style>
    </footer>
  );
}
