<template>
  <div class="content">
    <h1>ToDo List</h1>
    <task-form @add-task="addTask" />
    <task-list :tasks="tasks" @delete-task="deleteTask" />
  </div>
</template>

<script lang="ts">
import { onMounted } from '@vue/composition-api'
import TaskList from './TaskList.vue'
import TaskForm from './TaskForm.vue'
import { taskService } from '../../services'

export default {
  components: {
    TaskList,
    TaskForm
  },
  setup() {
    let tasks = Array
    const addTask = async (label: any) => {
      const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0
      const id = lastId + 1
      const newTask = {
        ...label,
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
}
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
