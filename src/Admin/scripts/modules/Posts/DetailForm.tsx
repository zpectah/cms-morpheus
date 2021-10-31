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
	languageDefault: string;
}

const DetailForm = ({
	detailData,
	onSubmit,
	onDelete,
	onCancel,
	isProcessing,
	languageList,
	languageDefault,
}: PostsDetailFormProps) => {
	const { t } = useTranslation([
		'common',
		'component',
		'model',
		'input',
		'types',
		'messages',
	]);
	const [lang, setLang] = useState<string>(languageDefault); // Current selected language
	const [duplicates, setDuplicates] = useState<boolean>(false); // Check when value has duplicates in database
	const { Posts } = usePosts();

	// Static variables
	const staticVars = {
		datepickerFormat: config.LOCALES.dateTimeFormat,
	};

	// Form controller
	const { control, handleSubmit, formState, register, watch } = useForm({
		mode: 'all',
		defaultValues: {
			...detailData,
		},
	});

	// Check duplicates
	const checkDupesHandler = (name: string) =>
		setDuplicates(checkDuplicates(Posts, name, detailData.id));

	// When language on content changed
	const languageChangeHandler = (lang: string) => setLang(lang);

	// Form submit handler
	const submitHandler = (formData: any) => onSubmit(formData);

	return (
		<>
			<Form.Wrapper id="Posts_DetailForm" name="Posts_DetailForm">
				<>
					<input
						type="hidden"
						name="id"
						defaultValue={detailData.id}
						{...register('id', { required: true })}
					/>
				</>

				<Form.DetailLayout
					sidebarChildren={
						<>
							<div>sidebar options</div>
						</>
					}
					footerChildren={
						<>
							<Section.Base>
								<Form.RowActions>
									<UiButton.Primary
										onClick={handleSubmit(submitHandler)}
										disabled={!formState.isValid || duplicates}
									>
										{detailData.id == 'new' ? t('btn.create') : t('btn.update')}
									</UiButton.Primary>
									{detailData.id !== 'new' && (
										<Button
											onClick={() => onDelete(detailData.id)}
											color="secondary"
											variant="contained"
										>
											{t('btn.delete')}
										</Button>
									)}
									<Button onClick={onCancel} color="primary">
										{t('btn.return')}
									</Button>
								</Form.RowActions>
							</Section.Base>
						</>
					}
				>
					<Section.Base>
						<Controller
							name="name"
							control={control}
							rules={{ required: true }}
							defaultValue={''}
							render={({ field: { onChange, onBlur, value, ref, name } }) => (
								<Form.Row
									errors={[duplicates && t('messages:error.nameInUse')]}
								>
									<TextField
										type="text"
										name={name}
										value={value}
										// onChange={onChange}
										// onBlur={onBlur}
										onChange={(e) => {
											onChange(e.target.value);
											checkDupesHandler(e.target.value);
										}}
										onBlur={(e) => {
											onBlur();
											checkDupesHandler(e.target.value);
										}}
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
					<Section.Base>...PostsDetailForm...</Section.Base>
					<Section.Base>
						...languageList {JSON.stringify(languageList)}...
					</Section.Base>
				</Form.DetailLayout>
			</Form.Wrapper>
		</>
	);
};

export default DetailForm;
