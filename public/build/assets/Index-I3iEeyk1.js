import{j as e,H as i,r as d,L as a}from"./app-CaCW13Kp.js";import{A as t}from"./AdminLayout-Dx8e-5PL.js";const c={all:"All",government:"Government Announcements",scholarships:"Scholarships & Financial Aid",exams:"Exams & Results",career:"Career Guidance"};function x({news:l=[],filters:n={}}){return e.jsxs(t,{header:"News Management",children:[e.jsx(i,{title:"News"}),e.jsxs("div",{className:"container-fluid",children:[e.jsx("div",{className:"card mb-3",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("select",{className:"form-control",value:n.category||"",onChange:s=>d.get("/admin/news",{category:s.target.value},{preserveState:!0}),children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"government",children:"Government"}),e.jsx("option",{value:"scholarships",children:"Scholarships"}),e.jsx("option",{value:"exams",children:"Exams"}),e.jsx("option",{value:"career",children:"Career"})]})}),e.jsx("div",{className:"col-md-8 d-flex justify-content-end",children:e.jsxs(a,{href:route("admin.news.create"),className:"btn btn-primary",children:[e.jsx("i",{className:"fas fa-plus mr-1"})," Add News"]})})]})})}),e.jsx("div",{className:"row",children:l.length?l.map(s=>e.jsx("div",{className:"col-md-4 mb-4",children:e.jsxs("div",{className:"card news-card h-100",children:[e.jsxs("div",{className:"card-body",children:[e.jsx("span",{className:"badge badge-info mb-2",children:c[s.category]}),e.jsx("h5",{className:"fw-semibold line-clamp-2",children:s.title}),e.jsx("small",{className:"text-muted d-block mb-2",children:s.date}),e.jsx("p",{className:"text-muted small line-clamp-3",children:s.description})]}),e.jsxs("div",{className:"card-footer d-flex justify-content-between",children:[e.jsx(a,{href:route("admin.news.edit",s.id),className:"btn btn-sm btn-info",children:"Edit"}),e.jsx(a,{href:route("admin.news.destroy",s.id),method:"delete",as:"button",className:"btn btn-sm btn-danger",onClick:r=>{confirm("Delete this news?")||r.preventDefault()},children:"Delete"})]})]})},s.id)):e.jsx("div",{className:"col-12 text-center text-muted py-5",children:"No news found"})})]}),e.jsx("style",{jsx:!0,children:`
        .news-card {
          border-radius: 16px;
          transition: 0.3s;
          border: 1px solid #eee;
        }

        .news-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
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
      `})]})}export{x as default};
