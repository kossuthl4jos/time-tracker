!function(e){function t(t){for(var r,o,i=t[0],a=t[1],s=t[2],c=0,l=[];c<i.length;c++)o=i[c],k[o]&&l.push(k[o][0]),k[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(A&&A(t);l.length;)l.shift()();return E.push.apply(E,s||[]),n()}function n(){for(var e,t=0;t<E.length;t++){for(var n=E[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==k[i]&&(r=!1)}r&&(E.splice(t--,1),e=H(H.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(v[n]=t[n]);0==--y&&0===g&&j()}(e,t),r&&r(e,t)};var o,i=!0,a="fb47160c765038e70842",s=1e4,c={},l=[],u=[];var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var h,v,m,y=0,g=0,b={},w={},_={};function O(e){return+e+""===e?+e:e}function x(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return i=e,f("check"),(t=s,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=H.p+""+a+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return f("idle"),null;w={},b={},_=e.c,m=e.h,f("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in v={},k)C(n);return"prepare"===p&&0===g&&0===y&&j(),t});var t}function C(e){_[e]?(w[e]=!0,y++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=H.p+""+e+"."+a+".hot-update.js",t.appendChild(n)}(e)):b[e]=!0}function j(){f("ready");var e=h;if(h=null,e)if(i)Promise.resolve().then(function(){return P(i)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&t.push(O(n));e.resolve(t)}}function P(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,o,i,s;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),a=o.id,s=o.chain;if((i=D[a])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:a};if(i.hot._main)return{type:"unaccepted",chain:s,moduleId:a};for(var c=0;c<i.parents.length;c++){var l=i.parents[c],u=D[l];if(u){if(u.hot._declinedDependencies[a])return{type:"declined",chain:s.concat([l]),moduleId:a,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[a]?(n[l]||(n[l]=[]),d(n[l],[a])):(delete n[l],t.push(l),r.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},y=[],g={},b=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var x;s=O(w);var C=!1,j=!1,P=!1,E="";switch((x=v[w]?u(s):{type:"disposed",moduleId:w}).chain&&(E="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":t.onDeclined&&t.onDeclined(x),t.ignoreDeclined||(C=new Error("Aborted because of self decline: "+x.moduleId+E));break;case"declined":t.onDeclined&&t.onDeclined(x),t.ignoreDeclined||(C=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+E));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(x),t.ignoreUnaccepted||(C=new Error("Aborted because "+s+" is not accepted"+E));break;case"accepted":t.onAccepted&&t.onAccepted(x),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(x),P=!0;break;default:throw new Error("Unexception type "+x.type)}if(C)return f("abort"),Promise.reject(C);if(j)for(s in g[s]=v[s],d(y,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,s)&&(h[s]||(h[s]=[]),d(h[s],x.outdatedDependencies[s]));P&&(d(y,[x.moduleId]),g[s]=b)}var M,I=[];for(r=0;r<y.length;r++)s=y[r],D[s]&&D[s].hot._selfAccepted&&I.push({module:s,errorHandler:D[s].hot._selfAccepted});f("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete k[e]}(e)});for(var $,A,S=y.slice();S.length>0;)if(s=S.pop(),i=D[s]){var R={},T=i.hot._disposeHandlers;for(o=0;o<T.length;o++)(n=T[o])(R);for(c[s]=R,i.hot.active=!1,delete D[s],delete h[s],o=0;o<i.children.length;o++){var J=D[i.children[o]];J&&((M=J.parents.indexOf(s))>=0&&J.parents.splice(M,1))}}for(s in h)if(Object.prototype.hasOwnProperty.call(h,s)&&(i=D[s]))for(A=h[s],o=0;o<A.length;o++)$=A[o],(M=i.children.indexOf($))>=0&&i.children.splice(M,1);for(s in f("apply"),a=m,g)Object.prototype.hasOwnProperty.call(g,s)&&(e[s]=g[s]);var U=null;for(s in h)if(Object.prototype.hasOwnProperty.call(h,s)&&(i=D[s])){A=h[s];var q=[];for(r=0;r<A.length;r++)if($=A[r],n=i.hot._acceptedDependencies[$]){if(-1!==q.indexOf(n))continue;q.push(n)}for(r=0;r<q.length;r++){n=q[r];try{n(A)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:A[r],error:e}),t.ignoreErrored||U||(U=e)}}}for(r=0;r<I.length;r++){var N=I[r];s=N.module,l=[s];try{H(s)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||U||(U=n),U||(U=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||U||(U=e)}}return U?(f("fail"),Promise.reject(U)):(f("idle"),new Promise(function(e){e(y)}))}var D={},k={1:0},E=[];function H(t){if(D[t])return D[t].exports;var n=D[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:x,apply:P,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:c[e]};return o=void 0,t}(t),parents:(u=l,l=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=D[e];if(!t)return H;var n=function(n){return t.hot.active?(D[n]?-1===D[n].parents.indexOf(e)&&D[n].parents.push(e):(l=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),H(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(t){H[e]=t}}};for(var i in H)Object.prototype.hasOwnProperty.call(H,i)&&"e"!==i&&Object.defineProperty(n,i,r(i));return n.e=function(e){return"ready"===p&&f("prepare"),g++,H.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===p&&(b[e]||C(e),0===g&&0===y&&j())}},n}(t)),n.l=!0,n.exports}H.m=e,H.c=D,H.d=function(e,t,n){H.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},H.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,t){if(1&t&&(e=H(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(H.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)H.d(n,r,function(t){return e[t]}.bind(null,r));return n},H.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(t,"a",t),t},H.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},H.p="/scaffolding/",H.h=function(){return a};var M=window.webpackJsonp=window.webpackJsonp||[],I=M.push.bind(M);M.push=t,M=M.slice();for(var $=0;$<M.length;$++)t(M[$]);var A=I;E.push([145,0]),n()}({140:function(e){e.exports={title2:"执行向导"}},141:function(e){e.exports={title2:"Welcome"}},145:function(e,t,n){"use strict";n.r(t);n(375),n(372),n(369);var r=n(33),o=n(99),i=n(98),a=n(144),s=n.n(a),c=n(97),l=n.n(c),u={data:function(){return{state:this.$store.state,lastFocus:null,publicPath:"/scaffolding/",gridFirst:[!1,!1,!1],gridSecond:[!1,!0,!1]}},methods:{incrementCounter:function(){this.$store.mutations.incrementCounter()},dismissMessage:function(){this.$store.mutations.dismissMessage()},toggleLanguage:function(){this.$i18n.locale="en"===this.$i18n.locale?"zh":"en"},showJoke:function(){this.$store.actions.loadJoke()}}},d=(n(166),n(143)),p=Object(d.a)(u,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"section"},[n("h1",{staticClass:"title"},[e._v("Time tracker")])]),e._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"}),e._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Name n' hours")]),e._v(" "),n("div",{staticClass:"control"},[n("input",{staticClass:"input",attrs:{type:"text",placeholder:"Please add your name"}})])]),e._v(" "),n("div",{staticClass:"field has-addons"},[n("p",{staticClass:"control"},[n("input",{staticClass:"input",attrs:{type:"text",placeholder:"Hours spent"}})]),e._v(" "),n("p",{staticClass:"control"},[n("a",{staticClass:"button is-static"},[e._v("\n            hour(s)\n          ")])])]),e._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Description of the problem")]),e._v(" "),n("div",{staticClass:"control"},[n("textarea",{staticClass:"textarea",attrs:{placeholder:"Textarea"}})])]),e._v(" "),n("div",{staticClass:"field is-grouped"},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-link"},[e._v("Submit")])]),e._v(" "),n("div",{staticClass:"control"},[n("button",{staticClass:"button is-text"},[e._v("Cancel")])])])]),e._v(" "),n("div",{staticClass:"column"})])])}],!1,null,"c2d55ebe",null).exports,f=n(142),h=n.n(f);var v=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:h.a).get;return{getChuckNorrisJoke:function(){var t,n=(t=regeneratorRuntime.mark(function t(){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("http://api.icndb.com/jokes/random?escape=javascript");case 2:return n=t.sent,r=n.data,t.abrupt("return",r.value.joke);case 5:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(o,i){try{var a=e[o](i),s=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});t(s)}("next")})});return function(){return n.apply(this,arguments)}}()}}();var m=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).gateway,t=void 0===e?v:e,n={counter:0,message:null},r={isTired:function(){return n.counter>=5}},o={incrementCounter:function(){n.counter+=1,r.isTired()&&(n.message="Getting with all this incrementing nonsense.")},dismissMessage:function(){n.message=null}},i={loadJoke:function(){var e,r=(e=regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getChuckNorrisJoke();case 2:r=e.sent,n.message=r;case 4:case"end":return e.stop()}},e,this)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,i){try{var a=t[o](i),s=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}("next")})});return function(){return r.apply(this,arguments)}}()};return{state:n,getters:r,mutations:o,actions:i}}();var y=n(141),g=n(140);r.a.use(i.a);var b=[{path:"/",redirect:"/welcome"},{path:"/welcome",component:p}],w=new i.a({routes:b,mode:"history",base:"/scaffolding/"});r.a.use(o.a);var _=new o.a({locale:"en",messages:{en:y,zh:g}});r.a.use(s.a,{defaultContainerElement:"#app"}),r.a.component(l.a.name,l.a),r.a.mixin({beforeCreate:function(){var e=this.$options,t=e.store,n=e.parent;t?this.$store=t:n&&n.$store&&(this.$store=n.$store)}});var O={router:w,i18n:_,store:m};new r.a(Object.assign({el:"#app",render:function(e){return e("router-view")}},O)),console.log("Page loaded. You won't see this message when using HMR and editing vue files.")},165:function(e,t,n){},166:function(e,t,n){"use strict";var r=n(67);n.n(r).a},371:function(e,t,n){},372:function(e,t,n){var r=n(371);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(68).default)("3c937524",r,!0,{})},67:function(e,t,n){var r=n(165);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(68).default)("c1003ae8",r,!0,{})}});
//# sourceMappingURL=app-fb47160c765038e70842.js.map