import React from 'react';
import { Award, BookOpen, DollarSign, CheckCircle } from 'lucide-react';
import styles from './Scholarships.module.css';

const SALIENT_INSTRUCTIONS = [
  "Eligible students are to apply online at www.scholarships.gov.in.",
  "Student must be a citizen of India and domicile of West Bengal.",
  "Students having AADHAAR-linked bank account will get preference in direct crediting of scholarship amount.",
  "One registration will be allowed with one active bank account number.",
  "Student should have obtained at least 50% marks in the last final examination.",
  "Applicants already in receipt of scholarship benefit last year and having a permanent ID must apply under renewal category only.",
  "Students who are applying for the first time will have to submit application as fresh candidate.",
  "One registration will be allowed with one mobile number.",
  "30% of total scholarship has been kept reserved for girl students.",
  "Distance education applicants are not eligible to apply.",
  "A student is eligible for scholarship from any one source only.",
  "No document is required to be uploaded."
];

const SCHOLARSHIP_SCHEMES = [
  {
    no: 1,
    scheme: "Pre-Matric",
    class_of_study: "I – IX",
    website: "www.scholarships.gov.in",
    minimum_marks: "50% in last exam (except for Class I)",
    annual_family_income: "Up to ₹2 Lakh"
  },
  {
    no: 2,
    scheme: "Post-Matric",
    class_of_study: "XI Upto Ph.D.",
    website: "www.scholarships.gov.in",
    minimum_marks: "50% in last exam",
    annual_family_income: "Up to ₹2 Lakh"
  },
  {
    no: 3,
    scheme: "Merit-cum-Means",
    class_of_study: "Specified Technical and Professional Courses",
    website: "www.scholarships.gov.in",
    minimum_marks: "50% in last exam",
    annual_family_income: "Up to ₹2.5 Lakh"
  }
  // {
  //   no: 4,
  //   scheme: "Post-Matric Stipend under Talent Support Program (TSP)",
  //   class_of_study: "Up to Ph.D.",
  //   website: "www.wbmdfcscholarship.in",
  //   minimum_marks: "Less than 50% in last exam",
  //   annual_family_income: "Up to ₹2 Lakh"
  // }
];

const RATE_OF_SCHOLARSHIP = [
  {
    type: "Pre-Matric",
    class_range: "I to V",
    day_scholar: { admission_tuition_fee: 1000, maintenance_allowance: 1000, total: 2000 },
    hosteller: { admission_tuition_fee: 1000, maintenance_allowance: 5300, total: 6300 },
    remarks: "As per actual tuition & admission fees, subject to approval by State Authority"
  },
  {
    type: "Post-Matric",
    class_range: "XI to XII",
    day_scholar: { admission_tuition_fee: 2300, maintenance_allowance: 2300, total: 4600 },
    hosteller: { admission_tuition_fee: 2300, maintenance_allowance: 12000, total: 14300 },
    remarks: "Includes reader charges, study tours, thesis, printing etc."
  },
  {
    type: "Post-Matric (Graduate & Postgraduate)",
    class_range: "UG / PG General",
    day_scholar: { admission_tuition_fee: 3000, maintenance_allowance: 3000, total: 6000 },
    hosteller: { admission_tuition_fee: 3000, maintenance_allowance: 5700, total: 8700 },
    remarks: "For UG/PG general courses in Govt. or Govt.-aided colleges"
  },
  {
    type: "Post-Matric (Technical & Professional)",
    class_range: "Professional / Technical courses",
    day_scholar: { admission_tuition_fee: 7000, maintenance_allowance: 5000, total: 12000 },
    hosteller: { admission_tuition_fee: 7000, maintenance_allowance: 13500, total: 20500 },
    remarks: "As per course fee approved by State Authority"
  },
  {
    type: "Merit-cum-Means",
    class_range: "Professional Courses (UG/PG)",
    day_scholar: { maintenance_allowance: 5000, total: 5000 },
    hosteller: { maintenance_allowance: 10000, total: 10000 },
    remarks: "Reimbursement of course fee, maintenance allowance as admissible"
  }
  // {
  //   type: "Talent Support Program (TSP)",
  //   class_range: "XI onwards (Undergraduate / Postgraduate)",
  //   day_scholar: { maintenance_allowance: 2540, total: 2540 },
  //   hosteller: { maintenance_allowance: 4830, total: 4830 },
  //   remarks: "Special assistance to students securing less than 50% marks"
  // }
];

const Scholarship = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h2>Scholarship Programs</h2>
        <p className={styles.subtitle}>
          Government scholarship schemes for students of West Bengal with financial assistance for education
        </p>
      </div>

      {/* Salient Instructions */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <CheckCircle size={20} />
          Key Instructions & Eligibility
        </h2>
        <ul className={styles.instructionsList}>
          {SALIENT_INSTRUCTIONS.map((instruction, index) => (
            <li key={index} className={styles.instructionItem}>
              {instruction}
            </li>
          ))}
        </ul>
      </div>

      {/* Scholarship Schemes Table */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <BookOpen size={20} />
          Scholarship Schemes at a Glance
        </h2>
        <div className="table-responsive">
          <table className={styles.schemesTable}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Scholarship Scheme</th>
                <th>Class of Study</th>
                <th>Website / Portal</th>
                <th>Minimum Marks</th>
                <th>Annual Family Income</th>
              </tr>
            </thead>
            <tbody>
              {SCHOLARSHIP_SCHEMES.map(scheme => (
                <tr key={scheme.no}>
                  <td className={styles.schemeNumber}>{scheme.no}</td>
                  <td className={styles.schemeName}>{scheme.scheme}</td>
                  <td className={styles.classStudy}>{scheme.class_of_study}</td>
                  <td className={styles.website}>
                    <a href={`https://${scheme.website}`} target="_blank" rel="noopener noreferrer">
                      {scheme.website}
                    </a>
                  </td>
                  <td className={styles.minimumMarks}>{scheme.minimum_marks}</td>
                  <td className={styles.income}>{scheme.annual_family_income}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Rate of Scholarship Table */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <DollarSign size={20} />
          Rate of Scholarship
        </h2>
        <div className="table-responsive">
          <table className={styles.ratesTable}>
            <thead>
              <tr>
                <th>Scholarship Type</th>
                <th>Class Range</th>
                <th>Day Scholar (₹)</th>
                <th>Hosteller (₹)</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {RATE_OF_SCHOLARSHIP.map((rate, index) => (
                <tr key={index}>
                  <td><strong>{rate.type}</strong></td>
                  <td>{rate.class_range}</td>
                  <td>
                    <div className={styles.amountSection}>
                      <span className={styles.amount}>₹{rate.day_scholar.total.toLocaleString()}</span>
                      {rate.day_scholar.admission_tuition_fee && (
                        <span className={styles.amountDetail}>
                          Fee: ₹{rate.day_scholar.admission_tuition_fee.toLocaleString()}
                        </span>
                      )}
                      <span className={styles.amountDetail}>
                        Allowance: ₹{rate.day_scholar.maintenance_allowance.toLocaleString()}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.amountSection}>
                      <span className={styles.amount}>₹{rate.hosteller.total.toLocaleString()}</span>
                      {rate.hosteller.admission_tuition_fee && (
                        <span className={styles.amountDetail}>
                          Fee: ₹{rate.hosteller.admission_tuition_fee.toLocaleString()}
                        </span>
                      )}
                      <span className={styles.amountDetail}>
                        Allowance: ₹{rate.hosteller.maintenance_allowance.toLocaleString()}
                      </span>
                    </div>
                  </td>
                  <td className={styles.remarks}>{rate.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Scholarship;