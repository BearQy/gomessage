(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0adef9e7"],{"4f6f":function(t,e,a){},"7e0b":function(t,e,a){"use strict";a("4f6f")},e9c4:function(t,e,a){var n=a("23e7"),o=a("da84"),r=a("d066"),d=a("2ba4"),c=a("e330"),s=a("d039"),i=o.Array,u=r("JSON","stringify"),l=c(/./.exec),f=c("".charAt),p=c("".charCodeAt),g=c("".replace),m=c(1..toString),h=/[\uD800-\uDFFF]/g,C=/^[\uD800-\uDBFF]$/,v=/^[\uDC00-\uDFFF]$/,y=function(t,e,a){var n=f(a,e-1),o=f(a,e+1);return l(C,t)&&!l(v,o)||l(v,t)&&!l(C,n)?"\\u"+m(p(t,0),16):t},w=s((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&n({target:"JSON",stat:!0,forced:w},{stringify:function(t,e,a){for(var n=0,o=arguments.length,r=i(o);n<o;n++)r[n]=arguments[n];var c=d(u,null,r);return"string"==typeof c?g(c,h,y):c}})},f1f3:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card",attrs:{id:"DataFormatCard",shadow:"always"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"padding-left":"80px"}},[t._v("Request Data")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0","margin-left":"15px"},attrs:{type:"text"},on:{click:function(e){return t.getServerData()}}},[t._v("劫持数据")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){return t.copyCode()}}},[t._v("一键复制")])],1),a("div",[a("div",{attrs:{id:"codeTime"}},[t._v("数据过境时间："+t._s(t.codeUpdateTime))]),a("pre",{attrs:{id:"CodeStyle"}},[a("code",{attrs:{id:"CodeContent"}},[t._v(t._s(t.codeJsonContent))])])])])},o=[],r=(a("e9c4"),{name:"cCodeFormat",data:function(){return{codeJsonContent:"点击<刷新>查看request数据...",codeUpdateTime:null,arr2:[]}},methods:{copyCode:function(){var t=document.getElementById("CodeContent");window.getSelection().selectAllChildren(t),document.execCommand("Copy"),this.$message("复制成功...")},getServerData:function(){var t=this;this.axios({url:"/web/json",method:"get"}).then((function(e){console.log(e.data);var a=e["data"]["json_data"],n=e["data"]["update_time"];null===a?t.$message({showClose:!1,message:"没有数据进入GoMessage服务，无法向您展示数据。"}):(t.codeJsonContent=JSON.stringify(a,null,4),t.codeUpdateTime=t.dateFormat(new Date(n)))})).catch((function(t){console.log(t)}))}}}),d=r,c=(a("7e0b"),a("2877")),s=Object(c["a"])(d,n,o,!1,null,"60e7442c",null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-0adef9e7.51c0330f.js.map