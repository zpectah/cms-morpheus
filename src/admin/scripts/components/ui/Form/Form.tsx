import React from 'react';
import Paper from '@mui/material/Paper';

interface FormWrapperProps {
	name?: string;
	id?: string;
}

const FormWrapper: React.FC<FormWrapperProps> = (props) => {
	return (
		<Paper sx={{ width: '100%', mb: 2 }}>
			<div style={{ padding: '1.5rem' }}>
				<form {...props} />
			</div>
		</Paper>
	);
};

export default FormWrapper;
