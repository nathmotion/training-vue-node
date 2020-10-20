<template>
  <div class="task-list">
    <p v-if="tasks.length < 1" class="empty-list">No task found!</p>
    <ul v-else class="task">
      <li v-for="task in tasks" :key="task.id" class="task-item">
        <div class="task-part-left">
          <label>{{ task.label }}</label>
        </div>
        <i class="material-icons button-delete" @click="$emit('delete-task', task.id)">delete</i>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const TaskList = defineComponent({
  name: 'TaskList',
  props: {
    tasks: Array
  }
})

export default TaskList
</script>

<style scoped>
.task li {
  display: flex;
  align-items: center;
  border: 0.125em solid #bfbebb;
  border-radius: 0.4em;
  color: #bfbebb;
  font-size: 0.85em;
  justify-content: space-between;
  margin-top: 0.5em;
  padding: 0.1em 0.5em 0.1em 0.5em;
  width: 200%;
}

.empty-list {
  margin-top: 3em;
}

.button-delete {
  color: #bfbebb;
  font-size: 1.3em;
  margin-bottom: 0.1em;
  margin-top: 0.1em;
  transition: 0.4s linear;
}

.button-delete:hover {
  color: red;
  cursor: pointer;
}
</style>
