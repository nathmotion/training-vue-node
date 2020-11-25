import axios from 'axios'

import nock from 'nock'
import TaskService from '@/services/task.service'
import { Task } from '@/models'

axios.defaults.adapter = require('axios/lib/adapters/http')

let taskMock: Task[] = [
  { id: 1, label: 'test 1' },
  { id: 2, label: 'test 2' },
  { id: 3, label: 'test 3' }
]
describe('# Task Service', () => {
  let taskService: TaskService
  const taskApiHost = 'http://baseUrl'
  beforeEach(() => {
    taskService = new TaskService({ taskApiHost })
    taskMock = [
      { id: 1, label: 'test 1' },
      { id: 2, label: 'test 2' },
      { id: 3, label: 'test 3' }
    ]
  })
  it('should  exist', () => {
    expect(taskService).toBeDefined()
  })

  it('should  be instance  of TaskService', () => {
    expect(taskService).toBeInstanceOf(TaskService)
  })
  describe('#getAll', () => {
    it('should  return the tasks from call', async () => {
      // Given
      const getAllMock = nock(taskApiHost).get('/').reply(200, taskMock)
      // When
      const tasks = await taskService.getAll()
      // Then
      expect(getAllMock.isDone()).toBe(true)
      expect(tasks).toStrictEqual(taskMock)
    })
  })
  describe('#Add', () => {
    it('should return updated tasks with the new task from call', async () => {
      // Given
      const newTask: Task = { label: 'test4' }
      taskMock.push(newTask)
      const addMock = nock(taskApiHost).post('/', newTask).reply(200, taskMock)
      // When
      const tasks = await taskService.add(newTask)
      // Then
      expect(addMock.isDone()).toBe(true)
      expect(tasks).toStrictEqual(taskMock)
    })
  })
  describe('#Delete', () => {
    it('should return updated task without tasks deleted from call', async () => {
      // Given
      const idToDelete = 3
      taskMock = taskMock.filter(({ id }) => id !== idToDelete)
      const deleteMock = nock(taskApiHost).delete('/', { params: { idToDelete } }).reply(200, taskMock)
      // Then
      // Then
      expect(taskService).toBeInstanceOf(TaskService)
    })
  })
})
