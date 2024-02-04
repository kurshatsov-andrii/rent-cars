import{r as L,i as pe,k as Me,a as h,c as me,b as fe,j as i,s as Z,l as De,m as Fe}from"./index-N6BkWhpn.js";const $e=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],Oe=[10,20,30,40,50,60,70,80];var ge={exports:{}};function Le(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var N=Le(L),Ee=pe;function Pe(e,o){for(var r=Object.getOwnPropertyNames(o),n=0;n<r.length;n++){var t=r[n],s=Object.getOwnPropertyDescriptor(o,t);s&&s.configurable&&e[t]===void 0&&Object.defineProperty(e,t,s)}return e}function H(){return(H=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Be(e,o){e.prototype=Object.create(o.prototype),Pe(e.prototype.constructor=e,o)}function Ve(e,o){if(e==null)return{};var r,n,t={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],0<=o.indexOf(r)||(t[r]=e[r]);return t}function P(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Te=function(e,o,r,n,t,s,d,v){if(!e){var l;if(o===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,t,s,d,v],u=0;(l=new Error(o.replace(/%s/g,function(){return c[u++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}},J=Te;function Q(e,o,r){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=o,e.selectionEnd=r;else{var n=e.createTextRange();n.collapse(!0),n.moveStart("character",o),n.moveEnd("character",r-o),n.select()}}function Re(e){var o=0,r=0;if("selectionStart"in e&&"selectionEnd"in e)o=e.selectionStart,r=e.selectionEnd;else{var n=document.selection.createRange();n.parentElement()===e&&(o=-n.moveStart("character",-e.value.length),r=-n.moveEnd("character",-e.value.length))}return{start:o,end:r,length:r-o}}var ze={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},Ae="_";function ee(e,o,r){var n="",t="",s=null,d=[];if(o===void 0&&(o=Ae),r==null&&(r=ze),!e||typeof e!="string")return{maskChar:o,formatChars:r,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var v=!1;return e.split("").forEach(function(l){v=!v&&l==="\\"||(v||!r[l]?(d.push(n.length),n.length===d.length-1&&(t+=l)):s=n.length+1,n+=l,!1)}),{maskChar:o,formatChars:r,prefix:t,mask:n,lastEditablePosition:s,permanents:d}}function D(e,o){return e.permanents.indexOf(o)!==-1}function A(e,o,r){var n=e.mask,t=e.formatChars;if(!r)return!1;if(D(e,o))return n[o]===r;var s=t[n[o]];return new RegExp(s).test(r)}function te(e,o){return o.split("").every(function(r,n){return D(e,n)||!A(e,n,r)})}function V(e,o){var r=e.maskChar,n=e.prefix;if(!r){for(;o.length>n.length&&D(e,o.length-1);)o=o.slice(0,o.length-1);return o.length}for(var t=n.length,s=o.length;s>=n.length;s--){var d=o[s];if(!D(e,s)&&A(e,s,d)){t=s+1;break}}return t}function xe(e,o){return V(e,o)===e.mask.length}function E(e,o){var r=e.maskChar,n=e.mask,t=e.prefix;if(!r){for((o=Y(e,"",o,0)).length<t.length&&(o=t);o.length<n.length&&D(e,o.length);)o+=n[o.length];return o}if(o)return Y(e,E(e,""),o,0);for(var s=0;s<n.length;s++)D(e,s)?o+=n[s]:o+=r;return o}function Ne(e,o,r,n){var t=r+n,s=e.maskChar,d=e.mask,v=e.prefix,l=o.split("");if(s)return l.map(function(u,w){return w<r||t<=w?u:D(e,w)?d[w]:s}).join("");for(var c=t;c<l.length;c++)D(e,c)&&(l[c]="");return r=Math.max(v.length,r),l.splice(r,t-r),o=l.join(""),E(e,o)}function Y(e,o,r,n){var t=e.mask,s=e.maskChar,d=e.prefix,v=r.split(""),l=xe(e,o);return!s&&n>o.length&&(o+=t.slice(o.length,n)),v.every(function(c){for(;k=c,D(e,f=n)&&k!==t[f];){if(n>=o.length&&(o+=t[n]),u=c,w=n,s&&D(e,w)&&u===s)return!0;if(++n>=t.length)return!1}var u,w,f,k;return!A(e,n,c)&&c!==s||(n<o.length?o=s||l||n<d.length?o.slice(0,n)+c+o.slice(n+1):(o=o.slice(0,n)+c+o.slice(n),E(e,o)):s||(o+=c),++n<t.length)}),o}function _e(e,o,r,n){var t=e.mask,s=e.maskChar,d=r.split(""),v=n;return d.every(function(l){for(;u=l,D(e,c=n)&&u!==t[c];)if(++n>=t.length)return!1;var c,u;return(A(e,n,l)||l===s)&&n++,n<t.length}),n-v}function Ue(e,o){for(var r=o;0<=r;--r)if(!D(e,r))return r;return null}function T(e,o){for(var r=e.mask,n=o;n<r.length;++n)if(!D(e,n))return n;return null}function _(e){return e||e===0?e+"":""}function We(e,o,r,n,t){var s=e.mask,d=e.prefix,v=e.lastEditablePosition,l=o,c="",u=0,w=0,f=Math.min(t.start,r.start);return r.end>t.start?w=(u=_e(e,n,c=l.slice(t.start,r.end),f))?t.length:0:l.length<n.length&&(w=n.length-l.length),l=n,w&&(w===1&&!t.length&&(f=t.start===r.start?T(e,r.start):Ue(e,r.start)),l=Ne(e,l,f,w)),l=Y(e,l,c,f),(f+=u)>=s.length?f=s.length:f<d.length&&!u?f=d.length:f>=d.length&&f<v&&u&&(f=T(e,f)),c||(c=null),{value:l=E(e,l),enteredString:c,selection:{start:f,end:f}}}function qe(){var e=new RegExp("windows","i"),o=new RegExp("phone","i"),r=navigator.userAgent;return e.test(r)&&o.test(r)}function I(e){return typeof e=="function"}function He(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function ve(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function ne(e){return(ve()?He():function(){return setTimeout(e,1e3/60)})(e)}function U(e){(ve()||clearTimeout)(e)}var Ye=function(e){function o(n){var t=e.call(this,n)||this;t.focused=!1,t.mounted=!1,t.previousSelection=null,t.selectionDeferId=null,t.saveSelectionLoopDeferId=null,t.saveSelectionLoop=function(){t.previousSelection=t.getSelection(),t.saveSelectionLoopDeferId=ne(t.saveSelectionLoop)},t.runSaveSelectionLoop=function(){t.saveSelectionLoopDeferId===null&&t.saveSelectionLoop()},t.stopSaveSelectionLoop=function(){t.saveSelectionLoopDeferId!==null&&(U(t.saveSelectionLoopDeferId),t.saveSelectionLoopDeferId=null,t.previousSelection=null)},t.getInputDOMNode=function(){if(!t.mounted)return null;var a=Ee.findDOMNode(P(P(t))),m=typeof window<"u"&&a instanceof window.Element;if(a&&!m)return null;if(a.nodeName!=="INPUT"&&(a=a.querySelector("input")),!a)throw new Error("react-input-mask: inputComponent doesn't contain input node");return a},t.getInputValue=function(){var a=t.getInputDOMNode();return a?a.value:null},t.setInputValue=function(a){var m=t.getInputDOMNode();m&&(t.value=a,m.value=a)},t.setCursorToEnd=function(){var a=V(t.maskOptions,t.value),m=T(t.maskOptions,a);m!==null&&t.setCursorPosition(m)},t.setSelection=function(a,m,x){x===void 0&&(x={});var g=t.getInputDOMNode(),b=t.isFocused();g&&b&&(x.deferred||Q(g,a,m),t.selectionDeferId!==null&&U(t.selectionDeferId),t.selectionDeferId=ne(function(){t.selectionDeferId=null,Q(g,a,m)}),t.previousSelection={start:a,end:m,length:Math.abs(m-a)})},t.getSelection=function(){return Re(t.getInputDOMNode())},t.getCursorPosition=function(){return t.getSelection().start},t.setCursorPosition=function(a){t.setSelection(a,a)},t.isFocused=function(){return t.focused},t.getBeforeMaskedValueChangeConfig=function(){var a=t.maskOptions,m=a.mask,x=a.maskChar,g=a.permanents,b=a.formatChars;return{mask:m,maskChar:x,permanents:g,alwaysShowMask:!!t.props.alwaysShowMask,formatChars:b}},t.isInputAutofilled=function(a,m,x,g){var b=t.getInputDOMNode();try{if(b.matches(":-webkit-autofill"))return!0}catch{}return!t.focused||g.end<x.length&&m.end===a.length},t.onChange=function(a){var m=P(P(t)).beforePasteState,x=P(P(t)).previousSelection,g=t.props.beforeMaskedValueChange,b=t.getInputValue(),j=t.value,y=t.getSelection();t.isInputAutofilled(b,y,j,x)&&(j=E(t.maskOptions,""),x={start:0,end:0,length:0}),m&&(x=m.selection,j=m.value,y={start:x.start+b.length,end:x.start+b.length,length:0},b=j.slice(0,x.start)+b+j.slice(x.end),t.beforePasteState=null);var M=We(t.maskOptions,b,y,j,x),$=M.enteredString,p=M.selection,S=M.value;if(I(g)){var O=g({value:S,selection:p},{value:j,selection:x},$,t.getBeforeMaskedValueChangeConfig());S=O.value,p=O.selection}t.setInputValue(S),I(t.props.onChange)&&t.props.onChange(a),t.isWindowsPhoneBrowser?t.setSelection(p.start,p.end,{deferred:!0}):t.setSelection(p.start,p.end)},t.onFocus=function(a){var m=t.props.beforeMaskedValueChange,x=t.maskOptions,g=x.mask,b=x.prefix;if(t.focused=!0,t.mounted=!0,g){if(t.value)V(t.maskOptions,t.value)<t.maskOptions.mask.length&&t.setCursorToEnd();else{var j=E(t.maskOptions,b),y=E(t.maskOptions,j),M=V(t.maskOptions,y),$=T(t.maskOptions,M),p={start:$,end:$};if(I(m)){var S=m({value:y,selection:p},{value:t.value,selection:null},null,t.getBeforeMaskedValueChangeConfig());y=S.value,p=S.selection}var O=y!==t.getInputValue();O&&t.setInputValue(y),O&&I(t.props.onChange)&&t.props.onChange(a),t.setSelection(p.start,p.end)}t.runSaveSelectionLoop()}I(t.props.onFocus)&&t.props.onFocus(a)},t.onBlur=function(a){var m=t.props.beforeMaskedValueChange,x=t.maskOptions.mask;if(t.stopSaveSelectionLoop(),t.focused=!1,x&&!t.props.alwaysShowMask&&te(t.maskOptions,t.value)){var g="";I(m)&&(g=m({value:g,selection:null},{value:t.value,selection:t.previousSelection},null,t.getBeforeMaskedValueChangeConfig()).value);var b=g!==t.getInputValue();b&&t.setInputValue(g),b&&I(t.props.onChange)&&t.props.onChange(a)}I(t.props.onBlur)&&t.props.onBlur(a)},t.onMouseDown=function(a){if(!t.focused&&document.addEventListener){t.mouseDownX=a.clientX,t.mouseDownY=a.clientY,t.mouseDownTime=new Date().getTime();var m=function x(g){if(document.removeEventListener("mouseup",x),t.focused){var b=Math.abs(g.clientX-t.mouseDownX),j=Math.abs(g.clientY-t.mouseDownY),y=Math.max(b,j),M=new Date().getTime()-t.mouseDownTime;(y<=10&&M<=200||y<=5&&M<=300)&&t.setCursorToEnd()}};document.addEventListener("mouseup",m)}I(t.props.onMouseDown)&&t.props.onMouseDown(a)},t.onPaste=function(a){I(t.props.onPaste)&&t.props.onPaste(a),a.defaultPrevented||(t.beforePasteState={value:t.getInputValue(),selection:t.getSelection()},t.setInputValue(""))},t.handleRef=function(a){t.props.children==null&&I(t.props.inputRef)&&t.props.inputRef(a)};var s=n.mask,d=n.maskChar,v=n.formatChars,l=n.alwaysShowMask,c=n.beforeMaskedValueChange,u=n.defaultValue,w=n.value;t.maskOptions=ee(s,d,v),u==null&&(u=""),w==null&&(w=u);var f=_(w);if(t.maskOptions.mask&&(l||f)&&(f=E(t.maskOptions,f),I(c))){var k=n.value;n.value==null&&(k=u),f=c({value:f,selection:null},{value:k=_(k),selection:null},null,t.getBeforeMaskedValueChangeConfig()).value}return t.value=f,t}Be(o,e);var r=o.prototype;return r.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=qe(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},r.componentDidUpdate=function(){var n=this.previousSelection,t=this.props,s=t.beforeMaskedValueChange,d=t.alwaysShowMask,v=t.mask,l=t.maskChar,c=t.formatChars,u=this.maskOptions,w=d||this.isFocused(),f=this.props.value!=null,k=f?_(this.props.value):this.value,a=n?n.start:null;if(this.maskOptions=ee(v,l,c),this.maskOptions.mask){!u.mask&&this.isFocused()&&this.runSaveSelectionLoop();var m=this.maskOptions.mask&&this.maskOptions.mask!==u.mask;if(u.mask||f||(k=this.getInputValue()),(m||this.maskOptions.mask&&(k||w))&&(k=E(this.maskOptions,k)),m){var x=V(this.maskOptions,k);(a===null||x<a)&&(a=xe(this.maskOptions,k)?x:T(this.maskOptions,x))}!this.maskOptions.mask||!te(this.maskOptions,k)||w||f&&this.props.value||(k="");var g={start:a,end:a};if(I(s)){var b=s({value:k,selection:g},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());k=b.value,g=b.selection}this.value=k;var j=this.getInputValue()!==this.value;j?(this.setInputValue(this.value),this.forceUpdate()):m&&this.forceUpdate();var y=!1;g.start!=null&&g.end!=null&&(y=!n||n.start!==g.start||n.end!==g.end),(y||j)&&this.setSelection(g.start,g.end)}else u.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},r.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&U(this.selectionDeferId),this.stopSaveSelectionLoop()},r.render=function(){var n,t=this.props,s=(t.mask,t.alwaysShowMask,t.maskChar,t.formatChars,t.inputRef,t.beforeMaskedValueChange,t.children),d=Ve(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(s){I(s)||J(!1);var v=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],l=H({},d);v.forEach(function(u){return delete l[u]}),n=s(l),v.filter(function(u){return n.props[u]!=null&&n.props[u]!==d[u]}).length&&J(!1)}else n=N.createElement("input",H({ref:this.handleRef},d));var c={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(d.disabled||d.readOnly||(c.onChange=this.onChange,c.onPaste=this.onPaste,c.onMouseDown=this.onMouseDown),d.value!=null&&(c.value=this.value)),n=N.cloneElement(n,c)},o}(N.Component),Xe=Ye;ge.exports=Xe;var Ge=ge.exports;const we=Me(Ge),Ke=h.form`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: end;
	gap: 10px;
	padding-bottom: 50px;
	@media screen and (min-width: 760px) {
		gap: 18px;
	}
`,W=h.label`
	font-size: 12px;
	display: flex;
	margin-bottom: 8px;
	color: ${({theme:{colors:e}})=>e.label};
	font-weight: 500;
	line-height: 1.29;
	@media screen and (min-width: 760px) {
		font-size: 14px;
	}
`,be=h.div`
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
`,Ze=h(be)`
	width: 100px;
	@media screen and (min-width: 760px) {
		width: 224px;
	}
`,ke=h.div`
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
`,Je=h(ke)`
	width: 125px;
	height: 188px;
`,X=h.ul`
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
`;h(X)``;const oe=h.li`
	color: ${({theme:{colors:e}})=>e.secondaryTextLight};
	cursor: pointer;
	transition: color 300ms
		${({theme:{transition:e}})=>e.timingFunction};
	&:hover {
		color: ${({theme:{colors:e}})=>e.primaryText};
	}
`,Qe=h(we)`
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
`,ie=h.div`
	position: relative;
`,et=h(we)`
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
`,re=h.label`
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
`,se=h.button`
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
`;function tt(){if(typeof window>"u"||typeof document>"u")return()=>{};const e=window._SVG_SPRITE_IDS_=window._SVG_SPRITE_IDS_||[],o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.style.position="absolute",o.style.width="0",o.style.height="0";function r(){document.body.insertBefore(o,document.body.firstChild)}return document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r(),function(t,s){(e.indexOf(s)>-1||document.getElementById(s))&&console.warn(`Icon #${s} was duplicately registered. It must be globally unique.`),e.push(s),o.insertAdjacentHTML("beforeend",t)}}const R=tt();R('<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="icon-iconDown-5c8c96"></symbol>',"icon-iconDown-5c8c96");const ae="icon-iconDown-5c8c96";R('<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="icon-iconUp-5c8c96"></symbol>',"icon-iconUp-5c8c96");const le="icon-iconUp-5c8c96",jt=()=>{const{brandFilter:e,priceFilter:o}=me(),[r,n]=L.useState(e||"Enter the text"),[t,s]=L.useState(!1),[d,v]=L.useState(!1),[l,c]=L.useState(o||"To $"),[u,w]=L.useState(""),[f,k]=L.useState(""),a=fe(),m=p=>{p.preventDefault(),s(S=>!S)},x=p=>{p.preventDefault(),v(S=>!S)},g=p=>{n(p),s(!1)},b=p=>{c(p+" $"),v(!1)},j=p=>{const{value:S}=p.target;w(S.replace(/,/g,""))},y=p=>{const{value:S}=p.target;k(S.replace(/,/g,""))},M=p=>{if(p.preventDefault(),r==="Enter the text"&&l==="To $"&&!u&&!f)return;const S={brand:r==="Enter the text"?"":r,price:l==="To $"?"":`$${parseInt(l,10)}`,mileageFrom:u.trim(),mileageTo:f.trim(),onFilter:!0};a(Z(S))},$=p=>{p.preventDefault(),a(Z({brand:"",price:"",mileageFrom:"",mileageTo:"",onFilter:!1})),n("Enter the text"),c("To $"),w(""),k("")};return i.jsxs(Ke,{children:[i.jsxs("div",{children:[i.jsx(W,{children:"Car brand"}),i.jsxs("div",{style:{position:"relative"},children:[i.jsxs(be,{onClick:m,children:[r,t?i.jsx("svg",{children:i.jsx("use",{href:le+"#up"})}):i.jsx("svg",{children:i.jsx("use",{href:ae+"#down"})})]}),t&&i.jsx(ke,{children:i.jsx(X,{children:$e.map(p=>i.jsx(oe,{onClick:()=>g(p),children:p},p))})})]})]}),i.jsxs("div",{children:[i.jsx(W,{children:"Price/ 1 hour"}),i.jsxs("div",{style:{position:"relative"},children:[i.jsxs(Ze,{onClick:x,children:[l,d?i.jsx("svg",{children:i.jsx("use",{href:le+"#up"})}):i.jsx("svg",{children:i.jsx("use",{href:ae+"#down"})})]}),d&&i.jsx(Je,{children:i.jsx(X,{children:Oe.map(p=>i.jsx(oe,{onClick:()=>b(p),children:p},p))})})]})]}),i.jsxs("div",{children:[i.jsx(W,{children:"Сar mileage / km"}),i.jsxs("div",{style:{display:"flex"},children:[i.jsxs(ie,{children:[i.jsx(Qe,{type:"text",mask:"9,999",title:"Only number",onChange:j,value:u,id:"mileageFrom"}),i.jsx(re,{htmlFor:"mileageFrom",children:"From"})]}),i.jsxs(ie,{children:[i.jsx(et,{type:"text",mask:"9,999",title:"Only number",onChange:y,value:f,id:"mileageTo"}),i.jsx(re,{htmlFor:"mileageTo",children:"To"})]})]})]}),i.jsx(se,{onClick:M,children:"Search"}),i.jsx(se,{onClick:$,children:"Reset"})]})},nt=h.li`
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
`,ot=h.button`
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
`,ce=h.img`
	margin-bottom: 14px;
	object-fit: cover;
	object-position: center;
	border-radius: 14px;
`,de=h.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 8px;
`,G=h.div`
	font-size: 16px;
	font-weight: 500;
	line-height: 1.5;
`,it=h(G)`
	font-size: 18px;
`,rt=h(G)``,ue=h.span`
	color: ${({theme:{colors:e}})=>e.accentLight};
`,z=h.ul`
	display: flex;
	flex-wrap: wrap;
`,K=h(z)`
	margin-top: 4px;
`,st=h(K)`
	margin-bottom: 14px;
`,at=h(K)`
	margin-bottom: 24px;
`,C=h.li`
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
`,lt=h.button`
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
`,ct=h.p`
	margin-bottom: 24px;
	text-align: justify;
`,he=h.p`
	margin-bottom: 8px;
	font-weight: 500;
`,dt=h.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`,B=h.li`
	padding: 7px 14px;
	border-radius: 35px;
	font-size: 12px;
	line-height: 1.5;
	background-color: ${({theme:{colors:e}})=>e.bgElements};
`,q=h.span`
	color: ${({theme:{colors:e}})=>e.accentLight};
	font-weight: 600;
	letter-spacing: -0.24px;
`,ut=h.div`
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
`,ht=h.a`
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
`;R('<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" id="icon-heart-37c0f0"></symbol>',"icon-heart-37c0f0");const pt="icon-heart-37c0f0";R('<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" id="icon-heartFill-37c0f0"></symbol>',"icon-heartFill-37c0f0");const mt="icon-heartFill-37c0f0",ft=h.div`
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
`,gt=h.div`
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
`,xt=h.button`
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
`;R('<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="icon-close-a02ab9"></symbol>',"icon-close-a02ab9");const vt="icon-close-a02ab9",wt=document.querySelector("#modal-root"),bt=({children:e,onClose:o})=>{L.useEffect(()=>{const t=s=>{s.code==="Escape"&&(o(),document.body.style.overflow="visible")};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[o]);const r=t=>{t.currentTarget===t.target&&(o(),document.body.style.overflow="visible")},n=()=>{o(),document.body.style.overflow="visible"};return document.body.style.overflow="hidden",pe.createPortal(i.jsx(ft,{onClick:r,children:i.jsxs(gt,{children:[i.jsx(xt,{type:"button",onClick:n,children:i.jsx("svg",{width:"24",height:"24",children:i.jsx("use",{href:vt+"#close"})})}),e]})}),wt)},yt=({dataCar:e})=>{const[o,r]=L.useState(!1),{favorite:n}=me(),t=fe(),{id:s,img:d,make:v,model:l,year:c,rentalPrice:u,address:w,rentalCompany:f,type:k,accessories:a,fuelConsumption:m,engineSize:x,description:g,functionalities:b,rentalConditions:j,mileage:y}=e,M=w.split(","),$=M[2],p=M[1],S=a[2],O=j.split(`
`),je=O[0].match(/\d+/),ye=()=>{r(!0)},Se=()=>{r(!1)},Ce=F=>{n.some(Ie=>Ie.id===F.id)?t(Fe(F)):t(De(F))};return i.jsxs(i.Fragment,{children:[i.jsxs(nt,{children:[i.jsxs("div",{children:[i.jsx(ot,{type:"button",onClick:()=>Ce(e),"aria-label":"Add to Favorites",children:n.some(F=>F.id===e.id)?i.jsx("svg",{children:i.jsx("use",{xlinkHref:`${mt}#heart-fill`})}):i.jsx("svg",{children:i.jsx("use",{xlinkHref:`${pt}#heart`})})}),i.jsx(ce,{src:d,alt:`${v} ${l}`,width:"274",height:"268"}),i.jsxs("div",{style:{padding:"0 5px"},children:[i.jsxs(de,{children:[i.jsxs(G,{children:[v,i.jsxs(ue,{children:[" ",l]}),", ",c]}),i.jsx(rt,{children:u})]}),i.jsxs(z,{children:[i.jsx(C,{children:p}),i.jsx(C,{children:$}),i.jsx(C,{children:f})]}),i.jsxs(K,{children:[i.jsx(C,{children:k}),i.jsx(C,{children:v}),i.jsx(C,{children:s}),i.jsx(C,{children:S})]})]})]}),i.jsx(lt,{type:"button",onClick:ye,"aria-label":"View full car information",children:"Learn more"})]},d+"333"),o&&i.jsxs(bt,{onClose:Se,children:[i.jsx(ce,{src:d,alt:`${v} ${l}`,width:"461",height:"248"}),i.jsx(de,{children:i.jsxs(it,{children:[v,i.jsxs(ue,{children:[" ",l]}),", ",c]})}),i.jsxs(ut,{children:[i.jsxs(z,{children:[i.jsx(C,{children:p}),i.jsx(C,{children:$}),i.jsxs(C,{children:["Id: ",s]}),i.jsxs(C,{children:["Year: ",c]}),i.jsx(C,{children:k})]}),i.jsxs(st,{children:[i.jsxs(C,{children:["Fuel consumption: ",m]}),i.jsxs(C,{children:["Engine size: ",x]})]}),i.jsx(ct,{children:g}),i.jsx(he,{children:"Accessories and functionalities:"}),i.jsx(z,{children:a.map(F=>i.jsx(C,{children:F},F))}),i.jsx(at,{children:b.map(F=>i.jsx(C,{children:F},F))}),i.jsx(he,{children:" Rental Conditions:"}),i.jsxs(dt,{children:[i.jsxs(B,{children:["Minimum age: ",i.jsx(q,{children:je[0]})]}),i.jsx(B,{children:O[1]}),i.jsx(B,{children:O[2]}),i.jsxs(B,{children:["Mileage: ",i.jsx(q,{children:y.toLocaleString()})]}),i.jsxs(B,{children:["Price: ",i.jsx(q,{children:u})]})]})]}),i.jsx(ht,{href:"tel:+380730000000",children:"Rental car"})]})]})},St=h.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 29px 50px;
	margin-bottom: 100px;
	text-align: center;
`,Ct=(e,o,r,n,t)=>e==null?void 0:e.filter(s=>{let d=!0;if(o&&(d=s.make===o),r){const v=r.match(/\$(\d+)/),l=s.rentalPrice.match(/\$(\d+)/),c=v[1],u=l[1];Number(c)>=u||(d=!1)}return n&&(s.mileage>=n||(d=!1)),t&&(s.mileage<=t||(d=!1)),n&&t&&(s.mileage>=n&&s.mileage<=t||(d=!1)),d});export{St as C,jt as F,yt as a,Ct as g};
