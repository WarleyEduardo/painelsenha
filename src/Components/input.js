import React from 'react';



const Input =(props) => {
	
	const { titulo , onChange} = props;
	return (
		<div>
			<div>
				<h2>{titulo}</h2>
			</div>
			<di>
				<input type='text' onChange={onChange} />
			</di>
		</div>
	);
		
};

export default Input;