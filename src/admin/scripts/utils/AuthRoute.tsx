import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import config from '../config';
import { useProfile } from '../hooks/App';
import { Preloader } from '../components/ui';

interface AuthRouteProps {
	exact?: true | false;
	path: string | string[];
	component: any;
	auth: number;
}

const AuthRoute: React.FC<AuthRouteProps> = (props) => {
	const { exact, path, component, auth } = props;
	const { Profile, isProfileLoading } = useProfile();
	const [redirect, setRedirect] = useState<string | null>(null);
	const [userReady, setUserReady] = useState<boolean>(true);

	const authorizeAccess = () => {
		const currentUser = Profile;

		if (!currentUser && !isProfileLoading) {
			setRedirect(config.GLOBAL.Admin.UNAUTHORIZED_REDIRECT_TARGET);

			return;
		} else if (currentUser && !isProfileLoading) {
			if (auth > currentUser.user_level) {
				// message.error('Unauthorized access', 3.5);
				console.warn('Unauthorized access');

				setRedirect(config.GLOBAL.Admin.RESTRICTED_REDIRECT_TARGET);
			}
		}

		setUserReady(true);
	};

	useEffect(authorizeAccess, [Profile, auth]);

	if (isProfileLoading)
		return (
			<div>
				<Preloader.Page />
			</div>
		);

	if (redirect) {
		return <Redirect to={redirect} />;
	} else if (userReady) {
		return <Route exact={exact} path={path} component={component} />;
	} else {
		return (
			<div>
				<Preloader.Page />
			</div>
		);
	}
};
export default AuthRoute;
