import{u as v,r as N,j as e,H as y,L as h,a as n}from"./app-BtfmuS4E.js";import{A as k}from"./AdminLayout-hnGvtxRe.js";function S({colleges:r,filters:c}){const{data:t,setData:o}=v({search:c?.search||"",status:c?.status||"",sort_field:c?.sort_field||"created_at",sort_direction:c?.sort_direction||"desc"}),[i,b]=N.useState(!1),u=s=>{const a=t.sort_field===s&&t.sort_direction==="asc"?"desc":"asc";o({...t,sort_field:s,sort_direction:a}),n.get("/admin/iti-colleges",{...t,sort_field:s,sort_direction:a},{preserveState:!0,replace:!0})},d=()=>{const s={};t.search&&(s.search=t.search),t.status&&(s.status=t.status),t.sort_field&&(s.sort_field=t.sort_field),t.sort_direction&&(s.sort_direction=t.sort_direction),n.get("/admin/iti-colleges",s,{preserveState:!0,replace:!0})},m=()=>{o({search:"",status:"",sort_field:"created_at",sort_direction:"desc"}),n.get("/admin/iti-colleges",{},{preserveState:!0,replace:!0})},x=s=>t.sort_field!==s?"fas fa-sort":t.sort_direction==="asc"?"fas fa-sort-up":"fas fa-sort-down",f=s=>{confirm(`Are you sure you want to ${s.is_active?"deactivate":"activate"} this ITI?`)&&n.put(`/admin/iti-colleges/${s.id}/toggle-status`,{is_active:!s.is_active},{preserveState:!0,preserveScroll:!0,onSuccess:()=>{console.log("Status updated successfully")},onError:a=>{console.error("Error updating status:",a)}})},p=(s,a)=>{a.preventDefault(),confirm("Are you sure you want to permanently delete this ITI? This action cannot be undone!")&&n.delete(`/admin/iti-colleges/${s}`,{preserveState:!0,preserveScroll:!0,onSuccess:()=>{console.log("ITI deleted permanently")},onError:l=>{console.error("Error deleting ITI:",l)}})},j=s=>{const a=r.current_page||1,l=r.per_page||10;return(a-1)*l+s+1},g=s=>s?s.charAt(0).toUpperCase()+s.slice(1):"-";return e.jsxs(k,{header:"ITI Colleges",children:[e.jsx(y,{title:"ITI Colleges"}),e.jsxs("div",{className:"container-fluid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("h3",{className:"card-title",children:[e.jsx("i",{className:"fas fa-filter mr-2"})," Filters"]}),e.jsx("div",{className:"card-tools",children:e.jsx("button",{type:"button",className:"btn btn-tool",onClick:()=>b(!i),children:e.jsx("i",{className:`fas ${i?"fa-minus":"fa-plus"}`})})})]}),i&&e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-5",children:[e.jsx("label",{children:"Search"}),e.jsx("input",{className:"form-control",placeholder:"Search by name, address or phone...",value:t.search,onChange:s=>o("search",s.target.value),onKeyPress:s=>s.key==="Enter"&&d()})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{children:"Status"}),e.jsxs("select",{className:"form-control",value:t.status,onChange:s=>o("status",s.target.value),children:[e.jsx("option",{value:"",children:"All Status"}),e.jsx("option",{value:"1",children:"Active"}),e.jsx("option",{value:"0",children:"Inactive"})]})]}),e.jsxs("div",{className:"col-md-3",children:[e.jsx("label",{children:" "}),e.jsxs("button",{className:"btn btn-primary btn-block",onClick:d,children:[e.jsx("i",{className:"fas fa-filter mr-1"})," Apply"]})]})]}),e.jsxs("div",{className:"mt-3 d-flex justify-content-between",children:[e.jsx("div",{children:e.jsxs("button",{className:"btn btn-default",onClick:m,children:[e.jsx("i",{className:"fas fa-redo mr-1"})," Reset"]})}),e.jsxs("div",{className:"text-muted",children:["Total: ",r.total]})]})]})]}),e.jsxs("div",{className:"card mt-3",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("h3",{className:"card-title",children:[e.jsx("i",{className:"fas fa-list mr-2"})," ITI Colleges List"]}),e.jsx("div",{className:"card-tools",children:e.jsxs(h,{href:"/admin/iti-colleges/create",className:"btn btn-primary btn-sm",children:[e.jsx("i",{className:"fas fa-plus"})," Add ITI"]})})]}),(c.search||c.status)&&e.jsxs("div",{className:"p-3 bg-light border-bottom",children:[e.jsx("small",{className:"text-muted mr-2",children:"Active Filters:"}),c.search&&e.jsxs("span",{className:"badge badge-info mr-2",children:['Search: "',c.search,'"',e.jsx("button",{className:"btn btn-xs btn-light ml-1",onClick:()=>{o("search",""),d()},children:"×"})]}),c.status&&e.jsxs("span",{className:"badge badge-info mr-2",children:["Status: ",c.status==="1"?"Active":"Inactive",e.jsx("button",{className:"btn btn-xs btn-light ml-1",onClick:()=>{o("status",""),d()},children:"×"})]})]}),e.jsx("div",{className:"card-body table-responsive",children:e.jsxs("table",{className:"table table-bordered table-hover",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"60px"},children:"S.No"}),e.jsxs("th",{style:{cursor:"pointer"},onClick:()=>u("name"),children:["Name ",e.jsx("i",{className:x("name")})]}),e.jsx("th",{style:{width:"120px"},children:"Type"}),e.jsx("th",{children:"Address"}),e.jsx("th",{style:{width:"130px"},children:"Phone"}),e.jsx("th",{style:{width:"100px"},children:"Trades"}),e.jsx("th",{style:{width:"140px",textAlign:"center"},children:"Status"}),e.jsx("th",{style:{width:"120px",textAlign:"center"},children:"Actions"})]})}),e.jsx("tbody",{children:r.data&&r.data.length?r.data.map((s,a)=>e.jsxs("tr",{children:[e.jsx("td",{children:j(a)}),e.jsx("td",{children:e.jsx("span",{className:"font-weight-medium",children:s.name})}),e.jsx("td",{children:e.jsx("span",{className:"badge badge-info",children:g(s.type)})}),e.jsx("td",{children:s.address||e.jsx("span",{className:"text-muted",children:"-"})}),e.jsx("td",{children:s.phone||e.jsx("span",{className:"text-muted",children:"-"})}),e.jsx("td",{children:e.jsx("span",{className:"badge badge-success",children:s.trades_count||0})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsxs("div",{className:"custom-control custom-switch d-inline-block",children:[e.jsx("input",{type:"checkbox",className:"custom-control-input",id:`status-switch-${s.id}`,checked:s.is_active===1||s.is_active===!0,onChange:()=>f(s)}),e.jsx("label",{className:"custom-control-label",htmlFor:`status-switch-${s.id}`,children:e.jsxs("span",{className:`badge ${s.is_active?"badge-success":"badge-secondary"}`,children:[e.jsx("i",{className:`fas ${s.is_active?"fa-check-circle":"fa-times-circle"} mr-1`}),s.is_active?"Active":"Inactive"]})})]})}),e.jsx("td",{children:e.jsxs("div",{className:"btn-group",children:[e.jsx(h,{href:`/admin/iti-colleges/${s.id}/edit`,className:"btn btn-info btn-sm",title:"Edit",children:e.jsx("i",{className:"fas fa-edit"})}),e.jsx("button",{onClick:l=>p(s.id,l),className:"btn btn-dark btn-sm",title:"Permanently Delete",children:e.jsx("i",{className:"fas fa-trash"})})]})})]},s.id)):e.jsx("tr",{children:e.jsxs("td",{colSpan:"8",className:"text-center p-4 text-muted",children:[e.jsx("i",{className:"fas fa-building fa-2x d-block mb-2"}),"No ITI Colleges found"]})})})]})}),e.jsx("div",{className:"card-footer",children:r.links&&r.data&&r.data.length>0&&e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsxs("div",{className:"text-muted",children:["Showing ",r.from," to ",r.to," of ",r.total," entries"]}),e.jsx("nav",{children:e.jsx("ul",{className:"pagination mb-0",children:r.links.map((s,a)=>e.jsx("li",{className:`page-item ${s.active?"active":""} ${s.url?"":"disabled"}`,children:e.jsx(h,{href:s.url||"#",className:"page-link",dangerouslySetInnerHTML:{__html:s.label}})},a))})})]})})]})]}),e.jsx("style",{jsx:!0,children:`
                .table tbody td {
                    vertical-align: middle;
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
                .btn-group .btn {
                    margin: 0 2px;
                }
                .bg-light {
                    background-color: #f8f9fa !important;
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
                .font-weight-medium {
                    font-weight: 500;
                }
                .text-muted {
                    color: #6c757d !important;
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
            `})]})}export{S as default};
