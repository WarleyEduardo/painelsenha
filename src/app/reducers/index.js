import {combineReducers} from 'redux'

import senha from './senha';

const reducers = combineReducers({
	senha: senha,

});

export default reducers;