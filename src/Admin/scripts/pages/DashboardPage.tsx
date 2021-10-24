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
	Drawer,
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
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const handleDrawerOpen = () => setDrawerOpen(true);
	const handleDrawerClose = () => setDrawerOpen(false);
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
				<Button onClick={handleDrawerOpen}>Open drawer</Button>
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
				<Drawer.Base
					isOpen={drawerOpen}
					onClose={() => handleDrawerClose()}
					title={'Demo drawer title...'}
				>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
						tempor sem, sed mattis nisi. Integer feugiat finibus tortor, a
						consectetur magna facilisis eu. Mauris vehicula tincidunt nunc, eget
						euismod lectus gravida vitae. Sed risus ex, malesuada id efficitur
						et, fringilla ut est. Orci varius natoque penatibus et magnis dis
						parturient montes, nascetur ridiculus mus. Maecenas malesuada
						volutpat turpis id rhoncus. Suspendisse fringilla malesuada turpis,
						ut laoreet justo dictum non. Phasellus nibh augue, laoreet ut
						feugiat non, rutrum dignissim orci. Nulla congue consectetur
						placerat.
						<br />
						Nulla auctor mattis purus ut molestie. Nulla eu imperdiet est, sed
						tristique dolor. Pellentesque elementum purus nisl. In condimentum
						odio lobortis, malesuada arcu sagittis, pellentesque massa. Aliquam
						erat volutpat. Sed nec ligula dignissim, commodo sapien non,
						interdum orci. Suspendisse congue ullamcorper aliquet. Sed viverra
						fermentum augue, et vehicula orci pretium sit amet. Praesent ex
						sapien, luctus non condimentum et, auctor sit amet tellus. Nunc
						lobortis vulputate ultrices. Quisque mi sem, egestas vitae arcu non,
						maximus interdum elit. Sed pretium, nunc eu finibus sollicitudin,
						eros nibh imperdiet nulla, sed viverra nunc metus auctor tortor.
						Phasellus condimentum lacinia mauris, consequat posuere enim
						imperdiet lacinia. Nunc in condimentum nunc, vel tincidunt mi.
						Pellentesque tortor ex, faucibus sit amet neque sit amet, iaculis
						imperdiet sem.
						<br />
						Donec interdum magna in mauris fringilla, id iaculis lorem interdum.
						Nullam varius eros quis ante rhoncus iaculis. Cras eget volutpat
						leo, sit amet semper felis. Donec vehicula lorem mauris, ac porta
						augue posuere sed. Aliquam finibus nec massa vel porttitor. Aenean
						ullamcorper velit eget dolor facilisis, in mattis lorem elementum.
						Curabitur varius justo vitae velit egestas condimentum. Vestibulum
						nec ante ut augue dignissim porta vel et neque. Mauris elit orci,
						feugiat sit amet molestie sed, interdum et lacus. Donec vel lacinia
						ipsum. Quisque tempor mauris a tellus efficitur consequat.
						<br />
						Aenean quis varius elit. Cras sit amet sollicitudin enim. Etiam
						posuere, odio vel tincidunt semper, ex lorem pellentesque tellus,
						sit amet finibus justo diam a lacus. Nullam pulvinar tellus ipsum,
						ut fringilla odio fringilla sit amet. Duis pulvinar mauris est, ut
						scelerisque sem lobortis sed. Ut sed magna id sapien bibendum
						fringilla. Etiam mauris velit, convallis vitae lorem sit amet,
						aliquam accumsan felis. Proin ac mauris at diam porttitor vehicula
						porta id ante. Aliquam egestas lacus a elit pulvinar luctus. Aenean
						at placerat elit. Integer vitae dolor rhoncus, pharetra nisi vel,
						mollis augue. Quisque mauris arcu, consectetur et facilisis sit
						amet, gravida nec sem. Mauris pulvinar mi dui, sed scelerisque
						mauris mattis a. Mauris at placerat tortor. Nam eu neque lobortis,
						iaculis ex a, efficitur erat. In gravida, urna in hendrerit dictum,
						magna dolor cursus mi, vel lobortis magna enim vitae ex.
						<br />
						Sed accumsan mattis orci sit amet ultricies. Class aptent taciti
						sociosqu ad litora torquent per conubia nostra, per inceptos
						himenaeos. Sed ornare, elit sit amet auctor blandit, quam mauris
						fermentum nisi, nec aliquet ipsum massa id est. Nullam rutrum sem et
						odio pulvinar egestas. Donec molestie faucibus diam, at ultricies mi
						semper eget. Donec porttitor tortor nisi, sed consectetur lacus
						dapibus in. Vestibulum ante ipsum primis in faucibus orci luctus et
						ultrices posuere cubilia curae; Curabitur ultrices turpis in dui
						porta ornare. Suspendisse sagittis aliquet arcu, sed interdum turpis
						convallis sit amet. Etiam in tincidunt eros. Praesent scelerisque
						egestas dolor, nec tempor sapien dictum quis. Duis non dignissim
						augue, nec finibus urna. Donec at aliquet massa. Vivamus at varius
						velit. Mauris aliquet enim ac erat porta, quis tincidunt justo
						accumsan. Nam condimentum rhoncus nisl, nec cursus nisl vestibulum
						vel.
					</p>
				</Drawer.Base>
			</>
		</Layout.Base>
	);
};

export default DashboardPage;
