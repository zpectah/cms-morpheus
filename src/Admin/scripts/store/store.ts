import { storage } from '../../../libs/utils';
import config from '../config';
import LangService from '../services/LanguageService';
import ThemeService from '../services/ThemeService';
import HelpService from '../services/HelpService';
import { storeProps } from '../types/types';

const UiStoreState: storeProps = {
	language: LangService.get(),
	theme: ThemeService.get(),
	help: HelpService.get(),
	sideBarOpen: storage.get(config.GLOBAL.Admin.STORAGE_KEY_UI_SIDEBAR) === 'true',
	toasts: [],
};

export default UiStoreState;
