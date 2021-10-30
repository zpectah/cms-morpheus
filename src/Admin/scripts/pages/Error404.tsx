import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import { pageObjectProps } from '../types/types';
import Layout from '../components/Layout';

interface Error404PageProps {}

const Error404Page = ({}: Error404PageProps) => {
	const { t } = useTranslation('page');

	// Page variables
	const page: pageObjectProps = {
		model: 'Error404',
		route: ROUTES.app['error-404'],
	};

	return (
		<Layout.Minimal route={page.route} noFooter>
			<div>Error404Page</div>
		</Layout.Minimal>
	);
};

export default Error404Page;
