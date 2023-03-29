import { Task } from "./task"

export class TodoList {
  constructor(){
    this.tasks = []
  }

  addTask(text){
    console.log("HOLA");
    const task = new Task(text)
    this.tasks.unshift(task)
    return task
  }
}
