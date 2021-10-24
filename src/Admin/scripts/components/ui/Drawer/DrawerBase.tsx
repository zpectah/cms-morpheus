import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import { BREAKPOINTS } from '../../../constants';
import media from '../../../styles/responsive';
import { Scrollable, Typography } from '../../ui';

const DrawerInner = styled.div`
	width: 100vw;
	height: 100%;

	${media.min.sm} {
		width: 500px;
	}
`;
const DrawerHeading = styled.div`
	width: 100%;
	height: 50px;
`;
const HeadingBlock = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;
const DrawerContent = styled.div`
	width: 100%;
	height: calc(100% - 50px);
	position: relative;
`;
const DrawerContentInner = styled.div`
	padding: 0 1rem 1rem 1rem;
`;
const DrawerTitle = styled.div``;

interface DrawerBaseProps {
	isOpen?: boolean;
	onClose?: () => void;
	title?: string;
}

const DrawerBase: React.FC<DrawerBaseProps> = ({
	children,
	isOpen,
	onClose,
	title,
}) => {
	const [open, setOpen] = useState<boolean>(isOpen);
	const handleClose = () => {
		setOpen(false);
		if (onClose) onClose();
	};

	useEffect(() => setOpen(isOpen), [isOpen]);

	return (
		<>
			<Drawer anchor={'right'} onClose={handleClose} open={open}>
				<DrawerInner>
					<DrawerHeading>
						<HeadingBlock>
							<IconButton
								aria-label="close"
								onClick={onClose}
								sx={{
									width: '50px',
									height: '50px',
									color: (theme) => theme.palette.grey[500],
								}}
							>
								<MediaQuery minWidth={BREAKPOINTS.sm}>
									{(matches) => (matches ? <ArrowBackIcon /> : <CloseIcon />)}
								</MediaQuery>
							</IconButton>
							<DrawerTitle>
								<Typography.Title h3>{title}</Typography.Title>
							</DrawerTitle>
						</HeadingBlock>
					</DrawerHeading>
					<DrawerContent>
						<Scrollable.Base>
							<DrawerContentInner>{children}</DrawerContentInner>
						</Scrollable.Base>
					</DrawerContent>
				</DrawerInner>
			</Drawer>
		</>
	);
};

export default DrawerBase;
