import{a as t,j as e}from"./app-CClsNZzj.js";import{H as h}from"./HeroInner-CMDQnHB4.js";import{F as m}from"./FrontendLayout-K0giw1Cw.js";import p from"./ScholarshipTabsBar-Bzn-mtFu.js";import{G as f}from"./use-reduced-motion-B4w88ceD.js";import{E as w}from"./external-link-BZmAfmXW.js";import"./chevron-left-CmtqVty6.js";import"./createLucideIcon-2DhnkwR2.js";import"./users-B8HS1svs.js";const u=[{id:"overview",label:"Overview",href:route("scholarship.overview")},{id:"rate-scholarship",label:"Rate Of Scholarship",href:route("rate.of.scholarship")},{id:"more-scholarships ",label:"More Scholarships",href:route("more.scholarships")},{id:"education-loans",label:"Education Loans",href:route("education.loans")},{id:"national-fellowships",label:"National Fellowships",href:route("national.fellowships")},{id:"study-abroad",label:"Study Abroad",href:route("study.abroad")}],g=[{id:1,name:"SRTT Visiting Fellowships",organization:"Institute For Social And Economic Change",link:"http://www.isec.ac.in/srtt-fellowships.htm"},{id:2,name:"Raman – Charpak Fellowship",organization:"Department Of Science And Technology, Government Of India And Ministry Of Foreign Affairs, Government Of France",link:""},{id:3,name:"Tata Innovation Fellowship",organization:"Department Of Biotechnology",link:"www.dbtindia.nic.in"},{id:4,name:"Ramalingaswamy Re-Entry Fellowship",organization:"Department Of Biotechnology",link:"www.dbtindia.nic.in"},{id:5,name:"Ramanujan Fellowship",organization:"Department Of Science And Technology",link:"http://serb.gov.in/formats.php#ramanujan"},{id:6,name:"J C Bose National Fellowships",organization:"Department Of Science And Technology",link:"www.dst.gov.in"},{id:7,name:"Swarna Jayanti Fellowship",organization:"Ministry Of Science And Technology And Department Of Science And Technology",link:"index.htm"},{id:8,name:"Vartha Fellowship",organization:"Department Of Information, Government Of Karnataka",link:"http://Karnatakavarthe.org/downloads/"},{id:9,name:"Margdarshi Fellowship",organization:"Wellcome trust –DBT India Alliance",link:"www.wellcomedbt.org/margdarshi.html"},{id:10,name:"Intermediate Researcher Fellowship",organization:"Welcome trust-DBT India Alliance",link:"http://www.wellcomedbt.org/intermediate.html"},{id:11,name:"National Doctoral Fellowship",organization:"All India Council For Technical Educdational, (AICTE)",link:"http://www.aicte-india.org/dipndf.htm"},{id:12,name:"NCERT Doctoral Fellowships",organization:"National Council Of Educational Research And Training",link:"http://www.ncert.nic.in/departments/nie/der/publication/pdf/guidelinesdoctoralfellowship.pdf"},{id:13,name:"Fulbright – Nehru Doctoral Research Fellowships",organization:"United States- India Educational Foundation",link:"http://www.usief.org.in/Fulbright-nehru-doctoralresearch-fellowships.aspx"},{id:14,name:"Prime Minister's Fellowship Scheme For Doctoral Research",organization:"Department Of Science And Technology ,Ministry Of Science And Technology. Government Of India And Confederation Of Indian Industry",link:"www.cii.in/jointfellowshipscheme"},{id:15,name:"Jawaharlal Nehru Scholarships",organization:"Jawaharlal Nehru Memorial Fund",link:"http://www.jnmf.in"},{id:16,name:"Intermediate Fellowship For Researchers In India",organization:"Department Of Biotechnology",link:"http://www.wellcomedbt.org/intermediate.html"},{id:17,name:"ICSSR Doctoral Research Fellowships For Indian Students",organization:"Indian Council Of Social Science Research",link:"http://www.icssr.org"},{id:18,name:"Maulana Azad National Fellowship For Minority Students",organization:"University Grant Commission (UGC)",link:"http://www.ugc.ac.in/manf/default.aspx"},{id:19,name:"ICMR International Fellowships",organization:"Indian Council Of Medical Research",link:"http://icmr.nic.in/ifc_research.htm"},{id:20,name:"Media Fellowship",organization:"Indo- Global Social Service Society",link:"http://www.bidar.nic.in/scholarships/6-26.pdf"},{id:21,name:"Rajiv Gandhi National Research Fellowship",organization:"University Grant Commission (UGC)",link:"www.ugc.ac.in/rgnf/"},{id:22,name:"National Solar Science Fellows Program",organization:"Ministry Of New And Renewable Energy Government Of India",link:"proramme-scheme/national-solar-sciencefellowships-programme.pdf"},{id:23,name:"IUSSTF Indo-US Science And Technology Forum Introduces Indo-Us Research Fellowships For Indian Researchers",organization:"",link:"http://www.indousstf.org/fellowship.htm"},{id:24,name:"Minister Of Culture Invites Application From Indian Nationals For The Award Of Senior Fellowships",organization:"Ministry Of Culture, Government Of India",link:"http://indiaculture.nic.in/indiaculture/senior-juniorfellowship.html"},{id:25,name:"Young Fellowship",organization:"International Foundation For Research And Education (IFRE)",link:"http://youngindiafellowship.com/Apply-Now.aspx"},{id:26,name:"Commonwealth Scholarships And Fellowships",organization:"Ministry Of Human Resource Development, Government Of India",link:"http://www.csfp-online.org/"},{id:27,name:"Nehru Memorial Museum And Library Fellowships",organization:"Department Of Science And Technology",link:"http://www.nehrumemorial.org/index.php"},{id:28,name:"The Ravi Sankaran Fellowship Program For Indian Students",organization:"Inlaks Shivdasani Foundation",link:"http://www.ravisankaran.org/index.php"},{id:29,name:"The Legislative Assistants To Members Of Parliament (LAMP) Fellowship",organization:"PRS Legislative Research, Centre For Policy Research",link:"http://lamp.prsindia.org/about-%20the-fellowship"},{id:30,name:"Prime Minister's Rural Development Fellows Scheme",organization:"Ministry Of Rural Development, Government Of India",link:"http://rural.nic.in/pmrdfs/"}],x=["All","Science & Technology","Doctoral Research","International","Minority","Social Sciences","Rural Development"];function A(){const[r,b]=t.useState(""),[l,s]=t.useState("All"),c=g.filter(i=>i.name.toLowerCase().includes(r.toLowerCase())||i.organization.toLowerCase().includes(r.toLowerCase())),d=i=>{const n=i.name.toLowerCase(),a=i.organization.toLowerCase();return n.includes("minority")||n.includes("maulana azad")?"Minority":n.includes("doctoral")||n.includes("research")||n.includes("phd")?"Doctoral Research":n.includes("rural")||n.includes("development")?"Rural Development":n.includes("fulbright")||n.includes("commonwealth")||n.includes("international")?"International":a.includes("science")||a.includes("technology")||a.includes("biotechnology")?"Science & Technology":a.includes("social")||a.includes("cultural")||a.includes("media")?"Social Sciences":"All"},o=c.filter(i=>l==="All"||d(i)===l);return e.jsx(e.Fragment,{children:e.jsxs(m,{children:[e.jsx(h,{title:"National Fellowships",breadcrumb:"Scholarships → National Fellowships",description:"Explore comprehensive fellowship opportunities for research and higher studies from various government organizations"}),e.jsx(p,{tabs:u,activeId:"national-fellowships"}),e.jsx("section",{className:"sch-shell",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"row mb-5",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"sch-card text-center",children:e.jsxs("div",{className:"d-flex align-items-center justify-content-center gap-3 mb-4",children:[e.jsx("div",{className:"fellowship-icon",children:e.jsx(f,{size:32,className:"text-white"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"h3 mb-2",children:"INFORMATION ABOUT NATIONAL FELLOWSHIPS"}),e.jsx("p",{className:"text-muted mb-0",children:"Comprehensive list of fellowship opportunities for Indian researchers and students"})]})]})})})}),e.jsx("div",{className:"row mb-5",children:e.jsx("div",{className:"col-12 border-bottom pb-4",children:e.jsx("div",{className:"row g-3 align-items-end",children:e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"form-label sch-label",children:"Filter by Category"}),e.jsx("select",{className:"form-select",value:l,onChange:i=>s(i.target.value),children:x.map(i=>e.jsx("option",{value:i,children:i},i))})]})})})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsxs("h3",{className:"h5 mb-0",children:[o.length," Fellowship",o.length!==1?"s":""," Found"]}),e.jsxs("span",{className:"text-muted small",children:["Showing all ",o.length," fellowships"]})]})})}),e.jsx("div",{className:"row g-4",children:o.map(i=>e.jsx("div",{className:"col-lg-6 col-xl-4",children:e.jsxs("div",{className:"fellowship-card",children:[e.jsxs("div",{className:"fellowship-header",children:[e.jsx("div",{className:"fellowship-number",children:i.id}),e.jsx("h3",{className:"fellowship-title",children:i.name})]}),e.jsx("div",{className:"fellowship-organization",children:i.organization}),i.link&&e.jsx("div",{className:"fellowship-footer",children:e.jsxs("a",{href:i.link.startsWith("http")?i.link:`https://${i.link}`,target:"_blank",rel:"noopener noreferrer",className:"fellowship-link",children:[e.jsx(w,{size:14}),"Visit Official Website"]})})]})},i.id))}),e.jsx("div",{className:"row mt-5",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"information-note",children:[e.jsx("h5",{className:"mb-3",children:"Important Information"}),e.jsx("p",{className:"mb-2",children:"This list contains comprehensive information about national fellowships available for Indian students and researchers. Each fellowship has specific eligibility criteria, application deadlines, and selection procedures."}),e.jsxs("p",{className:"mb-0",children:[e.jsx("strong",{children:"Note:"})," Always visit the official website for the most current information and detailed application guidelines."]})]})})})]})}),e.jsx("style",{jsx:!0,children:`
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
      `})]})})}export{A as default};
