<template>
  <div id="task-form">
    <form @submit.prevent="handleSubmit">
      <input class="input-task" type="text" v-model="task.label" placeholder="New task">
      <button class="button-add"><span class="material-icons">add_circle_outline</span></button>
      <p class="error-message" v-if="error">❗Please fill out all required fields</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "task-form",
  data() {
    return {
      error: false,
      task: {
        label: ''
      }
    }
  },
  computed: {
  invalidLabel() {
    return this.task.label === ''
    },
  },
  methods: {
    handleSubmit() {
      if (this.invalidLabel) {
        this.error = true
        return
      }
      this.$emit('add-task', this.task)
      this.task.label = ''
      this.error = false
    }
  }
}
</script>

<style scoped>
.button-add {
  align-content: center;
  cursor: pointer;
}

.input-task {
  font-family: 'Montserrat', sans-serif;
}

.error-message {
    color: #d33c40;
    font-size: 70%;
}

#task-form {
  width: 50%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;

}
</style>