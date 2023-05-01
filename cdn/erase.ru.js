(()=>{"use strict";var e={439:(e,t,n)=>{n.r(t)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var h=t[r]={exports:{}};return e[r](h,h.exports,n),h.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n(439);var e=function(){function e(e){var t=e.context,n=void 0===t?document.body:t,r=e.selector,o=void 0===r?"erase":r,h=e.ignore,v=void 0===h?"erase-ignore":h;this.context=n,this.fillElements(o),this.ignore(v),this.include(o)}return Object.defineProperty(e.prototype,"ligeratures",{get:function(){return this.value},set:function(e){this.value=e,this.update()},enumerable:!1,configurable:!0}),e.prototype.ignore=function(e){for(var t=this.context.querySelectorAll("[data-".concat(e,"]")),n=Array.from(t),r=0,o=null,h=n.length;r<h;r++)o=window.getComputedStyle(n[r]),n[r].style.fontFamily=o.getPropertyValue("font-family")},e.prototype.include=function(e){for(var t=this.context.querySelectorAll("[data-".concat(e,"]")),n=Array.from(t),r=0,o=n.length;r<o;r++)n[r].style.fontFamily="The Erased",n[r].style.fontFeatureSettings='"liga" off'},e.prototype.fillElements=function(e){var t=this.context.querySelectorAll("[data-".concat(e,"]")),n=Array.from(t);this.elements=n},e.prototype.update=function(){for(var e=this.ligeratures?"on":"off",t=0,n=this.elements.length;t<n;t++)this.elements[t].style.fontFeatureSettings='"liga" '.concat(e)},e}(),t=function(){function e(e){var t=e.element,n=e.template,r=e.selector,o=void 0===r?"select":r;this.element=t,this.selector=o,this.template=n}return e.prototype.render=function(e){this.element.innerHTML=this.template(e,{selector:this.selector}),this.fillElements()},e.prototype.destroy=function(){this.element.innerHTML="",this.elements=[]},e.prototype.fillElements=function(){var e=this.element.querySelectorAll("[data-select]"),t=Array.from(e);this.elements=t.reduce((function(e,t){return void 0!==t.dataset.select&&(e[t.dataset.select]=t),e}),{})},e}();var r=document.createElement("div");document.body.appendChild(r);var o=new t({element:r,template:function(e,t){return'\n    <div class="'.concat("CZvlMiTaJPn2Fw1rO3aC",'" data-').concat(t.selector,'="container">\n        <div class="').concat("J4zxpXQrLtFa4AMljitA",'">\n            <h3>\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.82 52.08">\n                    <path d="m24.07,49.42l-1.65-3.15h-1.83v5.72h1.6v-3.64l1.87,3.74,1.86-3.74v3.64h1.61v-5.72h-1.84l-1.63,3.15ZM47.4,11.02v-2.48h-5.27v-1.8h5.27v-2.48h-5.27v-1.79h5.27V0h-8.37v11.02h8.37Zm-2.64,24.95c-.73-.19-1.44-.34-1.95-.54-.5-.2-.73-.41-.74-.77.01-.29.19-.47.5-.64.34-.16.72-.24,1.1-.23.76.03,1.5.27,2.12.7l2.03-1.94c-1.19-.87-2.62-1.35-4.1-1.37-1.27,0-2.49.3-3.43.92-.94.62-1.58,1.55-1.57,2.75-.01,1.92,1.63,2.61,3.1,3.02.74.21,1.47.37,1.97.59.51.22.77.44.77.8,0,.26-.17.46-.48.62-.4.18-.84.27-1.28.27-.94,0-1.75-.15-2.56-.87l-2.04,1.91c1.4,1.12,2.91,1.55,4.55,1.55h0c1.32,0,2.57-.29,3.5-.9.48-.3.88-.71,1.15-1.21.27-.49.41-1.05.4-1.61,0-2-1.6-2.71-3.04-3.09m-7.12-5.97v-2.48h-5.27v-1.79h5.26v-2.48h-5.26v-1.79h5.26v-2.48h-8.35v11.03h8.36Zm0-12.66v-2.48h-5.27v-1.79h5.26v-2.49h-5.26v-1.78h5.26v-2.48h-8.35v11.02h8.36Zm3.52,34.65v-1.28h-2.74v-.93h2.73v-1.28h-2.73v-.93h2.73v-1.28h-4.35v5.71h4.36Zm-13.28-15.7v-2.48h-5.27v-1.79h5.27v-2.48h-5.27v-1.79h5.27v-2.48h-8.37v11.02h8.37Zm19.52-12.63v-2.49h-5.27v-1.79h5.27v-2.48h-5.27v-1.79h5.27v-2.48h-8.37v11.02h8.37Zm-19.52,0v-2.49h-5.27v-1.79h5.27v-2.48h-5.27v-1.79h5.27v-2.48h-8.37v11.02h8.37Zm-15.03,12.33h1.98c.63,0,.95-.43.95-.95s-.34-.98-.95-.98h-1.98v1.93Zm5.94,6.62h-3.35l-1.3-3.23c-.14-.35-.23-.58-.44-.77-.25-.22-.41-.28-.85-.28v4.27h-3.1v-11.01h5.2c2.37,0,3.75,1.63,3.75,3.44.01.67-.18,1.33-.55,1.89-.37.56-.9,1-1.53,1.25.17.18.31.39.41.61l1.76,3.83Zm-5.94-19.24h1.98c.63,0,.95-.43.95-.96s-.34-.97-.95-.97h-1.98v1.93Zm5.94,6.61h-3.35l-1.3-3.24c-.14-.35-.23-.58-.44-.77-.25-.22-.41-.27-.85-.27v4.28h-3.1v-11.02h5.2c2.37,0,3.75,1.63,3.75,3.44.02.67-.18,1.32-.55,1.88-.37.56-.9.99-1.53,1.25.17.18.31.4.41.62l1.76,3.83Zm16.21,6c-.73-.19-1.44-.34-1.94-.54-.5-.2-.73-.41-.74-.77,0-.29.18-.47.5-.64.34-.16.72-.24,1.1-.23.76.02,1.5.27,2.12.7l2.04-1.94c-1.19-.87-2.62-1.35-4.1-1.37-1.27,0-2.5.3-3.44.92-.94.62-1.56,1.55-1.55,2.75,0,1.92,1.64,2.61,3.09,3.02.74.21,1.47.37,1.98.59.51.22.76.44.76.8,0,.26-.16.46-.48.62-.4.18-.84.27-1.28.27-.95,0-1.74-.15-2.55-.87l-2.04,1.91c1.39,1.12,2.9,1.55,4.55,1.55,1.32,0,2.56-.29,3.5-.9.48-.3.88-.71,1.15-1.21.27-.49.41-1.05.4-1.61,0-2-1.61-2.71-3.05-3.09M3.09,29.97v-4.28h5.28v-2.48H3.09v-1.79h5.28v-2.48H0v11.03h3.09Zm1.99,4.08c.61,0,.95.45.95.98s-.32.95-.95.95h-1.99v-1.93h1.99Zm.12,4.41c2.4,0,3.74-1.63,3.74-3.45s-1.37-3.44-3.74-3.44H0v11.02h3.09v-4.13h2.1Zm40.53,11.41c0,.45-.31.82-.95.82h-.83v-3.14h.83c.63,0,.95.37.95.83v1.48Zm-.95,2.11c1.45,0,2.6-.91,2.6-2.18v-1.36c0-1.26-1.15-2.18-2.6-2.18h-2.47v5.72h2.47Zm-29.89-1.29v-4.43h-1.6v5.72h3.61v-1.29h-2.01Zm21.28-3.14v-1.29h-4.86v1.29h1.62v4.43h1.61v-4.43h1.63Zm-18.6,4.43h1.6v-5.72h-1.6v5.72Zm11.47,0h1.61v-5.72h-1.61v5.72Zm-17.2,0v-5.72h-1.61v3.76l-2.22-3.76h-1.8v5.72h1.61v-3.64l2.2,3.64h1.81Zm-9.29.09c-1.73,0-2.54-1.01-2.54-2.25v-3.55h1.6v3.63c0,.12.02.24.07.35.05.11.12.21.21.3.09.08.19.15.31.19.12.04.24.06.36.05.12,0,.25-.01.36-.05.12-.04.22-.11.31-.19s.16-.18.21-.3c.05-.11.07-.23.07-.35v-3.63h1.61v3.55c0,1.25-.83,2.25-2.57,2.25" />\n                </svg>\n                ').concat(e.heading,"\n            </h3>\n\n            <label>\n                ").concat(e.button,'\n                <input type="checkbox" data-').concat(t.selector,'="checkbox" checked>\n                <span></span>\n            </label>\n        </div>\n        <p>').concat(e.paragraph,"</p>\n    </div>\n")}});o.render({heading:"the Erased font",paragraph:'<em>World Press Freedom Day.</em> Erasing a word for every imprisoned journalist. <a href="https://erased.freepressunlimited.org/" rel="noopener noreferrer" target="_blank">Learn more</a>',button:"Erase"});var h=new e({context:document.body,selector:"erase",ignore:"erase-ignore"});h.ligeratures=o.elements.checkbox.checked,o.elements.checkbox.addEventListener("change",(function(){h.ligeratures=o.elements.checkbox.checked}))})()})();