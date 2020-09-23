<template>
  <div id="task-form">
    <form @submit.prevent="handleSubmit">
      <input v-model="task.label" type="text"/>
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
        completed: false,
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

#task-form {
  width: 50%;
  background-color: #FFFFFF;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
}
</style>