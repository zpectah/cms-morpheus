import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import { pageObjectProps } from '../types/types';
import Layout from '../components/Layout';
import Translations from '../modules/Translations';

interface TranslationsPageProps {}

const TranslationsPage = ({}: TranslationsPageProps) => {
	const { t } = useTranslation('page');

	// Page variables
	const page: pageObjectProps = {
		model: 'Translations',
		route: ROUTES.app.translations,
	};

	return (
		<Layout.Base
			route={page.route}
			titlePage={t(`page:${page.model}.page.title`)}
			titleMeta={t(`page:${page.model}.meta.title`)}
		>
			<Translations />
		</Layout.Base>
	);
};

export default TranslationsPage;
