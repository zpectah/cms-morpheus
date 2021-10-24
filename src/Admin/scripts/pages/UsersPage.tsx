import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';

interface UsersPageProps {}

const UsersPage = ({}: UsersPageProps) => {
	const { t } = useTranslation('page');

	// Page variables
	const page = {
		model: 'Users',
		route: ROUTES.app.users,
	};

	return (
		<Layout.Base
			route={page.route}
			titlePage={t(`page:${page.model}.page.title`)}
			titleMeta={t(`page:${page.model}.meta.title`)}
		>
			<div>UsersPage</div>
		</Layout.Base>
	);
};

export default UsersPage;
