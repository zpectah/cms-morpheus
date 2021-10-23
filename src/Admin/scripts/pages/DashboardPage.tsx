import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';
import {
	Section,
	Button as UiButton,
	Dialog as UiDialog,
} from '../components/ui';
import { useProfile } from '../hooks/App';
import useUiToasts from '../hooks/useUiToasts';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

interface DashboardPageProps {}

const DashboardPage: React.FC<DashboardPageProps> = ({}) => {
	const { t } = useTranslation('page');
	const { userLogout } = useProfile();
	const history = useHistory();
	const dispatch = useDispatch();
	const { createToasts } = useUiToasts(dispatch);

	// DEMO
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [confirmOpen, setConfirmOpen] = React.useState(false);
	const handleConfirmOpen = () => setConfirmOpen(true);
	const handleConfirmClose = () => setConfirmOpen(false);
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
			<>
				<Button onClick={handleOpen}>Open modal</Button>
				<Button onClick={handleConfirmOpen}>Open Confirm modal</Button>
				<UiDialog.Base
					isOpen={open}
					onClose={handleClose}
					titleChildren={<>Demo Modal title</>}
					footerChildren={<>Modal footer actions...</>}
				>
					<div>
						UiModal ...
						<Button onClick={handleConfirmOpen}>Open Confirm modal</Button>
					</div>
				</UiDialog.Base>
				<UiDialog.Confirm
					isOpen={confirmOpen}
					onClose={() => handleConfirmClose()}
					// titleChildren={<>Demo Modal title</>}
					// footerChildren={<>Modal footer actions...</>}
				/>
			</>
		</Layout.Base>
	);
};

export default DashboardPage;
