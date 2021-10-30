import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Dialog as UiDialog, Avatar } from '../ui';
import { useProfile } from '../../hooks/App';
import { ROUTES } from '../../constants';

const AvatarWrapper = styled.a`
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	border-radius: 40px;
	cursor: pointer;
`;

interface ProfileDropdownProps {}

const ProfileDropdown = ({}: ProfileDropdownProps) => {
	const { t } = useTranslation('page');
	const [anchorEl, setAnchorEl] = useState(null);
	const [confirmOpen, setConfirmOpen] = useState(false);
	const { Profile, userLogout } = useProfile();
	const history = useHistory();
	const menuOpen = Boolean(anchorEl);
	const handleClick = (e) => setAnchorEl(e.currentTarget);
	const handleClose = () => setAnchorEl(null);
	const handleConfirmOpen = () => {
		handleClose();
		setConfirmOpen(true);
	};
	const handleConfirmClose = () => setConfirmOpen(false);
	const logoutHandler = () =>
		userLogout({}).then(() => (window.location.href = ROUTES.app.login.path));
	const profileLinkHandler = () => {
		handleClose();
		history.push(ROUTES.app.profile.path);
	};

	return (
		<>
			<div>
				<AvatarWrapper
					id="fade-button"
					aria-controls="fade-menu"
					aria-haspopup="true"
					aria-expanded={menuOpen ? 'true' : undefined}
					onClick={handleClick}
				>
					{Profile && (
						<Avatar
							size="36px"
							nickName={Profile.nickname}
							firstName={Profile.first_name}
							lastName={Profile.last_name}
							image={Profile.img_avatar}
						/>
					)}
				</AvatarWrapper>
				<Menu
					id="fade-menu"
					MenuListProps={{
						'aria-labelledby': 'fade-button',
					}}
					anchorEl={anchorEl}
					open={menuOpen}
					onClose={handleClose}
					TransitionComponent={Fade}
				>
					<MenuItem onClick={profileLinkHandler}>Profile</MenuItem>
					{/*
					<MenuItem onClick={handleClose}>Language</MenuItem>
					<MenuItem onClick={handleClose}>Theme</MenuItem>
					*/}
					<MenuItem onClick={handleConfirmOpen}>Logout</MenuItem>
				</Menu>
			</div>
			<UiDialog.Confirm
				isOpen={confirmOpen}
				onClose={handleConfirmClose}
				onConfirm={logoutHandler}
				confirmMethod={'logOut'}
			/>
		</>
	);
};

export default ProfileDropdown;
