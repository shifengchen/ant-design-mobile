webpackJsonp([42],{8:function(n,a,s){"use strict";s(15),s(14)},14:function(n,a){},15:function(n,a){},329:function(n,a){"use strict";function s(){}Object.defineProperty(a,"__esModule",{value:!0});a.defaultProps={prefixCls:"am-search",placeholder:"",onSubmit:s,onChange:s,onFocus:s,onBlur:s,onClear:s,showCancelButton:!1,cancelText:"\u53d6\u6d88",disabled:!1}},330:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(7),e=t(p),o=s(4),c=t(o),u=s(6),l=t(u),i=s(5),r=t(i),k=s(1),f=t(k),h=s(3),d=t(h),g=s(329),m=function(n){function a(s){(0,c["default"])(this,a);var t=(0,l["default"])(this,n.call(this,s));t.onSubmit=function(n){n.preventDefault(),t.props.onSubmit&&t.props.onSubmit(t.state.value)},t.onChange=function(n){var a=n.target.value;"value"in t.props||t.setState({value:a}),t.props.onChange&&t.props.onChange(a)},t.onFocus=function(){t.setState({focus:!0}),t.firstFocus=!0,t.props.onFocus&&t.props.onFocus()},t.onBlur=function(){t.setState({focus:!1}),t.props.onBlur&&t.props.onBlur()},t.onClear=function(){"value"in t.props||t.setState({value:""}),t.refs.searchInput.focus(),t.props.onClear&&t.props.onClear(""),t.props.onChange&&t.props.onChange("")},t.onCancel=function(){t.props.onCancel?t.props.onCancel(t.state.value):t.onClear(),t.refs.searchInput.blur()};var p=void 0;return p="value"in s?s.value||"":"defaultValue"in s?s.defaultValue:"",t.state={value:p,focus:!1},t}return(0,r["default"])(a,n),a.prototype.componentDidMount=function(){var n=window.getComputedStyle(this.refs.rightBtn);this.rightBtnInitMarginleft=n["margin-left"],this.componentDidUpdate()},a.prototype.componentDidUpdate=function(){this.refs.searchInputContainer.className.indexOf(this.props.prefixCls+"-start")>-1?(this.refs.syntheticPh.style.width=this.refs.syntheticPhContainer.offsetWidth+"px",this.props.showCancelButton||(this.refs.rightBtn.style.marginRight=0)):(this.refs.syntheticPh.style.width="100%",this.props.showCancelButton||(this.refs.rightBtn.style.marginRight="-"+(this.refs.rightBtn.offsetWidth+parseInt(this.rightBtnInitMarginleft,10))+"px"))},a.prototype.componentWillReceiveProps=function(n){"value"in n&&this.setState({value:n.value})},a.prototype.render=function(){var n,a,s,t=this.props,p=t.prefixCls,o=t.showCancelButton,c=t.disabled,u=t.placeholder,l=t.cancelText,i=t.className,r=this.state,k=r.value,h=r.focus,g=(0,d["default"])((n={},(0,e["default"])(n,""+p,!0),(0,e["default"])(n,p+"-start",h||k&&k.length>0),(0,e["default"])(n,i,i),n)),m=(0,d["default"])((a={},(0,e["default"])(a,p+"-clear",!0),(0,e["default"])(a,p+"-clear-show",h&&k&&k.length>0),a)),v=(0,d["default"])((s={},(0,e["default"])(s,p+"-cancel",!0),(0,e["default"])(s,p+"-cancel-show",o||h||k&&k.length>0),(0,e["default"])(s,p+"-cancel-anim",this.firstFocus),s));return f["default"].createElement("form",{onSubmit:this.onSubmit,className:g,ref:"searchInputContainer"},f["default"].createElement("div",{className:p+"-input"},f["default"].createElement("div",{className:p+"-synthetic-ph",ref:"syntheticPh"},f["default"].createElement("span",{className:p+"-synthetic-ph-container",ref:"syntheticPhContainer"},f["default"].createElement("i",{className:p+"-synthetic-ph-icon"}),f["default"].createElement("span",{className:p+"-synthetic-ph-placeholder",style:{visibility:u&&!k?"visible":"hidden"}},u))),f["default"].createElement("input",{type:"search",className:p+"-value",value:k,disabled:c,placeholder:u,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,ref:"searchInput"}),f["default"].createElement("a",{onClick:this.onClear,className:m})),f["default"].createElement("div",{className:v,onClick:this.onCancel,ref:"rightBtn"},l))},a}(f["default"].Component);a["default"]=m,m.defaultProps=g.defaultProps,n.exports=a["default"]},331:function(n,a,s){"use strict";s(8),s(405)},405:function(n,a){},722:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(331),s(330)),e=t(p),o=s(1),c=t(o),u=s(2);t(u);n.exports={content:[],meta:{order:0,title:"\u793a\u4f8b",filename:"components/search-bar/demo/basic.md",id:"components-search-bar-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> SearchBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> SearchBarExample <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">getInitialState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'\u7f8e\u98df\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token string">\'\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u641c\u7d22<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'#999\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u663e\u793a\u53d6\u6d88\u6309\u94ae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u641c\u7d22<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">\'onSubmit\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">\'onClear\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onFocus</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onFocus\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onBlur</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onBlur\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">showCancelButton</span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBarExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=c["default"].createClass({displayName:"SearchBarExample",getInitialState:function(){return{value:"\u7f8e\u98df"}},onChange:function(n){this.setState({value:n})},clear:function(){this.setState({value:""})},render:function(){return c["default"].createElement("div",null,c["default"].createElement(e["default"],{placeholder:"\u641c\u7d22"}),c["default"].createElement("p",{style:{padding:10,color:"#999"}},"\u663e\u793a\u53d6\u6d88\u6309\u94ae"),c["default"].createElement(e["default"],{value:this.state.value,placeholder:"\u641c\u7d22",onSubmit:function(n){return console.log(n,"onSubmit")},onClear:function(n){return console.log(n,"onClear")},onFocus:function(){return console.log("onFocus")},onBlur:function(){return console.log("onBlur")},showCancelButton:!0,onChange:this.onChange}))}});return c["default"].createElement(n,null)}}},881:function(n,a,s){n.exports={basic:s(722)}}});