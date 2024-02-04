import{j as e,a as E,b as L,c as b,r as a,d as w,g as B,e as k,f as y,L as M,E as S}from"./index-TJBKe1vu.js";import{C as $,a as D,g as v,F as A}from"./getFilteredCars-wex-hirn.js";const P=({data:t})=>e.jsx(e.Fragment,{children:e.jsx($,{children:t.map(s=>e.jsx(D,{dataCar:s},s.id))})}),z=E.button`
	background-color: transparent;
	border: transparent;
	margin: 0 auto;
	display: flex;
	color: ${({theme:{colors:t}})=>t.accentLight};
	text-decoration: underline;
	font-size: 16px;
	font-weight: 500;
	line-height: 1.5;
	transition: color 300ms
			${({theme:{transition:t}})=>t.timingFunction},
		scale 300ms ${({theme:{transition:t}})=>t.timingFunction};

	&:hover {
		color: ${({theme:{colors:t}})=>t.accentDark};
		scale: 1.2;
	}
`,T=()=>{const t=L(),{allCars:s,allCarsForFilter:h,onFilter:r,brandFilter:d,priceFilter:g,mileageFrom:m,mileageTo:u,isLoading:n,error:f}=b(),[o,C]=a.useState(1),[x,i]=a.useState(!1);a.useEffect(()=>{s.length>12&&window.scrollBy({top:426*1.3,behavior:"smooth"})},[s]),a.useEffect(()=>{t(w()),i(!1)},[t]),a.useEffect(()=>{t(B(o)),i(!0)},[t,o]),a.useEffect(()=>{r&&t(k())},[t,r]);const p=()=>{C(c=>c+1)},l=v(h,d,g,m,u),F=s.length/12>=o&&!n&&x&&!r,j=r?l:s;return e.jsxs(y,{children:[n&&!f&&e.jsx(M,{}),e.jsx(A,{}),e.jsxs("section",{children:[l.length===0&&r?e.jsx(S,{emptyFilter:!0}):e.jsx(P,{data:j}),F&&e.jsx(z,{onClick:p,children:"Load more"})]})]})};export{T as default};
