export default class LocalStorageActions {
  constructor() {
    this.localStorage = localStorage;
  }

  add(arr) {
    this.localStorage.setItem('Todos', JSON.stringify(arr));
  }

  update(item) {
    const todos = this.get();
    const index = todos.findIndex((todo) => todo.description === item.description);
    todos.splice(index, 1, item);
    this.add(todos);
  }

  get() {
    let todos = JSON.parse(this.localStorage.getItem('Todos'));
    if (todos === null) {
      todos = [];
    }
    return todos;
  }
}