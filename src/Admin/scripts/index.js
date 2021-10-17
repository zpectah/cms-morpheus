import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';

import './i18n';
import store from './store';
import api from './utils/api';
import App from './App';

const fetcher = api.fetcher;

ReactDOM.render(
	<Provider store={store}>
		<SWRConfig
			value={{
				fetcher,
			}}
			children={<App />}
		/>
	</Provider>,
	document.getElementById('App'),
);
