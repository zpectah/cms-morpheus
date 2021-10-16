import React from 'react';

import { appProps, routeProps } from '../../types/types';

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
		<div>
			<>{children}</>
		</div>
	);
};

export default BaseLayout;
