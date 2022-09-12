

const containerCardsUnico = document.querySelector('[data-produtoCards]')

const pegaProduto = JSON.parse(sessionStorage.getItem('verProduto'))
//sessionStorage.removeItem('verProduto');
//console.log(pegaProduto);

if (pegaProduto) {
    containerCardsUnico.appendChild(criaNovoCard(pegaProduto.imagem, pegaProduto.nome, pegaProduto.preco, pegaProduto.descricao))

}



function criaNovoCard(imagem, nome, preco, descricao) {

    const divCard = document.createElement('div')
    //divNovoJogo.dataset.id = id
    divCard.classList.add('produto__flex-card');

    const conteudo =
        `
    
        <img class="produto__imagem-jogo" src="${imagem}" alt="">
        <div class="produto__container-info">
            <span class="produto__nome-produto">${nome}</span>
            <span class="produto__preco-produto">R$ ${preco}</span>
            <p class="produto__info_produto">${descricao}</p>
        </div>
    
    `
    divCard.innerHTML = conteudo

    return divCard;

}