(function(e){function t(t){for(var c,r,i=t[0],s=t[1],l=t[2],p=0,d=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(c=!1)}c&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},o={app:0},a=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"12d0":function(e,t,n){},"1b68":function(e,t,n){"use strict";n("12d0")},2209:function(e,t,n){},"25df":function(e,t,n){},"3c63":function(e,t,n){"use strict";n("4471")},"3e0e":function(e,t,n){},4471:function(e,t,n){},"606b":function(e,t,n){"use strict";n("25df")},6413:function(e,t,n){"use strict";n("d91f")},6435:function(e,t,n){"use strict";n("3e0e")},"73a7":function(e,t,n){"use strict";n("2209")},a286:function(e,t,n){},a604:function(e,t,n){"use strict";n("cc90")},cc90:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o=(n("b0c0"),Object(c["h"])("nav",null,[Object(c["h"])("ul",null,[Object(c["h"])("li",null,[Object(c["h"])("a",{href:"#work-experience",class:"btn"},"Work Experience")]),Object(c["h"])("li",null,[Object(c["h"])("a",{href:"#education",class:"btn"},"Education")])])],-1)),a=Object(c["h"])("h2",{id:"work-experience"},"Work Experience",-1),r={key:0},i=Object(c["h"])("h2",{id:"education"},"Education",-1),s={key:2},l={key:4,class:"selected-projects-title"},u=Object(c["i"])("Made with "),p=Object(c["i"])(" by Corey Ison");function d(e,t,n,d,b,f){var j=Object(c["v"])("Themer"),m=Object(c["v"])("Spotlight"),h=Object(c["v"])("WorkExperience"),v=Object(c["v"])("Education"),O=Object(c["v"])("SelectedProject"),g=Object(c["v"])("WhatPeopleSay"),w=Object(c["v"])("HeartIcon");return Object(c["p"])(),Object(c["g"])("div",{class:Object(c["l"])([[d.theme,d.prefersDark?"prefers-dark":""],"wrapper"])},[Object(c["h"])("header",null,[Object(c["j"])(j,{onThemeChange:t[0]||(t[0]=function(e){return d.theme=e}),onPrefersDark:t[1]||(t[1]=function(e){return d.prefersDark=e})}),Object(c["h"])("h1",null,Object(c["w"])(d.reactivePerson.name),1),o]),Object(c["h"])("main",null,[Object(c["j"])(m),a,d.reactivePerson.workExperiences?(Object(c["p"])(!0),Object(c["g"])(c["a"],{key:1},Object(c["t"])(d.reactivePerson.workExperiences,(function(e){return Object(c["p"])(),Object(c["e"])(h,{key:e.company,workExperience:e},null,8,["workExperience"])})),128)):(Object(c["p"])(),Object(c["g"])("section",r,"Notta")),i,d.reactivePerson.educations?(Object(c["p"])(!0),Object(c["g"])(c["a"],{key:3},Object(c["t"])(d.reactivePerson.educations,(function(e){return Object(c["p"])(),Object(c["e"])(v,{key:e.name,education:e},null,8,["education"])})),128)):(Object(c["p"])(),Object(c["g"])("section",s,"Notta")),d.reactivePerson.selectedProjects?(Object(c["p"])(),Object(c["g"])("h2",l,"Selected Projects")):Object(c["f"])("",!0),d.reactivePerson.selectedProjects?(Object(c["p"])(),Object(c["g"])("div",{key:5,onMouseenter:t[2]||(t[2]=function(){return d.pauseAutoScroll&&d.pauseAutoScroll.apply(d,arguments)}),onMouseleave:t[3]||(t[3]=function(){return d.resumeAutoScroll&&d.resumeAutoScroll.apply(d,arguments)}),class:"selected-projects"},[(Object(c["p"])(!0),Object(c["g"])(c["a"],null,Object(c["t"])(d.reactivePerson.selectedProjects,(function(e){return Object(c["p"])(),Object(c["e"])(O,{key:e.name,project:e},null,8,["project"])})),128))],32)):Object(c["f"])("",!0),d.reactivePerson.whatPeopleSay?(Object(c["p"])(),Object(c["e"])(g,{key:6,peeps:d.reactivePerson.whatPeopleSay},null,8,["peeps"])):Object(c["f"])("",!0)]),Object(c["h"])("footer",null,[u,Object(c["j"])(w),p])],2)}n("7db0"),n("d3b7"),n("ac1f"),n("1276"),n("2ca0");var b=function(e){return Object(c["r"])("data-v-6902d584"),e=e(),Object(c["q"])(),e},f={class:"spotlight"},j={class:"title"},m={key:0,class:"type"},h={key:1,class:"type"},v=b((function(){return Object(c["h"])("span",null,"developer",-1)})),O={class:"statement"},g=Object(c["i"])(" I am a passionate husband, father, and "),w={key:0,class:"type"},k={key:1,class:"type"},y=Object(c["i"])(" developer. I love crafting new and unique software experiences that foster excitement and joy. I enjoy solving problems no one knew they had. ");function S(e,t,n,o,a,r){return Object(c["p"])(),Object(c["g"])(c["a"],null,[Object(c["h"])("div",f,[Object(c["h"])("div",j,[Object(c["j"])(c["b"],{name:"crossfade",mode:"out-in",appear:""},{default:Object(c["x"])((function(){return[e.type?(Object(c["p"])(),Object(c["g"])("span",m,Object(c["w"])(e.type),1)):(Object(c["p"])(),Object(c["g"])("span",h,Object(c["w"])(e.nextType),1))]})),_:1}),v])]),Object(c["h"])("div",O,[Object(c["h"])("p",null,[g,Object(c["j"])(c["b"],{name:"crossfade",mode:"out-in",appear:""},{default:Object(c["x"])((function(){return[e.type?(Object(c["p"])(),Object(c["g"])("span",w,Object(c["w"])(e.type.toLowerCase()),1)):(Object(c["p"])(),Object(c["g"])("span",k,Object(c["w"])(e.nextType.toLowerCase()),1))]})),_:1}),y])])],64)}n("4de4"),n("466d");var x=Object(c["k"])({name:"Spotlight",setup:function(){var e,t=Object(c["s"])("Full-stack"),n=Object(c["s"])(null),o=["Software","Front-end","Backend","Full-stack","Free-lance","Web","Application"],a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=o.filter((function(t){return!t.match(e)}));return t[Math.floor(Math.random()*t.length)]};return Object(c["n"])((function(){e=setInterval((function(){t.value?(n.value=a(t.value),t.value=null):(t.value=a(n.value),n.value=null)}),5e3)})),Object(c["o"])((function(){return clearInterval(e)})),{type:t,nextType:n}}}),C=(n("dd12"),n("6b0d")),M=n.n(C);const I=M()(x,[["render",S],["__scopeId","data-v-6902d584"]]);var P=I,L=function(e){return Object(c["r"])("data-v-6a89057d"),e=e(),Object(c["q"])(),e},T={class:"card"},A={class:"meta"},E={class:"item"},D={class:"item"},B={class:"blurb"},R=["innerHTML"],_={key:0,class:"skills"},H=L((function(){return Object(c["h"])("h4",null,"Skills & Technologies",-1)}));function U(e,t,n,o,a,r){var i=Object(c["v"])("UserIcon"),s=Object(c["v"])("ClockIcon");return Object(c["p"])(),Object(c["g"])("section",T,[Object(c["h"])("h3",null,Object(c["w"])(e.workExperience.name),1),Object(c["h"])("div",A,[Object(c["h"])("span",E,[Object(c["j"])(i),Object(c["h"])("span",null,Object(c["w"])(e.workExperience.title),1)]),Object(c["h"])("span",D,[Object(c["j"])(s),Object(c["h"])("span",null,Object(c["w"])(e.age),1)])]),Object(c["h"])("div",B,[(Object(c["p"])(!0),Object(c["g"])(c["a"],null,Object(c["t"])(e.workExperience.blurbs,(function(e){return Object(c["p"])(),Object(c["g"])("p",{key:e,innerHTML:e},null,8,R)})),128))]),e.workExperience.skills.length?(Object(c["p"])(),Object(c["g"])("div",_,[H,Object(c["h"])("ul",null,[(Object(c["p"])(!0),Object(c["g"])(c["a"],null,Object(c["t"])(e.workExperience.skills,(function(e){return Object(c["p"])(),Object(c["g"])("li",{key:e},Object(c["w"])(e),1)})),128))])])):Object(c["f"])("",!0)])}var q=n("d146"),W=Object(c["h"])("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"user",class:"svg-inline--fa fa-user fa-w-14",role:"img",viewBox:"0 0 448 512"},[Object(c["h"])("path",{fill:"currentColor",d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"})],-1);function z(e,t,n,o,a,r){var i=Object(c["v"])("BaseIcon");return Object(c["p"])(),Object(c["e"])(i,{class:"user"},{default:Object(c["x"])((function(){return[W]})),_:1})}var J={class:"icon"};function F(e,t,n,o,a,r){return Object(c["p"])(),Object(c["g"])("i",J,[Object(c["u"])(e.$slots,"default")])}var G={name:"BaseIcon",props:{label:String}};n("3c63");const Y=M()(G,[["render",F]]);var N=Y,V={name:"UserIcon",components:{BaseIcon:N}};const Q=M()(V,[["render",z]]);var K=Q,Z=Object(c["h"])("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"clock",class:"svg-inline--fa fa-clock fa-w-16",role:"img",viewBox:"0 0 512 512"},[Object(c["h"])("path",{fill:"currentColor",d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"})],-1);function X(e,t,n,o,a,r){var i=Object(c["v"])("BaseIcon");return Object(c["p"])(),Object(c["e"])(i,{class:"clock"},{default:Object(c["x"])((function(){return[Z]})),_:1})}var $={name:"ClockIcon",components:{BaseIcon:N}};const ee=M()($,[["render",X]]);var te=ee,ne=Object(c["k"])({name:"workExperience",components:{UserIcon:K,ClockIcon:te},props:["workExperience"],setup:function(e){var t=Object(c["c"])((function(){var t=Object(q["a"])(new Date(e.workExperience.fromDt),e.workExperience.toDt?new Date(e.workExperience.toDt):new Date);return t}));return{age:t}}});n("73a7");const ce=M()(ne,[["render",U],["__scopeId","data-v-6a89057d"]]);var oe=ce,ae=function(e){return Object(c["r"])("data-v-1ecb3984"),e=e(),Object(c["q"])(),e},re={class:"card education"},ie={class:"meta"},se={class:"item"},le={class:"item"},ue={key:0,class:"skills"},pe=ae((function(){return Object(c["h"])("h4",{class:"skills-title"},"Honors & Awards",-1)})),de={class:"skills"};function be(e,t,n,o,a,r){var i=Object(c["v"])("GradCapIcon"),s=Object(c["v"])("ClockIcon"),l=Object(c["v"])("LocationMarkerIcon");return Object(c["p"])(),Object(c["g"])("section",re,[Object(c["h"])("h3",null,Object(c["w"])(e.education.name),1),Object(c["h"])("div",ie,[(Object(c["p"])(!0),Object(c["g"])(c["a"],null,Object(c["t"])(e.education.majors,(function(e){return Object(c["p"])(),Object(c["g"])("span",{class:"item",key:e},[Object(c["j"])(i),Object(c["h"])("span",null,Object(c["w"])(e),1)])})),128)),Object(c["h"])("span",se,[Object(c["j"])(s),Object(c["h"])("span",null,Object(c["w"])(e.education.gradDt),1)]),Object(c["h"])("span",le,[Object(c["j"])(l),Object(c["h"])("span",null,Object(c["w"])(e.education.location),1)])]),e.education.awards.length?(Object(c["p"])(),Object(c["g"])("div",ue,[pe,Object(c["h"])("ul",de,[(Object(c["p"])(!0),Object(c["g"])(c["a"],null,Object(c["t"])(e.education.awards,(function(e){return Object(c["p"])(),Object(c["g"])("li",{key:e},Object(c["w"])(e),1)})),128))])])):Object(c["f"])("",!0)])}var fe=Object(c["h"])("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"map-marker",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",class:"svg-inline--fa fa-map-marker fa-w-12 fa-2x"},[Object(c["h"])("path",{fill:"currentColor",d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z",class:""})],-1);function je(e,t,n,o,a,r){var i=Object(c["v"])("BaseIcon");return Object(c["p"])(),Object(c["e"])(i,{class:"location"},{default:Object(c["x"])((function(){return[fe]})),_:1})}var me={name:"LocationMarkerIcon",components:{BaseIcon:N}};const he=M()(me,[["render",je]]);var ve=he,Oe=Object(c["h"])("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"graduation-cap",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",class:"svg-inline--fa fa-graduation-cap fa-w-20 fa-2x"},[Object(c["h"])("path",{fill:"currentColor",d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z",class:""})],-1);function ge(e,t,n,o,a,r){var i=Object(c["v"])("BaseIcon");return Object(c["p"])(),Object(c["e"])(i,{class:"grad"},{default:Object(c["x"])((function(){return[Oe]})),_:1})}var we={name:"GradCapIcon",components:{BaseIcon:N}};const ke=M()(we,[["render",ge]]);var ye=ke,Se=Object(c["k"])({name:"Education",components:{ClockIcon:te,LocationMarkerIcon:ve,GradCapIcon:ye},props:{education:Object}});n("6435");const xe=M()(Se,[["render",be],["__scopeId","data-v-1ecb3984"]]);var Ce=xe,Me=function(e){return Object(c["r"])("data-v-28368402"),e=e(),Object(c["q"])(),e},Ie=Me((function(){return Object(c["h"])("h2",{class:"what-people-say-title"},"What People Say",-1)})),Pe={class:"what-people-say"},Le={key:0,class:"name-title"},Te={class:"name"},Ae=Me((function(){return Object(c["h"])("br",null,null,-1)})),Ee={class:"title"},De={key:1,class:"title-only"},Be={class:"title"};function Re(e,t,n,o,a,r){return Object(c["p"])(),Object(c["g"])(c["a"],null,[Ie,Object(c["h"])("section",Pe,[(Object(c["p"])(!0),Object(c["g"])(c["a"],null,Object(c["t"])(e.peeps,(function(e){return Object(c["p"])(),Object(c["g"])("div",{key:e.name,class:"comment"},[e.name?(Object(c["p"])(),Object(c["g"])("div",Le,[Object(c["h"])("span",Te,Object(c["w"])(e.name),1),Ae,Object(c["h"])("span",Ee,Object(c["w"])(e.title),1)])):(Object(c["p"])(),Object(c["g"])("div",De,[Object(c["h"])("span",Be,Object(c["w"])(e.title),1)])),Object(c["h"])("blockquote",null,[Object(c["h"])("span",null,Object(c["w"])(e.say),1)])])})),128))])],64)}var _e=Object(c["k"])({name:"WhatPeopleSay",props:{peeps:Object},setup:function(){var e=function(e){return window.scrollY+window.outerHeight-200>e.offsetTop},t=function t(){var n=document.querySelector(".what-people-say");n&&e(n)?n.classList.add("in-viewport"):document.addEventListener("scroll",(function(){return t()}),{once:!0})};return Object(c["n"])((function(){t()})),{}}});n("606b");const He=M()(_e,[["render",Re],["__scopeId","data-v-28368402"]]);var Ue=He,qe=(n("99af"),{class:"selected-project"}),We={class:"selected-project-title"},ze={class:"selected-project-images"},Je=["data-image-url"],Fe={class:"mousemove-target"},Ge={class:"caption"};function Ye(e,t,n,o,a,r){return Object(c["p"])(),Object(c["g"])("div",qe,[Object(c["h"])("div",We,[Object(c["h"])("h3",null,Object(c["w"])(e.project.name),1)]),Object(c["h"])("div",ze,[(Object(c["p"])(!0),Object(c["g"])(c["a"],null,Object(c["t"])(e.project.images,(function(n){return Object(c["p"])(),Object(c["g"])("div",{key:n.item,class:"selected-project-image"},[Object(c["h"])("div",{style:Object(c["m"])("background-image: url(".concat(e.project.baseUrl,"/").concat(e.project.dir,"/").concat(e.project.dir,"-").concat(n.item,".png);")),"data-image-url":"".concat(e.project.baseUrl,"/").concat(e.project.dir,"/").concat(e.project.dir,"-").concat(n.item,".png"),class:"image-container"},null,12,Je),Object(c["h"])("div",Fe,[Object(c["h"])("div",{onMousemove:t[0]||(t[0]=function(){return e.trackMouse&&e.trackMouse.apply(e,arguments)}),onMouseout:t[1]||(t[1]=function(){return e.centerBackground&&e.centerBackground.apply(e,arguments)}),class:"overlay"},null,32)]),Object(c["h"])("p",Ge,Object(c["w"])(n.caption),1)])})),128))])])}var Ne=n("1da1"),Ve=(n("96cf"),Object(c["k"])({name:"SelectedProject",props:{project:Object},setup:function(){var e,t=function(){var e=Object(Ne["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){void 0===t&&n(new Error("URL is undefined"));var c=new Image;c.addEventListener("load",(function(){e({width:this.naturalWidth,height:this.naturalHeight})})),c.src=t})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=function(e,t,n){var c=n.width/t.width,o=n.height/t.height,a=Math.round((e.x-t.left)*c/n.width*100),r=Math.round((e.y-t.top)*o/n.height*100);return{xPercent:a,yPercent:r}},c=function(c){var o,a=c.target,r=null===(o=a.closest(".selected-project-image"))||void 0===o?void 0:o.querySelector(".image-container");if(r.style.backgroundSize="unset",void 0===e)t(r.dataset.imageUrl).then((function(t){if(e=t,e){var o=n({x:c.x,y:c.y},a.getBoundingClientRect(),e),i=o.xPercent,s=o.yPercent;r.style.backgroundPositionX="".concat(i,"%"),r.style.backgroundPositionY="".concat(s,"%")}})).catch((function(e){return console.warn(e)}));else{var i=n({x:c.x,y:c.y},a.getBoundingClientRect(),e),s=i.xPercent,l=i.yPercent;r.style.backgroundPositionX="".concat(s,"%"),r.style.backgroundPositionY="".concat(l,"%")}},o=function(t){var n,c=t.target,o=null===(n=c.closest(".selected-project-image"))||void 0===n?void 0:n.querySelector(".image-container");o.style.backgroundSize="cover",o.style.backgroundPosition="center",e=void 0};return{trackMouse:c,centerBackground:o}}}));n("1b68");const Qe=M()(Ve,[["render",Ye],["__scopeId","data-v-7df7ab55"]]);var Ke=Qe,Ze=Object(c["h"])("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"heart",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"svg-inline--fa fa-heart fa-w-16 fa-2x"},[Object(c["h"])("path",{fill:"currentColor",d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",class:""})],-1);function Xe(e,t,n,o,a,r){var i=Object(c["v"])("BaseIcon");return Object(c["p"])(),Object(c["e"])(i,{class:"heart"},{default:Object(c["x"])((function(){return[Ze]})),_:1})}var $e={name:"HeartIcon",components:{BaseIcon:N}};const et=M()($e,[["render",Xe]]);var tt=et,nt=function(e){return Object(c["r"])("data-v-24452bbd"),e=e(),Object(c["q"])(),e},ct=["onClick"],ot=nt((function(){return Object(c["h"])("div",{class:"primary"},null,-1)})),at=nt((function(){return Object(c["h"])("div",{class:"secondary"},null,-1)})),rt=nt((function(){return Object(c["h"])("div",{class:"tertiary"},null,-1)})),it=[ot,at,rt],st=nt((function(){return Object(c["h"])("span",null,"On",-1)})),lt=nt((function(){return Object(c["h"])("span",null,"Off",-1)})),ut=[st,lt];function pt(e,t,n,o,a,r){var i=Object(c["v"])("GearIcon");return Object(c["p"])(),Object(c["g"])(c["a"],null,[Object(c["j"])(i,{onClick:o.handleGearClick,onMouseleave:o.handleMouseLeave,class:"gear"},null,8,["onClick","onMouseleave"]),Object(c["j"])(c["b"],{name:"drop-fade",appear:""},{default:Object(c["x"])((function(){return[o.hovering?(Object(c["p"])(),Object(c["g"])("div",{key:0,onMouseenter:t[1]||(t[1]=function(){return o.handleGearClick&&o.handleGearClick.apply(o,arguments)}),onMouseleave:t[2]||(t[2]=function(){return o.handleMouseLeave&&o.handleMouseLeave.apply(o,arguments)}),class:Object(c["l"])([{hide:!o.hovering},"themer"])},[(Object(c["p"])(!0),Object(c["g"])(c["a"],null,Object(c["t"])(o.themes,(function(e){return Object(c["p"])(),Object(c["g"])("div",{key:e,onClick:function(t){return o.handleThemeChange(e)},class:Object(c["l"])([e,"pallete"])},it,10,ct)})),128)),Object(c["h"])("div",{onClick:t[0]||(t[0]=function(){return o.handleDarkModeToggle&&o.handleDarkModeToggle.apply(o,arguments)}),class:"dark-mode-toggle"},[Object(c["h"])("div",{class:Object(c["l"])([{on:o.prefersDarkMode},"txt"])},ut,2),Object(c["h"])("div",{class:Object(c["l"])([{on:o.prefersDarkMode},"btn-housing"])},null,2)])],34)):Object(c["f"])("",!0)]})),_:1})],64)}var dt=Object(c["h"])("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fat","data-icon":"gear",class:"svg-inline--fa fa-gear",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[Object(c["h"])("path",{fill:"currentColor",d:"M499.5 332c0-5.66-3.112-11.13-8.203-14.07l-46.61-26.91C446.8 279.6 448 267.1 448 256s-1.242-23.65-3.34-35.02l46.61-26.91c5.092-2.941 8.203-8.411 8.203-14.07c0-14.1-41.98-99.04-63.86-99.04c-2.832 0-5.688 .7266-8.246 2.203l-46.72 26.98C362.9 94.98 342.4 83.1 320 75.16V21.28c0-7.523-5.162-14.28-12.53-15.82C290.8 1.977 273.7 0 256 0s-34.85 1.977-51.48 5.461C197.2 7.004 192 13.76 192 21.28v53.88C169.6 83.1 149.1 94.98 131.4 110.1L84.63 83.16C82.08 81.68 79.22 80.95 76.39 80.95c-19.72 0-63.86 81.95-63.86 99.04c0 5.66 3.112 11.13 8.203 14.07l46.61 26.91C65.24 232.4 64 244 64 256s1.242 23.65 3.34 35.02l-46.61 26.91c-5.092 2.941-8.203 8.411-8.203 14.07c0 14.1 41.98 99.04 63.86 99.04c2.832 0 5.688-.7266 8.246-2.203l46.72-26.98C149.1 417 169.6 428.9 192 436.8v53.88c0 7.523 5.162 14.28 12.53 15.82C221.2 510 238.3 512 255.1 512s34.85-1.977 51.48-5.461C314.8 504.1 320 498.2 320 490.7v-53.88c22.42-7.938 42.93-19.82 60.65-34.97l46.72 26.98c2.557 1.477 5.416 2.203 8.246 2.203C455.3 431 499.5 349.1 499.5 332zM435.4 414.1l-56.52-32.64l-8.602 7.355c-16.37 14-35.07 24.79-55.59 32.05L304 425.5l.1914 65.35C287.1 494.3 271.8 496 256 496s-31.97-1.723-48-5.281v-65.19l-10.66-3.773c-20.51-7.262-39.22-18.05-55.59-32.05l-8.602-7.355l-56.58 32.88c-21.61-24.36-37.78-52.45-47.84-83.45l56.4-32.56l-2.049-11.11C81.01 276.9 80 266.4 80 256s1.006-20.9 3.074-32.12l2.049-11.11L28.48 180.2c10.3-31.02 26.48-59.11 48.15-83.23l56.52 32.64l8.602-7.355c16.37-14 35.07-24.79 55.59-32.05L208 86.47L207.8 21.12C224 17.72 240.2 16 256 16s31.97 1.723 48 5.281v65.19l10.66 3.773c20.51 7.262 39.22 18.05 55.59 32.05l8.602 7.355l56.58-32.88c21.61 24.36 37.78 52.45 47.84 83.45l-56.4 32.56l2.049 11.11C430.1 235.1 432 245.6 432 256s-1.006 20.9-3.074 32.12l-2.049 11.11l56.64 32.53C473.2 362.8 457 390.9 435.4 414.1zM256 176C211.9 176 176 211.9 176 256s35.89 80 80 80s80-35.89 80-80S300.1 176 256 176zM256 319.1c-35.29 0-64-28.71-64-64S220.7 191.1 256 191.1s64 28.71 64 64S291.3 319.1 256 319.1z"})],-1);function bt(e,t,n,o,a,r){var i=Object(c["v"])("BaseIcon");return Object(c["p"])(),Object(c["e"])(i,{class:"gear"},{default:Object(c["x"])((function(){return[dt]})),_:1})}var ft={name:"GearIcon",components:{BaseIcon:N}};const jt=M()(ft,[["render",bt]]);var mt=jt,ht={name:"Themer",components:{GearIcon:mt},emits:["theme-change","prefers-dark"],setup:function(e,t){var n=Object(c["s"])(!1),o=Object(c["s"])(["theme-1","theme-2","theme-3"]),a={"theme-1":"#1d3557","theme-2":"#14213d","theme-3":"#ae2012"},r=function(e){t.emit("theme-change",e),document.cookie="theme=".concat(e),document.querySelector("meta[name=theme-color]").content=a[e]},i=Object(c["s"])(!1);Object(c["n"])((function(){var e,t,n=null===(e=document.cookie.split("; ").find((function(e){return e.startsWith("theme=")})))||void 0===e?void 0:e.split("=")[1];document.querySelector("meta[name=theme-color]").content=a[n]||a["theme-1"];var c=null===(t=document.cookie.split("; ").find((function(e){return e.startsWith("prefersDarkMode=")})))||void 0===t?void 0:t.split("=")[1];i.value="true"===c}));var s,l=function(){i.value=!i.value,document.cookie="prefersDarkMode=".concat(i.value,"; "),t.emit("prefers-dark",i.value)},u=function(){clearTimeout(s),n.value||(s=setTimeout((function(){n.value=!0}),100))},p=function(){clearTimeout(s),n.value&&(s=setTimeout((function(){n.value=!1}),100))};return{hovering:n,themes:o,prefersDarkMode:i,handleDarkModeToggle:l,handleThemeChange:r,handleGearClick:u,handleMouseLeave:p}}};n("a604");const vt=M()(ht,[["render",pt],["__scopeId","data-v-24452bbd"]]);var Ot=vt,gt={name:"Corey Ison",statement:"",workExperiences:[{name:"University of Pikeville",title:"Lead Application Developer",fromDt:"2012-02-01",toDt:null,blurbs:["The past 10 years spent at UPIKE has been filled with opportunities to grow and develop my love for web application development. I've always had the freedom to work in an environment of creativity. In fact, many of my most used products were developed from a need that I saw from the campus community. As an example, the report dashboard was created because I saw a need for the staff and faculty to have access to real-time reports on a recurring basis. Using the report dashboard, a user can easily run a report or schedule the report to run on any number of recurring schedules.","Another opportunity I had to meet a need involved the creation of student accounts. The UPIKE student application was created with the idea to create accounts after the applications were imported into the universities ERP and their deposit is paid. As application statuses are synced with the ERP, prospects are given near real-time notifications of changes. Once the deposit is paid the prospects account is created and the prospect is notified of their account details."],skills:["HTML","CSS","JavaScript","jQuery","VueJs","PHP","MySQL","MS-SQL","Windows","IIS"]},{name:"Lightyear Network Solutions",title:"Software Developer",fromDt:"2007-01-01",toDt:"2012-02-01",blurbs:["I worked with a team of developers to maintain, modify, extend, and support open source Java CRM. Developed and supported new development web applications for internal use.","I was responsible for the creation, maintenance, and distribution of custom reports."],skills:["HTML","CSS","JavaScript","jQuery","Java","JSP","PHP","Jasper Reports","Oracle","MySQL","Linux","Apache"]},{name:"Lexmark",title:"Senior Software Technician",fromDt:"2006-07-01",toDt:"2007-01-01",blurbs:["I worked with a team to black box test printer software and hardware in various predefined installation and usage scenarios. All tests were done following a testing guide. Our team was going to be the team that developed the tests for all testing purposes.","Our team was also responsible for ad-hoc testing based on user feedback."],skills:["Microsoft Excel","Windows","Linux"]}],educations:[{name:"UVa @ Wise",location:"Wise, VA",majors:["Computer Information Systems","Mathematics"],gradDt:"May 2005",awards:["Recipient of the Most Outstanding Senior Award in CIS","Recipient of the Theo Gibson Math and Sciences scholarship","Academic Dean's List","Member of Sigma Zeta: National Mathematics and Science Honor Society","Member of The Darden Society"]},{name:"Hazard Community College",location:"Hazard, KY",majors:["A.S. Information Technology","Network Administration Option"],gradDt:"Dec 2002",awards:["Dean's List"]}],whatPeopleSay:[{title:"Associate Director of Admissions",say:"Corey has been invaluable to the Admissions department over the years. There are critical "},{title:"Chair, School of Social Work",say:"His ability to understand abstract concepts and then transform them into working web applications is unmatched and our overall success would not have been possible without his assistance."},{title:"Co-worker",say:"Corey is always looking for opportunities and ways to help others with his programming skills to make other's jobs easier and more efficient."},{title:"Executive Director of Residence Life & Engagement",say:"[Corey] was always open to feedback and always willing to collaborate with various constituents to improve student success."},{title:"Co-worker",say:"...app turned iPad distribution from a process that used to take hours to a task that could be completed in less than 20 minutes."}],selectedProjects:[{name:"Housing Application",baseUrl:"/selected-projects",dir:"housing",images:[{item:1,caption:"Housing application homepage"},{item:2,caption:"Single building view"},{item:3,caption:"Floor/room detail"},{item:4,caption:"Search results/history"},{item:5,caption:"Roommate suggestion/matching"},{item:6,caption:"Roommate suggestion/matching breakdown"},{item:7,caption:"Composing an SMS message"},{item:8,caption:"Sidebar navigation"},{item:9,caption:"SMS/Email outbox"},{item:10,caption:"Message detail"}]},{name:"Job Application",baseUrl:"/selected-projects",dir:"jobs",images:[{item:1,caption:"All Jobs listings"},{item:2,caption:"Admin page dashboard"},{item:3,caption:"Job detail"},{item:4,caption:"Application filters"},{item:5,caption:"Job viewers"},{item:6,caption:"Applications for job"},{item:7,caption:"Public job detail"},{item:8,caption:"Public job detail (modal)"}]},{name:"Form Builder",baseUrl:"/selected-projects",dir:"approval",images:[{item:1,caption:"All forms"},{item:2,caption:"Individual form/submissions"},{item:3,caption:"Route editor for notifications"},{item:4,caption:"Form builder. Form detail"},{item:5,caption:"Form builder. Input field setup"},{item:6,caption:"Live form (registration for orientation)"},{item:7,caption:"Live form for student review at professional school"},{item:8,caption:"Masters of Social work application"},{item:9,caption:"Autosave functionality"}]},{name:"Student Application",baseUrl:"/selected-projects",dir:"student-application",images:[{item:1,caption:"Student application landing page"},{item:2,caption:"Register account modal"},{item:3,caption:"Applications view"},{item:4,caption:"Application progress"},{item:5,caption:"Custom select closed/selected"},{item:6,caption:"Custom select open/selected"},{item:7,caption:"Custom multi-select open/selected"},{item:8,caption:"Custom date picker"}]},{name:"Report Dashboard",baseUrl:"/selected-projects",dir:"report",images:[{item:1,caption:"HTML Report Result"},{item:2,caption:"Report parameters"},{item:3,caption:"Report jobs"},{item:4,caption:"Report jobs continued"},{item:5,caption:"Report jobs continued"},{item:6,caption:"Defined parameters, subreports, HTML for report"},{item:7,caption:"Report with SQL datasource"},{item:8,caption:"Report with a script datasource"},{item:9,caption:"My reports view"}]},{name:"MyPass",baseUrl:"/selected-projects",dir:"password-utility",images:[{item:1,caption:"Password reset login"},{item:2,caption:"Security code"},{item:3,caption:"Change password"}]},{name:"Events Tracking",baseUrl:"/selected-projects",dir:"events",images:[{item:1,caption:"All events view"},{item:2,caption:"Event view with registered attendees"},{item:3,caption:"Event registration page"},{item:4,caption:"Mulitple event registration page"}]},{name:"Ticketing",baseUrl:"/selected-projects",dir:"permits",images:[{item:1,caption:"All users view"},{item:2,caption:"Individual user/vehicles view"},{item:3,caption:"Ticket edit page"}]}]},wt=gt,kt={name:"App",components:{Spotlight:P,WorkExperience:oe,Education:Ce,WhatPeopleSay:Ue,SelectedProject:Ke,HeartIcon:tt,Themer:Ot},setup:function(){var e,t,n=Object(c["s"])(wt),o=Object(c["s"])("theme-1"),a=Object(c["s"])(["theme-1","theme-2","theme-3"]),r=Object(c["s"])(!0),i=function(e){return window.scrollY+window.outerHeight>e.offsetTop},s=0,l=0,u=1,p=function(){var e=document.querySelector(".selected-projects");if(e&&i(e)){var t=e.querySelector(".selected-project:nth-child(".concat(l+1,")"));if(t){var n=t.querySelectorAll(".selected-project-image").length,c=t.querySelector(".selected-project-image:nth-child(".concat(u+1,")"));if(!c)return;u+=1,s+=c.getBoundingClientRect().left,u===n&&(l+=1,u=0),e.scrollTo(s,0)}else s=0,l=0,u=1,e.scrollTo(s,0)}},d=0,b=function e(){var n=document.querySelector("header"),c=window.scrollY>d?"down":"up";if(n){var o=n.getBoundingClientRect(),a=o.height;a=Math.round(1e4*a)/1e4,d=window.scrollY,"down"===c&&window.scrollY>a&&!n.classList.contains("stuck")?(clearTimeout(t),t=setTimeout((function(){n.classList.add("show")}),1e3),n.classList.add("stuck")):window.scrollY<=a&&n.classList.contains("stuck")?(clearTimeout(t),n.classList.remove("stuck"),n.classList.remove("show")):"up"===c&&n.classList.contains("show")?(clearTimeout(t),n.classList.remove("show")):"down"!==c||n.classList.contains("show")||(clearTimeout(t),t=setTimeout((function(){n.classList.add("show")}),1e3))}document.addEventListener("scroll",(function(){return e()}),{once:!0})};Object(c["n"])((function(){var t,n;b(),e=setInterval((function(){return p()}),5e3);var c=null===(t=document.cookie.split("; ").find((function(e){return e.startsWith("theme=")})))||void 0===t?void 0:t.split("=")[1];o.value=c||"theme-1";var a=null===(n=document.cookie.split("; ").find((function(e){return e.startsWith("prefersDarkMode=")})))||void 0===n?void 0:n.split("=")[1];r.value="true"===a})),Object(c["o"])((function(){return clearInterval(e)}));var f=function(){return clearInterval(e)},j=function(){var t=document.querySelector(".selected-projects");t&&(t.scrollLeft!==s?setTimeout((function(){t&&t.scrollTo(s,0),e=setInterval((function(){return p()}),5e3)}),5e3):e=setInterval((function(){return p()}),5e3))};return{reactivePerson:n,pauseAutoScroll:f,theme:o,themes:a,prefersDark:r,resumeAutoScroll:j}}};n("6413");const yt=M()(kt,[["render",d]]);var St=yt,xt=n("9483");Object(xt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(c["d"])(St).mount("#app")},d91f:function(e,t,n){},dd12:function(e,t,n){"use strict";n("a286")}});
//# sourceMappingURL=app.6d3b19c0.js.map