import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import ScholarshipTabsBar from "./ScholarshipTabsBar";
import { ExternalLink, Globe, BookOpen, Award } from "lucide-react";

const SCHOLARSHIP_TABS = [
  { id: "overview", label: "Overview", href: "/scholarship/overview" },
  { id: "rate-scholarship", label: "Rate Of Scholarship", href: "/scholarship/rate-of-scholarship" },
 {
    id: "more-scholarships ",
    label: "More Scholarships",
    href: "/scholarship/more-scholarships",
  },
  { id: "education-loans", label: "Education Loans", href: "/scholarship/education-loans" },
  { id: "national-fellowships", label: "National Fellowships", href: "/scholarship/national-fellowships" },
  { id: "study-abroad", label: "Study Abroad", href: "/scholarship/study-abroad" },
];

const STUDY_ABROAD_DATA = [
  {
    id: 1,
    title: "SCHOLARSHIPS FOR INDIAN STUDENTS TO STUDY IN ABROAD",
    resources: [
      {
        name: "India Education Network - USA Scholarships",
        url: "http://www.indiaeducation.net/studyabroad/usa/scholarships.html",
        description: "Comprehensive scholarship information for Indian students planning to study in USA"
      },
      {
        name: "Shiksha Study Abroad Scholarships",
        url: "https://studyabroad.shiksha.com/scholarships",
        description: "Detailed scholarship guides and opportunities for studying overseas"
      },
      {
        name: "Top Universities International Scholarships",
        url: "https://www.topuniversities.com/student-info/scholarship-advice/international-scholarships-indian-students",
        description: "International scholarship advice and opportunities for Indian students"
      }
    ]
  },
  {
    id: 2,
    title: "PADHO PARDESH",
    description: "Scheme of Interest Subsidy on Educational Loans for Overseas Studies for the Students Belonging to the Minority Communities",
    resources: [
      {
        name: "Official Padho Pardesh Scheme Portal",
        url: "http://www.minorityaffairs.gov.in/schemesperformance/padho-pardesh-scheme-interest-subsidy-educational-loans-overseas-studies-students-belonging-minority",
        description: "Complete details about the interest subsidy scheme for minority students"
      }
    ]
  }
];

export default function StudyAbroadPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Study Abroad Scholarships"
        breadcrumb="Scholarships → Study Abroad"
        description="Scholarships and financial support for Indian students pursuing education overseas"
      />

      <ScholarshipTabsBar tabs={SCHOLARSHIP_TABS} activeId="study-abroad" />

      <section className="sch-shell">
        <div className="container">
          {/* Header Section */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="sch-card text-center">
                <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
                  <div className="study-abroad-main-icon">
                    <Globe size={32} />
                  </div>
                  <div>
                    <h1 className="h3 mb-2">Study Abroad Opportunities</h1>
                    <p className="text-muted mb-0">Financial support and scholarships for international education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="row g-4">
            {STUDY_ABROAD_DATA.map((section) => (
              <div key={section.id} className="col-12">
                <div className="study-abroad-section">
                  <div className="section-header">
                    {section.id === 1 ? (
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <Award size={24} className="text-primary" />
                        <h2 className="h4 mb-0">{section.title}</h2>
                      </div>
                    ) : (
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <BookOpen size={24} className="text-success" />
                        <div>
                          <h2 className="h4 mb-1">{section.title}</h2>
                          <p className="section-description mb-0">{section.description}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="resources-grid">
                    {section.resources.map((resource, index) => (
                      <div key={index} className="resource-card">
                        <div className="resource-content">
                          <h3 className="resource-title">{resource.name}</h3>
                          <p className="resource-description">{resource.description}</p>
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resource-link"
                          >
                            <ExternalLink size={16} />
                            Visit Website
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="sch-card">
                <div className="additional-info">
                  <h3 className="h5 mb-3">Important Notes</h3>
                  <div className="info-content">
                    <p>
                      <strong>Scholarship Applications:</strong> Start your scholarship search and applications at least 12-18 months before your intended study period. Most scholarships have early deadlines.
                    </p>
                    <p>
                      <strong>Padho Pardesh Scheme:</strong> This scheme provides interest subsidy on educational loans for overseas studies specifically for students belonging to minority communities. Check eligibility criteria and application process on the official portal.
                    </p>
                    <p>
                      <strong>Document Preparation:</strong> Keep all academic records, recommendation letters, and statement of purpose ready. Many scholarships require detailed documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .study-abroad-main-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #007bff, #0056b3);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 8px 24px rgba(0, 123, 255, 0.3);
        }
        
        .study-abroad-section {
          background: white;
          border: 1px solid #e9ecef;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
        }
        
        .section-header {
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f8f9fa;
        }
        
        .section-description {
          color: #6c757d;
          font-size: 1rem;
          line-height: 1.5;
        }
        
        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        
        .resource-card {
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .resource-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(135deg, #28a745, #20c997);
        }
        
        .resource-card:hover {
          border-color: #007bff;
          box-shadow: 0 8px 32px rgba(0, 123, 255, 0.15);
          transform: translateY(-2px);
        }
        
        .resource-content {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .resource-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }
        
        .resource-description {
          color: #6c757d;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex: 1;
        }
        
        .resource-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          width: fit-content;
        }
        
        .resource-link:hover {
          background: linear-gradient(135deg, #0056b3, #004085);
          color: white;
          text-decoration: none;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
        }
        
        .additional-info {
          background: linear-gradient(135deg, #f8f9ff, #e3f2fd);
          padding: 2rem;
          border-radius: 12px;
          border-left: 6px solid #007bff;
        }
        
        .info-content p {
          color: #495057;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .info-content p:last-child {
          margin-bottom: 0;
        }
        
        .info-content strong {
          color: #2c3e50;
        }
        
        @media (max-width: 768px) {
          .study-abroad-section {
            padding: 1.5rem;
          }
          
          .resources-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .resource-card {
            padding: 1.25rem;
          }
          
          .study-abroad-main-icon {
            width: 60px;
            height: 60px;
          }
          
          .additional-info {
            padding: 1.5rem;
          }
        }
      `}</style>
      </FrontendLayout>
    </>
  );
}