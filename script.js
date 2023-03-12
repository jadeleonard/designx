let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
const slideInterval = 5000;
let intervalId;

// Set the active class on the first item
carouselItems[currentIndex].classList.add('active');

// Start the slide interval
intervalId = setInterval(() => {
  moveToNextSlide();
}, slideInterval);

function moveToNextSlide() {
  const currentItem = carouselItems[currentIndex];

  // Remove the active class from the current item
  currentItem.classList.remove('active');

  // Set the class of the next item based on its position
  const nextIndex = (currentIndex + 1) % totalItems;
  const nextItem = carouselItems[nextIndex];

  if (nextIndex < currentIndex) {
    nextItem.classList.add('prev');
    currentItem.classList.add('next');
  } else {
    nextItem.classList.add('next');
    currentItem.classList.add('prev');
  }

  // Set the active class on the next item
  setTimeout(() => {
    currentItem.classList.remove('next', 'prev');
    nextItem.classList.add('active');
    currentIndex = nextIndex;
  }, 500);
}
