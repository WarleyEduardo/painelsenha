import React from 'react';
import ListaChamada from '../../Components/listachamada'

import { connect } from 'react-redux';


import Chamadasenha from '../../Components/chamadasenha';

class Painel extends React.Component {

	
	state = {
		senha: this.props.senha.senha ? this.props.senha.senha : '0',
		guiche: this.props.senha.guiche ? this.props.senha.guiche : '0',
		lista: this.props.senha.lista ? this.props.senha.lista : []
	};

	exibirsenha() {

				
		this.setState({ senha: this.props.senha.senha });
		this.setState({ guiche: this.props.senha.guiche });
		this.setState({lista: this.props.senha.lista})
			

	}
	

	componentDidUpdate(prevProps) {
		if ((prevProps.senha.senha !== this.props.senha.senha) ||
			(prevProps.senha.guiche !== this.props.senha.guiche))
		this.exibirsenha();		
	}
	

	render() {
		return (
			<div className='flex horinzontal'>
				<div className='card'>
					<Chamadasenha Titulo='Senha' Valor={this.state.senha} />
					<br />
					<Chamadasenha Titulo='Guichê' Valor={this.state.guiche} />
				</div>
				<div className='card'>
					<ListaChamada ultimaschamadas={this.state.lista} />
				</div>
			</div>
		);
	}
};


const mapStateToPros = (state) => ({
	senha: state.senha,
});


export default connect(mapStateToPros, null)(Painel);
