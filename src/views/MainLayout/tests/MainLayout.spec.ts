import { shallowMount } from '@vue/test-utils'
import MainLayout from '../MainLayout.vue'

describe('MainLayout', () => {
  it('renders a div', () => {
    const wrapper = shallowMount(MainLayout)
    console.info('rendu : ', wrapper.html())
  })
})
