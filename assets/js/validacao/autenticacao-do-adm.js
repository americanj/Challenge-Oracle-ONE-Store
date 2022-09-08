

var pegaDadosLogin = localStorage.getItem('dadosLogin');
var pegaAutenticacao = sessionStorage.getItem('autenticacao');

const btnAddProduto = document.querySelector('[data-btnAddProduto]');
//console.log(pegaAutenticacao);


const loginLocal = JSON.parse(pegaDadosLogin).login;
const senhaLocal = JSON.parse(pegaDadosLogin).senha;

if(pegaAutenticacao == 'permitido'){
     btnAddProduto.classList.remove('games__botao-hidden');
    
}




