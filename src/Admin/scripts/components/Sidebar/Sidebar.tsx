import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import media from '../../styles/responsive';
import SidebarBar from './Bar';
import SidebarPanel from './Panel';

const Wrapper = styled.aside<{ open: boolean }>`
	width: 100vw;
	height: ${(props) => props.theme.sidebar.minWidth};
	position: fixed;
	top: 0;
	left: 0;
	color: ${(props) => props.theme.sidebar.color};
	background-color: ${(props) => props.theme.sidebar.bg};
	z-index: ${(props) => props.theme.sidebar.zIndex};

	${media.min.sm} {
		width: calc(
			${(props) => props.theme.sidebar.minWidth} +
				${(props) => props.theme.sidebar.maxWidth}
		);
		height: 100vh;
	}
`;

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
	const store = useSelector((store: any) => store);

	const [sidebarOpen, setSidebarOpen] = useState(store.ui.sideBarOpen);

	useEffect(() => {
		setSidebarOpen(store.ui.sideBarOpen);
	}, [store.ui.sideBarOpen]);

	return (
		<Wrapper open={sidebarOpen}>
			<SidebarBar open={sidebarOpen} />
			<SidebarPanel
				open={sidebarOpen}
				sidebarClose={() => setSidebarOpen(false)}
			/>
		</Wrapper>
	);
};

export default Sidebar;
