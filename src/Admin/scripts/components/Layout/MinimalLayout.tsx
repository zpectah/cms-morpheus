import React from 'react';
import Helmet from 'react-helmet';
import Container from '@mui/material/Container';
import styled from 'styled-components';

import config from '../../config';
import { appProps, routeProps } from '../../types/types';
import { layoutBase } from '../../styles/mixins';
import Footer from './Footer';

const Wrapper = styled.div`
	${layoutBase}
`;
const ContentBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

interface MinimalLayoutProps {
	route: routeProps;
	app?: appProps['app'];
	titleMeta?: string;
	titlePage?: string;
	noFooter?: boolean;
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const MinimalLayout: React.FC<MinimalLayoutProps> = ({
	children,
	route,
	app = 'App',
	titleMeta,
	titlePage,
	noFooter = false,
	maxWidth = 'md',
}) => {
	return (
		<>
			<Helmet>
				<title>
					{config.GLOBAL.Admin.META.name}
					{titleMeta ? ` | ${titleMeta}` : ''}
				</title>
			</Helmet>
			<Wrapper>
				<Container maxWidth={maxWidth}>
					<ContentBlock>{children}</ContentBlock>
					{!noFooter && <Footer />}
				</Container>
			</Wrapper>
		</>
	);
};

export default MinimalLayout;
