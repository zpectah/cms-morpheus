import React from 'react';
import { NavLink } from 'react-router-dom';
import { isMobileOnly } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { NAV_ITEMS, ROUTES } from '../../../constants';

const Wrapper = styled.nav`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
`;
const WrapperItem = styled(NavLink)<{ isActive: boolean }>`
	width: 100%;
	height: auto;
`;
const ItemInner = styled.span`
	width: 100%;
	height: auto;
	margin: 0;
	padding: 0.5rem 0.5rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	${(props) =>
		props.isActive &&
		`
		background-color: red;
`};
`;

interface NavbarProps {
	sidebarClose: () => void;
	nav: 'app' | 'members' | 'market';
}

const Navbar = ({ sidebarClose, nav }: NavbarProps) => {
	const { t } = useTranslation(['page']);

	const isSelected = (path) => {
		let selected = false;

		if (
			(!(path == ROUTES.app.dashboard.path) &&
				location.pathname.includes(path + '/')) ||
			location.pathname == path ||
			location.pathname == path + '/'
		)
			selected = true;

		return selected;
	};

	const linkTrigger = () => {
		isMobileOnly && sidebarClose();
	};

	return (
		<Wrapper>
			{NAV_ITEMS[nav].map((item) => {
				if (item.active)
					return (
						<WrapperItem
							key={item.key}
							to={item.path}
							activeClassName={'is-active'}
							onClick={linkTrigger}
							exact
						>
							<ItemInner isActive={isSelected(item.path)}>
								{t(`page:${item.label}`)}
							</ItemInner>
						</WrapperItem>
					);
			})}
		</Wrapper>
	);
};

export default Navbar;
