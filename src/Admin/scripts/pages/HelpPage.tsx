import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../modules/Layout';

interface HelpPageProps {}

const HelpPage = ({}: HelpPageProps) => {
	const { t } = useTranslation('page');

	// Page variables
	const page = {
		model: 'Help',
		route: ROUTES.app.help,
	};

	return (
		<Layout.Base
			route={page.route}
			titlePage={t(`page:${page.model}.page.title`)}
			titleMeta={t(`page:${page.model}.meta.title`)}
		>
			<div>HelpPage</div>
		</Layout.Base>
	);
};

export default HelpPage;
