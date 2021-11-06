import { storage } from '../../../libs/utils';
import global from '../../../config/defaults.json';

class HelpService {
	init() {
		storage.set(global.Admin.STORAGE_KEY_HELP, this.get());
	}

	get() {
		return storage.get(global.Admin.STORAGE_KEY_HELP) || 'true';
	}

	set(value) {
		storage.set(global.Admin.STORAGE_KEY_HELP, value);
	}
}

export default new HelpService();
