const images = document.querySelectorAll('.rubric');
  let currentIndex = 0;

  function rotateImages() {
    images[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = 1;
  }

  const rotationInterval = setInterval(rotateImages, 1000);
