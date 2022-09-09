




const inputNome = document.querySelector('[data-inputNome]');
inputNome.addEventListener('blur', () => {
    if (inputNome.value == '') {
        inputNome.classList.add('rodape__input-error');

    } else {
        inputNome.classList.remove('rodape__input-error');
    }
})


const inputTextArea = document.querySelector('[data-inputMensagem]');
inputTextArea.addEventListener('blur', () => {
    if (inputTextArea.value == '') {
        inputTextArea.classList.add('rodape__textarea-error')

    } else {
        inputTextArea.classList.remove('rodape__textarea-error');
    }
})