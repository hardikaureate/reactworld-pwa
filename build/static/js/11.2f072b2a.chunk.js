(this.webpackJsonpreacthtmlproject=this.webpackJsonpreacthtmlproject||[]).push([[11],{265:function(e,c,t){"use strict";t.r(c);var a=t(6),s=t(0),i=t(249),n=t(248),l=t(266),r=t(18),o=t(32),j=t(259),d=t(2);c.default=function(){var e,c,t=window.innerWidth,b=Object(s.useState)((new Date).toLocaleTimeString()),h=Object(a.a)(b,2),u=h[0],O=h[1];Object(s.useEffect)((function(){setTimeout((function(){var e=new Date;O(e.toLocaleTimeString("en-US",{hour12:!0}))}),1e3)}),[u]);var m=Object(s.useContext)(o.a),x=m.openCart,f=(m.openMenu,m.checkout);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{id:"wrapper",className:"mainHeaderId",children:Object(d.jsxs)("header",{id:"header",className:"header alt",children:[Object(d.jsxs)("div",{className:"sitelogo",children:[Object(d.jsxs)(r.b,{to:"/",className:"logo",children:[Object(d.jsx)("strong",{children:"HD"})," ",Object(d.jsx)("span",{children:"by REACT"})]}),u]}),Object(d.jsxs)("div",{className:"miniheader",children:[Object(d.jsx)("input",{className:"menu-btn",type:"checkbox",id:"menu-btn"}),Object(d.jsx)("label",{className:"menu-icon",for:"menu-btn",children:Object(d.jsx)("span",{className:"navicon"})}),Object(d.jsxs)("ul",{className:"menu",children:[Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.c,{activeClassName:"active",to:"/about",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.c,{activeClassName:"active",to:"/portfolio",children:"Portfolio"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.c,{activeClassName:"active",to:"/shop",children:"Shop"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.c,{activeClassName:"active",to:"/post",children:"Blog"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.c,{activeClassName:"active",to:"/contact",children:"Contact"})}),t<767?Object(d.jsx)("li",{children:Object(d.jsxs)(i.a,{className:"mobilecarticon",children:[Object(d.jsx)(n.a,{className:"cartIcon",onClick:function(){return x()},fill:"#fff",cursor:"pointer",as:j.a,w:30,h:30}),Object(d.jsx)(l.a,{backgroundColor:"#f3eafd",borderRadius:"50%",className:"cartQuan",children:null===(e=f.lineItems)||void 0===e?void 0:e.length})]})}):Object(d.jsx)("li",{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(n.a,{onClick:function(){return x()},fill:"#fff",cursor:"pointer",as:j.a,w:30,h:30}),Object(d.jsx)(l.a,{backgroundColor:"#f3eafd",borderRadius:"50%",className:"cartQuan",children:null===(c=f.lineItems)||void 0===c?void 0:c.length})]})})]})]})]})})})}}}]);