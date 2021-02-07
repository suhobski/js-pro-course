// ! Переменные модального окна предупреждения ==============================================================
const modalAlert = document.querySelector('.modal-alert')
const buttonModalAlert = document.querySelector('.modal-alert__button')

// открыть модальное окно ===================================================================================
export function openModalAlert() {
  modalAlert.style.visibility = 'visible'
  modalAlert.style.opacity = '1'
}

// закрыть модальное окно ===================================================================================
export function closeModalAlert() {
  modalAlert.addEventListener('click', (event) => {
    if (event.target === modalAlert || event.target === buttonModalAlert)
    modalAlert.style.visibility = 'hidden'
    modalAlert.style.opacity = '0'
  })

  // при нажатии Escape или Enter
  addEventListener('keydown', event => {
    const keyName = event.key 
    if (keyName === 'Escape' || keyName === 'Enter') {
      modalAlert.style.visibility = 'hidden'
      modalAlert.style.opacity = '0'
    }
  })

}