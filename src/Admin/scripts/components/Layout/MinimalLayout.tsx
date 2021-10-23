import React from 'react';
import styled from 'styled-components';
import Container from '@mui/material/Container';

import { appProps, routeProps } from '../../types/types';
import { layoutBase } from '../../styles/mixins';

const Wrapper = styled.div`
	${layoutBase}
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
