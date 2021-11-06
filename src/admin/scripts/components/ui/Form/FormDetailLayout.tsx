import React from 'react';
import styled from 'styled-components';

import media from '../../../styles/responsive';

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
const Content = styled.div<{ withSidebar: boolean }>`
	padding: 1.5rem;
	flex: 100%;

	${media.min.md} {
		padding: 1.5rem 1.5rem 1.5rem 0;
		flex: ${(props) => (props.withSidebar ? '75%' : '100%')};
	}
`;
const Sidebar = styled.div`
	padding: 1.5rem;
	flex: 100%;

	${media.min.md} {
		padding: 1.5rem 0 1.5rem 1.5rem;
		flex: 25%;
		border-left: 1px solid rgba(150, 150, 150, 0.5);
	}
`;
const Footer = styled.div``;

interface FormDetailLayoutProps {
	sidebarChildren?: React.ReactElement | React.ReactElement[];
	footerChildren?: React.ReactElement | React.ReactElement[];
}

const FormDetailLayout: React.FC<FormDetailLayoutProps> = ({
	children,
	sidebarChildren,
	footerChildren,
}) => {
	return (
		<>
			<Wrapper>
				<Content withSidebar={sidebarChildren}>{children}</Content>
				{sidebarChildren && <Sidebar>{sidebarChildren}</Sidebar>}
			</Wrapper>
			{footerChildren && <Footer>{footerChildren}</Footer>}
		</>
	);
};

export default FormDetailLayout;
