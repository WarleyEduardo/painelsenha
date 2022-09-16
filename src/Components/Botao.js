import React from 'react';

const Botao = (props) => {

	const { titulo, onClick } = props;

	return (
		<div className='Botao'>
			<button className='Estilo' onClick={onClick}>
				
				{titulo}
			</button>
		</div>
	);


};
 
export default Botao;

  