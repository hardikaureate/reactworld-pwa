(this.webpackJsonpreacthtmlproject=this.webpackJsonpreacthtmlproject||[]).push([[5],{239:function(e,t,a){},248:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a(6),n=a(28),r=(a(239),a(2)),s=function(e){var t=e.projectData;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("section",{id:"two",children:Object(r.jsx)("div",{className:"inner",children:Object(r.jsx)("div",{className:"box alt",children:Object(r.jsx)("div",{className:"row gtr-50 gtr-uniform animate__animated animate__zoomIn",children:t&&t.map((function(e){var t=e.id,a=e.image,c=e.projectlink,i=e.name;return Object(r.jsx)("div",{className:"col-4 col-12-xsmall procard content",children:Object(r.jsxs)("a",{href:c,target:"_blank",children:[Object(r.jsx)("div",{class:"content-overlay"}),Object(r.jsxs)("span",{className:"content-image image fit projectimg effect_lily",children:[Object(r.jsx)("a",{target:"_blank",href:c,children:Object(r.jsx)("img",{src:a,alt:"images"})}),Object(r.jsx)("div",{class:"content-details fadeIn-top",children:Object(r.jsx)("h3",{children:i})})]})]})},t)}))})})})})})},o=[{id:1,image:"images/pro1.jpeg",name:"20 North Marketing",category:"reactjs",projectlink:"https://20northmarketing.com/"},{id:2,image:"images/pro2.jpeg",name:"Aaradhana Textiles",category:"reactjs",projectlink:"https://aaradhanatextile.in/"},{id:3,image:"images/pro3.jpeg",name:"Amenity 360",category:"reactjs",projectlink:"https://www.amenity360.com/"},{id:4,image:"../images/pro4.jpeg",name:"Fabric Pandit",category:"vuejs",projectlink:"https://fabricpandit.com/"},{id:5,image:"../images/pro5.jpeg",name:"Chatbot",category:"wordpress",projectlink:"https://www.chatbot.com/"},{id:6,image:"../images/pro6.jpeg",name:"FitnessBug",category:"node",projectlink:"https://www.fitnessbug.co.uk/"},{id:7,image:"../images/pro7.jpeg",name:"Jollyes",category:"nextjs",projectlink:"https://www.jollyes.co.uk/"},{id:8,image:"../images/pro8.jpeg",name:"Lancer Skincare",category:"vue",projectlink:"https://www.lancerskincare.com/"},{id:9,image:"../images/pro9.jpeg",name:"Pure Daily care",category:"wordpress",projectlink:"https://puredailycare.com/"}],j=function(e){var t=e.filterItem,a=e.menuList;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"btn-group filtermenu",children:a.map((function(e){return Object(r.jsx)("button",{className:"btn-group__item",onClick:function(){return t(e)},children:e})}))})})},l=["All"].concat(Object(n.a)(new Set(o.map((function(e){return e.category}))))),m=function(){var e=Object(c.useState)(o),t=Object(i.a)(e,2),a=t[0],n=t[1],m=Object(c.useState)(l),g=Object(i.a)(m,2),p=g[0];g[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{id:"wrapper",children:[Object(r.jsx)("span",{className:"image fit",style:{marginBottom:"100px"},children:Object(r.jsx)("img",{src:"images/splash.svg",alt:""})}),Object(r.jsx)(j,{filterItem:function(e){"All"===e&&(n(o),localStorage.setItem("prolist",JSON.stringify(o)));var t=o.filter((function(t){return t.category===e}));n(t),localStorage.setItem("Menulist",JSON.stringify(t))},menuList:p}),Object(r.jsx)(s,{projectData:a})]})})},g=a(77);t.default=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{id:"wrapper",children:[Object(r.jsx)("section",{id:"banner",className:"style2",children:Object(r.jsxs)("div",{className:"inner",children:[Object(r.jsx)("span",{className:"image",children:Object(r.jsx)("img",{src:"images/pic07.jpg",alt:""})}),Object(r.jsx)("header",{className:"major",children:Object(r.jsx)("h1",{className:"animate__animated animate__fadeInUp",children:"Case Study"})}),Object(r.jsx)("div",{className:"content animate__pulse animate__animated",children:Object(r.jsxs)("p",{children:["Codeworks flagged in 2009 with a clear vision of serving best to our clients with",Object(r.jsx)("br",{})," latest technology solutions to tackle the challenges of the modern market."]})})]})}),Object(r.jsx)(m,{}),Object(r.jsx)(g.a,{})]})})}}}]);