// ! Переменные списков и кнопок переключения слайдера 
const cardsList = document.querySelectorAll('.card')
const slideLeft = document.querySelector('.slider__slide-left')
const slideRight = document.querySelector('.slider__slide-right')

// ! Переменные точек слайдера
const dotTodo = document.querySelector('.slider__dots--todo')
const dotInProgress = document.querySelector('.slider__dots--in-progress')
const dotDone = document.querySelector('.slider__dots--done')

// Действия кнопок слайдера =================================================================================
export function slider() {
  let translate = 0
  const step = 100

  setTimeout(() => {
    slideLeft.style.opacity = "0"
    slideRight.style.opacity = "0"
  }, 3000)

  slideLeft.addEventListener('click', () => {
    translate += step
    switchDots(translate)
    if (translate > 0) translate = -200
    cardsList.forEach(card => card.style.transform = `translateX(${translate}vw)`)
  })
  
  slideRight.addEventListener('click', () => {
    translate -= step
    switchDots(translate)
    if (translate < -200) translate = 0
    cardsList.forEach(card => card.style.transform = `translateX(${translate}vw)`)
  })
}

// Свайп между карточками ==================================================================================
const main = document.querySelector('main')
const board = document.querySelector('.board')

let dotTouchStart = null
let translate = 0
const step = 100

// события начала и конца касания
main.addEventListener('touchstart', handleTouchStart );
main.addEventListener('touchend', handleTouchEnd );

function handleTouchStart(evt) {
    dotTouchStart = +evt.touches[0].clientX.toFixed();
}

function handleTouchEnd(evt) {
  let dotTouchEnd = +evt.changedTouches[0].clientX.toFixed()
  let xDiff = Math.abs(dotTouchStart - dotTouchEnd)
  
  if ( xDiff > board.clientWidth * 0.10 ) {
    if (dotTouchEnd > dotTouchStart) {
      translate += step
      switchDots(translate)
      if (translate > 0) translate = -200
      cardsList.forEach(card => card.style.transform = `translateX(${translate}vw)`)
    } else {
      translate -= step
      switchDots(translate)
      if (translate < -200) translate = 0
      cardsList.forEach(card => card.style.transform = `translateX(${translate}vw)`)  
    }

    dotTouchStart = null;
  }
}

// Функция изменения цвета точек слайдера ==================================================================
function switchDots(translate) {
  switch (translate) {
    case 0:
    case -300: 
      dotTodo.style.background = "#DDDDDD"
      dotInProgress.style.background = "#808080"
      dotDone.style.background = " #808080"
      break;
    case -100: 
      dotTodo.style.background = "#808080"
      dotInProgress.style.background = "#DDDDDD"
      dotDone.style.background = " #808080"
      break;
    case -200:
    case 100:
      dotTodo.style.background = "#808080"
      dotInProgress.style.background = "#808080"
      dotDone.style.background = "#DDDDDD"
      break;
  }
}