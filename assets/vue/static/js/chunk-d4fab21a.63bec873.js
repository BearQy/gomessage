(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4fab21a"],{"7d3c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{attrs:{shadow:"always"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",{staticStyle:{"padding-left":"100px"}},[t._v("劫持【 "),n("span",{staticStyle:{"font-size":"18px",color:"#3de1ad","font-weight":"900"}},[t._v(t._s(t.getStoreNamespace))]),t._v(" 】通道中的最新过境数据")]),n("el-button",{staticStyle:{float:"right",padding:"3px 0","margin-left":"10px"},attrs:{type:"text"},on:{click:function(e){return t.getServerData()}}},[t._v(" 劫持数据 ")]),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){return t.copyCode()}}},[t._v("一键复制")])],1),n("div",[n("pre",{attrs:{id:"CodeStyle"}},[n("code",{attrs:{id:"CodeContent"}},[t._v(t._s(t.codeJsonContent))])])])])},o=[],s=(n("e9c4"),n("6cac")),c={name:"cCodeFormat",data:function(){return{codeJsonContent:"点击 <劫持数据> 可以看到推送进GoMessage的原始数据...\n\n每次 <劫持数据> 都可以实时抓取到最新的一条数据...\n\n此处对数据进行了格式化与对齐，您可以把数据 <一键复制> 到其它地方使用...",codeUpdateTime:null,arr2:[]}},computed:{getStoreNamespace:function(){return this.$store.getters.getNamespace}},methods:{copyCode:function(){var t=document.getElementById("CodeContent");window.getSelection().selectAllChildren(t),document.execCommand("Copy"),this.$message("复制成功...")},getServerData:function(){var t=this;Object(s["p"])(this.$store.getters.getNamespace,null).then((function(e){var n=e.data.result["request_json"],a=e.data.result["request_time"];null===n||0===n.length?t.$message({showClose:!1,message:"没有数据进入GoMessage服务，无法向您展示数据。"}):(t.codeJsonContent=JSON.stringify(n,null,2),t.codeUpdateTime=t.dateFormat(new Date(a)))})).catch((function(t){console.log(t)}))}}},r=c,d=(n("fa18"),n("2877")),i=Object(d["a"])(r,a,o,!1,null,"5e781ea1",null);e["default"]=i.exports},8382:function(t,e,n){},fa18:function(t,e,n){"use strict";n("8382")}}]);
//# sourceMappingURL=chunk-d4fab21a.63bec873.js.map