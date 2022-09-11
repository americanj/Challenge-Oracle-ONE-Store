

var id = 1;
//console.log(id+10);

//var idTemplate = idTemplate + id;


var jogos = [
    {
        "imagem": "https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/cKZ4tKNFj9C00giTzYtH8PF1.png",
        "nome": "Cyberpunk 2077",
        "preco": "200,00",
        "categoria": "promocao",
        "descricao": "Cyberpunk 2077 é um RPG de ação e aventura em mundo aberto ambientado na megalópole de Night City, onde você é um mercenário cyberpunk envolvido em uma intensa luta pela sobrevivência. Com diversas melhorias e conteúdo adicional gratuito, personalize o seu personagem e o seu estilo de jogo conforme aceita trabalhos, construa uma reputação e desbloqueie melhorias. Seus relacionamentos e suas escolhas moldarão a história e o mundo ao seu redor. Aqui nascem as lendas. Qual será a sua?",
        "id": id++
    },
    {
        "imagem": "https://cdn-products.eneba.com/resized-products/0c87248bbfac2866d434aad19334b24b_350x200_1x-0.jpg",
        "nome": "The Witcher 3: Wild Hunt",
        "preco": "79,99",
        "categoria": "promocao",
        "descricao": "The Witcher: Wild Hunt é um RPG de mundo aberto de fantasia cheio de escolhas vitais. Em The Witcher, você joga como um caçador de monstros profissional, Geralt de Rívia, em busca da criança da profecia em um vasto mundo aberto, rico em cidades mercantis, ilhas piratas, passagens perigosas nas montanhas e cavernas esquecidas a serem exploradas.",
        "id": id++
    },
    {
        "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/268910/library_600x900.jpg?t=1661955091",
        "nome": "Cuphead",
        "preco": "19,95",
        "categoria": "promocao",
        "descricao": "Cuphead é um jogo eletrônico de run and gun e plataforma criado pelos irmãos canadenses Chad e Jared Moldenhauer através da Studio MDHR. O jogo foi inspirado no estilo de animação Rubber hose usado em desenhos animados da Era de Ouro da animação americana, como o trabalho dos estúdios Fleischer Studios, Warner Bros.",
        "id": id++
    },
    {
        "imagem": "https://images-na.ssl-images-amazon.com/images/I/810E0pAjpiL.jpg",
        "nome": "Minecraft Dungeons",
        "preco": "74,99",
        "categoria": "promocao",
        "descricao": "Minecraft Dungeons é um jogo eletrônico dungeon crawler desenvolvido pela Mojang Stockholm, Mojang Shanghai e Double Eleven e publicado pela Xbox Game Studios. É baseado em Minecraft e foi lançado em 26 de maio de 2020 para Microsoft Windows, Nintendo Switch, PlayStation 4 e Xbox One.",
        "id": id++
    },
    {
        "imagem": "https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png",
        "nome": "Resident Evil Village",
        "preco": "104,92",
        "categoria": "promocao",
        "descricao": "Ambientado em alguns anos depois dos terríveis eventos do consagrado pela crítica Resident Evil 7 bioharzard, o novo enredo começa com Ethan Winters e sua esposa Mia vivendo pacificamente num novo lugar, livres dos pesadelos do passado. E, logo quando estavam construindo uma nova vida juntos, uma tragédia os acomete novamente.",
        "id": id++
    },
    {
        "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1551360/hero_capsule.jpg?t=1661275467",
        "nome": "Forza Horizon 5",
        "preco": "174,92",
        "categoria": "aventura",
        "descricao": "The Witcher: Wild Hunt é um RPG de mundo aberto de fantasia cheio de escolhas vitais. Em The Witcher, você joga como um caçador de monstros profissional, Geralt de Rívia, em busca da criança da profecia em um vasto mundo aberto, rico em cidades mercantis, ilhas piratas, passagens perigosas nas montanhas e cavernas esquecidas a serem exploradas.",
        "id": id++
    },
    {
        "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/271590/library_600x900.jpg?t=1618856444",
        "nome": "Grand Theft Auto V",
        "preco": "120,92",
        "categoria": "aventura",
        "descricao": "The Witcher: Wild Hunt é um RPG de mundo aberto de fantasia cheio de escolhas vitais. Em The Witcher, você joga como um caçador de monstros profissional, Geralt de Rívia, em busca da criança da profecia em um vasto mundo aberto, rico em cidades mercantis, ilhas piratas, passagens perigosas nas montanhas e cavernas esquecidas a serem exploradas.",
        "id": id++
    },
    {
        "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1332010/hero_capsule.jpg?t=1660855681",
        "nome": "Stray",
        "preco": "63,92",
        "categoria": "aventura",
        "descricao": "Stray é um jogo eletrônico de aventura desenvolvido pela BlueTwelve Studio e publicado pela Annapurna Interactive. Foi lançado em 19 de julho de 2022 para Microsoft Windows, PlayStation 4 e PlayStation 5.",
        "id": id++
    },
    {
        "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/346110/library_600x900.jpg?t=1655137924",
        "nome": "ARK: Survival Evolved",
        "preco": "180,99",
        "categoria": "aventura",
        "descricao": "Ark: Survival Evolved é um jogo eletrônico de ação-aventura e sobrevivência desenvolvido pela Studio Wildcard, em colaboração com Instinct Games, Efecto Studios e Virtual Basement.",
        "id": id++
    },
    {
        "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/306130/hero_capsule.jpg?t=1661194916",
        "nome": "The Elder Scrolls",
        "preco": "61,50",
        "categoria": "aventura",
        "descricao": "The Elder Scrolls é uma série de videojogos do gênero role-playing de ação em mundo aberto, produzidos principalmente pelos estúdios Bethesda Game Studios e publicados pela Bethesda Softworks,",
        "id": id++
    },
    {
        "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1465360/hero_capsule.jpg?t=1662719138",
        "nome": "SnowRunner",
        "preco": "65,94",
        "categoria": "corrida",
        "descricao": "SnowRunner é um videogame de simulação off-road de 2020 desenvolvido pela Saber Interactive e publicado pela Focus Home Interactive. Seguindo Spintires e a sequência MudRunner, o jogo foi anunciado como MudRunner 2 em agosto de 2018",
        "id": id++
    },
    {
        "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/690790/library_600x900.jpg?t=1626343640",
        "nome": "DIRT Rally 2.0",
        "preco": "47,79",
        "categoria": "corrida",
        "descricao": "Dirt Rally 2.0 é um jogo de corrida desenvolvido e publicado pela Codemasters para o Microsoft Windows, PlayStation 4 e Xbox One. Foi lançado em 26 de fevereiro de 2019. O jogo é o décimo terceiro título da série Colin McRae Rally e o sétimo título para levar o nome Dirt.",
        "id": id++
    },
    {
        "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/805550/hero_capsule.jpg?t=1662549629",
        "nome": "Assetto Corsa Competizione",
        "preco": "61,50",
        "categoria": "corrida",
        "descricao": "Assetto Corsa Competizione é um simulador de corridas de carros esportivos desenvolvido pelo desenvolvedor italiano de videogames Kunos Simulazioni.",
        "id": id++
    },
    {
        "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/635260/library_600x900.jpg?t=1656514798",
        "nome": "CarX Drift Racing Online",
        "preco": "28,99",
        "categoria": "corrida",
        "descricao": "CarX Drift Racing Online is your chance to immerse yourself in the real world of drifting. Get together with friends, tune your car and burn some tires! Análises recentes: Extremamente positivas (1,391) - 96% das 1,391 análises de utilizadores nos últimos 30 dias são positivas.",
        "id": id++
    },
    {
        "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/266410/library_600x900.jpg?t=1662580861",
        "nome": "iRacing",
        "preco": "24,99",
        "categoria": "corrida",
        "descricao": " iRacing.com é um jogo eletrônico online de simulação de corridas de automóveis lançado em 2008, disponível para Microsoft Windows, Linux e OS X criado pela iRacing.com Motorsport Simulations.",
        "id": id++
    },
]



//se for a primeira vez seta os dados do array
if (localStorage.length <= 1) {
    console.log("setei itens do array");
    localStorage.setItem('produtos', JSON.stringify(jogos))
}



const pegarJogos = localStorage.getItem('produtos');
const jogosConvertidosObjeto = JSON.parse(pegarJogos)

const promocao = document.querySelector('[data-promocao]')
const aventura = document.querySelector('[data-aventura]')
const corrida = document.querySelector('[data-corrida]')



function criaNovoJogo(imagem, nome, preco, id) {

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
            <a href="produto.html" class="games__ver-produto">Ver produto</a>
        `
    divNovoJogo.innerHTML = conteudo
    
    return divNovoJogo;

}


jogosConvertidosObjeto.forEach(elemento => {


    if (elemento.categoria == 'promocao') {
        promocao.appendChild(criaNovoJogo(elemento.imagem, elemento.nome, elemento.preco, elemento.id))
    }
    if (elemento.categoria == 'aventura') {
        aventura.appendChild(criaNovoJogo(elemento.imagem, elemento.nome, elemento.preco, elemento.id))
    }
    if (elemento.categoria == "corrida") {
        corrida.appendChild(criaNovoJogo(elemento.imagem, elemento.nome, elemento.preco, elemento.id))
    }
})


//console.log(id - 1);




