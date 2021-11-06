import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
	width: 100%;
	height: auto;
	min-height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Block = styled.div``;

interface HeaderProps {
	secondaryChildren?: React.ReactElement | React.ReactElement[];
}

const Header: React.FC<HeaderProps> = ({ children, secondaryChildren }) => {
	return (
		<Wrapper>
			<Block>{children}</Block>
			{secondaryChildren && <Block>{secondaryChildren}</Block>}
		</Wrapper>
	);
};

export default Header;
