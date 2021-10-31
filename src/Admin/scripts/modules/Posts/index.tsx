import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import getDetailData from '../../utils/getDetailData';
import {
	ROUTES,
	MESSAGE_ERROR_DURATION,
	ROUTE_PATH_SUFFIX_DETAIL,
} from '../../constants';
import useUiToasts from '../../hooks/useUiToasts';
import { usePosts, useProfile } from '../../hooks/App';
import { PostsItemProps } from '../../types/App';
import { Drawer } from '../../components/ui';
import DataTable from '../../components/DataTable';
import DetailForm from './DetailForm';

interface PostsProps {}

const Posts = ({}: PostsProps) => {
	const { t } = useTranslation('messages');
	const [dataLoading, setDataLoading] = useState<boolean>(false);
	const [detailOpen, setDetailOpen] = useState<boolean>(false);
	const [detailData, setDetailData] = useState<PostsItemProps>(null);
	const dispatch = useDispatch();
	const params: any = useParams();
	const history: any = useHistory();
	const { createToasts } = useUiToasts(dispatch);
	const { Profile } = useProfile();
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
	};

	const openDetailHandler = (id: number | string, redirect?: boolean) => {
		setDetailOpen(true);
		setDetailData(getDetailData(id, Posts));
		if (redirect)
			history.push(`${module.route.path}${ROUTE_PATH_SUFFIX_DETAIL}/${id}`);
	};
	const closeDetailHandler = () => {
		setDetailOpen(false);
		setDetailData(null);
		history.push(module.route.path);
	};

	const onSubmitHandler = (data: PostsItemProps) => {
		const master = Object.create(data);

		if (data.id == 'new') {
			// TODO ==> createPosts(master)
		} else {
			// TODO ==> updatePosts(master)
		}
	};
	const onToggleHandler = () => {};
	const onDeleteHandler = () => {};

	// Trigger detail dialog when url detail parameter
	useEffect(() => {
		if (params.id && Posts) openDetailHandler(params.id);
	}, [params.id, Posts]);

	// Set loading status
	useEffect(() => setDataLoading(isPostsLoading), [isPostsLoading]);

	return (
		<>
			<div>posts list {Posts ? Posts.length : 'Loading'}</div>
			<DataTable
				model={module.model}
				items={Posts}
				onDetailSelect={(id) => openDetailHandler(id, true)}
				onDetailToggle={(id) => {
					console.log('onDetailToggle', id);
				}}
				onDetailDelete={(id) => {
					console.log('onDetailDelete', id);
				}}
			/>
			<Drawer.Base
				isOpen={detailOpen}
				onClose={closeDetailHandler}
				size={'xl'}
				title={detailData ? detailData.name : 'Loading'}
			>
				<>
					{detailData ? (
						<>
							<DetailForm
								detailData={detailData}
								onSubmit={onSubmitHandler}
								onCancel={closeDetailHandler}
							/>
						</>
					) : (
						<>Loading</>
					)}
				</>
			</Drawer.Base>
		</>
	);
};

export default Posts;
