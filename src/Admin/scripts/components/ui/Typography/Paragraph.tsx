import React from 'react';
import styled from 'styled-components';

const P = styled.p``;
const SPAN = styled.span``;
const LABEL = styled.label``;

interface ParagraphProps {
	p?: true;
	span?: true;
	label?: true;
	className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({
	children,
	p,
	span,
	label,
	className,
}) => {
	const componentProps = {
		children: children,
		className: className,
	};

	const getComponent = () => {
		let c = P;

		if (span) {
			c = SPAN;
		} else if (label) {
			c = LABEL;
		}

		return c;
	};

	const ComponentName = getComponent();

	return <ComponentName {...componentProps} />;
};

export default Paragraph;
