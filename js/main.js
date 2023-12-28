let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); 
}

let remainingTime=70000;
function setTime(){
  if(remainingTime ==0) return;
  let h= Math.floor(remainingTime/3600);
  let m= Math.floor((remainingTime%3600)/60);
  let s= (remainingTime%3600)%60;
  document.querySelector('#hours').innerHTML =h;
  document.querySelector('#minutes').innerHTML =m;
  document.querySelector('#secends').innerHTML =s;
}
setInterval(()=>{
  remainingTime -=1;
  setTime()
}, 1000)