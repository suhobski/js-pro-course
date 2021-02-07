// сохранить задачу в localStorage===========================================================================
export function saveTaskInLocalStorage(where, task) {
  // проверяем наличие объекта в localStorage
  if (localStorage.getItem(where)) {
    const tasksArray = JSON.parse(localStorage.getItem(where))  // если есть, сохраняем себе
    tasksArray.push(task)                                      // добавялем новую задачу
    localStorage.setItem(where, JSON.stringify(tasksArray))   // сохраняем обратно
  } else {
    localStorage.setItem(where, JSON.stringify([task]))      // иначе просто сохраняем 
  }
}

// удалить задачу из localStorage============================================================================
export function deleteTaskFromLocalStorage(where, id) {
  let todoArray = JSON.parse(localStorage.getItem(where))
  todoArray = todoArray.filter(task => task.id != id)   
  localStorage.setItem(where, JSON.stringify(todoArray))
}