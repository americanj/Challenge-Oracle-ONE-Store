



/*
const criaNovoJogo = function(imagem, nome, preco){
    const divNovoJogo = document.createElement('div')
    divNovoJogo.classList.add('games__flex-card');
    const conteudo = `
        
            <img class="games__flex-lapis games__flex-lapis-hidden" src="assets/img/lapis.svg" alt="">
            <img class="games__flex-trash games__flex-trash-hidden" src="assets/img/trash.svg" alt="">
            <img class="games__imagem-jogo" src="${imagem}" alt="">
            <span class="games__nome-produto">${nome}</span>
            <span class="games__preco-produto">R$ ${preco}</span>
            <a href="produto.html" class="games__ver-produto">Ver produto</a>
        `

        divNovoJogo.innerHTML = conteudo;
        return divNovoJogo;
}
*/

/*
var pegarJogos = localStorage.getItem('produtos');

const imagem = JSON.parse(pegarJogos)[0].imagem
const nome = JSON.parse(pegarJogos)[0].nome
const preco = JSON.parse(pegarJogos)[0].preco

//percorer o secao de promocoes
const container = document.querySelector('[data-promocao]');



container.appendChild(criaNovoJogo(imagem, nome, preco))



const http = new XMLHttpRequest()
http.open('GET', 'http://localhost:300/profile')

http.onload = function(){
    const data = http.response
    console.log(data);
}

*/
const containerProdutos = document.querySelector('[data-todosProdudos]');


function criaNovoJogo(imagem, nome, preco, id){
  
    const divNovoJogo = document.createElement('div')
    divNovoJogo.dataset.id = id
    divNovoJogo.classList.add('games__flex-card');
    

    const conteudo = 
    `
        <img data-BtnLapis="" class="games__flex-lapis games__flex-lapis-hidden"src="assets/img/lapis.svg" alt="">
        <img data-BtnTrash="" class="games__flex-trash games__flex-trash-hidden" src="assets/img/trash.svg" alt="">
        <img class="games__imagem-jogo" src="${imagem}" alt="">
        <span class="games__nome-produto">${nome}</span>
        <span class="games__preco-produto">R$ ${preco}</span>
        <a data-verJogo href="produto.html" class="games__ver-produto">Ver produto</a>
    `
    divNovoJogo.innerHTML = conteudo
    return divNovoJogo;
    
}


const pegarJogos = localStorage.getItem('produtos');
const jogosConvertidosObjeto = JSON.parse(pegarJogos)

jogosConvertidosObjeto.forEach(elemento => {
    containerProdutos.appendChild(criaNovoJogo(elemento.imagem, elemento.nome, elemento.preco, elemento.id))
})






