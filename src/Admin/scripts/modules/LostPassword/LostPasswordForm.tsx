import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Section, Button as UiButton } from '../../components/ui';
import Form from '../../components/Form';

const Wrapper = styled.div`
	width: 300px;
	height: auto;
	padding: 1rem 1rem;
	background-color: rgba(200, 200, 200, 0.25);
	border-radius: 0.5rem;
`;

interface LostPasswordFormProps {}

const LostPasswordForm: React.FC<LostPasswordFormProps> = ({}) => {
	const { t } = useTranslation(['messages', 'component']);
	const { control, handleSubmit, formState } = useForm({
		mode: 'all',
	});

	return (
		<Wrapper>
			<form name="lostPasswordForm">
				<Section.Base>
					<Form.RowActions>lostPasswordForm logo ...</Form.RowActions>
				</Section.Base>
				<Section.Base>
					<Form.Row>
						<TextField
							type="email"
							id="lostPasswordForm_email"
							label="E-mail"
							size="small"
							style={{
								width: '100%',
							}}
							required
						/>
					</Form.Row>
				</Section.Base>
				<Section.Base>
					<Form.RowActions>
						<UiButton.Primary
							onClick={() => {
								console.log('On form submit');
							}}
						>
							Submit
						</UiButton.Primary>
						<Button
							onClick={() => {
								console.log('Lost password toggle');
							}}
							color="primary"
						>
							Login
						</Button>
					</Form.RowActions>
				</Section.Base>
			</form>
		</Wrapper>
	);
};

export default LostPasswordForm;
