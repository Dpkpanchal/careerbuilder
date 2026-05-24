import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import FrontendLayout from '@/Layouts/FrontendLayout';
import ScholarshipTabsBar from "./ScholarshipTabsBar";

// Import icons individually to avoid undefined errors
import { 
  IndianRupee, 
  Calendar, 
  UserCheck, 
  Building, 
  //Bank,
  Landmark, 
  ExternalLink, 
  FileText 
} from "lucide-react";

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

// Safe icon component to handle undefined imports
const SafeIcon = ({ icon: IconComponent, ...props }) => {
  if (!IconComponent || typeof IconComponent === 'undefined') {
    return <span {...props}>●</span>;
  }
  return <IconComponent {...props} />;
};

export default function EducationLoansPage() {
  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Education Loans"
        breadcrumb="Scholarships → Education Loans"
        description="Get education loan at the lowest Rate of Interest @ 3% p.a.!"
      />

      <ScholarshipTabsBar tabs={SCHOLARSHIP_TABS} activeId="education-loans" />

      <section className="sch-shell">
        <div className="container">
          {/* Main Loan Information */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="sch-card text-center">
                <div className="loan-hero">
                  <h1 className="display-6 fw-bold text-primary mb-3">
                    GET EDUCATION LOAN at the lowest Rate of Interest @ 3% p.a.!
                  </h1>
                  <p className="lead mb-0 ">
                    www.wbmdfc.net
                  </p>
                
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Eligibility Section */}
            <div className="col-lg-4">
              <div className="sch-card h-100 nitDarkGlassCard">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <SafeIcon icon={UserCheck} size={24} className="text-white" />
                  <h3 className="h5 mb-0 text-white">ELIGIBILITY</h3>
                </div>
                <p className="mb-0 text-white">
                  Students domiciled in WB and pursuing Technical and Professional courses, Medical/ Engineering/ Law/Nursing/ Diploma/ Management/ BCA/ MCA etc.
                </p>
              </div>
            </div>

            {/* Application Process */}
            <div className="col-lg-4">
              <div className="sch-card h-100 nitDarkGlassCard">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <SafeIcon icon={FileText} size={24} className="text-white" />
                  <h3 className="h5 mb-0 text-white">APPLICATION</h3>
                </div>
                <ul className="loan-list text-white">
                  <li>Students must apply ONLINE from July to October, every year at www.wbmdfc.net</li>
                  <li>He / She need to take a print out of the application and get it verified by the institution.</li>
                </ul>
              </div>
            </div>

            {/* Age Group */}
            <div className="col-lg-4">
              <div className="sch-card h-100 nitDarkGlassCard">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <SafeIcon icon={Calendar} size={24} className="text-white" />
                  <h3 className="h5 mb-0 text-white">AGE GROUP</h3>
                </div>
                <div className="age-group">
                  <span className="age-value">within 32 years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Income and Interest Rates Table */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="sch-card">
                <div className="d-flex align-items-center gap-2 mb-4">
                  <SafeIcon icon={IndianRupee} size={24} className="text-success" />
                  <h3 className="h4 mb-0">ANNUAL FAMILY INCOME</h3>
                </div>
                
                <div className="table-responsive">
                  <table className="table loan-table">
                    <thead>
                      <tr>
                        <th>CATEGORY</th>
                        <th colSpan="2" className="text-center">ANNUAL FAMILY INCOME</th>
                        <th>ADMISSIBLE RATE OF INTEREST</th>
                      </tr>
                      <tr>
                        <th></th>
                        <th className="text-center">RURAL</th>
                        <th className="text-center">URBAN</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Both Male & Female</td>
                        <td className="text-center">Upto ₹81,000</td>
                        <td className="text-center">Upto ₹1,03,000</td>
                        <td rowSpan="3" className="interest-cell">
                          <div className="interest-rate">
                            <span className="rate">3% p.a.</span>
                            <small>Lowest Rate of Interest</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Male</td>
                        <td className="text-center">From ₹81,001 to ₹6,00,000</td>
                        <td className="text-center">From ₹1,03,001 to ₹6,00,000</td>
                      </tr>
                      <tr>
                        <td>Female</td>
                        <td className="text-center">From ₹81,001 to ₹6,00,000</td>
                        <td className="text-center">From ₹1,03,001 to ₹6,00,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Disbursement Information */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="sch-card">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <SafeIcon icon={Landmark} size={24} className="text-info" />
                  <h3 className="h4 mb-0">DISBURSEMENT</h3>
                </div>
                <p className="mb-0">
                  Eligible students, if selected for loan, will be required to open a joint account in the name of student and parent or legal guardian.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Loan Resources */}
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="sch-card h-100">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <SafeIcon icon={Building} size={24} className="text-primary" />
                  <h3 className="h5 mb-0">EDUCATION LOANS FROM TOP INDIAN BANKS</h3>
                </div>
                <p className="mb-3">
                  Compare education loan interest rates from top Indian banks
                </p>
                <a
                  href="https://www.myloancare.in/education-loan-interest/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fw-medium btn-primary filled text-secondry shadow-sm text-decoration-none"
                >
                  <SafeIcon icon={ExternalLink} size={16} />
                  Visit MyLoanCare
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="sch-card h-100">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <SafeIcon icon={Landmark} size={24} className="text-success" />
                  <h3 className="h5 mb-0">VIDYA LAKSHMI PORTAL</h3>
                </div>
                <p className="mb-3">
                  Vidya Lakshmi Portal is an education Loan Portal managed by NSDL e-Governance Infrastructure Limited, Mumbai
                </p>
                <a
                  href="https://www.vidyalakshmi.co.in/Students/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fw-medium btn-primary filled text-secondry shadow-sm text-decoration-none"
                >
                  <SafeIcon icon={ExternalLink} size={16} />
                  Visit Vidya Lakshmi
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      <style jsx>{`
        .loan-hero {
          padding:  0;
        }
        
        .loan-badge {
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
          padding: 1.5rem 2rem;
          border-radius: 12px;
          display: inline-block;
          margin-top: 1rem;
        }
        
        .loan-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .loan-list li {
          padding: 0.5rem 0;
          border-bottom: 1px solid #e9ecef;
        }
        
        .loan-list li:last-child {
          border-bottom: none;
        }
        
        .age-group {
          padding: 1rem 0;
        }
          .nitDarkGlassCard {
    padding: 1.4rem 1.6rem;
}

.nitDarkGlassBox, .nitDarkGlassCard {
    padding: 1.6rem 1.8rem;
    border-radius: 1.4rem;
    background: linear-gradient(145deg, rgba(15, 23, 42, 0.06), rgba(15, 23, 42, 0.12)) padding-box, linear-gradient(135deg, rgb(129 140 248), #00b2f2) border-box;
    border: 1px solid transparent;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.14);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: #e5e7eb;
    transition: transform 0.22s 
ease, box-shadow 0.22s 
ease;
}
        
        .age-value {
          font-size: 1.5rem;
          font-weight: 600;
          color: #fff;
        }
        
        .loan-table {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .loan-table th {
          background: #f8f9fa;
          font-weight: 600;
          border-bottom: 2px solid #dee2e6;
          padding: 1rem;
          text-align: center;
        }
        
        .loan-table td {
          padding: 1rem;
          border-bottom: 1px solid #dee2e6;
          vertical-align: middle;
        }
        
        .interest-cell {
          text-align: center;
          background: #f8fff9;
        }
        
        .interest-rate {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
        
        .rate {
          font-size: 1.5rem;
          font-weight: 700;
          color: #28a745;
          margin-bottom: 0.25rem;
        }
        
        .interest-rate small {
          color: #6c757d;
          font-size: 0.875rem;
        }
        
        @media (max-width: 768px) {
          .loan-hero h1 {
            font-size: 1.5rem;
          }
          
          .loan-badge {
            padding: 1rem 1.5rem;
          }
          
          .loan-badge h2 {
            font-size: 1.25rem;
          }
          
          .age-value {
            font-size: 1.25rem;
          }
          
          .rate {
            font-size: 1.25rem;
          }
        }
      `}</style>
      </FrontendLayout>
    </>
  );
}