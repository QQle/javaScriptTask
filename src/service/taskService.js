import { tasks } from "../mock/task.js";
import { Constanats } from "../constant.js";
import { generateId } from "./generateID.js";
export class TasksService {
  #boardTasks = tasks;

  getBoardTasks() {
    return this.#boardTasks;
  }

  getTasksByStatus(status) {
    return this.#boardTasks.filter((task) => task.status === status);
  }
  create(task) {
    task.id = generateId();
    task.status = Constanats.Status.BACKLOG;
    this.#boardTasks.push(task);
  }
}