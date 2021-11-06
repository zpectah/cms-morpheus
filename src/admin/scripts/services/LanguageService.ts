import { storage } from '../../../libs/utils';
import global from '../../../config/defaults.json';

class LangService {
	get() {
		return storage.get(global.Admin.STORAGE_KEY_LANG) || global.Admin.LANG_DEFAULT;
	}

	set(lang) {
		storage.set(global.Admin.STORAGE_KEY_LANG, lang);
	}
}

export default new LangService();
