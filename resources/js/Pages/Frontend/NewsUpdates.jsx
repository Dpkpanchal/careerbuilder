import React, { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { CalendarDays, ArrowRight } from "lucide-react";
import HeroInner from '@/Components/Frontend/Hero/HeroInner';

export default function NewsUpdatesPage({ news }) {

const { url } = usePage();

const queryParams = new URLSearchParams(
    url.split("?")[1]
);

const activeSlug = queryParams.get("news");

const [selectedNews, setSelectedNews] = useState(null);

useEffect(() => {

    if (news.length > 0) {

        const activeNews = news.find(
            (item) => item.slug === activeSlug
        );

        setSelectedNews(activeNews || news[0]);
    }

}, [news, activeSlug]);

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
                                                fontSize: "clamp(1.8rem,3vw,3rem)"
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
                                                __html: selectedNews.description
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

                                <div className="d-flex align-items-center justify-content-between mb-4">

                                    <h4 className="fw-bold mb-0">
                                        Latest News
                                    </h4>

                                    <span
                                        className="badge bg-dark"
                                        style={{
                                            borderRadius: "30px"
                                        }}
                                    >
                                        {news.length}
                                    </span>

                                </div>

                                <div
                                    style={{
                                        maxHeight: "750px",
                                        overflowY: "auto",
                                        paddingRight: "5px"
                                    }}
                                >

                                    {news.map((item) => (

                                       <Link
                                            key={item.id}
                                            href={item.link}
                                            className="mb-3 d-block text-decoration-none"
                                        >

                                            <div
                                                className={`p-3 border transition-all ${
                                                   selectedNews?.slug === item.slug
                                                        ? "border-dark shadow-sm"
                                                        : "border-light"
                                                }`}
                                                style={{
                                                    borderRadius: "18px",
                                                    background:
                                                        selectedNews?.slug === item.slug
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
                                                                objectFit: "cover",
                                                                borderRadius: "14px",
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
                                                                lineHeight: "1.5"
                                                            }}
                                                        >
                                                            {item.title}
                                                        </h6>

                                                        <div
                                                            className="d-flex align-items-center gap-1 fw-medium"
                                                            style={{
                                                                fontSize: "14px",
                                                                color: "#0f172a"
                                                            }}
                                                        >
                                                            Read More
                                                            <ArrowRight size={14} />
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