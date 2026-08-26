import{j as e}from"./app-ekFhAMhI.js";import{H as o}from"./HeroInner-DCDz8-oN.js";import{F as n}from"./FrontendLayout-DfclbOZ_.js";import"./use-reduced-motion-YAAVtVwX.js";import"./createLucideIcon-C8e2brwF.js";import"./chevron-left-nBI3RlaI.js";import"./graduation-cap-CfNYapaP.js";import"./users-pRyr2bR6.js";const a=r=>{if(!r)return"";const t=String(r).trim();return!t||t==="-"?"":t.startsWith("http://")||t.startsWith("https://")?t:t.startsWith("www.")?`https://${t}`:""};function f({supports:r}){const t=r||[];return e.jsx(e.Fragment,{children:e.jsxs(n,{children:[e.jsx(o,{title:"Coaching Support",breadcrumb:"More → Coaching Support",description:"A directory of coaching support centres and study circles for competitive exams. Please verify the latest details directly with the institution."}),e.jsx("section",{className:"jobsSection",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"jobsSectorTitle",children:"Coaching Support Centre"}),e.jsx("p",{className:"jobsSectorNote",children:"The list below is compiled from the Career Book tables. Some entries include email/phone instead of a website."}),e.jsx("div",{className:"tableScrollWrap",children:e.jsxs("table",{className:"table table-bordered align-middle mb-0 coachingTable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:80},children:"No."}),e.jsx("th",{style:{width:240},children:"Subject"}),e.jsx("th",{children:"Institution Name"}),e.jsx("th",{style:{width:320},children:"Web / Contact"})]})}),e.jsx("tbody",{children:t.map(i=>{const s=a(i.web);return e.jsxs("tr",{children:[e.jsx("td",{className:"fw-semibold",children:i.no}),e.jsx("td",{children:i.subject}),e.jsxs("td",{children:[e.jsx("div",{className:"fw-semibold",children:i.institution}),i.note?e.jsx("div",{className:"text-muted small mt-1",children:i.note}):null]}),e.jsx("td",{children:s?e.jsx("a",{href:s,target:"_blank",rel:"noreferrer",className:"jobsOfficialLink",children:i.web}):e.jsx("span",{children:i.web||"-"})})]},i.no)})})]})}),e.jsx("div",{className:"text-muted small mt-3",children:"Tip: On mobile, swipe horizontally to view all columns."})]})}),e.jsx("style",{jsx:!0,global:!0,children:`
        /* Reuse your “official directory” section base */
        .jobsSection {
          padding: 46px 0;
          background: #fff;
          scroll-margin-top: 160px;
        }

        .jobsSectorTitle {
          font-size: 20px;
          font-weight: 800;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          margin: 0 0 6px 0;
        }

        .jobsSectorNote {
          font-size: 14px;
          color: #666;
          margin: 0 0 18px 0;
          max-width: 920px;
        }

        /* IMPORTANT: responsive scroll container */
        .tableScrollWrap {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 8px;
          background: #fff;
        }

        /* Ensure table keeps minimum width so scrolling happens on mobile */
        .coachingTable {
          min-width: 920px;
          margin: 0;
        }

        .coachingTable thead th {
          background: #f6f7f9;
          font-weight: 800;
          font-size: 12.5px;
          text-transform: uppercase;
          letter-spacing: 0.35px;
          white-space: nowrap;
        }

        .coachingTable td {
          font-size: 14px;
          vertical-align: top;
        }

        /* professional link style */
        .jobsOfficialLink {
          font-size: 13px;
          font-weight: 650;
          color: var(--bs-primary);
          text-decoration: none;
          word-break: break-word;
        }
        .jobsOfficialLink:hover {
          text-decoration: underline;
        }
      `})]})})}export{f as default};
