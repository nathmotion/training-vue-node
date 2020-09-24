<template>
  <h1> ToDo List </h1>
  <div class="content">
    <task-form @add-task="addTask"/>
    <task-list :tasks="tasks" @delete-task="deleteTask"/>
  </div>
</template>

<script>

import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

export default {
  name: 'App',
  components: {
    TaskList,
    TaskForm,
  },
  data() {
    return {
      tasks: []
    }
  },

  methods: {
    addTask(task) {
      const lastId = this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id : 0
      const id = lastId + 1;
      const newTask = {...task, id}
      this.tasks = [...this.tasks, newTask]
    },
    deleteTask(idToDelete) {
      this.tasks = this.tasks.filter(
          ({ id }) => id !== idToDelete
      )
    },
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}

body {
  background-color: #ffe4c4;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
