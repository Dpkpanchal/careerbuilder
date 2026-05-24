'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import styles from './CounsellorsDirectory.module.css';

export default function CounsellorsDirectory() {
  const counsellors = [
    {
      id: 1,
      name: 'Dr. Nurul Alam',
      qualification: 'Ph.D. in Physics',
      subject: 'General Subjects / Science / GATE / GRE / TOEFL / IELTS'
    },
    {
      id: 2,
      name: 'Dr. Rabi Subel',
      qualification: 'Ph.D. in Arts',
      subject: 'Arts & Humanities'
    },
    {
      id: 3,
      name: 'Md. Sayeedul Islam',
      qualification: 'Ph.D. in Mathematics',
      subject: 'Science & Mathematics'
    },
    {
      id: 4,
      name: 'Anwarul Haque',
      qualification: 'M.Com, MBA (HRM)',
      subject: 'Commerce & Business'
    },
    {
      id: 5,
      name: 'Md. Mosaraf Hossain',
      qualification: 'B.Ed, M.Ed, B.Sc, M.Sc',
      subject: 'D.El.Ed / B.Ed / M.Ed'
    },
    {
      id: 6,
      name: 'Engr. Syed Mahmud',
      qualification: 'B.Tech, M.Tech, Ph.D.',
      subject: 'Vocational / ITI / Diploma Programs'
    },
    {
      id: 7,
      name: 'Kh. Jinnatul Islam',
      qualification: 'B.Tech in CSE, M.E, B.Sc',
      subject: 'Engineering / BE / IT / JEE'
    },
    {
      id: 8,
      name: 'Dr. Anwar Saadt Halder',
      qualification: 'MBBS (Medicine), D.Ph.',
      subject: 'Medical & Healthcare'
    },
    {
      id: 9,
      name: 'Dr. Chowdhury Masoom Hossain',
      qualification: 'M.Pharm, Ph.D. (Pharmacy)',
      subject: 'Pharmacy / GATE / GRE'
    },
    {
      id: 10,
      name: 'Mst Reza',
      qualification: 'LL.M, UGC NET',
      subject: 'Law / CLAT / Judicial Services'
    },
    {
      id: 11,
      name: 'Aqueel Khan',
      qualification: 'B.Sc., M.Sc., BMC, WBCS Officer',
      subject: 'WBCS / UPSC / Civil Services'
    },
    {
      id: 12,
      name: 'Md Nazmuddin',
      qualification: 'B.Tech, MBA',
      subject: 'BBA / MBA / Business Management'
    },
    {
      id: 13,
      name: 'Dr. Md Riyaz',
      qualification: 'Ph.D. in Mass Communication',
      subject: 'Journalism / Mass Communication'
    },
    {
      id: 14,
      name: 'Ruksar Khatoon',
      qualification: 'M.A. in Social Work',
      subject: 'Social Work / BSW / MSW'
    },
    {
      id: 15,
      name: 'Enam Ali',
      qualification: 'DHMC and CT',
      subject: 'Hotel Management & Hospitality'
    },
    {
      id: 16,
      name: 'Dr. Abdus Samad',
      qualification: 'Ph.D. in Medical Sciences',
      subject: 'Paramedical / Nursing / Mechanical Engineering'
    },
    {
      id: 17,
      name: 'Dr. Mir Musaraf Hussain',
      qualification: 'Ph.D. in Biotechnology',
      subject: 'Microbiology / Biotechnology'
    },
    {
      id: 18,
      name: 'Abir Ahamed',
      qualification: 'M.A. in Statistics',
      subject: 'Data Analysis / Statistics / Software'
    },
    {
      id: 19,
      name: 'Jahangir Alam',
      qualification: 'Diploma in Animation',
      subject: 'Graphics Design / Animation / Digital Media'
    },
    {
      id: 20,
      name: 'Dr. Afzalur Zaman',
      qualification: 'Ph.D. in Agricultural Engineering',
      subject: 'Agriculture / Mechanical Engineering'
    },
    {
      id: 21,
      name: 'Touhidul Islam',
      qualification: 'Master of Visual Arts, B.Ed, M.Ed',
      subject: 'Visual Arts / Fine Arts'
    }
  ];

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