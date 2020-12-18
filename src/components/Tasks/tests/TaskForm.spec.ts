import { shallowMount } from '@vue/test-utils'
import TaskForm from '@/components/Tasks/TaskForm.vue'

describe('#TaskForm', () => {
  it('should have created form ', () => {
    // Given
    const wrapper = shallowMount(TaskForm)
    // When
    const childComponentsForm = wrapper.findAll('form')
    // Then
    expect(childComponentsForm).toHaveLength(1)
  })
})
