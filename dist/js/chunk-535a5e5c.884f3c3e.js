(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-535a5e5c"],{2601:function(t,s,n){},2945:function(t,s,n){"use strict";var a=n("2601"),e=n.n(a);e.a},"54c3":function(t,s,n){t.exports=n.p+"img/bgtop.ed43ac53.jpg"},"84af":function(t,s,n){"use strict";var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"banner"},[n("div",{staticClass:"mm"}),t._m(0),n("div",{staticClass:"banner-title"},[n("p",[t._v(t._s(t.title))])])])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"banner-img"},[a("img",{attrs:{src:n("54c3")}})])}],c={name:"Banner",props:{title:{type:String,default:""},img:{type:String,default:"../assets/img/bgtop.jpg"}}},i=c,o=(n("cc57"),n("2877")),r=Object(o["a"])(i,a,e,!1,null,"8f80614c",null);s["a"]=r.exports},"99ca":function(t,s,n){"use strict";n.r(s);var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"case"},[n("banner",{attrs:{img:"../assets/img/bgtop.jpg",title:"个人中心"}}),t._m(0)],1)},e=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"case-product"},[n("div",{staticClass:"case-product-content"},[n("p",{staticClass:"product-title"},[t._v("个人积分说明：")]),n("p",{staticClass:"product-content"},[t._v("1、使用本学习系统任一功能都可获得个人积分，具体详情为：每日题库练习上限+10分，每日模拟测试上限+10分，每日观影上限+4分，积分每一季度进行清零，体验者可在积分商店兑换相应实物奖励。")]),n("p",{staticClass:"product-content"},[t._v("2、个人积分不可转移，不可赠送，每季度清零前会有信息提醒。")]),n("p",{staticClass:"product-content"},[t._v("3、兑换实物奖励后扣除相应积分，请注意认真填写邮寄地址。")]),n("p",{staticClass:"product-content"},[t._v("4、本玩法最终解释权归盗梦·建筑安全沉浸式学习系统所有。")])])])}],c=n("84af"),i={components:{Banner:c["a"]},data:function(){return{pid:0,caseIdList:{}}},created:function(){this.pid=this.$route.params.id,window.console.log(this.pid)},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this;this.$http.get("Cases/GetCasesById/".concat(this.pid)).then(function(s){t.caseIdList=s.data,window.console.log(t.caseIdList)}).catch(function(t){window.console.log(t)})}}},o=i,r=(n("2945"),n("2877")),l=Object(r["a"])(o,a,e,!1,null,"354e00dd",null);s["default"]=l.exports},cc57:function(t,s,n){"use strict";var a=n("e954"),e=n.n(a);e.a},e954:function(t,s,n){}}]);
//# sourceMappingURL=chunk-535a5e5c.884f3c3e.js.map