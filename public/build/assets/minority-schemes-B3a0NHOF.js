import{j as e}from"./app-BkoR82q2.js";import{H as o}from"./HeroInner-DK4WoY1T.js";import{F as n}from"./FrontendLayout-DBZbG4EW.js";import"./use-reduced-motion-BO5hAdA7.js";import"./createLucideIcon-DmbJQXyp.js";import"./chevron-left-Bt8kYXpi.js";import"./users-BFEepoDl.js";const l=r=>{if(!r)return"";const t=String(r).trim();return!t||t==="-"?"":t.startsWith("http://")||t.startsWith("https://")?t:`https://${t}`};function f({schemes:r}){const t=r||[];return e.jsx(e.Fragment,{children:e.jsxs(n,{children:[e.jsx(o,{title:"Minority Schemes",breadcrumb:"More → Minority Schemes",description:"Important scholarship, loan, fellowship and skill-development schemes for minority communities (with official web links)."}),e.jsx("section",{className:"jobsSection",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"jobsSectorTitle",children:"Minority Schemes"}),e.jsx("p",{className:"jobsSectorNote",children:"Please verify eligibility rules, deadlines and documents from the official portal before applying."}),e.jsx("div",{className:"tableScrollWrap",children:e.jsxs("table",{className:"table table-bordered align-middle mb-0 schemesTable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:70},children:"No."}),e.jsx("th",{children:"Scheme / Subject"}),e.jsx("th",{style:{width:360},children:"Web Link"})]})}),e.jsx("tbody",{children:t.map(i=>{const s=l(i.link);return e.jsxs("tr",{children:[e.jsx("td",{className:"fw-semibold",children:i.no}),e.jsx("td",{children:i.subject}),e.jsx("td",{children:s?e.jsx("a",{href:s,target:"_blank",rel:"noreferrer",className:"jobsOfficialLink",children:i.link}):e.jsx("span",{children:i.link||"-"})})]},i.no)})})]})}),e.jsx("div",{className:"text-muted small mt-3",children:"Tip: On mobile devices, swipe horizontally to view all columns."})]})}),e.jsx("style",{jsx:!0,global:!0,children:`
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

        .schemesTable {
          min-width: 920px;
          margin: 0;
        }

        .schemesTable thead th {
          background: #f6f7f9;
          font-weight: 500;
          font-size: 12.5px;
          text-transform: uppercase;
          letter-spacing: 0.35px;
          white-space: nowrap;
        }

        .schemesTable td {
          font-size: 14px;
          vertical-align: top;
        }

        .jobsOfficialLink {
          font-size: 13px;
          font-weight: 500;
          color: var(--bs-primary);
          text-decoration: none;
          word-break: break-word;
        }
        .jobsOfficialLink:hover {
          text-decoration: underline;
        }
      `})]})})}export{f as default};
