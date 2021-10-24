import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../modules/Layout';

interface PostsPageProps {}

const PostsPage = ({}: PostsPageProps) => {
	const { t } = useTranslation('page');

	// Page variables
	const page = {
		model: 'Posts',
		route: ROUTES.app.posts,
	};

	return (
		<Layout.Base
			route={page.route}
			titlePage={t(`page:${page.model}.page.title`)}
			titleMeta={t(`page:${page.model}.meta.title`)}
		>
			<div>PostsPage</div>
		</Layout.Base>
	);
};

export default PostsPage;
