import TaskService from './task.service'

const taskApiHost = 'http://localhost:3001/tasks'
const taskService = new TaskService({ taskApiHost })

export { taskService as default }
