(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{228:function(t,r,e){t.exports={formControl:"FormsControls_formControl__q_x2r",error:"FormsControls_error__1oD5g",formSummaryError:"FormsControls_formSummaryError__2FR6z"}},229:function(t,r,e){"use strict";e.d(r,"b",(function(){return l})),e.d(r,"a",(function(){return d})),e.d(r,"c",(function(){return m}));var n=e(3),c=e(232),o=(e(0),e(228)),i=e.n(o),a=e(109),u=e(1),s=["input","meta","child"],j=["input","meta","child"],b=function(t){t.input;var r=t.meta,e=r.touched,n=r.error,c=t.children,o=e&&n;return Object(u.jsxs)("div",{className:i.a.formControl+" "+(o?i.a.error:""),children:[Object(u.jsx)("div",{children:c}),o&&Object(u.jsx)("span",{children:n})]})},l=function(t){var r=t.input,e=(t.meta,t.child,Object(c.a)(t,s));return Object(u.jsx)(b,Object(n.a)(Object(n.a)({},t),{},{children:Object(u.jsx)("textarea",Object(n.a)(Object(n.a)({},r),e))}))},d=function(t){var r=t.input,e=(t.meta,t.child,Object(c.a)(t,j));return Object(u.jsx)(b,Object(n.a)(Object(n.a)({},t),{},{children:Object(u.jsx)("input",Object(n.a)(Object(n.a)({},r),e))}))},m=function(t,r,e,c){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(u.jsxs)("div",{children:[Object(u.jsx)(a.a,Object(n.a)({placeholder:t,name:r,component:e,validate:c},o))," ",i]})}},231:function(t,r,e){"use strict";e.d(r,"b",(function(){return n})),e.d(r,"a",(function(){return c}));var n=function(t){return t?void 0:"field is required"},c=function(t){return function(r){return r.length>t?"max length is ".concat(t," symbols"):void 0}}},303:function(t,r,e){"use strict";e.r(r);e(0);var n=e(110),c=e(229),o=e(231),i=e(21),a=e(26),u=e(6),s=e(228),j=e.n(s),b=e(1),l=Object(n.a)({form:"login"})((function(t){var r=t.handleSubmit,e=t.error;return Object(b.jsxs)("form",{onSubmit:r,children:[Object(c.c)("email","email",c.a,[o.b]),Object(c.c)("password","password",c.a,[o.b],{type:"password"}),Object(c.c)(null,"rememberMe",c.a,[],{type:"checkbox"},"rememberMe"),e&&Object(b.jsx)("div",{className:j.a.formSummaryError,children:e}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Login"})})]})}));r.default=Object(i.b)((function(t){return{isAuth:t.auth.isAuth}}),{login:a.c})((function(t){return t.isAuth?Object(b.jsx)(u.a,{to:"/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)(l,{onSubmit:function(r){t.login(r.email,r.password,r.rememberMe)}})]})}))}}]);
//# sourceMappingURL=6.0efc3107.chunk.js.map