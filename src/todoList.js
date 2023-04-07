export default localStorage.getItem('todolist')
  ? JSON.parse(localStorage.getItem('todolist'))
  : [];
