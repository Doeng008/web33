const bannerSlide = document.querySelector('.banner-slide');
const bannerImages = document.querySelectorAll('.banner-slide img');

//Button
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');

//counter
let counter = 1;
const size = bannerImages[0].clientWidth;

bannerSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners
function PrevButton(){
  if (counter <=0) return;
  bannerSlide.style.transition = "transform 0.5s ease-in-out";
  counter--;
  bannerSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function NextButton(){
  if (counter >= bannerImages.length -1) return;
  bannerSlide.style.transition = "transform 0.5s ease-in-out";
  counter++;
  bannerSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function transition(){
  if (bannerImages[counter].id === 'lastClone') {
    bannerSlide.style.transition = "none";
    counter = bannerImages.length - 2;
    bannerSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (bannerImages[counter].id === 'firstClone') {
    bannerSlide.style.transition = "none";
    counter = bannerImages.length - counter;
    bannerSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
}

previous.addEventListener('click', PrevButton);
next.addEventListener('click', NextButton);

bannerSlide.addEventListener('transitionend', transition);