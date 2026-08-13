import React, { useState, useEffect, useRef, lazy, Suspense,useMemo } from "react";
import {
  Menu,
  X,
  Search,
  Compass,
  Layers,
  School,
  GraduationCap,
  Award,
  MoreHorizontal,
   ChevronLeft,
  ChevronRight,
  Download
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import MegaMenu from "./MegaMenu";

// import MegaMenu from "./MegaMenu_old";

// import SearchOverlay from "./SearchOverlay";
import { Link, usePage,router } from '@inertiajs/react';
import AccessibilityControls from "@/Components/Frontend/AccessibilityControls";



// Replace next/dynamic with React.lazy
const GoogleTranslateWidget = lazy(() => import('@/Components/Frontend/GoogleTranslateWidget'));
const LanguageToggle = lazy(() => import('@/Components/Frontend/LanguageToggle'));


// ===== Search Data (from MENUS) =====

export const CATEGORY_LANDING = [
  {
    key: "medical",
    name: "Medical — A Complete Guide",
    href: "/courses/medical-paramedical/medical",
    type: "Landing",
    description: "MBBS, Nursing, Paramedical, NEET, Allied Health and medical careers.",
    keywords: ["medical", "doctor", "docter", "mbbs", "neet", "aiims", "bds", "health", "clinic", "hospital"],
  },
 

  {
    key: "engineering",
    name: "Engineering — A Complete Guide",
    href: "/career/by-profession/engineering",
    type: "Landing",
    description: "B.Tech/Diploma, JEE/WBJEE, IIT/NIT and engineering careers.",
    keywords: ["engineering", "engineer", "btech", "b.tech", "be", "polytechnic", "diploma", "jee", "wbjee", "gate", "iit", "nit", "iiit"],
  },
  {
    key: "commerce",
    name: "Commerce & Management — A Complete Guide",
    href: "/courses/business-management/mba", // adjust if you create a better landing later
    type: "Landing",
    description: "B.Com, BBA/MBA, CA/CS/CMA and commerce careers.",
    keywords: ["commerce", "bcom", "b.com", "accounts", "accounting", "finance", "banking", "bba", "mba", "management", "business"],
  },
  // {
  //   key: "ca",
  //   name: "CA / CS / CMA — A Complete Guide",
  //   href: "/career/by-profession/ca",
  //   type: "Landing",
  //   description: "Professional commerce careers and exam paths.",
  //   keywords: ["ca", "chartered accountant", "cs", "company secretary", "cma", "cost accountant", "audit", "tax"],
  // },
  {
    key: "law",
    name: "Law — A Complete Guide",
    href: "/career/by-profession/law",
    type: "Landing",
    description: "LLB, integrated law, exams and law careers.",
    keywords: ["law", "llb", "clat", "nlu", "legal", "advocate", "judge"],
  },
 
  {
    key: "media",
    name: "Media & Journalism — A Complete Guide",
    href: "/career/by-profession/media",
    type: "Landing",
    description: "Media, journalism and mass communication careers.",
    keywords: ["media", "journalism", "mass comm", "communication", "reporter", "anchor"],
  },
  {
    key: "civil-services",
    name: "Civil Services — A Complete Guide",
    href: "/career/by-profession/civil-services",
    type: "Landing",
    description: "UPSC/WBCS and civil services careers.",
    keywords: ["civil", "upsc", "wbcs", "ias", "ips", "wbcse", "government exam"],
  },
  {
    key: "defence",
    name: "Defence Forces — A Complete Guide",
    href: "/career/by-profession/defence",
    type: "Landing",
    description: "Defence careers and exams (NDA/CDS etc).",
    keywords: ["defence", "army", "navy", "airforce", "nda", "cds", "tes", "afcat"],
  },
 
];

// Build a flat search index from the dynamic menus array
function buildSearchIndex(menus) {
  const items = [];
  const push = (name, href, type, description = "", tags = []) => {
    if (!name || !href) return;
    items.push({ name, href, type, description, tags });
  };

  (menus || []).forEach((menu) => {
    const topType =
      menu.key === "careers"  ? "Career"  :
      menu.key === "courses"  ? "Course"  :
      menu.key === "colleges" ? "College" :
      menu.key === "exams"    ? "Exam"    : "More";

    if (menu.noDropdown && menu.href) {
      push(menu.label, menu.href, topType, "", [menu.key]);
      return;
    }

    if (menu.tabs?.length) {
      menu.tabs.forEach((tab) => {
        tab.sections?.forEach((section) => {
          section.links?.forEach((ln) => {
            push(ln.label, ln.href, topType,
              section.title || tab.label || menu.label,
              [menu.key, tab.key, tab.label, section.title].filter(Boolean)
            );
          });
        });
      });
    }

    if (menu.columns?.length) {
      menu.columns.forEach((col) => {
        col.links?.forEach((ln) => {
          push(ln.label, ln.href, topType, col.title || menu.label,
            [menu.key, col.title].filter(Boolean)
          );
        });
      });
    }
  });

  const seen = new Set();
  return items.filter((it) => {
    if (seen.has(it.href)) return false;
    seen.add(it.href);
    return true;
  });
}



const norm = (s = "") => s.toLowerCase().trim();

const MOBILE_MENU_ICONS = {
  careers: <Compass size={18} className="me-2 text-primary" aria-hidden="true" focusable="false" />,
  courses: <Layers size={18} className="me-2 text-primary" aria-hidden="true" focusable="false" />,
  colleges: <School size={18} className="me-2 text-primary" aria-hidden="true" focusable="false" />,
  exams: <GraduationCap size={18} className="me-2 text-primary" aria-hidden="true" focusable="false" />,
  scholarships: <Award size={18} className="me-2 text-primary" aria-hidden="true" focusable="false" />,
};

export default function Navbar() {
 

  const [isScrolled, setIsScrolled] = useState(false);
  const [openKey, setOpenKey] = useState(null); // desktop mega menu
  const [menuOpen, setMenuOpen] = useState(false); // mobile sheet
  const [mobileOpenKey, setMobileOpenKey] = useState(null); // which mobile group open
  const [searchOpen, setSearchOpen] = useState(false);

  const { url, props } = usePage();
  const pathname = url;
  const MENUS = props.menus ?? [];
  const SEARCH_INDEX = useMemo(() => buildSearchIndex(MENUS), [MENUS]);


  // ✅ Search states
 const [query, setQuery] = useState("");
const [searchActive, setSearchActive] = useState(false);
const [landingOnly, setLandingOnly] = useState(false);
const [activeIndex, setActiveIndex] = useState(0);
const closeSearch = () => {
  setSearchActive(false);
  setLandingOnly(false);
  setActiveIndex(0);
};
const goTo = (href) => {
  if (!href) return;
  closeSearch();
  window.location.href = href;
};
  const searchWrapRef = useRef(null);
  const dropdownRef = useRef(null);





  /// Results must be INSIDE component (hook rule)
const results = useMemo(() => {
  const q = norm(query);

  // Enter mode: ALWAYS return all landing pages, matches first
  if (landingOnly) {
    if (!q) return CATEGORY_LANDING;

    const matches = CATEGORY_LANDING.filter((c) => {
      const hay = `${c.name} ${c.description || ""} ${(c.keywords || []).join(" ")}`.toLowerCase();
      return hay.includes(q);
    });

    const rest = CATEGORY_LANDING.filter((c) => !matches.includes(c));
    return [...matches, ...rest];
  }

  // Normal mode
  if (!q) return [];

  const matchedCategory = CATEGORY_LANDING.find((c) =>
    (c.keywords || []).some((k) => q.includes(norm(k)) || norm(k).includes(q))
  );

  if (matchedCategory) {
    const related = SEARCH_INDEX.filter((item) => {
      const hay = `${item.name} ${item.description || ""} ${(item.tags || []).join(" ")}`.toLowerCase();
      return (matchedCategory.keywords || []).some((k) => hay.includes(norm(k)));
    });

    return [matchedCategory, ...related];
  }

  return SEARCH_INDEX.filter((item) => {
    const hay = `${item.name} ${item.description || ""} ${(item.tags || []).join(" ")}`.toLowerCase();
    return hay.includes(q);
  });
}, [query, landingOnly, SEARCH_INDEX]);

const visibleResults = useMemo(() => results.slice(0, 12), [results]);

// reset on mode/query changes
useEffect(() => {
  setActiveIndex(0);
}, [query, landingOnly]);

// clamp within bounds
useEffect(() => {
  setActiveIndex((prev) => {
    if (!visibleResults.length) return 0;
    return Math.min(prev, visibleResults.length - 1);
  });
}, [visibleResults.length]);

  // ✅ close search on outside click
  useEffect(() => {
    const onDown = (e) => {
      if (!searchWrapRef.current) return;
      if (!searchWrapRef.current.contains(e.target)) {
        setSearchActive(false);
        setLandingOnly(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);
useEffect(() => {
  setActiveIndex(0);
}, [landingOnly, query, results.length]);


   // =========================
  // Desktop menu scroll chevrons
  // =========================
  const menuScrollRef = useRef(null);
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [showRightChevron, setShowRightChevron] = useState(false);

  const updateChevronVisibility = () => {
    const el = menuScrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setShowLeftChevron(scrollLeft > 10);
    setShowRightChevron(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    updateChevronVisibility();
    window.addEventListener("resize", updateChevronVisibility);
    return () => window.removeEventListener("resize", updateChevronVisibility);
  }, []);

  const scrollMenu = (dir) => {
    const el = menuScrollRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.7);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    setTimeout(updateChevronVisibility, 220);
  };



 const { auth } = usePage().props;
const user = auth?.user;





  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // close desktop dropdown on outside click
  useEffect(() => {
    const handle = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenKey(null);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  const openMenu = (key) => {
    setOpenKey((current) => (current === key ? null : key));
  };

  const handleMobileClose = () => {
    setMenuOpen(false);
    setMobileOpenKey(null);
  };

    const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Not redirecting now as per your plan
  };

  return (
    <>
      <motion.header
        className={`nav-warp w-100 ${isScrolled ? "scrolled-nav" : ""}`}
        role="banner"
      >
        {/* =========================
            LEVEL 1 (100% width)
            Logo + Search + Controls
        ========================== */}
        <div className="w-100 bg-white">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between pb-1">
              {/* Left: Logo */}
              <div className="d-flex align-items-center gap-3">
                {/* <a href="/career-builder">
                  <img
                    src="/images/wb-wbmdfc-logo.png"
                    className="main-logo"
                    alt="Government of West Bengal and WBMDFC logo"
                  />
                </a> */}
                 <div>
                    <Link href="/">
                    <img
                      src="/images/wb-wbmdfc-logo-6985ea3b0f2a9.webp"
                      className="main-logo"
                      alt="Government of West Bengal and WBMDFC logo"
                      loading="lazy"
                      width="73"
                      height="60"
                    />
                  </Link>
                  </div>

              </div>

              {/* Center: Search (desktop/tablet) */}
              {/* Center: Search (desktop/tablet) */}
              <div ref={searchWrapRef} className="position-relative d-md-block d-none" style={{ zIndex: 4010, minWidth: 500,  }}>
                {/* Backdrop */}
                {searchActive && (
                  <div
                    className="position-fixed top-0 start-0 w-100 h-100"
                    style={{ background: "rgba(0,0,0,0.45)", zIndex: 4000 }}
                    onMouseDown={closeSearch}
                    aria-hidden="true"
                  />
                )}

                {/* Input */}
                <form onSubmit={handleSearchSubmit} className="position-relative" style={{ zIndex: 4010 }}>
                  <Search
                    size={18}
                    className="position-absolute"
                    style={{ left: 14, top: "50%", transform: "translateY(-50%)", opacity: 0.7 }}
                    aria-hidden="true"
                    focusable="false"
                  />



                 <input
                    className="form-control input"
                    style={{
                      paddingLeft: 42,
                      height: 42,
                      borderRadius: 6,
                      border: "1px solid var(--color-border)",
                      backgroundColor: "#e4e4e4",
                    }}
                    placeholder="Search: Medical, Engineering..."
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setLandingOnly(false);      // typing => normal smart search
                      setSearchActive(true);
                      setActiveIndex(0);          // reset highlight on typing
                    }}
                    onFocus={() => {
                      setSearchActive(true);
                      setLandingOnly(true);       // ✅ focus => landing-only dropdown
                      setActiveIndex(0);
                    }}
                    onKeyDown={(e) => {
                      if (!searchActive) return;

                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        if (!visibleResults.length) return;
                        setActiveIndex((i) => Math.min(i + 1, visibleResults.length - 1));
                        return;
                      }

                      if (e.key === "ArrowUp") {
                        e.preventDefault();
                        if (!visibleResults.length) return;
                        setActiveIndex((i) => Math.max(i - 1, 0));
                        return;
                      }

                      // ✅ Enter now just opens highlighted result (no mode switching)
                      if (e.key === "Enter") {
                        e.preventDefault();
                        const picked = visibleResults[activeIndex];
                        if (picked?.href) goTo(picked.href);
                        return;
                      }

                      if (e.key === "Escape") {
                        e.preventDefault();
                        closeSearch();
                      }
                    }}
                    aria-label="Search"
                    autoComplete="off"
                  />

                </form>


                

                {/* Dropdown */}
                {searchActive && (landingOnly || query.trim()) && (
                  <div
                    className="position-absolute start-0 mt-2 bg-white shadow rounded-3"
                    style={{
                      zIndex: 4011,
                      width: "100%",
                      border: "1px solid rgba(0,0,0,.08)",
                      maxHeight: 500,
                      overflow: "auto",
                    }}
                  >
                    {visibleResults.length ? (
                      visibleResults.map((item, idx) => {
                        const isActive = idx === activeIndex;
                        return (
                         <a
                          key={`${item.href}-${idx}`}
                          href={item.href}
                          className="d-block text-decoration-none text-dark px-4 py-3"
                          onMouseEnter={() => setActiveIndex(idx)}
                          onMouseDown={(e) => {
                            e.preventDefault(); // prevents blur/close before select
                            goTo(item.href);
                          }}
                          style={{
                            borderBottom: "1px solid rgba(0,0,0,.06)",
                            backgroundColor: isActive ? "rgba(13,110,253,.12)" : "#fff",
                          }}
                        >

                            <div className="d-flex justify-content-between align-items-center gap-2">
                              <div className="fw-medium">{item.name}</div>
                              <span className="badge bg-primary-subtle text-dark">{item.type}</span>
                            </div>
                            {item.description && <div className="small " style={{color:"#777"}}>{item.description}</div>}
                          </a>
                        );
                      })
                    ) : (
                      !landingOnly && <div className="px-3 py-3 text-muted">No results found</div>
                    )}
                  </div>
                )}
              </div>




              {/* Right: Controls */}
              <div className="d-flex align-items-center gap-2 justify-content-end">

 <div className="d-none d-md-block">

                 <a
                      href="/career-builder.apk"
                      download="career_builder.apk"
                      className="btn btn-forum me-3 ms-3"
                      style={{  backgroundColor: "#008234", }}
                    >
                      Download Career App <Download className="cta-icon" />
                    </a>
                    </div>


                <div className="d-none d-md-block">

                  


                  <AccessibilityControls />
                </div>
                <a href="/forum"
                  type="button"
                  className="btn btn-forum  "> Join Forum</a>
                <div className="d-none d-md-block">
                  <GoogleTranslateWidget />
                </div>

                <LanguageToggle />

                  {user && (
                             <div className="user-dropdown">
                               {/* <div className={`user-wrap ${!user?.avatar ? 'no-avatar' : ''}`}>
                                       <img
                                         src={
                                           user?.avatar
                                             ? user.avatar.startsWith("http")
                                               ? user.avatar
                                               : `/storage/${user.avatar}`
                                             : "/images/user.png"   // same icon
                                         }
                                         alt="User profile"
                                       />
                                     </div> */}

                                     <div className={`user-wrap ${!user?.avatar ? 'no-avatar' : ''}`}>
                                        <img
                                            src={
                                                user?.avatar
                                                    ? user.avatar.startsWith("http") || user.avatar.startsWith("https")
                                                        ? user.avatar
                                                        : user.avatar.startsWith("/storage/")
                                                            ? user.avatar
                                                            : `/storage/${user.avatar}`
                                                    : "/images/user.png"
                                            }
                                            alt="User profile"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "/images/user.png";
                                            }}
                                        />
                                    </div>


               
                               <div className="user-menu">
                                 <a href="/forum/profile" className="user-menu-item">
                                   Profile
                                 </a>
               
                                 {/* <form method="post" action="/logout">
                                   <button type="submit" className="user-menu-item logout">
                                     Logout
                                   </button>
                                 </form> */}
               
                                 <form
                                   onSubmit={(e) => {
                                     e.preventDefault();
                                     router.post('/logout');
                                   }}
                                 >
                                   <button type="submit" className="user-menu-item logout">
                                     Logout
                                   </button>
                                 </form>
               
               
                               </div>
                             </div>
                           )}




                {/* Mobile burger */}
                <div className="d-xl-none">
                  <button
                    type="button"
                    className="btn p-0 border-0 bg-transparent"
                    onClick={() => (menuOpen ? handleMobileClose() : setMenuOpen(true))}
                    aria-label={menuOpen ? "Close main menu" : "Open main menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-main-menu"
                  >
                    {menuOpen ? (
                      <X size={22} className="cursor-pointer text-dark" aria-hidden="true" />
                    ) : (
                      <Menu size={22} className="cursor-pointer text-dark" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile search row (Level 1 bottom) */}
              <div ref={searchWrapRef} className="position-relative pb-1 d-md-none d-flex gap-3" style={{ zIndex: 4010, width: "100%" }}>
                {/* Backdrop */}
                {searchActive && (
                  <div
                    className="position-fixed top-0 start-0 w-100 h-100"
                    style={{ background: "rgba(0,0,0,0.45)", zIndex: 4000 }}
                    onMouseDown={closeSearch}
                    aria-hidden="true"
                  />
                )}

                {/* Input */}
                <form onSubmit={handleSearchSubmit} className="position-relative" style={{ zIndex: 4010 }}>
                  <Search
                    size={18}
                    className="position-absolute"
                    style={{ left: 14, top: "50%", transform: "translateY(-50%)", opacity: 0.7 }}
                    aria-hidden="true"
                    focusable="false"
                  />

                 <input
                    className="form-control input"
                    style={{
                      paddingLeft: 42,
                      height: 42,
                      borderRadius: 6,
                      border: "1px solid var(--color-border)",
                      backgroundColor: "#e4e4e4",
                    }}
                    placeholder="Search: Medical, Engineering..."
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setLandingOnly(false);      // typing => normal smart search
                      setSearchActive(true);
                      setActiveIndex(0);          // reset highlight on typing
                    }}
                    onFocus={() => {
                      setSearchActive(true);
                      setLandingOnly(true);       // ✅ focus => landing-only dropdown
                      setActiveIndex(0);
                    }}
                    onKeyDown={(e) => {
                      if (!searchActive) return;

                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        if (!visibleResults.length) return;
                        setActiveIndex((i) => Math.min(i + 1, visibleResults.length - 1));
                        return;
                      }

                      if (e.key === "ArrowUp") {
                        e.preventDefault();
                        if (!visibleResults.length) return;
                        setActiveIndex((i) => Math.max(i - 1, 0));
                        return;
                      }

                      // ✅ Enter now just opens highlighted result (no mode switching)
                      if (e.key === "Enter") {
                        e.preventDefault();
                        const picked = visibleResults[activeIndex];
                        if (picked?.href) goTo(picked.href);
                        return;
                      }

                      if (e.key === "Escape") {
                        e.preventDefault();
                        closeSearch();
                      }
                    }}
                    aria-label="Search"
                    autoComplete="off"
                  />

                </form>

                {/* Dropdown */}
                {searchActive && (landingOnly || query.trim()) && (
                  <div
                    className="position-absolute start-0 mt-2 bg-white shadow rounded-3"
                    style={{
                      zIndex: 4011,
                      width: "100%",
                      border: "1px solid rgba(0,0,0,.08)",
                      maxHeight: 500,
                      overflow: "auto",
                    }}
                  >
                    {visibleResults.length ? (
                      visibleResults.map((item, idx) => {
                        const isActive = idx === activeIndex;
                        return (
                          <a
                            key={`${item.href}-${idx}`}
                            href={item.href}
                            className="d-block text-decoration-none text-dark p-2"
                            onMouseEnter={() => setActiveIndex(idx)}
                            onClick={(e) => {
                              e.preventDefault();
                              goTo(item.href);
                            }}
                            style={{
                              borderBottom: "1px solid rgba(0,0,0,.06)",
                              backgroundColor: isActive ? "rgba(13,110,253,.12)" : "#fff",
                            }}
                          >
                            <div className="d-flex justify-content-between align-items-center gap-2">
                              <div className="fw-medium">{item.name}</div>
                              <span className="badge bg-primary-subtle text-dark">{item.type}</span>
                            </div>
                            {item.description && <div className="small " style={{color:"#777"}}>{item.description}</div>}
                          </a>
                        );
                      })
                    ) : (
                      !landingOnly && <div className="px-3 py-3 text-muted">No results found</div>
                    )}
                  </div>
                )}

                  <a
                    href="/career-builder.apk"
                    download="career_builder.apk"
                    className="btn btn-forum d-flex align-item-center"
                    style={{ width: "230px", backgroundColor: "#008234", justifyContent: "center" }}
                  >
                    Download Career App
                  </a>




                
              </div>

          </div>

          


        </div>

        {/* ✅ Separator line between levels (full width) */}
        <div className="w-100 border-top" />

        
       {/* =========================
              LEVEL 2 (100% width)
          ========================== */}
          <nav className="w-100 main-nav-wrap p-0" role="navigation" aria-label="Primary">
            <div className="container position-relative" ref={dropdownRef}>
              <div className="position-relative" style={{ overflow: "visible" }}>
                {/* Chevrons */}
                {showLeftChevron && (
                  <button
                    type="button"
                    className="btn nav-chevron position-absolute start-0 top-50 translate-middle-y shadow-sm"
                    onClick={() => scrollMenu("left")}
                    aria-label="Scroll menu left"
                  >
                    <ChevronLeft size={18} />
                  </button>
                )}

                {showRightChevron && (
                  <button
                    type="button"
                    className="btn nav-chevron position-absolute end-0 top-50 translate-middle-y shadow-sm"
                    onClick={() => scrollMenu("right")}
                    aria-label="Scroll menu right"
                  >
                    <ChevronRight size={18} />
                  </button>
                )}

                {/* Scroll ONLY the nav buttons (NOT the dropdown layer) */}
                <div
                  ref={menuScrollRef}
                  onScroll={updateChevronVisibility}
                  className="d-none d-xl-flex align-items-center gap-2 py-0"
                  style={{
                    overflowX: "auto",
                    overflowY: "visible",
                    whiteSpace: "nowrap",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    paddingLeft: showLeftChevron ? 48 : 0,
                    paddingRight: showRightChevron ? 48 : 0,
                  }}
                >
                  <style jsx>{`
                    div::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>

                  {MENUS.map((menu) => {
                    const hasDropdown = !menu.noDropdown;
                    const dropdownId = `desktop-submenu-${menu.key}`;

                    return (
                      <div key={menu.key} className="position-relative d-inline-block main-nav">
                        {menu.noDropdown ? (
                          <a
                            href={menu.href}
                            className={`btn btn-link px-3 py-3  ${
                              pathname === menu.href ? "text-white" : ""
                            }`}
                            style={{ fontWeight: 400,   color:"#ffffff", }}
                          >
                            {menu.label}
                          </a>
                        ) : (
                          <button
                            type="button"
                            className={`btn btn-link px-3 py-3 text-white ${
                              openKey === menu.key ? "active" : ""
                            }`}
                            onClick={() => openMenu(menu.key)}
                            aria-expanded={openKey === menu.key}
                            aria-haspopup="true"
                            aria-controls={openKey === menu.key ? dropdownId : undefined}
                            style={{ fontWeight: 400, color: "#ffffff!important" }}
                          >
                            {menu.label}
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* ✅ MegaMenu layer OUTSIDE the scroll container so it won't be clipped */}
                <AnimatePresence>
                  {openKey && (
                    <div
                      style={{
                        position: "relative",
                        zIndex: 2000,
                        overflow: "visible",
                      }}
                    >
                      {(() => {
                        const active = MENUS.find((m) => m.key === openKey);
                        if (!active || active.noDropdown) return null;
                        return (
                          <div
                            id={`desktop-submenu-${active.key}`}
                            role="group"
                            aria-label={`${active.label} submenu`}
                          >
                            <MegaMenu open={true} menu={active} onClose={() => setOpenKey(null)} />
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </nav>


      </motion.header>

      {/* MOBILE SLIDING PANEL (same as your code, no "more" code exists now) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-main-menu"
            role="navigation"
            aria-label="Mobile main menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 220 }}
            className="mobile-menu-panel position-fixed top-0 end-0 vh-100 bg-white d-flex flex-column"
            style={{ width: "82%", maxWidth: 420, zIndex: 1301 }}
          >
            {/* Header */}
            <div className="mobile-menu-header px-3 py-2 d-flex justify-content-between align-items-center border-bottom justify-content-end">
              <button
                type="button"
                className="btn btn-link p-0 text-dark"
                onClick={handleMobileClose}
                aria-label="Close main menu"
              >
                <X size={22} aria-hidden="true" focusable="false" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="mobile-menu-body flex-grow-1 overflow-auto">
              <div className="px-3 py-2">
                {MENUS.map((m) => {
                  const hasDropdown =
                    !m.noDropdown &&
                    ((m.columns && m.columns.length > 0) || (m.tabs && m.tabs.length > 0));

                  const isOpen = mobileOpenKey === m.key;
                  const submenuId = `mobile-submenu-${m.key}`;

                  return (
                    <div key={m.key} className="mobile-menu-item mb-2 pb-2 border-bottom">
                      {/* Top-level row */}
                      <div className="d-flex justify-content-between align-items-center">
                        <button
                          type="button"
                          className="mobile-menu-top-link d-flex align-items-center border-0 bg-transparent p-0"
                          onClick={() => {
                            if (hasDropdown) setMobileOpenKey(isOpen ? null : m.key);
                            else if (m.href) window.location.href = m.href;
                          }}
                          aria-expanded={hasDropdown ? isOpen : undefined}
                          aria-controls={hasDropdown ? submenuId : undefined}
                          aria-haspopup={hasDropdown ? "true" : undefined}
                        >
                          {MOBILE_MENU_ICONS[m.key] || null}
                          <span>{m.label}</span>
                        </button>

                        {hasDropdown && (
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary mobile-menu-toggle"
                            onClick={() => setMobileOpenKey(isOpen ? null : m.key)}
                            aria-label={isOpen ? `Collapse ${m.label}` : `Expand ${m.label}`}
                            aria-expanded={isOpen}
                            aria-controls={submenuId}
                          >
                            {isOpen ? "−" : "+"}
                          </button>
                        )}
                      </div>

                      {/* Submenu */}
                      {isOpen && hasDropdown && (
                        <div className="mt-2 ps-2" id={submenuId}>
                          {/* Case 1: column-based */}
                          {m.columns &&
                            m.columns.map((col, i) => (
                              <div key={i} className="mb-2">
                                {col.title && <div className="mobile-menu-section-title">{col.title}</div>}
                                <ul className="list-unstyled mb-1">
                                  {col.links.map((ln, j) => (
                                    <li key={j}>
                                      <a href={ln.href} className="mobile-menu-link" onClick={handleMobileClose}>
                                        {ln.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}

                          {/* Case 2: tabbed */}
                          {m.tabs &&
                            m.tabs.map((tab) => (
                              <div key={tab.key} className="mb-3">
                                <div className="mobile-menu-tab-label">{tab.label}</div>
                                {tab.sections?.map((section, idx) => (
                                  <div key={idx} className="mt-1 ps-2">
                                    {section.title && (
                                      <div className="mobile-menu-section-title">{section.title}</div>
                                    )}
                                    <ul className="list-unstyled mb-1">
                                      {section.links?.map((ln, k) => (
                                        <li key={k}>
                                          <a href={ln.href} className="mobile-menu-link" onClick={handleMobileClose}>
                                            {ln.label}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      

    </>
  );
}