import { shallowMount } from '@vue/test-utils'
import TaskLayout from '@/views/Tasks/TaskLayout.vue'
import TasksList from '@/components/Tasks/TaskList.vue'
import TaskForm from '@/components/Tasks/TaskForm.vue'

describe('#TaskLayout', () => {
  it('renders component TaskList', () => {
    // Given
    const wrapper = shallowMount(TaskLayout)
    // When
    const childComponentsList = wrapper.findAllComponents(TasksList)
    const taskList = wrapper.findComponent(TasksList)
    // Then
    expect(childComponentsList).toHaveLength(1)
    expect(taskList.exists()).toBe(true)
  })
  it('renders component TaskForm', () => {
    // Given
    const wrapper = shallowMount(TaskLayout)
    // When
    const childComponentsForm = wrapper.findAllComponents(TaskForm)
    const taskForm = wrapper.findComponent(TaskForm)
    // Then
    expect(childComponentsForm).toHaveLength(1)
    expect(taskForm.exists()).toBe(true)
  })
})
