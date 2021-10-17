import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider as ThemeProviderSC } from 'styled-components';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import muiTheme from './styles/mui.theme';
import themes from './styles/theme';
import { GLOBAL as GlobalStyles } from './styles/global';
import {
	ROUTE_PATH_ATTR_DETAIL_ID,
	ROUTE_PATH_ATTR_PANEL,
	ROUTE_PATH_ATTR_TOKEN,
	ROUTES,
	ROUTE_PATH_ATTR_MENU,
	ROUTE_PATH_ATTR_MENUITEM,
	ROUTE_PATH_ATTR_MENUITEM_MENUITEM,
	ROUTE_PATH_ATTR_MENU_MENU,
} from './constants';
import ThemeService from './services/ThemeService';
import HelpService from './services/HelpService';
import AppModule from './modules/App';
import MembersModule from './modules/Members';
import MarketModule from './modules/Market';
import Toasts from './modules/Toasts';

const App = () => {
	const store = useSelector((store: any) => store);
	const [theme, setTheme] = useState(themes['default']);

	return (
		<ThemeProviderSC theme={theme}>
			<GlobalStyles />
			<ThemeProvider theme={muiTheme}>
				<Router>
					<AppModule />
					<MembersModule />
					<MarketModule />
				</Router>
				<Toasts />
			</ThemeProvider>
		</ThemeProviderSC>
	);
};

export default App;
