
const carouselSlide = document.querySelector('.slide');
const carouselImages = document.querySelectorAll('.slide img');
console.log(carouselImages);

// buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = carouselImages[0].clientWidth;



// setInterval(function(){
//   carouselSlide.style.transition = "transform 0.4s ease-in-out";
//   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
//   counter++;
//   console.log(counter);
// }, 3000);



carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';

// Button Listeners
nextBtn.addEventListener('click', ()=>{
  if(counter >= carouselImages.length -1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
});


prevBtn.addEventListener('click', ()=>{
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
});

carouselSlide.addEventListener('transitionend', ()=>{
  if(carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length -2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
  }

  if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length -counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
  }
});



const carouselSlideTwo = document.querySelector('.slide2');
const carouselImagesTwo = document.querySelectorAll('.slide2 img');
console.log(carouselImagesTwo);

// buttons
const prevBtnTwo = document.querySelector('#prevButton2');
const nextBtnTwo = document.querySelector('#nextButton2');

// Counter
let counterTwo = 1;
const sizeTwo = carouselImagesTwo[0].clientWidth;



// setInterval(function(){
//   carouselSlide.style.transition = "transform 0.4s ease-in-out";
//   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
//   counter++;
//   console.log(counter);
// }, 3000);



carouselSlideTwo.style.transform = 'translateX(' + (-size * counterTwo) + 'px';

// Button Listeners
nextBtnTwo.addEventListener('click', ()=>{
  if(counterTwo >= carouselImagesTwo.length -1) return;
  carouselSlideTwo.style.transition = "transform 0.4s ease-in-out";
  counterTwo++;
  carouselSlideTwo.style.transform = 'translateX(' + (-size * counterTwo) + 'px';
});


prevBtnTwo.addEventListener('click', ()=>{
  if (counterTwo <= 0) return;
  carouselSlideTwo.style.transition = "transform 0.4s ease-in-out";
  counterTwo--;
  carouselSlideTwo.style.transform = 'translateX(' + (-size * counterTwo) + 'px';
});

carouselSlideTwo.addEventListener('transitionend', ()=>{

  if(carouselImagesTwo[counterTwo].id === 'lastCloneTwo'){
    console.log("test");
    carouselSlideTwo.style.transition = 'none';
    counterTwo = carouselImagesTwo.length -2;
    carouselSlideTwo.style.transform = 'translateX(' + (-size * counterTwo) + 'px';
  }

  if(carouselImagesTwo[counterTwo].id === 'firstCloneTwo'){
    console.log("test");
    carouselSlideTwo.style.transition = 'none';
    counterTwo = carouselImagesTwo.length -counterTwo;
    carouselSlideTwo.style.transform = 'translateX(' + (-size * counterTwo) + 'px';
  }
});
