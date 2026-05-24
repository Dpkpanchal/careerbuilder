"use client";

import { motion } from "framer-motion";
import styles from "./ForumAndCounselor.module.css";
import ForumFlowLoop from "@/Components/Frontend/Home/ForumFlowLoop";

export default function ForumAndCounselor({section}) {

 // console.log('mila',section);
  return (
    <section className="forum-section bg-white pt-5">
      <div className="container  mt-lg-5 ">
        <div className={`row align-items-center justify-content-between  ${styles.wrap}`}>
          {/* LEFT: Text Content */}
          <div className="col-lg-5">
           <ForumFlowLoop cycleMs={5000} />
          </div>

          <div className="col-lg-6">
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="section-heading mb-3 ">
                {section?.heading_prefix}{" "} <br></br><span className="gradient-text">{section?.heading_highlight}</span>
                </h2>
                <p className="text-muted mb-4" style={{ fontSize: "1.16rem" }}>
                  {section?.subheading}
                </p>
                <a
                  href="/forum"
                  className="btn btn-primary mt-lg-4 "
                >
                 Join Forum 
                </a>
              </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
