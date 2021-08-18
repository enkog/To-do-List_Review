import './style.css';
import taskComplete from './completed.js';
import LocalStorageActions from './localStorageActions.js';
import Task from './task.js';
import TaskUtils from './taskUtils.js';

const actions = new LocalStorageActions();
const taskUtils = new TaskUtils(actions);
const localTodos = actions.get();

const displayTodo = (arr, actions) => {
  const todoListContainer = document.querySelector('.todo-list');
  const ul = document.createElement('ul');
  todoListContainer.appendChild(ul);

  arr.forEach((e) => {
    const li = document.createElement('li');
    li.className = 'list-item p-3';

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = e.completed;

    const label = document.createElement('label');
    label.textContent = e.description;

    const listMenuIcon = document.createElement('i');
    listMenuIcon.className = 'fas fa-ellipsis-v';

    const tasks = { li, arr, actions };
    checkBox.addEventListener('change', taskComplete.bind(null, tasks));

    li.appendChild(checkBox);
    li.appendChild(label);
    li.appendChild(listMenuIcon);
    ul.appendChild(li);
  });
};

displayTodo(localTodos, actions);