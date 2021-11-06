import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useTranslation } from 'react-i18next';

import config from '../../config';
import { appProps, routeProps } from '../../types/types';
import media from '../../styles/responsive';
import { layoutBase, layoutContainerBase } from '../../styles/mixins';
import { Typography } from '../ui';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const Wrapper = styled.div`
	${layoutBase}
`;
const WrapperInner = styled.div<{ open: boolean }>`
	width: 100%;
	height: auto;
	min-height: 100vh;
`;
const ContentWrapper = styled.div`
	${layoutContainerBase}

	width: 100%;
	margin-top: ${(props) => props.theme.sidebar.minWidth};
	top: 0;
	left: 0;
	transition: width ${(props) => props.theme.content.transitionDuration}
			ease-in-out 0s,
		left ${(props) => props.theme.content.transitionDuration} ease-in-out 0s;

	${media.min.sm} {
		width: ${(props) => `calc(100% - ${props.theme.sidebar.minWidth})`};
		margin-top: 0;
		left: ${(props) => props.theme.sidebar.minWidth};
	}
	${media.min.md} {
		width: ${(props) =>
			props.open
				? `calc(100% - (${props.theme.sidebar.minWidth} + ${props.theme.sidebar.maxWidth}))`
				: `calc(100% - ${props.theme.sidebar.minWidth})`};
		margin-top: 0;
		left: ${(props) =>
			props.open
				? `calc(${props.theme.sidebar.maxWidth} + ${props.theme.sidebar.minWidth})`
				: props.theme.sidebar.minWidth};
	}
`;
const ContentBlock = styled.div``;

interface BaseLayoutProps {
	route: routeProps;
	app?: appProps['app'];
	titleMeta?: string;
	titlePage?: string;
	headerChildren?: React.ReactElement | React.ReactElement[];
	footerAlign?: 'left' | 'center' | 'right';
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	overrideMaxWidthDefault?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
	children,
	route,
	app = 'App',
	titleMeta,
	titlePage,
	headerChildren,
	footerAlign = 'left',
	maxWidth = 'lg',
	overrideMaxWidthDefault = 'lg',
}) => {
	const store = useSelector((store: any) => store);
	const params: any = useParams();
	const history: any = useHistory();
	const { t } = useTranslation(['common', 'types']);
	const [sidebarOpen, setSidebarOpen] = useState<boolean>(store.ui.sideBarOpen);

	const returnHandler = () => history.push(route.path);

	useEffect(() => {
		setSidebarOpen(store.ui.sideBarOpen);
	}, [store.ui.sideBarOpen]);

	return (
		<>
			<Helmet>
				<title>
					{config.GLOBAL.Admin.META.name}
					{titleMeta ? ` | ${titleMeta}` : ''}
					{params.id
						? ` : ${
								params.id == 'new' ? t('common:btn.newItem') : `#${params.id}`
						  }`
						: ''}
					{params.panel ? ` : ${t(`types:${params.panel}`)}` : ''}
				</title>
			</Helmet>
			<Wrapper>
				<WrapperInner>
					<Sidebar
						open={sidebarOpen}
						setSidebarOpen={() => setSidebarOpen(!sidebarOpen)}
					/>
					<ContentWrapper open={sidebarOpen}>
						<Container maxWidth={maxWidth}>
							<Header secondaryChildren={headerChildren}>
								<>
									{params.id && (
										<IconButton
											onClick={returnHandler}
											style={{ marginRight: '.5rem' }}
										>
											<ArrowBackIosNewIcon />
										</IconButton>
									)}
									<Typography.Title h1>{titlePage}</Typography.Title>
								</>
							</Header>
							<ContentBlock>{children}</ContentBlock>
							<Footer align={footerAlign} />
						</Container>
					</ContentWrapper>
				</WrapperInner>
			</Wrapper>
		</>
	);
};

export default BaseLayout;
