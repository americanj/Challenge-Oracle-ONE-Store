



const bntTodosProdutos = document.querySelectorAll('[data-verJogo]');




bntTodosProdutos.forEach(elemento => {
    elemento.addEventListener('click', () => {


        const idDoPaiDoElementoClicado = elemento.parentNode.dataset.id

        const pegarJogos = localStorage.getItem('produtos');
        const jogosConvertidosObjeto = JSON.parse(pegarJogos)

        jogosConvertidosObjeto.forEach(elemento => {
            if(elemento.id == idDoPaiDoElementoClicado){
                console.log("gg");
                //console.log(elemento);
                sessionStorage.setItem('verProduto', JSON.stringify(elemento))
               
            }
        })

    })
})

