<template>
  <div class="content">
    <h1>ToDo List</h1>
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
  font-family: 'Montserrat', 'Roboto', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 4em;
  display: flex;
  flex-direction: column;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
