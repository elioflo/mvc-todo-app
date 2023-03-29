import { createElement } from "./module";
import { TaskView } from "./TaskView";
import { TodoList } from "./todolist";
import { InputView } from "./inputView";

export class TodoListView extends HTMLElement {
  constructor(todoList) {
    super();
    this.todoList = todoList;
    this.setTaskInput();
    this.setList();

    this.append(this.taskInput, this.list);
  }

  setTaskInput() {
    const view = this;
    this.taskInput = new InputView();
    this.taskInput.setAction(text => view.add(text));
  }

  setList() {
    this.list = createElement("div");
    this.list.classList.add('tasks')
  }

  add(text) {
    const task = this.todoList.addTask(text);
    this.list.prepend(new TaskView(task));
  }
}

window.customElements.define("todo-list", TodoListView);

document.querySelector("#app").append(new TodoListView(new TodoList()));
