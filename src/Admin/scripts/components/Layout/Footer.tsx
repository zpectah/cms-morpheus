import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer``;

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
	return (
		<Wrapper>
			<div>Footer</div>
		</Wrapper>
	);
};

export default Footer;
