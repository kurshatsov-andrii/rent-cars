import{a as e,j as t,h as d,c as x,E as c}from"./index-091FkUDt.js";import{g,F as l,C as m,a as f}from"./getFilteredCars-1SW_jBPV.js";import{i as h}from"./blue-car-VblWn_W_.js";const u=e.div`
	display: flex;
	justify-content: center;
	background-image: url(${h});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	min-height: calc(100vh - (95px + 84px));
`,j=e.p`
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
`,F=()=>t.jsx(u,{children:t.jsx(j,{children:"Add your favorite cars by clicking on the heart on the right in the catalog"})}),v=e(d)`
	padding: 0px;
`,k=()=>{const{favorite:r,brandFilter:n,priceFilter:o,mileageFrom:s,mileageTo:p}=x(),a=g(r,n,o,s,p);return t.jsx(v,{children:t.jsx("div",{children:r.length===0?t.jsx(F,{}):t.jsxs(t.Fragment,{children:[t.jsx(l,{}),t.jsx(m,{children:a.length===0?t.jsx(c,{emptyFilter:!0}):a.map(i=>t.jsx(f,{dataCar:i},i.id))})]})})})};export{k as default};
