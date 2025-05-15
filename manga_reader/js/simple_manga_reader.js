let currentIndex = 0;
const images = document.querySelectorAll('.slides img');
const totalImages = images.length;

function showImage(index) {
  images.forEach((img, i) => {
    img.style.opacity = i === index ? 1 : 0;
  });
  currentIndex = index;
}

document.querySelector('.mangaprev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
});

document.querySelector('.manganext').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
});

showImage(currentIndex);