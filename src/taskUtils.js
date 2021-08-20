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

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < filteredTasks.length; i++) {
      filteredTasks[i].index = i + 1;
    }
    this.actions.setItem(filteredTasks);
  }

  clearCompleted() {
    const localTasks = this.actions.getItems();
    const tasks = localTasks.filter((task) => task.completed === false);
    this.actions.updateAllItems(tasks);
  }
}