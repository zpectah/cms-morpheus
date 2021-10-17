import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';

import { Section, Button as UiButton } from '../../components/ui';
import Form from '../../components/Form';
import config from '../../config';
import { useProfile } from '../../hooks/App';
import { EMAIL_REGEX, ROUTES } from '../../constants';
import useUiToasts from '../../hooks/useUiToasts';

const Wrapper = styled.div`
	width: 300px;
	height: auto;
	padding: 1rem 1rem;
	background-color: rgba(200, 200, 200, 0.25);
	border-radius: 0.5rem;
`;

interface LostPasswordFormProps {}

const LostPasswordForm: React.FC<LostPasswordFormProps> = ({}) => {
	const { t } = useTranslation(['common', 'messages', 'component', 'input']);
	const { token } = useParams<any>();
	const [process, setProcess] = useState<boolean>(false);
	const [message, setMessage] = useState<string | null>(null);
	const [requestSend, setRequestSend] = useState<boolean>(false);
	const { userLostPassword, userLostPasswordReset, reloadProfile } =
		useProfile();
	const dispatch = useDispatch();
	const { createToasts } = useUiToasts(dispatch);
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

		return userLostPassword(master).then((response) => {
			setProcess(false);

			if (response?.data?.message) {
				switch (response.data.message) {
					case 'user_not_found':
						setMessage(t('message:error.user_notFound'));
						return null;

					case 'user_not_active':
						setMessage(t('message:error.user_notActive'));
						return null;

					case 'user_is_deleted':
						setMessage(t('message:error.user_isDeleted'));
						return null;

					case 'request_was_send':
						return reloadProfile().then(() => {
							setMessage(t('message:info.user_requestWasSend'));
						});
				}
			}
		});
	};

	const parameterHandler = (token) => {
		setProcess(true);
		setMessage('');

		return userLostPasswordReset({ token: token }).then((response) => {
			setRequestSend(true);
			setProcess(false);

			if (response?.data?.message) {
				switch (response.data.message) {
					case 'user_password_reset_error':
						createToasts({
							title: t('message:error.user_passwordResetError'),
							context: 'error',
						});
						// history.push(CFG.CMS.UNAUTHORIZED_REDIRECT_TARGET);
						break;

					case 'token_not_found':
						createToasts({
							title: t('messages:error.tokenNotFound'),
							context: 'error',
						});
						history.push(config.GLOBAL.Admin.UNAUTHORIZED_REDIRECT_TARGET);
						break;

					case 'request_not_found':
						createToasts({
							title: t('message:error.requestNotFound'),
							context: 'error',
						});
						history.push(config.GLOBAL.Admin.UNAUTHORIZED_REDIRECT_TARGET);
						break;

					case 'user_password_already_reset':
						createToasts({
							title: t('message:info.user_passwordAlreadyReset'),
							context: 'error',
						});
						history.push(config.GLOBAL.Admin.UNAUTHORIZED_REDIRECT_TARGET);
						break;

					case 'user_password_reset_success':
						createToasts({
							title: t('message:success.user_passwordResetSuccess'),
							context: 'success',
						});
						history.push(config.GLOBAL.Admin.UNAUTHORIZED_REDIRECT_TARGET);
						break;
				}
			}
		});
	};

	const loginHandler = () => {
		history.push(ROUTES.app.login.path);
	};

	useEffect(() => {
		if (token && !requestSend) parameterHandler(token);
	}, [token]);

	return (
		<Wrapper>
			<form name="lostPasswordForm">
				{token ? (
					<>
						<Section.Base>
							<Form.RowActions>
								<span>{t('message:info.processing')}</span>
								<>{message && <div>{message}</div>}</>
							</Form.RowActions>
						</Section.Base>
					</>
				) : (
					<>
						<Section.Base>
							<Form.RowActions>lostPasswordForm logo ...</Form.RowActions>
						</Section.Base>
						<Section.Base>
							<Controller
								name="lostPasswordForm_email"
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
						</Section.Base>
						<Section.Base>
							<Form.RowActions>
								<>{message && <div>{message}</div>}</>
							</Form.RowActions>
							<Form.RowActions>
								<UiButton.Primary
									onClick={handleSubmit(submitHandler)}
									disabled={!formState.isValid || process}
								>
									{t('btn.submit')}
								</UiButton.Primary>
								<Button onClick={loginHandler} color="primary">
									{t('label.logIn')}
								</Button>
							</Form.RowActions>
						</Section.Base>
					</>
				)}
			</form>
		</Wrapper>
	);
};

export default LostPasswordForm;
