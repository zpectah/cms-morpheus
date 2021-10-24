import React from 'react';
import styled from 'styled-components';

import media from '../../../styles/responsive';
import { Scrollable } from '../../../components/ui';
import SidebarToggle from './Toggle';
import Profile from '../../Profile';

const Wrapper = styled.div`
	width: 100vw;
	height: ${(props) => props.theme.sidebar.minWidth};
	position: absolute;
	top: 0;
	left: 0;
	z-index: ${(props) => props.theme.sidebar.zIndex + 1};
	color: ${(props) => props.theme.sidebar.color};
	background-color: ${(props) => props.theme.sidebar.bg};

	${media.min.sm} {
		width: ${(props) => props.theme.sidebar.minWidth};
		height: 100%;
	}
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
					<Block>
						<Profile.Dropdown />
					</Block>
				</Inner>
			</Scrollable.Base>
		</Wrapper>
	);
};

export default SidebarBar;
