(self.webpackChunk_icerss_kenese=self.webpackChunk_icerss_kenese||[]).push([[179],{2931:function(e,n,t){"use strict";t.d(n,{AF:function(){return s},Bk:function(){return a},G_:function(){return l},SX:function(){return r},T8:function(){return u},ay:function(){return o},jD:function(){return c},lw:function(){return i}});var i=document.querySelector(".krz-app"),r=document.querySelector(".krz-object-highlight-container"),o=document.querySelector(".krz-loading-container"),a=document.querySelector(".krz-object-container"),c=document.querySelector(".krz-item-box"),s=document.querySelector(".krz-dialog-box"),u=document.querySelector(".krz-screen-info"),l=document.querySelector(".krz-version")},9826:function(e,n,t){"use strict";var i=t(2516),r=t(3169),o=t.n(r),a=t(4533),c=t(2931),s=t(8014),u=t(3987),l=t(4631);function d(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw o}}}}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}var h="0.1.0-beta6",m=["S1","S2"];function v(){return(v=(0,i.Z)(o().mark((function e(){var n,i,r,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,a.XJ)()){e.next=2;break}return e.abrupt("return",s.s.showLoadingAnimation("请使用电脑访问"));case 2:c.G_.textContent=h,n=d(m),e.prev=4,n.s();case 6:if((i=n.n()).done){e.next=16;break}return r=i.value,(0,a.cM)("加载游戏：",r),e.next=11,t(7783)("./".concat(r,"/").concat(r));case 11:return u=e.sent,e.next=14,u.default();case 14:e.next=6;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),n.e(e.t0);case 21:return e.prev=21,n.f(),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[4,18,21,24]])})))).apply(this,arguments)}u.S1({dsn:"https://b410206a05b44426a692b486ae947074@o947661.ingest.sentry.io/6387179",integrations:[new l.gE],tracesSampleRate:1}),function(){v.apply(this,arguments)}()},8014:function(e,n,t){"use strict";t.d(n,{s:function(){return C}});var i=t(2516),r=t(4303),o=t(4384),a=t(3169),c=t.n(a),s=t(2931),u=t(2299),l=t(4780),d=t(4533);function f(e){return C.setStartAnimation(),new l.Z((function(n){s.SX.innerHTML='\n<div class="krz-object-highlight">\n  <div class="krz-highlight-name">'.concat(e.name,'</div>\n  <img class="krz-object-img-highlight" src="').concat(e.img,'">\n  <div class="krz-highlight-get-tip">GET!</div>\n  <div class="krz-highlight-close-tip">点击空白处以继续</div>\n</div>'),s.SX.style.display="block",s.SX.addEventListener("click",(function(){s.SX.style.display="none",C.setStopAnimation(),n()})),(0,d.cM)("展示物品高亮",{name:e.name||"",uid:e.uid})}))}var h=t(3522),m=new(function(){function e(){(0,r.Z)(this,e),this.callback={}}return(0,o.Z)(e,[{key:"$on",value:function(e,n){this.callback[e]=this.callback[e]||[],this.callback[e].push(n)}},{key:"$off",value:function(e){delete this.callback[e]}},{key:"$emit",value:function(e,n){console.log(h.ZP.bgRedBright.white("[EventBus]"),"".concat(e,": "),n),this.callback[e]&&this.callback[e].forEach((function(e){e(n)}))}}]),e}()),v="ON_CLICK_TARGET_OBJECT",p="ON_HIDE_OBJECT_COVER";function y(e){var n=document.createElement("div");n.className="krz-item",n.setAttribute("data-id",e.uid);var t,i,r=new Image;r.src=e.img,r.className="krz-item-img",n.appendChild(r),s.jD.appendChild(n),i=(t=n).getAttribute("data-id"),t.onclick=function(){if(k[i]){z("请选择目标物品，或点击空白处关闭"),function(e){z(),document.querySelector(".krz-object[data-id='".concat(e,"']")).classList.add("krz-object-top")}(k[i]);var e=document.querySelector(".krz-object[data-id='".concat(k[i],"']"));e.classList.add("krz-object-pointer");var n=function n(){x&&(m.$emit(v,{uid:k[i]}),e.removeEventListener("click",n),A())};e.addEventListener("click",n),m.$on(p,(function(){e.removeEventListener("click",n)}))}else z("暂无可操作物品，点击空白处关闭")},e.remove(),(0,d.cM)("添加物品到物品栏",{name:e.name,uid:e.uid})}var k={};function g(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?b(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw o}}}}function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}var S=function(){function e(n){(0,r.Z)(this,e),this.uid=(0,d.x0)();var t=document.createElement("div"),o=new Image;t.className="krz-object",t.style.display=n.isShow?"block":"none",t.setAttribute("data-id",this.uid),o.className="krz-object-img",o.src=n.img,n.width&&(o.width=n.width),n.height&&(o.height=n.height),t.style.left=n.x+"px",t.style.top=n.y+"px",t.appendChild(o),document.querySelector(".krz-object-container").appendChild(t),this.config=n,this.img=n.img,this.element=t,this.imageElement=o,this.isShow=n.isShow||!0,this.isAnimating=!1,this.name=n.name,this.description=n.description,this.isItem=n.isItem,this.isSelectAsItem=!1,C.pushToObjects(this.uid),(n.description||this.isItem)&&this.onclick((0,i.Z)(c().mark((function e(){var t,i,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isItem){e.next=4;break}return e.next=3,f(this);case 3:y(this);case 4:if(n.description){e.next=6;break}return e.abrupt("return");case 6:if("object"!==(0,u.Z)(this.description)){e.next=26;break}t=g(this.description),e.prev=8,t.s();case 10:if((i=t.n()).done){e.next=16;break}return r=i.value,e.next=14,C.dialog(r);case 14:e.next=10;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(8),t.e(e.t0);case 21:return e.prev=21,t.f(),e.finish(21);case 24:e.next=28;break;case 26:return e.next=28,C.dialog(this.description);case 28:case"end":return e.stop()}}),e,this,[[8,18,21,24]])}))).bind(this)),(0,d.cM)("放置物品：",{name:this.name||"",uid:this.uid})}return(0,o.Z)(e,[{key:"show",value:function(){return(0,d.cM)("显示物品",{name:this.name||"",uid:this.uid}),this.isShow=!0,(this.element.style.display="block")&&this}},{key:"hide",value:function(){return(0,d.cM)("隐藏物品",{name:this.name||"",uid:this.uid}),this.isShow=!1,(this.element.style.display="none")&&this}},{key:"remove",value:function(){return(0,d.cM)("移除物品",{name:this.name||"",uid:this.uid}),this.isShow=!1,this.element.remove()&&this}},{key:"setX",value:function(e){return(this.element.style.left=e+"px")&&this}},{key:"setY",value:function(e){return(this.element.style.top=e+"px")&&this}},{key:"setWidth",value:function(e){return(this.imageElement.width=e)&&this}},{key:"setHeight",value:function(e){return(this.imageElement.height=e)&&this}},{key:"setImage",value:function(e){return(this.imageElement.src=e)&&this}},{key:"moveTo",value:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return(0,d.cM)("物品动画开始",{name:this.name||"",uid:this.uid}),this.isAnimating=!0,new l.Z(function(i){this.element.style.transition="ease-in-out ".concat(t,"s"),this.setX(e),this.setY(n),setTimeout(function(){this.element.style.transition="unset",this.isAnimating=!1,(0,d.cM)("物品动画结束",{name:this.name||"",uid:this.uid}),i()}.bind(this),1e3*t)}.bind(this))}},{key:"goTo",value:function(e,n){return this.setX(e),this.setY(n),this}},{key:"onclick",value:function(e){return(0,d.cM)("添加监听点击事件",{name:this.name||"",uid:this.uid}),this.element.addEventListener("click",(function(n){C.isAnimating||"function"==typeof e&&e(n)}))}},{key:"clicked",value:function(){return new l.Z(function(e){(0,d.cM)("等待物品被点击",{name:this.name||"",uid:this.uid}),this.onclick(e)}.bind(this))}},{key:"touch",value:function(e){return new l.Z(function(){var n=(0,i.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,d.cM)("等待物品执行拖动触碰",{name:this.name||"",uid:this.uid}),i=e,k[this.uid]=i.uid,(0,d.cM)("添加物品到监听点击列表",{name:i.name,uid:i.uid}),m.$on(v,function(n){n.uid===e.uid&&(delete k[this.uid],(0,d.cM)("目标物体点击",{name:this.name||"",uid:this.uid}),t())}.bind(this));case 3:case"end":return n.stop()}var i}),n,this)})));return function(e){return n.apply(this,arguments)}}().bind(this))}},{key:"isShow",value:function(){return this.isShow}},{key:"isAnimating",value:function(){return this.isAnimating}},{key:"showInfoHighlight",value:function(){return e=this,C.setStartAnimation(),new l.Z((function(n){s.SX.innerHTML='\n<div class="krz-object-highlight">\n  <div class="krz-highlight-name">'.concat(e.name,'</div>\n  <img class="krz-object-img-highlight" src="').concat(e.img,'">\n  <div class="krz-item-highlight-tips">').concat(e.description,"</div>\n</div>"),s.SX.style.display="block",s.SX.addEventListener("click",(function(){s.SX.style.display="none",C.setStopAnimation(),n()})),(0,d.cM)("展示物品高亮",{name:e.name||"",uid:e.uid})}));var e}},{key:"hideInfoHighlight",value:function(){return s.SX.style.display="none",void(s.SX.innerHTML="")}}]),e}();function w(e){return new S(e)}var x=!1;function z(e){if(!x&&!C.isAnimating){C.setStartAnimation();var n=document.createElement("div");n.className="krz-object-cover",n.innerHTML='<div class="krz-object-cover-close-tip">'.concat(e,"</div>"),s.Bk.insertBefore(n,document.querySelector(".krz-object")),n.classList.add("krz-animate-fadeIn-200"),setTimeout((function(){n.classList.remove("krz-animate-fadeIn-200")}),700),x=!0,n.onclick=A}}function A(){var e=document.querySelector(".krz-object-cover");e.classList.add("krz-animate-fadeOut-400"),m.$emit(p),setTimeout((function(){e.remove(),x=!1;var n,t=g(document.querySelectorAll(".krz-object-top"));try{for(t.s();!(n=t.n()).done;){var i=n.value;i.classList.remove("krz-object-top"),i.classList.remove("krz-object-pointer")}}catch(e){t.e(e)}finally{t.f()}C.setStopAnimation()}),350)}var j=t(1571),M=t.n(j);function T(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return E(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?E(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw o}}}}function E(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function L(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{waitTime:20,isAnimate:!0},i=t.waitTime,r=t.isAnimate;return new l.Z((function(t){var o=document.createElement("span");o.textContent=n,r&&(o.className="krz-animate-fadeIn"),e.appendChild(o),setTimeout(t,i)}))}function I(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return O(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?O(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw o}}}}function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function Z(){return Z=(0,i.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,d.cM)("开始展示全屏幕文字",{text:n}),C.setStartAnimation(),e.abrupt("return",new l.Z(function(){var e=(0,i.Z)(c().mark((function e(t){var i,r,o,a,u,l,f;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.T8.innerHTML='\n  <div class="krz-screen-info-words">\n      <div class="krz-screen-info-words-print"></div>\n  </div>',s.T8.style.display="flex",n=(n=n.replace(/(，|。|,|\\n)/gi,"$1\n")).split("\n"),i=I(n),e.prev=5,i.s();case 7:if((r=i.n()).done){e.next=33;break}o=r.value,(a=document.createElement("div")).className="krz-screen-info-text",document.querySelector(".krz-screen-info-words-print").appendChild(a),o=o.split(""),u=I(o),e.prev=14,u.s();case 16:if((l=u.n()).done){e.next=23;break}return f=l.value,e.next=20,L(a,f,{waitTime:50});case 20:document.querySelector(".krz-screen-info-words-print").clientHeight>s.T8.clientHeight&&document.querySelector(".krz-screen-info-text:first-child").remove();case 21:e.next=16;break;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(14),u.e(e.t0);case 28:return e.prev=28,u.f(),e.finish(28);case 31:e.next=7;break;case 33:e.next=38;break;case 35:e.prev=35,e.t1=e.catch(5),i.e(e.t1);case 38:return e.prev=38,i.f(),e.finish(38);case 41:document.querySelector(".krz-screen-info").onclick=function(){document.querySelector(".krz-screen-info").classList.add("krz-animate-fadeOut"),setTimeout((function(){s.T8.style.display="none",document.querySelector(".krz-screen-info").classList.remove("krz-animate-fadeOut"),(0,d.cM)("结束展示全屏幕文字"),C.setStopAnimation(),t()}),500)};case 42:case"end":return e.stop()}}),e,null,[[5,35,38,41],[14,25,28,31]])})));return function(n){return e.apply(this,arguments)}}()));case 3:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}var q=function(){function e(){(0,r.Z)(this,e),this.scale=1,this._handleCanvasSize(),window.addEventListener("resize",M()(this._handleCanvasSize,100)),this.isAnimating=!1,this.objects=[],(0,d.cM)("初始化屏幕")}return(0,o.Z)(e,[{key:"_handleCanvasSize",value:function(){var e=window.innerHeight,n=window.innerWidth;this.scale=Math.min(e/1200,n/1800),s.lw.style.height="1200px",s.lw.style.width="1800px",s.lw.style.transform="scale(".concat(this.scale,")"),(0,d.cM)("调整屏幕尺寸",{scale:this.scale}),window._krz_game_scale=this.scale}},{key:"place",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0,img:"",width:0,height:0,name:"",description:[],isShow:!0,isItem:!1};return w(e)}},{key:"background",value:function(e){this.backgroungImage=e,s.lw.style.backgroundImage='url("'.concat(e,'")'),(0,d.cM)("设置背景图片")}},{key:"showLoadingAnimation",value:function(e){s.ay.innerHTML='\n<div class="krz-loading">\n    <img class="krz-loading-img krz-animate-pulse"\n        src="https://s-sh-1943-mingyan-static.oss.dogecdn.com/image/public/logo-v2/256x256.png">\n    <div class="krz-loading-text">'.concat(e||"加载资源中……","</div>\n</div>"),s.ay.style.display="block",(0,d.cM)("显示加载中页面")}},{key:"hideLoadingAnimation",value:function(){s.ay.innerHTML="",s.ay.style.display="none",(0,d.cM)("隐藏加载中页面")}},{key:"load",value:function(e){return new l.Z(function(){var n=(0,i.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this.showLoadingAnimation(),this.setStartAnimation(),n.next=4,(0,d.ns)(e);case 4:this.hideLoadingAnimation(),this.setStopAnimation(),t();case 7:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}().bind(this))}},{key:"fullInfo",value:function(e){return function(e){return Z.apply(this,arguments)}(e)}},{key:"dialog",value:function(e){return function(e){return(0,d.cM)("显示人物对话",{text:e}),C.setStartAnimation(),new l.Z(function(){var n=(0,i.Z)(c().mark((function n(t){var i,r,o,a,u;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.AF.innerHTML='\n<div class="krz-dialog-model">\n    <div class="krz-dialog-words-group">\n        <div class="krz-dialog-text"></div>\n    </div>\n    <div class="krz-dialog-next-icon" style="display: none;"></div>\n</div>',s.AF.style.display="flex",i=!1,/<red>(.*?)<\/red>/.test(e)&&(i=!0,e=e.replace(/<red>(.*?)<\/red>/g,"$1")),e=e.split(""),r=document.querySelector(".krz-dialog-text"),i&&(r.style.color="red"),o=T(e),n.prev=8,o.s();case 10:if((a=o.n()).done){n.next=16;break}return u=a.value,n.next=14,L(r,u,{waitTime:30,isAnimate:!1});case 14:n.next=10;break;case 16:n.next=21;break;case 18:n.prev=18,n.t0=n.catch(8),o.e(n.t0);case 21:return n.prev=21,o.f(),n.finish(21);case 24:setTimeout((function(){document.querySelector(".krz-dialog-next-icon").style.display="block",document.querySelector(".krz-dialog-next-icon").classList.add("krz-animate-flicker")}),100),document.querySelector(".krz-dialog-model").addEventListener("click",(function(){setTimeout((function(){document.querySelector(".krz-dialog-model").remove(),s.AF.style.display="none",C.setStopAnimation(),t()}),100)}));case 26:case"end":return n.stop()}}),n,null,[[8,18,21,24]])})));return function(e){return n.apply(this,arguments)}}())}(e)}},{key:"setStartAnimation",value:function(){return(0,d.cM)("开始执行动画，任务挂起"),this.isAnimating=!0}},{key:"setStopAnimation",value:function(){return(0,d.cM)("结束执行动画，任务继续"),this.isAnimating=!1}},{key:"getScale",value:function(){return window._krz_game_scale||this.scale}},{key:"pushToObjects",value:function(e){return this.objects.push(e)}}]),e}(),C=new q},4533:function(e,n,t){"use strict";t.d(n,{Wz:function(){return d},XJ:function(){return l},cM:function(){return c},ns:function(){return s},x0:function(){return u}});var i,r=t(4780),o=t(7450),a=t(3522),c=(i=0,function(){var e;i++,(e=console).log.apply(e,[a.ZP.magenta.bgCyanBright.bold("[INFO]")," #".concat(i," ->")].concat(Array.prototype.slice.call(arguments)))});function s(e){c("预加载资源");var n=[];for(var t in e)n.push(e[t]);return r.Z.all(n.map((function(e){return new r.Z((function(n){var t=new Image;t.src=e,t.addEventListener("load",n)}))})))}window.log=c,console.log("\n %c %c %c The Lost Kenese  - ✰ ERSS ✰  %c  \n","background: #ffb700; padding:5px 0;","background: #ffb700; padding:5px 0;","color: #ffb700; background: #5755d9; padding:5px 0;","background: #ffb700; padding:5px 0;");var u=(0,o.kP)("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",8);function l(){return window.innerWidth<=480||/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)}function d(e){var n=location.href;n=n.replace("?","?&").split("&");for(var t="",i=1;i<n.length;i++)0==n[i].indexOf(e+"=")&&(t=n[i].replace(e+"=",""));return t}},7783:function(e,n,t){var i={"./S1/S1":[1174,9,981],"./S1/S1.js":[1174,9,981],"./S1/i18n":[2661,9,436],"./S1/i18n/":[2661,9,436],"./S1/i18n/en.json":[7030,3,625],"./S1/i18n/index":[2661,9,436],"./S1/i18n/index.js":[2661,9,436],"./S1/i18n/zh.json":[4923,3,670],"./S1/resources":[3933,9,365],"./S1/resources.js":[3933,9,365],"./S2/S2":[9675,9,882],"./S2/S2.js":[9675,9,882],"./S2/i18n":[678,9,590],"./S2/i18n/":[678,9,590],"./S2/i18n/en.json":[5161,3,413],"./S2/i18n/index":[678,9,590],"./S2/i18n/index.js":[678,9,590],"./S2/i18n/zh.json":[5269,3,80],"./common/character":[5943,9,797],"./common/character.js":[5943,9,797],"./common/i18n":[7874,9,705],"./common/i18n/":[7874,9,705],"./common/i18n/en.json":[7038,3,788],"./common/i18n/index":[7874,9,705],"./common/i18n/index.js":[7874,9,705],"./common/i18n/ja.json":[1866,3,418],"./common/i18n/zh.json":[3180,3,381]};function r(e){if(!t.o(i,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=i[e],r=n[0];return t.e(n[2]).then((function(){return t.t(r,16|n[1])}))}r.keys=function(){return Object.keys(i)},r.id=7783,e.exports=r}},function(e){e.O(0,[765,835,970,872,734,85,552],(function(){return 9826,e(e.s=9826)})),e.O()}]);