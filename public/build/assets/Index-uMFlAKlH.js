import{r as l,j as e,H as f,L as c}from"./app-ekFhAMhI.js";import{A as m}from"./AdminLayout-_JU_bKX6.js";import{P as b}from"./pencil-CUBZqb3g.js";import{E as x}from"./external-link-B2TnbE8T.js";import"./createLucideIcon-C8e2brwF.js";const S=({pages:r,filters:d={}})=>{const[h,g]=l.useState(d?.search||""),[p,u]=l.useState(d?.status||""),[j,N]=l.useState(!1);console.log("Pages Data:",r);const o=r?.data||r||[],s=r?.data!==void 0,n=t=>{if(s){const a=r.current_page||1,i=r.per_page||10;return(a-1)*i+t+1}return t+1};return e.jsxs(m,{header:"Landing Pages",children:[e.jsx(f,{title:"Landing Pages"}),e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"card mt-3 shadow-sm",children:[e.jsx("div",{className:"card-header bg-white border-bottom",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"card-title mb-0 font-weight-bold",children:[e.jsx("i",{className:"fas fa-file-alt mr-2"}),"Landing Pages"]}),e.jsx("p",{className:"text-muted small mb-0 mt-1",children:'Edit the content of each landing page. Click "Edit" to modify the page content.'})]}),e.jsxs("div",{className:"text-muted",children:["Total: ",e.jsx("span",{className:"font-weight-bold",children:s?r.total:o.length})]})]})}),e.jsx("div",{className:"card-body p-0",children:e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover align-middle mb-0",children:[e.jsx("thead",{className:"bg-light",children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:50},className:"text-center",children:"#"}),e.jsx("th",{children:"Page"}),e.jsx("th",{children:"Description"}),e.jsx("th",{style:{width:200,textAlign:"center"},children:"Actions"})]})}),e.jsx("tbody",{children:o&&o.length>0?o.map((t,a)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-center font-weight-bold",children:n(a)}),e.jsx("td",{children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"bg-primary rounded-circle p-2 mr-3",style:{width:36,height:36},children:e.jsx("i",{className:"fas fa-file-alt text-white",style:{fontSize:14}})}),e.jsxs("div",{children:[e.jsx("span",{className:"fw-semibold",children:t.title||t.name||"Untitled"}),e.jsxs("div",{className:"text-muted small",children:[e.jsx("i",{className:"fas fa-link mr-1"}),t.slug||"-"]})]})]})}),e.jsx("td",{className:"text-muted small",children:t.description||"-"}),e.jsx("td",{children:e.jsxs("div",{className:"d-flex justify-content-center gap-2",children:[e.jsxs(c,{href:`/admin/landing-pages/${t.slug||t.id}/edit`,className:"btn btn-info btn-sm",title:"Edit Page",children:[e.jsx(b,{size:14,className:"mr-1"}),"Edit"]}),e.jsxs("a",{href:t.frontend_url||"#",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline-secondary btn-sm",title:"View Page",children:[e.jsx(x,{size:14,className:"mr-1"}),"View"]})]})})]},t.slug||t.id||a)):e.jsx("tr",{children:e.jsxs("td",{colSpan:"5",className:"text-center py-5",children:[e.jsx("i",{className:"fas fa-file-alt fa-3x text-muted mb-3 d-block"}),e.jsx("h5",{className:"text-muted",children:"No landing pages found"}),e.jsx("p",{className:"text-muted small",children:"No pages match your search criteria."})]})})})]})})}),s&&r.links&&r.data&&r.data.length>0&&e.jsx("div",{className:"card-footer bg-light border-top",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center flex-wrap",children:[e.jsxs("div",{className:"text-muted small",children:[e.jsx("i",{className:"fas fa-info-circle mr-1"}),"Showing ",r.from," to ",r.to," of ",r.total," entries"]}),e.jsx("nav",{children:e.jsx("ul",{className:"pagination mb-0",children:r.links.map((t,a)=>e.jsx("li",{className:`page-item ${t.active?"active":""} ${t.url?"":"disabled"}`,children:e.jsx(c,{href:t.url||"#",className:"page-link",dangerouslySetInnerHTML:{__html:t.label}})},a))})})]})})]})}),e.jsx("style",{jsx:!0,children:`
                .card {
                    border-radius: 12px;
                    border: 1px solid #e9ecef;
                    overflow: hidden;
                }
                .card-header {
                    padding: 16px 20px;
                }
                .card-body {
                    padding: 20px;
                }
                .card-footer {
                    padding: 12px 20px;
                }
                .bg-light {
                    background-color: #f8f9fa !important;
                }
                .bg-white {
                    background-color: #ffffff !important;
                }
                .shadow-sm {
                    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075) !important;
                }
                .table td {
                    padding: 12px 16px;
                    vertical-align: middle;
                }
                .table th {
                    padding: 12px 16px;
                    font-weight: 600;
                    text-transform: uppercase;
                    font-size: 0.75rem;
                    letter-spacing: 0.5px;
                    color: #495057;
                }
                .table-hover tbody tr:hover {
                    background-color: #f8f9ff;
                    transition: all 0.2s ease;
                }
                .badge {
                    font-weight: 500;
                    font-size: 0.8rem;
                    padding: 4px 10px;
                    border-radius: 20px;
                }
                .badge-success {
                    background-color: #28a745;
                    color: #fff;
                }
                .badge-secondary {
                    background-color: #6c757d;
                    color: #fff;
                }
                .badge-info {
                    background-color: #17a2b8;
                    color: #fff;
                }
                .btn-sm {
                    padding: 6px 14px;
                    font-size: 0.85rem;
                    border-radius: 6px;
                }
                .btn-info {
                    background-color: #17a2b8;
                    border-color: #17a2b8;
                    color: #fff;
                }
                .btn-info:hover {
                    background-color: #138496;
                    border-color: #117a8b;
                    color: #fff;
                }
                .btn-outline-secondary {
                    color: #6c757d;
                    border-color: #6c757d;
                }
                .btn-outline-secondary:hover {
                    background-color: #6c757d;
                    color: #fff;
                }
                .btn-primary {
                    background-color: #007bff;
                    border-color: #007bff;
                    color: #fff;
                }
                .btn-primary:hover {
                    background-color: #0069d9;
                    border-color: #0062cc;
                    color: #fff;
                }
                .btn-default {
                    background-color: #f8f9fa;
                    border-color: #ddd;
                    color: #333;
                }
                .btn-default:hover {
                    background-color: #e9ecef;
                    border-color: #ccc;
                }
                .custom-switch .custom-control-input:checked ~ .custom-control-label::before {
                    background-color: #28a745;
                    border-color: #28a745;
                }
                .custom-control-label {
                    cursor: pointer;
                }
                .gap-2 {
                    gap: 8px;
                }
                .rounded-circle {
                    border-radius: 50% !important;
                }
                .fw-semibold {
                    font-weight: 600;
                }
                .font-weight-bold {
                    font-weight: 700;
                }
                .text-muted {
                    color: #6c757d !important;
                }
                .page-item.active .page-link {
                    background-color: #007bff;
                    border-color: #007bff;
                    color: #fff;
                }
                .page-link {
                    color: #007bff;
                }
                .page-link:hover {
                    color: #0056b3;
                }
                .border-top {
                    border-top: 1px solid #dee2e6 !important;
                }
                .border-bottom {
                    border-bottom: 1px solid #dee2e6 !important;
                }
                .form-control:focus {
                    border-color: #007bff;
                    box-shadow: 0 0 0 0.2rem rgba(0,123,255,0.25);
                }
                .btn-block {
                    width: 100%;
                }
                @media (max-width: 768px) {
                    .table {
                        font-size: 0.85rem;
                    }
                    .btn-sm {
                        padding: 4px 10px;
                        font-size: 0.75rem;
                    }
                    .gap-2 {
                        gap: 4px;
                    }
                    .card-footer .d-flex {
                        flex-direction: column;
                        gap: 10px;
                    }
                }
            `})]})};export{S as default};
