import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import Rootreducer from './reducers';

export default createStore(
	Rootreducer,
	composeWithDevTools(applyMiddleware(reduxThunk))
);
