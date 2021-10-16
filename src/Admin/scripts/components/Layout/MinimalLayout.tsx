import React from 'react';

import { appProps, routeProps } from '../../types/types';

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
		<div>
			<>{children}</>
		</div>
	);
};

export default MinimalLayout;
