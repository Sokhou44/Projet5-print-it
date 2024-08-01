const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot'); 
let currentIndex = 0;

// Affiche la première diapositive au chargement de la page
updateCarousel('démarrage');
updateDots(currentIndex); 

// Ecoute d'événement flèche gauche
arrowLeft.addEventListener('click', function () {
    currentIndex = (currentIndex - 1);
    updateCarousel('left');
    updateDots(currentIndex); 
});

// ecoute d'événement flèche droite
arrowRight.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) ;
    updateCarousel('right');
    updateDots(currentIndex); 
});

// Mis à jour de l'image et du texte
function updateCarousel(direction) {
    //correction pour la première et la dernière image
    if (currentIndex === -1 && direction === 'left') {
      currentIndex = slides.length - 1;
  } else if (currentIndex === slides.length && direction === 'right') {
      currentIndex = 0;
  }
  // Mettre à jour l'image
  bannerImg.src = `assets/images/slideshow/${slides[currentIndex].image}`;
  bannerImg.alt = `Slide ${currentIndex + 1}`;

  // Mettre à jour le texte
  const tagLine = slides[currentIndex].tagLine;
  document.querySelector('p').innerHTML = tagLine;

  console.log(`Clic sur la flèche ${direction}`);
}

// Mis a jour des dots
function updateDots(index) {
    for (let i = 0; i < dots.length; i++) {
        if (i === index) {
            dots[i].classList.add('dot_selected'); 
        } else {
            dots[i].classList.remove('dot_selected'); 
        }
    }
}










