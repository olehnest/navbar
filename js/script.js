//API REQUEST
    const requestUrl =
      'https://api.unsplash.com/search/photos?query=ukraine&client_id=Jwkh__XhTSoylDtdpFsaMFbGzWUaPpBM2nijNaQuDUA';
    const getImagesButton = document.querySelector('.getImagesButton');
    const imageToDisplay = document.querySelector('.imageToDisplay');

    getImagesButton.addEventListener('click', async () => {
      let randomImage = await getNewImage();
      imageToDisplay.src = randomImage;
    });

    async function getNewImage() {
      let randomNumber = Math.floor(Math.random() * 10);
      return fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => {
          let allImages = data.results[randomNumber];
          return allImages.urls.regular;
        });
    }

 //BURGER MENU
  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    
        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.5}s`;
            }
        });
        burger.classlist.toggle('toggle');
    });
}
navSlide();
