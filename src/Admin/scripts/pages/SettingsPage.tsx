import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';

interface SettingsPageProps {}

const SettingsPage = ({}: SettingsPageProps) => {
	const { t } = useTranslation('page');

	// Page variables
	const page = {
		model: 'Settings',
		route: ROUTES.app.settings,
	};

	return (
		<Layout.Base
			route={page.route}
			titlePage={t(`page:${page.model}.page.title`)}
			titleMeta={t(`page:${page.model}.meta.title`)}
		>
			<div>SettingsPage</div>
		</Layout.Base>
	);
};

export default SettingsPage;
