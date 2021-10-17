import React from 'react';
import styled from 'styled-components';
import Container from '@mui/material/Container';

import { appProps, routeProps } from '../../types/types';

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	min-height: 45rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const WrapperInner = styled.div`
	width: 100%;
	height: auto;
	min-height: 100vh;
`;
const Sidebar = styled.div`
	width: ${(props) => props.theme.sidebar.maxWidth};
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	color: ${(props) => props.theme.sidebar.color};
	background-color: ${(props) => props.theme.sidebar.bg};
	z-index: ${(props) => props.theme.sidebar.zIndex};
`;
const ContentWrapper = styled.div`
	width: calc(100% - ${(props) => props.theme.sidebar.maxWidth});
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	color: ${(props) => props.theme.content.color};
	background-color: ${(props) => props.theme.content.bg};
	z-index: ${(props) => props.theme.content.zIndex};
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
	return (
		<Wrapper>
			<WrapperInner>
				<Sidebar>sidebar</Sidebar>
				<ContentWrapper>
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
