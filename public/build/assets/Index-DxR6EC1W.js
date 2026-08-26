import{j as e,H as r,L as i,a as c}from"./app-ekFhAMhI.js";import{A as d}from"./AdminLayout-_JU_bKX6.js";function x({records:t}){const l=s=>{c.patch(route("admin.hero-slides.toggle-status",s.id),{},{preserveScroll:!0})},n=s=>{confirm("Delete this slide?")&&c.delete(route("admin.hero-slides.destroy",s),{preserveScroll:!0})};return e.jsxs(d,{header:"Hero Slides",children:[e.jsx(r,{title:"Hero Slides"}),e.jsx("div",{className:"card",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col-md-4"}),e.jsx("div",{className:"col-md-8 d-flex justify-content-end",children:e.jsxs(i,{href:route("admin.hero-slides.create"),className:"btn btn-primary",children:[e.jsx("i",{className:"fas fa-plus mr-1"})," Add Hero Slide"]})})]})})}),e.jsxs("div",{className:"card mt-3",children:[e.jsx("div",{className:"card-body table-responsive",children:e.jsxs("table",{className:"table table-bordered",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Image"}),e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Sub Title"}),e.jsx("th",{children:"Status"}),e.jsx("th",{width:"160",children:"Action"})]})}),e.jsx("tbody",{children:t.data.length?t.data.map((s,a)=>e.jsxs("tr",{children:[e.jsx("td",{children:t.from+a}),e.jsx("td",{children:s.img_base?e.jsx("img",{src:`/storage/${s.img_base}`,alt:"slide",style:{width:"80px",height:"50px",objectFit:"cover",borderRadius:"4px"}}):e.jsx("span",{className:"text-muted",children:"No Image"})}),e.jsxs("td",{children:[e.jsx("strong",{children:s.title}),e.jsx("br",{}),e.jsx("small",{className:"text-muted",children:s.title_gradient})]}),e.jsx("td",{children:e.jsx("small",{children:s.subtitle||""})}),e.jsx("td",{children:e.jsx("span",{className:`badge ${s.is_active?"bg-success":"bg-secondary"}`,children:s.is_active?"Active":"Inactive"})}),e.jsx("td",{children:e.jsxs("div",{className:"hs-action-group",children:[e.jsx(i,{href:route("admin.hero-slides.edit",s.id),className:"btn btn-primary btn-sm hs-action-btn",title:"Edit",children:e.jsx("i",{className:"fas fa-edit"})}),e.jsx("button",{type:"button",className:`btn btn-sm hs-action-btn ${s.is_active?"btn-success":"btn-secondary"}`,title:s.is_active?"Active — click to deactivate":"Inactive — click to activate",onClick:()=>l(s),children:e.jsx("i",{className:`fas ${s.is_active?"fa-check-circle":"fa-times-circle"}`})}),e.jsx("button",{type:"button",className:"btn btn-dark btn-sm hs-action-btn",title:"Delete",onClick:()=>n(s.id),children:e.jsx("i",{className:"fas fa-trash"})})]})})]},s.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"6",className:"text-center text-muted",children:"No slides found"})})})]})}),e.jsx("div",{className:"card-footer d-flex justify-content-end",children:e.jsx("ul",{className:"pagination mb-0",children:t.links.map((s,a)=>e.jsx("li",{className:`page-item ${s.active?"active":""} ${s.url?"":"disabled"}`,children:e.jsx(i,{href:s.url||"#",className:"page-link",dangerouslySetInnerHTML:{__html:s.label}})},a))})})]}),e.jsx("style",{children:`
        .hs-action-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .hs-action-btn {
          width: 34px;
          height: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          border-radius: 6px;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .hs-action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
        }
      `})]})}export{x as default};
