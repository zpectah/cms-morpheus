import React, { useEffect } from 'react';
import styled from 'styled-components';

import { toastItemProps } from '../../types/types';
import { Button as UiButton } from '../../components/ui';

const Wrapper = styled.article<{ context: toastItemProps['context'] }>`
	height: auto;
	padding: 1rem;
	margin: 0 0 0.35rem;
	display: flex;
	position: relative;
	border-radius: 0.25rem;

	${(props) =>
		props.context == 'default' &&
		`
		color: ${props.theme.toasts.default.color};
		background-color: ${props.theme.toasts.default.bg};
	`}
	${(props) =>
		props.context == 'success' &&
		`
		color: ${props.theme.toasts.success.color};
		background-color: ${props.theme.toasts.success.bg};
	`}
	${(props) =>
		props.context == 'error' &&
		`
		color: ${props.theme.toasts.error.color};
		background-color: ${props.theme.toasts.error.bg};
	`}

	.btn-close {
		width: 30px;
		height: 30px;
		position: absolute;
		top: 0;
		right: 0;
		opacity: 0.5;

		&:hover {
			opacity: 1;
		}
	}
`;

interface ToastsItemProps {
	data: toastItemProps;
	onRemove: (data: toastItemProps) => void;
}

const ToastsItem = ({ data, onRemove }: ToastsItemProps) => {
	useEffect(() => {
		if (data.timeout) setTimeout(() => onRemove(data), data.timeout);
	}, [data.timeout]);

	return (
		<Wrapper className="toast-item" context={data.context} id={data.id}>
			{data.title}
			<UiButton.Close onClick={() => onRemove(data)} />
		</Wrapper>
	);
};

export default ToastsItem;
