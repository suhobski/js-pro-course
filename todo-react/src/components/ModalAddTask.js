import React, { useEffect, useState } from 'react';
import UserService from '../UserService';



const ModalAddTask = ({changeView, addTask}) => {

  const [users, setUsers] = useState([]);
  
  const createTask = () => {
    const modalTitle = document.querySelector('.modal-add-task__field--title')
    const modalUser = document.querySelector('.modal-add-task__field--user-list')
    const modalComment = document.querySelector('.modal-add-task__field--comment')
    const date = new Date()
    const taskDate = `${date.getDate()}.${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth()+ 1)}.${date.getUTCFullYear()}`
    
    const task = {
      title: modalTitle.value,
      username: modalUser.options[modalUser.selectedIndex].value,
      comment: modalComment.value,
      date: taskDate,
      id: `f${(~~(Math.random()*1e8)).toString(16)}`,
      status: 'todo',
    }

    console.log(task);
    addTask(task)
    changeView()
  }

  // Get list of users
  useEffect(() => {
    const fetchUsers = async () => {
        const users = await UserService.fetchUsers();
        setUsers(users);
    }
    fetchUsers();
  }, []);

  return (
    <div className="modal-add-task">
      <div className="modal-add-task__container">
        <h4 className="modal-add-task__title">Add task</h4>
        <form className="modal-add-task__body">
          <textarea className="modal-add-task__field modal-add-task__field--title" placeholder="Title" rows="1"></textarea> 
          <select className="modal-add-task__field modal-add-task__field--user-list">
            {
              users.map(user => <option className="modal-add-task__ field--user" key={`${user.name}-${user.email}`}>{user.name}</option>)
            }
          </select>
          <textarea className="modal-add-task__field modal-add-task__field--comment" placeholder="Add comment..." rows="3"></textarea>
        </form>
        <div className="modal-add-task__footer">
          <button 
            className="card__button modal-add-task__button modal-add-task__button--ok"
            onClick={createTask}
          >OK</button>
          <button 
            className="card__button modal-add-task__button modal-add-task__button--cancel"
            onClick={changeView}
          >Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default ModalAddTask;