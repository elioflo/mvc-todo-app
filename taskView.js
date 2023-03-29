import { createElement } from "./module";
import { Task } from "./task";

export class TaskView extends HTMLElement {
  constructor(task) {
    super();
    this.task = task;
    this.setCheckbox();
    this.setInput();
    this.setBtn();

    this.append(this.checkbox, this.input, this.btn);
  }

  setCheckbox() {
    const view = this;
    this.checkbox = createElement("input");
    this.checkbox.type = "checkbox";
    this.checkbox.checked = this.task.completed;
    this.checkbox.addEventListener("change", (event) => {
      view.task.completed = event.target.checked;
      if (view.task.completed) view.complete();
      else view.uncomplete();
    });
  }

  setInput() {
    this.input = createElement("input");
    this.input.value = this.task.text;
    this.input.disabled = true;
  }

  setBtn() {
    const view = this;
    this.btn = createElement("button");
    this.btn.innerText = "edit";
    this.btn.addEventListener("click", (event) => {
      if (view.task.completed) return;
      if (event.target.innerText === "save") {
        view.save();
        event.target.innerText = "edit";
      } else {
        view.editable();
        event.target.innerText = "save";
      }
    });
  }

  uncomplete() {
    this.task.uncomplete();
    this.input.style.textDecoration = "none";
    this.btn.style.display = "inline";
  }

  complete() {
    this.task.complete();
    this.input.style.textDecoration = "line-through";
    this.btn.style.display = "none";
  }

  editable() {
    this.input.disabled = false;
    this.checkbox.disabled = true;
  }

  save() {
    this.input.disabled = true;
    this.checkbox.disabled = false;
    this.task.edit(this.input.value);
  }
}

window.customElements.define("task-view", TaskView);
