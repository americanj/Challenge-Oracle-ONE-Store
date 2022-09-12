


if (JSON.parse(sessionStorage.getItem('clicado'))) {

    sessionStorage.removeItem('clicado');

    const botaoEditarProduto = document.querySelector('[data-editar]')
    botaoEditarProduto.classList.remove('editarProduto__botao-hidden')

    const botaoAdicionarProduto = document.querySelector('[data-adicionar]');
    botaoAdicionarProduto.classList.add('adicionarProduto__botao-hidden');
}








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






const sessionRecupera = sessionStorage.getItem('editar')

const sessionRecuperaParseado = JSON.parse(sessionRecupera)

if (sessionRecupera) {

    setTimeout(() => {
        sessionStorage.removeItem('editar');
        console.log("delay tela adicionar produto");
    }, "300")

    url.value = sessionRecuperaParseado.imagem

    categoria.value = sessionRecuperaParseado.categoria

    nome.value = sessionRecuperaParseado.nome

    preco.value = sessionRecuperaParseado.preco

    descricao.value = sessionRecuperaParseado.descricao

    sessionRecuperaParseado.id = sessionRecuperaParseado.id

}



const btnEditar = document.querySelector('[data-editar]')

var array = []
btnEditar.addEventListener('click', (evento) => {
    evento.preventDefault();

    const resgatadosLocalStorage = localStorage.getItem('produtos')
    const resgatadosParseados = JSON.parse(resgatadosLocalStorage)
    const resgatadosParseados2 = JSON.parse(resgatadosLocalStorage)

    const sempreUltimoId = resgatadosParseados2.pop().id





    resgatadosParseados.forEach(elemento => {
        if (elemento.id == sessionRecuperaParseado.id) {

        } else {
            array.push(elemento)
        }
    })

    var jogoPessoaEdita =
    {
        "imagem": url.value,
        "nome": nome.value,
        "preco": preco.value,
        "categoria": categoria.value,
        "descricao": descricao.value,
        "id": sessionRecuperaParseado.id
    }

    //console.log(sempreUltimoId);

    //const found = resgatadosParseados.id.find(element => element > 1);

    //console.log(found);

    //console.log(resgatadosParseados[0].id);
    //console.log(resgatadosParseados[0].lenght);
    //console.log(resgatadosParseados[0].length);

    if (sempreUltimoId <= sessionRecuperaParseado.id) {
        array.push(jogoPessoaEdita)
        console.log("sempre ultimo :" + sempreUltimoId);
        console.log("id do produto editado " + sessionRecuperaParseado.id);
        console.log("do if");


    } else {
        console.log("do else");
        array.unshift(jogoPessoaEdita)

    }




    //console.log(array);
    localStorage.setItem('produtos', JSON.stringify(array))

    setTimeout(() => {
        location.reload();
        window.location.href = 'todos-produtos.html'

        //window.location.href = 'todos-produtos.html'
    }, 100)
})
