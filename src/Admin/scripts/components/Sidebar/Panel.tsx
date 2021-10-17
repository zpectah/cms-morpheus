import React from 'react';
import styled from 'styled-components';

import { Scrollable } from '../ui';

const Wrapper = styled.div`
	width: ${(props) => props.theme.sidebar.maxWidth};
	height: 100%;
	position: absolute;
	top: 0;
	left: ${(props) => props.theme.sidebar.minWidth};

	background-color: rgba(200, 200, 200, 0.25);
`;

interface SidebarPanelProps {
	open: boolean;
	sidebarClose: Function;
}

const SidebarPanel = ({}: SidebarPanelProps) => {
	return (
		<Wrapper>
			<Scrollable.Base>
				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						porttitor vestibulum pretium. Vivamus a arcu vitae nulla elementum
						egestas vel nec metus. Vivamus quis nulla auctor risus condimentum
						aliquet. Donec gravida consectetur turpis tincidunt mattis.
						Curabitur pharetra leo ex, non fringilla nibh scelerisque id. In at
						posuere dolor. Nulla porta, elit nec tincidunt posuere, felis odio
						egestas eros, vitae vehicula sapien sapien id lacus. Morbi nunc
						enim, dapibus quis enim at, dapibus venenatis nulla. Praesent et
						nisi tincidunt, condimentum metus vel, luctus nunc. Integer nec
						tortor non odio rhoncus pellentesque id porta nulla. Praesent
						aliquam, ligula a pellentesque porta, orci nisi volutpat nisl, ac
						bibendum sapien purus et lorem. Fusce ultricies metus pretium
						vehicula porttitor. Quisque vehicula mi eget diam consectetur
						dignissim ut id nulla. Morbi ut ante est. Nulla facilisi.
						<br />
						Sed congue mi id velit ornare accumsan. Donec nec metus commodo,
						tempus orci sed, fermentum nisl. Aliquam nec ligula hendrerit,
						aliquam nisl eget, finibus mi. Vivamus pellentesque elit a felis
						gravida, sit amet luctus augue molestie. Nam sollicitudin metus a
						sapien imperdiet, vitae sollicitudin ligula bibendum. Vivamus
						molestie ante magna, id finibus sapien ultrices sit amet. Vivamus
						convallis pulvinar dui ut fringilla. Ut auctor justo ut erat ornare,
						ut commodo dui faucibus. Vestibulum ante ipsum primis in faucibus
						orci luctus et ultrices posuere cubilia curae;
						<br />
						Donec a nisi luctus, faucibus purus eget, placerat nibh.
						Pellentesque sed nisl dictum, ornare metus quis, egestas purus.
						Phasellus semper congue leo nec porta. Integer quis porttitor ante.
						Donec lobortis, libero eget mollis finibus, neque dui varius ligula,
						sed euismod mauris justo nec nibh. Fusce aliquet eget metus ac
						sodales. Etiam imperdiet quam ut risus molestie, a condimentum dolor
						placerat.
						<br />
						Phasellus porta, erat non cursus volutpat, felis tellus dapibus
						neque, in elementum massa lectus et nisi. Nunc pharetra elit eu
						semper euismod. Suspendisse sed lacus et turpis porta tempus eu sit
						amet dui. Aenean tristique tristique nisi non ultricies. Morbi
						hendrerit ante consequat iaculis sodales. Curabitur sapien enim,
						tincidunt non nunc at, accumsan vehicula eros. Donec fermentum ex
						sed diam finibus dictum. Phasellus eleifend orci odio, in dictum
						augue congue quis. Praesent facilisis, leo eu varius elementum, mi
						magna blandit erat, in varius elit ipsum nec arcu.
						<br />
						Nullam rutrum arcu ac lorem scelerisque, at lacinia nibh tincidunt.
						Nunc nec accumsan lacus. Nullam convallis nec metus vitae volutpat.
						Praesent non ante eu arcu faucibus ultricies finibus vestibulum
						odio. Curabitur a orci euismod, rutrum nunc vitae, interdum sapien.
						Sed tincidunt sed mauris et pharetra. Ut pulvinar mauris lorem.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						porttitor vestibulum pretium. Vivamus a arcu vitae nulla elementum
						egestas vel nec metus. Vivamus quis nulla auctor risus condimentum
						aliquet. Donec gravida consectetur turpis tincidunt mattis.
						Curabitur pharetra leo ex, non fringilla nibh scelerisque id. In at
						posuere dolor. Nulla porta, elit nec tincidunt posuere, felis odio
						egestas eros, vitae vehicula sapien sapien id lacus. Morbi nunc
						enim, dapibus quis enim at, dapibus venenatis nulla. Praesent et
						nisi tincidunt, condimentum metus vel, luctus nunc. Integer nec
						tortor non odio rhoncus pellentesque id porta nulla. Praesent
						aliquam, ligula a pellentesque porta, orci nisi volutpat nisl, ac
						bibendum sapien purus et lorem. Fusce ultricies metus pretium
						vehicula porttitor. Quisque vehicula mi eget diam consectetur
						dignissim ut id nulla. Morbi ut ante est. Nulla facilisi.
						<br />
						Sed congue mi id velit ornare accumsan. Donec nec metus commodo,
						tempus orci sed, fermentum nisl. Aliquam nec ligula hendrerit,
						aliquam nisl eget, finibus mi. Vivamus pellentesque elit a felis
						gravida, sit amet luctus augue molestie. Nam sollicitudin metus a
						sapien imperdiet, vitae sollicitudin ligula bibendum. Vivamus
						molestie ante magna, id finibus sapien ultrices sit amet. Vivamus
						convallis pulvinar dui ut fringilla. Ut auctor justo ut erat ornare,
						ut commodo dui faucibus. Vestibulum ante ipsum primis in faucibus
						orci luctus et ultrices posuere cubilia curae;
						<br />
						Donec a nisi luctus, faucibus purus eget, placerat nibh.
						Pellentesque sed nisl dictum, ornare metus quis, egestas purus.
						Phasellus semper congue leo nec porta. Integer quis porttitor ante.
						Donec lobortis, libero eget mollis finibus, neque dui varius ligula,
						sed euismod mauris justo nec nibh. Fusce aliquet eget metus ac
						sodales. Etiam imperdiet quam ut risus molestie, a condimentum dolor
						placerat.
						<br />
						Phasellus porta, erat non cursus volutpat, felis tellus dapibus
						neque, in elementum massa lectus et nisi. Nunc pharetra elit eu
						semper euismod. Suspendisse sed lacus et turpis porta tempus eu sit
						amet dui. Aenean tristique tristique nisi non ultricies. Morbi
						hendrerit ante consequat iaculis sodales. Curabitur sapien enim,
						tincidunt non nunc at, accumsan vehicula eros. Donec fermentum ex
						sed diam finibus dictum. Phasellus eleifend orci odio, in dictum
						augue congue quis. Praesent facilisis, leo eu varius elementum, mi
						magna blandit erat, in varius elit ipsum nec arcu.
						<br />
						Nullam rutrum arcu ac lorem scelerisque, at lacinia nibh tincidunt.
						Nunc nec accumsan lacus. Nullam convallis nec metus vitae volutpat.
						Praesent non ante eu arcu faucibus ultricies finibus vestibulum
						odio. Curabitur a orci euismod, rutrum nunc vitae, interdum sapien.
						Sed tincidunt sed mauris et pharetra. Ut pulvinar mauris lorem.
					</p>
				</div>
			</Scrollable.Base>
		</Wrapper>
	);
};

export default SidebarPanel;
