import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ size: AvatarProps['size'] }>`
	width: ${(props) => props.size};
	height: ${(props) => props.size};
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	border-radius: ${(props) => props.size};

	& > img {
		width: 100%;
		height: auto;
	}
	& > span {
		font-size: 1.5rem;
		text-transform: uppercase;
	}
`;

interface AvatarProps {
	size?: string;
	image?: string;
	firstName?: string;
	lastName?: string;
	nickName: string;
}

const Avatar = ({
	size = '40px',
	image,
	firstName,
	lastName,
	nickName,
}: AvatarProps) => {
	return (
		<Wrapper size={size}>
			{image ? (
				<img src={image} alt={nickName} />
			) : (
				<span>
					{firstName && lastName
						? firstName.charAt(0) + lastName.charAt(0)
						: nickName.charAt(0)}
				</span>
			)}
		</Wrapper>
	);
};

export default Avatar;
