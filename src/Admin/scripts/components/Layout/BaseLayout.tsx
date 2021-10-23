import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';

import { appProps, routeProps } from '../../types/types';
import media from '../../styles/responsive';
import {
	layoutBase,
	layoutContainerBase,
	layoutContentBase,
} from '../../styles/mixins';
import Sidebar from '../Sidebar';

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
	transition: width ${(props) => props.theme.sidebar.transitionDuration}
			ease-in-out 0s,
		left ${(props) => props.theme.sidebar.transitionDuration} ease-in-out 0s;

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
const ContentHeading = styled.div``;
const ContentBlock = styled.div``;
const ContentFooter = styled.div``;

interface BaseLayoutProps {
	route: routeProps;
	app?: appProps['app'];
	titleMeta?: string;
	titlePage?: string;
	headerChildren?: React.ReactElement | React.ReactElement[];
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	overrideMaxWidthDefault?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
	children,
	maxWidth = 'lg',
}) => {
	const store = useSelector((store: any) => store);
	const params: any = useParams();
	const { t } = useTranslation(['common', 'types']);
	const [sidebarOpen, setSidebarOpen] = useState<boolean>(store.ui.sideBarOpen);

	useEffect(() => {
		setSidebarOpen(store.ui.sideBarOpen);
	}, [store.ui.sideBarOpen]);

	return (
		<Wrapper>
			<WrapperInner>
				<Sidebar
					open={sidebarOpen}
					setSidebarOpen={() => setSidebarOpen(!sidebarOpen)}
				/>
				<ContentWrapper open={sidebarOpen}>
					<Container maxWidth={maxWidth}>
						<ContentHeading>heading</ContentHeading>
						<ContentBlock>{children}</ContentBlock>
						<ContentFooter>footer</ContentFooter>
					</Container>
				</ContentWrapper>
			</WrapperInner>
		</Wrapper>
	);
};

export default BaseLayout;
