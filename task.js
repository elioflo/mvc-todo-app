export class Task {
  static count = 0

  constructor(text){
    this.text = text
    this.completed = false
    this.id = ++Task.count
  }

  complete(){
    this.completed = true
  }

  uncomplete(){
    this.completed = false
  }

  edit(text){
    this.text
  }
}