import axios from 'axios'
import nock from 'nock'
import { Task } from '@/models'
import taskFeature from '../../components/Tasks/task-feature'

axios.defaults.adapter = require('axios/lib/adapters/http')

const taskMock: Task[] = [{ label: 'test 1' }, { label: 'test 2' }, { label: 'test 3' }]

describe('#Task Service ', () => {
  it(' GET : receive all tasks ', async () => {
    // Given
    const scope = nock('http://localhost:3001/tasks').get('/').reply(200, taskMock)

    const { tasks } = taskFeature()
    expect(tasks).toBe(taskMock)
    expect(scope.done()).toBe(true)
  })
})
