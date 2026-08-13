import{j as e,H as f,L as i,a as l}from"./app-BtfmuS4E.js";import{A as m}from"./AdminLayout-hnGvtxRe.js";function x({domains:r=[]}){const c=a=>{confirm(`Are you sure you want to ${a.is_active?"deactivate":"activate"} this career domain?`)&&l.put(`/admin/career-domains/${a.id}/toggle-status`,{is_active:!a.is_active},{preserveState:!0,preserveScroll:!0,onSuccess:()=>{console.log("Status updated successfully")},onError:o=>{console.error("Error updating status:",o)}})},n=(a,o)=>{o.preventDefault(),confirm("Are you sure you want to permanently delete this career domain? This action cannot be undone!")&&l.delete(`/admin/career-domains/${a}`,{preserveState:!0,preserveScroll:!0,onSuccess:()=>{console.log("Domain deleted permanently")},onError:s=>{console.error("Error deleting domain:",s)}})},t=r.data||r,d=r.data!==void 0;return e.jsxs(m,{header:"Career Domains",children:[e.jsx(f,{title:"Career Domains"}),e.jsx("div",{className:"card",children:e.jsx("div",{className:"card-body d-flex justify-content-between align-items-center",children:e.jsxs(i,{href:route("admin.career-domains.create"),className:"btn btn-primary",style:{marginLeft:"auto"},children:[e.jsx("i",{className:"fas fa-plus mr-1"})," Add Career Domain"]})})}),e.jsx("div",{className:"card mt-3",children:e.jsxs("div",{className:"card-body",children:[e.jsx("div",{className:"row",children:t&&t.length>0?t.map((a,o)=>e.jsx("div",{className:"col-md-4 mb-4",children:e.jsxs("div",{className:"card domain-card h-100 shadow-sm",children:[e.jsxs("div",{className:"position-relative",children:[e.jsx("img",{src:a.image?`/storage/${a.image}`:"/images/default.png",className:"card-img-top",style:{height:200,objectFit:"contain",background:"#f8f9fa",padding:"10px"},alt:a.title}),e.jsxs("span",{role:"button",onClick:()=>c(a),className:`position-absolute badge ${a.is_active?"badge-success":"badge-secondary"}`,style:{top:"10px",right:"10px",padding:"6px 12px",fontSize:"0.75rem",cursor:"pointer",borderRadius:"20px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},title:a.is_active?"Active — click to deactivate":"Inactive — click to activate",children:[e.jsx("i",{className:`fas ${a.is_active?"fa-check-circle":"fa-times-circle"} mr-1`}),a.is_active?"Active":"Inactive"]})]}),e.jsxs("div",{className:"card-body d-flex flex-column",children:[e.jsx("h5",{className:"fw-bold domain-title line-clamp-1",children:a.title}),e.jsxs("p",{className:"text-muted small mb-2",children:[e.jsx("i",{className:"fas fa-tag mr-1"}),a.subtitle||"No subtitle"]}),e.jsxs("p",{className:"text-muted small flex-grow-1 line-clamp-3",children:[a.details?.substring(0,120),"..."]})]}),e.jsxs("div",{className:"card-footer d-flex justify-content-between align-items-center",children:[e.jsxs(i,{href:route("admin.career-domains.edit",a.id),className:"btn btn-info btn-sm",title:"Edit",children:[e.jsx("i",{className:"fas fa-edit"})," Edit"]}),e.jsxs("button",{onClick:s=>n(a.id,s),className:"btn btn-dark btn-sm",title:"Permanently Delete",style:{marginLeft:"auto"},children:[e.jsx("i",{className:"fas fa-trash"})," Delete"]})]})]})},a.id)):e.jsxs("div",{className:"col-12 text-center py-5",children:[e.jsx("i",{className:"fas fa-folder-open fa-3x text-muted mb-3 d-block"}),e.jsx("h5",{className:"text-muted",children:"No career domains found"}),e.jsx("p",{className:"text-muted",children:'Click "Add Career Domain" to create one.'})]})}),d&&r.links&&r.data&&r.data.length>0&&e.jsxs("div",{className:"d-flex justify-content-between align-items-center mt-3 pt-3 border-top",children:[e.jsxs("div",{className:"text-muted",children:["Showing ",r.from," to ",r.to," of ",r.total," entries"]}),e.jsx("nav",{children:e.jsx("ul",{className:"pagination mb-0",children:r.links.map((a,o)=>e.jsx("li",{className:`page-item ${a.active?"active":""} ${a.url?"":"disabled"}`,children:e.jsx(i,{href:a.url||"#",className:"page-link",dangerouslySetInnerHTML:{__html:a.label}})},o))})})]})]})}),e.jsx("style",{jsx:!0,children:`
                .domain-card {
                    border-radius: 12px;
                    transition: all 0.3s ease;
                    border: 1px solid #e9ecef;
                    overflow: hidden;
                }
                .domain-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
                    border-color: #dee2e6;
                }
                .card-img-top {
                    border-bottom: 1px solid #e9ecef;
                }
                .domain-title {
                    color: #2c3e50;
                    font-size: 1.1rem;
                }
                .line-clamp-1 {
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .badge-success {
                    background-color: #28a745;
                    color: #fff;
                }
                .badge-secondary {
                    background-color: #6c757d;
                    color: #fff;
                }
                .btn-sm {
                    padding: 6px 12px;
                    font-size: 0.85rem;
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
                .btn-dark {
                    background-color: #343a40;
                    border-color: #343a40;
                    color: #fff;
                }
                .btn-dark:hover {
                    background-color: #23272b;
                    border-color: #1d2124;
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
                .card-footer {
                    background: #f8f9fa;
                    border-top: 1px solid #e9ecef;
                    padding: 12px 16px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .position-relative {
                    position: relative;
                }
                .position-absolute {
                    position: absolute;
                }
                .shadow-sm {
                    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075) !important;
                }
                .border-top {
                    border-top: 1px solid #dee2e6 !important;
                }
                .flex-grow-1 {
                    flex: 1 1 auto;
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
                .card-body {
                    display: flex;
                    flex-direction: column;
                }
                /* Delete button corner alignment */
                .card-footer .btn-dark {
                    margin-left: auto;
                }
                @media (max-width: 768px) {
                    .domain-card {
                        margin-bottom: 1rem;
                    }
                    .btn-sm {
                        padding: 4px 8px;
                        font-size: 0.75rem;
                    }
                    .card-footer {
                        flex-wrap: wrap;
                        gap: 8px;
                    }
                    .card-footer .btn-dark {
                        margin-left: auto;
                    }
                }
            `})]})}export{x as default};
