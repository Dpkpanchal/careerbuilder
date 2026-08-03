'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import styles from './CounsellorsDirectory.module.css';

export default function CounsellorsDirectory({counsellorsData}) {


  const counsellors = counsellorsData;
 
  const [selectedSubject, setSelectedSubject] = useState('all');

  const subjects = useMemo(() => {
    const allSubjects = ['all', ...new Set(counsellors.map(c => c.subject))];
    return allSubjects.sort();
  }, []);

  const filteredCounsellors = useMemo(() => {
    if (selectedSubject === 'all') return counsellors;
    return counsellors.filter(counsellor => counsellor.subject === selectedSubject);
  }, [selectedSubject]);

  const handleAskQuestion = (counsellor) => {
    // You can integrate with your chat/message system here
    alert(`Connecting you with ${counsellor.name} for ${counsellor.subject}`);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.title}
        >
          Expert Career Counsellors
        </motion.h1>
        <p className={styles.subtitle}>
          Connect with qualified professionals across various academic disciplines
        </p>
      </header>

      {/* Counsellors Grid */}
      <div className={styles.cardsGrid}>
        {filteredCounsellors.map((counsellor, index) => (
          <motion.div
            key={counsellor.id}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.counsellorName}>{counsellor.name}</h3>
              <div className={styles.qualification}>{counsellor.qualification}</div>
            </div>
            
            <div className={styles.subjectArea}>
              <span className={styles.subjectLabel}>Specialization:</span>
              <p className={styles.subjectText}>{counsellor.subject}</p>
            </div>

            {/* <button
              className={styles.askButton}
              onClick={() => handleAskQuestion(counsellor)}
            >
              <Mail size={16} />
              Ask Question
            </button> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
}