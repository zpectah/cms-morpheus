import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';

interface PagesPageProps {}

const PagesPage = ({}: PagesPageProps) => {
	const { t } = useTranslation('page');

	// Page variables
	const page = {
		model: 'Pages',
		route: ROUTES.app.pages,
	};

	return (
		<Layout.Base
			route={page.route}
			titlePage={t(`page:${page.model}.page.title`)}
			titleMeta={t(`page:${page.model}.meta.title`)}
		>
			<div>PagesPage</div>
		</Layout.Base>
	);
};

export default PagesPage;
