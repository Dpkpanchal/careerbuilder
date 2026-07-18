import React from "react";
import HeroInner from "@/Components/Frontend/Hero/HeroInner";
import ScholarshipTabsBar from "./ScholarshipTabsBar";
import FrontendLayout from '@/Layouts/FrontendLayout';
import { GraduationCap, ShieldCheck, ListChecks, Info } from "lucide-react";

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


// const SCHEMES_AT_GLANCE = [
//   {
//     no: 1,
//     name: "Pre Matric",
//     classOfStudy: "Class IX – X",
//     website: "https://scholarships.gov.in",
//     minMarks: "50% in last exam (Class I exempt)",
//     income: "Up to ₹1 Lakh",
//   },
//   {
//     no: 2,
//     name: "Post Matric",
//     classOfStudy: "XI Upto Ph.D.",
//     website: "https://scholarships.gov.in",
//     minMarks: "50% in last exam",
//     income: "Up to ₹2 Lakh",
//   },
//   {
//     no: 3,
//     name: "Merit-cum-Means",
//     classOfStudy: "Specified Technical & Professional courses",
//     website: "https://scholarships.gov.in",
//     minMarks: "50% in last exam",
//     income: "Up to ₹2.5 Lakh",
//   }

// ];

export default function ScholarshipsOverviewPage({data}) {

  const SCHEMES_AT_GLANCE = Array.isArray(data) ? data : [];

  return (
    <>
    <FrontendLayout>
      <HeroInner
        title="Scholarships & Educational Support"
        breadcrumb="Scholarships → Overview"
      />

      <ScholarshipTabsBar tabs={SCHOLARSHIP_TABS} activeId="overview" />

      <section className="sch-shell ">
        <div className="container">
          {/* Top layout: overview + key metrics */}
          <div className="row g-4 align-items-stretch mb-5">
            <div className="col-lg-8">
              <div className="sch-card sch-card-main h-100">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="sch-icon-circle">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h2 className="h4 mb-1">How this section helps you</h2>
                    <p className="sch-text-muted small mb-0">
                      A single place to understand all major school-level
                      scholarships and who they are meant for.
                    </p>
                  </div>
                </div>

                <div className="sch-body text-sm">
                  <p>
                    Scholarships reduce the financial burden on families so that
                    students can stay in school and progress to higher studies.
                    This section highlights the main schemes available from
                    school level up to research, with a special focus on
                    minority and economically weaker students.
                  </p>
                  <p>
                    You’ll find a clear view of eligibility, income limits,
                    study level, and where to apply. Each detailed page in the
                    tabs above explains one scheme at a time so that parents,
                    students and counsellors can make confident decisions.
                  </p>

                  <div className="row mt-4 gy-3">
                    <div className="col-md-4">
                      <div className="sch-stat">
                        <span className="sch-stat-label">Core schemes</span>
                        <span className="sch-stat-value">4</span>
                        <span className="sch-stat-meta">
                          Pre-Matric, Post-Matric, Merit-cum-Means
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="sch-stat">
                        <span className="sch-stat-label">Study coverage</span>
                        <span className="sch-stat-value">Class IX → Ph.D.</span>
                        <span className="sch-stat-meta">
                          From school to research
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="sch-stat">
                        <span className="sch-stat-label">Family income</span>
                        <span className="sch-stat-value">₹1–2.5 Lakh</span>
                        <span className="sch-stat-meta">
                          Depending on the scheme
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sch-card h-100">
                <h3 className="h6 text-uppercase sch-label mb-3">
                  Quick access
                </h3>
                <ul className="sch-quick-list mb-4">
                  <li>
                    <span>Apply online on the National Scholarship Portal</span>
                    <a
                      href="https://scholarships.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      scholarships.gov.in
                    </a>
                  </li>
                  {/* <li>
                    <span>
                      Talent Support Programme (TSP) portal for West Bengal
                    </span>
                    <a
                      href="https://wbmdfcscholarship.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      tsp.wbmdfc.co.in
                    </a>
                  </li> */}
                </ul>

                <div className="sch-note small d-flex gap-2">
                  <Info size={16} className="mt-1 flex-shrink-0" />
                  <span>
                    Use this overview to understand options, then open the
                    specific tab above for full details before applying.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Salient instructions */}
          <div className="row g-4 mb-5">
            <div className="col-12">
              <div className="sch-card">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <ShieldCheck size={22} className="text-primary" />
                  <h2 className="h5 mb-0">Important rules for all schemes</h2>
                </div>

                <div className="row gy-3 text-sm">
                  <div className="col-md-6">
                    <ul className="sch-list">
                      <li>
                        Applications are submitted online. For most schemes, the
                        primary gateway is the National Scholarship Portal.
                      </li>
                      <li>
                        The student must be an Indian citizen and a permanent
                        resident of the state where the application is filed.
                      </li>
                      <li>
                        Aadhaar-linked bank accounts are preferred to enable
                        direct transfer of the scholarship amount.
                      </li>
                      <li>
                        Only one active bank account should be used for a single
                        student’s registration.
                      </li>
                      <li>
                        In general, a minimum of 50% marks in the last annual
                        examination is required (scheme-wise variations apply).
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="sch-list">
                      <li>
                        Students who already received scholarship earlier and
                        have a permanent ID should apply as renewal candidates.
                      </li>
                      <li>
                        One mobile number is mapped to one registration; avoid
                        using shared or temporary numbers.
                      </li>
                      <li>
                        A fixed percentage of the total scholarship pool is
                        reserved for girl students.
                      </li>
                      <li>
                        Distance-education or correspondence courses are
                        generally not covered under these schemes.
                      </li>
                      <li>
                        A student can receive scholarship from only one
                        government scheme for a given period.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Schemes at a glance */}
          <div className="row g-4">
            <div className="col-12">
              <div className="sch-card">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <ListChecks size={22} className="text-primary" />
                  <h2 className="h5 mb-0">Scholarship schemes at a glance</h2>
                </div>

                <div className="table-responsive">
                  <table className="table sch-table align-middle mb-0">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Scholarship scheme</th>
                        <th>Class of study</th>
                        <th>Website / portal</th>
                        <th>Minimum marks</th>
                        <th>Annual family income</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SCHEMES_AT_GLANCE.map((row) => (
                        <tr key={row.no}>
                          <td>{row.no}</td>
                          <td>{row.name}</td>
                          <td>{row.classOfStudy}</td>
                          <td>
                            <a
                              href={row.website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {row.website.replace("https://", "")}
                            </a>
                          </td>
                          <td>{row.minMarks}</td>
                          <td>{row.income}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="small sch-text-muted mt-3 mb-0 d-flex gap-2">
                  <Info size={16} className="mt-1 flex-shrink-0" />
                  <span>
                    Exact eligibility and amounts can change over time. Always
                    follow the latest official notification on the relevant
                    portal.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FrontendLayout>
    </>
  );
}
