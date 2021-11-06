import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import { pageObjectProps } from '../types/types';
import Layout from '../components/Layout';
import Profile from '../modules/Profile';

interface ProfilePageProps {}

const ProfilePage = ({}: ProfilePageProps) => {
	const { t } = useTranslation('page');

	// Page variables
	const page: pageObjectProps = {
		model: 'Profile',
		route: ROUTES.app.profile,
	};

	return (
		<Layout.Base
			route={page.route}
			titlePage={t(`page:${page.model}.page.title`)}
			titleMeta={t(`page:${page.model}.meta.title`)}
		>
			<Profile />
		</Layout.Base>
	);
};

export default ProfilePage;
