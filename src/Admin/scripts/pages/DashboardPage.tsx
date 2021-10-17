import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';
import { Section, Button as UiButton } from '../components/ui';
import { useProfile } from '../hooks/App';
import useUiToasts from '../hooks/useUiToasts';

interface DashboardPageProps {}

const DashboardPage: React.FC<DashboardPageProps> = ({}) => {
	const { t } = useTranslation('page');
	const { userLogout } = useProfile();
	const history = useHistory();
	const dispatch = useDispatch();
	const { createToasts } = useUiToasts(dispatch);

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
				<br />
				<UiButton.Close />
				<br />
				<Section.Base>
					<div>
						<button
							type="button"
							onClick={() =>
								createToasts({
									title: 'Toast title',
									context: 'default',
								})
							}
						>
							open default
						</button>
						<br />
						<button
							type="button"
							onClick={() =>
								createToasts({
									title: 'Toast success title',
									context: 'success',
									timeout: 3500,
								})
							}
						>
							open success
						</button>
						<br />
						<button
							type="button"
							onClick={() =>
								createToasts({
									title: 'Toast error title',
									context: 'error',
									timeout: 3500,
								})
							}
						>
							open error
						</button>
					</div>
				</Section.Base>
			</div>
		</Layout.Base>
	);
};

export default DashboardPage;
