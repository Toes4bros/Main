const imageContainer = document.getElementById("image-container");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const image = document.getElementById("image");

let currentImageIndex = 0;
const images = [
  "https://cdn.pixabay.com/photo/2020/06/22/08/27/cat-5328304__340.jpg",
  "https://cdn.pixabay.com/photo/2016/05/02/12/58/tiger-1367197__340.jpg",
  "https://cdn.pixabay.com/photo/2016/05/06/12/23/cats-paw-1375792__340.jpg",
  "https://cdn.pixabay.com/photo/2016/11/14/20/52/cat-1824668__340.jpg",
  "https://cdn.pixabay.com/photo/2016/11/22/17/37/cat-1849854__340.jpg",
  "https://cdn.pixabay.com/photo/2018/04/07/09/13/chartreux-3298051__340.jpg",
  "https://cdn.pixabay.com/photo/2017/01/07/14/33/cat-1960537__340.jpg",
  "https://cdn.pixabay.com/photo/2016/09/25/14/41/cats-paws-1693839__340.jpg"
  
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
