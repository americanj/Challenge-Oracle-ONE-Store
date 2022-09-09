


var jogos = [
    {
        "imagem": "https://i.imgur.com/8HM4BGE.jpg",
        "nome": "DOOM Eternal",
        "preco": "200,00",
        "categoria": "promocao",
        "descricao": "é um jogo no mar onde você pode explorar",
        "id": 1
    },
    {
        "imagem": "https://i.imgur.com/55NdZWG.jpg",
        "nome": "SUBNAUTICA",
        "preco": "150,00",
        "categoria": "aventura",
        "descricao": "é um jogo no mar onde você pode explorar",
        "id": 2
    },
    {
        "imagem": "https://i.imgur.com/XetnfCv.png",
        "nome": "Need for speed",
        "preco": "70,00",
        "categoria": "corrida",
        "descricao": "é um jogo no mar onde você pode explorar",
        "id": 3
    },
    {
        "imagem": "https://i.imgur.com/yYyBzHC.jpg",
        "nome": "CONTROL",
        "preco": "270,00",
        "categoria": "promocao",
        "descricao": "é um jogo no mar onde você pode explorar",
        "id": 4
    },

]


localStorage.setItem('produtos', JSON.stringify(jogos))

const pegarJogos = localStorage.getItem('produtos');
const jogosConvertidosObjeto = JSON.parse(pegarJogos)

const promocao = document.querySelector('[data-promocao]')
const aventura = document.querySelector('[data-aventura]')
const corrida = document.querySelector('[data-corrida]')



function criaNovoJogo(imagem, nome, preco){
  
        const divNovoJogo = document.createElement('div')
        divNovoJogo.classList.add('games__flex-card');

        const conteudo = 
        `
            <img data-BtnLapis="" class="games__flex-lapis games__flex-lapis-hidden"src="assets/img/lapis.svg" alt="">
            <img data-BtnTrash="" class="games__flex-trash games__flex-trash-hidden" src="assets/img/trash.svg" alt="">
            <img class="games__imagem-jogo" src="${imagem}" alt="">
            <span class="games__nome-produto">${nome}</span>
            <span class="games__preco-produto">R$ ${preco}</span>
            <a href="produto.html" class="games__ver-produto">Ver produto</a>
        `
        divNovoJogo.innerHTML = conteudo
        return divNovoJogo;
        
}


jogosConvertidosObjeto.forEach(elemento =>{

    if(elemento.categoria == 'promocao'){
         promocao.appendChild(criaNovoJogo(elemento.imagem, elemento.nome, elemento.preco))
    }
    if(elemento.categoria == 'aventura'){
        aventura.appendChild(criaNovoJogo(elemento.imagem, elemento.nome, elemento.preco))
    }
    if(elemento.categoria == "corrida"){
        corrida.appendChild(criaNovoJogo(elemento.imagem, elemento.nome, elemento.preco))
    }
})







