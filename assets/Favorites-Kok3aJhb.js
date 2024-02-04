import{u as a,j as t,c as d,f as x,E as c}from"./index-bwpFg5K6.js";import{g as l,F as g,S as f,C as m,a as h}from"./Section.styled-9yR7acSb.js";import{i as u}from"./blue-car-VblWn_W_.js";const j=a.div`
	display: flex;
	justify-content: center;
	background-image: url(${u});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	min-height: calc(100vh - (95px + 84px));
`,F=a.p`
	padding-top: 80px;
	padding-left: 20px;
	padding-right: 20px;
	font-size: 28px;
	font-weight: 600;
	text-align: center;
	color: #fff;
	font-weight: 900;
	text-transform: uppercase;
	font-size: 44px;
	text-shadow: 1px 1px 0px #000000, -1px -1px 0px #ffffff;
	@media screen and (min-width: 760px) {
		padding-top: 150px;
	}
	@media screen and (min-width: 1200px) {
		padding-top: 220px;
	}
`,v=()=>t.jsx(j,{children:t.jsx(F,{children:"Add your favorite cars by clicking on the heart on the right in the catalog"})}),k=()=>{const{favorite:e,brandFilter:n,priceFilter:o,mileageFrom:s,mileageTo:p}=d(),r=l(e,n,o,s,p);return t.jsx(x,{children:t.jsx("div",{children:e.length===0?t.jsx(v,{}):t.jsxs(t.Fragment,{children:[t.jsx(g,{}),t.jsx(f,{children:t.jsx(m,{children:r.length===0?t.jsx(c,{emptyFilter:!0}):r.map(i=>t.jsx(h,{dataCar:i},i.id))})})]})})})};export{k as default};
