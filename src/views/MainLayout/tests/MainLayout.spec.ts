import { shallowMount } from '@vue/test-utils'
import MainLayout from '../MainLayout.vue'

describe('MainLayout', () => {
  it('renders a div', () => {
    const wrapper = shallowMount(MainLayout)
    expect(wrapper.text()).toContain('div')
  })
})
