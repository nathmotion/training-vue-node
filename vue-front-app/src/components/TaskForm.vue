<template>
  <div id="task-form">
    <form @submit.prevent="handleSubmit">
      <input v-model="task.label" type="text"/>
      <button>Add</button>
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
/*form {
  margin-bottom: 2rem;
}

input {
  margin-right: 2rem;
}*/
#task-form {
  width: 50%;
  background-color: #FFFFFF;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;

}
</style>