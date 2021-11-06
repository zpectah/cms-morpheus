import getFileType from './getFileType';

export default (filename) => {
	const regex = /(?:\.([^.]+))?$/;

	return getFileType(regex.exec(filename)[1]);
};
