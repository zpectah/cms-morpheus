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

const DrawerElement = styled.div`
	width: 100vw;
	height: 100%;
`;
const DrawerSizeMd = styled(DrawerElement)`
	${media.min.sm} {
		width: ${BREAKPOINTS.sm - 50}px;
	}
`;
const DrawerSizeLg = styled(DrawerElement)`
	${media.min.md} {
		width: ${BREAKPOINTS.md - 50}px;
	}
`;
const DrawerSizeXl = styled(DrawerElement)`
	${media.min.lg} {
		width: ${BREAKPOINTS.lg - 50}px;
	}
`;

const DrawerHeading = styled.div`
	width: 100%;
	height: 60px;
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
	height: calc(100% - 60px);
	position: relative;
`;
const DrawerContentInner = styled.div`
	padding: 0 1.5rem 1.5rem 1.5rem;
`;
const DrawerTitle = styled.div``;

interface DrawerBaseProps {
	isOpen?: boolean;
	onClose?: () => void;
	title?: string;
	size?: 'md' | 'lg' | 'xl';
}

const DrawerBase: React.FC<DrawerBaseProps> = ({
	children,
	isOpen,
	onClose,
	title,
	size = 'md',
}) => {
	const [open, setOpen] = useState<boolean>(isOpen);
	const handleClose = () => {
		setOpen(false);
		if (onClose) onClose();
	};
	const component = {
		md: DrawerSizeMd,
		lg: DrawerSizeLg,
		xl: DrawerSizeXl,
	};
	const InnerComponent = component[size];
	const minWidth = {
		md: 'sm',
		lg: 'md',
		xl: 'lg',
	};

	useEffect(() => setOpen(isOpen), [isOpen]);

	return (
		<>
			<Drawer anchor={'right'} onClose={handleClose} open={open}>
				<InnerComponent>
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
								<MediaQuery minWidth={BREAKPOINTS[minWidth[size]]}>
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
				</InnerComponent>
			</Drawer>
		</>
	);
};

export default DrawerBase;
