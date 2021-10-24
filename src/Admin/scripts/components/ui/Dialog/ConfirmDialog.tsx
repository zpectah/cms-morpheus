import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';

import DialogBase from './DialogBase';
import UiButton from '../Button';

const ConfirmContent = styled.div`
	width: 100%;
	height: auto;
	padding-top: 1.5rem;
	padding-bottom: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

interface ConfirmDialogProps {
	isOpen?: boolean;
	onClose?: () => void;
	onConfirm?: () => void;
	confirmMethod?: 'default' | 'delete' | 'logOut';
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
	children,
	isOpen = false,
	onClose,
	onConfirm,
	confirmMethod = 'default',
}) => {
	const [open, setOpen] = useState<boolean>(isOpen);
	const handleClose = () => {
		setOpen(false);
		if (onClose) onClose();
	};
	const handleConfirm = () => {
		setOpen(false);
		if (onClose) onClose();
		if (onConfirm) onConfirm();
	};

	const messages = {
		default: {
			title: 'Are you sure?',
		},
		delete: {
			title: 'Do you want delete this?',
		},
		logOut: {
			title: 'Do you want to log out?',
		},
	};

	useEffect(() => setOpen(isOpen), [isOpen]);

	return (
		<>
			<DialogBase
				isOpen={open}
				onClose={handleClose}
				titleChildren={<>{messages[confirmMethod].title}</>}
				footerChildren={
					<>
						<Button onClick={handleClose}>Close</Button>
						<UiButton.Primary onClick={handleConfirm}>Confirm</UiButton.Primary>
					</>
				}
				size={'xs'}
			>
				<ConfirmContent>{children}</ConfirmContent>
			</DialogBase>
		</>
	);
};

export default ConfirmDialog;
