export const THEMES = ['default'];
export const PIXEL_COEFFICIENT = 0.02;
export const BREAKPOINTS = {
	xs: 0,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1400,
};
export const SETTINGS_PANEL = [
	'global',
	'web',
	'content',
	'module',
	'maintenance',
];
export const PASSWORD_MIN_LENGTH = 4;
export const EMAIL_REGEX =
	/^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|\"[a-zA-Z0-9.+!% -]{1,64}\")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$/;
export const MESSAGE_SUCCESS_DURATION = 2500;
export const MESSAGE_ERROR_DURATION = 3500;
export const MAPBOX = {
	token:
		'pk.eyJ1IjoienBlY3RlciIsImEiOiJja3BhYm5qMDIwc2plMnVuMTUzb3cxdWl6In0.BmfujOqcuQklZDV3HB-JCA', // TODO: This is private key !!!
	defaultLocation: {
		longitude: 14.501273600376752,
		latitude: 50.08322927731517,
		zoom: 10,
	},
};
export const DEFAULT_UNITS = {
	price: 'EUR',
	weight: 'Kg',
	length: 'mm',
};
export const USER_LEVEL = {
	demo: {
		id: 0,
		key: 'demo',
	},
	redactor: {
		id: 2,
		key: 'redactor',
	},
	chief_redactor: {
		id: 3,
		key: 'chief_redactor',
	},
	admin: {
		id: 5,
		key: 'admin',
	},
	super_admin: {
		id: 7,
		key: 'super_admin',
	},
};
export const ROUTE_PATH_SUFFIX_DETAIL = '/detail';
export const ROUTE_PATH_ATTR_DETAIL_ID = ROUTE_PATH_SUFFIX_DETAIL + '/:id';
export const ROUTE_PATH_ATTR_PANEL = '/:panel';
export const ROUTE_PATH_ATTR_TOKEN = '/token/:token';
export const ROUTE_PATH_ATTR_MENU = '/menu';
export const ROUTE_PATH_ATTR_MENU_MENU = '/menu/:menu';
export const ROUTE_PATH_ATTR_MENUITEM = '/menuItem';
export const ROUTE_PATH_ATTR_MENUITEM_MENUITEM = '/menuItem/:menuItem';
export const IMAGE_CROP_OPTIONS = [
	{
		label: '1:1',
		value: 1 / 1,
	},
	{
		label: '3:2',
		value: 3 / 2,
	},
	{
		label: '4:3',
		value: 4 / 3,
	},
	{
		label: '16:9',
		value: 16 / 9,
	},
	//
	{
		label: '2:3',
		value: 2 / 3,
	},
	{
		label: '3:4',
		value: 3 / 4,
	},
	{
		label: '9:16',
		value: 9 / 16,
	},
];
export const DATA_TABLE_ROWS_BY_PAGE = [5, 10, 25, 50, 100];
export const ROUTES = {
	app: {
		'error-404': {
			path: null,
			name: 'error-404',
			label: null,
			auth: 0,
		},
		login: {
			path: '/admin/login',
			name: 'login',
			label: null,
			auth: 0,
		},
		'lost-password': {
			path: '/admin/lost-password',
			name: 'lost-password',
			label: null,
			auth: 0,
		},

		dashboard: {
			path: '/admin',
			name: 'dashboard',
			label: 'Dashboard.label',
			auth: USER_LEVEL.redactor.id,
		},
		settings: {
			path: '/admin/settings',
			name: 'settings',
			label: 'Settings.label',
			auth: USER_LEVEL.admin.id,
		},
		posts: {
			path: '/admin/posts',
			name: 'posts',
			label: 'Posts.label',
			auth: USER_LEVEL.redactor.id,
		},
		users: {
			path: '/admin/users',
			name: 'users',
			label: 'Users.label',
			auth: USER_LEVEL.admin.id,
		},
		tags: {
			path: '/admin/tags',
			name: 'tags',
			label: 'Tags.label',
			auth: USER_LEVEL.redactor.id,
		},
		translations: {
			path: '/admin/translations',
			name: 'translations',
			label: 'Translations.label',
			auth: USER_LEVEL.chief_redactor.id,
		},
		categories: {
			path: '/admin/categories',
			name: 'categories',
			label: 'Categories.label',
			auth: USER_LEVEL.redactor.id,
		},
		pages: {
			path: '/admin/pages',
			name: 'pages',
			label: 'Pages.label',
			auth: USER_LEVEL.chief_redactor.id,
		},
		uploads: {
			path: '/admin/uploads',
			name: 'uploads',
			label: 'Uploads.label',
			auth: USER_LEVEL.redactor.id,
		},

		help: {
			path: '/admin/help',
			name: 'help',
			label: 'Help.label',
			auth: USER_LEVEL.redactor.id,
		},
		profile: {
			path: '/admin/profile',
			name: 'profile',
			label: 'Profile.label',
			auth: USER_LEVEL.redactor.id,
		},
	},
};
export const NAV_ITEMS = {
	app: [
		{
			key: 1,
			label: ROUTES.app.dashboard.label,
			path: ROUTES.app.dashboard.path,
			active: true,
			auth: USER_LEVEL.redactor.id,
		},
		{
			key: 2,
			label: ROUTES.app.settings.label,
			path: ROUTES.app.settings.path,
			active: true,
			auth: USER_LEVEL.admin.id,
		},
		{
			key: 3,
			label: ROUTES.app.users.label,
			path: ROUTES.app.users.path,
			active: true,
			auth: USER_LEVEL.admin.id,
		},
		{
			key: 4,
			label: ROUTES.app.posts.label,
			path: ROUTES.app.posts.path,
			active: true,
			auth: USER_LEVEL.redactor.id,
		},
		{
			key: 5,
			label: ROUTES.app.tags.label,
			path: ROUTES.app.tags.path,
			active: true,
			auth: USER_LEVEL.redactor.id,
		},
		{
			key: 6,
			label: ROUTES.app.categories.label,
			path: ROUTES.app.categories.path,
			active: true,
			auth: USER_LEVEL.redactor.id,
		},
		{
			key: 7,
			label: ROUTES.app.translations.label,
			path: ROUTES.app.translations.path,
			active: true,
			auth: USER_LEVEL.chief_redactor.id,
		},
		{
			key: 8,
			label: ROUTES.app.pages.label,
			path: ROUTES.app.pages.path,
			active: true,
			auth: USER_LEVEL.chief_redactor.id,
		},
		{
			key: 9,
			label: ROUTES.app.uploads.label,
			path: ROUTES.app.uploads.path,
			active: true,
			auth: USER_LEVEL.redactor.id,
		},
	],
	add: [
		{
			key: 0,
			label: 'btn_new.Posts',
			path: ROUTES.app.posts.path,
			active: true,
			auth: USER_LEVEL.redactor.id,
		},
		{
			key: 1,
			label: 'btn_new.Users',
			path: ROUTES.app.users.path,
			active: true,
			auth: USER_LEVEL.admin.id,
		},
		{
			key: 2,
			label: 'btn_new.Tags',
			path: ROUTES.app.tags.path,
			active: true,
			auth: USER_LEVEL.redactor.id,
		},
		{
			key: 3,
			label: 'btn_new.Translations',
			path: ROUTES.app.translations.path,
			active: true,
			auth: USER_LEVEL.chief_redactor.id,
		},
		{
			key: 4,
			label: 'btn_new.Categories',
			path: ROUTES.app.categories.path,
			active: true,
			auth: USER_LEVEL.redactor.id,
		},
		{
			key: 5,
			label: 'btn_new.Pages',
			path: ROUTES.app.pages.path,
			active: true,
			auth: USER_LEVEL.chief_redactor.id,
		},
		{
			key: 6,
			label: 'btn_new.Uploads',
			path: ROUTES.app.uploads.path,
			active: true,
			auth: USER_LEVEL.redactor.id,
		},
	],
};
