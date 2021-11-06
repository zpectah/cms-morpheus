export default (t, detailData, model) => {
	let title = t(`btn_new.${model}`);
	if (detailData.id !== 'new') title = detailData.name;

	return title;
};
