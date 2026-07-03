import{j as e}from"./app-BkoR82q2.js";import{H as o}from"./HeroInner-DK4WoY1T.js";import{F as c}from"./FrontendLayout-DBZbG4EW.js";import"./use-reduced-motion-BO5hAdA7.js";import"./createLucideIcon-DmbJQXyp.js";import"./chevron-left-Bt8kYXpi.js";import"./users-BFEepoDl.js";const d=s=>s?s.startsWith("http://")||s.startsWith("https://")?s:`https://${s}`:"";function r({data:s}){return!s||!s.length?null:e.jsx("div",{className:"tableScrollWrap",children:e.jsxs("table",{className:"table table-bordered align-middle mb-0 linksTable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:70},children:"No."}),e.jsx("th",{style:{width:360},children:"Subject"}),e.jsx("th",{children:"Web Link"})]})}),e.jsx("tbody",{children:s.map((t,i)=>e.jsxs("tr",{children:[e.jsx("td",{className:"fw-semibold",children:i+1}),e.jsx("td",{children:t.subject}),e.jsx("td",{children:e.jsx("a",{href:d(t.web_link),target:"_blank",rel:"noreferrer",className:"jobsOfficialLink",children:t.web_link})})]},t.id??i))})]})})}function u({schoolLinks:s,collegeLinks:t,universityLinks:i,resultLinks:n,jobNewsLinks:a,minorityLinks:l}){return e.jsxs(c,{children:[e.jsx(o,{title:"Important Web Links",breadcrumb:"More → Important Web Links",description:"Official and useful web portals related to school, college, university, examinations, jobs, and minority welfare."}),e.jsx("section",{className:"jobsSection",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"jobsSectorTitle",children:"School"}),e.jsx(r,{data:s})]})}),e.jsx("section",{className:"jobsSection",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"jobsSectorTitle",children:"College"}),e.jsx(r,{data:t})]})}),e.jsx("section",{className:"jobsSection",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"jobsSectorTitle",children:"University"}),e.jsx(r,{data:i})]})}),e.jsx("section",{className:"jobsSection",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"jobsSectorTitle",children:"Results & Entrance Exams"}),e.jsx(r,{data:n})]})}),e.jsx("section",{className:"jobsSection",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"jobsSectorTitle",children:"Current Affairs & Job News"}),e.jsx(r,{data:a})]})}),e.jsx("section",{className:"jobsSection",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"jobsSectorTitle",children:"Government & Minority Welfare Websites"}),e.jsx(r,{data:l})]})}),e.jsx("style",{jsx:!0,global:!0,children:`
        .jobsSection {
          padding: 46px 0;
          background: #fff;
        }

        .jobsSectorTitle {
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .tableScrollWrap {
          width: 100%;
          overflow-x: auto;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 8px;
          background: #fff;
        }

        .linksTable {
          min-width: 820px;
        }

        .linksTable thead th {
          background: #f6f7f9;
          font-weight: 500;
          font-size: 12.5px;
          text-transform: uppercase;
        }

        .jobsOfficialLink {
          font-size: 13px;
          font-weight: 650;
          color: var(--bs-primary);
          word-break: break-word;
        }
      `})]})}export{u as default};
