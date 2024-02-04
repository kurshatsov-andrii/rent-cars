import{r as O,i as ue,k as Me,a as u,c as pe,b as me,j as i,s as K,l as Ie,m as Le}from"./index-TJBKe1vu.js";const Fe=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],De=[10,20,30,40,50,60,70,80];var ge={exports:{}};function $e(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var A=$e(O),Oe=ue;function Pe(e,o){for(var r=Object.getOwnPropertyNames(o),n=0;n<r.length;n++){var t=r[n],s=Object.getOwnPropertyDescriptor(o,t);s&&s.configurable&&e[t]===void 0&&Object.defineProperty(e,t,s)}return e}function q(){return(q=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ee(e,o){e.prototype=Object.create(o.prototype),Pe(e.prototype.constructor=e,o)}function Be(e,o){if(e==null)return{};var r,n,t={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],0<=o.indexOf(r)||(t[r]=e[r]);return t}function E(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Ve=function(e,o,r,n,t,s,d,v){if(!e){var l;if(o===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,t,s,d,v],h=0;(l=new Error(o.replace(/%s/g,function(){return c[h++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}},G=Ve;function J(e,o,r){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=o,e.selectionEnd=r;else{var n=e.createTextRange();n.collapse(!0),n.moveStart("character",o),n.moveEnd("character",r-o),n.select()}}function Te(e){var o=0,r=0;if("selectionStart"in e&&"selectionEnd"in e)o=e.selectionStart,r=e.selectionEnd;else{var n=document.selection.createRange();n.parentElement()===e&&(o=-n.moveStart("character",-e.value.length),r=-n.moveEnd("character",-e.value.length))}return{start:o,end:r,length:r-o}}var Re={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},ze="_";function Q(e,o,r){var n="",t="",s=null,d=[];if(o===void 0&&(o=ze),r==null&&(r=Re),!e||typeof e!="string")return{maskChar:o,formatChars:r,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var v=!1;return e.split("").forEach(function(l){v=!v&&l==="\\"||(v||!r[l]?(d.push(n.length),n.length===d.length-1&&(t+=l)):s=n.length+1,n+=l,!1)}),{maskChar:o,formatChars:r,prefix:t,mask:n,lastEditablePosition:s,permanents:d}}function L(e,o){return e.permanents.indexOf(o)!==-1}function z(e,o,r){var n=e.mask,t=e.formatChars;if(!r)return!1;if(L(e,o))return n[o]===r;var s=t[n[o]];return new RegExp(s).test(r)}function ee(e,o){return o.split("").every(function(r,n){return L(e,n)||!z(e,n,r)})}function V(e,o){var r=e.maskChar,n=e.prefix;if(!r){for(;o.length>n.length&&L(e,o.length-1);)o=o.slice(0,o.length-1);return o.length}for(var t=n.length,s=o.length;s>=n.length;s--){var d=o[s];if(!L(e,s)&&z(e,s,d)){t=s+1;break}}return t}function fe(e,o){return V(e,o)===e.mask.length}function P(e,o){var r=e.maskChar,n=e.mask,t=e.prefix;if(!r){for((o=Y(e,"",o,0)).length<t.length&&(o=t);o.length<n.length&&L(e,o.length);)o+=n[o.length];return o}if(o)return Y(e,P(e,""),o,0);for(var s=0;s<n.length;s++)L(e,s)?o+=n[s]:o+=r;return o}function Ae(e,o,r,n){var t=r+n,s=e.maskChar,d=e.mask,v=e.prefix,l=o.split("");if(s)return l.map(function(h,w){return w<r||t<=w?h:L(e,w)?d[w]:s}).join("");for(var c=t;c<l.length;c++)L(e,c)&&(l[c]="");return r=Math.max(v.length,r),l.splice(r,t-r),o=l.join(""),P(e,o)}function Y(e,o,r,n){var t=e.mask,s=e.maskChar,d=e.prefix,v=r.split(""),l=fe(e,o);return!s&&n>o.length&&(o+=t.slice(o.length,n)),v.every(function(c){for(;b=c,L(e,g=n)&&b!==t[g];){if(n>=o.length&&(o+=t[n]),h=c,w=n,s&&L(e,w)&&h===s)return!0;if(++n>=t.length)return!1}var h,w,g,b;return!z(e,n,c)&&c!==s||(n<o.length?o=s||l||n<d.length?o.slice(0,n)+c+o.slice(n+1):(o=o.slice(0,n)+c+o.slice(n),P(e,o)):s||(o+=c),++n<t.length)}),o}function Ne(e,o,r,n){var t=e.mask,s=e.maskChar,d=r.split(""),v=n;return d.every(function(l){for(;h=l,L(e,c=n)&&h!==t[c];)if(++n>=t.length)return!1;var c,h;return(z(e,n,l)||l===s)&&n++,n<t.length}),n-v}function _e(e,o){for(var r=o;0<=r;--r)if(!L(e,r))return r;return null}function T(e,o){for(var r=e.mask,n=o;n<r.length;++n)if(!L(e,n))return n;return null}function N(e){return e||e===0?e+"":""}function We(e,o,r,n,t){var s=e.mask,d=e.prefix,v=e.lastEditablePosition,l=o,c="",h=0,w=0,g=Math.min(t.start,r.start);return r.end>t.start?w=(h=Ne(e,n,c=l.slice(t.start,r.end),g))?t.length:0:l.length<n.length&&(w=n.length-l.length),l=n,w&&(w===1&&!t.length&&(g=t.start===r.start?T(e,r.start):_e(e,r.start)),l=Ae(e,l,g,w)),l=Y(e,l,c,g),(g+=h)>=s.length?g=s.length:g<d.length&&!h?g=d.length:g>=d.length&&g<v&&h&&(g=T(e,g)),c||(c=null),{value:l=P(e,l),enteredString:c,selection:{start:g,end:g}}}function Ue(){var e=new RegExp("windows","i"),o=new RegExp("phone","i"),r=navigator.userAgent;return e.test(r)&&o.test(r)}function M(e){return typeof e=="function"}function qe(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function xe(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function te(e){return(xe()?qe():function(){return setTimeout(e,1e3/60)})(e)}function _(e){(xe()||clearTimeout)(e)}var Ye=function(e){function o(n){var t=e.call(this,n)||this;t.focused=!1,t.mounted=!1,t.previousSelection=null,t.selectionDeferId=null,t.saveSelectionLoopDeferId=null,t.saveSelectionLoop=function(){t.previousSelection=t.getSelection(),t.saveSelectionLoopDeferId=te(t.saveSelectionLoop)},t.runSaveSelectionLoop=function(){t.saveSelectionLoopDeferId===null&&t.saveSelectionLoop()},t.stopSaveSelectionLoop=function(){t.saveSelectionLoopDeferId!==null&&(_(t.saveSelectionLoopDeferId),t.saveSelectionLoopDeferId=null,t.previousSelection=null)},t.getInputDOMNode=function(){if(!t.mounted)return null;var a=Oe.findDOMNode(E(E(t))),m=typeof window<"u"&&a instanceof window.Element;if(a&&!m)return null;if(a.nodeName!=="INPUT"&&(a=a.querySelector("input")),!a)throw new Error("react-input-mask: inputComponent doesn't contain input node");return a},t.getInputValue=function(){var a=t.getInputDOMNode();return a?a.value:null},t.setInputValue=function(a){var m=t.getInputDOMNode();m&&(t.value=a,m.value=a)},t.setCursorToEnd=function(){var a=V(t.maskOptions,t.value),m=T(t.maskOptions,a);m!==null&&t.setCursorPosition(m)},t.setSelection=function(a,m,x){x===void 0&&(x={});var f=t.getInputDOMNode(),k=t.isFocused();f&&k&&(x.deferred||J(f,a,m),t.selectionDeferId!==null&&_(t.selectionDeferId),t.selectionDeferId=te(function(){t.selectionDeferId=null,J(f,a,m)}),t.previousSelection={start:a,end:m,length:Math.abs(m-a)})},t.getSelection=function(){return Te(t.getInputDOMNode())},t.getCursorPosition=function(){return t.getSelection().start},t.setCursorPosition=function(a){t.setSelection(a,a)},t.isFocused=function(){return t.focused},t.getBeforeMaskedValueChangeConfig=function(){var a=t.maskOptions,m=a.mask,x=a.maskChar,f=a.permanents,k=a.formatChars;return{mask:m,maskChar:x,permanents:f,alwaysShowMask:!!t.props.alwaysShowMask,formatChars:k}},t.isInputAutofilled=function(a,m,x,f){var k=t.getInputDOMNode();try{if(k.matches(":-webkit-autofill"))return!0}catch{}return!t.focused||f.end<x.length&&m.end===a.length},t.onChange=function(a){var m=E(E(t)).beforePasteState,x=E(E(t)).previousSelection,f=t.props.beforeMaskedValueChange,k=t.getInputValue(),j=t.value,C=t.getSelection();t.isInputAutofilled(k,C,j,x)&&(j=P(t.maskOptions,""),x={start:0,end:0,length:0}),m&&(x=m.selection,j=m.value,C={start:x.start+k.length,end:x.start+k.length,length:0},k=j.slice(0,x.start)+k+j.slice(x.end),t.beforePasteState=null);var I=We(t.maskOptions,k,C,j,x),D=I.enteredString,p=I.selection,y=I.value;if(M(f)){var $=f({value:y,selection:p},{value:j,selection:x},D,t.getBeforeMaskedValueChangeConfig());y=$.value,p=$.selection}t.setInputValue(y),M(t.props.onChange)&&t.props.onChange(a),t.isWindowsPhoneBrowser?t.setSelection(p.start,p.end,{deferred:!0}):t.setSelection(p.start,p.end)},t.onFocus=function(a){var m=t.props.beforeMaskedValueChange,x=t.maskOptions,f=x.mask,k=x.prefix;if(t.focused=!0,t.mounted=!0,f){if(t.value)V(t.maskOptions,t.value)<t.maskOptions.mask.length&&t.setCursorToEnd();else{var j=P(t.maskOptions,k),C=P(t.maskOptions,j),I=V(t.maskOptions,C),D=T(t.maskOptions,I),p={start:D,end:D};if(M(m)){var y=m({value:C,selection:p},{value:t.value,selection:null},null,t.getBeforeMaskedValueChangeConfig());C=y.value,p=y.selection}var $=C!==t.getInputValue();$&&t.setInputValue(C),$&&M(t.props.onChange)&&t.props.onChange(a),t.setSelection(p.start,p.end)}t.runSaveSelectionLoop()}M(t.props.onFocus)&&t.props.onFocus(a)},t.onBlur=function(a){var m=t.props.beforeMaskedValueChange,x=t.maskOptions.mask;if(t.stopSaveSelectionLoop(),t.focused=!1,x&&!t.props.alwaysShowMask&&ee(t.maskOptions,t.value)){var f="";M(m)&&(f=m({value:f,selection:null},{value:t.value,selection:t.previousSelection},null,t.getBeforeMaskedValueChangeConfig()).value);var k=f!==t.getInputValue();k&&t.setInputValue(f),k&&M(t.props.onChange)&&t.props.onChange(a)}M(t.props.onBlur)&&t.props.onBlur(a)},t.onMouseDown=function(a){if(!t.focused&&document.addEventListener){t.mouseDownX=a.clientX,t.mouseDownY=a.clientY,t.mouseDownTime=new Date().getTime();var m=function x(f){if(document.removeEventListener("mouseup",x),t.focused){var k=Math.abs(f.clientX-t.mouseDownX),j=Math.abs(f.clientY-t.mouseDownY),C=Math.max(k,j),I=new Date().getTime()-t.mouseDownTime;(C<=10&&I<=200||C<=5&&I<=300)&&t.setCursorToEnd()}};document.addEventListener("mouseup",m)}M(t.props.onMouseDown)&&t.props.onMouseDown(a)},t.onPaste=function(a){M(t.props.onPaste)&&t.props.onPaste(a),a.defaultPrevented||(t.beforePasteState={value:t.getInputValue(),selection:t.getSelection()},t.setInputValue(""))},t.handleRef=function(a){t.props.children==null&&M(t.props.inputRef)&&t.props.inputRef(a)};var s=n.mask,d=n.maskChar,v=n.formatChars,l=n.alwaysShowMask,c=n.beforeMaskedValueChange,h=n.defaultValue,w=n.value;t.maskOptions=Q(s,d,v),h==null&&(h=""),w==null&&(w=h);var g=N(w);if(t.maskOptions.mask&&(l||g)&&(g=P(t.maskOptions,g),M(c))){var b=n.value;n.value==null&&(b=h),g=c({value:g,selection:null},{value:b=N(b),selection:null},null,t.getBeforeMaskedValueChangeConfig()).value}return t.value=g,t}Ee(o,e);var r=o.prototype;return r.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=Ue(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},r.componentDidUpdate=function(){var n=this.previousSelection,t=this.props,s=t.beforeMaskedValueChange,d=t.alwaysShowMask,v=t.mask,l=t.maskChar,c=t.formatChars,h=this.maskOptions,w=d||this.isFocused(),g=this.props.value!=null,b=g?N(this.props.value):this.value,a=n?n.start:null;if(this.maskOptions=Q(v,l,c),this.maskOptions.mask){!h.mask&&this.isFocused()&&this.runSaveSelectionLoop();var m=this.maskOptions.mask&&this.maskOptions.mask!==h.mask;if(h.mask||g||(b=this.getInputValue()),(m||this.maskOptions.mask&&(b||w))&&(b=P(this.maskOptions,b)),m){var x=V(this.maskOptions,b);(a===null||x<a)&&(a=fe(this.maskOptions,b)?x:T(this.maskOptions,x))}!this.maskOptions.mask||!ee(this.maskOptions,b)||w||g&&this.props.value||(b="");var f={start:a,end:a};if(M(s)){var k=s({value:b,selection:f},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());b=k.value,f=k.selection}this.value=b;var j=this.getInputValue()!==this.value;j?(this.setInputValue(this.value),this.forceUpdate()):m&&this.forceUpdate();var C=!1;f.start!=null&&f.end!=null&&(C=!n||n.start!==f.start||n.end!==f.end),(C||j)&&this.setSelection(f.start,f.end)}else h.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},r.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&_(this.selectionDeferId),this.stopSaveSelectionLoop()},r.render=function(){var n,t=this.props,s=(t.mask,t.alwaysShowMask,t.maskChar,t.formatChars,t.inputRef,t.beforeMaskedValueChange,t.children),d=Be(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(s){M(s)||G(!1);var v=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],l=q({},d);v.forEach(function(h){return delete l[h]}),n=s(l),v.filter(function(h){return n.props[h]!=null&&n.props[h]!==d[h]}).length&&G(!1)}else n=A.createElement("input",q({ref:this.handleRef},d));var c={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(d.disabled||d.readOnly||(c.onChange=this.onChange,c.onPaste=this.onPaste,c.onMouseDown=this.onMouseDown),d.value!=null&&(c.value=this.value)),n=A.cloneElement(n,c)},o}(A.Component),Xe=Ye;ge.exports=Xe;var Ze=ge.exports;const ve=Me(Ze),He=u.form`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: end;
	gap: 10px;
	padding-bottom: 50px;
	@media screen and (min-width: 760px) {
		gap: 18px;
	}
`,W=u.label`
	font-size: 12px;
	display: flex;
	margin-bottom: 8px;
	color: ${({theme:{colors:e}})=>e.label};
	font-weight: 500;
	line-height: 1.29;
	@media screen and (min-width: 760px) {
		font-size: 14px;
	}
`,we=u.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 170px;
	height: 48px;
	border-radius: 14px;
	padding: 14px 18px 14px 18px;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.11;
	border: transparent;
	appearance: none;
	background-color: ${({theme:{colors:e}})=>e.bgInput};
	outline: transparent;
	cursor: pointer;

	svg {
		width: 20px;
		height: 20px;
		fill: transparent;
	}
	@media screen and (min-width: 760px) {
		width: 224px;
		font-size: 18px;
	}
`,Ke=u(we)`
	width: 100px;
	@media screen and (min-width: 760px) {
		width: 224px;
	}
`,ke=u.div`
position: absolute;
top: 52px;
left: 0;
z-index: 10;
width: 224px;
height: 272px;
background-color: white;
border-radius: 14px;
border: 1px solid rgba(18, 20, 23, 0.05);
padding: 14px 8px 14px 18px;
}
`,Ge=u(ke)`
	width: 125px;
	height: 188px;
`,X=u.ul`
	display: flex;
	flex-direction: column;
	gap: 8px;
	height: 100%;
	overflow-x: auto;

	::-webkit-scrollbar {
		position: absolute;
		right: 50px;
		width: 8px; /* Ширина скрола */
	}

	::-webkit-scrollbar-track {
		background: ${({theme:{colors:e}})=>e.white};
		border-radius: 10px; /* Фон треку скрола */
	}

	::-webkit-scrollbar-thumb {
		background: ${({theme:{colors:e}})=>e.scroll}; /* Колір пальця скрола (перетягуючої частини) */
		border-radius: 10px; /* Закруглені кути пальця скрола */
	}

	::-webkit-scrollbar-thumb:hover {
		background: ${({theme:{colors:e}})=>e.accentLight}; /* Колір пальця скрола при наведенні */
	}
`;u(X)``;const ne=u.li`
	color: ${({theme:{colors:e}})=>e.secondaryTextLight};
	cursor: pointer;
	transition: color 300ms
		${({theme:{transition:e}})=>e.timingFunction};
	&:hover {
		color: ${({theme:{colors:e}})=>e.primaryText};
	}
`,Je=u(ve)`
	position: relative;
	background-color: ${({theme:{colors:e}})=>e.bgInput};
	padding: 14px 24px 14px 75px;
	border-color: ${({theme:{colors:e}})=>e.borderInput};
	border-radius: 14px 0px 0px 14px;
	border: transparent;
	border-right-style: solid;
	border-right-width: 1px;
	height: 42px;
	max-width: 160px;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.11;
	outline: transparent;

	@media screen and (min-width: 760px) {
		height: 48px;
		font-size: 18px;
	}
`,oe=u.div`
	position: relative;
`,Qe=u(ve)`
	background-color: ${({theme:{colors:e}})=>e.bgInput};
	border-color: ${({theme:{colors:e}})=>e.borderInput};
	padding: 14px 24px 14px 55px;
	border-radius: 0px 14px 14px 0px;
	border-right: transparent;
	border-top: transparent;
	border-bottom: transparent;
	height: 42px;
	left: 160px;
	width: 160px;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.11;
	outline: transparent;
	@media screen and (min-width: 760px) {
		height: 48px;
		font-size: 18px;
	}
`,ie=u.label`
	position: absolute;
	left: 24px;
	top: 14px;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.11;

	@media screen and (min-width: 760px) {
		height: 48px;
		font-size: 18px;
	}
`,re=u.button`
	width: 136px;
	height: 48px;
	font-weight: 600;
	line-height: 1.43;
	color: ${({theme:{colors:e}})=>e.white};
	border-radius: 12px;
	background: ${({theme:{colors:e}})=>e.accentLight};
	border: transparent;
	transition: background-color 300ms
		${({theme:{transition:e}})=>e.timingFunction};

	&:hover {
		background-color: ${({theme:{colors:e}})=>e.accentDark};
	}
`,se="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3csymbol%20id='down'%20viewBox='0%200%2020%2020'%3e%3cg%20id='chevron-down'%3e%3cpath%20id='Vector'%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='%23121417'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/symbol%3e%3c/svg%3e",ae="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3csymbol%20id='up'%20viewBox='0%200%2020%2020'%3e%3cg%20id='chevron-down'%3e%3cpath%20id='Vector'%20d='M5%2012.5L10%207.5L15%2012.5'%20stroke='%23121417'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/symbol%3e%3c/svg%3e",kt=()=>{const{brandFilter:e,priceFilter:o}=pe(),[r,n]=O.useState(e||"Enter the text"),[t,s]=O.useState(!1),[d,v]=O.useState(!1),[l,c]=O.useState(o||"To $"),[h,w]=O.useState(""),[g,b]=O.useState(""),a=me(),m=p=>{p.preventDefault(),s(y=>!y)},x=p=>{p.preventDefault(),v(y=>!y)},f=p=>{n(p),s(!1)},k=p=>{c(p+" $"),v(!1)},j=p=>{const{value:y}=p.target;w(y.replace(/,/g,""))},C=p=>{const{value:y}=p.target;b(y.replace(/,/g,""))},I=p=>{if(p.preventDefault(),r==="Enter the text"&&l==="To $"&&!h&&!g)return;const y={brand:r==="Enter the text"?"":r,price:l==="To $"?"":`$${parseInt(l,10)}`,mileageFrom:h.trim(),mileageTo:g.trim(),onFilter:!0};a(K(y))},D=p=>{p.preventDefault(),a(K({brand:"",price:"",mileageFrom:"",mileageTo:"",onFilter:!1})),n("Enter the text"),c("To $"),w(""),b("")};return i.jsxs(He,{children:[i.jsxs("div",{children:[i.jsx(W,{children:"Car brand"}),i.jsxs("div",{style:{position:"relative"},children:[i.jsxs(we,{onClick:m,children:[r,t?i.jsx("svg",{children:i.jsx("use",{href:ae+"#up"})}):i.jsx("svg",{children:i.jsx("use",{href:se+"#down"})})]}),t&&i.jsx(ke,{children:i.jsx(X,{children:Fe.map(p=>i.jsx(ne,{onClick:()=>f(p),children:p},p))})})]})]}),i.jsxs("div",{children:[i.jsx(W,{children:"Price/ 1 hour"}),i.jsxs("div",{style:{position:"relative"},children:[i.jsxs(Ke,{onClick:x,children:[l,d?i.jsx("svg",{children:i.jsx("use",{href:ae+"#up"})}):i.jsx("svg",{children:i.jsx("use",{href:se+"#down"})})]}),d&&i.jsx(Ge,{children:i.jsx(X,{children:De.map(p=>i.jsx(ne,{onClick:()=>k(p),children:p},p))})})]})]}),i.jsxs("div",{children:[i.jsx(W,{children:"Сar mileage / km"}),i.jsxs("div",{style:{display:"flex"},children:[i.jsxs(oe,{children:[i.jsx(Je,{type:"text",mask:"9,999",title:"Only number",onChange:j,value:h,id:"mileageFrom"}),i.jsx(ie,{htmlFor:"mileageFrom",children:"From"})]}),i.jsxs(oe,{children:[i.jsx(Qe,{type:"text",mask:"9,999",title:"Only number",onChange:C,value:g,id:"mileageTo"}),i.jsx(ie,{htmlFor:"mileageTo",children:"To"})]})]})]}),i.jsx(re,{onClick:I,children:"Search"}),i.jsx(re,{onClick:D,children:"Reset"})]})},et=u.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 274px;
	position: relative;
	border-radius: 12px;
	transition: box-shadow 300ms
			${({theme:{transition:e}})=>e.timingFunction},
		scale 300ms ${({theme:{transition:e}})=>e.timingFunction};

	&:hover {
		box-shadow: ${({theme:{colors:e}})=>e.shadow};
		scale: 1.04;
	}
`,tt=u.button`
  position: absolute;
  right: 14px;
  top: 14px;
  width: 20px;
  height: 20px;
  display: flex;
  background-color: transparent;
  border: transparent;
  padding: 0;
  justify-content: center;
  align-items: center;

  svg {
    width: 18px;
    height: 18px;
    fill: transparent;
    opacity: 90%;
    stroke: ${({theme:{colors:e}})=>e.white};
    transition: fill 300ms
    ${({theme:{transition:e}})=>e.timingFunction}, stroke 300ms
    ${({theme:{transition:e}})=>e.timingFunction}, scale 300ms
    ${({theme:{transition:e}})=>e.timingFunction};
    &:hover {
      fill: ${({theme:{colors:e}})=>e.accentLight};
      stroke: ${({theme:{colors:e}})=>e.accentLight};
      scale: 1.5;
  }
`,le=u.img`
	margin-bottom: 14px;
	object-fit: cover;
	object-position: center;
	border-radius: 14px;
`,ce=u.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 8px;
`,Z=u.div`
	font-size: 16px;
	font-weight: 500;
	line-height: 1.5;
`,nt=u(Z)`
	font-size: 18px;
`,ot=u(Z)``,de=u.span`
	color: ${({theme:{colors:e}})=>e.accentLight};
`,R=u.ul`
	display: flex;
	flex-wrap: wrap;
`,H=u(R)`
	margin-top: 4px;
`,it=u(H)`
	margin-bottom: 14px;
`,rt=u(H)`
	margin-bottom: 24px;
`,S=u.li`
	font-size: 12px;
	font-weight: 400;
	line-height: 1.5;
	color: ${({theme:{colors:e}})=>e.secondaryText};
	&:not(:last-child) {
		border-right: 2px solid ${({theme:{colors:e}})=>e.line};
		padding-right: 6px;
	}
	&:not(:first-child) {
		padding-left: 6px;
	}
`,st=u.button`
	width: 274px;
	height: 44px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	font-weight: 600;
	line-height: 1.43;
	border-radius: 12px;
	border: transparent;
	background-color: ${({theme:{colors:e}})=>e.accentLight};
	color: ${({theme:{colors:e}})=>e.white};
	transition: background-color 300ms
		${({theme:{transition:e}})=>e.timingFunction};

	&:hover {
		background-color: ${({theme:{colors:e}})=>e.accentDark};
	}
`,at=u.p`
	margin-bottom: 24px;
	text-align: justify;
`,he=u.p`
	margin-bottom: 8px;
	font-weight: 500;
`,lt=u.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`,B=u.li`
	padding: 7px 14px;
	border-radius: 35px;
	font-size: 12px;
	line-height: 1.5;
	background-color: ${({theme:{colors:e}})=>e.bgElements};
`,U=u.span`
	color: ${({theme:{colors:e}})=>e.accentLight};
	font-weight: 600;
	letter-spacing: -0.24px;
`,ct=u.div`
	max-width: 446px;
	height: 200px;
	padding-right: 15px;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 5px; /* Ширина скрола */
	}

	::-webkit-scrollbar-track {
		background: ${({theme:{colors:e}})=>e.secondaryTextLight};
		border-radius: 15px; /* Фон треку скрола */
	}

	::-webkit-scrollbar-thumb {
		background: ${({theme:{colors:e}})=>e.accentLight}; /* Колір пальця скрола (перетягуючої частини) */
		border-radius: 15px; /* Закруглені кути пальця скрола */
	}

	::-webkit-scrollbar-thumb:hover {
		background: ${({theme:{colors:e}})=>e.accentDark}; /* Колір пальця скрола при наведенні */
	}
`,dt=u.a`
	display: flex;
	margin-top: 24px;
	margin-left: auto;
	margin-right: auto;
	width: 140px;
	height: 35px;
	justify-content: center;
	align-items: center;
	color: ${({theme:{colors:e}})=>e.white};
	font-weight: 600;
	border-radius: 12px;
	background-color: ${({theme:{colors:e}})=>e.accentLight};
	transition: background-color 300ms
		${({theme:{transition:e}})=>e.timingFunction};
	&:hover {
		background-color: ${({theme:{colors:e}})=>e.accentDark};
	}
	@media screen and (min-width: 760px) {
		width: 168px;
		height: 44px;
	}
`,ht="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3csymbol%20id='heart'%20viewBox='0%200%2018%2018'%3e%3cg%20id='heart'%3e%3cpath%20id='Vector'%20d='M15.63%203.4575C15.2469%203.07425%2014.7921%202.77023%2014.2915%202.56281C13.7909%202.35539%2013.2543%202.24863%2012.7125%202.24863C12.1706%202.24863%2011.634%202.35539%2011.1334%202.56281C10.6329%202.77023%2010.178%203.07425%209.79497%203.4575L8.99997%204.2525L8.20497%203.4575C7.4312%202.68373%206.38174%202.24903%205.28747%202.24903C4.19319%202.24903%203.14374%202.68373%202.36997%203.4575C1.5962%204.23127%201.1615%205.28072%201.1615%206.375C1.1615%207.46927%201.5962%208.51873%202.36997%209.2925L3.16497%2010.0875L8.99997%2015.9225L14.835%2010.0875L15.63%209.2925C16.0132%208.90943%2016.3172%208.45461%2016.5247%207.95401C16.7321%207.45342%2016.8388%206.91686%2016.8388%206.375C16.8388%205.83313%2016.7321%205.29657%2016.5247%204.79598C16.3172%204.29539%2016.0132%203.84056%2015.63%203.4575Z'%20stroke-opacity='0.8'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/symbol%3e%3c/svg%3e",ut="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3csymbol%20id='heart-fill'%20viewBox='0%200%2018%2018'%3e%3cg%20id='heart'%3e%3cpath%20id='Vector'%20d='M15.63%203.4575C15.2469%203.07425%2014.7921%202.77023%2014.2915%202.56281C13.7909%202.35539%2013.2543%202.24863%2012.7125%202.24863C12.1706%202.24863%2011.634%202.35539%2011.1334%202.56281C10.6329%202.77023%2010.178%203.07425%209.79497%203.4575L8.99997%204.2525L8.20497%203.4575C7.4312%202.68373%206.38174%202.24903%205.28747%202.24903C4.19319%202.24903%203.14374%202.68373%202.36997%203.4575C1.5962%204.23127%201.1615%205.28072%201.1615%206.375C1.1615%207.46927%201.5962%208.51873%202.36997%209.2925L3.16497%2010.0875L8.99997%2015.9225L14.835%2010.0875L15.63%209.2925C16.0132%208.90943%2016.3172%208.45461%2016.5247%207.95401C16.7321%207.45342%2016.8388%206.91686%2016.8388%206.375C16.8388%205.83313%2016.7321%205.29657%2016.5247%204.79598C16.3172%204.29539%2016.0132%203.84056%2015.63%203.4575Z'%20fill='%233470FF'%20stroke='%233470FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/symbol%3e%3c/svg%3e",pt=u.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({theme:{colors:e}})=>e.backdrop};
	z-index: 100;
`,mt=u.div`
	min-width: 280px;
	max-height: 752px;
	padding: 10px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 12px;
	background-color: ${({theme:{colors:e}})=>e.white};
	border-radius: 24px;
	@media screen and (min-width: 760px) {
		max-width: 541px;
		max-height: 752px;
		padding: 40px;
		font-size: 14px;
	}
`,gt=u.button`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 16px;
	right: 16px;
	width: 24px;
	height: 24px;
	padding: 0;
	background-color: rgba(255, 255, 255, 0.6);
	border-radius: 50px;
	border: transparent;

	svg {
		stroke: ${({theme:{colors:e}})=>e.primaryText};
		transition: stroke 300ms
			${({theme:{transition:e}})=>e.timingFunction};
		&:hover {
			stroke: ${({theme:{colors:e}})=>e.accentDark};
		}
	}
	@media screen and (min-width: 760px) {
		background-color: transparent;
	}
`,ft="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3csymbol%20id='close'%20viewBox='0%200%2024%2024'%3e%3cg%20id='x'%3e%3cpath%20id='Vector'%20d='M18%206L6%2018'%20stroke-width='1.8'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_2'%20d='M6%206L18%2018'%20stroke-width='1.8'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/symbol%3e%3c/svg%3e",xt=document.querySelector("#modal-root"),vt=({children:e,onClose:o})=>{O.useEffect(()=>{const t=s=>{s.code==="Escape"&&(o(),document.body.style.overflow="visible")};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[o]);const r=t=>{t.currentTarget===t.target&&(o(),document.body.style.overflow="visible")},n=()=>{o(),document.body.style.overflow="visible"};return document.body.style.overflow="hidden",ue.createPortal(i.jsx(pt,{onClick:r,children:i.jsxs(mt,{children:[i.jsx(gt,{type:"button",onClick:n,children:i.jsx("svg",{width:"24",height:"24",children:i.jsx("use",{href:ft+"#close"})})}),e]})}),xt)},bt=({dataCar:e})=>{const[o,r]=O.useState(!1),{favorite:n}=pe(),t=me(),{id:s,img:d,make:v,model:l,year:c,rentalPrice:h,address:w,rentalCompany:g,type:b,accessories:a,fuelConsumption:m,engineSize:x,description:f,functionalities:k,rentalConditions:j,mileage:C}=e,I=w.split(","),D=I[2],p=I[1],y=a[2],$=j.split(`
`),be=$[0].match(/\d+/),je=()=>{r(!0)},Ce=()=>{r(!1)},ye=F=>{n.some(Se=>Se.id===F.id)?t(Le(F)):t(Ie(F))};return i.jsxs(i.Fragment,{children:[i.jsxs(et,{children:[i.jsxs("div",{children:[i.jsx(tt,{type:"button",onClick:()=>ye(e),"aria-label":"Add to Favorites",children:n.some(F=>F.id===e.id)?i.jsx("svg",{children:i.jsx("use",{href:`${ut}#heart-fill`})}):i.jsx("svg",{children:i.jsx("use",{href:`${ht}#heart`})})}),i.jsx(le,{src:d,alt:`${v} ${l}`,width:"274",height:"268"}),i.jsxs("div",{style:{padding:"0 5px"},children:[i.jsxs(ce,{children:[i.jsxs(Z,{children:[v,i.jsxs(de,{children:[" ",l]}),", ",c]}),i.jsx(ot,{children:h})]}),i.jsxs(R,{children:[i.jsx(S,{children:p}),i.jsx(S,{children:D}),i.jsx(S,{children:g})]}),i.jsxs(H,{children:[i.jsx(S,{children:b}),i.jsx(S,{children:v}),i.jsx(S,{children:s}),i.jsx(S,{children:y})]})]})]}),i.jsx(st,{type:"button",onClick:je,"aria-label":"View full car information",children:"Learn more"})]},d+"333"),o&&i.jsxs(vt,{onClose:Ce,children:[i.jsx(le,{src:d,alt:`${v} ${l}`,width:"461",height:"248"}),i.jsx(ce,{children:i.jsxs(nt,{children:[v,i.jsxs(de,{children:[" ",l]}),", ",c]})}),i.jsxs(ct,{children:[i.jsxs(R,{children:[i.jsx(S,{children:p}),i.jsx(S,{children:D}),i.jsxs(S,{children:["Id: ",s]}),i.jsxs(S,{children:["Year: ",c]}),i.jsx(S,{children:b})]}),i.jsxs(it,{children:[i.jsxs(S,{children:["Fuel consumption: ",m]}),i.jsxs(S,{children:["Engine size: ",x]})]}),i.jsx(at,{children:f}),i.jsx(he,{children:"Accessories and functionalities:"}),i.jsx(R,{children:a.map(F=>i.jsx(S,{children:F},F))}),i.jsx(rt,{children:k.map(F=>i.jsx(S,{children:F},F))}),i.jsx(he,{children:" Rental Conditions:"}),i.jsxs(lt,{children:[i.jsxs(B,{children:["Minimum age: ",i.jsx(U,{children:be[0]})]}),i.jsx(B,{children:$[1]}),i.jsx(B,{children:$[2]}),i.jsxs(B,{children:["Mileage: ",i.jsx(U,{children:C.toLocaleString()})]}),i.jsxs(B,{children:["Price: ",i.jsx(U,{children:h})]})]})]}),i.jsx(dt,{href:"tel:+380730000000",children:"Rental car"})]})]})},jt=u.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 29px 50px;
	margin-bottom: 100px;
	text-align: center;
`,Ct=(e,o,r,n,t)=>e==null?void 0:e.filter(s=>{let d=!0;if(o&&(d=s.make===o),r){const v=r.match(/\$(\d+)/),l=s.rentalPrice.match(/\$(\d+)/),c=v[1],h=l[1];Number(c)>=h||(d=!1)}return n&&(s.mileage>=n||(d=!1)),t&&(s.mileage<=t||(d=!1)),n&&t&&(s.mileage>=n&&s.mileage<=t||(d=!1)),d});export{jt as C,kt as F,bt as a,Ct as g};
