(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/componentsB/skeleton/index"],{"0a84":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{userInfo:{avatarUrl:"https://cdn.uviewui.com/uview/common/logo.png",nickName:"uView"},lists:["君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。","人生得意须尽欢，莫使金樽空对月","天生我材必有用，千金散尽还复来"],loading:!0,animation:!1,elColor:"#e5e5e5",borderRadius:10}},computed:{current:function(){return this.loading?0:1}},onLoad:function(){this.getData()},methods:{animationChange:function(n){this.animation=0==n,this.getData()},loadingChange:function(n){this.loading=0==n,0==n&&this.getData()},styleChange:function(n){0==n?(this.elColor=this.$u.color["primary"],this.borderRadius=14):(this.elColor="#e5e5e5",this.borderRadius=10),this.getData()},getData:function(){var n=this;this.loading=!0,setTimeout((function(){n.loading=!1}),3e3)}}};t.default=u},"1ee0":function(n,t,e){},"3a4b":function(n,t,e){"use strict";var u={uToast:function(){return e.e("uview-ui/components/u-toast/u-toast").then(e.bind(null,"c927"))},uSkeleton:function(){return e.e("uview-ui/components/u-skeleton/u-skeleton").then(e.bind(null,"12b3"))},uSubsection:function(){return e.e("uview-ui/components/u-subsection/u-subsection").then(e.bind(null,"7707"))}},o=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return u}))},5912:function(n,t,e){"use strict";e.r(t);var u=e("0a84"),o=e.n(u);for(var i in u)"default"!==i&&function(n){e.d(t,n,(function(){return u[n]}))}(i);t["default"]=o.a},a703:function(n,t,e){"use strict";(function(n){e("e1a2");u(e("66fd"));var t=u(e("b757"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},b757:function(n,t,e){"use strict";e.r(t);var u=e("3a4b"),o=e("5912");for(var i in o)"default"!==i&&function(n){e.d(t,n,(function(){return o[n]}))}(i);e("dae8");var a,r=e("f0c5"),c=Object(r["a"])(o["default"],u["b"],u["c"],!1,null,"636516a2",null,!1,u["a"],a);t["default"]=c.exports},dae8:function(n,t,e){"use strict";var u=e("1ee0"),o=e.n(u);o.a}},[["a703","common/runtime","common/vendor"]]]);