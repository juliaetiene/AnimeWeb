const defaultImage = "https://via.placeholder.com/120x160?text=Imagem+Não+Disponível";

// Função para carregar a imagem de forma dinâmica
function loadImage(src, imgElement) {
    const img = new Image();
    img.src = src;
    img.onload = function () {
        imgElement.src = this.src;
    };
    img.onerror = function () {
        imgElement.src = defaultImage;
    };
}


const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));


if (loggedUser) {
    document.querySelector('h1').textContent = `Seja bem-vindo, ${loggedUser.name}!`;
    document.querySelector('p').textContent = `Seu e-mail é: ${loggedUser.email}`;

    const animeList = document.querySelector('.anime-list');
    animeList.innerHTML = ''; 


    const animeImages = {
        naruto: '/img/naruto.jpg',
        dragonball: '/img/dragonBall.jpg',
        onepiece: '/img/one piece.jpg',
        attackontitan: '/img/attack on titan.jpg',
        myheroacademia: '/img/my hero academia.jpg',
    };


    loggedUser.anime.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.className = 'anime-card';

    
        const imgElement = document.createElement('img');
        loadImage(animeImages[anime] || defaultImage, imgElement);

    
        const animeTitle = document.createElement('span');
        animeTitle.textContent = anime.charAt(0).toUpperCase() + anime.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2');

  
        animeCard.appendChild(imgElement);
        animeCard.appendChild(animeTitle);

        animeList.appendChild(animeCard);
    });
} else {

    location.href = '/pages/login.html';
}
