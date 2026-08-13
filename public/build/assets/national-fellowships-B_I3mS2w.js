import{r as t,j as e}from"./app-BtfmuS4E.js";import{H as d}from"./HeroInner-Cg6BDxNK.js";import{F as h}from"./FrontendLayout-Cy0KR3NF.js";import m from"./ScholarshipTabsBar-BmDg-I8j.js";import{G as f}from"./graduation-cap-CsDlhWZk.js";import{E as p}from"./external-link-ZJr23ZD_.js";import"./use-reduced-motion-DSRPmG5b.js";import"./createLucideIcon-DA4zbT7M.js";import"./chevron-left-B8jzdri_.js";import"./users-DtKZmRLy.js";const x=[{id:"overview",label:"Overview",href:route("scholarship.overview")},{id:"rate-scholarship",label:"Rate Of Scholarship",href:route("rate.of.scholarship")},{id:"more-scholarships ",label:"More Scholarships",href:route("more.scholarships")},{id:"education-loans",label:"Education Loans",href:route("education.loans")},{id:"national-fellowships",label:"National Fellowships",href:route("national.fellowships")},{id:"study-abroad",label:"Study Abroad",href:route("study.abroad")}];function I({data:l}){const a=Array.isArray(l)?l:[],n=["All",...new Set(a.map(s=>s.category).filter(Boolean))],[o,b]=t.useState(""),[r,c]=t.useState("All"),i=a.filter(s=>s.name.toLowerCase().includes(o.toLowerCase())||s.organization.toLowerCase().includes(o.toLowerCase())).filter(s=>r==="All"||s.category===r);return e.jsx(e.Fragment,{children:e.jsxs(h,{children:[e.jsx(d,{title:"National Fellowships",breadcrumb:"Scholarships → National Fellowships",description:"Explore comprehensive fellowship opportunities for research and higher studies from various government organizations"}),e.jsx(m,{tabs:x,activeId:"national-fellowships"}),e.jsx("section",{className:"sch-shell",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"row mb-5",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"sch-card text-center",children:e.jsxs("div",{className:"d-flex align-items-center justify-content-center gap-3 mb-4",children:[e.jsx("div",{className:"fellowship-icon",children:e.jsx(f,{size:32,className:"text-white"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"h3 mb-2",children:"INFORMATION ABOUT NATIONAL FELLOWSHIPS"}),e.jsx("p",{className:"text-muted mb-0",children:"Comprehensive list of fellowship opportunities for Indian researchers and students"})]})]})})})}),e.jsx("div",{className:"row mb-5",children:e.jsx("div",{className:"col-12 border-bottom pb-4",children:e.jsx("div",{className:"row g-3 align-items-end",children:e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"form-label sch-label",children:"Filter by Category"}),e.jsx("select",{className:"form-select",value:r,onChange:s=>c(s.target.value),children:n.map(s=>e.jsx("option",{value:s,children:s},s))})]})})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsxs("h3",{className:"h5 mb-0",children:[i.length," Fellowship",i.length!==1?"s":""," Found"]}),e.jsxs("span",{className:"text-muted small",children:["Showing all ",i.length," fellowships"]})]})})}),e.jsx("div",{className:"row g-4",children:i.map(s=>e.jsx("div",{className:"col-lg-6 col-xl-4",children:e.jsxs("div",{className:"fellowship-card",children:[e.jsxs("div",{className:"fellowship-header",children:[e.jsx("div",{className:"fellowship-number",children:s.id}),e.jsx("h3",{className:"fellowship-title",children:s.name})]}),e.jsx("div",{className:"fellowship-organization",children:s.organization}),s.link&&e.jsx("div",{className:"fellowship-footer",children:e.jsxs("a",{href:s.link.startsWith("http")?s.link:`https://${s.link}`,target:"_blank",rel:"noopener noreferrer",className:"fellowship-link",children:[e.jsx(p,{size:14}),"Visit Official Website"]})})]})},s.id))}),e.jsx("div",{className:"row mt-5",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"information-note",children:[e.jsx("h5",{className:"mb-3",children:"Important Information"}),e.jsx("p",{className:"mb-2",children:"This list contains comprehensive information about national fellowships available for Indian students and researchers. Each fellowship has specific eligibility criteria, application deadlines, and selection procedures."}),e.jsxs("p",{className:"mb-0",children:[e.jsx("strong",{children:"Note:"})," Always visit the official website for the most current information and detailed application guidelines."]})]})})})]})}),e.jsx("style",{jsx:!0,children:`
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
      `})]})})}export{I as default};
