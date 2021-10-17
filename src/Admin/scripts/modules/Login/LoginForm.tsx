import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Section, Button as UiButton } from '../../components/ui';
import Form from '../../components/Form';

const Wrapper = styled.div``;

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = ({}) => {
	const { t } = useTranslation(['messages', 'component']);
	const { control, handleSubmit, formState } = useForm({
		mode: 'all',
	});

	return (
		<Wrapper>
			<form name="loginForm">
				<Section.Base>
					LoginForm
					<Form.Row label="E-mail" id="loginForm_email" isRequired>
						<TextField
							type="email"
							id="loginForm_email"
							label="E-mail"
							required
						/>
					</Form.Row>
					<Form.Row label="Password" isRequired>
						<TextField
							type="password"
							id="loginForm_password"
							label="Password"
							required
						/>
					</Form.Row>
				</Section.Base>
				<Section.Base>
					<Form.RowActions>
						<Button color="primary" variant="contained">
							Button
						</Button>
						actions button <UiButton.Primary>Submit me...</UiButton.Primary>
					</Form.RowActions>
				</Section.Base>
			</form>
		</Wrapper>
	);
};

export default LoginForm;
