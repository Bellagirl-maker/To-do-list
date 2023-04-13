const todolist = [];

const add = (task) => {
  todolist.push({
    description: task,
    completed: false,
    index: todolist.length + 1,
  });
  return todolist;
};

const updateIndexes = () => {
  for (let i = 0; i < todolist.length; i += 1) {
    todolist[i].index = i + 1;
  }
};

const remove = (position) => {
  todolist.splice(position, 1);
  updateIndexes();
  return todolist;
};

const update = (pos, key, value) => {
  todolist[pos][key] = value;
  return todolist;
};

exports.add = add;
exports.remove = remove;
exports.update = update;
