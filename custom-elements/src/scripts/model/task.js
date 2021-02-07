export class Task {
  
  constructor(title, userName, date, comment) {
    this.id = `f${(~~(Math.random()*1e8)).toString(16)}`
    this.title = title
    this.userName = userName
    this.date = date
    this.comment = comment
  }

}