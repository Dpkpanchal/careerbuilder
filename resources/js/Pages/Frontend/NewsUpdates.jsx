"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Link, usePage } from "@inertiajs/react";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { CalendarDays, ArrowRight } from "lucide-react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";

export default function NewsUpdatesPage({ news }) {
    const { url } = usePage();

    const queryParams = new URLSearchParams(
        url.split("?")[1]
    );

    const activeSlug = queryParams.get("news");

    const [selectedNews, setSelectedNews] = useState(null);

    // CATEGORY STATE
   const categoryFromUrl = queryParams.get("category") || "all";

   const [selectedCategory, setSelectedCategory] =
        useState(categoryFromUrl);

    // UNIQUE CATEGORIES
   const categories = useMemo(() => {
    const cats = news
        .map((item) => item.category)
        .filter(Boolean);

    return ["all", ...new Set(cats)];
}, [news]);

    // FILTERED NEWS
  const filteredNews =
    selectedCategory === "all"
        ? news
        : news.filter(
              (item) =>
                  item.category === selectedCategory
          );

    useEffect(() => {
        if (filteredNews.length > 0) {
            const activeNews = filteredNews.find(
                (item) => item.slug === activeSlug
            );

            setSelectedNews(
                activeNews || filteredNews[0]
            );
        }
    }, [filteredNews, activeSlug]);

    return (
        <FrontendLayout>

            {/* HERO SECTION */}
            <HeroInner title="News & Updates" />

            {/* MAIN SECTION */}
            <section
                className="py-5"
                style={{
                    background: "#f8fafc",
                    minHeight: "100vh"
                }}
            >
                <div className="container">

                    <div className="row g-4">

                        {/* LEFT SIDE */}
                        <div className="col-lg-8">

                            {selectedNews && (

                                <div
                                    className="bg-white shadow-lg border-0 overflow-hidden"
                                    style={{
                                        borderRadius: "24px"
                                    }}
                                >

                                    {/* IMAGE */}
                                    {selectedNews.image && (
                                        <div
                                            style={{
                                                height: "420px",
                                                overflow: "hidden"
                                            }}
                                        >
                                            <img
                                                src={selectedNews.image}
                                                alt={selectedNews.title}
                                                className="w-100 h-100"
                                                style={{
                                                    objectFit: "cover"
                                                }}
                                            />
                                        </div>
                                    )}

                                    {/* CONTENT */}
                                    <div className="p-4 p-lg-5">

                                        <div className="d-flex align-items-center gap-2 mb-3 text-muted">

                                            <CalendarDays size={18} />

                                            <small>
                                                {selectedNews.date}
                                            </small>

                                        </div>

                                        <h2
                                            className="fw-bold mb-4"
                                            style={{
                                                lineHeight: "1.3",
                                                fontSize:
                                                    "clamp(1.8rem,3vw,3rem)"
                                            }}
                                        >
                                            {selectedNews.title}
                                        </h2>

                                        <div
                                            className="news-content"
                                            style={{
                                                lineHeight: "1.9",
                                                fontSize: "17px",
                                                color: "#334155"
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    selectedNews.description
                                            }}
                                        />

                                    </div>

                                </div>

                            )}

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="col-lg-4">

                            <div
                                className="bg-white shadow-lg border-0 p-4"
                                style={{
                                    borderRadius: "24px",
                                    position: "sticky",
                                    top: "100px"
                                }}
                            >

                                {/* HEADER */}
                                <div className="d-flex align-items-center justify-content-between mb-4 gap-2 flex-wrap">

                                    <h4 className="fw-bold mb-0">
                                        Latest News
                                    </h4>

                                    <div className="d-flex align-items-center gap-2">

                                        {/* CATEGORY DROPDOWN */}
                                        <select
                                            className="form-select form-select-sm"
                                            value={selectedCategory}
                                          onChange={(e) => {
                                                const value = e.target.value;

                                                setSelectedCategory(value);

                                                const params = new URLSearchParams(window.location.search);

                                                params.set("category", value);

                                                window.history.replaceState(
                                                    {},
                                                    "",
                                                    `${window.location.pathname}?${params}`
                                                );
                                            }}
                                            style={{
                                                width: "180px",
                                                borderRadius: "12px"
                                            }}
                                        >
                                            {categories.map((cat) => (
                                                <option
                                                    key={cat}
                                                    value={cat}
                                                >
                                                    {cat === "all"
                                                        ? "All Categories"
                                                        : cat}
                                                </option>
                                            ))}
                                        </select>

                                        {/* COUNT */}
                                        <span
                                            className="badge bg-dark"
                                            style={{
                                                borderRadius: "30px"
                                            }}
                                        >
                                            {filteredNews.length}
                                        </span>

                                    </div>

                                </div>

                                {/* NEWS LIST */}
                                <div
                                    style={{
                                        maxHeight: "750px",
                                        overflowY: "auto",
                                        paddingRight: "5px"
                                    }}
                                >

                                    {filteredNews.map((item) => (

                                        <Link
                                            key={item.id}
                                            href={`${item.link}&category=${selectedCategory}`}
                                            className="mb-3 d-block text-decoration-none"
                                        >

                                            <div
                                                className={`p-3 border transition-all ${
                                                    selectedNews?.slug ===
                                                    item.slug
                                                        ? "border-dark shadow-sm"
                                                        : "border-light"
                                                }`}
                                                style={{
                                                    borderRadius: "18px",
                                                    background:
                                                        selectedNews?.slug ===
                                                        item.slug
                                                            ? "#f8fafc"
                                                            : "#fff",
                                                    transition: "0.3s"
                                                }}
                                            >

                                                <div className="d-flex gap-3">

                                                    {/* IMAGE */}
                                                    {item.image && (
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            width="95"
                                                            height="80"
                                                            style={{
                                                                objectFit:
                                                                    "cover",
                                                                borderRadius:
                                                                    "14px",
                                                                flexShrink: 0
                                                            }}
                                                        />
                                                    )}

                                                    {/* TEXT */}
                                                    <div className="flex-grow-1">

                                                        <small className="text-muted d-block mb-2">
                                                            {item.date}
                                                        </small>

                                                        <h6
                                                            className="fw-semibold mb-2"
                                                            style={{
                                                                lineHeight:
                                                                    "1.5"
                                                            }}
                                                        >
                                                            {item.title}
                                                        </h6>

                                                        <div
                                                            className="d-flex align-items-center gap-1 fw-medium"
                                                            style={{
                                                                fontSize:
                                                                    "14px",
                                                                color:
                                                                    "#0f172a"
                                                            }}
                                                        >
                                                            Read More
                                                            <ArrowRight
                                                                size={14}
                                                            />
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </Link>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </FrontendLayout>
    );
}