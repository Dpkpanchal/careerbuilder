import{j as e,H as l,L as n,a as d}from"./app-ekFhAMhI.js";import{A as c}from"./AdminLayout-_JU_bKX6.js";function x({scholarships:s,filters:t}){const i=a=>{confirm("Delete this record?")&&d.delete(route("admin.scholarship-overview-table.destroy",a),{preserveScroll:!0})};return e.jsxs(c,{children:[e.jsx(l,{title:"Scholarship Overview Table"}),e.jsx("style",{children:` .pagination-wrap {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-top: 20px;
                        flex-wrap: wrap;
                        gap: 10px;
                    }

                    .pagination .page-link {
                        border-radius: 6px;
                        margin: 0 2px;
                        color: #4e73df;
                        border: 1px solid #dee2e6;
                        transition: all .2s;
                    }

                    .pagination .page-link:hover {
                        background: #4e73df;
                        color: #fff;
                    }

                    .pagination .page-item.active .page-link {
                        background: #4e73df;
                        border-color: #4e73df;
                        color: #fff;
                    }

                    .pagination .page-item.disabled .page-link {
                        color: #adb5bd;
                        pointer-events: none;
                        background: #f8f9fc;
                    }

                    .pagination-info {
                        font-size: 14px;
                        color: #6c757d;
                    }`}),e.jsxs("div",{className:"container-fluid",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[e.jsx("h3",{children:"Scholarship Overview Table"}),e.jsx(n,{href:route("admin.scholarship-overview-table.create"),className:"btn btn-primary",children:"+ Add Record"})]}),e.jsxs("form",{method:"get",className:"row mb-3",children:[e.jsx("div",{className:"col-md-4",children:e.jsx("input",{type:"text",defaultValue:t.search,name:"search",className:"form-control",placeholder:"Search..."})}),e.jsx("div",{className:"col-md-3",children:e.jsxs("select",{name:"status",defaultValue:t.status,className:"form-control",children:[e.jsx("option",{value:"",children:"All Status"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"inactive",children:"Inactive"})]})}),e.jsx("div",{className:"col-md-2",children:e.jsx("button",{className:"btn btn-secondary w-100",children:"Search"})})]}),e.jsx("div",{className:"card",children:e.jsx("div",{className:"card-body table-responsive",children:e.jsxs("table",{className:"table table-bordered table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Class of Study"}),e.jsx("th",{children:"Website"}),e.jsx("th",{children:"Minimum Marks"}),e.jsx("th",{children:"Family Income"}),e.jsx("th",{children:"Sort"}),e.jsx("th",{children:"Status"}),e.jsx("th",{width:"180",children:"Action"})]})}),e.jsx("tbody",{children:s.data.length>0?s.data.map((a,r)=>e.jsxs("tr",{children:[e.jsx("td",{children:(s.current_page-1)*s.per_page+r+1}),e.jsx("td",{children:a.name}),e.jsx("td",{children:a.class_of_study}),e.jsx("td",{children:a.website?e.jsx("a",{href:a.website,target:"_blank",rel:"noreferrer",children:"Visit"}):"-"}),e.jsx("td",{children:a.minimum_marks}),e.jsx("td",{children:a.annual_family_income}),e.jsx("td",{children:a.sort_order}),e.jsx("td",{children:a.is_active?e.jsx("span",{className:"badge bg-success",children:"Active"}):e.jsx("span",{className:"badge bg-danger",children:"Inactive"})}),e.jsxs("td",{children:[e.jsx(n,{href:route("admin.scholarship-overview-table.edit",a.id),className:"btn btn-outline-info btn-sm mr-1",children:e.jsx("i",{className:"fas fa-edit"})}),e.jsx("button",{className:"btn btn-outline-danger btn-sm",onClick:()=>i(a.id),children:e.jsx("i",{className:"fas fa-trash"})})]})]},a.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"9",className:"text-center",children:"No records found."})})})]})})}),e.jsxs("div",{className:"pagination-wrap",children:[e.jsxs("div",{className:"pagination-info",children:["Showing ",e.jsx("strong",{children:s.from??0})," to"," ",e.jsx("strong",{children:s.to??0})," of"," ",e.jsx("strong",{children:s.total})," entries"]}),e.jsx("nav",{children:e.jsx("ul",{className:"pagination mb-0",children:s.links.map((a,r)=>e.jsx("li",{className:`page-item ${a.active?"active":""} ${a.url?"":"disabled"}`,children:e.jsx(n,{href:a.url||"#",className:"page-link",preserveScroll:!0,preserveState:!0,dangerouslySetInnerHTML:{__html:a.label}})},r))})})]})]})]})}export{x as default};
