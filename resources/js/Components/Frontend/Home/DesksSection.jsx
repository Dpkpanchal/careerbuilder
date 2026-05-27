"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function DesksSection({ leaders = [] }) {
  const [openDesk, setOpenDesk] = useState(null); // store leader.id

  const getPreview = (html) => {
    if (!html) return "";

    const div = document.createElement("div");
    div.innerHTML = html;

    const text = div.textContent || div.innerText || "";

    return text.length > 580 ? text.substring(0, 580) + "..." : text;
  };


  return (
    <>
      <section className="py-5 desks-section mb-lg-5">
        <div className="container">
          <div className="row g-4">

            {leaders.map((item, index) => (
              <motion.div
                className="col-md-6"
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className={`desk-card bg-light ${index === 1 ? "ceo" : ""}`}>

                  <div className="dhw mb-3">
                    <div className="image-wrap shadow-lg">
                      <img
                        src={item.image ? `/storage/${item.image}` : "/images/default.png"}
                        alt={item.name}
                        loading="lazy"
                      />
                    </div>

                    <div className="d-flex flex-column">
                      <h4 className="fw-medium text-white fs-5 mb-2">
                        {item.name} <span className="dhwp">{item.post}</span>
                      </h4>
                      <p className="fw-medium text-muted mt-2">
                        {item.designation}
                      </p>
                    </div>
                  </div>

                  {/* Preview (short HTML) */}
                 <p>{getPreview(item.about)}</p>

                  <button
                    type="button"
                    className="btn btn-link btn-sm small fw-normal p-0 mt-1"
                    onClick={() => setOpenDesk(item.id)}
                  >
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {openDesk && (
          <motion.div
            className="auth-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenDesk(null)}
          >
            <motion.div
              className="desk-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
            >
              <div className="desk-modal-inner card shadow-lg border-0">
                <button
                  className="auth-close-btn"
                  onClick={() => setOpenDesk(null)}
                >
                  <X size={18} />
                </button>

                <div className="card-body p-3 p-sm-4">

                  {leaders
                    .filter((item) => item.id === openDesk)
                    .map((item) => (
                      <div key={item.id}>
                        <header className="mb-3">
                          <p className="text-uppercase small text-muted mb-1">
                            From the Desk
                          </p>
                          <h2 className="h5 mb-0">
                            {item.name} – {item.designation}
                          </h2>
                        </header>

                       <div
                          dangerouslySetInnerHTML={{
                            __html: item.about
                          }}
                        />
                      </div>
                    ))}

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

