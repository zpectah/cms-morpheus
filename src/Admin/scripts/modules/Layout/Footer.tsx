import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer<{ align: FooterProps['align'] }>`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;

	${(props) =>
		props.align == 'left' &&
		`
		justify-content: flex-start;
	`}
	${(props) =>
		props.align == 'center' &&
		`
		justify-content: center;
	`}	
	${(props) =>
		props.align == 'right' &&
		`
		justify-content: flex-end;
	`}
`;

interface FooterProps {
	align?: 'left' | 'center' | 'right';
}

const Footer: React.FC<FooterProps> = ({ align }) => {
	return (
		<Wrapper align={align}>
			<div>Footer</div>
		</Wrapper>
	);
};

export default Footer;
