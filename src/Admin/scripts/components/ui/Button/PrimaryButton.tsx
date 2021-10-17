import React from 'react';
import { styled } from '@mui/styles';
import Button, { ButtonProps } from '@mui/material/Button';

const ButtonElement = styled(Button)({
	background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
	border: 0,
	borderRadius: 3,
	boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	color: 'white',
});

interface PrimaryButtonProps extends ButtonProps {}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
	return <ButtonElement {...props} />;
};

export default PrimaryButton;
