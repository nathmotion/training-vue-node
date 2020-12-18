import { shallowMount } from '@vue/test-utils'
import TasksList from '@/components/Tasks/TaskList.vue'
import { Task } from '@/models'

describe('#TaskList', () => {
  it('should created a ul with a tasks if tasks list is not empty  ', () => {
    // Given
    const myTask: Task = { id: 0, label: 'test' }
    const mockTasks: Task[] = [myTask]
    const wrapper = shallowMount(TasksList, { props: { tasks: mockTasks } })
    // When
    const childrenList = wrapper.findAll('ul')
    const ulList = wrapper.find('ul')
    // Then
    expect(childrenList).toHaveLength(1)
    expect(ulList.classes()).toContain('task-list__task-items')
    expect(ulList.html()).toContain('task-items__task-item')
    expect(ulList.html()).toContain(myTask.label)
  })
  it('should not created ul list if tasks list is empty  ', () => {
    // Given
    const mockTasks: Task[] = []
    const wrapper = shallowMount(TasksList, { props: { tasks: mockTasks } })
    // When
    const childrenList = wrapper.findAll('ul')
    const emptyListHtml = wrapper.find('p')
    // Then
    expect(childrenList).toHaveLength(0)
    expect(emptyListHtml.classes()).toContain('task-list__empty-list')
  })
})
