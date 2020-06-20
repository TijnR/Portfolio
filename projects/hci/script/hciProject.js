
const carouselSlide = document.querySelector('.slide');
const carouselImages = document.querySelectorAll('.slide iframe');
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


//slider 2 ********************************************
const carouselSlideTwo = document.querySelector('.slide2');
const carouselImagesTwo = document.querySelectorAll('.slide2 iframe');
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


//slider 3 ********************************************
const carouselSlideThree = document.querySelector('.slide3');
const carouselImagesThree = document.querySelectorAll('.slide3 img');


// buttons
const prevBtnThree = document.querySelector('#prevBtn3');
const nextBtnThree = document.querySelector('#nextBtn3');

// Counter
let counterThree = 1;
const sizeThree = carouselImagesThree[0].clientWidth;



// setInterval(function(){
//   carouselSlide.style.transition = "transform 0.4s ease-in-out";
//   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
//   counter++;
//   console.log(counter);
// }, 3000);



carouselSlideThree.style.transform = 'translateX(' + (-size * counterThree) + 'px';

// Button Listeners
nextBtnThree.addEventListener('click', ()=>{
  if(counterThree >= carouselImagesThree.length -1) return;
  carouselSlideThree.style.transition = "transform 0.4s ease-in-out";
  counterThree++;
  carouselSlideThree.style.transform = 'translateX(' + (-size * counterThree) + 'px';
});


prevBtnThree.addEventListener('click', ()=>{
  if (counterThree <= 0) return;
  carouselSlideThree.style.transition = "transform 0.4s ease-in-out";
  counterThree--;
  carouselSlideThree.style.transform = 'translateX(' + (-size * counterThree) + 'px';
});

carouselSlideThree.addEventListener('transitionend', ()=>{

  if(carouselImagesThree[counterThree].id === 'lastCloneThree'){
    console.log("test");
    carouselSlideThree.style.transition = 'none';
    counterThree = carouselImagesThree.length -2;
    carouselSlideThree.style.transform = 'translateX(' + (-size * counterThree) + 'px';
  }

  if(carouselImagesThree[counterThree].id === 'firstCloneThree'){
    console.log("test");
    carouselSlideThree.style.transition = 'none';
    counterThree = carouselImagesThree.length -counterThree;
    carouselSlideThree.style.transform = 'translateX(' + (-size * counterThree) + 'px';
  }
});


//slider 4 ********************************************
const carouselSlideFour = document.querySelector('.slide4');
const carouselImagesFour = document.querySelectorAll('.slide4 iframe');


// buttons
const prevBtnFour = document.querySelector('#prevBtn4');
const nextBtnFour = document.querySelector('#nextBtn4');

// Counter
let counterFour = 1;
const sizeFour = carouselImagesFour[0].clientWidth;



// setInterval(function(){
//   carouselSlide.style.transition = "transform 0.4s ease-in-out";
//   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
//   counter++;
//   console.log(counter);
// }, 3000);



carouselSlideFour.style.transform = 'translateX(' + (-size * counterFour) + 'px';

// Button Listeners
nextBtnFour.addEventListener('click', ()=>{
  if(counterFour >= carouselImagesFour.length -1) return;
  carouselSlideFour.style.transition = "transform 0.4s ease-in-out";
  counterFour++;
  carouselSlideFour.style.transform = 'translateX(' + (-size * counterFour) + 'px';
});


prevBtnFour.addEventListener('click', ()=>{
  if (counterFour <= 0) return;
  carouselSlideFour.style.transition = "transform 0.4s ease-in-out";
  counterFour--;
  carouselSlideFour.style.transform = 'translateX(' + (-size * counterFour) + 'px';
});

carouselSlideFour.addEventListener('transitionend', ()=>{

  if(carouselImagesFour[counterFour].id === 'lastCloneFour'){
    console.log("test");
    carouselSlideFour.style.transition = 'none';
    counterFour = carouselImagesFour.length -2;
    carouselSlideFour.style.transform = 'translateX(' + (-size * counterFour) + 'px';
  }

  if(carouselImagesFour[counterFour].id === 'firstCloneFour'){
    console.log("test");
    carouselSlideFour.style.transition = 'none';
    counterFour = carouselImagesFour.length -counterFour;
    carouselSlideFour.style.transform = 'translateX(' + (-size * counterFour) + 'px';
  }
});

//slider 5 ********************************************
const carouselSlideFive = document.querySelector('.slide5');
const carouselImagesFive = document.querySelectorAll('.slide5 img');


// buttons
const prevBtnFive = document.querySelector('#prevBtn5');
const nextBtnFive = document.querySelector('#nextBtn5');

// Counter
let counterFive = 1;
const sizeFive = carouselImagesFive[0].clientWidth;



// setInterval(function(){
//   carouselSlide.style.transition = "transform 0.4s ease-in-out";
//   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
//   counter++;
//   console.log(counter);
// }, 3000);



carouselSlideFive.style.transform = 'translateX(' + (-size * counterFive) + 'px';

// Button Listeners
nextBtnFive.addEventListener('click', ()=>{
  if(counterFive >= carouselImagesFive.length -1) return;
  carouselSlideFive.style.transition = "transform 0.4s ease-in-out";
  counterFive++;
  carouselSlideFive.style.transform = 'translateX(' + (-size * counterFive) + 'px';
});


prevBtnFive.addEventListener('click', ()=>{
  if (counterFive <= 0) return;
  carouselSlideFive.style.transition = "transform 0.4s ease-in-out";
  counterFive--;
  carouselSlideFive.style.transform = 'translateX(' + (-size * counterFive) + 'px';
});

carouselSlideFive.addEventListener('transitionend', ()=>{

  if(carouselImagesFive[counterFive].id === 'lastCloneFive'){
    console.log("test");
    carouselSlideFive.style.transition = 'none';
    counterFive = carouselImagesFive.length -2;
    carouselSlideFive.style.transform = 'translateX(' + (-size * counterFive) + 'px';
  }

  if(carouselImagesFive[counterFive].id === 'firstCloneFive'){
    console.log("test");
    carouselSlideFive.style.transition = 'none';
    counterFive = carouselImagesFive.length -counterFive;
    carouselSlideFive.style.transform = 'translateX(' + (-size * counterFive) + 'px';
  }
});

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e =>{
  console.log(e);
  cursor.setAttribute("style", "top: "+ (e.pageY-10) + "px; left: "+ (e.pageX-10) + "px;");

});

document.addEventListener('click', ()=>{
  cursor.classList.add("expand");

  setTimeout(() =>{
    cursor.classList.remove("expand");
  }, 500);
});
