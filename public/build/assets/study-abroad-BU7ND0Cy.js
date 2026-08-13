import{j as e}from"./app-BtfmuS4E.js";import{H as a}from"./HeroInner-Cg6BDxNK.js";import{F as o}from"./FrontendLayout-Cy0KR3NF.js";import t from"./ScholarshipTabsBar-BmDg-I8j.js";import{G as n}from"./globe-DYbdsirO.js";import{A as d,B as c}from"./use-reduced-motion-DSRPmG5b.js";import{E as l}from"./external-link-ZJr23ZD_.js";import"./chevron-left-B8jzdri_.js";import"./createLucideIcon-DA4zbT7M.js";import"./graduation-cap-CsDlhWZk.js";import"./users-DtKZmRLy.js";const h=[{id:"overview",label:"Overview",href:"/scholarship/overview"},{id:"rate-scholarship",label:"Rate Of Scholarship",href:"/scholarship/rate-of-scholarship"},{id:"more-scholarships ",label:"More Scholarships",href:"/scholarship/more-scholarships"},{id:"education-loans",label:"Education Loans",href:"/scholarship/education-loans"},{id:"national-fellowships",label:"National Fellowships",href:"/scholarship/national-fellowships"},{id:"study-abroad",label:"Study Abroad",href:"/scholarship/study-abroad"}],p=[{id:1,title:"SCHOLARSHIPS FOR INDIAN STUDENTS TO STUDY IN ABROAD",resources:[{name:"India Education Network - USA Scholarships",url:"http://www.indiaeducation.net/studyabroad/usa/scholarships.html",description:"Comprehensive scholarship information for Indian students planning to study in USA"},{name:"Shiksha Study Abroad Scholarships",url:"https://studyabroad.shiksha.com/scholarships",description:"Detailed scholarship guides and opportunities for studying overseas"},{name:"Top Universities International Scholarships",url:"https://www.topuniversities.com/student-info/scholarship-advice/international-scholarships-indian-students",description:"International scholarship advice and opportunities for Indian students"}]},{id:2,title:"PADHO PARDESH",description:"Scheme of Interest Subsidy on Educational Loans for Overseas Studies for the Students Belonging to the Minority Communities",resources:[{name:"Official Padho Pardesh Scheme Portal",url:"http://www.minorityaffairs.gov.in/schemesperformance/padho-pardesh-scheme-interest-subsidy-educational-loans-overseas-studies-students-belonging-minority",description:"Complete details about the interest subsidy scheme for minority students"}]}];function w(){return e.jsx(e.Fragment,{children:e.jsxs(o,{children:[e.jsx(a,{title:"Study Abroad Scholarships",breadcrumb:"Scholarships → Study Abroad",description:"Scholarships and financial support for Indian students pursuing education overseas"}),e.jsx(t,{tabs:h,activeId:"study-abroad"}),e.jsx("section",{className:"sch-shell",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"row mb-5",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"sch-card text-center",children:e.jsxs("div",{className:"d-flex align-items-center justify-content-center gap-3 mb-4",children:[e.jsx("div",{className:"study-abroad-main-icon",children:e.jsx(n,{size:32})}),e.jsxs("div",{children:[e.jsx("h1",{className:"h3 mb-2",children:"Study Abroad Opportunities"}),e.jsx("p",{className:"text-muted mb-0",children:"Financial support and scholarships for international education"})]})]})})})}),e.jsx("div",{className:"row g-4",children:p.map(s=>e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"study-abroad-section",children:[e.jsx("div",{className:"section-header",children:s.id===1?e.jsxs("div",{className:"d-flex align-items-center gap-3 mb-3",children:[e.jsx(d,{size:24,className:"text-primary"}),e.jsx("h2",{className:"h4 mb-0",children:s.title})]}):e.jsxs("div",{className:"d-flex align-items-center gap-3 mb-3",children:[e.jsx(c,{size:24,className:"text-success"}),e.jsxs("div",{children:[e.jsx("h2",{className:"h4 mb-1",children:s.title}),e.jsx("p",{className:"section-description mb-0",children:s.description})]})]})}),e.jsx("div",{className:"resources-grid",children:s.resources.map((i,r)=>e.jsx("div",{className:"resource-card",children:e.jsxs("div",{className:"resource-content",children:[e.jsx("h3",{className:"resource-title",children:i.name}),e.jsx("p",{className:"resource-description",children:i.description}),e.jsxs("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",className:"resource-link",children:[e.jsx(l,{size:16}),"Visit Website"]})]})},r))})]})},s.id))}),e.jsx("div",{className:"row mt-5",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"sch-card",children:e.jsxs("div",{className:"additional-info",children:[e.jsx("h3",{className:"h5 mb-3",children:"Important Notes"}),e.jsxs("div",{className:"info-content",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Scholarship Applications:"})," Start your scholarship search and applications at least 12-18 months before your intended study period. Most scholarships have early deadlines."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Padho Pardesh Scheme:"})," This scheme provides interest subsidy on educational loans for overseas studies specifically for students belonging to minority communities. Check eligibility criteria and application process on the official portal."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Document Preparation:"})," Keep all academic records, recommendation letters, and statement of purpose ready. Many scholarships require detailed documentation."]})]})]})})})})]})}),e.jsx("style",{jsx:!0,children:`
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
      `})]})})}export{w as default};
