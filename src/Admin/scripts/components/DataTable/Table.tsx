import React, { useState } from 'react';

import { appProps } from '../../types/types';

interface DataTableProps {
	model:
		| appProps['modelApp']
		| appProps['modelMembers']
		| appProps['modelMarket'];
	items: any[];
	onSelect: (id: number | string) => void;
	onToggle: (id: number | string | number[] | string[]) => void;
	onDelete: (id: number | string | number[] | string[]) => void;
	languageList: string[];
	languageDefault: string;
	isProcessing: boolean;
	tableLayout: any;
}

const DataTable = ({
	model,
	items,
	onSelect,
	onToggle,
	onDelete,
	languageList,
	languageDefault,
	isProcessing,
	tableLayout,
}: DataTableProps) => {
	const [lang, setLang] = useState<string>(languageDefault); // Current selected language

	// When language on table changed
	const languageChange = (lang: string) => setLang(lang);

	return (
		<>
			<div>
				<ul>
					{items &&
						items.map((item) => (
							<li key={item.id}>
								{item.id} | {item.name}|
								<a onClick={() => onSelect(item.id)}>detail</a>|
								<a onClick={() => onToggle(item.id)}>toggle</a>|
								<a onClick={() => onDelete(item.id)}>delete</a>
							</li>
						))}
				</ul>
			</div>
		</>
	);
};

export default DataTable;
