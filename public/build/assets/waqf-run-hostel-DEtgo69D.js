import{j as e}from"./app-CaCW13Kp.js";import{H as o}from"./HeroInner-esh46roL.js";import{F as r}from"./FrontendLayout-BuTGvc0c.js";import"./use-reduced-motion-D19il6-0.js";import"./createLucideIcon-BUQauYm9.js";import"./chevron-left-BF54BBfz.js";import"./users-CphiPfKN.js";function m({hostels:s}){const a=s||[];return e.jsx(e.Fragment,{children:e.jsxs(r,{children:[e.jsx(o,{title:"Waqf-Run Hostels",breadcrumb:"More → Waqf-Run Hostels",description:"Information on Waqf-run hostels for students in West Bengal, including location, seat capacity, and contact details."}),e.jsx("section",{className:"jobsSection",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"jobsSectorTitle",children:"Information About Waqf-Run Hostels"}),e.jsx("p",{className:"jobsSectorNote",children:"Waqf Board Office: 6/2, Madan Street, Kolkata – 700072"}),e.jsx("div",{className:"tableScrollWrap",children:e.jsxs("table",{className:"table table-bordered align-middle mb-0 waqfTable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:70},children:"No."}),e.jsx("th",{style:{width:280},children:"Name of the Hostel"}),e.jsx("th",{children:"Address"}),e.jsx("th",{style:{width:120},children:"Seat Capacity"}),e.jsx("th",{style:{width:200},children:"Contact No."})]})}),e.jsx("tbody",{children:a.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"fw-semibold",children:t.no}),e.jsx("td",{className:"fw-semibold",children:t.name}),e.jsx("td",{children:t.address}),e.jsx("td",{children:t.seats}),e.jsx("td",{children:t.contact})]},t.no))})]})}),e.jsx("div",{className:"text-muted small mt-3",children:"Tip: On mobile devices, swipe horizontally to view all columns."})]})}),e.jsx("style",{jsx:!0,global:!0,children:`
        .jobsSection {
          padding: 46px 0;
          background: #fff;
          scroll-margin-top: 160px;
        }

        .jobsSectorTitle {
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          margin: 0 0 6px 0;
        }

        .jobsSectorNote {
          font-size: 14px;
          color: #666;
          margin: 0 0 18px 0;
          max-width: 900px;
        }

        /* Responsive table wrapper */
        .tableScrollWrap {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 8px;
          background: #fff;
        }

        .waqfTable {
          min-width: 980px; /* forces horizontal scroll on mobile */
          margin: 0;
        }

        .waqfTable thead th {
          background: #f6f7f9;
          font-weight: 500;
          font-size: 12.5px;
          text-transform: uppercase;
          letter-spacing: 0.35px;
          white-space: nowrap;
        }

        .waqfTable td {
          font-size: 14px;
          vertical-align: top;
        }
      `})]})})}export{m as default};
