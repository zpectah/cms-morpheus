import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';

interface CategoriesPageProps {}

const CategoriesPage = ({}: CategoriesPageProps) => {
	const { t } = useTranslation('page');

	// Page variables
	const page = {
		model: 'Categories',
		route: ROUTES.app.categories,
	};

	return (
		<Layout.Base
			route={page.route}
			titlePage={t(`page:${page.model}.page.title`)}
			titleMeta={t(`page:${page.model}.meta.title`)}
		>
			<div>CategoriesPage</div>
		</Layout.Base>
	);
};

export default CategoriesPage;
