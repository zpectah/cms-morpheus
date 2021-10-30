import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';
import LostPasswordForm from '../components/LostPassword/LostPasswordForm';

interface LostPasswordPageProps {}

const LostPasswordPage = ({}: LostPasswordPageProps) => {
	const { t } = useTranslation('page');

	// Page variables
	const page = {
		model: 'LostPassword',
		route: ROUTES.app['lost-password'],
	};

	return (
		<Layout.Minimal
			route={page.route}
			titleMeta={t(`page:${page.model}.meta.title`)}
		>
			<div>
				LostPasswordPage
				<LostPasswordForm />
			</div>
		</Layout.Minimal>
	);
};

export default LostPasswordPage;
