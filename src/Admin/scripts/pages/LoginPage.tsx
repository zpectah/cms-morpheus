import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';
import LoginForm from '../modules/Login/LoginForm';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = ({}) => {
	const { t } = useTranslation('page');

	return (
		<Layout.Minimal route={ROUTES.app.login}>
			<div>
				LoginPage
				<LoginForm />
			</div>
		</Layout.Minimal>
	);
};

export default LoginPage;
