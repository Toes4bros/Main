const imageContainer = document.getElementById("image-container");
const image = document.getElementById("image");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

let currentImageIndex = 0;
const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg"
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
