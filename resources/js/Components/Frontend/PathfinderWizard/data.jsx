// components/PathfinderWizard/data.js

export const educationLevels = [
  {
    value: "class8",
    label: "Class 8", 
    description: "Early career launcher courses and vocational training",
    careers: [
      {
        category: "Vocational Courses",
        options: [
          "Painter (2 years)", "Wireman (2 years)", "Welder (1 year)",
          "Plumber (1 year)", "Mason (1 year)", "Carpenter (1 year)", 
          "Cutting & Sewing (1 year)", "Agricultural machinery Mechanic (1 year)"
        ],
        entrance_exams: ["Direct admission", "ITI entrance test"],
        colleges: ["Government ITI centers", "Private ITI institutes"],
        scholarships: ["WBMDFC Technical Education Loan"]
      },
      {
        category: "Business & Commerce",
        options: ["Rural Marketing", "Marketing", "Security Guard"],
        entrance_exams: ["Direct admission"],
        colleges: ["Skill development centers"],
        scholarships: ["WBMDFC Business Development Loan"]
      },
      {
        category: "Agriculture", 
        options: [
          "Marine Fisheries", "Mushroom Cultivation", "Dairy Farming",
          "Poultry Farming", "Bee Keeping", "Goat Keeping"
        ],
        entrance_exams: ["Direct admission"],
        colleges: ["Agricultural training centers"],
        scholarships: ["WBMDFC Agriculture Loan"]
      },
      {
        category: "Home Science",
        options: [
          "Tailoring", "Commercial Art", "Boutique Work", "Beautician",
          "Interior Decoration", "Jari Work & Embroidery"
        ],
        entrance_exams: ["Direct admission"],
        colleges: ["Skill development institutes"],
        scholarships: ["WBMDFC Skill Development Loan"]
      }
    ]
  },
  {
    value: "class10",
    label: "Class 10",
    description: "Stream selection and skill development courses", 
    careers: [
      {
        category: "Stream Selection",
        options: ["Science (PCM/PCB)", "Commerce", "Arts", "Vocational"],
        entrance_exams: ["School admission process"],
        colleges: ["Higher Secondary Schools"],
        scholarships: ["Merit-based scholarships"]
      },
      {
        category: "ITI Courses",
        options: [
          "Tool Die Maker (3 years)", "Electrician (2 years)", "Fitter (2 years)",
          "Electronic Mechanic (2 years)", "Motor Vehicle Mechanic (2 years)",
          "Refrigeration & AC Mechanic (2 years)"
        ],
        entrance_exams: ["ITI entrance test"],
        colleges: ["Government ITI", "Private ITI"],
        scholarships: ["WBMDFC ITI Loan", "Government ITI scholarships"]
      },
      {
        category: "Diploma Courses", 
        options: [
          "Diploma in Engineering", "Hotel Management (3 years)",
          "Auxiliary Nursing Midwifery (18 months)"
        ],
        entrance_exams: ["JEXPO", "Direct admission"],
        colleges: ["Polytechnic colleges", "Nursing schools"],
        scholarships: ["AICTE scholarships", "State government scholarships"]
      }
    ]
  },
  {
    value: "class12science",
    label: "Class 12 (Science)",
    description: "Medical, Engineering and Pure Science options",
    careers: [
      {
        category: "Medical/Paramedical",
        options: [
          "MBBS (via NEET)", "BDS (Dental)", "B.Pharmacy", "Nursing",
          "Physiotherapy", "Medical Laboratory Technology", "Radiology"
        ],
        entrance_exams: ["NEET", "NEET MDS", "State medical entrance"],
        colleges: ["Medical colleges", "AIIMS", "JIPMER"],
        scholarships: ["Central government scholarships", "NEST scholarship"]
      },
      {
        category: "Engineering",
        options: [
          "B.Tech/BE (via JEE Main/Advanced)", "Architecture (via NATA)",
          "Agricultural Engineering", "Food Technology"
        ],
        entrance_exams: ["JEE Main", "JEE Advanced", "WBJEE", "BITSAT"],
        colleges: ["IIT", "NIT", "State Engineering Colleges"],
        scholarships: ["AICTE Pragati", "NEST", "Merit scholarships"]
      },
      {
        category: "Pure Sciences",
        options: [
          "B.Sc Physics", "B.Sc Chemistry", "B.Sc Mathematics",
          "B.Sc Biology", "B.Sc Computer Science"
        ],
        entrance_exams: ["University entrance", "Merit-based admission"],
        colleges: ["Universities", "Science colleges"],
        scholarships: ["UGC scholarships", "State scholarships"]
      }
    ]
  },
  {
    value: "class12commerce", 
    label: "Class 12 (Commerce)",
    description: "Business, Finance and Management options",
    careers: [
      {
        category: "Commerce & Finance",
        options: [
          "B.Com (General/Honors)", "CA (Chartered Accountancy)",
          "CS (Company Secretary)", "CMA (Cost & Management Accountant)"
        ],
        entrance_exams: ["University entrance", "CA foundation", "CS foundation"],
        colleges: ["Commerce colleges", "Universities"],
        scholarships: ["Merit scholarships", "Professional course scholarships"]
      },
      {
        category: "Management",
        options: [
          "BBA", "Hotel Management", "Event Management",
          "Banking & Insurance", "Financial Markets"
        ],
        entrance_exams: ["Management entrance tests", "University entrance"],
        colleges: ["Management institutes", "Universities"],
        scholarships: ["AICTE scholarships", "Private scholarships"]
      }
    ]
  },
  {
    value: "class12arts",
    label: "Class 12 (Arts)", 
    description: "Humanities, Social Sciences and Creative fields",
    careers: [
      {
        category: "Humanities & Social Sciences",
        options: [
          "BA (History, Geography, Political Science)", "BA Psychology", 
          "BA Sociology", "BA Economics", "Mass Communication"
        ],
        entrance_exams: ["University entrance", "Journalism entrance"],
        colleges: ["Arts colleges", "Universities", "Mass communication institutes"],
        scholarships: ["UGC scholarships", "Merit scholarships"]
      },
      {
        category: "Law & Creative Arts",
        options: [
          "BA LLB (5 years via CLAT)", "BFA (Fine Arts)", "Journalism",
          "B.Ed (Teaching)", "Fashion Design (via NIFT)"
        ],
        entrance_exams: ["CLAT", "AILET", "NIFT entrance", "B.Ed entrance"],
        colleges: ["Law colleges", "Art institutes", "Fashion institutes"],
        scholarships: ["Legal education scholarships", "Creative arts scholarships"]
      }
    ]
  },
  {
    value: "graduation",
    label: "After Graduation",
    description: "Advanced studies, professional courses and career opportunities", 
    careers: [
      {
        category: "Higher Education",
        options: [
          "MA/MSc/MCom", "MBA (via CAT/MAT/XAT)", "MCA",
          "M.Tech (via GATE)", "Ph.D Programs"
        ],
        entrance_exams: ["CAT", "MAT", "XAT", "GATE", "University entrance"],
        colleges: ["IIM", "Universities", "Management institutes"],
        scholarships: ["UGC fellowships", "CSIR fellowships", "Private scholarships"]
      },
      {
        category: "Government Services",
        options: [
          "UPSC Civil Services (IAS/IPS/IRS)", "State PSC (WBCS)",
          "Banking (IBPS PO/Clerk)", "SSC (CGL/CHSL)", "Railway Jobs"
        ],
        entrance_exams: ["UPSC", "WBPSC", "IBPS", "SSC", "Railway exams"],
        colleges: ["Training academies", "Government institutes"],
        scholarships: ["Government job preparation scholarships"]
      },
      {
        category: "Professional Certifications",
        options: [
          "Digital Marketing", "Data Science", "AI/ML Courses",
          "Project Management (PMP)", "Financial Planning"
        ],
        entrance_exams: ["Direct admission", "Online assessments"],
        colleges: ["Online platforms", "Professional institutes"],
        scholarships: ["Skill development scholarships", "Industry sponsorships"]
      }
    ]
  }
];

// Enhanced adaptive assessment questions with conditional flow
export const assessmentQuestions = [
  {
    key: "educationLevel",
    question: "What is your current education level?",
    type: "select",
    icon: "BookOpen",
    options: educationLevels.map(level => ({
      value: level.value,
      label: level.label
    })),
    required: true
  },
  {
    key: "stream",
    question: "Which stream/subject interests you most?",
    type: "select", 
    icon: "GraduationCap",
    showIf: (answers) => ["class10", "class12science", "class12commerce", "class12arts"].includes(answers.educationLevel),
    options: (answers) => {
      if (answers.educationLevel === "class10") {
        return [
          { value: "science", label: "Science (Physics, Chemistry, Biology/Math)" },
          { value: "commerce", label: "Commerce (Accounts, Business, Economics)" },
          { value: "arts", label: "Arts (History, Geography, Languages)" },
          { value: "vocational", label: "Vocational/Technical Skills" }
        ];
      }
      if (answers.educationLevel === "class12science") {
        return [
          { value: "pcm", label: "PCM (Physics, Chemistry, Math)" },
          { value: "pcb", label: "PCB (Physics, Chemistry, Biology)" }
        ];
      }
      return [
        { value: "science", label: "Science (Physics, Chemistry, Biology/Math)" },
        { value: "commerce", label: "Commerce (Accounts, Business, Economics)" },
        { value: "arts", label: "Arts (History, Geography, Languages)" },
        { value: "vocational", label: "Vocational/Technical Skills" },
        { value: "not_sure", label: "Not Sure" }
      ];
    }
  },
  {
    key: "interests",
    question: "What are your main interests? (Select all that apply)",
    type: "checkbox",
    icon: "Heart", 
    options: (answers) => {
      let baseOptions = [
        { value: "technology", label: "Technology & Computers" },
        { value: "business", label: "Business & Finance" },
        { value: "arts_creative", label: "Arts & Creative Work" },
        { value: "social_service", label: "Social Service & Teaching" }
      ];
      
      // Add specific options based on education level
      if (answers.educationLevel === "class8") {
        baseOptions.push(
          { value: "technical_work", label: "Technical/Hands-on Work" },
          { value: "agriculture", label: "Agriculture & Environment" }
        );
      }
      
      if (answers.stream === "pcb" || answers.educationLevel === "class12science") {
        baseOptions.push({ value: "healthcare", label: "Healthcare & Medicine" });
      }
      
      if (answers.stream === "pcm" || answers.educationLevel === "class12science") {
        baseOptions.push({ value: "engineering", label: "Engineering & Technical" });
      }
      
      if (answers.stream === "arts" || answers.educationLevel === "class12arts") {
        baseOptions.push({ value: "law_governance", label: "Law & Governance" });
      }
      
      return baseOptions;
    }
  },
  {
    key: "workStyle", 
    question: "What type of work environment do you prefer?",
    type: "select",
    icon: "Users",
    options: [
      { value: "office", label: "Office/Indoor Work" },
      { value: "field", label: "Field/Outdoor Work" },
      { value: "mixed", label: "Mix of Both" },
      { value: "remote", label: "Remote/Flexible Work" }
    ]
  },
  {
    key: "careerGoals",
    question: "What are your primary career goals?",
    type: "select",
    icon: "Target", 
    options: [
      { value: "job_security", label: "Job Security & Stability" },
      { value: "high_income", label: "High Income Potential" },
      { value: "social_impact", label: "Social Impact & Service" },
      { value: "entrepreneurship", label: "Start Own Business" },
      { value: "creativity", label: "Creative Expression" },
      { value: "research", label: "Research & Innovation" }
    ]
  },
  {
    key: "studyPreference",
    question: "How do you prefer to continue your education?", 
    type: "select",
    icon: "BookOpenCheck",
    showIf: (answers) => !["class8"].includes(answers.educationLevel),
    options: [
      { value: "regular", label: "Regular Full-time Course" },
      { value: "part_time", label: "Part-time/Weekend Course" },
      { value: "distance", label: "Distance/Online Learning" },
      { value: "skill_based", label: "Short-term Skill Courses" }
    ]
  }
];

export const scholarships = [
  {
    name: "WBMDFC Education Loan",
    eligibility: "Students from minority communities pursuing technical/professional courses",
    amount: "Up to 8% interest rate", 
    link: "www.wbmdfc.net"
  },
  {
    name: "AICTE Pragati Scholarship",
    eligibility: "Girl students in technical education",
    amount: "Rs. 50,000 per year",
    link: "www.aicte-india.org"
  },
  {
    name: "NEST Scholarship", 
    eligibility: "Science/Engineering/Medical students",
    amount: "Rs. 35,000 - Rs. 40,000",
    link: "www.nest.net.in"
  },
  {
    name: "UGC Scholarships",
    eligibility: "Meritorious students in higher education",
    amount: "Varies by category",
    link: "www.ugc.ac.in"
  },
  {
    name: "State Government Scholarships",
    eligibility: "Students from economically weaker sections",
    amount: "Rs. 1,000 - Rs. 20,000 per year",
    link: "State education department"
  }
];

export const entranceExams = {
  "NEET": {
    fullName: "National Eligibility cum Entrance Test",
    purpose: "Medical & Dental admissions",
    eligibility: "Class 12 with PCB, minimum 50% marks",
    examDates: "Usually conducted in May",
    applicationLink: "neet.nta.nic.in",
    preparationTime: "1-2 years"
  },
  "JEE_Main": {
    fullName: "Joint Entrance Examination Main",
    purpose: "Engineering admissions to NITs, IIITs",
    eligibility: "Class 12 with PCM, minimum 75% marks",
    examDates: "January & April sessions",
    applicationLink: "jeemain.nta.nic.in",
    preparationTime: "2 years"
  },
  "WBJEE": {
    fullName: "West Bengal Joint Entrance Examination", 
    purpose: "Engineering, Pharmacy admissions in WB",
    eligibility: "Class 12 with 45% marks (40% for SC/ST)",
    examDates: "Usually in April",
    applicationLink: "wbjeeb.nic.in",
    preparationTime: "1-2 years"
  },
  "CLAT": {
    fullName: "Common Law Admission Test",
    purpose: "Law admissions to NLUs",
    eligibility: "Class 12 with 45% marks",
    examDates: "Usually in May",
    applicationLink: "consortiumofnlus.ac.in",
    preparationTime: "1 year"
  },
  "CAT": {
    fullName: "Common Admission Test",
    purpose: "MBA admissions to IIMs",
    eligibility: "Graduation with 50% marks",
    examDates: "Usually in November",
    applicationLink: "iimcat.ac.in",
    preparationTime: "6 months - 1 year"
  }
};

export const careerCounselors = [
  {
    name: "Dr. Nurul Alam",
    specialization: "Science subjects & Engineering",
    qualification: "Ph.D Physics, Career Counseling Certificate",
    contact: "8906964777",
    email: "nurulalam.ju@gmail.com",
    experience: "15+ years"
  },
  {
    name: "Dr. Anwar Sadat Halder", 
    specialization: "Medical & Healthcare careers",
    qualification: "MBBS, MD Medicine",
    contact: "8902408420",
    email: "anwarpg786@gmail.com",
    experience: "12+ years"
  },
  {
    name: "Kh. Jinnatul Islam",
    specialization: "Engineering & Technology",
    qualification: "B.Tech CSE, M.Tech CSE", 
    contact: "9830072424",
    email: "kjislam@gmail.com",
    experience: "10+ years"
  },
  {
    name: "Prof. Rashida Khatun",
    specialization: "Commerce & Management",
    qualification: "MBA, Ph.D Commerce",
    contact: "9831234567",
    email: "rashida.commerce@gmail.com",
    experience: "18+ years"
  },
  {
    name: "Dr. Sahidul Rahman",
    specialization: "Arts & Social Sciences",
    qualification: "Ph.D Political Science",
    contact: "9830567891",
    email: "sahidul.arts@gmail.com",
    experience: "14+ years"
  }
];

// Smart recommendation engine
export function getCareerRecommendations(answers) {
  const educationLevel = answers.educationLevel;
  const selectedLevel = educationLevels.find(level => level.value === educationLevel);
  
  if (!selectedLevel) return [];
  
  let recommendedCareers = selectedLevel.careers;
  
  // Filter based on stream
  if (answers.stream === "pcm") {
    recommendedCareers = recommendedCareers.filter(career => 
      career.category.includes("Engineering") || career.category.includes("Pure Sciences")
    );
  } else if (answers.stream === "pcb") {
    recommendedCareers = recommendedCareers.filter(career => 
      career.category.includes("Medical") || career.category.includes("Pure Sciences")
    );
  }
  
  // Filter based on interests
  if (answers.interests && answers.interests.length > 0) {
    const interests = answers.interests;
    recommendedCareers = recommendedCareers.filter(career => {
      const categoryLower = career.category.toLowerCase();
      return interests.some(interest => {
        switch(interest) {
          case "healthcare": return categoryLower.includes("medical") || categoryLower.includes("nursing");
          case "engineering": return categoryLower.includes("engineering") || categoryLower.includes("technical");
          case "business": return categoryLower.includes("commerce") || categoryLower.includes("management");
          case "arts_creative": return categoryLower.includes("arts") || categoryLower.includes("creative");
          case "technology": return categoryLower.includes("computer") || categoryLower.includes("it");
          default: return true;
        }
      });
    });
  }
  
  return recommendedCareers.length > 0 ? recommendedCareers : selectedLevel.careers;
}

// Get next question based on current answers
export function getNextQuestion(currentQuestionIndex, answers) {
  if (currentQuestionIndex >= assessmentQuestions.length - 1) {
    return null; // No more questions
  }
  
  let nextIndex = currentQuestionIndex + 1;
  let nextQuestion = assessmentQuestions[nextIndex];
  
  // Skip questions based on showIf conditions
  while (nextQuestion && nextQuestion.showIf && !nextQuestion.showIf(answers)) {
    nextIndex++;
    nextQuestion = assessmentQuestions[nextIndex];
  }
  
  return nextQuestion ? nextIndex : null;
}
