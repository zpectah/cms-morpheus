import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';
import LostPasswordForm from '../modules/LostPassword/LostPasswordForm';

interface LostPasswordPageProps {}

const LostPasswordPage = ({}: LostPasswordPageProps) => {
	const { t } = useTranslation('page');

	return (
		<Layout.Minimal route={ROUTES.app['lost-password']}>
			<div>
				LostPasswordPage
				<LostPasswordForm />
			</div>
		</Layout.Minimal>
	);
};

export default LostPasswordPage;
