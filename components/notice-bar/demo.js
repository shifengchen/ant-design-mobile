webpackJsonp([32],{8:function(n,a,s){"use strict";s(15),s(14)},14:function(n,a){},15:function(n,a){},17:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=s(23),p=t(e),o=s(22),c=t(o);a["default"]=function(){function n(n,a){var s=[],t=!0,e=!1,p=void 0;try{for(var o,l=(0,c["default"])(n);!(t=(o=l.next()).done)&&(s.push(o.value),!a||s.length!==a);t=!0);}catch(u){e=!0,p=u}finally{try{!t&&l["return"]&&l["return"]()}finally{if(e)throw p}}return s}return function(a,s){if(Array.isArray(a))return a;if((0,p["default"])(Object(a)))return n(a,s);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},19:function(n,a){"use strict";function s(n,a){var s={},t={};return Object.keys(n).forEach(function(e){a.indexOf(e)!==-1?s[e]=n[e]:t[e]=n[e]}),[s,t]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},22:function(n,a,s){n.exports={"default":s(24),__esModule:!0}},23:function(n,a,s){n.exports={"default":s(25),__esModule:!0}},24:function(n,a,s){s(21),s(18),n.exports=s(26)},25:function(n,a,s){s(21),s(18),n.exports=s(27)},26:function(n,a,s){var t=s(33),e=s(37);n.exports=s(16).getIterator=function(n){var a=e(n);if("function"!=typeof a)throw TypeError(n+" is not iterable!");return t(a.call(n))}},27:function(n,a,s){var t=s(43),e=s(28)("iterator"),p=s(34);n.exports=s(16).isIterable=function(n){var a=Object(n);return void 0!==a[e]||"@@iterator"in a||p.hasOwnProperty(t(a))}},29:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(9),p=t(e),o=s(1),c=t(o);a["default"]=function(n){var a=n.type,s=n.className,t=void 0===s?"":s;return c["default"].createElement("i",(0,p["default"])({},n,{className:(t+" anticon anticon-"+a).trim()}))},n.exports=a["default"]},30:function(n,a,s){"use strict";s(35)},35:function(n,a){},48:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(7),p=t(e),o=s(4),c=t(o),l=s(6),u=t(l),i=s(5),r=t(i),k=s(1),f=t(k),d=s(3),m=t(d),g=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,e=a.className,o=a.style,c=a.onClick,l=(0,m["default"])((n={},(0,p["default"])(n,""+s,!0),(0,p["default"])(n,s+"-"+t,!0),(0,p["default"])(n,e,!!e),n));return f["default"].createElement("div",{className:l,style:o,onClick:c})},a}(f["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},49:function(n,a,s){"use strict";s(8),s(59)},59:function(n,a){},703:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(794),s(793)),p=t(e),o=(s(49),s(48)),c=t(o),l=s(1),u=t(l),i=s(2);t(i);n.exports={content:[],meta:{order:0,title:"\u901a\u544a\u680f",filename:"components/notice-bar/demo/basic.md",id:"components-notice-bar-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NoticeBar<span class="token punctuation">,</span> WhiteSpace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> NoticeBarExample <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'clicked\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>closable<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>question<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBarExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=u["default"].createClass({displayName:"NoticeBarExample",onClick:function(){alert("clicked")},render:function(){return u["default"].createElement("div",null,u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(p["default"],{type:"info"},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(p["default"],{type:"success",mode:"closable",onClick:this.onClick},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(p["default"],{type:"error"},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(p["default"],{type:"question",mode:"link",onClick:this.onClick},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:"lg"}))}});return u["default"].createElement(n,null)}}},793:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(9),p=t(e),o=s(7),c=t(o),l=s(17),u=t(l),i=s(4),r=t(i),k=s(6),f=t(k),d=s(5),m=t(d),g=s(1),v=t(g),h=s(3),y=t(h),C=s(19),E=t(C),N=s(29),x=t(N),_=function(n){function a(s){(0,r["default"])(this,a);var t=(0,f["default"])(this,n.call(this,s));return t.onClick=function(){var n=t.props,a=n.mode,s=n.onClick;s&&s(),"closable"===a&&t.setState({show:!1})},t.state={show:!0},t}return(0,m["default"])(a,n),a.prototype.render=function(){var n,a=(0,E["default"])(this.props,["mode","type","onClick","children","className","prefixCls"]),s=(0,u["default"])(a,2),t=s[0],e=t.mode,o=t.type,l=t.onClick,i=t.children,r=t.className,k=t.prefixCls,f=s[1],d={},m=null;"closable"===e?m=v["default"].createElement("div",{className:k+"-operation",onClick:this.onClick},v["default"].createElement(x["default"],{type:"cross"})):("link"===e&&(m=v["default"].createElement("div",{className:k+"-operation"},v["default"].createElement(x["default"],{type:"right"}))),d.onClick=l);var g={success:"check-circle",error:"cross-circle",warn:"exclamation-circle",question:"question-circle"},h=o?v["default"].createElement("div",{className:k+"-icon"},v["default"].createElement(x["default"],{type:g[o]||"info-circle"})):null,C=(0,y["default"])((n={},(0,c["default"])(n,k,!0),(0,c["default"])(n,r,!!r),n));return this.state.show?v["default"].createElement("div",(0,p["default"])({className:C},f,d),h,v["default"].createElement("div",{className:k+"-content"},i),m):null},a}(v["default"].Component);a["default"]=_,_.defaultProps={prefixCls:"am-notice-bar",mode:"",onClick:function(){}},n.exports=a["default"]},794:function(n,a,s){"use strict";s(8),s(30),s(1126)},872:function(n,a,s){n.exports={basic:s(703)}},1126:function(n,a){}});