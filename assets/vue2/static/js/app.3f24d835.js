(function(e){function t(t){for(var a,r,s=t[0],c=t[1],u=t[2],l=0,m=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function s(e){return c.p+"static/js/"+({}[e]||e)+"."+{"chunk-24a97a74":"4fa742d9","chunk-2ddf20ae":"339140bc","chunk-54683062":"a8804065"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-24a97a74":1,"chunk-2ddf20ae":1,"chunk-54683062":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="static/css/"+({}[e]||e)+"."+{"chunk-24a97a74":"30a00c47","chunk-2ddf20ae":"a270d7cd","chunk-54683062":"c5861430"}[e]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){u=m[s],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],p.parentNode.removeChild(p),n(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var m=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",m.name="ChunkLoadError",m.type=a,m.request=r,n[1](m)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var m=0;m<u.length;m++)t(u[m]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0c7c":function(e,t,n){"use strict";n("e601")},1955:function(e,t,n){"use strict";n("d05b")},"397d":function(e){e.exports=JSON.parse('{"receiver":"dingding2","status":"firing","alerts":[{"status":"firing","labels":{"alertname":"服务器存活探测","consul_type":"blackbox-icmp","group":"yunwei-ping","hostname":"sh2-fat-kubectl-1","instance":"192.168.35.18:9115","job":"Autodiscover-icmp","ping":"172.20.5.10","severity":"严重","yunwei":"test"},"annotations":{"description":"服务器 (172.20.5.10) 存活探测失败,可能已经宕机,请尽快查看!","summary":"存活探测失败"},"startsAt":"2021-10-20T03:04:22.615Z","endsAt":"0001-01-01T00:00:00Z","generatorURL":"http://sh3-tools-prometheus-1:9090/graph?g0.expr=probe_success%7Bconsul_type%3D%22blackbox-icmp%22%7D+%21%3D+1&g0.tab=1","fingerprint":"5582f114464c5dc3"},{"status":"firing","labels":{"alertname":"服务器存活探测","consul_type":"blackbox-icmp","group":"yunwei-ping","hostname":"sh3-tools-EMR-Core-1","instance":"192.168.35.18:9115","job":"Autodiscover-icmp","ping":"192.168.35.14","severity":"严重","yunwei":"test"},"annotations":{"description":"服务器 (192.168.35.14) 存活探测失败,可能已经宕机,请尽快查看!","summary":"存活探测失败"},"startsAt":"2021-10-20T03:04:22.615Z","endsAt":"0001-01-01T00:00:00Z","generatorURL":"http://sh3-tools-prometheus-1:9090/graph?g0.expr=probe_success%7Bconsul_type%3D%22blackbox-icmp%22%7D+%21%3D+1&g0.tab=1","fingerprint":"e1755cd18e72b740"}],"groupLabels":{"alertname":"服务器存活探测"},"commonLabels":{"alertname":"服务器存活探测","consul_type":"blackbox-icmp","group":"yunwei-ping","instance":"192.168.35.18:9115","job":"Autodiscover-icmp","severity":"严重","yunwei":"test"},"commonAnnotations":{"summary":"存活探测失败"},"externalURL":"http://sh3-tools-prometheus-1:9093","version":"4","groupKey":"{}:{alertname=\'服务器存活探测\'}","truncatedAlerts":0}')},4712:function(e,t,n){"use strict";n("74aa")},5614:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=(n("be3b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-container",{attrs:{id:"MyContainer-Container"}},[n("el-aside",{attrs:{id:"MyContainer-Aside",width:"300px"}},[n("NavAside")],1),n("el-container",[n("el-header",{attrs:{id:"MyContainer-Header"}},[n("NavHeader")],1),n("el-main",{attrs:{id:"MyContainer-Main"}},[n("router-view")],1),n("el-footer",{attrs:{id:"MyContainer-Footer"}},[n("NavFooter")],1)],1)],1)],1)}),o=[],i=(n("e9c4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticStyle:{height:"100%"},attrs:{"default-active":e.$route.name,"active-text-color":"#ffd04b","background-color":"#303133","text-color":"#fff","collapse-transition":!0,mode:"horizontal",router:""},on:{select:e.handleSelect}},[n("el-menu-item",{staticStyle:{padding:"0"}},[n("router-link",{attrs:{to:"/"}},[n("el-button",{staticStyle:{color:"navy","margin-left":"20px"},attrs:{icon:"el-icon-location"}},[e._v(" "+e._s(e.getStoreNamespace)+" ")])],1)],1),n("el-row",{attrs:{justify:"end",type:"flex"}},[n("router-link",{attrs:{to:"/"}},[n("el-menu-item",{attrs:{index:"1-1"}},[n("i",{staticClass:"el-icon-position"}),e._v("消息入口")])],1),n("router-link",{attrs:{to:"/request_data"}},[n("el-menu-item",{attrs:{index:"2-1"}},[n("i",{staticClass:"el-icon-set-up"}),e._v("模板编写")])],1),n("router-link",{attrs:{to:"/data_client"}},[n("el-menu-item",{attrs:{index:"3-1"}},[n("i",{staticClass:"el-icon-chat-dot-square"}),e._v("接收客户端")])],1),n("el-menu-item",[n("el-link",{attrs:{underline:!1,href:"https://github.com/gomessage/gomessage#gomessage",target:"_blank",type:"primary"}},[n("i",{staticClass:"el-icon-document"}),e._v("文档")])],1)],1)],1)}),s=[],c={name:"NavHeader",data:function(){return{}},components:{},computed:{getStoreNamespace:function(){return this.$store.getters.getNamespace}},methods:{handleSelect:function(e,t){console.log(e,t)}}},u=c,l=(n("4712"),n("2877")),m=Object(l["a"])(u,i,s,!1,null,"f518ef0c",null),p=m.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-demo",attrs:{id:"NavFooter-Footer",mode:"horizontal","background-color":"#303133","text-color":"#fff","active-text-color":"#ffd04b","collapse-transition":!0},on:{select:e.handleSelect}},[n("el-row",{attrs:{type:"flex",justify:"center",id:"my-row"}},[n("el-menu-item",{attrs:{id:"NavFooter-menu-item",disabled:""}},[n("el-link",{attrs:{href:"https://github.com/gomessage/gomessage",type:"primary"}},[e._v("@ 2020~2023  ")]),n("el-link",{attrs:{href:"https://opensource.org/licenses/MIT",type:"primary"}},[e._v("MIT License   ")]),n("el-link",{attrs:{href:"https://github.com/gomessage/gomessage",type:"primary"}},[e._v("Github ")]),e._v(" or "),n("el-link",{attrs:{href:"https://gitee.com/gomessage/gomessage",type:"primary"}},[e._v(" Gitee  ")]),e._v(" Version : "),n("el-link",{attrs:{href:"https://github.com/gomessage/gomessage/releases",type:"primary"}},[e._v("v2.0.1  ")]),e._v(" Give feedback and Suggestions to the author : "),n("el-link",{attrs:{href:"mailto:taycc3223@gmail.com",type:"primary"}},[e._v("Email")])],1)],1)],1)},f=[],g={name:"NavFooter",data:function(){return{activeIndex:"1",activeIndex2:"1"}},methods:{handleSelect:function(e,t){console.log(e,t)}}},h=g,v=(n("1955"),Object(l["a"])(h,d,f,!1,null,"6bac470a",null)),b=v.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-menu",{staticStyle:{height:"100%"},attrs:{"default-active":e.getStoreNamespace,"active-text-color":"#ffd04b","background-color":"#000","text-color":"#fff"}},[a("el-menu-item",{attrs:{index:"999"}},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{height:"90%",src:n("9b19")}}),e._v("    "),a("span",{staticStyle:{"font-size":"15px",color:"#fff"}},[e._v("GoMessage · 消息转发器")])])],1),a("br"),e._l(e.namespaceList,(function(t,n){return a("el-menu-item",{key:n,staticStyle:{"text-align":"left"},attrs:{index:t.name},on:{click:function(n){return e.updateNamespace(t,n)}}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])])})),a("br"),a("el-menu-item",{staticStyle:{"text-align":"left"},attrs:{index:"998"}},[a("el-button",{attrs:{plain:"",size:"mini",icon:"el-icon-star-off"},on:{click:function(t){e.dialogFormVisible222=!0}}},[e._v("新增命名空间 ")])],1),a("el-dialog",{staticStyle:{"text-align":"left"},attrs:{title:"新增命名空间",visible:e.dialogFormVisible222},on:{"update:visible":function(t){e.dialogFormVisible222=t}}},[a("el-form",{staticStyle:{width:"70%"},attrs:{model:e.namespaceForm}},[a("el-form-item",{attrs:{label:"名称","label-width":"200px"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.namespaceForm.name,callback:function(t){e.$set(e.namespaceForm,"name",t)},expression:"namespaceForm.name"}})],1),a("el-form-item",{attrs:{label:"描述","label-width":"200px"}},[a("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:e.namespaceForm.description,callback:function(t){e.$set(e.namespaceForm,"description",t)},expression:"namespaceForm.description"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible222=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.addNamespace}},[e._v("确 定")])],1)],1)],2)},_=[],x=(n("b0c0"),n("6cac")),k={name:"NavAside",data:function(){return{namespaceList:[{name:"default"},{name:"prometheus"},{name:"alertmanager"},{name:"zabbix"},{name:"elasticsearch"},{name:"grafana"}],dialogFormVisible222:!1,namespaceForm:{name:"",description:"",is_active:!1}}},methods:{pullNamespace:function(){var e=this;Object(x["d"])().then((function(t){1===t.data.code&&(e.namespaceList=t.data.result)})).catch((function(e){console.log(e)}))},updateNamespace:function(e,t){var n=e.name;console.log(n,t),this.$store.commit("updateNamespace",n),location.reload()},addNamespace:function(){this.dialogFormVisible222=!1,this.namespaceForm.is_active=!0,Object(x["h"])(this.namespaceForm).then((function(e){console.log(e),location.reload()}))}},computed:{getStoreNamespace:function(){return this.$store.getters.getNamespace}},created:function(){this.pullNamespace()}},S=k,w=(n("0c7c"),Object(l["a"])(S,y,_,!1,null,"026e222a",null)),N=w.exports,j={name:"app",components:{NavHeader:p,NavFooter:b,NavAside:N},created:function(){var e=this;sessionStorage.getItem("store")&&this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem("store")))),window.addEventListener("beforeunload",(function(){sessionStorage.setItem("store",JSON.stringify(e.$store.state))}))}},C=j,D=(n("034f"),Object(l["a"])(C,r,o,!1,null,null,null)),F=D.exports,A=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",{staticClass:"shadow",staticStyle:{"margin-top":"20px"}},[n("el-col",{attrs:{span:10,offset:7}},[n("Domain")],1)],1),n("el-row",[n("el-col",{staticStyle:{"margin-top":"150px"},attrs:{span:10,offset:7}},[n("el-button",{attrs:{round:""},on:{click:e.simulation}},[e._v("模拟 AlertManager 推送一条报警信息")])],1)],1)],1)},$=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{staticClass:"box-card",staticStyle:{width:"100%"},attrs:{shadow:"always",id:"yinying"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",{staticStyle:{"padding-left":"80px"}},[e._v("消息推送地址")]),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){return e.copyCode()}}},[e._v("一键复制")])],1),n("div",[n("pre",{attrs:{id:"DomainUrlStyle"}},[n("code",{attrs:{id:"DomainUrlContent"}},[e._v(e._s(e.myDomain)+e._s(e.getStoreNamespace))])])])])},E=[],M=(n("ac1f"),n("1276"),{name:"cDomain",data:function(){return{myDomain:""}},computed:{getStoreNamespace:function(){return this.$store.getters.getNamespace}},methods:{getDomain:function(){var e=window.location.href,t=e.split("#/")[0];console.log(t),this.myDomain=t+"go/"},copyCode:function(){var e=document.getElementById("DomainUrlContent");window.getSelection().selectAllChildren(e),document.execCommand("Copy"),this.$message("复制成功...")}},created:function(){this.getDomain()}}),L=M,T=(n("d6e8"),Object(l["a"])(L,P,E,!1,null,"0e1a1fe0",null)),G=T.exports,I={name:"ViewHome",components:{Domain:G},methods:{simulation:function(){var e=this,t=n("397d");Object(x["g"])(this.$store.getters.getNamespace,t).then((function(t){console.log(t),e.$message.success("模拟消息推送成功...")})).catch((function(e){console.log(e)}))}},created:function(){this.$store.commit("updateStepsActive",0)}},U=I,V=Object(l["a"])(U,O,$,!1,null,"42afcdb6",null),H=V.exports;a["default"].use(A["a"]);var q=[{path:"/",name:"1-1",component:H},{path:"/data_format",name:"DataFormat",component:function(){return n.e("chunk-54683062").then(n.bind(null,"7d3c"))}},{path:"/request_data",name:"2-1",component:function(){return n.e("chunk-2ddf20ae").then(n.bind(null,"b01b"))}},{path:"/data_client",name:"3-1",component:function(){return n.e("chunk-24a97a74").then(n.bind(null,"37fb"))}}],B=new A["a"]({routes:q}),z=B,J=n("2f62");a["default"].use(J["a"]);var R=new J["a"].Store({state:{StepsActive:0,DrawerStatus:!1,Namespace:"default"},getters:{getNamespace:function(e){return e.Namespace}},mutations:{updateStepsActive:function(e,t){e.StepsActive=t},updateDrawerStatus:function(e,t){e.DrawerStatus=t},updateNamespace:function(e,t){e.Namespace=t}},actions:{},modules:{}}),Z=n("5c96"),K=n.n(Z);n("0fae");a["default"].use(K.a),a["default"].config.productionTip=!1,new a["default"]({router:z,store:R,render:function(e){return e(F)}}).$mount("#app"),a["default"].prototype.dateFormat=function(e){console.log(e);var t=e;if(null!=t){var n=new Date(t),a=n.getFullYear(),r=n.getMonth()+1,o=n.getDate(),i=n.getHours(),s=n.getMinutes(),c=n.getSeconds();return a+"-"+(r<10?"0":"")+r+"-"+(o<10?"0":"")+o+(i<10?"0":"")+" "+i+":"+(s<10?"0":"")+s+":"+(c<10?"0":"")+c}}},"6cac":function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"l",(function(){return o})),n.d(t,"m",(function(){return i})),n.d(t,"j",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"i",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"f",(function(){return m})),n.d(t,"c",(function(){return p})),n.d(t,"k",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return g})),n.d(t,"h",(function(){return h}));var a=n("be3b"),r=function(e,t){return a["a"].Post("/go/"+e,t)},o=function(e,t){return a["a"].Get("/api/v1/"+e+"/json",t)},i=function(e,t){return a["a"].Get("/api/v1/"+e+"/vars",t)},s=function(e,t){return a["a"].Post("/api/v1/"+e+"/vars",t)},c=function(e,t){return a["a"].Get("/api/v1/"+e+"/template",t)},u=function(e,t){return a["a"].Post("/api/v1/"+e+"/template",t)},l=function(e,t){return a["a"].Get("/api/v1/"+e+"/client",t)},m=function(e,t){return a["a"].Post("/api/v1/"+e+"/client",t)},p=function(e,t,n){return a["a"].Get("/api/v1/"+e+"/client/"+t,n)},d=function(e,t,n){return a["a"].Put("/api/v1/"+e+"/client/"+t,n)},f=function(e,t,n){return a["a"].Delete("/api/v1/"+e+"/client/"+t,n)},g=function(e){return a["a"].Get("/api/v1/namespace",e)},h=function(e){return a["a"].Post("/api/v1/namespace",e)}},"74aa":function(e,t,n){},"85ec":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"static/img/logo.3a5f80f9.svg"},be3b:function(e,t,n){"use strict";n("d3b7");var a=n("bc3a"),r=n.n(a),o=r.a.create({baseURL:"",timeout:6e4});o.interceptors.request.use((function(e){return e.headers={"Content-Type":"application/json"},e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),t["a"]={Get:function(e,t,n){return o({method:"get",url:e,headers:n,params:t})},Delete:function(e,t,n){return o({method:"delete",url:e,headers:n,params:t})},Post:function(e,t,n){return o({method:"post",url:e,headers:n,data:t})},Put:function(e,t,n){return o({method:"put",url:e,headers:n,data:t})}}},d05b:function(e,t,n){},d6e8:function(e,t,n){"use strict";n("5614")},e601:function(e,t,n){}});
//# sourceMappingURL=app.3f24d835.js.map