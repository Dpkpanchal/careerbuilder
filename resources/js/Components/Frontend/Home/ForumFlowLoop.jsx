"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, UserCheck, CheckCircle, ShieldCheck } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function ForumFlowProfessional() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const steps = [0, 1, 2, 3]; // idle, question, processing, answer
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % steps.length;
      setActiveStep(steps[currentIndex]);
    }, 3500); // 3.5 second intervals

    return () => clearInterval(interval);
  }, []);

  const stepData = [
    { id: 0, title: "Ask Your Question", desc: "Share your career concerns", icon: MessageCircle },
    { id: 1, title: "Community Discussion", desc: "Engage with peers & experts", icon: UserCheck },
    { id: 2, title: "Expert Response", desc: "Get professional guidance", icon: CheckCircle }
  ];

  return (
    <div style={{ 
      width: "100%", 
      minHeight:"560px",
      margin: "0 auto", 
      position: "relative"
    }}>
      {/* Main Flow Container */}
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        gap: 40,
        position: "relative" 
      }}>
        
        {stepData.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0.4, scale: 0.95 }}
            animate={{ 
              opacity: activeStep === index ? 1 : 0.5,
              scale: activeStep === index ? 1 : 0.95,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              width: "100%",
              maxWidth: 400,
              position: "relative",
              zIndex: 2
            }}
          >
            {/* Icon Circle */}
            <motion.div
              animate={{
                background: activeStep === index 
                  ? "linear-gradient(135deg, #00b2f2, #b76cff)"
                  : "rgba(255,255,255,0.9)",
                borderColor: activeStep === index ? "transparent" : "#e2e8f0",
                color: activeStep === index ? "#fff" : "#64748b"
              }}
              transition={{ duration: 0.6 }}
              style={{
                width: 72,
                height: 72,
                borderRadius: 20,
                border: "2px solid",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: activeStep === index 
                  ? "0 12px 32px rgba(111,72,235,0.25)" 
                  : "0 4px 12px rgba(0,0,0,0.08)",
                flexShrink: 0
              }}
            >
              <step.icon size={32} strokeWidth={1.8} />
            </motion.div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              <motion.h4
                animate={{
                  color: activeStep === index ? "#1e293b" : "#64748b"
                }}
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  margin: 0,
                  marginBottom: 6
                }}
              >
                {step.title}
              </motion.h4>
              <motion.p
                animate={{
                  color: activeStep === index ? "#475569" : "#94a3b8"
                }}
                style={{
                  fontSize: "1.05rem",
                  margin: 0,
                  fontWeight: 500
                }}
              >
                {step.desc}
              </motion.p>
            </div>
          </motion.div>
        ))}

        {/* Animated Connection Lines */}
        <svg 
          style={{ 
            position: "absolute", 
            top: 0, 
            left: "50%", 
            transform: "translateX(-50%)",
            width: 4,
            height: "100%",
            zIndex: 1
          }}
        >
          <motion.line
            x1="2" y1="36" x2="2" y2="150"
            stroke="url(#gradient1)"
            strokeWidth="3"
            strokeDasharray="8,4"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: activeStep >= 1 ? 1 : 0,
              opacity: activeStep >= 1 ? 1 : 0.3
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
          <motion.line
            x1="2" y1="190" x2="2" y2="304"
            stroke="url(#gradient2)"
            strokeWidth="3"
            strokeDasharray="8,4"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: activeStep >= 2 ? 1 : 0,
              opacity: activeStep >= 2 ? 1 : 0.3
            }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00b2f2" />
              <stop offset="100%" stopColor="#b76cff" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#b76cff" />
              <stop offset="100%" stopColor="#00b2f2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Interactive Demonstration */}
      <AnimatePresence mode="wait">
        {activeStep === 0 && (
          <motion.div
            key="demo-question"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            style={{
              marginTop: 48,
              background: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
              border: "1px solid #e2e8f0",
              borderRadius: 16,
              padding: 24,
              textAlign: "center"
            }}
          >
            <div style={{ 
              fontSize: "1.1rem", 
              color: "#475569", 
              fontWeight: 500,
              marginBottom: 8
            }}>
              "Which scholarship is best for engineering students?"
            </div>
            <div style={{ 
              fontSize: "0.95rem", 
              color: "#64748b",
              fontStyle: "italic"
            }}>
              You're typing your question...
            </div>
          </motion.div>
        )}

        {activeStep === 1 && (
          <motion.div
            key="demo-discussion"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            style={{
              marginTop: 48,
              display: "flex",
              flexDirection: "column",
              gap: 16
            }}
          >
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.3, duration: 0.5 }}
                style={{
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 12,
                  padding: 16,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
                }}
              >
                <div style={{ 
                  fontSize: "0.95rem", 
                  color: "#64748b",
                  fontWeight: 500
                }}>
                  Community member #{i} is engaging...
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeStep === 2 && (
          <motion.div
            key="demo-answer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            style={{
              marginTop: 48,
              background: "linear-gradient(135deg, #fefce8, #fef3c7)",
              border: "2px solid #fbbf24",
              borderRadius: 16,
              padding: 24,
              textAlign: "center"
            }}
          >
            <div style={{ 
              fontSize: "1.1rem", 
              color: "#92400e", 
              fontWeight: 600,
              marginBottom: 12
            }}>
              <ShieldCheck /> Expert Counselor Response
            </div>
            <div style={{ 
              fontSize: "1rem", 
              color: "#a16207", 
              fontWeight: 500,
              lineHeight: 1.5
            }}>
              "For engineering students, I recommend applying to the Swami Vivekananda Merit-cum-Means Scholarship, which covers tuition and provides additional support..."
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: 8,
        marginTop: 40
      }}>
        {[0, 1, 2].map((step) => (
          <motion.div
            key={step}
            animate={{
              background: activeStep >= step 
                ? "linear-gradient(90deg, #00b2f2, #b76cff)" 
                : "#e2e8f0",
              scale: activeStep === step ? 1.2 : 1
            }}
            transition={{ duration: 0.4 }}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4
            }}
          />
        ))}
      </div>
    </div>
  );
}
