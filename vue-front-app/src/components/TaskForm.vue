<template>
  <div id="task-form">
    <form @submit.prevent="handleSubmit">
      <div class="form-input-button">
        <input
          class="input-task"
          type="text"
          v-model="task.label"
          placeholder="New task"
        />
        <span class="material-icons button-add" @click="handleSubmit"
          >post_addgi</span
        >
      </div>
      <p class="error-message" v-if="error">
        ❗ Veuillez renseigner tous les champs ❗
      </p>
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
        label: "",
      },
    };
  },
  computed: {
    invalidLabel() {
      return this.task.label === "";
    },
  },
  methods: {
    handleSubmit() {
      if (this.invalidLabel) {
        this.error = true;
        return;
      }
      this.$emit("add-task", this.task);
      this.task.label = "";
      this.error = false;
    },
  },
};
</script>

<style scoped>
:root {
  --error-color-message: #d33c40;
}

.button-add {
  align-content: center;
  cursor: pointer;
  margin-left: 10px;
  font-size: 30px;
}

.input-task {
  display: block;
  margin: 0;
  padding: 0.8em 1.6em;
  color: inherit;
  border: none;
  border-radius: 0.4em;
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
  color: var(--error-color-message);
  font-size: 70%;
}

#task-form {
  width: 50%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 0.4em;
}
</style>
