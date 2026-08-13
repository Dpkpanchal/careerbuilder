import{r as m,u as j,j as e,H as y,a as n,L as d}from"./app-BtfmuS4E.js";import{A as v}from"./AdminLayout-hnGvtxRe.js";function w({news:s=[],categories:l=[],filters:b={}}){const[f,r]=m.useState(!1),[o,c]=m.useState(null),t=j({name:""}),u=()=>{c(null),t.reset(),t.clearErrors(),r(!0)},x=a=>{c(a),t.setData("name",a.name),t.clearErrors(),r(!0)},g=a=>{a.preventDefault(),o?t.patch(route("admin.news-categories.update",o.id),{preserveScroll:!0,onSuccess:()=>{r(!1),t.reset()}}):t.post(route("admin.news-categories.store"),{preserveScroll:!0,onSuccess:()=>{r(!1),t.reset()}})},p=a=>{confirm(`Delete category "${a.name}"?`)&&n.delete(route("admin.news-categories.destroy",a.id),{preserveScroll:!0})},h=a=>{confirm(`Are you sure you want to ${a.is_active?"deactivate":"activate"} this news?`)&&n.patch(route("admin.news.toggle-status",a.id),{is_active:!a.is_active},{preserveScroll:!0})};return e.jsxs(v,{header:"News Management",children:[e.jsx(y,{title:"News"}),e.jsxs("div",{className:"container-fluid",children:[e.jsx("div",{className:"card mb-3",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("select",{className:"form-control",value:b.category||"",onChange:a=>n.get("/admin/news",{category:a.target.value},{preserveState:!0}),children:[e.jsx("option",{value:"",children:"All Categories"}),l.map(a=>e.jsx("option",{value:a.slug,children:a.name},a.id))]})}),e.jsxs("div",{className:"col-md-8 d-flex justify-content-end gap-2",children:[e.jsxs("button",{type:"button",className:"btn btn-outline-secondary",onClick:u,children:[e.jsx("i",{className:"fas fa-tags mr-1"})," Manage Categories"]}),e.jsxs(d,{href:route("admin.news.create"),className:"btn btn-primary",children:[e.jsx("i",{className:"fas fa-plus mr-1"})," Add News"]})]})]})})}),e.jsx("div",{className:"row",children:s.length?s.map(a=>e.jsx("div",{className:"col-md-4 mb-4",children:e.jsxs("div",{className:"card news-card h-100",children:[e.jsxs("div",{className:"card-body d-flex flex-column",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-2",children:[e.jsx("span",{className:"badge badge-info",children:a.category?.name||"Uncategorized"}),e.jsxs("span",{role:"button",onClick:()=>h(a),className:`badge ${a.is_active?"badge-success":"badge-secondary"}`,style:{cursor:"pointer"},title:a.is_active?"Active — click to deactivate":"Inactive — click to activate",children:[e.jsx("i",{className:`fas ${a.is_active?"fa-check-circle":"fa-times-circle"} mr-1`}),a.is_active?"Active":"Inactive"]})]}),e.jsx("h5",{className:"fw-semibold line-clamp-2",children:a.title}),e.jsxs("small",{className:"text-muted d-block mb-2",children:[e.jsx("i",{className:"far fa-calendar-alt mr-1"})," ",a.date]}),e.jsx("p",{className:"text-muted small line-clamp-3 flex-grow-1",children:a.description})]}),e.jsxs("div",{className:"card-footer d-flex justify-content-between align-items-center",children:[e.jsxs(d,{href:route("admin.news.edit",a.id),className:"btn btn-sm btn-info",children:[e.jsx("i",{className:"fas fa-edit"})," Edit"]}),e.jsxs("button",{onClick:i=>{i.preventDefault(),confirm("Are you sure you want to permanently delete this news?")&&n.delete(route("admin.news.destroy",a.id),{preserveScroll:!0})},className:"btn btn-sm btn-dark",style:{marginLeft:"auto"},children:[e.jsx("i",{className:"fas fa-trash"})," Delete"]})]})]})},a.id)):e.jsxs("div",{className:"col-12 text-center text-muted py-5",children:[e.jsx("i",{className:"fas fa-newspaper fa-3x mb-3 d-block"}),e.jsx("p",{children:"No news found"})]})}),s.links&&s.links.length>1&&e.jsx("div",{className:"d-flex justify-content-end mt-3",children:e.jsx("nav",{children:e.jsx("ul",{className:"pagination mb-0",children:s.links.map((a,i)=>e.jsx("li",{className:`page-item ${a.active?"active":""} ${a.url?"":"disabled"}`,children:e.jsx(d,{href:a.url||"#",className:"page-link",dangerouslySetInnerHTML:{__html:a.label}})},i))})})})]}),f&&e.jsx("div",{className:"modal d-block",style:{background:"rgba(0,0,0,0.5)",position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:9999},onClick:()=>r(!1),children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",style:{maxWidth:"500px",margin:"1.75rem auto"},onClick:a=>a.stopPropagation(),children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header d-flex justify-content-between align-items-center",children:[e.jsx("h5",{className:"modal-title",children:"Manage Categories"}),e.jsx("button",{type:"button",className:"btn-close",onClick:()=>r(!1),style:{background:"none",border:"none",fontSize:"1.5rem",cursor:"pointer"},children:e.jsx("span",{"aria-hidden":"true",children:"×"})})]}),e.jsxs("div",{className:"modal-body",children:[e.jsxs("form",{onSubmit:g,className:"d-flex gap-2 mb-3",children:[e.jsx("input",{type:"text",className:"form-control",placeholder:"Category name",value:t.data.name,onChange:a=>t.setData("name",a.target.value)}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:t.processing,children:o?"Update":"Add"}),o&&e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{c(null),t.reset()},children:"Cancel"})]}),t.errors.name&&e.jsx("div",{className:"text-danger small mb-3",children:t.errors.name}),e.jsxs("ul",{className:"list-group",children:[l.map(a=>e.jsxs("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[e.jsx("span",{children:a.name}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-outline-info",onClick:()=>x(a),children:e.jsx("i",{className:"fas fa-edit"})}),e.jsx("button",{type:"button",className:"btn btn-sm btn-outline-danger",onClick:()=>p(a),children:e.jsx("i",{className:"fas fa-trash"})})]})]},a.id)),l.length===0&&e.jsx("li",{className:"list-group-item text-muted text-center",children:"No categories yet"})]})]})]})})}),e.jsx("style",{jsx:!0,children:`
        .news-card {
          border-radius: 12px;
          transition: all 0.3s ease;
          border: 1px solid #e9ecef;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .news-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-color: #dee2e6;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .gap-2 {
          gap: 0.5rem;
        }
        .card-footer {
          background: #f8f9fa;
          border-top: 1px solid #e9ecef;
          padding: 0.75rem 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
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
        .btn-close {
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        .btn-close:hover {
          opacity: 1;
        }
        .modal-header {
          border-bottom: 1px solid #dee2e6;
          padding: 1rem;
        }
        .modal-body {
          padding: 1rem;
        }
        .modal-dialog {
          max-width: 500px;
          margin: 1.75rem auto;
        }
        .modal-content {
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }
        .flex-grow-1 {
          flex: 1 1 auto;
        }
        .card-body {
          padding: 1.25rem;
        }
        .fw-semibold {
          font-weight: 600;
        }
        .text-muted {
          color: #6c757d !important;
        }
        .small {
          font-size: 0.875rem;
        }
        .d-flex {
          display: flex;
        }
        .justify-content-between {
          justify-content: space-between;
        }
        .align-items-center {
          align-items: center;
        }
        .align-items-start {
          align-items: flex-start;
        }
        .flex-column {
          flex-direction: column;
        }
        .mb-2 {
          margin-bottom: 0.5rem;
        }
        .mb-3 {
          margin-bottom: 1rem;
        }
        .mb-4 {
          margin-bottom: 1.5rem;
        }
        .mt-3 {
          margin-top: 1rem;
        }
        .mr-1 {
          margin-right: 0.25rem;
        }
        .ml-2 {
          margin-left: 0.5rem;
        }
        .py-5 {
          padding-top: 3rem;
          padding-bottom: 3rem;
        }
        .text-center {
          text-align: center;
        }
        .btn-sm {
          padding: 0.25rem 0.5rem;
          font-size: 0.875rem;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
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
        .btn-outline-secondary {
          color: #6c757d;
          border-color: #6c757d;
        }
        .btn-outline-secondary:hover {
          background-color: #6c757d;
          color: #fff;
        }
        .btn-outline-info {
          color: #17a2b8;
          border-color: #17a2b8;
        }
        .btn-outline-info:hover {
          background-color: #17a2b8;
          color: #fff;
        }
        .btn-outline-danger {
          color: #dc3545;
          border-color: #dc3545;
        }
        .btn-outline-danger:hover {
          background-color: #dc3545;
          color: #fff;
        }
        .fa-3x {
          font-size: 3em;
        }
        .d-block {
          display: block !important;
        }
        .gap-2 > * + * {
          margin-left: 0.5rem;
        }
        .card-footer .btn-dark {
          margin-left: auto;
        }
      `})]})}export{w as default};
