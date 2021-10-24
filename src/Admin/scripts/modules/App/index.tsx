import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import {
	ROUTE_PATH_ATTR_DETAIL_ID,
	ROUTE_PATH_ATTR_PANEL,
	ROUTE_PATH_ATTR_TOKEN,
	ROUTES,
} from '../../constants';
import AuthRoute from '../../utils/AuthRoute';
import DashboardPage from '../../pages/DashboardPage';
import Error404Page from '../../pages/Error404';
import LostPasswordPage from '../../pages/LostPasswordPage';
import LoginPage from '../../pages/LoginPage';
import CategoriesPage from '../../pages/CategoriesPage';
import HelpPage from '../../pages/HelpPage';
import PagesPage from '../../pages/PagesPage';
import PostsPage from '../../pages/PostsPage';
import ProfilePage from '../../pages/ProfilePage';
import SettingsPage from '../../pages/SettingsPage';
import TagsPage from '../../pages/TagsPage';
import TranslationsPage from '../../pages/TranslationsPage';
import UploadsPage from '../../pages/UploadsPage';
import UsersPage from '../../pages/UsersPage';

const AppModule = () => {
	return (
		<>
			<Switch>
				<Route
					path={[
						ROUTES.app['lost-password'].path,
						ROUTES.app['lost-password'].path + ROUTE_PATH_ATTR_TOKEN,
					]}
					component={LostPasswordPage}
					exact
				/>

				<Route path={ROUTES.app.login.path} component={LoginPage} />

				<AuthRoute
					path={[
						ROUTES.app.settings.path,
						ROUTES.app.settings.path + ROUTE_PATH_ATTR_PANEL,
					]}
					component={SettingsPage}
					auth={ROUTES.app.settings.auth}
					exact
				/>

				<AuthRoute
					path={[
						ROUTES.app.posts.path,
						ROUTES.app.posts.path + ROUTE_PATH_ATTR_DETAIL_ID,
					]}
					component={PostsPage}
					auth={ROUTES.app.posts.auth}
					exact
				/>

				<AuthRoute
					path={[
						ROUTES.app.categories.path,
						ROUTES.app.categories.path + ROUTE_PATH_ATTR_DETAIL_ID,
					]}
					component={CategoriesPage}
					auth={ROUTES.app.categories.auth}
					exact
				/>

				<AuthRoute
					path={[
						ROUTES.app.translations.path,
						ROUTES.app.translations.path + ROUTE_PATH_ATTR_DETAIL_ID,
					]}
					component={TranslationsPage}
					auth={ROUTES.app.translations.auth}
					exact
				/>

				<AuthRoute
					path={[
						ROUTES.app.users.path,
						ROUTES.app.users.path + ROUTE_PATH_ATTR_DETAIL_ID,
					]}
					component={UsersPage}
					auth={ROUTES.app.users.auth}
					exact
				/>

				<AuthRoute
					path={[
						ROUTES.app.tags.path,
						ROUTES.app.tags.path + ROUTE_PATH_ATTR_DETAIL_ID,
					]}
					component={TagsPage}
					auth={ROUTES.app.tags.auth}
					exact
				/>

				<AuthRoute
					path={[
						ROUTES.app.uploads.path,
						ROUTES.app.uploads.path + ROUTE_PATH_ATTR_DETAIL_ID,
					]}
					component={UploadsPage}
					auth={ROUTES.app.uploads.auth}
					exact
				/>

				<AuthRoute
					path={[
						ROUTES.app.pages.path,
						ROUTES.app.pages.path + ROUTE_PATH_ATTR_DETAIL_ID,
					]}
					component={PagesPage}
					auth={ROUTES.app.pages.auth}
					exact
				/>

				<AuthRoute
					path={ROUTES.app.dashboard.path}
					component={DashboardPage}
					auth={ROUTES.app.dashboard.auth}
					exact
				/>

				<Route path={ROUTES.app.help.path} component={HelpPage} exact />

				<Route path={ROUTES.app.profile.path} component={ProfilePage} exact />

				<Route component={Error404Page} />
			</Switch>
		</>
	);
};

export default AppModule;
