import { deleteTaskFromLocalStorage } from '../controller/localStorage.js'
import { taskCounter } from './card.js'
import { displayModalDelete } from './modalDelete.js'

const cardListTodo = document.querySelector('.card__list--todo')
const cardListInProgress = document.querySelector('.card__list--in-progress')
const cardListDone = document.querySelector('.card__list--done')


// добавить задачу  =======================================================================================
export function displayTask(where, task) {
  const {id, title, userName, date, comment} = task
  const taskTemplate = document.querySelector('.taskTemplate').content.children[0] // шаблон задачи
  const commentTemplate = document.querySelector('.commentTemplate').content.children[0] // шаблон комментария

  // Создаем новую задачу
  const taskNode = document.importNode(taskTemplate, true)
  
  taskNode.id = id
  taskNode.querySelector('.task__owner').innerText = userName
  taskNode.querySelector('.task__title').innerText = title
  taskNode.querySelector('.task__date').innerText = date


  if (comment) {
    let commentNode = document.importNode(commentTemplate, true)
    commentNode.innerText = comment
    taskNode.querySelector('.task__title').after(commentNode)
  }


  // Добавляем задачу в карточку
  where.before(taskNode)

  // пересчитываем количество задач в каждом списке
  taskCounter()
}


// удалить задачу =======================================================================================
export function deleteTask() {

  // из списка "To do"
  cardListTodo.addEventListener('click', event => {
  if (event.target.classList.contains('task__button--delete')) {
    const task = event.target.closest('.task')
    deleteTaskFromLocalStorage('todo', task.id)
    task.outerHTML = ''

    // пересчитываем количество задач в каждом списке
    taskCounter()
    }
  })

  // из списка "In progress"
  cardListInProgress.addEventListener('click', event => {
  if (event.target.classList.contains('task__button--delete')) {
    displayModalDelete(event)
    }
  })

  // из списка "Done"
  cardListDone.addEventListener('click', event => {
  if (event.target.classList.contains('task__button--delete')) {
    const task = event.target.closest('.task')
    deleteTaskFromLocalStorage('done', task.id)
    task.outerHTML = ''

    // пересчитываем количество задач в каждом списке
    taskCounter()
    }
  })
}