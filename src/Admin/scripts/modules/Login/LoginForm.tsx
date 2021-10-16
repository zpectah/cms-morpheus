import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Section } from '../../components/ui';
import Form from '../../components/Form';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = ({}) => {
	const { t } = useTranslation(['messages', 'component']);
	const { control, handleSubmit, formState } = useForm({
		mode: 'all',
	});

	return (
		<form name="loginForm">
			<Section.Base>
				LoginForm
				<Form.Row label="E-mail" isRequired>
					<input type="email" name="loginForm_email" placeholder="E-mail" />
				</Form.Row>
				<Form.Row label="Password" isRequired>
					<input
						type="password"
						name="loginForm_password"
						placeholder="Password"
					/>
				</Form.Row>
			</Section.Base>
			<Section.Base>
				<Form.RowActions>actions button</Form.RowActions>
			</Section.Base>
		</form>
	);
};

export default LoginForm;
