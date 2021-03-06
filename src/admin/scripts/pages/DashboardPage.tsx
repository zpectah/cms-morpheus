import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import { ROUTES } from '../constants';
import { pageObjectProps } from '../types/types';
import Layout from '../components/Layout';
import {
	Section,
	Button as UiButton,
	Dialog as UiDialog,
	Drawer,
} from '../components/ui';
import useUiToasts from '../hooks/useUiToasts';

interface DashboardPageProps {}

const DashboardPage = ({}: DashboardPageProps) => {
	const { t } = useTranslation('page');
	const dispatch = useDispatch();
	const { createToasts } = useUiToasts(dispatch);

	// Page variables
	const page: pageObjectProps = {
		model: 'Dashboard',
		route: ROUTES.app.dashboard,
	};

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
	//

	return (
		<Layout.Base
			route={page.route}
			titlePage={t(`page:${page.model}.page.title`)}
		>
			<div>
				<br />
				<br />
				<Section.Base>
					<div>
						<Button
							type="button"
							onClick={() =>
								createToasts({
									title: 'Toast title',
									context: 'default',
								})
							}
						>
							open default toast
						</Button>
						<br />
						<Button
							type="button"
							onClick={() =>
								createToasts({
									title: 'Toast success title',
									context: 'success',
									timeout: 3500,
								})
							}
						>
							open success toast
						</Button>
						<br />
						<Button
							type="button"
							onClick={() =>
								createToasts({
									title: 'Toast error title',
									context: 'error',
									timeout: 3500,
								})
							}
						>
							open error toast
						</Button>
					</div>
				</Section.Base>
			</div>
			<>
				<br />
				<br />
				<Button onClick={handleOpen}>Open modal</Button>
				<Button onClick={handleConfirmOpen}>Open Confirm modal</Button>
				<Button onClick={handleDrawerOpen}>Open drawer</Button>
				<UiDialog.Base
					isOpen={open}
					onClose={handleClose}
					titleChildren={<>Demo Modal title</>}
					footerChildren={<>Modal footer actions...</>}
					dividers
				>
					<div>
						UiModal ...
						<Button onClick={handleConfirmOpen}>Open Confirm modal</Button>
					</div>
				</UiDialog.Base>
				<UiDialog.Confirm
					isOpen={confirmOpen}
					onClose={handleConfirmClose}
					confirmMethod={'delete'}
					onConfirm={() => {
						console.log('confirmed');
					}}
				>
					<>Confirm content ...</>
				</UiDialog.Confirm>
				<Drawer.Base
					isOpen={drawerOpen}
					onClose={handleDrawerClose}
					title={'Demo drawer title...'}
					size={'xl'}
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
					</p>
				</Drawer.Base>
			</>
		</Layout.Base>
	);
};

export default DashboardPage;
