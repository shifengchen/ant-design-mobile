webpackJsonp([25],{8:function(n,t,a){"use strict";a(15),a(14)},14:function(n,t){},15:function(n,t){},17:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}t.__esModule=!0;var e=a(23),o=s(e),p=a(22),l=s(p);t["default"]=function(){function n(n,t){var a=[],s=!0,e=!1,o=void 0;try{for(var p,c=(0,l["default"])(n);!(s=(p=c.next()).done)&&(a.push(p.value),!t||a.length!==t);s=!0);}catch(u){e=!0,o=u}finally{try{!s&&c["return"]&&c["return"]()}finally{if(e)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if((0,o["default"])(Object(t)))return n(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},19:function(n,t){"use strict";function a(n,t){var a={},s={};return Object.keys(n).forEach(function(e){t.indexOf(e)!==-1?a[e]=n[e]:s[e]=n[e]}),[a,s]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a,n.exports=t["default"]},20:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){return Object.keys(n).forEach(function(t){return n[t]=t}),n}function o(n,t){var a={};return t.forEach(function(t){a[t]=n[t]}),a}function p(n){var t=n.touches,a=n.changedTouches,s=t&&t.length>0,e=a&&a.length>0;return!s&&e?a[0]:s?t[0]:n}function l(){return Date.now()-m>=D}Object.defineProperty(t,"__esModule",{value:!0});var c=a(1),u=s(c),i=a(12),r=s(i),E=a(2),R=s(E),d=e({NOT_RESPONDER:null,RESPONDER_INACTIVE_PRESS_IN:null,RESPONDER_INACTIVE_PRESS_OUT:null,RESPONDER_ACTIVE_PRESS_IN:null,RESPONDER_ACTIVE_PRESS_OUT:null,RESPONDER_ACTIVE_LONG_PRESS_IN:null,RESPONDER_ACTIVE_LONG_PRESS_OUT:null,ERROR:null}),k={RESPONDER_ACTIVE_PRESS_OUT:!0,RESPONDER_ACTIVE_PRESS_IN:!0},_={RESPONDER_INACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_LONG_PRESS_IN:!0},h={RESPONDER_ACTIVE_LONG_PRESS_IN:!0},S=e({DELAY:null,RESPONDER_GRANT:null,RESPONDER_RELEASE:null,RESPONDER_TERMINATED:null,ENTER_PRESS_RECT:null,LEAVE_PRESS_RECT:null,LONG_PRESS_DETECTED:null}),f={NOT_RESPONDER:{DELAY:d.ERROR,RESPONDER_GRANT:d.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:d.ERROR,RESPONDER_TERMINATED:d.ERROR,ENTER_PRESS_RECT:d.ERROR,LEAVE_PRESS_RECT:d.ERROR,LONG_PRESS_DETECTED:d.ERROR},RESPONDER_INACTIVE_PRESS_IN:{DELAY:d.RESPONDER_ACTIVE_PRESS_IN,RESPONDER_GRANT:d.ERROR,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:d.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:d.ERROR},RESPONDER_INACTIVE_PRESS_OUT:{DELAY:d.RESPONDER_ACTIVE_PRESS_OUT,RESPONDER_GRANT:d.ERROR,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:d.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:d.ERROR},RESPONDER_ACTIVE_PRESS_IN:{DELAY:d.ERROR,RESPONDER_GRANT:d.ERROR,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:d.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:d.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_PRESS_OUT:{DELAY:d.ERROR,RESPONDER_GRANT:d.ERROR,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:d.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:d.ERROR},RESPONDER_ACTIVE_LONG_PRESS_IN:{DELAY:d.ERROR,RESPONDER_GRANT:d.ERROR,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:d.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:d.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_LONG_PRESS_OUT:{DELAY:d.ERROR,RESPONDER_GRANT:d.ERROR,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:d.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:d.ERROR},error:{DELAY:d.NOT_RESPONDER,RESPONDER_GRANT:d.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.NOT_RESPONDER,LEAVE_PRESS_RECT:d.NOT_RESPONDER,LONG_PRESS_DETECTED:d.NOT_RESPONDER}},T=130,N=20,P=500,O=P-T,g=10,m=0,D=200,v=u["default"].createClass({displayName:"Touchable",getDefaultProps:function(){return{disabled:!1,delayPressIn:T,delayLongPress:O,delayPressOut:100,pressRetentionOffset:{left:N,right:N,top:N,bottom:N},hitSlop:void 0,longPressCancelsPress:!0}},getInitialState:function(){return{active:!1}},componentWillMount:function(){this.touchable={touchState:void 0}},componentDidMount:function(){this.root=R["default"].findDOMNode(this)},componentDidUpdate:function(){this.root=R["default"].findDOMNode(this)},componentWillUnmount:function(){this.releaseLockTimer&&clearTimeout(this.releaseLockTimer),this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout)},callChildEvent:function(n,t){var a=this.props.children.props[n];a&&a(t)},onTouchStart:function(n){this.callChildEvent("onTouchStart",n),this.lockMouse=!0,this.releaseLockTimer&&clearTimeout(this.releaseLockTimer),this.touchableHandleResponderGrant(n.nativeEvent)},onTouchMove:function(n){this.callChildEvent("onTouchMove",n),this.touchableHandleResponderMove(n.nativeEvent)},onTouchEnd:function(n){var t=this;this.callChildEvent("onTouchEnd",n),this.releaseLockTimer=setTimeout(function(){t.lockMouse=!1},300),this.touchableHandleResponderRelease(n.nativeEvent)},onTouchCancel:function(n){var t=this;this.callChildEvent("onTouchCancel",n),this.releaseLockTimer=setTimeout(function(){t.lockMouse=!1},300),this.touchableHandleResponderTerminate(n.nativeEvent)},onMouseDown:function(n){this.callChildEvent("onMouseDown",n),this.lockMouse||(this.touchableHandleResponderGrant(n.nativeEvent),document.addEventListener("mousemove",this.touchableHandleResponderMove,!1),document.addEventListener("mouseup",this.onMouseUp,!1))},onMouseUp:function(n){document.removeEventListener("mousemove",this.touchableHandleResponderMove,!1),document.removeEventListener("mouseup",this.onMouseUp,!1),this.touchableHandleResponderRelease(n)},_remeasureMetricsOnInit:function(n){var t=this.root,a=p(n),s=t.getBoundingClientRect();this.touchable={touchState:this.touchable.touchState,startMouse:{pageX:a.pageX,pageY:a.pageY},positionOnGrant:{left:s.left+window.pageXOffset,top:s.top+window.pageYOffset,width:s.width,height:s.height,clientLeft:s.left,clientTop:s.top}}},touchableHandleResponderGrant:function(n){var t=this;if(this.touchable.touchState=d.NOT_RESPONDER,this.pressOutDelayTimeout&&(clearTimeout(this.pressOutDelayTimeout),this.pressOutDelayTimeout=null),l()){this._remeasureMetricsOnInit(n),this._receiveSignal(S.RESPONDER_GRANT,n);var a=this.props.delayPressIn;a?this.touchableDelayTimeout=setTimeout(function(){t._handleDelay(n)},a):this._handleDelay(n);var s=this.props.delayLongPress;this.longPressDelayTimeout=setTimeout(function(){t._handleLongDelay(n)},s+a)}},checkScroll:function(n){var t=this.touchable.positionOnGrant,a=this.root.getBoundingClientRect();if(a.left!==t.clientLeft||a.top!==t.clientTop)return this._receiveSignal(S.RESPONDER_TERMINATED,n),!1},touchableHandleResponderRelease:function(n){if(!l())return void this._receiveSignal(S.RESPONDER_TERMINATED,n);var t=p(n);return Math.abs(t.pageX-this.touchable.startMouse.pageX)>30||Math.abs(t.pageY-this.touchable.startMouse.pageY)>30?void this._receiveSignal(S.RESPONDER_TERMINATED,n):void(this.checkScroll(n)!==!1&&this._receiveSignal(S.RESPONDER_RELEASE,n))},touchableHandleResponderTerminate:function(n){this._receiveSignal(S.RESPONDER_TERMINATED,n)},checkTouchWithinActive:function(n){var t=this.touchable.positionOnGrant,a=this.props,s=a.pressRetentionOffset,e=a.hitSlop,o=s.left,l=s.top,c=s.right,u=s.bottom;e&&(o+=e.left,l+=e.top,c+=e.right,u+=e.bottom);var i=p(n),r=i&&i.pageX,E=i&&i.pageY;return r>t.left-o&&E>t.top-l&&r<t.left+t.width+c&&E<t.top+t.height+u},touchableHandleResponderMove:function(n){if(this.touchable.dimensionsOnActivate&&this.touchable.touchState!==d.NOT_RESPONDER&&this.touchable.touchState!==d.RESPONDER_INACTIVE_PRESS_IN){var t=p(n),a=t&&t.pageX,s=t&&t.pageY;if(this.pressInLocation){var e=this._getDistanceBetweenPoints(a,s,this.pressInLocation.pageX,this.pressInLocation.pageY);e>g&&this._cancelLongPressDelayTimeout()}if(this.checkTouchWithinActive(n)){this._receiveSignal(S.ENTER_PRESS_RECT,n);var o=this.touchable.touchState;o===d.RESPONDER_INACTIVE_PRESS_IN&&this._cancelLongPressDelayTimeout()}else this._cancelLongPressDelayTimeout(),this._receiveSignal(S.LEAVE_PRESS_RECT,n)}},touchableHandleActivePressIn:function(n){this.setActive(!0),this.props.onPressIn&&this.props.onPressIn(n)},touchableHandleActivePressOut:function(n){this.setActive(!1),this.props.onPressOut&&this.props.onPressOut(n)},touchableHandlePress:function(n){this.props.onPress&&this.props.onPress(n),m=Date.now()},touchableHandleLongPress:function(n){this.props.onLongPress&&this.props.onLongPress(n)},setActive:function(n){(this.props.activeClassName||this.props.activeStyle)&&this.setState({active:n})},_remeasureMetricsOnActivation:function(){this.touchable.dimensionsOnActivate=this.touchable.positionOnGrant},_handleDelay:function(n){this.touchableDelayTimeout=null,this._receiveSignal(S.DELAY,n)},_handleLongDelay:function(n){this.longPressDelayTimeout=null;var t=this.touchable.touchState;t!==d.RESPONDER_ACTIVE_PRESS_IN&&t!==d.RESPONDER_ACTIVE_LONG_PRESS_IN?console.error("Attempted to transition from state `"+t+"` to `"+d.RESPONDER_ACTIVE_LONG_PRESS_IN+"`, which is not supported. This is most likely due to `Touchable.longPressDelayTimeout` not being cancelled."):this._receiveSignal(S.LONG_PRESS_DETECTED,n)},_receiveSignal:function(n,t){var a=this.touchable.touchState,s=f[a]&&f[a][n];s&&s!==d.ERROR&&a!==s&&(this._performSideEffectsForTransition(a,s,n,t),this.touchable.touchState=s)},_cancelLongPressDelayTimeout:function(){this.longPressDelayTimeout&&(clearTimeout(this.longPressDelayTimeout),this.longPressDelayTimeout=null)},_isHighlight:function(n){return n===d.RESPONDER_ACTIVE_PRESS_IN||n===d.RESPONDER_ACTIVE_LONG_PRESS_IN},_savePressInLocation:function(n){var t=p(n),a=t&&t.pageX,s=t&&t.pageY;this.pressInLocation={pageX:a,pageY:s}},_getDistanceBetweenPoints:function(n,t,a,s){var e=n-a,o=t-s;return Math.sqrt(e*e+o*o)},_performSideEffectsForTransition:function(n,t,a,s){var e=this._isHighlight(n),o=this._isHighlight(t),p=a===S.RESPONDER_TERMINATED||a===S.RESPONDER_RELEASE;if(p&&this._cancelLongPressDelayTimeout(),!k[n]&&k[t]&&this._remeasureMetricsOnActivation(),_[n]&&a===S.LONG_PRESS_DETECTED&&this.touchableHandleLongPress(s),o&&!e?this._startHighlight(s):!o&&e&&this._endHighlight(s),_[n]&&a===S.RESPONDER_RELEASE){var l=!!this.props.onLongPress,c=h[n]&&(!l||!this.props.longPressCancelsPress),u=!h[n]||c;u&&(o||e||(this._startHighlight(s),this._endHighlight(s)),this.touchableHandlePress(s))}this.touchableDelayTimeout&&(clearTimeout(this.touchableDelayTimeout),this.touchableDelayTimeout=null)},_startHighlight:function(n){this._savePressInLocation(n),this.touchableHandleActivePressIn(n)},_endHighlight:function(n){var t=this;this.props.delayPressOut?this.pressOutDelayTimeout=setTimeout(function(){t.touchableHandleActivePressOut(n)},this.props.delayPressOut):this.touchableHandleActivePressOut(n)},render:function(){var n=this.props,t=n.children,a=n.disabled,s=n.activeStyle,e=n.activeClassName,p=a?void 0:o(this,["onTouchStart","onTouchMove","onTouchEnd","onTouchCancel","onMouseDown"]),l=u["default"].Children.only(t);if(this.state.active){var c=l.props,i=c.style,E=c.className;return s&&(i=(0,r["default"])({},i,s)),e&&(E?E+=" "+e:E=e),u["default"].cloneElement(l,(0,r["default"])({className:E,style:i},p))}return u["default"].cloneElement(l,p)}});t["default"]=v,n.exports=t["default"]},22:function(n,t,a){n.exports={"default":a(24),__esModule:!0}},23:function(n,t,a){n.exports={"default":a(25),__esModule:!0}},24:function(n,t,a){a(21),a(18),n.exports=a(26)},25:function(n,t,a){a(21),a(18),n.exports=a(27)},26:function(n,t,a){var s=a(33),e=a(37);n.exports=a(16).getIterator=function(n){var t=e(n);if("function"!=typeof t)throw TypeError(n+" is not iterable!");return s(t.call(n))}},27:function(n,t,a){var s=a(43),e=a(28)("iterator"),o=a(34);n.exports=a(16).isIterable=function(n){var t=Object(n);return void 0!==t[e]||"@@iterator"in t||o.hasOwnProperty(s(t))}},29:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(9),o=s(e),p=a(1),l=s(p);t["default"]=function(n){var t=n.type,a=n.className,s=void 0===a?"":a;return l["default"].createElement("i",(0,o["default"])({},n,{className:(s+" anticon anticon-"+t).trim()}))},n.exports=t["default"]},30:function(n,t,a){"use strict";a(35)},35:function(n,t){},45:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function o(n){return e(n.type)&&I(n.props.children)?f["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(I(n)&&(n=n.split("").join(" ")),f["default"].createElement("span",null,n)):n}Object.defineProperty(t,"__esModule",{value:!0});var p=a(9),l=s(p),c=a(7),u=s(c),i=a(17),r=s(i),E=a(4),R=s(E),d=a(6),k=s(d),_=a(5),h=s(_),S=a(1),f=s(S),T=a(3),N=s(T),P=a(29),O=s(P),g=a(19),m=s(g),D=a(20),v=s(D),y=/^[\u4e00-\u9fa5]{2}$/,I=y.test.bind(y),A=function(n){function t(){return(0,R["default"])(this,t),(0,k["default"])(this,n.apply(this,arguments))}return(0,h["default"])(t,n),t.prototype.render=function(){var n,t=(0,m["default"])(this.props,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","activeStyle"]),a=(0,r["default"])(t,2),s=a[0],e=s.children,p=s.className,c=s.prefixCls,i=s.type,E=s.size,R=s.inline,d=s.across,k=s.disabled,_=s.icon,h=s.loading,S=s.activeStyle,T=a[1],P=(n={},(0,u["default"])(n,p,p),(0,u["default"])(n,c,!0),(0,u["default"])(n,c+"-primary","primary"===i),(0,u["default"])(n,c+"-ghost","ghost"===i),(0,u["default"])(n,c+"-warning","warning"===i),(0,u["default"])(n,c+"-small","small"===E),(0,u["default"])(n,c+"-inline",R),(0,u["default"])(n,c+"-across",d),(0,u["default"])(n,c+"-disabled",k),(0,u["default"])(n,c+"-loading",h),n),g=h?"loading":_,D=f["default"].Children.map(e,o);return g&&(P[c+"-icon"]=!0),delete T.htmlType,f["default"].createElement(v["default"],{activeClassName:S?c+"-active":void 0,disabled:k,activeStyle:S},f["default"].createElement("button",(0,l["default"])({},T,{type:this.props.htmlType||"button",className:(0,N["default"])(P),disabled:k}),g?f["default"].createElement(O["default"],{type:g}):null,D))},t}(f["default"].Component);A.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1,activeStyle:{}},t["default"]=A,n.exports=t["default"]},46:function(n,t,a){"use strict";a(8),a(30),a(50)},48:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var e=a(7),o=s(e),p=a(4),l=s(p),c=a(6),u=s(c),i=a(5),r=s(i),E=a(1),R=s(E),d=a(3),k=s(d),_=function(n){function t(){return(0,l["default"])(this,t),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,s=t.size,e=t.className,p=t.style,l=t.onClick,c=(0,k["default"])((n={},(0,o["default"])(n,""+a,!0),(0,o["default"])(n,a+"-"+s,!0),(0,o["default"])(n,e,!!e),n));return R["default"].createElement("div",{className:c,style:p,onClick:l})},t}(R["default"].Component);t["default"]=_,_.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=t["default"]},49:function(n,t,a){"use strict";a(8),a(59)},50:function(n,t){},54:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var e=a(7),o=s(e),p=a(4),l=s(p),c=a(6),u=s(c),i=a(5),r=s(i),E=a(1),R=s(E),d=a(3),k=s(d),_=function(n){function t(){return(0,l["default"])(this,t),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,s=t.size,e=t.className,p=t.children,l=t.style,c=(0,k["default"])((n={},(0,o["default"])(n,""+a,!0),(0,o["default"])(n,a+"-"+s,!0),(0,o["default"])(n,e,!!e),n));return R["default"].createElement("div",{className:c,style:l},p)},t}(R["default"].Component);t["default"]=_,_.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=t["default"]},55:function(n,t,a){"use strict";a(8),a(62)},59:function(n,t){},62:function(n,t){},756:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(a(55),a(54)),o=s(e),p=(a(46),a(45)),l=s(p),c=(a(49),a(48)),u=s(c),i=a(1),r=s(i),E=a(2);s(E);n.exports={content:[["p","\u4e0a\u4e0b\u7559\u767d ",["code","<WhiteSpace size='md' />"]]],meta:{order:0,title:"\u57fa\u672c",filename:"components/white-space/demo/basic.md",id:"components-white-space-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> WhiteSpace<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> WhiteSpaceExample <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xs<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u4e0a\u4e0b\u7559\u767dxs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xs<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> borderTop<span class="token punctuation">:</span> <span class="token string">\'1px solid #108ee9\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u4e0a\u4e0b\u7559\u767dsm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> borderTop<span class="token punctuation">:</span> <span class="token string">\'1px solid #108ee9\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token function">\u4e0a\u4e0b\u7559\u767dmd</span><span class="token punctuation">(</span>\u9ed8\u8ba4<span class="token punctuation">)</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> borderTop<span class="token punctuation">:</span> <span class="token string">\'1px solid #108ee9\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u4e0a\u4e0b\u7559\u767dlg<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> borderTop<span class="token punctuation">:</span> <span class="token string">\'1px solid #108ee9\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xl<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u4e0a\u4e0b\u7559\u767dxl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xl<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> borderTop<span class="token punctuation">:</span> <span class="token string">\'1px solid #108ee9\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpaceExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=r["default"].createClass({displayName:"WhiteSpaceExample",render:function(){return r["default"].createElement("div",{className:"button-container"},r["default"].createElement(u["default"],{size:"xs"}),r["default"].createElement(o["default"],null,r["default"].createElement(l["default"],{type:"primary"},"\u4e0a\u4e0b\u7559\u767dxs")),r["default"].createElement(u["default"],{size:"xs"}),r["default"].createElement("div",{style:{borderTop:"1px solid #108ee9"}}),r["default"].createElement(u["default"],{size:"sm"}),r["default"].createElement(o["default"],null,r["default"].createElement(l["default"],{type:"primary"},"\u4e0a\u4e0b\u7559\u767dsm")),r["default"].createElement(u["default"],{size:"sm"}),r["default"].createElement("div",{style:{borderTop:"1px solid #108ee9"}}),r["default"].createElement(u["default"],null),r["default"].createElement(o["default"],null,r["default"].createElement(l["default"],{type:"primary"},"\u4e0a\u4e0b\u7559\u767dmd(\u9ed8\u8ba4)")),r["default"].createElement(u["default"],null),r["default"].createElement("div",{style:{borderTop:"1px solid #108ee9"}}),r["default"].createElement(u["default"],{size:"lg"}),r["default"].createElement(o["default"],null,r["default"].createElement(l["default"],{type:"primary"},"\u4e0a\u4e0b\u7559\u767dlg")),r["default"].createElement(u["default"],{size:"lg"}),r["default"].createElement("div",{style:{borderTop:"1px solid #108ee9"}}),r["default"].createElement(u["default"],{size:"xl"}),r["default"].createElement(o["default"],null,r["default"].createElement(l["default"],{type:"primary"},"\u4e0a\u4e0b\u7559\u767dxl")),r["default"].createElement(u["default"],{size:"xl"}),r["default"].createElement("div",{style:{borderTop:"1px solid #108ee9"}}))}});return r["default"].createElement(n,null)}}},894:function(n,t,a){n.exports={basic:a(756)}}});