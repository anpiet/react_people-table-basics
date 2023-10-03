(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var a=c(22),n=c(6),s=(c(31),c(32),c(2)),r=(c(33),c(3)),l=function(){return Object(r.jsx)("h1",{className:"title",children:"Home Page"})},i=c(4),j=c(0);function o(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(35);var b=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},h=c(20),d=c.n(h),u=function(e){var t,c,a=e.person,s=e.motherSlug,l=e.fatherSlug,i=e.slug;return t=s?Object(r.jsx)(n.b,{to:"/people/".concat(s),className:"has-text-danger",children:a.motherName}):a.motherName?a.motherName:"-",c=l?Object(r.jsx)(n.b,{to:"/people/".concat(l),children:a.fatherName}):a.fatherName?a.fatherName:"-",Object(r.jsxs)("tr",{"data-cy":"person",className:d()({"has-background-warning":a.slug===i}),children:[Object(r.jsx)("td",{children:Object(r.jsx)(n.b,{to:"/people/".concat(a.slug),className:d()({"has-text-danger":"f"===a.sex}),children:a.name})}),Object(r.jsx)("td",{children:a.sex}),Object(r.jsx)("td",{children:a.born}),Object(r.jsx)("td",{children:a.died}),Object(r.jsx)("td",{children:t}),Object(r.jsx)("td",{children:c})]})},x=function(){var e=Object(j.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(j.useState)([]),l=Object(i.a)(n,2),h=l[0],d=l[1],x=Object(j.useState)(!1),O=Object(i.a)(x,2),m=O[0],p=O[1],g=Object(s.q)().slug;return Object(j.useEffect)((function(){a(!0),p(!1),o().then(d).catch((function(){return p(!0)})).finally((function(){return a(!1)}))}),[]),c?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"People Page"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)("div",{className:"box table-container",children:Object(r.jsx)(b,{})})})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"People Page"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsxs)("div",{className:"box table-container",children:[m&&Object(r.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0===h.length&&!1===c&&Object(r.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),Object(r.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Sex"}),Object(r.jsx)("th",{children:"Born"}),Object(r.jsx)("th",{children:"Died"}),Object(r.jsx)("th",{children:"Mother"}),Object(r.jsx)("th",{children:"Father"})]})}),Object(r.jsx)("tbody",{children:h.map((function(e){var t,c;return Object(r.jsx)(u,{person:e,motherSlug:null===(t=h.find((function(t){return t.name===e.motherName})))||void 0===t?void 0:t.slug,fatherSlug:null===(c=h.find((function(t){return t.name===e.fatherName})))||void 0===c?void 0:c.slug,slug:g},e.slug)}))})]})]})})]})},O=function(){return Object(r.jsx)("h1",{className:"title",children:"Page not found"})},m=function(){return Object(r.jsxs)("div",{"data-cy":"app",children:[Object(r.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(n.c,{className:function(e){return e.isActive?"navbar-item has-background-grey-lighter":"navbar-item"},to:"/",children:"Home"}),Object(r.jsx)(n.c,{className:function(e){return e.isActive?"navbar-item has-background-grey-lighter":"navbar-item"},to:"/people",children:"People"})]})})}),Object(r.jsx)("main",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(s.d,{children:[Object(r.jsx)(s.b,{path:"/",element:Object(r.jsx)(l,{})}),Object(r.jsx)(s.b,{path:"/people",element:Object(r.jsx)(x,{})}),Object(r.jsx)(s.b,{path:"/people/:slug",element:Object(r.jsx)(x,{})}),Object(r.jsx)(s.b,{path:"/home",element:Object(r.jsx)(s.a,{to:"/",replace:!0})}),Object(r.jsx)(s.b,{path:"/*",element:Object(r.jsx)(O,{})})]})})})]})};Object(a.createRoot)(document.getElementById("root")).render(Object(r.jsx)(n.a,{children:Object(r.jsx)(m,{})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.8c97fc5a.chunk.js.map