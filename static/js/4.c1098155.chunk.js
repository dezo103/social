(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{228:function(e,t,n){e.exports={formControl:"FormsControls_formControl__q_x2r",error:"FormsControls_error__1oD5g",formSummaryError:"FormsControls_formSummaryError__2FR6z"}},229:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return b}));var s=n(3),a=n(232),r=(n(0),n(228)),c=n.n(r),i=n(109),o=n(1),u=["input","meta","child"],d=["input","meta","child"],j=function(e){e.input;var t=e.meta,n=t.touched,s=t.error,a=e.children,r=n&&s;return Object(o.jsxs)("div",{className:c.a.formControl+" "+(r?c.a.error:""),children:[Object(o.jsx)("div",{children:a}),r&&Object(o.jsx)("span",{children:s})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,u));return Object(o.jsx)(j,Object(s.a)(Object(s.a)({},e),{},{children:Object(o.jsx)("textarea",Object(s.a)(Object(s.a)({},t),n))}))},m=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,d));return Object(o.jsx)(j,Object(s.a)(Object(s.a)({},e),{},{children:Object(o.jsx)("input",Object(s.a)(Object(s.a)({},t),n))}))},b=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(i.a,Object(s.a)({placeholder:e,name:t,component:n,validate:a},r))," ",c]})}},231:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a}));var s=function(e){return e?void 0:"field is required"},a=function(e){return function(t){return t.length>e?"max length is ".concat(e," symbols"):void 0}}},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var s=n(3),a=n(232),r=(n(0),n(6)),c=n(21),i=n(1),o=["isAuth"],u=function(e){return{isAuth:e.auth.isAuth}};function d(e){return Object(c.b)(u)((function(t){var n=t.isAuth,c=Object(a.a)(t,o);return n?Object(i.jsx)(e,Object(s.a)({},c)):Object(i.jsx)(r.a,{to:"/login"})}))}},252:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2K_Xz",dialogsItems:"Dialogs_dialogsItems__2gHO3",messages:"Dialogs_messages__3MwGm"}},253:function(e,t,n){e.exports={dialogsItems:"DialogItem_dialogsItems__1Zolc",active:"DialogItem_active__2rHk1"}},254:function(e,t,n){},305:function(e,t,n){"use strict";n.r(t);var s=n(75),a=(n(0),n(252)),r=n.n(a),c=n(253),i=n.n(c),o=n(12),u=n(1),d=function(e){var t="/dialogs/".concat(e.id);return Object(u.jsx)("div",{className:i.a.dialog+" "+i.a.active,children:Object(u.jsx)(o.b,{to:t,children:e.name})})},j=n(254),l=n.n(j),m=function(e){return Object(u.jsx)("div",{className:l.a.message,children:e.message})},b=n(6),g=n(109),O=n(110),f=n(229),h=n(231),x=Object(h.a)(50),v=Object(O.a)({form:"dialogAddMessageForm"})((function(e){return Object(u.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(u.jsx)(g.a,{component:f.b,name:"newMessageBody",validate:[h.b,x],placeholder:"Enter message"}),Object(u.jsx)("button",{children:"add message"})]})})),_=function(e){var t=e.dialogsPage,n=t.dialogsData.map((function(e){return Object(u.jsx)(d,{name:e.name,id:e.id})})),s=t.messages.map((function(e){return Object(u.jsx)(m,{message:e.message})}));return e.isAuth?Object(u.jsxs)("div",{className:r.a.dialogs,children:[Object(u.jsx)("div",{className:r.a.dialogsItems,children:n}),Object(u.jsxs)("div",{className:r.a.messages,children:[Object(u.jsx)("div",{children:s}),Object(u.jsx)(v,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})]})]}):Object(u.jsx)(b.a,{to:"/login"})},p=n(21),A=n(19),y=n(239);t.default=Object(A.d)(y.a,Object(p.b)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{sendMessage:function(t){e(Object(s.b)(t))}}})))(_)}}]);
//# sourceMappingURL=4.c1098155.chunk.js.map