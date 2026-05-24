import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import * as Lucide from "lucide-react";
import VocationCourses8and10th from '@/Components/Frontend/VocationalCourses/VocationCourses8and10th';
import HeroInner from '@/Components/Frontend/Hero/HeroInner';
import ITIInstitutes from '@/Components/Frontend/Itiitcandjrpolytechnic/ITIInstitutes';
import Scholership from '@/Components/Frontend/Scholership/Scholership';
import CounsellorsDirectory from '@/Components/Frontend/Counselor/CounsellorsDirectory';
import FrontendLayout from '@/Layouts/FrontendLayout';
import styles from './AfterClass8.module.css';

const {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  GraduationCap,
  Tool,
  Award,
  HelpCircle,
  MapPin,
  Phone,
  Mail,
  Users,
  Calendar,
  DollarSign,
  Home
} = Lucide;

// Dummy Data
const DUMMY_DATA = {
  educationPathways: [
    {
      type: "School Education",
      title: "Continue Regular Schooling",
      description: "Continue with class 9 in your current school or switch to a different school",
      options: [
        "State Board (WBBSE)",
        "CBSE Board", 
        "ICSE Board",
        "Madrasa Education"
      ],
      features: ["Regular curriculum", "Extracurricular activities", "Guidance from teachers"],
      icon: BookOpen
    },
    {
      type: "NIOS",
      title: "National Institute of Open Schooling",
      description: "Flexible schooling option for students who need alternative education",
      options: [
        "Secondary Course (Class 9-10)",
        "Flexible exam schedule",
        "Multiple admission cycles"
      ],
      features: ["Distance learning", "Self-paced study", "Recognized by Govt. of India"],
      contact: "nios.gov.in | 011-408-8888"
    }
  ],
  
  vocationalCourses: [
    {
      title: "Basic Computer Skills",
      duration: "3 months",
      eligibility: "Class 8 passed",
      institutes: ["Govt. ITI Centers", "Private Computer Centers"],
      scope: "Office Assistant, Data Entry Operator"
    },
    {
      title: "Tailoring & Fashion Design",
      duration: "6 months", 
      eligibility: "Class 8 passed",
      institutes: ["Women Polytechnic", "Private Tailoring Centers"],
      scope: "Fashion Designer, Tailor"
    },
    {
      title: "Electrician Course",
      duration: "1 year",
      eligibility: "Class 8 passed", 
      institutes: ["Govt. ITI", "Private Training Centers"],
      scope: "Electrician, Maintenance Technician"
    }
  ],

  itiCourses: [
    {
      name: "Kolkata ITI - Central",
      address: "Salt Lake, Kolkata",
      courses: ["Electrician", "Fitter", "Welder"],
      contact: "033-1234-5678"
    },
    {
      name: "Howrah ITI",
      address: "Howrah Main Road", 
      courses: ["Mechanic", "Plumber", "Carpenter"],
      contact: "033-2345-6789"
    },
    {
      name: "Burdwan ITI",
      address: "Burdwan Station Road",
      courses: ["Electrician", "Turner", "Machinist"],
      contact: "0342-123-4567"
    }
  ],

  scholarships: [
    {
      name: "WBMDFC Merit Scholarship",
      amount: "₹5,000 per year",
      eligibility: "75% marks in Class 8, Family income < ₹2.5L",
      deadline: "31st August 2024"
    },
    {
      name: "National Means Cum Merit Scholarship",
      amount: "₹12,000 per year", 
      eligibility: "55% marks in Class 8, Family income < ₹1.5L",
      deadline: "30th September 2024"
    },
    {
      name: "Pre-Matric Scholarship for Minorities",
      amount: "₹10,000 per year",
      eligibility: "50% marks, Minority community",
      deadline: "15th October 2024"
    }
  ],

  counselors: [
    {
      name: "Dr. Ananya Sharma",
      specialization: "Career Guidance for School Students",
      contact: "98765-43210",
      email: "ananya.sharma@careerguide.com"
    },
    {
      name: "Prof. Rajiv Mehta", 
      specialization: "Vocational Training Expert",
      contact: "98765-43211",
      email: "rajiv.mehta@careerguide.com"
    },
    {
      name: "Ms. Priya Singh",
      specialization: "Scholarship & Financial Aid",
      contact: "98765-43212", 
      email: "priya.singh@careerguide.com"
    }
  ]
};

const TABS = [
  { id: "education", label: "School Exam & NIOS", Icon: GraduationCap },
  { id: "vocational", label: "Vocational Courses", Icon: Tool },
  { id: "iti", label: " ITI/ITC/Jr Polytechnic", Icon: Users },
  { id: "scholarship", label: "Scholarships", Icon: Award },
  { id: "counselor", label: "Career Counseling", Icon: HelpCircle },
];
export default function AfterClass8Page({itis}) {
  const [activeTab, setActiveTab] = useState("education");
  const tabRef = useRef(null);
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [showRightChevron, setShowRightChevron] = useState(true);

  const updateChevronVisibility = () => {
    if (tabRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabRef.current;
      setShowLeftChevron(scrollLeft > 10);
      setShowRightChevron(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = document.querySelector(`#tab-${activeTab}`);
    if (el && tabRef.current) {
      const parent = tabRef.current;
      const offset = el.offsetLeft - parent.clientWidth / 2 + el.clientWidth / 2;
      parent.scrollTo({ left: offset, behavior: "smooth" });
    }
    updateChevronVisibility();
  }, [activeTab]);

  useEffect(() => {
    updateChevronVisibility();
    window.addEventListener('resize', updateChevronVisibility);
    return () => window.removeEventListener('resize', updateChevronVisibility);
  }, []);

  const scrollTabs = (direction) => {
    const el = tabRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.6);
    el.scrollBy({ 
      left: direction === "left" ? -amount : amount, 
      behavior: "smooth" 
    });
    
    // Update visibility after scroll
    setTimeout(updateChevronVisibility, 300);
  };

  const renderIcon = (IconComponent, props = {}) => {
    const Icon = IconComponent ?? HelpCircle;
    return <Icon {...props} />;
  };
  return (
    <FrontendLayout>
      <div className={styles.pageContainer}>
        {/* Hero Section */}
      <HeroInner title="Career Options — After Class 8" breadcrumb="After class 8th" />

      
        <div className={styles.tabsContainer}>
          <div className="container">
            <div className={styles.tabsWrapper}>
              {showLeftChevron && (
                <button 
                  className={styles.scrollButton}
                  onClick={() => scrollTabs("left")}
                >
                  {renderIcon(ChevronLeft, { size: 20 })}
                </button>
              )}
              
              <div 
                className={styles.tabsScroll} 
                ref={tabRef}
                onScroll={updateChevronVisibility}
              >
                <div className={styles.tabsInner}>
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      id={`tab-${tab.id}`}
                      className={`${styles.tabButton} ${activeTab === tab.id ? styles.tabActive : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {renderIcon(tab.Icon, { className: styles.tabIcon })}
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {showRightChevron && (
                <button 
                  className={styles.scrollButton}
                  onClick={() => scrollTabs("right")}
                >
                  {renderIcon(ChevronRight, { size: 20 })}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <main className="container">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.contentSection}
          >
            {/* Education Pathways */}
            {activeTab === "education" && (
              <div className={styles.grid}>
                {DUMMY_DATA.educationPathways.map((pathway, index) => (
                  <div key={index} className={styles.card}>
                    <div className={styles.cardHeader}>
                      {renderIcon(pathway.icon || GraduationCap, { className: styles.cardIcon })}
                      <div>
                        <h4 className={styles.cardTitle}>{pathway.title}</h4>
                        <span className={styles.cardType}>{pathway.type}</span>
                      </div>
                    </div>
                    <p className={styles.cardDescription}>{pathway.description}</p>
                    
                    <div className={styles.features}>
                      <h6>Available Options:</h6>
                      <ul>
                        {pathway.options.map((option, idx) => (
                          <li key={idx}>{option}</li>
                        ))}
                      </ul>
                    </div>

                    {pathway.features && (
                      <div className={styles.features}>
                        <h6>Key Features:</h6>
                        <ul>
                          {pathway.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    
                  </div>
                ))}
              </div>
            )}

            {/* Vocational Courses */}
            {activeTab === "vocational" && (
              <section>
                <div className="row g-3">
                  <div className="col-12">
                    <VocationCourses8and10th />
                  </div>
                </div>
              </section>
            )}

            {/* ITI Courses */}
            {activeTab === "iti" && (
                <section>
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <h4>ITI / ITC / Junior Polytechnic</h4>
                      <p className="text-muted">
                        Industrial Training Institutes (ITIs) offer trade-specific training (NCVT or
                        SCVT). Courses range from 6 months to 2 years. They are excellent for early
                        employability and apprenticeships.
                      </p>

                      {/* Course List */}
                      <div className="card p-4 border-0 shadow-sm mb-4 mt-lg-5">
                        <h5 className="mb-3">Available Trades & Duration</h5>
                        <div className="row">
                          <div className="col-lg-4">
                            <ul className="list-unstyled">
                              <li className="mb-2">
                                <span className="fw-semibold">1. Painter General</span>
                                <span className="badge bg-primary ms-2">2 years</span>
                              </li>
                              <li className="mb-2">
                                <span className="fw-semibold">2. Wireman</span>
                                <span className="badge bg-primary ms-2">2 years</span>
                              </li>
                              <li className="mb-2">
                                <span className="fw-semibold">3. Welder (Gas & Electric)</span>
                                <span className="badge bg-warning ms-2">1 year</span>
                              </li>
                              <li className="mb-2">
                                <span className="fw-semibold">4. Plumber</span>
                                <span className="badge bg-warning ms-2">1 year</span>
                              </li>
                            
                            </ul>
                          </div>
                          <div className="col-lg-4">
                            <ul className="list-unstyled">
                              <li className="mb-2">
                                <span className="fw-semibold">5. Foundry Man</span>
                                <span className="badge bg-warning ms-2">1 year</span>
                              </li>
                              <li className="mb-2">
                                <span className="fw-semibold">6. Mason</span>
                                <span className="badge bg-warning ms-2">1 year</span>
                              </li>
                              <li className="mb-2">
                                <span className="fw-semibold">7. Carpenter</span>
                                <span className="badge bg-warning ms-2">1 year</span>
                              </li>
                              <li className="mb-2">
                                <span className="fw-semibold">8. Sheet Metal Worker</span>
                                <span className="badge bg-warning ms-2">1 year</span>
                              </li>
                            
                            </ul>
                          </div>

                          <div className="col-lg-4">
                            <ul className="list-unstyled">

                              
                              <li className="mb-2">
                                <span className="fw-semibold">9. Cutting & Sewing</span>
                                <span className="badge bg-warning ms-2">1 year</span>
                              </li>
                              <li className="mb-2">
                                <span className="fw-semibold">10. Footwear & Leather Goods</span>
                                <span className="badge bg-warning ms-2">1 year</span>
                              </li>
                              <li className="mb-2">
                                <span className="fw-semibold">11. Agricultural Machinery Mechanic</span>
                                <span className="badge bg-warning ms-2">1 year</span>
                              </li>
                              <li className="mb-2">
                                <span className="fw-semibold">12. Sanitary Hardware Fitter</span>
                                <span className="badge bg-success ms-2">6 months</span>
                              </li>
                            </ul>
                            </div>
                        </div>
                      </div>

                    </div>


                  </div>

                  <div>
                    <ITIInstitutes data={itis}/>
                  </div>
                </section>
              )}

            {/* Scholarships */}
            {activeTab === "scholarship" && (
              <div>
                <Scholership />
              </div>
            )}

            {/* Career Counseling */}
            {activeTab === "counselor" && (
              <CounsellorsDirectory />
            )}
          </motion.div>
        </main>
      </div>
    </FrontendLayout>
  );
}