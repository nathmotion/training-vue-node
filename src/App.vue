<template>
  <div class="content">
    <h1>ToDo List</h1>
    <task-form @add-task="addTask" />
    <task-list :tasks="tasks" @delete-task="deleteTask" />
  </div>
</template>

<script>
import axios from 'axios'
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'

const $BASE_URL = 'http://localhost:3001/tasks'
export default {
  name: 'App',
  components: {
    TaskList,
    TaskForm
  },
  data() {
    return {
      tasks: []
    }
  },

  methods: {
    async addTask(label) {
      const lastId = this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id : 0
      const id = lastId + 1
      const newTask = { ...label, id }
      this.tasks = (await axios.post($BASE_URL, newTask)).data
    },
    async deleteTask(idToDelete) {
      this.tasks = (await axios.delete(`${$BASE_URL}/${idToDelete}`)).data
    }
  },
  async mounted() {
    this.tasks = (await axios.get($BASE_URL)).data
  }
}
</script>

<style>
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
