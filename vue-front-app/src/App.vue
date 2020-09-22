<template>
  <id id="app" class="small-container">
    <h1> TODO LIST </h1>

    <div class="content">
      <task-form @add-task="addTask"/>
      <task-list :tasks="tasks" @delete-task="deleteTask" @complete-task="completeTask"/>
    </div>
  </id>
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
    deleteTask(id) {
      this.tasks = this.tasks.filter(
          task => task.id !== id
      )
    },
    completeTask(task) {
      task.completed = !task.completed
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.small-container {
  max-width: 680px;
  display: inline-flex;
  flex-direction: column;
}
</style>
