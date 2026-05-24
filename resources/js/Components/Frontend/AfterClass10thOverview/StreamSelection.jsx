import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Languages, Star, Lightbulb, Users } from 'lucide-react';
import styles from './StreamSelection.module.css';

const StreamSelection = () => {
  const streams = [
    {
      id: 'science-medical',
      name: 'SCIENCE (MEDICAL)',
      code: 'PCB',
      colorClass: styles.scienceMedical,
      languageGroups: {
        groupA: ['Bengali A', 'Hindi A', 'English A'],
        groupB: ['English B', 'Bengali B', 'Hindi B', 'Alternative English']
      },
      mainSubjects: ['PHYSICS', 'CHEMISTRY', 'BIOLOGY'],
      optionalSubjects: [
        'MATHS', 'PHYSICAL EDUCATION', 'HOME SCIENCE', 'ECONOMICS', 
        'FINE ARTS', 'FASHION STUDIES', 'PSYCHOLOGY', 'DANCE', 
        'BIOTECHNOLOGY', 'NUTRITION', 'EVS', 'MODERN COMPUTER APPLICATION', 
        'COMPUTER SCIENCE', 'EDUCATION', 'GEOGRAPHY', 'STATISTICS'
      ],
      instruction: 'Students Should Opt For Two Different Languages One From Group-A And One From Group-B'
    },
    {
      id: 'science-non-medical',
      name: 'SCIENCE (NON MEDICAL)',
      code: 'PCM',
      colorClass: styles.scienceNonMedical,
      languageGroups: {
        groupA: ['Bengali A', 'Hindi A', 'English A'],
        groupB: ['English B', 'Bengali B', 'Hindi B', 'Alternative English']
      },
      mainSubjects: ['PHYSICS', 'CHEMISTRY', 'MATH'],
      optionalSubjects: [
        'BIOLOGY', 'PHYSICAL EDUCATION', 'HOME SCIENCE', 'ECONOMICS', 
        'FINE ARTS', 'FASHION STUDIES', 'PSYCHOLOGY', 'DANCE', 
        'BIOTECHNOLOGY', 'NUTRITION', 'EVS', 'MODERN COMPUTER APPLICATION', 
        'COMPUTER SCIENCE', 'DANCE', 'EDUCATION', 'STATISTICS'
      ],
      instruction: 'Students Should Opt For Two Different Languages One From Group-A And One From Group-B'
    },
    {
      id: 'arts',
      name: 'ARTS',
      colorClass: styles.arts,
      languageGroups: {
        groupA: ['Bengali A', 'Hindi A', 'English A'],
        groupB: ['English B', 'Bengali B', 'Hindi B', 'Alternative English']
      },
      mainSubjects: [
        'POLITICAL SCIENCE', 'HISTORY', 'GEOGRAPHY', 
        'ECONOMICS', 'SOCIOLOGY', 'PSYCHOLOGY'
      ],
      optionalSubjects: [
        'MATHS', 'PHYSICAL EDUCATION', 'HOME SCIENCE', 'ECONOMICS', 
        'FINE ARTS', 'FASHION STUDIES', 'PSYCHOLOGY', 'DANCE', 
        'BIOTECH', 'NUTRITION', 'EVS', 'MODERN COMPUTER APPLICATION', 
        'COMPUTER SCIENCE', 'EDUCATION'
      ],
      instruction: 'Students Should Opt For Two Different Languages One From Group-A And One From Group-B'
    },
    {
      id: 'commerce',
      name: 'COMMERCE',
      colorClass: styles.commerce,
      languageGroups: {
        groupA: ['Bengali A', 'Hindi A', 'English A'],
        groupB: ['English B', 'Bengali B', 'Hindi B', 'Alternative English']
      },
      mainSubjects: [
        'ACCOUNTANCY', 'BUSINESS STUDIES', 'ECONOMICS', 'ENTREPRENEURSHIP'
      ],
      optionalSubjects: [
        'MATHS', 'COMPUTER APPLICATION', 'COSTING AND TAXATION', 
        'COMMERCIAL LAW AND PRELIMINARIES OF AUDITING (CLPA)'
      ],
      instruction: 'Students Should Opt For Two Different Languages One From Group-A And One From Group-B'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Stream Selection After Class 10</h1>
        <p className={styles.subtitle}>
          Explore available subject combinations across different streams to make an informed decision about your academic future
        </p>
      </header>

      {/* Streams Grid */}
      <div className={styles.streamsGrid}>
        {streams.map((stream, index) => (
          <motion.div
            key={stream.id}
            className={`${styles.streamCard} ${stream.colorClass} ${styles.fadeInUp}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Stream Header */}
            <div className={styles.streamHeader}>
              <h2 className={styles.streamTitle}>{stream.name}</h2>
              {stream.code && (
                <span className={styles.streamBadge}>{stream.code}</span>
              )}
            </div>

            {/* Language Groups */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <Languages size={18} />
                Language Groups
              </h3>
              <div className={styles.subjectsGrid}>
                <div>
                  <strong>Group A:</strong>
                  <div className={styles.subjectList}>
                    {stream.languageGroups.groupA.map((lang, idx) => (
                      <span key={idx} className={`${styles.subjectItem} ${styles.languageSubject}`}>
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <strong>Group B:</strong>
                  <div className={styles.subjectList}>
                    {stream.languageGroups.groupB.map((lang, idx) => (
                      <span key={idx} className={`${styles.subjectItem} ${styles.languageSubject}`}>
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#6b7280', fontStyle: 'italic', marginTop: '0.5rem' }}>
                  {stream.instruction}
                </p>
              </div>
            </div>

            {/* Main Subjects */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <Star size={18} />
                Main Subjects
              </h3>
              <div className={styles.subjectList}>
                {stream.mainSubjects.map((subject, idx) => (
                  <span key={idx} className={`${styles.subjectItem} ${styles.mainSubject}`}>
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            {/* Optional Subjects */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <BookOpen size={18} />
                Additional / Optional Subjects
              </h3>
              <div className={styles.subjectList}>
                {stream.optionalSubjects.map((subject, idx) => (
                  <span key={idx} className={`${styles.subjectItem} ${styles.optionalSubject}`}>
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Important Note */}
      <motion.div 
        className={styles.noteSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h3 className={styles.noteTitle}>
          <Lightbulb size={18} />
          Important Note
        </h3>
        <div className={styles.noteContent}>
          <p>
            <span className={styles.noteHighlight}>ICSE and CBSE Board Students</span> generally prefer{' '}
            <strong>English A (Alternative English)</strong> and <strong>Bengali B</strong>.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            <span className={styles.noteHighlight}>Bengal Board Students</span> generally opt for{' '}
            <strong>Bengali A</strong> and <strong>English B</strong>.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default StreamSelection;