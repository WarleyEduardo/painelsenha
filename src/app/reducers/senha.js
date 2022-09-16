import { SENHACHAMADA, ZERACHAMADA } from '../actions/types';

export default (state = {}, action) => {
	
	switch (action.type) {
		case SENHACHAMADA: {
			return {
				senha: action.chamou.senha,
				guiche: action.chamou.guiche,
				lista: action.chamou.lista				
			};
		}

		case ZERACHAMADA: {
			return {
				senha: '',
				guiche: '',
				lista : []
			};
		}

		default:
			return {

				senha: '',
				guiche: '',
				lista : []
				
			};
	}
}