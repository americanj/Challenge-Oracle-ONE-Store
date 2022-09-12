


const resgatadosLocalStorage = localStorage.getItem('produtos')
const resgatadosParseados = JSON.parse(resgatadosLocalStorage)

var array = []


const btnExcluir = document.querySelectorAll('[data-BtnTrash]');

btnExcluir.forEach(elemento => {
    elemento.addEventListener('click', function (evento) {
        //pega o elemento lixeira
        //console.log(elemento);
        //pega o elemento clicaco
        //console.log(evento.target);
        //pega o id do elemento clicado
        const idDoPaiDoElementoCLicado = elemento.parentNode.dataset.id

        resgatadosParseados.forEach(element => {
            if (element.id == idDoPaiDoElementoCLicado) {
                //pega o pai do elemento clicado, e deleta do html
                elemento.parentNode.remove()
                location.reload();
            } else {
                array.push(element)
                localStorage.removeItem('produtos')
            }

        })
        //console.log(array);
        localStorage.setItem('produtos', JSON.stringify(array))
    })
})



//REDIRECIONA PARA EDITAR PRODUTO
const btnLapis = document.querySelectorAll('[data-BtnLapis]');
btnLapis.forEach(elemento => {
    elemento.addEventListener('click', () => {
        var clicadoNoLapis = true
        sessionStorage.setItem('clicado', JSON.stringify(clicadoNoLapis))
        const idDoPaiDoElementoCLicado = elemento.parentNode.dataset.id
        //console.log(idDoPaiDoElementoCLicado);

        resgatadosParseados.forEach(element => {
            if (element.id == idDoPaiDoElementoCLicado) {
        
                //const querEditar = true;
                sessionStorage.setItem('editar', JSON.stringify(element))

                //console.log("página deleta " + querEditar);
                setTimeout(() => {
                    console.log("Delayed for 1 second.");
                    window.location.href = 'adicionar-produto.html'
                  }, "300")
                //

            }

        })
    })
})




/*
export function buceta(){
    console.log("buceta");
}*/




/**
         resgatadosParseados.forEach(jogo => {

            //aquilo que você não quer
            if (jogo.id == idDoPaiDoElementoCLicado) {
                //pega o pai do elemento clicado, e deleta do html
                elemento.parentNode.remove()
                   
            } else {
                novoArray.push(jogo)
                localStorage.setItem('produtos', JSON.stringify(novoArray))
            }
            
        
        })
 * 
 * 
 * 
 */













