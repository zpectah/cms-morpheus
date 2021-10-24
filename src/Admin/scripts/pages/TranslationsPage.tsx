import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';

interface TranslationsPageProps {}

const TranslationsPage = ({}: TranslationsPageProps) => {
	const { t } = useTranslation('page');

	return (
		<Layout.Base route={ROUTES.app.translations}>
			<div>TranslationsPage</div>
		</Layout.Base>
	);
};

export default TranslationsPage;
