export const customStyles = {
	control: provided => ({
		...provided,
		backgroundColor: '#F7F7FB',
		borderColor: '#F7F7FB',
		borderRadius: '14px',
		height: '48px',
		color: '#121417',
		fontSize: '16px',
		fontWeight: 500,
		lineHeight: '111.111% ',
		paddingLeft: '10px',
		'@media screen and (min-width: 768px)': {
			fontSize: '18px',
		},
	}),
	menu: provided => ({
		...provided,
		borderRadius: '14px',
		padding: '4px 8px 14px 18px',
	}),
	menuList: provided => ({
		...provided,
		'::-webkit-scrollbar': {
			width: '8px',
			height: '130px',
		},
		'::-webkit-scrollbar-thumb': {
			background: '#1214170D',
			borderRadius: '10px',
		},
	}),
	option: (provided, state) => ({
		...provided,
		backgroundColor: 'transparent',
		color: state.isSelected ? '#121417' : 'rgba(18, 20, 23, 0.20)',
		fontSize: '16px',
		fontWeight: 500,
		lineHeight: '125%',
	}),
	dropdownIndicator: (provided, state) => ({
		...provided,
		color: '#121417',
		cursor: 'pointer',
		paddingRight: '14px',
		transform: state.isFocused ? 'rotate(180deg)' : null,
	}),
	indicatorSeparator: base => ({
		...base,
		display: 'none',
	}),

	placeholder: base => ({
		...base,
		color: '#121417',
		fontSize: '16px',
		fontWeight: 500,
		lineHeight: '111.111% ',
		'@media screen and (min-width: 768px)': {
			fontSize: '18px',
		},
	}),
}
