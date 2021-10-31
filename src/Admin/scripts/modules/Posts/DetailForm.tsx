import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import config from '../../config';
import { string } from '../../../../libs/utils';
import { useSettings, usePosts } from '../../hooks/App';
import { PostsItemProps } from '../../types/App';
import checkDuplicates from '../../utils/checkDuplicates';
import { Section, Button as UiButton, Form } from '../../components/ui';

interface PostsDetailFormProps {
	detailData: any; //
	onSubmit: (formData: any) => void;
	onDelete: (id: number | string) => void;
	onCancel: () => void;
	isProcessing: boolean;
	languageList: string[];
}

const DetailForm = ({
	detailData,
	onSubmit,
	onDelete,
	onCancel,
	isProcessing,
	languageList,
}: PostsDetailFormProps) => {
	const { t } = useTranslation([
		'common',
		'component',
		'model',
		'input',
		'types',
		'messages',
	]);
	const [lang, setLang] = useState<string>(config.GLOBAL.Admin.LANG_DEFAULT);
	const [duplicates, setDuplicates] = useState<boolean>(false);
	const { Settings } = useSettings();
	const { Posts } = usePosts();

	// Static variables
	const DatePickerFormat = config.LOCALES.dateTimeFormat;

	// Form controller
	const { control, handleSubmit, formState, register, watch } = useForm({
		mode: 'all',
		defaultValues: {
			...detailData,
		},
	});

	// Form submit handler
	const submitHandler = (formData: any) => onSubmit(formData);

	return (
		<>
			<form name="Posts_DetailForm">
				<>
					<input
						type="hidden"
						name="id"
						defaultValue={detailData.id}
						{...register('id', { required: true })}
					/>
				</>
				<Section.Base>...PostsDetailForm...</Section.Base>
				<Section.Base>
					<Controller
						name="name"
						control={control}
						rules={{ required: true }}
						defaultValue={''}
						render={({ field: { onChange, onBlur, value, ref, name } }) => (
							<Form.Row>
								<TextField
									type="text"
									name={name}
									value={value}
									onChange={onChange}
									onBlur={onBlur}
									label={t('input:name.label')}
									size="small"
									style={{
										width: '100%',
									}}
									required
									disabled={isProcessing}
								/>
							</Form.Row>
						)}
					/>
				</Section.Base>
				<Section.Base>
					...languageList {JSON.stringify(languageList)}...
				</Section.Base>
				<Section.Base>
					<Form.RowActions>
						<UiButton.Primary
							onClick={handleSubmit(submitHandler)}
							disabled={!formState.isValid || duplicates}
						>
							{detailData.id == 'new' ? t('btn.create') : t('btn.update')}
						</UiButton.Primary>
						{detailData.id !== 'new' && (
							<Button onClick={() => onDelete(detailData.id)} color="primary">
								{t('btn.delete')}
							</Button>
						)}
						<Button onClick={onCancel} color="primary">
							{t('btn.cancel')}
						</Button>
					</Form.RowActions>
				</Section.Base>
			</form>
		</>
	);
};

export default DetailForm;
