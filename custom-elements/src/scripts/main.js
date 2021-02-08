import { view } from './view/view.js'
import { controller } from './controller/controller.js'
import '../scss/main.scss'

controller()
view()

// Shadow DOM START
const shadowHeader = document.querySelector('.header').attachShadow({mode: 'open'});
shadowHeader.innerHTML = `<style>
h1 {
  text-align: center;
  color: #DDDDDD;
}
</style>

<h1 class="header__title"><slot></slot></h1>
`
// Shadow DOM END

// Custom element START
class ModalAddTask extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="modal-add-task">
      <div class="modal-add-task__container">
          <h4 class="modal-add-task__title">Add task</h4>
          <form class="modal-add-task__body">
              <textarea class="modal-add-task__field modal-add-task__field--title" placeholder="Title" rows="1"></textarea> 
              <select class="modal-add-task__field modal-add-task__field--user-list">
                <option class="modal-add-task__field--user" value="" selected disabled>Chose user...</option>
              </select>
              <textarea class="modal-add-task__field modal-add-task__field--comment" placeholder="Add comment..." rows="3"></textarea>
          </form>
          <div class="modal-add-task__footer">
            <button class="card__button modal-add-task__button modal-add-task__button--ok">OK</button>
            <button class="card__button modal-add-task__button modal-add-task__button--cancel">Cancel</button>
          </div>
      </div>
    </div><!-- / modal-add-task -->
    `;
  }
}
    
customElements.define('modal-add-task', ModalAddTask);

// Custom element END
