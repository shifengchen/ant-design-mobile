webpackJsonp([22],{8:function(n,t,a){"use strict";a(15),a(14)},14:function(n,t){},15:function(n,t){},17:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}t.__esModule=!0;var e=a(23),o=s(e),p=a(22),l=s(p);t["default"]=function(){function n(n,t){var a=[],s=!0,e=!1,o=void 0;try{for(var p,c=(0,l["default"])(n);!(s=(p=c.next()).done)&&(a.push(p.value),!t||a.length!==t);s=!0);}catch(u){e=!0,o=u}finally{try{!s&&c["return"]&&c["return"]()}finally{if(e)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if((0,o["default"])(Object(t)))return n(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},19:function(n,t){"use strict";function a(n,t){var a={},s={};return Object.keys(n).forEach(function(e){t.indexOf(e)!==-1?a[e]=n[e]:s[e]=n[e]}),[a,s]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a,n.exports=t["default"]},20:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){return Object.keys(n).forEach(function(t){return n[t]=t}),n}function o(n,t){var a={};return t.forEach(function(t){a[t]=n[t]}),a}function p(n){var t=n.touches,a=n.changedTouches,s=t&&t.length>0,e=a&&a.length>0;return!s&&e?a[0]:s?t[0]:n}function l(){return Date.now()-O>=v}Object.defineProperty(t,"__esModule",{value:!0});var c=a(1),u=s(c),i=a(12),r=s(i),E=a(2),R=s(E),d=e({NOT_RESPONDER:null,RESPONDER_INACTIVE_PRESS_IN:null,RESPONDER_INACTIVE_PRESS_OUT:null,RESPONDER_ACTIVE_PRESS_IN:null,RESPONDER_ACTIVE_PRESS_OUT:null,RESPONDER_ACTIVE_LONG_PRESS_IN:null,RESPONDER_ACTIVE_LONG_PRESS_OUT:null,ERROR:null}),f={RESPONDER_ACTIVE_PRESS_OUT:!0,RESPONDER_ACTIVE_PRESS_IN:!0},_={RESPONDER_INACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_LONG_PRESS_IN:!0},k={RESPONDER_ACTIVE_LONG_PRESS_IN:!0},h=e({DELAY:null,RESPONDER_GRANT:null,RESPONDER_RELEASE:null,RESPONDER_TERMINATED:null,ENTER_PRESS_RECT:null,LEAVE_PRESS_RECT:null,LONG_PRESS_DETECTED:null}),S={NOT_RESPONDER:{DELAY:d.ERROR,RESPONDER_GRANT:d.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:d.ERROR,RESPONDER_TERMINATED:d.ERROR,ENTER_PRESS_RECT:d.ERROR,LEAVE_PRESS_RECT:d.ERROR,LONG_PRESS_DETECTED:d.ERROR},RESPONDER_INACTIVE_PRESS_IN:{DELAY:d.RESPONDER_ACTIVE_PRESS_IN,RESPONDER_GRANT:d.ERROR,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:d.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:d.ERROR},RESPONDER_INACTIVE_PRESS_OUT:{DELAY:d.RESPONDER_ACTIVE_PRESS_OUT,RESPONDER_GRANT:d.ERROR,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:d.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:d.ERROR},RESPONDER_ACTIVE_PRESS_IN:{DELAY:d.ERROR,RESPONDER_GRANT:d.ERROR,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:d.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:d.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_PRESS_OUT:{DELAY:d.ERROR,RESPONDER_GRANT:d.ERROR,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:d.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:d.ERROR},RESPONDER_ACTIVE_LONG_PRESS_IN:{DELAY:d.ERROR,RESPONDER_GRANT:d.ERROR,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:d.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:d.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_LONG_PRESS_OUT:{DELAY:d.ERROR,RESPONDER_GRANT:d.ERROR,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:d.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:d.ERROR},error:{DELAY:d.NOT_RESPONDER,RESPONDER_GRANT:d.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.NOT_RESPONDER,LEAVE_PRESS_RECT:d.NOT_RESPONDER,LONG_PRESS_DETECTED:d.NOT_RESPONDER}},m=130,N=20,T=500,P=T-m,g=10,O=0,v=200,D=u["default"].createClass({displayName:"Touchable",getDefaultProps:function(){return{disabled:!1,delayPressIn:m,delayLongPress:P,delayPressOut:100,pressRetentionOffset:{left:N,right:N,top:N,bottom:N},hitSlop:void 0,longPressCancelsPress:!0}},getInitialState:function(){return{active:!1}},componentWillMount:function(){this.touchable={touchState:void 0}},componentDidMount:function(){this.root=R["default"].findDOMNode(this)},componentDidUpdate:function(){this.root=R["default"].findDOMNode(this)},componentWillUnmount:function(){this.releaseLockTimer&&clearTimeout(this.releaseLockTimer),this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout)},callChildEvent:function(n,t){var a=this.props.children.props[n];a&&a(t)},onTouchStart:function(n){this.callChildEvent("onTouchStart",n),this.lockMouse=!0,this.releaseLockTimer&&clearTimeout(this.releaseLockTimer),this.touchableHandleResponderGrant(n.nativeEvent)},onTouchMove:function(n){this.callChildEvent("onTouchMove",n),this.touchableHandleResponderMove(n.nativeEvent)},onTouchEnd:function(n){var t=this;this.callChildEvent("onTouchEnd",n),this.releaseLockTimer=setTimeout(function(){t.lockMouse=!1},300),this.touchableHandleResponderRelease(n.nativeEvent)},onTouchCancel:function(n){var t=this;this.callChildEvent("onTouchCancel",n),this.releaseLockTimer=setTimeout(function(){t.lockMouse=!1},300),this.touchableHandleResponderTerminate(n.nativeEvent)},onMouseDown:function(n){this.callChildEvent("onMouseDown",n),this.lockMouse||(this.touchableHandleResponderGrant(n.nativeEvent),document.addEventListener("mousemove",this.touchableHandleResponderMove,!1),document.addEventListener("mouseup",this.onMouseUp,!1))},onMouseUp:function(n){document.removeEventListener("mousemove",this.touchableHandleResponderMove,!1),document.removeEventListener("mouseup",this.onMouseUp,!1),this.touchableHandleResponderRelease(n)},_remeasureMetricsOnInit:function(n){var t=this.root,a=p(n),s=t.getBoundingClientRect();this.touchable={touchState:this.touchable.touchState,startMouse:{pageX:a.pageX,pageY:a.pageY},positionOnGrant:{left:s.left+window.pageXOffset,top:s.top+window.pageYOffset,width:s.width,height:s.height,clientLeft:s.left,clientTop:s.top}}},touchableHandleResponderGrant:function(n){var t=this;if(this.touchable.touchState=d.NOT_RESPONDER,this.pressOutDelayTimeout&&(clearTimeout(this.pressOutDelayTimeout),this.pressOutDelayTimeout=null),l()){this._remeasureMetricsOnInit(n),this._receiveSignal(h.RESPONDER_GRANT,n);var a=this.props.delayPressIn;a?this.touchableDelayTimeout=setTimeout(function(){t._handleDelay(n)},a):this._handleDelay(n);var s=this.props.delayLongPress;this.longPressDelayTimeout=setTimeout(function(){t._handleLongDelay(n)},s+a)}},checkScroll:function(n){var t=this.touchable.positionOnGrant,a=this.root.getBoundingClientRect();if(a.left!==t.clientLeft||a.top!==t.clientTop)return this._receiveSignal(h.RESPONDER_TERMINATED,n),!1},touchableHandleResponderRelease:function(n){if(!l())return void this._receiveSignal(h.RESPONDER_TERMINATED,n);var t=p(n);return Math.abs(t.pageX-this.touchable.startMouse.pageX)>30||Math.abs(t.pageY-this.touchable.startMouse.pageY)>30?void this._receiveSignal(h.RESPONDER_TERMINATED,n):void(this.checkScroll(n)!==!1&&this._receiveSignal(h.RESPONDER_RELEASE,n))},touchableHandleResponderTerminate:function(n){this._receiveSignal(h.RESPONDER_TERMINATED,n)},checkTouchWithinActive:function(n){var t=this.touchable.positionOnGrant,a=this.props,s=a.pressRetentionOffset,e=a.hitSlop,o=s.left,l=s.top,c=s.right,u=s.bottom;e&&(o+=e.left,l+=e.top,c+=e.right,u+=e.bottom);var i=p(n),r=i&&i.pageX,E=i&&i.pageY;return r>t.left-o&&E>t.top-l&&r<t.left+t.width+c&&E<t.top+t.height+u},touchableHandleResponderMove:function(n){if(this.touchable.dimensionsOnActivate&&this.touchable.touchState!==d.NOT_RESPONDER&&this.touchable.touchState!==d.RESPONDER_INACTIVE_PRESS_IN){var t=p(n),a=t&&t.pageX,s=t&&t.pageY;if(this.pressInLocation){var e=this._getDistanceBetweenPoints(a,s,this.pressInLocation.pageX,this.pressInLocation.pageY);e>g&&this._cancelLongPressDelayTimeout()}if(this.checkTouchWithinActive(n)){this._receiveSignal(h.ENTER_PRESS_RECT,n);var o=this.touchable.touchState;o===d.RESPONDER_INACTIVE_PRESS_IN&&this._cancelLongPressDelayTimeout()}else this._cancelLongPressDelayTimeout(),this._receiveSignal(h.LEAVE_PRESS_RECT,n)}},touchableHandleActivePressIn:function(n){this.setActive(!0),this.props.onPressIn&&this.props.onPressIn(n)},touchableHandleActivePressOut:function(n){this.setActive(!1),this.props.onPressOut&&this.props.onPressOut(n)},touchableHandlePress:function(n){this.props.onPress&&this.props.onPress(n),O=Date.now()},touchableHandleLongPress:function(n){this.props.onLongPress&&this.props.onLongPress(n)},setActive:function(n){(this.props.activeClassName||this.props.activeStyle)&&this.setState({active:n})},_remeasureMetricsOnActivation:function(){this.touchable.dimensionsOnActivate=this.touchable.positionOnGrant},_handleDelay:function(n){this.touchableDelayTimeout=null,this._receiveSignal(h.DELAY,n)},_handleLongDelay:function(n){this.longPressDelayTimeout=null;var t=this.touchable.touchState;t!==d.RESPONDER_ACTIVE_PRESS_IN&&t!==d.RESPONDER_ACTIVE_LONG_PRESS_IN?console.error("Attempted to transition from state `"+t+"` to `"+d.RESPONDER_ACTIVE_LONG_PRESS_IN+"`, which is not supported. This is most likely due to `Touchable.longPressDelayTimeout` not being cancelled."):this._receiveSignal(h.LONG_PRESS_DETECTED,n)},_receiveSignal:function(n,t){var a=this.touchable.touchState,s=S[a]&&S[a][n];s&&s!==d.ERROR&&a!==s&&(this._performSideEffectsForTransition(a,s,n,t),this.touchable.touchState=s)},_cancelLongPressDelayTimeout:function(){this.longPressDelayTimeout&&(clearTimeout(this.longPressDelayTimeout),this.longPressDelayTimeout=null)},_isHighlight:function(n){return n===d.RESPONDER_ACTIVE_PRESS_IN||n===d.RESPONDER_ACTIVE_LONG_PRESS_IN},_savePressInLocation:function(n){var t=p(n),a=t&&t.pageX,s=t&&t.pageY;this.pressInLocation={pageX:a,pageY:s}},_getDistanceBetweenPoints:function(n,t,a,s){var e=n-a,o=t-s;return Math.sqrt(e*e+o*o)},_performSideEffectsForTransition:function(n,t,a,s){var e=this._isHighlight(n),o=this._isHighlight(t),p=a===h.RESPONDER_TERMINATED||a===h.RESPONDER_RELEASE;if(p&&this._cancelLongPressDelayTimeout(),!f[n]&&f[t]&&this._remeasureMetricsOnActivation(),_[n]&&a===h.LONG_PRESS_DETECTED&&this.touchableHandleLongPress(s),o&&!e?this._startHighlight(s):!o&&e&&this._endHighlight(s),_[n]&&a===h.RESPONDER_RELEASE){var l=!!this.props.onLongPress,c=k[n]&&(!l||!this.props.longPressCancelsPress),u=!k[n]||c;u&&(o||e||(this._startHighlight(s),this._endHighlight(s)),this.touchableHandlePress(s))}this.touchableDelayTimeout&&(clearTimeout(this.touchableDelayTimeout),this.touchableDelayTimeout=null)},_startHighlight:function(n){this._savePressInLocation(n),this.touchableHandleActivePressIn(n)},_endHighlight:function(n){var t=this;this.props.delayPressOut?this.pressOutDelayTimeout=setTimeout(function(){t.touchableHandleActivePressOut(n)},this.props.delayPressOut):this.touchableHandleActivePressOut(n)},render:function(){var n=this.props,t=n.children,a=n.disabled,s=n.activeStyle,e=n.activeClassName,p=a?void 0:o(this,["onTouchStart","onTouchMove","onTouchEnd","onTouchCancel","onMouseDown"]),l=u["default"].Children.only(t);if(this.state.active){var c=l.props,i=c.style,E=c.className;return s&&(i=(0,r["default"])({},i,s)),e&&(E?E+=" "+e:E=e),u["default"].cloneElement(l,(0,r["default"])({className:E,style:i},p))}return u["default"].cloneElement(l,p)}});t["default"]=D,n.exports=t["default"]},22:function(n,t,a){n.exports={"default":a(24),__esModule:!0}},23:function(n,t,a){n.exports={"default":a(25),__esModule:!0}},24:function(n,t,a){a(21),a(18),n.exports=a(26)},25:function(n,t,a){a(21),a(18),n.exports=a(27)},26:function(n,t,a){var s=a(33),e=a(37);n.exports=a(16).getIterator=function(n){var t=e(n);if("function"!=typeof t)throw TypeError(n+" is not iterable!");return s(t.call(n))}},27:function(n,t,a){var s=a(43),e=a(28)("iterator"),o=a(34);n.exports=a(16).isIterable=function(n){var t=Object(n);return void 0!==t[e]||"@@iterator"in t||o.hasOwnProperty(s(t))}},29:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(9),o=s(e),p=a(1),l=s(p);t["default"]=function(n){var t=n.type,a=n.className,s=void 0===a?"":a;return l["default"].createElement("i",(0,o["default"])({},n,{className:(s+" anticon anticon-"+t).trim()}))},n.exports=t["default"]},30:function(n,t,a){"use strict";a(35)},35:function(n,t){},45:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function o(n){return e(n.type)&&C(n.props.children)?S["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(C(n)&&(n=n.split("").join(" ")),S["default"].createElement("span",null,n)):n}Object.defineProperty(t,"__esModule",{value:!0});var p=a(9),l=s(p),c=a(7),u=s(c),i=a(17),r=s(i),E=a(4),R=s(E),d=a(6),f=s(d),_=a(5),k=s(_),h=a(1),S=s(h),m=a(3),N=s(m),T=a(29),P=s(T),g=a(19),O=s(g),v=a(20),D=s(v),I=/^[\u4e00-\u9fa5]{2}$/,C=I.test.bind(I),y=function(n){function t(){return(0,R["default"])(this,t),(0,f["default"])(this,n.apply(this,arguments))}return(0,k["default"])(t,n),t.prototype.render=function(){var n,t=(0,O["default"])(this.props,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","activeStyle"]),a=(0,r["default"])(t,2),s=a[0],e=s.children,p=s.className,c=s.prefixCls,i=s.type,E=s.size,R=s.inline,d=s.across,f=s.disabled,_=s.icon,k=s.loading,h=s.activeStyle,m=a[1],T=(n={},(0,u["default"])(n,p,p),(0,u["default"])(n,c,!0),(0,u["default"])(n,c+"-primary","primary"===i),(0,u["default"])(n,c+"-ghost","ghost"===i),(0,u["default"])(n,c+"-warning","warning"===i),(0,u["default"])(n,c+"-small","small"===E),(0,u["default"])(n,c+"-inline",R),(0,u["default"])(n,c+"-across",d),(0,u["default"])(n,c+"-disabled",f),(0,u["default"])(n,c+"-loading",k),n),g=k?"loading":_,v=S["default"].Children.map(e,o);return g&&(T[c+"-icon"]=!0),delete m.htmlType,S["default"].createElement(D["default"],{activeClassName:h?c+"-active":void 0,disabled:f,activeStyle:h},S["default"].createElement("button",(0,l["default"])({},m,{type:this.props.htmlType||"button",className:(0,N["default"])(T),disabled:f}),g?S["default"].createElement(P["default"],{type:g}):null,v))},t}(S["default"].Component);y.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1,activeStyle:{}},t["default"]=y,n.exports=t["default"]},46:function(n,t,a){"use strict";a(8),a(30),a(50)},50:function(n,t){},64:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var e=a(7),o=s(e),p=a(4),l=s(p),c=a(6),u=s(c),i=a(5),r=s(i),E=a(1),R=s(E),d=a(3),f=s(d),_=function(n){function t(){return(0,l["default"])(this,t),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.direction,s=t.wrap,e=t.justify,p=t.align,l=t.alignContent,c=t.className,u=t.children,i=t.prefixCls,r=t.style,E=t.onClick,d=(0,f["default"])((n={},(0,o["default"])(n,i,!0),(0,o["default"])(n,i+"-dir-row","row"===a),(0,o["default"])(n,i+"-dir-row-reverse","row-reverse"===a),(0,o["default"])(n,i+"-dir-column","column"===a),(0,o["default"])(n,i+"-dir-column-reverse","column-reverse"===a),(0,o["default"])(n,i+"-nowrap","nowrap"===s),(0,o["default"])(n,i+"-wrap","wrap"===s),(0,o["default"])(n,i+"-wrap-reverse","wrap-reverse"===s),(0,o["default"])(n,i+"-justify-start","start"===e),(0,o["default"])(n,i+"-justify-end","end"===e),(0,o["default"])(n,i+"-justify-center","center"===e),(0,o["default"])(n,i+"-justify-between","between"===e),(0,o["default"])(n,i+"-justify-around","around"===e),(0,o["default"])(n,i+"-align-top","top"===p||"start"===p),(0,o["default"])(n,i+"-align-middle","middle"===p||"center"===p),(0,o["default"])(n,i+"-align-bottom","bottom"===p||"end"===p),(0,o["default"])(n,i+"-align-baseline","baseline"===p),(0,o["default"])(n,i+"-align-stretch","stretch"===p),(0,o["default"])(n,i+"-align-content-start","start"===l),(0,o["default"])(n,i+"-align-content-end","end"===l),(0,o["default"])(n,i+"-align-content-center","center"===l),(0,o["default"])(n,i+"-align-content-between","between"===l),(0,o["default"])(n,i+"-align-content-around","around"===l),(0,o["default"])(n,i+"-align-content-stretch","stretch"===l),(0,o["default"])(n,c,c),n));return R["default"].createElement("div",{className:d,style:r,onClick:E},u)},t}(R["default"].Component);t["default"]=_,_.defaultProps={prefixCls:"am-flexbox",align:"center",onClick:function(){}},n.exports=t["default"]},65:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var e=a(7),o=s(e),p=a(4),l=s(p),c=a(6),u=s(c),i=a(5),r=s(i),E=a(1),R=s(E),d=a(3),f=s(d),_=function(n){function t(){return(0,l["default"])(this,t),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.children,s=t.className,e=t.prefixCls,p=t.style,l=t.onClick,c=(0,f["default"])((n={},(0,o["default"])(n,e+"-item",!0),(0,o["default"])(n,s,s),n));return R["default"].createElement("div",{className:c,style:p,onClick:l},a)},t}(R["default"].Component);t["default"]=_,_.defaultProps={prefixCls:"am-flexbox"},n.exports=t["default"]},66:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(64),o=s(e),p=a(65),l=s(p);o["default"].Item=l["default"],t["default"]=o["default"],n.exports=t["default"]},67:function(n,t,a){"use strict";a(8),a(76)},76:function(n,t){},705:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(a(30),a(29)),o=s(e),p=(a(796),a(795)),l=s(p),c=a(1),u=s(c),i=a(2);s(i);n.exports={content:[["p","\u57fa\u672c\u7684\u5206\u9875\u5668\u3002"]],meta:{order:0,title:"\u793a\u4f8b",filename:"components/pagination/demo/basic.md",id:"components-pagination-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> App <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pagination-container<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u6309\u94ae\u5185\u5e26\u6587\u672c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">prevText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u4e0a\u4e00\u6b65<span class="token punctuation">"</span></span> <span class="token attr-name">nextText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u4e0b\u4e00\u6b65<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u5e26\u6587\u672c\u548cicon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">prevText={&lt;div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>arrow-align<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\u4e0a\u4e00\u6b65<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n          nextText<span class="token operator">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>arrow-align<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u4e0b\u4e00\u6b65<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9690\u85cf\u6570\u5b57<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">simple</span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">prevText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u4e0a\u4e00\u6b65<span class="token punctuation">"</span></span> <span class="token attr-name">nextText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u4e0b\u4e00\u6b65<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u53ea\u663e\u793a\u6570\u5b57<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u70b9\u72b6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pointer<span class="token punctuation">"</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token string">\'0.32rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=u["default"].createClass({displayName:"App",render:function(){return u["default"].createElement("div",{className:"pagination-container"},u["default"].createElement("p",{className:"title"},"\u6309\u94ae\u5185\u5e26\u6587\u672c"),u["default"].createElement(l["default"],{total:5,current:1,prevText:"\u4e0a\u4e00\u6b65",nextText:"\u4e0b\u4e00\u6b65"}),u["default"].createElement("p",{className:"title"},"\u5e26\u6587\u672c\u548cicon"),u["default"].createElement(l["default"],{total:5,current:1,prevText:u["default"].createElement("div",{className:"arrow-align"},u["default"].createElement(o["default"],{type:"left"}),"\u4e0a\u4e00\u6b65"),nextText:u["default"].createElement("div",{className:"arrow-align"},"\u4e0b\u4e00\u6b65",u["default"].createElement(o["default"],{type:"right"}))}),u["default"].createElement("p",{className:"title"},"\u9690\u85cf\u6570\u5b57"),u["default"].createElement(l["default"],{simple:!0,total:5,current:1,prevText:"\u4e0a\u4e00\u6b65",nextText:"\u4e0b\u4e00\u6b65"}),u["default"].createElement("p",{className:"title"},"\u53ea\u663e\u793a\u6570\u5b57"),u["default"].createElement(l["default"],{mode:"number",total:5,current:3}),u["default"].createElement("p",{className:"title"},"\u70b9\u72b6"),u["default"].createElement(l["default"],{mode:"pointer",total:5,current:2,style:{marginBottom:"0.32rem"}}))}});return u["default"].createElement(n,null)},style:".pagination-container {\n  padding: 0 0.2rem;\n}\n.pagination-container .title {\n  margin: 0.2rem 0;\n}\n.pagination-container .arrow-align {\n  display: flex;\n  align-items: center;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.pagination-container</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">0.2</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.pagination-container</span> <span class="token class">.title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0.2</span>rem <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.pagination-container</span> <span class="token class">.arrow-align</span> </span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'
}},795:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var e=a(7),o=s(e),p=a(4),l=s(p),c=a(6),u=s(c),i=a(5),r=s(i),E=a(1),R=s(E),d=a(3),f=s(d),_=a(45),k=s(_),h=a(66),S=s(h),m=function(n){function t(a){(0,l["default"])(this,t);var s=(0,u["default"])(this,n.call(this,a));return s.state={current:a.current},s}return(0,r["default"])(t,n),t.prototype.componentWillReceiveProps=function(n){this.setState({current:n.current})},t.prototype.onChange=function(n){this.setState({current:n}),this.props.onChange&&this.props.onChange(n)},t.prototype.render=function(){var n,t=this,a=this.props,s=a.prefixCls,e=a.className,p=a.style,l=a.mode,c=a.total,u=a.simple,i=a.prevText,r=a.nextText,E=this.state.current,d=R["default"].createElement(S["default"],null,R["default"].createElement(S["default"].Item,{className:s+"-wrap-btn "+s+"-wrap-btn-prev"},R["default"].createElement(k["default"],{inline:!0,disabled:E<=0,onClick:function(){return t.onChange(E-1)}},i)),this.props.children?R["default"].createElement(S["default"].Item,null,this.props.children):!u&&R["default"].createElement(S["default"].Item,{className:s+"-wrap"},R["default"].createElement("span",{className:"active"},E+1),"/",R["default"].createElement("span",null,c)),R["default"].createElement(S["default"].Item,{className:s+"-wrap-btn "+s+"-wrap-btn-next"},R["default"].createElement(k["default"],{inline:!0,disabled:E>=c-1,onClick:function(){return t.onChange(t.state.current+1)}},r)));if("number"===l)d=R["default"].createElement("div",{className:s+"-wrap"},R["default"].createElement("span",{className:"active"},E+1),"/",R["default"].createElement("span",null,c));else if("pointer"===l){for(var _=[],h=0;h<c;h++){var m;_.push(R["default"].createElement("div",{key:"dot-"+h,className:(0,f["default"])((m={},(0,o["default"])(m,s+"-wrap-dot",!0),(0,o["default"])(m,s+"-wrap-dot-active",h===E),m))},R["default"].createElement("span",null)))}d=R["default"].createElement("div",{className:s+"-wrap"},_)}return R["default"].createElement("div",{className:(0,f["default"])((n={},(0,o["default"])(n,e,e),(0,o["default"])(n,s,!0),n)),style:p},d)},t}(R["default"].Component);t["default"]=m,m.defaultProps={prefixCls:"am-pagination",mode:"button",current:0,simple:!1,prevText:"Prev",nextText:"Next",onChange:function(){}},n.exports=t["default"]},796:function(n,t,a){"use strict";a(8),a(46),a(67),a(1127)},873:function(n,t,a){n.exports={basic:a(705)}},1127:function(n,t){}});