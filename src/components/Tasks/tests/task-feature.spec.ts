import { StubbedInstance, stubInterface } from 'ts-sinon'

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
  let mockTaskService: StubbedInstance<TaskService>
  beforeEach(() => {
    mockTaskService = stubInterface<TaskService>()
    taskFeature = createTaskFeature(mockTaskService)
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
      // When
      taskFeature.getTaskList()
      // Then
      expect(mockTaskService.getAll.callCount).toEqual(1)
    })
  })
  describe('# Add  a Task ', () => {
    it('should call taskService', () => {
      // Given
      const newTask: Task = { label: 'new Task' }
      // When
      taskFeature.addTask(newTask)
      // Then
      expect(mockTaskService.add.callCount).toEqual(1)
    })
  })
  describe('# Delete  a Task ', () => {
    it('should call taskService', () => {
      // Given
      // When
      taskFeature.deleteTask(1)
      // Then
      expect(mockTaskService.delete.callCount).toEqual(1)
    })
  })
})
