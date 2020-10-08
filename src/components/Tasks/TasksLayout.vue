<template>
  <div class="content">
    <h1>ToDo List</h1>
    <task-form @add-task="addTask" />
    <task-list :tasks="tasks" @delete-task="deleteTask" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import TaskList from './TaskList.vue'
import TaskForm from './TaskForm.vue'
import { taskService } from '../../services'

@Options({
  components: {
    TaskList,
    TaskForm
  }
})
export default class TasksLayout extends Vue {
  tasks: Array = []

  async addTask(label: string) {
    const lastId = this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id : 0
    const id = lastId + 1
    const newTask = {
      ...label,
      id
    }
    this.tasks = await taskService.add(newTask)
  }

  async deleteTask(id: number) {
    this.tasks = await taskService.delete(id)
  }

  async mounted() {
    this.tasks = await taskService.getAll()
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
