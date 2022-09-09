




const produto = {
    
    id: 1,
    url: 'https://i.imgur.com/7VyNPhH.png',
    categoria: 'promocao',
    nome: 'Cyber Punk 2077',
    preco: '300,00',
    descricao: 'É um jogo de tiro online, onde você pode fazer oq quiser no mundo'
    
}



//var dados = localStorage.setItem('nome','igor');
localStorage.setItem('produtos', JSON.stringify(produto))