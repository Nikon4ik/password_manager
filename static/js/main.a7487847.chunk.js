(this["webpackJsonpreact-pass-manager"]=this["webpackJsonpreact-pass-manager"]||[]).push([[0],{25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),o=n.n(i),l=n(17),r=n.n(l),s=(n(25),n(9)),c=n(4),u={form:{margin:"auto",width:"max-content",display:"flex",flexDirection:"column",alignItems:"center"}};var d=function(e){for(var t=Object(i.useState)(""),n=Object(c.a)(t,2),o=n[0],l=n[1],r=Object(i.useState)(""),d=Object(c.a)(r,2),p=d[0],b=d[1],g=Object(i.useState)(""),h=Object(c.a)(g,2),m=h[0],j=h[1],x=Object.keys(localStorage),f=0,y=x;f<y.length;f++){var v=y[f];if(null!==v.match(/authorize_user/)&&0===v.match(/authorize_user/).index)return window.location.assign("#dashboard"),void window.location.reload()}function O(){j("")}return Object(a.jsxs)("form",{style:u.form,onSubmit:function(e){if(localStorage.length>0){var t,n=Object(s.a)(x);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(null!==a.match(/user/)&&0===a.match(/user/).index){var i=JSON.parse(localStorage.getItem(a));if(null!==a.match(/user/)&&0===a.match(/user/).index){if(o===i[0]&&p===i[1])return e.preventDefault(),j(""),localStorage.setItem("authorize_"+a,"true"),window.location.assign("#dashboard"),void window.location.reload();e.preventDefault(),j("error"),e.target.children[2].value=""}}}}catch(l){n.e(l)}finally{n.f()}}else e.preventDefault(),j("error"),e.target.children[2].value=""},className:"login",children:[Object(a.jsx)("input",{style:u.input,className:m,type:"text",name:"login",placeholder:"Login",login:o,onChange:function(e){return l(e.target.value)},onSelect:O}),Object(a.jsx)("label",{htmlFor:"error",className:m},e),Object(a.jsx)("input",{style:u.input,type:"password",name:"pass",placeholder:"Password",password:p,onChange:function(e){return b(e.target.value)},onSelect:O}),Object(a.jsx)("button",{className:"big-button",style:u.button,type:"submit",children:"Log in"}),Object(a.jsx)("button",{className:"small-button",type:"button",onClick:function(){window.location.assign("#signup"),window.location.reload()},children:"Sign up"})]})},p={form:{margin:"auto",width:"max-content",display:"flex",flexDirection:"column",alignItems:"center"}};function b(){for(var e=Object(i.useState)(""),t=Object(c.a)(e,2),n=t[0],o=t[1],l=Object(i.useState)(""),r=Object(c.a)(l,2),s=r[0],u=r[1],d=Object(i.useState)(""),b=Object(c.a)(d,2),g=b[0],h=b[1],m=Object(i.useState)(1),j=Object(c.a)(m,2),x=j[0],f=j[1],y=Object.keys(localStorage),v=0,O=y;v<O.length;v++){var S=O[v];if(null!==S.match(/authorize_user/)&&0===S.match(/authorize_user/).index)return window.location.assign("#dashboard"),void window.location.reload()}for(var w=0,N=y;w<N.length;w++){var C=N[w];null!==C.match(x)&&4===C.match(x).index&&f(x+1)}function I(){h("")}return Object(a.jsxs)("form",{style:p.form,onSubmit:function(e){""!==n&&""!==s?(e.preventDefault(),f(x+1),localStorage.setItem("user"+x,JSON.stringify([n,s])),window.location.assign("#login"),window.location.reload()):(e.preventDefault(),h("error"))},children:[Object(a.jsx)("input",{className:g,style:p.input,type:"text",name:"login",placeholder:"Login",login:n,onChange:function(e){return o(e.target.value)},onSelect:I}),Object(a.jsx)("label",{htmlFor:"sign-error",className:g}),Object(a.jsx)("input",{style:p.input,type:"password",name:"pass",placeholder:"Password",password:s,onChange:function(e){return u(e.target.value)},onSelect:I}),Object(a.jsx)("button",{className:"big-button",style:p.button,type:"submit",children:"Sign up"}),Object(a.jsx)("button",{className:"small-button",type:"button",onClick:function(){window.location.assign("#login"),window.location.reload()},children:"Log in"})]})}var g={div:{height:"40px",border:"1px solid #808080",marginBottom:"10px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"5px"},input:{display:"none"}};var h=function(){for(var e=[],t=[],n=Object.keys(localStorage),i=0,o=n;i<o.length;i++){var l=o[i];if(null!==l.match(/authorize_user/)&&0===l.match(/authorize_user/).index)var r=l.replace("authorize_user","");t.push([l,JSON.parse(localStorage.getItem(l))])}for(var s=0,c=n;s<c.length;s++){var u=c[s],d=RegExp(r+"point");null!==u.match(d)&&0===u.match(d).index&&e.push(JSON.parse(localStorage.getItem(u)))}function p(e){var t=e.target,n=t.parentNode,a=t.previousSibling.previousSibling.previousSibling;t.style.display="none",t.previousSibling.style.display="initial",a.previousSibling.previousSibling.value=n.firstChild.value,a.previousSibling.value=n.firstChild.nextSibling.value,a.value=n.firstChild.nextSibling.nextSibling.value,Array.from(t.parentNode.querySelectorAll("input")).forEach((function(e){""!==e.className?e.style.display="none":e.style.display="initial"}))}function b(e){var n=[],a=[],i=e.target;i.style.display="none",i.nextSibling.style.display="initial",Array.from(i.parentNode.querySelectorAll("input")).forEach((function(e){""!==e.className?(e.style.display="flex",n.push(e.value)):(e.style.display="none",a.push(e.value))})),t.forEach((function(e){n[0]===e[1][0]&&n[1]===e[1][1]&&n[2]===e[1][2]&&localStorage.setItem(e[0],JSON.stringify(a))})),window.location.reload()}function h(e){"password"===e.target.parentNode.firstChild.nextSibling.nextSibling.type?(e.target.style.textDecoration="line-through",e.target.parentNode.firstChild.nextSibling.nextSibling.type="text"):(e.target.style.textDecoration="none",e.target.parentNode.firstChild.nextSibling.nextSibling.type="password")}return e.map((function(e,n){return Object(a.jsxs)("div",{style:g.div,children:[Object(a.jsx)("input",{className:"input",type:"text",disabled:!0,value:e[0]}),Object(a.jsx)("input",{className:"input",type:"text",disabled:!0,value:e[1]}),Object(a.jsx)("input",{className:"input",type:"password",disabled:!0,value:e[2]}),Object(a.jsx)("input",{style:g.input,type:"text",name:"Name",placeholder:"Name"}),Object(a.jsx)("input",{style:g.input,type:"text",name:"Login",placeholder:"Login"}),Object(a.jsx)("input",{style:g.input,type:"text",name:"Pass",placeholder:"Password"}),Object(a.jsx)("button",{className:"show-button",onClick:h,children:"\ud83d\udc41"}),Object(a.jsx)("button",{className:"save-button",onClick:b,children:"\u2714"}),Object(a.jsx)("button",{className:"edit-button",onClick:p,children:"\u270e"}),Object(a.jsx)("button",{onClick:function(n){n.target.parentNode.firstChild.nextSibling.nextSibling.value===e[2]&&n.target.parentNode.firstChild.value===e[0]&&n.target.parentNode.firstChild.nextSibling.value===e[1]&&t.forEach((function(t){e[2]===t[1][2]&&localStorage.removeItem(t[0])})),window.location.reload()},children:"\xd7"})]},n)}))},m={form:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px",border:"1px solid #808080",padding:"5px"}};var j=function(){for(var e=Object(i.useState)(""),t=Object(c.a)(e,2),n=t[0],o=t[1],l=Object(i.useState)(""),r=Object(c.a)(l,2),u=r[0],d=r[1],p=Object(i.useState)(""),b=Object(c.a)(p,2),g=b[0],h=b[1],j=Object(i.useState)(1),x=Object(c.a)(j,2),f=x[0],y=x[1],v=Object.keys(localStorage),O=0,S=v;O<S.length;O++){var w=S[O];null!==w.slice(1).match(f)&&5===w.slice(1).match(f).index&&y(f+1)}function N(){document.getElementsByClassName("addItems")[0].children[2].style.border="1px solid  rgba(0, 0, 0, 0.3)"}return Object(a.jsxs)("form",{style:m.form,onSubmit:function(e){if(e.preventDefault(),""!==g){y(f+1);var t,a=Object(s.a)(v);try{for(a.s();!(t=a.n()).done;){var i=t.value;null!==i.match(/authorize_user/)&&0===i.match(/authorize_user/).index&&(localStorage.setItem(i.replace("authorize_user","")+"point"+f,JSON.stringify([n,u,g])),window.location.reload())}}catch(o){a.e(o)}finally{a.f()}}else document.getElementsByName("addPass")[0].style.border="1px solid red"},className:"addItems",children:[Object(a.jsx)("input",{type:"text",name:"addName",placeholder:"Name",naming:n,onChange:function(e){return o(e.target.value)},onSelect:N}),Object(a.jsx)("input",{type:"text",name:"addLogin",placeholder:"Login",login:u,onChange:function(e){return d(e.target.value)},onSelect:N}),Object(a.jsx)("input",{type:"password",name:"addPass",placeholder:"Password*",password:g,onChange:function(e){return h(e.target.value)},onSelect:N}),Object(a.jsx)("button",{className:"big-button",style:{width:"60px",height:"30px"},type:"submit",children:"Add"})]})};var x=function(){for(var e=Object.keys(localStorage),t=0,n=e;t<n.length;t++){var i=n[t];if(null!==i.match(/authorize_user/)&&0!==i.match(/authorize_user/).index)return window.location.assign("#login"),void window.location.reload()}return Object(a.jsxs)("div",{style:{width:"600px",margin:"auto"},children:[Object(a.jsx)("button",{className:"big-button",style:{marginBottom:"40px"},onClick:function(){var t,n=Object(s.a)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;null!==a.match("authorize_user")&&0===a.match("authorize_user").index&&localStorage.removeItem(a)}}catch(i){n.e(i)}finally{n.f()}window.location.assign("#login"),window.location.reload()},children:"Log out"}),Object(a.jsx)(j,{}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Name"}),Object(a.jsx)("li",{children:"Login"}),Object(a.jsx)("li",{children:"Password"})]}),Object(a.jsx)(h,{})]})},f=n(18),y=n(2);var v=function(){return Object(a.jsx)(f.a,{basename:"/password-manager",children:Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(y.a,{path:"/",exact:!0,component:d}),Object(a.jsx)(y.a,{path:"/login",exact:!0,component:d}),Object(a.jsx)(y.a,{path:"/signup",exact:!0,component:b}),Object(a.jsx)(y.a,{path:"/dashboard",exact:!0,component:x})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,l=t.getTTFB;n(e),a(e),i(e),o(e),l(e)}))};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),O()}},[[31,1,2]]]);
//# sourceMappingURL=main.a7487847.chunk.js.map