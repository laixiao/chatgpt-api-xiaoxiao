(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{4627:function(t,i,e){"use strict";e.r(i);var a=e("9267"),n=e("46ff");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("9c14");var o=e("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"98397022",null,!1,a["a"],void 0);i["default"]=c.exports},"46ff":function(t,i,e){"use strict";e.r(i);var a=e("cd8a"),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},"68d8":function(t,i,e){t.exports=e.p+"static/img/robt.fc6742a5.png"},9267:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("v-uni-view",{staticStyle:{height:"0"},attrs:{animation:t.anData}}),a("v-uni-scroll-view",{staticStyle:{width:"750rpx"},style:{height:t.srcollHeight},attrs:{"scroll-with-animation":!0,"scroll-y":"true","scroll-top":t.go},on:{touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.hideKey.apply(void 0,arguments)}}},[a("v-uni-view",{attrs:{id:"okk","scroll-with-animation":!0}},[t._l(t.msgList,(function(i,n){return a("v-uni-view",{key:n,staticClass:"flex-column-start"},[i.my?a("v-uni-view",{staticClass:"flex justify-end padding-right one-show  align-start  padding-top"},[a("v-uni-view",{staticClass:"flex justify-end",staticStyle:{width:"400rpx"}},[a("v-uni-view",{staticClass:"margin-left padding-chat bg-cyan",staticStyle:{"border-radius":"35rpx"}},[a("v-uni-text",{staticStyle:{"word-break":"break-all"}},[t._v(t._s(i.msg))])],1)],1)],1):t._e(),i.my?t._e():a("v-uni-view",{staticClass:"flex-row-start margin-left margin-top one-show"},[a("v-uni-view",{staticClass:"chat-img flex-row-center"},[a("v-uni-image",{staticStyle:{height:"75rpx",width:"75rpx"},attrs:{src:e("68d8"),mode:"aspectFit"}})],1),a("v-uni-view",{staticClass:"flex",staticStyle:{width:"500rpx"}},[a("v-uni-view",{staticClass:"margin-left padding-chat flex-column-start",staticStyle:{"border-radius":"35rpx","background-color":"#f9f9f9"}},[a("v-uni-text",{staticStyle:{"word-break":"break-all"}},[t._v(t._s(i.msg))]),1==i.type?a("v-uni-view",{staticClass:"flex-column-start",staticStyle:{color:"#2fa39b"}},[a("v-uni-text",{staticStyle:{color:"#838383","font-size":"22rpx","margin-top":"15rpx"}},[t._v("你可以这样问我:")]),t._l(i.questionList,(function(i,e){return a("v-uni-text",{key:e,staticStyle:{"margin-top":"30rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.answer(n,e)}}},[t._v(t._s(i))])})),a("v-uni-view",{staticClass:"flex-row-start  padding-top-sm"},[a("v-uni-text",{staticClass:"my-neirong-sm"},[t._v("没有你要的问题?")]),a("v-uni-text",{staticClass:"padding-left",staticStyle:{color:"#007AFF"}},[t._v("换一批")])],1)],2):t._e(),2==i.type?a("v-uni-view",{staticClass:"flex-column-start",staticStyle:{color:"#2fa39b"}},[a("v-uni-text",{staticStyle:{color:"#838383","font-size":"22rpx","margin-top":"15rpx"}},[t._v("小提示:")]),t._l(i.questionList,(function(i,e){return a("v-uni-text",{key:e,staticStyle:{"margin-top":"30rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.answer(n,e)}}},[t._v(t._s(i))])}))],2):t._e(),0==i.type?a("v-uni-view",{staticClass:"flex-column-start"},[a("v-uni-text",{staticClass:"padding-top-sm",staticStyle:{color:"#2fa39b"}},[t._v("提交意见与反馈")]),a("v-uni-text",{staticStyle:{color:"#838383","font-size":"22rpx","margin-top":"15rpx"}},[t._v("下面是一些常见问题,您可以点击对应的文字快速获取答案:")]),t._l(i.questionList,(function(i,e){return a("v-uni-text",{key:e,staticStyle:{"margin-top":"30rpx",color:"#2fa39b"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.answer(n,e)}}},[t._v(t._s(i))])})),a("v-uni-view",{staticClass:"flex-row-start  padding-top-sm"},[a("v-uni-text",{staticClass:"my-neirong-sm"},[t._v("没有你要的答案?")]),a("v-uni-text",{staticClass:"padding-left",staticStyle:{color:"#1396c5"}},[t._v("换一批")])],1)],2):t._e()],1)],1)],1)],1)})),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.msgLoad,expression:"msgLoad"}],staticClass:"flex-row-start margin-left margin-top"},[a("v-uni-view",{staticClass:"chat-img flex-row-center"},[a("v-uni-image",{staticStyle:{height:"75rpx",width:"75rpx"},attrs:{src:e("68d8"),mode:"aspectFit"}})],1),a("v-uni-view",{staticClass:"flex",staticStyle:{width:"500rpx"}},[a("v-uni-view",{staticClass:"margin-left padding-chat flex-column-start",staticStyle:{"border-radius":"35rpx","background-color":"#f9f9f9"}},[a("v-uni-view",{staticClass:"cuIcon-loading turn-load",staticStyle:{"font-size":"35rpx",color:"#3e9982"}})],1)],1)],1),a("v-uni-view",{staticStyle:{height:"120rpx"}})],2)],1),a("v-uni-view",{staticClass:"flex-column-center",staticStyle:{position:"fixed",bottom:"-180px"},attrs:{animation:t.animationData}},[a("v-uni-view",{staticClass:"bottom-dh-char flex-row-around",staticStyle:{"font-size":"55rpx"}},[a("v-uni-input",{staticClass:"dh-input",staticStyle:{"background-color":"#f0f0f0"},attrs:{type:"text","confirm-type":"search","placeholder-class":"my-neirong-sm",placeholder:"用一句简短的话描述您的问题"},on:{confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.sendMsg.apply(void 0,arguments)}},model:{value:t.msg,callback:function(i){t.msg=i},expression:"msg"}}),a("v-uni-view",{staticClass:"cu-tag bg-cyan round",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.sendMsg.apply(void 0,arguments)}}},[t._v("发送")]),a("v-uni-text",{staticClass:"cuIcon-roundaddfill text-brown",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.ckAdd.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"box-normal flex-row-around flex-wrap"},[a("v-uni-view",{staticClass:"tb-text"},[a("v-uni-view",{staticClass:"cuIcon-form"}),a("v-uni-text",[t._v("问题反馈")])],1),a("v-uni-view",{staticClass:"tb-text"},[a("v-uni-view",{staticClass:"cuIcon-form"}),a("v-uni-text",[t._v("人工客服")])],1)],1)],1)],1)},n=[]},"9c14":function(t,i,e){"use strict";var a=e("cf08"),n=e.n(a);n.a},cd8a:function(t,i,e){"use strict";var a,n,s;e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("ac1f"),e("14d9");var o={onLoad:function(){var t=this;uni.onKeyboardHeightChange((function(i){var e=uni.createSelectorQuery();e.select("#okk").boundingClientRect((function(e){var n=2*i.height-e.height-110*a;console.log(n),n>0&&(t.msgMove(n,300),s=n),0==i.height&&t.msgMove(0,0)})).exec()}));var i=uni.getSystemInfoSync();a=i.screenWidth/750,n=i.windowHeight,this.srcollHeight=i.windowHeight+"px"},data:function(){return{msgLoad:!1,anData:{},animationData:{},showTow:!1,msgList:[{my:!1,msg:"你好我是OpenAI旗下机器人",type:1,questionList:["广州明天天气怎么样？","讲一个笑话呗","你叫什么名字？"]}],msg:"",go:0,srcollHeight:0,conversationId:null,parentMessageId:null}},methods:{goPag:function(t){this.upTowmn(0,250),0!=this.keyHeight&&t-this.keyHeight>0&&this.upTowmn(this.keyHeight-t,250)},msgMove:function(t,i){var e=uni.createAnimation({duration:i,timingFunction:"linear"});this.animation=e,e.height(t).step(),this.anData=e.export()},msgGo:function(){var t=this,i=uni.createSelectorQuery();setTimeout((function(){i.select("#okk").boundingClientRect((function(i){i.height-n>0&&(t.go=i.height-n);var e=n-i.height;e-s<0&&(e<0?t.msgMove(0,200):t.msgMove(e,200))})).exec()}),100)},answer:function(t,i){console.log(t,i),this.msg=this.msgList[t].questionList[i]},sendMsg:function(){if(""==this.msg)return 0;this.msgList.push({msg:this.msg,my:!0}),this.msgGo(),this.msgKf(this.msgList.length-1,this.msg),this.msg=""},msgKf:function(t,i){var e=this;this.msgLoad=!0;var a={question:this.msg};this.conversationId&&(a.conversationId=this.conversationId),this.parentMessageId&&(a.parentMessageId=this.parentMessageId),uni.request({url:"https://www.diluapp.cn/openai/ask",data:a,header:{"custom-header":"hello"},success:function(i){console.log(i.data.data),e.msgLoad=!1,e.conversationId=i.data.data.conversationId,e.parentMessageId=i.data.data.id,e.msgList[t].msg=i.data.data.censored,e.msgList.push({my:!1,msg:i.data.data.text,type:-1}),e.msgGo()},fail:function(t){console.log(t),e.msgLoad=!1,e.msgGo()}})},ckAdd:function(){this.showTow?this.upTowmn(0,200):this.upTowmn(-180,350),this.showTow=!this.showTow},hideKey:function(){uni.hideKeyboard()},upTowmn:function(t,i){var e=uni.createAnimation({duration:i,timingFunction:"ease"});this.animation=e,e.translateY(t).step(),this.animationData=e.export()}}};i.default=o},cebb:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".bottom-dh-char[data-v-98397022]{background-color:#f9f9f9;width:%?750?%;height:%?110?%}.center-box[data-v-98397022]{width:%?720?%;padding-left:%?25?%}.hui-box[data-v-98397022]{width:%?750?%;height:100%}.dh-input[data-v-98397022]{width:%?500?%;height:%?65?%;border-radius:%?30?%;padding-left:%?15?%;background-color:#fff}.box-normal[data-v-98397022]{width:%?750?%;height:180px;background-color:#fff}.tb-text uni-view[data-v-98397022]{font-size:%?65?%}.tb-text uni-text[data-v-98397022]{font-size:%?25?%;color:#737373}.chat-img[data-v-98397022]{border-radius:50%;width:%?100?%;height:%?100?%;background-color:#f7f7f7}.padding-chat[data-v-98397022]{padding:%?17?% %?20?%}.tb-nv[data-v-98397022]{width:%?50?%;height:%?50?%}",""]),t.exports=i},cf08:function(t,i,e){var a=e("cebb");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("fc7f5608",a,!0,{sourceMap:!1,shadowMode:!1})}}]);