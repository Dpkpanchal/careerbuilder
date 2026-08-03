import React from 'react';
import styles from './VocationalCourses.module.css';

const VocationalCoursesDisplay = ({ vocationalCourses }) => {
  // Normalize the data
  const normalizeData = () => {
    if (!vocationalCourses) return [];
    
    // If it's already an array, return it
    if (Array.isArray(vocationalCourses)) {
      return vocationalCourses;
    }
    
    // If it's an object, convert to array
    if (typeof vocationalCourses === 'object') {
      return Object.values(vocationalCourses);
    }
    
    return [];
  };

  const coursesData = normalizeData();

  const getCategoryIcon = (title) => {
    const lowerTitle = (title || '').toLowerCase();
    if (lowerTitle.includes('engineering') || lowerTitle.includes('technology')) return '🔧';
    if (lowerTitle.includes('agriculture')) return '🌱';
    if (lowerTitle.includes('home science')) return '🏠';
    if (lowerTitle.includes('business') || lowerTitle.includes('commerce')) return '💼';
    if (lowerTitle.includes('paramedical')) return '🏥';
    return '📚';
  };

  if (!coursesData.length) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h3>No Vocational Courses Available</h3>
          <p className="text-muted">Please check back later for updated course information.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>Vocational Courses</h2>
        <p className={styles.subtitle}>
          WEST BENGAL STATE COUNCIL OF TECHNICAL AND VOCATIONAL EDUCATION 
          AND SKILL DEVELOPMENT CENTRE
        </p>
        <div className={styles.websiteLink}>
          <a 
            href="http://www.wbscvet.nic.in/index.php" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            Website: http://www.wbscvet.nic.in/index.php (Click Course Offered)
          </a>
        </div>
        <div className={styles.duration}>
          <strong>Duration:</strong> VIII + / X+ (STC Level 6 months / 1 year duration)
        </div>
      </div>

      {/* Courses Grid */}
      <div className={styles.coursesGrid}>
        {coursesData.map((data, index) => (
          <div key={index} className={styles.categoryCard}>
            <div className={styles.categoryHeader}>
              <span className={styles.categoryIcon}>
                {getCategoryIcon(data.title)}
              </span>
              <h3 className={styles.categoryTitle}>{data.title || 'Course Category'}</h3>
            </div>
            
            <div className={styles.coursesList}>
              {data.institutes && data.institutes.length > 0 ? (
                data.institutes.map((course, idx) => (
                  <div key={idx} className={styles.courseItem}>
                    <span className={styles.courseNumber}>{idx + 1}.</span>
                    <span className={styles.courseName}>{course}</span>
                  </div>
                ))
              ) : data.courses && data.courses.length > 0 ? (
                data.courses.map((course, idx) => (
                  <div key={idx} className={styles.courseItem}>
                    <span className={styles.courseNumber}>{idx + 1}.</span>
                    <span className={styles.courseName}>{course}</span>
                  </div>
                ))
              ) : (
                <p className="text-muted">No courses listed</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className={styles.footer}>
        <div className={styles.infoBox}>
          <h4>Additional Information</h4>
          <ul>
            <li>All courses are recognized by West Bengal State Council</li>
            <li>STC Level courses duration: 6 months to 1 year</li>
            <li>Eligibility: Class VIII passed or Class X passed</li>
            <li>Practical training with industry exposure</li>
            <li>Certificate provided upon successful completion</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VocationalCoursesDisplay;