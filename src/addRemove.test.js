jest.mock('./addRemove');

const {
  add, remove, update, filter,
} = require('./addRemove.js');

describe('add items to Todo', () => {
  it('should add item', () => {
    expect(add('task one')).toEqual([
      {
        description: 'task one',
        completed: false,
        index: 1,
      },
    ]);
    expect(add('task two')).toEqual([
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
    ]);
    expect(add('task three')).toEqual([
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
    ]);
  });

  it('should delete item', () => {
    expect(remove(0)).toEqual([
      {
        description: 'task two',
        completed: false,
        index: 1,
      },
      {
        description: 'task three',
        completed: false,
        index: 2,
      },
    ]);
  });
});

describe('Function that edit task description', () => {
  it('should update the task description', () => {
    expect(update(0, 'description', 'todo two')).toEqual([
      {
        description: 'todo two',
        completed: false,
        index: 1,
      },
      {
        description: 'task three',
        completed: false,
        index: 2,
      },
    ]);
  });
});

describe('Clear all completed tasks', () => {
  it('should delete completed tasks', () => {
    expect(filter([
      {
        description: 'task one',
        completed: false,
        index: 1,
      },
      {
        description: 'task two',
        completed: true,
        index: 2,
      },
      {
        description: 'task three',
        completed: false,
        index: 3,
      },
      {
        description: 'task four',
        completed: true,
        index: 4,
      },
    ])).toEqual([
      {
        description: 'task one',
        completed: false,
        index: 1,
      },
      {
        description: 'task three',
        completed: false,
        index: 2,
      },
    ]);
  });
});