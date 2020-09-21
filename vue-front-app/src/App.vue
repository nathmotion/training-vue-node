<template>
  <id id="app" class="small-container">
    <h1> TODO LIST </h1>
    <TaskForm @add-task="addTask"/>
    <TodoList :todo="todo"/>
  </id>
</template>

<script>

import TodoList from "@/components/TodoList";
import TaskForm from "@/components/TaskForm";

export default {
  name: 'App',
  components: {
    TodoList,
    TaskForm,
  },
  data() {
    return {
      todo: []
    }
  },

  methods: {
    addTask(task) {
      const lastId = this.todo.length > 0 ? this.todo[this.todo.length - 1].id : 0
      const id = lastId + 1;
      const newTask = {...task, id}
      this.todo = [...this.todo, newTask]
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
}
</style>
