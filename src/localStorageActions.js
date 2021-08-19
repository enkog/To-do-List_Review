export default class LocalStorageActions {
  constructor() {
    this.localStorage = localStorage;
  }

  getItems() {
    const todos = JSON.parse(this.localStorage.getItem('Todos'));
    return todos === null ? [] : todos;
  }

  setItem(arr) {
    this.localStorage.setItem('Todos', JSON.stringify(arr));
  }

  updateAllTasks(arr) {
    this.localStorage.removeItem('Todos');
    this.setItem(arr);
  }

  updateOneTask(item) {
    const todos = this.getItems();
    const index = todos.findIndex((todo) => todo.description === item.description);
    todos.splice(index, 1, item);
    this.setItem(todos);
  }
}