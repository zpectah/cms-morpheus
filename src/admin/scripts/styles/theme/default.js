import palette from '../palette';

export default {
	color: palette,
	fontSizeBase: '16px',
	spacer: '2rem',
	view: {
		color: 'rgb(25,25,25)',
		bg: 'rgb(250,250,250)',
	},
	sidebar: {
		minWidth: '50px',
		maxWidth: '200px',
		color: 'rgb(25,25,25)',
		bg: 'rgba(200,200,200,.5)',
		borderColor: 'rgba(150,150,150,.5)',
		zIndex: 99,
		transitionDuration: '.125s',
	},
	content: {
		color: 'rgb(25,25,25)',
		bg: 'transparent',
		zIndex: 99,
		transitionDuration: '.125s',
	},
	toasts: {
		width: '300px',
		zIndex: 1995,
		borderRadius: '0.25rem',
		color: palette.white,
		default: {
			color: palette.white,
			bg: palette.grey,
		},
		success: {
			color: palette.white,
			bg: palette.green,
		},
		error: {
			color: palette.white,
			bg: palette.red,
		},
	},
};
