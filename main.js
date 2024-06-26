(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>u});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),c=t(417),s=t.n(c),l=new URL(t(910),t.b),p=a()(o()),d=s()(l);p.push([e.id,`*, *::before, *::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\ninput, button, textarea, select {\n  font: inherit;\n}\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n#root, #__next {\n  isolation: isolate;\n}\n\nul, ol {\n  padding-inline-start: 0;\n  list-style-type: none;\n}\n\n\nhtml {\n  height: 100%;\n  background-color: whitesmoke;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  height: 22vw;\n  background-image: url(${d});\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n\n}\n\nnav {\n  margin: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 30px\n\n}\n\n.cafe-name {\n  color: whitesmoke;\n  font-size: 170px;\n}\n\n.nav-buttons {\n  display: flex;\n  gap: 20px;\n\n}\n\n\nbutton {\n  width: 150px;\n  height: 70px;\n  background-color: #8b4513;\n  color: white;\n  border-radius: 45%;\n  border: none;\n  font-size: 20px;\n}\n\nbutton:hover {\n  background-color: white;\n  color: #8b4513;\n\n}\n\n.headline {\n  font-size: 2.5vw;\n  font-weight: bolder;\n  color: black;\n\n\n  margin: 50px;\n\n}\n\n.best-seller-container {\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n}\n\n.best-seller-title {\n  font-size: 50px;\n  display: flex;\n  justify-content: center;\n}\n\nimg { \n  width: 200px;\n  height: 200px;\n}\n\n`,""]);const u=p},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var p=t(i[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}i=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},910:(e,n,t)=>{e.exports=t.p+"img/hero-img.webp"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;class r{constructor(e,n,t){this.name=e,this.price=n,this.image=t}}const o=new r("Espresso","P100","/src/img/espresso.webp"),i=new r("Latte","P140","/src/img/latte.webp"),a=new r("Americano","P120","/src/img/americano.webp");var c=t(72),s=t.n(c),l=t(825),p=t.n(l),d=t(659),u=t.n(d),f=t(56),h=t.n(f),m=t(540),v=t.n(m),g=t(113),b=t.n(g),y=t(208),x={};x.styleTagTransform=b(),x.setAttributes=h(),x.insert=u().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=v(),s()(y.A,x),y.A&&y.A.locals&&y.A.locals,function(){const e=document.querySelector("#content"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("p");r.innerText="Best Sellers",t.classList.add("best-seller-title"),t.appendChild(r);const c=document.createElement("p");c.innerText="In every sip, experience bliss at Bill's Cafe",c.classList.add("headline"),n.appendChild(c);const s=function(){const e=document.createElement("div");return e.classList.add("best-seller-container"),[o,i,a].forEach((n=>{const t=function(e){const n=document.createElement("div");n.classList.add("coffee-card");const t=document.createElement("h3");t.innerText=e.name;const r=document.createElement("p");r.innerText=e.price;const o=document.createElement("img");return o.src=e.image,n.appendChild(t),n.appendChild(r),n.appendChild(o),n}(n);e.appendChild(t)})),e}();n.appendChild(t),e.appendChild(n),e.appendChild(s)}()})();