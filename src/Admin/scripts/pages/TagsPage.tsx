import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';

interface TagsPageProps {}

const TagsPage = ({}: TagsPageProps) => {
	const { t } = useTranslation('page');

	return (
		<Layout.Base route={ROUTES.app.tags}>
			<div>TagsPage</div>
		</Layout.Base>
	);
};

export default TagsPage;
