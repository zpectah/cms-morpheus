import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';

interface UploadsPageProps {}

const UploadsPage = ({}: UploadsPageProps) => {
	const { t } = useTranslation('page');

	return (
		<Layout.Base route={ROUTES.app.uploads}>
			<div>UploadsPage</div>
		</Layout.Base>
	);
};

export default UploadsPage;
