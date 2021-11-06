import { string } from '../../../libs/utils';

const checkDuplicates = (
	items: any[],
	name: string,
	currentId: number | string | null = null,
	attr: string = 'name',
) => {
	let duplicate = false,
		itemAttr;
	const nameAlt = string.replaceSpaces(name);

	if (name.length <= 2) return false;

	items?.map((item) => {
		itemAttr = item[attr];
		if (itemAttr == name || itemAttr == nameAlt) duplicate = true;
		if (currentId == item.id) duplicate = false;
	});

	return duplicate;
};

export default checkDuplicates;
