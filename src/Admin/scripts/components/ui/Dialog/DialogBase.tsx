import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

interface ModalBaseProps {
	isOpen?: boolean;
	onClose?: () => void;
	labeledBy?: string;
	describedBy?: string;
	titleChildren?: React.ReactElement;
	footerChildren?: React.ReactElement;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	scroll?: 'paper' | 'body';
	dividers?: boolean;
}

const Transition = React.forwardRef(function Transition(props: any, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const DialogBase: React.FC<ModalBaseProps> = ({
	children,
	isOpen = false,
	onClose,
	labeledBy = 'modal-modal-title',
	describedBy = 'modal-modal-description',
	titleChildren,
	footerChildren,
	size = 'md',
	scroll = 'paper',
	dividers,
}) => {
	const [open, setOpen] = useState<boolean>(isOpen);
	const handleClose = () => {
		setOpen(false);
		if (onClose) onClose();
	};

	useEffect(() => setOpen(isOpen), [isOpen]);

	return (
		<>
			<Dialog
				onClose={handleClose}
				open={open}
				TransitionComponent={Transition}
				maxWidth={size}
				scroll={scroll}
				aria-describedby={describedBy}
				aria-labelledby={labeledBy}
				fullWidth
			>
				{titleChildren && (
					<DialogTitle>
						<>{titleChildren}</>
					</DialogTitle>
				)}
				<DialogContent dividers={dividers}>{children}</DialogContent>
				{footerChildren && <DialogActions>{footerChildren}</DialogActions>}
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			</Dialog>
		</>
	);
};
export default DialogBase;
