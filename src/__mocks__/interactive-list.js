const todolist = [
    {
      description: 'task one',
      completed: false,
      index: 1,
    },
    {
      description: 'task two',
      completed: false,
      index: 2,
    },
    {
      description: 'task three',
      completed: false,
      index: 3,
    },
  ];

const setCompleted = (pos) => {
    todolist[pos].completed = !todolist[pos].completed;
    return todolist
  };

exports.setCompleted = setCompleted