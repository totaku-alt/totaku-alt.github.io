(function(t){function a(a){for(var n,s,i=a[0],c=a[1],l=a[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(a);while(p.length)p.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,i=1;i<e.length;i++){var c=e[i];0!==r[c]&&(n=!1)}n&&(o.splice(a--,1),t=s(s.s=e[0]))}return t}var n={},r={app:0},o=[];function s(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)s.d(e,n,function(a){return t[a]}.bind(null,n));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var d=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"45ad":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("navbar"),e("v-main",{staticClass:"mx-4"},[e("router-view")],1)],1)},o=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",[e("v-app-bar",{attrs:{app:"",height:"100"}},[e("v-app-bar-nav-icon",{staticClass:"mr-2",on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),e("span",{staticClass:"mr-4 display-5"},[t._v("COVID-19 Impfdaten")]),e("v-icon",{attrs:{"x-large":""}},[t._v("mdi-virus")])],1),e("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list",t._l(t.routerlinks,(function(a){return e("v-list-item",{key:a.text,attrs:{to:a.route}},[e("v-list-item-action",[e("v-icon",[t._v(t._s(a.icon))])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(a.text))])],1)],1)})),1)],1)],1)},i=[],c={data:function(){return{drawer:!1,routerlinks:[{icon:"mdi-home",text:"Home",route:"/"},{icon:"mdi-view-dashboard",text:"Dashboard",route:"/dashboard"},{icon:"mdi-message-alert",text:"Changelog",route:"/changelog"}]}}},l=c,d=e("2877"),u=e("6544"),p=e.n(u),h=e("40dc"),v=e("5bc1"),f=e("132d"),m=e("8860"),g=e("da13"),b=e("1800"),D=e("5d23"),y=e("f774"),V=Object(d["a"])(l,s,i,!1,null,null,null),w=V.exports;p()(V,{VAppBar:h["a"],VAppBarNavIcon:v["a"],VIcon:f["a"],VList:m["a"],VListItem:g["a"],VListItemAction:b["a"],VListItemContent:D["a"],VListItemTitle:D["b"],VNavigationDrawer:y["a"]});var x={name:"App",components:{Navbar:w},data:function(){return{}},methods:{},computed:{},mounted:function(){}},_=x,C=e("7496"),j=e("f6c4"),O=Object(d["a"])(_,r,o,!1,null,null,null),I=O.exports;p()(O,{VApp:C["a"],VMain:j["a"]});var A=e("8c4f"),k=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("body",{staticClass:"home"},[e("v-container",[e("h1",{staticClass:"subtitle grey--text"},[t._v("COVID-19")]),e("v-row",{attrs:{row:"",wrap:""}},[e("v-col",[e("v-card",{attrs:{flat:"",cols:"3"}},[e("p",[t._v("Version 0.8 ist nun Live."),e("br"),e("br"),t._v(" Mit Betadesign, Dashboard und Changelog. Leider sind die Server auf dem die Daten gehostet werden etwas überlastet, weswegen auf dem Dashboard F5 immer hilft.")])])],1),e("v-col",{staticClass:"svg-container justify-right",attrs:{cols:"6",id:"container"}})],1),e("v-col",[e("vue-kofi",{attrs:{uid:"totaku",color:"#3cd1c2",text:"buy me a coffee"}})],1)],1)],1)},M=[],F=e("5698"),P=e("3fe2"),S=e("568a"),L={name:"Home",data:function(){return{}},components:{VueKofi:S["a"]},methods:{d3Fetch:function(){var t=this,a="https://raw.githubusercontent.com/deldersveld/topojson/master/countries/germany/germany-regions.json";F["c"](a).then((function(a,e){e?console.log(e):(t.countryData=a,t.countryData=P["a"](a,a.objects.DEU_adm2),t.drawMap())}))},drawMap:function(){var t=500,a=500,e=F["d"]("#container").append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox",[0,0,t,a]).classed("svg-content",!0),n=F["a"]().translate([t/2,a/2]).scale(2100).center([10.02,51.02]),r=F["b"]().projection(n);e.selectAll("path").data(this.countryData.features).enter().append("path").attr("class","country").attr("d",r).attr("fill","#3cd1c2")}},computed:{},mounted:function(){this.d3Fetch()}},B=L,E=e("b0af"),T=e("62ad"),R=e("a523"),Z=e("0fd9"),$=Object(d["a"])(B,k,M,!1,null,null,null),z=$.exports;p()($,{VCard:E["a"],VCol:T["a"],VContainer:R["a"],VRow:Z["a"]});var H=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard"},[e("h1",{staticClass:"subtitle-1 grey--text"},[t._v("Dashboard")]),e("v-container",[e("v-row",{staticClass:"ma-3",attrs:{row:"",wrap:""}},[e("v-col",{attrs:{cols:"4"}},[e("v-sheet",{staticClass:"justify-center ma-3",attrs:{color:"white",elevation:"5",rounded:""}},[e("apexchart",{attrs:{type:"bar",options:t.optionsTotalVaccinations,series:t.seriesTotalVaccinations}})],1),e("v-sheet",{staticClass:"justify-center ma-3",attrs:{color:"white",elevation:"5",rounded:""}},[e("apexchart",{attrs:{type:"bar",options:t.optionsAllProducer,series:t.seriesAllProducer}})],1)],1),e("v-col",{attrs:{cols:"8"}},[e("v-sheet",{staticClass:"justify-center ma-3",attrs:{color:"white",elevation:"5",rounded:""}},[e("apexchart",{attrs:{type:"area",options:t.optionsFirstAndSecondVaccination,series:t.seriesFirstAndSecondVaccination}})],1)],1)],1)],1)],1)},N=[],J=(e("d81d"),e("96cf"),e("1da1")),K=e("bc3a"),U=e.n(K),Y={name:"Dashboard",components:{},data:function(){return{storedData:{oneDoseVaccine:[],twoDoseVaccine:[],BiontechData:[],ModernaData:[],ZenecaData:[],firstVaccination:[],secondVaccination:[],allDates:[]}}},methods:{getVaccinationDataHistory:function(){var t=this;return Object(J["a"])(regeneratorRuntime.mark((function a(){var e,n,r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e="https://api.corona-zahlen.org/vaccinations",n="https://api.corona-zahlen.org/vaccinations/history",a.next=4,U.a.get(e);case 4:return r=a.sent,t.entryVaccinationData=r.data.data,t.storedData.oneDoseVaccine=t.entryVaccinationData.vaccinated,t.storedData.twoDoseVaccine=t.entryVaccinationData.administeredVaccinations,t.storedData.AllProducer=t.entryVaccinationData.vaccination,t.storedData.BiontechData=t.entryVaccinationData.vaccination.biontech,t.storedData.ModernaData=t.entryVaccinationData.vaccination.moderna,t.storedData.ZenecaData=t.entryVaccinationData.vaccination.astraZeneca,a.next=14,U.a.get(n);case 14:o=a.sent,t.historyDates=o.data.data.history,t.storedData.firstVaccination=t.historyDates.map((function(t){return t.firstVaccination})),t.storedData.secondVaccination=t.historyDates.map((function(t){return t.secondVaccination})),t.storedData.allDates=t.historyDates.map((function(t){return t.date}));case 19:case"end":return a.stop()}}),a)})))()}},computed:{seriesTotalVaccinations:function(){return[{name:"Impfungen",data:[this.storedData.oneDoseVaccine,this.storedData.twoDoseVaccine]}]},optionsTotalVaccinations:function(){return{chart:{toolbar:!1,type:"bar",height:350},plotOptions:{bar:{horizontal:!1}},dataLabels:{enabled:!0},xaxis:{categories:["Erste Imfpung","Erste und Zweite Imfpung"]},yaxis:{show:!1},tooltip:{enabled:!0},x:{show:!0},grid:{show:!1}}},seriesAllProducer:function(){return[{name:"Verabreichte Dosen",data:[this.storedData.BiontechData,this.storedData.ModernaData,this.storedData.ZenecaData]}]},optionsAllProducer:function(){return{chart:{toolbar:!1,type:"bar",height:350},plotOptions:{bar:{horizontal:!1}},dataLabels:{enabled:!0},xaxis:{categories:["Biontech","Moderna","Astra Zeneca"]},yaxis:{show:!1},tooltip:{enabled:!0},grid:{show:!1}}},seriesFirstAndSecondVaccination:function(){return[{name:"erste Impfung",data:this.storedData.firstVaccination},{name:"zweite Impfung",data:this.storedData.secondVaccination}]},optionsFirstAndSecondVaccination:function(){return{chart:{type:"area",toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},theme:{mode:"light"},grid:{row:{colors:["#cccccc","transparent"],opacity:.5}},xaxis:{type:"datetime",categories:this.storedData.allDates},yaxis:{show:!1}}}},mounted:function(){this.getVaccinationDataHistory()}},q=Y,G=e("8dd9"),Q=Object(d["a"])(q,H,N,!1,null,null,null),W=Q.exports;p()(Q,{VCol:T["a"],VContainer:R["a"],VRow:Z["a"],VSheet:G["a"]});var X=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",{staticClass:"subtitle-1 grey--text"},[t._v("Changelog")]),e("v-container",{staticClass:"my-10"},t._l(t.changelogItems,(function(a){return e("v-card",{key:a.titel,staticClass:"px-3 ma-3",attrs:{flat:""}},[e("v-row",{class:"pa-3 Item "+a.status,attrs:{row:"",wrap:""}},[e("v-col",{attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"caption grey--text"},[t._v("log")]),e("div",[t._v(t._s(a.titel))])]),e("v-col",{attrs:{xs:"2"}},[e("div",{staticClass:"caption grey--text"},[t._v("Date")]),e("div",[t._v(t._s(a.date))])]),e("v-spacer",{attrs:{right:""}}),e("v-col",{attrs:{xs:"2"}},[e("v-chip",{class:a.status+" white--text caption my-2",attrs:{small:""}},[t._v(" "+t._s(a.status)+" ")])],1)],1),e("v-row",{attrs:{cols:"12"}},[e("v-divider")],1)],1)})),1)],1)},tt=[],at={data:function(){return{changelogItems:[{titel:"Version 0.9",date:"12 Feb 2021",status:"complete"},{titel:"Version 1.0",date:"11 Feb 2021",status:"ongoing"},{titel:"Design overhaul",date:"11 Feb 2021",status:"ongoing"},{titel:"Mobile Design",date:"11 Feb 2021",status:"later"},{titel:" Interaktive Deutschlandkarte",date:"11 Feb 2021",status:"ongoing"},{titel:"Länderranking",date:"11 Feb 2021",status:"later"}]}}},et=at,nt=(e("9ba2"),e("cc20")),rt=e("ce7e"),ot=e("2fa4"),st=Object(d["a"])(et,X,tt,!1,null,null,null),it=st.exports;p()(st,{VCard:E["a"],VChip:nt["a"],VCol:T["a"],VContainer:R["a"],VDivider:rt["a"],VRow:Z["a"],VSpacer:ot["a"]}),n["a"].use(A["a"]);var ct=[{path:"/",name:"Home",component:z},{path:"/dashboard",name:"Dashboard",component:W},{path:"/changelog",name:"Changelog",component:it}],lt=new A["a"]({mode:"history",base:"/",routes:ct}),dt=lt,ut=e("f309");n["a"].use(ut["a"]);var pt=new ut["a"]({icons:{iconfont:"mdiSvg"}}),ht=e("2106"),vt=e.n(ht),ft=e("1321"),mt=e.n(ft);n["a"].use(vt.a,U.a,mt.a,S["a"]),n["a"].component("apexchart",mt.a,S["a"]),n["a"].config.productionTip=!1,new n["a"]({router:dt,vuetify:pt,render:function(t){return t(I)}}).$mount("#app")},"9ba2":function(t,a,e){"use strict";e("45ad")}});
//# sourceMappingURL=app.8d580391.js.map