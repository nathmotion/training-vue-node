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
    addTask(task) {
      const lastId = this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id : 0
      const id = lastId + 1
      const newTask = { ...task, id }
      this.tasks = [...this.tasks, newTask]
    },
    deleteTask(idToDelete) {
      this.tasks = this.tasks.filter(({ id }) => id !== idToDelete)
    }
  },
  async mounted() {
    this.tasks = (await axios.get('http://localhost:3001/tasks')).data
    console.info(this.tasks.length)
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
