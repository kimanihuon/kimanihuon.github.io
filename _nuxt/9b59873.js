(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{374:function(t,e,n){var content=n(379);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("36e60288",content,!0,{sourceMap:!1})},375:function(t,e,n){var content=n(397);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("50c2ef7c",content,!0,{sourceMap:!1})},376:function(t,e,n){"use strict";n.r(e);var o={props:{permanent:{type:Boolean,default:!1},minivariant:{type:Boolean,default:!1},absolute:{type:Boolean,default:!1},temporary:{type:Boolean,default:!1},nav:{type:Boolean,default:null},right:{type:Boolean,default:!1},sections:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{scroll:function(t){document.getElementById(t).scrollIntoView({behavior:"smooth"})}}},r=n(28),l=n(40),c=n.n(l),d=n(367),v=n(174),m=n(178),f=n(106),h=n(25),_=n(87),C=n(373),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{color:"#1E1E1E",permanent:t.permanent,"mini-variant":t.minivariant,absolute:t.absolute,temporary:t.temporary,right:t.right}},[n("v-list",{attrs:{nav:"",dense:""}},[t.permanent?t._e():n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v(" Hubert Kimani ")]),t._v(" "),n("v-list-item-subtitle",[t._v(" creating dreams ")])],1)],1),t._v(" "),t.permanent?t._e():n("v-divider"),t._v(" "),t._l(t.sections,(function(section,i){return n("v-list-item",{key:i,staticClass:"my-2",attrs:{to:"/#"+section.name},on:{click:function(e){return t.scroll(section.name)}}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(section.icon))])],1),t._v(" "),n("v-list-item-title",[t._v("My Files")])],1)}))],2)],1)}),[],!1,null,"23ba87f2",null);e.default=component.exports;c()(component,{VDivider:d.a,VIcon:v.a,VList:m.a,VListItem:f.a,VListItemContent:h.a,VListItemIcon:_.a,VListItemSubtitle:h.b,VListItemTitle:h.c,VNavigationDrawer:C.a})},377:function(t,e,n){t.exports=n.p+"img/ryan-tang-8OyZGH43-p4-unsplash.9679ba0.jpg"},378:function(t,e,n){"use strict";n(374)},379:function(t,e,n){(e=n(7)(!1)).push([t.i,".fade-enter-active[data-v-882320fa],.fade-leave-active[data-v-882320fa]{transition:opacity .5s}.fade-enter[data-v-882320fa],.fade-leave-to[data-v-882320fa]{opacity:0}",""]),t.exports=e},395:function(t,e,n){t.exports=n.p+"img/dev.aa58bf1.svg"},396:function(t,e,n){"use strict";n(375)},397:function(t,e,n){(e=n(7)(!1)).push([t.i,".a[data-v-8dcecdd0]{text-decoration:none}.banner-text[data-v-8dcecdd0]{font-weight:800;font-size:2.25rem}.section-title[data-v-8dcecdd0]{font-weight:600;font-size:17px}.banner-code[data-v-8dcecdd0],.button-style[data-v-8dcecdd0]{font-weight:500}.stitle[data-v-8dcecdd0]{font-size:1.1rem}.ssubtitle[data-v-8dcecdd0]{font-size:.8rem}.stitle-color[data-v-8dcecdd0]{color:#7579ff}.about-description[data-v-8dcecdd0]{font-size:16px;font-weight:400}.tag-color[data-v-8dcecdd0]{color:#ff9800}.img[data-v-8dcecdd0]{background-image:linear-gradient(to top right,rgba(100,115,201,.33),#192048)}.scrollable2[data-v-8dcecdd0]{overflow-y:scroll}.scrollable2[data-v-8dcecdd0]::-webkit-scrollbar{width:7px}.scrollable2[data-v-8dcecdd0]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px grey;border-radius:10px}.scrollable2[data-v-8dcecdd0]::-webkit-scrollbar-thumb{background:#070707;border-radius:10px}.scrollable2[data-v-8dcecdd0]::-webkit-scrollbar-thumb:hover{background:#009eb3}",""]),t.exports=e},418:function(t,e,n){"use strict";n.r(e);n(37),n(16),n(35);var o={props:{servicerequest:{type:String,default:""}},data:function(){return{ewt:5e3,swt:6e4,status:{loading:!1,success:!1,error:!1,msg:""},valid:!0,name:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=32||"Name must be less than 32 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],message:"",messageRules:[function(t){return t.length<=256||"Message must be less than 256 characters"}]}},watch:{servicerequest:function(t){this.message=t}},methods:{reset:function(){this.$refs.form.resetValidation()},resetContent:function(){this.email="",this.name="",this.message="",this.reset()},resetStatus:function(t){var e=this;setTimeout((function(){e.status.waiting=!1,e.status.loading=!1,e.status.success=!1,e.status.error=!1}),t)},send:function(){var t=this;this.$refs.form.validate()&&(this.status.loading||this.status.waiting?console.log("Waiting ..."):(this.status.loading=!0,this.status.waiting=!0,this.status.success=!1,this.status.error=!1,fetch("".concat("https://kimapi.netlify.app","/.netlify/functions/api"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.name,email:this.email,message:this.message})}).then((function(e){t.status.loading=!1,e.ok?(t.status.msg="Message sent successfully",t.status.success=!0,t.resetStatus(t.swt),t.resetContent()):(t.status.msg="Oops something happened, please wait a while and try again!!",t.status.error=!0,t.resetStatus(t.ewt))})).catch((function(e){console.log(e),t.status.msg="Oops something happened, please wait a while and try again!!",t.status.loading=!1,t.status.error=!0,t.resetStatus(t.ewt)}))))}}},r=(n(378),n(28)),l=n(40),c=n.n(l),d=n(421),v=n(190),m=n(414),f=n(174),h=n(406),_=n(415),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{staticClass:"mb-1",attrs:{counter:32,rules:t.nameRules,label:"Name",name:"name",required:"",outlined:""},on:{blur:function(e){return t.reset()}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{staticClass:"mb-1",attrs:{rules:t.emailRules,label:"E-mail",name:"email",required:"",outlined:""},on:{blur:function(e){return t.reset()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-textarea",{attrs:{rules:t.messageRules,counter:256,outlined:"",name:"Message",label:"Message"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.status.error||t.status.success?n("v-alert",{attrs:{outlined:"",type:t.status.error?"warning":"success",prominent:"",border:"left"}},[t._v("\n      "+t._s(t.status.msg)+"\n    ")]):t._e()],1),t._v(" "),n("div",{staticClass:"d-flex flex-row justify-center"},[n("v-btn",{attrs:{loading:t.status.loading,large:"",rounded:"",color:t.status.error?"#F44336":"#4CAF50"},on:{click:t.send}},[!t.status.loading&&t.status.success?n("v-icon",[t._v("mdi-check-bold")]):t._e(),t._v(" "),!t.status.loading&&t.status.error?n("v-icon",[t._v("mdi-alert-circle")]):t._e(),t._v(" "),t.status.loading||t.status.success||t.status.error?t._e():n("span",[t._v("\n        Send Message\n      ")])],1)],1)],1)}),[],!1,null,"882320fa",null),C=component.exports;c()(component,{VAlert:d.a,VBtn:v.a,VForm:m.a,VIcon:f.a,VTextField:h.a,VTextarea:_.a});var y=n(143),w=n(376),x=n(234),k=n(144),V={components:{Summary:y.default,Contact:C,Socials:k.default,Nav:w.default},data:function(){return{serviceRequest:"",about:{image:n(395),tags:[{name:"Reliable",color:"#2196F3",icon:"mdi-check-decagram"},{name:"Goal oriented",color:"success",icon:"mdi-bullseye-arrow"},{name:"Chess",color:"#00BCD4",icon:"mdi-chess-knight"},{name:"Learning",color:"#03A9F4",icon:"mdi-head-lightbulb"},{name:"Fun",color:"#FFC107",icon:"mdi-sticker-emoji"},{name:"Cake",color:"#8D6E63",icon:"mdi-cupcake"}]},services:[{name:"Front-End Development",description:"I believe in webpages being robust and reliable with a unique personality for each project.",tools:["JavaScript (Vanilla, VueJS)","HTML","CSS","Vuetify","Bootstrap","Inkline"],devtools:["VS Code","Git","Github","Bash"]},{name:"Back-End Development",description:"Proficient in implementing Server-side application logic using open source technologies and creative solutions.",tools:["Python (Django, Flask)","Javascript(NodeJS, ExpressJS)","Docker","Linux","PHP"],devtools:["VS Code","Git","Github","Bash"]},{name:"Full Stack Development",description:"Combining proffiency in Backend and Frontend technology to create and implement applications that scale.",tools:["VueJS","Axios","Django","SQL (MariaDB)","Node (ExpressJS)","NoSQL (MongoDB)"],devtools:["VS Code","Git","Github","Bash"]},{name:"UI/UX Design",description:"I value smooth user experience(s), effective design patterns and meaningful interactions.",devtools:["Adobe XD","Pen & Paper"]}],sections:x.a,icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}},computed:{vh:function(){return"height: "+(this.$vuetify.breakpoint.mdAndDown?"91.3vh;":"95vh;")}},methods:{request:function(t){document.getElementById("contact").scrollIntoView({behavior:"smooth"}),this.serviceRequest="I require your "+t+" services."},scroll:function(){document.getElementById("services").scrollIntoView({behavior:"smooth"})}}},S=(n(396),n(356)),D=n(355),I=n(416),B=n(419),E=n(366),F=n(420),A=n(367),j=n(417),L=n(138),N=n(365),$=Object(r.a)(V,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:"\n    px-"+(t.$vuetify.breakpoint.mdAndDown?0:3)+" \n    pt-"+(t.$vuetify.breakpoint.mdAndDown?0:3)+" \n  "},[o("v-row",{attrs:{justify:"end","no-gutters":""}},[o("v-col",{staticClass:"d-none d-lg-flex",attrs:{justify:"start"}},[o("Summary")],1),t._v(" "),o("v-col",{attrs:{cols:"12",lg:"9"}},[o("v-card",{attrs:{outlined:""}},[o("div",{staticClass:"d-flex flex-row"},[o("div",{class:"scrollable2 px-"+(t.$vuetify.breakpoint.mdAndDown?4:6),style:t.vh},[o("section",{staticClass:"mt-8",attrs:{id:"home"}},[o("v-img",{attrs:{"aspect-ratio":16/9,width:"803",height:""+(t.$vuetify.breakpoint.smAndDown?400:320),gradient:"to left, rgba(100,115,201,.3), rgba(25, 32, 72)",src:n(377)}},[o("v-container",{staticClass:"fill-height"},[o("div",{class:"ml-"+(t.$vuetify.breakpoint.smAndDown?2:12)},[o("span",{staticClass:"banner-text"},[t._v("Experience my Amazing")]),t._v(" "),o("br"),t._v(" "),o("span",{staticClass:"banner-text"},[t._v("Art Space! ")]),t._v(" "),o("div",{staticClass:"banner-code mt-3 mb-4"},[t._v("\n                      <"),o("span",{staticClass:"tag-color"},[t._v("code")]),t._v(">\n                      "),o("span",[t._v("Create Imagine Discover")]),t._v("\n                      <"),o("span",{staticClass:"tag-color"},[t._v("/code")]),t._v(">\n                    ")]),t._v(" "),o("v-btn",{attrs:{tile:"",large:"",color:"#ff9800"},on:{click:t.scroll}},[t._v("\n                      Discover\n                    ")]),t._v(" "),o("br")],1)])],1)],1),t._v(" "),o("section",{staticClass:"mt-8",attrs:{id:"about"}},[o("span",{staticClass:"section-title"},[t._v("About")]),t._v(" "),o("v-card",{staticClass:"mt-2",attrs:{outlined:""}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",[o("v-img",{staticClass:"my-4 mx-4",attrs:{"max-height":"250","max-width":"250",src:t.about.image}})],1),t._v(" "),o("v-col",[o("v-card-subtitle",{staticClass:"about-description"},[t._v("\n                      I am an open minded individual that loves exploring and\n                      learning new things. Outside of software development I\n                      enjoy chess, video games, sports and hanging out\n                      friends.\n                    ")]),t._v(" "),o("v-chip-group",{staticClass:"mx-4",attrs:{column:""}},t._l(t.about.tags,(function(e,i){return o("v-chip",{key:i,staticClass:"mt-4",attrs:{color:e.color,outlined:""}},[o("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" "+t._s(e.icon)+" ")]),t._v("\n                        "+t._s(e.name)+"\n                      ")],1)})),1)],1)],1)],1)],1),t._v(" "),o("section",{staticClass:"mt-6",attrs:{id:"services"}},[o("span",{staticClass:"section-title"},[t._v("What I do")]),t._v(" "),o("v-card",{staticClass:"mt-2 pt-2",attrs:{outlined:""}},[o("v-row",{attrs:{"no-gutters":"",justify:"space-around"}},t._l(t.services,(function(e,n){return o("v-col",{key:n,attrs:{cols:"12",sm:"6",md:"4"}},[o("v-card",{staticClass:"my-2 mx-2",attrs:{color:"#2c2c39"}},[o("v-card-title",{staticClass:"stitle"},[t._v("\n                        "+t._s(e.name)+"\n                      ")]),t._v(" "),o("v-card-subtitle",{staticClass:"ssubtitle"},[t._v("\n                        "+t._s(e.description)+"\n                      ")]),t._v(" "),e.tools?o("v-card-title",{staticClass:"stitle stitle-color"},[t._v("\n                        Languages/Frameworks\n                      ")]):t._e(),t._v(" "),e.tools?o("v-card-subtitle",{staticClass:"ssubtitle"},t._l(e.tools,(function(e,i){return o("span",{key:i},[t._v("\n                          "+t._s(e)+" "),o("br")])})),0):t._e(),t._v(" "),o("v-card-title",{staticClass:"stitle stitle-color"},[t._v("\n                        Dev Tools\n                      ")]),t._v(" "),o("v-card-subtitle",{staticClass:"ssubtitle"},t._l(e.devtools,(function(e,i){return o("span",{key:i},[t._v("\n                          "+t._s(e)+" "),o("br")])})),0),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{color:"#ff9800",text:""},on:{click:function(n){return t.request(e.name)}}},[t._v("\n                          Order Now"),o("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)],1)})),1)],1)],1),t._v(" "),o("section",{staticClass:"mt-6",attrs:{id:"contact"}},[o("span",{staticClass:"section-title"},[t._v("Say Hi 👋")]),t._v(" "),o("v-card",{staticClass:"mt-2 pt-2",attrs:{outlined:""}},[o("Contact",{staticClass:"px-4 py-4",attrs:{servicerequest:t.serviceRequest}})],1)],1),t._v(" "),o("v-footer",{staticClass:"mt-8 mb-6",attrs:{id:"footer",dark:"",padless:""}},[o("v-card",{staticClass:"white--text text-center",attrs:{width:"2160",flat:"",outlined:""}},[o("v-card-text",{staticClass:"pb-0"},[o("Socials")],1),t._v(" "),o("v-card-text",[t._v("\n                  Email:\n                  "),o("a",{staticClass:"a",attrs:{href:"mailto:kimanihubert1@gmail.com"}},[t._v("\n                    kimanihubert1@gmail.com\n                  ")])]),t._v(" "),o("v-card-text",{staticClass:"white--text pt-0"},[t._v("\n                  Crafted with\n\n                  "),t._v(" "),o("v-btn",{attrs:{icon:"",small:""}},[o("v-icon",{staticClass:"mx-1",attrs:{small:"",color:"#E91E63"}},[t._v("\n                      mdi-cards-heart\n                    ")])],1),t._v("\n\n                  by\n\n                  "),o("a",{staticClass:"pl-1 pr-2 a",attrs:{href:"https://github.com/kimanihuon"}},[t._v("\n                    Hubert Kimani\n                  ")]),t._v("\n\n                  in\n\n                  "),t._v(" "),o("v-btn",{attrs:{icon:"",small:""}},[o("v-icon",{staticClass:"mx-1",attrs:{small:"",color:"#41B883"}},[t._v("\n                      mdi-vuejs\n                    ")])],1),t._v(" "),o("v-btn",{attrs:{icon:"",small:""}},[o("v-icon",{staticClass:"mx-1",attrs:{small:"",color:"#7BC6FF"}},[t._v("\n                      mdi-vuetify\n                    ")])],1),t._v(" "),o("v-btn",{attrs:{icon:"",small:""}},[o("v-icon",{staticClass:"mx-1",attrs:{small:"",color:"#00C58E"}},[t._v("\n                      mdi-nuxt\n                    ")])],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",{staticClass:"white--text"},[o("v-icon",[t._v("mdi-copyright")]),t._v("\n                  "+t._s((new Date).getFullYear())+" —\n                  "),o("span",[t._v("All rights reserved.")])],1)],1)],1)],1),t._v(" "),this.$vuetify.breakpoint.lgAndUp?o("div",[o("Nav",{attrs:{sections:t.sections,permanent:!0,minivariant:!0}})],1):t._e()])])],1)],1)],1)}),[],!1,null,"8dcecdd0",null);e.default=$.exports;c()($,{Summary:n(143).default,Socials:n(144).default,Nav:n(376).default}),c()($,{VBtn:v.a,VCard:S.a,VCardActions:D.a,VCardSubtitle:D.b,VCardText:D.c,VCardTitle:D.d,VChip:I.a,VChipGroup:B.a,VCol:E.a,VContainer:F.a,VDivider:A.a,VFooter:j.a,VIcon:f.a,VImg:L.a,VRow:N.a})}}]);