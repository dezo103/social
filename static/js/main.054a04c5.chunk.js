(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{10:function(e,t,n){e.exports={nav:"Navbar_nav__3nwbb",item:"Navbar_item__1Mpue",activeLink:"Navbar_activeLink__1WuNl"}},138:function(e,t,n){},142:function(e,t,n){},228:function(e,t,n){"use strict";n.r(t),n.d(t,"rerenderEntireTree",(function(){return Re}));var r=n(0),a=n.n(r),c=(n(138),function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,303)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))}),i=n(47),o=n.n(i),s=n(26),u=n(27),A=n(31),l=n(30),g=(n(142),n(10)),h=n.n(g),d=n(13),f=n(1),j=function(){return Object(f.jsxs)("nav",{className:h.a.nav,children:[Object(f.jsx)("div",{className:"".concat(h.a.item," ").concat(h.a.active),children:Object(f.jsx)(d.b,{to:"/profile",activeClassName:h.a.activeLink,children:"Profile"})}),Object(f.jsx)("div",{className:h.a.item,children:Object(f.jsx)(d.b,{to:"/dialogs",activeClassName:h.a.activeLink,children:"Messages"})}),Object(f.jsx)("div",{className:h.a.item,children:Object(f.jsx)(d.b,{to:"/news",activeClassName:h.a.activeLink,children:"News"})}),Object(f.jsx)("div",{className:h.a.item,children:Object(f.jsx)(d.b,{to:"/music",activeClassName:h.a.activeLink,children:"Music"})}),Object(f.jsx)("div",{className:h.a.item,children:Object(f.jsx)(d.b,{to:"/settings",activeClassName:h.a.activeLink,children:"Settings"})}),Object(f.jsx)("div",{className:h.a.item,children:Object(f.jsx)(d.b,{to:"/users",activeClassName:h.a.activeLink,children:"Users"})})]})},p=n(6),C=function(){return Object(f.jsx)("div",{children:"News"})},E=function(){return Object(f.jsx)("div",{children:"Music"})},O=function(){return Object(f.jsx)("div",{children:"Settings"})},b=n(21),I=n(5),w=n.n(I),Q=n(9),B=n(32),m=n(3),x=n(7),v=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(m.a)(Object(m.a)({},e),r):e}))},G="FOLLOW",S="UNFOLLOW",R="SET_USES",k="SET_CURRENT_PAGE",D="SET_TOTAL_USERS_COUNT",N="TOGGLE_IS_FETCHING",H="TOGGLE_IS_FOLLOWING_PROGRESS",F={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},Y=function(e){return{type:G,userID:e}},T=function(e){return{type:S,userID:e}},M=function(e){return{type:k,currentPage:e}},J=function(e){return{type:N,isFetching:e}},P=function(e,t){return{type:H,isFollowing:e,userId:t}},L=function(){var e=Object(Q.a)(w.a.mark((function e(t,n,r,a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(P(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(P(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(m.a)(Object(m.a)({},e),{},{users:v(e.users,t.userID,"id",{followed:!0})});case S:return Object(m.a)(Object(m.a)({},e),{},{users:v(e.users,t.userID,"id",{followed:!1})});case R:return Object(m.a)(Object(m.a)({},e),{},{users:t.users});case k:return Object(m.a)(Object(m.a)({},e),{},{currentPage:t.currentPage});case D:return Object(m.a)(Object(m.a)({},e),{},{totalUsersCount:t.totalUsersCount});case N:return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.isFetching});case H:return Object(m.a)(Object(m.a)({},e),{},{followingInProgress:t.isFollowing?[].concat(Object(B.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},q=n(67),U=n(56),z=n.n(U),K=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,c=e.onPageChanged,i=e.portionSize,o=void 0===i?10:i,s=Math.ceil(t/n),u=[],A=1;A<=s;A++)u.push(A);var l=Math.ceil(s/o),g=Object(r.useState)(1),h=Object(q.a)(g,2),d=h[0],j=h[1],p=(d-1)*o+1,C=d*o;return Object(f.jsxs)("div",{className:z.a.pagination,children:[d>1&&Object(f.jsx)("button",{onClick:function(){j(d-1)},children:"PREV"}),u.filter((function(e){return e>=p&&e<=C})).map((function(e){return Object(f.jsxs)("span",{className:a===e?z.a.selectedPage:"",onClick:function(){return c(e)},children:[e," "]})})),l>d&&Object(f.jsx)("button",{onClick:function(){j(d+1)},children:"NEXT"})]})},X=n(57),V=n.n(X),Z=n(77),W=function(e){var t=e.user;return Object(f.jsxs)("div",{className:V.a.userWrapper,children:[Object(f.jsxs)("div",{children:[Object(f.jsx)(d.b,{to:"/profile/"+t.id,children:Object(f.jsx)("img",{src:null!==t.photos.small?t.photos.small:Z.a,className:V.a.userPhoto})}),Object(f.jsx)("div",{children:t.followed?Object(f.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"unfollow"}):Object(f.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"follow"})})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:t.name}),Object(f.jsx)("div",{children:t.status})]}),Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:"user.location.country"}),Object(f.jsx)("div",{children:"user.location.city"})]})]})]})},_=function(e){var t=e.users,n=e.follow,r=e.unfollow,a=e.totalUsersCount,c=e.pageSize,i=e.currentPage,o=e.onPageChanged,s=e.followingInProgress;return Object(f.jsxs)("div",{children:[Object(f.jsx)(K,{totalItemsCount:a,pageSize:c,currentPage:i,onPageChanged:o}),t.map((function(e){return Object(f.jsx)(W,{user:e,follow:n,unfollow:r,followingInProgress:s},e.id)}))]})},$=n(23),ee=n(19),te=function(e){return e.usersPage.users},ne=function(e){return e.usersPage.pageSize},re=function(e){return e.usersPage.totalUsersCount},ae=function(e){return e.usersPage.currentPage},ce=function(e){return e.usersPage.isFetching},ie=function(e){return e.usersPage.followingInProgress},oe=function(e){Object(A.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{children:this.props.pageTitle}),this.props.isFetching?Object(f.jsx)($.a,{}):null,Object(f.jsx)(_,{users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),se=Object(ee.d)(Object(b.b)((function(e){return{users:te(e),pageSize:ne(e),totalUsersCount:re(e),currentPage:ae(e),isFetching:ce(e),followingInProgress:ie(e)}}),{follow:function(e){return function(){var t=Object(Q.a)(w.a.mark((function t(n,r){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(n,e,x.f.follow.bind(x.f),Y);case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(Q.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(n,e,x.f.unfollow.bind(x.f),T);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:M,toggleFollowingProgress:P,getUsers:function(e,t){return function(){var n=Object(Q.a)(w.a.mark((function n(r,a){var c;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(J(!0)),r(M(e)),n.next=4,x.f.getUsers(e,t);case 4:c=n.sent,r(J(!1)),r((i=c.items,{type:R,users:i})),r((a=c.totalCount,{type:D,totalUsersCount:a}));case 8:case"end":return n.stop()}var a,i}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}))(oe),ue=n(58),Ae=n.n(ue),le=function(e){return Object(f.jsxs)("header",{className:Ae.a.header,children:[Object(f.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo%21_Logo.svg/1200px-Logo%21_Logo.svg.png",alt:""}),Object(f.jsx)("div",{className:Ae.a.loginBlock,children:e.isAuth?Object(f.jsxs)("div",{children:[" ",e.login," ",Object(f.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(f.jsx)(d.b,{to:"/login",children:"Login"})})]})},ge=n(29),he=function(e){Object(A.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)(le,Object(m.a)({},this.props))}}]),n}(a.a.Component),de=Object(b.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:ge.d})(he),fe="INITIALIZED-SUCCESS",je={initialized:!1},pe=function(){return{type:fe}},Ce=n(62),Ee=n(78),Oe=n(89),be=n(84),Ie=Object(ee.c)({profilePage:Ce.b,dialogsPage:Ee.a,usersPage:y,auth:ge.a,form:be.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;return t.type===fe?Object(m.a)(Object(m.a)({},e),{},{initialized:!0}):e}}),we=Object(ee.e)(Ie,Object(ee.a)(Oe.a)),Qe=we;window.store=we;var Be=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,306))})),me=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,305))})),xe=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,304))})),ve=function(e){Object(A.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e){console.error(e)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandleedrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandleedrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(f.jsxs)("div",{className:"app-wrapper",children:[Object(f.jsx)(de,{}),Object(f.jsx)(j,{}),Object(f.jsxs)("div",{className:"app-wrapper-content",children:[Object(f.jsx)(p.b,{path:"/dialogs",render:function(){return Object(f.jsx)(a.a.Suspense,{fallback:Object(f.jsx)($.a,{}),children:Object(f.jsx)(Be,{})})}}),Object(f.jsx)(p.b,{path:"/profile/:userId?",render:function(){return Object(f.jsx)(a.a.Suspense,{fallback:Object(f.jsx)($.a,{}),children:Object(f.jsx)(me,{})})}}),Object(f.jsx)(p.b,{exact:!0,path:"/",render:function(){return Object(f.jsx)(p.a,{to:"/profile"})}}),Object(f.jsx)(p.b,{path:"/news",render:function(){return Object(f.jsx)(C,{})}}),Object(f.jsx)(p.b,{path:"/music",render:function(){return Object(f.jsx)(E,{})}}),Object(f.jsx)(p.b,{path:"/settings",render:function(){return Object(f.jsx)(O,{})}}),Object(f.jsx)(p.b,{path:"/users",render:function(){return Object(f.jsx)(se,{})}}),Object(f.jsx)(p.b,{path:"/login",render:function(){return Object(f.jsx)(a.a.Suspense,{fallback:Object(f.jsx)($.a,{}),children:Object(f.jsx)(xe,{})})}})]})]}):Object(f.jsx)($.a,{})}}]),n}(a.a.Component),Ge=Object(ee.d)(p.f,Object(b.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(ge.b)());Promise.all([t]).then((function(){e(pe())})),e(pe())}}}))(ve),Se=function(e){return Object(f.jsx)(d.a,{children:Object(f.jsx)(b.a,{store:Qe,children:Object(f.jsx)(Ge,{})})})},Re=function(){o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(Se,{})}),document.getElementById("root"))};Re(),c()},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(0);var r=n(1),a=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"data:image/gif;base64,R0lGODlhjAASANU6AOzu7JSSlNza3KSmpNze3KyqrPTy9NTW1AQGBJSWlOTi5NTS1Ozq7IyOjPz6/KSipOTm5LSytMzOzMTGxIyKjMTCxJyenBQWFMzKzHR2dJyanGRiZFRSVExKTDQ2NDQyNCQmJGxubGxqbDw6PPT29AwKDFxaXBwaHExOTHx6fGRmZBQSFFxeXCwuLLy+vHRydFRWVCwqLCQiJAwODISGhISChHx+fPz+/AQCBP///////wAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZCMTc0QTYzMUI2MTExRTdCNTI1RjIxNkE2RjFCMDkxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZCMTc0QTY0MUI2MTExRTdCNTI1RjIxNkE2RjFCMDkxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkIxNzRBNjExQjYxMTFFN0I1MjVGMjE2QTZGMUIwOTEiIHN0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",alt:"spinner"})})}},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return C}));var r=n(5),a=n.n(r),c=n(9),i=n(3),o=n(7),s=n(33),u="samurai-network/auth/SET_USER_DATA",A="samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",l={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:case A:return Object(i.a)(Object(i.a)({},e),t.payload);default:return e}},h=function(e,t,n,r){return{type:"samurai-network/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},d=function(e){return{type:"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},f=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,i,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.me();case 2:(n=e.sent).resultCode===o.b.Success&&(r=n.data,c=r.id,i=r.email,s=r.login,t(h(c,i,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(e,t,n,r){return function(){var i=Object(c.a)(a.a.mark((function c(i){var u,A;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.c.login(e,t,n,r);case 2:(u=a.sent).resultCode===o.b.Success?i(f()):u.resultCode===o.a.CaptchaIsRequired?i(p()):(A=u.messages.length>0?u.messages[0]:"Some error",i(Object(s.a)("login",{_error:A})));case 4:case"end":return a.stop()}}),c)})));return function(e){return i.apply(this,arguments)}}()},p=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.e.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(d(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.logout();case 2:0==e.sent.data.resultCode&&t(h(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},56:function(e,t,n){e.exports={pagination:"Paginator_pagination__2XhYg",selectedPage:"Paginator_selectedPage__EMyUE"}},57:function(e,t,n){e.exports={userWrapper:"User_userWrapper__K2UtC",userPhoto:"User_userPhoto__1N43a"}},58:function(e,t,n){e.exports={header:"Header_header__1WnDY",loginBlock:"Header_loginBlock__1K_v4"}},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"d",(function(){return C})),n.d(t,"c",(function(){return E})),n.d(t,"g",(function(){return O})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return I}));var r=n(5),a=n.n(r),c=n(9),i=n(32),o=n(3),s=n(7),u=n(33),A="ADD-POST",l="SET-USER-PROFILE",g="SET-STATUS",h="DELETE-POST",d="SAVE-PHOTO-SUCCESS",f={postData:[{id:1,message:"Hi hi hi",likesCount:12},{id:5,message:"cryptocurency - is the best investment",likesCount:12}],profile:null,status:"",newPostText:""},j=function(e){return{type:A,newPostText:e}},p=function(e){return{type:g,status:e}},C=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.f.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.d.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(p(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:d,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,i,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,s.d.saveProfile(e);case 3:if(0!==(i=t.sent).data.resultCode){t.next=8;break}n(C(c)),t.next=11;break;case 8:return o=i.data.messages.length>0?i.data.messages[0]:"Some error",n(Object(u.a)("edit-profile",{_error:o})),t.abrupt("return",Promise.reject(i.data.messages[0]));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:var n={id:(new Date).getTime(),message:t.newPostText,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{newPostText:"",postData:[].concat(Object(i.a)(e.postData),[n])});case l:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case g:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case h:return Object(o.a)(Object(o.a)({},e),{},{postData:e.postData.filter((function(e){return e.id!=t.id}))});case d:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}},7:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return A}));var r,a,c=n(87),i=n.n(c).a.create({withCredentials:!0,headers:{"API-KEY":"8898ea91-03a8-4dfb-a060-ee03c44fe9f7"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return i.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return i.post("follow/".concat(e))},unfollow:function(e){return i.delete("follow/".concat(e))},getProfile:function(e){return s.getProfile(e)}},s={getProfile:function(e){return i.get("profile/".concat(e))},getStatus:function(e){return i.get("profile/status/".concat(e))},updateStatus:function(e){return i.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),i.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return i.put("profile",e)}};!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}));var u={me:function(){return i.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return i.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logout:function(){return i.delete("auth/login")}},A={getCaptchaUrl:function(){return i.get("security/get-captcha-url")}}},77:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},78:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(32),a=n(3),c="SEND-MESSAGE",i={dialogsData:[{id:1,name:"Dimych"},{id:2,name:"Artem"},{id:3,name:"Sanya"},{id:4,name:"Julia"},{id:5,name:"Losara"},{id:6,name:"Jane"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you"},{id:3,message:"Yo"}]},o=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;if(t.type===c){var n={id:6,message:t.newMessageBody};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])})}return e}}},[[228,2,3]]]);
//# sourceMappingURL=main.054a04c5.chunk.js.map