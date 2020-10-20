<template>
  <div class="task-from">
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
#task-form {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  display: flex;
  align-items: center;
}

.button-add {
  align-content: center;
  cursor: pointer;
  margin-left: 0.4em;
  font-size: 1.8em;
}

.button-add:hover {
  color: black;
}

.input {
  background-color: #bfbebb;
  border: none;
  border-radius: 0.4em;
  padding: 0.6em;
  max-width: 55%;
}

.input:focus {
  outline: none;
}

.error-message {
  color: red;
  font-size: 75%;
}
</style>
