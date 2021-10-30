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
	noFooter?: boolean;
	footerAlign?: 'left' | 'center' | 'right';
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const MinimalLayout: React.FC<MinimalLayoutProps> = ({
	children,
	route,
	app = 'App',
	titleMeta,
	noFooter = false,
	footerAlign = 'center',
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
					{!noFooter && <Footer align={footerAlign} />}
				</Container>
			</Wrapper>
		</>
	);
};

export default MinimalLayout;
