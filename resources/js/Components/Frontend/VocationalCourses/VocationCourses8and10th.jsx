import React from 'react';
import styles from './VocationalCourses.module.css';

const VocationalCoursesDisplay = () => {
  const coursesData = {
    engineering: {
      title: "ENGINEERING & TECHNOLOGY (ET)",
      duration: "VIII + / X+ (STC Level 6 months / 1 year duration)",
      courses: [
        "Amin Survey",
        "Electrical House Wiring & Motor Winding",
        "Servicing of Domestic Electronics Products",
        "2/3 Wheeler Mechanic",
        "Auto Electrician",
        "Automobile Maintenance",
        "Diesel Pump-set Repairing",
        "Rural Sanitation & Sanitary Plumbing",
        "Rural Electrician",
        "Photography",
        "Videography",
        "Manufacture of Jute Products",
        "Plumbing",
        "Wooden Furniture Making",
        "Telephone & Mobile Set Repairing",
        "Footwear (Open type)",
        "Welding",
        "Repair & Maintenance of Agriculture"
      ]
    },
    agriculture: {
      title: "AGRICULTURE (AG)",
      duration: "VIII + / X+ (STC Level 6 months / 1 year duration)",
      courses: [
        "Marine Fisheries",
        "Ornamental Fish Culture",
        "Mushroom Cultivation",
        "Composting",
        "Dairy Farming",
        "Poultry Farming",
        "Bee Keeping",
        "Seed Production Technology (Basic/Adv module) (X+ level course)"
      ]
    },
    homeScience: {
      title: "HOME SCIENCE (HS)",
      duration: "VIII + / X+ (STC Level 6 months / 1 year duration)",
      courses: [
        "Tailoring",
        "Commercial Art",
        "Manufacture of Jam, Jelly, & Pickles",
        "Silk Screen Printing",
        "Creche Management",
        "Jari Work & Kantha Embroidery",
        "Toy Making (Soft)",
        "Interior Decoration",
        "Beautician",
        "Boutique Work",
        "Glass Painting & Production of Ceramic & Candle Item",
        "Garment Manufacturing",
        "Machine Embroidery with CAD"
      ]
    },
    business: {
      title: "BUSINESS & COMMERCE (BC)",
      duration: "VIII + / X+ (STC Level 6 months / 1 year duration)",
      courses: [
        "Rural Marketing",
        "Marketing"
      ]
    },
    paramedical: {
      title: "PARAMEDICAL (PM)",
      duration: "VIII + / X+ (STC Level 6 months / 1 year duration)",
      courses: [
        "Blood Collection Assistant",
        "Health Worker"
      ]
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'engineering': return '🔧';
      case 'agriculture': return '🌱';
      case 'homeScience': return '🏠';
      case 'business': return '💼';
      case 'paramedical': return '🏥';
      default: return '📚';
    }
  };

  return (
    <div className='container'>
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
        {Object.entries(coursesData).map(([category, data]) => (
          <div key={category} className={styles.categoryCard}>
            <div className={styles.categoryHeader}>
              <span className={styles.categoryIcon}>
                {getCategoryIcon(category)}
              </span>
              <h3 className={styles.categoryTitle}>{data.title}</h3>
            </div>
            
            <div className={styles.coursesList}>
              {data.courses.map((course, index) => (
                <div key={index} className={styles.courseItem}>
                  <span className={styles.courseNumber}>{index + 1}.</span>
                  <span className={styles.courseName}>{course}</span>
                </div>
              ))}
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