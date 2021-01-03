import { combineReducers } from 'redux';
import workouts from './workouts';
import chart from './chart';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({ workouts, chart, form: formReducer });
