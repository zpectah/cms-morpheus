import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { removeToast } from '../../store/actions';
import { toastItemProps } from '../../types/types';
import ToastsItem from './ToastsItem';

const Wrapper = styled.div`
	width: ${(props) => props.theme.toasts.width};
	height: 0;
	position: fixed;
	overflow: visible;
	top: 0.35rem;
	right: 0.35rem;
	z-index: ${(props) => props.theme.toasts.zIndex};
`;
const FloatingList = styled.div``;

interface ToastsListProps {}

const ToastsList = ({}: ToastsListProps) => {
	const store = useSelector((store: any) => store);
	const dispatch = useDispatch();
	const [itemsList, setItemsList] = useState<toastItemProps[]>(store.ui.toasts);

	const removeHandler = (data) => {
		dispatch(removeToast(data));
	};

	useEffect(() => setItemsList(store.ui.toasts), [store.ui.toasts]);

	return (
		<Wrapper>
			<FloatingList>
				{itemsList.map((item) => (
					<ToastsItem onRemove={removeHandler} data={item} key={item.id} />
				))}
			</FloatingList>
		</Wrapper>
	);
};

export default ToastsList;
