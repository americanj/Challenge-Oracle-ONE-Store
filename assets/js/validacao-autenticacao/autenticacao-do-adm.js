

// Pega dados do Session
var pegaDadosLogin = localStorage.getItem('dadosLogin');

const loginLocal = JSON.parse(pegaDadosLogin).login;
const senhaLocal = JSON.parse(pegaDadosLogin).senha;


// Pega autenticação
var pegaAutenticacao = sessionStorage.getItem('autenticacao');


// funções do administrador
const btnAddProduto = document.querySelector('[data-btnAddProduto]');

const lapis = document.querySelectorAll('.games__flex-lapis');
const lixeira = document.querySelectorAll('.games__flex-trash');



//Verifica se o token coresponde, e dá os privilégios de administrador
if(pegaAutenticacao == 'permitido'){
     btnAddProduto.classList.remove('games__botao-hidden');

     lapis.forEach(elemento =>{
          elemento.classList.remove('games__flex-lapis-hidden')
     })

     lixeira.forEach(function(elemento){
          elemento.classList.remove('games__flex-trash-hidden')
     }) 
}






