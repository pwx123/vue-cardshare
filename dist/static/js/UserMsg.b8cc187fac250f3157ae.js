webpackJsonp([6],{GCVE:function(e,s){},LQe4:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=t("mvHQ"),a=t.n(i),r=t("woOf"),n=t.n(r),o=t("mtWM"),u=t.n(o),d=t("hhm8"),m={components:{modal:t("8l5Z").a},data:function(){return{user:{},edituser:{},isEdit:!1,msg:"",mdShow:!1}},mounted:function(){this.user=JSON.parse(localStorage.getItem("userMsg")),this.edituser=n()({},this.user),this.user.loginUserEmail||this.back()},methods:{editOrcancel:function(){this.isEdit?this.isEdit=!1:this.isEdit=!0},removeOrsave:function(){var e=this;return Object(d.f)(this.edituser.userName)?Object(d.d)(this.edituser.phoneNum)?void u.a.post("/users/editUserMsg",{loginUserEmail:this.$cookie.get("loginUserEmail"),phoneNum:this.edituser.phoneNum,userName:this.edituser.userName}).then(function(s){"0"===s.data.status?(e.isEdit=!1,e.user=e.edituser,localStorage.setItem("userMsg",a()(e.edituser))):console.log(s.data)}):(this.msg="手机号码不符合规范",void(this.mdShow=!0)):(this.msg="姓名不能为空",void(this.mdShow=!0))},closeMd:function(){this.mdShow=!1},back:function(){this.$router.go(-1)}}},l={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("transition",{attrs:{name:"slide"}},[t("div",{staticClass:"usermsg"},[t("div",{staticClass:"header"},[t("i",{staticClass:"icon iconfont icon-back",on:{click:e.back}}),e._v(" "),t("span",[e._v("个人信息")])]),e._v(" "),t("div",{staticClass:"list setting first"},[t("span",{staticClass:"item"},[e._v("姓名")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.isEdit,expression:"!isEdit"}]},[e._v(e._s(e.user.userName?e.user.userName:"空"))]),e._v(" "),t("input",{directives:[{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"},{name:"model",rawName:"v-model",value:e.edituser.userName,expression:"edituser.userName"}],staticClass:"edit-input",attrs:{type:"text"},domProps:{value:e.edituser.userName},on:{input:function(s){s.target.composing||e.$set(e.edituser,"userName",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"list quit"},[t("span",{staticClass:"item"},[e._v("邮箱")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.isEdit,expression:"!isEdit"}]},[e._v(e._s(e.user.loginUserEmail))]),e._v(" "),t("input",{directives:[{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"},{name:"model",rawName:"v-model",value:e.edituser.loginUserEmail,expression:"edituser.loginUserEmail"}],staticClass:"edit-input",attrs:{type:"text",disabled:""},domProps:{value:e.edituser.loginUserEmail},on:{input:function(s){s.target.composing||e.$set(e.edituser,"loginUserEmail",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"list about"},[t("span",{staticClass:"item"},[e._v("电话")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.isEdit,expression:"!isEdit"}]},[e._v(e._s(e.user.phoneNum?e.user.phoneNum:"空"))]),e._v(" "),t("input",{directives:[{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"},{name:"model",rawName:"v-model",value:e.edituser.phoneNum,expression:"edituser.phoneNum"}],staticClass:"edit-input",attrs:{type:"text"},domProps:{value:e.edituser.phoneNum},on:{input:function(s){s.target.composing||e.$set(e.edituser,"phoneNum",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"btn"},[t("span",{staticClass:"edit",on:{click:e.editOrcancel}},[e._v(e._s(e.isEdit?"取消":"修改"))]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}],staticClass:"delete",on:{click:e.removeOrsave}},[e._v(e._s(e.isEdit?"保存":"删除"))])]),e._v(" "),t("modal",{attrs:{msg:e.msg,"md-show":e.mdShow},on:{closeMd:e.closeMd}})],1)])},staticRenderFns:[]};var v=t("VU/8")(m,l,!1,function(e){t("GCVE")},"data-v-bc0dc3c4",null);s.default=v.exports},mvHQ:function(e,s,t){e.exports={default:t("qkKv"),__esModule:!0}},qkKv:function(e,s,t){var i=t("FeBl"),a=i.JSON||(i.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}}});
//# sourceMappingURL=UserMsg.b8cc187fac250f3157ae.js.map