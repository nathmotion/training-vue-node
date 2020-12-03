import { stubInterface } from 'ts-sinon'

import { Task } from '@/models'
import TaskService from '@/services/task.service'
import { createTaskFeature, TaskFeature } from '../task-feature'

const taskMock: Task[] = [
  { id: 1, label: 'test 1' },
  { id: 2, label: 'test 2' },
  { id: 3, label: 'test 3' }
]

describe(' #TaskFeature', () => {
  let taskFeature: TaskFeature
  let taskService: TaskService
  beforeEach(() => {
    taskService = stubInterface<TaskService>()
    taskFeature = createTaskFeature(taskService)
  })
  describe('#reset Task', () => {
    describe('When  there is task', () => {
      it('should  reset the task', () => {
        // Given
        taskFeature.task.label = 'test'
        taskFeature.task.id = 10
        // When
        taskFeature.resetTask()
        // Then
        expect(taskFeature.task.label).toStrictEqual('')
      })
    })
  })
  describe('# Get  All Tasks ', () => {
    it('should call taskService', () => {
      // Given
      taskFeature.tasks.value = []
      // When
      taskFeature.getTaskList()
      // Then
      expect(taskService.getAll()).toBeCalled()
    })
  })
})
