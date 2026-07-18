import React, { useState } from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import ScholarshipTabsBar from "./ScholarshipTabsBar";
import { Search, ExternalLink, GraduationCap, Filter } from "lucide-react";

const SCHOLARSHIP_TABS = [
  { id: "overview", label: "Overview", href: route("scholarship.overview") },
  { id: "rate-scholarship", label: "Rate Of Scholarship", href: route("rate.of.scholarship") },
 {
    id: "more-scholarships ",
    label: "More Scholarships",
    href: route("more.scholarships"),
  },
  { id: "education-loans", label: "Education Loans", href: route("education.loans") },
  { id: "national-fellowships", label: "National Fellowships", href: route("national.fellowships") },
  { id: "study-abroad", label: "Study Abroad", href: route("study.abroad") },
];



// const CATEGORIES = ["All", "Science & Technology", "Doctoral Research", "International", "Minority", "Social Sciences", "Rural Development"];


export default function NationalFellowshipsPage({data}) {

  const FELLOWSHIPS_DATA = Array.isArray(data) ? data : [];

  const CATEGORIES = [
  "All",
  ...new Set(
    FELLOWSHIPS_DATA
      .map((item) => item.category)
      .filter(Boolean)
  ),
];


  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFellowships = FELLOWSHIPS_DATA.filter(fellowship => {
    const matchesSearch = fellowship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fellowship.organization.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const getCategory = (fellowship) => {
    const name = fellowship.name.toLowerCase();
    const org = fellowship.organization.toLowerCase();
    
    if (name.includes('minority') || name.includes('maulana azad')) return "Minority";
    if (name.includes('doctoral') || name.includes('research') || name.includes('phd')) return "Doctoral Research";
    if (name.includes('rural') || name.includes('development')) return "Rural Development";
    if (name.includes('fulbright') || name.includes('commonwealth') || name.includes('international')) return "International";
    if (org.includes('science') || org.includes('technology') || org.includes('biotechnology')) return "Science & Technology";
    if (org.includes('social') || org.includes('cultural') || org.includes('media')) return "Social Sciences";
    
    return "All";
  };

const categorizedFellowships = filteredFellowships.filter(
  (fellowship) =>
    selectedCategory === "All" ||
    fellowship.category === selectedCategory
);

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="National Fellowships"
        breadcrumb="Scholarships → National Fellowships"
        description="Explore comprehensive fellowship opportunities for research and higher studies from various government organizations"
      />

      <ScholarshipTabsBar tabs={SCHOLARSHIP_TABS} activeId="national-fellowships" />

      <section className="sch-shell">
        <div className="container">
          {/* Header Section */}
           <div className="row mb-5">
            <div className="col-12">
              <div className="sch-card text-center">
                <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
                  <div className="fellowship-icon">
                    <GraduationCap size={32} className="text-white" />
                  </div>
                  <div>
                    <h1 className="h3 mb-2">INFORMATION ABOUT NATIONAL FELLOWSHIPS</h1>
                    <p className="text-muted mb-0">Comprehensive list of fellowship opportunities for Indian researchers and students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="row mb-5">
            <div className="col-12 border-bottom pb-4">
                <div className="row g-3 align-items-end">
                  
                  <div className="col-md-4">
                    <label className="form-label sch-label">Filter by Category</label>
                    <select
                      className="form-select"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {CATEGORIES.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="h5 mb-0">
                  {categorizedFellowships.length} Fellowship{categorizedFellowships.length !== 1 ? 's' : ''} Found
                </h3>
                <span className="text-muted small">
                  Showing all {categorizedFellowships.length} fellowships
                </span>
              </div>
            </div>
          </div>

          {/* Fellowships Grid */}
          <div className="row g-4">
            {categorizedFellowships.map(fellowship => (
              <div key={fellowship.id} className="col-lg-6 col-xl-4">
                <div className="fellowship-card">
                  <div className="fellowship-header">
                    <div className="fellowship-number">
                      {fellowship.id}
                    </div>
                    <h3 className="fellowship-title">{fellowship.name}</h3>
                  </div>
                  
                  <div className="fellowship-organization">
                    {fellowship.organization}
                  </div>

                  {fellowship.link && (
                    <div className="fellowship-footer">
                      <a
                        href={fellowship.link.startsWith('http') ? fellowship.link : `https://${fellowship.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fellowship-link"
                      >
                        <ExternalLink size={14} />
                        Visit Official Website
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        

          {/* Information Note */}
          <div className="row mt-5">
            <div className="col-12">
                <div className="information-note">
                  <h5 className="mb-3">Important Information</h5>
                  <p className="mb-2">
                    This list contains comprehensive information about national fellowships available for Indian students and researchers. 
                    Each fellowship has specific eligibility criteria, application deadlines, and selection procedures.
                  </p>
                  <p className="mb-0">
                    <strong>Note:</strong> Always visit the official website for the most current information and detailed application guidelines.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .fellowship-card {
          background: white;
          border: 1px solid #e9ecef;
          border-radius: 12px;
          padding: 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        
        .fellowship-card:hover {
          border-color: #007bff;
          box-shadow: 0 4px 16px rgba(0, 123, 255, 0.1);
          transform: translateY(-2px);
        }
        
        .fellowship-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .fellowship-number {
          background: #007bff;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.875rem;
          font-weight: 600;
          flex-shrink: 0;
        }
        
        .fellowship-title {
          font-size: 1rem;
          font-weight: 600;
          color: #2c3e50;
          line-height: 1.4;
          margin: 0;
          flex: 1;
        }
        
        .fellowship-organization {
          color: #6c757d;
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          flex: 1;
        }
        
        .fellowship-footer {
          margin-top: auto;
        }
        
        .fellowship-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 6px;
          color: #007bff;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        
        .fellowship-link:hover {
          background: #007bff;
          color: white;
          text-decoration: none;
          border-color: #007bff;
        }
        
        .fellowship-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #007bff, #0056b3);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .information-note {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
          border-left: 4px solid #007bff;
        }
        
        .input-group-text {
          background: #f8f9fa;
          border-right: none;
        }
        
        .form-control:focus,
        .form-select:focus {
          border-color: #007bff;
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }
        
        @media (max-width: 768px) {
          .fellowship-card {
            padding: 1.25rem;
          }
          
          .fellowship-header {
            gap: 0.75rem;
          }
          
          .fellowship-title {
            font-size: 0.95rem;
          }
        }
      `}</style>
      </FrontendLayout>
    </>
  );
}