import{j as e}from"./app-CaCW13Kp.js";import{H as x}from"./HeroInner-esh46roL.js";import{F as h}from"./FrontendLayout-BuTGvc0c.js";import"./use-reduced-motion-D19il6-0.js";import"./createLucideIcon-BUQauYm9.js";import"./chevron-left-BF54BBfz.js";import"./users-CphiPfKN.js";const n=i=>String(i||"").replace(/[^\d+]/g,"");function v({groups:i}){const a=i||[];return console.log("data",i),e.jsx(e.Fragment,{children:e.jsxs(h,{children:[e.jsx(x,{title:"Counsellors Directory",breadcrumb:"More → Counsellors Directory",description:"Contact details of SNAP career counsellors (subject-wise). Tap a phone number on mobile to call directly."}),e.jsx("section",{className:"jobsSection",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"jobsSectorTitle",children:"Contact Details of SNAP Career Counsellors"}),e.jsx("p",{className:"jobsSectorNote",children:"This directory is subject-wise. If a subject has multiple resource persons, all are listed under that subject."}),e.jsx("div",{className:"tableScrollWrap",children:e.jsxs("table",{className:"table table-bordered align-middle mb-0 counsellorTable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:70},children:"No."}),e.jsx("th",{style:{width:320},children:"Subject"}),e.jsx("th",{children:"Resource Person(s)"}),e.jsx("th",{style:{width:220},children:"Contact"}),e.jsx("th",{style:{width:260},children:"Email"})]})}),e.jsx("tbody",{children:a.map(s=>e.jsxs("tr",{children:[e.jsx("td",{className:"fw-semibold",children:String(s.no).padStart(2,"0")}),e.jsx("td",{className:"fw-semibold",children:s.subject}),e.jsx("td",{children:e.jsx("div",{className:"d-flex flex-column gap-2",children:s.persons.map((l,r)=>e.jsxs("div",{children:[e.jsx("div",{className:"fw-semibold",children:l.name}),e.jsx("div",{className:"text-muted small",children:l.qualification})]},r))})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex flex-column gap-2",children:s.persons.map((l,r)=>{const o=String(l.phone||"-").split("/").map(t=>t.trim()).filter(Boolean);return o.length?e.jsx("div",{className:"d-flex flex-column gap-1",children:o.map((t,c)=>{const d=`tel:${n(t)}`,m=n(t).length>=10;return e.jsx("div",{children:m?e.jsx("a",{className:"callLink",href:d,children:t}):e.jsx("span",{children:t})},c)})},r):e.jsx("div",{children:"-"},r)})})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex flex-column gap-2",children:s.persons.map((l,r)=>e.jsx("div",{children:l.email&&l.email!=="-"?e.jsx("a",{className:"mailLink",href:`mailto:${l.email}`,children:l.email}):e.jsx("span",{children:"-"})},r))})})]},s.no))})]})}),e.jsx("div",{className:"text-muted small mt-3",children:"Tip: On mobile devices, swipe horizontally to view all columns."})]})}),e.jsx("style",{jsx:!0,global:!0,children:`
        .jobsSection {
          padding: 46px 0;
          background: #fff;
        }

        .jobsSectorTitle {
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .jobsSectorNote {
          font-size: 14px;
          color: #666;
          margin: 0 0 18px 0;
          max-width: 920px;
        }

        .tableScrollWrap {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 8px;
          background: #fff;
        }

        .counsellorTable {
          min-width: 1100px;
          margin: 0;
        }

        .counsellorTable thead th {
          background: #f6f7f9;
          font-weight: 500;
          font-size: 12.5px;
          text-transform: uppercase;
          letter-spacing: 0.35px;
          white-space: nowrap;
        }

        .counsellorTable td {
          font-size: 14px;
          vertical-align: top;
        }

        .callLink {
          color: var(--bs-primary);
          text-decoration: none;
          font-weight: 500;
        }
        .callLink:hover {
          text-decoration: underline;
        }

        .mailLink {
          color: var(--bs-primary);
          text-decoration: none;
          font-weight: 650;
          word-break: break-word;
        }
        .mailLink:hover {
          text-decoration: underline;
        }
      `})]})})}export{v as default};
