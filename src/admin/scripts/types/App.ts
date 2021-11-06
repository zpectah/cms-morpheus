import { commonModelProps } from './types';
import config from '../config';

export interface UsersItemProps extends commonModelProps {
	email: string;
	password: string;
	nickname: string;
	first_name: string;
	middle_name?: string;
	last_name: string;
	user_level: number;
	user_group: string;
	img_avatar?: string;
}

export interface PostsItemProps extends commonModelProps {
	type: typeof config.OPTIONS.model.Posts.type_list;
	name: string;
	category?: string[];
	tags?: string[];
	event_start?: string;
	event_end?: string;
	event_location?: any[];
	event_address?: string;
	event_country?: string;
	event_city?: string;
	event_zip?: string;
	post_options?: string;
	media?: string[];
	attachments?: string[];
	img_main?: string;
	img_thumbnail?: string;
	author?: number;
	published?: string;
	rating?: number;
	lang?: {
		title: string;
		perex?: string;
		content: string;
	};
	authorized: number;
}

export interface TagsItemProps extends commonModelProps {
	name: string;
}

export interface TranslationsItemProps extends commonModelProps {
	name: string;
	lang?: {
		value: string;
	};
}

export interface CategoriesItemProps extends commonModelProps {
	type: typeof config.OPTIONS.model.Categories.type_list;
	name: string;
	parent?: string;
	img_main?: string;
	img_thumbnail?: string;
	lang?: {
		title: string;
		perex?: string; // TODO: change to description
		content?: string;
	};
}

export interface PagesItemProps extends commonModelProps {
	type: typeof config.OPTIONS.model.Pages.type_list;
	type_id: string;
	name: string;
	lang?: {
		title: string;
		content: string;
	};
}

export interface UploadsItemProps extends commonModelProps {
	type: typeof config.OPTIONS.model.Uploads.type_list;
	name: string;
	extension: string;
	file_name: string;
	file_mime: string;
	file_size: string;
	category: any[];
	lang?: {
		title: string;
	};
}

export interface RequestsItemProps {
	id?: string;
	type: 'default' | 'user' | 'system';
	context: string;
	value: string;
	token: string;
	status: number;
}
