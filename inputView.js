import { createElement } from "./module";

export class InputView extends HTMLElement {
  constructor() {
    super();
    this.setInput();
    this.setBtn();

    this.append(this.input, this.btn);
  }
  
  setAction(callback){
    this.action = callback
  }
  
  setInput() {
    this.input = createElement("input");
    this.placeholder = "I'm going to...";
    const view = this
    this.input.addEventListener("keypress", (event) => {
      if (event.target.value && event.key === "Enter"){
        view.action(event.target.value)
        event.target.value = ""
      };
    });
  }
  

  setBtn() {
    const view = this
    this.btn = createElement("button");
    this.btn.innerText = "Add";
    this.btn.addEventListener("click", (event) => {
      if (view.input.value) {
        view.action(callback(view.input.value));
        view.input.value = ""
      }
    });
  }
}

window.customElements.define("input-view",InputView)