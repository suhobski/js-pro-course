import React, { useState, useEffect } from 'react';
import ModalAddTask from './components/ModalAddTask';
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(window.localStorage.getItem('tasks')) || []);
  const [modalAddTaskView, setModalAddTaskView] = useState(false)

  const addTask = (task) => {
    const tasksList = Array.from(tasks)
    tasksList.push(task)
    setTasks(tasksList)
    window.localStorage.setItem('tasks', JSON.stringify(tasksList));
  }

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Simple kanban</h1>
      </header>
      <main>
        <button className="slider__slide-left"></button>
        <div className="board">
          <div className="card">
            <div className="card__header">
              <h2 className="card__title card__title--todo">To do</h2>
              <p className="card__title card__title--todo card__counter--todo">
              {
                tasks.filter(task => task.status === 'todo').length
              }
              </p>  
            </div>
            <ul className="card__list card__list--todo">
              {
                tasks.map((task) => {
                  return task.status === 'todo'
                    ? <Task task={task} key={task.id}/>
                    : null
                })
              }
            </ul>
            <div className="card__footer card__footer--todo">
              <button 
                className="card__button card__button--todo card__button--add-task"
                onClick={() => setModalAddTaskView(!modalAddTaskView)}
              >Add task</button>
              <button className="card__button card__button--todo card__button--todo--clear-all">Clear all</button>
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <h2 className="card__title card__title--in-progress">In progress</h2>
              <p className="card__title card__title--in-progress card__counter--in-ppogress" >
              {
                tasks.filter(task => task.status === 'inprogress').length
              }
              </p>
            </div>
            <ul className="card__list card__list--in-progress">
            </ul>
            <div className="card__footer">
              <button className="card__button card__button--in-progress card__button--in-progress--clear-all">Clear all</button>
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <h2 className="card__title card__title--done">Done</h2>
              <p className="card__title card__title--done card__counter--done">
              {
                tasks.filter(task => task.status === 'done').length
              }
              </p>
            </div>
            <ul className="card__list card__list--done">
            </ul>
            <div className="card__footer">
              <button className="card__button card__button--done card__button--done--clear-all">Clear all</button>
            </div>
          </div>
          <div className="right"></div>
        </div>
        <button className="slider__slide-right"></button>
      </main>
      <footer className="footer">
        <div className="slider__dots">
          <span className="slider__dots--todo"></span>
          <span className="slider__dots--in-progress"></span>
          <span className="slider__dots--done"></span>
        </div>
        <p className="footer__text">A. Suhobski, 2020</p>
      </footer>
      {
        modalAddTaskView && 
          <ModalAddTask 
            changeView={() => setModalAddTaskView(!modalAddTaskView)}
            addTask={addTask}
          />
      }
      
      {/* <div className="modal-alert">
        <div className="modal-alert__container">
            <h4 className="modal-alert__title">You must complete one of the tasks before adding a new one</h4>
            <div className="modal-alert__footer">
              <button className="card__button modal-alert__button">OK</button>
            </div>
        </div>
      </div>
      <div className="modal-delete-task">
        <div className="modal-delete-task__container">
            <h4 className="modal-delete-task__title">Delete task?</h4>
            <div className="modal-delete-task__footer">
              <button className="card__button modal-delete-task__button modal-delete-task__button--ok">OK</button>
              <button className="card__button modal-delete-task__button modal-delete-task__button--cancel">Cancel</button>
            </div>
        </div>
      </div>  */}
    </div>
  );
}

export default App;
