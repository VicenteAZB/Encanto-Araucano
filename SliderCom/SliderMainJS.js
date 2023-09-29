//Image Slider Container
const imageSlider = document.querySelector(".image-slider");

//sliderImages
const sliderImages = document.querySelectorAll(".slide");

//SLider controls 
const next = document.querySelector("#nextControl");
const prev = document.querySelector("#prevControl");

// Slider Indicators
const sliderIndicators = document.querySelectorAll(".indicator");


let currSlide = 0

//make first indicator active
sliderIndicators[currSlide].classList.add("active-indicator");


//manuel slide controllers
next.addEventListener("click",()=>{
  setIndicatorInActive();
  if(currSlide > sliderImages.length-2){
    currSlide = 0;
  }else{
    currSlide++;
  }
  
   imageSlider.style.transition = "all 1s ease";
  imageSlider.style.transform = "translateX("+ (-100*currSlide) +"%)";
  setIndicatorActive();
});

prev.addEventListener("click",()=>{
  setIndicatorInActive();
  if(currSlide < 1){
    currSlide = 3;
  }else{
    currSlide--;
  }
  
  imageSlider.style.transition = "all 1s ease";
  imageSlider.style.transform = "translateX("+ (-100*currSlide) +"%)";
  setIndicatorActive();
});




//automatic slider controls
setInterval(()=>{
  //changing Slide after 5 sec
setIndicatorInActive();   
  if(currSlide > sliderImages.length-2){
    currSlide = 0;
  }else{
    currSlide++;
  }
  imageSlider.style.transition = "all 1s ease";
  imageSlider.style.transform = "translateX("+ (-100*currSlide) +"%)";
  setIndicatorActive();
},5000);


//functions to make indicator active and inactive
const setIndicatorActive = () =>{
sliderIndicators[currSlide].classList.add("active-indicator");
}
const setIndicatorInActive = () =>{   sliderIndicators[currSlide].classList.remove("active-indicator");
}