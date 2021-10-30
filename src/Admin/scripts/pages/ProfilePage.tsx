import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';

interface ProfilePageProps {}

const ProfilePage = ({}: ProfilePageProps) => {
	const { t } = useTranslation('page');

	// Page variables
	const page = {
		model: 'Profile',
		route: ROUTES.app.profile,
	};

	return (
		<Layout.Base
			route={page.route}
			titlePage={t(`page:${page.model}.page.title`)}
			titleMeta={t(`page:${page.model}.meta.title`)}
		>
			<div>ProfilePage</div>
		</Layout.Base>
	);
};

export default ProfilePage;
