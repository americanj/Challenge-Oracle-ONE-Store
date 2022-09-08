


const login = document.querySelector('[data-login]');
const senha = document.querySelector('[data-senha]');




login.addEventListener('blur', () => {
    if (login.value == '' && senha.value == '') {
        login.classList.add('login__input-error');
        senha.classList.add('login__input-error');
    } else {
        login.classList.remove('login__input-error');
        senha.classList.remove('login__input-error');
    }
})

const dados = {
    login: 'igor',
    senha: '0122'
}



//var dados = localStorage.setItem('nome','igor');
localStorage.setItem('dadosLogin', JSON.stringify(dados))

var pegaDadosLogin = localStorage.getItem('dadosLogin');
console.log(JSON.parse(pegaDadosLogin).senha);


const loginLocal = JSON.parse(pegaDadosLogin).login;
const senhaLocal = JSON.parse(pegaDadosLogin).senha;



//btn entrar
const btnEntrar = document.querySelector('[data-btnEntrar]');
btnEntrar.addEventListener('click', () => {

    if (login.value == "" && senha.value == "") {
        alert("Preencha os campos!");
    }

    //Acesso ao a página de todos os produtos
    if (login.value == loginLocal && senha.value == senhaLocal) {
        sessionStorage.setItem('autenticacao', 'permitido')
        window.location.href = "todos-produtos.html"
       
    } else {
        alert("Login ou Senha incorretos!")
        login.classList.add('login__input-error');
        senha.classList.add('login__input-error')
    }
})




