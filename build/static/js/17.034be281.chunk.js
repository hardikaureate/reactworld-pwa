(this.webpackJsonpreacthtmlproject=this.webpackJsonpreacthtmlproject||[]).push([[17],{251:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(77),i=c(6),n=c(18),r=c(32),l=c(16),j=c.n(l),d=c(226),o=c(95),h=(c(145),c(2)),b=function(){var e=Object(s.useContext)(r.a),t=e.fetchAllProducts,c=e.products,a=e.addItemToCheckout,l=(e.product,Object(s.useState)(!0)),b=Object(i.a)(l,2),m=b[0],O=b[1];Object(s.useEffect)((function(){setTimeout((function(){return O(!1)}),2e3),t(),localStorage.setItem("allproducts",JSON.stringify(c));var e=localStorage.getItem("allproducts");O(JSON.parse(e))}),[t]),console.log("Shop-Products",c);return c?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(d.a,{children:Object(h.jsx)("div",{className:"product-listing",children:c.map((function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"itemBox",children:Object(h.jsxs)("div",{className:"item",children:[e.variants[0].compareAtPrice>e.variants[0].price?Object(h.jsx)("span",{className:"sale",children:"SALE"}):Object(h.jsx)("span",{}),Object(h.jsx)("div",{className:"imageContainer",children:Object(h.jsxs)(n.b,{to:"/products/".concat(e.handle),"aria-label":"Navigate to ".concat(e.title," product page"),children:[m&&Object(h.jsx)(j.a,{height:306}),!m&&Object(h.jsx)(o.a,{src:e.images[0].src,height:316})]},e.id)}),Object(h.jsxs)("div",{className:"productInfo",children:[Object(h.jsxs)(n.b,{to:"/products/".concat(e.handle),children:[m&&Object(h.jsx)(j.a,{height:30}),!m&&Object(h.jsx)("h3",{className:"itemName",children:e.title})]}),Object(h.jsx)("p",{className:"relatedProPrice",children:m?Object(h.jsx)(j.a,{height:30}):"$".concat(e.variants[0].price)}),Object(h.jsx)("div",{style:{textAlign:"center"},children:Object(h.jsx)("div",{class:"yotpo bottomLine","data-product-id":"4746070032433",style:{display:"inline-block"}})}),Object(h.jsx)("a",{href:"#",className:"button small fit",onClick:function(){return a(e.variants[0].id,1)},children:"Buy Now"})]})]})},e.id)})}))})})}):Object(h.jsx)("div",{children:Object(h.jsx)("div",{class:"loading",children:"Loading\u2026"})})};t.default=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{id:"wrapper",children:[Object(h.jsx)("section",{id:"banner",className:"style2",children:Object(h.jsxs)("div",{className:"inner",children:[Object(h.jsx)("span",{className:"image",children:Object(h.jsx)("img",{src:"images/pic07.jpg",alt:""})}),Object(h.jsx)("header",{className:"major",children:Object(h.jsx)("h1",{className:"animate__animated animate__fadeInUp",children:"Aureate Shop"})}),Object(h.jsx)("div",{className:"content animate__pulse animate__animated",children:Object(h.jsxs)("p",{children:["Codeworks flagged in 2009 with a clear vision of serving best to our clients with",Object(h.jsx)("br",{})," latest technology solutions to tackle the challenges of the modern market."]})})]})}),Object(h.jsx)("section",{id:"two",children:Object(h.jsx)("div",{className:"inner",children:Object(h.jsx)("div",{class:"box alt",children:Object(h.jsx)("div",{class:"gtr-50 gtr-uniform",children:Object(h.jsx)(b,{})})})})})]}),Object(h.jsx)(a.a,{})]})}}}]);