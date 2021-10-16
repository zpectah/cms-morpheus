import React from 'react';

interface FormRowActionsProps {}

const FormRowActions: React.FC<FormRowActionsProps> = ({ children }) => {
	return (
		<>
			<div>{children}</div>
		</>
	);
};

export default FormRowActions;
