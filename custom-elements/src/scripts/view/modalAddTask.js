import { getUsersData } from '../model/serverData.js'

// открыть модальное окно при нажатии кнопки "Add task"
export function displayModalAddTask() {
  const modalAddTask = document.querySelector('.modal-add-task')
  const buttonAddTask = document.querySelector('.card__button--add-task')

  buttonAddTask.addEventListener('click', () => {
    modalAddTask.style.visibility = 'visible'
    modalAddTask.style.opacity = '1'
  })
}

// закрыть модальное окно
export function closeModalAddTaskListeners() {
  const modalAddTask = document.querySelector('.modal-add-task')
  const buttonCancel = document.querySelector('.modal-add-task__button--cancel')

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
  const modalAddTask = document.querySelector('.modal-add-task')

  modalAddTask.style.visibility = 'hidden'
  modalAddTask.style.opacity = '0'
}

