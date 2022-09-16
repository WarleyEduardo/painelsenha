import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Menu from './containers/Menu'
import Painel from './containers/Painel'


class App extends React.Component{



	render() {
		return (
			<Provider store={store}>
				<div className='app'>
				<Menu/>
				<Painel/>
				</div>
			</Provider>
		);		
	}
}

export default App;
 


