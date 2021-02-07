// получание данных пользователей с сервера
export const getUsersData = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
}