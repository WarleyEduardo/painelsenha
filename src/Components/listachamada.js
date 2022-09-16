

import React from 'react';

const ListaChamada = (props) => {	
	

	const { ultimaschamadas } = props;
		

	return (
		<div className='flex listachamada vertical'>
			<div className='flex'>
				<h1>Últimas chamadas</h1>
			</div>

			<div className='flex '>
				<table className='tabela'>
					<thead>
						<th>Senha</th>
						<th>Guichê</th>
					</thead>
					<tbody>
						{ultimaschamadas.map((item, idx) => (
							<tr key={idx}>
								<td>{item.senha || ''}</td>
								<td>{item.guiche || ''}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ListaChamada;
