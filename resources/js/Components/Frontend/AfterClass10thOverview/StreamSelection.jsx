import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Languages, Star, Lightbulb, Users } from 'lucide-react';
import styles from './StreamSelection.module.css';

// Color class mapping - map string keys to actual CSS module classes
const colorClassMap = {
  scienceMedical: styles.scienceMedical,
  scienceNonMedical: styles.scienceNonMedical,
  arts: styles.arts,
  commerce: styles.commerce,
  // Add more as needed
  red: styles.red,
  pink: styles.pink,
  orange: styles.orange,
  blue: styles.blue,
  teal: styles.teal,
  violet: styles.violet,
  green: styles.green,
  yellow: styles.yellow,
  purple: styles.purple,
  indigo: styles.indigo,
  cyan: styles.cyan,
  gray: styles.gray,
};

const StreamSelection = ({ stream_selection }) => {
  // If no data, return null or loading state
  if (!stream_selection || !Array.isArray(stream_selection) || stream_selection.length === 0) {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Stream Selection After Class 10</h1>
          <p className={styles.subtitle}>
            No stream data available. Please check back later.
          </p>
        </header>
      </div>
    );
  }

  // Get the actual CSS module class from the string
  const getColorClass = (colorClassString) => {
    if (!colorClassString) return styles.default;
    
    // If it's already a valid CSS module class, return it
    if (typeof colorClassString === 'object') return colorClassString;
    
    // Extract the color name from "styles.scienceMedical" -> "scienceMedical"
    const colorName = colorClassString.replace('styles.', '');
    
    // Return the mapped CSS module class or default
    return colorClassMap[colorName] || styles.default;
  };

  // Process streams data
  const streams = stream_selection.map((stream) => ({
    ...stream,
    colorClass: getColorClass(stream.colorClass),
    // Ensure languageGroups exists with default values
    languageGroups: stream.languageGroups || { groupA: [], groupB: [] },
    // Ensure arrays exist
    mainSubjects: stream.mainSubjects || [],
    optionalSubjects: stream.optionalSubjects || [],
    instruction: stream.instruction || '',
  }));

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
            key={stream.id || index}
            className={`${styles.streamCard} ${stream.colorClass} ${styles.fadeInUp}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Stream Header */}
            <div className={styles.streamHeader}>
              <h2 className={styles.streamTitle}>{stream.name || `Stream ${index + 1}`}</h2>
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
                {stream.languageGroups.groupA && stream.languageGroups.groupA.length > 0 && (
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
                )}
                {stream.languageGroups.groupB && stream.languageGroups.groupB.length > 0 && (
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
                )}
                {stream.instruction && (
                  <p style={{ fontSize: '0.85rem', color: '#6b7280', fontStyle: 'italic', marginTop: '0.5rem' }}>
                    {stream.instruction}
                  </p>
                )}
              </div>
            </div>

            {/* Main Subjects */}
            {stream.mainSubjects && stream.mainSubjects.length > 0 && (
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
            )}

            {/* Optional Subjects */}
            {stream.optionalSubjects && stream.optionalSubjects.length > 0 && (
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
            )}
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
