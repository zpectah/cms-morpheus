import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { EMAIL_REGEX, ROUTES } from '../../constants';
import { Section, Button as UiButton, Form } from '../../components/ui';
import { useProfile } from '../../hooks/App';

const Wrapper = styled.div`
	width: 300px;
	height: auto;
	padding: 1rem 1rem;
	background-color: rgba(200, 200, 200, 0.25);
	border-radius: 0.5rem;
`;

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = ({}) => {
	const { t } = useTranslation(['common', 'messages', 'input']);
	const [process, setProcess] = useState<boolean>(false);
	const [message, setMessage] = useState<string | null>(null);
	const { Profile, userLogin, reloadProfile, userLogout } = useProfile();
	const { control, handleSubmit, formState } = useForm({
		mode: 'all',
	});

	const history = useHistory();

	const submitHandler = (data) => {
		setProcess(true);
		setMessage('');

		const master = {
			...data,
		};

		return userLogin(master).then((response) => {
			setProcess(false);

			if (response?.data?.message) {
				switch (response.data.message) {
					case 'user_not_found':
						setMessage(t('messages:error.user_notFound'));
						return null;

					case 'user_not_active':
						setMessage(t('messages:error.user_notActive'));
						return null;

					case 'user_is_deleted':
						setMessage(t('messages:error.user_isDeleted'));
						return null;

					case 'user_password_not_match':
						setMessage(t('messages:error.user_passwordNotMatch'));
						return null;

					case 'user_login_success':
						setMessage(t('messages:success.user_loginSuccess'));
						return reloadProfile().then(() => {
							window.location.href = ROUTES.app.dashboard.path;
						});
				}
			}
		});
	};

	const logoutHandler = () => {
		userLogout({}).then(() => reloadProfile());
	};

	const dashboardHandler = () => {
		history.push(ROUTES.app.dashboard.path);
	};

	const lostPasswordHandler = () => {
		history.push(ROUTES.app['lost-password'].path);
	};

	return (
		<Wrapper>
			<form name="loginForm">
				<Section.Base>
					<Form.RowActions>LoginForm logo ...</Form.RowActions>
				</Section.Base>
				{Profile ? (
					<>
						<Section.Base>
							<Form.RowActions>
								<Button onClick={logoutHandler} color="primary">
									{t('label.logOut')}
								</Button>
								<Button onClick={dashboardHandler} color="primary">
									{t('label.returnToDashboard')}
								</Button>
							</Form.RowActions>
						</Section.Base>
					</>
				) : (
					<>
						<Section.Base>
							<Controller
								name="loginForm_email"
								control={control}
								rules={{ required: true }}
								defaultValue={''}
								render={({ field: { onChange, onBlur, value, ref, name } }) => (
									<Form.Row>
										<TextField
											type="email"
											name={name}
											value={value}
											onChange={onChange}
											onBlur={onBlur}
											label={t('input:email.label')}
											size="small"
											style={{
												width: '100%',
											}}
											required
											disabled={process}
										/>
									</Form.Row>
								)}
							/>
							<Controller
								name="loginForm_password"
								control={control}
								rules={{ required: true }}
								defaultValue={''}
								render={({ field: { onChange, onBlur, value, ref, name } }) => (
									<Form.Row>
										<TextField
											type="password"
											name={name}
											value={value}
											onChange={onChange}
											onBlur={onBlur}
											label={t('input:password.label')}
											size="small"
											style={{
												width: '100%',
											}}
											required
											disabled={process}
										/>
									</Form.Row>
								)}
							/>
						</Section.Base>
						<Section.Base>
							<>
								{message && (
									<Form.RowActions>
										<div>{message}</div>
									</Form.RowActions>
								)}
							</>
							<Form.RowActions>
								<UiButton.Primary
									onClick={handleSubmit(submitHandler)}
									disabled={process || !formState.isValid}
								>
									{t('label.logIn')}
								</UiButton.Primary>
								<Button onClick={lostPasswordHandler} color="primary">
									{t('label.lostPassword')}
								</Button>
							</Form.RowActions>
						</Section.Base>
					</>
				)}
			</form>
		</Wrapper>
	);
};
export default LoginForm;
