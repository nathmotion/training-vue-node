<template>
  <div id="task-form">
    <form @submit.prevent="handleSubmit">
      <input v-model="task.label" type="text" class=" input-task"/>
      <button class="button-add">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "task-form",
  data() {
    return {
      task: {
        label: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('add-task', this.task)
    }
  }
}
</script>

<style scoped>
.button-add {
  cursor: pointer;
}

.input-task {
  font-family: 'Roboto', sans-serif;
}

#task-form {
  width: 50%;
  background-color: #FFFFFF;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;

}
</style>