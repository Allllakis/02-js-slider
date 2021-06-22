const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");

const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const countSlides = mainSlide.querySelectorAll("div").length;
const container = document.querySelector('.container')

let activeSlideIndex = 0
sidebar.style.top = `-${(countSlides - 1) * 100}vh `;

upBtn.addEventListener('click', () => {
  changesSlide('up');
});

downBtn.addEventListener('click', () => {
  changesSlide('down');
});

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowUp') {
    changesSlide('up')
  } else if (event.key === 'ArrowDown') {
    changesSlide('down')
  }
})
function changesSlide(direction) {
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex === countSlides)
        activeSlideIndex = 0
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0)
        activeSlideIndex = countSlides - 1
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}


