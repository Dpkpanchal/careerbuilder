
"use client";

import React from "react";
import { School, CreditCard, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

const mainColor = "#4f46e5";

export default function WBGovSchemesSection({ factCards = [], schemes = [] , section}) {

  // ICON MAP
  const ICON_MAP = {
    School,
    CreditCard,
    ShieldCheck,
    Users,
  };

  return (
    <section className="overflow-hidden py-5 bg-light">
      <div className="container py-lg-5 py-md-6">
        <div className="row align-items-center justify-content-between gy-5 gx-md-6">

          {/* LEFT */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-heading mb-3">
                {section?.heading_prefix}{" "} <br />
                <span className="gradient-text"> {section?.heading_highlight}</span>
              </h2>

              <p className="text-muted mb-4" style={{ fontSize: "1.16rem" }}>
                {section?.subheading}
              </p>

              <a href="/scholarship/overview" className="btn btn-primary mt-lg-4">
                Explore all
              </a>
            </motion.div>
          </div>

          {/* RIGHT: FACT CARDS */}
          <div className="col-lg-5">
            <div className="row g-3">

              {factCards.map((card, idx) => {
                const Icon = ICON_MAP[card.icon]; // ✅ correct

                return (
                  <motion.div
                    key={idx}
                    className="col-12"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                  >
                    <div
                      className="fact-card-wrapper"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 28px rgba(111,72,235,0.12)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div className="fact-card-inner">

                        {/* ICON */}
                        <div className="fact-card-icon">
                          {Icon && (
                            <Icon
                              size={28}
                              color={mainColor}
                              strokeWidth={1.5}
                            />
                          )}
                        </div>

                        {/* TEXT */}
                        <div style={{ flex: 1 }}>
                          <h5 className="fact-card-title">{card.title}</h5>
                          <div className="fact-card-text">{card.text}</div>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                );
              })}

            </div>
          </div>

        </div>

        {/* SCHEMES */}
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-5 py-4 w-100 mt-lg-5 border-top border-bottom">

          {schemes.map(({ full, short, href }, idx) => (
            <motion.a
              key={idx}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              title={full}
              className="scheme-logo fill-effect"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 + 0.1, duration: 0.4 }}
            >
              {short
                ?.replace(/\\n/g, "\n") // ✅ fix newline
                .split("\n")
                .map((line, i) => (
                  <span key={i} style={{ display: "block" }}>
                    {line}
                  </span>
                ))}
            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
}