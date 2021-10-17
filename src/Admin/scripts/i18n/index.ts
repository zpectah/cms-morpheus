import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import config from '../config';
import LanguageService from '../services/LanguageService';
import resources from './resources';

i18n.use(initReactI18next).init({
	resources,
	defaultNS: 'common',
	lng: LanguageService.get(),
	fallbackLng: config.GLOBAL.Admin.LANG_LIST,
	react: {
		bindI18n: 'languageChanged',
		useSuspense: true,
	},
});

export default i18n;
