import { taskCounter } from './card.js'
import { deleteTaskFromLocalStorage } from '../controller/localStorage.js'

// ! Переменные модального окна удаления ====================================================================
const modalDelete = document.querySelector('.modal-delete-task')
const buttonOk = document.querySelector('.modal-delete-task__button--ok')
const buttonCansel = document.querySelector('.modal-delete-task__button--cancel')

// показать модальное окно предупреждения удаления ==========================================================
export function displayModalDelete(event) {
  modalDelete.style.visibility = 'visible'
  modalDelete.style.opacity = '1'

  const task = event.target.closest('.task')
  buttonOk.addEventListener('click', () => {
    deleteTaskFromLocalStorage('inProgress', task.id)
    task.outerHTML = ''
    taskCounter()
    modalDelete.style.visibility = 'hidden'
    modalDelete.style.opacity = '0'
  })

  closeModalDelete()
}

// закрыть модальное окно ===================================================================================
function closeModalDelete() {
  modalDelete.addEventListener('click', event => {
    if (event.target === modalDelete || event.target === buttonCansel) {
      modalDelete.style.visibility = 'hidden'
      modalDelete.style.opacity = '0'
    }
  })
}