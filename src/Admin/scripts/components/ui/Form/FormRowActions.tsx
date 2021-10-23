import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: auto;
	padding: 1rem 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

interface FormRowActionsProps {}

const FormRowActions: React.FC<FormRowActionsProps> = ({ children }) => {
	return (
		<Wrapper>
			<div>{children}</div>
		</Wrapper>
	);
};

export default FormRowActions;
