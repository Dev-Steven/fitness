import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App';

import './style.scss';

ReactDOM.render(
	<Provider store={store} className='index'>
		<App className='index' />
	</Provider>,
	document.getElementById('root')
);
