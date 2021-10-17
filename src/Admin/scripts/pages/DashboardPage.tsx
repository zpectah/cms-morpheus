import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';
import { Section, Button as UiButton } from '../components/ui';
import { useProfile } from '../hooks/App';

interface DashboardPageProps {}

const DashboardPage: React.FC<DashboardPageProps> = ({}) => {
	const { t } = useTranslation('page');
	const { userLogout } = useProfile();
	const history = useHistory();

	// DEMO
	const logoutHandler = () => {
		userLogout({}).then(() => {
			// history.push(ROUTES.app.login.path);
			window.location.href = ROUTES.app.login.path;
		});
	};
	//

	return (
		<Layout.Base route={ROUTES.app.dashboard}>
			<div>
				DashboardPage
				<br />
				<UiButton.Primary onClick={() => logoutHandler()}>
					Logout
				</UiButton.Primary>
			</div>
		</Layout.Base>
	);
};

export default DashboardPage;
