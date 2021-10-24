import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';
import LoginForm from '../modules/Login/LoginForm';

interface LoginPageProps {}

const LoginPage = ({}: LoginPageProps) => {
	const { t } = useTranslation('page');

	// Page variables
	const page = {
		model: 'Login',
		route: ROUTES.app.login,
	};

	return (
		<Layout.Minimal
			route={page.route}
			titleMeta={t(`page:${page.model}.meta.title`)}
		>
			<div>
				LoginPage
				<LoginForm />
			</div>
		</Layout.Minimal>
	);
};

export default LoginPage;
