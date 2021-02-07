import { saveTaskInLocalStorage, deleteTaskFromLocalStorage } from './localStorage.js'
import { taskCounter } from '../view/card.js'
import { hideComment } from '../view/commentView.js'
import { openModalAlert } from '../view/modalAlert.js'

// ! Списки задач ===========================================================================================
const cardListTodo = document.querySelector('.card__list--todo')
const cardListInProgress = document.querySelector('.card__list--in-progress')
const cardListDone = document.querySelector('.card__list--done')

// Перенос задачи из одного списка в другой =================================================================
export function moveTask() {
  // из "To do" в "In progress"
  moveFromTodoToInProgress()
  
  // из "In progress" в "Done" ==============================================================================
  cardListInProgress.addEventListener('click', event => {
    if (event.target.classList.contains('task__button--move')) {
      // переносим задачу в список "Done"
      const taskHTML = event.target.closest('.task')
      cardListDone.appendChild(taskHTML )
      
      // прячем длинный комментарий
      hideComment(taskHTML)      

      // пересчитываем количество задач в каждом списке
      taskCounter()

      // переносим объект задачи в массив "inProgress" в localStorage
      const taskObject = JSON.parse(localStorage.getItem('inProgress')).find(task => task.id == taskHTML.id)
      deleteTaskFromLocalStorage('inProgress', taskObject.id)
      saveTaskInLocalStorage('done', taskObject)
    }

  })

  // из "Done" обратно в "To do" ============================================================================
  cardListDone.addEventListener('click', event => {
    if (event.target.classList.contains('task__button--move')) {
      // переносим задачу в список "Done"
      const taskHTML = event.target.closest('.task')
      cardListTodo.appendChild(taskHTML )

      // прячем длинный комментарий
      hideComment(taskHTML)

      // пересчитываем количество задач в каждом списке
      taskCounter()

      // переносим объект задачи в массив "inProgress" в localStorage
      const taskObject = JSON.parse(localStorage.getItem('done')).find(task => task.id == taskHTML.id)
      deleteTaskFromLocalStorage('done', taskObject.id)
      saveTaskInLocalStorage('todo', taskObject)
    }
  })
}

function moveFromTodoToInProgress() {
  cardListTodo.addEventListener('click', event => {
    if (event.target.classList.contains('task__button--move')) {
      
      // проверяем количество задач в списке "In progress"
      if (localStorage.getItem('inProgress') && (JSON.parse(localStorage.getItem('inProgress'))).length == 5) {
        openModalAlert()
      } else {
        // переносим задачу в список "In progress"
        const taskHTML = event.target.closest('.task')
        cardListInProgress.appendChild(taskHTML)
        
        // прячем длинный комментарий
        hideComment(taskHTML)

        // пересчитываем количество задач в каждом списке
        taskCounter()

        // переносим объект задачи в массив "inProgress" в localStorage
        const taskObject = JSON.parse(localStorage.getItem('todo')).find(task => task.id == taskHTML.id)
        deleteTaskFromLocalStorage('todo', taskObject.id)
        saveTaskInLocalStorage('inProgress', taskObject)
      } 
    }
  })
}