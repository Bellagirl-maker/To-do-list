import './style.css';
import todoList from './todoList.js';
import {
  add, update, updateIndexes, remove,
} from './addRemove.js';
import { setCompleted } from './interactive-list.js';

const toDoBox = document.querySelector('.todo-box');
let tasks = todoList;

const renderTasks = () => {
  toDoBox.innerHTML = '';

  const headerLi = document.createElement('li');
  headerLi.classList.add('header-li');
  headerLi.innerHTML = 'Today\'s To Do <i class="fa-solid fa-rotate"></i>';

  const addToList = document.createElement('li');
  addToList.classList.add('add-to-list');

  const form = document.createElement('form');
  form.classList.add('add-list-form');

  const newItem = document.createElement('input');
  newItem.id = 'new-item';
  newItem.type = 'text';
  newItem.placeholder = 'Add to your list';
  newItem.setAttribute('required', '');

  const submitBtn = document.createElement('button');
  submitBtn.classList.add('submit-btn');
  submitBtn.type = 'submit';
  submitBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';

  toDoBox.appendChild(headerLi);
  toDoBox.appendChild(addToList);
  addToList.appendChild(form);
  form.appendChild(newItem);
  form.appendChild(submitBtn);

  // Add list item
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    add(newItem);
    newItem.value = '';
    renderTasks();
  });

  todoList.sort((a, b) => a.index - b.index);
  for (let i = 0; i < todoList.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    const listCheckAndName = document.createElement('div');
    listCheckAndName.classList.add('list-check-and-name');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // checkbox 'completed' functionalities
    if (todoList[i].completed === true) {
      checkbox.checked = true;
    }

    checkbox.addEventListener('change', () => {
      setCompleted(i);
    });

    const itemValInput = document.createElement('input');
    itemValInput.classList.add('list-item-value');
    itemValInput.value = todoList[i].description;

    const listElipsesBox = document.createElement('div');
    listElipsesBox.classList.add('list-ellipses-box');
    listElipsesBox.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';

    const listDelBox = document.createElement('div');
    listDelBox.classList.add('list-del-box', 'none');
    listDelBox.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

    // Change ellipses to deleteBtn when the input field is in focus
    itemValInput.addEventListener('click', () => {
      const els = document.querySelectorAll('.list-ellipses-box');
      const dels = document.querySelectorAll('.list-del-box');

      for (let j = 0; j < todoList.length; j += 1) {
        if (j === i) {
          dels[j].classList.remove('none');
          dels[j].classList.add('show');

          els[j].classList.add('none');
        } else {
          els[j].classList.remove('none');
          dels[j].classList.remove('show');
          dels[j].classList.add('none');
        }
      }
    });

    // Update list item
    itemValInput.addEventListener('keyup', (e) => {
      update(i, 'description', e.target.value);
    });

    // delete list item
    listDelBox.addEventListener('click', () => {
      remove(i);
      renderTasks();
    });

    listCheckAndName.appendChild(checkbox);
    listCheckAndName.appendChild(itemValInput);

    listItem.appendChild(listCheckAndName);
    listItem.appendChild(listElipsesBox);
    listItem.appendChild(listDelBox);

    toDoBox.appendChild(listItem);
  }
  // try
  const clearLi = document.createElement('li');
  clearLi.classList.add('clear-li');
  clearLi.innerHTML = 'Clear all completed';
  toDoBox.appendChild(clearLi);

  clearLi.addEventListener('click', () => {
    tasks = todoList.filter((item) => item.completed === false);
    todoList.splice(0, todoList.length, ...tasks);
    updateIndexes();
    localStorage.setItem('todolist', JSON.stringify(todoList));
    renderTasks();
  });
};
renderTasks();
