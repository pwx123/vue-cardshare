webpackJsonp([8],{"2dZT":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("Dd8w"),i=s.n(n),a=s("qwAB"),o={props:{msg:{type:String,default:null},type:{type:String,default:"primary"}},data:function(){return{color:{primary:"#409EFF",danger:"#ff3333",warn:"#ecc843"}}},watch:{type:function(t){var e=this.color[t];e||(e="#409EFF"),this.$refs.tips.style.borderLeft="10px solid "+e}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"tips",staticClass:"tips"},[e("div",{staticClass:"content"},[e("div",{staticClass:"msg"},[this._v(this._s(this.msg))])])])},staticRenderFns:[]};var l=s("VU/8")(o,r,!1,function(t){s("OMpZ")},"data-v-0e8a4b07",null).exports,c=s("NYxO"),u=s("hhm8"),v=s("8l5Z"),d=s("mtWM"),p=s.n(d),h={name:"Event",components:{scroll:a.a,tips:l,modal:v.a},data:function(){return{listenScroll:!0,pullDownRefresh:!0,probetype:3,eventList:[],msg:"",type:"primary",tipsShow:!1,modalmsg:"",mdShow:!1,userMsg:""}},computed:i()({},Object(c.b)(["refresh"])),mounted:function(){var t=this;this.userMsg=JSON.parse(localStorage.getItem("userMsg")),console.log(1),this.getEventList(),setTimeout(function(){var e=t.$refs.eventList.$el.offsetHeight;t.$refs.events.style.minHeight=e-25+"px"},20)},activated:function(){this.getEventList()},methods:{addEvent:function(){this.userMsg.phoneNum&&this.userMsg.userName?this.$router.push({path:"/AddEvent"}):(this.modalmsg="要添加事件，请先完善信息",this.mdShow=!0)},getEventList:function(){var t=this;p.a.post("/users/getEventList",{loginUserEmail:this.$cookie.get("loginUserEmail")}).then(function(e){"0"===e.data.status?e.data.result&&t._sortEventList(e.data.result):console.log(e.data)})},_sortEventList:function(t){var e=t.sort(function(t,e){return new Date(t.event.time)>new Date(e.event.time)?-1:1});this.eventList=e,this.$refs.eventList.refresh()},pulldown:function(){var t=this;p.a.post("/users/getEventList",{loginUserEmail:this.$cookie.get("loginUserEmail")}).then(function(e){"0"===e.data.status?e.data.result&&(t._sortEventList(e.data.result),t.type="primary",t.msg="刷新成功"):(t.type="danger",t.msg="刷新失败",console.log(e.data)),setTimeout(function(){t.tipsShow=!0},1e3),setTimeout(function(){t.tipsShow=!1},3e3)})},closeMd:function(){this.mdShow=!1,this.$router.push({path:"/UserMsg"})},getTime:function(t){return Object(u.g)(t)}},beforeRouteEnter:function(t,e,s){s(function(t){t.$refs.eventList.refresh()})}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"event"},[s("div",{staticClass:"header"},[s("span",[t._v("发现")]),t._v(" "),s("i",{staticClass:"icon iconfont icon-add",on:{click:t.addEvent}})]),t._v(" "),s("scroll",{ref:"eventList",staticClass:"eventList",attrs:{data:t.eventList,"pull-down-refresh":t.pullDownRefresh,"probe-type":t.probetype,"listen-scroll":t.listenScroll},on:{pulldown:t.pulldown}},[s("ul",{ref:"events",staticClass:"events"},t._l(t.eventList,function(e,n){return s("li",{key:n,staticClass:"eventItem"},[s("div",{staticClass:"item"},[s("a",{staticClass:"phoneNum",attrs:{href:"tel:"+e.phoneNum}},[s("span",[s("i",{staticClass:"icon iconfont icon-jisuanqi"})]),t._v(" "),s("span",[t._v(t._s(e.phoneNum))]),t._v(" "),s("span",{staticClass:"time"},[t._v(t._s(t.getTime(e.event.time)))])]),t._v(" "),s("div",{staticClass:"title"},[t._v(t._s(e.event.title))]),t._v(" "),s("div",{staticClass:"detail"},[s("p",[t._v("\n              "+t._s(e.event.detail)+"\n            ")])])])])}))]),t._v(" "),s("tips",{directives:[{name:"show",rawName:"v-show",value:t.tipsShow,expression:"tipsShow"}],staticClass:"tips",attrs:{msg:t.msg,type:t.type}}),t._v(" "),s("modal",{attrs:{msg:t.modalmsg,"md-show":t.mdShow},on:{closeMd:t.closeMd}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.eventList.length,expression:"!eventList.length"}],staticClass:"nomsg"},[t._v("暂无消息")])],1)},staticRenderFns:[]};var f=s("VU/8")(h,m,!1,function(t){s("vq//")},"data-v-f8406958",null);e.default=f.exports},OMpZ:function(t,e){},"vq//":function(t,e){}});
//# sourceMappingURL=Event.46750aa6d74a8f941e28.js.map