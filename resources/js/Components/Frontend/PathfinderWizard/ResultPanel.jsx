// components/PathfinderWizard/ResultPanel.js

import * as LucideIcons from "lucide-react";
import { useState } from "react";
import { 
  educationLevels, 
  scholarships, 
  entranceExams, 
  careerCounselors, 
  getCareerRecommendations 
} from "./data";

export default function ResultPanel({ answers }) {
  const [activeTab, setActiveTab] = useState("careers");

  if (!answers.educationLevel) {
    return null;
  }

  const recommendedCareers = getCareerRecommendations(answers);
  const selectedLevel = educationLevels.find(
    level => level.value === answers.educationLevel
  );

  function getRelevantExams() {
    const examKeys = [];
    recommendedCareers.forEach(career => {
      if (career.entrance_exams) {
        career.entrance_exams.forEach(exam => {
          const examKey = exam.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
          if (entranceExams[exam] || entranceExams[examKey]) {
            examKeys.push(exam);
          }
        });
      }
    });
    
    if (answers.stream === "pcb") examKeys.push("NEET");
    if (answers.stream === "pcm") examKeys.push("JEE_Main", "WBJEE");
    if (answers.educationLevel === "graduation") examKeys.push("CAT");
    
    return [...new Set(examKeys)];
  }

  function getRelevantCounselors() {
    const specializations = [];
    if (answers.stream === "pcb" || answers.interests?.includes("healthcare")) {
      specializations.push("Medical");
    }
    if (answers.stream === "pcm" || answers.interests?.includes("engineering")) {
      specializations.push("Engineering");
    }
    if (answers.stream === "commerce" || answers.interests?.includes("business")) {
      specializations.push("Commerce");
    }
    if (answers.stream === "arts" || answers.interests?.includes("arts_creative")) {
      specializations.push("Arts");
    }

    return careerCounselors.filter(counselor => 
      specializations.some(spec => 
        counselor.specialization.toLowerCase().includes(spec.toLowerCase())
      )
    );
  }

  const relevantExams = getRelevantExams();
  const relevantCounselors = getRelevantCounselors();

  return (
    <>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        
        .results-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          background: white;
          border-radius:32px
        }

        .hero-header {
          background: white;
          padding: 48px 0 32px;
          border-bottom: 1px solid #f1f5f9;
        }

        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
        }

        

        .hero-text p {
          font-size: 18px;
          color: #64748b;
          margin: 0 0 24px 0;
          font-weight: 400;
        }

        .profile-summary {
          background: #4f46e5;
          color: white;
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 500;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
        }

        .hero-visual {
          width: 72px;
          height: 72px;
          background: #4f46e5;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(79, 70, 229, 0.25);
        }

        .nav-section {
          margin-bottom: 40px;
        }

        .nav-tabs {
          background: #f8fafc;
          border-radius: 14px;
          padding: 6px;
          display: flex;
          gap: 4px;
          border: 1px solid #e2e8f0;
        }

        .nav-tab {
          flex: 1;
          padding: 16px 20px;
          border: none;
          background: transparent;
          border-radius: 10px;
          color: #64748b;
          font-weight: 500;
          font-size: 15px;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-tab:hover {
          color: #334155;
          background: rgba(255, 255, 255, 0.6);
        }

        .nav-tab.active {
          background: white;
          color: #0f172a;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          font-weight: 600;
        }

        .tab-badge {
          background: #e2e8f0;
          color: #475569;
          border-radius: 8px;
          padding: 3px 8px;
          font-size: 12px;
          font-weight: 600;
          margin-left: 8px;
        }

        .active .tab-badge {
          background: #4f46e5;
          color: white;
        }

        .content-section {
          min-height: 400px;
          padding-bottom: 48px;
        }

        .career-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 32px;
          margin-bottom: 24px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .career-card:hover {
          border-color: #4f46e5;
          box-shadow: 0 8px 32px rgba(79, 70, 229, 0.12);
          transform: translateY(-2px);
        }

        .career-header {
          display: flex;
          align-items: center;
          justify-content: between;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #f1f5f9;
        }

        .career-title {
          font-size: 22px;
          font-weight: 700;
          color: #0f172a;
          display: flex;
          align-items: center;
          margin: 0;
          flex: 1;
        }

        .career-count {
          background: #f1f5f9;
          color: #475569;
          padding: 4px 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
        }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
          margin-bottom: 32px;
        }

        .option-item {
          background: #fafbfc;
          border: 1px solid #f1f5f9;
          border-radius: 12px;
          padding: 18px;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .option-item:hover {
          background: white;
          border-color: #d1d5db;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .option-content {
          display: flex;
          align-items: center;
        }

        .option-icon {
          width: 8px;
          height: 8px;
          background: #4f46e5;
          border-radius: 50%;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .option-text {
          font-size: 15px;
          font-weight: 500;
          color: #334155;
        }

        .info-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
          padding-top: 24px;
          border-top: 1px solid #f1f5f9;
        }

        .info-block h6 {
          font-size: 13px;
          font-weight: 700;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
        }

        .info-list {
          color: #64748b;
          font-size: 14px;
          line-height: 1.6;
        }

        .info-list div {
          margin-bottom: 4px;
        }

        .exam-grid, .scholarship-grid, .counselor-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 24px;
        }

        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 28px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          height: fit-content;
        }

        .card:hover {
          border-color: #d1d5db;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        .card-header {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 16px;
          flex-shrink: 0;
        }

        .exam-icon { background: #fef3c7; color: #d97706; }
        .scholarship-icon { background: #d1fae5; color: #059669; }
        .counselor-icon { background: #e0e7ff; color: #4f46e5; }

        .card-content h5 {
          font-size: 18px;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 4px 0;
        }

        .card-subtitle {
          font-size: 14px;
          color: #64748b;
          margin: 0 0 16px 0;
        }

        .card-details {
          font-size: 14px;
          color: #475569;
          margin-bottom: 20px;
        }

        .card-details div {
          margin-bottom: 8px;
        }

        .price-tag {
          background: #059669;
          color: white;
          padding: 6px 12px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          display: inline-block;
          margin-bottom: 12px;
        }

        .btn-primary {
          background: #4f46e5;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.2s ease;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }

        .btn-primary:hover {
          background: #4338ca;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
          color: white;
        }

        .btn-secondary {
          background: white;
          color: #475569;
          border: 1px solid #d1d5db;
          padding: 10px 20px;
          border-radius: 10px;
          font-weight: 500;
          font-size: 14px;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .btn-secondary:hover {
          border-color: #9ca3af;
          color: #374151;
          background: #f9fafb;
        }

        .steps-section {
          margin-top: 48px;
        }

        .steps-title {
          font-size: 28px;
          font-weight: 700;
          color: #0f172a;
          text-align: center;
          margin-bottom: 40px;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        .step-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .step-card:hover {
          border-color: #4f46e5;
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(79, 70, 229, 0.12);
        }

        .step-icon {
          width: 64px;
          height: 64px;
          background: #4f46e5;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 8px 24px rgba(79, 70, 229, 0.25);
        }

        .step-title {
          font-size: 18px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .step-desc {
          font-size: 15px;
          color: #64748b;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .hero-text h1 { font-size: 28px; }
          .career-card, .card { padding: 24px; }
          .options-grid { grid-template-columns: 1fr; }
          .steps-section { padding: 32px 24px; }
        }
      `}</style>

      <div className="results-container">
        
        {/* Hero Section */}
        <div className="hero-header">
          <div className="hero-content">
            <div className="hero-text">
              <h3>Your Career Recommendations</h3>
              <p>Personalized pathways designed specifically for your profile and interests</p>
              <div className="profile-summary">
                <LucideIcons.User size={16} className="me-2" />
                {selectedLevel?.label} • {(answers.interests || ["General studies"]).join(", ")}
                {answers.careerGoals && <span> • {answers.careerGoals.replace("_", " ")}</span>}
              </div>
            </div>
            <div className="hero-visual">
              <LucideIcons.Target size={32} className="text-white" />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="nav-section">
          <div className="nav-tabs">
            <button
              className={`nav-tab ${activeTab === "careers" ? "active" : ""}`}
              onClick={() => setActiveTab("careers")}
            >
              <LucideIcons.Briefcase size={18} className="me-2" />
              Career Paths
              <span className="tab-badge">{recommendedCareers.length}</span>
            </button>
            <button
              className={`nav-tab ${activeTab === "exams" ? "active" : ""}`}
              onClick={() => setActiveTab("exams")}
            >
              <LucideIcons.FileText size={18} className="me-2" />
              Entrance Exams
              <span className="tab-badge">{relevantExams.length}</span>
            </button>
            <button
              className={`nav-tab ${activeTab === "scholarships" ? "active" : ""}`}
              onClick={() => setActiveTab("scholarships")}
            >
              <LucideIcons.Award size={18} className="me-2" />
              Scholarships
              <span className="tab-badge">{scholarships.length}</span>
            </button>
            <button
              className={`nav-tab ${activeTab === "counselors" ? "active" : ""}`}
              onClick={() => setActiveTab("counselors")}
            >
              <LucideIcons.Users size={18} className="me-2" />
              Expert Guidance
              <span className="tab-badge">{relevantCounselors.length}</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="content-section">
          
          {/* Career Paths */}
          {activeTab === "careers" && (
            <div>
              {recommendedCareers.map((careerGroup, idx) => (
                <div key={idx} className="career-card">
                  <div className="career-header">
                    <h3 className="career-title">
                      <LucideIcons.Briefcase size={24} className="me-3" style={{color: '#4f46e5'}} />
                      {careerGroup.category}
                    </h3>
                    <div className="career-count">{careerGroup.options.length} options</div>
                  </div>

                  <div className="options-grid">
                    {careerGroup.options.map((option, optIdx) => (
                      <div key={optIdx} className="option-item">
                        <div className="option-content">
                          <div className="option-icon"></div>
                          <div className="option-text">{option}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="info-section">
                    <div className="info-block">
                      <h6>
                        <LucideIcons.BookOpen size={14} className="me-2" style={{color: '#d97706'}} />
                        Entrance Exams
                      </h6>
                      <div className="info-list">
                        {careerGroup.entrance_exams?.map((exam, examIdx) => (
                          <div key={examIdx}>• {exam}</div>
                        )) || <div>• Direct admission</div>}
                      </div>
                    </div>
                    
                    <div className="info-block">
                      <h6>
                        <LucideIcons.Building2 size={14} className="me-2" style={{color: '#0ea5e9'}} />
                        Top Institutions
                      </h6>
                      <div className="info-list">
                        {careerGroup.colleges?.map((college, collegeIdx) => (
                          <div key={collegeIdx}>• {college}</div>
                        )) || <div>• Various institutions</div>}
                      </div>
                    </div>
                    
                    <div className="info-block">
                      <h6>
                        <LucideIcons.DollarSign size={14} className="me-2" style={{color: '#059669'}} />
                        Financial Support
                      </h6>
                      <div className="info-list">
                        {careerGroup.scholarships?.map((scholarship, scholarshipIdx) => (
                          <div key={scholarshipIdx}>• {scholarship}</div>
                        )) || <div>• Merit-based aid available</div>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Entrance Exams */}
          {activeTab === "exams" && (
            <div className="exam-grid">
              {Object.entries(entranceExams)
                .filter(([key]) => relevantExams.includes(key) || relevantExams.includes(key.replace('_', ' ')))
                .map(([key, exam]) => (
                <div key={key} className="card">
                  <div className="card-header">
                    <div className="card-icon exam-icon">
                      <LucideIcons.FileText size={20} />
                    </div>
                    <div className="card-content">
                      <h5>{exam.fullName}</h5>
                      <div className="card-subtitle">{exam.purpose}</div>
                    </div>
                  </div>
                  
                  <div className="card-details">
                    <div><strong>Eligibility:</strong> {exam.eligibility}</div>
                    <div><strong>Exam Dates:</strong> {exam.examDates}</div>
                    <div><strong>Preparation Time:</strong> {exam.preparationTime}</div>
                  </div>
                  
                  <a href={`https://${exam.applicationLink}`} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="btn-primary">
                    <LucideIcons.ExternalLink size={16} className="me-2" />
                    Apply Online
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Scholarships */}
          {activeTab === "scholarships" && (
            <div className="scholarship-grid">
              {scholarships.map((scholarship, idx) => (
                <div key={idx} className="card">
                  <div className="card-header">
                    <div className="card-icon scholarship-icon">
                      <LucideIcons.Award size={20} />
                    </div>
                    <div className="card-content">
                      <h5>{scholarship.name}</h5>
                      <div className="price-tag">{scholarship.amount}</div>
                    </div>
                  </div>
                  
                  <div className="card-details">
                    <div>{scholarship.eligibility}</div>
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center">
                    <small style={{color: '#64748b', fontSize: '13px'}}>{scholarship.link}</small>
                    <button className="btn-secondary">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Counselors */}
          {activeTab === "counselors" && (
            <div className="counselor-grid">
              {relevantCounselors.map((counselor, idx) => (
                <div key={idx} className="card">
                  <div className="card-header">
                    <div className="card-icon counselor-icon">
                      <LucideIcons.User size={20} />
                    </div>
                    <div className="card-content">
                      <h5>{counselor.name}</h5>
                      <div className="card-subtitle">{counselor.specialization}</div>
                    </div>
                  </div>
                  
                  <div className="card-details">
                    <div>{counselor.qualification}</div>
                    <div>{counselor.experience} experience</div>
                  </div>
                  
                  <button className="btn-primary w-100">
                    <LucideIcons.MessageCircle size={16} className="me-2" />
                    Ask the Counselor
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Steps */}
        <div className="steps-section pb-5">
          <h3 className="steps-title">Your Next Steps</h3>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon">
                <LucideIcons.Search size={28} className="text-white" />
              </div>
              <div className="step-title">Research</div>
              <p className="step-desc">Deep dive into your recommended career paths and explore opportunities</p>
            </div>
            <div className="step-card">
              <div className="step-icon">
                <LucideIcons.BookOpen size={28} className="text-white" />
              </div>
              <div className="step-title">Prepare</div>
              <p className="step-desc">Start preparing for entrance exams and build relevant skills</p>
            </div>
            <div className="step-card">
              <div className="step-icon">
                <LucideIcons.Award size={28} className="text-white" />
              </div>
              <div className="step-title">Apply</div>
              <p className="step-desc">Submit applications for scholarships and college admissions</p>
            </div>
            <div className="step-card">
              <div className="step-icon">
                <LucideIcons.MessageCircle size={28} className="text-white" />
              </div>
              <div className="step-title">Connect</div>
              <p className="step-desc">Get personalized guidance from expert career counselors</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
