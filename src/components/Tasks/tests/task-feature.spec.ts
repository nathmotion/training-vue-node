import taskFeatureFn, { TaskFeature } from '../task-feature'

describe(' #TaskFeature', () => {
  let taskFeature: TaskFeature

  beforeEach(() => {
    taskFeature = taskFeatureFn()
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
})
