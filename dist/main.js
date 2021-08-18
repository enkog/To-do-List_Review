(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  background: #e5e7e9;\n  color: rgb(119, 113, 113);\n}\n\ni {\n  font-size: 15px;\n  color: rgb(119, 113, 113);\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.main-todo-container {\n  background: #fff;\n  border: 1px solid #ccc;\n  width: 500px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\n  border-radius: 5px;\n}\n\n.todo-header,\n.add-todo {\n  border-bottom: 1px solid #ccc;\n  color: #222;\n}\n\n.add-todo-input {\n  border: none;\n  outline: none;\n  border-color: transparent;\n  font-size: 20px;\n  font-style: italic;\n}\n\n.todo-footer {\n  text-align: center;\n  background: #e5e7e9;\n}\n\n.list-item:not(:last-child) {\n  border-bottom: 1px solid #ccc;\n}\n\n.list-item label {\n  padding-left: 15px;\n  color: #222;\n}\n\n.fa-ellipsis-v {\n  float: right;\n  cursor: pointer;\n}\n",""]);const a=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(n[p].references++,n[p].updater(f)):n.push({identifier:u,updater:r(f,o),references:1}),i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o=t.css,r=t.media,a=t.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(426),m={};function h(e){const{li:n,arr:t,actions:o}=e,r=t.find((e=>e.description===n.textContent));r.completed=!r.completed,o.update(r)}m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;class v{constructor(e,n){this.description=e,this.completed=!1,this.index=n}}const g=new class{constructor(){this.localStorage=localStorage}add(e){this.localStorage.setItem("Todos",JSON.stringify(e))}update(e){const n=this.get(),t=n.findIndex((n=>n.description===e.description));n.splice(t,1,e),this.add(n)}get(){let e=JSON.parse(this.localStorage.getItem("Todos"));return null===e&&(e=[]),e}},b=new class{constructor(e){this.actions=e}getTasks(){return this.actions.get()}addTask(e){const n=this.getTasks();n.push(e),this.actions.add(n)}}(g),x=g.get();((e,n)=>{const t=document.querySelector(".todo-list"),o=document.createElement("ul");t.appendChild(o),e.forEach((t=>{const r=document.createElement("li");r.className="list-item p-3";const a=document.createElement("input");a.type="checkbox",a.checked=t.completed;const i=document.createElement("label");i.textContent=t.description;const s=document.createElement("i");s.className="fas fa-ellipsis-v";const c={li:r,arr:e,actions:n};a.addEventListener("change",h.bind(null,c)),r.appendChild(a),r.appendChild(i),r.appendChild(s),o.appendChild(r)}))})(x,g);const y=document.querySelector(".fa-level-down-alt"),S=document.querySelector(".add-todo-input");y.addEventListener("click",(()=>{const e=S.value,n=x.length+1;console.log(e,n);const t=new v(e,n);e.length>0&&(b.addTask(t,g),window.location.reload())}))})()})();