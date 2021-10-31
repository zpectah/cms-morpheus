import React from 'react';

interface FormWrapperProps {
	name?: string;
	id?: string;
}

const FormWrapper: React.FC<FormWrapperProps> = (props) => {
	return <form {...props} />;
};

export default FormWrapper;
