<template>
  <div class="task-layout__task-list">
    <p v-if="tasks.length < 1" class="empty-list">No task found!</p>
    <ul v-else class="task">
      <li v-for="task in tasks" :key="task.id">
        <div class="task-layout__task-item">
          <div class="task-part-left">
            <label>{{ task.label }}</label>
          </div>
          <i class="material-icons button-delete" @click="$emit('delete-task', task.id)">delete</i>
        </div>
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
.task-layout__task-list {
  width: 50%;
  margin: auto;
}
.task-layout__task-item {
  margin: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  background-color: #bfbebb;
  color: var(--font-color-secondary);
}
.task-part-left {
  flex: 1 1 0;
}
.empty-list {
  margin-top: 3em;
}

.button-delete {
  color: var(--font-color-secondary);
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
