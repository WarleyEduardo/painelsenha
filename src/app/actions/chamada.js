import { SENHACHAMADA, ZERACHAMADA } from './types';


export const chamarsenha = (chamada) => (
	{ type: SENHACHAMADA, chamou: chamada }
)
export const zerarsenha = () => ({ type: ZERACHAMADA, chamou: null });




