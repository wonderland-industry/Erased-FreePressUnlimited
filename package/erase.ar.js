!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Erase",[],t):"object"==typeof exports?exports.Erase=t():e.Erase=t()}(this,(()=>(()=>{"use strict";var e={321:(e,t,o)=>{o.r(t)}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{o.r(r),o.d(r,{Erase:()=>e,default:()=>t}),o(321);var e=function(){function e(e){var t=e.context,o=void 0===t?document.body:t,r=e.selector,n=void 0===r?"erase":r,i=e.ignore,l=void 0===i?"erase-ignore":i;this.context=o,this.fillElements(n),this.ignore(l),this.include(n)}return Object.defineProperty(e.prototype,"hasElements",{get:function(){return this.elements.length>0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ligeratures",{get:function(){return this.value},set:function(e){this.value=e,this.update()},enumerable:!1,configurable:!0}),e.prototype.ignore=function(e){for(var t=this.context.querySelectorAll("[data-".concat(e,"]")),o=Array.from(t),r=0,n=null,i=o.length;r<i;r++)n=window.getComputedStyle(o[r]),o[r].style.fontFamily=n.getPropertyValue("font-family")},e.prototype.include=function(e){for(var t=this.context.querySelectorAll("[data-".concat(e,"]")),o=Array.from(t),r=0,n=o.length;r<n;r++)o[r].style.fontFamily="The Erased",o[r].style.fontFeatureSettings='"liga" off'},e.prototype.fillElements=function(e){var t=this.context.querySelectorAll("[data-".concat(e,"]")),o=Array.from(t);this.elements=o},e.prototype.update=function(){for(var e=this.ligeratures?"on":"off",t=0,o=this.elements.length;t<o;t++)this.elements[t].style.fontFeatureSettings='"liga" '.concat(e)},e}();const t=e})(),r})()));