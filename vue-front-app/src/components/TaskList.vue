<template>
  <div id="task-list">
    <p v-if="tasks.length < 1" class="empty-table"> No task found!</p>
    <table v-else>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <input type="checkbox"/>
          <td> {{ task.label }}</td>
          <td>
            <button @click="$emit('delete-task', task.id)">X</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "task-list",
  data() {
    return {}
  },
  props: {
    tasks: Array,
  }
}
</script>

<style scoped>

</style>