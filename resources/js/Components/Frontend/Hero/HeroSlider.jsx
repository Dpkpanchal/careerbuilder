

import { useState, useRef, useEffect, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import GetStartedGuideModal from "./GetStartedGuideModal";

// const heroSlides = [
//   {
//     id: 1,
//     title: "Find The Right ",
//     titleGredient: " Career For Life",
//     subtitle:
//       "An initiative by the West Bengal Minorities’ Development & Finance Corporation (WBMDFC) — guiding students toward the right careers, scholarships, and brighter opportunities.",
//     ctaText: "Explore the Platform",
//     ctaLink: "/about",
//     imgBase: "/hero-slides/2mpBI25rwppJeUkJsH8G68SCIKJtdCQCD5MctSvY",
//   },
//   {
//     id: 2,
//     title: "Discover the Path",
//     titleGredient: "Meant for You.",
//     subtitle:
//       "Take a guided career quiz to explore opportunities that match your interests, skills, and aspirations — and get your personalized roadmap to success.",
//     ctaText: "Start Career Quiz",
//     ctaLink: "/pathfinder",
//     imgBase: "/hero-slides/2v3eYLHSWJ2vvJydKidGGJdZT2Yer6VYnJsuZKhD",
//   },
//   {
//     id: 3,
//     title: "Learn Smart. ",
//     titleGredient: "Plan Ahead.",
//     subtitle:
//       "Find verified details on courses, colleges, entrance exams, and scholarships — all in one trusted platform.",
//     ctaText: "Explore Courses & Scholarships",
//     ctaLink: "/search",
//     imgBase: "/images/hero-bg3-6985ea39e55e2",
//   },
//   {
//     id: 4,
//     title: "Get Guidance ",
//     titleGredient: "That Matters.",
//     subtitle:
//       "Speak to certified career counselors or join our student community to learn and grow together.",
//     ctaText: "Find a Counselor",
//     ctaLink: "/counselors",
//     imgBase: "/images/hero-bg2-6985ea39b28a2",
//   },
// ];

function buildSrcSet(base) {
  return `${base}.webp 1024w`;
}

function pickDefaultSrc(base) {
  return `${base}.webp`;
}

export default function HeroSlider({ heroSlides = [] }) {
  const [guideOpen, setGuideOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef(null);
  const progressRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // ✅ Resize throttled (reduces forced reflow)
  useEffect(() => {
    let raf = 0;

    const handleResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setIsMobile(window.innerWidth < 768);
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ✅ Preload first slide image with srcset + sizes (best for LCP)
  useEffect(() => {
    if (!heroSlides.length) return;
    const first = heroSlides[0];
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = `${first.imgBase}-1024.webp`;
    link.setAttribute("imagesrcset", buildSrcSet(first.imgBase));
    link.setAttribute(
      "imagesizes",
      "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
    );
    document.head.appendChild(link);

    return () => {
      try {
        document.head.removeChild(link);
      } catch {}
    };
  }, []);





  const swiperAutoplay = useMemo(() => {
    if (reduceMotion) return false;
    return { delay: 9000, disableOnInteraction: false };
  }, [reduceMotion]);

const handleAutoplayTimeLeft = (_swiper, _time, progressVal) => {
  const p = 1 - progressVal;
  if (progressRef.current) {
    progressRef.current.style.transform = `scaleX(${p})`;
  }
};

  return (
    <section
      className="heroSection"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        // ✅ stable height reduces reflow vs 100vh math
        height: isMobile ? "auto" : "clamp(560px, 80vh, 820px)",
      }}
    >
      <Swiper

        modules={[Autoplay, Pagination, EffectFade]}
       // effect={reduceMotion ? "slide" : "fade"}
        effect={isMobile || reduceMotion ? "slide" : "fade"}
        fadeEffect={{ crossFade: true }}
        autoplay={swiperAutoplay}
        speed={500}
        allowTouchMove={!reduceMotion}
       // watchSlidesProgress={false}
        observer
        observeParents
        resizeObserver
        pagination={{ clickable: true }}
        loop={false} // ✅ prevents cloned slides / extra downloads
        preloadImages={false} // ✅ don’t preload all images
        onAutoplayTimeLeft={handleAutoplayTimeLeft}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        style={{ width: "100%", height: "100%" }}
      >
        {heroSlides.map((slide, idx) => {
          const isFirst = idx === 0;
          const isActive = idx === activeIndex;
          const shouldLoad = isFirst || isActive || idx === activeIndex + 1;

          const imgSrc = pickDefaultSrc(slide.imgBase);
          const imgSrcSet = buildSrcSet(slide.imgBase);
          const sizes = isMobile ? "100vw" : "(max-width: 1200px) 100vw, 1200px";

          // const commonImgProps = {
          //   src: imgSrc,
          //   srcSet: imgSrcSet,
          //   sizes,
          //   alt: slide.title,
          //   decoding: "async",
          //   fetchpriority: isFirst ? "high" : "auto",
          //   loading: isFirst ? "eager" : "lazy",
          //   style: { willChange: "transform" },
          // };

          const commonImgProps = {
              src: imgSrc,
              srcSet: imgSrcSet,
              sizes,
              alt: slide.title,
              decoding: "async",
              loading: isFirst ? "eager" : "lazy",
              fetchPriority: isFirst ? "high" : "auto",
              style: { willChange: "transform" },
            };


          return (
            <SwiperSlide key={slide.id}>
              {isMobile ? (
                <div style={{ width: "100%", position: "relative" }}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "260px",
                      overflow: "hidden",
                      background: "#0b1220",
                    }}
                  >
                    {shouldLoad ? (
                      <img
                        {...commonImgProps}
                        width="1200"
                        height="600"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          willChange: "transform",
                        }}
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%" }} />
                    )}
                  </div>

                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={reduceMotion ? false : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                      padding: "1.75rem 1.25rem 2.25rem",
                      color: "#fff",
                      backgroundColor: "#020617",
                      position: "relative",
                    }}
                  >
                    <h1 className="hero-heading">
                      {slide.title} <span className="gradient-text">{slide.titleGredient}</span>
                    </h1>

                    <p
                      style={{
                        fontSize: "clamp(.95rem, 1.3vw, 1.2rem)",
                        lineHeight: "1.6",
                        marginBottom: "2rem",
                      }}
                    >
                      {slide.subtitle}
                    </p>

                    <button
                      type="button"
                      className="btn btn-primary filled btn-lg primary-cta"
                      onClick={() => setGuideOpen(true)}
                    >
                      Get Started <ArrowRight className="cta-icon" />
                    </button>
                  </motion.div>
                </div>
              ) : (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {shouldLoad ? (
                    <img
                      {...commonImgProps}
                      width="1600"
                      height="900"
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 1,
                        willChange: "transform",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "#0b1220",
                        zIndex: 1,
                      }}
                    />
                  )}

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to right, rgba(0,0,0,.72), rgba(0,0,0,0))",
                      zIndex: 2,
                      width: "55%",
                      pointerEvents: "none",
                    }}
                  />

                  <div className="container" style={{ position: "relative", zIndex: 3 }}>
                    <motion.div
                      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                      animate={reduceMotion ? false : { opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      style={{
                        color: "#fff",
                        maxWidth: "700px",
                        paddingTop: "2rem",
                        paddingBottom: "2rem",
                      }}
                    >
                      <h1 className="hero-heading">
                        {slide.title} <span className="gradient-text">{slide.titleGredient}</span>
                      </h1>

                      <p
                        style={{
                          fontSize: "clamp(.95rem, 1.3vw, 1.2rem)",
                          lineHeight: "1.6",
                          marginBottom: "2rem",
                        }}
                      >
                        {slide.subtitle}
                      </p>

                      <button
                        type="button"
                        className="btn btn-primary filled btn-lg primary-cta"
                        onClick={() => setGuideOpen(true)}
                      >
                        Get Started <ArrowRight className="cta-icon" />
                      </button>
                    </motion.div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* ✅ Progress Bar (no React state updates) */}
      {!reduceMotion && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "5px",
            background: "rgba(255,255,255,0.2)",
            overflow: "hidden",
            zIndex: 10,
          }}
        >
          <div
            ref={progressRef}
            style={{
              height: "100%",
              background: "#007bff",
              transformOrigin: "left center",
              transform: "scaleX(0)",
              willChange: "transform",
            }}
          />
        </div>
      )}

      {/* Tagline */}
      <div className="nitLightGradient"
        style={
          isMobile
            ? {
                position: "static",
                margin: "1rem auto 1.5rem",
                fontSize: "0.9rem",
                padding: ".5rem 1.5rem",
                borderRadius: "999px",
                zIndex: 5,
                fontWeight: 600,
                textTransform: "uppercase",
                lineHeight: "1.3",
                display: "flex",
                alignItems: "center",
                width: "fit-content",
              }
            : {
                position: "absolute",
                bottom: "50px",
                right: "30px",
                fontSize: "1rem",
                padding: ".6rem 2rem",
                borderRadius: "36px",
                zIndex: 5,
                fontWeight: 600,
                textTransform: "uppercase",
                lineHeight: "1.3",
                display: "flex",
                alignItems: "center",
              }
        }
      >
        <img
          src="/images/wbmdfc-logo-6985ea3b51d93.webp"
          alt="WBMDFC Logo"
          width="50"
          height="38"
          loading="lazy"
          decoding="async"
          style={{ width: "50px", height: "auto", marginRight: "0.8rem", display: "block" }}
        />
        <div>
          <p className="mb-0 text-muted fw-medium">Find the Right Career for Life</p>
          <span className="fw-normal text-muted text-capitalize small">- A WBMDFC Initiative</span>
        </div>
      </div>

      <GetStartedGuideModal isOpen={guideOpen} onClose={() => setGuideOpen(false)} />
    </section>
  );
}