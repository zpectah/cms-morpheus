import React, { useEffect, useState } from 'react';

import DialogBase from './DialogBase';

interface ConfirmDialogProps {
	isOpen?: boolean;
	onClose?: () => void;
}

const ConfirmDialog = ({ isOpen = false, onClose }: ConfirmDialogProps) => {
	const [open, setOpen] = useState<boolean>(isOpen);
	const handleClose = () => {
		setOpen(false);
		if (onClose) onClose();
	};

	useEffect(() => setOpen(isOpen), [isOpen]);

	return (
		<>
			<DialogBase
				isOpen={open}
				onClose={handleClose}
				titleChildren={<>Demo ConfirmDialog title</>}
				footerChildren={<>ConfirmDialog footer actions...</>}
				size={'sm'}
			>
				<div>ConfirmDialog</div>
			</DialogBase>
		</>
	);
};

export default ConfirmDialog;
