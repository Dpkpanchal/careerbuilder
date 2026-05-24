import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import MegaMenu from "./MegaMenu";
import { MENUS } from "../../data/menus";

// import MegaMenu from "./MegaMenu_old";

import SearchOverlay from "./SearchOverlay";
import { Link, usePage,router } from '@inertiajs/react';
import AccessibilityControls from "@/Components/Frontend/AccessibilityControls";



// Replace next/dynamic with React.lazy
const GoogleTranslateWidget = lazy(() => import('@/Components/Frontend/GoogleTranslateWidget'));
const LanguageToggle = lazy(() => import('@/Components/Frontend/LanguageToggle'));


const MOBILE_MENU_ICONS = {
  careers: <Compass size={18} className="me-2 text-primary" aria-hidden="true" focusable="false" />,
  courses: <Layers size={18} className="me-2 text-primary" aria-hidden="true" focusable="false" />,
  colleges: <School size={18} className="me-2 text-primary" aria-hidden="true" focusable="false" />,
  exams: <GraduationCap size={18} className="me-2 text-primary" aria-hidden="true" focusable="false" />,
  scholarships: <Award size={18} className="me-2 text-primary" aria-hidden="true" focusable="false" />,
  more: <MoreHorizontal size={18} className="me-2 text-primary" aria-hidden="true" focusable="false" />,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openKey, setOpenKey] = useState(null); // desktop mega menu
  const [menuOpen, setMenuOpen] = useState(false); // mobile sheet
  const [mobileOpenKey, setMobileOpenKey] = useState(null); // which mobile group open
  const [searchOpen, setSearchOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { url } = usePage(); // Get current URL from Inertia
  const pathname = url;

  // const { menus = [] } = usePage().props;


  // console.log(menus);

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

  return (
    <>
      {/* DESKTOP / TOP NAV */}
      <motion.nav
        className={`nav-warp w-100 ${isScrolled ? "scrolled-nav" : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container position-relative d-flex align-items-center justify-content-between">
          {/* Left: Logo */}
          <div className="d-flex align-items-center gap-3">
            <div>
             <Link href="/">
              <img
                src="/images/wb-wbmdfc-logo-6985ea3b0f2a9.webp"
                className="main-logo"
                alt="Government of West Bengal and WBMDFC logo"
                loading="lazy"
                width="200"
                height="60"
              />
            </Link>
            </div>
          </div>

          {/* Center: links (desktop) */}
          <div
            className="d-none d-xl-flex align-items-center gap-2"
            ref={dropdownRef}
          >
            {MENUS.map((menu) => {
              const hasDropdown = !menu.noDropdown;

              const dropdownId = `desktop-submenu-${menu.key}`;

              return (
                <div
                    key={menu.key}
                    className={menu.key === "more" ? "position-relative" : ""}
                  >
                    {menu.noDropdown ? (
                      <a
                        href={menu.href}
                        className={`btn btn-link px-3 py-1 ${
                          pathname === menu.href ? " text-primary" : ""
                        }`}
                        style={{ fontWeight: 500 }}
                      >
                        {menu.label}
                      </a>
                    ) : (
                      <button
                        type="button"
                        className={`btn btn-link px-3 py-1 ${
                          openKey === menu.key ? "active" : ""
                        }`}
                        onClick={() => openMenu(menu.key)}
                        aria-expanded={openKey === menu.key}
                        aria-haspopup="true"
                        aria-controls={openKey === menu.key ? dropdownId : undefined}
                        style={{ fontWeight: 500 }}
                      >
                        {menu.label}
                      </button>
                    )}

                   
                    <AnimatePresence>
                      {openKey === menu.key && hasDropdown && (
                        menu.key === "more" ? (
                          <motion.div
                            id={dropdownId}
                            role="menu"
                            aria-label={`${menu.label} submenu`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="position-absolute bg-white shadow-sm rounded-3 p-3"
                            style={{
                              top: "100%",
                              right: 0,
                              minWidth: 220,
                              zIndex: 2000,
                            }}
                          >
                            {menu.columns[0].links.map((ln, i) => (
                              <a
                                key={i}
                                href={ln.href}
                                role="menuitem"
                                className={`d-block text-decoration-none py-1 ${
                                  pathname === ln.href
                                    ? "fw-bold text-primary"
                                    : "text-dark"
                                }`}
                                onClick={() => setOpenKey(null)}
                              >
                                {ln.label}
                              </a>
                            ))}
                          </motion.div>
                        ) : (
                          <div
                            id={dropdownId}
                            role="group"
                            aria-label={`${menu.label} submenu`}
                          >
                            <MegaMenu
                              open={true}
                              menu={menu}
                              onClose={() => setOpenKey(null)}
                            />
                          </div>
                        )
                      )}
                    </AnimatePresence>
                  </div>

              );
            })}

          </div>

          {/* Right: search / avatar / mobile toggle */}
          <div className="d-flex align-items-center gap-3">
            {/* If/when you re-enable Search, wrap icon in a button */}
           
            {/* <button
              type="button"
              className="btn p-0 border-0 bg-transparent"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
            >
              <Search
                size={20}
                className="cursor-pointer text-dark"
                aria-hidden="true"
                focusable="false"
              />
            </button> */}
           
            <div className="d-none d-md-block">
              <AccessibilityControls />
            </div>
            
            {/* Google Translate Widget with Suspense */}
            <Suspense fallback={<div className="translate-placeholder" style={{ width: 120, height: 20 }}></div>}>
              <GoogleTranslateWidget />
            </Suspense>
            
            {/* Language Toggle with Suspense */}
            <Suspense fallback={<div className="language-toggle-placeholder" style={{ width: 60, height: 20 }}></div>}>
              <LanguageToggle />
            </Suspense>
            
            {/* <div className="user-wrap">
              <img
                src="/images/user.png"
                alt="User profile"
              />
            </div> */}


            {user && (
              <div className="user-dropdown">
                <div className={`user-wrap ${!user?.avatar ? 'no-avatar' : ''}`}>
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
                onClick={() => {
                  if (menuOpen) {
                    handleMobileClose();
                  } else {
                    setMenuOpen(true);
                  }
                }}
                aria-label={menuOpen ? "Close main menu" : "Open main menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-main-menu"
              >
                {menuOpen ? (
                  <X
                    size={22}
                    className="cursor-pointer text-dark"
                    aria-hidden="true"
                    focusable="false"
                  />
                ) : (
                  <Menu
                    size={22}
                    className="cursor-pointer text-dark"
                    aria-hidden="true"
                    focusable="false"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE SLIDING PANEL */}
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
                    ((m.columns && m.columns.length > 0) ||
                      (m.tabs && m.tabs.length > 0));

                  const isOpen = mobileOpenKey === m.key;
                  const submenuId = `mobile-submenu-${m.key}`;

                  return (
                    <div
                      key={m.key}
                      className="mobile-menu-item mb-2 pb-2 border-bottom"
                    >
                      {/* Top-level row */}
                      <div className="d-flex justify-content-between align-items-center">
                        <button
                          type="button"
                          className="mobile-menu-top-link d-flex align-items-center border-0 bg-transparent p-0"
                          onClick={() => {
                            if (hasDropdown) {
                              setMobileOpenKey(isOpen ? null : m.key);
                            } else if (m.href) {
                              window.location.href = m.href;
                            }
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
                            onClick={() =>
                              setMobileOpenKey(isOpen ? null : m.key)
                            }
                            aria-label={
                              isOpen
                                ? `Collapse ${m.label} submenu`
                                : `Expand ${m.label} submenu`
                            }
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
                          {/* Case 1: classic column-based */}
                          {m.columns &&
                            m.columns.map((col, i) => (
                              <div key={i} className="mb-2">
                                {col.title && (
                                  <div className="mobile-menu-section-title">
                                    {col.title}
                                  </div>
                                )}
                                <ul className="list-unstyled mb-1">
                                  {col.links.map((ln, j) => (
                                    <li key={j}>
                                      <a
                                        href={ln.href}
                                        className="mobile-menu-link"
                                        onClick={handleMobileClose}
                                      >
                                        {ln.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}

                          {/* Case 2: tabbed Courses */}
                          {m.tabs &&
                            m.tabs.map((tab) => (
                              <div key={tab.key} className="mb-3">
                                <div className="mobile-menu-tab-label">
                                  {tab.label}
                                </div>
                                {tab.sections?.map((section, idx) => (
                                  <div key={idx} className="mt-1 ps-2">
                                    {section.title && (
                                      <div className="mobile-menu-section-title">
                                        {section.title}
                                      </div>
                                    )}
                                    <ul className="list-unstyled mb-1">
                                      {section.links?.map((ln, k) => (
                                        <li key={k}>
                                          <a
                                            href={ln.href}
                                            className="mobile-menu-link"
                                            onClick={handleMobileClose}
                                          >
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

      {/* Search overlay */}
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}