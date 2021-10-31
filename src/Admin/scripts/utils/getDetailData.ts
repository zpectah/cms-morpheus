export default (id: number | string, items: any[]) => {
	let data = null;

	if (id == 'new') {
		data = {
			id: 'new',
		};
	} else if (items) {
		items.map((item) => {
			if (item.id == id) data = item;
		});
	}

	return data;
};
