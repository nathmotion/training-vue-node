import { shallowMount } from '@vue/test-utils'
import App from '../App.vue'
import MainLayout from '../views/MainLayout/MainLayout.vue'

describe('#App', () => {
  it(' render child component Mainlayout', () => {
    // Given
    const wrapper = shallowMount(App)
    // When
    const childComponents = wrapper.findAllComponents(MainLayout)
    const taskLayout = wrapper.findComponent(MainLayout)
    // Then
    expect(childComponents).toHaveLength(1)
    expect(taskLayout.exists()).toBe(true)
  })
})
