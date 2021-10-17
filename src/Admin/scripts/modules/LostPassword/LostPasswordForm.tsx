import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Section, Button } from '../../components/ui';
import Form from '../../components/Form';

interface LostPasswordFormProps {}

const LostPasswordForm: React.FC<LostPasswordFormProps> = ({}) => {
	const { t } = useTranslation(['messages', 'component']);
	const { control, handleSubmit, formState } = useForm({
		mode: 'all',
	});

	return (
		<form name="lostPasswordForm">
			<Section.Base>
				LostPasswordForm
				<Form.Row label="E-mail" isRequired>
					<input
						type="email"
						name="LostPasswordForm_email"
						placeholder="E-mail"
					/>
				</Form.Row>
			</Section.Base>
			<Section.Base>
				<Form.RowActions>
					actions button <Button.Primary>Submit me...</Button.Primary>{' '}
				</Form.RowActions>
			</Section.Base>
		</form>
	);
};

export default LostPasswordForm;
