import{r as L,h as he,i as ye,u as h,c as ue,b as pe,j as o,s as K,k as Me,l as Ie}from"./index-qhsgpNLJ.js";const De=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"],Fe=[10,20,30,40,50,60,70,80,90,100,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,340,350];var me={exports:{}};function $e(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var A=$e(L),Oe=he;function Le(e,i){for(var r=Object.getOwnPropertyNames(i),n=0;n<r.length;n++){var t=r[n],s=Object.getOwnPropertyDescriptor(i,t);s&&s.configurable&&e[t]===void 0&&Object.defineProperty(e,t,s)}return e}function q(){return(q=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Pe(e,i){e.prototype=Object.create(i.prototype),Le(e.prototype.constructor=e,i)}function Ee(e,i){if(e==null)return{};var r,n,t={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],0<=i.indexOf(r)||(t[r]=e[r]);return t}function E(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Ve=function(e,i,r,n,t,s,d,v){if(!e){var l;if(i===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,t,s,d,v],u=0;(l=new Error(i.replace(/%s/g,function(){return c[u++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}},Z=Ve;function G(e,i,r){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=i,e.selectionEnd=r;else{var n=e.createTextRange();n.collapse(!0),n.moveStart("character",i),n.moveEnd("character",r-i),n.select()}}function Te(e){var i=0,r=0;if("selectionStart"in e&&"selectionEnd"in e)i=e.selectionStart,r=e.selectionEnd;else{var n=document.selection.createRange();n.parentElement()===e&&(i=-n.moveStart("character",-e.value.length),r=-n.moveEnd("character",-e.value.length))}return{start:i,end:r,length:r-i}}var Be={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},Re="_";function J(e,i,r){var n="",t="",s=null,d=[];if(i===void 0&&(i=Re),r==null&&(r=Be),!e||typeof e!="string")return{maskChar:i,formatChars:r,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var v=!1;return e.split("").forEach(function(l){v=!v&&l==="\\"||(v||!r[l]?(d.push(n.length),n.length===d.length-1&&(t+=l)):s=n.length+1,n+=l,!1)}),{maskChar:i,formatChars:r,prefix:t,mask:n,lastEditablePosition:s,permanents:d}}function D(e,i){return e.permanents.indexOf(i)!==-1}function z(e,i,r){var n=e.mask,t=e.formatChars;if(!r)return!1;if(D(e,i))return n[i]===r;var s=t[n[i]];return new RegExp(s).test(r)}function Q(e,i){return i.split("").every(function(r,n){return D(e,n)||!z(e,n,r)})}function T(e,i){var r=e.maskChar,n=e.prefix;if(!r){for(;i.length>n.length&&D(e,i.length-1);)i=i.slice(0,i.length-1);return i.length}for(var t=n.length,s=i.length;s>=n.length;s--){var d=i[s];if(!D(e,s)&&z(e,s,d)){t=s+1;break}}return t}function ge(e,i){return T(e,i)===e.mask.length}function P(e,i){var r=e.maskChar,n=e.mask,t=e.prefix;if(!r){for((i=Y(e,"",i,0)).length<t.length&&(i=t);i.length<n.length&&D(e,i.length);)i+=n[i.length];return i}if(i)return Y(e,P(e,""),i,0);for(var s=0;s<n.length;s++)D(e,s)?i+=n[s]:i+=r;return i}function ze(e,i,r,n){var t=r+n,s=e.maskChar,d=e.mask,v=e.prefix,l=i.split("");if(s)return l.map(function(u,w){return w<r||t<=w?u:D(e,w)?d[w]:s}).join("");for(var c=t;c<l.length;c++)D(e,c)&&(l[c]="");return r=Math.max(v.length,r),l.splice(r,t-r),i=l.join(""),P(e,i)}function Y(e,i,r,n){var t=e.mask,s=e.maskChar,d=e.prefix,v=r.split(""),l=ge(e,i);return!s&&n>i.length&&(i+=t.slice(i.length,n)),v.every(function(c){for(;k=c,D(e,g=n)&&k!==t[g];){if(n>=i.length&&(i+=t[n]),u=c,w=n,s&&D(e,w)&&u===s)return!0;if(++n>=t.length)return!1}var u,w,g,k;return!z(e,n,c)&&c!==s||(n<i.length?i=s||l||n<d.length?i.slice(0,n)+c+i.slice(n+1):(i=i.slice(0,n)+c+i.slice(n),P(e,i)):s||(i+=c),++n<t.length)}),i}function Ae(e,i,r,n){var t=e.mask,s=e.maskChar,d=r.split(""),v=n;return d.every(function(l){for(;u=l,D(e,c=n)&&u!==t[c];)if(++n>=t.length)return!1;var c,u;return(z(e,n,l)||l===s)&&n++,n<t.length}),n-v}function Ne(e,i){for(var r=i;0<=r;--r)if(!D(e,r))return r;return null}function B(e,i){for(var r=e.mask,n=i;n<r.length;++n)if(!D(e,n))return n;return null}function N(e){return e||e===0?e+"":""}function _e(e,i,r,n,t){var s=e.mask,d=e.prefix,v=e.lastEditablePosition,l=i,c="",u=0,w=0,g=Math.min(t.start,r.start);return r.end>t.start?w=(u=Ae(e,n,c=l.slice(t.start,r.end),g))?t.length:0:l.length<n.length&&(w=n.length-l.length),l=n,w&&(w===1&&!t.length&&(g=t.start===r.start?B(e,r.start):Ne(e,r.start)),l=ze(e,l,g,w)),l=Y(e,l,c,g),(g+=u)>=s.length?g=s.length:g<d.length&&!u?g=d.length:g>=d.length&&g<v&&u&&(g=B(e,g)),c||(c=null),{value:l=P(e,l),enteredString:c,selection:{start:g,end:g}}}function Ue(){var e=new RegExp("windows","i"),i=new RegExp("phone","i"),r=navigator.userAgent;return e.test(r)&&i.test(r)}function M(e){return typeof e=="function"}function We(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function fe(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function ee(e){return(fe()?We():function(){return setTimeout(e,1e3/60)})(e)}function _(e){(fe()||clearTimeout)(e)}var qe=function(e){function i(n){var t=e.call(this,n)||this;t.focused=!1,t.mounted=!1,t.previousSelection=null,t.selectionDeferId=null,t.saveSelectionLoopDeferId=null,t.saveSelectionLoop=function(){t.previousSelection=t.getSelection(),t.saveSelectionLoopDeferId=ee(t.saveSelectionLoop)},t.runSaveSelectionLoop=function(){t.saveSelectionLoopDeferId===null&&t.saveSelectionLoop()},t.stopSaveSelectionLoop=function(){t.saveSelectionLoopDeferId!==null&&(_(t.saveSelectionLoopDeferId),t.saveSelectionLoopDeferId=null,t.previousSelection=null)},t.getInputDOMNode=function(){if(!t.mounted)return null;var a=Oe.findDOMNode(E(E(t))),m=typeof window<"u"&&a instanceof window.Element;if(a&&!m)return null;if(a.nodeName!=="INPUT"&&(a=a.querySelector("input")),!a)throw new Error("react-input-mask: inputComponent doesn't contain input node");return a},t.getInputValue=function(){var a=t.getInputDOMNode();return a?a.value:null},t.setInputValue=function(a){var m=t.getInputDOMNode();m&&(t.value=a,m.value=a)},t.setCursorToEnd=function(){var a=T(t.maskOptions,t.value),m=B(t.maskOptions,a);m!==null&&t.setCursorPosition(m)},t.setSelection=function(a,m,x){x===void 0&&(x={});var f=t.getInputDOMNode(),b=t.isFocused();f&&b&&(x.deferred||G(f,a,m),t.selectionDeferId!==null&&_(t.selectionDeferId),t.selectionDeferId=ee(function(){t.selectionDeferId=null,G(f,a,m)}),t.previousSelection={start:a,end:m,length:Math.abs(m-a)})},t.getSelection=function(){return Te(t.getInputDOMNode())},t.getCursorPosition=function(){return t.getSelection().start},t.setCursorPosition=function(a){t.setSelection(a,a)},t.isFocused=function(){return t.focused},t.getBeforeMaskedValueChangeConfig=function(){var a=t.maskOptions,m=a.mask,x=a.maskChar,f=a.permanents,b=a.formatChars;return{mask:m,maskChar:x,permanents:f,alwaysShowMask:!!t.props.alwaysShowMask,formatChars:b}},t.isInputAutofilled=function(a,m,x,f){var b=t.getInputDOMNode();try{if(b.matches(":-webkit-autofill"))return!0}catch{}return!t.focused||f.end<x.length&&m.end===a.length},t.onChange=function(a){var m=E(E(t)).beforePasteState,x=E(E(t)).previousSelection,f=t.props.beforeMaskedValueChange,b=t.getInputValue(),j=t.value,S=t.getSelection();t.isInputAutofilled(b,S,j,x)&&(j=P(t.maskOptions,""),x={start:0,end:0,length:0}),m&&(x=m.selection,j=m.value,S={start:x.start+b.length,end:x.start+b.length,length:0},b=j.slice(0,x.start)+b+j.slice(x.end),t.beforePasteState=null);var I=_e(t.maskOptions,b,S,j,x),$=I.enteredString,p=I.selection,C=I.value;if(M(f)){var O=f({value:C,selection:p},{value:j,selection:x},$,t.getBeforeMaskedValueChangeConfig());C=O.value,p=O.selection}t.setInputValue(C),M(t.props.onChange)&&t.props.onChange(a),t.isWindowsPhoneBrowser?t.setSelection(p.start,p.end,{deferred:!0}):t.setSelection(p.start,p.end)},t.onFocus=function(a){var m=t.props.beforeMaskedValueChange,x=t.maskOptions,f=x.mask,b=x.prefix;if(t.focused=!0,t.mounted=!0,f){if(t.value)T(t.maskOptions,t.value)<t.maskOptions.mask.length&&t.setCursorToEnd();else{var j=P(t.maskOptions,b),S=P(t.maskOptions,j),I=T(t.maskOptions,S),$=B(t.maskOptions,I),p={start:$,end:$};if(M(m)){var C=m({value:S,selection:p},{value:t.value,selection:null},null,t.getBeforeMaskedValueChangeConfig());S=C.value,p=C.selection}var O=S!==t.getInputValue();O&&t.setInputValue(S),O&&M(t.props.onChange)&&t.props.onChange(a),t.setSelection(p.start,p.end)}t.runSaveSelectionLoop()}M(t.props.onFocus)&&t.props.onFocus(a)},t.onBlur=function(a){var m=t.props.beforeMaskedValueChange,x=t.maskOptions.mask;if(t.stopSaveSelectionLoop(),t.focused=!1,x&&!t.props.alwaysShowMask&&Q(t.maskOptions,t.value)){var f="";M(m)&&(f=m({value:f,selection:null},{value:t.value,selection:t.previousSelection},null,t.getBeforeMaskedValueChangeConfig()).value);var b=f!==t.getInputValue();b&&t.setInputValue(f),b&&M(t.props.onChange)&&t.props.onChange(a)}M(t.props.onBlur)&&t.props.onBlur(a)},t.onMouseDown=function(a){if(!t.focused&&document.addEventListener){t.mouseDownX=a.clientX,t.mouseDownY=a.clientY,t.mouseDownTime=new Date().getTime();var m=function x(f){if(document.removeEventListener("mouseup",x),t.focused){var b=Math.abs(f.clientX-t.mouseDownX),j=Math.abs(f.clientY-t.mouseDownY),S=Math.max(b,j),I=new Date().getTime()-t.mouseDownTime;(S<=10&&I<=200||S<=5&&I<=300)&&t.setCursorToEnd()}};document.addEventListener("mouseup",m)}M(t.props.onMouseDown)&&t.props.onMouseDown(a)},t.onPaste=function(a){M(t.props.onPaste)&&t.props.onPaste(a),a.defaultPrevented||(t.beforePasteState={value:t.getInputValue(),selection:t.getSelection()},t.setInputValue(""))},t.handleRef=function(a){t.props.children==null&&M(t.props.inputRef)&&t.props.inputRef(a)};var s=n.mask,d=n.maskChar,v=n.formatChars,l=n.alwaysShowMask,c=n.beforeMaskedValueChange,u=n.defaultValue,w=n.value;t.maskOptions=J(s,d,v),u==null&&(u=""),w==null&&(w=u);var g=N(w);if(t.maskOptions.mask&&(l||g)&&(g=P(t.maskOptions,g),M(c))){var k=n.value;n.value==null&&(k=u),g=c({value:g,selection:null},{value:k=N(k),selection:null},null,t.getBeforeMaskedValueChangeConfig()).value}return t.value=g,t}Pe(i,e);var r=i.prototype;return r.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=Ue(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},r.componentDidUpdate=function(){var n=this.previousSelection,t=this.props,s=t.beforeMaskedValueChange,d=t.alwaysShowMask,v=t.mask,l=t.maskChar,c=t.formatChars,u=this.maskOptions,w=d||this.isFocused(),g=this.props.value!=null,k=g?N(this.props.value):this.value,a=n?n.start:null;if(this.maskOptions=J(v,l,c),this.maskOptions.mask){!u.mask&&this.isFocused()&&this.runSaveSelectionLoop();var m=this.maskOptions.mask&&this.maskOptions.mask!==u.mask;if(u.mask||g||(k=this.getInputValue()),(m||this.maskOptions.mask&&(k||w))&&(k=P(this.maskOptions,k)),m){var x=T(this.maskOptions,k);(a===null||x<a)&&(a=ge(this.maskOptions,k)?x:B(this.maskOptions,x))}!this.maskOptions.mask||!Q(this.maskOptions,k)||w||g&&this.props.value||(k="");var f={start:a,end:a};if(M(s)){var b=s({value:k,selection:f},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());k=b.value,f=b.selection}this.value=k;var j=this.getInputValue()!==this.value;j?(this.setInputValue(this.value),this.forceUpdate()):m&&this.forceUpdate();var S=!1;f.start!=null&&f.end!=null&&(S=!n||n.start!==f.start||n.end!==f.end),(S||j)&&this.setSelection(f.start,f.end)}else u.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},r.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&_(this.selectionDeferId),this.stopSaveSelectionLoop()},r.render=function(){var n,t=this.props,s=(t.mask,t.alwaysShowMask,t.maskChar,t.formatChars,t.inputRef,t.beforeMaskedValueChange,t.children),d=Ee(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(s){M(s)||Z(!1);var v=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],l=q({},d);v.forEach(function(u){return delete l[u]}),n=s(l),v.filter(function(u){return n.props[u]!=null&&n.props[u]!==d[u]}).length&&Z(!1)}else n=A.createElement("input",q({ref:this.handleRef},d));var c={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(d.disabled||d.readOnly||(c.onChange=this.onChange,c.onPaste=this.onPaste,c.onMouseDown=this.onMouseDown),d.value!=null&&(c.value=this.value)),n=A.cloneElement(n,c)},i}(A.Component),Ye=qe;me.exports=Ye;var Xe=me.exports;const xe=ye(Xe),He=h.form`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: end;
	gap: 10px;
	padding-bottom: 50px;
	@media screen and (min-width: 760px) {
		gap: 18px;
	}
`,U=h.label`
	font-size: 12px;
	display: flex;
	margin-bottom: 8px;
	color: ${({theme:{colors:e}})=>e.label};
	font-weight: 500;
	line-height: 1.29;
	@media screen and (min-width: 760px) {
		font-size: 14px;
	}
`,ve=h.div`
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
`,Ke=h(ve)`
	width: 130px;
`,we=h.div`
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
`,Ze=h(we)`
	width: 125px;
	height: 188px;
`,te=h.ul`
	display: flex;
	flex-direction: column;
	gap: 8px;
	height: 100%;
	overflow-x: auto;

	::-webkit-scrollbar {
		position: absolute;
		right: 50px;
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background: ${({theme:{colors:e}})=>e.white};
		border-radius: 10px;
	}

	::-webkit-scrollbar-thumb {
		background: ${({theme:{colors:e}})=>e.scroll};
		border-radius: 10px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: ${({theme:{colors:e}})=>e.accentLight};
	}
`,ne=h.li`
	color: ${({theme:{colors:e}})=>e.secondaryTextLight};
	cursor: pointer;
	transition: color 300ms
		${({theme:{transition:e}})=>e.timingFunction};
	&:hover {
		color: ${({theme:{colors:e}})=>e.primaryText};
	}
`,Ge=h(xe)`
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
`,Je=h(xe)`
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
`,oe=h.label`
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
`,re=h.button`
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
`,se="/rent-cars/iconDown.svg",ae="/rent-cars/iconUp.svg",kt=()=>{const{brandFilter:e,priceFilter:i}=ue(),[r,n]=L.useState(e||"Enter the text"),[t,s]=L.useState(!1),[d,v]=L.useState(!1),[l,c]=L.useState(i||"To $"),[u,w]=L.useState(""),[g,k]=L.useState(""),a=pe(),m=p=>{p.preventDefault(),s(C=>!C)},x=p=>{p.preventDefault(),v(C=>!C)},f=p=>{n(p),s(!1)},b=p=>{c(p+" $"),v(!1)},j=p=>{const{value:C}=p.target;w(C.replace(/,/g,""))},S=p=>{const{value:C}=p.target;k(C.replace(/,/g,""))},I=p=>{if(p.preventDefault(),r==="Enter the text"&&l==="To $"&&!u&&!g)return;const C={brand:r==="Enter the text"?"":r,price:l==="To $"?"":`$${parseInt(l,10)}`,mileageFrom:u.trim(),mileageTo:g.trim(),onFilter:!0};a(K(C))},$=p=>{p.preventDefault(),a(K({brand:"",price:"",mileageFrom:"",mileageTo:"",onFilter:!1})),n("Enter the text"),c("To $"),w(""),k("")};return o.jsxs(He,{children:[o.jsxs("div",{children:[o.jsx(U,{children:"Car brand"}),o.jsxs("div",{style:{position:"relative"},children:[o.jsxs(ve,{onClick:m,children:[r,t?o.jsx("svg",{children:o.jsx("use",{href:ae+"#up"})}):o.jsx("svg",{children:o.jsx("use",{href:se+"#down"})})]}),t&&o.jsx(we,{children:o.jsx(te,{children:De.map(p=>o.jsx(ne,{onClick:()=>f(p),children:p},p))})})]})]}),o.jsxs("div",{children:[o.jsx(U,{children:"Price/ 1 hour"}),o.jsxs("div",{style:{position:"relative"},children:[o.jsxs(Ke,{onClick:x,children:[l,d?o.jsx("svg",{children:o.jsx("use",{href:ae+"#up"})}):o.jsx("svg",{children:o.jsx("use",{href:se+"#down"})})]}),d&&o.jsx(Ze,{children:o.jsx(te,{children:Fe.map(p=>o.jsx(ne,{onClick:()=>b(p),children:p},p))})})]})]}),o.jsxs("div",{children:[o.jsx(U,{children:"Сar mileage / km"}),o.jsxs("div",{style:{display:"flex"},children:[o.jsxs(ie,{children:[o.jsx(Ge,{type:"text",mask:"9,999",title:"Only number",onChange:j,value:u,id:"mileageFrom"}),o.jsx(oe,{htmlFor:"mileageFrom",children:"From"})]}),o.jsxs(ie,{children:[o.jsx(Je,{type:"text",mask:"9,999",title:"Only number",onChange:S,value:g,id:"mileageTo"}),o.jsx(oe,{htmlFor:"mileageTo",children:"To"})]})]})]}),o.jsx(re,{onClick:I,children:"Search"}),o.jsx(re,{onClick:$,children:"Reset"})]})},Qe=h.li`
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
`,et=h.button`
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
`,tt=h.img`
	width: 261px;
	height: 248px;
	margin-bottom: 14px;
	object-fit: cover;
	object-position: center;
	border-radius: 14px;
	@media screen and (min-width: 480px) {
		width: 461px;
		height: 248px;
	}
`,nt=h.img`
	margin-bottom: 14px;
	object-fit: cover;
	object-position: center;
	border-radius: 14px;	
	}
`,le=h.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 8px;
`,X=h.div`
	font-size: 16px;
	font-weight: 500;
	line-height: 1.5;
`,it=h(X)`
	font-size: 18px;
`,ot=h(X)``,ce=h.span`
	color: ${({theme:{colors:e}})=>e.accentLight};
`,R=h.ul`
	display: flex;
	flex-wrap: wrap;
`,H=h(R)`
	margin-top: 4px;
`,rt=h(H)`
	margin-bottom: 14px;
`,st=h(H)`
	margin-bottom: 24px;
`,y=h.li`
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
`,at=h.button`
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
	margin-top: 20px;
	background-color: ${({theme:{colors:e}})=>e.accentLight};
	color: ${({theme:{colors:e}})=>e.white};
	transition: background-color 300ms
		${({theme:{transition:e}})=>e.timingFunction};

	&:hover {
		background-color: ${({theme:{colors:e}})=>e.accentDark};
	}
`,lt=h.p`
	margin-bottom: 24px;
	text-align: justify;
`,de=h.p`
	margin-bottom: 8px;
	font-weight: 500;
`,ct=h.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`,V=h.li`
	padding: 7px 14px;
	border-radius: 35px;
	font-size: 12px;
	line-height: 1.5;
	background-color: ${({theme:{colors:e}})=>e.bgElements};
`,W=h.span`
	color: ${({theme:{colors:e}})=>e.accentLight};
	font-weight: 600;
	letter-spacing: -0.24px;
`,dt=h.div`
	max-width: 461px;
	height: 320px;
	padding-right: 15px;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 5px;
	}

	::-webkit-scrollbar-track {
		background: ${({theme:{colors:e}})=>e.secondaryTextLight};
		border-radius: 15px;
	}

	::-webkit-scrollbar-thumb {
		background: ${({theme:{colors:e}})=>e.accentLight};
		border-radius: 15px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: ${({theme:{colors:e}})=>e.accentDark};
	}

	@media screen and (max-width: 480px) {
		height: 370px;
	}
`,ht=h.a`
	display: flex;
	margin-top: 24px;
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
`,ut="/rent-cars/heart.svg",pt="/rent-cars/heartFill.svg",mt=h.div`
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
	width: 280px;
	height: 752px;
	padding: 10px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 12px;
	background-color: ${({theme:{colors:e}})=>e.white};
	border-radius: 24px;
	@media screen and (min-width: 480px) {
		width: 541px;
		height: 752px;
		padding: 40px;
		font-size: 14px;
	}
`,ft=h.button`
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
`,xt="/rent-cars/close.svg",vt=document.querySelector("#modal-root"),wt=({children:e,onClose:i})=>{L.useEffect(()=>{const t=s=>{s.code==="Escape"&&(i(),document.body.style.overflow="visible")};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[i]);const r=t=>{t.currentTarget===t.target&&(i(),document.body.style.overflow="visible")},n=()=>{i(),document.body.style.overflow="visible"};return document.body.style.overflow="hidden",he.createPortal(o.jsx(mt,{onClick:r,children:o.jsxs(gt,{children:[o.jsx(ft,{type:"button",onClick:n,children:o.jsx("svg",{width:"24",height:"24",children:o.jsx("use",{href:xt+"#close"})})}),e]})}),vt)},jt=({dataCar:e})=>{const[i,r]=L.useState(!1),{favorite:n}=ue(),t=pe(),{id:s,img:d,make:v,model:l,year:c,rentalPrice:u,address:w,rentalCompany:g,type:k,accessories:a,fuelConsumption:m,engineSize:x,description:f,functionalities:b,rentalConditions:j,mileage:S}=e,I=w.split(","),$=I[2],p=I[1],C=a[2],O=j.split(`
`),be=O[0].match(/\d+/),ke=()=>{r(!0)},je=()=>{r(!1)},Se=F=>{n.some(Ce=>Ce.id===F.id)?t(Ie(F)):t(Me(F))};return o.jsxs(o.Fragment,{children:[o.jsxs(Qe,{children:[o.jsxs("div",{children:[o.jsx(et,{type:"button",onClick:()=>Se(e),"aria-label":"Add to Favorites",children:n.some(F=>F.id===e.id)?o.jsx("svg",{children:o.jsx("use",{href:pt+"#heart-fill"})}):o.jsx("svg",{children:o.jsx("use",{href:ut+"#heart"})})}),o.jsx(nt,{src:d,alt:`${v} ${l}`,width:"274",height:"268"}),o.jsxs("div",{style:{padding:"0 5px"},children:[o.jsxs(le,{children:[o.jsxs(X,{children:[v,o.jsxs(ce,{children:[" ",l]}),", ",c]}),o.jsx(ot,{children:u})]}),o.jsxs(R,{children:[o.jsx(y,{children:p}),o.jsx(y,{children:$}),o.jsx(y,{children:g})]}),o.jsxs(H,{children:[o.jsx(y,{children:k}),o.jsx(y,{children:v}),o.jsx(y,{children:s}),o.jsx(y,{children:C})]})]})]}),o.jsx(at,{type:"button",onClick:ke,"aria-label":"View full car information",children:"Learn more"})]},d+"333"),i&&o.jsxs(wt,{onClose:je,children:[o.jsx(tt,{src:d,alt:`${v} ${l}`}),o.jsx(le,{children:o.jsxs(it,{children:[v,o.jsxs(ce,{children:[" ",l]}),", ",c]})}),o.jsxs(dt,{children:[o.jsxs(R,{children:[o.jsx(y,{children:p}),o.jsx(y,{children:$}),o.jsxs(y,{children:["Id: ",s]}),o.jsxs(y,{children:["Year: ",c]}),o.jsx(y,{children:k})]}),o.jsxs(rt,{children:[o.jsxs(y,{children:["Fuel consumption: ",m]}),o.jsxs(y,{children:["Engine size: ",x]})]}),o.jsx(lt,{children:f}),o.jsx(de,{children:"Accessories and functionalities:"}),o.jsx(R,{children:a.map(F=>o.jsx(y,{children:F},F))}),o.jsx(st,{children:b.map(F=>o.jsx(y,{children:F},F))}),o.jsx(de,{children:" Rental Conditions:"}),o.jsxs(ct,{children:[o.jsxs(V,{children:["Minimum age: ",o.jsx(W,{children:be[0]})]}),o.jsx(V,{children:O[1]}),o.jsx(V,{children:O[2]}),o.jsxs(V,{children:["Mileage: ",o.jsx(W,{children:S.toLocaleString()})]}),o.jsxs(V,{children:["Price: ",o.jsx(W,{children:u})]})]})]}),o.jsx(ht,{href:"tel:+380730000000",children:"Rental car"})]})]})},St=h.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 29px 50px;
	margin-bottom: 100px;
	text-align: center;
`,Ct=(e,i,r,n,t)=>e==null?void 0:e.filter(s=>{let d=!0;if(i&&(d=s.make===i),r){const v=r.match(/\$(\d+)/),l=s.rentalPrice.match(/\$(\d+)/),c=v[1],u=l[1];Number(c)>=u||(d=!1)}return n&&(s.mileage>=n||(d=!1)),t&&(s.mileage<=t||(d=!1)),n&&t&&(s.mileage>=n&&s.mileage<=t||(d=!1)),d}),yt=h.section`
	padding-top: 20px;
	padding-bottom: 80px;
	@media screen and (min-width: 768px) {
		padding-top: 50px;
		padding-bottom: 90px;
	}
	@media screen and (min-width: 1440px) {
		padding: 15px;
	}
`;export{St as C,kt as F,yt as S,jt as a,Ct as g};
