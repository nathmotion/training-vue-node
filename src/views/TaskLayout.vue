<template>
  <div class="content">
    <h1>Welcome to the Supa Dupa Task Listano sponsa no tekio de okari shimasu!</h1>
    <task-form @add-task="addTask" />
    <task-list :tasks="tasks" @delete-task="deleteTask" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import taskFeature from '@/components/Tasks/task-feature'
import TaskForm from '../components/Tasks/TaskForm.vue'
import TaskList from '../components/Tasks/TaskList.vue'

const MainLayout = defineComponent({
  name: 'MainLayout',
  components: {
    TaskList,
    TaskForm
  },
  setup() {
    const { tasks, getTaskList, addTask, deleteTask } = taskFeature()

    return {
      tasks,
      getTaskList,
      addTask,
      deleteTask
    }
  }
})

export default MainLayout
</script>

<style scoped>
#app {
  font-family: 'Open Sans', 'Montserrat', 'Roboto', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  color: #bfbebb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 1.4em;
  margin-bottom: 5em;
}
</style>
