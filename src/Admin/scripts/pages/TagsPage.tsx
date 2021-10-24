import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';

interface TagsPageProps {}

const TagsPage = ({}: TagsPageProps) => {
	const { t } = useTranslation('page');

	// Page variables
	const page = {
		model: 'Tags',
		route: ROUTES.app.tags,
	};

	return (
		<Layout.Base
			route={page.route}
			titlePage={t(`page:${page.model}.page.title`)}
			titleMeta={t(`page:${page.model}.meta.title`)}
		>
			<div>TagsPage</div>
		</Layout.Base>
	);
};

export default TagsPage;
