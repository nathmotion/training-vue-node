<template>
  <div class="content">
    <div class="task-layout__header">
      <h1>Welcome to the Supa Dupa Task Listano sponsa no tekio de okari shimasu!</h1>
    </div>
    <task-form @add-task="addTask" />
    <task-list :tasks="tasks" @delete-task="deleteTask" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import taskFeature from '@/components/Tasks/task-feature'
import TaskForm from '../../components/Tasks/TaskForm.vue'
import TaskList from '../../components/Tasks/TaskList.vue'

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
.task-layout__header {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

h1 {
  font-size: var(--font-size-lg);
}
</style>
