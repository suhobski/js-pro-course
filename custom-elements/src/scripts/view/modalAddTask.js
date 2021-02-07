import { getUsersData } from '../model/serverData.js'

// Переменные
let modalAddTask = document.querySelector('.modal-add-task')
let buttonAddTask = document.querySelector('.card__button--add-task')
let buttonOk = document.querySelector('.modal-add-task__button--ok')
let buttonCancel = document.querySelector('.modal-add-task__button--cancel')

// открыть модальное окно при нажатии кнопки "Add task"
export function displayModalAddTask() {
  buttonAddTask.addEventListener('click', () => {
    modalAddTask.style.visibility = 'visible'
    modalAddTask.style.opacity = '1'
  })
}

// закрыть модальное окно
export function closeModalAddTaskListeners() {

  // при нажатии кнопки "Cancel" или мимо модального окна
  modalAddTask.addEventListener('click', event => {
    if (event.target == buttonCancel || event.target == modalAddTask) {
      closeModalAddTask()
    }
  })

  // при нажатии Escape
  addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeModalAddTask()
    }
  })
}

// добавление имен в выпадающий список
export function createListOfUsers() {
  let selectUser = document.querySelector('.modal-add-task__field--user-list')

  getUsersData().then(list => list.forEach(user => {
    selectUser.insertAdjacentHTML('beforeend', 
      `<option class="modal-add-task__field--user">${user.name}</option>`)
  }))
}

// закрыть модальное окно "Add task"
export function closeModalAddTask() {
  modalAddTask.style.visibility = 'hidden'
  modalAddTask.style.opacity = '0'
}

