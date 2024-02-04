document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.rubric');
    let currentIndex = 0;

    function rotateImages() {
      images[currentIndex].classList.remove('visible');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('visible');
    }

    const rotationInterval = setInterval(rotateImages, 5000);

    // Initialize the first image to be visible
    images[currentIndex].classList.add('visible');
  });
