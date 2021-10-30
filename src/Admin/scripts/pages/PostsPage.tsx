import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import { pageObjectProps } from '../types/types';
import Layout from '../components/Layout';
import Posts from '../modules/Posts';

interface PostsPageProps {}

const PostsPage = ({}: PostsPageProps) => {
	const { t } = useTranslation('page');

	// Page variables
	const page: pageObjectProps = {
		model: 'Posts',
		route: ROUTES.app.posts,
	};

	return (
		<Layout.Base
			route={page.route}
			titlePage={t(`page:${page.model}.page.title`)}
			titleMeta={t(`page:${page.model}.meta.title`)}
		>
			<Posts />
		</Layout.Base>
	);
};

export default PostsPage;
