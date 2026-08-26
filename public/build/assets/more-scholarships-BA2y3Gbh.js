import{r as n,j as e}from"./app-ekFhAMhI.js";import{H as g}from"./HeroInner-DCDz8-oN.js";import b from"./ScholarshipTabsBar-D5nv-wj4.js";import{F as j}from"./FrontendLayout-DfclbOZ_.js";import{F as o}from"./funnel-Bsbi2DQM.js";import{A as v,B as u}from"./use-reduced-motion-YAAVtVwX.js";import{C as N}from"./calendar-L4WiBQvp.js";import{U as y}from"./user-check-CRig4fjP.js";import{E as d}from"./external-link-B2TnbE8T.js";import{C as w,a as k}from"./chevron-up-CISFk5FU.js";import"./chevron-left-nBI3RlaI.js";import"./createLucideIcon-C8e2brwF.js";import"./graduation-cap-CfNYapaP.js";import"./users-pRyr2bR6.js";const A=[{id:"overview",label:"Overview",href:route("scholarship.overview")},{id:"rate-scholarship",label:"Rate Of Scholarship",href:route("rate.of.scholarship")},{id:"more-scholarships ",label:"More Scholarships",href:route("more.scholarships")},{id:"education-loans",label:"Education Loans",href:route("education.loans")},{id:"national-fellowships",label:"National Fellowships",href:route("national.fellowships")},{id:"study-abroad",label:"Study Abroad",href:route("study.abroad")}],C=["All","Girl Child","Differently Abled","Central Government","State Government","Science & Research","Corporate","Private","International"];function U({data:t}){const c=Array.isArray(t)?t:[],[i,h]=n.useState("All"),[r,m]=n.useState(null),l=c.filter(s=>i==="All"||s.category===i),x=s=>{m(r===s?null:s)},p=s=>({"Girl Child":"var(--bs-pink)","Differently Abled":"var(--bs-purple)","Central Government":"var(--bs-blue)","State Government":"var(--bs-cyan)","Science & Research":"var(--bs-teal)",Corporate:"var(--bs-orange)",Private:"var(--bs-indigo)",International:"var(--bs-red)"})[s]||"var(--bs-secondary)";return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx(g,{title:"All Scholarships",breadcrumb:"Scholarships → All Scholarships",description:"Explore comprehensive scholarship opportunities from various organizations and government schemes"}),e.jsx(b,{tabs:A,activeId:"all-scholarships"}),e.jsx("section",{className:"sch-shell",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"row mb-5",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"sch-card",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("h3",{className:"h5 mb-0",children:"Browse Scholarships"}),e.jsx("p",{className:"text-muted mb-0 small",children:"Discover opportunities that match your profile"})]}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx(o,{size:18,className:"text-muted"}),e.jsxs("select",{className:"form-select",value:i,onChange:s=>h(s.target.value),style:{maxWidth:"250px"},children:[e.jsx("option",{value:"All",children:"All Categories"}),C.filter(s=>s!=="All").map(s=>e.jsx("option",{value:s,children:s},s))]}),e.jsxs("span",{className:"badge bg-light text-dark",children:[l.length," found"]})]})})]})})})}),e.jsx("div",{className:"row g-4",children:l.map(s=>e.jsx("div",{className:"col-xl-6",children:e.jsxs("div",{className:`scholarship-card nitLightGradient ${r===s.id?"expanded":""}`,children:[e.jsxs("div",{className:"scholarship-header",children:[e.jsx("div",{className:"d-flex justify-content-between align-items-start mb-3",children:e.jsxs("div",{className:"flex-grow-1",children:[e.jsx("h3",{className:"scholarship-title",children:s.name}),e.jsx("div",{className:"scholarship-category",style:{color:p(s.category)},children:s.category})]})}),e.jsx("div",{className:"scholarship-criteria",children:s.criteria})]}),e.jsxs("div",{className:"scholarship-key-info",children:[s.award&&e.jsxs("div",{className:"info-item",children:[e.jsx("div",{className:"d-flex flex-shrink-0 ",children:e.jsx(v,{size:18})}),e.jsxs("div",{children:[e.jsx("label",{children:"Award"}),e.jsx("span",{className:"award-amount",children:s.award})]})]}),s.whenToApply&&e.jsxs("div",{className:"info-item",children:[e.jsxs("div",{className:"d-flex flex-shrink-0 ",children:[" ",e.jsx(N,{size:18})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Apply By"}),e.jsx("span",{children:s.whenToApply})]})]}),e.jsxs("div",{className:"info-item",children:[e.jsxs("div",{className:"d-flex flex-shrink-0 ",children:[" ",e.jsx(u,{size:18})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Application"}),e.jsx("span",{children:s.application})]})]})]}),r===s.id&&e.jsxs("div",{className:"scholarship-details",children:[s.eligibility&&e.jsxs("div",{className:"detail-section",children:[e.jsxs("div",{className:"detail-header",children:[e.jsxs("div",{className:"d-flex flex-shrink-0 ",children:[" ",e.jsx(y,{size:18})]}),e.jsx("h6",{children:"Eligibility Criteria"})]}),e.jsx("p",{className:"detail-content",children:s.eligibility})]}),s.links.length>0&&e.jsxs("div",{className:"detail-section",children:[e.jsxs("div",{className:"detail-header",children:[e.jsx("div",{className:"d-flex flex-shrink-0 ",children:e.jsx(d,{size:18})}),e.jsx("h6",{children:"Important Links"})]}),e.jsx("div",{className:"links-container",children:s.links.map((a,f)=>e.jsxs("a",{href:a.startsWith("http")?a:`https://${a}`,target:"_blank",rel:"noopener noreferrer",className:"link-item",children:[e.jsxs("div",{className:"d-flex flex-shrink-0 ",children:[" ",e.jsx(d,{size:14})]}),a.replace("https://","").replace("http://","")]},f))})]})]}),e.jsx("div",{className:"scholarship-footer",children:e.jsx("button",{className:"expand-btn small",onClick:()=>x(s.id),children:r===s.id?e.jsxs(e.Fragment,{children:["Show Less",e.jsx(w,{size:16})]}):e.jsxs(e.Fragment,{children:["View Details",e.jsx(k,{size:16})]})})})]})},s.id))}),l.length===0&&e.jsx("div",{className:"text-center py-5",children:e.jsxs("div",{className:"empty-state",children:[e.jsx(o,{size:48,className:"text-muted mb-3"}),e.jsx("h4",{className:"text-muted",children:"No scholarships found"}),e.jsx("p",{className:"text-muted",children:"Try selecting a different category"})]})})]})})]}),e.jsx("style",{jsx:!0,children:`
        .scholarship-card {
          background: white;
          border: 1px solid #dac4ef;
          border-radius: 12px;
          padding: 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        
        .scholarship-card:hover {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          border-color: #007bff;
        }
        
        .scholarship-card.expanded {
          box-shadow: 0 8px 32px rgba(0, 123, 255, 0.12);
          border-color: #007bff;
        }
        
        .scholarship-header {
          margin-bottom: 1.25rem;
        }
        
        .scholarship-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }
        
        .scholarship-category {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .scholarship-criteria {
          color: #6c757d;
          font-size: 0.9rem;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .scholarship-key-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        
        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
              border-bottom: 1px solid #e0e0e0ff;
    padding-bottom: 10px;
        }
        
        .info-item svg {
          color: #007bff;
          margin-top: 0.125rem;
          flex-shrink: 0;
        }
        
        .info-item label {
          font-size: 0.75rem;
          color: #6c757d;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.25rem;
          display: block;
        }
        
        .info-item span {
          font-size: 0.875rem;
          color: #2c3e50;
          font-weight: 500;
          line-height: 1.4;
        }
        
        .award-amount {
        }
        
        .scholarship-details {
          margin-top: auto;
        }
          .nitLightGradient {
    background: radial-gradient(circle at 20% 80%, rgba(30, 64, 175, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.2) 0%, transparent 30%), radial-gradient(circle at 40% 40%, rgba(14, 165, 233, 0.08) 0%, transparent 30%), #f8fafc;
}
        
        .detail-section {
          margin-bottom: 1.25rem;
        }
        
        .detail-section:last-child {
          margin-bottom: 0;
        }
        
        .detail-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        
        .detail-header svg {
          color: #007bff;
        }
        
        .detail-header h6 {
          margin: 0;
          color: #2c3e50;
          font-weight: 600;
        }
        
        .detail-content {
          font-size: 0.875rem;
          color: #495057;
          line-height: 1.5;
          margin: 0;
        }
        
        .links-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .link-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem;
          background: #f8f9fa;
          border-radius: 6px;
          color: #007bff;
          text-decoration: none;
          font-size: 0.875rem;
          transition: all 0.2s ease;
        }
        
        .link-item:hover {
          background: #007bff;
          color: white;
          text-decoration: none;
        }
        
        .scholarship-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid #e9ecef;
        }
        
        .expand-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: #007bff;
          font-weight: 500;
          padding: 0;
          transition: all 0.2s ease;
        }
        
        .expand-btn:hover {
          color: #0056b3;
        }
        
        .empty-state {
          padding: 3rem 1rem;
        }
          .lucide {flex-shrink: 0;}
        
        @media (max-width: 768px) {
          .scholarship-card {
            padding: 1.25rem;
          }
          
          .scholarship-title {
            font-size: 1.125rem;
          }
          
          .scholarship-key-info {
            gap: 0.5rem;
          }
        }
      `})]})}export{U as default};
