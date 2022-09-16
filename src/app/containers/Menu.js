
import React from 'react';

import Input from '../../Components/input';
import Botao from '../../Components/Botao';
import { connect } from 'react-redux';

import * as actions from '../actions/chamada'

class Menu extends React.Component {
	state = {
		senha: '',
		guiche: '',
		lista: [],
		count: 0
	};

	chamarguiche = (guiche) => {

		let count = this.state.count + 1

		this.setState({senha: count});		
		this.setState({count: count});
		this.setState({ guiche: guiche }, () => this.chamar());
	

	}

	chamar = () => {


		let adiconarlista  = true;

		const ultimasenha = this.state.lista[this.state.lista.length - 1];
				

	
		if (ultimasenha) {
			
			if (ultimasenha.senha === this.state.senha && ultimasenha.guiche === this.state.guiche) {
			
				adiconarlista = false;
			} else {
			
				adiconarlista = true;				
			}

		}	

		const senha = {}
		let lista = [...this.state.lista];

		console.log(adiconarlista);
		console.log(this.state.senha);
		console.log(adiconarlista);

		if (adiconarlista)
		{			
			senha.senha = this.state.senha;
			senha.guiche =  this.state.guiche;		
			lista.unshift(senha);		} 
		
	
		
		if (lista.length > 3){		
			lista.splice(3)					
		}	
		

		const dados = {};

		dados.senha = senha.senha;
		dados.guiche = senha.guiche;
		dados.lista = lista;



		this.setState({ lista: [...lista] });

		
	   if (adiconarlista)
		this.props.chamarsenha(dados);
	};



	zerar = () => {
		this.setState({ lista: [] });
		this.setState({ count : 0 });

		this.props.zerarsenha();
	};

	alterarsenha = (value) => {

		if (value) 	this.setState({ senha: value });
	};

	alterarguiche = (value) => {
		if (value) this.setState({ guiche: value });
	};

	render() {
		return (
			<div className='flex horinzontal menu'>
				<div className='flex horizontal flex-1'>
					<div className='flex guiche'>
						<Botao titulo='Guichê 1' onClick={() => this.chamarguiche(1)} />
						<Botao titulo='Guichê 2' onClick={() => this.chamarguiche(2)} />
						<Botao titulo='Guichê 3' onClick={() => this.chamarguiche(3)} />
						<Botao titulo='Guichê 4' onClick={() => this.chamarguiche(4)} />
					</div>
				</div>
				<div className='flex horinzontal flex-1'>
					<div className='flex vertical senha'>
						<Input titulo='Senha' onChange={(ev) => this.alterarsenha(ev.target.value)} />
					</div>
					<div className='flex vertical ghiche'>
						<Input titulo='Guichê' onChange={(ev) => this.alterarguiche(ev.target.value)} />
					</div>
					<div className='flex vertical'>
						<Botao titulo='Chamar' onClick={this.chamar} />
						<Botao titulo='zerar' onClick={this.zerar} />
					</div>
				</div>
			</div>
		);
	}
};

const mapStateToPros = (state) => ({
	senha: state.senha,
});



export default connect(mapStateToPros, actions)(Menu);

