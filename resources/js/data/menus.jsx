// data/menus.js

export const MENUS = [
  // =========================
  // 1) CAREERS (TABBED)
  // =========================
  {
    key: "careers",
    label: "Careers",
    tabbed: true,
    tabs: [
      {
        key: "by-stage",
        label: "By Stage",
        sections: [
          {
            title: "Choose by Class / Stage",
            links: [
              { label: "After Class 8", href: route('After.Class.Eight')  },
              { label: "After Class 10", href: route('After.Class.Tenth') },
              { label: "After Class 12 • Arts", href: route('After.Class.Twelve.Arts') },
              { label: "After Class 12 • Commerce", href: route('After.Class.Twelve.Commerce') },
              { label: "After Class 12 • Science", href: route('After.Class.Twelve.Science') },
              { label: "After Graduation", href: route('After.Graduation') },
            ],
          },
        ],
      },

      {
        key: "by-profession",
        label: "By Profession",
        sections: [
          {
            title: "Popular Professional Paths",
            links: [
              { label: "Engineering", href: route('career.engineering') },
              { label: "Medical • Doctor (MBBS)", href: route('career.medical') },
              { label: "Nursing & Allied Health", href: route('career.nursing') },
              { label: "Pharmacy", href: route('career.pharmacy') },
              { label: "Chartered Accountant (CA)", href: route('career.ca') },
              { label: "Law (LLB, Integrated)", href: route('career.law') },
              { label: "Design (Fashion, Graphic, Arch.)", href: route('career.design') },
              { label: "Hospitality & Tourism", href: route('career.hospitality') },
              { label: "Media & Journalism", href: route('career.media') },
              { label: "Civil Services", href: route('career.civilServices') },
              { label: "Defence Forces", href: route('career.defence') },
            ],
          },
        ],
      },

      {
        key: "future-paths",
        label: "Future & Alternative Paths",
        sections: [
          {
            title: "Long-Term & Alternative Careers",
            links: [
              { label: "Research & PhD", href: route('career.research') },
              { label: "Entrepreneurship / Startups", href: route('career.entrepreneurship') },
              { label: "Social Work / NGOs", href: route('career.socialWork') },
            ],
          },
        ],
      },
    ],
  },

  // =========================
  // 2) COURSES (TABBED) – we already structured this
  // =========================
  {
    key: "courses",
    label: "Courses",
    tabbed: true,
    tabs: [
      // 2.1 Vocational & Skill (DO NOT TOUCH – as per you)
      {
        key: "vocational-skill",
        label: "Vocational & Skill",
        sections: [
          {
            title: "Vocational & Skill Courses",
            links: [
              { label: "Class 8+ Vocational Trades", href: route('courses.vocational.class8plus') },
              { label: "Class 10+ Vocational Trades", href: route('courses.vocational.class10plus') },
              { label: "ITI & ITC Trades", href: route('courses.vocational.iti') },
              { label: "MSME Tool Room Courses", href: route('courses.vocational.msme') },
            ],
          },
        ],
      },

      // 2.2 Diploma & Polytechnic
      {
        key: "diploma-poly",
        label: "Diploma & Polytechnic",
        sections: [
          {
            title: "Diploma & Polytechnic Programs",
            links: [
              { label: "Diploma in Engineering (Polytechnic)", href: route('courses.diploma.engineering') },
              { label: "Diploma in Paramedical", href: route('courses.diploma.paramedical') },
              { label: "Diploma in Pharmacy (D.Pharm)", href: route('courses.diploma.pharmacy') },
              { label: "Diploma in Computer / IT", href: route('courses.diploma.it') },
            ],
          },
        ],
      },

     // 2.3 Streamlined Degree Courses (from Section B of Career Book)
{
  key: "streamlined-degree",
  label: "Streamlined Degree Courses",
  sections: [
    {
      title: "Graduation Courses (After Class 12)",
      links: [
        {
          label: "Arts Graduation Courses (BA & Allied)",
          href: route('courses.degree.graduation.arts'),
        },
        {
          label: "Commerce Graduation Courses (B.Com & Allied)",
          href: route('courses.degree.graduation.commerce'),
        },
        {
          label: "Science Graduation Courses (B.Sc & Allied)",
          href: route('courses.degree.graduation.science'),
        },
      ],
    },
    {
      title: "Post Graduation Courses (After Graduation)",
      links: [
        {
          label: "Arts PG Courses (MA, MSW & Allied)",
          href: route('courses.degree.postgraduation.arts'),
        },
        {
          label: "Commerce PG Courses (M.Com & Allied)",
          href: route('courses.degree.postgraduation.commerce'),
        },
        {
          label: "Science PG Courses (M.Sc & Allied)",
          href: route('courses.degree.postgraduation.science'),
        },
      ],
    },
  ],
},


      // 2.5 Medical & Paramedical
    {
      key: "medical-paramedical",
      label: "Medical & Paramedical",
      sections: [
        {
          title: "Core Medical & Nursing",
          links: [
            { label: "Nursing (ANM / GNM / B.Sc / M.Sc)", href: route('courses.nursing') },
            { label: "MBBS & Core Medical Degrees", href: route('courses.medical.mbbs') },
          ],
        },

         {
          title: "Paramedical & Allied Health",
          links: [
            { label: "Diploma Paramedical Courses (After 10)", href: route('courses.paramedical.diploma') },
            { label: "UG Paramedical Degrees (After 10+2)", href: route('courses.paramedical.ug') },
            { label: "PG Paramedical Courses", href: route('courses.medical.pg') },
            { label: "Allied Health Sciences (Physio, MLT, Radiology, OT)", href: route('courses.medical.alliedHealth') },
          ],
        },

        {
          title: "Pharmacy",
          links: [
            { label: "Pharmacy (D.Pharm / B.Pharm / M.Pharm / Pharm.D)", href: route('courses.pharmacy') },
          ],
        },

        {
          title: "AYUSH & Alternative Medicine",
          links: [
            { label: "AYUSH (Ayurveda, Homoeopathy, Unani, Siddha)", href: route('courses.ayush') },
            { label: "Naturopathy & Yoga", href: route('courses.naturopathy.yoga') },
          ],
        },
      ],
    },


      // 2.6 Engineering, Technology & IT
    {
      key: "engineering-it",
      label: "Engineering, Technology & IT",
      sections: [
        {
          title: "Engineering & Technology",
          links: [
            { label: "B.Tech / B.E Programs", href: route('courses.btech') },
            { label: "B.Arch", href: route('courses.barch') },
            { label: "M.Tech", href: route('courses.mtech') },
          ],
        },
        {
          title: "Computer & IT",
          links: [
              { label: "BCA", href: route('courses.bca') },
              { label: "B.Sc Computer Science / IT", href: route('courses.bsc.it') },
              { label: "MCA", href: route('courses.mca') },
              { label: "M.Sc Computer Science / IT", href: route('courses.msc.it') },
          ],
        },
      ],
    },

      // 2.7 Business & Management
      {
        key: "business-management",
        label: "Business & Management",
        sections: [
          {
            title: "Commerce & Business",
            links: [
              { label: "B.Com & Allied Programs", href: route('courses.bcom') },
              { label: "M.Com & PG Commerce", href: route('courses.mcom') },
              { label: "BBA & UG Management", href: route('courses.bba') },
              { label: "MBA / PGDM", href: route('courses.mba') },
              { label: "CA / CS / CMA (Professional Commerce)", href: route('courses.finance') },
          ]

          },
        ],
      },

      
    ],
  },

  // =========================
  // 3) COLLEGES (TABBED)
  // =========================
  {
    key: "colleges",
    label: "Colleges",
    tabbed: true,
    tabs: [
      {
        key: "national",
        label: "National Institutes",
        sections: [
          {
            title: "Institutes of National Importance",
            links: [
              { label: "IITs – Indian Institutes of Technology", href: route('colleges.iits') },
              { label: "NITs – National Institutes of Technology", href: route('colleges.nits') },
              { label: "IIMs – Management Institutes", href: route('colleges.iims') },
              { label: "AIIMS – Medical Institutes", href: route('colleges.aiims') },
              { label: "NIFT / NID – Fashion & Design", href: route('colleges.design') },
              { label: "National Law Universities (NLUs)", href: route('colleges.nlu') },
            ],
          },
        ],
      },

      {
        key: "universities",
        label: "Universities",
        sections: [
          {
            title: "Types of Universities",
            links: [
              { label: "Central Universities", href: route('colleges.central') },
              { label: "State Universities", href: route('colleges.state') },
              { label: "Private & Deemed Universities", href: route('colleges.private') },
              { label: "Open & Distance Universities (IGNOU, NSOU...)", href: route('colleges.open') },
            ],
          },
        ],
      },

      {
        key: "by-field",
        label: "By Field of Study",
        sections: [
          {
            title: "Stream-wise Colleges",
            links: [
              { label: "Engineering Colleges", href: route('colleges.engineering') },
              { label: "Medical & Paramedical Colleges", href: route('colleges.medical') },
              { label: "Nursing Colleges", href: route('colleges.nursing') },
              { label: "Pharmacy Colleges", href: route('colleges.pharmacy') },
              { label: "Management & Business Colleges", href: route('colleges.management') },
              { label: "Law Colleges", href: route('colleges.law') },
              { label: "Agriculture & Veterinary Colleges", href: route('colleges.agriculture') },
              { label: "Teacher Training / B.Ed Colleges", href: route('colleges.teacherTraining') },
            ],
          },
        ],
      },

      {
        key: "vocational-technical",
        label: "Vocational & Technical Institutes",
        sections: [
          {
            title: "Vocational, Skill & Technical Institutes",
            links: [
              { label: "ITI Centres (Govt / Private)", href: route('colleges.iti') },
              { label: "Polytechnic Colleges", href: route('colleges.polytechnic') },
              { label: "MSME Tool Room Institutes", href: route('colleges.msme') },
              { label: "Skill Development Centres", href: route('colleges.skill') },
            ],
          },
        ],
      }

    ],
  },
// =========================
// 4) EXAMS (TABBED)
// =========================
// =========================
// 4) EXAMS (TABBED) — 6 tabs max
// =========================
{
  key: "exams",
  label: "Exams",
  tabbed: true,
  tabs: [
    // 1) Engineering & Tech
    {
      key: "engineering-tech-exams",
      label: "Engineering & Tech",
      sections: [
        {
          title: "Engineering Entrance",
          links: [
            { label: "National Level", href: route('exams.engineering.national') },
            { label: "State Level", href: route('exams.engineering.state') },
            { label: "University Level", href: route('exams.engineering.university') },
          ],
        },
        {
          title: "Computer Applications",
          links: [{ label: "MCA Entrance Exams", href: route('exams.engineering.mca') }],
        },
        {
          title: "Architecture",
          links: [{ label: "Architecture Exams (NATA/AAT/TANATA)", href: route('exams.engineering.architecture') }],
        },
      ],
    },

    // 2) Medical & Allied
    {
      key: "medical-allied-exams",
      label: "Medical & Allied",
      sections: [
        {
          title: "Medical Entrance",
          links: [
            { label: "National Level", href: route('exams.medical.national') },
            { label: "State Level (NEET replaced list)", href: route('exams.medical.state') },
          ],
        },
        {
          title: "Nursing",
          links: [{ label: "Nursing & Allied Exams", href: route('exams.medical.nursing') }],
        },
        {
          title: "PG Medical",
          links: [{ label: "MS/MD & PG Medical Exams", href: route('exams.medical.pg') }],
        },
        {
          title: "Pharmacy",
          links: [{ label: "Pharmacy Entrance Exams", href: route('exams.medical.pharmacy') }],
        },
      ],
    },

    // 3) Hospitality, Tourism & Hotel Management
    {
      key: "hospitality-tourism-exams",
      label: "Hospitality & Tourism",
      sections: [
        {
          title: "Hotel Management (UG)",
          links: [
            { label: "National Level", href: route('exams.hotelManagement.national') },
            { label: "State Level", href: route('exams.hotelManagement.state') },
            { label: "University Level", href: route('exams.hotelManagement.university') },
            { label: "Hotel-run / Industry Exams", href: route('exams.hotelManagement.hotelRun') },
          ],
        },
      ],
    },

    // 4) Law, Management & Finance
    {
      key: "law-management-finance-exams",
      label: "Law • Management • Finance",
      sections: [
        {
          title: "Law",
          links: [{ label: "Law Entrance Exams", href: route('exams.law.law') }],
        },
        {
          title: "Management",
          links: [{ label: "MBA & Management Exams", href: route('exams.law.management') }],
        },
        {
          title: "Finance & Accounts",
          links: [{ label: "CA / CS / CMA / CFA Exams", href: route('exams.law.financeAccounts') }],
        },
      ],
    },

    // 5) Design, Media & Humanities
    {
      key: "design-media-humanities-exams",
      label: "Design • Media • Humanities",
      sections: [
        {
          title: "Fashion & Design",
          links: [{ label: "Design & Fashion Exams", href: route('exams.design.fashionDesign') }],
        },
        {
          title: "Media & Mass Comm",
          links: [{ label: "Mass Comm Exams", href: route('exams.design.massComm') }],
        },
        {
          title: "Humanities & Social Science",
          links: [{ label: "Humanities Exams", href: route('exams.design.humanities') }],
        },
        {
          title: "Mathematics",
          links: [{ label: "Mathematics (UG) Admissions/Tests", href: route('exams.design.mathematics') }],
        },
      ],
    },

    // 6) Agriculture, Veterinary, Defence & School
    {
      key: "agri-defence-school-exams",
      label: "Agri • Defence • School",
      sections: [
        {
          title: "Agriculture",
          links: [{ label: "Agriculture Exams", href: route('exams.agri.agriculture') }],
        },
        {
          title: "Veterinary Science",
          links: [{ label: "Veterinary Exams", href: route('exams.agri.veterinary') }],
        },
        {
          title: "Defence & Marine",
          links: [
            { label: "Defence Exams (NDA/CDS/TES etc.)", href: route('exams.agri.defence') },
          ],
        },
        {
          title: "School-level",
          links: [{ label: "School Scholarship / Talent Exams", href: route('exams.agri.school') }],
        },
      ],
    },
  ],
},

  // =========================
  // 5) SCHOLARSHIPS (TABBED)
  // =========================
{
  key: "forum",
  label: "Join Forum",
  href: "/forum",
  noDropdown: true, 
},

  // =========================
  // 6) MORE (KEEP SIMPLE – NOT TABBED)
  // =========================
{
    key: "more",
    label: "More",
    columns: [
      {
        title: "Explore More",
        links: [
          { label: "Scholarship", href: route('scholarship.overview') },
          { label: "Counsellors Directory", href: route('more.counsellorsDirectory') },
          { label: "Jobs Opportunities", href: route('more.jobsOpportunities') },
          { label: "Admission Support", href: route('more.admissionSupport') },
          { label: "Coaching Support", href: route('more.coachingSupport') },
          { label: "Waqf Run Hostel", href: route('more.waqfRunHostel') },
          { label: "Important Web Links", href: route('more.importantWebLinks') },
          { label: "Minority Schemes ", href: route('more.minoritySchemes') },
        ],
      },
    ],
  },
];

