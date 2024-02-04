import{j as e,u as E,b as L,c as b,r as a,d as w,g as S,e as B,f as k,L as y,E as M}from"./index-1sLa4_1B.js";import{C as $,a as D,g as v,F as A,S as P}from"./Section.styled-szaC9gYm.js";const z=({data:t})=>e.jsx(e.Fragment,{children:e.jsx($,{children:t.map(s=>e.jsx(D,{dataCar:s},s.id))})}),I=E.button`
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
`,W=()=>{const t=L(),{allCars:s,allCarsForFilter:h,onFilter:r,brandFilter:d,priceFilter:g,mileageFrom:u,mileageTo:m,isLoading:n,error:f}=b(),[o,C]=a.useState(1),[x,i]=a.useState(!1);a.useEffect(()=>{s.length>12&&window.scrollBy({top:426*1.3,behavior:"smooth"})},[s]),a.useEffect(()=>{t(w()),i(!1)},[t]),a.useEffect(()=>{t(S(o)),i(!0)},[t,o]),a.useEffect(()=>{r&&t(B())},[t,r]);const p=()=>{C(c=>c+1)},l=v(h,d,g,u,m),F=s.length/12>=o&&!n&&x&&!r,j=r?l:s;return e.jsxs(k,{children:[n&&!f&&e.jsx(y,{}),e.jsx(A,{}),e.jsxs(P,{children:[l.length===0&&r?e.jsx(M,{emptyFilter:!0}):e.jsx(z,{data:j}),F&&e.jsx(I,{onClick:p,children:"Load more"})]})]})};export{W as default};
