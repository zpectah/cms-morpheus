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
	maxWidth = 'md',
}) => {
	return (
		<Wrapper>
			<Container maxWidth={maxWidth}>
				<WrapperInner>{children}</WrapperInner>
			</Container>
		</Wrapper>
	);
};

export default MinimalLayout;
