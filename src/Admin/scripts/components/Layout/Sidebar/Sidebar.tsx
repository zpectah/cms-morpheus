import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import media from '../../../styles/responsive';
import SidebarBar from './Bar';
import SidebarPanel from './Panel';

const Wrapper = styled.aside<{ open: boolean }>`
	width: 100vw;
	height: ${(props) => props.theme.sidebar.minWidth};
	position: fixed;
	top: 0;
	left: 0;
	z-index: ${(props) => props.theme.sidebar.zIndex};

	${media.min.sm} {
		width: ${(props) => props.theme.sidebar.minWidth};
		height: 100vh;
	}
`;

interface SidebarProps {
	open: boolean;
	setSidebarOpen: () => void;
}

const Sidebar = ({ open, setSidebarOpen }: SidebarProps) => {
	return (
		<Wrapper open={open}>
			<SidebarBar open={open} />
			<SidebarPanel open={open} sidebarClose={() => setSidebarOpen()} />
		</Wrapper>
	);
};

export default Sidebar;
