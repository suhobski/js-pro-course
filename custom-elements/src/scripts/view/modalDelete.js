import { taskCounter } from './card.js'
import { deleteTaskFromLocalStorage } from '../controller/localStorage.js'

// показать модальное окно предупреждения удаления ==========================================================
export function displayModalDelete(event) {
  const modalDelete = document.querySelector('.modal-delete-task')
  const buttonOk = document.querySelector('.modal-delete-task__button--ok')

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
  const modalDelete = document.querySelector('.modal-delete-task')
  const buttonCansel = document.querySelector('.modal-delete-task__button--cancel')

  modalDelete.addEventListener('click', event => {
    if (event.target === modalDelete || event.target === buttonCansel) {
      modalDelete.style.visibility = 'hidden'
      modalDelete.style.opacity = '0'
    }
  })
}