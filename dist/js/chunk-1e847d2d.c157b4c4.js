(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e847d2d"],{"4e1b":function(t,s,e){},"54c3":function(t,s,e){t.exports=e.p+"img/bgtop.ed43ac53.jpg"},"84af":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"banner"},[e("div",{staticClass:"mm"}),t._m(0),e("div",{staticClass:"banner-title"},[e("p",[t._v(t._s(t.title))])])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"banner-img"},[a("img",{attrs:{src:e("54c3")}})])}],n={name:"Banner",props:{title:{type:String,default:""},img:{type:String,default:"../assets/img/bgtop.jpg"}}},c=n,o=(e("cc57"),e("2877")),r=Object(o["a"])(c,a,i,!1,null,"8f80614c",null);s["a"]=r.exports},9004:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"case"},[e("banner",{attrs:{img:"../assets/img/bgtop.jpg"}}),e("div",{staticClass:"case-product"},[e("div",{staticClass:"case-product-content"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgserver+t.caseIdList.Img,expression:"imgserver+caseIdList.Img"}],attrs:{alt:""}}),e("p",{staticClass:"product-title"},[t._v(t._s(t.caseIdList.Title))]),e("p",{staticClass:"product-time"},[t._v(t._s(t.caseIdList.CreateTime))]),e("p",{staticClass:"product-content"},[t._v(t._s(t.caseIdList.Content))])])])],1)},i=[],n=e("84af"),c={components:{Banner:n["a"]},data:function(){return{pid:0,caseIdList:{}}},created:function(){this.pid=this.$route.params.id,window.console.log(this.pid)},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this;this.$http.get("Cases/GetCasesById/".concat(this.pid)).then(function(s){t.caseIdList=s.data,window.console.log(t.caseIdList)}).catch(function(t){window.console.log(t)})}}},o=c,r=(e("c567"),e("2877")),d=Object(r["a"])(o,a,i,!1,null,"809d5696",null);s["default"]=d.exports},c567:function(t,s,e){"use strict";var a=e("4e1b"),i=e.n(a);i.a},cc57:function(t,s,e){"use strict";var a=e("e954"),i=e.n(a);i.a},e954:function(t,s,e){}}]);
//# sourceMappingURL=chunk-1e847d2d.c157b4c4.js.map