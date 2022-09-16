import React from 'react';



const ChamadaSenha = (props) => {
	const { Titulo , Valor} = props;

	return (
		<div className='chamadaSenha'>
			<div className='flex chamadaSenha-titulo'>
				<h2>{Titulo}</h2>
			</div>
			<div className='flex chamadaSenha-valor'>
				<h3>{Valor}</h3>
			</div>
		</div>
	);
};

export default ChamadaSenha;
