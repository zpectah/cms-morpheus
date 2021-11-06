import React from 'react';
import styled from 'styled-components';

import media from '../../../styles/responsive';
import { Scrollable } from '../../ui';
import Navbar from './Navbar';

const Wrapper = styled.div<{ open: boolean }>`
	width: 100vw;
	height: calc(100vh - ${(props) => props.theme.sidebar.minWidth});
	position: absolute;
	top: ${(props) => props.theme.sidebar.minWidth};
	left: ${(props) => (props.open ? 0 : `-100vw`)};

	color: ${(props) => props.theme.sidebar.color};
	background-color: ${(props) => props.theme.sidebar.bg};
	z-index: ${(props) => props.theme.sidebar.zIndex};
	transition: left ${(props) => props.theme.sidebar.transitionDuration}
		ease-in-out 0s;

	${media.min.sm} {
		width: ${(props) => props.theme.sidebar.maxWidth};
		height: 100%;
		top: 0;
		left: ${(props) =>
			props.open
				? props.theme.sidebar.minWidth
				: `calc((${props.theme.sidebar.maxWidth} + ${props.theme.sidebar.minWidth}) * -1)`};
	}
`;
const WrapperInner = styled.div``;

interface SidebarPanelProps {
	open: boolean;
	sidebarClose: () => void;
}

const SidebarPanel = ({ open, sidebarClose }: SidebarPanelProps) => {
	return (
		<Wrapper open={open}>
			<Scrollable.Base>
				<WrapperInner>
					<Navbar nav={'app'} sidebarClose={sidebarClose} />
				</WrapperInner>
			</Scrollable.Base>
		</Wrapper>
	);
};

export default SidebarPanel;
