<template>
  <div id="todo-list">
    <p v-if="todo.length < 1" class="empty-table"> No task found!</p>
    <table v-else>
      <tbody>
      <tr v-for="task in todo" :key="task.id">
        <input type="checkbox"/>
        <td> {{ task.label }}</td>
        <button>X</button>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "todo-list",
  data() {
    return {}
  },
  props: {
    todo: Array,
  }
}
</script>

<style scoped>

</style>