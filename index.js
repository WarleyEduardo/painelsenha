
//const btn = document.getElementsByClassName('botao guiche1');
const preferencial = document.getElementById('preferencial');
const financeiro = document.getElementById('financeiro');
const normal = document.getElementById('normal');
const contas = document.getElementById('contas');

const guiche = document.getElementById('guiche');
const senha = document.getElementById('senha');

const tabela = document.getElementById('tabela');

let senhaPreferencial = 1;
let senhaNormal = 1
let senhaFinanceiro = 1;
let senhaContas = 1;
let qtdSenhaschmadas = 0;





const adicinarSenhaLista = ( senha , guiche ) => {
	
	  //var numeroLinhas = tabela.rows.length;
	
		let numeroLinhas = 1;
		let linha = tabela.insertRow(numeroLinhas);
		let lsenha = linha.insertCell(0);
		let lguiche = linha.insertCell(1);
		lsenha.innerHTML = senha;
	    lguiche.innerHTML = guiche;
	    qtdSenhaschmadas++;
	    	
	if (qtdSenhaschmadas = 6) {
		tabela.deleteRow(6);
		qtdSenhaschmadas = 0;
		   
	   }
}


const alterarGuiche = (prefixo, valor,numero) => {
	guiche.innerText = valor;
    senha.innerText = prefixo + ' - ' + numero;
    adicinarSenhaLista(senha.innerText, guiche.innerText);
	
};

preferencial.addEventListener('click', function () {
	
	alterarGuiche('PRE', 1, senhaPreferencial++);
});


normal.addEventListener('click', function () {
	alterarGuiche('NOR', 2, senhaNormal++);
});

financeiro.addEventListener('click', function () {
	alterarGuiche('FIN', 3, senhaFinanceiro++);
});
contas.addEventListener('click', function () {
	alterarGuiche('CON', 4, senhaContas++);
});







		

