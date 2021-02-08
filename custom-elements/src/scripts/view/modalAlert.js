// открыть модальное окно ===================================================================================
export function openModalAlert() {
  const modalAlert = document.querySelector('.modal-alert')

  modalAlert.style.visibility = 'visible'
  modalAlert.style.opacity = '1'
}

// закрыть модальное окно ===================================================================================
export function closeModalAlert() {
  const modalAlert = document.querySelector('.modal-alert')
  const buttonModalAlert = document.querySelector('.modal-alert__button')

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