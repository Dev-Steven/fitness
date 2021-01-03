import { combineReducers } from 'redux';
import workouts from './workouts';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({ workouts, form: formReducer });
