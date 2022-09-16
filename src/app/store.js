/* 
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
*/


import { configureStore } from '@reduxjs/toolkit';

import senha from './reducers/senha';



const store = configureStore({
	reducer: {
		senha: senha,
		
	},
});

export default store;
