import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
	width: 100%;
	height: auto;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Block = styled.div`
	display: flex;
	align-items: center;
`;
const BlockTitle = styled(Block)`
	justify-content: flex-start;
`;
const BlockSecondary = styled(Block)`
	justify-content: flex-end;
`;

interface HeaderProps {
	secondaryChildren?: React.ReactElement | React.ReactElement[];
}

const Header: React.FC<HeaderProps> = ({ children, secondaryChildren }) => {
	return (
		<Wrapper>
			<BlockTitle>{children}</BlockTitle>
			{secondaryChildren && (
				<BlockSecondary>{secondaryChildren}</BlockSecondary>
			)}
		</Wrapper>
	);
};

export default Header;
