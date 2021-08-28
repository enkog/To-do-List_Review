export default class TaskUtils {
  constructor(actions) {
    this.actions = actions;
  }

  addTask(task) {
    const tasks = this.actions.getItems();
    tasks.push(task);
    this.actions.setItem(tasks);
  }

  editTaskDescription(desc, index) {
    const tasks = this.actions.getItems();
    const currTask = tasks[index];
    currTask.description = desc;
    this.actions.updateAllItems(tasks);
  }

  deleteTask(index) {
    const tasks = this.actions.getItems();
    const filteredTasks = tasks.filter((task, i) => i !== index);
    const indexedTasks = this.reIndexTasks(filteredTasks);
    this.actions.setItem(indexedTasks);
  }

  // eslint-disable-next-line class-methods-use-this
  reIndexTasks(tasks) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].index = i + 1;
    }
    return tasks;
  }

  clearCompleted() {
    const localTasks = this.actions.getItems();
    const tasks = localTasks.filter((task) => task.completed === false);
    const indexedTasks = this.reIndexTasks(tasks);
    this.actions.updateAllItems(indexedTasks);
  }
}