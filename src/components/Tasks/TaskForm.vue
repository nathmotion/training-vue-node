<template>
  <div class="task-form">
    <form class="form" @submit.prevent="handleSubmit">
      <input class="input" type="text" v-model="task.label" placeholder="New task" />
      <span class="material-icons button-add" @click="handleSubmit">post_addgi</span>
    </form>
    <p v-if="errorEmptyLabel" class="error-message">Please enter a valid label.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import taskFeature from '@/components/Tasks/task-feature'

const TaskForm = defineComponent({
  props: {},
  setup(props, context) {
    const { task, invalidLabel, resetTask } = taskFeature()
    const errorEmptyLabel = ref(false)

    const handleSubmit = (): void => {
      if (invalidLabel()) {
        errorEmptyLabel.value = true
        return
      }
      context.emit('add-task', task)
      resetTask()
      errorEmptyLabel.value = false
    }

    return {
      errorEmptyLabel,
      task,
      invalidLabel,
      resetTask,
      handleSubmit
    }
  }
})

export default TaskForm
</script>

<style scoped>
.task-form {
  margin-bottom: 3em;
}

.form {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-add {
  align-content: center;
  cursor: pointer;
  margin-left: var(--space-sm);
  font-size: var(--font-size-lg);
}

.button-add:hover {
  color: black;
}

.input {
  background-color: #bfbebb;
  border: none;
  border-radius: var(--border-radius-input);
  padding: var(--space-sm);
}

.input:focus {
  outline: none;
}

.error-message {
  color: red;
  font-size: 75%;
  position: absolute;
}
</style>
