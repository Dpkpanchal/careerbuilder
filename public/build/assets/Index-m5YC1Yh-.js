import{u as j,r as v,j as e,H as N,L as m,a as n}from"./app-ekFhAMhI.js";import{A as y}from"./AdminLayout-_JU_bKX6.js";function _({categories:t,filters:o}){const{data:r,setData:c}=j({search:o.search||"",status:o.status||"",sort_field:o.sort_field||"created_at",sort_direction:o.sort_direction||"desc"}),[i,h]=v.useState(!1),d=()=>{const s={};r.search&&(s.search=r.search),r.status&&(s.status=r.status),r.sort_field&&(s.sort_field=r.sort_field),r.sort_direction&&(s.sort_direction=r.sort_direction),n.get("/admin/forum-categories",s,{preserveState:!0,replace:!0})},f=()=>{c({search:"",status:"",sort_field:"created_at",sort_direction:"desc"}),n.get("/admin/forum-categories",{},{preserveState:!0,replace:!0})},u=s=>{const a=r.sort_field===s&&r.sort_direction==="asc"?"desc":"asc";c({...r,sort_field:s,sort_direction:a}),n.get("/admin/forum-categories",{...r,sort_field:s,sort_direction:a},{preserveState:!0,replace:!0})},b=s=>r.sort_field!==s?"fas fa-sort":r.sort_direction==="asc"?"fas fa-sort-up":"fas fa-sort-down",x=s=>{confirm(`Are you sure you want to ${s.status?"deactivate":"activate"} this category?`)&&n.put(`/admin/forum-categories/${s.id}/toggle-status`,{status:!s.status},{preserveState:!0,preserveScroll:!0,onSuccess:()=>{console.log("Status updated successfully")},onError:a=>{console.error("Error updating status:",a)}})},p=s=>{const a=t.current_page||1,l=t.per_page||10;return(a-1)*l+s+1},g=(s,a)=>{a.preventDefault(),confirm("Are you sure you want to permanently delete this category? This action cannot be undone!")&&n.delete(`/admin/forum-categories/${s}`,{preserveState:!0,preserveScroll:!0,onSuccess:()=>{console.log("Category deleted permanently")},onError:l=>{console.error("Error deleting category:",l)}})};return e.jsxs(y,{header:"Forum Category Management",children:[e.jsx(N,{title:"Forum Categories"}),e.jsxs("div",{className:"container-fluid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("h3",{className:"card-title",children:[e.jsx("i",{className:"fas fa-filter mr-2"})," Filters"]}),e.jsx("div",{className:"card-tools",children:e.jsx("button",{type:"button",className:"btn btn-tool",onClick:()=>h(!i),children:e.jsx("i",{className:`fas ${i?"fa-minus":"fa-plus"}`})})})]}),i&&e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Search"}),e.jsx("input",{type:"text",className:"form-control",value:r.search,placeholder:"Search forum category...",onChange:s=>c("search",s.target.value),onKeyPress:s=>s.key==="Enter"&&d()})]})}),e.jsx("div",{className:"col-md-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Status"}),e.jsxs("select",{className:"form-control",value:r.status,onChange:s=>c("status",s.target.value),children:[e.jsx("option",{value:"",children:"All Status"}),e.jsx("option",{value:"1",children:"Active"}),e.jsx("option",{value:"0",children:"Inactive"})]})]})}),e.jsx("div",{className:"col-md-2",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:" "}),e.jsxs("button",{type:"button",className:"btn btn-primary btn-block",onClick:d,children:[e.jsx("i",{className:"fas fa-filter mr-1"})," Apply"]})]})})]}),e.jsx("div",{className:"row mt-2",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("div",{children:e.jsxs("button",{type:"button",className:"btn btn-default",onClick:f,children:[e.jsx("i",{className:"fas fa-redo mr-1"}),"Reset"]})}),e.jsxs("div",{className:"text-muted",children:["Total: ",t.total]})]})})})]})]}),e.jsxs("div",{className:"card mt-3",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("h3",{className:"card-title",children:[e.jsx("i",{className:"fas fa-list mr-2"})," Forum Category List"]}),e.jsx("div",{className:"card-tools",children:e.jsxs(m,{href:"/admin/forum-categories/create",className:"btn btn-primary btn-sm",children:[e.jsx("i",{className:"fas fa-plus mr-1"})," Add Forum Category"]})})]}),e.jsxs("div",{className:"card-body p-0",children:[(o.search||o.status)&&e.jsxs("div",{className:"p-3 bg-light border-bottom",children:[e.jsx("small",{className:"text-muted mr-2",children:"Active Filters:"}),o.search&&e.jsxs("span",{className:"badge badge-info mr-2",children:['Search: "',o.search,'"',e.jsx("button",{className:"btn btn-xs btn-light ml-1",onClick:()=>{c("search",""),d()},children:"×"})]}),o.status&&e.jsxs("span",{className:"badge badge-info mr-2",children:["Status: ",o.status==="1"?"Active":"Inactive",e.jsx("button",{className:"btn btn-xs btn-light ml-1",onClick:()=>{c("status",""),d()},children:"×"})]})]}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-bordered table-hover mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"70px"},children:"S.No"}),e.jsxs("th",{style:{cursor:"pointer"},onClick:()=>u("name"),children:["Name ",e.jsx("i",{className:b("name")})]}),e.jsxs("th",{style:{cursor:"pointer"},onClick:()=>u("slug"),children:["Slug ",e.jsx("i",{className:b("slug")})]}),e.jsx("th",{style:{width:"150px",textAlign:"center"},children:"Status"}),e.jsx("th",{style:{width:"120px",textAlign:"center"},children:"Actions"})]})}),e.jsx("tbody",{children:t.data&&t.data.length>0?t.data.map((s,a)=>e.jsxs("tr",{children:[e.jsx("td",{children:p(a)}),e.jsx("td",{children:s.name}),e.jsx("td",{children:e.jsx("code",{className:"bg-light px-2 py-1 rounded",children:s.slug})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsxs("div",{className:"custom-control custom-switch d-inline-block",children:[e.jsx("input",{type:"checkbox",className:"custom-control-input",id:`status-switch-${s.id}`,checked:s.status===1||s.status===!0,onChange:()=>x(s)}),e.jsx("label",{className:"custom-control-label",htmlFor:`status-switch-${s.id}`,children:e.jsx("span",{className:`badge ${s.status?"badge-success":"badge-secondary"}`,children:s.status?"Active":"Inactive"})})]})}),e.jsx("td",{children:e.jsxs("div",{className:"btn-group",children:[e.jsx(m,{href:`/admin/forum-categories/${s.id}/edit`,className:"btn btn-info btn-sm",title:"Edit",children:e.jsx("i",{className:"fas fa-edit"})}),e.jsx("button",{onClick:l=>g(s.id,l),className:"btn btn-dark btn-sm",title:"Permanently Delete",children:e.jsx("i",{className:"fas fa-trash"})})]})})]},s.id)):e.jsx("tr",{children:e.jsxs("td",{colSpan:"5",className:"text-center py-4",children:[e.jsx("i",{className:"fas fa-folder-open fa-2x text-muted mb-2 d-block"}),e.jsx("p",{className:"text-muted",children:"No forum categories found."})]})})})]})}),t.links&&t.data&&t.data.length>0&&e.jsx("div",{className:"p-3 bg-light border-top",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsxs("div",{className:"text-muted",children:["Showing ",t.from," to ",t.to," of ",t.total," entries"]}),e.jsx("nav",{children:e.jsx("ul",{className:"pagination mb-0",children:t.links.map((s,a)=>e.jsx("li",{className:`page-item ${s.active?"active":""} ${s.url?"":"disabled"}`,children:e.jsx(m,{href:s.url||"#",className:"page-link",dangerouslySetInnerHTML:{__html:s.label}})},a))})})]})})]})]})]}),e.jsx("style",{jsx:!0,children:`
                .table tbody td {
                    vertical-align: middle;
                }
                .badge {
                    font-weight: 500;
                    font-size: 0.8rem;
                    padding: 4px 10px;
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
                .btn-tool {
                    color: #495057;
                }
                .btn-tool:hover {
                    color: #212529;
                }
                .custom-control-label {
                    cursor: pointer;
                }
                .custom-switch .custom-control-input:checked ~ .custom-control-label::before {
                    background-color: #28a745;
                    border-color: #28a745;
                }
                code {
                    font-size: 0.85rem;
                    color: #6c757d;
                    background-color: #f8f9fa;
                    padding: 2px 8px;
                    border-radius: 4px;
                }
                .btn-group .btn {
                    margin: 0 2px;
                }
                .bg-light {
                    background-color: #f8f9fa !important;
                }
                .border-top {
                    border-top: 1px solid #dee2e6 !important;
                }
                .border-bottom {
                    border-bottom: 1px solid #dee2e6 !important;
                }
                .btn-block {
                    width: 100%;
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
                .table-bordered {
                    border: 1px solid #dee2e6;
                }
                .table-hover tbody tr:hover {
                    background-color: rgba(0,0,0,0.03);
                }
                .card {
                    border-radius: 8px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
                }
                .card-header {
                    background-color: #f8f9fa;
                    border-bottom: 1px solid #dee2e6;
                    padding: 12px 20px;
                }
                .card-title {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin: 0;
                    color: #333;
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
                @media (max-width: 768px) {
                    .table {
                        font-size: 0.85rem;
                    }
                    .btn-group .btn {
                        padding: 4px 8px;
                        font-size: 0.75rem;
                    }
                }
            `})]})}export{_ as default};
