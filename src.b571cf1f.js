parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RDr1":[function(require,module,exports) {
"use strict";function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.CheckCardNumber=void 0;var n=function(){function r(){e(this,r),this.cardNumber=document.querySelector('[name="card-number"]'),this.resultContainer=document.querySelector("h2"),this.cardTypes=[{name:"Mastercard",numberLength:[16],startNum:/[22,5][1-5]/},{name:"Visa",numberLength:[16,13],startNum:/4[0-9]/},{name:"American Express",numberLength:[15],startNum:/3[4,7]/},{name:"Discover",numberLength:[16],startNum:/60/},{name:"JCB",numberLength:[16],startNum:/35/},{name:"Diners Club",numberLength:[14],startNum:/30/}]}return t(r,[{key:"validator",value:function(){var e=/^\d+$/.test(this.cardNumber.value);return this.cardNumber.value.length<13?alert("Wprowadzony numer jest za krótki"):this.cardNumber.value.length>16?alert("Wprowadzony numer jest za długi"):e?this.assignCard():alert("Proszę wprowadzić prawidłowe dane")}},{key:"assignCard",value:function(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this,t=r.cardNumber,n=r.cardTypes,a=!1;if(n.map(function(r){if(r.startNum.test(t.value.substring(0,2))&&r.numberLength.includes(t.value.length))return a=!0,e.checkNumber(name=r.name)}),!1===a)return alert("Pdany numer nie jest zgodny z bazą dostawców")}},{key:"checkNumber",value:function(e){var r="",t=[],n=0,a=0;return this.cardNumber.value.split("").reverse().map(function(e,n){return n%2!=0?r+=2*e:t.push(e)}),r.split("").map(function(e){return n+=Number(e)}),t.map(function(e){return a+=Number(e)}),this.resultContainer.textContent=(n+a)%10==0?"Wprowadzony numer karty jest poprawny, wydał ją: ".concat(e):"Wprowadzony numer karty jest niepoprawny!"}},{key:"showInfo",value:function(e){this.resultContainer.textContent="",e.preventDefault(),this.validator(),this.cardNumber.value=""}}]),r}();exports.CheckCardNumber=n;
},{}],"LDUH":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./card");require("./styles/main.scss");var r=document.querySelector("form"),s=new e.CheckCardNumber;r.addEventListener("submit",function(e){return s.showInfo(e)});
},{"./card":"RDr1","./styles/main.scss":"LDUH"}]},{},["Focm"], null)
//# sourceMappingURL=/simonst01.github.io/index.html/src.b571cf1f.js.map