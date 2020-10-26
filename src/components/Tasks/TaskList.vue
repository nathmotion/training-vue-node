<template>
  <div class="task-layout__task-list">
    <p v-if="tasks.length < 1" class="task-list__empty-list">No task found!</p>
    <ul v-else class="task-list__task-items">
      <li v-for="task in tasks" :key="task.id">
        <div class="task-items__task-item">
          <div class="task-item__task-part-left">
            <label>{{ task.label }}</label>
          </div>
          <i class="material-icons task-item__button-delete" @click="$emit('delete-task', task.id)">delete</i>
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

.task-items__task-item {
  margin: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  color: var(--font-color-secondary);
  border-radius: 0.4em;
  border: var(--font-color-secondary) solid 1px;
}

.task-item__task-part-left {
  flex: 1 1 0;
}

.task-list__empty-list {
  margin-top: 3em;
}

.task-item__button-delete {
  color: var(--font-color-secondary);
  font-size: 1.3em;
  margin-bottom: 0.1em;
  margin-top: 0.1em;
  transition: 0.4s linear;
}

.task-item__button-delete:hover {
  color: red;
  cursor: pointer;
}
</style>
