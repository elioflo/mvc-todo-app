import { Task } from "./model";
import { TaskView } from "./TaskView";


const task = new Task("task here!")
const viewTask = new TaskView(task)
const app = document.querySelector("#app")

app.append(viewTask)