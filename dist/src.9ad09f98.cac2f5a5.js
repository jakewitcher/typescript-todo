parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"XR2K":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,n=arguments[3];function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}parcelRequire=function(n,t,o,a){var i="function"==typeof parcelRequire&&parcelRequire,l="function"==typeof require&&require;function u(e,r){if(!t[e]){if(!n[e]){var o="function"==typeof parcelRequire&&parcelRequire;if(!r&&o)return o(e,!0);if(i)return i(e,!0);if(l&&"string"==typeof e)return l(e);var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}s.resolve=function(r){return n[e][1][r]||r},s.cache={};var c=t[e]=new u.Module(e);n[e][0].call(c.exports,s,c,c.exports,this)}return t[e].exports;function s(e){return u(s.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=n,u.cache=t,u.parent=i,u.register=function(e,r){n[e]=[function(e,n){n.exports=r},{}]};for(var c=0;c<o.length;c++)u(o[c]);if(o.length){var s=u(o[o.length-1]);"object"===("undefined"==typeof exports?"undefined":r(exports))&&"undefined"!=typeof module?module.exports=s:"function"==typeof e&&e.amd&&e(function(){return s})}return u}({"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(e,n,r){var t=null;function o(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^\/]+$/,"$1")+"/"}r.getBundleURL=function(){return t||(t=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return o(e[0])}return"/"}()),t},r.getBaseURL=o},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(e,n,r){var t=e("./bundle-url");function o(e){var n=e.cloneNode();n.onload=function(){e.remove()},n.href=e.href.split("?")[0]+"?"+Date.now(),e.parentNode.insertBefore(n,e.nextSibling)}var a=null;n.exports=function(){a||(a=setTimeout(function(){for(var e=document.querySelectorAll('link[rel="stylesheet"]'),n=0;n<e.length;n++)t.getBaseURL(e[n].href)===t.getBundleURL()&&o(e[n]);a=null},50))}},{"./bundle-url":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"index.css":[function(e,n,r){var t=e("_css_loader");n.hot.dispose(t),n.hot.accept(t)},{_css_loader:"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(e,n,r){var t=arguments[3],o="__parcel__error__overlay__",a=n.bundle.Module;n.bundle.Module=function(e){a.call(this,e),this.hot={data:n.bundle.hotData,_acceptCallbacks:[],_disposeCallbacks:[],accept:function(e){this._acceptCallbacks.push(e||function(){})},dispose:function(e){this._disposeCallbacks.push(e)}},n.bundle.hotData=null};var i=n.bundle.parent;if(!(i&&i.isParcelRequire||"undefined"==typeof WebSocket)){var l=location.hostname,u="https:"===location.protocol?"wss":"ws",c=new WebSocket(u+"://"+l+":51410/");c.onmessage=function(e){var n=JSON.parse(e.data);if("update"===n.type&&(console.clear(),n.assets.forEach(function(e){!function e(n,r){var t=n.modules;if(!t)return;if(t[r.id]||!n.parent){var o=new Function("require","module","exports",r.generated.js);r.isNew=!t[r.id],t[r.id]=[o,r.deps]}else n.parent&&e(n.parent,r)}(t.parcelRequire,e)}),n.assets.forEach(function(e){e.isNew||function e(n,r){var o=n.modules;if(!o)return;if(!o[r]&&n.parent)return e(n.parent,r);var a=n.cache[r];n.hotData={};a&&(a.hot.data=n.hotData);a&&a.hot&&a.hot._disposeCallbacks.length&&a.hot._disposeCallbacks.forEach(function(e){e(n.hotData)});delete n.cache[r];n(r);a=n.cache[r];if(a&&a.hot&&a.hot._acceptCallbacks.length)return a.hot._acceptCallbacks.forEach(function(e){e()}),!0;return function e(n,r){var t=n.modules;if(!t)return[];var o=[];var a,i,l;for(a in t)for(i in t[a][1])((l=t[a][1][i])===r||Array.isArray(l)&&l[l.length-1]===r)&&o.push(a);n.parent&&(o=o.concat(e(n.parent,r)));return o}(t.parcelRequire,r).some(function(n){return e(t.parcelRequire,n)})}(t.parcelRequire,e.id)})),"reload"===n.type&&(c.close(),c.onclose=function(){location.reload()}),"error-resolved"===n.type&&(console.log("[parcel] ✨ Error resolved"),s()),"error"===n.type){console.error("[parcel] 🚨  "+n.error.message+"\n"+n.error.stack),s();var r=function(e){var n=document.createElement("div");n.id=o;var r=document.createElement("div"),t=document.createElement("pre");return r.innerText=e.error.message,t.innerText=e.error.stack,n.innerHTML='<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;"><span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span><span style="top: 2px; margin-left: 5px; position: relative;">🚨</span><div style="font-size: 18px; font-weight: bold; margin-top: 20px;">'+r.innerHTML+"</div><pre>"+t.innerHTML+"</pre></div>",n}(n);document.body.appendChild(r)}}}function s(){var e=document.getElementById(o);e&&e.remove()}},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"]);
},{}]},{},["XR2K"], null)
//# sourceMappingURL=/src.9ad09f98.cac2f5a5.map