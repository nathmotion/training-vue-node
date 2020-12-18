import { shallowMount } from '@vue/test-utils'
import MainLayout from '../MainLayout.vue'
import TaskLayout from '../../Tasks/TaskLayout.vue'

describe('#MainLayout', () => {
  it('renders child component TaskLayout', () => {
    // Given
    const wrapper = shallowMount(MainLayout)
    // When
    const childComponents = wrapper.findAllComponents(TaskLayout)
    const taskLayout = wrapper.findComponent(TaskLayout)
    // Then
    expect(childComponents).toHaveLength(1)
    expect(taskLayout.exists()).toBe(true)
  })
})
