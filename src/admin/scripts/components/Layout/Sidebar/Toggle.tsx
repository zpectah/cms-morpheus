import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { sidebarToggle as storeSidebarToggle } from '../../../store/actions';

const ButtonElement = styled(IconButton)({
	width: '50px',
	height: '50px',
});

interface SidebarToggleProps extends IconButtonProps {}

const SidebarToggle: React.FC<SidebarToggleProps> = (props) => {
	const store = useSelector((store: any) => store);
	const dispatch = useDispatch();
	const [sidebarOpen, setSidebarOpen] = useState<boolean>(store.ui.sideBarOpen);

	const toggleSidebar = () => {
		let ns = !sidebarOpen;
		setSidebarOpen(ns);
		dispatch(storeSidebarToggle(ns));
	};

	return (
		<ButtonElement aria-label="close" onClick={toggleSidebar} {...props}>
			{sidebarOpen ? (
				<MenuOpenIcon fontSize="inherit" />
			) : (
				<MenuIcon fontSize="inherit" />
			)}
		</ButtonElement>
	);
};

export default SidebarToggle;
