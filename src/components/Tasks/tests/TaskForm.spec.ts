import { shallowMount } from '@vue/test-utils'
import TaskForm from '@/components/Tasks/TaskForm.vue'

describe('#TaskForm', () => {
  it('should have created form ', () => {
    // Given
    const wrapper = shallowMount(TaskForm)
    // When
    const childComponentsList = wrapper.findAll('form')
    // Then
    expect(childComponentsList).toHaveLength(1)
  })
})
