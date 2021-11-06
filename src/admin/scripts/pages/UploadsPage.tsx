import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import { pageObjectProps } from '../types/types';
import Layout from '../components/Layout';
import Uploads from '../modules/Uploads';

interface UploadsPageProps {}

const UploadsPage = ({}: UploadsPageProps) => {
	const { t } = useTranslation('page');

	// Page variables
	const page: pageObjectProps = {
		model: 'Uploads',
		route: ROUTES.app.uploads,
	};

	return (
		<Layout.Base
			route={page.route}
			titlePage={t(`page:${page.model}.page.title`)}
			titleMeta={t(`page:${page.model}.meta.title`)}
		>
			<Uploads />
		</Layout.Base>
	);
};

export default UploadsPage;
