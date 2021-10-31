import React from 'react';

import { appProps } from '../../types/types';

interface DataTableProps {
	model:
		| appProps['modelApp']
		| appProps['modelMembers']
		| appProps['modelMarket'];
	items: any[]; // TODO
	onDetailSelect: (id: number | string) => void;
	onDetailToggle: (id: number | string) => void;
	onDetailDelete: (id: number | string) => void;
}

const DataTable = ({ model, items, onDetailSelect }: DataTableProps) => {
	return (
		<>
			<div>
				<ul>
					{items &&
						items.map((item) => (
							<li key={item.id}>
								{item.id} |{item.name}
								<a onClick={() => onDetailSelect(item.id)}>detail</a>
							</li>
						))}
				</ul>
			</div>
		</>
	);
};

export default DataTable;
