import React from 'react';

import { string } from '../../../../libs/utils';

interface FormRowProps {
	label?: string;
	id?: string;
	isRequired?: boolean;
	errors?: string[];
}

const FormRow: React.FC<FormRowProps> = ({
	label,
	id = string.getToken(2, ''),
	isRequired,
	children,
	errors = [],
}) => {
	return (
		<div>
			{label && (
				<label htmlFor={id}>
					{label}
					{isRequired && <>*</>}
				</label>
			)}
			<div>{children}</div>
			{errors.length > 0 && (
				<div>
					{errors.map((error, key) => (
						<div key={key}>{error}</div>
					))}
				</div>
			)}
		</div>
	);
};
export default FormRow;
