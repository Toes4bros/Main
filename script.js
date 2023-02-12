const imageContainer = document.getElementById("image-container");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const image = document.getElementById("image");

let currentImageIndex = 0;
const images = [
  "https://cdn.pixabay.com/photo/2017/10/02/07/12/nude-2808070__340.jpg",
  "https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782__340.jpg",
  "https://cdn.pixabay.com/photo/2017/07/28/16/22/erotic-2549106__340.jpg",
  "https://cdn.pixabay.com/photo/2016/10/05/14/40/legs-1716821__340.jpg",
  "https://cdn.pixabay.com/photo/2017/07/28/12/56/legs-2548600__340.jpg",
  "https://cdn.pixabay.com/photo/2017/07/31/09/48/woman-2557063__340.jpg",
  "https://cdn.pixabay.com/photo/2020/03/05/18/42/feet-4905180__340.jpg",
  "https://cdn.pixabay.com/photo/2022/11/03/07/09/barefeet-7566810__340.jpg"
  
];

previousButton.addEventListener("click", function () {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  image.src = images[currentImageIndex];
});

nextButton.addEventListener("click", function () {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  image.src = images[currentImageIndex];
});
