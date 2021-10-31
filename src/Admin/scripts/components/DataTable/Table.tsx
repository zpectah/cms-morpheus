import React, { useCallback, useState } from 'react';

import { appProps } from '../../types/types';

interface DataTableProps {
	model:
		| appProps['modelApp']
		| appProps['modelMembers']
		| appProps['modelMarket'];
	items: any[];
	selectedRows: any[];
	onSelect: (id: number | string) => void;
	onDetail: (id: number | string) => void;
	onToggle: (id: number | string | number[] | string[]) => void;
	onDelete: (id: number | string | number[] | string[]) => void;
	languageList: string[];
	languageDefault: string;
	isProcessing: boolean;
	tableLayout: {
		name?: boolean;
		email?: boolean;
		title?: boolean;
		title_lang?: boolean;
		sender?: boolean;
		file_name?: boolean;
		file_size?: boolean;
		file_format?: boolean;
		active?: boolean;
		tags?: boolean;
		category?: boolean;
		type?: boolean;
		user_group?: boolean;
		member_group?: boolean;
		member_email?: boolean;
		value?: boolean;
		t_value?: boolean; // TODO: delete
		r_value?: boolean; // TODO: delete
		context?: boolean;
		authorized?: boolean;
		subject?: boolean;
		price?: boolean;
		price_total?: boolean;
	};
}

const DataTable = ({
	model,
	items,
	selectedRows,
	onSelect,
	onDetail,
	onToggle,
	onDelete,
	languageList,
	languageDefault,
	isProcessing,
	tableLayout,
}: DataTableProps) => {
	const [lang, setLang] = useState<string>(languageDefault); // Current selected language

	const getTableLayout = useCallback(() => {
		const layout = [];

		if (tableLayout.name)
			layout.push({
				id: 'name',
				numeric: false,
				disablePadding: true,
				label: 'Name',
			});
		if (tableLayout.email) {
		}
		if (tableLayout.title) {
		}
		if (tableLayout.title_lang) {
		}
		if (tableLayout.sender) {
		}
		if (tableLayout.file_name) {
		}
		if (tableLayout.file_size) {
		}
		if (tableLayout.file_format) {
		}
		if (tableLayout.active) {
		}
		if (tableLayout.tags) {
		}
		if (tableLayout.category) {
		}
		if (tableLayout.type) {
		}
		if (tableLayout.user_group) {
		}
		if (tableLayout.member_group) {
		}
		if (tableLayout.member_email) {
		}
		if (tableLayout.value) {
		}
		if (tableLayout.t_value) {
		}
		if (tableLayout.r_value) {
		}
		if (tableLayout.context) {
		}
		if (tableLayout.authorized) {
		}
		if (tableLayout.subject) {
		}
		if (tableLayout.price) {
		}
		if (tableLayout.price_total) {
		}

		layout.push({
			id: 'name',
			numeric: false,
			disablePadding: true,
			label: 'Actions',
		});

		return layout;
	}, []);

	// When language on table changed
	const languageChangeHandler = (lang: string) => setLang(lang);

	return (
		<>
			<div>
				<ul>
					{items &&
						items.map((item) => (
							<li key={item.id}>
								{item.id} | {item.name}|
								<a onClick={() => onDetail(item.id)}>detail</a>|
								<a onClick={() => onToggle(item.id)}>toggle</a>|
								<a onClick={() => onDelete(item.id)}>delete</a>
							</li>
						))}
				</ul>
			</div>
			<div>
				<>...</>
			</div>
		</>
	);
};

export default DataTable;
