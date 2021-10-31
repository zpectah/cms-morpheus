import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import config from '../../config';
import { string } from '../../../../libs/utils';
import getDetailData from '../../utils/getDetailData';
import {
	ROUTES,
	MESSAGE_SUCCESS_DURATION,
	ROUTE_PATH_SUFFIX_DETAIL,
} from '../../constants';
import useUiToasts from '../../hooks/useUiToasts';
import { usePosts, useProfile, useSettings } from '../../hooks/App';
import { PostsItemProps } from '../../types/App';
import { Drawer, Preloader, Dialog as UiDialog } from '../../components/ui';
import DataTable from '../../components/DataTable';
import DetailForm from './DetailForm';
import getDetailTitle from '../../utils/getDetailTitle';

interface PostsProps {}

const Posts = ({}: PostsProps) => {
	const { t } = useTranslation(['common', 'messages']);
	const [dataLoading, setDataLoading] = useState<boolean>(false);
	const [dataProcess, setDataProcess] = useState<boolean>(false);
	const [detailOpen, setDetailOpen] = useState<boolean>(false);
	const [detailData, setDetailData] = useState<PostsItemProps>(null);
	const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
	const [confirmData, setConfirmData] = useState<any[]>([]);
	const dispatch = useDispatch();
	const params: any = useParams();
	const history: any = useHistory();
	const { createToasts } = useUiToasts(dispatch);
	const { Profile } = useProfile();
	const { Settings } = useSettings();
	const {
		Posts,
		isPostsLoading,
		updatePosts,
		togglePosts,
		deletePosts,
		createPosts,
		reloadPosts,
	} = usePosts();

	const module: any = {
		model: 'Posts',
		route: ROUTES.app.posts,
		drawerSize: 'xl',
		tableLayout: [],
	};
	const languageList: string[] = Settings?.language_active;
	const languageDefault: string =
		Settings?.language_default || config.GLOBAL.Admin.LANG_DEFAULT;

	// Opens detail drawer with route path update
	const openDetailHandler = (id: number | string, redirect?: boolean) => {
		setDetailOpen(true);
		setDetailData(getDetailData(id, Posts));
		if (redirect)
			history.push(`${module.route.path}${ROUTE_PATH_SUFFIX_DETAIL}/${id}`);
	};

	// Closes detail drawer and clear route path
	const closeDetailHandler = () => {
		setDetailOpen(false);
		setDetailData(null);
		history.push(module.route.path);
	};

	// When detail is submitted
	const submitHandler = (data: PostsItemProps) => {
		const master = _.cloneDeep(data);

		setDataProcess(true);

		console.log('submitHandler', master);

		if (data.id == 'new') {
			// TODO ==> createPosts(master)
			// createPosts(master).then((r) => {/* TODO */});

			createToasts({
				title: t('messages:success.item_create'),
				context: 'success',
				timeout: MESSAGE_SUCCESS_DURATION,
			});
			setDataProcess(false);
		} else {
			// TODO ==> updatePosts(master)
			// updatePosts(master).then((r) => {/* TODO */});

			createToasts({
				title: t('messages:success.item_update'),
				context: 'success',
				timeout: MESSAGE_SUCCESS_DURATION,
			});
			setDataProcess(false);
		}
	};

	// When table row is toggled
	const toggleHandler = (id: number | string | number[] | string[]) => {
		const master = [id];

		setDataProcess(true);

		console.log('toggleHandler', master);

		// TODO ==> togglePosts(master)
		// togglePosts(master).then((r) => {/* TODO */});

		createToasts({
			title: t('messages:success.item_update', { count: master.length }),
			context: 'success',
			timeout: MESSAGE_SUCCESS_DURATION,
		});
		setDataProcess(false);
	};

	// When table row or detail is deleted / confirm trigger
	const deleteConfirmHandler = () => {
		const master = [confirmData];

		setDataProcess(true);

		console.log('deleteConfirmHandler', master);

		// TODO ==> deletePosts(master)
		// deletePosts(master).then((r) => {/* TODO */});

		createToasts({
			title: t('messages:success.item_delete', { count: master.length }),
			context: 'success',
			timeout: MESSAGE_SUCCESS_DURATION,
		});
		setDataProcess(false);
		onCloseConfirmHandler();
		closeDetailHandler();
	};
	const deleteHandler = (id: number | string | number[] | string[]) => {
		console.log('deleteHandler', id);

		setConfirmOpen(true);
		setConfirmData([id]);
	};
	const onCloseConfirmHandler = () => {
		setConfirmData([]);
		setConfirmOpen(false);
	};

	// Trigger detail dialog when url detail parameter is preset
	useEffect(() => {
		if (params.id && Posts) openDetailHandler(params.id);
	}, [params.id, Posts]);

	// Set loading status when data loading
	useEffect(() => setDataLoading(isPostsLoading), [isPostsLoading]);

	return (
		<>
			<DataTable
				model={module.model}
				items={Posts}
				onSelect={(id) => openDetailHandler(id, true)}
				onToggle={toggleHandler}
				onDelete={deleteHandler}
				isProcessing={dataProcess}
				languageList={languageList}
				languageDefault={languageDefault}
				tableLayout={module.tableLayout}
			/>
			<Drawer.Base
				isOpen={detailOpen}
				onClose={closeDetailHandler}
				size={module.drawerSize}
				title={
					detailData
						? getDetailTitle(t, detailData, module.model)
						: t('messages:info.loading')
				}
			>
				<>
					{detailData ? (
						<DetailForm
							detailData={detailData}
							onSubmit={submitHandler}
							onDelete={deleteHandler}
							onCancel={closeDetailHandler}
							isProcessing={dataProcess}
							languageList={languageList}
							languageDefault={languageDefault}
						/>
					) : (
						<Preloader.Block />
					)}
				</>
			</Drawer.Base>
			<>{dataLoading && <Preloader.Page />}</>
			<UiDialog.Confirm
				isOpen={confirmOpen}
				confirmMethod={'delete'}
				onClose={onCloseConfirmHandler}
				onConfirm={deleteConfirmHandler}
			>
				<>{JSON.stringify(confirmData)}</>
			</UiDialog.Confirm>
		</>
	);
};
export default Posts;
