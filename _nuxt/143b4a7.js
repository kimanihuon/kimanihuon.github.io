(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{375:function(t,e,n){var content=n(382);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("3d481464",content,!0,{sourceMap:!1})},376:function(t,e,n){"use strict";n.r(e);var o=n(187),r={props:{permanent:{type:Boolean,default:!1},minivariant:{type:Boolean,default:!1},absolute:{type:Boolean,default:!1},temporary:{type:Boolean,default:!1},nav:{type:Boolean,default:null},right:{type:Boolean,default:!1},sections:{type:Array,default:function(){return[]}}},data:function(){return{baseColor:this.$vuetify.theme.defaults.dark.base}},methods:{scroll:function(t){Object(o.c)(this,t,document)}}},l=n(26),c=n(36),d=n.n(c),v=n(368),m=n(175),f=n(178),h=n(106),_=n(24),y=n(87),x=n(374),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{color:t.baseColor,permanent:t.permanent,"mini-variant":t.minivariant,absolute:t.absolute,temporary:t.temporary,right:t.right}},[n("v-list",{attrs:{nav:"",dense:""}},[t.permanent?t._e():n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v(" Hubert Kimani ")]),t._v(" "),n("v-list-item-subtitle",[t._v(" creating dreams ")])],1)],1),t._v(" "),t.permanent?t._e():n("v-divider"),t._v(" "),t._l(t.sections,(function(section,i){return n("v-list-item",{key:i,staticClass:"my-2",on:{click:function(e){return t.scroll(section.name)}}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(section.icon))])],1),t._v(" "),n("v-list-item-title",[t._v("My Files")])],1)}))],2)],1)}),[],!1,null,"5da0eb30",null);e.default=component.exports;d()(component,{VDivider:v.a,VIcon:m.a,VList:f.a,VListItem:h.a,VListItemContent:_.a,VListItemIcon:y.a,VListItemSubtitle:_.b,VListItemTitle:_.c,VNavigationDrawer:x.a})},377:function(t,e,n){"use strict";n.r(e);var o={components:{Socials:n(142).default},data:function(){return{baseColor:this.$vuetify.theme.defaults.dark.base}}},r=n(26),l=n(36),c=n.n(l),d=n(194),v=n(359),m=n(356),f=n(368),h=n(486),_=n(175),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"mt-8 mb-6",attrs:{id:"footer",dark:"",padless:""}},[n("v-card",{staticClass:"white--text text-center card",attrs:{color:t.baseColor,width:"2160",flat:"",outlined:""}},[n("v-card-text",{staticClass:"pb-0"},[n("Socials")],1),t._v(" "),n("v-card-text",[t._v("\n      Email:\n      "),n("a",{staticClass:"a",attrs:{href:"mailto:kimanihubert1@gmail.com"}},[t._v("\n        kimanihubert1@gmail.com\n      ")])]),t._v(" "),n("v-card-text",{staticClass:"white--text pt-0"},[t._v("\n      Crafted with\n\n      "),t._v(" "),n("v-btn",{attrs:{icon:"",small:""}},[n("v-icon",{staticClass:"mx-1",attrs:{small:"",color:"#E91E63"}},[t._v(" mdi-cards-heart ")])],1),t._v("\n\n      by\n\n      "),n("a",{staticClass:"pl-1 pr-2 a",attrs:{href:"https://github.com/kimanihuon"}},[t._v("\n        Hubert Kimani\n      ")]),t._v("\n\n      in\n\n      "),t._v(" "),n("v-btn",{attrs:{href:"https://vuejs.org/",target:"_blank",icon:"",small:""}},[n("v-icon",{staticClass:"mx-1",attrs:{small:"",color:"#41B883"}},[t._v(" mdi-vuejs ")])],1),t._v(" "),n("v-btn",{attrs:{href:"https://vuetifyjs.com/en/",target:"_blank",icon:"",small:""}},[n("v-icon",{staticClass:"mx-1",attrs:{small:"",color:"#7BC6FF"}},[t._v(" mdi-vuetify ")])],1),t._v(" "),n("v-btn",{attrs:{href:"https://nuxtjs.org/",target:"_blank",icon:"",small:""}},[n("v-icon",{staticClass:"mx-1",attrs:{small:"",color:"#00C58E"}},[t._v(" mdi-nuxt ")])],1)],1),t._v(" "),n("v-card-text",{staticClass:"pt-0"},[t._v("\n      Design partially inspired by\n      "),n("a",{staticClass:"a",attrs:{target:"_blank",href:"https://bslthemes.com/arter-wp/"}},[t._v("\n        https://bslthemes.com/arter-wp/\n      ")])]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"white--text"},[n("v-icon",[t._v("mdi-copyright")]),t._v("\n      "+t._s((new Date).getFullYear())+" —\n      "),n("span",[t._v("All rights reserved.")])],1)],1)],1)}),[],!1,null,"2d21f2e8",null);e.default=component.exports;c()(component,{Socials:n(142).default}),c()(component,{VBtn:d.a,VCard:v.a,VCardText:m.c,VDivider:f.a,VFooter:h.a,VIcon:_.a})},378:function(t,e,n){t.exports=n.p+"img/dev.aa58bf1.svg"},379:function(t,e,n){t.exports=n.p+"img/ryan-tang-8OyZGH43-p4-unsplash.9679ba0.jpg"},380:function(t,e,n){"use strict";n.r(e);n(34),n(16),n(37);var o={props:{servicerequest:{type:String,default:""}},data:function(){return{baseColor:this.$vuetify.theme.defaults.dark.base,ewt:5e3,swt:6e4,status:{loading:!1,success:!1,error:!1,msg:""},valid:!0,name:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=32||"Name must be less than 32 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],message:"",messageRules:[function(t){return t.length<=256||"Message must be less than 256 characters"}]}},watch:{servicerequest:function(t){this.message=t}},methods:{reset:function(){this.$refs.form.resetValidation()},resetContent:function(){this.email="",this.name="",this.message="",this.reset()},resetStatus:function(t){var e=this;setTimeout((function(){e.status.waiting=!1,e.status.loading=!1,e.status.success=!1,e.status.error=!1}),t)},send:function(){var t=this;this.$refs.form.validate()&&(this.status.loading||this.status.waiting?console.log("Waiting ..."):(this.status.loading=!0,this.status.waiting=!0,this.status.success=!1,this.status.error=!1,fetch("".concat("https://kimapi.netlify.app","/.netlify/functions/api"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.name,email:this.email,message:this.message})}).then((function(e){t.status.loading=!1,e.ok?(t.status.msg="Message sent successfully",t.status.success=!0,t.resetStatus(t.swt),t.resetContent()):(t.status.msg="Oops something happened, please wait a while and try again!!",t.status.error=!0,t.resetStatus(t.ewt))})).catch((function(e){console.log(e),t.status.msg="Oops something happened, please wait a while and try again!!",t.status.loading=!1,t.status.error=!0,t.resetStatus(t.ewt)}))))}}},r=(n(381),n(26)),l=n(36),c=n.n(l),d=n(494),v=n(194),m=n(359),f=n(484),h=n(175),_=n(481),y=n(485),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mt-2 pt-4 card",attrs:{color:t.baseColor,outlined:""}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{staticClass:"mb-1",attrs:{counter:32,rules:t.nameRules,label:"Name",name:"name",required:"",outlined:""},on:{blur:function(e){return t.reset()}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{staticClass:"mb-1",attrs:{rules:t.emailRules,label:"E-mail",name:"email",required:"",outlined:""},on:{blur:function(e){return t.reset()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-textarea",{staticClass:"card",attrs:{rules:t.messageRules,counter:256,outlined:"",name:"Message",label:"Message"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.status.error||t.status.success?n("v-alert",{attrs:{outlined:"",type:t.status.error?"warning":"success",prominent:"",border:"left"}},[t._v("\n        "+t._s(t.status.msg)+"\n      ")]):t._e()],1),t._v(" "),n("div",{staticClass:"d-flex flex-row justify-center"},[n("v-btn",{attrs:{loading:t.status.loading,large:"",rounded:"",color:t.status.error?"#F44336":"#4CAF50"},on:{click:t.send}},[!t.status.loading&&t.status.success?n("v-icon",[t._v("mdi-check-bold")]):t._e(),t._v(" "),!t.status.loading&&t.status.error?n("v-icon",[t._v("mdi-alert-circle")]):t._e(),t._v(" "),t.status.loading||t.status.success||t.status.error?t._e():n("span",[t._v("\n          Send Message\n        ")])],1)],1)],1)],1)}),[],!1,null,"34fbb0cd",null);e.default=component.exports;c()(component,{VAlert:d.a,VBtn:v.a,VCard:m.a,VForm:f.a,VIcon:h.a,VTextField:_.a,VTextarea:y.a})},381:function(t,e,n){"use strict";n(375)},382:function(t,e,n){(e=n(7)(!1)).push([t.i,".fade-enter-active[data-v-34fbb0cd],.fade-leave-active[data-v-34fbb0cd]{transition:opacity .5s}.fade-enter[data-v-34fbb0cd],.fade-leave-to[data-v-34fbb0cd]{opacity:0}",""]),t.exports=e},383:function(t,e,n){var map={"./dev.svg":378,"./dev_orange.svg":384,"./dev_red.svg":385,"./dev_teal.svg":386,"./digimatt/digimatt1.jpeg":387,"./digimatt/digimatt2.jpeg":388,"./digimatt/digimatt3.jpeg":389,"./repoll/rp1.png":390,"./repoll/rp10 dash lite.png":391,"./repoll/rp2.png":392,"./repoll/rp3.png":393,"./repoll/rp4.png":394,"./repoll/rp5.png":395,"./repoll/rp6.png":396,"./repoll/rp7.png":397,"./repoll/rp8dash.png":398,"./repoll/rp9dash.png":399,"./ryan-tang-8OyZGH43-p4-unsplash.jpg":379,"./selfie.jpg":245,"./weskool/weskool1.png":400,"./weskool/weskool2.png":401,"./weskool/weskool3.png":402,"./weskool/weskool4.png":403,"./weskool/weskool5.png":404};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=383},384:function(t,e,n){t.exports=n.p+"img/dev_orange.61f1492.svg"},385:function(t,e,n){t.exports=n.p+"img/dev_red.cf8a39e.svg"},386:function(t,e,n){t.exports=n.p+"img/dev_teal.7c8ebf8.svg"},387:function(t,e,n){t.exports=n.p+"img/digimatt1.f383dd9.jpeg"},388:function(t,e,n){t.exports=n.p+"img/digimatt2.4074503.jpeg"},389:function(t,e,n){t.exports=n.p+"img/digimatt3.90c8757.jpeg"},390:function(t,e,n){t.exports=n.p+"img/rp1.a5059e5.png"},391:function(t,e,n){t.exports=n.p+"img/rp10 dash lite.153d4e3.png"},392:function(t,e,n){t.exports=n.p+"img/rp2.9a8bb8a.png"},393:function(t,e,n){t.exports=n.p+"img/rp3.331d724.png"},394:function(t,e,n){t.exports=n.p+"img/rp4.c8c0c0b.png"},395:function(t,e,n){t.exports=n.p+"img/rp5.538d934.png"},396:function(t,e,n){t.exports=n.p+"img/rp6.38acddb.png"},397:function(t,e,n){t.exports=n.p+"img/rp7.9bb6ad3.png"},398:function(t,e,n){t.exports=n.p+"img/rp8dash.c0f3be6.png"},399:function(t,e,n){t.exports=n.p+"img/rp9dash.c15db95.png"},400:function(t,e,n){t.exports=n.p+"img/weskool1.ca239b3.png"},401:function(t,e,n){t.exports=n.p+"img/weskool2.04b2398.png"},402:function(t,e,n){t.exports=n.p+"img/weskool3.9d0667d.png"},403:function(t,e,n){t.exports=n.p+"img/weskool4.e4508de.png"},404:function(t,e,n){t.exports=n.p+"img/weskool5.ef49e59.png"},405:function(t,e,n){"use strict";function o(){return{portfolio:{posts:[{id:"repoll",title:"Repoll",subtitle:"Polling application",featuredimg:"repoll/rp8dash.png",description:"Social polling application that allows users to create interactive polls that are visible across the web",images:["repoll/rp8dash.png","repoll/rp9dash.png","repoll/rp1.png","repoll/rp4.png","repoll/rp7.png","repoll/rp6.png"],technologies:{backend:[{name:"Python",icon:"python.svg"},{name:"Django",icon:"django.svg"},{name:"DRF",icon:"django.svg"},{name:"MariaDB",icon:"mariadb.svg"}],frontend:[{name:"Javascript",icon:"javascript.svg"},{name:"VueJs",icon:"vue.svg"},{name:"Vuetify",icon:"vuetify.svg"},{name:"NuxtJs",icon:"nuxt.svg"}],dev:[{name:"VSCode",icon:"vscode.svg"},{name:"Github",icon:"github.svg"}]}},{id:"digimatt",title:"Digimatt",subtitle:"Fare price crowd sourcing tool",featuredimg:"digimatt/digimatt1.jpeg",description:"Service that allows public transport users to share their daily fare prices with the aim of preventing exploitation",images:["digimatt/digimatt1.jpeg","digimatt/digimatt2.jpeg","digimatt/digimatt3.jpeg"],technologies:{backend:[{name:"Python",icon:"python.svg"},{name:"Django",icon:"django.svg"},{name:"Docker",icon:"docker.svg"},{name:"Javascript",icon:"javascript.svg"},{name:"NodeJs",icon:"nodejs.svg"},{name:"ExpressJs",icon:"express.svg"},{name:"MariaDB",icon:"mariadb.svg"},{name:"Mongo",icon:"mongo.svg"}],frontend:[{name:"Javascript",icon:"javascript.svg"},{name:"VueJs",icon:"vue.svg"},{name:"VueJs",icon:"vuetify.svg"},{name:"PWA",icon:"pwa.svg"}],dev:[{name:"VSCode",icon:"vscode.svg"},{name:"Github",icon:"github.svg"}]}},{id:"weskool",title:"Weskool",subtitle:"Resource sharing platform",featuredimg:"weskool/weskool1.png",description:"Platform that helps students keep track of learning resources such as notes, tutorials and todo",images:["weskool/weskool1.png","weskool/weskool2.png","weskool/weskool3.png","weskool/weskool5.png"],technologies:{backend:[{name:"Python",icon:"python.svg"},{name:"Django",icon:"django.svg"},{name:"Docker",icon:"docker.svg"},{name:"Javascript",icon:"javascript.svg"},{name:"Express",icon:"express.svg"},{name:"Sockets",icon:"socket-io.svg"},{name:"MariaDB",icon:"mariadb.svg"},{name:"Mongo",icon:"mongo.svg"}],frontend:[{name:"VueJs",icon:"vue.svg"},{name:"VueJs",icon:"vuetify.svg"},{name:"Sockets",icon:"socket-io.svg"}],dev:[{name:"VSCode",icon:"vscode.svg"},{name:"Github",icon:"github.svg"}]}}]},blog:{posts:[]}}}n.d(e,"a",(function(){return o}))},406:function(t,e,n){var content=n(409);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("6756ef57",content,!0,{sourceMap:!1})},407:function(t,e,n){"use strict";n.r(e);n(76);var o=n(405),r={props:{parent:{type:Boolean,default:!1}},data:function(){return{baseColor:this.$vuetify.theme.defaults.dark.base,portfolio:this.parent?Object(o.a)().portfolio.posts.slice(0,3):Object(o.a)().portfolio.posts}}},l=(n(408),n(26)),c=n(36),d=n.n(c),v=n(194),m=n(359),f=n(356),h=n(175),_=n(138),y=n(366),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"mt-2 card",attrs:{color:t.baseColor,outlined:""}},[o("v-row",{attrs:{"no-gutters":"",justify:"space-around"}},t._l(t.portfolio,(function(e,i){return o("v-card",{key:i,staticClass:"mx-auto mt-4 mb-4",attrs:{color:"#2c2c39","max-width":"324",outlined:""}},[o("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",gradient:"to top, rgba(0, 0, 0, 0.7) 0%, transparent 82px",src:n(383)("./"+e.featuredimg)}},[o("v-card-title",[t._v(" "+t._s(e.title)+" ")])],1),t._v(" "),o("v-card-subtitle",{staticClass:"pb-0"},[t._v(" "+t._s(e.subtitle)+" ")]),t._v(" "),o("v-card-text",{staticClass:"text--primary mt-2"},[t._v("\n        "+t._s(e.description)+"...\n      ")]),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{color:"orange",text:"",to:"/portfolio/"+e.id+"/"}},[t._v("\n          Explore\n        ")])],1)],1)})),1),t._v(" "),o("div",{staticClass:"d-flex justify-center mb-4"},[t.parent?o("v-btn",{attrs:{text:"",color:"orange",to:"/portfolio/"}},[t._v("\n      More "),o("v-icon",[t._v(" mdi-chevron-right")])],1):t._e()],1)],1)}),[],!1,null,"2fda1962",null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VIcon:h.a,VImg:_.a,VRow:y.a})},408:function(t,e,n){"use strict";n(406)},409:function(t,e,n){(e=n(7)(!1)).push([t.i,"",""]),t.exports=e},417:function(t,e,n){var content=n(471);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("61177f67",content,!0,{sourceMap:!1})},418:function(t,e,n){var content=n(473);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("f1b3c6b6",content,!0,{sourceMap:!1})},421:function(t,e,n){"use strict";n.r(e);var o=n(422),r=n(376),l=n(380),c=n(188),d=n(407),v=n(187),m=n(377),f={components:{Contact:l.default,Nav:r.default,Typer:o.default,Portfolio:d.default,Footer:m.default},data:function(){return{serviceRequest:"",baseColor:this.$vuetify.theme.defaults.dark.base,about:{image:n(378),tags:[{name:"Reliable",color:"#2196F3",icon:"mdi-check-decagram"},{name:"Goal oriented",color:"success",icon:"mdi-bullseye-arrow"},{name:"Chess",color:"#00BCD4",icon:"mdi-chess-knight"},{name:"Learning",color:"#03A9F4",icon:"mdi-head-lightbulb"},{name:"Fun",color:"#FFC107",icon:"mdi-sticker-emoji"},{name:"Cake",color:"#8D6E63",icon:"mdi-cupcake"}]},services:[{name:"Front-End Development",description:"I believe in webpages being robust and reliable with a unique personality for each project.",tools:["JavaScript (Vanilla, VueJS)","HTML","CSS","Vuetify","Bootstrap","Inkline"],devtools:["VS Code","Git","Github","Bash"]},{name:"Back-End Development",description:"Proficient in implementing Server-side application logic using open source technologies and creative solutions.",tools:["Python (Django, Flask)","Javascript(NodeJS, ExpressJS)","Docker","Linux","PHP"],devtools:["VS Code","Git","Github","Bash"]},{name:"Full Stack Development",description:"Combining proffiency in Backend and Frontend technology to create and implement applications that scale.",tools:["VueJS","Axios","Django","SQL (MariaDB)","Node (ExpressJS)","NoSQL (MongoDB)"],devtools:["VS Code","Git","Github","Bash"]},{name:"UI/UX Design",description:"I value smooth user experience(s), effective design patterns and meaningful interactions.",devtools:["Adobe XD","Pen & Paper"]}],sections:c.a,icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}},computed:{vh:function(){return"height: "+(this.$vuetify.breakpoint.mdAndDown?"100vh;":"96vh;")}},mounted:function(){var body=document.querySelector(".scrollable2");Object(v.b)(this,body)},methods:{request:function(t){document.getElementById("contact").scrollIntoView({behavior:"smooth"}),this.serviceRequest="I require your "+t+" services."},scroll:function(){document.getElementById("services").scrollIntoView({behavior:"smooth"})}}},h=(n(472),n(26)),_=n(36),y=n.n(_),x=n(194),C=n(359),w=n(356),k=n(487),V=n(493),j=n(367),S=n(492),D=n(175),B=n(138),E=n(366),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{color:t.baseColor,outlined:""}},[o("div",{staticClass:"d-flex flex-row"},[o("div",{class:"scrollable2 px-"+(t.$vuetify.breakpoint.mdAndDown?4:6),style:t.vh},[o("section",{staticClass:"mt-8",attrs:{id:"home"}},[o("v-img",{attrs:{"aspect-ratio":16/9,width:"803",height:""+(t.$vuetify.breakpoint.smAndDown?400:320),gradient:"to left, rgba(100,115,201,.3), rgba(25, 32, 72)",src:n(379)}},[o("v-container",{staticClass:"fill-height"},[o("div",{class:"ml-"+(t.$vuetify.breakpoint.smAndDown?2:12)},[o("span",{staticClass:"banner-text"},[t._v("Experience my Amazing")]),t._v(" "),o("br"),t._v(" "),o("span",{staticClass:"banner-text"},[t._v("Dream Space! ")]),t._v(" "),o("client-only",[o("div",{staticClass:"banner-code mt-3 mb-4"},[t._v("\n                  <"),o("span",{staticClass:"tag-color"},[t._v("code")]),t._v(">\n                  "),o("Typer"),t._v("\n                  <"),o("span",{staticClass:"tag-color"},[t._v("/code")]),t._v(">\n                ")],1)]),t._v(" "),o("v-btn",{attrs:{tile:"",large:"",color:"#7579ff"},on:{click:t.scroll}},[t._v("\n                Discover\n              ")]),t._v(" "),o("br")],1)])],1)],1),t._v(" "),o("section",{staticClass:"mt-8",attrs:{id:"about"}},[o("span",{staticClass:"section-title"},[t._v("About")]),t._v(" "),o("v-card",{staticClass:"mt-2 card",attrs:{color:t.baseColor,outlined:""}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",[o("v-img",{staticClass:"my-4 mx-4",attrs:{"max-height":"250","max-width":"250",src:t.about.image}})],1),t._v(" "),o("v-col",[o("v-card-subtitle",{staticClass:"about-description"},[t._v("\n                I am an open minded individual that loves exploring and\n                learning new things. Outside of software development I enjoy\n                chess, video games, sports and hanging out with friends.\n              ")]),t._v(" "),o("v-chip-group",{staticClass:"mx-4",attrs:{column:""}},t._l(t.about.tags,(function(e,i){return o("v-chip",{key:i,staticClass:"mt-4",attrs:{color:e.color,outlined:""}},[o("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" "+t._s(e.icon)+" ")]),t._v("\n                  "+t._s(e.name)+"\n                ")],1)})),1)],1)],1)],1)],1),t._v(" "),o("section",{staticClass:"mt-6",attrs:{id:"services"}},[o("span",{staticClass:"section-title"},[t._v("What I do")]),t._v(" "),o("v-card",{staticClass:"mt-2 pt-2 card",attrs:{color:t.baseColor,outlined:""}},[o("v-row",{attrs:{"no-gutters":"",justify:"space-around"}},t._l(t.services,(function(e,n){return o("v-col",{key:n,attrs:{cols:"12",sm:"6",md:"4"}},[o("v-card",{staticClass:"my-2 mx-2",attrs:{color:"#2c2c39"}},[o("v-card-title",{staticClass:"stitle"},[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),o("v-card-subtitle",{staticClass:"ssubtitle"},[t._v("\n                  "+t._s(e.description)+"\n                ")]),t._v(" "),e.tools?o("v-card-title",{staticClass:"stitle stitle-color"},[t._v("\n                  Languages/Frameworks\n                ")]):t._e(),t._v(" "),e.tools?o("v-card-subtitle",{staticClass:"ssubtitle"},t._l(e.tools,(function(e,i){return o("span",{key:i},[t._v("\n                    "+t._s(e)+" "),o("br")])})),0):t._e(),t._v(" "),o("v-card-title",{staticClass:"stitle stitle-color"},[t._v("\n                  Dev Tools\n                ")]),t._v(" "),o("v-card-subtitle",{staticClass:"ssubtitle"},t._l(e.devtools,(function(e,i){return o("span",{key:i},[t._v("\n                    "+t._s(e)+" "),o("br")])})),0),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{color:"#ff9800",text:""},on:{click:function(n){return t.request(e.name)}}},[t._v("\n                    Order Now"),o("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)],1)})),1)],1)],1),t._v(" "),o("section",{staticClass:"mt-6",attrs:{id:"portfolio"}},[o("span",{staticClass:"section-title"},[t._v(" Featured projects I've done ")]),t._v(" "),o("Portfolio",{attrs:{parent:""}})],1),t._v(" "),o("section",{staticClass:"mt-6",attrs:{id:"contact"}},[o("span",{staticClass:"section-title"},[t._v("Say Hi 👋")]),t._v(" "),o("Contact",{staticClass:"px-4 py-4",attrs:{servicerequest:t.serviceRequest}})],1),t._v(" "),o("Footer")],1),t._v(" "),this.$vuetify.breakpoint.lgAndUp?o("div",[o("Nav",{attrs:{sections:t.sections,permanent:!0,minivariant:!0}})],1):t._e()])])}),[],!1,null,"52f20ecc",null);e.default=component.exports;y()(component,{Typer:n(422).default,Portfolio:n(407).default,Footer:n(377).default,Nav:n(376).default}),y()(component,{VBtn:x.a,VCard:C.a,VCardActions:w.a,VCardSubtitle:w.b,VCardTitle:w.d,VChip:k.a,VChipGroup:V.a,VCol:j.a,VContainer:S.a,VIcon:D.a,VImg:B.a,VRow:E.a})},422:function(t,e,n){"use strict";n.r(e);n(16);var o={components:{VueTyper:function(){return n.e(9).then(n.bind(null,488))}},data:function(){return{text:["I build full-stack web applications","I utilize open source technology","Tech stack: SQL/Mongo, DRF/Express, Vue, Django/Node","My most important tool is problem solving"]}}},r=(n(470),n(26)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("vue-typer",{staticClass:"text",attrs:{text:this.text,repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":3e3,"erase-delay":250,"erase-style":"select-all","erase-on-complete":!1,"caret-animation":"phase"}})}),[],!1,null,"fcf69320",null);e.default=component.exports},470:function(t,e,n){"use strict";n(417)},471:function(t,e,n){(e=n(7)(!1)).push([t.i,"[data-v-fcf69320] .typed{color:#fff!important}",""]),t.exports=e},472:function(t,e,n){"use strict";n(418)},473:function(t,e,n){(e=n(7)(!1)).push([t.i,".banner-text[data-v-52f20ecc]{font-weight:800;font-size:2.25rem}.section-title[data-v-52f20ecc]{font-weight:600;font-size:17px}.banner-code[data-v-52f20ecc],.button-style[data-v-52f20ecc]{font-weight:500}.stitle[data-v-52f20ecc]{font-size:1.1rem}.ssubtitle[data-v-52f20ecc]{font-size:.8rem}.stitle-color[data-v-52f20ecc]{color:#7579ff}.about-description[data-v-52f20ecc]{font-size:16px;font-weight:400}.tag-color[data-v-52f20ecc]{color:#00ff62}.img[data-v-52f20ecc]{background-image:linear-gradient(to top right,rgba(100,115,201,.33),#192048)}",""]),t.exports=e},491:function(t,e,n){"use strict";n.r(e);var o=n(141),r=n(421),l=n(187),c={components:{Summary:o.default,Body:r.default},beforeRouteLeave:function(t,e,n){var body=document.querySelector(".scrollable2");Object(l.a)(t,e,n,body)}},d=n(26),v=n(36),m=n.n(v),f=n(367),h=n(366),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",{attrs:{justify:"end","no-gutters":""}},[e("v-col",{staticClass:"d-none d-lg-flex",attrs:{lg:"3",justify:"start"}},[e("Summary")],1),this._v(" "),e("v-col",{attrs:{cols:"12",lg:"9"}},[e("Body")],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{Summary:n(141).default,Body:n(421).default}),m()(component,{VCol:f.a,VRow:h.a})}}]);