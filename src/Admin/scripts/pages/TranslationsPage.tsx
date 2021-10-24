import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';

interface TranslationsPageProps {}

const TranslationsPage = ({}: TranslationsPageProps) => {
	const { t } = useTranslation('page');

	// Page variables
	const page = {
		model: 'Translations',
		route: ROUTES.app.translations,
	};

	return (
		<Layout.Base
			route={page.route}
			titlePage={t(`page:${page.model}.page.title`)}
			titleMeta={t(`page:${page.model}.meta.title`)}
		>
			<div>TranslationsPage</div>
		</Layout.Base>
	);
};

export default TranslationsPage;
