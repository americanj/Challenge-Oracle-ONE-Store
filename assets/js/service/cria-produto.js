
var filtradorDeUltimoProduto = []


const url = document.querySelector('[data-url]');

const categoria = document.querySelector('[data-categoria]');

const nome = document.querySelector('[data-nome]');

const preco = document.querySelector('[data-preco]');

const descricao = document.querySelector('[data-descricao]');


const btnAdicionar = document.querySelector('[data-adicionar]');

const btnExcluir = document.querySelector('[data-BtnTrash]')



btnAdicionar.addEventListener('click', (evento) => {

    evento.preventDefault();

    var resgatadosLocalStorage = localStorage.getItem('produtos')

    var resgatadosParseados = JSON.parse(resgatadosLocalStorage)

    //var idRecliclado = resgatadosParseados.length = resgatadosParseados.length + 1
    var resgatadosArray = []


    resgatadosParseados.forEach(elemento => {
        resgatadosArray.push(elemento)
        filtradorDeUltimoProduto.push(elemento)
    })


    var idDoUltimoProduto = filtradorDeUltimoProduto.slice(-1)[0].id
    //console.log(filtradorDeUltimoProduto.slice(-1)[0].id);
    
    var jogoPessoaAdiciona =
    {
        "imagem": url.value,
        "nome": nome.value,
        "preco": preco.value,
        "categoria": categoria.value,
        "descricao": descricao.value,
        "id": idDoUltimoProduto = idDoUltimoProduto + 1
    }

    
    resgatadosArray.push(jogoPessoaAdiciona);
    
    localStorage.setItem('produtos', JSON.stringify(resgatadosArray))
    console.log("adicionado com sucesso id: " + idDoUltimoProduto)
    window.location.href = "index.html"

})
