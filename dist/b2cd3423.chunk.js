"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[452],{610:(n,e,t)=>{t.d(e,{SX:()=>r,ay:()=>o,jD:()=>s,lw:()=>i});const i=document.querySelector(".krz-app"),r=document.querySelector(".krz-object-highlight-container"),o=document.querySelector(".krz-loading-container"),s=document.querySelector(".krz-item-box")},84:(n,e,t)=>{var i=t(176);!async function(){await(0,i.Z)()}()},109:(n,e,t)=>{t.d(e,{ts:()=>y,QH:()=>z,KF:()=>k});var i=t(906),r=t.n(i),o=t(814),s=t.n(o),l=t(486),a=t.n(l),c=t(918),d=t.n(c),h=t(102),f=t.n(h),u=t(653),g=t.n(u),m=t(954),p={};p.styleTagTransform=g(),p.setAttributes=d(),p.insert=a().bind(null,"head"),p.domAPI=s(),p.insertStyleElement=f(),r()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals;var b=t(610),v=t(497);function k(n){return new Promise((function(e){b.SX.innerHTML=`\n<div class="krz-object-highlight">\n  <div class="krz-highlight-name">${n.name}</div>\n  <img class="krz-object-img-highlight" src="${n.img}">\n  <div class="krz-highlight-get-tip">GET!</div>\n</div>`,b.SX.style.display="block",b.SX.addEventListener("click",(function(){b.SX.style.display="none",e()})),(0,v.c)("展示物品高亮",{name:n.name||"",uid:n.uid})}))}function z(n){return new Promise((function(e){b.SX.innerHTML=`\n<div class="krz-object-highlight">\n  <div class="krz-highlight-name">${n.name}</div>\n  <img class="krz-object-img-highlight" src="${n.img}">\n  <div class="krz-item-highlight-tips">${n.description}</div>\n</div>`,b.SX.style.display="block",b.SX.addEventListener("click",(function(){b.SX.style.display="none",e()})),(0,v.c)("展示物品高亮",{name:n.name||"",uid:n.uid})}))}function y(){b.SX.style.display="none",b.SX.innerHTML=""}},41:(n,e,t)=>{t.d(e,{l9:()=>w,L0:()=>L});var i=t(906),r=t.n(i),o=t(814),s=t.n(o),l=t(486),a=t.n(l),c=t(918),d=t.n(c),h=t(102),f=t.n(h),u=t(653),g=t.n(u),m=t(243),p={};p.styleTagTransform=g(),p.setAttributes=d(),p.insert=a().bind(null,"head"),p.domAPI=s(),p.insertStyleElement=f(),r()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals;var b=t(610),v=t(700),k=t.n(v),z=t(720),y=t(497);let x={};function w(n,e,t){x[n.uid]={obj:e,func:t},(0,y.c)("添加物品到监听碰撞列表",{name:n.name,uid:n.uid})}function L(n){let e=document.createElement("div");e.className="krz-item",e.setAttribute("data-id",n.uid);let t=new Image;t.src=n.img,t.className="krz-item-img",e.appendChild(t),b.jD.appendChild(e),function(n){let e=!1,t=0,i=0,r=0,o=0;function s(s){s.preventDefault(),t=s.clientX||s.changedTouches[0].pageX,i=s.clientY||s.changedTouches[0].pageY,r=n.offsetLeft,o=n.offsetTop,e=!0,(0,y.c)("开始拖动物品",{name:"",uid:n.getAttribute("data-id")})}function l(s){if(s.preventDefault(),!e)return;n.classList.add("krz-item-drag");let l=s.clientX||s.changedTouches[0].pageX,a=(s.clientY||s.changedTouches[0].pageY)-(i-o),c=(l-(t-r))/z.s.scale,d=a/z.s.scale;n.style.left=c+"px",n.style.top=d+"px";for(let e in x){let t=x[e].obj,i=n,r=x[e].func;if(i.getAttribute("data-id")!==e)continue;let o=t.element,s=i,l=b.jD.offsetLeft+s.offsetLeft,c=o.offsetLeft,d=o.offsetLeft+o.offsetWidth,h=a,f=o.offsetTop,u=o.offsetTop+o.clientHeight,g=l+s.clientWidth>c,m=l<d,p=h+s.clientHeight>f,v=h+s.clientHeight<u;g&&m&&p&&v&&((0,y.c)("触碰到匹配的物品",{name:t.name||"",uid:t.uid}),"function"==typeof r&&r())}}function a(t){t.preventDefault(),e&&(n.classList.remove("krz-item-drag"),n.removeAttribute("style"),e=!1,(0,y.c)("停止拖动物品",{name:"",uid:n.getAttribute("data-id")}))}n.addEventListener("mousedown",s),n.addEventListener("touchstart",s),b.lw.addEventListener("mousemove",k()(l,10)),b.lw.addEventListener("touchmove",k()(l,10)),b.lw.addEventListener("mouseup",a),b.lw.addEventListener("touchend",a)}(e),n.remove(),(0,y.c)("添加物品到物品栏",{name:n.name,uid:n.uid})}},954:(n,e,t)=>{t.d(e,{Z:()=>l});var i=t(657),r=t.n(i),o=t(483),s=t.n(o)()(r());s.push([n.id,".krz-object-highlight-container {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n.krz-object-highlight {\r\n  background-color: #000000d6;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 20;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n}\r\n\r\n.krz-object-img-highlight {\r\n  max-height: 60%;\r\n  max-width: 50%;\r\n}\r\n\r\n.krz-highlight-name {\r\n  position: absolute;\r\n  color: #ffffff;\r\n  font-weight: 700;\r\n  font-size: 20px;\r\n  top: 50px;\r\n  z-index: 30;\r\n}\r\n\r\n.krz-highlight-get-tip {\r\n  position: absolute;\r\n  color: #ffffff;\r\n  font-weight: 700;\r\n  font-size: 100px;\r\n  bottom: 0;\r\n  z-index: 30;\r\n}\r\n",""]);const l=s},243:(n,e,t)=>{t.d(e,{Z:()=>l});var i=t(657),r=t.n(i),o=t(483),s=t.n(o)()(r());s.push([n.id,".krz-item-box {\r\n  position: absolute;\r\n  width: 300px;\r\n  height: 50px;\r\n  background-color: #ffffffd6;\r\n  border: #000 solid;\r\n  border-radius: 2px;\r\n  right: 10px;\r\n  top: 10px;\r\n  z-index: 10;\r\n\r\n  display: flex;\r\n  justify-content: left;\r\n}\r\n\r\n.krz-item-img {\r\n  max-height: 35px;\r\n  max-width: 50px;\r\n}\r\n\r\n.krz-item {\r\n  margin: 6px;\r\n}\r\n\r\n.krz-item-drag {\r\n  position: absolute;\r\n  z-index: 999999;\r\n}\r\n\r\n.krz-item-highlight-tips {\r\n  position: absolute;\r\n  font-weight: 700;\r\n  color: #fff;\r\n  bottom: 50px;\r\n  font-size: 1rem;\r\n}\r\n",""]);const l=s}}]);