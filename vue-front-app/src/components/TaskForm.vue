<template>
  <div id="task-form">
    <form @submit.prevent="handleSubmit">
      <div class="form-input-button">
        <input class="input-task" type="text" v-model="task.label" placeholder="New task">
        <span class="material-icons button-add" @click="handleSubmit">post_addgi</span>
      </div>
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
  margin-left: 10px;
  font-size: 30px;
}

.input-task {
  font-family: 'Montserrat', sans-serif;
  display: block;
  margin: 0;
  padding: 0.8rem 1.6rem;
  color: inherit;
  border: none;
  border-radius: 0.4rem;
}

.input-task:focus {
  outline: none;
}

.form-input-button {
  display: flex;
  justify-content: center;
  align-items: center;
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