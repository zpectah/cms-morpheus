import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ToolbarWrapper = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

interface TableToolbarProps {
	numSelected: number;
	onDisableSelected: () => void;
	onDeleteSelected: () => void;
}

const TableToolbar = ({
	numSelected,
	onDisableSelected,
	onDeleteSelected,
}: TableToolbarProps) => {
	const { t } = useTranslation(['common', 'table']);

	return (
		<Box sx={{ width: '100%' }}>
			<Paper sx={{ width: '100%', mb: 1 }}>
				<Toolbar
					sx={{
						pl: { sm: 2 },
						pr: { xs: 1, sm: 1 },
					}}
				>
					<ToolbarWrapper>
						<div></div>
						<div>
							<Chip
								label={`${numSelected} ${t('label.selectedItems')}`}
								style={{ marginRight: '.5rem' }}
							/>
							<Tooltip
								title="Disable selected"
								disableHoverListener={numSelected == 0}
								disableFocusListener={numSelected == 0}
							>
								<span>
									<IconButton
										onClick={onDisableSelected}
										disabled={numSelected == 0}
									>
										<BlockIcon />
									</IconButton>
								</span>
							</Tooltip>
							<Tooltip
								title="Delete selected"
								disableHoverListener={numSelected == 0}
								disableFocusListener={numSelected == 0}
							>
								<span>
									<IconButton
										onClick={onDeleteSelected}
										disabled={numSelected == 0}
									>
										<DeleteIcon />
									</IconButton>
								</span>
							</Tooltip>
						</div>
					</ToolbarWrapper>
				</Toolbar>
			</Paper>
		</Box>
	);
};

export default TableToolbar;
