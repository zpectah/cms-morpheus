import React from 'react';
import styled from 'styled-components';

import { appProps, routeProps } from '../../types/types';

const Wrapper = styled.div``;
const WrapperInner = styled.div``;
const Sidebar = styled.div``;
const ContentWrapper = styled.div``;
const ContentHeading = styled.div``;
const ContentBlock = styled.div``;

interface BaseLayoutProps {
	route: routeProps;
	app?: appProps['app'];
	titleMeta?: string;
	titlePage?: string;
	headerChildren?: React.ReactElement | React.ReactElement[];
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	overrideMaxWidthDefault?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
	return (
		<Wrapper>
			<WrapperInner>
				<Sidebar>sidebar</Sidebar>
				<ContentWrapper>
					<ContentHeading>heading</ContentHeading>
					<ContentBlock>{children}</ContentBlock>
				</ContentWrapper>
			</WrapperInner>
		</Wrapper>
	);
};

export default BaseLayout;
