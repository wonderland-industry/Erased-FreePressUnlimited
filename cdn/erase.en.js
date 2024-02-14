(()=>{"use strict";var e={798:(e,t,n)=>{n.r(t)}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n(798);var e=function(){function e(e){var t=e.context,n=void 0===t?document.body:t,a=e.selector,r=void 0===a?"erase":a,o=e.ignore,i=void 0===o?"erase-ignore":o,c=e.initialState,s=void 0!==c&&c;this.value=!1,this.context=n,this.fillElements(r),this.ignore(i),this.include(r),this.ligeratures=!!s}return Object.defineProperty(e.prototype,"hasElements",{get:function(){return this.elements.length>0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ligeratures",{get:function(){return this.value},set:function(e){this.value=e,this.update()},enumerable:!1,configurable:!0}),e.prototype.ignore=function(e){for(var t=this.context.querySelectorAll("[data-".concat(e,"]")),n=Array.from(t),a=0,r=null,o=n.length;a<o;a++)r=window.getComputedStyle(n[a]),n[a].style.fontFamily=r.getPropertyValue("font-family")},e.prototype.include=function(e){for(var t=this.context.querySelectorAll("[data-".concat(e,"]")),n=Array.from(t),a=0,r=n.length;a<r;a++)n[a].style.fontFamily="The Erased",n[a].style.fontFeatureSettings='"liga" off'},e.prototype.fillElements=function(e){var t=this.context.querySelectorAll("[data-".concat(e,"]")),n=Array.from(t);this.elements=n},e.prototype.update=function(){for(var e=this.ligeratures?"on":"off",t=0,n=this.elements.length;t<n;t++)this.elements[t].style.fontFeatureSettings='"liga" '.concat(e)},e}(),t=function(){function e(e){var t=e.element,n=e.template,a=e.selector,r=void 0===a?"select":a,o=e.initialState,i=void 0!==o&&o;this.element=t,this.selector=r,this.template=n,this.initialState=i,this.setLigeratures(i)}return e.prototype.render=function(e){var t,n,a=this;this.element.innerHTML=this.template(e,{selector:this.selector,initialState:this.initialState}),this.fillElements(),null===(n=null===(t=this.elements)||void 0===t?void 0:t.handle)||void 0===n||n.addEventListener("click",(function(){a.element.hasAttribute("data-closed")?a.element.removeAttribute("data-closed"):a.element.setAttribute("data-closed","")}))},e.prototype.destroy=function(){this.element.innerHTML="",this.elements=[]},e.prototype.setLigeratures=function(e){e?this.element.setAttribute("data-ligeratures",""):this.element.removeAttribute("data-ligeratures")},e.prototype.fillElements=function(){var e=this.element.querySelectorAll("[data-select]"),t=Array.from(e);this.elements=t.reduce((function(e,t){return void 0!==t.dataset.select&&(e[t.dataset.select]=t),e}),{})},e}();function a(e){return e.replace(/"/g,"&quot;")}const r=function(e,t){return'\n    <div class="'.concat("CZvlMiTaJPn2Fw1rO3aC",'" data-').concat(t.selector,'="container">\n        <button \n            class="').concat("yeG4wFjAWWo9Np29lWw1",'" \n            data-').concat(t.selector,'="handle"\n        ></button>\n        <div class="').concat("K8QPywpjZGfl_hZDQfI4",'">\n            <h3 class="').concat("qKh1BwiniIjduGl3yCjU",'">\n                <span>').concat(e.heading,'</span>\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.82 52.08">\n                    <path \n                        fill="#282828"\n                        d="m24.07,49.42l-1.65-3.15h-1.83v5.72h1.6v-3.64l1.87,3.74,1.86-3.74v3.64h1.61v-5.72h-1.84l-1.63,3.15ZM47.4,11.02v-2.48h-5.27v-1.8h5.27v-2.48h-5.27v-1.79h5.27V0h-8.37v11.02h8.37Zm-2.64,24.95c-.73-.19-1.44-.34-1.95-.54-.5-.2-.73-.41-.74-.77.01-.29.19-.47.5-.64.34-.16.72-.24,1.1-.23.76.03,1.5.27,2.12.7l2.03-1.94c-1.19-.87-2.62-1.35-4.1-1.37-1.27,0-2.49.3-3.43.92-.94.62-1.58,1.55-1.57,2.75-.01,1.92,1.63,2.61,3.1,3.02.74.21,1.47.37,1.97.59.51.22.77.44.77.8,0,.26-.17.46-.48.62-.4.18-.84.27-1.28.27-.94,0-1.75-.15-2.56-.87l-2.04,1.91c1.4,1.12,2.91,1.55,4.55,1.55h0c1.32,0,2.57-.29,3.5-.9.48-.3.88-.71,1.15-1.21.27-.49.41-1.05.4-1.61,0-2-1.6-2.71-3.04-3.09m-7.12-5.97v-2.48h-5.27v-1.79h5.26v-2.48h-5.26v-1.79h5.26v-2.48h-8.35v11.03h8.36Zm0-12.66v-2.48h-5.27v-1.79h5.26v-2.49h-5.26v-1.78h5.26v-2.48h-8.35v11.02h8.36Zm3.52,34.65v-1.28h-2.74v-.93h2.73v-1.28h-2.73v-.93h2.73v-1.28h-4.35v5.71h4.36Zm-13.28-15.7v-2.48h-5.27v-1.79h5.27v-2.48h-5.27v-1.79h5.27v-2.48h-8.37v11.02h8.37Zm19.52-12.63v-2.49h-5.27v-1.79h5.27v-2.48h-5.27v-1.79h5.27v-2.48h-8.37v11.02h8.37Zm-19.52,0v-2.49h-5.27v-1.79h5.27v-2.48h-5.27v-1.79h5.27v-2.48h-8.37v11.02h8.37Zm-15.03,12.33h1.98c.63,0,.95-.43.95-.95s-.34-.98-.95-.98h-1.98v1.93Zm5.94,6.62h-3.35l-1.3-3.23c-.14-.35-.23-.58-.44-.77-.25-.22-.41-.28-.85-.28v4.27h-3.1v-11.01h5.2c2.37,0,3.75,1.63,3.75,3.44.01.67-.18,1.33-.55,1.89-.37.56-.9,1-1.53,1.25.17.18.31.39.41.61l1.76,3.83Zm-5.94-19.24h1.98c.63,0,.95-.43.95-.96s-.34-.97-.95-.97h-1.98v1.93Zm5.94,6.61h-3.35l-1.3-3.24c-.14-.35-.23-.58-.44-.77-.25-.22-.41-.27-.85-.27v4.28h-3.1v-11.02h5.2c2.37,0,3.75,1.63,3.75,3.44.02.67-.18,1.32-.55,1.88-.37.56-.9.99-1.53,1.25.17.18.31.4.41.62l1.76,3.83Zm16.21,6c-.73-.19-1.44-.34-1.94-.54-.5-.2-.73-.41-.74-.77,0-.29.18-.47.5-.64.34-.16.72-.24,1.1-.23.76.02,1.5.27,2.12.7l2.04-1.94c-1.19-.87-2.62-1.35-4.1-1.37-1.27,0-2.5.3-3.44.92-.94.62-1.56,1.55-1.55,2.75,0,1.92,1.64,2.61,3.09,3.02.74.21,1.47.37,1.98.59.51.22.76.44.76.8,0,.26-.16.46-.48.62-.4.18-.84.27-1.28.27-.95,0-1.74-.15-2.55-.87l-2.04,1.91c1.39,1.12,2.9,1.55,4.55,1.55,1.32,0,2.56-.29,3.5-.9.48-.3.88-.71,1.15-1.21.27-.49.41-1.05.4-1.61,0-2-1.61-2.71-3.05-3.09M3.09,29.97v-4.28h5.28v-2.48H3.09v-1.79h5.28v-2.48H0v11.03h3.09Zm1.99,4.08c.61,0,.95.45.95.98s-.32.95-.95.95h-1.99v-1.93h1.99Zm.12,4.41c2.4,0,3.74-1.63,3.74-3.45s-1.37-3.44-3.74-3.44H0v11.02h3.09v-4.13h2.1Zm40.53,11.41c0,.45-.31.82-.95.82h-.83v-3.14h.83c.63,0,.95.37.95.83v1.48Zm-.95,2.11c1.45,0,2.6-.91,2.6-2.18v-1.36c0-1.26-1.15-2.18-2.6-2.18h-2.47v5.72h2.47Zm-29.89-1.29v-4.43h-1.6v5.72h3.61v-1.29h-2.01Zm21.28-3.14v-1.29h-4.86v1.29h1.62v4.43h1.61v-4.43h1.63Zm-18.6,4.43h1.6v-5.72h-1.6v5.72Zm11.47,0h1.61v-5.72h-1.61v5.72Zm-17.2,0v-5.72h-1.61v3.76l-2.22-3.76h-1.8v5.72h1.61v-3.64l2.2,3.64h1.81Zm-9.29.09c-1.73,0-2.54-1.01-2.54-2.25v-3.55h1.6v3.63c0,.12.02.24.07.35.05.11.12.21.21.3.09.08.19.15.31.19.12.04.24.06.36.05.12,0,.25-.01.36-.05.12-.04.22-.11.31-.19s.16-.18.21-.3c.05-.11.07-.23.07-.35v-3.63h1.61v3.55c0,1.25-.83,2.25-2.57,2.25" \n                    />\n                </svg>\n            </h3>\n            <div class="').concat("R4wKAm0Zg0IbcFO98Fre",'">\n                <p>').concat(e.paragraph,'</p>\n                <div class="').concat("jvAWQ0DYy0EgT73Cfg0_",'">\n                    <div>').concat(e.eventDate,"</div>\n                    <div>").concat(null==e?void 0:e.eventName,'</div>\n                </div>\n            </div>\n        </div>\n        <div class="').concat("I4B3PbO2hNpzqAtKNWDI",'">\n            <label class="').concat("JpzWwGWKAfCIIgrq3LWm",'">\n                <span \n                    class="').concat("mi9S80jGvy48ZK51JtPZ",'"\n                    data-value="').concat(a(e.switch),'"\n                    data-value-alt="').concat(a("".concat(e.eventDate," • ").concat(null==e?void 0:e.eventName)),'"\n                ></span>\n                <input \n                    type="checkbox" \n                    data-').concat(t.selector,'="checkbox"\n                    ').concat(t.initialState?"checked":"",'\n                >\n                <span class="').concat("oVpVcLJ7pBuwCtSkKOCM",'">\n                    <span class="').concat("WGUepD7Rh_iGzfbOerFC",'"></span>\n                </span>\n            </label>\n        </div>\n    </div>\n')},o={heading:"Press freedom is getting erased",paragraph:'Every journalist imprisoned is a lost perspective on the truth. To symbolise censorship, we are erasing one word for each imprisoned journalist worldwide. <a href="https://erased.freepressunlimited.org/" rel="noopener noreferrer" target="_blank">Learn more</a>',switch:"View the loss of truth on this page",eventDate:"3 May",eventName:"World Freedom Press Day"};var i=new e({context:document.body,selector:"erase",ignore:"erase-ignore"});if(i.hasElements){var c=document.createElement("div");c.setAttribute("data-erase-ignore",""),document.body.appendChild(c);var s=new t({element:c,template:r});s.render(o),s.elements.checkbox.addEventListener("change",(function(){i.ligeratures=s.elements.checkbox.checked,s.setLigeratures(s.elements.checkbox.checked)}))}})()})();