"use client";

import React, { useRef, useState, useEffect } from "react";
import { Link, usePage } from '@inertiajs/react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion";

// const careerDomains = [
//   {
//     title: "Diploma In Paramedical",
//     subtitle: "Healthcare diploma programs for clinical and allied medical roles.",
//     image: "/images/paramedical.webp",
//     link: route('courses.diploma.paramedical'),
//     details:
//       "Allied health diplomas, medical support careers, lab technology, radiology, nursing assistant programs and guidance for training & placements.",
//   },
//   {
//     title: "Diploma In Engineering",
//     subtitle: "Technical diploma paths across core and modern engineering fields.",
//     image: "/images/diploma-engeering.webp",
//     link: route('courses.diploma.engineering'),
//     details:
//       "Core engineering streams, computer science, IT and multidisciplinary tech pathways. Info about entrance tests, scholarships and training programs.",
//   },
  
//   {
//     title: "Diploma In Computer/IT",
//     subtitle: "IT and computer-focused diploma programs for tech careers.",
//     image: "/images/computer-it.webp",
//     link: route('courses.diploma.it'),
//     details:
//       "Computer applications, IT support, software fundamentals, networking pathways, and career guidance for internships and certifications.",
//   },
//   {
//     title: "Vocational & Skill",
//     subtitle: "Hands-on skill training and practical career-oriented courses.",
//     image: "/images/vocational-skill.webp",
//     link: route('courses.vocational.class8plus'),
//     details:
//       "Courses, colleges, scholarships and career paths in skill-based and vocational fields. Guidance for training programs, practical learning and employment opportunities.",
//   },
//   {
//     title: "Scholarship & Loan",
//     subtitle: "Financial support options for students across all fields.",
//     image: "/images/scholarship-loan.webp",
//     link: route('scholarship.overview'),
//     details:
//       "Scholarship schemes, education loans, eligibility guidance and financial assistance routes for students, including minority-focused programs.",
//   },
//   {
//     title: "Study Abroad",
//     subtitle: "Explore global education opportunities and pathways abroad.",
//     image: "/images/study-abroad.webp",
//     link: route('study.abroad'),
//     details:
//       "International study options, admission requirements, exams, scholarships and support for students aiming to pursue education overseas.",
//   },
// ];


export default function ExpandingCareerDomains({careerDomains, section}) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    setExpandedIndex(null);
  }, [activeIndex]);

  function onSlideClick(index) {
    if (index !== activeIndex) {
      const s = swiperRef.current;
      if (s && typeof s.slideToLoop === "function") {
        s.slideToLoop(index, 500);
      } else if (s && typeof s.slideTo === "function") {
        s.slideTo(index, 500);
      }
      return;
    }
    setExpandedIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="py-5 bg-white position-relative career-domain-section">
        <div className="container mt-lg-5 mb-lg-5 mb-4">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                     <h2 className="section-heading text-center mb-3 ">
                        {section?.heading_prefix}{" "} <span className="gradient-text">{section?.heading_highlight}</span>
                        </h2>
                        <p className="lead text-center">{section?.subheading}</p>

                </div>
            </div>
        </div>
      <div className="container-fluid px-0 mb-lg-5">
       
        <Swiper
          onSwiper={(s) => (swiperRef.current = s)}
          modules={[Navigation, Pagination]}
          centeredSlides
          loop
          slidesPerView={1.2}
          spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          onSlideChange={(s) => setActiveIndex(s.realIndex ?? s.activeIndex)}
          className="career-swiper "
          style={{ width: "100%", paddingBottom: 80 }}
        >
          {careerDomains.map((domain, i) => {
            const isActive = i === activeIndex;
            const isExpanded = expandedIndex === i;

            return (
              <SwiperSlide key={i} onClick={() => onSlideClick(i)}>
                <motion.div
                  className={`domain-frame rounded-4 overflow-hidden   ${isActive ? "active" : ""} ${
                    isExpanded ? "expanded" : ""
                  }`}
                  layout
                  initial={false}
                 animate={{
                    scale: isExpanded ? 1.05 : 1,
                    opacity: isActive ? 1 : 0.5,
                    zIndex: isExpanded ? 30 : isActive ? 20 : 10,
                    boxShadow: isExpanded
                        ? "0 4px 12px rgba(0,0,0,0.1)"
                        : isActive
                        ? "0 8px 16px rgba(0,0,0,0.7)"
                        : "0 0 0 rgba(0,0,0,0)",
                    }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                >
                  <div className="  domain-card border-0 p-0 rounded-4 overflow-hidden ">
                    <div className="media-wrap position-relative d-flex justify-content-center">
                      <img
                        src={domain.image}
                        alt={domain.title}
                        className="domain-img"
                        loading="lazy"
                      />
                      {/* Title only before expansion */}
                      {!isExpanded && (
                        <div className=" position-absolute  d-flex justify-content-center align-items-center title-wrap">
                          <h3 className="text-white fw-semibold fs-3 text-center ">
                            {domain.title}
                          </h3>
                        </div>
                      )}
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          className="expanded-panel bg-white"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35 }}
                        >
                          <div className="p-4">
                            <h4 className="fw-bold mb-3">{domain.title}</h4>
                            <p className="text-muted small mb-3">
                              {domain.details}
                            </p>
                            <Link
                              href={domain.link || "#"}
                              className="fw-normal text-secondary  small "
                            >
                              Explore More
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <style jsx>{`
        .career-domain-section {
          width: 100%;
        }

        :global(.career-swiper) {
          width: 100%;
        }

        :global(.swiper-slide) {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .domain-frame {
          width: 100%;
          border-radius: 20px;
          cursor: pointer;
          overflow: hidden;
          transition: transform 0.4s ease;
        }

        .domain-card {
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          
        }
        

        .media-wrap {
          position: relative;
          height: 100%;
          cursor:pointer;
        }
        .title-wrap {
        bottom:25px
        }
        .domain-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.75);
          transition: transform 0.5s ease;
        }

        .domain-frame:hover .domain-img {
          transform: scale(1.05);
        }

        .overlay-title {
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.1) 100%
          );
          text-align: center;
        }

        .shadow-text {
          text-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
        }

        .expanded-panel {
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        :global(.swiper-pagination-bullet) {
          background: #cfd8ff;
          opacity: 1;
        }

        :global(.swiper-pagination-bullet-active) {
          background: #0d6efd;
          width: 18px;
          border-radius: 9px;
        }

        @media (max-width: 767px) {
          :global(.swiper-slide) {
            width: 80vw !important;
          }
          .domain-card {
            height: 420px;
          }
        }
      `}</style>
    </section>
  );
}
