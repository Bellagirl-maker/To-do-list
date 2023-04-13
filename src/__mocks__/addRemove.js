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

const filter = (arry) => {
  const newArry = arry.filter((item) => item.completed === false);
  for (let i = 0; i < newArry.length; i++) newArry[i].index = i + 1;
  return newArry;
};

exports.add = add;
exports.remove = remove;
exports.update = update;
exports.filter = filter;
