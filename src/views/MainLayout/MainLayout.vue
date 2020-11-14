<template>
  <TaskLayout />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TaskLayout from '../Tasks/TaskLayout.vue'

const MainLayout = defineComponent({
  name: 'MainLayout',
  components: {
    TaskLayout
  }
})

export default MainLayout
</script>

<style scoped></style>
