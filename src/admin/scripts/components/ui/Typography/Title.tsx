import React from 'react';
import styled, { css } from 'styled-components';

const titleBaseStyle = css`
	margin: 0;
	padding: 0;
`;

const H1 = styled.h1`
	${titleBaseStyle}

	font-size: 1.75rem;
`;
const H2 = styled.h2`
	${titleBaseStyle}

	font-size: 1.6rem;
`;
const H3 = styled.h3`
	${titleBaseStyle}

	font-size: 1.45rem;
`;
const H4 = styled.h4`
	${titleBaseStyle}

	font-size: 1.3rem;
`;
const H5 = styled.h5`
	${titleBaseStyle}

	font-size: 1.15rem;
`;
const H6 = styled.h6`
	${titleBaseStyle}

	font-size: 1rem;
`;
const SPAN = styled.span`
	font-size: 1rem;
`;

interface TitleProps {
	h1?: true;
	h2?: true;
	h3?: true;
	h4?: true;
	h5?: true;
	h6?: true;
	className?: string;
}

const Title: React.FC<TitleProps> = ({
	children,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	className,
}) => {
	const componentProps = {
		children: children,
		className: className,
	};

	const getComponent = () => {
		let c = SPAN;
		if (h1) {
			c = H1;
		} else if (h2) {
			c = H2;
		} else if (h3) {
			c = H3;
		} else if (h4) {
			c = H4;
		} else if (h5) {
			c = H5;
		} else if (h6) {
			c = H6;
		} else {
			console.warn('Component type was not set!');
		}

		return c;
	};

	const ComponentName = getComponent();

	return <ComponentName {...componentProps} />;
};

export default Title;
