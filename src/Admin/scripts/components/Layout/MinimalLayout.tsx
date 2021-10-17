import React from 'react';
import styled from 'styled-components';

import { appProps, routeProps } from '../../types/types';

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	min-height: 45rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const WrapperInner = styled.div``;

interface MinimalLayoutProps {
	route: routeProps;
	app?: appProps['app'];
	titleMeta?: string;
	titlePage?: string;
	noFooter?: boolean;
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const MinimalLayout: React.FC<MinimalLayoutProps> = ({ children }) => {
	return (
		<Wrapper>
			<WrapperInner>{children}</WrapperInner>
		</Wrapper>
	);
};

export default MinimalLayout;
