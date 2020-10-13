<template>
  <div class="content">
    <h1>ToDo List</h1>
    <task-form @add-task="addTask" />
    <task-list :tasks="tasks" @delete-task="deleteTask" />
  </div>
</template>

<script lang="ts">
import { Task } from '@/models'
import { defineComponent, onMounted } from 'vue'
import TaskForm from '../components/Tasks/TaskForm.vue'
import TaskList from '../components/Tasks/TaskList.vue'
import { taskService } from '../services'

const MainLayout = defineComponent({
  name: 'MainLayout',
  components: {
    TaskList,
    TaskForm
  },
  setup() {
    let tasks: Task[] = []
    const addTask = async (label: string) => {
      const id: number = Math.floor(Math.random() * 100) + 1
      const newTask = {
        label,
        id
      }
      tasks = await taskService.add(newTask)
    }

    const deleteTask = async (id: number) => {
      tasks = await taskService.delete(id)
    }
    const getTaskList = async () => {
      tasks = await taskService.getAll()
    }
    onMounted(getTaskList)

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
:root {
  --main-bg-color: #ffe4c4;
}

#app {
  font-family: 'Montserrat', 'Roboto', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 4em;
  display: flex;
  flex-direction: column;
}

body {
  background-color: var(--main-bg-color);
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
