import { storage } from '../../../libs/utils';
import global from '../../../config/defaults.json';

class ThemeService {
	init() {
		document.querySelector(':root').setAttribute('theme', this.get());
		storage.set(global.Admin.STORAGE_KEY_THEME, this.get());
	}

	get() {
		return storage.get(global.Admin.STORAGE_KEY_THEME) || 'default';
	}

	set(theme) {
		document.querySelector(':root').setAttribute('theme', theme);
		storage.set(global.Admin.STORAGE_KEY_THEME, theme);
	}
}

export default new ThemeService();
