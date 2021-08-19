import './style.css';
import taskComplete from './completed.js';
import LocalStorageActions from './localStorageActions.js';
import Task from './task.js';
import TaskUtils from './taskUtils.js';

const actions = new LocalStorageActions();
const taskUtils = new TaskUtils(actions);
const localTodos = actions.getItems();
const addBtn = document.querySelector('.fa-level-down-alt');
const addTodoInputField = document.querySelector('.add-todo-input');
const completedTask = document.querySelector('.todo-footer');

const editTodo = (items) => {
  const {
    li, editIcon, deleteIcon, label,
  } = items;

  editIcon.classList.add('hidden');
  deleteIcon.classList.remove('hidden');

  const currDesc = li.textContent;

  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.className = 'edit-todo-input';
  editInput.value = currDesc;

  editInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const idx = localTodos.findIndex((todo) => todo.description === currDesc);
      taskUtils.editTaskDescription(editInput.value, idx);
      window.location.reload();
    }
  });

  li.removeChild(label);
  li.appendChild(editInput);
};

const deleteTodo = (li) => {
  const input = li.querySelector('.edit-todo-input');
  const description = input.value;
  const index = localTodos.findIndex((todo) => todo.description === description);
  taskUtils.deleteTask(index);
  window.location.reload();
};

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

    const editIcon = document.createElement('i');
    editIcon.className = 'fas fa-ellipsis-v';

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'far fa-trash-alt hidden';

    const tickIcon = document.createElement('i');
    tickIcon.className = 'fas fa-check hidden';

    const tasks = { li, arr, actions };
    tickIcon.addEventListener('click', () => {
      taskComplete(tasks);
      tickIcon.classList.add('hidden');
      checkBox.classList.remove('hidden');
      checkBox.checked = e.completed;
      label.style.textDecoration = 'none';
    });

    checkBox.addEventListener('click', () => {
      taskComplete(tasks);
      checkBox.classList.add('hidden');
      tickIcon.classList.remove('hidden');
      label.style.textDecoration = 'line-through';
    });

    editIcon.addEventListener('click', editTodo.bind(null, {
      li, editIcon, deleteIcon, label,
    }));

    deleteIcon.addEventListener('click', deleteTodo.bind(null, li));

    li.appendChild(checkBox);
    li.appendChild(tickIcon);
    li.appendChild(label);
    li.appendChild(editIcon);
    li.appendChild(deleteIcon);
    ul.appendChild(li);
  });
};

displayTodo(localTodos, actions);

const addTodo = () => {
  const description = addTodoInputField.value;
  const index = localTodos.length + 1;
  const task = new Task(description, index);
  if (description.length > 0) {
    taskUtils.addTask(task, actions);
    window.location.reload();
  }
};

const addOnEnter = (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    addBtn.click();
  }
};

addBtn.addEventListener('click', addTodo);
addTodoInputField.addEventListener('keyup', addOnEnter);

completedTask.addEventListener('click', () => {
  taskUtils.clearCompleted();
  window.location.reload();
});
