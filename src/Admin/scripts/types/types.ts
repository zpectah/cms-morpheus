export interface toastItemProps {
	id?: string;
	title: string;
	context: 'default' | 'success' | 'error';
	timeout?: number;
}

export interface messageItemProps {
	id?: string;
	title?: string;
	content?: string;
	onConfirm?: () => void;
}

export interface storeProps {
	language: string;
	theme: string;
	help: string;
	sideBarOpen: boolean;
	toasts: toastItemProps[];
	messages?: messageItemProps[];
}

export interface appProps {
	app: 'App' | 'Members' | 'Market';
	modelApp:
		| 'Posts'
		| 'Users'
		| 'Tags'
		| 'Translations'
		| 'Categories'
		| 'Pages'
		| 'Requests'
		| 'Messages'
		| 'Uploads'
		| 'Menu'
		| 'MenuItems';
	modelMembers: 'Members';
	modelMarket:
		| 'Products'
		| 'ProductsOptions'
		| 'Producers'
		| 'Distributors'
		| 'Stores'
		| 'Payments'
		| 'Deliveries'
		| 'Orders'
		| 'Baskets';
}

export interface routeProps {
	path: string | null;
	name: string;
	label: string | null;
	auth: number;
}

export interface commonModelProps {
	id: string | number;
	active: number | boolean;
	deleted?: number | boolean;
}

export interface navItemProps {
	key: number;
	label: string;
	path: string | null; // TODO
	active: boolean;
	auth: number;
}
