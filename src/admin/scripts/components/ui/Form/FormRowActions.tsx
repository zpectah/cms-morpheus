import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ align: FormRowActionsProps['align'] }>`
	width: auto;
	padding: 1rem 0;
	display: flex;
	align-items: center;

	${(props) =>
		props.align == 'left' &&
		`
		justify-content: flex-start;
	`}
	${(props) =>
		props.align == 'center' &&
		`
		justify-content: center;
	`}	
	${(props) =>
		props.align == 'right' &&
		`
		justify-content: flex-end;
	`}
`;

interface FormRowActionsProps {
	align?: 'left' | 'center' | 'right';
}

const FormRowActions: React.FC<FormRowActionsProps> = ({
	children,
	align = 'left',
}) => {
	return <Wrapper align={align} children={children} />;
};

export default FormRowActions;
