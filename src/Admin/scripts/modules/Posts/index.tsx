import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { usePosts, useProfile } from '../../hooks/App';

interface PostsProps {}

const Posts = ({}: PostsProps) => {
	const [dataLoading, setDataLoading] = useState(false);

	const {
		Posts,
		isPostsLoading,
		updatePosts,
		togglePosts,
		deletePosts,
		createPosts,
		reloadPosts,
	} = usePosts();

	return (
		<>
			<div>posts list {Posts ? Posts.length : 'Loading'}</div>
			<div>posts detail</div>
		</>
	);
};

export default Posts;
