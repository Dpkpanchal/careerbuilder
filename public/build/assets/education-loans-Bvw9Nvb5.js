import{j as e}from"./app-ekFhAMhI.js";import{H as n}from"./HeroInner-DCDz8-oN.js";import{F as c}from"./FrontendLayout-DfclbOZ_.js";import d from"./ScholarshipTabsBar-D5nv-wj4.js";import{U as o}from"./user-check-CRig4fjP.js";import{F as m}from"./file-text-BEsEjUsy.js";import{C as h}from"./calendar-L4WiBQvp.js";import{I as x}from"./indian-rupee-Cd3lpwMB.js";import{L as l}from"./landmark-DwjcfFwc.js";import{B as b}from"./building-VdrEz5R9.js";import{E as t}from"./external-link-B2TnbE8T.js";import"./use-reduced-motion-YAAVtVwX.js";import"./createLucideIcon-C8e2brwF.js";import"./chevron-left-nBI3RlaI.js";import"./graduation-cap-CfNYapaP.js";import"./users-pRyr2bR6.js";const p=[{id:"overview",label:"Overview",href:route("scholarship.overview")},{id:"rate-scholarship",label:"Rate Of Scholarship",href:route("rate.of.scholarship")},{id:"more-scholarships ",label:"More Scholarships",href:route("more.scholarships")},{id:"education-loans",label:"Education Loans",href:route("education.loans")},{id:"national-fellowships",label:"National Fellowships",href:route("national.fellowships")},{id:"study-abroad",label:"Study Abroad",href:route("study.abroad")}],a=({icon:s,...r})=>!s||typeof s>"u"?e.jsx("span",{...r,children:"●"}):e.jsx(s,{...r});function C({data:s}){return e.jsx(e.Fragment,{children:e.jsxs(c,{children:[e.jsx(n,{title:"Education Loans",breadcrumb:"Scholarships → Education Loans",description:"Get education loan at the lowest Rate of Interest @ 3% p.a.!"}),e.jsx(d,{tabs:p,activeId:"education-loans"}),e.jsx("section",{className:"sch-shell",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"row mb-5",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"sch-card text-center",children:e.jsxs("div",{className:"loan-hero",children:[e.jsx("h1",{className:"display-6 fw-bold text-primary mb-3",children:s.title}),e.jsx("p",{className:"lead mb-0 ",children:s.subtitle})]})})})}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-4",children:e.jsxs("div",{className:"sch-card h-100 nitDarkGlassCard",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-3",children:[e.jsx(a,{icon:o,size:24,className:"text-white"}),e.jsx("h3",{className:"h5 mb-0 text-white",children:"ELIGIBILITY"})]}),e.jsx("p",{className:"mb-0 text-white",children:s.eligibility})]})}),e.jsx("div",{className:"col-lg-4",children:e.jsxs("div",{className:"sch-card h-100 nitDarkGlassCard",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-3",children:[e.jsx(a,{icon:m,size:24,className:"text-white"}),e.jsx("h3",{className:"h5 mb-0 text-white",children:"APPLICATION"})]}),e.jsx("ul",{className:"loan-list text-white",children:e.jsxs("li",{children:[" ",s.application_process]})})]})}),e.jsx("div",{className:"col-lg-4",children:e.jsxs("div",{className:"sch-card h-100 nitDarkGlassCard",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-3",children:[e.jsx(a,{icon:h,size:24,className:"text-white"}),e.jsx("h3",{className:"h5 mb-0 text-white",children:"AGE GROUP"})]}),e.jsx("div",{className:"age-group",children:e.jsx("span",{className:"age-value",children:s.age_group})})]})})]}),e.jsx("div",{className:"row mt-5",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"sch-card",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-4",children:[e.jsx(a,{icon:x,size:24,className:"text-success"}),e.jsx("h3",{className:"h4 mb-0",children:"ANNUAL FAMILY INCOME"})]}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table loan-table",children:[e.jsxs("thead",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"CATEGORY"}),e.jsx("th",{colSpan:"2",className:"text-center",children:"ANNUAL FAMILY INCOME"}),e.jsx("th",{children:"ADMISSIBLE RATE OF INTEREST"})]}),e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{className:"text-center",children:"RURAL"}),e.jsx("th",{className:"text-center",children:"URBAN"}),e.jsx("th",{})]})]}),e.jsx("tbody",{children:s.income_rates?.categories?.map((r,i)=>e.jsxs("tr",{children:[e.jsx("td",{children:r.category}),e.jsx("td",{className:"text-center",children:r.rural}),e.jsx("td",{className:"text-center",children:r.urban}),i===0&&e.jsx("td",{rowSpan:s.income_rates.categories.length,className:"interest-cell",children:e.jsxs("div",{className:"interest-rate",children:[e.jsx("span",{className:"rate",children:r.interest||"N/A"}),e.jsx("small",{children:"Lowest Rate of Interest"})]})})]},i))})]})})]})})}),e.jsx("div",{className:"row mt-5",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"sch-card",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-3",children:[e.jsx(a,{icon:l,size:24,className:"text-info"}),e.jsx("h3",{className:"h4 mb-0",children:"DISBURSEMENT"})]}),e.jsx("p",{className:"mb-0",children:s.disbursement_info})]})})}),e.jsxs("div",{className:"row mt-5",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"sch-card h-100",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-3",children:[e.jsx(a,{icon:b,size:24,className:"text-primary"}),e.jsx("h3",{className:"h5 mb-0",children:"EDUCATION LOANS FROM TOP INDIAN BANKS"})]}),e.jsx("p",{className:"mb-3",children:"Compare education loan interest rates from top Indian banks"}),e.jsxs("a",{href:s.loan_care_link,target:"_blank",rel:"noopener noreferrer",className:"fw-medium btn-primary filled text-secondry shadow-sm text-decoration-none",children:[e.jsx(a,{icon:t,size:16}),"Visit MyLoanCare"]})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"sch-card h-100",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-3",children:[e.jsx(a,{icon:l,size:24,className:"text-success"}),e.jsx("h3",{className:"h5 mb-0",children:"VIDYA LAKSHMI PORTAL"})]}),e.jsx("p",{className:"mb-3",children:"Vidya Lakshmi Portal is an education Loan Portal managed by NSDL e-Governance Infrastructure Limited, Mumbai"}),e.jsxs("a",{href:s.vidya_lakshmi_link,target:"_blank",rel:"noopener noreferrer",className:"fw-medium btn-primary filled text-secondry shadow-sm text-decoration-none",children:[e.jsx(a,{icon:t,size:16}),"Visit Vidya Lakshmi"]})]})})]})]})}),e.jsx("style",{jsx:!0,children:`
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
      `})]})})}export{C as default};
