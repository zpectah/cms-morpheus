import React from 'react';
import styled from 'styled-components';

import media from '../../styles/responsive';
import { Scrollable } from '../ui';
import SidebarToggle from './Toggle';

const Wrapper = styled.div`
	width: ${(props) => props.theme.sidebar.minWidth};
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;

	background-color: rgba(200, 200, 200, 0.5);
`;
const Inner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	${media.min.sm} {
		flex-direction: column;
	}
`;
const Block = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	${media.min.sm} {
		flex-direction: column;
	}
`;

interface SidebarBarProps {
	open: boolean;
}

const SidebarBar = ({}: SidebarBarProps) => {
	return (
		<Wrapper>
			<Scrollable.Base>
				<Inner>
					<Block>
						<SidebarToggle />
					</Block>
					<Block>BBB</Block>
				</Inner>
			</Scrollable.Base>
		</Wrapper>
	);
};

export default SidebarBar;
