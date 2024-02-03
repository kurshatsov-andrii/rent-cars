import{r as $,i as ye,k as Me,a as m,c as de,b as pe,j as o,s as K,l as Ie,m as Le}from"./index-roNy6RbM.js";const Fe=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],De=[20,30,40,50,60,70,80];var me={exports:{}};function Oe(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var A=Oe($),$e=ye;function Pe(e,i){for(var r=Object.getOwnPropertyNames(i),n=0;n<r.length;n++){var t=r[n],s=Object.getOwnPropertyDescriptor(i,t);s&&s.configurable&&e[t]===void 0&&Object.defineProperty(e,t,s)}return e}function q(){return(q=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ee(e,i){e.prototype=Object.create(i.prototype),Pe(e.prototype.constructor=e,i)}function Ve(e,i){if(e==null)return{};var r,n,t={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],0<=i.indexOf(r)||(t[r]=e[r]);return t}function E(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Be=function(e,i,r,n,t,s,h,v){if(!e){var l;if(i===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,t,s,h,v],u=0;(l=new Error(i.replace(/%s/g,function(){return c[u++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}},G=Be;function J(e,i,r){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=i,e.selectionEnd=r;else{var n=e.createTextRange();n.collapse(!0),n.moveStart("character",i),n.moveEnd("character",r-i),n.select()}}function Te(e){var i=0,r=0;if("selectionStart"in e&&"selectionEnd"in e)i=e.selectionStart,r=e.selectionEnd;else{var n=document.selection.createRange();n.parentElement()===e&&(i=-n.moveStart("character",-e.value.length),r=-n.moveEnd("character",-e.value.length))}return{start:i,end:r,length:r-i}}var Re={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},ze="_";function Q(e,i,r){var n="",t="",s=null,h=[];if(i===void 0&&(i=ze),r==null&&(r=Re),!e||typeof e!="string")return{maskChar:i,formatChars:r,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var v=!1;return e.split("").forEach(function(l){v=!v&&l==="\\"||(v||!r[l]?(h.push(n.length),n.length===h.length-1&&(t+=l)):s=n.length+1,n+=l,!1)}),{maskChar:i,formatChars:r,prefix:t,mask:n,lastEditablePosition:s,permanents:h}}function L(e,i){return e.permanents.indexOf(i)!==-1}function z(e,i,r){var n=e.mask,t=e.formatChars;if(!r)return!1;if(L(e,i))return n[i]===r;var s=t[n[i]];return new RegExp(s).test(r)}function ee(e,i){return i.split("").every(function(r,n){return L(e,n)||!z(e,n,r)})}function B(e,i){var r=e.maskChar,n=e.prefix;if(!r){for(;i.length>n.length&&L(e,i.length-1);)i=i.slice(0,i.length-1);return i.length}for(var t=n.length,s=i.length;s>=n.length;s--){var h=i[s];if(!L(e,s)&&z(e,s,h)){t=s+1;break}}return t}function ge(e,i){return B(e,i)===e.mask.length}function P(e,i){var r=e.maskChar,n=e.mask,t=e.prefix;if(!r){for((i=Y(e,"",i,0)).length<t.length&&(i=t);i.length<n.length&&L(e,i.length);)i+=n[i.length];return i}if(i)return Y(e,P(e,""),i,0);for(var s=0;s<n.length;s++)L(e,s)?i+=n[s]:i+=r;return i}function Ae(e,i,r,n){var t=r+n,s=e.maskChar,h=e.mask,v=e.prefix,l=i.split("");if(s)return l.map(function(u,w){return w<r||t<=w?u:L(e,w)?h[w]:s}).join("");for(var c=t;c<l.length;c++)L(e,c)&&(l[c]="");return r=Math.max(v.length,r),l.splice(r,t-r),i=l.join(""),P(e,i)}function Y(e,i,r,n){var t=e.mask,s=e.maskChar,h=e.prefix,v=r.split(""),l=ge(e,i);return!s&&n>i.length&&(i+=t.slice(i.length,n)),v.every(function(c){for(;b=c,L(e,g=n)&&b!==t[g];){if(n>=i.length&&(i+=t[n]),u=c,w=n,s&&L(e,w)&&u===s)return!0;if(++n>=t.length)return!1}var u,w,g,b;return!z(e,n,c)&&c!==s||(n<i.length?i=s||l||n<h.length?i.slice(0,n)+c+i.slice(n+1):(i=i.slice(0,n)+c+i.slice(n),P(e,i)):s||(i+=c),++n<t.length)}),i}function Ne(e,i,r,n){var t=e.mask,s=e.maskChar,h=r.split(""),v=n;return h.every(function(l){for(;u=l,L(e,c=n)&&u!==t[c];)if(++n>=t.length)return!1;var c,u;return(z(e,n,l)||l===s)&&n++,n<t.length}),n-v}function _e(e,i){for(var r=i;0<=r;--r)if(!L(e,r))return r;return null}function T(e,i){for(var r=e.mask,n=i;n<r.length;++n)if(!L(e,n))return n;return null}function N(e){return e||e===0?e+"":""}function We(e,i,r,n,t){var s=e.mask,h=e.prefix,v=e.lastEditablePosition,l=i,c="",u=0,w=0,g=Math.min(t.start,r.start);return r.end>t.start?w=(u=Ne(e,n,c=l.slice(t.start,r.end),g))?t.length:0:l.length<n.length&&(w=n.length-l.length),l=n,w&&(w===1&&!t.length&&(g=t.start===r.start?T(e,r.start):_e(e,r.start)),l=Ae(e,l,g,w)),l=Y(e,l,c,g),(g+=u)>=s.length?g=s.length:g<h.length&&!u?g=h.length:g>=h.length&&g<v&&u&&(g=T(e,g)),c||(c=null),{value:l=P(e,l),enteredString:c,selection:{start:g,end:g}}}function Ue(){var e=new RegExp("windows","i"),i=new RegExp("phone","i"),r=navigator.userAgent;return e.test(r)&&i.test(r)}function M(e){return typeof e=="function"}function qe(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function fe(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function te(e){return(fe()?qe():function(){return setTimeout(e,1e3/60)})(e)}function _(e){(fe()||clearTimeout)(e)}var Ye=function(e){function i(n){var t=e.call(this,n)||this;t.focused=!1,t.mounted=!1,t.previousSelection=null,t.selectionDeferId=null,t.saveSelectionLoopDeferId=null,t.saveSelectionLoop=function(){t.previousSelection=t.getSelection(),t.saveSelectionLoopDeferId=te(t.saveSelectionLoop)},t.runSaveSelectionLoop=function(){t.saveSelectionLoopDeferId===null&&t.saveSelectionLoop()},t.stopSaveSelectionLoop=function(){t.saveSelectionLoopDeferId!==null&&(_(t.saveSelectionLoopDeferId),t.saveSelectionLoopDeferId=null,t.previousSelection=null)},t.getInputDOMNode=function(){if(!t.mounted)return null;var a=$e.findDOMNode(E(E(t))),p=typeof window<"u"&&a instanceof window.Element;if(a&&!p)return null;if(a.nodeName!=="INPUT"&&(a=a.querySelector("input")),!a)throw new Error("react-input-mask: inputComponent doesn't contain input node");return a},t.getInputValue=function(){var a=t.getInputDOMNode();return a?a.value:null},t.setInputValue=function(a){var p=t.getInputDOMNode();p&&(t.value=a,p.value=a)},t.setCursorToEnd=function(){var a=B(t.maskOptions,t.value),p=T(t.maskOptions,a);p!==null&&t.setCursorPosition(p)},t.setSelection=function(a,p,x){x===void 0&&(x={});var f=t.getInputDOMNode(),k=t.isFocused();f&&k&&(x.deferred||J(f,a,p),t.selectionDeferId!==null&&_(t.selectionDeferId),t.selectionDeferId=te(function(){t.selectionDeferId=null,J(f,a,p)}),t.previousSelection={start:a,end:p,length:Math.abs(p-a)})},t.getSelection=function(){return Te(t.getInputDOMNode())},t.getCursorPosition=function(){return t.getSelection().start},t.setCursorPosition=function(a){t.setSelection(a,a)},t.isFocused=function(){return t.focused},t.getBeforeMaskedValueChangeConfig=function(){var a=t.maskOptions,p=a.mask,x=a.maskChar,f=a.permanents,k=a.formatChars;return{mask:p,maskChar:x,permanents:f,alwaysShowMask:!!t.props.alwaysShowMask,formatChars:k}},t.isInputAutofilled=function(a,p,x,f){var k=t.getInputDOMNode();try{if(k.matches(":-webkit-autofill"))return!0}catch{}return!t.focused||f.end<x.length&&p.end===a.length},t.onChange=function(a){var p=E(E(t)).beforePasteState,x=E(E(t)).previousSelection,f=t.props.beforeMaskedValueChange,k=t.getInputValue(),j=t.value,C=t.getSelection();t.isInputAutofilled(k,C,j,x)&&(j=P(t.maskOptions,""),x={start:0,end:0,length:0}),p&&(x=p.selection,j=p.value,C={start:x.start+k.length,end:x.start+k.length,length:0},k=j.slice(0,x.start)+k+j.slice(x.end),t.beforePasteState=null);var I=We(t.maskOptions,k,C,j,x),D=I.enteredString,d=I.selection,S=I.value;if(M(f)){var O=f({value:S,selection:d},{value:j,selection:x},D,t.getBeforeMaskedValueChangeConfig());S=O.value,d=O.selection}t.setInputValue(S),M(t.props.onChange)&&t.props.onChange(a),t.isWindowsPhoneBrowser?t.setSelection(d.start,d.end,{deferred:!0}):t.setSelection(d.start,d.end)},t.onFocus=function(a){var p=t.props.beforeMaskedValueChange,x=t.maskOptions,f=x.mask,k=x.prefix;if(t.focused=!0,t.mounted=!0,f){if(t.value)B(t.maskOptions,t.value)<t.maskOptions.mask.length&&t.setCursorToEnd();else{var j=P(t.maskOptions,k),C=P(t.maskOptions,j),I=B(t.maskOptions,C),D=T(t.maskOptions,I),d={start:D,end:D};if(M(p)){var S=p({value:C,selection:d},{value:t.value,selection:null},null,t.getBeforeMaskedValueChangeConfig());C=S.value,d=S.selection}var O=C!==t.getInputValue();O&&t.setInputValue(C),O&&M(t.props.onChange)&&t.props.onChange(a),t.setSelection(d.start,d.end)}t.runSaveSelectionLoop()}M(t.props.onFocus)&&t.props.onFocus(a)},t.onBlur=function(a){var p=t.props.beforeMaskedValueChange,x=t.maskOptions.mask;if(t.stopSaveSelectionLoop(),t.focused=!1,x&&!t.props.alwaysShowMask&&ee(t.maskOptions,t.value)){var f="";M(p)&&(f=p({value:f,selection:null},{value:t.value,selection:t.previousSelection},null,t.getBeforeMaskedValueChangeConfig()).value);var k=f!==t.getInputValue();k&&t.setInputValue(f),k&&M(t.props.onChange)&&t.props.onChange(a)}M(t.props.onBlur)&&t.props.onBlur(a)},t.onMouseDown=function(a){if(!t.focused&&document.addEventListener){t.mouseDownX=a.clientX,t.mouseDownY=a.clientY,t.mouseDownTime=new Date().getTime();var p=function x(f){if(document.removeEventListener("mouseup",x),t.focused){var k=Math.abs(f.clientX-t.mouseDownX),j=Math.abs(f.clientY-t.mouseDownY),C=Math.max(k,j),I=new Date().getTime()-t.mouseDownTime;(C<=10&&I<=200||C<=5&&I<=300)&&t.setCursorToEnd()}};document.addEventListener("mouseup",p)}M(t.props.onMouseDown)&&t.props.onMouseDown(a)},t.onPaste=function(a){M(t.props.onPaste)&&t.props.onPaste(a),a.defaultPrevented||(t.beforePasteState={value:t.getInputValue(),selection:t.getSelection()},t.setInputValue(""))},t.handleRef=function(a){t.props.children==null&&M(t.props.inputRef)&&t.props.inputRef(a)};var s=n.mask,h=n.maskChar,v=n.formatChars,l=n.alwaysShowMask,c=n.beforeMaskedValueChange,u=n.defaultValue,w=n.value;t.maskOptions=Q(s,h,v),u==null&&(u=""),w==null&&(w=u);var g=N(w);if(t.maskOptions.mask&&(l||g)&&(g=P(t.maskOptions,g),M(c))){var b=n.value;n.value==null&&(b=u),g=c({value:g,selection:null},{value:b=N(b),selection:null},null,t.getBeforeMaskedValueChangeConfig()).value}return t.value=g,t}Ee(i,e);var r=i.prototype;return r.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=Ue(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},r.componentDidUpdate=function(){var n=this.previousSelection,t=this.props,s=t.beforeMaskedValueChange,h=t.alwaysShowMask,v=t.mask,l=t.maskChar,c=t.formatChars,u=this.maskOptions,w=h||this.isFocused(),g=this.props.value!=null,b=g?N(this.props.value):this.value,a=n?n.start:null;if(this.maskOptions=Q(v,l,c),this.maskOptions.mask){!u.mask&&this.isFocused()&&this.runSaveSelectionLoop();var p=this.maskOptions.mask&&this.maskOptions.mask!==u.mask;if(u.mask||g||(b=this.getInputValue()),(p||this.maskOptions.mask&&(b||w))&&(b=P(this.maskOptions,b)),p){var x=B(this.maskOptions,b);(a===null||x<a)&&(a=ge(this.maskOptions,b)?x:T(this.maskOptions,x))}!this.maskOptions.mask||!ee(this.maskOptions,b)||w||g&&this.props.value||(b="");var f={start:a,end:a};if(M(s)){var k=s({value:b,selection:f},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());b=k.value,f=k.selection}this.value=b;var j=this.getInputValue()!==this.value;j?(this.setInputValue(this.value),this.forceUpdate()):p&&this.forceUpdate();var C=!1;f.start!=null&&f.end!=null&&(C=!n||n.start!==f.start||n.end!==f.end),(C||j)&&this.setSelection(f.start,f.end)}else u.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},r.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&_(this.selectionDeferId),this.stopSaveSelectionLoop()},r.render=function(){var n,t=this.props,s=(t.mask,t.alwaysShowMask,t.maskChar,t.formatChars,t.inputRef,t.beforeMaskedValueChange,t.children),h=Ve(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(s){M(s)||G(!1);var v=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],l=q({},h);v.forEach(function(u){return delete l[u]}),n=s(l),v.filter(function(u){return n.props[u]!=null&&n.props[u]!==h[u]}).length&&G(!1)}else n=A.createElement("input",q({ref:this.handleRef},h));var c={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(h.disabled||h.readOnly||(c.onChange=this.onChange,c.onPaste=this.onPaste,c.onMouseDown=this.onMouseDown),h.value!=null&&(c.value=this.value)),n=A.cloneElement(n,c)},i}(A.Component),Xe=Ye;me.exports=Xe;var Ze=me.exports;const xe=Me(Ze),He=m.form`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: end;
	gap: 10px;
	padding-bottom: 50px;
	@media screen and (min-width: 760px) {
		gap: 18px;
	}
`,W=m.label`
	font-size: 12px;
	display: flex;
	margin-bottom: 8px;
	color: ${({theme:{colors:e}})=>e.label};
	font-weight: 500;
	line-height: 1.29;
	@media screen and (min-width: 760px) {
		font-size: 14px;
	}
`,ve=m.div`
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
`,Ke=m(ve)`
	width: 100px;
	@media screen and (min-width: 760px) {
		width: 224px;
	}
`,we=m.div`
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
`,Ge=m(we)`
	width: 125px;
	height: 188px;
`,X=m.ul`
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
`;m(X)``;const ne=m.li`
	color: ${({theme:{colors:e}})=>e.secondaryTextLight};
	cursor: pointer;
	transition: color 300ms
		${({theme:{transition:e}})=>e.timingFunction};
	&:hover {
		color: ${({theme:{colors:e}})=>e.primaryText};
	}
`,Je=m(xe)`
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
`,ie=m.div`
	position: relative;
`,Qe=m(xe)`
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
`,oe=m.label`
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
`,re=m.button`
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
`,se="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3csymbol%20id='down'%20viewBox='0%200%2020%2020'%3e%3cg%20id='chevron-down'%3e%3cpath%20id='Vector'%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='%23121417'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/symbol%3e%3c/svg%3e",ae="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3csymbol%20id='up'%20viewBox='0%200%2020%2020'%3e%3cg%20id='chevron-down'%3e%3cpath%20id='Vector'%20d='M5%2012.5L10%207.5L15%2012.5'%20stroke='%23121417'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/symbol%3e%3c/svg%3e",gt=()=>{const{brandFilter:e,priceFilter:i}=de(),[r,n]=$.useState(e||"Enter the text"),[t,s]=$.useState(!1),[h,v]=$.useState(!1),[l,c]=$.useState(i||"To $"),[u,w]=$.useState(""),[g,b]=$.useState(""),a=pe(),p=d=>{d.preventDefault(),s(S=>!S)},x=d=>{d.preventDefault(),v(S=>!S)},f=d=>{n(d),s(!1)},k=d=>{c(d+" $"),v(!1)},j=d=>{const{value:S}=d.target;w(S.replace(/,/g,""))},C=d=>{const{value:S}=d.target;b(S.replace(/,/g,""))},I=d=>{if(d.preventDefault(),r==="Enter the text"&&l==="To $"&&!u&&!g)return;const S={brand:r==="Enter the text"?"":r,price:l==="To $"?"":`$${parseInt(l,10)}`,mileageFrom:u.trim(),mileageTo:g.trim(),onFilter:!0};a(K(S))},D=d=>{d.preventDefault(),a(K({brand:"",price:"",mileageFrom:"",mileageTo:"",onFilter:!1})),n("Enter the text"),c("To $"),w(""),b("")};return o.jsxs(He,{children:[o.jsxs("div",{children:[o.jsx(W,{children:"Car brand"}),o.jsxs("div",{style:{position:"relative"},children:[o.jsxs(ve,{onClick:p,children:[r,t?o.jsx("svg",{children:o.jsx("use",{href:ae+"#up"})}):o.jsx("svg",{children:o.jsx("use",{href:se+"#down"})})]}),t&&o.jsx(we,{children:o.jsx(X,{children:Fe.map(d=>o.jsx(ne,{onClick:()=>f(d),children:d},d))})})]})]}),o.jsxs("div",{children:[o.jsx(W,{children:"Price/ 1 hour"}),o.jsxs("div",{style:{position:"relative"},children:[o.jsxs(Ke,{onClick:x,children:[l,h?o.jsx("svg",{children:o.jsx("use",{href:ae+"#up"})}):o.jsx("svg",{children:o.jsx("use",{href:se+"#down"})})]}),h&&o.jsx(Ge,{children:o.jsx(X,{children:De.map(d=>o.jsx(ne,{onClick:()=>k(d),children:d},d))})})]})]}),o.jsxs("div",{children:[o.jsx(W,{children:"Сar mileage / km"}),o.jsxs("div",{style:{display:"flex"},children:[o.jsxs(ie,{children:[o.jsx(Je,{type:"text",mask:"9,999",title:"Only number",onChange:j,value:u,id:"mileageFrom"}),o.jsx(oe,{htmlFor:"mileageFrom",children:"From"})]}),o.jsxs(ie,{children:[o.jsx(Qe,{type:"text",mask:"9,999",title:"Only number",onChange:C,value:g,id:"mileageTo"}),o.jsx(oe,{htmlFor:"mileageTo",children:"To"})]})]})]}),o.jsx(re,{onClick:I,children:"Search"}),o.jsx(re,{onClick:D,children:"Reset"})]})},et=m.li`
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
`,tt=m.button`
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
`,le=m.img`
	margin-bottom: 14px;
	object-fit: cover;
	object-position: center;
	border-radius: 14px;
`,ce=m.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 8px;
`,Z=m.div`
	font-size: 16px;
	font-weight: 500;
	line-height: 1.5;
`,nt=m(Z)`
	font-size: 18px;
`,it=m(Z)``,he=m.span`
	color: ${({theme:{colors:e}})=>e.accentLight};
`,R=m.ul`
	display: flex;
	flex-wrap: wrap;
`,H=m(R)`
	margin-top: 4px;
`,ot=m(H)`
	margin-bottom: 14px;
`,rt=m(H)`
	margin-bottom: 24px;
`,y=m.li`
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
`,st=m.button`
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
`,at=m.p`
	margin-bottom: 24px;
	text-align: justify;
`,ue=m.p`
	margin-bottom: 8px;
	font-weight: 500;
`,lt=m.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`,V=m.li`
	padding: 7px 14px;
	border-radius: 35px;
	font-size: 12px;
	line-height: 1.5;
	background-color: ${({theme:{colors:e}})=>e.bgElements};
`,U=m.span`
	color: ${({theme:{colors:e}})=>e.accentLight};
	font-weight: 600;
	letter-spacing: -0.24px;
`,ct=m.div`
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
`,ht=m.a`
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
`,ut="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3csymbol%20id='heart'%20viewBox='0%200%2018%2018'%3e%3cg%20id='heart'%3e%3cpath%20id='Vector'%20d='M15.63%203.4575C15.2469%203.07425%2014.7921%202.77023%2014.2915%202.56281C13.7909%202.35539%2013.2543%202.24863%2012.7125%202.24863C12.1706%202.24863%2011.634%202.35539%2011.1334%202.56281C10.6329%202.77023%2010.178%203.07425%209.79497%203.4575L8.99997%204.2525L8.20497%203.4575C7.4312%202.68373%206.38174%202.24903%205.28747%202.24903C4.19319%202.24903%203.14374%202.68373%202.36997%203.4575C1.5962%204.23127%201.1615%205.28072%201.1615%206.375C1.1615%207.46927%201.5962%208.51873%202.36997%209.2925L3.16497%2010.0875L8.99997%2015.9225L14.835%2010.0875L15.63%209.2925C16.0132%208.90943%2016.3172%208.45461%2016.5247%207.95401C16.7321%207.45342%2016.8388%206.91686%2016.8388%206.375C16.8388%205.83313%2016.7321%205.29657%2016.5247%204.79598C16.3172%204.29539%2016.0132%203.84056%2015.63%203.4575Z'%20stroke-opacity='0.8'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/symbol%3e%3c/svg%3e",dt="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3csymbol%20id='heart-fill'%20viewBox='0%200%2018%2018'%3e%3cg%20id='heart'%3e%3cpath%20id='Vector'%20d='M15.63%203.4575C15.2469%203.07425%2014.7921%202.77023%2014.2915%202.56281C13.7909%202.35539%2013.2543%202.24863%2012.7125%202.24863C12.1706%202.24863%2011.634%202.35539%2011.1334%202.56281C10.6329%202.77023%2010.178%203.07425%209.79497%203.4575L8.99997%204.2525L8.20497%203.4575C7.4312%202.68373%206.38174%202.24903%205.28747%202.24903C4.19319%202.24903%203.14374%202.68373%202.36997%203.4575C1.5962%204.23127%201.1615%205.28072%201.1615%206.375C1.1615%207.46927%201.5962%208.51873%202.36997%209.2925L3.16497%2010.0875L8.99997%2015.9225L14.835%2010.0875L15.63%209.2925C16.0132%208.90943%2016.3172%208.45461%2016.5247%207.95401C16.7321%207.45342%2016.8388%206.91686%2016.8388%206.375C16.8388%205.83313%2016.7321%205.29657%2016.5247%204.79598C16.3172%204.29539%2016.0132%203.84056%2015.63%203.4575Z'%20fill='%233470FF'%20stroke='%233470FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/symbol%3e%3c/svg%3e",pt=({onClose:e})=>{$.useEffect(()=>{const i=r=>{r.code==="Escape"&&(e(),document.body.style.overflow="visible")};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[e]),document.body.style.overflow="hidden"},ft=({dataCar:e})=>{const[i,r]=$.useState(!1),{favorite:n}=de(),t=pe(),{id:s,img:h,make:v,model:l,year:c,rentalPrice:u,address:w,rentalCompany:g,type:b,accessories:a,fuelConsumption:p,engineSize:x,description:f,functionalities:k,rentalConditions:j,mileage:C}=e,I=w.split(","),D=I[2],d=I[1],S=a[2],O=j.split(`
`),ke=O[0].match(/\d+/),be=()=>{r(!0)},je=()=>{r(!1)},Ce=F=>{n.some(Se=>Se.id===F.id)?t(Le(F)):t(Ie(F))};return o.jsxs(o.Fragment,{children:[o.jsxs(et,{children:[o.jsxs("div",{children:[o.jsx(tt,{type:"button",onClick:()=>Ce(e),"aria-label":"Add to Favorites",children:n.some(F=>F.id===e.id)?o.jsx("svg",{children:o.jsx("use",{href:dt+"#heart-fill"})}):o.jsx("svg",{children:o.jsx("use",{href:ut+"#heart"})})}),o.jsx(le,{src:h,alt:`${v} ${l}`,width:"274",height:"268"}),o.jsxs("div",{style:{padding:"0 5px"},children:[o.jsxs(ce,{children:[o.jsxs(Z,{children:[v,o.jsxs(he,{children:[" ",l]}),", ",c]}),o.jsx(it,{children:u})]}),o.jsxs(R,{children:[o.jsx(y,{children:d}),o.jsx(y,{children:D}),o.jsx(y,{children:g})]}),o.jsxs(H,{children:[o.jsx(y,{children:b}),o.jsx(y,{children:v}),o.jsx(y,{children:s}),o.jsx(y,{children:S})]})]})]}),o.jsx(st,{type:"button",onClick:be,"aria-label":"View full car information",children:"Learn more"})]},h+"333"),i&&o.jsxs(pt,{onClose:je,children:[o.jsx(le,{src:h,alt:`${v} ${l}`,width:"461",height:"248"}),o.jsx(ce,{children:o.jsxs(nt,{children:[v,o.jsxs(he,{children:[" ",l]}),", ",c]})}),o.jsxs(ct,{children:[o.jsxs(R,{children:[o.jsx(y,{children:d}),o.jsx(y,{children:D}),o.jsxs(y,{children:["Id: ",s]}),o.jsxs(y,{children:["Year: ",c]}),o.jsx(y,{children:b})]}),o.jsxs(ot,{children:[o.jsxs(y,{children:["Fuel consumption: ",p]}),o.jsxs(y,{children:["Engine size: ",x]})]}),o.jsx(at,{children:f}),o.jsx(ue,{children:"Accessories and functionalities:"}),o.jsx(R,{children:a.map(F=>o.jsx(y,{children:F},F))}),o.jsx(rt,{children:k.map(F=>o.jsx(y,{children:F},F))}),o.jsx(ue,{children:" Rental Conditions:"}),o.jsxs(lt,{children:[o.jsxs(V,{children:["Minimum age: ",o.jsx(U,{children:ke[0]})]}),o.jsx(V,{children:O[1]}),o.jsx(V,{children:O[2]}),o.jsxs(V,{children:["Mileage: ",o.jsx(U,{children:C.toLocaleString()})]}),o.jsxs(V,{children:["Price: ",o.jsx(U,{children:u})]})]})]}),o.jsx(ht,{href:"tel:+380730000000",children:"Rental car"})]})]})},xt=m.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 29px 50px;
	margin-bottom: 100px;
	text-align: center;
`,vt=(e,i,r,n,t)=>e==null?void 0:e.filter(s=>{let h=!0;if(i&&(h=s.make===i),r){const v=r,l=s.rentalPrice,c=v[1],u=l[1];Number(c)>=u||(h=!1)}return n&&(s.mileage>=n||(h=!1)),t&&(s.mileage<=t||(h=!1)),n&&t&&(s.mileage>=n&&s.mileage<=t||(h=!1)),h});export{xt as C,gt as F,ft as a,vt as g};
