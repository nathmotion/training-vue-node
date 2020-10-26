<template>
  <div class="task-layout__task-form">
    <form class="task-form__form" @submit.prevent="handleSubmit">
      <input class="form__input" type="text" v-model="task.label" placeholder="New task" />
      <i class="material-icons form__button-add" @click="handleSubmit">post_addgi</i>
    </form>
    <p v-if="errorEmptyLabel" class="form__error-message">Please enter a valid label.</p>
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
.task-layout__task-form {
  margin-bottom: 3em;
}

.task-form__form {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form__button-add {
  align-content: center;
  cursor: pointer;
  margin-left: var(--space-sm);
  font-size: var(--font-size-lg);
}

.form__button-add:hover {
  color: black;
}

.form__input {
  background-color: #bfbebb;
  border: none;
  border-radius: var(--border-radius-input);
  padding: var(--space-sm);
}

.form__input:focus {
  outline: none;
}

.form__error-message {
  color: red;
  font-size: 75%;
  position: absolute;
}
</style>
