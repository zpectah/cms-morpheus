import React from 'react';
import { styled } from '@mui/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const ButtonElement = styled(IconButton)({});

interface CloseButtonProps extends IconButtonProps {}

const CloseButton: React.FC<CloseButtonProps> = (props) => {
	return (
		<ButtonElement {...props}>
			<CloseIcon />
		</ButtonElement>
	);
};

export default CloseButton;
