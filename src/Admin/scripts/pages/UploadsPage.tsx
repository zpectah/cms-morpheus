import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../modules/Layout';

interface UploadsPageProps {}

const UploadsPage = ({}: UploadsPageProps) => {
	const { t } = useTranslation('page');

	// Page variables
	const page = {
		model: 'Uploads',
		route: ROUTES.app.uploads,
	};

	return (
		<Layout.Base
			route={page.route}
			titlePage={t(`page:${page.model}.page.title`)}
			titleMeta={t(`page:${page.model}.meta.title`)}
		>
			<div>UploadsPage</div>
		</Layout.Base>
	);
};

export default UploadsPage;
