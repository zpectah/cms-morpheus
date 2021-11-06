import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { BREAKPOINTS, ROUTE_PATH_SUFFIX_DETAIL } from '../../constants';
import { getComparator, stableSort } from '../../utils/table';
import { appProps, tableOrderType } from '../../types/types';
import TableHeader from './TableHeader';
import TableToolbar from './TableToolbar';

const RowLink = styled(NavLink)``;

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
		id?: boolean;
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
	module: any;
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
	module,
}: DataTableProps) => {
	const { t } = useTranslation(['common', 'table']);
	const [lang, setLang] = useState<string>(languageDefault);
	const [order, setOrder] = useState<tableOrderType>('asc');
	const [orderBy, setOrderBy] = useState<string>('id');
	const [selected, setSelected] = useState<readonly string[]>(selectedRows);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const history = useHistory();

	const handleRequestSort = (
		e: React.MouseEvent<unknown>,
		property: string,
	) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleSelectAllClick = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			const newSelecteds = items.map((n) => n.id);
			setSelected(newSelecteds);
			return;
		}
		setSelected([]);
	};

	const handleClick = (e: React.MouseEvent<unknown>, name: string) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected: readonly string[] = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1),
			);
		}

		setSelected(newSelected);
	};

	const handleChangePage = (e: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(e.target.value, 10));
		setPage(0);
	};

	const isSelected = (id: string) => selected.indexOf(id) !== -1;

	const getRowPath = (id: number | string) => {
		return `${module.route.path}${ROUTE_PATH_SUFFIX_DETAIL}/${id}`;
	};

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - items.length) : 0;

	const getTableLayout = useCallback(() => {
		const layout = [];

		if (tableLayout.id) {
		}
		if (tableLayout.name)
			layout.push({
				id: 'name',
				numeric: false,
				disablePadding: true,
				label: t('table:label.name'),
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
			id: 'actions',
			align: 'right',
			numeric: false,
			disablePadding: false,
			label: t('table:label.actions'),
		});

		return layout;
	}, []);

	// When language on table changed
	const languageChangeHandler = (lang: string) => setLang(lang);

	return (
		<>
			<div>
				<>
					<Box sx={{ width: '100%' }}>
						<Paper sx={{ width: '100%', mb: 2 }}>
							<TableToolbar numSelected={selected.length} />
							<TableContainer>
								<Table
									sx={{ minWidth: BREAKPOINTS.md }}
									aria-labelledby="tableTitle"
									size={'medium'}
								>
									<TableHeader
										numSelected={selected.length}
										order={order}
										orderBy={orderBy}
										onSelectAllClick={handleSelectAllClick}
										onRequestSort={handleRequestSort}
										rowCount={items.length}
										layout={getTableLayout()}
									/>
									<TableBody>
										{stableSort(items, getComparator(order, orderBy))
											.slice(
												page * rowsPerPage,
												page * rowsPerPage + rowsPerPage,
											)
											.map((row, index) => {
												const isItemSelected = isSelected(row.id);
												const labelId = `enhanced-table-checkbox-${index}`;

												return (
													<TableRow
														hover
														onDoubleClick={(e) => handleClick(e, row.id)}
														role="checkbox"
														aria-checked={isItemSelected}
														tabIndex={-1}
														key={row.id}
														selected={isItemSelected}
													>
														<TableCell padding="checkbox">
															<Checkbox
																color="primary"
																checked={isItemSelected}
																inputProps={{
																	'aria-labelledby': labelId,
																}}
															/>
														</TableCell>
														{tableLayout.id && <TableCell>{row.id}</TableCell>}
														{tableLayout.name && (
															<TableCell
																component="th"
																id={labelId}
																scope="row"
																padding="none"
															>
																<RowLink to={getRowPath(row.id)}>
																	{row.name}
																</RowLink>
															</TableCell>
														)}
														{tableLayout.email && <TableCell>email</TableCell>}
														{tableLayout.title && <TableCell>title</TableCell>}
														{tableLayout.title_lang && (
															<TableCell>title_lang</TableCell>
														)}
														{tableLayout.sender && (
															<TableCell>sender</TableCell>
														)}
														{tableLayout.file_name && (
															<TableCell>file_name</TableCell>
														)}
														{tableLayout.file_size && (
															<TableCell>file_size</TableCell>
														)}
														{tableLayout.file_format && (
															<TableCell>file_format</TableCell>
														)}
														{tableLayout.active && (
															<TableCell>active</TableCell>
														)}
														{tableLayout.tags && <TableCell>tags</TableCell>}
														{tableLayout.category && (
															<TableCell>category</TableCell>
														)}
														{tableLayout.type && <TableCell>type</TableCell>}
														{tableLayout.user_group && (
															<TableCell>user_group</TableCell>
														)}
														{tableLayout.member_group && (
															<TableCell>member_group</TableCell>
														)}
														{tableLayout.member_email && (
															<TableCell>member_email</TableCell>
														)}
														{tableLayout.value && <TableCell>value</TableCell>}
														{tableLayout.t_value && (
															<TableCell>t_value</TableCell>
														)}
														{tableLayout.r_value && (
															<TableCell>r_value</TableCell>
														)}
														{tableLayout.context && (
															<TableCell>context</TableCell>
														)}
														{tableLayout.authorized && (
															<TableCell>authorized</TableCell>
														)}
														{tableLayout.subject && (
															<TableCell>subject</TableCell>
														)}
														{tableLayout.price && <TableCell>price</TableCell>}
														{tableLayout.price_total && (
															<TableCell>price_total</TableCell>
														)}

														<TableCell align="right">
															<ButtonGroup
																variant="outlined"
																aria-label="row action group"
																size="small"
															>
																<Button onClick={() => onDelete(row.id)}>
																	Delete
																</Button>
																<Button onClick={() => onDetail(row.id)}>
																	Detail
																</Button>
															</ButtonGroup>
														</TableCell>
													</TableRow>
												);
											})}
										{emptyRows > 0 && (
											<TableRow
												style={{
													height: 53 * emptyRows,
												}}
											>
												<TableCell colSpan={6} />
											</TableRow>
										)}
									</TableBody>
								</Table>
							</TableContainer>
							<TablePagination
								rowsPerPageOptions={[5, 10, 25]}
								component="div"
								count={items.length}
								rowsPerPage={rowsPerPage}
								page={page}
								onPageChange={handleChangePage}
								onRowsPerPageChange={handleChangeRowsPerPage}
							/>
						</Paper>
					</Box>
				</>
			</div>
		</>
	);
};

export default DataTable;
