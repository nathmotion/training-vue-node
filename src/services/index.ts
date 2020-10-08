import TaskService from './task.service'

const taskApiHost = 'http://localhost:3001/tasks'
const taskService = new TaskService({ taskApiHost })

// eslint-disable-next-line import/prefer-default-export
export { taskService }
