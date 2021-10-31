import React from 'react';

interface PostsDetailFormProps {
	detailData: any; //
	onSubmit: (formData: any) => void;
	onCancel: () => void;
}

const DetailForm = ({
	detailData,
	onSubmit,
	onCancel,
}: PostsDetailFormProps) => {
	return (
		<>
			<form>
				...PostsDetailForm...
				<a onClick={onCancel}>cancel</a>
			</form>
		</>
	);
};

export default DetailForm;
