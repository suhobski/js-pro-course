import React from 'react';

const Task = ({task}) => {
  const {id, title, username, date, comment} = task
  
  return (
    <li className="task" id={id}>
      <div className="task__header">
        <span className="task__owner">{username}</span>
      </div>
      <h3 className="task__title">{title}</h3>
      {comment}
      <div className="task__footer">
        <span className="task__date">{date}</span>
        <button className="task__button task__button--delete"></button>
        <button className="task__button task__button--move"></button>
      </div>
    </li>
  )
}

export default Task;