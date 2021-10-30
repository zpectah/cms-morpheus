import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import { pageObjectProps } from '../types/types';
import Layout from '../components/Layout';
import Categories from '../modules/Categories';

interface CategoriesPageProps {}

const CategoriesPage = ({}: CategoriesPageProps) => {
	const { t } = useTranslation('page');

	// Page variables
	const page: pageObjectProps = {
		model: 'Categories',
		route: ROUTES.app.categories,
	};

	return (
		<Layout.Base
			route={page.route}
			titlePage={t(`page:${page.model}.page.title`)}
			titleMeta={t(`page:${page.model}.meta.title`)}
		>
			<Categories />
		</Layout.Base>
	);
};

export default CategoriesPage;
