import { addTask } from './addTask.js'
import { moveTask } from './moveTask.js'

export function controller() {
  addTask()
  moveTask()
}