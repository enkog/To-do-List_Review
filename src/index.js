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

const addBtn = document.querySelector('.fa-level-down-alt');
const addTodoInputField = document.querySelector('.add-todo-input');

const addTodo = () => {
  const description = addTodoInputField.value;
  const index = localTodos.length + 1;
  const task = new Task(description, index);
  if (description.length > 0) {
    taskUtils.addTask(task, actions);
    window.location.reload();
  }
};

function addOnEnter(event) {
  console.log('click');
  if (event.keyCode === 13) {
    event.preventDefault();
    addBtn.click();
  }
}

addBtn.addEventListener('click', addTodo);
addTodoInputField.addEventListener('keyup', addOnEnter);