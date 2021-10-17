import { css } from 'styled-components';

// import media from './responsive';

export const layoutBase = css`
	width: 100%;
	height: auto;
	min-height: 100%;
	display: flex;
	background-color: rgb(225, 225, 225);
`;

export const layoutContainerBase = css`
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
`;

export const layoutContentBase = css``;

export const buttonTrigger = css`
	width: 50px;
	height: 50px;
	margin: 0;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;
	color: inherit;
	outline: none;
	border: 0;
	cursor: pointer;
`;

export const InputRowBase = css`
	width: 100%;
	height: auto;
	display: flex;

	& .input {
		flex: 1;
	}
	& .button {
		margin-left: 0.5rem;
		flex: 0;
	}
`;
