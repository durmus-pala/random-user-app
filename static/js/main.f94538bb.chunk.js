(this["webpackJsonprandom-user-app"]=this["webpackJsonprandom-user-app"]||[]).push([[0],{19:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),i=c(12),a=c.n(i),r=(c(19),c(14)),o=c.p+"static/media/email.e1f03bb9.svg",d=c.p+"static/media/location.0b7d98ab.svg",j=c.p+"static/media/phone.d017e1ae.svg",l=c(13),b=c.n(l),u=(c(38),c(0)),m=function(){var e=Object(n.useState)(),t=Object(r.a)(e,2),c=t[0],s=t[1],i=function(){b.a.get("https://randomuser.me/api/").then((function(e){console.log(e.data.results),s(e.data.results)}))};return Object(n.useEffect)((function(){i()}),[]),Object(u.jsxs)("div",{className:"user-card",children:[null===c||void 0===c?void 0:c.map((function(e,t){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{id:"profil-photo",src:e.picture.large,alt:""}),e.name.first," ",e.name.last]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{className:"icon",src:o,alt:""}),e.email]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{className:"icon",src:j,alt:""}),e.phone]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{className:"icon",src:d,alt:""}),e.location.country," - ",e.location.city]}),Object(u.jsxs)("p",{id:"age",children:["Age: ",e.dob.age]}),Object(u.jsxs)("p",{id:"register",children:["Register Date: ",e.registered.date]})]},t)})),Object(u.jsx)("button",{id:"btn",onClick:i,children:"Random User"})]})},g=function(){return Object(u.jsx)(m,{})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),p()}},[[40,1,2]]]);
//# sourceMappingURL=main.f94538bb.chunk.js.map