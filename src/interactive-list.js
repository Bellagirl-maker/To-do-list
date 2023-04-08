import todoList from './todoList.js';

export const setCompleted = (pos) => {
  todoList[pos].completed = !todoList[pos].completed;
  localStorage.setItem('todolist', JSON.stringify(todoList));
};

export const hey = (pos) => {
  todoList[pos].completed = !todoList[pos].completed;
};