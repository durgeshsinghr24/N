// JavaScript code
const packagesSlider = document.querySelector(".packages-slider");
const packagesCards = document.querySelectorAll(".package-card");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const packagesDots = document.querySelectorAll(".dot");

let currentIndex = 0;
let cardWidth = packagesCards[0].clientWidth;

// Set the initial position of the slider
packagesSlider.style.transform = `translateX(${-cardWidth * currentIndex}px)`;

// Add click event listeners to the buttons and dots
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
packagesDots.forEach((dot) => dot.addEventListener("click", dotSlide));

// Function to move to the previous slide
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
}

// Function to move to the next slide
function nextSlide() {
  if (currentIndex < packagesCards.length / 4 - 1) {
    currentIndex++;
    updateSlider();
  }
}

// Function to move to the slide corresponding to the dot
function dotSlide(e) {
  currentIndex = e.target.dataset.index;
  updateSlider();
}

// Function to update the slider position and the active dot
function updateSlider() {
  packagesSlider.style.transform = `translateX(${-cardWidth * currentIndex}px)`;
  packagesDots.forEach((dot) => dot.classList.remove("active"));
  packagesDots[currentIndex].classList.add("active");
}
