import { displayTask } from './taskView.js'
import { hideAllComments } from './commentView.js'

// ! Списки задач ==========================================================================================
const cardListTodo = document.querySelector('.card__list--todo')
const cardListInProgress = document.querySelector('.card__list--in-progress')
const cardListDone = document.querySelector('.card__list--done')

// ! Счетчики задач ========================================================================================
const counterTodo = document.querySelector('.card__counter--todo')
const counterInProgress = document.querySelector('.card__counter--in-ppogress')
const counterDone = document.querySelector('.card__counter--done')

// ! Кнопки удалить задачу =================================================================================
const deleteTasksTodo = document.querySelector('.card__button--todo--clear-all')
const deleteTasksInProgress = document.querySelector('.card__button--in-progress--clear-all')
const deleteTasksDone = document.querySelector('.card__button--done--clear-all')


// загружаем из localStorage задачи после перезагрузки======================================================
export function loadTasks() {
  
  // в список "To do"
  const todoArray = JSON.parse(localStorage.getItem('todo'))
  if (todoArray) todoArray.forEach(task => displayTask(cardListTodo, task))

  // в список "In Progress"
  const inProgressArray = JSON.parse(localStorage.getItem('inProgress'))
  if (inProgressArray) inProgressArray.forEach(task => displayTask(cardListInProgress, task))
  
  // в список "Done"
  const doneArray = JSON.parse(localStorage.getItem('done'))
  if (doneArray) doneArray.forEach(task => displayTask(cardListDone, task))

  // сворачиваем длинные комментарии
  hideAllComments()    
}

// изменяем счетчик количества задач в каждом списке=======================================================
export function taskCounter() {
  counterTodo.innerText = cardListTodo.childElementCount
  counterInProgress.innerText = cardListInProgress.childElementCount
  counterDone.innerText = cardListDone.childElementCount
}

// удалить все задачи из списка (кнопка "Clear all")=======================================================
export function clearAllTasks() {

  // из списка "To do"
  deleteTasksTodo.addEventListener('click', () => {
    cardListTodo.innerHTML = ''
    localStorage.removeItem('todo')
    taskCounter()
  })

  // из списка "In Progress"
  deleteTasksInProgress.addEventListener('click', () => {
    cardListInProgress.innerHTML = ''
    localStorage.removeItem('inProgress')
    taskCounter()
  })

  // из списка "Done"
  deleteTasksDone.addEventListener('click', () => {
    cardListDone.innerHTML = ''
    localStorage.removeItem('done')
    taskCounter()
  })
}