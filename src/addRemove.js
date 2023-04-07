import todolist from './todoList.js';

export const add = (task) => {
  todolist.push({
    description: task.value,
    completed: false,
    index: todolist.length + 1,
  });

  localStorage.setItem('todolist', JSON.stringify(todolist));
};

export const update = (pos, key, value) => {
  todolist[pos][key] = value;
  localStorage.setItem('todolist', JSON.stringify(todolist));
};

export const remove = (position) => {
  todolist.splice(position, 1);

  // update indices
  for (let i = 0; i < todolist.length; i += 1) {
    todolist[i].index = i + 1;
  }
  localStorage.setItem('todolist', JSON.stringify(todolist));
};
