import React from 'react';
import { useHistory } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

import { ROUTE_PATH_SUFFIX_DETAIL } from '../../../constants';
import PrimaryButton from './PrimaryButton';

interface NewItemButtonProps {
	routePath: string;
}

const NewItemButton: React.FC<NewItemButtonProps> = ({
	children,
	routePath,
}) => {
	const h = useHistory();
	const clickHandler = () => {
		h.push(`${routePath}${ROUTE_PATH_SUFFIX_DETAIL}/new`);
	};

	return (
		<PrimaryButton
			children={children}
			startIcon={<AddIcon />}
			onClick={clickHandler}
		/>
	);
};

export default NewItemButton;
