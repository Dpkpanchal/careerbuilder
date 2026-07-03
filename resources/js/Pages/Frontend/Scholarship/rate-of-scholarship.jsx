import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import ScholarshipTabsBar from "./ScholarshipTabsBar";
import FrontendLayout from '@/Layouts/FrontendLayout';
import { IndianRupee, Home, School, BookOpen, GraduationCap, AlertCircle } from "lucide-react";

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

// const SCHOLARSHIP_RATES = [
//   {
//     no: 1,
//     type: "PRE MATRIC",
//     classOfStudy: "I to V",
//     dayScholar: {
//       admissionTuitionFee: 0,
//       maintenanceAllowance: 1100,
//       total: 1100
//     },
//     hosteller: {
//       admissionTuitionFee: 0,
//       maintenanceAllowance: 0,
//       total: 0
//     }
//   },
//   {
//     no: 1,
//     type: "PRE MATRIC",
//     classOfStudy: "VI to X",
//     dayScholar: {
//       admissionTuitionFee: 4000,
//       maintenanceAllowance: 1000,
//       total: 5000
//     },
//     hosteller: {
//       admissionTuitionFee: 4000,
//       maintenanceAllowance: 6000,
//       total: 10000
//     }
//   },
//   {
//     no: 2,
//     type: "POST MATRIC",
//     classOfStudy: "XI & XII",
//     dayScholar: {
//       admissionTuitionFee: 7000,
//       maintenanceAllowance: 2300,
//       total: 9300
//     },
//     hosteller: {
//       admissionTuitionFee: 7000,
//       maintenanceAllowance: 3800,
//       total: 10800
//     }
//   },
//   {
//     no: 2,
//     type: "POST MATRIC",
//     classOfStudy: "XI & XII (technical & vocational courses)",
//     dayScholar: {
//       admissionTuitionFee: 10000,
//       maintenanceAllowance: 2300,
//       total: 12300
//     },
//     hosteller: {
//       admissionTuitionFee: 10000,
//       maintenanceAllowance: 3800,
//       total: 13800
//     }
//   },
//   {
//     no: 2,
//     type: "POST MATRIC",
//     classOfStudy: "Undergraduate & Post Graduate",
//     dayScholar: {
//       admissionTuitionFee: 3000,
//       maintenanceAllowance: 3000,
//       total: 6000
//     },
//     hosteller: {
//       admissionTuitionFee: 3000,
//       maintenanceAllowance: 5700,
//       total: 8700
//     }
//   },
//   {
//     no: 2,
//     type: "POST MATRIC",
//     classOfStudy: "M.Phil & Ph.D",
//     dayScholar: {
//       admissionTuitionFee: 3000,
//       maintenanceAllowance: 5500,
//       total: 8500
//     },
//     hosteller: {
//       admissionTuitionFee: 3000,
//       maintenanceAllowance: 12000,
//       total: 15000
//     }
//   },
//   {
//     no: 3,
//     type: "MERIT CUM MEANS",
//     classOfStudy: "Medical, engineering, management, law, CA etc.",
//     dayScholar: {
//       admissionTuitionFee: 20000,
//       maintenanceAllowance: 5000,
//       total: 25000
//     },
//     hosteller: {
//       admissionTuitionFee: 20000,
//       maintenanceAllowance: 10000,
//       total: 30000
//     }
//   },
//   {
//     no: 4,
//     type: "TALENT SUPPORT STIPEND (TSP)",
//     classOfStudy: "XI & XII",
//     dayScholar: {
//       admissionTuitionFee: null,
//       maintenanceAllowance: 2550,
//       total: null
//     },
//     hosteller: {
//       admissionTuitionFee: 2550,
//       maintenanceAllowance: 4800,
//       total: 4900
//     }
//   }
// ];

const SCHOLARSHIP_RATES = [
  {
    no: 1,
    type: "PRE MATRIC",
    classOfStudy: "I to V",
    dayScholar: {
      admissionTuitionFee: 0,
      maintenanceAllowance: 1100,
      total: 1100
    },
    hosteller: {
      admissionTuitionFee: 0,
      maintenanceAllowance: 0,
      total: 0
    }
  },
  {
    no: 1,
    type: "PRE MATRIC",
    classOfStudy: "VI to X",
    dayScholar: {
      admissionTuitionFee: 4400,
      maintenanceAllowance: 1100,
      total: 5500
    },
    hosteller: {
      admissionTuitionFee: 4400,
      maintenanceAllowance: 6600,
      total: 11000
    }
  },
  {
    no: 2,
    type: "POST MATRIC",
    classOfStudy: "XI & XII",
    dayScholar: {
      admissionTuitionFee: 7700,
      maintenanceAllowance: 2500,
      total: 10200
    },
    hosteller: {
      admissionTuitionFee: 7700,
      maintenanceAllowance: 4200,
      total: 11900
    }
  },
  {
    no: 2,
    type: "POST MATRIC",
    classOfStudy: "XI & XII (technical & vocational courses)",
    dayScholar: {
      admissionTuitionFee: 11000,
      maintenanceAllowance: 2500,
      total: 13500
    },
    hosteller: {
      admissionTuitionFee: 11000,
      maintenanceAllowance: 4200,
      total: 15200
    }
  },
  {
    no: 2,
    type: "POST MATRIC",
    classOfStudy: "Undergraduate & Post Graduate",
    dayScholar: {
      admissionTuitionFee: 3300,
      maintenanceAllowance: 3300,
      total: 6600
    },
    hosteller: {
      admissionTuitionFee: 3300,
      maintenanceAllowance: 6300,
      total: 9600
    }
  },
  {
    no: 2,
    type: "POST MATRIC",
    classOfStudy: "M.Phil & Ph.D",
    dayScholar: {
      admissionTuitionFee: 3300,
      maintenanceAllowance: 6000,
      total: 9300
    },
    hosteller: {
      admissionTuitionFee: 3300,
      maintenanceAllowance: 13200,
      total: 16500
    }
  },
  {
    no: 3,
    type: "MERIT CUM MEANS",
    classOfStudy: "Medical, Engineering, Management, Law, CA etc.",
    dayScholar: {
      admissionTuitionFee: 22000,
      maintenanceAllowance: 5500,
      total: 27500
    },
    hosteller: {
      admissionTuitionFee: 22000,
      maintenanceAllowance: 11000,
      total: 33000
    }
  },
  {
    no: 4,
    type: "TALENT SUPPORT STIPEND (TSP)",
    classOfStudy: "XI & XII",
    dayScholar: {
      admissionTuitionFee: null,
      maintenanceAllowance: 2550,
      total: null
    },
    hosteller: {
      admissionTuitionFee: 2550,
      maintenanceAllowance: 4800,
      total: 4900
    }
  }
];


const REMARKS = [
  "Admission and tuition fee are subject to actuals",
  "Hostellers include students not staying in hostel of the institute concerned but are staying as paying guest or in rented accommodation",
  "Maintenance allowance is payable for a period not exceeding 10 months in an academic year",
  "Full course fee will be reimbursed for the listed institutions",
  "Exclusive state govt scheme",
  "Rate of scholarship is consolidated",
  "Separate allowance for hostellers is not admissible"
];

export default function RateOfScholarshipPage() {
  const formatAmount = (amount) => {
    if (amount === null) return "-";
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Rate of Scholarship"
        breadcrumb="Scholarships → Rate of Scholarship"
      />

      <ScholarshipTabsBar tabs={SCHOLARSHIP_TABS} activeId="rate-scholarship" />

      <section className="sch-shell">
        <div className="container">
          {/* Key Information Cards */}
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="sch-card text-center h-100">
                <div className="sch-icon-circle mx-auto mb-3">
                  <IndianRupee size={24} />
                </div>
                <h3 className="h5 mb-2">Financial Support</h3>
                <p className="sch-text-muted small mb-0">
                  Comprehensive coverage including admission fees, tuition fees, and monthly maintenance allowance
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sch-card text-center h-100">
                <div className="sch-icon-circle mx-auto mb-3">
                  <Home size={24} />
                </div>
                <h3 className="h5 mb-2">Dual Categories</h3>
                <p className="sch-text-muted small mb-0">
                  Separate rates for day scholars and hostellers to accommodate different living arrangements
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sch-card text-center h-100">
                <div className="sch-icon-circle mx-auto mb-3">
                  <GraduationCap size={24} />
                </div>
                <h3 className="h5 mb-2">All Education Levels</h3>
                <p className="sch-text-muted small mb-0">
                  From Class I to Ph.D. level, covering school, college, and research programs
                </p>
              </div>
            </div>
          </div>

          {/* Scholarship Rates Table */}
          <div className="row g-4 mb-5">
            <div className="col-12">
              <div className="sch-card">
                <div className="d-flex align-items-center gap-2 mb-4">
                  <School size={22} className="text-primary" />
                  <h2 className="h4 mb-0">Scholarship Rates (in ₹)</h2>
                </div>

                <div className="table-responsive">
                  <table className="table sch-table align-middle mb-0">
                    <thead>
                      <tr>
                        {/* <th>No.</th> */}
                        <th>Type of Scholarship</th>
                        <th>Class of Study</th>
                        <th colSpan={3} className="text-center border-start">
                          Day Scholar
                        </th>
                        <th colSpan={3} className="text-center border-start">
                          Hosteller
                        </th>
                      </tr>
                      <tr>
                        {/* <th></th> */}
                        <th></th>
                        <th></th>
                        <th className="text-center">Admission & Tuition Fee</th>
                        <th className="text-center">Maintenance Allowance</th>
                        <th className="text-center border-end">Total</th>
                        <th className="text-center">Admission & Tuition Fee</th>
                        <th className="text-center">Maintenance Allowance</th>
                        <th className="text-center">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SCHOLARSHIP_RATES.map((scholarship, index) => (
                        <tr key={index}>
                          {/* <td>{scholarship.no}</td> */}
                          <td className="fw-semibold">{scholarship.type}</td>
                          <td>{scholarship.classOfStudy}</td>
                          <td className="text-center">{formatAmount(scholarship.dayScholar.admissionTuitionFee)}</td>
                          <td className="text-center">{formatAmount(scholarship.dayScholar.maintenanceAllowance)}</td>
                          <td className="text-center border-end">{formatAmount(scholarship.dayScholar.total)}</td>
                          <td className="text-center">{formatAmount(scholarship.hosteller.admissionTuitionFee)}</td>
                          <td className="text-center">{formatAmount(scholarship.hosteller.maintenanceAllowance)}</td>
                          <td className="text-center">{formatAmount(scholarship.hosteller.total)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Important Remarks */}
          <div className="row g-4">
            <div className="col-12">
              <div className="sch-card">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <AlertCircle size={22} className="text-warning" />
                  <h2 className="h5 mb-0">Important Remarks</h2>
                </div>

                <div className="row gy-3">
                  <div className="col-12">
                    <ul className="sch-list">
                      {REMARKS.map((remark, index) => (
                        <li key={index}>{remark}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="sch-note mt-4">
                  <div className="d-flex gap-2">
                    <BookOpen size={16} className="mt-1 flex-shrink-0" />
                    <div>
                      <strong>Note:</strong> These rates are indicative and subject to change as per government guidelines. 
                      Always refer to the latest official notifications and scholarship portals for the most current information.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}