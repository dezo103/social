(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{229:function(t,e,n){t.exports={formControl:"FormsControls_formControl__q_x2r",error:"FormsControls_error__1oD5g",formSummaryError:"FormsControls_formSummaryError__2FR6z"}},230:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return f}));var r=n(3),s=n(233),o=(n(0),n(229)),c=n.n(o),i=n(110),a=n(1),u=["input","meta","child"],j=["input","meta","child"],l=function(t){t.input;var e=t.meta,n=e.touched,r=e.error,s=t.children,o=n&&r;return Object(a.jsxs)("div",{className:c.a.formControl+" "+(o?c.a.error:""),children:[Object(a.jsx)("div",{children:s}),o&&Object(a.jsx)("span",{children:r})]})},p=function(t){var e=t.input,n=(t.meta,t.child,Object(s.a)(t,u));return Object(a.jsx)(l,Object(r.a)(Object(r.a)({},t),{},{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},e),n))}))},d=function(t){var e=t.input,n=(t.meta,t.child,Object(s.a)(t,j));return Object(a.jsx)(l,Object(r.a)(Object(r.a)({},t),{},{children:Object(a.jsx)("input",Object(r.a)(Object(r.a)({},e),n))}))},f=function(t,e,n,s){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(a.jsxs)("div",{children:[Object(a.jsx)(i.a,Object(r.a)({placeholder:t,name:e,component:n,validate:s},o))," ",c]})}},232:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return s}));var r=function(t){return t?void 0:"field is required"},s=function(t){return function(e){return e.length>t?"max length is ".concat(t," symbols"):void 0}}},240:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var r=n(3),s=n(233),o=(n(0),n(6)),c=n(21),i=n(1),a=["isAuth"],u=function(t){return{isAuth:t.auth.isAuth}};function j(t){return Object(c.b)(u)((function(e){var n=e.isAuth,c=Object(s.a)(e,a);return n?Object(i.jsx)(t,Object(r.a)({},c)):Object(i.jsx)(o.a,{to:"/login"})}))}},300:function(t,e,n){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__gPdx2",mainPhoto:"ProfileInfo_mainPhoto__3E9Go"}},301:function(t,e,n){t.exports={postsBlock:"MyPosts_postsBlock__3oVUa",posts:"MyPosts_posts__3HRhM"}},302:function(t,e,n){t.exports={item:"Post_item__N75IJ"}},305:function(t,e,n){"use strict";n.r(e);var r=n(3),s=n(27),o=n(28),c=n(31),i=n(30),a=n(0),u=n.n(a),j=n(300),l=n.n(j),p=n(23),d=n(83),f=n(1),b=function(t){var e=Object(a.useState)(!1),n=Object(d.a)(e,2),r=n[0],s=n[1],o=Object(a.useState)(t.status),c=Object(d.a)(o,2),i=c[0],u=c[1];Object(a.useEffect)((function(){u(t.status)}),[t.status]);return Object(f.jsx)("div",{children:r?Object(f.jsx)("div",{children:Object(f.jsx)("input",{value:i,onBlur:function(){s(!1),t.updateStatus(i)},autoFocus:!0,onChange:function(t){return function(t){u(t.currentTarget.value)}(t)}})}):Object(f.jsx)("div",{children:Object(f.jsx)("span",{onDoubleClick:function(){s(!0)},children:t.status||"no status!"})})})},h=n(82),O=function(t){if(!t.profile)return Object(f.jsx)(p.a,{});return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:l.a.descriptionBlock,children:[Object(f.jsx)("img",{src:t.profile.photos.large||h.a,alt:"photo",className:l.a.mainPhoto}),t.isOwner&&Object(f.jsx)("input",{type:"file",onChange:function(e){return function(e){e.target.files.length&&t.savePhoto(e.target.files[0])}(e)}}),Object(f.jsx)(b,{status:t.status,updateStatus:t.updateStatus}),Object(f.jsx)("p",{children:t.profile.aboutMe}),Object(f.jsx)("p",{children:t.profile.fullName}),Object(f.jsx)("p",{children:t.profile.lookingForAJobDescription}),Object(f.jsx)("p",{children:t.profile.lookingForAJob?"\u0414\u0430, \u0438\u0449\u0443":"\u041d\u0435\u0430"})]})})},m=n(301),x=n.n(m),v=n(302),g=n.n(v),P=function(t){return Object(f.jsxs)("div",{className:g.a.item,children:[Object(f.jsx)("img",{src:"https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg",alt:""}),t.message,Object(f.jsx)("div",{children:Object(f.jsxs)("span",{children:["like",t.likesCount]})})]})},_=n(110),k=n(111),S=n(232),y=n(230),C=u.a.memo((function(t){var e=t.postData.map((function(t){return Object(f.jsx)(P,{message:t.message,likesCount:t.likesCount})}));return Object(f.jsxs)("div",{className:x.a.postsBlock,children:[Object(f.jsx)("h3",{children:"My posts"}),Object(f.jsx)(A,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(f.jsx)("div",{className:x.a.posts,children:e})]})})),w=Object(S.a)(10),A=Object(k.a)({form:"profileAddNewPostForm"})((function(t){return Object(f.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(f.jsx)(_.a,{component:y.b,name:"newPostText",validate:[S.b,w],placeholder:"Enter post"}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:"Add Post"})})]})})),I=C,N=n(61),D=n(21),F=Object(D.b)((function(t){return{postData:t.profilePage.postData}}),(function(t){return{addPost:function(e){t(Object(N.a)(e))}}}))(I),B=function(t){return Object(f.jsxs)("div",{children:[Object(f.jsx)(O,{savePhoto:t.savePhoto,profile:t.profile,status:t.status,updateStatus:t.updateStatus,isOwner:t.isOwner}),Object(f.jsx)(F,{})]})},M=n(6),U=n(240),E=n(19),J=function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).refreshProfile=function(){var e=t.props.match.params.userId;e||(e=t.props.authorizedUserId)||t.props.history.push("/login"),t.props.getUserProfile(e),t.props.getStatus(e)},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,n){this.props.match.params.userId!=t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(f.jsx)(B,Object(r.a)(Object(r.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),n}(u.a.Component);e.default=Object(E.d)(Object(D.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:N.d,getStatus:N.c,updateStatus:N.f,savePhoto:N.e}),M.f,U.a)(J)}}]);
//# sourceMappingURL=5.f8cc8501.chunk.js.map