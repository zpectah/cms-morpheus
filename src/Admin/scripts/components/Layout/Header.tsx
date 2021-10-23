import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header``;

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<Wrapper>
			<div>Header</div>
		</Wrapper>
	);
};

export default Header;
