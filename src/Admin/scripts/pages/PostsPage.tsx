import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';

interface PostsPageProps {}

const PostsPage = ({}: PostsPageProps) => {
	const { t } = useTranslation('page');

	return (
		<Layout.Base route={ROUTES.app.posts}>
			<div>PostsPage</div>
		</Layout.Base>
	);
};

export default PostsPage;
