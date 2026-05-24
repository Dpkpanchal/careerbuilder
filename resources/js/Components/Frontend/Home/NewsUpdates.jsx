
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@inertiajs/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function NewsUpdates({ newsData = {}, categories = [] , section}) {
  const [activeTab, setActiveTab] = useState("all");

  // 🔥 Merge all news for "All" tab
  const mergedNews = Object.values(newsData).flat();

  const activeNews =
    activeTab === "all"
      ? mergedNews
      : newsData[activeTab] || [];

  // 🔥 Dynamic tabs
  const tabs = [
    { id: "all", name: "All" },
    ...categories,
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container my-lg-5">

        {/* HEADER */}
        <div className="text-center mb-5">
          <h2 className="section-heading text-dark">
            {section?.heading_prefix}{" "}
            <span className="gradient-text">{section?.heading_highlight}</span>
          </h2>
          <p className="text-muted">
            {section?.subheading}
          </p>
        </div>

        {/* TABS */}
        <div className="tab2-wrapper">
          <div className="d-flex tab2 gap-3 mb-5">
            {tabs.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`btn d-flex align-items-center ${
                  activeTab === cat.id ? "news-active" : "not-active"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* NEWS SLIDER */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
              className="pb-5"
            >
              {activeNews.length ? (
                activeNews.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="h-100 py-2">
                      <div className="card h-100 border-0 news-card overflow-hidden hover-lift">

                        <div className="card-body">
                          <h5 className="bg-light text-dark py-3 px-3 rounded-4 mb-2 line-clamp line-clamp-2">
                            {item.title}
                          </h5>

                          <div className="px-lg-3">
                            <span className="mt-2 mb-1 d-block text-light small">
                              {item.date}
                            </span>

                            <p className="text-muted small mb-3 line-clamp line-clamp-3">
                              {item.desc}
                            </p>

                            {/* 🔥 Safe link */}
                            {/* <a
                              href={item.link || "#"}
                              className="fw-normal text-secondary small"
                              style={{
                                pointerEvents: item.link ? "auto" : "none",
                                opacity: item.link ? 1 : 0.5,
                              }}
                            >
                              Read More
                            </a> */}

                            <Link
                                href={item.link}
                                className="fw-semibold small text-decoration-none d-inline-flex align-items-center gap-1"
                                style={{
                                    color: "#0f172a",
                                    transition: "0.3s",
                                }}
                            >
                                Read More →
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <div className="text-center text-muted w-100">
                  No news available
                </div>
              )}
            </Swiper>
          </motion.div>
        </AnimatePresence>

        {/* VIEW ALL BUTTON */}
        <div className="text-center mt-4 d-none">
          <Link href="/news" className="btn btn-primary px-5 shadow-sm fw-semibold">
            View All Updates
          </Link>
        </div>

      </div>

      {/* STYLES */}
      <style jsx>{`
        .news-card {
          border-radius: 37px;
          transition: all 0.3s ease;
          padding: 0px;
          border: 2px solid #e4e4e4 !important;
        }

        .news-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border-color: var(--color-secondary) !important;
        }

        .news-card h5 {
          font-size: 17px;
          font-weight: 500;
          line-height: 1.4;
        }

        .tab2-wrapper {
          display: inline-flex !important;
          justify-content: center !important;
          width: 100%;
        }

        .tab2 {
          border-bottom: 2px solid #e4e4e4 !important;
        }

        .btn {
          color: #555 !important;
          font-weight: 500 !important;
        }

        .news-active,
        .not-active:hover {
          color: var(--color-secondary) !important;
          border-radius: 0px;
          border-bottom: 2px solid var(--color-secondary);
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #0d6efd;
          font-size: 16px;
        }

        .swiper-pagination-bullet-active {
          background: #0d6efd !important;
        }

        @media (max-width: 767px) {
          .tab2 {
            white-space: nowrap;
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
}
