(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function s(e){return c.p+"static/js/"+({}[e]||e)+"."+{"chunk-0d0aaf44":"065b7b07","chunk-729f3d22":"b821ee68","chunk-c7b676d4":"fe8219f1"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0d0aaf44":1,"chunk-729f3d22":1,"chunk-c7b676d4":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="static/css/"+({}[e]||e)+"."+{"chunk-0d0aaf44":"ecf36be1","chunk-729f3d22":"42b4521f","chunk-c7b676d4":"1a06b254"}[e]+".css",r=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1413:function(e,t,n){},"29d3":function(e,t,n){},"397d":function(e){e.exports=JSON.parse('{"receiver":"dingding2","status":"firing","alerts":[{"status":"firing","labels":{"alertname":"服务器存活探测","consul_type":"blackbox-icmp","group":"yunwei-ping","hostname":"sh2-fat-kubectl-1","instance":"192.168.35.18:9115","job":"Autodiscover-icmp","ping":"172.20.5.10","severity":"严重","yunwei":"test"},"annotations":{"description":"服务器 (172.20.5.10) 存活探测失败,可能已经宕机,请尽快查看!","summary":"存活探测失败"},"startsAt":"2021-10-20T03:04:22.615Z","endsAt":"0001-01-01T00:00:00Z","generatorURL":"http://sh3-tools-prometheus-1:9090/graph?g0.expr=probe_success%7Bconsul_type%3D%22blackbox-icmp%22%7D+%21%3D+1&g0.tab=1","fingerprint":"5582f114464c5dc3"},{"status":"firing","labels":{"alertname":"服务器存活探测","consul_type":"blackbox-icmp","group":"yunwei-ping","hostname":"sh3-tools-EMR-Core-1","instance":"192.168.35.18:9115","job":"Autodiscover-icmp","ping":"192.168.35.14","severity":"严重","yunwei":"test"},"annotations":{"description":"服务器 (192.168.35.14) 存活探测失败,可能已经宕机,请尽快查看!","summary":"存活探测失败"},"startsAt":"2021-10-20T03:04:22.615Z","endsAt":"0001-01-01T00:00:00Z","generatorURL":"http://sh3-tools-prometheus-1:9090/graph?g0.expr=probe_success%7Bconsul_type%3D%22blackbox-icmp%22%7D+%21%3D+1&g0.tab=1","fingerprint":"e1755cd18e72b740"}],"groupLabels":{"alertname":"服务器存活探测"},"commonLabels":{"alertname":"服务器存活探测","consul_type":"blackbox-icmp","group":"yunwei-ping","instance":"192.168.35.18:9115","job":"Autodiscover-icmp","severity":"严重","yunwei":"test"},"commonAnnotations":{"summary":"存活探测失败"},"externalURL":"http://sh3-tools-prometheus-1:9093","version":"4","groupKey":"{}:{alertname=\'服务器存活探测\'}","truncatedAlerts":0}')},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=(n("be3b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-container",{attrs:{id:"MyContainer-Container"}},[n("el-header",{attrs:{id:"MyContainer-Header"}},[n("NavHeader")],1),n("el-container",[n("el-aside",{attrs:{id:"MyContainer-Aside",width:"275px"}},[n("NavAside")],1),n("el-main",{attrs:{id:"MyContainer-Main"}},[n("router-view")],1)],1),n("el-footer",{attrs:{id:"MyContainer-Footer"}},[n("NavFooter")],1)],1)],1)}),r=[],i=(n("e9c4"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-menu",{staticStyle:{height:"100%"},attrs:{"collapse-transition":!0,"default-active":e.$route.name,"active-text-color":"#ffd04b","background-color":"#161823",mode:"horizontal",router:"","text-color":"#fff"},on:{select:e.handleSelect}},[a("el-menu-item",[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{height:"90%",src:n("9b19")}}),e._v("    "),a("span",{staticStyle:{"font-size":"15px"}},[e._v("GoMessage · 消息转发器")])])],1),a("el-menu-item",{staticStyle:{padding:"0"}},[a("router-link",{attrs:{to:"/"}},[a("el-button",{staticStyle:{color:"#fff","margin-left":"10px"},attrs:{type:"text",icon:"el-icon-location"}},[e._v(" "+e._s(e.getStoreNamespace)+" ")])],1)],1),a("el-row",{attrs:{justify:"end",type:"flex"}},[a("router-link",{attrs:{to:"/"}},[a("el-menu-item",{attrs:{index:"1-1"}},[a("i",{staticClass:"el-icon-position"}),e._v("消息入口")])],1),a("router-link",{attrs:{to:"/request_data"}},[a("el-menu-item",{attrs:{index:"2-1"}},[a("i",{staticClass:"el-icon-set-up"}),e._v("模板编写")])],1),a("router-link",{attrs:{to:"/data_client"}},[a("el-menu-item",{attrs:{index:"3-1"}},[a("i",{staticClass:"el-icon-chat-dot-square"}),e._v("接收客户端")])],1),a("el-menu-item",[a("el-link",{attrs:{underline:!1,href:"https://github.com/gomessage/gomessage#gomessage",target:"_blank",type:"primary"}},[a("i",{staticClass:"el-icon-document"}),e._v("文档 ")])],1)],1)],1)}),s=[],c={name:"NavHeader",data:function(){return{}},components:{},computed:{getStoreNamespace:function(){return this.$store.getters.getNamespace}},methods:{handleSelect:function(e,t){console.log(e,t)}}},l=c,u=(n("fd4e"),n("2877")),d=Object(u["a"])(l,i,s,!1,null,"7f0480fe",null),p=d.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-demo",attrs:{id:"NavFooter-Footer",mode:"horizontal","background-color":"#161823","text-color":"#fff","active-text-color":"#ffd04b","collapse-transition":!0},on:{select:e.handleSelect}},[n("el-row",{attrs:{type:"flex",justify:"center",id:"my-row"}},[n("el-menu-item",{attrs:{id:"NavFooter-menu-item",disabled:""}},[n("el-link",{attrs:{href:"https://github.com/gomessage/gomessage",type:"primary"}},[e._v("@ 2020~2023  ")]),n("el-link",{attrs:{href:"https://opensource.org/licenses/MIT",type:"primary"}},[e._v("MIT License   ")]),n("el-link",{attrs:{href:"https://github.com/gomessage/gomessage",type:"primary"}},[e._v("Github ")]),e._v(" or "),n("el-link",{attrs:{href:"https://gitee.com/gomessage/gomessage",type:"primary"}},[e._v(" Gitee  ")]),e._v(" Version: "),n("el-link",{attrs:{href:"https://github.com/gomessage/gomessage/releases",type:"primary"}},[e._v("v2.x  ")]),e._v(" Give feedback and Suggestions to the author: "),n("el-link",{attrs:{href:"mailto:taycc3223@gmail.com",type:"primary"}},[e._v("Email")])],1)],1)],1)},f=[],h={name:"NavFooter",data:function(){return{activeIndex:"1",activeIndex2:"1"}},methods:{handleSelect:function(e,t){console.log(e,t)}}},g=h,b=(n("f9ab"),Object(u["a"])(g,m,f,!1,null,"560092b6",null)),v=b.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticStyle:{height:"100%"},attrs:{"default-active":e.getStoreNamespace,"active-text-color":"#ffd04b","background-color":"#41555d","text-color":"#fff"}},[n("br"),e._l(e.namespaceList,(function(t,a){return n("el-menu-item",{key:a,staticStyle:{"text-align":"left"},attrs:{index:t.name},on:{click:function(n){return e.updateNamespace(t,n)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])])})),n("br"),n("el-menu-item",{staticStyle:{"text-align":"left"},attrs:{index:"998"}},[n("el-button",{staticStyle:{"padding-right":"35px"},attrs:{icon:"el-icon-setting",plain:"",size:"mini"},on:{click:function(t){e.dialogFormVisible222=!0}}},[e._v("管理推送通道 ")])],1),n("el-dialog",{attrs:{visible:e.dialogFormVisible222,title:"消息推送通道",modal:"",width:"60%",top:"10vh","lock-scroll":""},on:{"update:visible":function(t){e.dialogFormVisible222=t}}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.namespaceList,border:"","header-cell-style":{background:"#2f2f35",color:"#fff"}}},[n("el-table-column",{attrs:{prop:"name",label:"名称",width:"180"}}),n("el-table-column",{attrs:{prop:"description",label:"描述"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"small",type:"danger"},nativeOn:{click:function(n){return n.preventDefault(),e.deleteOneNamespace(t.$index,e.namespaceList)}}},[e._v("删除 ")])]}}])})],1),n("br"),n("p",{staticClass:"authorStatement2"},[e._v("GoMessage v2 版本支持多通道并发，只需部署一个GoMessage实例，就可承载多类型、多链路、多环境下的消息快速转发。")]),n("br"),n("el-divider",{attrs:{"content-position":"left"}},[n("i",{staticClass:"el-icon-circle-plus-outline"},[e._v(" 新增通道")])]),n("el-form",{staticStyle:{width:"60%"},attrs:{model:e.namespaceForm}},[n("el-form-item",{attrs:{label:"通道名称","label-width":"105px"}},[n("el-input",{attrs:{autocomplete:"off",placeholder:"请输入通道名称（只能是纯英文名称，不限大小写）"},model:{value:e.namespaceForm.name,callback:function(t){e.$set(e.namespaceForm,"name",t)},expression:"namespaceForm.name"}})],1),n("el-form-item",{attrs:{label:"通道描述","label-width":"105px"}},[n("el-input",{attrs:{autocomplete:"off",type:"textarea",rows:3,placeholder:"请输入推送通道的描述信息"},model:{value:e.namespaceForm.description,callback:function(t){e.$set(e.namespaceForm,"description",t)},expression:"namespaceForm.description"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible222=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.addNamespace}},[e._v("确 定")])],1)],1)],2)},_=[],x=(n("b0c0"),n("a434"),n("d3b7"),n("159b"),n("6cac")),k={name:"NavAside",data:function(){return{namespaceList:[{name:"default",description:"default",is_active:!0}],dialogFormVisible222:!1,namespaceForm:{name:"",description:"",is_active:!1}}},methods:{pullNamespace:function(){var e=this;Object(x["e"])().then((function(t){1===t.data.code&&(e.namespaceList=t.data.result)})).catch((function(e){console.log(e)}))},updateNamespace:function(e,t){var n=e.name;console.log(n,t),this.$store.commit("updateNamespace",n),location.reload()},addNamespace:function(){this.dialogFormVisible222=!1,this.namespaceForm.is_active=!0,Object(x["i"])(this.namespaceForm).then((function(e){console.log(e),location.reload()}))},deleteOneNamespace:function(e,t){var n=this,a=t[e].id;Object(x["b"])(a).then((function(a){1===a.data.code?(n.$message.success("删除一行数据成功..."),t.splice(e,1)):n.$message.error("删除数据失败...")})).catch((function(e){console.log(e)}))},activeNamespace:function(){this.namespaceList.forEach((function(e){Object(x["m"])(e.id,e).then((function(e){console.log(e.data.result)})).catch((function(e){console.log(e)}))})),this.$message.success("数据更新成功...")}},computed:{getStoreNamespace:function(){return this.$store.getters.getNamespace}},created:function(){this.pullNamespace()}},w=k,S=(n("e5cd"),Object(u["a"])(w,y,_,!1,null,"6ff8eb87",null)),N=S.exports,j={name:"app",components:{NavHeader:p,NavFooter:v,NavAside:N},created:function(){var e=this;sessionStorage.getItem("store")&&this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem("store")))),window.addEventListener("beforeunload",(function(){sessionStorage.setItem("store",JSON.stringify(e.$store.state))}))}},C=j,O=(n("034f"),Object(u["a"])(C,o,r,!1,null,null,null)),D=O.exports,F=(n("3ca3"),n("ddb0"),n("8c4f")),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",{staticClass:"shadow",staticStyle:{"margin-top":"40px"}},[n("el-col",{attrs:{offset:7,span:10}},[n("Domain")],1)],1),n("el-row",[n("el-col",{staticStyle:{"margin-top":"150px"},attrs:{offset:7,span:10}},[n("el-button",{attrs:{round:""},on:{click:e.simulation}},[e._v("模拟 AlertManager 推送一条报警信息")])],1)],1)],1)},$=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{staticClass:"box-card",staticStyle:{width:"100%"},attrs:{shadow:"always",id:"yinying"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",{staticStyle:{"padding-left":"80px"}},[e._v("消息推送地址")]),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){return e.copyCode()}}},[e._v("一键复制")])],1),n("div",[n("pre",{attrs:{id:"DomainUrlStyle"}},[n("code",{attrs:{id:"DomainUrlContent"}},[e._v(e._s(e.myDomain)+e._s(e.showNamespace))])])])])},E=[],L=(n("ac1f"),n("1276"),{name:"cDomain",data:function(){return{myDomain:""}},computed:{getStoreNamespace:function(){return this.$store.getters.getNamespace},showNamespace:function(){return"default"===this.getStoreNamespace?"message":this.getStoreNamespace}},methods:{getDomain:function(){var e=window.location.href,t=e.split("#/")[0];console.log(t),this.myDomain=t+"go/"},copyCode:function(){var e=document.getElementById("DomainUrlContent");window.getSelection().selectAllChildren(e),document.execCommand("Copy"),this.$message("复制成功...")}},created:function(){this.getDomain()}}),M=L,T=(n("da68"),Object(u["a"])(M,P,E,!1,null,"b2f5cb96",null)),G=T.exports,I={name:"ViewHome",components:{Domain:G},methods:{simulation:function(){var e=this,t=n("397d");Object(x["h"])(this.$store.getters.getNamespace,t).then((function(t){console.log(t),e.$message.success("模拟消息推送成功...")})).catch((function(e){console.log(e)}))}},created:function(){this.$store.commit("updateStepsActive",0)}},U=I,V=Object(u["a"])(U,A,$,!1,null,"74cd24e7",null),H=V.exports;a["default"].use(F["a"]);var q=[{path:"/",name:"1-1",component:H},{path:"/data_format",name:"DataFormat",component:function(){return n.e("chunk-c7b676d4").then(n.bind(null,"7d3c"))}},{path:"/request_data",name:"2-1",component:function(){return n.e("chunk-0d0aaf44").then(n.bind(null,"b01b"))}},{path:"/data_client",name:"3-1",component:function(){return n.e("chunk-729f3d22").then(n.bind(null,"37fb"))}}],B=new F["a"]({routes:q}),z=B,J=n("2f62");a["default"].use(J["a"]);var R=new J["a"].Store({state:{StepsActive:0,DrawerStatus:!1,Namespace:"default"},getters:{getNamespace:function(e){return e.Namespace}},mutations:{updateStepsActive:function(e,t){e.StepsActive=t},updateDrawerStatus:function(e,t){e.DrawerStatus=t},updateNamespace:function(e,t){e.Namespace=t}},actions:{},modules:{}}),Z=n("5c96"),K=n.n(Z);n("0fae");a["default"].use(K.a),a["default"].config.productionTip=!1,new a["default"]({router:z,store:R,render:function(e){return e(D)}}).$mount("#app"),a["default"].prototype.dateFormat=function(e){console.log(e);var t=e;if(null!=t){var n=new Date(t),a=n.getFullYear(),o=n.getMonth()+1,r=n.getDate(),i=n.getHours(),s=n.getMinutes(),c=n.getSeconds();return a+"-"+(o<10?"0":"")+o+"-"+(r<10?"0":"")+r+(i<10?"0":"")+" "+i+":"+(s<10?"0":"")+s+":"+(c<10?"0":"")+c}}},"6cac":function(e,t,n){"use strict";n.d(t,"h",(function(){return o})),n.d(t,"n",(function(){return r})),n.d(t,"o",(function(){return i})),n.d(t,"k",(function(){return s})),n.d(t,"f",(function(){return c})),n.d(t,"j",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"l",(function(){return m})),n.d(t,"a",(function(){return f})),n.d(t,"e",(function(){return h})),n.d(t,"i",(function(){return g})),n.d(t,"b",(function(){return b})),n.d(t,"m",(function(){return v}));var a=n("be3b"),o=function(e,t){return a["a"].Post("/go/"+e,t)},r=function(e,t){return a["a"].Get("/api/v1/"+e+"/json",t)},i=function(e,t){return a["a"].Get("/api/v1/"+e+"/vars",t)},s=function(e,t){return a["a"].Post("/api/v1/"+e+"/vars",t)},c=function(e,t){return a["a"].Get("/api/v1/"+e+"/template",t)},l=function(e,t){return a["a"].Post("/api/v1/"+e+"/template",t)},u=function(e,t){return a["a"].Get("/api/v1/"+e+"/client",t)},d=function(e,t){return a["a"].Post("/api/v1/"+e+"/client",t)},p=function(e,t,n){return a["a"].Get("/api/v1/"+e+"/client/"+t,n)},m=function(e,t,n){return a["a"].Put("/api/v1/"+e+"/client/"+t,n)},f=function(e,t,n){return a["a"].Delete("/api/v1/"+e+"/client/"+t,n)},h=function(e){return a["a"].Get("/api/v1/namespace",e)},g=function(e){return a["a"].Post("/api/v1/namespace",e)},b=function(e){return a["a"].Delete("/api/v1/namespace/"+e)},v=function(e,t){return a["a"].Put("/api/v1/namespace/"+e,t)}},"84b6":function(e,t,n){},"85ec":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"static/img/logo.45c29d20.svg"},b52f:function(e,t,n){},be3b:function(e,t,n){"use strict";n("d3b7");var a=n("bc3a"),o=n.n(a),r=o.a.create({baseURL:"",timeout:6e4});r.interceptors.request.use((function(e){return e.headers={"Content-Type":"application/json"},e}),(function(e){return Promise.reject(e)})),r.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),t["a"]={Get:function(e,t,n){return r({method:"get",url:e,headers:n,params:t})},Delete:function(e,t,n){return r({method:"delete",url:e,headers:n,params:t})},Post:function(e,t,n){return r({method:"post",url:e,headers:n,data:t})},Put:function(e,t,n){return r({method:"put",url:e,headers:n,data:t})}}},da68:function(e,t,n){"use strict";n("b52f")},e5cd:function(e,t,n){"use strict";n("1413")},f9ab:function(e,t,n){"use strict";n("84b6")},fd4e:function(e,t,n){"use strict";n("29d3")}});
//# sourceMappingURL=app.481a059c.js.map